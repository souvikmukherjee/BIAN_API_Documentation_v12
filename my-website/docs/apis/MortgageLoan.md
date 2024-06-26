<h1 style='color:red;'>MortgageLoan</h1>

**BIAN Documentation:** [MortgageLoan v12](https://app.swaggerhub.com/apis/BIAN-3/MortgageLoan/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Control</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments CoCR Control the processing of Mortgage Loan Arrangement

  **Documentation**

  This API path allows you to update the control settings for a specific mortgage loan arrangement identified by its unique ID. It is used to manage the processing of a mortgage loan, including interest calculations and repayments. Different servicing patterns can be applied to control how the loan is managed and processed. By making a PUT request to this endpoint, you can modify and update the control settings for the specified mortgage loan arrangement.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/MortgageLoans/{mortgageloanid}/Control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcCR Accept, verify, etc. aspects of Mortgage Loan Arrangement processing

  **Documentation**

  This BIAN API path allows you to update an existing mortgage loan by providing information related to the loan arrangement processing. It is used for fulfilling a loan product for the purpose of purchasing a property. Different servicing patterns can be applied to calculate interest and manage repayments of both principal and interest. The API path involves accepting, verifying, and processing various aspects of the mortgage loan arrangement.

  **Limitations**

  PUT: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Exchange' following REST best practices could be:

- POST /mortgage-loans/{mortgageloanid}/exchanges

This follows the convention of using plural nouns for resources and using HTTP methods to define the actions performed on those resources, in this case, creating a new exchange related to a specific mortgage loan.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Execute</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ExCR Execute an available automated action for Mortgage Loan Arrangement

  **Documentation**

  This BIAN API path allows you to execute an available automated action for a specific Mortgage Loan arrangement. By sending a PUT request with the Mortgage Loan ID, you can update the existing resource related to the Mortgage Loan, which is typically used for property purchases. Different servicing patterns for interest calculations and repayments can be applied, and this API path facilitates the execution of automated actions for managing Mortgage Loan arrangements.

  **Limitations**

  PUT: A RESTful path should typically be named using nouns to represent the resource being acted upon. In this case, the path '/MortgageLoan/{mortgageloanid}/Execute' can be improved for REST best practices. 

A more appropriate name for this path could be '/mortgage-loans/{mortgageloanid}/execution'. This new path name uses lowercase letters and dashed to separate words for better readability and adherence to REST convention.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InCR Instantiate a new Mortgage Loan Facility

  **Documentation**

  This BIAN API path, "/MortgageLoan/Initiate" with the method POST, allows you to create a new Mortgage Loan Facility. This means you can start the process of fulfilling a loan product specifically for purchasing a property. It mentions that there are various ways that interest and repayment can be calculated and managed for this loan. By using this API, you can set up a new mortgage loan and specify the terms that work best for your situation.

  **Limitations**

  POST: To follow REST best practices, the name of the path should be in lower case and use hyphens to separate words. 

So, the name of the path '/MortgageLoan/Initiate' could be changed to '/mortgage-loan/initiate' to adhere to REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReCR Retrieve details about any aspect of Mortgage Loan Arrangement

  **Documentation**

  This API path allows you to retrieve information about a specific Mortgage Loan arrangement identified by its unique mortgage loan ID. It provides details related to the fulfillment of a loan product specifically designed for the purpose of property purchase. Additionally, it mentions that different servicing patterns can be applied to interest calculations and principal and interest repayments. You can use this API to access various aspects of a Mortgage Loan arrangement for further processing or analysis.

  **Limitations**

  GET: The name of the path should be: GET /mortgage-loans/{mortgageloanid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Request</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments RqCR Request manual intervention or a decision with respect to Mortgage Loan Arrangement

  **Documentation**

  This BIAN API path allows you to update an existing Mortgage Loan request identified by a specific mortgage loan ID. It pertains to the fulfillment of a loan product for purchasing property. Different servicing patterns such as interest calculations and repayment structures can be applied to this loan. It also allows for requesting manual intervention or a decision regarding the Mortgage Loan arrangement.

  **Limitations**

  PUT: The name of the path '/MortgageLoan/{mortgageloanid}/Request' should ideally be:

'/mortgage-loans/{mortgageloanid}/requests'

Following REST best practices, it is recommended to use lowercase letters, hyphens to separate words, and plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpCR Update details relating to Mortgage Loan Arrangement

  **Documentation**

  This API path allows you to update details related to a specific Mortgage Loan arrangement identified by the "mortgageloanid." It is used when you need to make changes or modifications to an existing mortgage loan, such as updating interest calculations, repayment schedules, or other relevant information. This API helps in managing and adjusting various aspects of a mortgage loan to ensure it aligns with the borrower's needs and preferences.

  **Limitations**

  PUT: The name of the path should be:

PUT /mortgage-loans/{mortgageloanid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Billing/{billingid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcBQ Accept, verify, etc. aspects of Billing processing

  **Documentation**

  This API path allows you to update billing information related to a specific mortgage loan. By providing the mortgage loan ID and the billing ID, you can make changes to the billing details associated with that loan. This could involve updating payment amounts, interest calculations, or repayment schedules. It's a way to manage and adjust the financial aspects of a mortgage loan, ensuring accurate billing processing for the loan product.

  **Limitations**

  PUT: A possible name for the path '/MortgageLoan/{mortgageloanid}/Billing/{billingid}/Exchange' following REST best practices could be:

'/mortgage-loans/{mortgageloanid}/billing/{billingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Fees/{feesid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcBQ Accept, verify, etc. aspects of Fees processing

  **Documentation**

  This API path allows you to update information related to the fees associated with a specific mortgage loan. The path includes the mortgage loan ID and the fees ID to specify which fees you are updating. By using the PUT method, you can modify and exchange details related to the fees processing for the mortgage loan, such as interest calculations and repayment structures.

  **Limitations**

  PUT: A possible name for this path could be `/mortgage-loans/{mortgageLoanId}/fees/{feesId}/exchange`. This path follows REST best practices by using lowercase letters, hyphens to separate words, and utilizing descriptive names for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Lien/{lienid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcBQ Accept, verify, etc. aspects of Lien processing

  **Documentation**

  This API path is used to update an existing lien associated with a specific mortgage loan. A lien is a legal right or interest that a lender has in a property as security for the repayment of a loan. By using this API, you can update the details or status of a specific lien linked to a mortgage loan, which is typically used for property purchase. The API allows you to manage various aspects of the lien processing, such as accepting, verifying, and updating information related to the lien.

  **Limitations**

  PUT: A suggested name for the path could be:

/MortgageLoans/{mortgageloanId}/Liens/{lienId}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Payments/{paymentsid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcBQ Accept, verify, etc. aspects of Payments processing

  **Documentation**

  This API path allows you to update payment information related to a specific mortgage loan. By providing the mortgage loan ID and payment ID, you can make changes to the payment details such as interest calculations, principal repayments, and other aspects of processing payments for the loan. This API is designed to handle the fulfillment of a mortgage loan used for purchasing a property, with the ability to apply various servicing patterns for interest and principal repayments.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/mortgage-loans/{mortgageloanid}/payments/{paymentsid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Sweep/{sweepid}/Exchange</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments EcBQ Accept, verify, etc. aspects of Sweep processing

  **Documentation**

  This API path, /MortgageLoan/{mortgageloanid}/Sweep/{sweepid}/Exchange, when used with the PUT method, allows you to update an existing resource related to a mortgage loan and sweep processing. It is specifically used for fulfilling a loan product for property purchase, and it considers various servicing patterns for interest calculations and repayments. The API enables acceptance, verification, and other necessary actions related to the sweep processing associated with the mortgage loan.

  **Limitations**

  PUT: The name of the path should be:

/MortgageLoans/{mortgageloanid}/Sweeps/{sweepid}/Exchanges

Following REST best practices, it's recommended to use plural nouns for collections, so "MortgageLoans" and "Sweeps" have been used in their plural form. Each segment in the path should be clear and descriptive, representing the resource it points to, which is why "Exchanges" is used to represent the the

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Billing/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Billing

  **Documentation**

  This BIAN API path, /MortgageLoan/{mortgageloanid}/Billing/Initiate, allows you to initiate a new billing process for a specific mortgage loan identified by {mortgageloanid}. This process is part of fulfilling the loan for property purchase. It enables different servicing patterns for calculating interest and managing principle and interest repayments. By initiating a new billing, you can start the necessary billing operations for the mortgage loan.

  **Limitations**

  POST: A possible RESTful path name following best practices could be '/mortgage-loans/{mortgageloanid}/billing/initiate'. 

This path name follows best practices by using lowercase letters, hyphens to separate words, and using plural nouns for resources ('mortgage-loans' instead of 'mortgage-loan').

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Collateral/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Collateral

  **Documentation**

  This API endpoint allows you to create a new collateral for a specific mortgage loan identified by "mortgageloanid." Collateral is a property or other asset that is used as security for the loan. By initiating a new collateral through this API, you provide the necessary information and documentation related to the asset that will be tied to the mortgage loan. This helps in securing the loan and is an important step in the mortgage loan fulfillment process for property purchase.

  **Limitations**

  POST: Based on REST best practices, a more appropriate name for the path '/MortgageLoan/{mortgageloanid}/Collateral/Initiate' could be:

'/mortgage-loans/{mortgageloanid}/collateral/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Deposits/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Deposits

  **Documentation**

  This BIAN API path allows you to create a new deposit for a specific mortgage loan. When initiating a new deposit, you are fulfilling the requirements for the loan related to property purchase. Different servicing patterns can be chosen for interest calculations and repayments, whether it is for interest-only or principle and interest payments.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

`/mortgage-loans/{mortgageloanid}/deposits/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Fees/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Fees

  **Documentation**

  This API path allows a user to initiate the creation of new fees associated with a specific mortgage loan. These fees are part of the process of fulfilling a loan product for the purpose of purchasing a property. Different servicing patterns can be applied to how interest and principal repayments are calculated and managed for the mortgage loan. The POST method is used to create a new resource for the fees within the context of the specified mortgage loan.

  **Limitations**

  POST: The name of the path '/MortgageLoan/{mortgageloanid}/Fees/Initiate' should ideally be:

'/mortgage-loans/{mortgageloanid}/fees/initiate'

This name follows REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for collections when appropriate.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/FinancialInstrument/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Financial Instrument

  **Documentation**

  This BIAN API path allows you to create a new financial instrument related to a specific mortgage loan. This financial instrument is used to manage the repayment of the loan, including calculating interest and handling repayments of both the principal and interest amounts. It provides a way to set up different servicing patterns for managing the loan.

  **Limitations**

  POST: A good name for this path following REST best practices would be:

/MortgageLoans/{mortgageloanid}/FinancialInstruments/Initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/IssuedDevice/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments Initiate Provision of Issued Device

  **Documentation**

  This API path facilitates the initiation of providing a device related to a specific Mortgage Loan. It allows for the creation of a new resource associated with the Loan ID provided in the path. The API is designed to support the process of fulfilling a loan product used for purchasing property, with the option to apply various servicing patterns for interest calculations and repayments.

  **Limitations**

  POST: A suitable name for the path '/MortgageLoan/{mortgageloanid}/IssuedDevice/Initiate' that follows REST best practices could be:

POST /mortgage-loans/{mortgageloanid}/issued-devices/initiate

This naming convention uses lowercase letters, hyphens for word separation, and plural nouns for resource names. It also specifies the HTTP method (POST) to indicate the action of initiating an issued device for a specific mortgage loan ID.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Lien/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Lien

  **Documentation**

  This API path allows you to create a new Lien associated with a specific Mortgage Loan. It is used in the process of fulfilling a loan product for the purpose of purchasing a property. It also mentions that different servicing patterns can be applied to interest calculations and principle and interest repayments related to the loan.

  **Limitations**

  POST: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Lien/Initiate' following REST best practices could be:

'/mortgage-loans/{mortgageloanid}/liens/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Payments/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Payments

  **Documentation**

  This API path allows you to create a new payment for a specific mortgage loan. The payment can be initiated to fulfill the loan product, which is typically used for purchasing a property. Different servicing patterns can be applied to how interest is calculated and how repayments of principal and interest are handled.

  **Limitations**

  POST: A suitable name for this path following REST best practices could be:

POST /mortgage-loans/{mortgageloanid}/payments

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Sweep/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Sweep

  **Documentation**

  This API path initiates the process of setting up a new Sweep for a specific Mortgage Loan identified by {mortgageloanid}. A Sweep is a service that helps manage funds between different accounts to optimize interest earnings or account balances. By invoking this API, a new Sweep arrangement will be created for the specified mortgage loan, allowing for more efficient management of funds related to the loan.

  **Limitations**

  POST: A conforming path for this endpoint in compliance with REST best practices would likely be:

'/mortgage-loans/{mortgageLoanId}/sweeps/initiate'

This naming follows conventions for using lowercase letters, using hyphens for readability, and using plural nouns for consistent resource naming.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MortgageLoan/{mortgageloanid}/Withdrawals/Initiate</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments InBQ Instantiate a new Withdrawals

  **Documentation**

  This API path is used to create a new withdrawal for a specific mortgage loan. It initiates the process of issuing funds from the loan for the purpose of property purchase. Different payment patterns can be applied for interest and principal repayments, allowing for flexibility in managing the loan.

  **Limitations**

  POST: A more RESTful name for the path '/MortgageLoan/{mortgageloanid}/Withdrawals/Initiate' could be:

'/mortgage-loans/{mortgageloanid}/withdrawals/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Billing/{billingid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Billing

  **Documentation**

  This BIAN API path allows you to retrieve details about the billing aspect of a specific mortgage loan. By providing the mortgage loan ID and billing ID, you can access information related to how the loan is being serviced in terms of interest calculations and repayments. This API gives you insight into the billing process associated with a mortgage loan for a property purchase.

  **Limitations**

  GET: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Billing/{billingid}/Retrieve' following REST best practices could be:

GET /mortgage-loans/{mortgageloanid}/billings/{billingid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Collateral/{collateralid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Collateral

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific collateral associated with a mortgage loan. By providing the mortgage loan ID and collateral ID in the path, you can get information about the collateral that has been used to secure the loan. This could include details such as the type of collateral, its value, ownership status, or any other relevant information related to the collateral.

  **Limitations**

  GET: A suggested name for the path could be:

```
GET /mortgage-loans/{mortgageloanid}/collaterals/{collateralid}
``` 

This name follows REST best practices by using lowercase letters, hyphens for readability, and utilizing plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Deposits/{depositsid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Deposits

  **Documentation**

  This API path allows you to retrieve specific details about deposits related to a mortgage loan by providing the mortgage loan ID and deposits ID. It is used to access information about deposits associated with the loan product, such as interest calculations and repayment patterns. Different servicing patterns can be applied to manage the handling of interest and principle repayments for the mortgage loan.

  **Limitations**

  GET: A possible RESTful naming convention for the given path could be:

GET /MortgageLoans/{mortgageloanid}/Deposits/{depositsid}

This path follows the convention of using nouns to represent resources (mortgageloan, deposits), and using HTTP methods like GET to specify the action on those resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Fees/{feesid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Fees

  **Documentation**

  This API path allows you to retrieve specific details about fees associated with a mortgage loan. By providing the mortgage loan ID and the fees ID, you can access information regarding the fees that are part of the loan product. This information can be helpful for understanding the costs and financial aspects of the mortgage loan.

  **Limitations**

  GET: A more RESTful path name for '/MortgageLoan/{mortgageloanid}/Fees/{feesid}/Retrieve' could be:

'/mortgage-loans/{mortgageloanid}/fees/{feesid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/FinancialAccounting/{financialaccountingid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Financial Accounting

  **Documentation**

  This BIAN API path allows you to retrieve detailed information about financial accounting related to a specific mortgage loan. By providing the mortgage loan ID and financial accounting ID, you can access specific details about the financial aspects of the loan, such as interest calculations and principal and interest repayments. This API is designed to support the fulfillment process of a mortgage loan for property purchase and provides flexibility in the servicing patterns that can be applied to the loan's financial calculations.

  **Limitations**

  GET: In RESTful best practices, resource URIs should be designed to be intuitive and self-explanatory. Based on the provided path, a more suitable name following RESTful conventions could be:

'/mortgage-loans/{mortgage-loan-id}/financial-accounting/{financial-accounting-id}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/FinancialInstrument/{financialinstrumentid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Financial Instrument

  **Documentation**

  This BIAN API path allows you to retrieve details about a financial instrument related to a specific mortgage loan. This can include information about interest calculations, repayment patterns, and other financial aspects of the loan product. It enables users to access specific information about the financial instrument associated with a particular mortgage loan.

  **Limitations**

  GET: The name of this path should ideally be:

GET /mortgage-loans/{mortgageloanid}/financial-instruments/{financialinstrumentid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Interest

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of interest related to a mortgage loan. By providing the mortgage loan ID and interest ID, you can access information about how interest calculations are applied and how interest is managed within the loan product. This can help users understand and manage the interest component of their mortgage loan, including various servicing patterns that may impact interest calculations and repayment structures.

  **Limitations**

  GET: A RESTful naming convention for the path you described could be something like:

GET /mortgage-loans/{mortgageloanid}/interests/{interestid}

This makes use of lowercase letters and hyphens to separate words, and it clearly indicates the resource being retrieved with the HTTP verb included.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments Retrieve Details about Issued Device

  **Documentation**

  This BIAN API path allows you to retrieve details about an issued device related to a specific mortgage loan. It provides information about the device that was issued in connection with the mortgage loan process, such as details about the device itself or its usage within the loan fulfillment process. This can be useful for tracking and managing devices associated with mortgage loans.

  **Limitations**

  GET: A suitable name for the path '/MortgageLoan/{mortgageloanid}/IssuedDevice/{issueddeviceid}/Retrieve' following REST best practices could be:

GET /mortgage-loans/{mortgageloanid}/issued-devices/{issueddeviceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Lien/{lienid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Lien

  **Documentation**

  This API path, /MortgageLoan/{mortgageloanid}/Lien/{lienid}/Retrieve, allows you to retrieve details about a specific aspect of a lien associated with a mortgage loan. By providing the mortgage loan ID and lien ID in the path, you can access information related to the lien, such as its status, terms, and conditions. This API is useful for accessing specific details about the lien connected to a mortgage loan within a banking system.

  **Limitations**

  GET: To follow REST best practices, the name of the path should be standardized to use nouns to describe resources. It should also be in lowercase and use hyphens to separate words. 

A suggestion for the name of the path could be:
/mortgage-loans/{mortgageloanid}/liens/{lienid}/retrieve

This naming convention follows REST best practices and makes the path more descriptive and readable.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Payments

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific payment related to a mortgage loan. By providing the mortgage loan ID and the payment ID, you can access information about that particular payment, such as the amount, date, and any other relevant details. This API is useful for managing and tracking payments within the context of a mortgage loan for property purchase.

  **Limitations**

  GET: A suitable name for the given path would be:

GET /mortgage-loans/{mortgageloanid}/payments/{paymentsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Sweep/{sweepid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Sweep

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of a "Sweep" related to a Mortgage Loan. A Sweep is a feature or component associated with a mortgage loan that may involve different servicing patterns for interest calculations and principal and interest repayments. By using this API, you can access information about a particular Sweep, identified by the sweep ID, within the context of a specific mortgage loan identified by mortgageloanid.

  **Limitations**

  GET: A suitable name for this path following REST best practices would be: GET /mortgage-loans/{mortgageloanid}/sweeps/{sweepid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MortgageLoan/{mortgageloanid}/Withdrawals/{withdrawalsid}/Retrieve</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments ReBQ Retrieve details about any aspect of Withdrawals

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific withdrawal related to a mortgage loan. By providing the mortgage loan ID and the withdrawal ID, you can access information about the withdrawal transaction. This API is useful for accessing specific details about withdrawals made in the context of a mortgage loan, such as amounts, dates, and any associated information.

  **Limitations**

  GET: A suitable name for the path following REST best practices could be:  

```
GET /mortgage-loans/{mortgageLoanId}/withdrawals/{withdrawalId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Collateral/{collateralid}/Request</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments RqBQ Request manual intervention or a decision with respect to Collateral

  **Documentation**

  This API endpoint allows you to update a specific request related to collateral for a mortgage loan. It is used when manual intervention or a decision is needed regarding the collateral associated with the mortgage loan. The update could involve providing additional information, changing details, or requesting a decision or action related to the collateral.

  **Limitations**

  PUT: The RESTful path should be named as follows:

'/mortgage-loans/{mortgageloanid}/collaterals/{collateralid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Fees/{feesid}/Request</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments RqBQ Request manual intervention or a decision with respect to Fees

  **Documentation**

  This API path is used to update an existing fee associated with a specific mortgage loan. It allows for manual intervention or decision-making regarding fees related to the mortgage loan. This action is part of the process of fulfilling the mortgage loan for the purpose of property purchase. The update could involve adjusting the fees or requesting a decision on how the fees should be handled.

  **Limitations**

  PUT: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Fees/{feesid}/Request' following REST best practices could be:

'/mortgage-loans/{mortgageloanid}/fees/{feesid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Billing/{billingid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Billing

  **Documentation**

  This BIAN API path allows you to update billing details related to a specific mortgage loan. By providing the mortgage loan ID and the billing ID, you can use the PUT method to update information such as interest calculations, principle repayments, and other billing specifics for that specific loan. This is useful for managing and adjusting the financial aspects of mortgage loans, particularly in relation to payments and servicing patterns.

  **Limitations**

  PUT: A more suitable name for the path '/MortgageLoan/{mortgageloanid}/Billing/{billingid}/Update' following REST best practices could be:

```
PUT /mortgage-loans/{mortgageloanid}/billing/{billingid}
``` 

This naming convention reflects the HTTP method (PUT), the resource hierarchy (mortgage loans and billing), and the action being performed (update). By using lowercase letters and separating words with hyphens, the path becomes

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Collateral/{collateralid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Collateral

  **Documentation**

  This API path allows you to update details related to the collateral for a specific mortgage loan. It is used to make changes or modifications to the collateral information associated with a particular mortgage loan.

  **Limitations**

  PUT: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Collateral/{collateralid}/Update' following REST best practices would be:

PATCH /mortgage-loans/{mortgageloanid}/collateral/{collateralid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Deposits/{depositsid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Deposits

  **Documentation**

  This API path allows you to update details related to deposits for a specific mortgage loan. This could involve modifying information such as deposit amounts, deposit terms, or any other deposit-related details associated with the mortgage loan. This API gives you the ability to make changes to the deposit information in order to manage the loan effectively.

  **Limitations**

  PUT: A suitable name for this path following REST best practices would be:

'/loans/{mortgageloanid}/deposits/{depositsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Fees/{feesid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Fees

  **Documentation**

  This API pathway allows you to update details related to fees associated with a specific mortgage loan. By specifying the mortgage loan ID and the fees ID, you can make changes to the fee details using the PUT method. This can include modifying the amount, type, or any other relevant information about the fees for the mortgage loan.

  **Limitations**

  PUT: A suitable RESTful path name for '/MortgageLoan/{mortgageloanid}/Fees/{feesid}/Update' could be '/mortgage-loans/{mortgageloanid}/fees/{feesid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/FinancialAccounting/{financialaccountingid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Financial Accounting

  **Documentation**

  This API path allows for updating details related to financial accounting for a specific mortgage loan. It is used to modify information such as interest calculations and principal repayments associated with the loan. By making a PUT request to this path with the mortgage loan ID and financial accounting ID specified, users can update the financial accounting details in the system.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PUT /mortgage-loans/{mortgageloanid}/financial-accounting/{financialaccountingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/FinancialInstrument/{financialinstrumentid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Financial Instrument

  **Documentation**

  This API path allows you to update specific details related to a financial instrument within a mortgage loan. By providing the mortgage loan ID and the financial instrument ID, you can make changes to information such as interest calculations, principle repayments, and other aspects related to the loan product. This API enables you to modify and manage the financial instrument details associated with a mortgage loan for property purchase.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path you described could be:

PUT /mortgage-loans/{mortgageloanid}/financial-instruments/{financialinstrumentid}

This naming convention follows REST principles by using lowercase letters, hyphens for readability, and describes the action being performed (in this case, updating a specific financial instrument associated with a mortgage loan).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Interest/{interestid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Interest

  **Documentation**

  This API path allows you to update the details related to the interest of a specific mortgage loan. You can specify the mortgage loan ID and the ID of the interest details you want to update. By using a PUT method, you can make changes to the interest information associated with that particular mortgage loan, such as adjusting interest calculations or repayment patterns. This API is useful for managing the interest components of mortgage loans in a flexible and customizable manner.

  **Limitations**

  PUT: A suitable name for the path '/MortgageLoan/{mortgageloanid}/Interest/{interestid}/Update' following REST best practices could be:

'/mortgage-loans/{mortgageloanid}/interests/{interestid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a specific device that has been allocated to a mortgage loan account. By using a PUT request, you can modify information related to the issued device, such as its settings, configurations, or any other relevant details associated with the mortgage loan account.

  **Limitations**

  PUT: The name of the path should be:

PUT /mortgage-loans/{mortgageLoanId}/issued-devices/{issuedDeviceId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Lien/{lienid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Lien

  **Documentation**

  This API path allows you to update details related to a specific lien associated with a mortgage loan. It enables you to modify information such as lien status, amount owed, or other lien-related details for a particular mortgage loan. By using this API, you can make changes to the lien information linked to the mortgage loan in question.

  **Limitations**

  PUT: Following REST best practices, the path should be named as follows:
'/mortgage-loans/{mortgageLoanId}/liens/{lienId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Payments

  **Documentation**

  This API path allows you to update details related to payments for a specific mortgage loan. You can specify the mortgage loan ID and the payment ID to target a specific payment for updating. This functionality is useful for managing and modifying payment information for mortgage loans, such as adjusting interest calculations or principal and interest repayments.

  **Limitations**

  PUT: A suitable name for this path, considering REST best practices, could be:
PUT /mortgage-loans/{mortgageloanid}/payments/{paymentsid} 

In RESTful API design, it is recommended to use lowercase letters, hyphens for word separation in URI paths, and plural nouns for resource names. Additionally, the HTTP method PUT is commonly used for updating an existing resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Sweep/{sweepid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Sweep

  **Documentation**

  This API path is used to update details related to a specific "sweep" associated with a mortgage loan. The sweep could refer to a process or mechanism used in managing funds within the loan account. By making a PUT request to this path with the appropriate mortgage loan ID and sweep ID, users can update information specific to that sweep within the context of the mortgage loan. The update could involve changing parameters related to interest calculations, principal and interest repayments, or other servicing patterns linked to the sweep.

  **Limitations**

  PUT: A good name for this path according to REST best practices would be:

PUT /mortgage-loans/{mortgageloanid}/sweeps/{sweepid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/Withdrawals/{withdrawalsid}/Update</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments UpBQ Update details relating to Withdrawals

  **Documentation**

  This API path allows you to update details relating to withdrawals associated with a specific mortgage loan. By providing the mortgage loan ID and withdrawals ID, you can make changes or modifications to the withdrawal information using the PUT method. This update functionality helps manage the specifics of withdrawals for mortgage loans such as interest calculations, repayments, and servicing patterns.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PUT /mortgage-loans/{mortgageloanid}/withdrawals/{withdrawalsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MortgageLoan/{mortgageloanid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  Fulfillment of a loan product for  the purpose of property purchase. Note different servicing patterns can be applied to interest calculations and principle and interest repayments Execute Authorization of Booking

  **Documentation**

  This API path is used to update and execute the authorization of a booking for a mortgage loan. It involves fulfilling a loan product for the purpose of purchasing a property. Different methods can be applied for calculating interest and handling repayments of both principal and interest. Essentially, this API endpoint facilitates the execution of the authorization process required for booking a mortgage loan.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/MortgageLoans/{mortgageloanid}/BookingAuthorizations/{bookingauthorizationid}/Execute

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
