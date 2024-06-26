<h1 style='color:red;'>AssetAndLiabilityManagement</h1>

**BIAN Documentation:** [AssetAndLiabilityManagement v12](https://app.swaggerhub.com/apis/BIAN-3/AssetAndLiabilityManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/Update</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position UpCR Update aspects of the bank's asset and liability policies

  **Documentation**

  This API path (/AssetAndLiabilityManagement/{assetandliabilitymanagementid}/Update) allows you to update aspects related to the asset and liability policies of a bank. Specifically, it is used to modify the details regarding the bank's asset and liability management based on the given assetandliabilitymanagementid. By making a PUT request to this endpoint, you can update existing resources related to asset and liability management within a bank.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/asset-and-liability-management/{assetandliabilitymanagementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/Request</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position RqCR Request manual intervention in the policies

  **Documentation**

  This API path allows you to update an existing request for manual intervention in the asset and liability policies managed by the unit responsible for overseeing the bank's asset and liability management. By sending a PUT request to this path with the specific asset and liability management ID, you can request manual intervention in the policies and positions related to the bank's assets and liabilities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/asset-and-liability-management/{assetandliabilitymanagementid}/request

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/Retrieve</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position ReCR Retrieve details about the bank's asset and liability policies

  **Documentation**

  This BIAN API path allows you to retrieve details about a bank's asset and liability policies managed by the Asset and Liability Management unit. By making a GET request to this endpoint with the specified asset and liability management ID, you can access information regarding the bank's asset and liability positions as well as its related policies. This API provides transparency into how the bank manages its assets and liabilities through the Asset and Liability Management unit.

  **Limitations**

  GET: The appropriate name for the path '/AssetAndLiabilityManagement/{assetandliabilitymanagementid}/Retrieve' following REST best practices would be:

'/asset-and-liability-management/{assetandliabilitymanagementid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/TransactionAlignment/Create</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position CrBQ Create a proposed transaction submission under the policy

  **Documentation**

  This API path allows you to create a new proposed transaction under a bank's asset and liability management policy. It is used by the unit responsible for overseeing the bank's policies and positions related to assets and liabilities. By submitting a proposed transaction through this API, you can align the transaction with the bank's asset and liability guidelines and processes.

  **Limitations**

  POST: The name of the path should be something like '/asset-liability-management/{assetandliabilitymanagementid}/transactions/create' to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/TransactionAlignment/{transactionalignmentid}/Request</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position RqBQ Request manual intervention during an assessment

  **Documentation**

  This API path is used to request manual intervention during an assessment conducted by the unit responsible for overseeing a bank's asset and liability management policies and positions. By making a PUT request to this endpoint with the appropriate asset and liability management ID and transaction alignment ID, users can update an existing resource to indicate the need for manual intervention. This action enables the unit to trigger a manual review or intervention as required during the assessment process.

  **Limitations**

  PUT: The name of the path should be "/asset-liability-management/{assetandliabilitymanagementid}/transaction-alignment/{transactionalignmentid}/request" following REST best practices. It is recommended to use lowercase letters and hyphens to separate words in the URL path instead of camel case.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetAndLiabilityManagement/{assetandliabilitymanagementid}/TransactionAlignment/{transactionalignmentid}/Retrieve</span></summary>

  **Description**

  The unit overseeing the  banks asset & liability policies and position ReBQ Retrieve details about a transaction alignment assessment

  **Documentation**

  This BIAN API path allows you to retrieve details about a transaction alignment assessment within the Asset And Liability Management unit of a bank. It is used to obtain information related to how well a transaction aligns with the asset and liability policies and position of the bank. By making a GET request to this path with specific identifiers, you can access the assessment details to understand the impact of a transaction on the bank's overall asset and liability management.

  **Limitations**

  GET: The name of the path should follow RESTful naming conventions and be meaningful. A potential name for the path could be:

```
GET /asset-and-liability-management/{assetandliabilitymanagementid}/transaction-alignment/{transactionalignmentid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
