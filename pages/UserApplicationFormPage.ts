import { Locator, Page } from "@playwright/test"
import BasePage from "../utilis/BasePage";
import { formTitleText } from '../config'
import testData from "../test-data/test-data.json"


export class UserApplicationFormPage extends BasePage {

    //first form locators
    readonly page: Page;
    readonly formTitleText: Locator;
    readonly civilityCheckBox
    readonly firstNameTextField
    readonly nameTextField
    readonly dateOfBirthTextField
    readonly mailAddressTextField
    readonly mobilePhoneNumberTextField
    readonly saveAndContniueButton

    //Second form locators
    readonly birthNameTextField
    readonly placeOfBirthTextField
    readonly birthDepartmentDropdown
    readonly countryOfBirthDropdown
    readonly countryOfBirth
    readonly nationalityCountryDropDown
    readonly countriesOrTerritories
    readonly address
    readonly PostalCode
    readonly city
    readonly ResidentialStatus
    readonly saveAndContniueButtonSecondForm
    readonly titleofSecondForm
    readonly titleofThirdForm

    //third form locators
    readonly iban
    readonly bicSwiftCode
    readonly yourBankingSeniority
    readonly AmountOfYourMainSourceOfGrossAnnualIncomeInEuros
    readonly DoYouHaveAnotherSourceOfIncomeInEuros
    readonly EstimateOfYourFinancialAssetsInEuros
    readonly SocioProfessionalCategory
    readonly YourProfession

    //four form locators
    readonly YourMotherMaidenName
    readonly ChooseYour4digitPinCode
    readonly ConfirmYourPinCode
    readonly byEmail
    readonly bySMS_Telephone_Post
    readonly saveAndContniueButtonThirdForm
    readonly SubmitButtonFourthForm



    constructor(page: Page) {
        super(page)
        this.page = page
        //first form locators
        this.formTitleText = page.locator("//p[contains(text(), 'Souscrivez en quelques minutes')]");
        this.civilityCheckBox = page.locator("//label[@for = 'MR']");
        this.firstNameTextField = page.locator("//input[@id = 'fieldControl-input-firstName']");
        this.nameTextField = page.locator("//input[@id = 'fieldControl-input-lastName']");
        this.dateOfBirthTextField = page.locator("//input[@id = 'fieldControl-input-dateOfBirth']");
        this.mailAddressTextField = page.locator("//input[@id = 'fieldControl-input-email']");
        this.mobilePhoneNumberTextField = page.locator("//input[@id = 'fieldControl-input-mobilePhoneNumber']");
        this.saveAndContniueButton = page.locator("//button[contains(text (), 'Sauvegarder et Continuer')]");

        //second form locators
        this.titleofSecondForm = ("//font[contains ( text(), 'Your personal information')]")
        this.birthNameTextField = page.locator("//input[@id = 'birthName']   ");
        this.placeOfBirthTextField = page.locator("//input[@id = 'fieldControl-input-placeOfBirth']");
        this.birthDepartmentDropdown = page.locator("//select[@id = 'fieldControl-input-departmentOfBirth']");
        this.countryOfBirthDropdown = page.locator("//select[@id = 'fieldControl-input-countryOfBirth']");
        this.nationalityCountryDropDown = page.locator("//select[@id = 'fieldControl-input-countryOfBirth']")
        this.countriesOrTerritories = page.locator("//select[@id = 'fieldControl-input-country']")
        this.address = page.locator("//input[@id = 'fieldControl-input-residentialAddressLine2']");
        this.PostalCode = page.locator("//input[@id = 'fieldControl-input-postcode']");
        this.city = page.locator("//input[@id = 'fieldControl-input-cityTown']");
        this.ResidentialStatus = page.locator("//select[@id = 'fieldControl-input-personalResidentialStatus']");
        this.saveAndContniueButtonSecondForm = page.locator("//button[contains (text(), 'Sauvegarder et Continuer')]");

        //third form locators
        this.iban = page.locator("//input[@id = 'fieldControl-input-bankAccountNumber' and @type ='text']")
        this.bicSwiftCode = page.locator("//input[@id = 'fieldControl-input-bankIdentifierCode' and @type ='text']")
        this.yourBankingSeniority = page.locator("//select[@id = 'fieldControl-input-tenureOfAccount']")
        this.AmountOfYourMainSourceOfGrossAnnualIncomeInEuros = page.locator("//input[@id = 'fieldControl-input-annualPersonalIncome']")
        this.DoYouHaveAnotherSourceOfIncomeInEuros = page.locator("//input[@class = 'css-cqtzjc' and @value = 'NO']/following-sibling::*")
        this.EstimateOfYourFinancialAssetsInEuros = page.locator("//select[@id = 'fieldControl-input-totalAssets']")
        this.SocioProfessionalCategory = page.locator("//select[@id = 'fieldControl-input-occupation']")
        this.YourProfession = page.locator("//select[@id = 'fieldControl-input-occupationDescription']")
        this.saveAndContniueButtonThirdForm = page.locator("//button[@type = 'submit']")

        //Fourth Form Locators
        this.YourMotherMaidenName = page.locator("//input[@id = 'fieldControl-input-mothersMaidenName']")
        this.ChooseYour4digitPinCode = page.locator("//input[@id = 'fieldControl-input-pin']")
        this.ConfirmYourPinCode = page.locator("//input[@id = 'fieldControl-input-confirmPin']")
        this.byEmail = page.locator("label[for='marketingEmailPreferences-true']")
        this.bySMS_Telephone_Post = page.locator("//label[@for = 'marketingSMSPhonePostalPreferences-OPT_IN']")
        this.SubmitButtonFourthForm = page.locator("//button[@type = 'submit']");
    }



