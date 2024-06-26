<h1 style='color:red;'>Collections</h1>

**BIAN Documentation:** [Collections v12](https://app.swaggerhub.com/apis/BIAN-3/Collections/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/Control</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts CoCR Control the processing of Collateral Asset Liquidation Procedure

  **Documentation**

  This BIAN API path, specifically the PUT method under /Collections/{collectionsid}/Control, is used to update an existing resource related to the liquidation of assets. It is primarily focused on managing the process of liquidating collateral assets to balance out losses for accounts facing financial difficulties. The API helps control the execution of the Collateral Asset Liquidation Procedure in order to address problems with accounts that are struggling to meet their financial obligations.

  **Limitations**

  PUT: A suitable name for the path '/Collections/{collectionsid}/Control' following REST best practices could be:

`/Collections/{collectionsid}/Settings`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/Exchange</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts EcCR Accept, verify, etc. aspects of Collateral Asset Liquidation Procedure processing

  **Documentation**

  This API path allows you to update an existing collection process by handling the liquidation of assets to compensate for losses related to problem accounts. It deals with verifying and accepting different aspects of the collateral asset liquidation procedure in order to address issues with problematic accounts.

  **Limitations**

  PUT: The name of the path '/Collections/{collectionsid}/Exchange' should be formulated using nouns to represent resources and sub-resources. It should be descriptive and follow RESTful conventions. A suitable name for this path could be '/collections/{collectionId}/exchange'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/Execute</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ExCR Execute an available automated action for Collateral Asset Liquidation Procedure

  **Documentation**

  This API path is used to trigger the liquidation of assets in order to recover losses from accounts facing financial difficulties. Specifically, it executes an automated action for the Collateral Asset Liquidation Procedure. By using this API, financial institutions can automate the process of liquidating collateral assets to offset losses associated with problematic accounts.

  **Limitations**

  PUT: The name of the path '/Collections/{collectionsid}/Execute' should ideally follow RESTful conventions and be as descriptive and self-explanatory as possible. Here are a couple of suggestions based on REST best practices:

1. `/Collections/{collectionsid}/Actions/Execute`
2. `/Collections/{collectionsid}/Run`

These suggestions reflect the purpose of the endpoint ("/Execute" or "Run") within the context of the "Collections" resource. Always strive to choose a path name that accurately con

</details>

<details open>
  <summary><span style='color:red;'>POST: /Collections/Initiate</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts InCR Instantiate a new Collateral Asset Liquidation Procedure

  **Documentation**

  This BIAN API path, **/Collections/Initiate**, allows you to create a new procedure for liquidating assets to recover losses from problematic accounts. It sets up a process for selling off assets as collateral to offset any financial losses incurred from these accounts. This API is used to initiate the beginning of the asset liquidation procedure for problem accounts.

  **Limitations**

  POST: Following REST best practices, the name of the path '/Collections/Initiate' could be simplified to '/collections'. REST recommends using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReCR Retrieve details about any aspect of Collateral Asset Liquidation Procedure

  **Documentation**

  This API path allows you to retrieve information about the collateral asset liquidation procedure associated with a specific collections ID. It is used to handle the process of selling assets to cover losses related to problematic accounts. By making a GET request to this endpoint with the collections ID specified, you can access details about the collateral asset liquidation process for that particular account.

  **Limitations**

  GET: The name of the path should ideally be '/collections/{collectionId}' following REST best practices. The resource identifier should be in singular form ('collection') and the path parameter ('collectionId') should be in camelCase format.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/Request</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts RqCR Request manual intervention or a decision with respect to Collateral Asset Liquidation Procedure

  **Documentation**

  This BIAN API path allows you to update an existing request related to the liquidation of assets for problem accounts in the Collections system. It enables manual intervention or decision-making regarding the procedure for liquidating collateral assets to offset losses.

  **Limitations**

  PUT: For the path '/Collections/{collectionsid}/Request' following REST best practices, a suitable name could be:

'/collections/{collectionId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpCR Update details relating to Collateral Asset Liquidation Procedure

  **Documentation**

  This API path is used to update details related to the Collateral Asset Liquidation Procedure for a specific collection ID. It is intended to manage the process of selling assets in order to recover losses from problematic accounts. By sending a PUT request to this endpoint with the necessary information, users can modify and update the necessary details for the asset liquidation process associated with the specified collection ID.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

```
PUT /Collections/{collectionId}
``` 

In RESTful architecture, we use the HTTP methods such as PUT for updating a specific resource identified by its unique identifier (in this case, {collectionId}). The use of the HTTP method (PUT) in the path conveys the action being performed (update) on the resource (collection).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollateralLiquidation/{collateralliquidationid}/Exchange</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts EcBQ Accept, verify, etc. aspects of Collateral Liquidation processing

  **Documentation**

  This API path allows you to update (PUT) an existing Collateral Liquidation within a specific collection. Collateral Liquidation involves the process of selling assets to recover losses for accounts that are facing problems. By accessing this API path, you can perform actions such as accepting, verifying, and managing the collateral liquidation process for problem accounts.

  **Limitations**

  PUT: The name of the path should be:

'/collections/{collectionId}/collateral-liquidations/{collateralLiquidationId}/exchange' 

According to REST best practices, path names should be in lowercase letters, and words should be separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollateralValuation/{collateralvaluationid}/Exchange</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts EcBQ Accept, verify, etc. aspects of Collateral Valuation processing

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the liquidation of assets to offset losses for problem accounts in the context of collateral valuation processing. It involves handling the liquidation process, such as accepting, verifying, and managing aspects of collateral valuation in order to address losses from problematic accounts.

  **Limitations**

  PUT: The name of the path should be:

'/collections/{collectionId}/collateralValuations/{collateralValuationId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/DebtFactoring/{debtfactoringid}/Exchange</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts EcBQ Accept, verify, etc. aspects of Debt Factoring processing

  **Documentation**

  This BIAN API path handles the process of liquidating assets to cover losses related to problem accounts for debt factoring. It allows you to update and manage the exchange of assets to offset financial losses. The API helps in accepting, verifying, and handling various aspects related to debt factoring processing for collections.

  **Limitations**

  PUT: The name of the path '/Collections/{collectionsid}/DebtFactoring/{debtfactoringid}/Exchange' following REST best practices could be named as:

'/collections/{collectionsid}/debt-factoring/{debtfactoringid}/exchange'

In this naming convention:
- Path components are in lowercase for better readability.
- The segments are separated by a forward slash.
- Parameter names are kept in curly braces indicating variable path parameters.
- The use of hyphens for separating multiple words instead

</details>

<details open>
  <summary><span style='color:red;'>POST: /Collections/{collectionsid}/CollateralLiquidation/Initiate</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts InBQ Instantiate a new Collateral Liquidation

  **Documentation**

  This API path is used to initiate the liquidation process of assets to cover the losses associated with problem accounts. By making a POST request to this endpoint, a new Collateral Liquidation process is created and initialized to facilitate the offsetting of losses by selling assets.

  **Limitations**

  POST: The name of the path should be:

```
POST /collections/{collectionId}/collateral-liquidation/initiate
```

This naming convention follows REST best practices by using lowercase letters, using hyphens to separate words, and keeping the path parameter `{collectionId}` in lowercase with descriptive names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Collections/{collectionsid}/CollateralValuation/Initiate</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts InBQ Instantiate a new Collateral Valuation

  **Documentation**

  This BIAN API path allows you to create a new Collateral Valuation specifically for handling the liquidation of assets to offset losses related to problem accounts. By initiating a new Collateral Valuation through this path, you can begin the process of evaluating the value of assets that can be liquidated as part of the resolution strategy for accounts facing difficulties.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be: `/collections/{collectionId}/collateralValuation/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /Collections/{collectionsid}/CollectionsAssessment/Initiate</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts InBQ Instantiate a new Collections Assessment

  **Documentation**

  This API path `/Collections/{collectionsid}/CollectionsAssessment/Initiate` is used to create a new Collections Assessment for a specific collections ID. The purpose of this Collections Assessment is to help in liquidating assets to recover losses from accounts that are causing problems. By initiating a new Collections Assessment, financial institutions can evaluate and take action on accounts that pose a risk to their finances.

  **Limitations**

  POST: The name of the path should be `/collections/{collectionId}/collections-assessment/initiate`, following REST best practices. Make sure to use lowercase letters, separate words with hyphens, and include specific resource identifiers like `collectionId` in singular form.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Collections/{collectionsid}/DebtFactoring/Initiate</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts InBQ Instantiate a new Debt Factoring

  **Documentation**

  This API path allows you to initiate the process of debt factoring for a specific collection. Debt factoring is a method used to offset losses from accounts that are causing problems. By liquidating assets, the value obtained can help to recover some of the losses. This API helps in setting up a new debt factoring process for a particular collection ID.

  **Limitations**

  POST: A suitable name for this path following REST best practices could be:
'/collections/{collectionId}/debt-factoring/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/CollateralLiquidation/{collateralliquidationid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReBQ Retrieve details about any aspect of Collateral Liquidation

  **Documentation**

  This API path retrieves information about collateral liquidation that is related to a specific collections ID and collateral liquidation ID. It is used to handle the process of selling assets to recover losses from accounts that are experiencing problems. The API allows you to retrieve specific details related to the collateral liquidation process for further analysis or action.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path could be:

GET /collections/{collectionId}/collateral-liquidations/{collateralLiquidationId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/CollateralValuation/{collateralvaluationid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReBQ Retrieve details about any aspect of Collateral Valuation

  **Documentation**

  This API path, /Collections/{collectionsid}/CollateralValuation/{collateralvaluationid}/Retrieve, is used to retrieve details about a specific aspect of Collateral Valuation within the Collections system. It is part of handling the liquidation of assets to offset losses for accounts that are experiencing problems. By accessing this endpoint with the appropriate IDs, users can retrieve information related to the valuation of collateral assets in order to assist in managing problematic accounts effectively.

  **Limitations**

  GET: Based on REST best practices, the path '/Collections/{collectionId}/CollateralValuations/{collateralValuationId}' could be a suitable name for the resource endpoint.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/CollectionsAccountUpdate/{collectionsaccountupdateid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReBQ Retrieve details about any aspect of Collections Account Update

  **Documentation**

  This API path allows you to retrieve details about a specific Collections Account Update within the Collections process. It is used to handle the liquidation of assets to help offset losses related to problem accounts. By making a GET request to this endpoint with the appropriate IDs, you can access specific information about the update made to a collections account, which is part of the overall process of managing and resolving problematic accounts.

  **Limitations**

  GET: The name of the path should ideally be:

'/collections/{collectionId}/collectionsAccountUpdate/{collectionsAccountUpdateId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/CollectionsAssessment/{collectionsassessmentid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReBQ Retrieve details about any aspect of Collections Assessment

  **Documentation**

  This API path allows you to retrieve details about a specific Collections Assessment within the Collections module by providing the unique IDs for both the collection and assessment. It is designed to provide information related to the liquidation of assets in order to minimize losses for accounts facing issues. So, in simpler terms, it enables access to specific data about the evaluation and handling of problematic accounts within the collections process.

  **Limitations**

  GET: The path should be named in a clear, descriptive, and concise manner to follow REST best practices. One suggestion for the path name could be:

GET /collections/{collectionId}/assessments/{assessmentId}

This path name makes use of lowercase letters and separates words with hyphens for better readability. It also uses singular nouns to represent resource names consistently.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Collections/{collectionsid}/DebtFactoring/{debtfactoringid}/Retrieve</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts ReBQ Retrieve details about any aspect of Debt Factoring

  **Documentation**

  This API path is used for retrieving details about Debt Factoring within the Collections module. It focuses on handling the process of selling assets to recover losses related to accounts that are experiencing problems. By using this API endpoint, you can gather specific information about Debt Factoring, such as related identifiers or data, to better understand and manage this aspect of the debt collection process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/collections/{collectionId}/debt-factoring/{debtFactoringId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollateralLiquidation/{collateralliquidationid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpBQ Update details relating to Collateral Liquidation

  **Documentation**

  This BIAN API path allows you to update details related to collateral liquidation for a specific collection and collateral liquidation ID. It enables you to modify information regarding the liquidation of assets to help mitigate losses for accounts facing problems. By using a PUT method, you can make changes and updates to existing resources associated with collateral liquidation within collections.

  **Limitations**

  PUT: The name of the path should be: `/collections/{collectionId}/collateral-liquidations/{collateralLiquidationId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollateralValuation/{collateralvaluationid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpBQ Update details relating to Collateral Valuation

  **Documentation**

  This API path allows you to update details related to the collateral valuation for a specific collection and collateral valuation ID. It is used as part of handling the liquidation of assets to offset losses for accounts facing problems. By making a PUT request to this path, you can provide new information or make changes to existing details regarding the collateral valuation process.

  **Limitations**

  PUT: A typical name for this path following REST best practices would be: 

PATCH /Collections/{collectionsid}/CollateralValuation/{collateralvaluationid} 

This naming convention indicates that a partial update operation (using the HTTP PATCH method) is performed on the resource located at the specified path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollectionsAccountUpdate/{collectionsaccountupdateid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpBQ Update details relating to Collections Account Update

  **Documentation**

  This BIAN API path allows you to update specific details related to a Collections Account Update. This update involves managing the liquidation of assets to help recover losses from problem accounts. It is used to adjust and modify information associated with the collections process for accounts facing difficulties.

  **Limitations**

  PUT: The name of the path should be '/collections/{collectionId}/collectionsAccountUpdates/{collectionsAccountUpdateId}' as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/CollectionsAssessment/{collectionsassessmentid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpBQ Update details relating to Collections Assessment

  **Documentation**

  This BIAN API path allows you to update details related to a Collections Assessment within a specific collection. It is used to make changes to the information regarding the liquidation of assets in order to offset losses for problem accounts. By using the PUT method, you can edit and modify existing resources to ensure accurate and up-to-date information for collection assessments.

  **Limitations**

  PUT: The recommended naming convention for the given path '/Collections/{collectionsid}/CollectionsAssessment/{collectionsassessmentid}/Update' following REST best practices would be:

PUT /collections/{collectionsid}/collectionsassessments/{collectionsassessmentid}

This name accurately reflects the action being taken (updating a collections assessment), the resource being acted upon (collections assessment), and the specific instance of that resource being updated (identified by collectionsassessmentid within the specified collection).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Collections/{collectionsid}/DebtFactoring/{debtfactoringid}/Update</span></summary>

  **Description**

  Handles the liquidation of assets to offset the losses for problem accounts UpBQ Update details relating to Debt Factoring

  **Documentation**

  This API path allows you to update details related to debt factoring within a collection process. Debt factoring involves using assets to offset losses for accounts that are causing problems. By making a PUT request to this path with the specific Collection ID and Debt Factoring ID, you can update information related to debt factoring, such as financial details or asset management, to help manage and resolve issues with the accounts more effectively.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

PUT /collections/{collectionId}/debt-factoring/{debtFactoringId}

This name reflects the HTTP method (PUT) to update a specific resource identified by the collection and debt factoring IDs. The path parameters are named in lowercase with hyphens for readability and /update is omitted as it is implied by the PUT method.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
