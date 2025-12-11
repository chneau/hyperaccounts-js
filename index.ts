import { Axios } from "axios";
import z from "zod";

const HAConfigSchema = z.object({
	baseURL: z.url(),
	authToken: z.string().min(1),
});
type HAConfig = z.infer<typeof HAConfigSchema>;

const ReadApiStatusInputSchema = z.void();
type ReadApiStatusInput = z.infer<typeof ReadApiStatusInputSchema>;
const ReadApiStatusOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			apiVersion: z.string().optional(),
			sageVersion: z.string().optional(),
			companyName: z.string().optional(),
			sdoStatusOk: z.boolean().optional(),
			odbcStatusOk: z.boolean().optional(),
		})
		.optional(),
	message: z.string().optional(),
});
type ReadApiStatusOutput = z.infer<typeof ReadApiStatusOutputSchema>;
const ReadApiVersionInputSchema = z.void();
type ReadApiVersionInput = z.infer<typeof ReadApiVersionInputSchema>;
const ReadApiVersionOutputSchema = z.string();
type ReadApiVersionOutput = z.infer<typeof ReadApiVersionOutputSchema>;
const ReadCompanySettingsInputSchema = z.void();
type ReadCompanySettingsInput = z.infer<typeof ReadCompanySettingsInputSchema>;
const ReadCompanySettingsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			allowNegativeStock: z.boolean().optional(),
			budgetingType: z.number().optional(),
			companyId: z.string().optional(),
			countryCode: z.string().optional(),
			creditRef: z.string().optional(),
			defaultChart: z.number().optional(),
			email: z.string().optional(),
			fax: z.string().optional(),
			enableProjectCosting: z.boolean().optional(),
			financialYearMonth: z.number().optional(),
			financialYearYear: z.number().optional(),
			fixedAsssetsLabel: z.string().optional(),
			flatRateVatPercent: z.number().optional(),
			lastAuditCheck: z.string().optional(),
			lastBackup: z.string().optional(),
			lastRestoreDate: z.string().optional(),
			lastClearAudit: z.string().optional(),
			lastMonthEnd: z.null().optional(),
			name: z.string().optional(),
			programMajorVersion: z.number().optional(),
			programMinorVersion: z.number().optional(),
			programBuildVersion: z.number().optional(),
			programBugfixVersion: z.number().optional(),
			recordCreateDate: z.string().optional(),
			recordModifyDate: z.string().optional(),
			telephone: z.string().optional(),
			vatCashFlag: z.number().optional(),
			vatRegNumber: z.string().optional(),
			vatRegisteredFlag: z.boolean().optional(),
			lockDate: z.string().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCompanySettingsOutput = z.infer<
	typeof ReadCompanySettingsOutputSchema
>;
const ReadRdaEnabledInputSchema = z.void();
type ReadRdaEnabledInput = z.infer<typeof ReadRdaEnabledInputSchema>;
const ReadRdaEnabledOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			isRDAEnabled: z.boolean().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadRdaEnabledOutput = z.infer<typeof ReadRdaEnabledOutputSchema>;
const ReadExchangeRatesInputSchema = z.void();
type ReadExchangeRatesInput = z.infer<typeof ReadExchangeRatesInputSchema>;
const ReadExchangeRatesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.number().optional(),
				code: z.string().optional(),
				emuMember: z.number().optional(),
				exchangeRate: z.number().optional(),
				locked: z.number().optional(),
				majorUnit: z.string().optional(),
				minorUnit: z.string().optional(),
				name: z.string().optional(),
				createdDate: z.string().optional(),
				modifiedDate: z.string().optional(),
				symbol: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadExchangeRatesOutput = z.infer<typeof ReadExchangeRatesOutputSchema>;
const UpdateExchangeRateInputSchema = z.object({
	id: z.number().optional(),
	code: z.string().optional(),
	emuMember: z.number().optional(),
	exchangeRate: z.number().optional(),
	majorUnit: z.string().optional(),
	minorUnit: z.string().optional(),
	name: z.string().optional(),
});
type UpdateExchangeRateInput = z.infer<typeof UpdateExchangeRateInputSchema>;
const UpdateExchangeRateOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type UpdateExchangeRateOutput = z.infer<typeof UpdateExchangeRateOutputSchema>;
const ReadCountriesInputSchema = z.void();
type ReadCountriesInput = z.infer<typeof ReadCountriesInputSchema>;
const ReadCountriesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				code: z.string().optional(),
				name: z.string().optional(),
				euMember: z.boolean().optional(),
				createdDate: z.string().optional(),
				modifiedDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadCountriesOutput = z.infer<typeof ReadCountriesOutputSchema>;
const ReadCouriersInputSchema = z.void();
type ReadCouriersInput = z.infer<typeof ReadCouriersInputSchema>;
const ReadCouriersOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.number().optional(),
				name: z.string().optional(),
				www: z.string().optional(),
				search: z.string().optional(),
				createdDate: z.string().optional(),
				modifiedDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadCouriersOutput = z.infer<typeof ReadCouriersOutputSchema>;
const ReadNominalsInputSchema = z.void();
type ReadNominalsInput = z.infer<typeof ReadNominalsInputSchema>;
const ReadNominalsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				name: z.string().optional(),
				type: z.number().optional(),
				balance: z.number().optional(),
				inactiveFlag: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadNominalsOutput = z.infer<typeof ReadNominalsOutputSchema>;
const ReadTaxCodesInputSchema = z.void();
type ReadTaxCodesInput = z.infer<typeof ReadTaxCodesInputSchema>;
const ReadTaxCodesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				index: z.number().optional(),
				description: z.string().optional(),
				rate: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadTaxCodesOutput = z.infer<typeof ReadTaxCodesOutputSchema>;
const ReadControlAccountsInputSchema = z.void();
type ReadControlAccountsInput = z.infer<typeof ReadControlAccountsInputSchema>;
const ReadControlAccountsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			accrualsNo: z.number().optional(),
			badDebtsNo: z.number().optional(),
			creditorsNo: z.number().optional(),
			debtorsNo: z.number().optional(),
			defBankNo: z.number().optional(),
			defFinanceNo: z.number().optional(),
			defRevalueNo: z.number().optional(),
			defSalesNo: z.number().optional(),
			manualAdjustmentsNo: z.number().optional(),
			mispostingsNo: z.number().optional(),
			pDiscountNo: z.number().optional(),
			plYearAcNo: z.number().optional(),
			prepaymentsNo: z.number().optional(),
			pTaxNo: z.number().optional(),
			sDiscountNo: z.number().optional(),
			sTaxNo: z.number().optional(),
			suspenseNo: z.number().optional(),
			uniqueNo: z.number().optional(),
			vatLiabilityNo: z.number().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadControlAccountsOutput = z.infer<
	typeof ReadControlAccountsOutputSchema
>;
const GetPaymentMethodsInputSchema = z.void();
type GetPaymentMethodsInput = z.infer<typeof GetPaymentMethodsInputSchema>;
const GetPaymentMethodsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.number().optional(),
				description: z.string().optional(),
				isOnline: z.number().optional(),
				isReadonly: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type GetPaymentMethodsOutput = z.infer<typeof GetPaymentMethodsOutputSchema>;
const ReadDepartmentsInputSchema = z.void();
type ReadDepartmentsInput = z.infer<typeof ReadDepartmentsInputSchema>;
const ReadDepartmentsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				reference: z.string().optional(),
				name: z.string().optional(),
				id: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadDepartmentsOutput = z.infer<typeof ReadDepartmentsOutputSchema>;
const ReadChartOfAccountsInputSchema = z.void();
type ReadChartOfAccountsInput = z.infer<typeof ReadChartOfAccountsInputSchema>;
const ReadChartOfAccountsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				name: z.string().optional(),
				low: z.string().optional(),
				high: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadChartOfAccountsOutput = z.infer<
	typeof ReadChartOfAccountsOutputSchema
>;
const SearchCustomerInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchCustomerInput = z.infer<typeof SearchCustomerInputSchema>;
const SearchCustomerOutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				name: z.string().optional(),
				balance: z.number().optional(),
				currency: z.string().optional(),
				contactName: z.string().optional(),
				telephoneNumber: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				delName: z.string().optional(),
				delAddress1: z.string().optional(),
				delAddress2: z.string().optional(),
				delAddress3: z.string().optional(),
				delAddress4: z.string().optional(),
				delAddress5: z.string().optional(),
				accountOnHold: z.boolean().optional(),
				accountStatusText: z.string().optional(),
				averagePayDays: z.number().optional(),
				creditLimit: z.number().optional(),
				terms: z.string().optional(),
				bacsRef: z.string().optional(),
				iban: z.string().optional(),
				bicSwift: z.string().optional(),
				rollNumber: z.string().optional(),
				additionalRef1: z.string().optional(),
				additionalRef2: z.string().optional(),
				additionalRef3: z.string().optional(),
				paymentType: z.number().optional(),
				paymentTypeName: z.null().optional(),
				turnoverYtd: z.number().optional(),
				priorYear: z.number().optional(),
				vatRegNumber: z.string().optional(),
				eoriNumber: z.string().optional(),
				lastPaymentDate: z.string().optional(),
				lastInvDate: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				telephone2: z.string().optional(),
				fax: z.string().optional(),
				webAddress: z.string().optional(),
				countryCode: z.string().optional(),
				email: z.string().optional(),
				email2: z.string().optional(),
				email3: z.string().optional(),
				email4: z.string().optional(),
				email5: z.string().optional(),
				email6: z.string().optional(),
				defTaxCode: z.string().optional(),
				defNomCode: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				analysis4: z.string().optional(),
				analysis5: z.string().optional(),
				analysis6: z.string().optional(),
				deptNumber: z.number().optional(),
				inactiveAccount: z.number().optional(),
				settleDueDays: z.number().optional(),
				paymentDueDays: z.number().optional(),
				paymentDueFrom: z.number().optional(),
				creditPosition: z.string().optional(),
				discountRate: z.number().optional(),
				discountType: z.number().optional(),
				priceListRef: z.string().optional(),
				tradeContact: z.string().optional(),
				companyRegistrationNumber: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchCustomerOutput = z.infer<typeof SearchCustomerOutputSchema>;
const ReadCustomerInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerInput = z.infer<typeof ReadCustomerInputSchema>;
const ReadCustomerOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			accountRef: z.string().optional(),
			name: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			countryCode: z.string().optional(),
			contactName: z.string().optional(),
			telephone: z.string().optional(),
			deliveryName: z.string().optional(),
			deliveryAddress1: z.string().optional(),
			deliveryAddress2: z.string().optional(),
			deliveryAddress3: z.string().optional(),
			deliveryAddress4: z.string().optional(),
			deliveryAddress5: z.string().optional(),
			email: z.string().optional(),
			email2: z.string().optional(),
			email3: z.string().optional(),
			email4: z.string().optional(),
			email5: z.string().optional(),
			email6: z.string().optional(),
			eoriNumber: z.string().optional(),
			defNomCode: z.string().optional(),
			defNomCodeUseDefault: z.boolean().optional(),
			defTaxCode: z.number().optional(),
			defTaxCodeUseDefault: z.boolean().optional(),
			terms: z.string().optional(),
			termsAgreed: z.boolean().optional(),
			turnoverYtd: z.number().optional(),
			currency: z.number().optional(),
			bankAccountName: z.string().optional(),
			bankSortCode: z.string().optional(),
			bankAccountNumber: z.string().optional(),
			bacsRef: z.string().optional(),
			iban: z.string().optional(),
			bicSwift: z.string().optional(),
			rollNumber: z.string().optional(),
			additionalRef1: z.string().optional(),
			additionalRef2: z.string().optional(),
			additionalRef3: z.string().optional(),
			paymentType: z.number().optional(),
			sendInvoicesElectronically: z.boolean().optional(),
			sendLettersElectronically: z.boolean().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			analysis4: z.string().optional(),
			analysis5: z.string().optional(),
			analysis6: z.string().optional(),
			deptNumber: z.number().optional(),
			paymentDueDays: z.number().optional(),
			paymentDueFrom: z.number().optional(),
			accountStatus: z.number().optional(),
			inactiveAccount: z.boolean().optional(),
			onHold: z.boolean().optional(),
			creditLimit: z.number().optional(),
			balance: z.number().optional(),
			vatNumber: z.string().optional(),
			memo: z.string().optional(),
			discountRate: z.number().optional(),
			discountType: z.number().optional(),
			www: z.string().optional(),
			priceListRef: z.string().optional(),
			tradeContact: z.string().optional(),
			telephone2: z.string().optional(),
			fax: z.string().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCustomerOutput = z.infer<typeof ReadCustomerOutputSchema>;
const CreateCustomerInputSchema = z.object({
	name: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	countryCode: z.string().optional(),
	contactName: z.string().optional(),
	telephone: z.string().optional(),
	deliveryAddress1: z.string().optional(),
	deliveryAddress2: z.string().optional(),
	deliveryAddress3: z.string().optional(),
	deliveryAddress4: z.string().optional(),
	deliveryAddress5: z.string().optional(),
	email: z.string().optional(),
	defNomCode: z.string().optional(),
	defTaxCode: z.number().optional(),
	terms: z.string().optional(),
	termsAgreed: z.boolean().optional(),
	currency: z.number().optional(),
	paymentType: z.number().optional(),
	sendInvoicesElectronically: z.boolean().optional(),
	sendLettersElectronically: z.boolean().optional(),
	analysis1: z.string().optional(),
	analysis2: z.string().optional(),
	analysis3: z.string().optional(),
	deptNumber: z.number().optional(),
	paymentDueDays: z.number().optional(),
	inactiveAccount: z.boolean().optional(),
});
type CreateCustomerInput = z.infer<typeof CreateCustomerInputSchema>;
const CreateCustomerOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type CreateCustomerOutput = z.infer<typeof CreateCustomerOutputSchema>;
const UpdateCustomerInputSchema = z.object({
	accountRef: z.string().optional(),
	name: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	countryCode: z.string().optional(),
	contactName: z.string().optional(),
	telephone: z.string().optional(),
});
type UpdateCustomerInput = z.infer<typeof UpdateCustomerInputSchema>;
const UpdateCustomerOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type UpdateCustomerOutput = z.infer<typeof UpdateCustomerOutputSchema>;
const ReadCustomerAgedBalancesInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerAgedBalancesInput = z.infer<
	typeof ReadCustomerAgedBalancesInputSchema
>;
const ReadCustomerAgedBalancesOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			total: z.number().optional(),
			current: z.number().optional(),
			future: z.number().optional(),
			period30Days: z.number().optional(),
			period60Days: z.number().optional(),
			period90Days: z.number().optional(),
			older: z.number().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCustomerAgedBalancesOutput = z.infer<
	typeof ReadCustomerAgedBalancesOutputSchema
>;
const ReadCustomerAddressInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerAddressInput = z.infer<typeof ReadCustomerAddressInputSchema>;
const ReadCustomerAddressOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			accountRef: z.string().optional(),
			addressNumber: z.number().optional(),
			addressLine1: z.string().optional(),
			addressLine2: z.string().optional(),
			addressLine3: z.string().optional(),
			addressLine4: z.string().optional(),
			addressLine5: z.string().optional(),
			countryCode: z.string().optional(),
			role: z.string().optional(),
			contact: z.string().optional(),
			description: z.string().optional(),
			email: z.string().optional(),
			fax: z.string().optional(),
			name: z.string().optional(),
			notes: z.string().optional(),
			telephone: z.string().optional(),
			telephone2: z.string().optional(),
			vatNumber: z.string().optional(),
			addressType: z.number().optional(),
			taxCode: z.number().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCustomerAddressOutput = z.infer<
	typeof ReadCustomerAddressOutputSchema
