<h1 style='color:red;'>TradeClearing</h1>

**BIAN Documentation:** [TradeClearing v12](https://app.swaggerhub.com/apis/BIAN-3/TradeClearing/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/Control</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Control Trade Clearing Procedure

  **Documentation**

  This API path allows you to update an existing trade clearing procedure by providing the trade clearing ID. It is used in the back office processes to confirm and notify parties involved that securities and funds are available for settlement processing. Essentially, it controls the trade clearing procedure within the system.

  **Limitations**

  PUT: The name of the path should be:

/TradeClearing/{tradeclearingid}/Controls

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Trade Clearing Procedure

  **Documentation**

  This API path is used to update existing trade clearing information related to an exchange. It handles the processes that confirm and notify parties involved that securities and funds are available after a trade has been made, in preparation for settlement processing. Essentially, it deals with the tasks involved in ensuring that the trade has been properly cleared and that the necessary assets are ready for transfer.

  **Limitations**

  PUT: The name of the path should be '/tradeclearings/{tradeclearingid}/exchange' if it followed REST best practices. 

Here are a few reasons to follow this naming convention:
- Path segments should be in lowercase letters.
- The resource 'trade clearing' should be in plural form ('tradeclearings').
- The resource identifier 'tradeclearingid' should be in singular form.
- Each segment should be descriptive and represent a resource or a sub-resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Trade Clearing Procedure

  **Documentation**

  This API path updates an existing trade clearing procedure with the specified ID. The trade clearing procedure is a back office process that confirms and notifies parties involved that securities and funds are available for settlement processing after a trade has been executed. By executing this API path, you are essentially updating and finalizing the trade clearing procedure for a specific transaction.

  **Limitations**

  PUT: Based on REST best practices, the path '/TradeClearing/{tradeclearingid}/Execute' could be named as:

'/trade-clearings/{tradeclearingid}/actions/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Trade Clearing Procedure

  **Documentation**

  This API path allows users to initiate the trade clearing procedure within the back office processes of confirming and notifying relevant parties about the availability of securities and funds that have been traded in preparation for settlement processing. By making a POST request to this path, users can create a new resource to start the trade clearing process.

  **Limitations**

  POST: The path '/TradeClearing/Initiate' should be updated to use a more noun-oriented approach as per REST best practices. 

A more appropriate name for this path could be:
'/trade-clearing' with a POST request to initiate a trade clearing process. 

By following this naming convention, the endpoint better reflects the resource being manipulated (trade clearing) and the action being taken (initiating).

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Trade Clearing Procedure

  **Documentation**

  This API path allows you to retrieve information about the Trade Clearing procedure by providing a specific trade clearing ID. It is used to handle the back office processes that confirm and notify interested parties about the availability of securities and funds that have been traded, in preparation for settlement processing.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

```
/transactions/{transactionId}/notifications
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Trade Clearing Procedure

  **Documentation**

  This API path allows you to update an existing trade clearance request by providing a specific trade clearance ID. The service domain manages the processes that confirm and notify relevant parties that securities and funds are available for trading, preparing for settlement processing.

  **Limitations**

  PUT: The name of the path should be "/trade-clearing/{trade-clearing-id}/requests" in kebab-case format, following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Trade Clearing Procedure

  **Documentation**

  This API path allows you to retrieve information related to a specific trade clearing process identified by the trade clearing ID. The Trade Clearing service handles the confirmation and notification of parties involved in a trade to let them know that securities and funds are available for settlement processing. By accessing this API path with the appropriate trade clearing ID, you can get details about the status and progress of the trade clearing procedure.

  **Limitations**

  GET: Based on REST best practices, the name of the path would typically be:

`/trade-clearings/{tradeclearingid}`

This path conveys the resource (`trade-clearings`) and the specific trade clearing ID that is being retrieved.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Trade Clearing Procedure

  **Documentation**

  This API path allows you to update an existing Trade Clearing procedure by providing the specific trade clearing ID. It is used in the back-office processes to confirm and notify parties involved that securities and funds are available after a trade has been made, preparing for the settlement process. This update functionality ensures that accurate information is maintained in the Trade Clearing system for efficient and effective processing of trades.

  **Limitations**

  PUT: The name of the path '/TradeClearing/{tradeclearingid}/Update' should ideally be structured in a RESTful way by utilizing HTTP verbs for appropriate operations. Following REST best practices, the path can be named as '/TradeClearing/{tradeclearingid}' with the PUT HTTP method for updating a specific 'tradeclearing' resource. This aligns with the standard convention where HTTP methods represent the actions to be performed on a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Market Trade Confirmation Workstep

  **Documentation**

  This API path allows you to update the information related to a specific market trade confirmation within the trade clearing process. It handles the confirmation and notification processes regarding the availability of securities and funds that have been traded. This update occurs in anticipation of further processing and settlement of the trade within the exchange market.

  **Limitations**

  PUT: The name of the path should be:

/TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Exchange

This path follows REST best practices by using a hierarchical structure to organize resources and identify relationships between them.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to trade clearing. It specifically focuses on confirming and notifying interested parties about the availability of securities and funds that have been traded, in preparation for the settlement processing in the exchange market. It handles the assurance workstep for market trade funds and security availability, ensuring that all necessary parties are informed and that the required resources are available for the trade.

  **Limitations**

  PUT: The name of the path should be:

/TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurances/{markettradefundsandsecurityavailabilityassuranceid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Market Trade Matching Workstep

  **Documentation**

  This API path is used to update an existing resource related to trade clearing within the back office processes for confirming and notifying trading parties that securities and funds are available for settlement processing. Specifically, it focuses on the Exchange Market Trade Matching Workstep in the trade clearing process. By using a PUT method, users can update specific details or information related to a trade clearing instance and its corresponding market trade matching workstep.

  **Limitations**

  PUT: A recommended name for the path '/TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Exchange' that follows REST best practices could be:

'/trade-clearing/{tradeclearingid}/market-trade-matching/{markettradematchingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API path allows you to update information related to trade clearing. Specifically, it is used to handle the processes that confirm and inform involved parties about the availability of securities and funds traded, in preparation for settlement processing in the exchange market. It pertains to resolving out-trade situations, which may involve confirming trades, making necessary adjustments, and notifying relevant parties about the trade resolution.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

`/tradeclearing/{tradeclearingId}/markettradeouttraderesolution/{markettradeouttraderesolutionId}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Exchange Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path allows you to update information related to trade clearing and market trade settlement initiation within a back office system. Specifically, it handles processes that confirm and notify parties involved that securities and funds are available as traded, and prepares for the settlement processing of exchange market trades. By using this path, you can make changes or updates to the existing resources and workflow steps associated with these back office processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a clear and descriptive manner. Here is a suggested name for the path:

`/trade-clearing/{tradeClearingId}/market-trade-settlement-initiation/{marketTradeSettlementInitiationId}/exchange`

In this naming convention:
- Path segments are in lowercase for better readability and consistency.
- Each path segment is separated by hyphens for improved clarity.
- Path parameters like `tradeclearingid`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Market Trade Confirmation Workstep

  **Documentation**

  This BIAN API path allows you to update (PUT) an existing market trade confirmation workstep within the Trade Clearing service domain. This specific workstep confirms and notifies interested parties about the availability of securities and funds following a trade in preparation for settlement processing. By executing this API endpoint, you can trigger the necessary actions related to confirming and notifying stakeholders involved in the trade clearing process.

  **Limitations**

  PUT: Based on REST best practices, the suggested name for the path would be:

```
/TradeClearings/{tradeclearingId}/MarketTradeConfirmations/{markettradeconfirmationId}/Execute
```

In this suggested path name:
- The resource names are in plural form to indicate collections (e.g., TradeClearings, MarketTradeConfirmations).
- The path parameters (tradeclearingId, markettradeconfirmationId) are in camelCase format for readability.
- The path uses

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path is used to update an existing resource related to a trade clearing process. In simpler terms, it handles the confirmation and notification tasks for parties involved in trading securities and funds. It specifically focuses on ensuring that securities and funds are available as expected for settlement processing. By executing this API, it triggers the workstep that confirms the availability of market trade funds and security for the trade clearing process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a way that is descriptive and follows a resource-oriented approach. 

A suggested name for the path could be:

/trade-clearing/{tradeClearingId}/market-trade-funds-security-availability-assurance/{marketTradeFundsSecurityAvailabilityAssuranceId}/execute

In this naming convention, the path is in lowercase letters, and words are separated by hyphens for clarity. The path structure indicates the various resources involved

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Market Trade Matching Workstep

  **Documentation**

  This API path updates an existing resource within the Trade Clearing service domain by executing a specific workstep related to market trade matching. It confirms and notifies parties involved that securities and funds are available following a trade, in preparation for settlement processing. This process helps ensure that the trade is successfully matched and ready for further action.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

'/trade-clearings/{tradeclearingid}/market-trade-matchings/{markettradematchingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API path allows you to update and execute a back-office process related to trade clearing. Specifically, it confirms and notifies relevant parties that securities and funds are available after a trade has been made, in preparation for settlement processing. It handles tasks related to resolving discrepancies in trade details and ensures that everything is in order before the final settlement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should accurately and clearly represent the resource being accessed. 

A possible name for this path could be:

`/tradeclearing/{tradeclearingid}/markettradeouttraderesolution/{markettradeouttraderesolutionid}/execute`

This name follows the common convention of using lowercase letters and separating words with dashes for better readability. Additionally, it reflects the structure of the resource hierarchy within the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Execute Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path is used to update the execution of a specific workstep related to the clearing and settlement of a market trade. It confirms and notifies relevant parties that securities and funds associated with a trade are available and ready for settlement processing. This process occurs in the back office and helps to ensure that all necessary steps are taken for the successful completion of the trade.

  **Limitations**

  PUT: The name of the path could be simplified to `/trades/{tradeId}/settlements/{settlementId}/execute`. This follows RESTful best practices by using lowercase letters, using nouns to represent resources, and using plural nouns for collections where applicable. It also maintains a clear and concise structure that represents the hierarchical relationship between the resources.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Market Trade Confirmation Workstep

  **Documentation**

  This API path allows you to initiate the process of confirming and notifying relevant parties that securities and funds are available following a trade, in preparation for settlement. It creates a new resource to kickstart the Market Trade Confirmation Workstep within the Trade Clearing service domain.

  **Limitations**

  POST: According to REST best practices, the name of the path '/TradeClearing/{tradeclearingid}/MarketTradeConfirmation/Initiate' should be structured in a way that represents a resource-oriented approach. Here is a suggestion for a more appropriately named path in RESTful conventions:

'/trade-clearings/{tradeclearingid}/market-trade-confirmations/initiate' 

In this modified path:
- Resource names are in lowercase for consistency.
- Hyphens are used as separators in multi

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path allows you to initiate the back office process that confirms and notifies relevant parties that securities and funds are available after a trade has taken place. This confirmation is essential for the settlement process to proceed smoothly. By using this API, you can kickstart the steps to ensure that both funds and securities are available as agreed upon during the trade.

  **Limitations**

  POST: The name of the path should be:

'/trade-clearing/{trade_clearing_id}/market-trade-funds-and-security-availability-assurance/initiate'

Following REST best practices, the path should use lowercase letters, separate words with hyphens (-), and use specific, descriptive terms.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/{tradeclearingid}/MarketTradeMatching/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Market Trade Matching Workstep

  **Documentation**

  This BIAN API path (/TradeClearing/{tradeclearingid}/MarketTradeMatching/Initiate) is used to initiate the process of matching market trades in a trade clearing system. When a trade is executed, this API will confirm and notify relevant parties that the securities and funds involved in the trade are available for settlement. It essentially triggers the beginning of the market trade matching workstep within the trade clearing process.

  **Limitations**

  POST: A suitable name for the path '/TradeClearing/{tradeclearingid}/MarketTradeMatching/Initiate' following REST best practices could be something like:

'/trade-clearing/{tradeclearingid}/market-trade-matching/initiate' 

Remember to use lowercase letters and hyphens to separate words in the path to follow common REST URI style conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API path, /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/Initiate, allows you to initiate a new back-office process for confirming and notifying parties involved in trading that securities and funds are available for settlement processing. This process specifically focuses on resolving any issues related to market trade outs and initiating the necessary steps to ensure a smooth resolution. By using this API, you can trigger the initiation of the workstep designed to handle these specific tasks within the trade clearing domain.

  **Limitations**

  POST: Following REST best practices, the name of the path should be: 

```
/TradeClearings/{tradeclearingid}/MarketTradeOutTradeResolutions/Initiate
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/Initiate</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Initiate Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path initiates the process of confirming and notifying parties involved in a trade that securities and funds are available for settlement after the trade has been made on the market. It essentially triggers the start of the back-office processes related to settling a trade, ensuring that all necessary assets are ready for the transaction to be completed.

  **Limitations**

  POST: The name of the path should be:

'/tradeclearings/{tradeclearingid}/markettradesettlements/initiation'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Market Trade Confirmation Workstep

  **Documentation**

  This API path retrieves information related to a specific market trade confirmation within the Trade Clearing service domain. It is used to confirm and notify interested parties involved in trading that securities and funds are available for settlement processing.

  **Limitations**

  GET: A potential name following REST best practices for this path could be:

'/trade-clearing/{tradeclearingid}/market-trade-confirmation/{markettradeconfirmationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path retrieves information related to the back office processes involved in confirming and notifying parties about the availability of securities and funds following a trade. It specifically deals with informing interested parties that the securities and funds have been traded successfully and are ready for settlement processing.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path could be:

PUT /trade-clearing/{trade-clearing-id}/market-trade-funds-security-availability-assurance/{market-trade-funds-availability-id}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Market Trade Matching Workstep

  **Documentation**

  This API path is used to retrieve information about the back office processes that confirm and notify interested parties about the availability of securities and funds traded during a market trade matching workstep in preparation for settlement processing. The API provides details about the trade clearing activities related to confirming trades and informing relevant parties about the availability of assets for settlement.

  **Limitations**

  GET: The name of the path should be structured in a way that is clear, concise, and follows REST API conventions. Here is a suggestion for the path name:

'/trade-clearing/{tradeClearingId}/market-trade-matching/{marketTradeMatchingId}/notify'

In this suggestion:
- Path segments are in lowercase letters.
- Path segments are separated by hyphens for better readability.
- Path parameters are represented within curly braces to denote dynamic values.
- The path segments are short and descriptive

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API path retrieves information related to the trade clearing process. It specifically focuses on confirming and notifying relevant parties about the availability of securities and funds that have been traded, in preparation for settlement processing. The "Notify" operation within the "Market Trade Out Trade Resolution" workstep is triggered to communicate this information to the necessary parties involved in the trade.

  **Limitations**

  GET: The name of the path should be:

`/tradeclearings/{tradeclearingId}/markettradeouttraderesolutions/{markettradeouttraderesolutionId}/notify` 

Following REST best practices, it is recommended to use lowercase letters, hyphens or underscores for separating words, and plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Notify Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path is used to retrieve information about the process of Trade Clearing in the banking system. Specifically, it focuses on a step where securities and funds are confirmed and notifications are sent out to relevant parties to indicate that the trade has been successfully executed and settlement processing is underway. The endpoint "Notify" is part of the Market Trade Settlement Initiation workstep, where interested parties are informed about the availability of securities and funds as traded.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
`/trade-clearing/{tradeclearingid}/market-trade-settlement-initiation/{markettradesettlementinitiationid}/notify`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Market Trade Confirmation Workstep

  **Documentation**

  This API path allows you to update an existing resource within the Trade Clearing service domain. Specifically, it pertains to the process of confirming and notifying parties involved in a market trade about the availability of securities and funds for settlement. By sending a PUT request to this path with the appropriate IDs, you can trigger the request for a market trade confirmation workstep to be executed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/TradeClearing/{tradeclearingid}/MarketTradeConfirmations/{markettradeconfirmationid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path is used to update an existing resource related to trade clearing and market trade funds and security availability assurance. It handles the processes that confirm and notify parties involved that securities and funds are available for trade settlement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/tradeclearing/{tradeclearingid}/markettradefundsandsecurityavailabilityassurance/{markettradefundsandsecurityavailabilityassuranceid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Market Trade Matching Workstep

  **Documentation**

  This BIAN API path is used to update an existing resource related to the Trade Clearing service domain. Specifically, it is used to request a market trade matching workstep within a trade clearing process. This involves confirming and notifying parties involved in a trade that securities and funds are available for settlement processing.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path would be something like:

`/trade-clearing/{tradeclearingid}/market-trade-matching/{markettradematchingid}/request`

This naming convention follows the guideline of using lowercase letters and hyphens to separate words in the URL path while making it more readable and consistent.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API endpoint allows you to update an existing resource related to the Trade Clearing Service. Specifically, it is used for handling the back office processes that confirm and notify interested parties about the availability of securities and funds from a trade. This process occurs in anticipation of settlement processing and involves requesting a specific workstep related to market trade out trade resolution.

  **Limitations**

  PUT: The most suitable name for this path following REST best practices would be:

'/trade-clearings/{tradeclearingid}/market-trade-out-trade-resolutions/{markettradeouttraderesolutionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Request</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Request Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path allows you to update an existing resource related to trade clearing. Specifically, it deals with the confirmation and notification processes for securities and funds availability after a trade, preparing for settlement processing. It focuses on requesting a specific workstep in the market trade settlement initiation within the trade clearing process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/trade-clearing/{trade-clearing-id}/market-trade-settlement-initiation/{market-trade-settlement-initiation-id}/request'

In RESTful API design, it is common to use lowercase letters and hyphens to separate words in the path names. Additionally, resource names are usually made plural to represent a collection of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Market Trade Confirmation Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific market trade confirmation workstep within a trade clearing process. It is used in the back office processes to confirm and notify interested parties about the availability of securities and funds that have been traded. The information retrieved would be related to confirming and notifying parties involved in the trade transaction before settlement processing takes place.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:  
`/tradeclearing/{tradeclearingid}/markettradeconfirmation/{markettradeconfirmationid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path allows you to retrieve information about the Market Trade Funds and Security Availability Assurance Workstep within the Trade Clearing process. It is a back office service that confirms and notifies parties involved in a trade that securities and funds are available for settlement processing.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/trade-clearing/{tradeclearingid}/market-trade-funds-and-security-availability-assurance/{markettradefundsandsecurityavailabilityassuranceid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Market Trade Matching Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific Market Trade Matching Workstep within the Trade Clearing service domain. It is used to confirm and notify parties involved in trading activities that securities and funds are available for settlement processing. Essentially, this API helps in managing the processes related to confirming trades and ensuring that the necessary resources are available for the settlement of trades.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Retrieve' could be simplified to '/trade-clearing/{tradeclearingid}/market-trade-matching/{markettradematchingid}'. This naming convention follows the principles of using lowercase letters, separating words with hyphens, and using plural nouns where appropriate.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Market Trade Out Trade Resolution Workstep

  **Documentation**

  This API path retrieves information about a specific workstep in the back office process for trade clearing. Specifically, it focuses on confirming and notifying parties involved in trading about the availability of securities and funds for settlement. It is used to access details related to market trade out trade resolution workstep identified by the provided IDs.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

GET /tradeclearing/{tradeclearingid}/markettradeouttraderesolution/{markettradeouttraderesolutionid}/retrieve

Here are some key considerations for naming the path:
1. Use lowercase letters for path components.
2. Use hyphens to separate multiple words in a path component.
3. Use nouns to represent resources in a RESTful manner.
4. Use the HTTP method (GET

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Retrieve Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific Market Trade Settlement Initiation Workstep within the Trade Clearing service domain. It is part of the back office processes that confirm and notify interested parties about the availability of securities and funds that have been traded, in preparation for settlement processing. The API endpoint provides access to details related to a particular Market Trade Settlement Initiation Workstep identified by the provided IDs.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}
```

The operation to retrieve the resource should typically be performed using an HTTP GET request on the resource itself rather than including "Retrieve" in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Market Trade Confirmation Workstep

  **Documentation**

  This API path allows you to update an existing market trade confirmation workstep within the Trade Clearing service domain. It is used to confirm and notify interested parties that securities and funds are available as traded, in preparation for settlement processing. This update operation ensures that the relevant information regarding the trade confirmation is accurate and up-to-date for all involved parties.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PUT /TradeClearing/{tradeclearingid}/MarketTradeConfirmation/{markettradeconfirmationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeFundsandSecurityAvailabilityAssurance/{markettradefundsandsecurityavailabilityassuranceid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Market Trade Funds and Security Availability Assurance Workstep

  **Documentation**

  This API path allows you to update an existing resource related to trade clearing. Specifically, it deals with confirming and notifying relevant parties about the availability of securities and funds following a trade, as part of the settlement process. This update pertains to ensuring that the market trade funds and security availability assurance workstep is accurately reflected.

  **Limitations**

  PUT: Based on REST best practices, the suggested naming convention for the given path would be:

PUT /tradeclearing/{tradeclearingId}/markettradefundsandsecurityavailabilityassurance/{markettradefundsandsecurityavailabilityassuranceId}

This naming convention follows the RESTful guidelines of using lowercase letters, using plural nouns for collections, and using specific resource identifiers in the path. The use of the HTTP method PUT indicates that the operation is used to update an existing resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeMatching/{markettradematchingid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Market Trade Matching Workstep

  **Documentation**

  This API path allows you to update an existing resource related to Trade Clearing and Market Trade Matching. It is used to handle the processes that confirm and notify interested parties about the availability of securities and funds that have been traded. This update is done in anticipation of settlement processing within the back office operations of a trading system.

  **Limitations**

  PUT: The name of the path should be:

/TradeClearings/{tradeclearingid}/MarketTradeMatchings/{markettradematchingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeOutTradeResolution/{markettradeouttraderesolutionid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Market Trade Out Trade Resolution Workstep

  **Documentation**

  This BIAN API path is used to update an existing market trade out trade resolution workstep within a specific trade clearing process. It handles the confirmation and notification processes involved in ensuring that securities and funds are available for settlement processing after a trade has taken place. This API path is designed to manage the back-office operations related to confirming and notifying relevant parties about the availability of securities and funds following a trade transaction.

  **Limitations**

  PUT: The name of the path should be:

'/trade-clearings/{tradeclearingid}/market-trades/{markettradeouttraderesolutionid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeClearing/{tradeclearingid}/MarketTradeSettlementInitiation/{markettradesettlementinitiationid}/Update</span></summary>

  **Description**

  This Service Domain handles the back office processes that confirm and notify interested parties that securities and funds are available as traded in anticipation of settlement processing Update Market Trade Settlement Initiation Workstep

  **Documentation**

  This API path allows you to update the market trade settlement initiation workstep within a specific trade clearing process. It is used to handle the processes that confirm and notify relevant parties that securities and funds are available for settlement after a trade has been made. This API helps facilitate the back-office operations related to trade clearing and settlement processing.

  **Limitations**

  PUT: The name of the path should be:

/TradeClearings/{tradeclearingid}/MarketTradeSettlementInitiations/{markettradesettlementinitiationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
