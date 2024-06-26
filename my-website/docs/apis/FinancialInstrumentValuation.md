<h1 style='color:red;'>FinancialInstrumentValuation</h1>

**BIAN Documentation:** [FinancialInstrumentValuation v12](https://app.swaggerhub.com/apis/BIAN-3/FinancialInstrumentValuation/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Control</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Control Market Asset Valuation Procedure

  **Documentation**

  This API path allows you to update an existing financial instrument valuation by controlling the market asset valuation procedure associated with it. In simpler terms, it provides a way to make changes or adjustments to the valuation of a financial asset by influencing the market valuation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/financial-instruments/{financialinstrumentvaluationid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Exchange</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Exchange Market Asset Valuation Procedure

  **Documentation**

  This API path allows you to update an existing financial instrument valuation related to exchange market assets by providing a specific financial instrument valuation ID. It is a part of a service domain that offers financial asset valuation services related to exchange markets. By using this API, you can update the valuation information for a particular financial instrument in the exchange market.

  **Limitations**

  PUT: The name of the path should be:

GET /financial-instrument-valuations/{financialinstrumentvaluationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Execute</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Execute Market Asset Valuation Procedure

  **Documentation**

  This BIAN API path allows you to update an existing financial instrument valuation by executing a market asset valuation procedure. Essentially, it provides a way to revalue a financial asset based on current market conditions or other factors that may affect its value.

  **Limitations**

  PUT: Following REST best practices, the path should be named in a way that is descriptive, intuitive, and uses nouns to represent resources. 

A suggestion for the name of the path could be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/execute

This name is more readable and follows the convention of using lowercase letters and hyphens to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentValuation/Initiate</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Initiate Market Asset Valuation Procedure

  **Documentation**

  This API path allows users to initiate a procedure for valuing financial assets in the market. By sending a POST request to this endpoint, users can create a new resource to start the process of valuing financial instruments such as stocks, bonds, or other investment assets. The API enables users to access various valuation services for financial instruments within the market.

  **Limitations**

  POST: The path should be named using a noun that represents the resource being acted upon. For the given path '/FinancialInstrumentValuation/Initiate', a more appropriate name following REST best practices could be '/financial-instruments', assuming 'FinancialInstrument' is the main resource being managed, and the 'Initiate' action could be represented through appropriate HTTP methods like POST or PUT with adequate endpoint representation.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Notify</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Notify Market Asset Valuation Procedure

  **Documentation**

  This BIAN API path allows you to retrieve information about notifying the market of the valuation procedure for a specific financial instrument. The service provides a range of financial asset valuation services, and this particular endpoint specifically deals with informing the market about the valuation process for a given financial instrument identified by its unique ID.

  **Limitations**

  GET: The name of the path should be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/notify

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and use plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Request</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Request Market Asset Valuation Procedure

  **Documentation**

  This API path allows you to update an existing financial instrument valuation request by providing the financialinstrumentvaluationid as part of the path. The service domain offers financial asset valuation services, specifically for requesting market asset valuation procedures. By using this API, you can update and manage valuation requests for various financial instruments.

  **Limitations**

  PUT: A suitable name for the path based on REST best practices could be:

/financial-instruments/{financialinstrumentvaluationid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Retrieve Market Asset Valuation Procedure

  **Documentation**

  This API path allows you to retrieve information about a specific financial instrument valuation identified by {financialinstrumentvaluationid}. It provides access to a range of financial asset valuation services for market asset valuation procedures. By using this API, you can obtain detailed information about the valuation of a particular financial instrument.

  **Limitations**

  GET: Following REST best practices, the name of the path should be something close to:
'/financial-instrument-valuations/{financialinstrumentvaluationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/Update</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Update Market Asset Valuation Procedure

  **Documentation**

  This API path allows users to update the valuation information of a specific financial instrument by providing the financialinstrumentvaluationid. It specifically focuses on updating market asset valuation procedures related to financial assets. This functionality enables users to keep track of and manage the valuation of financial instruments within a financial system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be `/financial-instrument-valuations/{financialinstrumentvaluationid}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Exchange</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Exchange Asset Valuation Approach Selection Workstep

  **Documentation**

  This BIAN API path allows you to update an existing Exchange Asset Valuation Approach Selection Workstep related to a specific financial instrument valuation identified by {financialinstrumentvaluationid} and its associated asset valuation approach selection identified by {assetvaluationapproachselectionid}. This API is a part of the Financial Instrument Valuation service domain, which offers various financial asset valuation services. By using this PUT method, you can modify and update the details and parameters of the Exchange Asset Valuation Approach Selection Workstep within the chosen financial instrument valuation.

  **Limitations**

  PUT: The name of the path should be:

'/financial-instrument-valuation/{financial_instrument_valuation_id}/asset-valuation-approach-selection/{asset_valuation_approach_selection_id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Exchange</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Exchange Asset Valuation Information Consolidation Workstep

  **Documentation**

  This BIAN API path allows you to update information related to the exchange of financial asset valuation data within the specified workstep. It involves updating details related to a particular financial instrument valuation and asset valuation information consolidation workstep identified by the provided IDs. This path is used to ensure that accurate and up-to-date valuation information is exchanged as part of the financial asset valuation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on the resource being manipulated. A suitable name for the path could be:

'/financial-instruments/{financialinstrumentId}/asset-valuations/{assetvaluationId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Exchange</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Exchange Asset Valuation Workstep

  **Documentation**

  This API path allows you to update an existing financial asset valuation within a specific exchange. It is part of a service domain that provides various financial asset valuation services. By providing the appropriate IDs for the financial instrument valuation and asset valuation, you can make changes to the data associated with the valuation of a particular asset within an exchange.

  **Limitations**

  PUT: The name of the path could be: 

/financial-instrument-valuation/{financial-instrument-valuation-id}/asset-valuation/{asset-valuation-id}/exchange

This path follows REST best practices by using lowercase letters, separating words with dashes, including resource identifiers in the path, and using consistent naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Execute</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Execute Asset Valuation Approach Selection Workstep

  **Documentation**

  This BIAN API path is used for updating and executing a specific workstep within the context of financial instrument valuation. More specifically, it allows you to select a particular approach for valuing a financial asset, such as a stock or bond, and then execute that valuation process. By sending a PUT request to this API path with the relevant IDs for the financial instrument valuation and the asset valuation approach selection, you can trigger the execution of the selected valuation approach.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be in all lowercase letters and should use hyphens to separate words for better readability. It should also be descriptive of the action being performed. 

A suitable path name for the given scenario could be:

/financial-instrument-valuation/{financialinstrumentvaluationid}/asset-valuation-approach-selection/{assetvaluationapproachselectionid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Execute</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Execute Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to update or execute a specific workstep related to consolidating asset valuation information for a financial instrument. This service is part of a range of services provided for valuing financial assets. By using this API, you can trigger the execution of the consolidation workstep for a particular asset valuation information associated with a specific financial instrument ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be as follows:

/financial-instrument-valuation/{financial-instrument-valuation-id}/asset-valuation-information-consolidation/{asset-valuation-information-consolidation-id}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Execute</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Execute Asset Valuation Workstep

  **Documentation**

  This API path (/FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Execute) allows users to update an existing financial asset valuation by executing a specific asset valuation workstep. This service domain provides various services related to valuing financial instruments, and this particular API call helps perform an update on the valuation process for a specific asset.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}/execute

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/Initiate</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Initiate Asset Valuation Approach Selection Workstep

  **Documentation**

  This API endpoint creates a new resource for initiating the selection of an asset valuation approach within the Financial Instrument Valuation service domain. It allows users to specify and initiate the process of selecting the approach to be used for valuing a financial asset. By making a POST request to this endpoint with the appropriate parameters, users can trigger the initiation of the asset valuation approach selection workstep for a specific financial instrument valuation ID.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuation-approach-selection/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/Initiate</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Initiate Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to initiate the process of consolidating asset valuation information for a specific financial instrument valuation identified by {financialinstrumentvaluationid}. By making a POST request to this endpoint, you create a new resource to trigger the workstep related to consolidating asset valuation information for the specified financial instrument.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be in plural form and should focus on the resource being manipulated. 

A suggested name for the path '/FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/Initiate' could be:

'/financialinstrumentvaluations/{financialinstrumentvaluationid}/assetvaluationinformationconsolidations/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/Initiate</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Initiate Asset Valuation Workstep

  **Documentation**

  This BIAN API path is used to initiate the process of valuating a financial instrument. You can create a new asset valuation workstep by making a POST request to this path with the specified financial instrument valuation ID. It is a part of a service domain that offers various financial asset valuation services.

  **Limitations**

  POST: Based on REST best practices, a possible name for the path '/FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/Initiate' could be:

'/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuations/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Notify</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Notify Asset Valuation Approach Selection Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific workstep related to selecting an approach for valuing financial assets within the context of financial instrument valuation. You can obtain details about the asset valuation approach selection workstep by providing the corresponding IDs for financial instrument valuation and asset valuation approach selection.

  **Limitations**

  GET: The name of the path should be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuation-approach-selections/{assetvaluationapproachselectionid}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Notify</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Notify Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific financial asset valuation workstep related to asset valuation information consolidation. By providing the financial instrument valuation ID and the asset valuation information consolidation ID, you can access details about the workstep that notifies about the consolidation of asset valuation information. This API is part of a service domain that offers various financial asset valuation services.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/financial-instrument-valuation/{financialinstrumentvaluationid}/asset-valuation-information-consolidation/{assetvaluationinformationconsolidationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Notify</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Notify Asset Valuation Workstep

  **Documentation**

  This API path, /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Notify, allows users to retrieve information about a specific asset valuation workstep for a financial instrument. By sending a GET request to this path with the corresponding financialinstrumentvaluationid and assetvaluationid, users can access data related to the valuation process of a financial asset.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/financial-instruments/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}/notify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Request</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Request Asset Valuation Approach Selection Workstep

  **Documentation**

  This API path allows you to update an existing request for selecting an approach for valuing a financial instrument within the Financial Instrument Valuation service domain. It involves specifying the financial instrument valuation ID and the asset valuation approach selection ID before making updates to the request.

  **Limitations**

  PUT: Based on REST best practices, a more suitable and cleaner name for the path could be:

```
/financial-instruments/{financialinstrumentId}/asset-valuation-approach-selections/{assetValuationApproachId}/request
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Request</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Request Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to update an existing request for asset valuation information consolidation workstep related to a specific financial instrument valuation and asset valuation information consolidation. Essentially, it is a way to request updates or changes to the information consolidation process for valuing financial assets.

  **Limitations**

  PUT: Based on REST best practices, the path should reflect the resource and action being performed. A suggestion for the path could be:

```
/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuation-information-consolidations/{assetvaluationinformationconsolidationid}/requests
``` 

This naming convention uses lowercase letters and separates words with dashes for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Request</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Request Asset Valuation Workstep

  **Documentation**

  This API path allows you to update an existing request for asset valuation within the Financial Instrument Valuation service domain. By sending a PUT request to this endpoint with the specific IDs for financialinstrumentvaluation and assetvaluation, you can update details or information related to the asset valuation workstep.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/financial-instruments/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Retrieve Asset Valuation Approach Selection Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific asset valuation approach selection workstep within the context of financial instrument valuation. By providing the financial instrument valuation ID and the asset valuation approach selection ID, you can access details related to how the valuation of a financial asset is being approached or determined. This API enables you to gather specific information about the process or method used to value a financial instrument.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be simplified as:

GET /financial-instruments/{financialinstrumentvaluationid}/asset-valuation-approaches/{assetvaluationapproachselectionid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Retrieve Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to retrieve information related to the consolidation of asset valuation information. Specifically, you provide the IDs of the financial instrument valuation and asset valuation information consolidation you are interested in, and in return, you receive details about how the asset valuation information was consolidated within the financial instrument valuation process. This API is part of a service domain that offers various financial asset valuation services.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuation-information-consolidations/{assetvaluationinformationconsolidationid}/retrieve
``` 

Key points to consider in the naming:

1. Use lowercase letters.
2. Use dashes to separate words.
3. Use plural nouns for collections (e.g., financial-instrument-valuations, asset-valuation-information-consolidations).
4. Use singular nouns

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Retrieve Asset Valuation Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific asset valuation workstep associated with a financial instrument valuation. It provides access to details related to the valuation of financial assets, such as stocks, bonds, or other investments. By making a GET request to this API path with the appropriate IDs, you can retrieve data about how a particular asset was valued within the context of a financial instrument valuation process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}'

And for the endpoint to retrieve the asset valuation:

GET '/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationApproachSelection/{assetvaluationapproachselectionid}/Update</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Update Asset Valuation Approach Selection Workstep

  **Documentation**

  This API path is used to update an existing asset valuation approach selection workstep within a financial instrument valuation service domain. It allows you to modify specific details related to how financial assets are being valued using a chosen approach. By making a PUT request to this endpoint with the appropriate IDs, you can update and customize the asset valuation approach selection workstep as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/financialInstruments/{financialInstrumentId}/assetValuationApproachSelections/{assetValuationApproachSelectionId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuationInformationConsolidation/{assetvaluationinformationconsolidationid}/Update</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Update Asset Valuation Information Consolidation Workstep

  **Documentation**

  This API path allows you to update asset valuation information consolidation workstep associated with a specific financial instrument valuation and asset valuation information consolidation IDs. In simpler terms, it enables you to update certain details or data related to the valuation of a financial asset.

  **Limitations**

  PUT: A suitable name for the given path could be:

PATCH /financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuation-information-consolidations/{assetvaluationinformationconsolidationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentValuation/{financialinstrumentvaluationid}/AssetValuation/{assetvaluationid}/Update</span></summary>

  **Description**

  This Service Domain provides a range of financial asset valuation services   Update Asset Valuation Workstep

  **Documentation**

  This BIAN API path allows you to update an existing financial asset valuation workstep associated with a specific financial instrument valuation and asset valuation. It is used for making changes or updates to the valuation details of a particular asset within the financial instrument valuation service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/financial-instrument-valuations/{financialinstrumentvaluationid}/asset-valuations/{assetvaluationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
