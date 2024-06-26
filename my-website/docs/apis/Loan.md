<h1 style='color:red;'>Loan</h1>

**BIAN Documentation:** [Loan v12](https://app.swaggerhub.com/apis/BIAN-3/Loan/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /Loan/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InCR Initiate a loan

  **Documentation**

  This API path, /Loan/Initiate, provides a way to create a new general loan product. It allows users to set up the loan facility and complete various tasks related to processing the loan, both scheduled and ad-hoc. Essentially, this API helps kickstart the process of applying for and managing a loan within the system.

  **Limitations**

  POST: The name for the path '/Loan/Initiate' following REST best practices should be something that describes the resource or action being initiated. A good naming convention to follow for RESTful APIs is to use nouns for resources and verbs for actions. 

So, a more appropriate name for the path '/Loan/Initiate' could be '/loans'. This name is more generic and represents a collection of loans, which aligns with the resource-based approach of REST architecture.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpCR Update details for an existing loan

  **Documentation**

  This API path allows you to update the details of an existing loan by providing the loan ID and sending a PUT request to the specified endpoint. It is used to make changes or modifications to the information associated with a particular loan, such as updating repayment terms, interest rates, or any other relevant data related to the loan product.

  **Limitations**

  PUT: The correct name for the path '/Loan/{loanid}/Update' following REST best practices would be PUT /Loan/{loanid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Control</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks CoCR Control a loan

  **Documentation**

  This API path allows you to update an existing loan resource by controlling various aspects of the loan, such as setting up the loan facility and processing tasks related to the loan product. By sending a PUT request to this endpoint with the loan ID specified, you can make changes or updates to the loan information and perform specific tasks related to managing the loan product.

  **Limitations**

  PUT: The path '/Loan/{loanid}/Control' would be appropriately named '/loans/{loanid}/controls' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReCR Retrieve details about a loan

  **Documentation**

  This API path allows you to retrieve details about a specific loan by providing the loan ID as a parameter. It enables you to access information related to the setup of the loan facility, as well as any scheduled or ad-hoc tasks associated with the loan product. Essentially, this API helps you get detailed information about a loan within the system.

  **Limitations**

  GET: Following REST best practices, the name of the path '/Loan/{loanid}/Retrieve' should be simply '/loans/{loanid}' to retrieve a specific loan resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about interest applied to a loan

  **Documentation**

  This API path allows you to retrieve details about the interest that has been applied to a specific loan. By providing the loan ID and interest ID in the request, you can access information about how interest has been calculated and applied to that particular loan. This can be useful for tracking and understanding the financial aspects of the loan product.

  **Limitations**

  GET: A suitable name following REST best practices for the path '/Loan/{loanid}/Interest/{interestid}/Retrieve' could be:

GET /loans/{loanid}/interests/{interestid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute Apply Service Fee

  **Documentation**

  This API path allows you to update an existing service fee associated with a specific loan. It involves executing the application of a service fee for a particular loan product. This process is part of managing the loan facility and ensuring that scheduled and additional service fees are accurately processed.

  **Limitations**

  PUT: A more appropriate name for the path '/Loan/{loanid}/ServiceFees/{servicefeesid}/Execute' following REST best practices could be:

POST '/loans/{loanid}/service-fees/{servicefeesid}/execute'

Following REST naming conventions, it is recommended to use lowercase letters and hyphens to separate words in the URL path. Additionally, the use of singular nouns for resources is encouraged.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a loan fees

  **Documentation**

  This API path allows you to retrieve details about loan fees associated with a specific loan. By providing the loan ID and the service fees ID as parameters, you can access information about the fees that are attributed to that particular loan. This information can include specifics about the fees charged for the loan, helping you to better understand the financial aspects of the loan product.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/loans/{loanId}/serviceFees/{serviceFeeId}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Disbursement/{disbursementid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a disbursement paid against a loan

  **Documentation**

  This API path allows you to retrieve details about a specific disbursement that has been paid against a loan. By providing the loan ID and the disbursement ID in the URL, you can access information such as the amount, date, and any other relevant details related to that particular disbursement. This can be useful for tracking and managing payments made towards a loan product.

  **Limitations**

  GET: A suitable name for the path '/Loan/{loanid}/Disbursement/{disbursementid}/Retrieve' that follows REST best practices could be:

GET /loans/{loanid}/disbursements/{disbursementid}

This name is clear and concise, uses lowercase letters, utilizes nouns to represent resources (loan and disbursement), and includes the appropriate HTTP method (GET) to denote the action of retrieving information.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Maintenance/{maintenanceid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request a maintenance activity for a consumer load

  **Documentation**

  This API path allows you to request a maintenance activity for a particular consumer loan. By making a PUT request to this endpoint with the specific loan ID and maintenance ID, you can update an existing resource related to the maintenance activity of the loan. This API supports the management and execution of tasks needed to maintain and service consumer loans effectively.

  **Limitations**

  PUT: A suggestion based on REST best practices would be to name the path '/loans/{loanid}/maintenances/{maintenanceid}/requests'. This naming convention follows the plural form for resources and uses lower case letters with hyphens to separate words.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Maintenance/{maintenanceid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about maintenance processing for a loan

  **Documentation**

  This API path allows you to retrieve details about maintenance processing for a specific loan. By providing the loan ID and maintenance ID in the URL, you can access information related to the maintenance tasks and activities associated with that particular loan. This can include details about scheduled maintenance, ad-hoc processing tasks, and any other relevant information related to the loan's upkeep and management.

  **Limitations**

  GET: The name of the path should be:

'/loans/{loanid}/maintenances/{maintenanceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Withdrawal/{withdrawalid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a withdrawal from a loan

  **Documentation**

  This API path allows you to update the details of a withdrawal made from a specific loan. By providing the loan ID and the withdrawal ID in the path, you can use the PUT method to edit or modify information related to that particular withdrawal transaction. This functionality is part of the general loan product processing tasks, enabling you to manage and track withdrawals associated with a loan facility.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/loans/{loanId}/withdrawals/{withdrawalId}/update

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Withdrawal/{withdrawalid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated withdrawal against a loan

  **Documentation**

  This specific BIAN API path allows you to execute an automated withdrawal against a loan. In other words, it provides a way to initiate a withdrawal transaction for a specific loan account identified by the 'loanid' and a particular withdrawal identified by 'withdrawalid'. By sending a PUT request to this endpoint, you can trigger the system to process the withdrawal action in an automated manner. This functionality is part of a broader loan service domain that deals with managing loan products, setting up loan facilities, and executing various processing tasks related to loans.

  **Limitations**

  PUT: Based on REST best practices, a potential name for the path could be:

'/loans/{loanid}/withdrawals/{withdrawalid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Withdrawal/{withdrawalid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of a withdrawal

  **Documentation**

  This API endpoint allows you to update an existing request for handling a withdrawal related to a specific loan. By making a PUT request to this path with the loan ID and withdrawal ID specified, you can update the information or status associated with the withdrawal request for that particular loan. This action is part of the loan service domain, which manages various tasks related to loan products, including setting up loans and processing withdrawal requests.

  **Limitations**

  PUT: Following RESTful best practices, a suitable name for the path '/Loan/{loanid}/Withdrawal/{withdrawalid}/Request' could be:

/loans/{loanid}/withdrawals/{withdrawalid}/requests

This naming convention uses all lowercase letters, uses plural nouns to represent collections, and maintains a clear hierarchical structure.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Withdrawal/{withdrawalid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a loan withdrawal

  **Documentation**

  This API path allows you to retrieve details about a specific loan withdrawal. By providing the loan ID and withdrawal ID as parameters in the request, you can receive information related to that particular loan withdrawal from the loan service domain. This service is useful for tracking and managing loan transactions and ensuring accurate record-keeping for loan withdrawals.

  **Limitations**

  GET: A possible name for the path '/Loan/{loanid}/Withdrawal/{withdrawalid}/Retrieve' following REST best practices could be:

GET /loans/{loanid}/withdrawals/{withdrawalid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Repayment/{repaymentid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update a repayment transaction made to the loan

  **Documentation**

  This API path allows you to update a repayment transaction that was made to a specific loan identified by {loanid} and repayment transaction identified by {repaymentid}. By using a PUT request, you can modify details related to the repayment transaction, such as the amount paid or date of repayment. This functionality is part of a service domain that manages general loan products, handling tasks like setting up loan facilities and processing various transactions related to the loans.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be:
```
/loans/{loanid}/repayments/{repaymentid}
```

This path reflects the hierarchical structure of resources and uses plural nouns to represent collections of resources (like loans and repayments) and singular nouns for specific resource instances (like loanid and repaymentid). The specific action "Update" can be inferred from the HTTP method used for the request (e.g., PUT or PATCH).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Repayment/{repaymentid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated repayment transaction

  **Documentation**

  This BIAN API path allows you to execute an automated repayment transaction for a specific loan identified by {loanid} and repayment identified by {repaymentid}. This means that you can update an existing repayment resource associated with a loan, triggering an automated transaction to fulfill a scheduled or ad-hoc payment.

  **Limitations**

  PUT: The name of the path could be `/loans/{loanId}/repayments/{repaymentId}/execute` to adhere to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Repayment/{repaymentid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of an exceptional repayment

  **Documentation**

  This API path allows you to handle requests for exceptional repayments on a specific loan. You can update an existing repayment resource for a particular loan by using this path. It is part of a service domain that manages the setup and processing of general loan products, including managing the repayment requests for these loans.

  **Limitations**

  PUT: The name of the path should be:
'/loans/{loanId}/repayments/{repaymentId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Repayment/{repaymentid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a loan repayment

  **Documentation**

  This API path allows you to retrieve details about a specific loan repayment by providing the loan ID and repayment ID as parameters. It is used to access information regarding a loan repayment within the loan service domain, such as the repayment amount, date, status, and any other relevant details associated with the repayment.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/Loan/{loanid}/Repayment/{repaymentid}/Retrieve' should be simplified and focused on the resource being accessed. A more appropriate name for this path could be:

GET /loans/{loanid}/repayments/{repaymentid}

This naming convention clearly identifies the resource (repayment) being retrieved within the context of a specific loan.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Loan/{loanid}/Restructuring/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InBQ Initiate loan account restructuring

  **Documentation**

  This API path allows you to initiate the restructuring of a loan account identified by the {loanid} parameter. By making a POST request to this endpoint, you can create a new resource that starts the process of modifying the terms or conditions of the loan. This could involve changing the repayment schedule, interest rate, or other aspects of the loan to better suit the borrower's needs.

  **Limitations**

  POST: The name of the path '/Loan/{loanid}/Restructuring/Initiate' should ideally be structured in a RESTful manner by focusing on the resource being acted upon rather than the action being performed. A more appropriate RESTful name for this path might be:

'/Loans/{loanid}/Restructuring'

This revised name highlights the loan resource being accessed (with the specific loan identified by {loanid}) and the type of operation being performed on it (Restructuring). The

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Restructuring/{restructuringid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a loan or restructuring activities

  **Documentation**

  This API path allows you to update details related to a loan or restructuring activities associated with a specific loan. By using this path with the loan ID and restructuring ID, you can make changes to the existing information or structure of a loan product. This includes modifying parameters such as payment schedules, terms, or any other relevant details of the loan or restructuring activities.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

PUT /loans/{loanid}/restructuring/{restructuringid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Restructuring/{restructuringid}/Exchange</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks EcBQ Accept, reject etc a loan restructuring proposal

  **Documentation**

  This API path allows you to update an existing resource related to loan restructuring. Specifically, it pertains to modifying details associated with a particular loan's restructuring identified by the loan ID and restructuring ID provided in the path. This could involve accepting, rejecting, or making changes to a loan restructuring proposal within the loan system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/Loan/{loanid}/Restructuring/{restructuringid}/Exchange' should aim to be descriptive, clear, and intuitive. Here are a few suggestions for a more RESTful path name:

1. /loans/{loanid}/restructurings/{restructuringid}/exchanges
2. /loans/{loanid}/restructurings/{restructuringid}/exchanges
3. /loans/{loan

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Loan/{loanid}/Restructuring/{restructuringid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request activity associated with a restructuring effort

  **Documentation**

  This API path allows you to update an existing request associated with a restructuring effort for a specific loan. It is part of the overall loan fulfillment service, which manages various tasks related to setting up and processing loans. By using this API, you can make changes or updates to a request linked to restructuring activities for a particular loan facility.

  **Limitations**

  PUT: The name of the path should be:

```
/loans/{loanId}/restructuring/{restructuringId}/requests
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /Loan/{loanid}/Restructuring/{restructuringid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a general loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a loan restructuring task

  **Documentation**

  This BIAN API path allows you to retrieve details about a loan restructuring task by specifying the unique loan ID and the restructuring ID. It is used to get specific information related to the restructuring of a loan within the system.

  **Limitations**

  GET: Based on REST best practices, a more appropriate naming convention for the path '/Loan/{loanid}/Restructuring/{restructuringid}/Retrieve' could be:

GET /loans/{loanid}/restructurings/{restructuringid} 

This naming convention uses lowercase letters, uses plural nouns for collections (such as 'loans' and 'restructurings'), and clearly defines the resource being retrieved.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
