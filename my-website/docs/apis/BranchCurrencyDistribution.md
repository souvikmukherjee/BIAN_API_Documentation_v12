<h1 style='color:red;'>BranchCurrencyDistribution</h1>

**BIAN Documentation:** [BranchCurrencyDistribution v12](https://app.swaggerhub.com/apis/BIAN-3/BranchCurrencyDistribution/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Control</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. CoCR Control the processing of Cash Distribution Procedure

  **Documentation**

  This API path allows you to update and control the scheduling and coordination of cash distribution within a branch's currency inventory system. It helps ensure the secure transfer of cash to different branches and ATMs. The API allows you to manage and track the process of distributing cash following specific procedures for maintaining the Cash Distribution Procedure Control.

  **Limitations**

  PUT: The name of the path should be:

/branch-currency-distributions/{branchcurrencydistributionid}/control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Exchange</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. EcCR Accept, verify, etc. aspects of Cash Distribution Procedure processing

  **Documentation**

  This BIAN API path allows you to update (PUT) information related to the secure distribution of cash inventory within a branch or ATM network. This includes coordinating the movement of cash, verifying transactions, and managing aspects of the cash distribution process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/branches/{branchId}/currencyDistribution/{currencyDistributionId}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Execute</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ExCR Execute an available automated action for Cash Distribution Procedure

  **Documentation**

  This BIAN API path allows you to update and execute a specific action for the secure distribution of cash inventory across branches and ATMs within a bank's network. It lets you schedule and coordinate the distribution of cash in a systematic and efficient manner.

  **Limitations**

  PUT: The naming convention typically followed in RESTful services suggests using nouns to represent resources and HTTP methods to represent actions. Given the path '/BranchCurrencyDistribution/{branchcurrencydistributionid}/Execute', a more RESTful naming for the resource could be:

'/BranchCurrencyDistributions/{branchcurrencydistributionid}/Execution'

This naming convention keeps the resource name plural ('BranchCurrencyDistributions' to represent a collection of resources) and uses the HTTP verb ('Execution') to denote the action being performed on the resource identified

</details>

<details open>
  <summary><span style='color:red;'>POST: /BranchCurrencyDistribution/Initiate</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. InCR Instantiate a new Cash Distribution Procedure

  **Documentation**

  This API path allows users to create a new cash distribution procedure for scheduling and coordinating the secure distribution of cash inventory across branch and ATM networks. It helps in initiating the process of managing the distribution of cash resources within a financial institution to ensure that branches and ATMs have adequate funds available.

  **Limitations**

  POST: Following REST best practices, the name of the path should use nouns rather than verbs and should represent a resource or collection of resources. It should also be in lowercase letters and use hyphens to separate words. 

Based on the provided path '/BranchCurrencyDistribution/Initiate', a more RESTful path name could be '/branch-currency-distributions' to represent the collection of branch currency distributions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Retrieve</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ReCR Retrieve details about any aspect of Cash Distribution Procedure

  **Documentation**

  This API path allows you to retrieve details about the secure distribution of cash inventory across branch and ATM networks as part of the branch currency distribution process. You can use this path to access information about specific aspects of the cash distribution procedure by providing the unique identifier for a particular branch currency distribution.

  **Limitations**

  GET: The name of the path '/BranchCurrencyDistribution/{branchcurrencydistributionid}/Retrieve' should be standardized using REST best practices by using the HTTP method GET and a more resource-oriented approach. A more suitable name following REST conventions might be:

GET /branch-currency-distributions/{branchcurrencydistributionid}

By adhering to REST principles, the path is made more intuitive and clearly represents the action of retrieving a specific branch currency distribution resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Request</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. RqCR Request manual intervention or a decision with respect to Cash Distribution Procedure

  **Documentation**

  This BIAN API path allows you to update an existing branch currency distribution request. It is used to schedule and coordinate the secure distribution of cash inventory across branch and ATM networks. Additionally, it enables users to request manual intervention or a decision related to cash distribution procedures.

  **Limitations**

  PUT: The name of the path should be:

'/branch-currency-distribution/{branchCurrencyDistributionId}/request'

In this naming convention:
- Paths use lowercase letters and hyphens for readability.
- The resource identifiers are in lowercase and separated by hyphens.
- The identifiers are in the singular form.
- Short but descriptive names are used.
- The path segments are clear and concise.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/Update</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. UpCR Update details relating to Cash Distribution Procedure

  **Documentation**

  This BIAN API path allows you to update details related to the cash distribution procedure for a specific branch or ATM network. It involves scheduling and coordinating the secure distribution of cash inventory to ensure efficient operations. By using a PUT request, you can make changes to existing resources within the branch currency distribution system.

  **Limitations**

  PUT: A better name for the path '/BranchCurrencyDistribution/{branchcurrencydistributionid}/Update' while following REST best practices could be:

PUT /BranchCurrencyDistribution/{branchcurrencydistributionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionPlanning/{distributionplanningid}/Exchange</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. EcBQ Accept, verify, etc. aspects of Distribution Planning processing

  **Documentation**

  This API path allows you to update and manage the process of scheduling and coordinating the distribution of cash inventory across branch and ATM networks. It involves tasks such as accepting, verifying, and processing aspects of distribution planning for cash distribution within a specific branch. By using this API, you can modify and track the secure distribution of cash within your banking network.

  **Limitations**

  PUT: The recommended naming for the path would be:

/BranchCurrencyDistributions/{branchcurrencydistributionid}/DistributionPlannings/{distributionplanningid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryProvisioning/{inventoryprovisioningid}/Exchange</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. EcBQ Accept, verify, etc. aspects of Inventory Provisioning processing

  **Documentation**

  This BIAN API path allows you to update an existing inventory provisioning exchange for a specific branch currency distribution. It is used to schedule and coordinate the secure distribution of cash inventory within a branch and ATM network. This involves accepting, verifying, and managing the processing aspects of inventory provisioning to ensure that the right amount of cash is available at the right locations.

  **Limitations**

  PUT: The name of the path should be:

/BranchCurrencyDistributions/{branchcurrencydistributionid}/InventoryProvisionings/{inventoryprovisioningid}/Exchange

</details>

<details open>
  <summary><span style='color:red;'>GET: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionPlanning/{distributionplanningid}/Retrieve</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ReBQ Retrieve details about any aspect of Distribution Planning

  **Documentation**

  This API path allows you to retrieve details about a specific distribution planning related to the secure distribution of cash inventory across branch and ATM networks. You can retrieve information about a particular distribution planning event by providing the branch currency distribution ID and the distribution planning ID. This API helps schedule and coordinate the movement of cash inventory to ensure that branches and ATMs are properly stocked with cash.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows: 

'/branches/{branchId}/currency-distributions/{distributionId}/distribution-plannings/{planningId}'.

This path follows the convention of using lowercase letters and dashes to separate words, using plural nouns for collections, and including resource identifiers instead of action verbs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionVehicleAdministration/{distributionvehicleadministrationid}/Retrieve</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ReBQ Retrieve details about any aspect of Distribution Vehicle Administration

  **Documentation**

  The API path "/BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionVehicleAdministration/{distributionvehicleadministrationid}/Retrieve" allows you to retrieve details about the distribution vehicle administration associated with a specific branch currency distribution. This API helps in managing and monitoring the secure distribution of cash inventory across branch and ATM networks by providing information related to the administration of distribution vehicles used in this process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/branches/{branchId}/currency-distributions/{distributionId}/vehicles/{vehicleId}

This path follows a resource-centric naming convention, uses lowercase letters, separates words with hyphens, and represents the relationship between the resources clearly.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryDistributionOversight/{inventorydistributionoversightid}/Retrieve</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ReBQ Retrieve details about any aspect of Inventory Distribution Oversight

  **Documentation**

  This BIAN API path allows you to retrieve details about the inventory distribution oversight for a specific branch currency distribution. It is used to schedule and coordinate the secure distribution of cash inventory across branch and ATM networks. You can use this API to access information about any aspect related to managing the distribution of cash inventory to ensure efficient and secure handling within the branch and ATM network.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/branch-currency-distribution/{branchcurrencydistributionid}/inventory-distribution-oversight/{inventorydistributionoversightid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryProvisioning/{inventoryprovisioningid}/Retrieve</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. ReBQ Retrieve details about any aspect of Inventory Provisioning

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific inventory provisioning associated with a branch currency distribution. It helps in managing and tracking the secure distribution of cash inventory across branch and ATM networks. By using this API, you can access information related to the scheduling and coordination of cash inventory movements within the banking system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/branch-currency-distribution/{branchcurrencydistributionid}/inventory-provisioning/{inventoryprovisioningid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionPlanning/{distributionplanningid}/Request</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. RqBQ Request manual intervention or a decision with respect to Distribution Planning

  **Documentation**

  This BIAN API path is used to update a specific distribution planning request associated with the secure distribution of cash inventory across the branch and ATM networks. It allows users to request manual intervention or decision-making regarding the distribution planning process. By making a PUT request to this endpoint, users can modify or update information related to a particular distribution planning request.

  **Limitations**

  PUT: The name of the path should be '/branch-currency-distribution/{branchcurrencydistributionid}/distribution-planning/{distributionplanningid}/request'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionVehicleAdministration/{distributionvehicleadministrationid}/Request</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. RqBQ Request manual intervention or a decision with respect to Distribution Vehicle Administration

  **Documentation**

  This API path allows you to update an existing request related to the distribution of cash inventory across branches and ATMs. Specifically, it relates to coordinating the secure transportation of cash using distribution vehicles. If manual intervention or a decision is required regarding the administration of distribution vehicles, this API can be used to make those requests.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/BranchCurrencyDistributions/{branchcurrencydistributionid}/DistributionVehicleAdministrations/{distributionvehicleadministrationid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryDistributionOversight/{inventorydistributionoversightid}/Request</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. RqBQ Request manual intervention or a decision with respect to Inventory Distribution Oversight

  **Documentation**

  This API path allows you to update an existing request for manual intervention or a decision regarding the inventory distribution oversight for a specific branch currency distribution. It helps schedule and coordinate the secure distribution of cash inventory across branches and ATMs, and allows for any necessary manual intervention or decision-making in the distribution process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/BranchCurrencyDistributions/{branchcurrencydistributionid}/InventoryDistributionOversights/{inventorydistributionoversightid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryProvisioning/{inventoryprovisioningid}/Request</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. RqBQ Request manual intervention or a decision with respect to Inventory Provisioning

  **Documentation**

  This BIAN API path is used to update a specific request related to the secure distribution of cash inventory within a bank's branch and ATM network. It allows for manual intervention or decision-making regarding the provisioning of inventory needed for this distribution process. By sending a PUT request to this path with the relevant IDs, users can update and manage the status or details of the inventory provisioning request for currency distribution.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/branches/{branchId}/currency-distributions/{currencyDistributionId}/inventory-provisionings/{inventoryProvisioningId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionPlanning/{distributionplanningid}/Update</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. UpBQ Update details relating to Distribution Planning

  **Documentation**

  This API path allows you to update details related to the distribution planning of cash inventory across branches and ATMs. You can use this endpoint to schedule and coordinate the secure distribution of cash resources within the branch and ATM networks. By sending a PUT request to this path with specific IDs, you can modify information about how the cash inventory is managed and distributed among different locations.

  **Limitations**

  PUT: The RESTful URL naming convention follows certain best practices and standards. For the given path, a more appropriate name could be:

```
PATCH /branch-currency-distribution/{branchcurrencydistributionid}/distribution-planning/{distributionplanningid}
```

Here's a breakdown of the updated path:

- Using all lowercase letters and hyphens for better readability and consistency.
- Utilizing the PATCH method for updating/replacing a resource.
- Utilizing plural nouns for resources where applicable.
- Keeping

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/DistributionVehicleAdministration/{distributionvehicleadministrationid}/Update</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. UpBQ Update details relating to Distribution Vehicle Administration

  **Documentation**

  This API path allows you to update details regarding the distribution vehicle administration for a specific branch currency distribution. It helps in managing and coordinating the secure transportation of cash inventory to various branches and ATMs within the network. By making a PUT request to this path with the necessary details, you can ensure that the distribution vehicles are properly scheduled and coordinated for the efficient movement of cash inventory.

  **Limitations**

  PUT: Based on REST best practices, you could name the path as:

```
PUT /branch-currency-distributions/{branchCurrencyDistributionId}/distribution-vehicle-administrations/{distributionVehicleAdministrationId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryDistributionOversight/{inventorydistributionoversightid}/Update</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. UpBQ Update details relating to Inventory Distribution Oversight

  **Documentation**

  This BIAN API path allows you to update details related to the oversight of inventory distribution within a branch's currency distribution system. It is used to schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. By making a PUT request to this path with specific identifiers for the branch currency distribution and inventory distribution oversight, you can update and manage the information and processes related to how cash inventory is distributed within the branch and to ATMs.

  **Limitations**

  PUT: Using REST best practices, the name of the path should be:

PATCH '/branch-currency-distributions/{branchcurrencydistributionid}/inventory-distribution-oversights/{inventorydistributionoversightid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BranchCurrencyDistribution/{branchcurrencydistributionid}/InventoryProvisioning/{inventoryprovisioningid}/Update</span></summary>

  **Description**

  Schedule and coordinate the secure distribution of cash inventory across the branch and ATM networks. UpBQ Update details relating to Inventory Provisioning

  **Documentation**

  This API path allows you to update the details related to inventory provisioning for a specific branch currency distribution process. This includes scheduling and coordinating the secure distribution of cash inventory across the branch and ATM networks. By using a PUT request, you can modify existing information about how cash inventory is provisioned and distributed within the branch and ATM network system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/branches/{branchId}/currency/{currencyId}/inventory-provisioning/{inventoryId}/update

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
