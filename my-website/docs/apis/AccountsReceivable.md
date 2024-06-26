<h1 style='color:red;'>AccountsReceivable</h1>

**BIAN Documentation:** [AccountsReceivable v12](https://app.swaggerhub.com/apis/BIAN-3/AccountsReceivable/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Control</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments CoCR Control the processing of Accounts Receivable Procedure

  **Documentation**

  This API path allows you to update an existing resource related to accounts receivable. Specifically, it is used to control the processing of accounts receivable for invoices issued by the bank to customers and partners. This includes managing follow-up and resolution activities for delayed or missed payments.

  **Limitations**

  PUT: The name of the path should be '/accounts-receivable/{accountsreceivableid}/control'. Keeping the path in lowercase letters and using hyphens to separate words follows REST best practices for naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Exchange</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments EcCR Accept, verify, etc. aspects of Accounts Receivable Procedure processing

  **Documentation**

  This API path allows you to update an existing resource related to accounts receivable. Specifically, it pertains to managing invoices issued by the bank to customers and partners, including handling follow-ups and resolving delayed or missed payments. It involves activities such as accepting, verifying, and processing accounts receivable procedures.

  **Limitations**

  PUT: The name of the path could be:
'/accounts-receivable/{accountsreceivableid}/exchanges' 

Remember that the path should be in lowercase, use nouns instead of verbs, and be descriptive of the resource it represents. Also, using plural nouns is more commonly used in REST naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Execute</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ExCR Execute an available automated action for Accounts Receivable Procedure

  **Documentation**

  This API path allows you to update existing accounts receivable records by executing an available automated action for accounts receivable procedures. Essentially, it helps manage invoices issued by the bank to customers and partners by handling follow-up and resolution activities for delayed or missed payments.

  **Limitations**

  PUT: The name of the path /AccountsReceivable/{accountsreceivableid}/Execute should be named as follows to adhere to REST best practices: 

/accounts-receivable/{accountsreceivableid}/actions/execute

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountsReceivable/Initiate</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments InCR Instantiate a new Accounts Receivable Procedure

  **Documentation**

  This API path allows you to create a new procedure related to managing accounts receivable. It is specifically designed for handling invoices issued by the bank to customers and partners. The procedure includes tasks such as follow-up and resolution for payments that are delayed or missed. By using this API, you can initiate a new process that helps in effectively managing accounts receivable activities within the bank.

  **Limitations**

  POST: If the path '/AccountsReceivable/Initiate' followed REST best practices, it should be named as a verb that represents the action being performed. For example, it could be named as '/accountsReceivable/initiatePayment', where 'initiatePayment' represents the action of initiating a payment in the accounts receivable context. This naming convention helps make the API endpoints more descriptive and intuitive.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountsReceivable/{accountsreceivableid}/Retrieve</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ReCR Retrieve details about any aspect of Accounts Receivable Procedure

  **Documentation**

  This API path allows you to retrieve details about specific aspects of the Accounts Receivable procedure by providing an account receivable ID. It helps you access information related to invoices issued by the bank to customers and partners, including follow-up and resolution activities for delayed or missed payments.

  **Limitations**

  GET: For a RESTful API path that retrieves a specific resource, the path should typically only contain the resource identifier, without any action-specific words like "Retrieve". Following this convention, the recommended name for the path would be:

```
/AccountsReceivable/{accountsreceivableid}
``` 

This path clearly indicates that it is retrieving a specific accounts receivable resource identified by accountsreceivableid.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Request</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments RqCR Request manual intervention or a decision with respect to Accounts Receivable Procedure

  **Documentation**

  This API path allows you to update an existing accounts receivable request by providing the accounts receivable ID. It is used for handling invoices issued by the bank to customers and partners, specifically for follow-up and resolution of delayed or missed payments. If manual intervention or a decision is needed regarding the accounts receivable procedure, this API can be used to make the necessary updates.

  **Limitations**

  PUT: The name of the path should be:

/accounts-receivable/{accountsreceivableid}/requests

This path follows REST best practices by using lowercase letters, hyphens to separate words, and plural nouns for better consistency and readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Update</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments UpCR Update details relating to Accounts Receivable Procedure

  **Documentation**

  This API path allows you to update details related to an existing accounts receivable procedure identified by its unique accountsreceivableid. It enables you to modify information such as invoice details, payment follow-up activities, and resolution actions for delayed or missed payments issued by the bank to customers and partners.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/accounts_receivable/{accountsreceivableid} (PUT)

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/CustomerNegotiation/{customernegotiationid}/Exchange</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments EcBQ Accept, verify, etc. aspects of Customer Negotiation processing

  **Documentation**

  This API path allows you to update an existing resource related to accounts receivable and customer negotiation. Specifically, it enables you to make changes to the information associated with a particular accounts receivable entry and customer negotiation process. This could involve updating details related to invoices issued by the bank to customers and partners, as well as managing activities related to following up on, resolving, and verifying delayed or missed payments.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
"/accounts-receivable/{accountsreceivableid}/customer-negotiations/{customernegotiationid}/exchanges"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/ReceivablesEvaluation/{receivablesevaluationid}/Exchange</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments EcBQ Accept, verify, etc. aspects of Receivables Evaluation processing

  **Documentation**

  This BIAN API endpoint allows you to update an existing resource related to accounts receivable. Specifically, it pertains to a Receivables Evaluation within the accounts receivable process. It enables the bank to manage invoices issued to customers and partners, including tasks such as tracking delayed or missed payments, evaluating receivables, and processing related activities like accepting and verifying payments. By using this endpoint with the PUT method, you can make changes to the Receivables Evaluation information associated with a specific accounts receivable ID.

  **Limitations**

  PUT: A suitable name for the path should be:
/accounts-receivable/{accountsreceivableid}/receivables-evaluation/{receivablesevaluationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountsReceivable/{accountsreceivableid}/CustomerNegotiation/Initiate</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments InBQ Instantiate a new Customer Negotiation

  **Documentation**

  This API path allows you to create a new Customer Negotiation within the Accounts Receivable service domain. By making a POST request to this path with the necessary information, you can initiate a new negotiation process specifically related to accounts receivable issues, such as delayed or missed payments from customers or partners. The Customer Negotiation feature helps in resolving payment disputes and managing outstanding invoices effectively.

  **Limitations**

  POST: The name of the path could be: 

/accounts-receivable/{accountsreceivableid}/customer-negotiation/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountsReceivable/{accountsreceivableid}/Payment/Initiate</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments InBQ Instantiate a new Payment

  **Documentation**

  This API path allows you to create a new payment related to accounts receivable. It is used to initiate a payment process for invoices issued by the bank to customers and partners. This can be helpful in managing delayed or missed payments by following up on them and resolving any issues that may arise. Essentially, it helps in organizing and tracking payments that are owed to the bank for services or products provided.

  **Limitations**

  POST: A suitable name for the path '/AccountsReceivable/{accountsreceivableid}/Payment/Initiate' following REST best practices could be:

POST /accounts-receivable/{accountsreceivableid}/payments

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountsReceivable/{accountsreceivableid}/ReceivablesEvaluation/Initiate</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments InBQ Instantiate a new Receivables Evaluation

  **Documentation**

  This API path allows you to create a new Receivables Evaluation associated with a specific accounts receivable ID within the Accounts Receivable service domain. It is used to initiate the evaluation process for invoices issued by the bank to customers and partners. The evaluation includes activities related to following up on and resolving delayed or missed payments.

  **Limitations**

  POST: The RESTful naming convention for this path could be something like '/accounts-receivable/{accountsreceivableid}/receivables-evaluation/initiate'. 

In this format, the resource names are all in lowercase, separated by hyphens to improve readability. This naming convention follows best practices for RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountsReceivable/{accountsreceivableid}/Resolution/Initiate</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments InBQ Instantiate a new Resolution

  **Documentation**

  This API path allows you to create a new resolution related to accounts receivable. It is used when there are delayed or missed payments from customers or partners, and you need to initiate a follow-up and resolution process. Essentially, this API helps in managing and addressing issues related to payments that are overdue or not received on time.

  **Limitations**

  POST: The recommended name for this path following REST best practices would be:

/accounts-receivable/{accountsreceivableid}/resolutions/{resolutionid}/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountsReceivable/{accountsreceivableid}/CustomerNegotiation/{customernegotiationid}/Retrieve</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ReBQ Retrieve details about any aspect of Customer Negotiation

  **Documentation**

  This API path allows you to retrieve details about a specific customer negotiation related to accounts receivable. By providing the account receivable ID and the customer negotiation ID, you can access information about the negotiation process between the bank and its customers or partners regarding delayed or missed payments. This can help track the progress and resolution of issues related to outstanding invoices and payments.

  **Limitations**

  GET: The name of the path, while following REST best practices, should be:

/accounts-receivable/{accountsreceivableid}/customer-negotiation/{customernegotiationid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountsReceivable/{accountsreceivableid}/Payment/{paymentid}/Retrieve</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ReBQ Retrieve details about any aspect of Payment

  **Documentation**

  This API path allows you to retrieve details about a payment within the accounts receivable system. You can specify the accounts receivable ID and the payment ID to access specific information related to a payment issued by the bank to customers or partners. This could include details such as payment status, amount, due date, and any follow-up actions taken for delayed or missed payments.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured to clearly and accurately represent the resource being accessed. Here is a suggestion for the path name:

/accounts-receivable/{accountsreceivableid}/payments/{paymentid}

This name follows REST conventions by using lowercase letters and hyphens to separate words in the path. It clearly indicates that the resource being accessed is related to accounts receivable and payments, with unique identifiers for accounts receivable and payment entities included in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountsReceivable/{accountsreceivableid}/ReceivablesEvaluation/{receivablesevaluationid}/Retrieve</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ReBQ Retrieve details about any aspect of Receivables Evaluation

  **Documentation**

  This API endpoint allows you to retrieve details related to the evaluation of accounts receivable within the bank's invoicing system. You can access specific information about a particular receivable evaluation by providing the IDs for the accounts receivable and receivables evaluation. This can include data on follow-up actions and resolutions for any delayed or missed payments associated with invoices issued to customers and partners.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:  
/accounts-receivable/{accountsreceivableid}/receivables-evaluation/{receivablesevaluationid}/retrieval

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountsReceivable/{accountsreceivableid}/Resolution/{resolutionid}/Retrieve</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments ReBQ Retrieve details about any aspect of Resolution

  **Documentation**

  This API path allows you to retrieve details related to the resolution of accounts receivable for a specific account receivable ID and resolution ID. It helps you access information about any aspect of the resolution process for delayed or missed payments issued by the bank to customers and partners.

  **Limitations**

  GET: Based on REST best practices, a more suitable name for this path might be `/accounts-receivable/{accountsreceivableid}/resolutions/{resolutionid}` to represent a resource-oriented naming convention. This path is structured in a more readable and consistent manner, using lowercase letters and hyphens to separate words for improved clarity and usability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/CustomerNegotiation/{customernegotiationid}/Request</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments RqBQ Request manual intervention or a decision with respect to Customer Negotiation

  **Documentation**

  This API path allows you to update an existing resource related to customer negotiation within the accounts receivable service domain. It specifically deals with handling invoices issued by the bank to customers and partners, focusing on follow-up and resolution activities for delayed or missed payments. By using this path, you can request manual intervention or make a decision regarding customer negotiation in the accounts receivable process.

  **Limitations**

  PUT: The name of the path should be:

/accounts-receivable/{accountsreceivableid}/customer-negotiation/{customernegotiationid}/request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/CustomerNegotiation/{customernegotiationid}/Update</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments UpBQ Update details relating to Customer Negotiation

  **Documentation**

  This API path allows you to update details related to customer negotiations within the Accounts Receivable service domain. Specifically, you can modify information concerning a customer negotiation associated with a specific accounts receivable ID. This can be used to manage and track negotiations with customers for delayed or missed payments issued by the bank.

  **Limitations**

  PUT: The name of the path should be:

'/accounts-receivable/{accountsreceivableid}/customer-negotiation/{customernegotiationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Payment/{paymentid}/Update</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments UpBQ Update details relating to Payment

  **Documentation**

  This API path allows you to update the details related to a payment within the Accounts Receivable system. You would need to specify the unique IDs for both the accounts receivable record and the specific payment you want to update. By using a PUT request method, you can make changes or modifications to information regarding a payment issued to customers or partners by the bank. This could include updating payment amounts, due dates, references, or any other relevant details associated with the payment.

  **Limitations**

  PUT: The name of the path following REST best practices could be something like:

'/accounts-receivable/{accountsreceivableid}/payments/{paymentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/ReceivablesEvaluation/{receivablesevaluationid}/Update</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments UpBQ Update details relating to Receivables Evaluation

  **Documentation**

  This API path allows you to update details related to the evaluation of accounts receivable within the Accounts Receivable system. Specifically, you can update information associated with a specific receivable evaluation identified by accountsreceivableid and receivablesevaluationid. This service domain deals with managing invoices issued by the bank to customers and partners, including activities related to following up and resolving delayed or missed payments. By making a PUT request to this endpoint, you can modify the data pertaining to the evaluation of receivables to ensure accurate and up-to-date information in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be `/accounts-receivable/{accountsReceivableId}/receivables-evaluation/{receivablesEvaluationId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountsReceivable/{accountsreceivableid}/Resolution/{resolutionid}/Update</span></summary>

  **Description**

  This service domain handles accounts receivable for invoices issue by the bank to customers and partners. It includes follow-up and resolution activity for delayed/missed payments UpBQ Update details relating to Resolution

  **Documentation**

  This API path allows you to update details related to a resolution within the "Accounts Receivable" service domain. You can use this endpoint to make changes or additions to information associated with a specific resolution identified by the {resolutionid} within a particular accounts receivable context represented by {accountsreceivableid}. This update action is performed using the PUT method, which is typically used to modify existing resources. In simpler terms, this API path enables you to edit specific resolution details for accounts receivable activities related to invoices issued by the bank to customers and partners.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path would be:

PUT /accountsReceivable/{accountsreceivableid}/resolution/{resolutionid}

This naming convention follows RESTful principles by using the HTTP method (PUT) to update a specific resource (resolution) associated with another resource (accountsReceivable) identified by their respective IDs. It uses lowercase letters and separates words using hyphens for better readability and consistency.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
