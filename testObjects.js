//External dependencies (change this before running the tests)
var inputDataForLoginPage = "file:///C:/Users/Prateek/Documents/Munnu/Mission_Xero/Automation/Selenium Automation/loginDetails.xml";
var inputDataForTestCases = "file:///C:/Users/Prateek/Documents/Munnu/Mission_Xero/Automation/Selenium Automation/testData.xml";

//Utility Objects
var d = new Date();
var currentTimestamp = d.getFullYear() + "" +  d.getMonth() +  "" + d.getDate()  + "" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds();

var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
 
d= new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomorrowsDate =  d.getDate() + " " + month[d.getMonth()] + " " + new Date().getFullYear();


// Login Page Objects
var xeroLoginURL = "https://login.xero.com/";
var emailAddressFieldOnLoginPage = "id=email";
var passworkdFieldOnLoginPage = "id=password";
var loginButtonOnLoginPage = "id=submitButton";

//Xero Home Page Objects
var accountsMenuDropdown = "id=Accounts"
var salesOptionUnderAccountsMenuDropdown = "link=Sales";
var  demoCompanyLogoHeader= "xpath=//h2[@class='org-name']"

// Sales Page objects
var repeatingInvoiceOptionUnderNewMenuDropdown = "link=Repeating invoice";

//Repeating Invoice Page objects
var invoiceFrequencyIntegerUnitTextField = "id=PeriodUnit";
var invoiceFrequencyDropdownButton = "id=TimeUnit_toggle";
var invoiceFrequencySelectionOption = "xpath=//*[@id='TimeUnit_suggestions']/*/*[text()=";
var startDateTextField = "id=StartDate";
var dueDateDayTextField ="id=DueDateDay";
var dueDateDropdownButton = "id=DueDateType_toggle";
var ofTheFollowingMonthOptionFromDueDateDropdown  = "xpath=.//*[@id='DueDateType_suggestions']/div/div[text()='of the following month']";
var saveAsDraftInvoiceOptionRadioBox = "id=saveAsDraft";
var approveInvoiceOptionRadioBox = "id=saveAsAutoApproved";
var approveAndSendInvoiceOptionRadioBox = "id=saveAsAutoApprovedAndEmail";
var invoiceToTextField = "xpath=.//*[contains(@id,'PaidToName')][@type='text']";
var referenceTextField = "xpath=//input[starts-with(@id,'Reference')]";
var brandingDropdownButton = "id=TemplateDropDown_toggle";
var brandingOptionFromDropdown = "xpath=//*[@id='TemplateDropDown_suggestions']/div/div[text()='";
var currencyTextField = "xpath=//*[@id='ext-gen6']/input[starts-with(@id,'Currency')]";
var amountsAreDropdownButton = "id=ext-gen11";
var amountAreOptionFromDropdown = "xpath=//*[text()='";
var iteamDropDownButton ="xpath=//div[starts-with(@id,'ext-comp')]/*/img[@src='/common/images/default/s-5378c2b4.gif']";
var ItemCodeFromDropdown ="xpath=//div[text()='PR-BR']";
var saveButtonOnRepeatingInvoicePage = "xpath=//button/span[text()='Save']";

//Email Popup Objects
var toEmailAddressTextField = "id=MessageTo00000000-0000-0000-0000-000000000001";
var emailSaveButton ="xpath=//button[text()='Save']";

// Repeating Tab On Invoice Page Objects
var successNotificationTextForCreateRepeatingInvoice = "xpath=//*[@id='notify01']/div";
var referenceOfNewlyCreatedInvoice = "xpath=//td[starts-with(@id,'ext-gen')][text()=" + currentTimestamp + "]";
var demoCompanyOptionOnDemoCompanyHeaderDropdown = "xpath=//*[starts-with(@href,'https://my.xero.com//Action/OrganisationLogin/')][contains(text(),'Demo Company (NZ)')]";
var invoiceWillBeTextOnReferenceTab = "xpath=//*[contains(@id,'ext-gen')][text()=" + currentTimestamp + "]/../td[9]";
var invoiceTemplateOptionSaveAsDraftText = "Saved as Draft";