    //Page Actions
    async fillTheFirstFormValidation(): Promise<boolean> {
        try {
            await super.verifyElementText(this.formTitleText, formTitleText);
            await super.waitAndClick(this.civilityCheckBox);
            await super.filldetails(this.firstNameTextField, testData.firstName);
            await super.filldetails(this.nameTextField, testData.name);
            await super.filldetails(this.dateOfBirthTextField, testData.dateOfBirth);
            await super.filldetails(this.mailAddressTextField, testData.emailAddress);
            await super.filldetails(this.mobilePhoneNumberTextField, testData.mobilePhoneNumber);
            await super.waitForElement(this.saveAndContniueButton);
            await super.focusAndPressEnter(this.saveAndContniueButton);
            return true;
        } catch (error) {
            console.error("First form validation failed:", error);
            return false;
        }
    }




    async fillTheSecondFormValidation(): Promise<boolean> {
        try {
            await super.waitForPageLoad();
            await super.isElementVisible(this.birthDepartmentDropdown);
            await super.filldetails(this.birthNameTextField, testData.birthName);
            await super.filldetails(this.placeOfBirthTextField, testData.placeOfBirth);
            await super.selectValueFromDropdown(this.birthDepartmentDropdown, testData.birth_Department);
            await super.filldetails(this.address, testData.address);
            await super.filldetails(this.PostalCode, testData.PostalCode);
            await super.filldetails(this.city, testData.city);
            await super.selectValueFromDropdown(this.ResidentialStatus, testData.ResidentialStatus);
            await super.focusAndPressEnter(this.saveAndContniueButtonSecondForm);
            return true;
        } catch (error) {
            console.error("Second form validation failed:", error);
            return false;
        }
    }


    async fillTheThirdFormValidation(): Promise<boolean> {
        try {
            await super.waitForPageLoad();
            await super.isElementVisible(this.iban);
            await super.filldetails(this.iban, testData.IBAN);
            await super.filldetails(this.bicSwiftCode, testData.BicSwiftCode);
            await super.selectValueFromDropdown(this.yourBankingSeniority, testData.yourBankingSeniority);
            await super.filldetails(this.AmountOfYourMainSourceOfGrossAnnualIncomeInEuros, testData.AmountOfYourMainSourceOfGrossAnnualIncomeInEuros);
            await super.waitAndClick(this.DoYouHaveAnotherSourceOfIncomeInEuros);
            await super.selectValueFromDropdown(this.EstimateOfYourFinancialAssetsInEuros, testData.EstimateOfYourFinancialAssetsInEuros);
            await super.selectValueFromDropdown(this.SocioProfessionalCategory, testData.SocioProfessionalCategoryv);
            await super.selectValueFromDropdown(this.YourProfession, testData.YourProfession);
            await super.focusAndPressEnter(this.saveAndContniueButtonThirdForm);
            return true;
        } catch (error) {
            console.error("Third form validation failed:", error);
            return false;
        }
    }


    async fillTheFourthFormValidation() {
        try {
            await super.waitForPageLoad()
            await super.isElementVisible(this.YourMotherMaidenName)
            await super.filldetails(this.YourMotherMaidenName, testData.YourMotherMaidenName)
            await super.filldetails(this.ChooseYour4digitPinCode, testData.ChooseYour4digitPinCode)
            await super.filldetails(this.ConfirmYourPinCode, testData.ConfirmYourPinCode)
            await super.waitAndClick(this.byEmail);
            await super.waitAndClick(this.bySMS_Telephone_Post);
            await super.waitAndClick(this.byEmail);
            await super.focusAndPressEnter(this.SubmitButtonFourthForm);
            return true
        }
        catch (error) {
            console.error("Fourth form validation failed:", error);
            return false;
        }



    }

}
