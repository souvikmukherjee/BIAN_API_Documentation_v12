<h1 style='color:red;'>CorporateLoan</h1>

**BIAN Documentation:** [CorporateLoan v12](https://app.swaggerhub.com/apis/BIAN-3/CorporateLoan/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CorporateLoan/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InCR Initiate a corporate loan

  **Documentation**

  This API path, /CorporateLoan/Initiate, allows users to create a new corporate loan facility. It involves setting up the initial details of the loan and carrying out any necessary processing tasks, both scheduled and ad-hoc, related to the loan product. In simpler terms, this API initiates the process of creating a corporate loan within the system.

  **Limitations**

  POST: A suitable name for the path '/CorporateLoan/Initiate' following REST best practices could be '/loans/corporate/initiate'. It is always recommended to use lowercase letters, plural nouns, and descriptive terms in RESTful URLs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpCR Update details for an existing corporate loan

  **Documentation**

  This API path allows you to update the details of an existing corporate loan by providing the ID of the loan in the request. You can make changes to the loan information such as the loan terms, payment schedule, or any other relevant details associated with the loan. This helps in keeping the loan information accurate and up-to-date in the system.

  **Limitations**

  PUT: A suitable name for the path '/CorporateLoan/{corporateloanid}/Update' following REST best practices would be: 

'/corporate-loans/{corporateloanid}' 

This name is more concise and aligns better with RESTful naming conventions, which typically use lowercase letters and hyphens to separate words in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Control</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks CoCR Control a corporate loan

  **Documentation**

  This API path allows you to update an existing corporate loan by providing the necessary control parameters related to the loan facility and processing tasks. It helps in managing and adjusting the terms and conditions of a corporate loan as needed.

  **Limitations**

  PUT: The name of the path following REST best practices should be "/corporate-loans/{corporateLoanId}/controls". 

According to REST conventions: 

1. Use lowercase letters for path segments
2. Separate words with hyphens
3. Use plural nouns for collections (e.g., corporate-loans)
4. Use singular nouns for resources (e.g., control)

So, the final path for the endpoint should follow these conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReCR Retrieve details about a corporate loan

  **Documentation**

  This BIAN API path allows users to retrieve details about a specific corporate loan by providing the unique identifier (corporateloanid) of the loan. The API fetches information related to the corporate loan, such as its setup, processing tasks, scheduled activities, and any ad-hoc activities associated with the loan facility. Essentially, it helps users access specific details and data about a corporate loan product.

  **Limitations**

  GET: A suitable name for the path '/CorporateLoan/{corporateloanid}/Retrieve' following REST best practices could be:

GET /corporate-loans/{corporateloanid}

This name is more descriptive and follows the REST convention of using lowercase letters and hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about interest applied to a corporate loan

  **Documentation**

  This API path allows you to retrieve details about the interest applied to a specific corporate loan. By providing the corporate loan ID and interest ID in the request, this endpoint will return information about the interest related to that specific loan. This can be useful for obtaining specific details about how interest is calculated and applied to the loan.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/corporate-loans/{corporateLoanId}/interests/{interestId}'

It is recommended to use lowercase letters and hyphens to separate words in the path rather than camel case. Additionally, it's best to use plural nouns for resource names and avoid unnecessary words like "Retrieve" which can be inferred from the HTTP method used.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute Apply Service Fee

  **Documentation**

  This BIAN API endpoint allows you to update an existing service fee related to a specific corporate loan. By providing the corporate loan ID and the service fee ID, you can execute and apply changes or updates to the service fee associated with that particular corporate loan. This API path is part of the Corporate Loan service domain, which manages various tasks related to corporate loan products, such as setting up loan facilities and processing service fees according to scheduled or ad-hoc requirements.

  **Limitations**

  PUT: The name of the path '/CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}/Execute' should ideally reflect the action being performed on the resource rather than the specific implementation details. An appropriate RESTful path for this scenario could be:

'/CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}/Process'

This name conveys the idea that some processing or action is being done on the service fees associated with the corporate loan

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a corporate loan fees

  **Documentation**

  This BIAN API path allows you to retrieve details about the service fees associated with a corporate loan. You can specify a particular corporate loan ID and service fees ID to access specific information about the fees related to that loan. This API supports the management and retrieval of fee-related data for corporate loans within the system.

  **Limitations**

  GET: A more appropriate name for the path could be:

GET /corporate-loans/{corporateLoanId}/service-fees/{serviceFeesId} 

This path follows REST best practices by using lowercase letters, separating words with hyphens, and utilizing resource identifiers in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Disbursement/{disbursementid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a disbursement paid against a corporate loan

  **Documentation**

  This API path allows you to retrieve details about a disbursement that was paid against a specific corporate loan. You can access information such as the amount of the disbursement, the date it was paid, and any other relevant details related to the payment. This can be useful for tracking and managing disbursements made for corporate loans.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/CorporateLoan/{corporateloanid}/Disbursement/{disbursementid}/Retrieve' should be simply '/corporate-loans/{corporateLoanId}/disbursements/{disbursementId}'. The use of lowercase letters, hyphens to separate words, and the plural form for collections are in line with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Maintenance/{maintenanceid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request a maintenance activity for a consumer load

  **Documentation**

  This BIAN API path allows you to request a maintenance activity for a specific corporate loan identified by its ID. By calling this API endpoint with a PUT method, you can update an existing maintenance task for the specified corporate loan. This service domain manages the processing tasks related to corporate loans, such as setting up the loan facility and handling regular and one-time maintenance activities.

  **Limitations**

  PUT: The name of the path could be more simplified and follow RESTful best practices by using nouns to represent resources. A more appropriate name for the path could be:

'/loans/{corporateLoanId}/maintenance/{maintenanceId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Maintenance/{maintenanceid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about maintenance processing for a corporate loan

  **Documentation**

  This BIAN API path allows you to retrieve details about maintenance processing for a specific corporate loan within a corporate loan facility. By providing the corporate loan ID and maintenance ID, you can access information related to the ongoing maintenance tasks and processes associated with that loan. This could include scheduled maintenance activities as well as any ad-hoc maintenance tasks that have been completed or are pending.

  **Limitations**

  GET: A suggestion for the name of the path following REST best practices could be:

'/corporate-loans/{corporateLoanId}/maintenance/{maintenanceId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Withdrawal/{withdrawalid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a withdrawal from a corporate loan

  **Documentation**

  This API path allows you to update the details of a withdrawal from a specific corporate loan. By providing the corporate loan ID and the withdrawal ID, you can make changes to the information associated with a withdrawal made from that loan. This could include updating the amount withdrawn, the date of the withdrawal, or any other relevant details related to the withdrawal transaction.

  **Limitations**

  PUT: The name of the path should be:

'/corporate-loan/{corporateLoanId}/withdrawal/{withdrawalId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Withdrawal/{withdrawalid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated withdrawal against a corporate loan

  **Documentation**

  This API path allows you to trigger an automated withdrawal from a corporate loan account. By making a PUT request to this endpoint with the specified corporate loan ID and withdrawal ID, you can execute a withdrawal transaction against the corporate loan. This functionality is part of the overall process of managing corporate loan products, handling tasks like setting up loan facilities and processing scheduled and ad-hoc transactions.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

'/corporate-loans/{corporateLoanId}/withdrawals/{withdrawalId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Withdrawal/{withdrawalid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of a withdrawal

  **Documentation**

  This API path allows you to update an existing request for a withdrawal within a specific corporate loan. It is part of the Corporate Loan service domain, which manages the processes related to corporate loan products, including setting up loan facilities and handling various tasks associated with the products.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/corporate-loans/{corporateLoanId}/withdrawals/{withdrawalId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Withdrawal/{withdrawalid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a corporate loan withdrawal

  **Documentation**

  This API path allows you to retrieve details about a specific corporate loan withdrawal. By providing the corporate loan ID and the withdrawal ID in the endpoint URL, you can access information about a particular withdrawal transaction associated with a corporate loan. This API is part of the Corporate Loan service domain, which manages the processing and servicing of corporate loans, including setting up loan facilities and handling various tasks related to the loan products.

  **Limitations**

  GET: A more appropriate naming convention for the path would be '/corporate-loans/{corporateLoanId}/withdrawals/{withdrawalId}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Repayment/{repaymentid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update a repayment transaction made to the corporate loan

  **Documentation**

  This API path allows you to update a repayment transaction that has been made towards a specific corporate loan. By providing the corporate loan ID and repayment ID, you can modify the details of the repayment transaction, such as the amount paid or the date of payment. This functionality is part of the overall service domain that manages corporate loan products, including setting up the loan facility and handling various processing tasks related to the loan.

  **Limitations**

  PUT: The name of the path should be: 

```
PUT /corporate-loans/{corporateLoanId}/repayments/{repaymentId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Repayment/{repaymentid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated repayment transaction

  **Documentation**

  This API path allows you to update an existing resource related to a corporate loan repayment. Specifically, it enables the execution of an automated repayment transaction for a specific corporate loan identified by `corporateloanid` and a repayment transaction identified by `repaymentid`. By making a PUT request to this endpoint, you can trigger the processing of the automated repayment for the specified corporate loan, facilitating the fulfillment of the loan product.

  **Limitations**

  PUT: The name of the path should ideally follow RESTful naming conventions. Here is a suggestion based on REST best practices: 

'/corporate-loans/{corporateLoanId}/repayments/{repaymentId}/execute'

In this naming convention:
- The path components are all lowercase.
- Plural nouns are used for collection resources (like 'corporate-loans' and 'repayments').
- Singular nouns are used for individual resources (like 'corporateLoan' and 'repayment

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Repayment/{repaymentid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of an exceptional repayment

  **Documentation**

  This API path allows you to update and handle an exceptional repayment request for a specific repayment associated with a corporate loan. By making a PUT request to this path with the appropriate corporateloanid and repaymentid, you can initiate the handling of a unique repayment situation for the corporate loan product. This service domain manages tasks related to setting up the loan facility and processing various types of scheduled and ad-hoc requests, including special repayments.

  **Limitations**

  PUT: A good name for this endpoint following REST best practices could be: 

'/loans/{loanId}/repayments/{repaymentId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Repayment/{repaymentid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a corporate loan repayment

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific repayment of a corporate loan. You can provide the corporate loan ID and the repayment ID to access information related to that particular repayment within the loan facility. This can include details such as the amount repaid, the date of repayment, and any other relevant information about the repayment transaction.

  **Limitations**

  GET: A suitable name for the path '/CorporateLoan/{corporateloanid}/Repayment/{repaymentid}/Retrieve' following REST best practices could be:

GET /corporate-loans/{corporateLoanId}/repayments/{repaymentId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateLoan/{corporateloanid}/Restructuring/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InBQ Initiate corporate loan account restructuring

  **Documentation**

  This BIAN API path allows for the initiation of a corporate loan account restructuring for a specific corporate loan identified by its unique ID. By sending a POST request to this endpoint, a new resource can be created to start the process of restructuring the corporate loan account. This service domain manages various tasks related to corporate loan products, such as setting up the loan facility and processing scheduled or ad-hoc tasks.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/CorporateLoan/{corporateloanid}/Restructuring/Initiate' could be simplified and standardized by removing unnecessary words and using nouns to represent resources and verbs to represent actions. 

Here are a few suggestions for a more RESTful path name:
1. /corporate-loans/{corporateloanid}/restructuring/initiate
2. /loans/{loanid}/restructuring
3. /cor

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a corporate loan or restructuring activities

  **Documentation**

  This API path allows users to update the details of a corporate loan or restructuring activities associated with a specific corporate loan. By making a PUT request to this endpoint with the relevant IDs, users can modify the information related to the loan facility or any restructuring processes linked to it. This functionality enables users to keep the corporate loan records up-to-date and make necessary changes as required.

  **Limitations**

  PUT: The name of the path could be '/corporate-loans/{corporateLoanId}/restructurings/{restructuringId}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Exchange</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks EcBQ Accept, reject etc a corporate loan restructuring proposal

  **Documentation**

  This API path is used to update an existing corporate loan restructuring proposal within a specific corporate loan facility. It allows users to make changes or exchange information related to the restructuring of the loan. The PUT method is used to modify the details of the restructuring identified by the restructuring ID within the specified corporate loan ID. This functionality helps manage and process corporate loan restructuring requests effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on the resource being accessed. It should be descriptive, hierarchical, and follow a consistent naming convention. 

A suitable name for the path '/CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Exchange' could be: 

'/corporate-loans/{corporateLoanId}/restructuring/{restructuringId}/exchange' 

This name is in lowercase and uses hyphens to separate words for

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request activity associated with a restructuring effort

  **Documentation**

  This API path allows you to update an existing request for a restructuring activity associated with a corporate loan. It is part of the Corporate Loan service domain and specifically focuses on managing requests related to restructuring efforts within the loan facility. By sending a PUT request to this endpoint with the appropriate details, you can make updates to the restructuring request, ensuring that the necessary actions are taken as part of the corporate loan product fulfillment process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/corporate-loans/{corporateLoanId}/restructurings/{restructuringId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a corporate loan restructuring task

  **Documentation**

  This API path allows you to retrieve information about a specific corporate loan restructuring task. You would need to provide the corporate loan ID and the restructuring ID to access the details of the restructuring task associated with that particular corporate loan. The API helps in accessing specific information related to the restructuring process of a corporate loan within the system.

  **Limitations**

  GET: A more RESTful name for the path '/CorporateLoan/{corporateloanid}/Restructuring/{restructuringid}/Retrieve' could be:

'/corporate-loans/{corporateLoanId}/restructuring/{restructuringId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update details about an applied service fee

  **Documentation**

  This BIAN API path allows you to update the details of an applied service fee for a specific corporate loan. By using this path with a PUT request, you can modify or change information related to a service fee that has been applied to a corporate loan identified by its ID. This functionality is part of the Corporate Loan service domain, which deals with managing corporate loan products, setting up loan facilities, and handling various processing tasks related to these loans.

  **Limitations**

  PUT: The appropriate name for this path following REST best practices would be:

PATCH /CorporateLoan/{corporateloanid}/ServiceFees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateLoan/{corporateloanid}/AmountBlock/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Initiate an amount block

  **Documentation**

  This BIAN API path `/CorporateLoan/{corporateloanid}/AmountBlock/Initiate` allows for the initiation of an amount block within a corporate loan facility identified by `{corporateloanid}`. This action involves setting up a process to block a specific amount of funds within the corporate loan for a particular purpose or transaction. This is a POST request, meaning it creates a new resource to manage and track this specific amount block initiation within the overall corporate loan product handling process.

  **Limitations**

  POST: A possible name for the path '/CorporateLoan/{corporateloanid}/AmountBlock/Initiate' following REST best practices could be:

'/corporate-loans/{corporateLoanId}/amount-block/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/AmountBlock/{amountblockid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Retrieve details about an amount block

  **Documentation**

  This API path allows you to retrieve details about an amount block associated with a specific corporate loan within the system. By providing the corporate loan ID and the amount block ID in the request, you can get information about the amount block, such as the allocated amount, status, and any other relevant details related to that specific block in the corporate loan process.

  **Limitations**

  GET: The appropriate name for this path following REST best practices could be: 

GET /corporate-loans/{corporateloanId}/amount-blocks/{amountblockId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/AmountBlock/{amountblockid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update details of an amount block

  **Documentation**

  This BIAN API path allows you to update the details of an amount block within a specific corporate loan. By using a PUT request to this endpoint with the appropriate IDs, you can modify the information related to the amount block associated with the corporate loan. This may include adjusting the blocked amount, expiration date, or any other relevant details of the amount block.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /CorporateLoan/{corporateloanid}/AmountBlock/{amountblockid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Execute Authorization of Booking

  **Documentation**

  This API path is used to update an existing resource related to a corporate loan. Specifically, it pertains to the execution of booking authorization for a corporate loan. It is part of the process that manages the fulfillment of corporate loan products, including setting up the loan facility and carrying out various processing tasks as needed. By using this API, you can trigger the execution of booking authorization for a specific corporate loan, identified by the {corporateloanid}, and the corresponding booking authorization ID, {bookingauthorizationid}.

  **Limitations**

  PUT: A suitable name for this path following RESTful best practices could be:

'/corporate-loans/{corporateLoanId}/booking-authorizations/{bookingAuthorizationId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateLoan/{corporateloanid}/IssuedDevice/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Initiate Provision of Issued Device

  **Documentation**

  This API path `/CorporateLoan/{corporateloanid}/IssuedDevice/Initiate` allows you to initiate the provision of an issued device related to a specific corporate loan identified by `{corporateloanid}`. By sending a POST request to this endpoint, you can create a new resource to facilitate the provision of a device associated with the corporate loan. This process is part of handling the fulfillment of the corporate loan product, including setting up the loan facility and completing various processing tasks related to the product.

  **Limitations**

  POST: A suitable name for the path '/CorporateLoan/{corporateloanid}/IssuedDevice/Initiate' following REST best practices would be:

POST /corporate-loans/{corporateLoanId}/issued-devices/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateLoan/{corporateloanid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about an issued device related to a specific corporate loan. By providing the corporate loan ID and the issued device ID as parameters, you can access information about the device that has been issued as part of the loan process. This information may include specifics about the device, its usage, status, or any related data that is relevant to the corporate loan.

  **Limitations**

  GET: Based on REST best practices, the name for this path could be:

GET /corporate-loans/{corporateLoanId}/issued-devices/{issuedDeviceId}

The path name should be in lowercase letters and should use hyphens to separate words for better readability. Also, it should use plural nouns to indicate collections and singular nouns to indicate individual resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateLoan/{corporateloanid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a corporate loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a specific issued device that is allocated to a corporate loan account. By making a PUT request to this endpoint with the appropriate corporate loan ID and issued device ID, you can modify the information related to the issued device associated with the loan account. This can include updating features, status, or any other relevant details of the device linked to the corporate loan.

  **Limitations**

  PUT: A suitable name for this path following RESTful best practices could be:

PUT /corporate-loans/{corporateLoanId}/issued-devices/{issuedDeviceId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