>;
const CreateCustomerAddressInputSchema = z.object({
	accountRef: z.string().optional(),
	addressNumber: z.number().optional(),
	addressLine1: z.string().optional(),
	addressLine2: z.string().optional(),
	addressLine3: z.string().optional(),
	addressLine4: z.string().optional(),
	addressLine5: z.string().optional(),
	countryCode: z.string().optional(),
	role: z.string().optional(),
	contact: z.string().optional(),
	description: z.string().optional(),
	email: z.string().optional(),
	fax: z.string().optional(),
	name: z.string().optional(),
	notes: z.string().optional(),
	telephone: z.string().optional(),
	telephone2: z.string().optional(),
	taxCode: z.number().optional(),
});
type CreateCustomerAddressInput = z.infer<
	typeof CreateCustomerAddressInputSchema
>;
const CreateCustomerAddressOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateCustomerAddressOutput = z.infer<
	typeof CreateCustomerAddressOutputSchema
>;
const UpdateCustomerAddressInputSchema = z.object({
	accountRef: z.string().optional(),
	addressNumber: z.number().optional(),
	addressLine1: z.string().optional(),
	addressLine2: z.string().optional(),
	addressLine3: z.string().optional(),
	addressLine4: z.string().optional(),
	addressLine5: z.string().optional(),
	countryCode: z.string().optional(),
	role: z.string().optional(),
	contact: z.string().optional(),
	description: z.string().optional(),
	email: z.string().optional(),
	fax: z.string().optional(),
	name: z.string().optional(),
});
type UpdateCustomerAddressInput = z.infer<
	typeof UpdateCustomerAddressInputSchema
>;
const UpdateCustomerAddressOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.boolean().optional(),
	message: z.null().optional(),
});
type UpdateCustomerAddressOutput = z.infer<
	typeof UpdateCustomerAddressOutputSchema
>;
const SearchCustomerAddressInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchCustomerAddressInput = z.infer<
	typeof SearchCustomerAddressInputSchema
>;
const SearchCustomerAddressOutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				addressNumber: z.number().optional(),
				addressLine1: z.string().optional(),
				addressLine2: z.string().optional(),
				addressLine3: z.string().optional(),
				addressLine4: z.string().optional(),
				addressLine5: z.string().optional(),
				countryCode: z.string().optional(),
				role: z.string().optional(),
				contact: z.string().optional(),
				description: z.string().optional(),
				email: z.string().optional(),
				fax: z.string().optional(),
				name: z.string().optional(),
				notes: z.string().optional(),
				telephone: z.string().optional(),
				telephone2: z.string().optional(),
				vatNumber: z.string().optional(),
				taxCode: z.number().optional(),
				addressTypeName: z.string().optional(),
				addressType: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchCustomerAddressOutput = z.infer<
	typeof SearchCustomerAddressOutputSchema
>;
const SearchSupplierInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchSupplierInput = z.infer<typeof SearchSupplierInputSchema>;
const SearchSupplierOutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				name: z.string().optional(),
				balance: z.number().optional(),
				currency: z.string().optional(),
				contactName: z.string().optional(),
				telephoneNumber: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				accountOnHold: z.boolean().optional(),
				accountStatusText: z.string().optional(),
				creditLimit: z.number().optional(),
				terms: z.string().optional(),
				turnoverYtd: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				telephone2: z.string().optional(),
				fax: z.string().optional(),
				webAddress: z.string().optional(),
				countryCode: z.string().optional(),
				email: z.string().optional(),
				email2: z.string().optional(),
				email3: z.string().optional(),
				defTaxCode: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				deptNumber: z.number().optional(),
				inactiveAccount: z.number().optional(),
				discountRate: z.number().optional(),
				paymentDueDays: z.number().optional(),
				paymentDueFrom: z.number().optional(),
				paymentMethodId: z.number().optional(),
				defNomCode: z.string().optional(),
				settleDueDays: z.number().optional(),
				creditPosition: z.string().optional(),
				tradeContact: z.string().optional(),
				vatRegNumber: z.string().optional(),
				eoriNumber: z.string().optional(),
				companyRegistrationNumber: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchSupplierOutput = z.infer<typeof SearchSupplierOutputSchema>;
const ReadSupplierInputSchema = z.object({
	supplier: z.string(),
});
type ReadSupplierInput = z.infer<typeof ReadSupplierInputSchema>;
const ReadSupplierOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			accountRef: z.string().optional(),
			name: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			contactName: z.string().optional(),
			telephone: z.string().optional(),
			telephone2: z.string().optional(),
			terms: z.string().optional(),
			defaultNominalCode: z.string().optional(),
			discountRate: z.number().optional(),
			paymentMethodId: z.number().optional(),
			paymentDueDays: z.number().optional(),
			paymentDueFrom: z.number().optional(),
			countryCode: z.string().optional(),
			email: z.string().optional(),
			email2: z.string().optional(),
			email3: z.string().optional(),
			currency: z.number().optional(),
			inactiveFlag: z.boolean().optional(),
			balance: z.number().optional(),
			creditLimit: z.number().optional(),
			accountStatus: z.number().optional(),
			onHold: z.boolean().optional(),
			bankAccountName: z.string().optional(),
			bankSortCode: z.string().optional(),
			bankAccountNumber: z.string().optional(),
			defaultTaxCode: z.number().optional(),
			tradeContact: z.string().optional(),
			vatNumber: z.string().optional(),
			eoriNumber: z.string().optional(),
			termsAgreed: z.boolean().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadSupplierOutput = z.infer<typeof ReadSupplierOutputSchema>;
const CreateSupplierInputSchema = z.object({
	name: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	contactName: z.string().optional(),
	telephone: z.string().optional(),
	terms: z.string().optional(),
	defaultNominalCode: z.string().optional(),
	countryCode: z.string().optional(),
	email: z.string().optional(),
	currency: z.number().optional(),
});
type CreateSupplierInput = z.infer<typeof CreateSupplierInputSchema>;
const CreateSupplierOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type CreateSupplierOutput = z.infer<typeof CreateSupplierOutputSchema>;
const UpdateSupplierInputSchema = z.object({
	accountRef: z.string().optional(),
	name: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	contactName: z.string().optional(),
	telephone: z.string().optional(),
	terms: z.string().optional(),
	defaultNominalCode: z.string().optional(),
	discountRate: z.number().optional(),
	paymentMethodId: z.number().optional(),
	paymentDueDays: z.number().optional(),
	paymentDueFrom: z.number().optional(),
	countryCode: z.string().optional(),
	email: z.string().optional(),
	email2: z.string().optional(),
	email3: z.string().optional(),
	currency: z.number().optional(),
	inactiveFlag: z.boolean().optional(),
	balance: z.number().optional(),
	bankAccountName: z.string().optional(),
	bankSortCode: z.string().optional(),
	bankAccountNumber: z.string().optional(),
	defaultTaxCode: z.number().optional(),
	vatNumber: z.string().optional(),
});
type UpdateSupplierInput = z.infer<typeof UpdateSupplierInputSchema>;
const UpdateSupplierOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type UpdateSupplierOutput = z.infer<typeof UpdateSupplierOutputSchema>;
const SearchProductInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchProductInput = z.infer<typeof SearchProductInputSchema>;
const SearchProductOutputSchema = z.object({
	results: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				description: z.string().optional(),
				salesNominalCode: z.string().optional(),
				taxCode: z.string().optional(),
				unitOfSale: z.string().optional(),
				qtyInStock: z.number().optional(),
				qtyOnOrder: z.number().optional(),
				qtyAllocated: z.number().optional(),
				salesPrice: z.number().optional(),
				supplierPartNumber: z.string().optional(),
				purchaseNominalCode: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				supplierRef: z.string().optional(),
				itemType: z.number().optional(),
				webCategoryA: z.string().optional(),
				webCategoryB: z.string().optional(),
				webCategoryC: z.string().optional(),
				barcode: z.string().optional(),
				instrastatCommCode: z.string().optional(),
				commodityCode: z.string().optional(),
				reorderLevel: z.number().optional(),
				reorderQty: z.number().optional(),
				webPublish: z.number().optional(),
				webSpecialOffer: z.number().optional(),
				webDetails: z.string().optional(),
				webDescription: z.string().optional(),
				webImage: z.string().optional(),
				inactiveFlag: z.number().optional(),
				unitWeight: z.number().optional(),
				deptNumber: z.number().optional(),
				stockCat: z.number().optional(),
				stockCatName: z.string().optional(),
				qtyLastStockTake: z.number().optional(),
				stockTakeDate: z.string().optional(),
				location: z.string().optional(),
				assemblyLevel: z.number().optional(),
				lastCostPrice: z.number().optional(),
				lastDiscPurchasePrice: z.number().optional(),
				countryCodeOfOrigin: z.string().optional(),
				discALevel1Rate: z.number().optional(),
				discALevel2Rate: z.number().optional(),
				discALevel3Rate: z.number().optional(),
				discALevel4Rate: z.number().optional(),
				discALevel5Rate: z.number().optional(),
				discALevel6Rate: z.number().optional(),
				discALevel7Rate: z.number().optional(),
				discALevel8Rate: z.number().optional(),
				discALevel9Rate: z.number().optional(),
				discALevel10Rate: z.number().optional(),
				discALevel1Qty: z.number().optional(),
				discALevel2Qty: z.number().optional(),
				discALevel3Qty: z.number().optional(),
				discALevel4Qty: z.number().optional(),
				discALevel5Qty: z.number().optional(),
				discALevel6Qty: z.number().optional(),
				discALevel7Qty: z.number().optional(),
				discALevel8Qty: z.number().optional(),
				discALevel9Qty: z.number().optional(),
				discALevel10Qty: z.number().optional(),
				component1Code: z.string().optional(),
				component2Code: z.string().optional(),
				component3Code: z.string().optional(),
				component4Code: z.string().optional(),
				component5Code: z.string().optional(),
				component6Code: z.string().optional(),
				component7Code: z.string().optional(),
				component8Code: z.string().optional(),
				component9Code: z.string().optional(),
				component10Code: z.string().optional(),
				component1Qty: z.number().optional(),
				component2Qty: z.number().optional(),
				component3Qty: z.number().optional(),
				component4Qty: z.number().optional(),
				component5Qty: z.number().optional(),
				component6Qty: z.number().optional(),
				component7Qty: z.number().optional(),
				component8Qty: z.number().optional(),
				component9Qty: z.number().optional(),
				component10Qty: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchProductOutput = z.infer<typeof SearchProductOutputSchema>;
const ReadProductInputSchema = z.object({
	stockCode: z.string(),
});
type ReadProductInput = z.infer<typeof ReadProductInputSchema>;
const ReadProductOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			stockCode: z.string().optional(),
			description: z.string().optional(),
			itemType: z.number().optional(),
			nominalCode: z.string().optional(),
			unitOfSale: z.string().optional(),
			deptNumber: z.number().optional(),
			custom1: z.string().optional(),
			custom2: z.string().optional(),
			custom3: z.string().optional(),
			deletedFlag: z.boolean().optional(),
			inactiveFlag: z.boolean().optional(),
			salesPrice: z.number().optional(),
			unitWeight: z.number().optional(),
			taxCode: z.number().optional(),
			qtyAllocated: z.number().optional(),
			qtyInStock: z.number().optional(),
			qtyOnOrder: z.number().optional(),
			purchaseRef: z.string().optional(),
			stockTakeDate: z.string().optional(),
			stockCat: z.number().optional(),
			supplierPartNumber: z.string().optional(),
			averageCostPrice: z.number().optional(),
			location: z.string().optional(),
			purchaseNominalCode: z.string().optional(),
			lastPurchasePrice: z.number().optional(),
			lastDiscPurchasePrice: z.number().optional(),
			commodityCode: z.string().optional(),
			intrastatCommodityCode: z.null().optional(),
			barcode: z.string().optional(),
			webDetails: z.string().optional(),
			webDescription: z.string().optional(),
			webPublish: z.number().optional(),
			assemblyLevel: z.number().optional(),
			linkLevel: z.number().optional(),
			countryCodeOfOrigin: z.string().optional(),
			component1Code: z.string().optional(),
			component1Qty: z.number().optional(),
			component2Code: z.string().optional(),
			component2Qty: z.number().optional(),
			component3Code: z.string().optional(),
			component3Qty: z.number().optional(),
			component4Code: z.string().optional(),
			component4Qty: z.number().optional(),
			component5Code: z.string().optional(),
			component5Qty: z.number().optional(),
			component6Code: z.string().optional(),
			component6Qty: z.number().optional(),
			component7Code: z.string().optional(),
			component7Qty: z.number().optional(),
			component8Code: z.string().optional(),
			component8Qty: z.number().optional(),
			component9Code: z.string().optional(),
			component9Qty: z.number().optional(),
			component10Code: z.string().optional(),
			component10Qty: z.number().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadProductOutput = z.infer<typeof ReadProductOutputSchema>;
const ReadStockCategoriesInputSchema = z.void();
type ReadStockCategoriesInput = z.infer<typeof ReadStockCategoriesInputSchema>;
const ReadStockCategoriesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.number().optional(),
				name: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadStockCategoriesOutput = z.infer<
	typeof ReadStockCategoriesOutputSchema
>;
const ReadProductImageInputSchema = z.object({
	stockCode: z.string(),
});
type ReadProductImageInput = z.infer<typeof ReadProductImageInputSchema>;
const ReadProductImageOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.string().optional(),
});
type ReadProductImageOutput = z.infer<typeof ReadProductImageOutputSchema>;
const CreateProductInputSchema = z.object({
	stockCode: z.string().optional(),
	description: z.string().optional(),
	itemType: z.number().optional(),
	nominalCode: z.string().optional(),
	unitOfSale: z.string().optional(),
	deptNumber: z.number().optional(),
	custom1: z.string().optional(),
	custom2: z.string().optional(),
	custom3: z.string().optional(),
	deletedFlag: z.boolean().optional(),
	inactiveFlag: z.boolean().optional(),
	salesPrice: z.number().optional(),
	unitWeight: z.number().optional(),
	taxCode: z.number().optional(),
	qtyAllocated: z.number().optional(),
	qtyInStock: z.number().optional(),
	stockTakeDate: z.null().optional(),
	stockCat: z.number().optional(),
	averageCostPrice: z.number().optional(),
	location: z.string().optional(),
	purchaseNominalCode: z.string().optional(),
	lastPurchasePrice: z.number().optional(),
	commodityCode: z.string().optional(),
	barcode: z.string().optional(),
	webDetails: z.string().optional(),
	webDescription: z.string().optional(),
});
type CreateProductInput = z.infer<typeof CreateProductInputSchema>;
const CreateProductOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type CreateProductOutput = z.infer<typeof CreateProductOutputSchema>;
const UpdateProductInputSchema = z.object({
	stockCode: z.string().optional(),
	description: z.string().optional(),
	itemType: z.number().optional(),
	nominalCode: z.string().optional(),
	unitOfSale: z.string().optional(),
	deptNumber: z.number().optional(),
	custom1: z.string().optional(),
	custom2: z.string().optional(),
	custom3: z.string().optional(),
	deletedFlag: z.boolean().optional(),
	inactiveFlag: z.boolean().optional(),
	salesPrice: z.number().optional(),
	unitWeight: z.number().optional(),
	taxCode: z.number().optional(),
	qtyAllocated: z.number().optional(),
	qtyInStock: z.number().optional(),
	stockTakeDate: z.null().optional(),
	stockCat: z.number().optional(),
	averageCostPrice: z.number().optional(),
	location: z.string().optional(),
	purchaseNominalCode: z.string().optional(),
	lastPurchasePrice: z.number().optional(),
	webDetails: z.string().optional(),
});
type UpdateProductInput = z.infer<typeof UpdateProductInputSchema>;
const UpdateProductOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type UpdateProductOutput = z.infer<typeof UpdateProductOutputSchema>;
const StockAdjustmentsInputSchema = z.object({
	stockCode: z.string().optional(),
	quantity: z.number().optional(),
	type: z.number().optional(),
	date: z.string().optional(),
	costPrice: z.number().optional(),
	reference: z.string().optional(),
	details: z.string().optional(),
});
type StockAdjustmentsInput = z.infer<typeof StockAdjustmentsInputSchema>;
const StockAdjustmentsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.boolean().optional(),
	message: z.null().optional(),
});
type StockAdjustmentsOutput = z.infer<typeof StockAdjustmentsOutputSchema>;
const ReadStockMovementsInputSchema = z.object({
	stockCode: z.string(),
});
type ReadStockMovementsInput = z.infer<typeof ReadStockMovementsInputSchema>;
const ReadStockMovementsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				date: z.string().optional(),
				type: z.number().optional(),
				costPrice: z.number().optional(),
				quantity: z.number().optional(),
				reference: z.string().optional(),
				details: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadStockMovementsOutput = z.infer<typeof ReadStockMovementsOutputSchema>;
const SearchStockMovementsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchStockMovementsInput = z.infer<
	typeof SearchStockMovementsInputSchema
>;
const SearchStockMovementsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				tranNumber: z.number().optional(),
				stockCode: z.string().optional(),
				date: z.string().optional(),
				type: z.string().optional(),
				costPrice: z.number().optional(),
				quantity: z.number().optional(),
				reference: z.string().optional(),
				details: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchStockMovementsOutput = z.infer<
	typeof SearchStockMovementsOutputSchema
>;
const ReadCustomerPriceListsInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerPriceListsInput = z.infer<
	typeof ReadCustomerPriceListsInputSchema
>;
const ReadCustomerPriceListsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			currency: z.number().optional(),
			hasStaticPrices: z.number().optional(),
			lastUpdated: z.null().optional(),
			name: z.string().optional(),
			recordCreateDate: z.string().optional(),
			recordDeleted: z.boolean().optional(),
			recordModifyDate: z.string().optional(),
			reference: z.string().optional(),
			type: z.string().optional(),
			prices: z
				.array(
					z.object({
						discountType: z.number().optional(),
						recordCreateDate: z.string().optional(),
						recordDeleted: z.boolean().optional(),
						recordModifyDate: z.string().optional(),
						rounderAdjustment: z.number().optional(),
						rounderDirection: z.number().optional(),
						rounderMethod: z.number().optional(),
						rounderMultipleOf: z.number().optional(),
						stockCode: z.string().optional(),
						storedPrice: z.number().optional(),
						type: z.string().optional(),
						calcValue: z.number().optional(),
						calcMethod: z.number().optional(),
					}),
				)
				.optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCustomerPriceListsOutput = z.infer<
	typeof ReadCustomerPriceListsOutputSchema
>;
const ReadAllPriceListsInputSchema = z.void();
type ReadAllPriceListsInput = z.infer<typeof ReadAllPriceListsInputSchema>;
const ReadAllPriceListsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				type: z.string().optional(),
				pricingRef: z.string().optional(),
				name: z.string().optional(),
				currency: z.number().optional(),
				hasStaticPrices: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadAllPriceListsOutput = z.infer<typeof ReadAllPriceListsOutputSchema>;
const SearchProductSellingPricesInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchProductSellingPricesInput = z.infer<
	typeof SearchProductSellingPricesInputSchema
>;
const SearchProductSellingPricesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				priceId: z.string().optional(),
				type: z.string().optional(),
				pricingRef: z.string().optional(),
				stockCode: z.string().optional(),
				calcMethod: z.string().optional(),
				calcValue: z.number().optional(),
				storedPrice: z.number().optional(),
				rounderMethod: z.string().optional(),
				rounderDirection: z.string().optional(),
				rounderMultipleOf: z.string().optional(),
				rounderAdjustment: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchProductSellingPricesOutput = z.infer<
	typeof SearchProductSellingPricesOutputSchema
>;
const SearchSalesOrderInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchSalesOrderInput = z.infer<typeof SearchSalesOrderInputSchema>;
const SearchSalesOrderOutputSchema = z.object({
	results: z
		.array(
			z.object({
				orderNumber: z.string().optional(),
				orderDate: z.string().optional(),
				accountRef: z.string().optional(),
				name: z.string().optional(),
				contactName: z.string().optional(),
				invoiceRef: z.string().optional(),
				customerOrderNumber: z.string().optional(),
				itemsNet: z.number().optional(),
				itemsTax: z.number().optional(),
				foreignItemsNet: z.number().optional(),
				foreignItemsTax: z.number().optional(),
				foreignRate: z.number().optional(),
				itemsGross: z.number().optional(),
				carrNomCode: z.string().optional(),
				carrTaxCode: z.string().optional(),
				carrNet: z.number().optional(),
				carrTax: z.number().optional(),
				carrGross: z.number().optional(),
				currency: z.number().optional(),
				orderDueDate: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				delAddress1: z.string().optional(),
				delAddress2: z.string().optional(),
				delAddress3: z.string().optional(),
				delAddress4: z.string().optional(),
				delAddress5: z.string().optional(),
				customerTelephoneNumber: z.string().optional(),
				taxRate1: z.number().optional(),
				orderOrQuote: z.string().optional(),
				quoteStatus: z.string().optional(),
				dispatchStatus: z.string().optional(),
				allocationStatus: z.string().optional(),
				consignmentRef: z.string().optional(),
				notes1: z.string().optional(),
				notes2: z.string().optional(),
				notes3: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				netValueDiscountPercentage: z.number().optional(),
				courierNumber: z.string().optional(),
				courierName: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchSalesOrderOutput = z.infer<typeof SearchSalesOrderOutputSchema>;
const CreateSalesOrderInputSchema = z.object({
	customerAccountRef: z.string().optional(),
	orderDate: z.string().optional(),
	customerOrderNumber: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	contactName: z.string().optional(),
	customerTelephoneNumber: z.string().optional(),
	notes1: z.string().optional(),
	invoiceItems: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				taxCode: z.number().optional(),
				departmentNumber: z.number().optional(),
				nominal: z.string().optional(),
				unitPrice: z.number().optional(),
				quantity: z.number().optional(),
				taxRate: z.number().optional(),
				description: z.string().optional(),
				details: z.string().optional(),
				serviceFlag: z.number().optional(),
			}),
		)
		.optional(),
});
type CreateSalesOrderInput = z.infer<typeof CreateSalesOrderInputSchema>;
const CreateSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateSalesOrderOutput = z.infer<typeof CreateSalesOrderOutputSchema>;
const ReadSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type ReadSalesOrderInput = z.infer<typeof ReadSalesOrderInputSchema>;
const ReadSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			bankRef: z.null().optional(),
			customerAccountRef: z.string().optional(),
			customerOrderNumber: z.string().optional(),
			customerTelephoneNumber: z.string().optional(),
			contactName: z.string().optional(),
			customerName: z.string().optional(),
			carrNet: z.number().optional(),
			carrTax: z.number().optional(),
			carrNomCode: z.string().optional(),
			carrTaxCode: z.number().optional(),
			carriageDepartmentNumber: z.number().optional(),
			consignmentRef: z.string().optional(),
			courierNumber: z.number().optional(),
			countryCode: z.string().optional(),
			currency: z.number().optional(),
			delName: z.string().optional(),
			delAddress1: z.string().optional(),
			delAddress2: z.string().optional(),
			delAddress3: z.string().optional(),
			delAddress4: z.string().optional(),
			delAddress5: z.string().optional(),
			departmentNumber: z.number().optional(),
			globalDiscountRate: z.null().optional(),
			globalNominal: z.string().optional(),
			globalDetails: z.string().optional(),
			globalDepartment: z.null().optional(),
			globalTaxCode: z.number().optional(),
			itemsNet: z.number().optional(),
			itemsTax: z.number().optional(),
			foreignItemsNet: z.number().optional(),
			foreignItemsTax: z.number().optional(),
			foreignRate: z.number().optional(),
			orderType: z.number().optional(),
			orderDueDate: z.null().optional(),
			orderNumber: z.number().optional(),
			status: z.number().optional(),
			orderDate: z.string().optional(),
			netValueDiscountAmount: z.number().optional(),
			netValueDiscountDescription: z.string().optional(),
			netValueDiscountPercentage: z.number().optional(),
			notes1: z.string().optional(),
			notes2: z.string().optional(),
			notes3: z.string().optional(),
			quoteExpiry: z.null().optional(),
			quoteStatus: z.number().optional(),
			userName: z.string().optional(),
			settlementDiscRate: z.number().optional(),
			settlementDueDays: z.number().optional(),
			fillGlobalsFromCustomerDefaults: z.null().optional(),
			orderItemsDataFromStockItemData: z.null().optional(),
			invoiceItems: z
				.array(
					z.object({
						itemId: z.number().optional(),
						id: z.number().optional(),
						stockCode: z.string().optional(),
						description: z.string().optional(),
						nominal: z.string().optional(),
						serviceFlag: z.number().optional(),
						details: z.string().optional(),
						taxCode: z.number().optional(),
						taxRate: z.number().optional(),
						quantity: z.number().optional(),
						unitPrice: z.number().optional(),
						unitOfSale: z.string().optional(),
						discount: z.number().optional(),
						departmentNumber: z.number().optional(),
						comment1: z.string().optional(),
						comment2: z.string().optional(),
						discountAmount: z.number().optional(),
						netAmount: z.number().optional(),
						dueDate: z.null().optional(),
					}),
				)
				.optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadSalesOrderOutput = z.infer<typeof ReadSalesOrderOutputSchema>;
const UpdateSalesOrderInputSchema = z.object({
	customerAccountRef: z.string().optional(),
	orderNumber: z.number().optional(),
	orderDate: z.string().optional(),
	customerOrderNumber: z.string().optional(),
	customerTelephoneNumber: z.string().optional(),
	contactName: z.string().optional(),
	customerName: z.string().optional(),
	userName: z.string().optional(),
	address1: z.string().optional(),
	address2: z.string().optional(),
	address3: z.string().optional(),
	address4: z.string().optional(),
	address5: z.string().optional(),
	delName: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	carrNet: z.number().optional(),
	carrTax: z.number().optional(),
	carrNomCode: z.string().optional(),
	carrTaxCode: z.number().optional(),
	carriageDepartmentNumber: z.number().optional(),
	globalDiscountRate: z.null().optional(),
	netValueDiscountAmount: z.number().optional(),
	netValueDiscountDescription: z.string().optional(),
	currency: z.number().optional(),
	departmentNumber: z.number().optional(),
	orderType: z.number().optional(),
	quoteExpiry: z.null().optional(),
	quoteStatus: z.number().optional(),
	orderDueDate: z.null().optional(),
	notes1: z.string().optional(),
	notes2: z.string().optional(),
	notes3: z.string().optional(),
	analysis1: z.string().optional(),
	analysis2: z.string().optional(),
	analysis3: z.string().optional(),
	consignmentRef: z.string().optional(),
	invoiceItems: z
		.array(
			z.object({
				id: z.number().optional(),
				stockCode: z.string().optional(),
				description: z.string().optional(),
				nominal: z.string().optional(),
				details: z.string().optional(),
				taxCode: z.number().optional(),
				taxRate: z.number().optional(),
				quantity: z.number().optional(),
				unitPrice: z.number().optional(),
				unitOfSale: z.string().optional(),
				discount: z.number().optional(),
				departmentNumber: z.number().optional(),
				discountAmount: z.number().optional(),
				netAmount: z.number().optional(),
			}),
		)
		.optional(),
});
type UpdateSalesOrderInput = z.infer<typeof UpdateSalesOrderInputSchema>;
const UpdateSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type UpdateSalesOrderOutput = z.infer<typeof UpdateSalesOrderOutputSchema>;
const PartiallyAllocateSalesOrderInputSchema = z.object({
	orderNumber: z.string().optional(),
	items: z
		.array(
			z.object({
				itemId: z.number().optional(),
				allocate: z.number().optional(),
			}),
		)
		.optional(),
});
type PartiallyAllocateSalesOrderInput = z.infer<
	typeof PartiallyAllocateSalesOrderInputSchema
>;
const PartiallyAllocateSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type PartiallyAllocateSalesOrderOutput = z.infer<
	typeof PartiallyAllocateSalesOrderOutputSchema
>;
const FullyAllocateSalesOrderInputSchema = z.object({
	id: z.string(),
});
type FullyAllocateSalesOrderInput = z.infer<
	typeof FullyAllocateSalesOrderInputSchema
>;
const FullyAllocateSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type FullyAllocateSalesOrderOutput = z.infer<
	typeof FullyAllocateSalesOrderOutputSchema
>;
const FullyUnAllocateSalesOrderInputSchema = z.object({
	id: z.string(),
});
type FullyUnAllocateSalesOrderInput = z.infer<
	typeof FullyUnAllocateSalesOrderInputSchema
>;
const FullyUnAllocateSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type FullyUnAllocateSalesOrderOutput = z.infer<
	typeof FullyUnAllocateSalesOrderOutputSchema
>;
const PartiallyDespatchSalesOrderInputSchema = z.object({
	orderNumber: z.string().optional(),
	items: z
		.array(
			z.object({
				itemId: z.number().optional(),
				despatch: z.number().optional(),
			}),
		)
		.optional(),
});
type PartiallyDespatchSalesOrderInput = z.infer<
	typeof PartiallyDespatchSalesOrderInputSchema
>;
const PartiallyDespatchSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type PartiallyDespatchSalesOrderOutput = z.infer<
	typeof PartiallyDespatchSalesOrderOutputSchema
>;
const CompleteSalesOrderInputSchema = z.object({
	id: z.string(),
});
type CompleteSalesOrderInput = z.infer<typeof CompleteSalesOrderInputSchema>;
const CompleteSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CompleteSalesOrderOutput = z.infer<typeof CompleteSalesOrderOutputSchema>;
const CompleteSalesOrderWithOwnInvoiceDateInputSchema = z.object({
	orderNumber: z.number().optional(),
	date: z.string().optional(),
});
type CompleteSalesOrderWithOwnInvoiceDateInput = z.infer<
	typeof CompleteSalesOrderWithOwnInvoiceDateInputSchema
>;
const CompleteSalesOrderWithOwnInvoiceDateOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CompleteSalesOrderWithOwnInvoiceDateOutput = z.infer<
	typeof CompleteSalesOrderWithOwnInvoiceDateOutputSchema
>;
const HoldSalesOrderInputSchema = z.object({
	id: z.string(),
});
type HoldSalesOrderInput = z.infer<typeof HoldSalesOrderInputSchema>;
const HoldSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type HoldSalesOrderOutput = z.infer<typeof HoldSalesOrderOutputSchema>;
const CancelSalesOrderInputSchema = z.void();
type CancelSalesOrderInput = z.infer<typeof CancelSalesOrderInputSchema>;
const CancelSalesOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CancelSalesOrderOutput = z.infer<typeof CancelSalesOrderOutputSchema>;
const SearchDispatchesInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchDispatchesInput = z.infer<typeof SearchDispatchesInputSchema>;
const SearchDispatchesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				uniqueID: z.number().optional(),
				gdnNumber: z.number().optional(),
				itemNumber: z.number().optional(),
				orderNumber: z.number().optional(),
				orderItem: z.number().optional(),
				accountRef: z.string().optional(),
				customerGdnNumber: z.string().optional(),
				stockCode: z.string().optional(),
				description: z.string().optional(),
				date: z.string().optional(),
				qtyDispatched: z.number().optional(),
				qtyOnOrder: z.number().optional(),
				printedFlag: z.boolean().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchDispatchesOutput = z.infer<typeof SearchDispatchesOutputSchema>;
const SearchSalesItemsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchSalesItemsInput = z.infer<typeof SearchSalesItemsInputSchema>;
const SearchSalesItemsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				itemId: z.number().optional(),
				id: z.string().optional(),
				orderNumber: z.string().optional(),
				description: z.string().optional(),
				stockCode: z.string().optional(),
				qtyOrder: z.number().optional(),
				unitPrice: z.number().optional(),
				unitOfSale: z.string().optional(),
				nominalCode: z.string().optional(),
				deptName: z.string().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				taxRate: z.number().optional(),
				grossAmount: z.number().optional(),
				qtyAllocated: z.number().optional(),
				qtyDelivered: z.number().optional(),
				qtyYetToDispatch: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				deleted: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchSalesItemsOutput = z.infer<typeof SearchSalesItemsOutputSchema>;
const UpdateSalesOrderItemsInputSchema = z.object({
	itemId: z.number().optional(),
	quantityOnOrder: z.number().optional(),
});
type UpdateSalesOrderItemsInput = z.infer<
	typeof UpdateSalesOrderItemsInputSchema
>;
const UpdateSalesOrderItemsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type UpdateSalesOrderItemsOutput = z.infer<
	typeof UpdateSalesOrderItemsOutputSchema
>;
const SearchPurchaseOrdersInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchPurchaseOrdersInput = z.infer<
	typeof SearchPurchaseOrdersInputSchema
>;
const SearchPurchaseOrdersOutputSchema = z.object({
	results: z
		.array(
			z.object({
				orderNumber: z.string().optional(),
				reference: z.string().optional(),
				orderDate: z.string().optional(),
				accountRef: z.string().optional(),
				name: z.string().optional(),
				contactName: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				itemsNet: z.number().optional(),
				itemsTax: z.number().optional(),
				itemsGross: z.number().optional(),
				carrNomCode: z.string().optional(),
				carrTaxCode: z.string().optional(),
				carrNet: z.number().optional(),
				carrTax: z.number().optional(),
				carrGross: z.number().optional(),
				currency: z.number().optional(),
				projectID: z.string().optional(),
				quoteStatus: z.string().optional(),
				notes1: z.string().optional(),
				notes2: z.string().optional(),
				notes3: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchPurchaseOrdersOutput = z.infer<
	typeof SearchPurchaseOrdersOutputSchema
>;
const CreatePurchaseOrderInputSchema = z.object({
	supplierAccountRef: z.string().optional(),
	telephoneNumber: z.string().optional(),
	userName: z.string().optional(),
	delName: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	contactName: z.string().optional(),
	carriageNet: z.number().optional(),
	carriageTax: z.number().optional(),
	globalDiscountRate: z.number().optional(),
	supplierOrderNumber: z.string().optional(),
	currency: z.number().optional(),
	departmentNumber: z.number().optional(),
	analysis1: z.string().optional(),
	analysis2: z.string().optional(),
	analysis3: z.string().optional(),
	invoiceItems: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				description: z.string().optional(),
				nominal: z.string().optional(),
				details: z.string().optional(),
				taxCode: z.number().optional(),
				taxRate: z.number().optional(),
				quantity: z.number().optional(),
				unitPrice: z.number().optional(),
				discount: z.number().optional(),
			}),
		)
		.optional(),
});
type CreatePurchaseOrderInput = z.infer<typeof CreatePurchaseOrderInputSchema>;
const CreatePurchaseOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.string().optional(),
});
type CreatePurchaseOrderOutput = z.infer<
	typeof CreatePurchaseOrderOutputSchema
>;
const ReadPurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type ReadPurchaseOrderInput = z.infer<typeof ReadPurchaseOrderInputSchema>;
const ReadPurchaseOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			supplierAccountRef: z.string().optional(),
			orderNumber: z.number().optional(),
			reference: z.string().optional(),
			orderDate: z.string().optional(),
			telephoneNumber: z.string().optional(),
			supplierName: z.string().optional(),
			contactName: z.string().optional(),
			userName: z.string().optional(),
			delName: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			delAddress1: z.string().optional(),
			delAddress2: z.string().optional(),
			delAddress3: z.string().optional(),
			delAddress4: z.string().optional(),
			delAddress5: z.string().optional(),
			itemsNet: z.number().optional(),
			itemsTax: z.number().optional(),
			notes1: z.string().optional(),
			notes2: z.string().optional(),
			notes3: z.string().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			carriageNet: z.number().optional(),
			carriageTax: z.number().optional(),
			carriageNomCode: z.string().optional(),
			carriageDepartmentNumber: z.number().optional(),
			globalDiscountRate: z.number().optional(),
			supplierOrderNumber: z.string().optional(),
			status: z.number().optional(),
			currency: z.number().optional(),
			departmentNumber: z.number().optional(),
			dueDate: z.null().optional(),
			projectID: z.number().optional(),
			costCodeID: z.number().optional(),
			invoiceItems: z
				.array(
					z.object({
						itemId: z.number().optional(),
						stockCode: z.string().optional(),
						description: z.string().optional(),
						nominal: z.string().optional(),
						details: z.string().optional(),
						taxCode: z.number().optional(),
						taxRate: z.number().optional(),
						quantity: z.number().optional(),
						unitPrice: z.number().optional(),
						discount: z.number().optional(),
						departmentNumber: z.number().optional(),
						comment1: z.string().optional(),
						comment2: z.string().optional(),
						projectRef: z.number().optional(),
						costCode: z.number().optional(),
						qtyInvoiced: z.null().optional(),
						dueDate: z.string().optional(),
						lineInformation: z.string().optional(),
						quantityDiff: z.null().optional(),
					}),
				)
				.optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadPurchaseOrderOutput = z.infer<typeof ReadPurchaseOrderOutputSchema>;
const UpdatePurchaseOrderInputSchema = z.object({
	supplierAccountRef: z.string().optional(),
	userName: z.string().optional(),
	carriageNet: z.number().optional(),
	carriageTax: z.number().optional(),
	supplierName: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	notes1: z.string().optional(),
	invoiceItems: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				taxCode: z.number().optional(),
				departmentNumber: z.number().optional(),
				discount: z.number().optional(),
				nominal: z.number().optional(),
				unitPrice: z.number().optional(),
				quantity: z.number().optional(),
				taxRate: z.number().optional(),
				description: z.string().optional(),
				details: z.string().optional(),
				comment1: z.string().optional(),
				serviceFlag: z.number().optional(),
			}),
		)
		.optional(),
	orderDate: z.string().optional(),
});
type UpdatePurchaseOrderInput = z.infer<typeof UpdatePurchaseOrderInputSchema>;
const UpdatePurchaseOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type UpdatePurchaseOrderOutput = z.infer<
	typeof UpdatePurchaseOrderOutputSchema
