/// <amd-module name="@chneau/hyperaccounts" />
import { Axios } from "axios";
import z from "zod";

const ResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
	z.object({
		success: z.boolean(),
		code: z.number(),
		response: schema,
		message: z.string().nullish(),
	});
const ResultsSchema = <T extends z.ZodTypeAny>(schema: T) =>
	z.object({
		results: z.array(schema),
		success: z.boolean(),
		code: z.number(),
		response: z.string().nullish(),
		message: z.string().nullish(),
	});
const HAConfigSchema = z.object({
	baseURL: z.url(),
	authToken: z.string().min(1),
});
const ReadApiStatusOutputSchema = ResponseSchema(
	z.object({
		apiVersion: z.string(),
		sageVersion: z.string(),
		companyName: z.string(),
		sdoStatusOk: z.boolean(),
		odbcStatusOk: z.boolean(),
	}),
);
const ReadApiVersionOutputSchema = z.string();
const ReadCompanySettingsOutputSchema = ResponseSchema(
	z.object({
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		allowNegativeStock: z.boolean(),
		budgetingType: z.number(),
		companyId: z.string(),
		countryCode: z.string(),
		creditRef: z.string(),
		defaultChart: z.number(),
		email: z.string(),
		fax: z.string(),
		enableProjectCosting: z.boolean(),
		financialYearMonth: z.number(),
		financialYearYear: z.number(),
		fixedAsssetsLabel: z.string(),
		flatRateVatPercent: z.number(),
		lastAuditCheck: z.string(),
		lastBackup: z.string(),
		lastRestoreDate: z.string(),
		lastClearAudit: z.string(),
		lastMonthEnd: z.string().nullable(),
		name: z.string(),
		programMajorVersion: z.number(),
		programMinorVersion: z.number(),
		programBuildVersion: z.number(),
		programBugfixVersion: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		telephone: z.string(),
		vatCashFlag: z.number(),
		vatRegNumber: z.string(),
		vatRegisteredFlag: z.boolean(),
		lockDate: z.string().optional(),
	}),
);
const ReadRdaEnabledOutputSchema = ResponseSchema(
	z.object({
		isRDAEnabled: z.boolean(),
	}),
);
const ReadExchangeRatesOutputSchema = ResultsSchema(
	z.object({
		id: z.number(),
		code: z.string(),
		emuMember: z.number(),
		exchangeRate: z.number(),
		locked: z.number(),
		majorUnit: z.string(),
		minorUnit: z.string(),
		name: z.string(),
		createdDate: z.string(),
		modifiedDate: z.string(),
		symbol: z.string(),
	}),
);
const UpdateExchangeRateInputSchema = z.object({
	id: z.number(),
	code: z.string().optional(),
	emuMember: z.number().optional(),
	exchangeRate: z.number().optional(),
	majorUnit: z.string().optional(),
	minorUnit: z.string().optional(),
	name: z.string().optional(),
});
const UpdateExchangeRateOutputSchema = ResponseSchema(z.string());
const ReadCountriesOutputSchema = ResultsSchema(
	z.object({
		code: z.string(),
		name: z.string(),
		euMember: z.boolean(),
		createdDate: z.string(),
		modifiedDate: z.string(),
	}),
);
const ReadCouriersOutputSchema = ResultsSchema(
	z.object({
		id: z.number(),
		name: z.string(),
		www: z.string(),
		search: z.string(),
		createdDate: z.string(),
		modifiedDate: z.string(),
	}),
);
const ReadNominalsOutputSchema = ResultsSchema(
	z.object({
		accountRef: z.string(),
		name: z.string(),
		type: z.number(),
		balance: z.number(),
		inactiveFlag: z.number(),
	}),
);
const ReadTaxCodesOutputSchema = ResultsSchema(
	z.object({
		index: z.number(),
		description: z.string(),
		rate: z.number(),
	}),
);
const ReadControlAccountsOutputSchema = ResponseSchema(
	z.object({
		accrualsNo: z.number(),
		badDebtsNo: z.number(),
		creditorsNo: z.number(),
		debtorsNo: z.number(),
		defBankNo: z.number(),
		defFinanceNo: z.number(),
		defRevalueNo: z.number(),
		defSalesNo: z.number(),
		manualAdjustmentsNo: z.number(),
		mispostingsNo: z.number(),
		pDiscountNo: z.number(),
		plYearAcNo: z.number(),
		prepaymentsNo: z.number(),
		pTaxNo: z.number(),
		sDiscountNo: z.number(),
		sTaxNo: z.number(),
		suspenseNo: z.number(),
		uniqueNo: z.number(),
		vatLiabilityNo: z.number(),
	}),
);
const GetPaymentMethodsOutputSchema = ResultsSchema(
	z.object({
		id: z.number(),
		description: z.string(),
		isOnline: z.number(),
		isReadonly: z.number(),
	}),
);
const ReadDepartmentsOutputSchema = ResultsSchema(
	z.object({
		reference: z.string(),
		name: z.string(),
		id: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
	}),
);
const ReadChartOfAccountsOutputSchema = ResultsSchema(
	z.object({
		name: z.string(),
		low: z.string(),
		high: z.string(),
	}),
);
const SearchCustomerInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchCustomerOutputSchema = ResultsSchema(
	z.object({
		accountRef: z.string(),
		name: z.string(),
		balance: z.number(),
		currency: z.string(),
		contactName: z.string(),
		telephoneNumber: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		delName: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		accountOnHold: z.boolean(),
		accountStatusText: z.string(),
		averagePayDays: z.number(),
		creditLimit: z.number(),
		terms: z.string(),
		bacsRef: z.string(),
		iban: z.string(),
		bicSwift: z.string(),
		rollNumber: z.string(),
		additionalRef1: z.string(),
		additionalRef2: z.string(),
		additionalRef3: z.string(),
		paymentType: z.number(),
		paymentTypeName: z.string().nullable(),
		turnoverYtd: z.number(),
		priorYear: z.number(),
		vatRegNumber: z.string(),
		eoriNumber: z.string(),
		lastPaymentDate: z.string(),
		lastInvDate: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		telephone2: z.string(),
		fax: z.string(),
		webAddress: z.string(),
		countryCode: z.string(),
		email: z.string(),
		email2: z.string(),
		email3: z.string(),
		email4: z.string(),
		email5: z.string(),
		email6: z.string(),
		defTaxCode: z.string(),
		defNomCode: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		analysis4: z.string(),
		analysis5: z.string(),
		analysis6: z.string(),
		deptNumber: z.number(),
		inactiveAccount: z.number(),
		settleDueDays: z.number(),
		paymentDueDays: z.number(),
		paymentDueFrom: z.number(),
		creditPosition: z.string(),
		discountRate: z.number(),
		discountType: z.number(),
		priceListRef: z.string(),
		tradeContact: z.string(),
		companyRegistrationNumber: z.string(),
	}),
);
const ReadCustomerInputSchema = z.object({
	customer: z.string(),
});
const ReadCustomerOutputSchema = ResponseSchema(
	z.object({
		accountRef: z.string(),
		name: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		countryCode: z.string(),
		contactName: z.string(),
		telephone: z.string(),
		deliveryName: z.string(),
		deliveryAddress1: z.string(),
		deliveryAddress2: z.string(),
		deliveryAddress3: z.string(),
		deliveryAddress4: z.string(),
		deliveryAddress5: z.string(),
		email: z.string(),
		email2: z.string(),
		email3: z.string(),
		email4: z.string(),
		email5: z.string(),
		email6: z.string(),
		eoriNumber: z.string(),
		defNomCode: z.string(),
		defNomCodeUseDefault: z.boolean(),
		defTaxCode: z.number(),
		defTaxCodeUseDefault: z.boolean(),
		terms: z.string(),
		termsAgreed: z.boolean(),
		turnoverYtd: z.number(),
		currency: z.number(),
		bankAccountName: z.string(),
		bankSortCode: z.string(),
		bankAccountNumber: z.string(),
		bacsRef: z.string(),
		iban: z.string(),
		bicSwift: z.string(),
		rollNumber: z.string(),
		additionalRef1: z.string(),
		additionalRef2: z.string(),
		additionalRef3: z.string(),
		paymentType: z.number(),
		sendInvoicesElectronically: z.boolean(),
		sendLettersElectronically: z.boolean(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		analysis4: z.string(),
		analysis5: z.string(),
		analysis6: z.string(),
		deptNumber: z.number(),
		paymentDueDays: z.number(),
		paymentDueFrom: z.number(),
		accountStatus: z.number(),
		inactiveAccount: z.boolean(),
		onHold: z.boolean(),
		creditLimit: z.number(),
		balance: z.number(),
		vatNumber: z.string(),
		memo: z.string(),
		discountRate: z.number(),
		discountType: z.number(),
		www: z.string(),
		priceListRef: z.string(),
		tradeContact: z.string(),
		telephone2: z.string(),
		fax: z.string(),
	}),
);
const CreateCustomerInputSchema = z.object({
	name: z.string(),
	address1: z.string(),
	address2: z.string(),
	address3: z.string(),
	address4: z.string(),
	address5: z.string(),
	countryCode: z.string(),
	contactName: z.string(),
	telephone: z.string(),
	deliveryAddress1: z.string(),
	deliveryAddress2: z.string(),
	deliveryAddress3: z.string(),
	deliveryAddress4: z.string(),
	deliveryAddress5: z.string(),
	email: z.string(),
	defNomCode: z.string(),
	defTaxCode: z.number(),
	terms: z.string(),
	termsAgreed: z.boolean(),
	currency: z.number(),
	paymentType: z.number(),
	sendInvoicesElectronically: z.boolean(),
	sendLettersElectronically: z.boolean(),
	analysis1: z.string(),
	analysis2: z.string(),
	analysis3: z.string(),
	deptNumber: z.number(),
	paymentDueDays: z.number(),
	inactiveAccount: z.boolean(),
});
const CreateCustomerOutputSchema = ResponseSchema(z.string());
const UpdateCustomerInputSchema = z.object({
	accountRef: z.string(),
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
const UpdateCustomerOutputSchema = ResponseSchema(z.string());
const ReadCustomerAgedBalancesInputSchema = z.object({
	customer: z.string(),
});
const ReadCustomerAgedBalancesOutputSchema = ResponseSchema(
	z.object({
		total: z.number(),
		current: z.number(),
		future: z.number(),
		period30Days: z.number(),
		period60Days: z.number(),
		period90Days: z.number(),
		older: z.number(),
	}),
);
const ReadCustomerAddressInputSchema = z.object({
	customer: z.string(),
});
const ReadCustomerAddressOutputSchema = ResponseSchema(
	z.object({
		accountRef: z.string(),
		addressNumber: z.number(),
		addressLine1: z.string(),
		addressLine2: z.string(),
		addressLine3: z.string(),
		addressLine4: z.string(),
		addressLine5: z.string(),
		countryCode: z.string(),
		role: z.string(),
		contact: z.string(),
		description: z.string(),
		email: z.string(),
		fax: z.string(),
		name: z.string(),
		notes: z.string(),
		telephone: z.string(),
		telephone2: z.string(),
		vatNumber: z.string(),
		addressType: z.number(),
		taxCode: z.number(),
	}),
);
const CreateCustomerAddressInputSchema = z.object({
	accountRef: z.string(),
	addressNumber: z.number(),
	addressLine1: z.string(),
	addressLine2: z.string(),
	addressLine3: z.string(),
	addressLine4: z.string(),
	addressLine5: z.string(),
	countryCode: z.string(),
	role: z.string(),
	contact: z.string(),
	description: z.string(),
	email: z.string(),
	fax: z.string(),
	name: z.string(),
	notes: z.string(),
	telephone: z.string(),
	telephone2: z.string(),
	taxCode: z.number(),
});
const CreateCustomerAddressOutputSchema = ResponseSchema(z.number());
const UpdateCustomerAddressInputSchema = z.object({
	accountRef: z.string(),
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
const UpdateCustomerAddressOutputSchema = ResponseSchema(z.boolean());
const SearchCustomerAddressInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchCustomerAddressOutputSchema = ResultsSchema(
	z.object({
		accountRef: z.string(),
		addressNumber: z.number(),
		addressLine1: z.string(),
		addressLine2: z.string(),
		addressLine3: z.string(),
		addressLine4: z.string(),
		addressLine5: z.string(),
		countryCode: z.string(),
		role: z.string(),
		contact: z.string(),
		description: z.string(),
		email: z.string(),
		fax: z.string(),
		name: z.string(),
		notes: z.string(),
		telephone: z.string(),
		telephone2: z.string(),
		vatNumber: z.string(),
		taxCode: z.number(),
		addressTypeName: z.string(),
		addressType: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
	}),
);
const SearchSupplierInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchSupplierOutputSchema = ResultsSchema(
	z.object({
		accountRef: z.string(),
		name: z.string(),
		balance: z.number(),
		currency: z.string(),
		contactName: z.string(),
		telephoneNumber: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		accountOnHold: z.boolean(),
		accountStatusText: z.string(),
		creditLimit: z.number(),
		terms: z.string(),
		turnoverYtd: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		telephone2: z.string(),
		fax: z.string(),
		webAddress: z.string(),
		countryCode: z.string(),
		email: z.string(),
		email2: z.string(),
		email3: z.string(),
		defTaxCode: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		deptNumber: z.number(),
		inactiveAccount: z.number(),
		discountRate: z.number(),
		paymentDueDays: z.number(),
		paymentDueFrom: z.number(),
		paymentMethodId: z.number(),
		defNomCode: z.string(),
		settleDueDays: z.number(),
		creditPosition: z.string(),
		tradeContact: z.string(),
		vatRegNumber: z.string(),
		eoriNumber: z.string(),
		companyRegistrationNumber: z.string(),
	}),
);
const ReadSupplierInputSchema = z.object({
	supplier: z.string(),
});
const ReadSupplierOutputSchema = ResponseSchema(
	z.object({
		accountRef: z.string(),
		name: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		contactName: z.string(),
		telephone: z.string(),
		telephone2: z.string(),
		terms: z.string(),
		defaultNominalCode: z.string(),
		discountRate: z.number(),
		paymentMethodId: z.number(),
		paymentDueDays: z.number(),
		paymentDueFrom: z.number(),
		countryCode: z.string(),
		email: z.string(),
		email2: z.string(),
		email3: z.string(),
		currency: z.number(),
		inactiveFlag: z.boolean(),
		balance: z.number(),
		creditLimit: z.number(),
		accountStatus: z.number(),
		onHold: z.boolean(),
		bankAccountName: z.string(),
		bankSortCode: z.string(),
		bankAccountNumber: z.string(),
		defaultTaxCode: z.number(),
		tradeContact: z.string(),
		vatNumber: z.string(),
		eoriNumber: z.string(),
		termsAgreed: z.boolean(),
	}),
);
const CreateSupplierInputSchema = z.object({
	name: z.string(),
	address1: z.string(),
	address2: z.string(),
	address3: z.string(),
	address4: z.string(),
	address5: z.string(),
	contactName: z.string(),
	telephone: z.string(),
	terms: z.string(),
	defaultNominalCode: z.string(),
	countryCode: z.string(),
	email: z.string(),
	currency: z.number(),
});
const CreateSupplierOutputSchema = ResponseSchema(z.string());
const UpdateSupplierInputSchema = z.object({
	accountRef: z.string(),
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
const UpdateSupplierOutputSchema = ResponseSchema(z.string());
const SearchProductInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchProductOutputSchema = ResultsSchema(
	z.object({
		stockCode: z.string(),
		description: z.string(),
		salesNominalCode: z.string(),
		taxCode: z.string(),
		unitOfSale: z.string(),
		qtyInStock: z.number(),
		qtyOnOrder: z.number(),
		qtyAllocated: z.number(),
		salesPrice: z.number(),
		supplierPartNumber: z.string(),
		purchaseNominalCode: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		supplierRef: z.string(),
		itemType: z.number(),
		webCategoryA: z.string(),
		webCategoryB: z.string(),
		webCategoryC: z.string(),
		barcode: z.string(),
		instrastatCommCode: z.string(),
		commodityCode: z.string(),
		reorderLevel: z.number(),
		reorderQty: z.number(),
		webPublish: z.number(),
		webSpecialOffer: z.number(),
		webDetails: z.string(),
		webDescription: z.string(),
		webImage: z.string(),
		inactiveFlag: z.number(),
		unitWeight: z.number(),
		deptNumber: z.number(),
		stockCat: z.number(),
		stockCatName: z.string(),
		qtyLastStockTake: z.number(),
		stockTakeDate: z.string(),
		location: z.string(),
		assemblyLevel: z.number(),
		lastCostPrice: z.number(),
		lastDiscPurchasePrice: z.number(),
		countryCodeOfOrigin: z.string(),
		discALevel1Rate: z.number(),
		discALevel2Rate: z.number(),
		discALevel3Rate: z.number(),
		discALevel4Rate: z.number(),
		discALevel5Rate: z.number(),
		discALevel6Rate: z.number(),
		discALevel7Rate: z.number(),
		discALevel8Rate: z.number(),
		discALevel9Rate: z.number(),
		discALevel10Rate: z.number(),
		discALevel1Qty: z.number(),
		discALevel2Qty: z.number(),
		discALevel3Qty: z.number(),
		discALevel4Qty: z.number(),
		discALevel5Qty: z.number(),
		discALevel6Qty: z.number(),
		discALevel7Qty: z.number(),
		discALevel8Qty: z.number(),
		discALevel9Qty: z.number(),
		discALevel10Qty: z.number(),
		component1Code: z.string(),
		component2Code: z.string(),
		component3Code: z.string(),
		component4Code: z.string(),
		component5Code: z.string(),
		component6Code: z.string(),
		component7Code: z.string(),
		component8Code: z.string(),
		component9Code: z.string(),
		component10Code: z.string(),
		component1Qty: z.number(),
		component2Qty: z.number(),
		component3Qty: z.number(),
		component4Qty: z.number(),
		component5Qty: z.number(),
		component6Qty: z.number(),
		component7Qty: z.number(),
		component8Qty: z.number(),
		component9Qty: z.number(),
		component10Qty: z.number(),
	}),
);
const ReadProductInputSchema = z.object({
	stockCode: z.string(),
});
const ReadProductOutputSchema = ResponseSchema(
	z.object({
		stockCode: z.string(),
		description: z.string(),
		itemType: z.number(),
		nominalCode: z.string(),
		unitOfSale: z.string(),
		deptNumber: z.number(),
		custom1: z.string(),
		custom2: z.string(),
		custom3: z.string(),
		deletedFlag: z.boolean(),
		inactiveFlag: z.boolean(),
		salesPrice: z.number(),
		unitWeight: z.number(),
		taxCode: z.number(),
		qtyAllocated: z.number(),
		qtyInStock: z.number(),
		qtyOnOrder: z.number(),
		purchaseRef: z.string(),
		stockTakeDate: z.string(),
		stockCat: z.number(),
		supplierPartNumber: z.string(),
		averageCostPrice: z.number(),
		location: z.string(),
		purchaseNominalCode: z.string(),
		lastPurchasePrice: z.number(),
		lastDiscPurchasePrice: z.number(),
		commodityCode: z.string(),
		intrastatCommodityCode: z.string().nullable(),
		barcode: z.string(),
		webDetails: z.string(),
		webDescription: z.string(),
		webPublish: z.number(),
		assemblyLevel: z.number(),
		linkLevel: z.number(),
		countryCodeOfOrigin: z.string(),
		component1Code: z.string(),
		component1Qty: z.number(),
		component2Code: z.string(),
		component2Qty: z.number(),
		component3Code: z.string(),
		component3Qty: z.number(),
		component4Code: z.string(),
		component4Qty: z.number(),
		component5Code: z.string(),
		component5Qty: z.number(),
		component6Code: z.string(),
		component6Qty: z.number(),
		component7Code: z.string(),
		component7Qty: z.number(),
		component8Code: z.string(),
		component8Qty: z.number(),
		component9Code: z.string(),
		component9Qty: z.number(),
		component10Code: z.string(),
		component10Qty: z.number(),
	}),
);
const ReadStockCategoriesOutputSchema = ResultsSchema(
	z.object({
		id: z.number(),
		name: z.string(),
	}),
);
const ReadProductImageInputSchema = z.object({
	stockCode: z.string(),
});
const ReadProductImageOutputSchema = ResponseSchema(z.string().nullable());
const CreateProductInputSchema = z.object({
	stockCode: z.string(),
	description: z.string(),
	itemType: z.number(),
	nominalCode: z.string(),
	unitOfSale: z.string(),
	deptNumber: z.number(),
	custom1: z.string(),
	custom2: z.string(),
	custom3: z.string(),
	deletedFlag: z.boolean(),
	inactiveFlag: z.boolean(),
	salesPrice: z.number(),
	unitWeight: z.number(),
	taxCode: z.number(),
	qtyAllocated: z.number(),
	qtyInStock: z.number(),
	stockTakeDate: z.string().nullable(),
	stockCat: z.number(),
	averageCostPrice: z.number(),
	location: z.string(),
	purchaseNominalCode: z.string(),
	lastPurchasePrice: z.number(),
	commodityCode: z.string(),
	barcode: z.string(),
	webDetails: z.string(),
	webDescription: z.string(),
});
const CreateProductOutputSchema = ResponseSchema(z.string());
const UpdateProductInputSchema = z.object({
	stockCode: z.string(),
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
	stockTakeDate: z.string().nullish(),
	stockCat: z.number().optional(),
	averageCostPrice: z.number().optional(),
	location: z.string().optional(),
	purchaseNominalCode: z.string().optional(),
	lastPurchasePrice: z.number().optional(),
	webDetails: z.string().optional(),
});
const UpdateProductOutputSchema = ResponseSchema(z.string());
const StockAdjustmentsInputSchema = z.object({
	stockCode: z.string(),
	quantity: z.number(),
	type: z.number(),
	date: z.string(),
	costPrice: z.number(),
	reference: z.string(),
	details: z.string(),
});
const StockAdjustmentsOutputSchema = ResponseSchema(z.boolean());
const ReadStockMovementsInputSchema = z.object({
	stockCode: z.string(),
});
const ReadStockMovementsOutputSchema = ResultsSchema(
	z.object({
		stockCode: z.string(),
		date: z.string(),
		type: z.number(),
		costPrice: z.number(),
		quantity: z.number(),
		reference: z.string(),
		details: z.string(),
	}),
);
const SearchStockMovementsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchStockMovementsOutputSchema = ResultsSchema(
	z.object({
		tranNumber: z.number(),
		stockCode: z.string(),
		date: z.string(),
		type: z.string(),
		costPrice: z.number(),
		quantity: z.number(),
		reference: z.string(),
		details: z.string(),
	}),
);
const ReadCustomerPriceListsInputSchema = z.object({
	customer: z.string(),
});
const ReadCustomerPriceListsOutputSchema = ResponseSchema(
	z.object({
		currency: z.number(),
		hasStaticPrices: z.number(),
		lastUpdated: z.string().nullable(),
		name: z.string(),
		recordCreateDate: z.string(),
		recordDeleted: z.boolean(),
		recordModifyDate: z.string(),
		reference: z.string(),
		type: z.string(),
		prices: z.array(
			z.object({
				discountType: z.number(),
				recordCreateDate: z.string(),
				recordDeleted: z.boolean(),
				recordModifyDate: z.string(),
				rounderAdjustment: z.number(),
				rounderDirection: z.number(),
				rounderMethod: z.number(),
				rounderMultipleOf: z.number(),
				stockCode: z.string(),
				storedPrice: z.number(),
				type: z.string(),
				calcValue: z.number(),
				calcMethod: z.number(),
			}),
		),
	}),
);
const ReadAllPriceListsOutputSchema = ResultsSchema(
	z.object({
		type: z.string(),
		pricingRef: z.string(),
		name: z.string(),
		currency: z.number(),
		hasStaticPrices: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.number(),
	}),
);
const SearchProductSellingPricesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchProductSellingPricesOutputSchema = ResultsSchema(
	z.object({
		priceId: z.string(),
		type: z.string(),
		pricingRef: z.string(),
		stockCode: z.string(),
		calcMethod: z.string(),
		calcValue: z.number(),
		storedPrice: z.number(),
		rounderMethod: z.string(),
		rounderDirection: z.string(),
		rounderMultipleOf: z.string(),
		rounderAdjustment: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const SearchSalesOrderInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchSalesOrderOutputSchema = ResultsSchema(
	z.object({
		orderNumber: z.string(),
		orderDate: z.string(),
		accountRef: z.string(),
		name: z.string(),
		contactName: z.string(),
		invoiceRef: z.string(),
		customerOrderNumber: z.string(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		foreignItemsNet: z.number(),
		foreignItemsTax: z.number(),
		foreignRate: z.number(),
		itemsGross: z.number(),
		carrNomCode: z.string(),
		carrTaxCode: z.string(),
		carrNet: z.number(),
		carrTax: z.number(),
		carrGross: z.number(),
		currency: z.number(),
		orderDueDate: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		customerTelephoneNumber: z.string(),
		taxRate1: z.number(),
		orderOrQuote: z.string(),
		quoteStatus: z.string(),
		dispatchStatus: z.string(),
		allocationStatus: z.string(),
		consignmentRef: z.string(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		netValueDiscountPercentage: z.number(),
		courierNumber: z.string(),
		courierName: z.string(),
	}),
);
const CreateSalesOrderInputSchema = z.object({
	customerAccountRef: z.string(),
	orderDate: z.string(),
	customerOrderNumber: z.string(),
	address1: z.string(),
	address2: z.string(),
	address3: z.string(),
	address4: z.string(),
	address5: z.string(),
	delAddress1: z.string(),
	delAddress2: z.string(),
	delAddress3: z.string(),
	delAddress4: z.string(),
	delAddress5: z.string(),
	contactName: z.string(),
	customerTelephoneNumber: z.string(),
	notes1: z.string(),
	invoiceItems: z.array(
		z.object({
			stockCode: z.string(),
			taxCode: z.number(),
			departmentNumber: z.number(),
			nominal: z.string(),
			unitPrice: z.number(),
			quantity: z.number(),
			taxRate: z.number(),
			description: z.string(),
			details: z.string(),
			serviceFlag: z.number(),
		}),
	),
});
const CreateSalesOrderOutputSchema = ResponseSchema(z.number());
const ReadSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
});
const ReadSalesOrderOutputSchema = ResponseSchema(
	z.object({
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		bankRef: z.string().nullable(),
		customerAccountRef: z.string(),
		customerOrderNumber: z.string(),
		customerTelephoneNumber: z.string(),
		contactName: z.string(),
		customerName: z.string(),
		carrNet: z.number(),
		carrTax: z.number(),
		carrNomCode: z.string(),
		carrTaxCode: z.number(),
		carriageDepartmentNumber: z.number(),
		consignmentRef: z.string(),
		courierNumber: z.number(),
		countryCode: z.string(),
		currency: z.number(),
		delName: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		departmentNumber: z.number(),
		globalDiscountRate: z.string().nullable(),
		globalNominal: z.string(),
		globalDetails: z.string(),
		globalDepartment: z.string().nullable(),
		globalTaxCode: z.number(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		foreignItemsNet: z.number(),
		foreignItemsTax: z.number(),
		foreignRate: z.number(),
		orderType: z.number(),
		orderDueDate: z.string().nullable(),
		orderNumber: z.number(),
		status: z.number(),
		orderDate: z.string(),
		netValueDiscountAmount: z.number(),
		netValueDiscountDescription: z.string(),
		netValueDiscountPercentage: z.number(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		quoteExpiry: z.string().nullable(),
		quoteStatus: z.number(),
		userName: z.string(),
		settlementDiscRate: z.number(),
		settlementDueDays: z.number(),
		fillGlobalsFromCustomerDefaults: z.string().nullable(),
		orderItemsDataFromStockItemData: z.string().nullable(),
		invoiceItems: z.array(
			z.object({
				itemId: z.number(),
				id: z.number(),
				stockCode: z.string(),
				description: z.string(),
				nominal: z.string(),
				serviceFlag: z.number(),
				details: z.string(),
				taxCode: z.number(),
				taxRate: z.number(),
				quantity: z.number(),
				unitPrice: z.number(),
				unitOfSale: z.string(),
				discount: z.number(),
				departmentNumber: z.number(),
				comment1: z.string(),
				comment2: z.string(),
				discountAmount: z.number(),
				netAmount: z.number(),
				dueDate: z.string().nullable(),
			}),
		),
	}),
);
const UpdateSalesOrderInputSchema = z.object({
	customerAccountRef: z.string(),
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
	globalDiscountRate: z.string().nullish(),
	netValueDiscountAmount: z.number().optional(),
	netValueDiscountDescription: z.string().optional(),
	currency: z.number().optional(),
	departmentNumber: z.number().optional(),
	orderType: z.number().optional(),
	quoteExpiry: z.string().nullish(),
	quoteStatus: z.number().optional(),
	orderDueDate: z.string().nullish(),
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
				id: z.number(),
				stockCode: z.string(),
				description: z.string(),
				nominal: z.string(),
				details: z.string(),
				taxCode: z.number(),
				taxRate: z.number(),
				quantity: z.number(),
				unitPrice: z.number(),
				unitOfSale: z.string(),
				discount: z.number(),
				departmentNumber: z.number(),
				discountAmount: z.number(),
				netAmount: z.number(),
			}),
		)
		.optional(),
});
const UpdateSalesOrderOutputSchema = ResponseSchema(z.number());
const PartiallyAllocateSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
	items: z.array(
		z.object({
			itemId: z.number(),
			allocate: z.number(),
		}),
	),
});
const PartiallyAllocateSalesOrderOutputSchema = ResponseSchema(z.number());
const FullyAllocateSalesOrderInputSchema = z.object({
	id: z.string(),
});
const FullyAllocateSalesOrderOutputSchema = ResponseSchema(z.number());
const FullyUnAllocateSalesOrderInputSchema = z.object({
	id: z.string(),
});
const FullyUnAllocateSalesOrderOutputSchema = ResponseSchema(z.number());
const PartiallyDespatchSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
	items: z.array(
		z.object({
			itemId: z.number(),
			despatch: z.number(),
		}),
	),
});
const PartiallyDespatchSalesOrderOutputSchema = ResponseSchema(z.number());
const CompleteSalesOrderInputSchema = z.object({
	id: z.string(),
});
const CompleteSalesOrderOutputSchema = ResponseSchema(z.number());
const CompleteSalesOrderWithOwnInvoiceDateInputSchema = z.object({
	orderNumber: z.number(),
	date: z.string(),
});
const CompleteSalesOrderWithOwnInvoiceDateOutputSchema = ResponseSchema(
	z.number(),
);
const HoldSalesOrderInputSchema = z.object({
	id: z.string(),
});
const CancelSalesOrderInputSchema = z.object({
	id: z.string(),
});
const HoldSalesOrderOutputSchema = ResponseSchema(z.number());
const CancelSalesOrderOutputSchema = ResponseSchema(z.number());
const SearchDispatchesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchDispatchesOutputSchema = ResultsSchema(
	z.object({
		uniqueID: z.number(),
		gdnNumber: z.number(),
		itemNumber: z.number(),
		orderNumber: z.number(),
		orderItem: z.number(),
		accountRef: z.string(),
		customerGdnNumber: z.string(),
		stockCode: z.string(),
		description: z.string(),
		date: z.string(),
		qtyDispatched: z.number(),
		qtyOnOrder: z.number(),
		printedFlag: z.boolean(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const SearchSalesItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchSalesItemsOutputSchema = ResultsSchema(
	z.object({
		itemId: z.number(),
		id: z.string(),
		orderNumber: z.string(),
		description: z.string(),
		stockCode: z.string(),
		qtyOrder: z.number(),
		unitPrice: z.number(),
		unitOfSale: z.string(),
		nominalCode: z.string(),
		deptName: z.string(),
		netAmount: z.number(),
		taxAmount: z.number(),
		taxRate: z.number(),
		grossAmount: z.number(),
		qtyAllocated: z.number(),
		qtyDelivered: z.number(),
		qtyYetToDispatch: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		deleted: z.number(),
	}),
);
const UpdateSalesOrderItemsInputSchema = z.object({
	itemId: z.number(),
	quantityOnOrder: z.number().optional(),
});
const UpdateSalesOrderItemsOutputSchema = ResponseSchema(z.number());
const SearchPurchaseOrdersInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchPurchaseOrdersOutputSchema = ResultsSchema(
	z.object({
		orderNumber: z.string(),
		reference: z.string(),
		orderDate: z.string(),
		accountRef: z.string(),
		name: z.string(),
		contactName: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		itemsGross: z.number(),
		carrNomCode: z.string(),
		carrTaxCode: z.string(),
		carrNet: z.number(),
		carrTax: z.number(),
		carrGross: z.number(),
		currency: z.number(),
		projectID: z.string(),
		quoteStatus: z.string(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
	}),
);
const CreatePurchaseOrderInputSchema = z.object({
	supplierAccountRef: z.string(),
	telephoneNumber: z.string(),
	userName: z.string(),
	delName: z.string(),
	delAddress1: z.string(),
	delAddress2: z.string(),
	delAddress3: z.string(),
	delAddress4: z.string(),
	delAddress5: z.string(),
	contactName: z.string(),
	carriageNet: z.number(),
	carriageTax: z.number(),
	globalDiscountRate: z.number(),
	supplierOrderNumber: z.string(),
	currency: z.number(),
	departmentNumber: z.number(),
	analysis1: z.string(),
	analysis2: z.string(),
	analysis3: z.string(),
	invoiceItems: z.array(
		z.object({
			stockCode: z.string(),
			description: z.string(),
			nominal: z.string(),
			details: z.string(),
			taxCode: z.number(),
			taxRate: z.number(),
			quantity: z.number(),
			unitPrice: z.number(),
			discount: z.number(),
		}),
	),
});
const CreatePurchaseOrderOutputSchema = ResponseSchema(z.number());
const ReadPurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
const ReadPurchaseOrderOutputSchema = ResponseSchema(
	z.object({
		supplierAccountRef: z.string(),
		orderNumber: z.number(),
		reference: z.string(),
		orderDate: z.string(),
		telephoneNumber: z.string(),
		supplierName: z.string(),
		contactName: z.string(),
		userName: z.string(),
		delName: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		carriageNet: z.number(),
		carriageTax: z.number(),
		carriageNomCode: z.string(),
		carriageDepartmentNumber: z.number(),
		globalDiscountRate: z.number(),
		supplierOrderNumber: z.string(),
		status: z.number(),
		currency: z.number(),
		departmentNumber: z.number(),
		dueDate: z.string().nullable(),
		projectID: z.number(),
		costCodeID: z.number(),
		invoiceItems: z.array(
			z.object({
				itemId: z.number(),
				stockCode: z.string(),
				description: z.string(),
				nominal: z.string(),
				details: z.string(),
				taxCode: z.number(),
				taxRate: z.number(),
				quantity: z.number(),
				unitPrice: z.number(),
				discount: z.number(),
				departmentNumber: z.number(),
				comment1: z.string(),
				comment2: z.string(),
				projectRef: z.number(),
				costCode: z.number(),
				qtyInvoiced: z.string().nullable(),
				dueDate: z.string(),
				lineInformation: z.string(),
				quantityDiff: z.string().nullable(),
			}),
		),
	}),
);
const UpdatePurchaseOrderInputSchema = z.object({
	supplierAccountRef: z.string(),
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
				stockCode: z.string(),
				taxCode: z.number(),
				departmentNumber: z.number(),
				discount: z.number(),
				nominal: z.number(),
				unitPrice: z.number(),
				quantity: z.number(),
				taxRate: z.number(),
				description: z.string(),
				details: z.string(),
				comment1: z.string(),
				serviceFlag: z.number(),
			}),
		)
		.optional(),
	orderDate: z.string().optional(),
});
const UpdatePurchaseOrderOutputSchema = ResponseSchema(z.number());
const DeletePurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
const DeletePurchaseOrderOutputSchema = ResponseSchema(z.number());
const SearchPurchaseItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchPurchaseItemsOutputSchema = ResultsSchema(
	z.object({
		id: z.string(),
		orderNumber: z.string(),
		description: z.string(),
		stockCode: z.string(),
		qtyOrder: z.number(),
		unitPrice: z.number(),
		nominalCode: z.string(),
		deptName: z.string(),
		netAmount: z.number(),
		taxAmount: z.number(),
		grossAmount: z.number(),
		qtyAllocated: z.number(),
		qtyDelivered: z.number(),
		qtyYetToDispatch: z.number(),
	}),
);
const SearchGoodsReceivedNotesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchGoodsReceivedNotesOutputSchema = ResultsSchema(
	z.object({
		grnNumber: z.number(),
		itemNumber: z.number(),
		orderNumber: z.number(),
		orderItem: z.number(),
		accountRef: z.string(),
		supplierGrnNumber: z.string(),
		stockCode: z.string(),
		description: z.string(),
		date: z.string(),
		qtyReceived: z.number(),
		qtyOnOrder: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const GoodsReceivedNotesInputSchema = z.object({
	orderNumber: z.number(),
	items: z.array(
		z.object({
			itemNumber: z.number(),
			quantity: z.number(),
		}),
	),
});
const GoodsReceivedNotesOutputSchema = ResponseSchema(z.string());
const SearchDeliveriesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchDeliveriesOutputSchema = ResultsSchema(
	z.object({
		grnNumber: z.number(),
		itemNumber: z.number(),
		orderNumber: z.number(),
		orderItem: z.number(),
		accountRef: z.string(),
		supplierGrnNumber: z.string(),
		stockCode: z.string(),
		description: z.string(),
		date: z.string(),
		qtyReceived: z.number(),
		qtyOnOrder: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const SearchSalesInvoicesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchSalesInvoicesOutputSchema = ResultsSchema(
	z.object({
		invoiceNumber: z.string(),
		invoiceTypeCode: z.number(),
		invoiceType: z.string(),
		invoiceOrCredit: z.string(),
		invoiceDate: z.string(),
		accountRef: z.string(),
		name: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		cAddress1: z.string(),
		cAddress2: z.string(),
		cAddress3: z.string(),
		cAddress4: z.string(),
		cAddress5: z.string(),
		delName: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		vatRegNumber: z.string(),
		orderNumber: z.string(),
		orderNumberNumeric: z.string(),
		contactName: z.string(),
		takenBy: z.string(),
		custOrderNumber: z.string(),
		custTelNumber: z.string(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		custDiscRate: z.number(),
		foreignItemsNet: z.number(),
		foreignItemsTax: z.number(),
		foreignItemsGross: z.number(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		itemsGross: z.number(),
		taxRate1: z.number(),
		taxRate2: z.number(),
		taxRate3: z.number(),
		taxRate4: z.number(),
		taxRate5: z.number(),
		netAmount1: z.number(),
		netAmount2: z.number(),
		netAmount3: z.number(),
		netAmount4: z.number(),
		netAmount5: z.number(),
		taxAmount1: z.number(),
		taxAmount2: z.number(),
		taxAmount3: z.number(),
		taxAmount4: z.number(),
		taxAmount5: z.number(),
		globalNomCode: z.string(),
		globalDetails: z.string(),
		globalTaxCode: z.string(),
		globalDeptNumber: z.string(),
		globalDeptName: z.string(),
		courierNumber: z.string(),
		courierName: z.string(),
		consignment: z.string(),
		carrNomCode: z.string(),
		carrTaxCode: z.string(),
		carrDeptNumber: z.string(),
		carrDeptName: z.string(),
		foreignCarrNet: z.number(),
		foreignCarrTax: z.number(),
		foreignCarrGross: z.number(),
		carrNet: z.number(),
		carrTax: z.number(),
		carrGross: z.number(),
		foreignInvoiceNet: z.number(),
		foreignInvoiceTax: z.number(),
		foreignInvoiceGross: z.number(),
		invoiceNet: z.number(),
		invoiceTax: z.number(),
		invoiceGross: z.number(),
		currency: z.string(),
		currencyType: z.string(),
		euroGross: z.number(),
		euroRate: z.number(),
		foreignRate: z.number(),
		settlementDueDays: z.string(),
		settlementDiscRate: z.number(),
		foreignSettlementDiscAmount: z.number(),
		foreignSettlementTotal: z.number(),
		foreignAmountPrepaid: z.number(),
		settlementDiscAmount: z.number(),
		settlementTotal: z.number(),
		amountPrepaid: z.number(),
		paymentRef: z.string(),
		printed: z.string(),
		printedCode: z.string(),
		posted: z.string(),
		postedCode: z.string(),
		quoteExpiryDate: z.string(),
		quoteStatus: z.string(),
		quoteStatusID: z.string(),
		recurringRef: z.string(),
		dunsNumber: z.string(),
		netValueDiscountAmount: z.number(),
		netValueDiscountRate: z.number(),
		netValueDiscountDescription: z.string(),
		netValueDiscountComment1: z.string(),
		netValueDiscountComment2: z.string(),
		paymentType: z.string(),
		bankRef: z.string(),
		gdnNumber: z.string(),
		projectID: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		paymentDueDate: z.string(),
		invoicePaymentID: z.string(),
		resubmitInvoicePaymentRequired: z.string(),
		containsCisReverseChargeItems: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.string(),
	}),
);
const ReadSalesInvoiceInputSchema = z.object({
	id: z.string(),
});
const ReadSalesInvoiceOutputSchema = ResponseSchema(
	z.object({
		invoiceNumber: z.number(),
		customerAccountRef: z.string(),
		orderNumber: z.string(),
		customerOrderNumber: z.string(),
		customerTelephoneNumber: z.string(),
		contactName: z.string(),
		userName: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		delName: z.string(),
		delAddress1: z.string(),
		delAddress2: z.string(),
		delAddress3: z.string(),
		delAddress4: z.string(),
		delAddress5: z.string(),
		itemsNet: z.number(),
		itemsTax: z.number(),
		carrNet: z.number(),
		carrTax: z.number(),
		carrNomCode: z.string(),
		carrTaxCode: z.number(),
		carriageDepartmentNumber: z.number(),
		courierNumber: z.number(),
		globalDiscountRate: z.string().nullable(),
		ignoreCustomerDiscountRate: z.boolean(),
		globalTaxCode: z.number(),
		globalDepartmentNumber: z.number(),
		globalDetails: z.string(),
		globalNominal: z.string(),
		currency: z.number(),
		invoiceDate: z.string(),
		name: z.string(),
		notes1: z.string(),
		notes2: z.string(),
		notes3: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		netValueDiscountDescription: z.string(),
		netValueDiscountAmount: z.number(),
		foreignRate: z.number(),
		foreignGross: z.number(),
		paymentDueDate: z.string(),
		settlementDueDays: z.number(),
		settlementDiscRate: z.number(),
		baseSettlementDiscRate: z.number(),
		posted: z.boolean(),
		printed: z.boolean(),
		emailed: z.string().nullable(),
		invoiceTypeCode: z.number(),
		shouldUpdateLedgers: z.string().nullable(),
		consignmentRef: z.string(),
		invoiceItemsDataFromStockItemData: z.string().nullable(),
		invoiceItems: z.array(
			z.object({
				id: z.number(),
				stockCode: z.string(),
				description: z.string(),
				nominal: z.string(),
				details: z.string(),
				taxCode: z.number(),
				taxRate: z.number(),
				quantity: z.number(),
				unitPrice: z.number(),
				unitOfSale: z.string(),
				discount: z.number(),
				netAmount: z.number(),
				serviceFlag: z.number(),
				orderRef: z.string().nullable(),
				comment1: z.string(),
				comment2: z.string(),
				departmentNumber: z.number(),
				extOrderRef: z.string(),
				projectId: z.number(),
				isNegativeLine: z.number(),
			}),
		),
	}),
);
const UpdateSalesInvoiceInputSchema = z.object({
	customerAccountRef: z.string(),
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
	customerTelephoneNumber: z.string().nullish(),
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
				stockCode: z.string(),
				description: z.string(),
				details: z.string(),
				quantity: z.number(),
				unitPrice: z.number(),
				nominal: z.number(),
				taxCode: z.number(),
				taxRate: z.number(),
			}),
		)
		.optional(),
});
const UpdateSalesInvoiceOutputSchema = ResponseSchema(z.number());
const CreateSalesInvoiceInputSchema = z.object({
	invoiceNumber: z.number().optional(),
	customerAccountRef: z.string(),
	orderNumber: z.string().optional(),
	customerOrderNumber: z.string().optional(),
	customerTelephoneNumber: z.string().optional(),
	contactName: z.string().optional(),
	userName: z.string().optional(),
	name: z.string().optional(),
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
	globalTaxCode: z.number().optional(),
	globalDepartmentNumber: z.number().optional(),
	globalDetails: z.string().optional(),
	globalNominal: z.string().optional(),
	netValueDiscountDescription: z.string().optional(),
	netValueDiscountAmount: z.number().optional(),
	currency: z.number().optional(),
	invoiceDate: z.string().optional(),
	invoiceTypeCode: z.number().optional(),
	foreignRate: z.number().optional(),
	carriageDepartmentNumber: z.number().optional(),
	notes1: z.string().optional(),
	notes2: z.string().optional(),
	notes3: z.string().optional(),
	settlementDueDays: z.number().optional(),
	settlementDiscRate: z.number().optional(),
	baseSettlementDiscRate: z.number().optional(),
	analysis1: z.string().optional(),
	analysis2: z.string().optional(),
	analysis3: z.string().optional(),
	departmentNumber: z.number().optional(),
	discount: z.number().optional(),
	foreignGross: z.number().optional(),
	paymentDueDate: z.string().optional(),
	shouldUpdateLedgers: z.boolean().optional(),
	printed: z.boolean().optional(),
	emailed: z.boolean().optional(),
	invoiceItemsDataFromStockItemData: z.boolean().optional(),
	ignoreCustomerDiscountRate: z.boolean().optional(),
	invoiceItems: z.array(
		z.object({
			stockCode: z.string(),
			description: z.string(),
			quantity: z.number(),
			unitPrice: z.number(),
			unitOfSale: z.string().optional(),
			taxRate: z.number(),
			taxCode: z.number(),
			discount: z.number().optional(),
			netAmount: z.number().optional(),
			nominal: z.string().optional(),
			comment1: z.string().optional(),
			comment2: z.string().optional(),
			departmentNumber: z.number().optional(),
			extOrderRef: z.string().optional(),
			projectId: z.number().optional(),
			isNegativeLine: z.number().optional(),
			serviceFlag: z.number().optional(),
		}),
	),
});
const CreateSalesInvoiceOutputSchema = ResponseSchema(z.number());
const SearchSalesInvoiceItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchSalesInvoiceItemsOutputSchema = ResultsSchema(
	z.object({
		id: z.number(),
		invoiceNumber: z.number(),
		description: z.string(),
		stockCode: z.string(),
		nominal: z.string(),
		details: z.string(),
		taxCode: z.string(),
		taxRate: z.number(),
		unitPrice: z.number(),
		quantity: z.number(),
		discount: z.number(),
		netAmount: z.number(),
		foreignNetAmount: z.number(),
		comment1: z.string(),
		comment2: z.string(),
		departmentNumber: z.number(),
		projectId: z.number(),
		recordCreateDate: z.string(),
	}),
);
const CreatePurchaseInvoiceInputSchema = z.object({
	accountRef: z.string(),
	invRef: z.string(),
	date: z.string(),
	details: z.string(),
	currency: z.number(),
	dispute: z.number(),
	items: z.array(
		z.object({
			nominalCode: z.string(),
			taxCode: z.string(),
			netAmount: z.number(),
			taxAmount: z.number(),
			details: z.string(),
			departmentNumber: z.string(),
			costCode: z.string(),
			projectRef: z.string(),
			isNegativeLine: z.number(),
			externalFileURL: z.string(),
		}),
	),
});
const CreatePurchaseInvoiceOutputSchema = ResponseSchema(z.number());
const ReadDocumentLinkInputSchema = z.object({
	transactionNumber: z.string(),
});
const ReadDocumentLinkOutputSchema = ResponseSchema(z.string());
const SearchProjectsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchProjectsOutputSchema = ResultsSchema(
	z.object({
		reference: z.string(),
		name: z.string(),
		description: z.string(),
		statusID: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		customerRef: z.string(),
		orderNumber: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		contactName: z.string(),
		telephone: z.string(),
		fax: z.string(),
		email: z.string(),
		countryCode: z.string(),
		totalBilled: z.number(),
		billedNet: z.number(),
		billedTax: z.number(),
		outstandingToBill: z.number(),
		priceQuoted: z.number(),
		profitToDate: z.number(),
		totalCost: z.number(),
		totalBudget: z.number(),
		variance: z.number(),
		lastBilledDate: z.string(),
		lastCostDate: z.string(),
		projectID: z.string(),
		parentProjectNo: z.string(),
		childPosition: z.string(),
		committedCost: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const CreateProjectInputSchema = z.object({
	name: z.string(),
	reference: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	description: z.string(),
});
const CreateProjectOutputSchema = ResponseSchema(z.number());
const ReadProjectInputSchema = z.object({
	id: z.string(),
});
const ReadProjectOutputSchema = ResponseSchema(
	z.object({
		billedNet: z.number(),
		billedVAT: z.number(),
		lastBilledDate: z.string(),
		lastCostDate: z.string(),
		outstandingToBill: z.number(),
		profitToDate: z.number(),
		totalBilled: z.number(),
		totalCost: z.number(),
		variance: z.number(),
		status: z.string(),
		accountRef: z.string(),
		reference: z.string(),
		name: z.string(),
		description: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		projectID: z.number(),
		priceQuoted: z.number(),
		totalBudget: z.number(),
		orderNumber: z.string(),
		analysis1: z.string(),
		analysis2: z.string(),
		analysis3: z.string(),
		address1: z.string(),
		address2: z.string(),
		address3: z.string(),
		address4: z.string(),
		address5: z.string(),
		contact: z.string(),
		email: z.string(),
	}),
);
const UpdateProjectInputSchema = z.object({
	name: z.string(),
	reference: z.string().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	description: z.string().optional(),
});
const UpdateProjectOutputSchema = ResponseSchema(z.number());
const ReadProjectTransactionsInputSchema = z.object({
	projectReference: z.string(),
});
const ReadProjectTransactionsOutputSchema = ResultsSchema(
	z.object({
		amount: z.number(),
		auditTrailID: z.number(),
		costCodeRef: z.string(),
		accountRef: z.string().nullable(),
		date: z.string(),
		details: z.string(),
		extReference: z.string(),
		reference: z.string(),
		quantity: z.number(),
		rate: z.number(),
		taxAmount: z.number(),
		transactionID: z.number(),
		type: z.number(),
	}),
);
const SearchProjectOnlyTransactionsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchProjectOnlyTransactionsOutputSchema = ResultsSchema(
	z.object({
		projectTranID: z.number(),
		projectReference: z.string(),
		type: z.string(),
		accountRef: z.string(),
		nominalCode: z.string(),
		reference: z.string(),
		extraRef: z.string(),
		details: z.string(),
		resourceID: z.number(),
		quantity: z.number(),
		rate: z.number(),
		taxAmount: z.number(),
		taxCode: z.string(),
		deptNumber: z.number(),
		deptName: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const SearchProjectTransactionsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchProjectTransactionsOutputSchema = ResultsSchema(
	z.object({
		projectTranID: z.number(),
		auditTrailID: z.number(),
		stockTrailID: z.number(),
		projectID: z.number(),
		projectReference: z.string(),
		costCodeID: z.number(),
		reveueCodeID: z.number(),
		popItemID: z.number(),
		stockAllocationID: z.number(),
		date: z.string(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		recordDeleted: z.boolean(),
	}),
);
const CreateProjectTransactionsInputSchema = z.object({
	projectReference: z.string(),
	costCodeRef: z.string(),
	date: z.string(),
	details: z.string(),
	reference: z.string(),
	quantity: z.number(),
	rate: z.number(),
	taxAmount: z.number(),
	type: z.number(),
});
const CreateProjectTransactionsOutputSchema = ResponseSchema(z.number());
const ReadProjectCostCodesOutputSchema = ResultsSchema(
	z.object({
		costCodeID: z.number(),
		description: z.string(),
		reference: z.string(),
		costTypeId: z.number(),
	}),
);
const CreateProjectCostCodesInputSchema = z.object({
	description: z.string(),
	reference: z.string(),
});
const CreateProjectCostCodesOutputSchema = ResponseSchema(z.number());
const ReadProjectBudgetsOutputSchema = ResultsSchema(
	z.object({
		projectId: z.number(),
		costCodeId: z.number(),
		amount: z.number(),
	}),
);
const AllocatePaymentOnAccountInputSchema = z.object({
	accountRef: z.string(),
	paymentTransactionNumber: z.number(),
	amount: z.string(),
	invRef: z.string(),
});
const AllocatePaymentOnAccountOutputSchema = ResponseSchema(z.boolean());
const SearchAuditHeadersOutputSchema = ResultsSchema(
	z.object({
		accountRef: z.string(),
		amountPaid: z.number(),
		bankCode: z.string(),
		currency: z.number(),
		type: z.string(),
		date: z.string(),
		details: z.string(),
		invRef: z.string(),
		netAmount: z.number(),
		taxAmount: z.number(),
		grossAmount: z.number(),
		foreignNetAmount: z.number(),
		foreignTaxAmount: z.number(),
		foreignGrossAmount: z.number(),
		tranNumber: z.number(),
		userName: z.string(),
		outstanding: z.number(),
		bankAmount: z.number(),
		bankFlag: z.string(),
		bankName: z.string(),
		dateBankReconciled: z.string(),
		dateEntered: z.string(),
		deletedFlag: z.number(),
		disputed: z.string(),
		dueDate: z.string(),
		foreignAmountPaid: z.number(),
		foreignBankAmount: z.number(),
		foreignOutstanding: z.number(),
		foreignRate: z.number(),
		agedBalance: z.number(),
		headerNumber: z.number(),
		invRefNumeric: z.number(),
		itemCount: z.number(),
		paidFlag: z.string(),
		paidStatus: z.string(),
		payment: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		salesPurchaseRef: z.string(),
	}),
);
const CreateHeaderTransactionInputSchema = z.object({
	date: z.string(),
	invRef: z.string(),
	bankCode: z.string(),
	taxAmount: z.number(),
	netAmount: z.number(),
	details: z.string(),
	currency: z.number(),
	accountRef: z.string(),
	taxCode: z.number(),
	type: z.number(),
});
const CreateHeaderTransactionOutputSchema = ResponseSchema(z.number());
const CreateBatchHeaderTransactionInputSchema = z.object({
	type: z.number(),
	date: z.string(),
	nominalCode: z.string(),
	invRef: z.string(),
	userName: z.string(),
	accountRef: z.string(),
	details: z.string(),
	Lines: z.array(
		z.object({
			nominalCode: z.string(),
			amount: z.number(),
			details: z.string(),
			taxCode: z.number(),
			taxAmount: z.number(),
			netAmount: z.number(),
			deptNumber: z.number(),
			exRef: z.string(),
		}),
	),
});
const CreateBatchHeaderTransactionOutputSchema = ResponseSchema(z.number());
const SearchAuditSplitsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchAuditSplitsOutputSchema = ResultsSchema(
	z.object({
		amountPaid: z.number(),
		netAmount: z.number(),
		taxAmount: z.number(),
		nominalCode: z.string(),
		details: z.string(),
		transactionNumber: z.number(),
		headerNumber: z.number(),
		accountRef: z.string(),
		bankCode: z.string(),
		bankFlag: z.string(),
		costCodeId: z.number(),
		date: z.string(),
		dateEntered: z.string(),
		dateFlag: z.number(),
		deletedFlag: z.number(),
		deptName: z.string(),
		deptNumber: z.number(),
		disputeCode: z.number(),
		disputed: z.number(),
		extraRef: z.string(),
		foreignAmountPaid: z.number(),
		foreignGrossAmount: z.number(),
		foreignNetAmount: z.number(),
		foreignOutstanding: z.number(),
		foreignTaxAmount: z.number(),
		grossAmount: z.number(),
		invRef: z.string(),
		outstanding: z.number(),
		paidFlag: z.string(),
		paidStatus: z.string(),
		payment: z.number(),
		projectId: z.number(),
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		splitNumber: z.number(),
		stmtText: z.string(),
		taxCode: z.string(),
		type: z.string(),
		userName: z.string(),
		vatFlag: z.string(),
		vatFlagCode: z.number(),
		vatReconciledDate: z.string(),
	}),
);
const SearchAuditUsageInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const SearchAuditUsageOutputSchema = ResultsSchema(
	z.object({
		type: z.string(),
		usageNumber: z.number(),
		splitNumber: z.number(),
		splitiCrossRef: z.string(),
		reference: z.string(),
		details: z.string(),
		username: z.string(),
		date: z.string(),
		amount: z.number(),
		foreignAmount: z.number(),
		deletedFlag: z.boolean(),
		recordCreatedDate: z.string(),
		recordModifyDate: z.string(),
	}),
);
const CreateBankTxInputSchema = z.object({
	bankCode: z.string(),
	netAmount: z.number(),
	taxAmount: z.number(),
	taxCode: z.number(),
	details: z.string(),
	date: z.string(),
	nominalCode: z.number(),
	invRef: z.string(),
	type: z.number(),
});
const CreateBankTxOutputSchema = ResponseSchema(z.number());
const CreateJournalTxInputSchema = z.object({
	date: z.string(),
	invRef: z.string(),
	accountRef: z.string(),
	splits: z.array(
		z.object({
			details: z.string(),
			netAmount: z.number(),
			taxAmount: z.number(),
			taxCode: z.number(),
			type: z.number(),
			nominalCode: z.string(),
			deptNumber: z.string(),
			extraRef: z.string(),
		}),
	),
});
const CreateJournalTxOutputSchema = ResponseSchema(z.number());
const CreateFixedAssetsInputSchema = z.object({
	assetRef: z.string(),
	details1: z.string(),
	details2: z.string(),
	details3: z.string(),
	employee: z.string(),
	balSheetNomCode: z.string(),
	profitLossNomCode: z.string(),
	depMethodCode: z.number(),
	depRate: z.number(),
	deptNumber: z.number(),
	assetCat: z.number(),
	purchaseDate: z.string(),
	costPrice: z.number(),
	depLast: z.number(),
	depToDate: z.number(),
	netBook: z.number(),
});
const CreateFixedAssetsOutputSchema = ResponseSchema(z.string());
const SearchFixedAssetsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
const ReadSearchAssetsInputSchema = z.object({
	assetRef: z.string(),
});
const SearchFixedAssetsOutputSchema = ResultsSchema(
	z.object({
		recordCreateDate: z.string(),
		recordModifyDate: z.string(),
		salesPurchaseRef: z.string().nullable(),
		assetRef: z.string(),
		details1: z.string(),
		details2: z.string(),
		details3: z.string(),
		employee: z.string(),
		serialNumber: z.string(),
		purchaseRef: z.string(),
		balSheetNomCode: z.string(),
		profitLossNomCode: z.string(),
		depMethodCode: z.number(),
		depRate: z.number(),
		deptNumber: z.number(),
		assetCat: z.number(),
		purchaseDate: z.string(),
		costPrice: z.number(),
		depLast: z.number(),
		depToDate: z.number(),
		netBook: z.number(),
	}),
);
const ReadSearchAssetsOutputSchema = ResponseSchema(
	z.object({
		assetRef: z.string(),
		details1: z.string(),
		details2: z.string(),
		details3: z.string(),
		employee: z.string(),
		serialNumber: z.string(),
		purchaseRef: z.string(),
		balSheetNomCode: z.string(),
		profitLossNomCode: z.string(),
		depMethodCode: z.number(),
		depRate: z.number(),
		deptNumber: z.number(),
		assetCat: z.number(),
		purchaseDate: z.string(),
		costPrice: z.number(),
		depLast: z.number(),
		depToDate: z.number(),
		netBook: z.number(),
	}),
);
const UpdateFixedAssetsInputSchema = z.object({
	assetRef: z.string(),
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
const UpdateFixedAssetsOutputSchema = ResponseSchema(z.string());
export class HyperAccountsClient {
	axios: Axios;
	constructor(config: z.infer<typeof HAConfigSchema>) {
		config = HAConfigSchema.parse(config);
		this.axios = new Axios({
			baseURL: config.baseURL,
			headers: {
				"Content-Type": "application/json",
				AuthToken: config.authToken,
			},
			responseType: "json",
			transformResponse: (x) => {
				try {
					return JSON.parse(x);
				} catch (error: unknown) {
					console.error("Failed to parse response:", x);
					throw error;
				}
			},
			transformRequest: (data) => JSON.stringify(data),
		});
	}
	async readApiStatus() {
		const url = "/api/status";
		const response = await this.axios.get(url);
		return ReadApiStatusOutputSchema.parse(response.data);
	}
	async readApiVersion() {
		const url = "/api/system/version";
		const response = await this.axios.get(url);
		return ReadApiVersionOutputSchema.parse(response.data);
	}
	async readCompanySettings() {
		const url = "/api/company";
		const response = await this.axios.get(url);
		return ReadCompanySettingsOutputSchema.parse(response.data);
	}
	async readRdaEnabled() {
		const url = "/api/setup";
		const response = await this.axios.get(url);
		return ReadRdaEnabledOutputSchema.parse(response.data);
	}
	async readExchangeRates() {
		const url = "/api/currency";
		const response = await this.axios.get(url);
		return ReadExchangeRatesOutputSchema.parse(response.data);
	}
	async updateExchangeRate(
		input: z.infer<typeof UpdateExchangeRateInputSchema>,
	) {
		input = UpdateExchangeRateInputSchema.parse(input);
		const url = "/api/currency";
		const response = await this.axios.patch(url, input);
		return UpdateExchangeRateOutputSchema.parse(response.data);
	}
	async readCountries() {
		const url = "/api/country";
		const response = await this.axios.get(url);
		return ReadCountriesOutputSchema.parse(response.data);
	}
	async readCouriers() {
		const url = "/api/courier";
		const response = await this.axios.get(url);
		return ReadCouriersOutputSchema.parse(response.data);
	}
	async readNominals() {
		const url = "/api/nominal/";
		const response = await this.axios.get(url);
		return ReadNominalsOutputSchema.parse(response.data);
	}
	async readTaxCodes() {
		const url = "/api/taxCode";
		const response = await this.axios.get(url);
		return ReadTaxCodesOutputSchema.parse(response.data);
	}
	async readControlAccounts() {
		const url = "/api/control";
		const response = await this.axios.get(url);
		return ReadControlAccountsOutputSchema.parse(response.data);
	}
	async getPaymentMethods() {
		const url = "/api/paymentMethod";
		const response = await this.axios.get(url);
		return GetPaymentMethodsOutputSchema.parse(response.data);
	}
	async readDepartments() {
		const url = "/api/department";
		const response = await this.axios.get(url);
		return ReadDepartmentsOutputSchema.parse(response.data);
	}
	async readChartOfAccounts() {
		const url = "/api/coa";
		const response = await this.axios.get(url);
		return ReadChartOfAccountsOutputSchema.parse(response.data);
	}
	async searchCustomer(input: z.infer<typeof SearchCustomerInputSchema>) {
		input = SearchCustomerInputSchema.parse(input);
		const url = "/api/searchSalesLedger";
		const response = await this.axios.post(url, input);
		return SearchCustomerOutputSchema.parse(response.data);
	}
	async readCustomer(input: z.infer<typeof ReadCustomerInputSchema>) {
		input = ReadCustomerInputSchema.parse(input);
		const url = `/api/customer/${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerOutputSchema.parse(response.data);
	}
	async createCustomer(input: z.infer<typeof CreateCustomerInputSchema>) {
		input = CreateCustomerInputSchema.parse(input);
		const url = "/api/customer/";
		const response = await this.axios.post(url, input);
		return CreateCustomerOutputSchema.parse(response.data);
	}
	async updateCustomer(input: z.infer<typeof UpdateCustomerInputSchema>) {
		input = UpdateCustomerInputSchema.parse(input);
		const url = "/api/customer/";
		const response = await this.axios.patch(url, input);
		return UpdateCustomerOutputSchema.parse(response.data);
	}
	async readCustomerAgedBalances(
		input: z.infer<typeof ReadCustomerAgedBalancesInputSchema>,
	) {
		input = ReadCustomerAgedBalancesInputSchema.parse(input);
		const url = `/api/agedDebtors/?id=${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerAgedBalancesOutputSchema.parse(response.data);
	}
	async readCustomerAddress(
		input: z.infer<typeof ReadCustomerAddressInputSchema>,
	) {
		input = ReadCustomerAddressInputSchema.parse(input);
		const url = `/api/customerAddress/${input.customer}/2`;
		const response = await this.axios.get(url);
		return ReadCustomerAddressOutputSchema.parse(response.data);
	}
	async createCustomerAddress(
		input: z.infer<typeof CreateCustomerAddressInputSchema>,
	) {
		input = CreateCustomerAddressInputSchema.parse(input);
		const url = "/api/customerAddress";
		const response = await this.axios.post(url, input);
		return CreateCustomerAddressOutputSchema.parse(response.data);
	}
	async updateCustomerAddress(
		input: z.infer<typeof UpdateCustomerAddressInputSchema>,
	) {
		input = UpdateCustomerAddressInputSchema.parse(input);
		const url = "/api/customerAddress";
		const response = await this.axios.patch(url, input);
		return UpdateCustomerAddressOutputSchema.parse(response.data);
	}
	async searchCustomerAddress(
		input: z.infer<typeof SearchCustomerAddressInputSchema>,
	) {
		input = SearchCustomerAddressInputSchema.parse(input);
		const url = "/api/searchCustomerAddress";
		const response = await this.axios.post(url, input);
		return SearchCustomerAddressOutputSchema.parse(response.data);
	}
	async searchSupplier(input: z.infer<typeof SearchSupplierInputSchema>) {
		input = SearchSupplierInputSchema.parse(input);
		const url = "/api/searchPurchaseLedger";
		const response = await this.axios.post(url, input);
		return SearchSupplierOutputSchema.parse(response.data);
	}
	async readSupplier(input: z.infer<typeof ReadSupplierInputSchema>) {
		input = ReadSupplierInputSchema.parse(input);
		const url = `/api/supplier/${input.supplier}`;
		const response = await this.axios.get(url);
		return ReadSupplierOutputSchema.parse(response.data);
	}
	async createSupplier(input: z.infer<typeof CreateSupplierInputSchema>) {
		input = CreateSupplierInputSchema.parse(input);
		const url = "/api/supplier";
		const response = await this.axios.post(url, input);
		return CreateSupplierOutputSchema.parse(response.data);
	}
	async updateSupplier(input: z.infer<typeof UpdateSupplierInputSchema>) {
		input = UpdateSupplierInputSchema.parse(input);
		const url = "/api/supplier";
		const response = await this.axios.patch(url, input);
		return UpdateSupplierOutputSchema.parse(response.data);
	}
	async searchProduct(input: z.infer<typeof SearchProductInputSchema>) {
		input = SearchProductInputSchema.parse(input);
		const url = "/api/searchProduct";
		const response = await this.axios.post(url, input);
		return SearchProductOutputSchema.parse(response.data);
	}
	async readProduct(input: z.infer<typeof ReadProductInputSchema>) {
		input = ReadProductInputSchema.parse(input);
		const url = `/api/product/${input.stockCode}`;
		const response = await this.axios.get(url);
		return ReadProductOutputSchema.parse(response.data);
	}
	async readStockCategories() {
		const url = "/api/stockCat";
		const response = await this.axios.get(url);
		return ReadStockCategoriesOutputSchema.parse(response.data);
	}
	async readProductImage(input: z.infer<typeof ReadProductImageInputSchema>) {
		input = ReadProductImageInputSchema.parse(input);
		const url = `/api/product/${input.stockCode}/webImage`;
		const response = await this.axios.get(url);
		return ReadProductImageOutputSchema.parse(response.data);
	}
	async createProduct(input: z.infer<typeof CreateProductInputSchema>) {
		input = CreateProductInputSchema.parse(input);
		const url = "/api/product";
		const response = await this.axios.post(url, input);
		return CreateProductOutputSchema.parse(response.data);
	}
	async updateProduct(input: z.infer<typeof UpdateProductInputSchema>) {
		input = UpdateProductInputSchema.parse(input);
		const url = "/api/product";
		const response = await this.axios.patch(url, input);
		return UpdateProductOutputSchema.parse(response.data);
	}
	async stockAdjustments(input: z.infer<typeof StockAdjustmentsInputSchema>) {
		input = StockAdjustmentsInputSchema.parse(input);
		const url = "/api/stock";
		const response = await this.axios.post(url, input);
		return StockAdjustmentsOutputSchema.parse(response.data);
	}
	async readStockMovements(
		input: z.infer<typeof ReadStockMovementsInputSchema>,
	) {
		input = ReadStockMovementsInputSchema.parse(input);
		const url = `/api/stock/${input.stockCode}`;
		const response = await this.axios.get(url);
		return ReadStockMovementsOutputSchema.parse(response.data);
	}
	async searchStockMovements(
		input: z.infer<typeof SearchStockMovementsInputSchema>,
	) {
		input = SearchStockMovementsInputSchema.parse(input);
		const url = "/api/searchStock";
		const response = await this.axios.post(url, input);
		return SearchStockMovementsOutputSchema.parse(response.data);
	}
	async readCustomerPriceLists(
		input: z.infer<typeof ReadCustomerPriceListsInputSchema>,
	) {
		input = ReadCustomerPriceListsInputSchema.parse(input);
		const url = `/api/priceList/${input.customer}`;
		const response = await this.axios.get(url);
		return ReadCustomerPriceListsOutputSchema.parse(response.data);
	}
	async readAllPriceLists() {
		const url = "/api/priceList";
		const response = await this.axios.get(url);
		return ReadAllPriceListsOutputSchema.parse(response.data);
	}
	async searchProductSellingPrices(
		input: z.infer<typeof SearchProductSellingPricesInputSchema>,
	) {
		input = SearchProductSellingPricesInputSchema.parse(input);
		const url = "/api/searchPrice";
		const response = await this.axios.post(url, input);
		return SearchProductSellingPricesOutputSchema.parse(response.data);
	}
	async searchSalesOrder(input: z.infer<typeof SearchSalesOrderInputSchema>) {
		input = SearchSalesOrderInputSchema.parse(input);
		const url = "/api/searchSalesOrder";
		const response = await this.axios.post(url, input);
		return SearchSalesOrderOutputSchema.parse(response.data);
	}
	async createSalesOrder(input: z.infer<typeof CreateSalesOrderInputSchema>) {
		input = CreateSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrder/";
		const response = await this.axios.post(url, input);
		return CreateSalesOrderOutputSchema.parse(response.data);
	}
	async readSalesOrder(input: z.infer<typeof ReadSalesOrderInputSchema>) {
		input = ReadSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.orderNumber}`;
		const response = await this.axios.get(url);
		return ReadSalesOrderOutputSchema.parse(response.data);
	}
	async updateSalesOrder(input: z.infer<typeof UpdateSalesOrderInputSchema>) {
		input = UpdateSalesOrderInputSchema.parse(input);
		const url = "/api/salesorder/";
		const response = await this.axios.patch(url, input);
		return UpdateSalesOrderOutputSchema.parse(response.data);
	}
	async partiallyAllocateSalesOrder(
		input: z.infer<typeof PartiallyAllocateSalesOrderInputSchema>,
	) {
		input = PartiallyAllocateSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrderPartialAllocation";
		const response = await this.axios.post(url, input);
		return PartiallyAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async fullyAllocateSalesOrder(
		input: z.infer<typeof FullyAllocateSalesOrderInputSchema>,
	) {
		input = FullyAllocateSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/fullyAllocate`;
		const response = await this.axios.post(url, undefined);
		return FullyAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async fullyUnAllocateSalesOrder(
		input: z.infer<typeof FullyUnAllocateSalesOrderInputSchema>,
	) {
		input = FullyUnAllocateSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrderDeAllocation/${input.id}`;
		const response = await this.axios.post(url, undefined);
		return FullyUnAllocateSalesOrderOutputSchema.parse(response.data);
	}
	async partiallyDespatchSalesOrder(
		input: z.infer<typeof PartiallyDespatchSalesOrderInputSchema>,
	) {
		input = PartiallyDespatchSalesOrderInputSchema.parse(input);
		const url = "/api/salesOrderPartialDespatch";
		const response = await this.axios.post(url, input);
		return PartiallyDespatchSalesOrderOutputSchema.parse(response.data);
	}
	async completeSalesOrder(
		input: z.infer<typeof CompleteSalesOrderInputSchema>,
	) {
		input = CompleteSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/complete`;
		const response = await this.axios.post(url, undefined);
		return CompleteSalesOrderOutputSchema.parse(response.data);
	}
	async completeSalesOrderWithOwnInvoiceDate(
		input: z.infer<typeof CompleteSalesOrderWithOwnInvoiceDateInputSchema>,
	) {
		input = CompleteSalesOrderWithOwnInvoiceDateInputSchema.parse(input);
		const url = "/api/salesOrderComplete";
		const response = await this.axios.post(url, input);
		return CompleteSalesOrderWithOwnInvoiceDateOutputSchema.parse(
			response.data,
		);
	}
	async holdSalesOrder(input: z.infer<typeof HoldSalesOrderInputSchema>) {
		input = HoldSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}/hold`;
		const response = await this.axios.post(url, undefined);
		return HoldSalesOrderOutputSchema.parse(response.data);
	}
	async cancelSalesOrder(input: z.infer<typeof CancelSalesOrderInputSchema>) {
		input = CancelSalesOrderInputSchema.parse(input);
		const url = `/api/salesOrder/${input.id}`;
		const response = await this.axios.delete(url);
		return CancelSalesOrderOutputSchema.parse(response.data);
	}
	async searchDispatches(input: z.infer<typeof SearchDispatchesInputSchema>) {
		input = SearchDispatchesInputSchema.parse(input);
		const url = "/api/searchDispatch";
		const response = await this.axios.post(url, input);
		return SearchDispatchesOutputSchema.parse(response.data);
	}
	async searchSalesItems(input: z.infer<typeof SearchSalesItemsInputSchema>) {
		input = SearchSalesItemsInputSchema.parse(input);
		const url = "/api/searchSopItem";
		const response = await this.axios.post(url, input);
		return SearchSalesItemsOutputSchema.parse(response.data);
	}
	async updateSalesOrderItems(
		input: z.infer<typeof UpdateSalesOrderItemsInputSchema>,
	) {
		input = UpdateSalesOrderItemsInputSchema.parse(input);
		const url = "/api/salesOrderItems";
		const response = await this.axios.patch(url, input);
		return UpdateSalesOrderItemsOutputSchema.parse(response.data);
	}
	async searchPurchaseOrders(
		input: z.infer<typeof SearchPurchaseOrdersInputSchema>,
	) {
		input = SearchPurchaseOrdersInputSchema.parse(input);
		const url = "/api/searchPurchaseOrder";
		const response = await this.axios.post(url, input);
		return SearchPurchaseOrdersOutputSchema.parse(response.data);
	}
	async createPurchaseOrder(
		input: z.infer<typeof CreatePurchaseOrderInputSchema>,
	) {
		input = CreatePurchaseOrderInputSchema.parse(input);
		const url = "/api/purchaseOrder";
		const response = await this.axios.post(url, input);
		return CreatePurchaseOrderOutputSchema.parse(response.data);
	}
	async readPurchaseOrder(input: z.infer<typeof ReadPurchaseOrderInputSchema>) {
		input = ReadPurchaseOrderInputSchema.parse(input);
		const url = `/api/purchaseOrder/${input.orderNumber}`;
		const response = await this.axios.get(url);
		return ReadPurchaseOrderOutputSchema.parse(response.data);
	}
	async updatePurchaseOrder(
		input: z.infer<typeof UpdatePurchaseOrderInputSchema>,
	) {
		input = UpdatePurchaseOrderInputSchema.parse(input);
		const url = "/api/purchaseOrder/";
		const response = await this.axios.patch(url, input);
		return UpdatePurchaseOrderOutputSchema.parse(response.data);
	}
	async deletePurchaseOrder(
		input: z.infer<typeof DeletePurchaseOrderInputSchema>,
	) {
		input = DeletePurchaseOrderInputSchema.parse(input);
		const url = `/api/purchaseOrder/${input.orderNumber}`;
		const response = await this.axios.delete(url);
		return DeletePurchaseOrderOutputSchema.parse(response.data);
	}
	async searchPurchaseItems(
		input: z.infer<typeof SearchPurchaseItemsInputSchema>,
	) {
		input = SearchPurchaseItemsInputSchema.parse(input);
		const url = "/api/searchPopItem";
		const response = await this.axios.post(url, input);
		return SearchPurchaseItemsOutputSchema.parse(response.data);
	}
	async searchGoodsReceivedNotes(
		input: z.infer<typeof SearchGoodsReceivedNotesInputSchema>,
	) {
		input = SearchGoodsReceivedNotesInputSchema.parse(input);
		const url = "/api/searchGoodsReceivedNotes";
		const response = await this.axios.post(url, input);
		return SearchGoodsReceivedNotesOutputSchema.parse(response.data);
	}
	async goodsReceivedNotes(
		input: z.infer<typeof GoodsReceivedNotesInputSchema>,
	) {
		input = GoodsReceivedNotesInputSchema.parse(input);
		const url = "/api/goodsReceivedNotes";
		const response = await this.axios.post(url, input);
		return GoodsReceivedNotesOutputSchema.parse(response.data);
	}
	async searchDeliveries(input: z.infer<typeof SearchDeliveriesInputSchema>) {
		input = SearchDeliveriesInputSchema.parse(input);
		const url = "/api/searchDelivery";
		const response = await this.axios.post(url, input);
		return SearchDeliveriesOutputSchema.parse(response.data);
	}
	async searchSalesInvoices(
		input: z.infer<typeof SearchSalesInvoicesInputSchema>,
	) {
		input = SearchSalesInvoicesInputSchema.parse(input);
		const url = "/api/searchInvoice";
		const response = await this.axios.post(url, input);
		return SearchSalesInvoicesOutputSchema.parse(response.data);
	}
	async readSalesInvoice(input: z.infer<typeof ReadSalesInvoiceInputSchema>) {
		input = ReadSalesInvoiceInputSchema.parse(input);
		const url = `/api/salesInvoice/${input.id}`;
		const response = await this.axios.get(url);
		return ReadSalesInvoiceOutputSchema.parse(response.data);
	}
	async updateSalesInvoice(
		input: z.infer<typeof UpdateSalesInvoiceInputSchema>,
	) {
		input = UpdateSalesInvoiceInputSchema.parse(input);
		const url = "/api/salesInvoice/";
		const response = await this.axios.patch(url, input);
		return UpdateSalesInvoiceOutputSchema.parse(response.data);
	}
	async createSalesInvoice(
		input: z.infer<typeof CreateSalesInvoiceInputSchema>,
	) {
		input = CreateSalesInvoiceInputSchema.parse(input);
		const url = "/api/salesInvoice/";
		const response = await this.axios.post(url, input);
		return CreateSalesInvoiceOutputSchema.parse(response.data);
	}
	async searchSalesInvoiceItems(
		input: z.infer<typeof SearchSalesInvoiceItemsInputSchema>,
	) {
		input = SearchSalesInvoiceItemsInputSchema.parse(input);
		const url = "/api/searchInvoiceItem";
		const response = await this.axios.post(url, input);
		return SearchSalesInvoiceItemsOutputSchema.parse(response.data);
	}
	async createPurchaseInvoice(
		input: z.infer<typeof CreatePurchaseInvoiceInputSchema>,
	) {
		input = CreatePurchaseInvoiceInputSchema.parse(input);
		const url = "/api/purchaseInvoice";
		const response = await this.axios.post(url, input);
		return CreatePurchaseInvoiceOutputSchema.parse(response.data);
	}
	async readDocumentLink(input: z.infer<typeof ReadDocumentLinkInputSchema>) {
		input = ReadDocumentLinkInputSchema.parse(input);
		const url = `/api/documentLink/${input.transactionNumber}`;
		const response = await this.axios.get(url);
		return ReadDocumentLinkOutputSchema.parse(response.data);
	}
	async searchProjects(input: z.infer<typeof SearchProjectsInputSchema>) {
		input = SearchProjectsInputSchema.parse(input);
		const url = "/api/searchProject";
		const response = await this.axios.post(url, input);
		return SearchProjectsOutputSchema.parse(response.data);
	}
	async createProject(input: z.infer<typeof CreateProjectInputSchema>) {
		input = CreateProjectInputSchema.parse(input);
		const url = "/api/project";
		const response = await this.axios.post(url, input);
		return CreateProjectOutputSchema.parse(response.data);
	}
	async readProject(input: z.infer<typeof ReadProjectInputSchema>) {
		input = ReadProjectInputSchema.parse(input);
		const url = `/api/project/${input.id}`;
		const response = await this.axios.get(url);
		return ReadProjectOutputSchema.parse(response.data);
	}
	async updateProject(input: z.infer<typeof UpdateProjectInputSchema>) {
		input = UpdateProjectInputSchema.parse(input);
		const url = "/api/project";
		const response = await this.axios.patch(url, input);
		return UpdateProjectOutputSchema.parse(response.data);
	}
	async readProjectTransactions(
		input: z.infer<typeof ReadProjectTransactionsInputSchema>,
	) {
		input = ReadProjectTransactionsInputSchema.parse(input);
		const url = `/api/project/${input.projectReference}/transactions`;
		const response = await this.axios.get(url);
		return ReadProjectTransactionsOutputSchema.parse(response.data);
	}
	async searchProjectOnlyTransactions(
		input: z.infer<typeof SearchProjectOnlyTransactionsInputSchema>,
	) {
		input = SearchProjectOnlyTransactionsInputSchema.parse(input);
		const url = "/api/searchProjectTransaction";
		const response = await this.axios.post(url, input);
		return SearchProjectOnlyTransactionsOutputSchema.parse(response.data);
	}
	async searchProjectTransactions(
		input: z.infer<typeof SearchProjectTransactionsInputSchema>,
	) {
		input = SearchProjectTransactionsInputSchema.parse(input);
		const url = "/api/searchProjectTran";
		const response = await this.axios.post(url, input);
		return SearchProjectTransactionsOutputSchema.parse(response.data);
	}
	async createProjectTransactions(
		input: z.infer<typeof CreateProjectTransactionsInputSchema>,
	) {
		input = CreateProjectTransactionsInputSchema.parse(input);
		const { projectReference, ...body } = input;
		const url = `/api/project/${projectReference}/transactions`;
		const response = await this.axios.post(url, body);
		return CreateProjectTransactionsOutputSchema.parse(response.data);
	}
	async readProjectCostCodes() {
		const url = "/api/projectCostCode";
		const response = await this.axios.get(url);
		return ReadProjectCostCodesOutputSchema.parse(response.data);
	}
	async createProjectCostCodes(
		input: z.infer<typeof CreateProjectCostCodesInputSchema>,
	) {
		input = CreateProjectCostCodesInputSchema.parse(input);
		const url = "/api/projectCostCode";
		const response = await this.axios.post(url, input);
		return CreateProjectCostCodesOutputSchema.parse(response.data);
	}
	async readProjectBudgets() {
		const url = "/api/projectBudgets";
		const response = await this.axios.get(url);
		return ReadProjectBudgetsOutputSchema.parse(response.data);
	}
	async allocatePaymentOnAccount(
		input: z.infer<typeof AllocatePaymentOnAccountInputSchema>,
	) {
		input = AllocatePaymentOnAccountInputSchema.parse(input);
		const url = "/api/allocatePaymentOnAccount";
		const response = await this.axios.post(url, input);
		return AllocatePaymentOnAccountOutputSchema.parse(response.data);
	}
	async searchAuditHeaders() {
		const url = "/api/search/auditHeaders";
		const response = await this.axios.post(url, undefined);
		return SearchAuditHeadersOutputSchema.parse(response.data);
	}
	async createHeaderTransaction(
		input: z.infer<typeof CreateHeaderTransactionInputSchema>,
	) {
		input = CreateHeaderTransactionInputSchema.parse(input);
		const url = "/api/transactionPost";
		const response = await this.axios.post(url, input);
		return CreateHeaderTransactionOutputSchema.parse(response.data);
	}
	async createBatchHeaderTransaction(
		input: z.infer<typeof CreateBatchHeaderTransactionInputSchema>,
	) {
		input = CreateBatchHeaderTransactionInputSchema.parse(input);
		const url = "/api/batchtransactionPost";
		const response = await this.axios.post(url, input);
		return CreateBatchHeaderTransactionOutputSchema.parse(response.data);
	}
	async searchAuditSplits(input: z.infer<typeof SearchAuditSplitsInputSchema>) {
		input = SearchAuditSplitsInputSchema.parse(input);
		const url = "/api/searchSplit";
		const response = await this.axios.post(url, input);
		return SearchAuditSplitsOutputSchema.parse(response.data);
	}
	async searchAuditUsage(input: z.infer<typeof SearchAuditUsageInputSchema>) {
		input = SearchAuditUsageInputSchema.parse(input);
		const url = "/api/searchUsage";
		const response = await this.axios.post(url, input);
		return SearchAuditUsageOutputSchema.parse(response.data);
	}
	async createBankTx(input: z.infer<typeof CreateBankTxInputSchema>) {
		input = CreateBankTxInputSchema.parse(input);
		const url = "/api/bank";
		const response = await this.axios.post(url, input);
		return CreateBankTxOutputSchema.parse(response.data);
	}
	async createJournalTx(input: z.infer<typeof CreateJournalTxInputSchema>) {
		input = CreateJournalTxInputSchema.parse(input);
		const url = "/api/journal";
		const response = await this.axios.post(url, input);
		return CreateJournalTxOutputSchema.parse(response.data);
	}
	async createFixedAssets(input: z.infer<typeof CreateFixedAssetsInputSchema>) {
		input = CreateFixedAssetsInputSchema.parse(input);
		const url = "/api/fixedAssets";
		const response = await this.axios.post(url, input);
		return CreateFixedAssetsOutputSchema.parse(response.data);
	}
	async searchFixedAssets(input: z.infer<typeof SearchFixedAssetsInputSchema>) {
		input = SearchFixedAssetsInputSchema.parse(input);
		const url = "/api/searchfixedAsset";
		const response = await this.axios.post(url, input);
		return SearchFixedAssetsOutputSchema.parse(response.data);
	}
	async readSearchAssets(input: z.infer<typeof ReadSearchAssetsInputSchema>) {
		input = ReadSearchAssetsInputSchema.parse(input);
		const url = `/api/fixedAssets/${input.assetRef}`;
		const response = await this.axios.get(url);
		return ReadSearchAssetsOutputSchema.parse(response.data);
	}
	async updateFixedAssets(input: z.infer<typeof UpdateFixedAssetsInputSchema>) {
		input = UpdateFixedAssetsInputSchema.parse(input);
		const url = "/api/fixedAssets";
		const response = await this.axios.patch(url, input);
		return UpdateFixedAssetsOutputSchema.parse(response.data);
	}
}
