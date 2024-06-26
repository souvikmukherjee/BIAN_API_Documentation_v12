<h1 style='color:red;'>CollateralAllocationManagement</h1>

**BIAN Documentation:** [CollateralAllocationManagement v12](https://app.swaggerhub.com/apis/BIAN-3/CollateralAllocationManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CollateralAllocationManagement/Provide</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. PrCR Record an asset provided for collateralization

  **Documentation**

  This API path is for creating a new resource to manage the allocation of party-owned assets to bank-issued lending and other asset products within the Collateral Allocation Management service domain. Specifically, it allows for recording an asset that is being provided as collateral.

  **Limitations**

  POST: In accordance with REST best practices, the name of the path should be:

```
/CollateralAllocationManagement/provide
```

The path should be in lowercase and use hyphens to separate words for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CollateralAllocationManagement/{collateralallocationmanagementid}/Update</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. UpCR Update details and status of a collateral asset and its allocation

  **Documentation**

  This BIAN API path allows users to update the details and status of a collateral asset and its allocation within the Collateral Allocation Management service domain. This means that users can modify information about assets owned by parties and how they are allocated to lending and other asset products issued by banks. By using the PUT method, users can make changes to an existing resource related to collateral asset management.

  **Limitations**

  PUT: According to REST best practices, the name of the path should be:

```
PUT /CollateralAllocationManagement/{collateralallocationmanagementid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CollateralAllocationManagement/{collateralallocationmanagementid}/Retrieve</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. ReCR Retrieve details and status of a collateral asset and its allocation

  **Documentation**

  This API path allows you to retrieve details and status information about a collateral asset and how it has been allocated to bank issued lending and other asset products. It helps you access specific information related to a collateral allocation management identification number, providing insights into the ownership and utilization of assets within the banking context.

  **Limitations**

  GET: The name of the path should be: 

'/collateral-allocations/{collateralAllocationId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CollateralAllocationManagement/{collateralallocationmanagementid}/Allocation/Provide</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. PrBQ Allocate a collateral asset to a lending product

  **Documentation**

  This API path allows a user to allocate a collateral asset to a specific lending product within a banking system. The system manages the allocation of assets owned by parties (such as customers) to various lending and asset products issued by the bank. By making a POST request to this path with the necessary information, a user can create a new resource that specifies the allocation of a collateral asset to a lending product.

  **Limitations**

  POST: The name of the path should typically represent a resource, so if I understand correctly, '/CollateralAllocationManagement/{collateralallocationmanagementid}/Allocation/Provide' is likely representing the act of providing an allocation related to collateral allocation management. 

A more RESTful approach would be to focus on the resource being addressed, for instance, if you are dealing with an allocation related to collateral allocation management, you could name the path '/collateral-allocations/{allocationId}/provide'. In this way

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CollateralAllocationManagement/{collateralallocationmanagementid}/Allocation/{allocationid}/Update</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. UpBQ Update details about an allocation request and in force

  **Documentation**

  This API path allows you to update details related to a specific allocation request within the Collateral Allocation Management system. By making a PUT request to this path with the relevant collateral allocation management ID and allocation ID, you can modify information regarding how party owned assets are allocated to different bank issued lending and asset products. This enables you to manage and adjust the allocation process effectively within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path would be:

PATCH /collateral-allocations/{collateralallocationmanagementid}/allocations/{allocationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CollateralAllocationManagement/{collateralallocationmanagementid}/Allocation/{allocationid}/Capture</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. CaBQ Record usage details for a collateral allocation

  **Documentation**

  This API path allows you to update the usage details for a collateral allocation within the Collateral Allocation Management service domain. You can specify the collateral allocation ID and the allocation ID to provide information about how party-owned assets are allocated to bank-issued lending and other asset products. This API is used to manage and track the allocation process for collateral assets.

  **Limitations**

  PUT: A suitable name for the path could be:

```
POST /collateral-allocations/{collateralallocationmanagementid}/allocations/{allocationid}/capture
```

This path follows typical REST conventions, using lowercase letters and dashes to separate words in the URI. It specifies the operation to capture an allocation related to a collateral allocation management.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CollateralAllocationManagement/{collateralallocationmanagementid}/Allocation/{allocationid}/Retrieve</span></summary>

  **Description**

  The Service Domain manages the allocation of party owned assets to bank issued lending and other asset products. ReBQ Retrieve details about a collateral allocation

  **Documentation**

  This API path allows you to retrieve specific details about a collateral allocation within the Collateral Allocation Management service domain. You can access information related to how party owned assets are allocated to bank-issued lending and other asset products. The path is structured to retrieve details about a collateral allocation by providing the collateral allocation ID and allocation ID as parameters in the request.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

GET /collateral-allocations/{collateralallocationmanagementid}/allocations/{allocationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