>;
const DeletePurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type DeletePurchaseOrderInput = z.infer<typeof DeletePurchaseOrderInputSchema>;
const DeletePurchaseOrderOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type DeletePurchaseOrderOutput = z.infer<
	typeof DeletePurchaseOrderOutputSchema
>;
const SearchPurchaseItemsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchPurchaseItemsInput = z.infer<typeof SearchPurchaseItemsInputSchema>;
const SearchPurchaseItemsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.string().optional(),
				orderNumber: z.string().optional(),
				description: z.string().optional(),
				stockCode: z.string().optional(),
				qtyOrder: z.number().optional(),
				unitPrice: z.number().optional(),
				nominalCode: z.string().optional(),
				deptName: z.string().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				grossAmount: z.number().optional(),
				qtyAllocated: z.number().optional(),
				qtyDelivered: z.number().optional(),
				qtyYetToDispatch: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchPurchaseItemsOutput = z.infer<
	typeof SearchPurchaseItemsOutputSchema
>;
const SearchGoodsReceivedNotesInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchGoodsReceivedNotesInput = z.infer<
	typeof SearchGoodsReceivedNotesInputSchema
>;
const SearchGoodsReceivedNotesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				grnNumber: z.number().optional(),
				itemNumber: z.number().optional(),
				orderNumber: z.number().optional(),
				orderItem: z.number().optional(),
				accountRef: z.string().optional(),
				supplierGrnNumber: z.string().optional(),
				stockCode: z.string().optional(),
				description: z.string().optional(),
				date: z.string().optional(),
				qtyReceived: z.number().optional(),
				qtyOnOrder: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchGoodsReceivedNotesOutput = z.infer<
	typeof SearchGoodsReceivedNotesOutputSchema
>;
const GoodsReceivedNotesInputSchema = z.object({
	orderNumber: z.number().optional(),
	items: z
		.array(
			z.object({
				itemNumber: z.number().optional(),
				quantity: z.number().optional(),
			}),
		)
		.optional(),
});
type GoodsReceivedNotesInput = z.infer<typeof GoodsReceivedNotesInputSchema>;
const GoodsReceivedNotesOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type GoodsReceivedNotesOutput = z.infer<typeof GoodsReceivedNotesOutputSchema>;
const SearchDeliveriesInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchDeliveriesInput = z.infer<typeof SearchDeliveriesInputSchema>;
const SearchDeliveriesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				grnNumber: z.number().optional(),
				itemNumber: z.number().optional(),
				orderNumber: z.number().optional(),
				orderItem: z.number().optional(),
				accountRef: z.string().optional(),
				supplierGrnNumber: z.string().optional(),
				stockCode: z.string().optional(),
				description: z.string().optional(),
				date: z.string().optional(),
				qtyReceived: z.number().optional(),
				qtyOnOrder: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchDeliveriesOutput = z.infer<typeof SearchDeliveriesOutputSchema>;
const SearchSalesInvoicesInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchSalesInvoicesInput = z.infer<typeof SearchSalesInvoicesInputSchema>;
const SearchSalesInvoicesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				invoiceNumber: z.string().optional(),
				invoiceTypeCode: z.number().optional(),
				invoiceType: z.string().optional(),
				invoiceOrCredit: z.string().optional(),
				invoiceDate: z.string().optional(),
				accountRef: z.string().optional(),
				name: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				cAddress1: z.string().optional(),
				cAddress2: z.string().optional(),
				cAddress3: z.string().optional(),
				cAddress4: z.string().optional(),
				cAddress5: z.string().optional(),
				delName: z.string().optional(),
				delAddress1: z.string().optional(),
				delAddress2: z.string().optional(),
				delAddress3: z.string().optional(),
				delAddress4: z.string().optional(),
				delAddress5: z.string().optional(),
				vatRegNumber: z.string().optional(),
				orderNumber: z.string().optional(),
				orderNumberNumeric: z.string().optional(),
				contactName: z.string().optional(),
				takenBy: z.string().optional(),
				custOrderNumber: z.string().optional(),
				custTelNumber: z.string().optional(),
				notes1: z.string().optional(),
				notes2: z.string().optional(),
				notes3: z.string().optional(),
				custDiscRate: z.number().optional(),
				foreignItemsNet: z.number().optional(),
				foreignItemsTax: z.number().optional(),
				foreignItemsGross: z.number().optional(),
				itemsNet: z.number().optional(),
				itemsTax: z.number().optional(),
				itemsGross: z.number().optional(),
				taxRate1: z.number().optional(),
				taxRate2: z.number().optional(),
				taxRate3: z.number().optional(),
				taxRate4: z.number().optional(),
				taxRate5: z.number().optional(),
				netAmount1: z.number().optional(),
				netAmount2: z.number().optional(),
				netAmount3: z.number().optional(),
				netAmount4: z.number().optional(),
				netAmount5: z.number().optional(),
				taxAmount1: z.number().optional(),
				taxAmount2: z.number().optional(),
				taxAmount3: z.number().optional(),
				taxAmount4: z.number().optional(),
				taxAmount5: z.number().optional(),
				globalNomCode: z.string().optional(),
				globalDetails: z.string().optional(),
				globalTaxCode: z.string().optional(),
				globalDeptNumber: z.string().optional(),
				globalDeptName: z.string().optional(),
				courierNumber: z.string().optional(),
				courierName: z.string().optional(),
				consignment: z.string().optional(),
				carrNomCode: z.string().optional(),
				carrTaxCode: z.string().optional(),
				carrDeptNumber: z.string().optional(),
				carrDeptName: z.string().optional(),
				foreignCarrNet: z.number().optional(),
				foreignCarrTax: z.number().optional(),
				foreignCarrGross: z.number().optional(),
				carrNet: z.number().optional(),
				carrTax: z.number().optional(),
				carrGross: z.number().optional(),
				foreignInvoiceNet: z.number().optional(),
				foreignInvoiceTax: z.number().optional(),
				foreignInvoiceGross: z.number().optional(),
				invoiceNet: z.number().optional(),
				invoiceTax: z.number().optional(),
				invoiceGross: z.number().optional(),
				currency: z.string().optional(),
				currencyType: z.string().optional(),
				euroGross: z.number().optional(),
				euroRate: z.number().optional(),
				foreignRate: z.number().optional(),
				settlementDueDays: z.string().optional(),
				settlementDiscRate: z.number().optional(),
				foreignSettlementDiscAmount: z.number().optional(),
				foreignSettlementTotal: z.number().optional(),
				foreignAmountPrepaid: z.number().optional(),
				settlementDiscAmount: z.number().optional(),
				settlementTotal: z.number().optional(),
				amountPrepaid: z.number().optional(),
				paymentRef: z.string().optional(),
				printed: z.string().optional(),
				printedCode: z.string().optional(),
				posted: z.string().optional(),
				postedCode: z.string().optional(),
				quoteExpiryDate: z.string().optional(),
				quoteStatus: z.string().optional(),
				quoteStatusID: z.string().optional(),
				recurringRef: z.string().optional(),
				dunsNumber: z.string().optional(),
				netValueDiscountAmount: z.number().optional(),
				netValueDiscountRate: z.number().optional(),
				netValueDiscountDescription: z.string().optional(),
				netValueDiscountComment1: z.string().optional(),
				netValueDiscountComment2: z.string().optional(),
				paymentType: z.string().optional(),
				bankRef: z.string().optional(),
				gdnNumber: z.string().optional(),
				projectID: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				paymentDueDate: z.string().optional(),
				invoicePaymentID: z.string().optional(),
				resubmitInvoicePaymentRequired: z.string().optional(),
				containsCisReverseChargeItems: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchSalesInvoicesOutput = z.infer<
	typeof SearchSalesInvoicesOutputSchema
>;
const ReadSalesInvoiceInputSchema = z.object({
	id: z.string(),
});
type ReadSalesInvoiceInput = z.infer<typeof ReadSalesInvoiceInputSchema>;
const ReadSalesInvoiceOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			invoiceNumber: z.number().optional(),
			customerAccountRef: z.string().optional(),
			orderNumber: z.string().optional(),
			customerOrderNumber: z.string().optional(),
			customerTelephoneNumber: z.string().optional(),
			contactName: z.string().optional(),
			userName: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			delName: z.string().optional(),
			delAddress1: z.string().optional(),
			delAddress2: z.string().optional(),
			delAddress3: z.string().optional(),
			delAddress4: z.string().optional(),
			delAddress5: z.string().optional(),
			itemsNet: z.number().optional(),
			itemsTax: z.number().optional(),
			carrNet: z.number().optional(),
			carrTax: z.number().optional(),
			carrNomCode: z.string().optional(),
			carrTaxCode: z.number().optional(),
			carriageDepartmentNumber: z.number().optional(),
			courierNumber: z.number().optional(),
			globalDiscountRate: z.null().optional(),
			ignoreCustomerDiscountRate: z.boolean().optional(),
			globalTaxCode: z.number().optional(),
			globalDepartmentNumber: z.number().optional(),
			globalDetails: z.string().optional(),
			globalNominal: z.string().optional(),
			currency: z.number().optional(),
			invoiceDate: z.string().optional(),
			name: z.string().optional(),
			notes1: z.string().optional(),
			notes2: z.string().optional(),
			notes3: z.string().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			netValueDiscountDescription: z.string().optional(),
			netValueDiscountAmount: z.number().optional(),
			foreignRate: z.number().optional(),
			foreignGross: z.number().optional(),
			paymentDueDate: z.string().optional(),
			settlementDueDays: z.number().optional(),
			settlementDiscRate: z.number().optional(),
			baseSettlementDiscRate: z.number().optional(),
			posted: z.boolean().optional(),
			printed: z.boolean().optional(),
			emailed: z.null().optional(),
			invoiceTypeCode: z.number().optional(),
			shouldUpdateLedgers: z.null().optional(),
			consignmentRef: z.string().optional(),
			invoiceItemsDataFromStockItemData: z.null().optional(),
			invoiceItems: z
				.array(
					z.object({
						id: z.number().optional(),
						stockCode: z.string().optional(),
						description: z.string().optional(),
						nominal: z.string().optional(),
						details: z.string().optional(),
						taxCode: z.number().optional(),
						taxRate: z.number().optional(),
						quantity: z.number().optional(),
						unitPrice: z.number().optional(),
						unitOfSale: z.string().optional(),
						discount: z.number().optional(),
						netAmount: z.number().optional(),
						serviceFlag: z.number().optional(),
						orderRef: z.null().optional(),
						comment1: z.string().optional(),
						comment2: z.string().optional(),
						departmentNumber: z.number().optional(),
						extOrderRef: z.string().optional(),
						projectId: z.number().optional(),
						isNegativeLine: z.number().optional(),
					}),
				)
				.optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadSalesInvoiceOutput = z.infer<typeof ReadSalesInvoiceOutputSchema>;
