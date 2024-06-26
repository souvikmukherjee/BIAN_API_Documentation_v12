<h1 style='color:red;'>BankDrafts</h1>

**BIAN Documentation:** [BankDrafts v12](https://app.swaggerhub.com/apis/BIAN-3/BankDrafts/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/Control</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Control Bearer Document Transaction

  **Documentation**

  This API path allows you to update an existing bank draft control document by providing the bank draft ID. It is used for managing bank guaranteed payment transactions, specifically focusing on controlling bearer documents related to the transaction. By making a PUT request to this path with the appropriate data, you can make changes or updates to the control information associated with a specific bank draft.

  **Limitations**

  PUT: A suitable name for the path '/BankDrafts/{bankdraftsid}/Control' following REST best practices could be:

PATCH /bankdrafts/{bankdraftsid}/control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/Exchange</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Exchange Bearer Document Transaction

  **Documentation**

  This BIAN API path is used to update an existing bank draft in a bank guaranteed payment transaction. It specifically deals with the exchange of bearer documents related to the bank drafts. This functionality ensures that the appropriate changes are made to the bank draft during the exchange process, maintaining the security and validity of the transaction.

  **Limitations**

  PUT: The name of the path should be structured as follows, following REST best practices:
'/bankdrafts/{bankdraftsid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/Execute</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Execute Bearer Document Transaction

  **Documentation**

  This API path `/BankDrafts/{bankdraftsid}/Execute` allows you to trigger the execution of a bank draft transaction identified by the `bankdraftsid`. Essentially, it enables the updating of an existing bank draft transaction to carry out the payment process.

  **Limitations**

  PUT: The name of the path according to RESTful best practices should be:

/bank-drafts/{bankdraftsid}/execute

This naming convention follows the use of lowercase letters, hyphens to separate words, and using nouns to represent resources in a RESTful API.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankDrafts/Initiate</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Initiate Bearer Document Transaction

  **Documentation**

  This API endpoint allows you to create a new bank draft transaction for a guaranteed payment. It initiates the process of creating a bearer document for the transaction. In simpler terms, it enables you to start a secure payment transaction using a bank draft.

  **Limitations**

  POST: Based on REST best practices, the path "/BankDrafts/Initiate" should be named according to the specific action being performed. A more appropriate name for this path could be "/bank-drafts" if it is intended to retrieve a collection of bank drafts, and "/bank-drafts/initiate" if it is specifically for initiating a new bank draft. Would you like more information on REST best practices or help with something else?

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/Notify</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Notify Bearer Document Transaction

  **Documentation**

  This API path allows you to retrieve information about a specific bank draft transaction by providing the ID of the bank draft. It is used to notify the bearer of the document related to the transaction, which ensures that the payment is guaranteed by the bank. Essentially, it provides access to details and updates regarding a bank guaranteed payment transaction involving bank drafts.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/bank-drafts/{bankdraftsid}/notify'

In this naming convention:
- Use lowercase letters for the path segments
- Separate words with hyphens for better readability
- Avoid using capital letters to maintain consistency

Overall, this naming convention helps in creating a clean and easily understandable URL structure for the API.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/Request</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Request Bearer Document Transaction

  **Documentation**

  This BIAN API path allows you to update an existing bank draft transaction request with bearer document information. It is used for bank guaranteed payment transactions where a bank draft is being requested and involves providing additional documentation related to the transaction.

  **Limitations**

  PUT: The name of the path should be "/bank-drafts/{bankdraftsid}/request" to follow REST best practices. This path uses lowercase letters, separates words with hyphens, and includes the specific resource identifier "bankdraftsid" for the bank draft resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/Retrieve</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Retrieve Bearer Document Transaction

  **Documentation**

  This API path allows you to retrieve information about a bank draft transaction by providing the specific bank draft ID. Bank drafts are a form of guaranteed payment that can be issued by a bank. By using this API, you can access details related to a particular bank draft transaction, such as the bearer document associated with it.

  **Limitations**

  GET: The name of the path '/BankDrafts/{bankdraftsid}/Retrieve' following REST best practices could be named as '/bankdrafts/{bankdraftsid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/Update</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Update Bearer Document Transaction

  **Documentation**

  This API path allows you to update an existing bank draft transaction. Bank drafts are a secure form of payment where the bank guarantees that the funds will be available when the draft is presented for payment. By using this API, you can modify the details or status of a bank draft transaction, ensuring accurate and up-to-date information for all parties involved.

  **Limitations**

  PUT: The name of the path following REST best practices for updating a resource should be:

```
PUT /BankDrafts/{bankdraftsid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Exchange</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Exchange Bank Guaranteed Payment Remittance Task

  **Documentation**

  This BIAN API path allows you to update an existing bank guaranteed payment remittance task related to a specific bank draft transaction. This service domain supports transactions involving bank guaranteed payments, such as bank drafts. By accessing this path and using the PUT method, you can make changes or updates to the details of a bank guaranteed payment remittance task associated with a particular bank draft transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/bank-drafts/{bankdraftsid}/bank-guaranteed-payment-remittance/{bankguaranteedpaymentremittanceid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Exchange</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Exchange Bank Guaranteed Payment Specification Task

  **Documentation**

  This API path allows you to update an existing bank guaranteed payment specification associated with a bank draft. It supports transactions related to bank drafts that require guaranteed payments, providing a way to update the details of the payment specification for a specific bank draft ID and bank guaranteed payment specification ID.

  **Limitations**

  PUT: The name of the path should be:

/bank-drafts/{bankdraftsid}/bank-guaranteed-payment-specifications/{bankguaranteedpaymentspecificationid}/exchange

In RESTful API design, it is recommended to use lowercase letters, separate words with dashes, and include relevant resource identifiers in the path to make it more readable and intuitive.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Exchange</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Exchange Bearer Document Creation and Registration Task

  **Documentation**

  This API path allows you to update an existing bank draft exchange transaction by modifying the details related to the creation and registration of a bearer document. The service supports bank-guaranteed payment transactions involving bank drafts. By using this API, you can make changes to the bearer document creation and registration process for a specific bank draft transaction identified by its unique IDs. This can include updating information related to the exchange of the bearer document.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be simplified and made more descriptive. Here is a suggestion:

'/bank-drafts/{bankDraftsId}/bearer-documents/{bearerDocumentId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Exchange</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Exchange Customer Payment Task

  **Documentation**

  This API path allows you to update an existing customer payment transaction that involves a bank draft. It supports bank guaranteed payment transactions such as exchanging a customer payment related to a specific bank draft. By using a PUT request, you can modify the details of the customer payment associated with the bank draft identified by its ID.

  **Limitations**

  PUT: Based on REST best practices, the path should be named:

'/bank-drafts/{bankdraftsid}/customer-payments/{customerpaymentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Execute</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Execute Bank Guaranteed Payment Remittance Task

  **Documentation**

  This API path allows you to update and execute a bank guaranteed payment remittance task related to a specific bank draft. It is used for processing bank guaranteed payment transactions like bank drafts. By making a PUT request to this endpoint with the required IDs for the bank draft and bank guaranteed payment remittance, you can trigger the execution of the payment remittance task within the banking system.

  **Limitations**

  PUT: The name of the path should be:

/bank-drafts/{bankdraftsid}/bank-guaranteed-payment-remittances/{bankguaranteedpaymentremittanceid}/execute

Here are the changes made to adhere to REST best practices:
- Path parameters are in lowercase with hyphens for better readability.
- Plural nouns are used for resource names when applicable.
- The path itself is all in lowercase for consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Execute</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Execute Bank Guaranteed Payment Specification Task

  **Documentation**

  This API path is used to update and execute a specific bank guaranteed payment task associated with a bank draft. It allows you to make changes or updates to the bank guaranteed payment specification related to a particular bank draft and then execute that payment task. This means that you can ensure the bank draft is processed according to the specified payment details and guarantees provided by the bank.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/bank-drafts/{bankdraftsid}/bank-guaranteed-payment-specifications/{bankguaranteedpaymentspecificationid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Execute</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Execute Bearer Document Creation and Registration Task

  **Documentation**

  This API path is used to update and execute a specific task related to creating and registering bearer documents for bank drafts. It allows users to perform actions related to bank guaranteed payment transactions within the service domain of bank drafts.

  **Limitations**

  PUT: A fitting name based on REST best practices for the endpoint path you provided would be:

```
/BankDrafts/{bankdraftsid}/BearerDocumentCreations/{bearerdocumentcreationid}/Register
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Execute</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Execute Customer Payment Task

  **Documentation**

  This API path is used to update an existing bank draft transaction for executing a customer payment task. It involves bank guaranteed payment transactions where a bank draft is used as a form of payment. The "Execute" operation on the given bank draft ID and customer payment ID will carry out the necessary actions to process the payment from the customer.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be something like:

- POST /bank-drafts/{bankdraftsid}/customer-payments/{customerpaymentid}/execute

In this naming convention:
- Use lowercase letters for the path.
- Use hyphens to separate words in the path segments.
- Use plurals for resource names.
- Use nouns to identify resources.
- Use HTTP methods to indicate the action performed on the resource.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/Initiate</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Initiate Bank Guaranteed Payment Remittance Task

  **Documentation**

  This API path is used to initiate a bank guaranteed payment task for a specific bank draft. It allows you to create a new resource related to bank drafts in order to guarantee payment through the bank. The task involves initiating a bank guaranteed payment remittance process for the specified bank draft ID. This API facilitates the secure handling of payment transactions using bank drafts.

  **Limitations**

  POST: A suitable name for this path in adherence to REST best practices could be:

```
POST /bank-drafts/{bankdraftsId}/bank-guaranteed-payment-remittance
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/Initiate</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Initiate Bank Guaranteed Payment Specification Task

  **Documentation**

  This BIAN API path is used to initiate a bank guaranteed payment specification task related to bank drafts. It allows you to create a new resource for setting up bank guaranteed payment transactions. By making a POST request to this endpoint with the required data, you can start the process of setting up a bank guaranteed payment specification for a bank draft transaction.

  **Limitations**

  POST: A suitable name for the mentioned path, following REST best practices, could be:

`POST /bank-drafts/{bankdraftsid}/bank-guaranteed-payment-specification/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/Initiate</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Initiate Bearer Document Creation and Registration Task

  **Documentation**

  This BIAN API path allows you to initiate the creation and registration of a bearer document for a bank draft. It supports bank guaranteed payment transactions by enabling you to start the process of creating and registering a document that guarantees payment through a bank draft.

  **Limitations**

  POST: The name of the path '/BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/Initiate' following REST best practices would be:

/BankDrafts/{bankdraftsid}/BearerDocuments

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankDrafts/{bankdraftsid}/CustomerPayment/Initiate</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Initiate Customer Payment Task

  **Documentation**

  This API path allows you to initiate a new customer payment task related to bank drafts. It supports bank guaranteed payment transactions and provides a way to create a new resource for initiating customer payments using bank drafts.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:
- /bank-drafts/{bankdraftsid}/customer-payment/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Notify</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Notify Bank Guaranteed Payment Remittance Task

  **Documentation**

  This API path retrieves information about notifying a bank guaranteed payment remittance task related to bank drafts. It supports transactions involving bank guaranteed payments and allows users to retrieve details related to notifying the bank about a guaranteed payment remittance task.

  **Limitations**

  GET: The name of the path should be:

/BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Notify

This path follows REST best practices by being clear, descriptive, and hierarchical. It includes resource names, identifiers, and actions, making it easily understandable and intuitive for users to navigate the API.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Notify</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Notify Bank Guaranteed Payment Specification Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guaranteed payment specification task related to a bank draft. By using this path with the appropriate IDs, you can access details about a specific task within the bank guaranteed payment process associated with a bank draft transaction.

  **Limitations**

  GET: A possible name for the path could be:

`/bank-drafts/{bankDraftsId}/bank-guaranteed-payment-specifications/{bankGuaranteedPaymentSpecificationId}/notify`

This name follows the REST best practices of using lowercase letters, using hyphens for word separation, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Notify</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Notify Bearer Document Creation and Registration Task

  **Documentation**

  This API path is used to retrieve information about a specific action related to bank drafts. It specifically relates to notifying the creation and registration of a bearer document task within the context of bank guaranteed payment transactions. By making a GET request to this endpoint with the appropriate identifiers, you can access details about the task of notifying the creation and registration of a bearer document in the banking system.

  **Limitations**

  GET: The name of the path following REST best practices could be:  
'/bank-drafts/{bankdraftsid}/bearer-document-creation-and-registration/{bearerdocumentcreationandregistrationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Notify</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Notify Customer Payment Task

  **Documentation**

  This API path retrieves information about a specific customer payment task related to bank drafts. It allows you to access details about a bank guaranteed payment transaction involving a bank draft, such as the status of the payment or any notifications sent to the customer regarding the payment task.

  **Limitations**

  GET: A suitable name for the path `/BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Notify` following RESTful best practices could be:

`/bank-drafts/{bankdraftsid}/customer-payment/{customerpaymentid}/notify` 

Using lowercase letters, separating words with dashes, and using resource names in plural form can help maintain consistency and readability in RESTful APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Request</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Request Bank Guaranteed Payment Remittance Task

  **Documentation**

  This BIAN API path allows you to update an existing bank guaranteed payment remittance task associated with a specific bank draft. It supports transactions involving bank drafts that require a bank guarantee for payment processing. By making a PUT request to this endpoint with the relevant IDs, you can modify the details of the bank guaranteed payment remittance task related to a particular bank draft.

  **Limitations**

  PUT: The name of the path should be:

'/bank-drafts/{bankDraftsId}/bank-guaranteed-payment-remittances/{bankGuaranteedPaymentRemittanceId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Request</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Request Bank Guaranteed Payment Specification Task

  **Documentation**

  This BIAN API path allows you to update an existing bank guaranteed payment specification related to a specific bank draft. The API supports transactions involving bank guaranteed payments, such as bank drafts. By making a PUT request to this endpoint with the appropriate parameters, you can update the details and specifications of the bank guaranteed payment related to a specific bank draft identified by the unique IDs provided in the path.

  **Limitations**

  PUT: The path should be named as follows, following REST best practices:

/BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecifications/{bankguaranteedpaymentspecificationid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Request</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Request Bearer Document Creation and Registration Task

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the creation and registration of bearer documents for bank drafts. It supports bank guaranteed payment transactions by facilitating the request for bearer document creation and registration task within the context of a specific bank draft and its associated ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something that accurately represents the resource being accessed and uses nouns to indicate resources. 

A suggestion for the path name could be: 

/bank-drafts/{bankDraftsId}/document-requests

This path name is clear, descriptive, and follows the convention of using lowercase letters and hyphens to separate words in the URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Request</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Request Customer Payment Task

  **Documentation**

  This API path allows you to update an existing request for a bank guaranteed payment transaction using bank drafts. Specifically, it deals with the task of requesting customer payment in the context of a bank draft transaction. By making a PUT request to this path with the appropriate IDs, you can update the details or status of the customer payment request related to a specific bank draft.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

/BankDrafts/{bankdraftsid}/CustomerPayments/{customerpaymentid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Retrieve</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Retrieve Bank Guaranteed Payment Remittance Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guaranteed payment remittance task related to a particular bank draft. It is used to access details regarding bank guaranteed payment transactions, specifically for bank drafts. This API could be useful for getting data related to payments that have been guaranteed by a bank using a bank draft.

  **Limitations**

  GET: A possible name for this path following REST best practices could be:

GET /bank-drafts/{bankDraftsId}/bank-guaranteed-payment-remittance/{bankGuaranteedPaymentRemittanceId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Retrieve</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Retrieve Bank Guaranteed Payment Specification Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guaranteed payment specification related to a bank draft. You can identify the bank draft using its ID and retrieve details of the bank guaranteed payment specification using its corresponding ID. This API is used to access specifications and details regarding bank guaranteed payment transactions, specifically in the context of bank drafts.

  **Limitations**

  GET: The path could be named:

'/bank-drafts/{bankDraftsId}/bank-guaranteed-payment-specifications/{bankGuaranteedPaymentSpecificationId}/retrieve'

Following REST best practices, the path should be in lowercase, use hyphens as separators, and should accurately reflect the hierarchy and relationships between the resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Retrieve</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Retrieve Bearer Document Creation and Registration Task

  **Documentation**

  This API path allows you to retrieve information related to a specific task within the process of creating and registering a bearer document for a bank draft transaction. The task is identified by the {bearerdocumentcreationandregistrationid} within the context of a specific bank draft identified by {bankdraftsid}. Through this API, you can access details and data related to this particular task in the bank draft transaction process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
GET /bankdrafts/{bankdraftsid}/bearer-documents/{bearerdocumentcreationandregistrationid}
``` 

Here are the key principles followed in the suggested path name:

1. Use lowercase letters: Path components should be in lowercase to ensure consistency and simplicity.
2. Use hyphens for word separation: Hyphens are preferred over underscores in path names.
3. Use plural nouns for collections: The `

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Retrieve</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Retrieve Customer Payment Task

  **Documentation**

  This API path allows you to retrieve information about a specific customer payment task related to a bank draft transaction. By providing the IDs of the bank draft and customer payment, you can access details about the payment within the system. This API is part of a service domain that focuses on ensuring bank guaranteed payment transactions, specifically bank drafts.

  **Limitations**

  GET: A suitable name for the path '/BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Retrieve' that follows REST best practices could be:

GET /bankDrafts/{bankdraftsid}/customerPayments/{customerpaymentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentRemittance/{bankguaranteedpaymentremittanceid}/Update</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Update Bank Guaranteed Payment Remittance Task

  **Documentation**

  This API path allows you to update a specific bank guaranteed payment remittance task associated with a bank draft. By using a PUT request, you can modify the details or status of the bank guaranteed payment remittance task referenced by its ID within the context of the bank draft specified by its ID. This supports managing bank guaranteed payment transactions, such as bank drafts, within the service domain.

  **Limitations**

  PUT: The name of the path should be:

PUT /bank-drafts/{bankdraftsid}/bank-guaranteed-payment-remittance/{bankguaranteedpaymentremittanceid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BankGuaranteedPaymentSpecification/{bankguaranteedpaymentspecificationid}/Update</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Update Bank Guaranteed Payment Specification Task

  **Documentation**

  This BIAN API path allows you to update the bank guaranteed payment specification for a specific bank draft. By providing the ID of the bank draft and the ID of the bank guaranteed payment specification, you can make changes to the details of the payment transaction to ensure it is guaranteed by the bank. This API path ensures that any updates made to the payment specification are accurately reflected in the system.

  **Limitations**

  PUT: The most appropriate name for this path, following REST best practices, would be:

'/bank-drafts/{bankDraftsId}/bank-guaranteed-payment-specifications/{bankGuaranteedPaymentSpecificationId}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/BearerDocumentCreationandRegistration/{bearerdocumentcreationandregistrationid}/Update</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Update Bearer Document Creation and Registration Task

  **Documentation**

  This API path allows you to update a specific task related to the creation and registration of a bearer document within a bank draft transaction. By using a PUT request on this path with the appropriate identifiers, you can modify details or properties of the bearer document creation and registration task associated with the specified bank draft. This API facilitates the management and adjustment of tasks involved in bank guaranteed payment transactions using bank drafts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PATCH /BankDrafts/{bankdraftsid}/BearerDocumentCreationAndRegistration/{bearerdocumentcreationandregistrationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}/Update</span></summary>

  **Description**

  This Service Domain support bank guaranteed payment transactions such as bank drafts Update Customer Payment Task

  **Documentation**

  This API path allows you to update a specific customer payment task associated with a bank draft. It is used for making changes to bank guaranteed payment transactions, such as bank drafts, by specifying the bank draft ID and the customer payment ID that needs to be updated. The PUT method is used to update the existing resource, which in this case is the customer payment task related to the specified bank draft.

  **Limitations**

  PUT: The name of the path should be:

PATCH /BankDrafts/{bankdraftsid}/CustomerPayment/{customerpaymentid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
