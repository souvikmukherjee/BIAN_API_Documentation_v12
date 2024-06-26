<h1 style='color:red;'>PositionKeeping</h1>

**BIAN Documentation:** [PositionKeeping v12](https://app.swaggerhub.com/apis/BIAN-3/PositionKeeping/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PositionKeeping/Initiate</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems InCR Initiate a position keeping transaction log

  **Documentation**

  This API path allows you to create a new entry in the financial transaction log used for keeping track of various transactions related to financial positions. Once transactions are reconciled, they will be recorded in this log before being posted to the accounting systems.

  **Limitations**

  POST: If following REST best practices, the name of the path '/PositionKeeping/Initiate' could be simplified to something that more accurately represents the resource being accessed. You could rename it to '/position-keeping' or '/position-keeping/initiate'. By using clear and descriptive resource names without verbs, it better aligns with REST principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PositionKeeping/{positionkeepingid}/Update</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems UpCR Update details for an active financial transaction log, including reflecting an account block

  **Documentation**

  This API path allows you to update details for an active financial transaction log within the Position Keeping service domain. Specifically, you can make changes to the transaction log identified by {positionkeepingid} by reflecting an account block or any other necessary updates. This service is important for maintaining accurate financial records and supporting financial transactions that will be later posted to accounting systems.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/PositionKeeping/{positionkeepingid}/Update' could be:

PUT /PositionKeeping/{positionkeepingid}

This path follows the convention of using the HTTP method PUT to update a specific resource identified by its unique identifier (positionkeepingid) within the '/PositionKeeping' resource collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PositionKeeping/{positionkeepingid}/Control</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems CoCR Control the processing of the log

  **Documentation**

  This API path allows you to update or control the processing of a financial transaction log within the Position Keeping service domain. It is used to manage and reconcile financial transactions, ensuring that they are accurately recorded and then posted to accounting systems. By using this PUT method on the specific position keeping ID, you can modify or control how the log is processed to maintain accurate financial records.

  **Limitations**

  PUT: The name of the path should be: `/position-keeping/{positionkeepingid}/control` 

Following REST best practices, the path should be in lowercase letters with words separated by hyphens, to improve readability and maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PositionKeeping/{positionkeepingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems ReCR Retrieve information about the log

  **Documentation**

  This API path allows you to retrieve information about a specific financial transaction log that is used for keeping track of various transactions related to financial positions. The log is crucial for supporting production activities. Once transactions are reconciled, they are then transferred to accounting systems for further processing. By using this API, you can access details and data stored within the financial transaction log identified by the specified position-keeping ID.

  **Limitations**

  GET: Based on REST best practices, the name of the path would ideally be structured to indicate the specific resource being retrieved. A suitable name could be '/PositionKeeping/{positionkeepingid}', since it already implies retrieval by including the resource identifier 'positionkeepingid'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PositionKeeping/{positionkeepingid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Update</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems UpBQ Update details of a captured financial transaction

  **Documentation**

  This API path allows you to update the details of a captured financial transaction within the Position Keeping service domain. The financial transaction log is maintained to support production activities, and once transactions have been reconciled, they are sent to accounting systems for further processing. By using this API, you can make changes or updates to specific financial transaction details that have been captured within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/PositionKeeping/{positionkeepingid}/FinancialTransactionCapture/{financialtransactioncaptureid} 

This path clearly represents the hierarchy and relationship between the resources while also avoiding unnecessary details like the "Update" keyword, which can be implied by using appropriate HTTP methods like PUT or PATCH.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PositionKeeping/{positionkeepingid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Capture</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems CaBQ Capture details of a financial transaction in the log

  **Documentation**

  This API path allows you to update details of a financial transaction within a financial transaction log in the Position Keeping service domain. It is used to capture specific information related to a financial transaction identified by the positionkeepingid and financialtransactioncaptureid. This update is part of the process to maintain accurate transaction records for production purposes before posting reconciled transactions to the accounting systems.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path would be:

```
/position-keeping/{positionkeepingid}/financial-transaction-capture/{financialtransactioncaptureid}/capture
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PositionKeeping/{positionkeepingid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a financial transaction log to support production. Reconciled financial transactions are subsequently posted to the accounting systems ReBQ Retrieve details of financial transactions captured in the log

  **Documentation**

  This API path allows you to retrieve details of financial transactions that have been captured in the financial transaction log within the Position Keeping service domain. The transactions are recorded to support production processes. Once the transactions are reconciled, they are posted to accounting systems. By accessing this API endpoint with specific position keeping ID and financial transaction capture ID, you can retrieve information about these captured financial transactions for further analysis or processing.

  **Limitations**

  GET: Based on REST best practices, the path '/PositionKeeping/{positionkeepingid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Retrieve' could be named as:

GET /position-keeping/{positionkeepingid}/financial-transaction-capture/{financialtransactioncaptureid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