const UpdateSalesInvoiceInputSchema = z.object({
	customerAccountRef: z.string().optional(),
	invoiceNumber: z.number().optional(),
	orderNumber: z.string().optional(),
	invoiceDate: z.string().optional(),
	customerOrderNumber: z.string().optional(),
	notes2: z.string().optional(),
	userName: z.string().optional(),
	contactName: z.string().optional(),
	delName: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	customerTelephoneNumber: z.null().optional(),
	carrNet: z.number().optional(),
	carrTax: z.number().optional(),
	carrNomCode: z.number().optional(),
	carrTaxCode: z.number().optional(),
	currency: z.number().optional(),
	shouldUpdateLedgers: z.boolean().optional(),
	invoiceTypeCode: z.number().optional(),
	invoiceItems: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				description: z.string().optional(),
				details: z.string().optional(),
				quantity: z.number().optional(),
				unitPrice: z.number().optional(),
				nominal: z.number().optional(),
				taxCode: z.number().optional(),
				taxRate: z.number().optional(),
			}),
		)
		.optional(),
});
type UpdateSalesInvoiceInput = z.infer<typeof UpdateSalesInvoiceInputSchema>;
const UpdateSalesInvoiceOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type UpdateSalesInvoiceOutput = z.infer<typeof UpdateSalesInvoiceOutputSchema>;
const CreateSalesInvoiceInputSchema = z.object({
	customerAccountRef: z.string().optional(),
	orderNumber: z.string().optional(),
	invoiceDate: z.string().optional(),
	customerOrderNumber: z.string().optional(),
	notes2: z.string().optional(),
	userName: z.string().optional(),
	contactName: z.string().optional(),
	delName: z.string().optional(),
	delAddress1: z.string().optional(),
	delAddress2: z.string().optional(),
	delAddress3: z.string().optional(),
	delAddress4: z.string().optional(),
	delAddress5: z.string().optional(),
	customerTelephoneNumber: z.null().optional(),
	carrNet: z.number().optional(),
	carrTax: z.number().optional(),
	carrNomCode: z.number().optional(),
	carrTaxCode: z.number().optional(),
	currency: z.number().optional(),
	shouldUpdateLedgers: z.boolean().optional(),
	invoiceTypeCode: z.number().optional(),
	invoiceItems: z
		.array(
			z.object({
				stockCode: z.string().optional(),
				description: z.string().optional(),
				details: z.string().optional(),
				quantity: z.number().optional(),
				unitPrice: z.number().optional(),
				nominal: z.number().optional(),
				taxCode: z.number().optional(),
				taxRate: z.number().optional(),
			}),
		)
		.optional(),
});
type CreateSalesInvoiceInput = z.infer<typeof CreateSalesInvoiceInputSchema>;
const CreateSalesInvoiceOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateSalesInvoiceOutput = z.infer<typeof CreateSalesInvoiceOutputSchema>;
const SearchSalesInvoiceItemsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchSalesInvoiceItemsInput = z.infer<
	typeof SearchSalesInvoiceItemsInputSchema
>;
const SearchSalesInvoiceItemsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				id: z.number().optional(),
				invoiceNumber: z.number().optional(),
				description: z.string().optional(),
				stockCode: z.string().optional(),
				nominal: z.string().optional(),
				details: z.string().optional(),
				taxCode: z.string().optional(),
				taxRate: z.number().optional(),
				unitPrice: z.number().optional(),
				quantity: z.number().optional(),
				discount: z.number().optional(),
				netAmount: z.number().optional(),
				foreignNetAmount: z.number().optional(),
				comment1: z.string().optional(),
				comment2: z.string().optional(),
				departmentNumber: z.number().optional(),
				projectId: z.number().optional(),
				recordCreateDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchSalesInvoiceItemsOutput = z.infer<
	typeof SearchSalesInvoiceItemsOutputSchema
>;
const CreatePurchaseInvoiceInputSchema = z.object({
	accountRef: z.string().optional(),
	invRef: z.string().optional(),
	date: z.string().optional(),
	details: z.string().optional(),
	currency: z.number().optional(),
	dispute: z.number().optional(),
	items: z
		.array(
			z.object({
				nominalCode: z.string().optional(),
				taxCode: z.string().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				details: z.string().optional(),
				departmentNumber: z.string().optional(),
				costCode: z.string().optional(),
				projectRef: z.string().optional(),
				isNegativeLine: z.number().optional(),
				externalFileURL: z.string().optional(),
			}),
		)
		.optional(),
});
type CreatePurchaseInvoiceInput = z.infer<
	typeof CreatePurchaseInvoiceInputSchema
>;
const CreatePurchaseInvoiceOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreatePurchaseInvoiceOutput = z.infer<
	typeof CreatePurchaseInvoiceOutputSchema
>;
const ReadDocumentLinkInputSchema = z.object({
	transactionNumber: z.string(),
});
type ReadDocumentLinkInput = z.infer<typeof ReadDocumentLinkInputSchema>;
const ReadDocumentLinkOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type ReadDocumentLinkOutput = z.infer<typeof ReadDocumentLinkOutputSchema>;
const SearchProjectsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchProjectsInput = z.infer<typeof SearchProjectsInputSchema>;
const SearchProjectsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				reference: z.string().optional(),
				name: z.string().optional(),
				description: z.string().optional(),
				statusID: z.string().optional(),
				startDate: z.string().optional(),
				endDate: z.string().optional(),
				customerRef: z.string().optional(),
				orderNumber: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				contactName: z.string().optional(),
				telephone: z.string().optional(),
				fax: z.string().optional(),
				email: z.string().optional(),
				countryCode: z.string().optional(),
				totalBilled: z.number().optional(),
				billedNet: z.number().optional(),
				billedTax: z.number().optional(),
				outstandingToBill: z.number().optional(),
				priceQuoted: z.number().optional(),
				profitToDate: z.number().optional(),
				totalCost: z.number().optional(),
				totalBudget: z.number().optional(),
				variance: z.number().optional(),
				lastBilledDate: z.string().optional(),
				lastCostDate: z.string().optional(),
				projectID: z.string().optional(),
				parentProjectNo: z.string().optional(),
				childPosition: z.string().optional(),
				committedCost: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchProjectsOutput = z.infer<typeof SearchProjectsOutputSchema>;
const CreateProjectInputSchema = z.object({
	name: z.string().optional(),
	reference: z.string().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	description: z.string().optional(),
});
type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;
const CreateProjectOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>;
const ReadProjectInputSchema = z.object({
	id: z.string(),
});
type ReadProjectInput = z.infer<typeof ReadProjectInputSchema>;
const ReadProjectOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			billedNet: z.number().optional(),
			billedVAT: z.number().optional(),
			lastBilledDate: z.string().optional(),
			lastCostDate: z.string().optional(),
			outstandingToBill: z.number().optional(),
			profitToDate: z.number().optional(),
			totalBilled: z.number().optional(),
			totalCost: z.number().optional(),
			variance: z.number().optional(),
			status: z.string().optional(),
			accountRef: z.string().optional(),
			reference: z.string().optional(),
			name: z.string().optional(),
			description: z.string().optional(),
			startDate: z.string().optional(),
			endDate: z.string().optional(),
			projectID: z.number().optional(),
			priceQuoted: z.number().optional(),
			totalBudget: z.number().optional(),
			orderNumber: z.string().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			contact: z.string().optional(),
			email: z.string().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadProjectOutput = z.infer<typeof ReadProjectOutputSchema>;
const UpdateProjectInputSchema = z.object({
	name: z.string().optional(),
	reference: z.string().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	description: z.string().optional(),
});
type UpdateProjectInput = z.infer<typeof UpdateProjectInputSchema>;
const UpdateProjectOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type UpdateProjectOutput = z.infer<typeof UpdateProjectOutputSchema>;
const ReadProjectTransactionsInputSchema = z.object({
	projectReference: z.string(),
});
type ReadProjectTransactionsInput = z.infer<
	typeof ReadProjectTransactionsInputSchema
>;
const ReadProjectTransactionsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				amount: z.number().optional(),
				auditTrailID: z.number().optional(),
				costCodeRef: z.string().optional(),
				accountRef: z.null().optional(),
				date: z.string().optional(),
				details: z.string().optional(),
				extReference: z.string().optional(),
				reference: z.string().optional(),
				quantity: z.number().optional(),
				rate: z.number().optional(),
				taxAmount: z.number().optional(),
				transactionID: z.number().optional(),
				type: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadProjectTransactionsOutput = z.infer<
	typeof ReadProjectTransactionsOutputSchema
>;
const SearchProjectOnlyTransactionsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchProjectOnlyTransactionsInput = z.infer<
	typeof SearchProjectOnlyTransactionsInputSchema
>;
const SearchProjectOnlyTransactionsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				projectTranID: z.number().optional(),
				projectReference: z.string().optional(),
				type: z.string().optional(),
				accountRef: z.string().optional(),
				nominalCode: z.string().optional(),
				reference: z.string().optional(),
				extraRef: z.string().optional(),
				details: z.string().optional(),
				resourceID: z.number().optional(),
				quantity: z.number().optional(),
				rate: z.number().optional(),
				taxAmount: z.number().optional(),
				taxCode: z.string().optional(),
				deptNumber: z.number().optional(),
				deptName: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchProjectOnlyTransactionsOutput = z.infer<
	typeof SearchProjectOnlyTransactionsOutputSchema
>;
const SearchProjectTransactionsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchProjectTransactionsInput = z.infer<
	typeof SearchProjectTransactionsInputSchema
>;
const SearchProjectTransactionsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				projectTranID: z.number().optional(),
				auditTrailID: z.number().optional(),
				stockTrailID: z.number().optional(),
				projectID: z.number().optional(),
				projectReference: z.string().optional(),
				costCodeID: z.number().optional(),
				reveueCodeID: z.number().optional(),
				popItemID: z.number().optional(),
				stockAllocationID: z.number().optional(),
				date: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				recordDeleted: z.boolean().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchProjectTransactionsOutput = z.infer<
	typeof SearchProjectTransactionsOutputSchema
>;
const CreateProjectTransactionsInputSchema = z.object({
	projectReference: z.string(),
	costCodeRef: z.string().optional(),
	date: z.string().optional(),
	details: z.string().optional(),
	reference: z.string().optional(),
	quantity: z.number().optional(),
	rate: z.number().optional(),
	taxAmount: z.number().optional(),
	type: z.number().optional(),
});
type CreateProjectTransactionsInput = z.infer<
	typeof CreateProjectTransactionsInputSchema
>;
const CreateProjectTransactionsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateProjectTransactionsOutput = z.infer<
	typeof CreateProjectTransactionsOutputSchema
>;
const ReadProjectCostCodesInputSchema = z.void();
type ReadProjectCostCodesInput = z.infer<
	typeof ReadProjectCostCodesInputSchema
