<h1 style='color:red;'>PaymentOrder</h1>

**BIAN Documentation:** [PaymentOrder v12](https://app.swaggerhub.com/apis/BIAN-3/PaymentOrder/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PaymentOrder/Initiate</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate InCR Initiate a payment order procedure

  **Documentation**

  This API path is used to initiate a payment order within a bank's system. It involves processing funds transfers, conducting bank and regulatory checks on the parties involved in the transaction, and applying their payment preferences as necessary. The purpose is to kickstart the process of transferring funds between accounts following the established rules and regulations, ensuring that payments are processed accurately and securely.

  **Limitations**

  POST: Following REST best practices, the name of the path should ideally be something more resource-oriented and descriptive. One suggestion could be '/payment-orders/initiate', which clearly indicates that a payment order resource is being initiated. Remember to use lowercase letters, hyphens for multi-word URLs, and plural nouns for consistency in RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentOrder/{paymentorderid}/Update</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate UpCR Update details of a payment order instruction

  **Documentation**

  This API path allows you to update the details of a payment order instruction by providing the payment order ID in the URL and sending the updated information in the request body. It is used for making changes to an existing payment order, such as updating payment preferences or other related details within the bank's system.

  **Limitations**

  PUT: A suitable name for the path '/PaymentOrder/{paymentorderid}/Update' that follows REST best practices could be:

PUT /PaymentOrder/{paymentorderid}

This follows the REST convention of using HTTP methods to perform actions on resources. In this case, the PUT method is used to update an existing payment order identified by its paymentorderid.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentOrder/{paymentorderid}/Retrieve</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate ReCR Retrieve details about a payment order instruction

  **Documentation**

  This API path allows you to retrieve details about a specific payment order instruction identified by its unique payment order ID. It provides information related to the bank-side processing of funds transfers, including checks on involved parties and the application of payment preferences. In simpler terms, you can use this API to get specific information about a payment order being processed by the bank.

  **Limitations**

  GET: Based on RESTful best practices, a suitable name for the path '/PaymentOrder/{paymentorderid}/Retrieve' would be:

GET /PaymentOrders/{paymentorderid} 

This name follows the convention of using nouns for resource paths and using HTTP methods to clearly indicate the action to retrieve a specific payment order.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentOrder/{paymentorderid}/OrderConfirmation/{orderconfirmationid}/Retrieve</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate ReBQ Retrieve details about a payment order confirmation process

  **Documentation**

  This API path allows you to retrieve details about a specific payment order confirmation process. It is related to the bank processing of funds transfers and involves checking the necessary bank and regulatory requirements for the parties involved in the transaction. You can use this API to access information about a particular order confirmation associated with a payment order.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/payment-orders/{paymentOrderId}/order-confirmations/{orderConfirmationId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentOrder/{paymentorderid}/ExecutionInitiation/{executioninitiationid}/Control</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate CoBQ Control the payment execution processing

  **Documentation**

  This API path is used to update and control the execution initiation of a payment order within the bank's funds transfer processing system. It involves applying necessary bank and regulatory checks on the involved parties and implementing their payment preferences as needed. The API allows for managing and controlling the processing of payment orders to ensure they are executed correctly and in compliance with relevant regulations and customer preferences.

  **Limitations**

  PUT: The name of the path should be:

`/payment-orders/{paymentorderid}/execution-initiations/{executioninitiationid}/control`

Following REST best practices, the path should use lowercase letters and separate words with hyphens for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentOrder/{paymentorderid}/ExecutionInitiation/{executioninitiationid}/Retrieve</span></summary>

  **Description**

  This service domain handles the bank-side processing of funds transfers, making the necessary bank and regulatory checks on the involved parties and applying their payment preferences where appropriate ReBQ Retrieve details about the payment execution processing

  **Documentation**

  This API path allows you to retrieve details about the payment execution processing. Specifically, you can retrieve information related to a specific payment order and its execution initiation. This includes details about funds transfers, bank and regulatory checks, involved parties, and payment preferences that have been applied.

  **Limitations**

  GET: The name of the path should be:

`GET /payment-orders/{paymentorderid}/execution-initiations/{executioninitiationid}`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
