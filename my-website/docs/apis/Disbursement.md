<h1 style='color:red;'>Disbursement</h1>

**BIAN Documentation:** [Disbursement v12](https://app.swaggerhub.com/apis/BIAN-3/Disbursement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /Disbursement/Initiate</span></summary>

  **Description**

  This service domain handles the disbursement of funds to newly established loans/facilities as necessary InCR Initiate a disbursement

  **Documentation**

  This API path allows you to initiate the disbursement of funds for new loans or facilities. By making a POST request to this endpoint, you can trigger the process of transferring funds to the specified loan or facility as needed. This action is essential for providing financial support to customers who have applied for loans or other financial products.

  **Limitations**

  POST: Based on REST best practices, the path '/Disbursements' would be more appropriate as it would refer to the collection of disbursements instead of the specific action of initiating a single disbursement.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Disbursement/{disbursementid}/Update</span></summary>

  **Description**

  This service domain handles the disbursement of funds to newly established loans/facilities as necessary UpCR Update details of a disbursement

  **Documentation**

  This API path allows you to update the details of a disbursement identified by its unique identifier (disbursementid). It is used to modify information related to the disbursement of funds for newly established loans or facilities within a system or service. By using a PUT request method, you can make changes to specific data associated with a particular disbursement transaction.

  **Limitations**

  PUT: The path '/Disbursements/{disbursementid}' would likely be more aligned with REST best practices as it represents a specific resource (a single disbursement) and allows for operations such as updating to be performed on that resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Disbursement/{disbursementid}/Execute</span></summary>

  **Description**

  This service domain handles the disbursement of funds to newly established loans/facilities as necessary ExCR Execute an automated task against an active disbursement

  **Documentation**

  This BIAN API path allows you to trigger the execution of an automated task for a specific disbursement identified by its unique ID. By sending a PUT request to this endpoint with the ID of the disbursement, you can initiate the process of disbursing funds to loans or facilities that have been newly established. This action helps in efficiently managing the disbursement of funds as required in banking operations.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/disbursements/{disbursementid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Disbursement/{disbursementid}/Request</span></summary>

  **Description**

  This service domain handles the disbursement of funds to newly established loans/facilities as necessary RqCR Request manual intervention with a disbursement transaction

  **Documentation**

  This API path allows you to update an existing disbursement transaction by requesting manual intervention with the disbursement process. It is used in cases where there is a need for human interaction or approval in the disbursement of funds to newly established loans or facilities. By using this API, you can trigger a request for manual review or action to ensure that the disbursement transaction is handled correctly.

  **Limitations**

  PUT: The name of the path should be:

```
/Disbursements/{disbursementId}/Requests
```

Ensure that the resource name is in plural form (`Disbursements` and `Requests`) and the path parameters are specified within curly braces.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Disbursement/{disbursementid}/Retrieve</span></summary>

  **Description**

  This service domain handles the disbursement of funds to newly established loans/facilities as necessary ReCR Retrieve details about a disbursement transaction

  **Documentation**

  This BIAN API path, `/Disbursement/{disbursementid}/Retrieve`, allows you to retrieve details about a specific disbursement transaction identified by the `disbursementid`. It is a GET method, meaning that it is used to fetch information about a particular disbursement from the system. This API is part of a service domain that manages the distribution of funds to new loans or facilities as needed. By specifying the `disbursementid`, you can access specific information about a disbursement transaction within the system.

  **Limitations**

  GET: The name of the path should be:

GET /disbursements/{disbursementid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
