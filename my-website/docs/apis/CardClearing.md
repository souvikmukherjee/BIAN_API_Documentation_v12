<h1 style='color:red;'>CardClearing</h1>

**BIAN Documentation:** [CardClearing v12](https://app.swaggerhub.com/apis/BIAN-3/CardClearing/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardClearing/Initiate</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks InCR Initiate a card clearing process

  **Documentation**

  This BIAN API path `/CardClearing/Initiate` allows users to create a new resource to initiate the card clearing process. It captures and consolidates financial transactions originating from different sources like POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. Additionally, it manages the transferring of transactions from Acquirers to Issuers through the Card Networks during the clearing process.

  **Limitations**

  POST: If the path '/CardClearing/Initiate' followed all REST best practices, it would likely be named based on the resource being acted upon. A more RESTful name for this path could be '/card-clearing' or '/card-clearings'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardClearing/{cardclearingid}/Update</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks UpCR Update details of a card clearing processing batch

  **Documentation**

  This API path allows you to update the details of a card clearing processing batch identified by a specific card clearing ID. The card clearing service manages financial transactions made through various sources like POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It ensures that transactions are cleared and transferred between the Acquirers and Issuers through the Card Networks. By using this API endpoint with the PUT method, you can modify or update information related to a specific card clearing processing batch.

  **Limitations**

  PUT: The name of the path should be:

PATCH /CardClearing/{cardclearingid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReCR Retrieve details about a card clearing process

  **Documentation**

  This API path allows you to retrieve information about a specific card clearing process identified by the `cardclearingid`. The card clearing process involves capturing and consolidating financial transactions made using cards, such as those from POS networks, E-commerce gateways, ATMs, or card case management systems. It also manages the process of clearing these transactions from the entities that receive the payments (Acquirers) to the entities that issue the cards (Issuers) through the Card Networks.

  **Limitations**

  GET: The appropriate name for the path '/CardClearing/{cardclearingid}/Retrieve' following REST best practices would be:

'/cardclearings/{cardclearingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardClearing/{cardclearingid}/Capture/{captureid}/Update</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks UpBQ Update details of a captured card transaction (for repair)

  **Documentation**

  This API path allows users to update the details of a captured card transaction for repair within the Card Clearing service domain. The service is responsible for managing and consolidating financial transactions made through different sources like POS networks, E-Commerce Gateways, ATMs, or Card Case Management systems. The API enables users to modify specific information related to a captured transaction identified by the {captureid} within the overall card clearing process.

  **Limitations**

  PUT: The name of the path should be `/card-clearing/{card_clearing_id}/capture/{capture_id}`. Following REST best practices, it is recommended to use lowercase letters and separate words with hyphens for better readability and consistency. The "Update" action is implicit in a PUT or PATCH request to this endpoint to update the specified card clearing capture resource identified by the `cardclearingid` and `captureid`.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Capture/{captureid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about a captured card transaction

  **Documentation**

  This API path allows you to retrieve details about a specific captured card transaction within the Card Clearing service domain. You can provide the `cardclearingid` and `captureid` in the URL to get specific information about a captured transaction. This API helps you access information related to card financial transactions from various sources like POS Network, E-Commerce Gateway, ATM Network, or Card Case Management, and also facilitates the clearing of transactions between Acquirers and Issuers through Card Networks.

  **Limitations**

  GET: The name of the path should be:

`/card-clearings/{cardClearingId}/captures/{captureId}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Addressing/{addressingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction addressing

  **Documentation**

  This API path allows you to retrieve information about card transaction addressing within the Card Clearing service domain. It helps capture and consolidate financial transactions made using cards from various sources like POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. Additionally, this API path handles the clearing of transactions between Acquirers and Issuers through Card Networks. By using this API, you can get details about how card transactions are addressed within the clearing process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured using resource identifiers and should be noun-based. 

A possible name for this path could be: `/card-clearings/{cardclearingid}/addressings/{addressingid}`

Remember, the path should ideally represent the resource and the action being performed on it in a clear and concise manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/FXConversion/{fxconversionid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction FX conversion|

  **Documentation**

  This BIAN API path allows you to retrieve details about a foreign exchange (FX) conversion related to a specific card clearing transaction. It helps in tracking the conversion process of transactions that involve currency exchange, such as when a card transaction in one currency needs to be converted to another currency for processing. The API provides information about how the FX conversion was carried out within the card clearing system, which can be useful for monitoring and auditing purposes.

  **Limitations**

  GET: A suitable name for the path '/CardClearing/{cardclearingid}/FXConversion/{fxconversionid}/Retrieve' following REST best practices could be:

GET /card-clearings/{cardclearingid}/fx-conversions/{fxconversionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardClearing/{cardclearingid}/Fees/{feesid}/Update</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks UpBQ Update details of applied fees

  **Documentation**

  This API path allows you to update the details of the applied fees for a specific card clearing transaction. You can specify the card clearing ID and fees ID to identify the transaction and fee details you want to update. This update operation helps manage the financial aspects of card transactions by modifying the fees associated with the clearing process.

  **Limitations**

  PUT: The name of the path should be:

`/card-clearing/{cardclearingid}/fees/{feesid}`

This path aligns with REST best practices by using lowercase letters and hyphens to separate words, and it accurately represents the resource hierarchy with the card clearing ID and fees ID as path parameters. It does not include the specific operation "Update" in the path as this operation can be inferred from the HTTP method used (e.g., PUT or PATCH) when performing

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Fees/{feesid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction intercharge fees

  **Documentation**

  This API path allows you to retrieve information about card transaction interchange fees within the Card Clearing service domain. Interchange fees are fees charged between financial institutions involving card transactions. By using this API, you can access specific details about these fees identified by the card clearing ID and fees ID. This information is crucial for understanding the costs associated with processing card transactions across different networks and systems.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path `/CardClearing/{cardclearingid}/Fees/{feesid}/Retrieve` could be:

`GET /card-clearings/{cardclearingid}/fees/{feesid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Matching/{matchingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction matching

  **Documentation**

  This API path allows you to retrieve details about card transaction matching within the Card Clearing service domain. By specifying the unique identifiers for the card clearing and matching, you can access information about how card financial transactions are consolidated and managed from different sources such as POS networks, e-commerce gateways, ATMs, and more. It also involves handling the process of clearing transactions between the Acquirers and the Issuers through the Card Networks.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/card-clearings/{cardclearingid}/matchings/{matchingid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Reconciliation/{reconciliationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction reconciliation

  **Documentation**

  This API path allows you to retrieve details about the reconciliation of card transactions within the Card Clearing service domain. By providing the specific card clearing ID and reconciliation ID, you can access information about how financial transactions using cards are captured, consolidated, and cleared between various entities like POS networks, E-commerce gateways, ATMs, and card management systems. This API helps in tracking and managing the movement of funds between acquirers and issuers through the card networks, providing insights into the reconciliation process for card transactions.

  **Limitations**

  GET: The name of the path should be:  

`GET /card-clearings/{cardclearingid}/reconciliations/{reconciliationid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardClearing/{cardclearingid}/Routing/{routingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the capture and consolidation of card financial transactions originating from various sources, such as POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. It also handles the clearing of the transactions from the Acquirers to the Issuers through the Card Networks ReBQ Retrieve details about card transaction routing

  **Documentation**

  This API path allows you to retrieve information about the routing of card transactions within the Card Clearing service domain. It helps you understand how card financial transactions move between different sources like POS Network, E-Commerce Gateway, ATM Network, or Card Case Management. You can access details about how transactions are cleared from Acquirers to Issuers through Card Networks.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
'/card-clearing/{cardClearingId}/routing/{routingId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
