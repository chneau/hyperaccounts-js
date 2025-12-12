/// <amd-module name="@chneau/hyperaccounts" />
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
	success: z.boolean(),
	code: z.number(),
	response: z.object({
		apiVersion: z.string(),
		sageVersion: z.string(),
		companyName: z.string(),
		sdoStatusOk: z.boolean(),
		odbcStatusOk: z.boolean(),
	}),
	message: z.string(),
});
type ReadApiStatusOutput = z.infer<typeof ReadApiStatusOutputSchema>;
const ReadApiVersionInputSchema = z.void();
type ReadApiVersionInput = z.infer<typeof ReadApiVersionInputSchema>;
const ReadApiVersionOutputSchema = z.string();
type ReadApiVersionOutput = z.infer<typeof ReadApiVersionOutputSchema>;
const ReadCompanySettingsInputSchema = z.void();
type ReadCompanySettingsInput = z.infer<typeof ReadCompanySettingsInputSchema>;
const ReadCompanySettingsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
		lockDate: z.string(),
	}),
	message: z.string().nullable(),
});
type ReadCompanySettingsOutput = z.infer<
	typeof ReadCompanySettingsOutputSchema
>;
const ReadRdaEnabledInputSchema = z.void();
type ReadRdaEnabledInput = z.infer<typeof ReadRdaEnabledInputSchema>;
const ReadRdaEnabledOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
		isRDAEnabled: z.boolean(),
	}),
	message: z.string().nullable(),
});
type ReadRdaEnabledOutput = z.infer<typeof ReadRdaEnabledOutputSchema>;
const ReadExchangeRatesInputSchema = z.void();
type ReadExchangeRatesInput = z.infer<typeof ReadExchangeRatesInputSchema>;
const ReadExchangeRatesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadExchangeRatesOutput = z.infer<typeof ReadExchangeRatesOutputSchema>;
const UpdateExchangeRateInputSchema = z.object({
	id: z.number(),
	code: z.string(),
	emuMember: z.number(),
	exchangeRate: z.number(),
	majorUnit: z.string(),
	minorUnit: z.string(),
	name: z.string(),
});
type UpdateExchangeRateInput = z.infer<typeof UpdateExchangeRateInputSchema>;
const UpdateExchangeRateOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type UpdateExchangeRateOutput = z.infer<typeof UpdateExchangeRateOutputSchema>;
const ReadCountriesInputSchema = z.void();
type ReadCountriesInput = z.infer<typeof ReadCountriesInputSchema>;
const ReadCountriesOutputSchema = z.object({
	results: z.array(
		z.object({
			code: z.string(),
			name: z.string(),
			euMember: z.boolean(),
			createdDate: z.string(),
			modifiedDate: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadCountriesOutput = z.infer<typeof ReadCountriesOutputSchema>;
const ReadCouriersInputSchema = z.void();
type ReadCouriersInput = z.infer<typeof ReadCouriersInputSchema>;
const ReadCouriersOutputSchema = z.object({
	results: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			www: z.string(),
			search: z.string(),
			createdDate: z.string(),
			modifiedDate: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadCouriersOutput = z.infer<typeof ReadCouriersOutputSchema>;
const ReadNominalsInputSchema = z.void();
type ReadNominalsInput = z.infer<typeof ReadNominalsInputSchema>;
const ReadNominalsOutputSchema = z.object({
	results: z.array(
		z.object({
			accountRef: z.string(),
			name: z.string(),
			type: z.number(),
			balance: z.number(),
			inactiveFlag: z.number(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadNominalsOutput = z.infer<typeof ReadNominalsOutputSchema>;
const ReadTaxCodesInputSchema = z.void();
type ReadTaxCodesInput = z.infer<typeof ReadTaxCodesInputSchema>;
const ReadTaxCodesOutputSchema = z.object({
	results: z.array(
		z.object({
			index: z.number(),
			description: z.string(),
			rate: z.number(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadTaxCodesOutput = z.infer<typeof ReadTaxCodesOutputSchema>;
const ReadControlAccountsInputSchema = z.void();
type ReadControlAccountsInput = z.infer<typeof ReadControlAccountsInputSchema>;
const ReadControlAccountsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadControlAccountsOutput = z.infer<
	typeof ReadControlAccountsOutputSchema
>;
const GetPaymentMethodsInputSchema = z.void();
type GetPaymentMethodsInput = z.infer<typeof GetPaymentMethodsInputSchema>;
const GetPaymentMethodsOutputSchema = z.object({
	results: z.array(
		z.object({
			id: z.number(),
			description: z.string(),
			isOnline: z.number(),
			isReadonly: z.number(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type GetPaymentMethodsOutput = z.infer<typeof GetPaymentMethodsOutputSchema>;
const ReadDepartmentsInputSchema = z.void();
type ReadDepartmentsInput = z.infer<typeof ReadDepartmentsInputSchema>;
const ReadDepartmentsOutputSchema = z.object({
	results: z.array(
		z.object({
			reference: z.string(),
			name: z.string(),
			id: z.number(),
			recordCreateDate: z.string(),
			recordModifyDate: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadDepartmentsOutput = z.infer<typeof ReadDepartmentsOutputSchema>;
const ReadChartOfAccountsInputSchema = z.void();
type ReadChartOfAccountsInput = z.infer<typeof ReadChartOfAccountsInputSchema>;
const ReadChartOfAccountsOutputSchema = z.object({
	results: z.array(
		z.object({
			name: z.string(),
			low: z.string(),
			high: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadChartOfAccountsOutput = z.infer<
	typeof ReadChartOfAccountsOutputSchema
>;
const SearchCustomerInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchCustomerInput = z.infer<typeof SearchCustomerInputSchema>;
const SearchCustomerOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchCustomerOutput = z.infer<typeof SearchCustomerOutputSchema>;
const ReadCustomerInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerInput = z.infer<typeof ReadCustomerInputSchema>;
const ReadCustomerOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadCustomerOutput = z.infer<typeof ReadCustomerOutputSchema>;
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
type CreateCustomerInput = z.infer<typeof CreateCustomerInputSchema>;
const CreateCustomerOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type CreateCustomerOutput = z.infer<typeof CreateCustomerOutputSchema>;
const UpdateCustomerInputSchema = z.object({
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
});
type UpdateCustomerInput = z.infer<typeof UpdateCustomerInputSchema>;
const UpdateCustomerOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type UpdateCustomerOutput = z.infer<typeof UpdateCustomerOutputSchema>;
const ReadCustomerAgedBalancesInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerAgedBalancesInput = z.infer<
	typeof ReadCustomerAgedBalancesInputSchema
>;
const ReadCustomerAgedBalancesOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
		total: z.number(),
		current: z.number(),
		future: z.number(),
		period30Days: z.number(),
		period60Days: z.number(),
		period90Days: z.number(),
		older: z.number(),
	}),
	message: z.string().nullable(),
});
type ReadCustomerAgedBalancesOutput = z.infer<
	typeof ReadCustomerAgedBalancesOutputSchema
>;
const ReadCustomerAddressInputSchema = z.object({
	customer: z.string(),
});
type ReadCustomerAddressInput = z.infer<typeof ReadCustomerAddressInputSchema>;
const ReadCustomerAddressOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadCustomerAddressOutput = z.infer<
	typeof ReadCustomerAddressOutputSchema
>;
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
type CreateCustomerAddressInput = z.infer<
	typeof CreateCustomerAddressInputSchema
>;
const CreateCustomerAddressOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateCustomerAddressOutput = z.infer<
	typeof CreateCustomerAddressOutputSchema
>;
const UpdateCustomerAddressInputSchema = z.object({
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
});
type UpdateCustomerAddressInput = z.infer<
	typeof UpdateCustomerAddressInputSchema
>;
const UpdateCustomerAddressOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.boolean(),
	message: z.string().nullable(),
});
type UpdateCustomerAddressOutput = z.infer<
	typeof UpdateCustomerAddressOutputSchema
>;
const SearchCustomerAddressInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchCustomerAddressInput = z.infer<
	typeof SearchCustomerAddressInputSchema
>;
const SearchCustomerAddressOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchCustomerAddressOutput = z.infer<
	typeof SearchCustomerAddressOutputSchema
>;
const SearchSupplierInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchSupplierInput = z.infer<typeof SearchSupplierInputSchema>;
const SearchSupplierOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchSupplierOutput = z.infer<typeof SearchSupplierOutputSchema>;
const ReadSupplierInputSchema = z.object({
	supplier: z.string(),
});
type ReadSupplierInput = z.infer<typeof ReadSupplierInputSchema>;
const ReadSupplierOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadSupplierOutput = z.infer<typeof ReadSupplierOutputSchema>;
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
type CreateSupplierInput = z.infer<typeof CreateSupplierInputSchema>;
const CreateSupplierOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type CreateSupplierOutput = z.infer<typeof CreateSupplierOutputSchema>;
const UpdateSupplierInputSchema = z.object({
	accountRef: z.string(),
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
	bankAccountName: z.string(),
	bankSortCode: z.string(),
	bankAccountNumber: z.string(),
	defaultTaxCode: z.number(),
	vatNumber: z.string(),
});
type UpdateSupplierInput = z.infer<typeof UpdateSupplierInputSchema>;
const UpdateSupplierOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type UpdateSupplierOutput = z.infer<typeof UpdateSupplierOutputSchema>;
const SearchProductInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchProductInput = z.infer<typeof SearchProductInputSchema>;
const SearchProductOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchProductOutput = z.infer<typeof SearchProductOutputSchema>;
const ReadProductInputSchema = z.object({
	stockCode: z.string(),
});
type ReadProductInput = z.infer<typeof ReadProductInputSchema>;
const ReadProductOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadProductOutput = z.infer<typeof ReadProductOutputSchema>;
const ReadStockCategoriesInputSchema = z.void();
type ReadStockCategoriesInput = z.infer<typeof ReadStockCategoriesInputSchema>;
const ReadStockCategoriesOutputSchema = z.object({
	results: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadStockCategoriesOutput = z.infer<
	typeof ReadStockCategoriesOutputSchema
>;
const ReadProductImageInputSchema = z.object({
	stockCode: z.string(),
});
type ReadProductImageInput = z.infer<typeof ReadProductImageInputSchema>;
const ReadProductImageOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string(),
});
type ReadProductImageOutput = z.infer<typeof ReadProductImageOutputSchema>;
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
type CreateProductInput = z.infer<typeof CreateProductInputSchema>;
const CreateProductOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type CreateProductOutput = z.infer<typeof CreateProductOutputSchema>;
const UpdateProductInputSchema = z.object({
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
	webDetails: z.string(),
});
type UpdateProductInput = z.infer<typeof UpdateProductInputSchema>;
const UpdateProductOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type UpdateProductOutput = z.infer<typeof UpdateProductOutputSchema>;
const StockAdjustmentsInputSchema = z.object({
	stockCode: z.string(),
	quantity: z.number(),
	type: z.number(),
	date: z.string(),
	costPrice: z.number(),
	reference: z.string(),
	details: z.string(),
});
type StockAdjustmentsInput = z.infer<typeof StockAdjustmentsInputSchema>;
const StockAdjustmentsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.boolean(),
	message: z.string().nullable(),
});
type StockAdjustmentsOutput = z.infer<typeof StockAdjustmentsOutputSchema>;
const ReadStockMovementsInputSchema = z.object({
	stockCode: z.string(),
});
type ReadStockMovementsInput = z.infer<typeof ReadStockMovementsInputSchema>;
const ReadStockMovementsOutputSchema = z.object({
	results: z.array(
		z.object({
			stockCode: z.string(),
			date: z.string(),
			type: z.number(),
			costPrice: z.number(),
			quantity: z.number(),
			reference: z.string(),
			details: z.string(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadStockMovementsOutput = z.infer<typeof ReadStockMovementsOutputSchema>;
const SearchStockMovementsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchStockMovementsInput = z.infer<
	typeof SearchStockMovementsInputSchema
>;
const SearchStockMovementsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
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
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadCustomerPriceListsOutput = z.infer<
	typeof ReadCustomerPriceListsOutputSchema
>;
const ReadAllPriceListsInputSchema = z.void();
type ReadAllPriceListsInput = z.infer<typeof ReadAllPriceListsInputSchema>;
const ReadAllPriceListsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadAllPriceListsOutput = z.infer<typeof ReadAllPriceListsOutputSchema>;
const SearchProductSellingPricesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchProductSellingPricesInput = z.infer<
	typeof SearchProductSellingPricesInputSchema
>;
const SearchProductSellingPricesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchProductSellingPricesOutput = z.infer<
	typeof SearchProductSellingPricesOutputSchema
>;
const SearchSalesOrderInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchSalesOrderInput = z.infer<typeof SearchSalesOrderInputSchema>;
const SearchSalesOrderOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchSalesOrderOutput = z.infer<typeof SearchSalesOrderOutputSchema>;
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
type CreateSalesOrderInput = z.infer<typeof CreateSalesOrderInputSchema>;
const CreateSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateSalesOrderOutput = z.infer<typeof CreateSalesOrderOutputSchema>;
const ReadSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type ReadSalesOrderInput = z.infer<typeof ReadSalesOrderInputSchema>;
const ReadSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadSalesOrderOutput = z.infer<typeof ReadSalesOrderOutputSchema>;
const UpdateSalesOrderInputSchema = z.object({
	customerAccountRef: z.string(),
	orderNumber: z.number(),
	orderDate: z.string(),
	customerOrderNumber: z.string(),
	customerTelephoneNumber: z.string(),
	contactName: z.string(),
	customerName: z.string(),
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
	carrNet: z.number(),
	carrTax: z.number(),
	carrNomCode: z.string(),
	carrTaxCode: z.number(),
	carriageDepartmentNumber: z.number(),
	globalDiscountRate: z.string().nullable(),
	netValueDiscountAmount: z.number(),
	netValueDiscountDescription: z.string(),
	currency: z.number(),
	departmentNumber: z.number(),
	orderType: z.number(),
	quoteExpiry: z.string().nullable(),
	quoteStatus: z.number(),
	orderDueDate: z.string().nullable(),
	notes1: z.string(),
	notes2: z.string(),
	notes3: z.string(),
	analysis1: z.string(),
	analysis2: z.string(),
	analysis3: z.string(),
	consignmentRef: z.string(),
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
			departmentNumber: z.number(),
			discountAmount: z.number(),
			netAmount: z.number(),
		}),
	),
});
type UpdateSalesOrderInput = z.infer<typeof UpdateSalesOrderInputSchema>;
const UpdateSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type UpdateSalesOrderOutput = z.infer<typeof UpdateSalesOrderOutputSchema>;
const PartiallyAllocateSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
	items: z.array(
		z.object({
			itemId: z.number(),
			allocate: z.number(),
		}),
	),
});
type PartiallyAllocateSalesOrderInput = z.infer<
	typeof PartiallyAllocateSalesOrderInputSchema
>;
const PartiallyAllocateSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
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
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
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
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type FullyUnAllocateSalesOrderOutput = z.infer<
	typeof FullyUnAllocateSalesOrderOutputSchema
>;
const PartiallyDespatchSalesOrderInputSchema = z.object({
	orderNumber: z.string(),
	items: z.array(
		z.object({
			itemId: z.number(),
			despatch: z.number(),
		}),
	),
});
type PartiallyDespatchSalesOrderInput = z.infer<
	typeof PartiallyDespatchSalesOrderInputSchema
>;
const PartiallyDespatchSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type PartiallyDespatchSalesOrderOutput = z.infer<
	typeof PartiallyDespatchSalesOrderOutputSchema
>;
const CompleteSalesOrderInputSchema = z.object({
	id: z.string(),
});
type CompleteSalesOrderInput = z.infer<typeof CompleteSalesOrderInputSchema>;
const CompleteSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CompleteSalesOrderOutput = z.infer<typeof CompleteSalesOrderOutputSchema>;
const CompleteSalesOrderWithOwnInvoiceDateInputSchema = z.object({
	orderNumber: z.number(),
	date: z.string(),
});
type CompleteSalesOrderWithOwnInvoiceDateInput = z.infer<
	typeof CompleteSalesOrderWithOwnInvoiceDateInputSchema
>;
const CompleteSalesOrderWithOwnInvoiceDateOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CompleteSalesOrderWithOwnInvoiceDateOutput = z.infer<
	typeof CompleteSalesOrderWithOwnInvoiceDateOutputSchema
>;
const HoldSalesOrderInputSchema = z.object({
	id: z.string(),
});
type HoldSalesOrderInput = z.infer<typeof HoldSalesOrderInputSchema>;
const HoldSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type HoldSalesOrderOutput = z.infer<typeof HoldSalesOrderOutputSchema>;
const CancelSalesOrderInputSchema = z.void();
type CancelSalesOrderInput = z.infer<typeof CancelSalesOrderInputSchema>;
const CancelSalesOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CancelSalesOrderOutput = z.infer<typeof CancelSalesOrderOutputSchema>;
const SearchDispatchesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchDispatchesInput = z.infer<typeof SearchDispatchesInputSchema>;
const SearchDispatchesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchDispatchesOutput = z.infer<typeof SearchDispatchesOutputSchema>;
const SearchSalesItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchSalesItemsInput = z.infer<typeof SearchSalesItemsInputSchema>;
const SearchSalesItemsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchSalesItemsOutput = z.infer<typeof SearchSalesItemsOutputSchema>;
const UpdateSalesOrderItemsInputSchema = z.object({
	itemId: z.number(),
	quantityOnOrder: z.number(),
});
type UpdateSalesOrderItemsInput = z.infer<
	typeof UpdateSalesOrderItemsInputSchema
>;
const UpdateSalesOrderItemsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type UpdateSalesOrderItemsOutput = z.infer<
	typeof UpdateSalesOrderItemsOutputSchema
>;
const SearchPurchaseOrdersInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchPurchaseOrdersInput = z.infer<
	typeof SearchPurchaseOrdersInputSchema
>;
const SearchPurchaseOrdersOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchPurchaseOrdersOutput = z.infer<
	typeof SearchPurchaseOrdersOutputSchema
>;
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
type CreatePurchaseOrderInput = z.infer<typeof CreatePurchaseOrderInputSchema>;
const CreatePurchaseOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string(),
});
type CreatePurchaseOrderOutput = z.infer<
	typeof CreatePurchaseOrderOutputSchema
>;
const ReadPurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type ReadPurchaseOrderInput = z.infer<typeof ReadPurchaseOrderInputSchema>;
const ReadPurchaseOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadPurchaseOrderOutput = z.infer<typeof ReadPurchaseOrderOutputSchema>;
const UpdatePurchaseOrderInputSchema = z.object({
	supplierAccountRef: z.string(),
	userName: z.string(),
	carriageNet: z.number(),
	carriageTax: z.number(),
	supplierName: z.string(),
	delAddress1: z.string(),
	delAddress2: z.string(),
	delAddress3: z.string(),
	delAddress4: z.string(),
	delAddress5: z.string(),
	notes1: z.string(),
	invoiceItems: z.array(
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
	),
	orderDate: z.string(),
});
type UpdatePurchaseOrderInput = z.infer<typeof UpdatePurchaseOrderInputSchema>;
const UpdatePurchaseOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type UpdatePurchaseOrderOutput = z.infer<
	typeof UpdatePurchaseOrderOutputSchema
>;
const DeletePurchaseOrderInputSchema = z.object({
	orderNumber: z.string(),
});
type DeletePurchaseOrderInput = z.infer<typeof DeletePurchaseOrderInputSchema>;
const DeletePurchaseOrderOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type DeletePurchaseOrderOutput = z.infer<
	typeof DeletePurchaseOrderOutputSchema
>;
const SearchPurchaseItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchPurchaseItemsInput = z.infer<typeof SearchPurchaseItemsInputSchema>;
const SearchPurchaseItemsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchPurchaseItemsOutput = z.infer<
	typeof SearchPurchaseItemsOutputSchema
>;
const SearchGoodsReceivedNotesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchGoodsReceivedNotesInput = z.infer<
	typeof SearchGoodsReceivedNotesInputSchema
>;
const SearchGoodsReceivedNotesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchGoodsReceivedNotesOutput = z.infer<
	typeof SearchGoodsReceivedNotesOutputSchema
>;
const GoodsReceivedNotesInputSchema = z.object({
	orderNumber: z.number(),
	items: z.array(
		z.object({
			itemNumber: z.number(),
			quantity: z.number(),
		}),
	),
});
type GoodsReceivedNotesInput = z.infer<typeof GoodsReceivedNotesInputSchema>;
const GoodsReceivedNotesOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type GoodsReceivedNotesOutput = z.infer<typeof GoodsReceivedNotesOutputSchema>;
const SearchDeliveriesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchDeliveriesInput = z.infer<typeof SearchDeliveriesInputSchema>;
const SearchDeliveriesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchDeliveriesOutput = z.infer<typeof SearchDeliveriesOutputSchema>;
const SearchSalesInvoicesInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchSalesInvoicesInput = z.infer<typeof SearchSalesInvoicesInputSchema>;
const SearchSalesInvoicesOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchSalesInvoicesOutput = z.infer<
	typeof SearchSalesInvoicesOutputSchema
>;
const ReadSalesInvoiceInputSchema = z.object({
	id: z.string(),
});
type ReadSalesInvoiceInput = z.infer<typeof ReadSalesInvoiceInputSchema>;
const ReadSalesInvoiceOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadSalesInvoiceOutput = z.infer<typeof ReadSalesInvoiceOutputSchema>;
const UpdateSalesInvoiceInputSchema = z.object({
	customerAccountRef: z.string(),
	invoiceNumber: z.number(),
	orderNumber: z.string(),
	invoiceDate: z.string(),
	customerOrderNumber: z.string(),
	notes2: z.string(),
	userName: z.string(),
	contactName: z.string(),
	delName: z.string(),
	delAddress1: z.string(),
	delAddress2: z.string(),
	delAddress3: z.string(),
	delAddress4: z.string(),
	delAddress5: z.string(),
	customerTelephoneNumber: z.string().nullable(),
	carrNet: z.number(),
	carrTax: z.number(),
	carrNomCode: z.number(),
	carrTaxCode: z.number(),
	currency: z.number(),
	shouldUpdateLedgers: z.boolean(),
	invoiceTypeCode: z.number(),
	invoiceItems: z.array(
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
	),
});
type UpdateSalesInvoiceInput = z.infer<typeof UpdateSalesInvoiceInputSchema>;
const UpdateSalesInvoiceOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type UpdateSalesInvoiceOutput = z.infer<typeof UpdateSalesInvoiceOutputSchema>;
const CreateSalesInvoiceInputSchema = z.object({
	customerAccountRef: z.string(),
	orderNumber: z.string(),
	invoiceDate: z.string(),
	customerOrderNumber: z.string(),
	notes2: z.string(),
	userName: z.string(),
	contactName: z.string(),
	delName: z.string(),
	delAddress1: z.string(),
	delAddress2: z.string(),
	delAddress3: z.string(),
	delAddress4: z.string(),
	delAddress5: z.string(),
	customerTelephoneNumber: z.string().nullable(),
	carrNet: z.number(),
	carrTax: z.number(),
	carrNomCode: z.number(),
	carrTaxCode: z.number(),
	currency: z.number(),
	shouldUpdateLedgers: z.boolean(),
	invoiceTypeCode: z.number(),
	invoiceItems: z.array(
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
	),
});
type CreateSalesInvoiceInput = z.infer<typeof CreateSalesInvoiceInputSchema>;
const CreateSalesInvoiceOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateSalesInvoiceOutput = z.infer<typeof CreateSalesInvoiceOutputSchema>;
const SearchSalesInvoiceItemsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchSalesInvoiceItemsInput = z.infer<
	typeof SearchSalesInvoiceItemsInputSchema
>;
const SearchSalesInvoiceItemsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchSalesInvoiceItemsOutput = z.infer<
	typeof SearchSalesInvoiceItemsOutputSchema
>;
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
type CreatePurchaseInvoiceInput = z.infer<
	typeof CreatePurchaseInvoiceInputSchema
>;
const CreatePurchaseInvoiceOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreatePurchaseInvoiceOutput = z.infer<
	typeof CreatePurchaseInvoiceOutputSchema
>;
const ReadDocumentLinkInputSchema = z.object({
	transactionNumber: z.string(),
});
type ReadDocumentLinkInput = z.infer<typeof ReadDocumentLinkInputSchema>;
const ReadDocumentLinkOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type ReadDocumentLinkOutput = z.infer<typeof ReadDocumentLinkOutputSchema>;
const SearchProjectsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchProjectsInput = z.infer<typeof SearchProjectsInputSchema>;
const SearchProjectsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchProjectsOutput = z.infer<typeof SearchProjectsOutputSchema>;
const CreateProjectInputSchema = z.object({
	name: z.string(),
	reference: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	description: z.string(),
});
type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;
const CreateProjectOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>;
const ReadProjectInputSchema = z.object({
	id: z.string(),
});
type ReadProjectInput = z.infer<typeof ReadProjectInputSchema>;
const ReadProjectOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadProjectOutput = z.infer<typeof ReadProjectOutputSchema>;
const UpdateProjectInputSchema = z.object({
	name: z.string(),
	reference: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	description: z.string(),
});
type UpdateProjectInput = z.infer<typeof UpdateProjectInputSchema>;
const UpdateProjectOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type UpdateProjectOutput = z.infer<typeof UpdateProjectOutputSchema>;
const ReadProjectTransactionsInputSchema = z.object({
	projectReference: z.string(),
});
type ReadProjectTransactionsInput = z.infer<
	typeof ReadProjectTransactionsInputSchema
>;
const ReadProjectTransactionsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadProjectTransactionsOutput = z.infer<
	typeof ReadProjectTransactionsOutputSchema
>;
const SearchProjectOnlyTransactionsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchProjectOnlyTransactionsInput = z.infer<
	typeof SearchProjectOnlyTransactionsInputSchema
>;
const SearchProjectOnlyTransactionsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchProjectOnlyTransactionsOutput = z.infer<
	typeof SearchProjectOnlyTransactionsOutputSchema
>;
const SearchProjectTransactionsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchProjectTransactionsInput = z.infer<
	typeof SearchProjectTransactionsInputSchema
>;
const SearchProjectTransactionsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchProjectTransactionsOutput = z.infer<
	typeof SearchProjectTransactionsOutputSchema
>;
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
type CreateProjectTransactionsInput = z.infer<
	typeof CreateProjectTransactionsInputSchema
>;
const CreateProjectTransactionsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateProjectTransactionsOutput = z.infer<
	typeof CreateProjectTransactionsOutputSchema
>;
const ReadProjectCostCodesInputSchema = z.void();
type ReadProjectCostCodesInput = z.infer<
	typeof ReadProjectCostCodesInputSchema
>;
const ReadProjectCostCodesOutputSchema = z.object({
	results: z.array(
		z.object({
			costCodeID: z.number(),
			description: z.string(),
			reference: z.string(),
			costTypeId: z.number(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadProjectCostCodesOutput = z.infer<
	typeof ReadProjectCostCodesOutputSchema
>;
const CreateProjectCostCodesInputSchema = z.object({
	description: z.string(),
	reference: z.string(),
});
type CreateProjectCostCodesInput = z.infer<
	typeof CreateProjectCostCodesInputSchema
>;
const CreateProjectCostCodesOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateProjectCostCodesOutput = z.infer<
	typeof CreateProjectCostCodesOutputSchema
>;
const ReadProjectBudgetsInputSchema = z.void();
type ReadProjectBudgetsInput = z.infer<typeof ReadProjectBudgetsInputSchema>;
const ReadProjectBudgetsOutputSchema = z.object({
	results: z.array(
		z.object({
			projectId: z.number(),
			costCodeId: z.number(),
			amount: z.number(),
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type ReadProjectBudgetsOutput = z.infer<typeof ReadProjectBudgetsOutputSchema>;
const AllocatePaymentOnAccountInputSchema = z.object({
	accountRef: z.string(),
	paymentTransactionNumber: z.number(),
	amount: z.string(),
	invRef: z.string(),
});
type AllocatePaymentOnAccountInput = z.infer<
	typeof AllocatePaymentOnAccountInputSchema
>;
const AllocatePaymentOnAccountOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.boolean(),
	message: z.string(),
});
type AllocatePaymentOnAccountOutput = z.infer<
	typeof AllocatePaymentOnAccountOutputSchema
>;
const SearchAuditHeadersInputSchema = z.void();
type SearchAuditHeadersInput = z.infer<typeof SearchAuditHeadersInputSchema>;
const SearchAuditHeadersOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchAuditHeadersOutput = z.infer<typeof SearchAuditHeadersOutputSchema>;
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
type CreateHeaderTransactionInput = z.infer<
	typeof CreateHeaderTransactionInputSchema
>;
const CreateHeaderTransactionOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateHeaderTransactionOutput = z.infer<
	typeof CreateHeaderTransactionOutputSchema
>;
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
type CreateBatchHeaderTransactionInput = z.infer<
	typeof CreateBatchHeaderTransactionInputSchema
>;
const CreateBatchHeaderTransactionOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string().nullable(),
});
type CreateBatchHeaderTransactionOutput = z.infer<
	typeof CreateBatchHeaderTransactionOutputSchema
>;
const SearchAuditSplitsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchAuditSplitsInput = z.infer<typeof SearchAuditSplitsInputSchema>;
const SearchAuditSplitsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchAuditSplitsOutput = z.infer<typeof SearchAuditSplitsOutputSchema>;
const SearchAuditUsageInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchAuditUsageInput = z.infer<typeof SearchAuditUsageInputSchema>;
const SearchAuditUsageOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchAuditUsageOutput = z.infer<typeof SearchAuditUsageOutputSchema>;
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
type CreateBankTxInput = z.infer<typeof CreateBankTxInputSchema>;
const CreateBankTxOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string(),
});
type CreateBankTxOutput = z.infer<typeof CreateBankTxOutputSchema>;
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
type CreateJournalTxInput = z.infer<typeof CreateJournalTxInputSchema>;
const CreateJournalTxOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.number(),
	message: z.string(),
});
type CreateJournalTxOutput = z.infer<typeof CreateJournalTxOutputSchema>;
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
type CreateFixedAssetsInput = z.infer<typeof CreateFixedAssetsInputSchema>;
const CreateFixedAssetsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
});
type CreateFixedAssetsOutput = z.infer<typeof CreateFixedAssetsOutputSchema>;
const SearchFixedAssetsInputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchFixedAssetsInput = z.infer<typeof SearchFixedAssetsInputSchema>;
const SearchFixedAssetsOutputSchema = z.object({
	results: z.array(
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
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchFixedAssetsOutput = z.infer<typeof SearchFixedAssetsOutputSchema>;
const ReadSearchAssetsInputSchema = z.void();
type ReadSearchAssetsInput = z.infer<typeof ReadSearchAssetsInputSchema>;
const ReadSearchAssetsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
});
type ReadSearchAssetsOutput = z.infer<typeof ReadSearchAssetsOutputSchema>;
const UpdateFixedAssetsInputSchema = z.object({
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
});
type UpdateFixedAssetsInput = z.infer<typeof UpdateFixedAssetsInputSchema>;
const UpdateFixedAssetsOutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.string(),
	message: z.string().nullable(),
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
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	}),
	message: z.string().nullable(),
});
type ReadCompanySettings2Output = z.infer<
	typeof ReadCompanySettings2OutputSchema
>;
const SearchCustomer2InputSchema = z.array(
	z.object({
		field: z.string(),
		type: z.string(),
		value: z.string(),
	}),
);
type SearchCustomer2Input = z.infer<typeof SearchCustomer2InputSchema>;
const SearchCustomer2OutputSchema = z.object({
	results: z.array(
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
			turnoverYtd: z.number(),
			vatRegNumber: z.string(),
			eoriNumber: z.string(),
			lastPaymentDate: z.string(),
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
		}),
	),
	success: z.boolean(),
	code: z.number(),
	response: z.string().nullable(),
	message: z.string().nullable(),
});
type SearchCustomer2Output = z.infer<typeof SearchCustomer2OutputSchema>;
const ReadCustomer2InputSchema = z.object({
	customer: z.string(),
});
type ReadCustomer2Input = z.infer<typeof ReadCustomer2InputSchema>;
const ReadCustomer2OutputSchema = z.object({
	success: z.boolean(),
	code: z.number(),
	response: z.object({
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
	message: z.string().nullable(),
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
