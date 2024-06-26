<h1 style='color:red;'>CardeCommerceGateway</h1>

**BIAN Documentation:** [CardeCommerceGateway v12](https://app.swaggerhub.com/apis/BIAN-3/CardeCommerceGateway/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardeCommerceGateway/{cardecommercegatewayid}/CardTransaction/Initiate</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. InBQ Initiate a card transaction (initiated at merchant location)

  **Documentation**

  This API path `/CardeCommerceGateway/{cardecommercegatewayid}/CardTransaction/Initiate` is used to initiate a card transaction in an e-commerce gateway service. It allows a merchant to start the process of processing a financial transaction using a card payment method. The API handles tasks such as verifying the transaction, obtaining authorization, and capturing the funds from the customer's account. This enables the merchant to securely process payments in an online store.

  **Limitations**

  POST: The name of the path you mentioned should ideally be:

/carde-commerce-gateways/{carde-commerce-gateway-id}/card-transactions/initiate

This name follows REST best practices by using lowercase letters, separating words with dashes, and clearly indicating the resource hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardeCommerceGateway/{cardecommercegatewayid}/CardTransaction/{cardtransactionid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. UpBQ Update details of a card transaction

  **Documentation**

  This BIAN API path is used to update the details of a card transaction within the Card eCommerce Gateway service domain. By making a PUT request to this endpoint with the specific IDs of the Card eCommerce Gateway and the card transaction, you can modify and update information related to the transaction, such as authentication, authorization, and financial capture details. It allows for the management and adjustment of specific card transactions within the e-commerce system.

  **Limitations**

  PUT: The name of the path should be:

'/carde-commerce-gateways/{carde-commerce-gateway-id}/card-transactions/{card-transaction-id}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardeCommerceGateway/{cardecommercegatewayid}/CardTransaction/{cardtransactionid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. ReBQ Retrieve details about a card transaction

  **Documentation**

  This API path allows you to retrieve details about a specific card transaction within the Card eCommerce Gateway service domain. By providing the ID of the Card eCommerce Gateway and the ID of the specific card transaction, you can access information related to the authentication, authorization, and capture of financial transactions processed through the e-commerce platform.

  **Limitations**

  GET: The path should be named as follows considering REST best practices:  

GET /cardecommercegateways/{cardecommercegatewayid}/cardtransactions/{cardtransactionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionBatch/{transactionbatchid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. UpBQ Update details of a batch of card transactions

  **Documentation**

  This API path allows you to update the details of a batch of card transactions within the Card eCommerce Gateway service domain. Specifically, it enables you to make changes to information related to a specific transaction batch identified by the transactionbatchid, using the PUT method which updates an existing resource. This could involve modifying, correcting, or adding information regarding authentication, authorization, and financial transaction capture processes for e-commerce transactions managed by the Card eCommerce Gateway service.

  **Limitations**

  PUT: The name of the path should be:
'/carde-commerce-gateways/{cardecommercegatewayid}/transaction-batches/{transactionbatchid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionBatch/Initiate</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. InBQ Initiate a batch of card transaction (initiated at merchant location)

  **Documentation**

  This API path allows you to initiate a batch of card transactions for e-commerce purposes. It is specifically used for authentication, authorization, and capturing of financial transactions. When utilized, it triggers the process of starting a group of card transactions that originate from a merchant location.

  **Limitations**

  POST: The name of the path should be:

```
/CardeCommerceGateways/{cardecommercegatewayid}/TransactionBatches/Initiate
``` 

This name follows REST best practices by using plural nouns for resource names, using lowercase letters, and utilizing camel case for multi-word resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionBatch/{transactionbatchid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. ReBQ Retrieve details about a batch of card transactions

  **Documentation**

  This API path allows you to retrieve details about a specific batch of card transactions within the Card eCommerce Gateway service domain. By providing the unique identifiers for the Card eCommerce Gateway and the transaction batch, you can access information about the transactions processed, including authentication, authorization, and financial capture details. This API helps you to gather specific data related to a batch of card transactions for further analysis or reconciliation purposes.

  **Limitations**

  GET: A more suitable name for the given path '/CardeCommerceGateway/{cardecommercegatewayid}/TransactionBatch/{transactionbatchid}/Retrieve' while adhering to REST best practices could be:

GET /carde-commerce-gateways/{cardecommercegatewayid}/transaction-batches/{transactionbatchid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardeCommerceGateway/{cardecommercegatewayid}/CardAuthentication/Initiate</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. InBQ Initiate card authentication (routed to issuing bank)

  **Documentation**

  This API path is used to initiate the authentication process for a card transaction in an e-commerce gateway system. When a request is made to this path with a specific card e-commerce gateway ID, a new authentication process is triggered, which is then routed to the issuing bank for verification. This step is crucial for ensuring the security and validity of the financial transaction being processed.

  **Limitations**

  POST: Based on REST best practices, the recommended name for the path '/CardeCommerceGateway/{cardecommercegatewayid}/CardAuthentication/Initiate' could be simplified to be more resource-centric and easier to understand. 

A more RESTful path name could be '/carde-commerce-gateways/{gatewayId}/card-authentications/initiate', where 'gatewayId' is used instead of 'cardecommercegatewayid' to convey the resource being accessed, and 'card-authentications/init

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardeCommerceGateway/{cardecommercegatewayid}/CardAuthentication/{cardauthenticationid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. UpBQ Update details of a card transaction used in authentication

  **Documentation**

  This API path allows you to update the details of a card transaction that is used for authentication within the card e-commerce gateway system. By making a PUT request to this path with the appropriate IDs, you can modify specific information related to the card authentication process, such as transaction details or authentication data. This helps to ensure that the e-commerce transactions are securely processed and authorized for financial transactions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be structured as follows: 

'/card-e-commerce-gateway/{cardecommercegatewayid}/card-authentication/{cardauthenticationid}'

It is recommended to use lowercase letters, hyphens to separate words, and plurals for resources. Make sure that the resource names are clear and concise to improve readability and maintainability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardeCommerceGateway/{cardecommercegatewayid}/CardAuthentication/{cardauthenticationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. ReBQ Retrieve details about a card authentication

  **Documentation**

  This API path allows you to retrieve details about a specific card authentication transaction within the Card eCommerce Gateway service domain. By providing the relevant IDs (cardecommercegatewayid and cardauthenticationid), you can access information about the authentication process for a particular card used in an e-commerce transaction. This API helps you gather data related to card verification and authorization steps for financial transactions.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for this path could be '/carde-commerce-gateways/{carde-commerce-gateway-id}/card-authentications/{card-authentication-id}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionAuthorization/Initiate</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. InBQ Initiate card transaction authorization (routed to issuing bank)

  **Documentation**

  This API path is used to initiate the authorization process for a card transaction in the e-commerce gateway system. When a new transaction needs to be authorized, this API call will be made to send the transaction details to the issuing bank for approval. This is a crucial step in the process of processing financial transactions securely and efficiently.

  **Limitations**

  POST: The name of the path should be:

'/card-commerce-gateways/{card-commerce-gateway-id}/transactions/authorizations/initiate'

Following REST best practices, the path uses lowercase letters and dashes to separate words. The path reflects a hierarchical structure, with resources ('card commerce gateways' and 'transactions') represented as nouns, and actions ('authorizations' and 'initiate') as verbs. The path parameters are enclosed in curly braces.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionAuthorization/{transactionauthorizationid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. UpBQ Update details of a card transaction used for authorization

  **Documentation**

  This API path allows you to update the details of a card transaction that was used for authorization in an e-commerce gateway system. By making a PUT request to this endpoint with the specified IDs, you can modify information related to the transaction such as card details, amounts, and other relevant data. This update action helps to ensure that accurate information is maintained for the authorization process in e-commerce transactions.

  **Limitations**

  PUT: The name of the path should be:

'/carde-commerce-gateway/{carde-commerce-gateway-id}/transaction-authorization/{transaction-authorization-id}/update'

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and to use singular nouns for resource names. These conventions help make the URL more readable and user-friendly.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardeCommerceGateway/{cardecommercegatewayid}/TransactionAuthorization/{transactionauthorizationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of e-commerce transactions for authentication, authorization and capture of the financial transactions. ReBQ Retrieve details about a card transaction authorization

  **Documentation**

  This API path allows you to retrieve details about a specific card transaction authorization within the Card eCommerce Gateway service domain. By providing the IDs for the Card eCommerce Gateway and the transaction authorization, you can retrieve information related to the authentication, authorization, and capture of financial transactions associated with that particular transaction. Essentially, this API path facilitates access to specific details about a card transaction authorization for e-commerce processing.

  **Limitations**

  GET: If the path '/CardeCommerceGateway/{cardecommercegatewayid}/TransactionAuthorization/{transactionauthorizationid}/Retrieve' were to follow REST best practices, it could be named as:

GET /carde-commerce-gateways/{cardecommercegatewayid}/transaction-authorizations/{transactionauthorizationid}

Here are the key changes made to align with REST best practices:
- Lowercased the entire path for consistency
- Replaced camel case with kebab case for readability
- Simplified the resource names

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
