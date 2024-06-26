<h1 style='color:red;'>MarketOrderExecution</h1>

**BIAN Documentation:** [MarketOrderExecution v12](https://app.swaggerhub.com/apis/BIAN-3/MarketOrderExecution/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /MarketOrderExecution/Initiate</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. InCR Initiate a market trade

  **Documentation**

  This BIAN API path, /MarketOrderExecution/Initiate, allows users to initiate a market trade by creating a new resource. This service is responsible for booking securities transactions related to market orders or corporate actions on investment accounts. Users can specify the security name and quantity they wish to trade using this API.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/MarketOrderExecution/Initiate' could be simplified to '/market-order-executions'.RESTful URIs should be all lowercase, use hyphens to separate words, and represent resources (nouns) rather than actions (verbs).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketOrderExecution/{marketorderexecutionid}/Update</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. UpCR Update details on an active market trade request

  **Documentation**

  This API path allows updating details related to an active market trade request within the Market Order Execution Service Domain. It specifically pertains to modifying information such as security name and quantity associated with the trade request identified by "marketorderexecutionid." This functionality enables users to make changes to the specific details of a market order execution, ensuring accuracy and alignment with the desired transaction parameters.

  **Limitations**

  PUT: The appropriate name for the path '/MarketOrderExecution/{marketorderexecutionid}/Update' while following REST best practices would be:

PUT /MarketOrderExecutions/{marketorderexecutionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketOrderExecution/{marketorderexecutionid}/Request</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. RqCR Request manual intervention to an active market trade

  **Documentation**

  This API path allows users to send a request for manual intervention to an existing market order execution. For example, if there is a need to change or adjust a market trade that is currently active, this API can be used to request human intervention to make the necessary updates. It relates to the booking of securities transactions on investment accounts involving security names and quantities.

  **Limitations**

  PUT: Based on REST best practices, a more suitable name for the path '/MarketOrderExecution/{marketorderexecutionid}/Request' could be '/market-order-executions/{marketorderexecutionid}/requests'. This name reflects the use of lowercase letters, hyphens for word separation, and plural nouns for collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrderExecution/{marketorderexecutionid}/Retrieve</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. ReCR Retrieve details about a market trade

  **Documentation**

  This API path allows you to retrieve details about a specific market order execution by providing the market order execution ID. It provides information related to securities transactions such as the security name and quantity booked on investment accounts resulting from market orders or corporate actions. Essentially, it helps you access information about a trade that has been executed in the market.

  **Limitations**

  GET: If the path '/MarketOrderExecution/{marketorderexecutionid}/Retrieve' followed REST best practices, it would be named as:

'/market-order-executions/{marketorderexecutionid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketOrderExecution/{marketorderexecutionid}/Quote/Initiate</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. InBQ Obtain a trading quote for a proposed order

  **Documentation**

  This BIAN API path allows users to initiate a trading quote request for a proposed market order execution. It is used to obtain pricing information for a specific security and quantity in order to facilitate the booking of securities transactions on investment accounts. By sending a POST request to this path with the appropriate parameters, users can receive a quote that will help them make informed decisions when executing the market order.

  **Limitations**

  POST: The name for the path '/MarketOrderExecution/{marketorderexecutionid}/Quote/Initiate' if it followed REST best practices could be:

'/market-order-executions/{marketorderexecutionid}/quotes/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrderExecution/{marketorderexecutionid}/Quote/{quoteid}/Retrieve</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. ReBQ Retrieve details about quotation activity

  **Documentation**

  This API path allows you to retrieve details about quotation activity related to a specific market order execution and quote ID. In simpler terms, it helps you to get information about the buying or selling of securities, such as the security name and quantity, that occurred as a result of a market order or other actions on investment accounts.

  **Limitations**

  GET: A recommended name for this endpoint following REST best practices could be:

GET /market-order-executions/{marketorderexecutionid}/quotes/{quoteid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketOrderExecution/{marketorderexecutionid}/TradeInitiation/Initiate</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. InBQ Initiate a market trade

  **Documentation**

  This API path allows you to initiate a market trade for a specific market order execution. It creates a new resource for the trade initiation process within the Market Order Execution Service Domain. By providing the necessary input parameters such as the market order execution ID, you can trigger the booking of securities transactions on investment accounts, specifying the security name and quantity involved in the trade. This API essentially facilitates the execution of market orders or other relevant transactions related to securities trading within the specified investment accounts.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be structured in a clear and concise manner. A suggestion for naming the path could be:

```
/market-order-executions/{marketorderexecutionid}/trade-initiation/initiate
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrderExecution/{marketorderexecutionid}/TradeInitiation/{tradeinitiationid}/Retrieve</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. ReBQ Retrieve details about a market trade

  **Documentation**

  This API path allows you to retrieve details about a market trade within the Market Order Execution service domain. Specifically, you can retrieve information about a particular market order execution and trade initiation by providing the relevant IDs in the URL. This includes data such as the security name and quantity involved in the transaction.

  **Limitations**

  GET: Based on REST best practices, the appropriate name for the path would be:

'/market-order-executions/{marketorderexecutionid}/trade-initiations/{tradeinitiationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketOrderExecution/{marketorderexecutionid}/Position/{positionid}/Request</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. RqBQ Request manual intervention for position management

  **Documentation**

  This API path is used to request manual intervention for position management within the Market Order Execution service domain. It allows updating an existing resource related to a specific market order execution and position by sending a PUT request. The purpose is to handle securities transactions like market orders or corporate actions on investment accounts, specifying details such as security name and quantity. This feature enables users to trigger manual intervention when needed for managing positions effectively.

  **Limitations**

  PUT: A RESTful path should be designed to be clear, concise, and descriptive. Following REST best practices, the name of the path could be:

'/market-order-executions/{marketorderexecutionid}/positions/{positionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrderExecution/{marketorderexecutionid}/Position/{positionid}/Retrieve</span></summary>

  **Description**

  The Market Order Execution Service Domain is responsible for the booking of securities transactions (e.g. resulting from market orders or some types of corporate actions) on investment accounts, so in terms of security name plus quantity. ReBQ Retrieve details about position wholesale trading activity

  **Documentation**

  This API path allows users to retrieve details about position wholesale trading activity associated with a specific market order execution and position ID. It is part of the Market Order Execution Service, which is responsible for recording securities transactions related to market orders or corporate actions on investment accounts. The information retrieved includes the security name and quantity involved in the trading activity.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

/MarketOrderExecutions/{marketorderexecutionid}/Positions/{positionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
