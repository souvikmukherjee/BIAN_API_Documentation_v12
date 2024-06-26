<h1 style='color:red;'>DirectDebitMandate</h1>

**BIAN Documentation:** [DirectDebitMandate v12](https://app.swaggerhub.com/apis/BIAN-3/DirectDebitMandate/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /DirectDebitMandate/Register</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client InCR Register a new direct debit

  **Documentation**

  This API path allows a corporate client to register a new direct debit mandate for a customer. Direct debit mandates are agreements that allow the corporate client to automatically withdraw funds from a customer's account for payments or transactions. By using this API, the corporate client can create a new direct debit mandate for a specific customer.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/DirectDebitMandate/Register' should be revised to use a noun that represents a resource rather than an action. A more appropriate name for the path could be '/DirectDebitMandates' to represent the collection of Direct Debit mandates or '/DirectDebitMandate' to represent a single Direct Debit mandate.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/Update</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client UpCR Update details of an existing collection of DD mandates maintained for a corporate customer

  **Documentation**

  This API path allows you to update the details of an existing direct debit mandate for a corporate customer. It is used to modify information related to direct debit processing, such as changing payment instructions or updating customer details associated with a specific direct debit mandate.

  **Limitations**

  PUT: Based on REST best practices, the path '/DirectDebitMandates/{directdebitmandateid}' can be used to update a specific direct debit mandate resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/Control</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client CoCR Control a direct debit mandate collection (e.g. suspend)

  **Documentation**

  This BIAN API path allows you to update a specific direct debit mandate by providing the direct debit mandate ID. You can use this endpoint to manage customer mandates related to direct debit processing for a corporate client. For example, you can use it to suspend a direct debit mandate.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/direct-debit-mandates/{directdebitmandateid}/controls

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebitMandate/{directdebitmandateid}/Retrieve</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client ReCR Retrieve details about a collection of DD mandates

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific direct debit mandate using its unique identifier (directdebitmandateid). It is used in the context of managing customer mandates related to direct debit processing for a corporate client. By making a GET request to this endpoint, you can access details about a collection of direct debit mandates associated with a particular client. This API helps in accessing and managing information related to direct debit mandates efficiently.

  **Limitations**

  GET: The appropriate RESTful naming convention for this path would be:

GET /direct-debit-mandates/{directdebitmandateid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/Register</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client ReBQ Register a customer's DD mandate for a corporate customer

  **Documentation**

  This API path allows a corporate client to register a new customer's direct debit mandate. By sending a POST request to this path with the necessary information, the system will create a new resource that includes the mandate details for the direct debit processing associated with the corporate customer.

  **Limitations**

  POST: The RESTful path for registering a direct debit mandate could be named as: 

'/direct-debit-mandates/{directdebitmandateid}/register-mandate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Update</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client UpBQ Update details of the customer's DD mandate

  **Documentation**

  This API path allows you to update the details of a customer's Direct Debit mandate. Direct Debit mandates are the authorizations that customers provide to allow a company to automatically collect payment from their bank account. By using this API, you can modify the information related to a specific Direct Debit mandate for a corporate client.

  **Limitations**

  PUT: The name of the path '/DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Update' following REST best practices should be:

PUT /directdebitmandates/{directdebitmandateid}/mandateregistrations/{mandateregistrationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Exchange</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client EcBQ Accept, verify etc. a customer's DD mandate

  **Documentation**

  This API path allows you to update an existing customer mandate associated with direct debit processing for a corporate client. You can accept, verify, or make changes to a customer's direct debit mandate by providing the relevant Direct Debit Mandate ID and Mandate Registration ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/direct-debit-mandates/{directdebitmandateid}/mandate-registrations/{mandateregistrationid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Execute</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client ExBQ Execute an automated action against the DD Mandate (e.g. test proposed payment)

  **Documentation**

  This API path is used to update an existing direct debit mandate registration for a corporate client. Specifically, it allows for the execution of an automated action against a specific direct debit mandate, such as testing a proposed payment. By making a PUT request to this path with the appropriate IDs, users can trigger automated actions related to the management of direct debit mandates.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/DirectDebitMandates/{directdebitmandateid}/MandateRegistrations/{mandateregistrationid}/Executions
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Request</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client ExBQ Request intervention with a customer's DD Mandate (e.g. retrieve paperwork)

  **Documentation**

  This API path allows you to update an existing customer's direct debit mandate registration with a corporate client. You can use this service to request intervention, such as retrieving additional paperwork related to the customer's direct debit mandate.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented manner and use nouns to represent resources. Here are a few suggestions for the path naming:

1. /direct-debit-mandates/{directdebitmandateid}/mandate-registrations/{mandateregistrationid}/requests
2. /directdebitmandates/{directdebitmandateid}/mandateregistrations/{mandateregistrationid}/requests
3. /direct-debits

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebitMandate/{directdebitmandateid}/MandateRegistration/{mandateregistrationid}/Retrieve</span></summary>

  **Description**

  This service domains manages the customer mandates associated with direct debit processing for a corporate client ReBQ Retrieve details about a customer's DD mandate

  **Documentation**

  This API path allows you to retrieve details about a specific customer's Direct Debit (DD) mandate registration. It is used for managing customer mandates associated with direct debit processing for a corporate client. By providing the Direct Debit Mandate ID and Mandate Registration ID as parameters in the API call, you can retrieve specific information related to the customer's DD mandate registration, such as the customer's payment authorization details.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

GET /direct-debit-mandates/{directdebitmandateid}/mandate-registrations/{mandateregistrationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
