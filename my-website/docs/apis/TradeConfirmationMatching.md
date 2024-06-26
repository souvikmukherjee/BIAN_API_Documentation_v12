<h1 style='color:red;'>TradeConfirmationMatching</h1>

**BIAN Documentation:** [TradeConfirmationMatching v12](https://app.swaggerhub.com/apis/BIAN-3/TradeConfirmationMatching/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Control</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Control Trade Matching Operating Session

  **Documentation**

  This API path allows the bank to update an existing resource related to the trade confirmation matching process. It supports the bank's interaction with a central market matching and confirmation service when the bank is acting as a broker dealer or institutional investor. This functionality helps control the trade matching operating session by managing the activities involved in confirming trades.

  **Limitations**

  PUT: The name of the path should be `/trade-confirmations/{tradeconfirmationId}/controls` based on REST best practices. The path segments should be lowercase, use hyphens to separate words, and resources should be represented in plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Exchange Trade Matching Operating Session

  **Documentation**

  This BIAN API path allows the bank to update information related to trade confirmation matching within a central market matching and confirmation service. It is used when the bank is involved in trade activities as a broker dealer or institutional investor during an Exchange Trade Matching Operating Session. Essentially, this API facilitates the process of updating trade confirmation matching details within the bank's interface with the central market service.

  **Limitations**

  PUT: The path could be named as follows:

'/trade-confirmations/{tradeConfirmationId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Execute</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Execute Trade Matching Operating Session

  **Documentation**

  This API path allows the bank to update an existing trade confirmation matching session by executing a trade matching operating session. It supports the bank's communication with a central market matching and confirmation service, whether the bank is working as a broker dealer or an institutional investor. Essentially, this API helps facilitate the process of matching and confirming trades within the financial services industry.

  **Limitations**

  PUT: Following REST best practices, a more suitable name for the path '/TradeConfirmationMatching/{tradeconfirmationmatchingid}/Execute' could be '/trade-confirmations/{id}/execute'. 

This name indicates the resource being accessed ('trade confirmations'), the specific resource ID ('id' in place of 'tradeconfirmationmatchingid'), and the action being taken ('execute').

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeConfirmationMatching/Initiate</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Initiate Trade Matching Operating Session

  **Documentation**

  This API path is used to initiate a trade matching operating session within the bank's interface with a central market matching and confirmation service. It is designed for cases where the bank is functioning as a broker dealer or institutional investor. By using this API, the bank can set up a session to match and confirm trades efficiently with the central market service.

  **Limitations**

  POST: The name of the path '/TradeConfirmationMatching/Initiate' following REST best practices should ideally be something that represents a resource or action rather than a verb like "Initiate". 

A better path name could be '/trade-confirmations' to represent the collection of trade confirmations or '/trade-confirmations/matching' to specifically indicate the matching process for trade confirmations.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Notify</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Notify Trade Matching Operating Session

  **Documentation**

  This API path allows the bank to retrieve information about a specific trade confirmation matching session by providing the trade confirmation matching ID. It is used by the bank to communicate with a central market matching and confirmation service, whether the bank is a broker dealer or institutional investor. The API helps in notifying the trade matching operating session to get relevant details about trade confirmations.

  **Limitations**

  GET: Based on REST best practices, the path should be named in a resource-oriented way. It can be named as:

```
/TradeConfirmations/{tradeconfirmationId}/Matching/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Request</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Request Trade Matching Operating Session

  **Documentation**

  This API path allows a bank to update an existing resource related to trade confirmation matching. It supports the bank's communication with a central market matching and confirmation service, whether the bank is acting as a broker dealer or institutional investor. By using this API, the bank can request a trade matching operating session, which enables the matching and confirmation of trades.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/TradeConfirmationMatching/{tradeconfirmationmatchingid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Retrieve Trade Matching Operating Session

  **Documentation**

  This API path allows the bank to retrieve information about a specific Trade Matching Operating Session from a central market matching and confirmation service. This service supports the bank's interface when it functions as a broker dealer or institutional investor. By using this API, the bank can access details related to trade confirmation matching activities within the specified operating session.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/TradeConfirmationMatching/{tradeconfirmationmatchingid}/Retrieve' could be simplified to '/trade-confirmation-matching/{id}'. This follows the convention of using lowercase letters, separating words with hyphens, and using a generic term such as 'id' for the identifier placeholder.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/Update</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Update Trade Matching Operating Session

  **Documentation**

  This BIAN API path `/TradeConfirmationMatching/{tradeconfirmationmatchingid}/Update` allows users to update an existing trade confirmation matching operating session. It supports the bank's interface to a central market matching and confirmation service, whether the bank is functioning as a broker dealer or institutional investor. By making a PUT request to this endpoint with the appropriate trade confirmation matching ID, users can modify and update information related to trade confirmations within the operating session.

  **Limitations**

  PUT: If the path '/TradeConfirmationMatching/{tradeconfirmationmatchingid}/Update' followed all REST best practices, it could be named as: 

PUT '/TradeConfirmationMatching/{tradeconfirmationmatchingid}' 

This naming convention follows the RESTful practice of using the HTTP verb PUT to update a specific resource identified by its unique identifier within the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Exchange Transaction Confirmation/Affirmation Function

  **Documentation**

  This API path allows the bank to update an existing resource related to trade confirmation matching and transaction confirmation/affirmation for exchange transactions. It supports the bank's interface with a central market matching and confirmation service for activities such as broker dealer or institutional investor functions.

  **Limitations**

  PUT: A possible name for the path could be:

`/trade-confirmations/{tradeconfirmationmatchingid}/transaction-confirmations/{transactionconfirmationaffirmationid}/exchanges` 

This path name follows REST best practices by using all lowercase letters, separating words with hyphens, and using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Exchange Transaction Reporting Function

  **Documentation**

  This API path allows users to update information related to trade confirmation matching and transaction reporting within the bank's interface to a central market service. It supports activities for broker dealers or institutional investors involved in exchange transactions. By using the PUT method, users can modify existing data or resources within this service domain.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/trade-confirmations/{tradeconfirmationmatchingid}/transaction-reports/{transactionreportingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Exchange Unmatched Market Trade Escalation Function

  **Documentation**

  This API path allows a bank to update an existing unmatched market trade escalation within the trade confirmation matching service. It is used to interface with a central market matching and confirmation service when the bank is operating as a broker dealer or institutional investor. This function is used to exchange information related to unmatched market trades in order to facilitate trade confirmation processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/trade-confirmations/{tradeconfirmationmatchingid}/unmatched-market-trades-escalations/{unmatchedmarkettradeescalationid}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Execute</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Execute Transaction Confirmation/Affirmation Function

  **Documentation**

  This API path is used for updating an existing resource related to trade confirmation matching and transaction confirmation affirmation. It supports a bank's connection to a central market service for matching and confirming transactions, whether the bank is acting as a broker dealer or institutional investor. The PUT method is used to make updates to the specified resource identified by the trade confirmation matching ID and transaction confirmation affirmation ID.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Execute' could be:

'/trade-confirmations/{tradeconfirmationmatchingid}/transaction-affirmations/{transactionconfirmationaffirmationid}/execute' 

This name is more standardized and follows common REST conventions such as using lowercase letters, separating words with hyphens, and using resource-centric naming.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Execute</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Execute Transaction Reporting Function

  **Documentation**

  This BIAN API path allows the bank to update an existing resource related to Trade Confirmation Matching and Transaction Reporting. Specifically, it supports the bank's interaction with a central market matching and confirmation service when the bank is acting as a broker dealer or institutional investor. By executing this function, the bank can report and confirm transactions effectively within the market.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

'/trade-confirmations/{tradeconfirmationmatchingid}/transaction-reporting/{transactionreportingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Execute</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Execute Unmatched Market Trade Escalation Function

  **Documentation**

  This API path is used to update an existing unmatched market trade escalation function within the trade confirmation matching service of a bank. It supports the bank's interface with a central market matching and confirmation service when the bank is involved as a broker dealer or institutional investor. This function allows for the execution of specific actions related to unmatched market trades that need to be escalated for further processing or resolution.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be structured in a way that is clear, concise, and resource-centric. 

A suitable name for the path could be: 

'/trade-confirmations/{tradeconfirmationId}/unmatched-market-trades/{unmatchedmarkettradeId}/execute'

This path adheres to RESTful naming conventions by using lowercase letters, hyphens to separate words, and properly indicating the hierarchy of resources.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/Initiate</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Initiate Transaction Confirmation/Affirmation Function

  **Documentation**

  This API path allows the bank to initiate the confirmation or affirmation process for a trade transaction through a central market matching and confirmation service. It is used when the bank is acting as a broker dealer or institutional investor. By sending a POST request to this endpoint with the relevant trade confirmation matching ID, the bank can trigger the process of confirming or affirming the transaction details through the designated service.

  **Limitations**

  POST: Following REST best practices, the name of the path could be:

'/trade-confirmations/{tradeconfirmationmatchingid}/transaction-confirmation-affirmations/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/Initiate</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Initiate Transaction Reporting Function

  **Documentation**

  This BIAN API path allows a bank to initiate the transaction reporting function within the Trade Confirmation Matching service domain. This function facilitates communication with a central market matching and confirmation service, which is important for banks acting as broker dealers or institutional investors. By making a POST request to this API path with the appropriate trade confirmation matching ID, the bank can create a new resource to initiate transaction reporting activities related to trade confirmations in the financial markets.

  **Limitations**

  POST: In following REST best practices, a more appropriate name for the path '/TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/Initiate' could be:

'/trade-confirmations/{tradeconfirmationid}/reporting/transactions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/Initiate</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Initiate Unmatched Market Trade Escalation Function

  **Documentation**

  This API path allows the bank to initiate the unmatched market trade escalation function within the Trade Confirmation Matching service domain. It supports the bank's interface to a central market matching and confirmation service, regardless of whether the bank is acting as a broker dealer or institutional investor. By making a POST request to this API path with the necessary trade confirmation matching ID, the bank can create a new resource to escalate and resolve unmatched market trades efficiently.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

'/trade-confirmation-matching/{trade-confirmation-matching-id}/unmatched-market-trade-escalation/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Notify</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Notify Transaction Confirmation/Affirmation Function

  **Documentation**

  This API path is used for retrieving information related to transaction confirmation and affirmation in the context of trade confirmation matching. It enables a bank to interface with a central market matching and confirmation service, whether the bank is acting as a broker dealer or an institutional investor. By making a GET request to this path with specific trade confirmation matching and transaction confirmation affirmation IDs, the bank can receive information about the transaction confirmation or affirmation process.

  **Limitations**

  GET: Based on RESTful naming conventions, the recommended name for the path would be:

/TradeConfirmationMatchings/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmations/{transactionconfirmationaffirmationid}/Notifications

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Notify</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Notify Transaction Reporting Function

  **Documentation**

  This BIAN API path allows the bank to retrieve information related to trade confirmation matching and transaction reporting from a central market matching and confirmation service. It enables the bank to access details about a specific trade confirmation matching ID and transaction reporting ID to facilitate communication and processing related to trade confirmations in the financial market.

  **Limitations**

  GET: A potential name for the path could be:

`/trade-confirmations/{tradeconfirmation_id}/transaction-reports/{transactionreporting_id}/notify`

This name is descriptive, follows the RESTful convention of using lowercase letters and dashes instead of underscores for readability, and specifies the resource hierarchy in a clear manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Notify</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Notify Unmatched Market Trade Escalation Function

  **Documentation**

  This API path is used to retrieve information about notifying an unmatched market trade escalation within the Trade Confirmation Matching service domain. It supports the bank's connection to a central market matching and confirmation service, whether the bank is acting as a broker dealer or institutional investor. This function helps in managing and escalating unmatched trades in the market effectively.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/trade-confirmations/{tradeconfirmationmatchingid}/unmatched-market-trades/{unmatchedmarkettradeescalationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Request</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Request Transaction Confirmation/Affirmation Function

  **Documentation**

  This BIAN API path allows a bank to update an existing transaction confirmation or affirmation request within a central market matching and confirmation service. It supports the bank's interface for activities related to trade confirmation matching, regardless of whether the bank is acting as a broker dealer or institutional investor. The PUT method is used to update the resource, indicating a modification or change to the transaction confirmation or affirmation request.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Request

REST paths should be noun-centric and resource-oriented, using nouns to represent resources and sub-resources. The path should also be descriptive and reflect the hierarchy of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Request</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Request Transaction Reporting Function

  **Documentation**

  This BIAN API path allows the bank to update an existing transaction reporting request within the Trade Confirmation Matching service. It supports the bank's interaction with a central market matching and confirmation service, whether the bank is acting as a broker dealer or institutional investor. The PUT method is used to make updates to the transaction reporting request identified by the provided IDs.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/TradeConfirmations/{tradeconfirmationId}/TransactionReports/{transactionreportId}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Request</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Request Unmatched Market Trade Escalation Function

  **Documentation**

  This API path allows the bank to update an existing request for unmatched market trade escalation within the Trade Confirmation Matching service domain. It supports the bank's interaction with a central market matching and confirmation service, whether the bank is acting as a broker dealer or institutional investor.

  **Limitations**

  PUT: Based on REST best practices, the name for this path could be:

/TradeConfirmations/{tradeconfirmationID}/UnmatchedTrades/{unmatchedTradeID}/Escalations/{escalationID}/Request

This path is more clear and descriptive, following the resource naming conventions of a RESTful API.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Retrieve Transaction Confirmation/Affirmation Function

  **Documentation**

  This BIAN API path allows the bank to retrieve information related to transaction confirmation or affirmation from a central market matching and confirmation service. It supports the bank's interaction with this service whether the bank is acting as a broker dealer or institutional investor. By using this path with a specific trade confirmation matching ID and transaction confirmation affirmation ID, the bank can access details and statuses of transactions for matching and confirming trades in the market.

  **Limitations**

  GET: Based on REST best practices, the name for this path should be:

'/trade-confirmations/{tradeconfirmationId}/transaction-confirmations/{transactionconfirmationId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Retrieve Transaction Reporting Function

  **Documentation**

  This API path allows the bank to retrieve transaction reporting information from a central market matching and confirmation service. It is used when the bank is acting as a broker dealer or institutional investor. By making a GET request to this endpoint with the appropriate trade confirmation matching ID and transaction reporting ID, the bank can access and retrieve specific details related to transaction reporting within the context of trade confirmation matching activities.

  **Limitations**

  GET: A potential RESTful name for the given path could be:

GET /trade-confirmations/{tradeConfirmationId}/transactions/{transactionId}/reporting

This name follows the REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for resources. It also includes the necessary actions in the path to convey the purpose of retrieving trade transaction reporting data.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Retrieve Unmatched Market Trade Escalation Function

  **Documentation**

  This API path is used to retrieve information about an unmatched market trade escalation within the context of trade confirmation matching. It is part of a service that helps banks interface with a central market matching and confirmation service, whether they are acting as broker dealers or institutional investors. By making a GET request to this path with the specific IDs provided, users can access details related to unmatched market trade escalations.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be something like:

GET /trade-confirmations/{trade_confirmation_id}/unmatched-market-trades/{unmatched_market_trade_id}/escalations/{escalation_id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionConfirmationAffirmation/{transactionconfirmationaffirmationid}/Update</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Update Transaction Confirmation/Affirmation Function

  **Documentation**

  This API path allows the bank to update an existing transaction confirmation or affirmation within the Trade Confirmation Matching service. The bank can make changes or provide further details related to a specific trade confirmation or affirmation by using this API. This can be helpful for ensuring accuracy and completeness of trades processed through the central market matching and confirmation service.

  **Limitations**

  PUT: The name of the path should be:

`PATCH /trade-confirmations/{tradeconfirmationmatchingid}/transaction-confirmations/{transactionconfirmationaffirmationid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/TransactionReporting/{transactionreportingid}/Update</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Update Transaction Reporting Function

  **Documentation**

  This BIAN API path allows the bank to update the transaction reporting information related to trade confirmation matching. It supports the bank's communication with a central market matching and confirmation service, whether the bank is acting as a broker dealer or institutional investor. By using the PUT method, the bank can make changes to an existing resource for updating transaction reporting within the trade confirmation matching process.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

PUT /trade-confirmations/{tradeconfirmationId}/transaction-reporting/{transactionreportingId}

In this naming convention, we use all lowercase letters, separate words with hyphens for readability, and rename the path parameters to reflect the resource they represent.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradeConfirmationMatching/{tradeconfirmationmatchingid}/UnmatchedMarketTradeEscalation/{unmatchedmarkettradeescalationid}/Update</span></summary>

  **Description**

  This Service Domain supports the bank's interface to a central market matching and confirmation service whether the bank acts as broker dealer or institutional investor Update Unmatched Market Trade Escalation Function

  **Documentation**

  This API path allows the bank to update a specific unmatched market trade escalation function within the trade confirmation matching service. It is used when the bank is interfacing with a central market matching and confirmation service, whether it is acting as a broker dealer or institutional investor. By making a PUT request to this path with the relevant IDs, the bank can update the details and parameters of the unmatched market trade escalation function in order to ensure accurate and timely matching and confirmation of trades.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
```
PUT /trade-confirmations/{tradeconfirmationmatchingid}/unmatched-market-trades/{unmatchedmarkettradeescalationid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
