<h1 style='color:red;'>TradeSettlement</h1>

**BIAN Documentation:** [TradeSettlement v12](https://app.swaggerhub.com/apis/BIAN-3/TradeSettlement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/Control</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Control Trade Settlement Procedure

  **Documentation**

  This API path allows you to update an existing trade settlement by controlling and finalizing the movement of cash and securities between different depositories after they have been confirmed in the clearing process. It essentially helps in settling a market trade once all the necessary steps have been completed.

  **Limitations**

  PUT: The name of the path should be `/trade-settlements/{tradeSettlementId}/control` in kebab case to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Exchange Trade Settlement Procedure

  **Documentation**

  This API path is used to update an existing trade settlement process in the financial market. It specifically deals with the movement of cash and securities between different depositories after the trade has been confirmed during the clearing process. This update is essential for finalizing the settlement of the market trade.

  **Limitations**

  PUT: The name of the path should be `/trade-settlements/{tradeSettlementId}/exchange`, following REST best practices. This naming convention uses lowercase letters, separates words with hyphens, and uses plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/Execute</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Execute Trade Settlement Procedure

  **Documentation**

  This API path is used to update and execute the trade settlement procedure for a specific trade settlement identified by {tradesettlementid}. It refers to the final stage of transferring cash and securities between depositories in order to complete the settlement of a market trade. The purpose of this API is to confirm and finalize the movement of funds and securities as approved during the clearing process, ensuring that the trade is successfully settled.

  **Limitations**

  PUT: The name of the path should ideally be:

```
/trade-settlements/{trade-settlement-id}/execute
``` 

It follows the REST best practice of using lowercase letters, separating words with hyphens, and using nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeSettlement/Initiate</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Initiate Trade Settlement Procedure

  **Documentation**

  This API path allows users to initiate the process of settling a market trade by moving cash and securities between depositories as confirmed in the clearing process. By making a POST request to this path, a new resource is created to kick off the trade settlement procedure. Essentially, it facilitates the final steps required to complete a market trade by transferring the necessary assets between financial institutions involved.

  **Limitations**

  POST: The name of the path should be something that represents a resource which can be acted upon. Based on the given path '/TradeSettlement/Initiate', a more RESTful name for the resource could be '/trade-settlements' if it represents a collection of trade settlements, and a possible action could be 'POST' to initiate the trade settlement process. So, a more appropriate RESTful path name could be '/trade-settlements' with a 'POST' request to initiate a new trade

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/Notify</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Notify Trade Settlement Procedure

  **Documentation**

  This API path '/TradeSettlement/{tradesettlementid}/Notify' is used to retrieve information related to the trade settlement process. It handles the final transfer of money and securities between different depositories after a trade has been confirmed in the clearing process. The Notify Trade Settlement Procedure helps in settling a market trade by providing details and updates about the cash and securities movement.

  **Limitations**

  GET: The name of the path should be `/trade-settlement/{tradeSettlementId}/notify` for following REST best practices. The path should be in lowercase letters and words should be separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/Request</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Request Trade Settlement Procedure

  **Documentation**

  This API path `/TradeSettlement/{tradesettlementid}/Request` allows you to update an existing trade settlement resource related to a specific trade settlement ID. It facilitates the final transfer of cash and securities between different depositories after the clearing process has confirmed the trade. This process is essential for settling a market trade transaction securely and accurately.

  **Limitations**

  PUT: The appropriate name for the path would be:

'/trade-settlements/{tradesettlementid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Retrieve Trade Settlement Procedure

  **Documentation**

  This API path allows you to retrieve information about a specific trade settlement. It is used to get details about the final movement of cash and securities between two depositories, which occurs after the trade has been confirmed in the clearing process. Essentially, this API helps you access the procedure related to settling a market trade in terms of transferring cash and securities between the involved entities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/trade-settlements/{tradeSettlementId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/Update</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Update Trade Settlement Procedure

  **Documentation**

  This API path allows you to update an existing trade settlement by providing a new set of details or making changes to an already confirmed trade settlement in the system. It specifically deals with the final transfer of cash and securities between different depositories as part of settling a market trade. This could involve modifying information related to the settlement process and ensuring that the trade settlement is accurately reflected in the system.

  **Limitations**

  PUT: The name of the path should be:

/TradeSettlement/{tradesettlementid} (PUT)

In RESTful best practices, the HTTP method PUT is typically used to update a resource at a specific URL. So, in this case, the request to update a trade settlement with a specific ID would be handled by sending a PUT request to the endpoint /TradeSettlement/{tradesettlementid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Exchange Market Trade Cash Settlement Workstep

  **Documentation**

  This API path is used to update an existing market trade cash settlement process within the Trade Settlement domain. It deals with the final transfer of cash and securities between depositories that was confirmed during the clearing process to complete the settlement of a market trade. The PUT method is used to make changes or updates to the specific market trade cash settlement identified by the markettradecashsettlementid within the broader tradesettlementid context.

  **Limitations**

  PUT: The name of the path should be:
'/trade-settlements/{tradeSettlementId}/market-trade-cash-settlements/{marketTradeCashSettlementId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Exchange Market Trade Securities Settlement Workstep

  **Documentation**

  This API path allows you to update an existing resource related to the trade settlement process. It specifically focuses on the final movement of cash and securities between depositories that have been confirmed in the clearing process. The purpose is to settle a market trade by managing the exchange of securities as part of the settlement workstep.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/trade-settlement/{tradesettlementid}/market-trade-securities-settlement/{markettradesecuritiessettlementid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Exchange Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path allows you to update an existing market trade settlement confirmation within a trade settlement process. It handles the movement of cash and securities between depositories as part of finalizing the settlement of a trade after it has been confirmed in the clearing process.

  **Limitations**

  PUT: The name of the path should be:

"/trade-settlements/{tradeSettlementId}/market-trade-settlement-confirmations/{marketTradeSettlementConfirmationId}/exchange"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Execute</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Execute Market Trade Cash Settlement Workstep

  **Documentation**

  This API path is used to update and execute the final movement of cash and securities between depositories in order to settle a market trade within the Trade Settlement service domain. It specifically focuses on the execution of the Market Trade Cash Settlement workstep, which confirms the movement of funds and securities that were previously agreed upon during the clearing process. By using this API endpoint, financial institutions can ensure that the necessary transactions are completed accurately to finalize the trade settlement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/TradeSettlements/{tradesettlementid}/MarketTradeCashSettlements/{markettradecashsettlementid}/Execute
``` 

Here are the key recommendations followed:
1. Use plural nouns for resource names (/TradeSettlements, /MarketTradeCashSettlements).
2. Use lowercase letters for path segments.
3. Use hyphens to separate words in a path segment when necessary

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Execute</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Execute Market Trade Securities Settlement Workstep

  **Documentation**

  This API path is used to update an existing resource related to the Trade Settlement service. Specifically, it pertains to executing the securities settlement workstep for a market trade. The process involves the final transfer of cash and securities between depositories, confirming the transactions that were cleared earlier in order to complete the settlement of a market trade.

  **Limitations**

  PUT: Following REST best practices, the name of the path should ideally be a noun that represents a resource, not a verb. Thus, a suitable name for the path could be:

'/TradeSettlements/{tradesettlementid}/MarketTradeSecuritiesSettlements/{markettradesecuritiessettlementid}/Execution'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Execute Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path is used to update and execute the market trade settlement confirmation workstep within the trade settlement process. It involves the final transfer of cash and securities between depositories as confirmed in the clearing process, in order to complete the settlement of a market trade.

  **Limitations**

  PUT: Based on the REST best practices, the name of the path should be:

/TradeSettlements/{tradesettlementid}/MarketTradeSettlementConfirmations/{markettradesettlementconfirmationid}/Execute

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/Initiate</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Initiate Market Trade Cash Settlement Workstep

  **Documentation**

  This API path initiates the process of settling a market trade by transferring cash and securities between depositories. It creates a new resource to finalize the movement of funds and assets that were confirmed during the clearing process for the trade settlement.

  **Limitations**

  POST: A potential RESTful name for the given path could be:

`/tradesettlements/{tradesettlementid}/markettradecashsettlements/initiate`

This naming convention follows the REST best practices of using lowercase letters, using plural nouns for collections, and using specific resource identifiers.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/Initiate</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Initiate Market Trade Securities Settlement Workstep

  **Documentation**

  This BIAN API path allows you to initiate the process of settling a market trade by moving cash and securities between depositories. It handles the final steps of confirming the trading process and ensures that the trade is completed successfully by moving the necessary assets.

  **Limitations**

  POST: The name of the path should be:

```
/TradeSettlements/{tradesettlementid}/MarketTradeSecuritiesSettlements/Initiate
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/Initiate</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Initiate Market Trade Settlement Confirmation Workstep

  **Documentation**

  This BIAN API path allows you to initiate the confirmation process for settling a market trade in the Trade Settlement Service Domain. Specifically, it handles the transfer of cash and securities between depositories that has been confirmed in the clearing process. This API path helps facilitate the final movement of assets to complete the settlement of a market trade.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/ trade-settlements/{trade-settlement-id}/market-trade-settlement-confirmations/initiate

Make sure to use lowercase letters and hyphens to separate words for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Notify</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Notify Market Trade Cash Settlement Workstep

  **Documentation**

  This API path retrieves information about the final movement of cash and securities between depositories for settling a market trade. It specifically pertains to notifying the Market Trade Cash Settlement Workstep as part of the trade settlement process.

  **Limitations**

  GET: Based on REST best practices, a cleaner and more descriptive naming convention for the path would be:

'/trade-settlements/{tradeSettlementId}/market-trade-cash-settlements/{marketTradeCashSettlementId}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Notify</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Notify Market Trade Securities Settlement Workstep

  **Documentation**

  This BIAN API path, /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Notify, allows you to retrieve information about the final movement of cash and securities between depositories in order to settle a market trade. It is specifically related to notifying the Market Trade Securities Settlement Workstep.

  **Limitations**

  GET: Following REST best practices, the name of the path should be: 

```
/TradeSettlements/{tradeSettlementId}/MarketTradeSecuritiesSettlements/{marketTradeSecuritiesSettlementId}/Notify
``` 

Here are some key points to consider:
- Use plural nouns for resource names.
- Use lowercase letters for path components.
- Use camelCase for multi-word resource names.
- Use unique identifiers like tradeSettlementId and marketTradeSecuritiesSettlementId instead of

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Notify Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path is used to retrieve information related to the notification process for settlement of a market trade confirmation within the Trade Settlement service domain. It involves the final transfer of cash and securities between depositories that was confirmed during the clearing process. The GET method is used to retrieve details about this specific market trade settlement confirmation workstep within the overall trade settlement process.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be something like:

'/tradesettlements/{tradesettlementid}/markettradesettlementconfirmations/{markettradesettlementconfirmationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Request</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Request Market Trade Cash Settlement Workstep

  **Documentation**

  This API path allows you to update and request the final movement of cash and securities between depositories to settle a market trade. It is specifically related to the cash settlement workstep within the trade settlement process.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be: 

'/trade-settlements/{tradesettlementid}/market-trade-cash-settlements/{markettradecashsettlementid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Request</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Request Market Trade Securities Settlement Workstep

  **Documentation**

  This API path allows you to update an existing request for settling a market trade's securities and cash movement between depositories. This process occurs after the clearing process has confirmed the trade. With this API, you can initiate the final movement of assets to complete the settlement of a market trade.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Request' could be:

'/trades/{tradeId}/market-trades/{marketTradeId}/securities-settlement/request' 

This path follows the convention of using lowercase letters, using plural nouns for collections, and using '-' to separate words for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Request</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Request Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path is used to update an existing market trade settlement confirmation workstep within the trade settlement process. It handles the final transfer of cash and securities between depositories that has been previously confirmed during the clearing process to settle a market trade. It facilitates the movement of funds and assets to ensure the completion of the trade settlement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/TradeSettlements/{tradesettlementid}/MarketTradeSettlementConfirmations/{markettradesettlementconfirmationid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Retrieve Market Trade Cash Settlement Workstep

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific market trade cash settlement workstep within a trade settlement process. It deals with the final transfer of cash and securities between depositories after the clearing process to settle a trade in the market. By accessing this endpoint, you can retrieve details related to the cash settlement workstep for a particular trade settlement.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be something like:

'/tradesettlements/{tradesettlementid}/markettradecashsettlements/{markettradecashsettlementid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Retrieve Market Trade Securities Settlement Workstep

  **Documentation**

  This API path allows you to retrieve information about the settlement workstep for a specific market trade securities settlement within a trade settlement process. It helps in managing the final transfer of cash and securities between different depositories once the clearing process for the trade has been confirmed.

  **Limitations**

  GET: The name of the path should be:

GET /tradesettlements/{tradesettlementid}/markettradesecurities/{markettradesecuritiessettlementid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Retrieve Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path allows you to retrieve information about the market trade settlement confirmation workstep within a trade settlement process. It deals with the final transactions of cash and securities between different depositories after the clearing process has been confirmed. This step is crucial for settling market trades securely and efficiently.

  **Limitations**

  GET: A potential name for the path could be: `/trade-settlements/{tradeSettlementId}/market-trade-settlement-confirmations/{marketTradeSettlementConfirmationId}`. 

This name follows REST best practices by using lowercase letters, separating words with hyphens, and using resource identifiers in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeCashSettlement/{markettradecashsettlementid}/Update</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Update Market Trade Cash Settlement Workstep

  **Documentation**

  This API path allows you to update an existing resource related to trade settlement. Specifically, it pertains to the final movement of cash and securities between depositories in order to settle a market trade. By providing the trade settlement ID and market trade cash settlement ID, you can make changes to the information associated with this process.

  **Limitations**

  PUT: Following REST best practices, the naming of the path should be as follows:

/TradeSettlements/{id}/MarketTradeCashSettlements/{id}/Update

Here, '{id}' would represent the trade settlement ID and market trade cash settlement ID, respectively.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Update</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Update Market Trade Securities Settlement Workstep

  **Documentation**

  This BIAN API path allows you to update the details of a specific market trade securities settlement workstep within a trade settlement process. It is used to facilitate the final transfer of cash and securities between different depositories as part of settling a market trade. The API enables you to modify and manage the information related to this particular step in the trade settlement workflow.

  **Limitations**

  PUT: The name of the path '/TradeSettlement/{tradesettlementid}/MarketTradeSecuritiesSettlement/{markettradesecuritiessettlementid}/Update' should be updated to '/trade-settlements/{tradesettlementid}/market-trade-securities-settlements/{markettradesecuritiessettlementid}' while following REST best practices. This new path provides a more standardized naming convention using lowercase letters with hyphens as separators between words.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeSettlement/{tradesettlementid}/MarketTradeSettlementConfirmation/{markettradesettlementconfirmationid}/Update</span></summary>

  **Description**

  This Service Domain handles the final movement of cash and securities between depositories as previously confirmed in the clearing process, in order to settle a market trade Update Market Trade Settlement Confirmation Workstep

  **Documentation**

  This API path allows you to update the information related to the market trade settlement confirmation within a trade settlement process. It involves the movement of cash and securities between depositories to finalize the trade agreement that was previously confirmed in the clearing process. By using a PUT method, you can make changes or updates to the specific details of the market trade settlement confirmation workstep identified by the provided IDs.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be:

PUT /trade-settlements/{tradesettlementid}/market-trade-settlement-confirmations/{markettradesettlementconfirmationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