>;
const ReadProjectCostCodesOutputSchema = z.object({
	results: z
		.array(
			z.object({
				costCodeID: z.number().optional(),
				description: z.string().optional(),
				reference: z.string().optional(),
				costTypeId: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadProjectCostCodesOutput = z.infer<
	typeof ReadProjectCostCodesOutputSchema
>;
const CreateProjectCostCodesInputSchema = z.object({
	description: z.string().optional(),
	reference: z.string().optional(),
});
type CreateProjectCostCodesInput = z.infer<
	typeof CreateProjectCostCodesInputSchema
>;
const CreateProjectCostCodesOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateProjectCostCodesOutput = z.infer<
	typeof CreateProjectCostCodesOutputSchema
>;
const ReadProjectBudgetsInputSchema = z.void();
type ReadProjectBudgetsInput = z.infer<typeof ReadProjectBudgetsInputSchema>;
const ReadProjectBudgetsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				projectId: z.number().optional(),
				costCodeId: z.number().optional(),
				amount: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type ReadProjectBudgetsOutput = z.infer<typeof ReadProjectBudgetsOutputSchema>;
const AllocatePaymentOnAccountInputSchema = z.object({
	accountRef: z.string().optional(),
	paymentTransactionNumber: z.number().optional(),
	amount: z.string().optional(),
	invRef: z.string().optional(),
});
type AllocatePaymentOnAccountInput = z.infer<
	typeof AllocatePaymentOnAccountInputSchema
>;
const AllocatePaymentOnAccountOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.boolean().optional(),
	message: z.string().optional(),
});
type AllocatePaymentOnAccountOutput = z.infer<
	typeof AllocatePaymentOnAccountOutputSchema
>;
const SearchAuditHeadersInputSchema = z.void();
type SearchAuditHeadersInput = z.infer<typeof SearchAuditHeadersInputSchema>;
const SearchAuditHeadersOutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				amountPaid: z.number().optional(),
				bankCode: z.string().optional(),
				currency: z.number().optional(),
				type: z.string().optional(),
				date: z.string().optional(),
				details: z.string().optional(),
				invRef: z.string().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				grossAmount: z.number().optional(),
				foreignNetAmount: z.number().optional(),
				foreignTaxAmount: z.number().optional(),
				foreignGrossAmount: z.number().optional(),
				tranNumber: z.number().optional(),
				userName: z.string().optional(),
				outstanding: z.number().optional(),
				bankAmount: z.number().optional(),
				bankFlag: z.string().optional(),
				bankName: z.string().optional(),
				dateBankReconciled: z.string().optional(),
				dateEntered: z.string().optional(),
				deletedFlag: z.number().optional(),
				disputed: z.string().optional(),
				dueDate: z.string().optional(),
				foreignAmountPaid: z.number().optional(),
				foreignBankAmount: z.number().optional(),
				foreignOutstanding: z.number().optional(),
				foreignRate: z.number().optional(),
				agedBalance: z.number().optional(),
				headerNumber: z.number().optional(),
				invRefNumeric: z.number().optional(),
				itemCount: z.number().optional(),
				paidFlag: z.string().optional(),
				paidStatus: z.string().optional(),
				payment: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				salesPurchaseRef: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchAuditHeadersOutput = z.infer<typeof SearchAuditHeadersOutputSchema>;
const CreateHeaderTransactionInputSchema = z.object({
	date: z.string().optional(),
	invRef: z.string().optional(),
	bankCode: z.string().optional(),
	taxAmount: z.number().optional(),
	netAmount: z.number().optional(),
	details: z.string().optional(),
	currency: z.number().optional(),
	accountRef: z.string().optional(),
	taxCode: z.number().optional(),
	type: z.number().optional(),
});
type CreateHeaderTransactionInput = z.infer<
	typeof CreateHeaderTransactionInputSchema
>;
const CreateHeaderTransactionOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateHeaderTransactionOutput = z.infer<
	typeof CreateHeaderTransactionOutputSchema
>;
const CreateBatchHeaderTransactionInputSchema = z.object({
	type: z.number().optional(),
	date: z.string().optional(),
	nominalCode: z.string().optional(),
	invRef: z.string().optional(),
	userName: z.string().optional(),
	accountRef: z.string().optional(),
	details: z.string().optional(),
	Lines: z
		.array(
			z.object({
				nominalCode: z.string().optional(),
				amount: z.number().optional(),
				details: z.string().optional(),
				taxCode: z.number().optional(),
				taxAmount: z.number().optional(),
				netAmount: z.number().optional(),
				deptNumber: z.number().optional(),
				exRef: z.string().optional(),
			}),
		)
		.optional(),
});
type CreateBatchHeaderTransactionInput = z.infer<
	typeof CreateBatchHeaderTransactionInputSchema
>;
const CreateBatchHeaderTransactionOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.null().optional(),
});
type CreateBatchHeaderTransactionOutput = z.infer<
	typeof CreateBatchHeaderTransactionOutputSchema
>;
const SearchAuditSplitsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchAuditSplitsInput = z.infer<typeof SearchAuditSplitsInputSchema>;
const SearchAuditSplitsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				amountPaid: z.number().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				nominalCode: z.string().optional(),
				details: z.string().optional(),
				transactionNumber: z.number().optional(),
				headerNumber: z.number().optional(),
				accountRef: z.string().optional(),
				bankCode: z.string().optional(),
				bankFlag: z.string().optional(),
				costCodeId: z.number().optional(),
				date: z.string().optional(),
				dateEntered: z.string().optional(),
				dateFlag: z.number().optional(),
				deletedFlag: z.number().optional(),
				deptName: z.string().optional(),
				deptNumber: z.number().optional(),
				disputeCode: z.number().optional(),
				disputed: z.number().optional(),
				extraRef: z.string().optional(),
				foreignAmountPaid: z.number().optional(),
				foreignGrossAmount: z.number().optional(),
				foreignNetAmount: z.number().optional(),
				foreignOutstanding: z.number().optional(),
				foreignTaxAmount: z.number().optional(),
				grossAmount: z.number().optional(),
				invRef: z.string().optional(),
				outstanding: z.number().optional(),
				paidFlag: z.string().optional(),
				paidStatus: z.string().optional(),
				payment: z.number().optional(),
				projectId: z.number().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				splitNumber: z.number().optional(),
				stmtText: z.string().optional(),
				taxCode: z.string().optional(),
				type: z.string().optional(),
				userName: z.string().optional(),
				vatFlag: z.string().optional(),
				vatFlagCode: z.number().optional(),
				vatReconciledDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchAuditSplitsOutput = z.infer<typeof SearchAuditSplitsOutputSchema>;
const SearchAuditUsageInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchAuditUsageInput = z.infer<typeof SearchAuditUsageInputSchema>;
const SearchAuditUsageOutputSchema = z.object({
	results: z
		.array(
			z.object({
				type: z.string().optional(),
				usageNumber: z.number().optional(),
				splitNumber: z.number().optional(),
				splitiCrossRef: z.string().optional(),
				reference: z.string().optional(),
				details: z.string().optional(),
				username: z.string().optional(),
				date: z.string().optional(),
				amount: z.number().optional(),
				foreignAmount: z.number().optional(),
				deletedFlag: z.boolean().optional(),
				recordCreatedDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchAuditUsageOutput = z.infer<typeof SearchAuditUsageOutputSchema>;
const CreateBankTxInputSchema = z.object({
	bankCode: z.string().optional(),
	netAmount: z.number().optional(),
	taxAmount: z.number().optional(),
	taxCode: z.number().optional(),
	details: z.string().optional(),
	date: z.string().optional(),
	nominalCode: z.number().optional(),
	invRef: z.string().optional(),
	type: z.number().optional(),
});
type CreateBankTxInput = z.infer<typeof CreateBankTxInputSchema>;
const CreateBankTxOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.string().optional(),
});
type CreateBankTxOutput = z.infer<typeof CreateBankTxOutputSchema>;
const CreateJournalTxInputSchema = z.object({
	date: z.string().optional(),
	invRef: z.string().optional(),
	accountRef: z.string().optional(),
	splits: z
		.array(
			z.object({
				details: z.string().optional(),
				netAmount: z.number().optional(),
				taxAmount: z.number().optional(),
				taxCode: z.number().optional(),
				type: z.number().optional(),
				nominalCode: z.string().optional(),
				deptNumber: z.string().optional(),
				extraRef: z.string().optional(),
			}),
		)
		.optional(),
});
type CreateJournalTxInput = z.infer<typeof CreateJournalTxInputSchema>;
const CreateJournalTxOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.number().optional(),
	message: z.string().optional(),
});
type CreateJournalTxOutput = z.infer<typeof CreateJournalTxOutputSchema>;
const CreateFixedAssetsInputSchema = z.object({
	assetRef: z.string().optional(),
	details1: z.string().optional(),
	details2: z.string().optional(),
	details3: z.string().optional(),
	employee: z.string().optional(),
	balSheetNomCode: z.string().optional(),
	profitLossNomCode: z.string().optional(),
	depMethodCode: z.number().optional(),
	depRate: z.number().optional(),
	deptNumber: z.number().optional(),
	assetCat: z.number().optional(),
	purchaseDate: z.string().optional(),
	costPrice: z.number().optional(),
	depLast: z.number().optional(),
	depToDate: z.number().optional(),
	netBook: z.number().optional(),
});
type CreateFixedAssetsInput = z.infer<typeof CreateFixedAssetsInputSchema>;
const CreateFixedAssetsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type CreateFixedAssetsOutput = z.infer<typeof CreateFixedAssetsOutputSchema>;
const SearchFixedAssetsInputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchFixedAssetsInput = z.infer<typeof SearchFixedAssetsInputSchema>;
const SearchFixedAssetsOutputSchema = z.object({
	results: z
		.array(
			z.object({
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				salesPurchaseRef: z.null().optional(),
				assetRef: z.string().optional(),
				details1: z.string().optional(),
				details2: z.string().optional(),
				details3: z.string().optional(),
				employee: z.string().optional(),
				serialNumber: z.string().optional(),
				purchaseRef: z.string().optional(),
				balSheetNomCode: z.string().optional(),
				profitLossNomCode: z.string().optional(),
				depMethodCode: z.number().optional(),
				depRate: z.number().optional(),
				deptNumber: z.number().optional(),
				assetCat: z.number().optional(),
				purchaseDate: z.string().optional(),
				costPrice: z.number().optional(),
				depLast: z.number().optional(),
				depToDate: z.number().optional(),
				netBook: z.number().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchFixedAssetsOutput = z.infer<typeof SearchFixedAssetsOutputSchema>;
const ReadSearchAssetsInputSchema = z.void();
type ReadSearchAssetsInput = z.infer<typeof ReadSearchAssetsInputSchema>;
const ReadSearchAssetsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			assetRef: z.string().optional(),
			details1: z.string().optional(),
			details2: z.string().optional(),
			details3: z.string().optional(),
			employee: z.string().optional(),
			serialNumber: z.string().optional(),
			purchaseRef: z.string().optional(),
			balSheetNomCode: z.string().optional(),
			profitLossNomCode: z.string().optional(),
			depMethodCode: z.number().optional(),
			depRate: z.number().optional(),
			deptNumber: z.number().optional(),
			assetCat: z.number().optional(),
			purchaseDate: z.string().optional(),
			costPrice: z.number().optional(),
			depLast: z.number().optional(),
			depToDate: z.number().optional(),
			netBook: z.number().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadSearchAssetsOutput = z.infer<typeof ReadSearchAssetsOutputSchema>;
const UpdateFixedAssetsInputSchema = z.object({
	assetRef: z.string().optional(),
	details1: z.string().optional(),
	details2: z.string().optional(),
	details3: z.string().optional(),
	employee: z.string().optional(),
	serialNumber: z.string().optional(),
	purchaseRef: z.string().optional(),
	balSheetNomCode: z.string().optional(),
	profitLossNomCode: z.string().optional(),
	depMethodCode: z.number().optional(),
	depRate: z.number().optional(),
	deptNumber: z.number().optional(),
	assetCat: z.number().optional(),
	purchaseDate: z.string().optional(),
	costPrice: z.number().optional(),
	depLast: z.number().optional(),
	depToDate: z.number().optional(),
	netBook: z.number().optional(),
});
type UpdateFixedAssetsInput = z.infer<typeof UpdateFixedAssetsInputSchema>;
const UpdateFixedAssetsOutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.string().optional(),
	message: z.null().optional(),
});
type UpdateFixedAssetsOutput = z.infer<typeof UpdateFixedAssetsOutputSchema>;
const ReadApiVersion2InputSchema = z.void();
type ReadApiVersion2Input = z.infer<typeof ReadApiVersion2InputSchema>;
const ReadApiVersion2OutputSchema = z.string();
type ReadApiVersion2Output = z.infer<typeof ReadApiVersion2OutputSchema>;
const ReadCompanySettings2InputSchema = z.void();
type ReadCompanySettings2Input = z.infer<
	typeof ReadCompanySettings2InputSchema
>;
const ReadCompanySettings2OutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			allowNegativeStock: z.boolean().optional(),
			budgetingType: z.number().optional(),
			companyId: z.string().optional(),
			countryCode: z.string().optional(),
			creditRef: z.string().optional(),
			defaultChart: z.number().optional(),
			email: z.string().optional(),
			fax: z.string().optional(),
			enableProjectCosting: z.boolean().optional(),
			financialYearMonth: z.number().optional(),
			financialYearYear: z.number().optional(),
			fixedAsssetsLabel: z.string().optional(),
			flatRateVatPercent: z.number().optional(),
			lastAuditCheck: z.string().optional(),
			lastBackup: z.string().optional(),
			lastRestoreDate: z.string().optional(),
			lastClearAudit: z.string().optional(),
			lastMonthEnd: z.null().optional(),
			name: z.string().optional(),
			programMajorVersion: z.number().optional(),
			programMinorVersion: z.number().optional(),
			programBuildVersion: z.number().optional(),
			programBugfixVersion: z.number().optional(),
			recordCreateDate: z.string().optional(),
			recordModifyDate: z.string().optional(),
			telephone: z.string().optional(),
			vatCashFlag: z.number().optional(),
			vatRegNumber: z.string().optional(),
			vatRegisteredFlag: z.boolean().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCompanySettings2Output = z.infer<
	typeof ReadCompanySettings2OutputSchema
>;
const SearchCustomer2InputSchema = z.array(
	z.object({
		field: z.string().optional(),
		type: z.string().optional(),
		value: z.string().optional(),
	}),
);
type SearchCustomer2Input = z.infer<typeof SearchCustomer2InputSchema>;
const SearchCustomer2OutputSchema = z.object({
	results: z
		.array(
			z.object({
				accountRef: z.string().optional(),
				name: z.string().optional(),
				balance: z.number().optional(),
				currency: z.string().optional(),
				contactName: z.string().optional(),
				telephoneNumber: z.string().optional(),
				address1: z.string().optional(),
				address2: z.string().optional(),
				address3: z.string().optional(),
				address4: z.string().optional(),
				address5: z.string().optional(),
				delName: z.string().optional(),
				delAddress1: z.string().optional(),
				delAddress2: z.string().optional(),
				delAddress3: z.string().optional(),
				delAddress4: z.string().optional(),
				delAddress5: z.string().optional(),
				accountOnHold: z.boolean().optional(),
				accountStatusText: z.string().optional(),
				averagePayDays: z.number().optional(),
				creditLimit: z.number().optional(),
				terms: z.string().optional(),
				bacsRef: z.string().optional(),
				iban: z.string().optional(),
				bicSwift: z.string().optional(),
				rollNumber: z.string().optional(),
				additionalRef1: z.string().optional(),
				additionalRef2: z.string().optional(),
				additionalRef3: z.string().optional(),
				paymentType: z.number().optional(),
				turnoverYtd: z.number().optional(),
				vatRegNumber: z.string().optional(),
				eoriNumber: z.string().optional(),
				lastPaymentDate: z.string().optional(),
				recordCreateDate: z.string().optional(),
				recordModifyDate: z.string().optional(),
				telephone2: z.string().optional(),
				fax: z.string().optional(),
				webAddress: z.string().optional(),
				countryCode: z.string().optional(),
				email: z.string().optional(),
				email2: z.string().optional(),
				email3: z.string().optional(),
				email4: z.string().optional(),
				email5: z.string().optional(),
				email6: z.string().optional(),
				defTaxCode: z.string().optional(),
				defNomCode: z.string().optional(),
				analysis1: z.string().optional(),
				analysis2: z.string().optional(),
				analysis3: z.string().optional(),
				deptNumber: z.number().optional(),
				inactiveAccount: z.number().optional(),
				settleDueDays: z.number().optional(),
				paymentDueDays: z.number().optional(),
				paymentDueFrom: z.number().optional(),
				creditPosition: z.string().optional(),
				discountRate: z.number().optional(),
				discountType: z.number().optional(),
				priceListRef: z.string().optional(),
				tradeContact: z.string().optional(),
			}),
		)
		.optional(),
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z.null().optional(),
	message: z.null().optional(),
});
type SearchCustomer2Output = z.infer<typeof SearchCustomer2OutputSchema>;
const ReadCustomer2InputSchema = z.object({
	customer: z.string(),
});
type ReadCustomer2Input = z.infer<typeof ReadCustomer2InputSchema>;
const ReadCustomer2OutputSchema = z.object({
	success: z.boolean().optional(),
	code: z.number().optional(),
	response: z
		.object({
			accountRef: z.string().optional(),
			name: z.string().optional(),
			address1: z.string().optional(),
			address2: z.string().optional(),
			address3: z.string().optional(),
			address4: z.string().optional(),
			address5: z.string().optional(),
			countryCode: z.string().optional(),
			contactName: z.string().optional(),
			telephone: z.string().optional(),
			deliveryName: z.string().optional(),
			deliveryAddress1: z.string().optional(),
			deliveryAddress2: z.string().optional(),
			deliveryAddress3: z.string().optional(),
			deliveryAddress4: z.string().optional(),
			deliveryAddress5: z.string().optional(),
			email: z.string().optional(),
			email2: z.string().optional(),
			email3: z.string().optional(),
			email4: z.string().optional(),
			email5: z.string().optional(),
			email6: z.string().optional(),
			eoriNumber: z.string().optional(),
			defNomCode: z.string().optional(),
			defNomCodeUseDefault: z.boolean().optional(),
			defTaxCode: z.number().optional(),
			defTaxCodeUseDefault: z.boolean().optional(),
			terms: z.string().optional(),
			termsAgreed: z.boolean().optional(),
			turnoverYtd: z.number().optional(),
			currency: z.number().optional(),
			bankAccountName: z.string().optional(),
			bankSortCode: z.string().optional(),
			bankAccountNumber: z.string().optional(),
			bacsRef: z.string().optional(),
			iban: z.string().optional(),
			bicSwift: z.string().optional(),
			rollNumber: z.string().optional(),
			additionalRef1: z.string().optional(),
			additionalRef2: z.string().optional(),
			additionalRef3: z.string().optional(),
			paymentType: z.number().optional(),
			sendInvoicesElectronically: z.boolean().optional(),
			sendLettersElectronically: z.boolean().optional(),
			analysis1: z.string().optional(),
			analysis2: z.string().optional(),
			analysis3: z.string().optional(),
			deptNumber: z.number().optional(),
			paymentDueDays: z.number().optional(),
			paymentDueFrom: z.number().optional(),
			accountStatus: z.number().optional(),
			inactiveAccount: z.boolean().optional(),
			onHold: z.boolean().optional(),
			creditLimit: z.number().optional(),
			balance: z.number().optional(),
			vatNumber: z.string().optional(),
			memo: z.string().optional(),
			discountRate: z.number().optional(),
			discountType: z.number().optional(),
			www: z.string().optional(),
			priceListRef: z.string().optional(),
			tradeContact: z.string().optional(),
			telephone2: z.string().optional(),
			fax: z.string().optional(),
		})
		.optional(),
	message: z.null().optional(),
});
type ReadCustomer2Output = z.infer<typeof ReadCustomer2OutputSchema>;
const NewRequestInputSchema = z.void();
type NewRequestInput = z.infer<typeof NewRequestInputSchema>;
const NewRequestOutputSchema = z.void();
type NewRequestOutput = z.infer<typeof NewRequestOutputSchema>;
export class HyperAccountsClient {
	axios: Axios;
	constructor(config: HAConfig) {
		config = HAConfigSchema.parse(config);
		this.axios = new Axios({
			baseURL: config.baseURL,
			headers: {
				"Content-Type": "application/json",
				AuthToken: config.authToken,
			},
		});
	}
	async readApiStatus(input: ReadApiStatusInput): Promise<ReadApiStatusOutput> {
		input = ReadApiStatusInputSchema.parse(input);
		const url = "/api/status";
		const response = await this.axios.get(url);
		return ReadApiStatusOutputSchema.parse(response.data);
	}
	async readApiVersion(
		input: ReadApiVersionInput,
	): Promise<ReadApiVersionOutput> {
		input = ReadApiVersionInputSchema.parse(input);
		const url = "/api/system/version";
		const response = await this.axios.get(url);
		return ReadApiVersionOutputSchema.parse(response.data);
	}
	async readCompanySettings(
		input: ReadCompanySettingsInput,
	): Promise<ReadCompanySettingsOutput> {
		input = ReadCompanySettingsInputSchema.parse(input);
		const url = "/api/company";
		const response = await this.axios.get(url);
		return ReadCompanySettingsOutputSchema.parse(response.data);
	}
	async readRdaEnabled(
		input: ReadRdaEnabledInput,
	): Promise<ReadRdaEnabledOutput> {
		input = ReadRdaEnabledInputSchema.parse(input);
		const url = "/api/setup";
		const response = await this.axios.get(url);
		return ReadRdaEnabledOutputSchema.parse(response.data);
	}
	async readExchangeRates(
		input: ReadExchangeRatesInput,
	): Promise<ReadExchangeRatesOutput> {
		input = ReadExchangeRatesInputSchema.parse(input);
		const url = "/api/currency";
		const response = await this.axios.get(url);
		return ReadExchangeRatesOutputSchema.parse(response.data);
	}
	async updateExchangeRate(
		input: UpdateExchangeRateInput,
	): Promise<UpdateExchangeRateOutput> {
		input = UpdateExchangeRateInputSchema.parse(input);
		const url = "/api/currency";
		const response = await this.axios.patch(url, input);
		return UpdateExchangeRateOutputSchema.parse(response.data);
	}
	async readCountries(input: ReadCountriesInput): Promise<ReadCountriesOutput> {
		input = ReadCountriesInputSchema.parse(input);
		const url = "/api/country";
		const response = await this.axios.get(url);
		return ReadCountriesOutputSchema.parse(response.data);
	}
	async readCouriers(input: ReadCouriersInput): Promise<ReadCouriersOutput> {
		input = ReadCouriersInputSchema.parse(input);
		const url = "/api/courier";
		const response = await this.axios.get(url);
		return ReadCouriersOutputSchema.parse(response.data);
	}
	async readNominals(input: ReadNominalsInput): Promise<ReadNominalsOutput> {
		input = ReadNominalsInputSchema.parse(input);
		const url = "/api/nominal/";
		const response = await this.axios.get(url);
		return ReadNominalsOutputSchema.parse(response.data);
	}
	async readTaxCodes(input: ReadTaxCodesInput): Promise<ReadTaxCodesOutput> {
		input = ReadTaxCodesInputSchema.parse(input);
		const url = "/api/taxCode";
		const response = await this.axios.get(url);
		return ReadTaxCodesOutputSchema.parse(response.data);
	}
	async readControlAccounts(
		input: ReadControlAccountsInput,
	): Promise<ReadControlAccountsOutput> {
		input = ReadControlAccountsInputSchema.parse(input);
		const url = "/api/control";
		const response = await this.axios.get(url);
		return ReadControlAccountsOutputSchema.parse(response.data);
	}
	async getPaymentMethods(
		input: GetPaymentMethodsInput,
	): Promise<GetPaymentMethodsOutput> {
		input = GetPaymentMethodsInputSchema.parse(input);
		const url = "/api/paymentMethod";
		const response = await this.axios.get(url);
		return GetPaymentMethodsOutputSchema.parse(response.data);
	}
	async readDepartments(
		input: ReadDepartmentsInput,
	): Promise<ReadDepartmentsOutput> {
		input = ReadDepartmentsInputSchema.parse(input);
		const url = "/api/department";
		const response = await this.axios.get(url);
		return ReadDepartmentsOutputSchema.parse(response.data);
	}
	async readChartOfAccounts(
		input: ReadChartOfAccountsInput,
	): Promise<ReadChartOfAccountsOutput> {
		input = ReadChartOfAccountsInputSchema.parse(input);
		const url = "/api/coa";
		const response = await this.axios.get(url);
		return ReadChartOfAccountsOutputSchema.parse(response.data);
	}
	async searchCustomer(
		input: SearchCustomerInput,
	): Promise<SearchCustomerOutput> {
		input = SearchCustomerInputSchema.parse(input);
		const url = "/api/searchSalesLedger";
		const response = await this.axios.post(url, input);
		return SearchCustomerOutputSchema.parse(response.data);
	}
	async readCustomer(input: ReadCustomerInput): Promise<ReadCustomerOutput> {
		input = ReadCustomerInputSchema.parse(input);
		const url = `/api/customer/${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerOutputSchema.parse(response.data);
	}
	async createCustomer(
		input: CreateCustomerInput,
	): Promise<CreateCustomerOutput> {
		input = CreateCustomerInputSchema.parse(input);
		const url = "/api/customer/";
		const response = await this.axios.post(url, input);
		return CreateCustomerOutputSchema.parse(response.data);
	}
	async updateCustomer(
		input: UpdateCustomerInput,
	): Promise<UpdateCustomerOutput> {
		input = UpdateCustomerInputSchema.parse(input);
		const url = "/api/customer/";
		const response = await this.axios.patch(url, input);
		return UpdateCustomerOutputSchema.parse(response.data);
	}
	async readCustomerAgedBalances(
		input: ReadCustomerAgedBalancesInput,
	): Promise<ReadCustomerAgedBalancesOutput> {
		input = ReadCustomerAgedBalancesInputSchema.parse(input);
		const url = `/api/agedDebtors/?id=${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerAgedBalancesOutputSchema.parse(response.data);
	}
	async readCustomerAddress(
		input: ReadCustomerAddressInput,
	): Promise<ReadCustomerAddressOutput> {
		input = ReadCustomerAddressInputSchema.parse(input);
		const url = `/api/customerAddress/${input.customer}/2`;
		const response = await this.axios.get(url);
		return ReadCustomerAddressOutputSchema.parse(response.data);
	}
	async createCustomerAddress(
		input: CreateCustomerAddressInput,
	): Promise<CreateCustomerAddressOutput> {
		input = CreateCustomerAddressInputSchema.parse(input);
		const url = "/api/customerAddress";
		const response = await this.axios.post(url, input);
		return CreateCustomerAddressOutputSchema.parse(response.data);
	}
	async updateCustomerAddress(
		input: UpdateCustomerAddressInput,
	): Promise<UpdateCustomerAddressOutput> {
		input = UpdateCustomerAddressInputSchema.parse(input);
		const url = "/api/customerAddress";
		const response = await this.axios.patch(url, input);
		return UpdateCustomerAddressOutputSchema.parse(response.data);
	}
	async searchCustomerAddress(
		input: SearchCustomerAddressInput,
	): Promise<SearchCustomerAddressOutput> {
		input = SearchCustomerAddressInputSchema.parse(input);
		const url = "/api/searchCustomerAddress";
		const response = await this.axios.post(url, input);
		return SearchCustomerAddressOutputSchema.parse(response.data);
	}
	async searchSupplier(
		input: SearchSupplierInput,
	): Promise<SearchSupplierOutput> {
		input = SearchSupplierInputSchema.parse(input);
		const url = "/api/searchPurchaseLedger";
		const response = await this.axios.post(url, input);
		return SearchSupplierOutputSchema.parse(response.data);
	}
	async readSupplier(input: ReadSupplierInput): Promise<ReadSupplierOutput> {
		input = ReadSupplierInputSchema.parse(input);
		const url = `/api/supplier/${input.supplier}`;
		const response = await this.axios.get(url);
		return ReadSupplierOutputSchema.parse(response.data);
	}
	async createSupplier(
		input: CreateSupplierInput,
	): Promise<CreateSupplierOutput> {
		input = CreateSupplierInputSchema.parse(input);
		const url = "/api/supplier";
		const response = await this.axios.post(url, input);
		return CreateSupplierOutputSchema.parse(response.data);
	}
	async updateSupplier(
		input: UpdateSupplierInput,
	): Promise<UpdateSupplierOutput> {
		input = UpdateSupplierInputSchema.parse(input);
		const url = "/api/supplier";
		const response = await this.axios.patch(url, input);
		return UpdateSupplierOutputSchema.parse(response.data);
	}
	async searchProduct(input: SearchProductInput): Promise<SearchProductOutput> {
		input = SearchProductInputSchema.parse(input);
		const url = "/api/searchProduct";
		const response = await this.axios.post(url, input);
		return SearchProductOutputSchema.parse(response.data);
	}
	async readProduct(input: ReadProductInput): Promise<ReadProductOutput> {
		input = ReadProductInputSchema.parse(input);
		const url = `/api/product/${input.stockCode}`;
		const response = await this.axios.get(url);
		return ReadProductOutputSchema.parse(response.data);
	}
	async readStockCategories(
		input: ReadStockCategoriesInput,
	): Promise<ReadStockCategoriesOutput> {
		input = ReadStockCategoriesInputSchema.parse(input);
		const url = "/api/stockCat";
		const response = await this.axios.get(url);
		return ReadStockCategoriesOutputSchema.parse(response.data);
	}
	async readProductImage(
		input: ReadProductImageInput,
	): Promise<ReadProductImageOutput> {
		input = ReadProductImageInputSchema.parse(input);
		const url = `/api/product/${input.stockCode}/webImage`;
		const response = await this.axios.get(url);
		return ReadProductImageOutputSchema.parse(response.data);
	}
	async createProduct(input: CreateProductInput): Promise<CreateProductOutput> {
		input = CreateProductInputSchema.parse(input);
		const url = "/api/product";
		const response = await this.axios.post(url, input);
		return CreateProductOutputSchema.parse(response.data);
	}
	async updateProduct(input: UpdateProductInput): Promise<UpdateProductOutput> {
		input = UpdateProductInputSchema.parse(input);
		const url = "/api/product";
		const response = await this.axios.patch(url, input);
		return UpdateProductOutputSchema.parse(response.data);
	}
	async stockAdjustments(
		input: StockAdjustmentsInput,
	): Promise<StockAdjustmentsOutput> {
		input = StockAdjustmentsInputSchema.parse(input);
		const url = "/api/stock";
		const response = await this.axios.post(url, input);
		return StockAdjustmentsOutputSchema.parse(response.data);
	}
	async readStockMovements(
		input: ReadStockMovementsInput,
	): Promise<ReadStockMovementsOutput> {
		input = ReadStockMovementsInputSchema.parse(input);
		const url = `/api/stock/${input.stockCode}`;
		const response = await this.axios.get(url);
		return ReadStockMovementsOutputSchema.parse(response.data);
	}
	async searchStockMovements(
		input: SearchStockMovementsInput,
	): Promise<SearchStockMovementsOutput> {
		input = SearchStockMovementsInputSchema.parse(input);
		const url = "/api/searchStock";
		const response = await this.axios.post(url, input);
		return SearchStockMovementsOutputSchema.parse(response.data);
	}
	async readCustomerPriceLists(
		input: ReadCustomerPriceListsInput,
	): Promise<ReadCustomerPriceListsOutput> {
		input = ReadCustomerPriceListsInputSchema.parse(input);
		const url = `/api/priceList/${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerPriceListsOutputSchema.parse(response.data);
	}
	async readAllPriceLists(
		input: ReadAllPriceListsInput,
	): Promise<ReadAllPriceListsOutput> {
		input = ReadAllPriceListsInputSchema.parse(input);
		const url = "/api/priceList";
		const response = await this.axios.get(url);
		return ReadAllPriceListsOutputSchema.parse(response.data);
	}
	async searchProductSellingPrices(
		input: SearchProductSellingPricesInput,
	): Promise<SearchProductSellingPricesOutput> {
		input = SearchProductSellingPricesInputSchema.parse(input);
		const url = "/api/searchPrice";
		const response = await this.axios.post(url, input);
		return SearchProductSellingPricesOutputSchema.parse(response.data);
	}
	async searchSalesOrder(
		input: SearchSalesOrderInput,
	): Promise<SearchSalesOrderOutput> {
		input = SearchSalesOrderInputSchema.parse(input);
		const url = "/api/searchSalesOrder";
		const response = await this.axios.post(url, input);
		return SearchSalesOrderOutputSchema.parse(response.data);
	}
	async createSalesOrder(
		input: CreateSalesOrderInput,
	): Promise<CreateSalesOrderOutput> {
		input = CreateSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrder/";
		const response = await this.axios.post(url, input);
		return CreateSalesOrderOutputSchema.parse(response.data);
	}
	async readSalesOrder(
		input: ReadSalesOrderInput,
	): Promise<ReadSalesOrderOutput> {
		input = ReadSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.orderNumber}`;
		const response = await this.axios.get(url);
		return ReadSalesOrderOutputSchema.parse(response.data);
	}
	async updateSalesOrder(
		input: UpdateSalesOrderInput,
	): Promise<UpdateSalesOrderOutput> {
		input = UpdateSalesOrderInputSchema.parse(input);
		const url = "/api/salesorder/";
		const response = await this.axios.patch(url, input);
		return UpdateSalesOrderOutputSchema.parse(response.data);
	}
	async partiallyAllocateSalesOrder(
		input: PartiallyAllocateSalesOrderInput,
	): Promise<PartiallyAllocateSalesOrderOutput> {
		input = PartiallyAllocateSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrderPartialAllocation";
		const response = await this.axios.post(url, input);
		return PartiallyAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async fullyAllocateSalesOrder(
		input: FullyAllocateSalesOrderInput,
	): Promise<FullyAllocateSalesOrderOutput> {
		input = FullyAllocateSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/fullyAllocate`;
		const response = await this.axios.post(url, undefined);
		return FullyAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async fullyUnAllocateSalesOrder(
		input: FullyUnAllocateSalesOrderInput,
	): Promise<FullyUnAllocateSalesOrderOutput> {
		input = FullyUnAllocateSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrderDeAllocation/${input.id}`;
		const response = await this.axios.post(url, undefined);
		return FullyUnAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async partiallyDespatchSalesOrder(
		input: PartiallyDespatchSalesOrderInput,
	): Promise<PartiallyDespatchSalesOrderOutput> {
		input = PartiallyDespatchSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrderPartialDespatch";
		const response = await this.axios.post(url, input);
		return PartiallyDespatchSalesOrderOutputSchema.parse(response.data);
	}
	async completeSalesOrder(
		input: CompleteSalesOrderInput,
	): Promise<CompleteSalesOrderOutput> {
		input = CompleteSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/complete`;
		const response = await this.axios.post(url, undefined);
		return CompleteSalesOrderOutputSchema.parse(response.data);
	}
	async completeSalesOrderWithOwnInvoiceDate(
		input: CompleteSalesOrderWithOwnInvoiceDateInput,
	): Promise<CompleteSalesOrderWithOwnInvoiceDateOutput> {
		input = CompleteSalesOrderWithOwnInvoiceDateInputSchema.parse(input);
		const url = "/api/salesOrderComplete";
		const response = await this.axios.post(url, input);
		return CompleteSalesOrderWithOwnInvoiceDateOutputSchema.parse(
			response.data,
		);
	}
	async holdSalesOrder(
		input: HoldSalesOrderInput,
	): Promise<HoldSalesOrderOutput> {
		input = HoldSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/hold`;
		const response = await this.axios.post(url, undefined);
		return HoldSalesOrderOutputSchema.parse(response.data);
	}
	async cancelSalesOrder(
		input: CancelSalesOrderInput,
	): Promise<CancelSalesOrderOutput> {
		input = CancelSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrder/32";
		const response = await this.axios.delete(url);
		return CancelSalesOrderOutputSchema.parse(response.data);
	}
	async searchDispatches(
		input: SearchDispatchesInput,
	): Promise<SearchDispatchesOutput> {
		input = SearchDispatchesInputSchema.parse(input);
		const url = "/api/searchDispatch";
		const response = await this.axios.post(url, input);
		return SearchDispatchesOutputSchema.parse(response.data);
	}
	async searchSalesItems(
		input: SearchSalesItemsInput,
	): Promise<SearchSalesItemsOutput> {
		input = SearchSalesItemsInputSchema.parse(input);
		const url = "/api/searchSopItem";
		const response = await this.axios.post(url, input);
		return SearchSalesItemsOutputSchema.parse(response.data);
	}
	async updateSalesOrderItems(
		input: UpdateSalesOrderItemsInput,
	): Promise<UpdateSalesOrderItemsOutput> {
		input = UpdateSalesOrderItemsInputSchema.parse(input);
		const url = "/api/salesOrderItems";
		const response = await this.axios.patch(url, input);
		return UpdateSalesOrderItemsOutputSchema.parse(response.data);
	}
	async searchPurchaseOrders(
		input: SearchPurchaseOrdersInput,
	): Promise<SearchPurchaseOrdersOutput> {
		input = SearchPurchaseOrdersInputSchema.parse(input);
		const url = "/api/searchPurchaseOrder";
		const response = await this.axios.post(url, input);
		return SearchPurchaseOrdersOutputSchema.parse(response.data);
	}
	async createPurchaseOrder(
		input: CreatePurchaseOrderInput,
	): Promise<CreatePurchaseOrderOutput> {
		input = CreatePurchaseOrderInputSchema.parse(input);
		const url = "/api/purchaseOrder";
		const response = await this.axios.post(url, input);
		return CreatePurchaseOrderOutputSchema.parse(response.data);
	}
	async readPurchaseOrder(
		input: ReadPurchaseOrderInput,
	): Promise<ReadPurchaseOrderOutput> {
		input = ReadPurchaseOrderInputSchema.parse(input);
		const url = `/api/purchaseOrder/${input.orderNumber}`;
		const response = await this.axios.get(url);
		return ReadPurchaseOrderOutputSchema.parse(response.data);
	}
	async updatePurchaseOrder(
		input: UpdatePurchaseOrderInput,
	): Promise<UpdatePurchaseOrderOutput> {
		input = UpdatePurchaseOrderInputSchema.parse(input);
		const url = "/api/purchaseOrder/";
		const response = await this.axios.patch(url, input);
		return UpdatePurchaseOrderOutputSchema.parse(response.data);
	}
	async deletePurchaseOrder(
		input: DeletePurchaseOrderInput,
	): Promise<DeletePurchaseOrderOutput> {
		input = DeletePurchaseOrderInputSchema.parse(input);
		const url = `/api/purchaseOrder/${input.orderNumber}`;
		const response = await this.axios.delete(url);
		return DeletePurchaseOrderOutputSchema.parse(response.data);
	}
	async searchPurchaseItems(
		input: SearchPurchaseItemsInput,
	): Promise<SearchPurchaseItemsOutput> {
		input = SearchPurchaseItemsInputSchema.parse(input);
		const url = "/api/searchPopItem";
		const response = await this.axios.post(url, input);
		return SearchPurchaseItemsOutputSchema.parse(response.data);
	}
	async searchGoodsReceivedNotes(
		input: SearchGoodsReceivedNotesInput,
	): Promise<SearchGoodsReceivedNotesOutput> {
		input = SearchGoodsReceivedNotesInputSchema.parse(input);
		const url = "/api/searchGoodsReceivedNotes";
		const response = await this.axios.post(url, input);
		return SearchGoodsReceivedNotesOutputSchema.parse(response.data);
	}
	async goodsReceivedNotes(
		input: GoodsReceivedNotesInput,
	): Promise<GoodsReceivedNotesOutput> {
		input = GoodsReceivedNotesInputSchema.parse(input);
		const url = "/api/goodsReceivedNotes";
		const response = await this.axios.post(url, input);
		return GoodsReceivedNotesOutputSchema.parse(response.data);
	}
	async searchDeliveries(
		input: SearchDeliveriesInput,
	): Promise<SearchDeliveriesOutput> {
		input = SearchDeliveriesInputSchema.parse(input);
		const url = "/api/searchDelivery";
		const response = await this.axios.post(url, input);
		return SearchDeliveriesOutputSchema.parse(response.data);
	}
	async searchSalesInvoices(
		input: SearchSalesInvoicesInput,
	): Promise<SearchSalesInvoicesOutput> {
		input = SearchSalesInvoicesInputSchema.parse(input);
		const url = "/api/searchInvoice";
		const response = await this.axios.post(url, input);
		return SearchSalesInvoicesOutputSchema.parse(response.data);
	}
	async readSalesInvoice(
		input: ReadSalesInvoiceInput,
	): Promise<ReadSalesInvoiceOutput> {
		input = ReadSalesInvoiceInputSchema.parse(input);
		const url = `/api/salesInvoice/${input.id}`;
		const response = await this.axios.get(url);
		return ReadSalesInvoiceOutputSchema.parse(response.data);
	}
	async updateSalesInvoice(
		input: UpdateSalesInvoiceInput,
	): Promise<UpdateSalesInvoiceOutput> {
		input = UpdateSalesInvoiceInputSchema.parse(input);
		const url = "/api/salesInvoice/";
		const response = await this.axios.patch(url, input);
		return UpdateSalesInvoiceOutputSchema.parse(response.data);
	}
	async createSalesInvoice(
		input: CreateSalesInvoiceInput,
	): Promise<CreateSalesInvoiceOutput> {
		input = CreateSalesInvoiceInputSchema.parse(input);
		const url = "/api/salesInvoice/";
		const response = await this.axios.post(url, input);
		return CreateSalesInvoiceOutputSchema.parse(response.data);
	}
	async searchSalesInvoiceItems(
		input: SearchSalesInvoiceItemsInput,
	): Promise<SearchSalesInvoiceItemsOutput> {
		input = SearchSalesInvoiceItemsInputSchema.parse(input);
		const url = "/api/searchInvoiceItem";
		const response = await this.axios.post(url, input);
		return SearchSalesInvoiceItemsOutputSchema.parse(response.data);
	}
	async createPurchaseInvoice(
		input: CreatePurchaseInvoiceInput,
	): Promise<CreatePurchaseInvoiceOutput> {
		input = CreatePurchaseInvoiceInputSchema.parse(input);
		const url = "/api/purchaseInvoice";
		const response = await this.axios.post(url, input);
		return CreatePurchaseInvoiceOutputSchema.parse(response.data);
	}
	async readDocumentLink(
		input: ReadDocumentLinkInput,
	): Promise<ReadDocumentLinkOutput> {
		input = ReadDocumentLinkInputSchema.parse(input);
		const url = `/api/documentLink/${input.transactionNumber}`;
		const response = await this.axios.get(url);
		return ReadDocumentLinkOutputSchema.parse(response.data);
	}
	async searchProjects(
		input: SearchProjectsInput,
	): Promise<SearchProjectsOutput> {
		input = SearchProjectsInputSchema.parse(input);
		const url = "/api/searchProject";
		const response = await this.axios.post(url, input);
		return SearchProjectsOutputSchema.parse(response.data);
	}
	async createProject(input: CreateProjectInput): Promise<CreateProjectOutput> {
		input = CreateProjectInputSchema.parse(input);
		const url = "/api/project";
		const response = await this.axios.post(url, input);
		return CreateProjectOutputSchema.parse(response.data);
	}
	async readProject(input: ReadProjectInput): Promise<ReadProjectOutput> {
		input = ReadProjectInputSchema.parse(input);
		const url = `/api/project/${input.id}`;
		const response = await this.axios.get(url);
		return ReadProjectOutputSchema.parse(response.data);
	}
	async updateProject(input: UpdateProjectInput): Promise<UpdateProjectOutput> {
		input = UpdateProjectInputSchema.parse(input);
		const url = "/api/project";
		const response = await this.axios.patch(url, input);
		return UpdateProjectOutputSchema.parse(response.data);
	}
	async readProjectTransactions(
		input: ReadProjectTransactionsInput,
	): Promise<ReadProjectTransactionsOutput> {
		input = ReadProjectTransactionsInputSchema.parse(input);
		const url = `/api/project/${input.projectReference}/transactions`;
		const response = await this.axios.get(url);
		return ReadProjectTransactionsOutputSchema.parse(response.data);
	}
	async searchProjectOnlyTransactions(
		input: SearchProjectOnlyTransactionsInput,
	): Promise<SearchProjectOnlyTransactionsOutput> {
		input = SearchProjectOnlyTransactionsInputSchema.parse(input);
		const url = "/api/searchProjectTransaction";
		const response = await this.axios.post(url, input);
		return SearchProjectOnlyTransactionsOutputSchema.parse(response.data);
	}
	async searchProjectTransactions(
		input: SearchProjectTransactionsInput,
	): Promise<SearchProjectTransactionsOutput> {
		input = SearchProjectTransactionsInputSchema.parse(input);
		const url = "/api/searchProjectTran";
		const response = await this.axios.post(url, input);
		return SearchProjectTransactionsOutputSchema.parse(response.data);
	}
	async createProjectTransactions(
		input: CreateProjectTransactionsInput,
	): Promise<CreateProjectTransactionsOutput> {
		input = CreateProjectTransactionsInputSchema.parse(input);
		const { projectReference, ...body } = input;
		const url = `/api/project/${projectReference}/transactions`;
		const response = await this.axios.post(url, body);
		return CreateProjectTransactionsOutputSchema.parse(response.data);
	}
	async readProjectCostCodes(
		input: ReadProjectCostCodesInput,
	): Promise<ReadProjectCostCodesOutput> {
		input = ReadProjectCostCodesInputSchema.parse(input);
		const url = "/api/projectCostCode";
		const response = await this.axios.get(url);
		return ReadProjectCostCodesOutputSchema.parse(response.data);
	}
	async createProjectCostCodes(
		input: CreateProjectCostCodesInput,
	): Promise<CreateProjectCostCodesOutput> {
		input = CreateProjectCostCodesInputSchema.parse(input);
		const url = "/api/projectCostCode";
		const response = await this.axios.post(url, input);
		return CreateProjectCostCodesOutputSchema.parse(response.data);
	}
	async readProjectBudgets(
		input: ReadProjectBudgetsInput,
	): Promise<ReadProjectBudgetsOutput> {
		input = ReadProjectBudgetsInputSchema.parse(input);
		const url = "/api/projectBudgets";
		const response = await this.axios.get(url);
		return ReadProjectBudgetsOutputSchema.parse(response.data);
	}
	async allocatePaymentOnAccount(
		input: AllocatePaymentOnAccountInput,
	): Promise<AllocatePaymentOnAccountOutput> {
		input = AllocatePaymentOnAccountInputSchema.parse(input);
		const url = "/api/allocatePaymentOnAccount";
		const response = await this.axios.post(url, input);
		return AllocatePaymentOnAccountOutputSchema.parse(response.data);
	}
	async searchAuditHeaders(
		input: SearchAuditHeadersInput,
	): Promise<SearchAuditHeadersOutput> {
		input = SearchAuditHeadersInputSchema.parse(input);
		const url = "/api/search/auditHeaders";
		const response = await this.axios.post(url, undefined);
		return SearchAuditHeadersOutputSchema.parse(response.data);
	}
	async createHeaderTransaction(
		input: CreateHeaderTransactionInput,
	): Promise<CreateHeaderTransactionOutput> {
		input = CreateHeaderTransactionInputSchema.parse(input);
		const url = "/api/transactionPost";
		const response = await this.axios.post(url, input);
		return CreateHeaderTransactionOutputSchema.parse(response.data);
	}
	async createBatchHeaderTransaction(
		input: CreateBatchHeaderTransactionInput,
	): Promise<CreateBatchHeaderTransactionOutput> {
		input = CreateBatchHeaderTransactionInputSchema.parse(input);
		const url = "/api/batchtransactionPost";
		const response = await this.axios.post(url, input);
		return CreateBatchHeaderTransactionOutputSchema.parse(response.data);
	}
	async searchAuditSplits(
		input: SearchAuditSplitsInput,
	): Promise<SearchAuditSplitsOutput> {
		input = SearchAuditSplitsInputSchema.parse(input);
		const url = "/api/searchSplit";
		const response = await this.axios.post(url, input);
		return SearchAuditSplitsOutputSchema.parse(response.data);
	}
	async searchAuditUsage(
		input: SearchAuditUsageInput,
	): Promise<SearchAuditUsageOutput> {
		input = SearchAuditUsageInputSchema.parse(input);
		const url = "/api/searchUsage";
		const response = await this.axios.post(url, input);
		return SearchAuditUsageOutputSchema.parse(response.data);
	}
	async createBankTx(input: CreateBankTxInput): Promise<CreateBankTxOutput> {
		input = CreateBankTxInputSchema.parse(input);
		const url = "/api/bank";
		const response = await this.axios.post(url, input);
		return CreateBankTxOutputSchema.parse(response.data);
	}
	async createJournalTx(
		input: CreateJournalTxInput,
	): Promise<CreateJournalTxOutput> {
		input = CreateJournalTxInputSchema.parse(input);
		const url = "/api/journal";
		const response = await this.axios.post(url, input);
		return CreateJournalTxOutputSchema.parse(response.data);
	}
	async createFixedAssets(
		input: CreateFixedAssetsInput,
	): Promise<CreateFixedAssetsOutput> {
		input = CreateFixedAssetsInputSchema.parse(input);
		const url = "/api/fixedAssets";
		const response = await this.axios.post(url, input);
		return CreateFixedAssetsOutputSchema.parse(response.data);
	}
	async searchFixedAssets(
		input: SearchFixedAssetsInput,
	): Promise<SearchFixedAssetsOutput> {
		input = SearchFixedAssetsInputSchema.parse(input);
		const url = "/api/searchfixedAsset";
		const response = await this.axios.post(url, input);
		return SearchFixedAssetsOutputSchema.parse(response.data);
	}
	async readSearchAssets(
		input: ReadSearchAssetsInput,
	): Promise<ReadSearchAssetsOutput> {
		input = ReadSearchAssetsInputSchema.parse(input);
		const url = "/api/fixedAssets/HYPE";
		const response = await this.axios.get(url);
		return ReadSearchAssetsOutputSchema.parse(response.data);
	}
	async updateFixedAssets(
		input: UpdateFixedAssetsInput,
	): Promise<UpdateFixedAssetsOutput> {
		input = UpdateFixedAssetsInputSchema.parse(input);
		const url = "/api/fixedAssets";
		const response = await this.axios.patch(url, input);
		return UpdateFixedAssetsOutputSchema.parse(response.data);
	}
	async readApiVersion2(
		input: ReadApiVersion2Input,
	): Promise<ReadApiVersion2Output> {
		input = ReadApiVersion2InputSchema.parse(input);
		const url = "/api/system/version";
		const response = await this.axios.get(url);
		return ReadApiVersion2OutputSchema.parse(response.data);
	}
	async readCompanySettings2(
		input: ReadCompanySettings2Input,
	): Promise<ReadCompanySettings2Output> {
		input = ReadCompanySettings2InputSchema.parse(input);
		const url = "/api/company";
		const response = await this.axios.get(url);
		return ReadCompanySettings2OutputSchema.parse(response.data);
	}
	async searchCustomer2(
		input: SearchCustomer2Input,
	): Promise<SearchCustomer2Output> {
		input = SearchCustomer2InputSchema.parse(input);
		const url = "/api/searchSalesLedger";
		const response = await this.axios.post(url, input);
		return SearchCustomer2OutputSchema.parse(response.data);
	}
	async readCustomer2(input: ReadCustomer2Input): Promise<ReadCustomer2Output> {
		input = ReadCustomer2InputSchema.parse(input);
		const url = `/api/customer/${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomer2OutputSchema.parse(response.data);
	}
	async newRequest(input: NewRequestInput): Promise<NewRequestOutput> {
		input = NewRequestInputSchema.parse(input);
		const url = "";
		const response = await this.axios.get(url);
		return NewRequestOutputSchema.parse(response.data);
	}
}
