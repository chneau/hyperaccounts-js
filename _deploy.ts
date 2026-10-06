import { $ } from "bun";
import z from "zod";
import { dependencies, name } from "./package.json";

await $`rm -rf dist`;
await $`bun build --outfile=dist/index.js --target=node --production --no-bundle index.ts`;
// TypeScript 7 removed --outFile, and naming files on the command line skips
// tsconfig.json (TS5112), so the options it would have contributed are passed here.
await $`tsc --ignoreConfig --declaration --emitDeclarationOnly --outDir dist --module preserve --moduleResolution bundler --target esnext --lib esnext --types bun --skipLibCheck index.ts`;
await $`cp README.md dist/`;

// A release without declarations still publishes fine while `types` points at a
// file that is not there, so check before packing.
if (!(await Bun.file("dist/index.d.ts").exists())) {
	throw new Error("dist/index.d.ts was not emitted — refusing to publish");
}

const vSchema = z.object({ version: z.string() });
const mmpSchema = z.tuple([z.number(), z.number(), z.number()]);
const latest = await fetch(`https://registry.npmjs.org/${name}/latest`)
	.then((x) => x.json().then((x) => vSchema.parse(x).version))
	.catch(() => "0.0.0");
const [major, minor, patch] = mmpSchema.parse(latest.split(".").map(Number));
const version = `${major}.${minor}.${patch + 1}`;

await Bun.write(
	"dist/package.json",
	JSON.stringify({
		name,
		version,
		main: "index.js",
		types: "index.d.ts",
		dependencies,
	}),
);
await $`bun publish --access public`.cwd("dist");
await $`rm -rf dist`;
