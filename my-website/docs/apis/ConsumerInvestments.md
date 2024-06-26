<h1 style='color:red;'>ConsumerInvestments</h1>

**BIAN Documentation:** [ConsumerInvestments v12](https://app.swaggerhub.com/apis/BIAN-3/ConsumerInvestments/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ConsumerInvestments/Initiate</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution InCR Initiate a consumer securities order

  **Documentation**

  This API path, /ConsumerInvestments/Initiate, allows users to initiate a request to trade securities through the consumer front-end. The request will be processed for market execution by blocking or netting trades. This means that multiple trades may be combined for efficiency before being executed in the market.

  **Limitations**

  POST: A common practice in REST API design is to use nouns to represent resources and actions as verbs. In this case, the path '/ConsumerInvestments/Initiate' suggests an action being taken on a resource related to consumer investments. Following REST best practices, the name of the path could be updated to better represent a resource. For example, a more RESTful approach could be to rename the path to '/consumer-investment-initiations' to emphasize the resource being manipulated ('consumer investment initiations'). The

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerInvestments/{consumerinvestmentsid}/Update</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution UpCR Update details on an active consumer securities order

  **Documentation**

  This BIAN API path allows you to update details on an active consumer securities order. It is used for handling consumer front-end trading requests, which are usually grouped together for market execution. By making a PUT request to this path with the appropriate data, you can modify specific information related to a consumer's investment order.

  **Limitations**

  PUT: The name of the path should be:

'/consumer-investments/{consumerInvestmentsId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerInvestments/{consumerinvestmentsid}/Retrieve</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution ReCR Retrieve details about a consumer securities order

  **Documentation**

  This BIAN API path allows you to retrieve details about a consumer securities order identified by a specific consumer investments ID. It is designed to handle trading requests from consumers, which are usually combined or grouped together for market execution. The API provides a way to access information about individual consumer securities orders, helping to facilitate and manage consumer investment activities.

  **Limitations**

  GET: A suitable name for the path '/ConsumerInvestments/{consumerinvestmentsid}/Retrieve' while following REST best practices could be:

GET /consumer-investments/{consumerinvestmentsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerInvestments/{consumerinvestmentsid}/Quote/{quoteid}/Retrieve</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution ReBQ Retrieve bank quote for a security

  **Documentation**

  This API path is used to retrieve bank quotes for a security within the context of consumer front-end trading requests. The consumer investments system will typically block or net these requests for market execution. The endpoint allows you to retrieve specific information about a bank quote related to a security for a particular consumer investment.

  **Limitations**

  GET: The name of the path should be: `/consumer-investments/{consumerinvestmentsid}/quotes/{quoteid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerInvestments/{consumerinvestmentsid}/Compliance/{complianceid}/Retrieve</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution ReBQ Retrieve details about a consumer securities order compliance check

  **Documentation**

  This API path retrieves details about a consumer securities order compliance check within the Consumer Investments system. It handles front-end trading requests from consumers, which are usually blocked or netted for market execution. The purpose is to provide information regarding the compliance status of a specific securities order related to a particular consumer investment.

  **Limitations**

  GET: A more RESTful naming convention for the path could be:

'/consumer-investments/{consumerinvestmentsid}/compliance/{complianceid}/retrieve'

In RESTful naming conventions:
- Use lowercase letters
- Separate words with hyphens for readability and consistency
- Avoid using all uppercase letters or underscores

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerInvestments/{consumerinvestmentsid}/FundingCheck/{fundingcheckid}/Retrieve</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution ReBQ Retrieve details about a funding check for a consumer securities order

  **Documentation**

  This API path allows you to retrieve details about a funding check for a consumer securities order within the Consumer Investments module. It is designed to handle trading requests from consumers, specifically providing information related to funding checks for securities orders. This information may be important for processing consumer transactions and ensuring that funds are available for the securities being traded.

  **Limitations**

  GET: The name of the path should be: 

/ConsumerInvestments/{consumerinvestmentsid}/FundingCheck/{fundingcheckid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerInvestments/{consumerinvestmentsid}/OrderInitiation/{orderinitiationid}/Retrieve</span></summary>

  **Description**

  Handle the consumer front-end trading requests. These will typically be blocked/netted for market execution ReBQ Retrieve details about a consumer securities order

  **Documentation**

  This API path is designed to retrieve details about a consumer securities order within the context of consumer front-end trading requests. It specifically focuses on retrieving information related to a specific consumer investments ID and order initiation ID. The purpose of this API is to provide access to specific details about a consumer's securities order, which are usually processed for market execution after being blocked or netted.

  **Limitations**

  GET: A suitable name for this path following REST best practices would be:

'/consumer-investments/{consumerinvestmentsid}/order-initiation/{orderinitiationid}/retrieve'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
