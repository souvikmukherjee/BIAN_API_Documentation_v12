<h1 style='color:red;'>MarketOrder</h1>

**BIAN Documentation:** [MarketOrder v12](https://app.swaggerhub.com/apis/BIAN-3/MarketOrder/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /MarketOrder/Initiate</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. InCR Initiate a market order

  **Documentation**

  This BIAN API path allows a user to initiate a market order, which is a request to buy or sell securities. The API records this instruction and monitors the order until it is executed. It also provides feedback to the user about the status of the order execution.

  **Limitations**

  POST: Following REST best practices, the path '/MarketOrder/Initiate' should ideally be renamed to a more resource-oriented and URL-friendly format. For instance, it could be renamed to something like '/market-orders' to better represent the resource that is being interacted with.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketOrder/{marketorderid}/Update</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. UpCR Update details on an active market order

  **Documentation**

  This BIAN API path allows you to update the details of an active market order identified by its unique market order ID. By sending a PUT request to this path with the required information, you can modify specific attributes or parameters of the market order such as the type of securities being bought or sold, quantity, or any other relevant details. This functionality helps keep the market order information accurate and up to date during its lifetime until execution.

  **Limitations**

  PUT: A more appropriate name for the path '/MarketOrder/{marketorderid}/Update' following REST best practices could be  '/market-orders/{marketorderid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrder/{marketorderid}/Retrieve</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. ReCR Retrieve details about a market order

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific market order identified by its unique market order ID. The market order is an instruction from a customer or their representative to buy or sell securities. By using this API, you can get information about the status and execution of the market order, providing transparency and updates to the requestor regarding the order's progress.

  **Limitations**

  GET: The path '/MarketOrders/{marketorderid}' would be a better option, following REST best practices. This path reflects the resource being retrieved (market order) at a specific identifier (marketorderid).

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrder/{marketorderid}/Compliance/{complianceid}/Retrieve</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. ReBQ Retrieve details about a market order compliance check

  **Documentation**

  This BIAN API path allows you to retrieve details about a compliance check related to a specific market order. It provides information on whether the market order meets regulatory compliance requirements. The requestor can use this endpoint to get insights into the compliance status of a particular market order by specifying the unique market order ID and compliance ID.

  **Limitations**

  GET: The name of the path '/MarketOrder/{marketorderid}/Compliance/{complianceid}/Retrieve' that follows REST best practices could be something like '/market-orders/{marketOrderId}/compliance/{complianceId}'. 

In RESTful API design, it is recommended to use all lowercase letters, use hyphens to separate words in path segments, and use nouns that represent resources rather than actions. Additionally, it is common practice to use plural nouns to represent collections of resources. 

By following

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrder/{marketorderid}/FundingCheck/{fundingcheckid}/Retrieve</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. ReBQ Retrieve details about a market order funding check

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific funding check associated with a market order. It enables you to access information related to the financial verification process that has been conducted for a particular market order. By using this API, you can retrieve specific details about the funding check, such as its status, results, and any relevant information needed for the completion of the market order transaction.

  **Limitations**

  GET: The appropriate name for the path would be:

'/market-orders/{marketorderid}/funding-checks/{fundingcheckid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrder/{marketorderid}/CustomerProcessing/{customerprocessingid}/Retrieve</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. ReBQ Retrieve details about customer specific processing for a market order

  **Documentation**

  This BIAN API path allows you to retrieve details about customer-specific processing for a market order. It involves providing the market order ID and the customer processing ID as part of the request to retrieve information related to how a customer's instruction to buy or sell securities is being handled throughout its lifetime. The API ensures transparency by reporting back to the requester on the execution of the order.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/market-orders/{marketorderid}/customer-processing/{customerprocessingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketOrder/{marketorderid}/TradeInitiation/{tradeinitiationid}/Retrieve</span></summary>

  **Description**

  Market Order records an instruction from a customer or his or her representative to buy or sell securities. It follows the order during its lifetime and reports back to the requestor on the execution. ReBQ Retrieve details about a market order's market trade

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific market order's trade initiation. This means you can access details about a customer's instruction to buy or sell securities, including how the order is being carried out and any reports on its execution. It provides a way to track and monitor the progress of a market order throughout its lifecycle.

  **Limitations**

  GET: The name of the path should be: 

```
/MarketOrders/{marketOrderId}/TradeInitiations/{tradeInitiationId}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
