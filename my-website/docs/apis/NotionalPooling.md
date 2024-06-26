<h1 style='color:red;'>NotionalPooling</h1>

**BIAN Documentation:** [NotionalPooling v12](https://app.swaggerhub.com/apis/BIAN-3/NotionalPooling/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/Control</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Control Notional Pooling Facility

  **Documentation**

  This BIAN API path allows the user to update the control settings for a specific Notional Pooling facility identified by the "notionalpoolingid". Notional pooling is a financial service that enables corporate customers with multiple active accounts to combine their credit and debit balances into one centralized position. This helps in reducing interest costs, streamlining cash management, and maintaining some level of individual control over the accounts involved in the pooling.

  **Limitations**

  PUT: A possible name for the path could be '/notional-pooling/{notionalpoolingid}/controls'. 

Remember to use lowercase letters, separate words with hyphens, and use plural nouns for consistency with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/Exchange</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Exchange Notional Pooling Facility

  **Documentation**

  This API path "/NotionalPooling/{notionalpoolingid}/Exchange" allows you to update an existing notional pooling facility identified by its unique ID. Notional pooling is a cash management technique that enables a corporate customer with multiple accounts to combine the balances of those accounts into a single consolidated view. This helps in efficient liquidity management, savings on interest expenses, and simplifying cash flow monitoring while still maintaining control over individual accounts. The "Exchange" operation in this context likely refers to making changes or updates to the settings or features of the notional pooling facility.

  **Limitations**

  PUT: The name of the path should be:

/NotionalPooling/{notionalpoolingid}/Exchanges

Make sure to use the plural "Exchanges" since it is recommended to use plural nouns for consistency in REST API naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /NotionalPooling/Initiate</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Initiate Notional Pooling Facility

  **Documentation**

  This API path enables users to initiate a notional pooling facility, which allows corporate customers with multiple active accounts to combine their credit and debit balances into a single liquidity position. By doing this, they can reduce interest expenses, streamline cash management processes, and maintain some level of control over the individual accounts involved in the pooling arrangement.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
POST /notional-pooling
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/Notify</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Notify Notional Pooling Facility

  **Documentation**

  This BIAN API path allows you to retrieve information about a Notional Pooling facility by providing the unique identifier (notionalpoolingid) associated with it. Notional pooling is a financial process that enables a corporate customer with multiple accounts to combine their credit and debit balances into one centralized pool. This helps the customer to simplify cash management, reduce interest expenses, and maintain some degree of autonomy over the individual accounts. By using this API, you can access details about the Notional Pooling facility, such as its configuration, status, and any relevant information related to the pooling of funds across accounts.

  **Limitations**

  GET: The name of the path should be:

```
/NotionalPooling/{notionalpoolingid}/Notifications
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/Request</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Request Notional Pooling Facility

  **Documentation**

  This API path allows a corporate customer to request a notional pooling facility that enables them to consolidate credit and debit balances from multiple accounts into a single centralized position. This helps in reducing interest expenses, streamlining cash management, and maintaining some level of autonomy over individual accounts.

  **Limitations**

  PUT: The name of the path should follow RESTful guidelines and be descriptive of the resource it represents. A possible name for this path could be "/notional-pooling/{notionalpoolingid}/requests". This conveys that it is a sub-resource of the notional pooling resource, specifically representing requests related to a particular notional pooling ID. By using lowercase letters, dashes for readability, and plural form for consistency with REST conventions, this naming convention adheres to best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/Retrieve</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Retrieve Notional Pooling Facility

  **Documentation**

  This API path allows you to retrieve information about a Notional Pooling facility identified by a specific "notionalpoolingid". Notional pooling is a financial service that enables corporate customers with multiple active accounts to combine their credit and debit balances. This helps in centralizing liquidity management, reducing interest expenses, simplifying cash management, and allowing some level of local control over individual accounts. By using this API, you can access details of a particular Notional Pooling arrangement.

  **Limitations**

  GET: Based on REST best practices, a potential name for the path '/NotionalPooling/{notionalpoolingid}/Retrieve' could be:

GET /NotionalPooling/{notionalpoolingid}

This name follows the typical REST convention of using HTTP methods in the path name to indicate the action being performed. The GET method is commonly used to retrieve a specific resource, which aligns with the action being described in this path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/Update</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Update Notional Pooling Facility

  **Documentation**

  This BIAN API path allows you to update an existing notional pooling facility. Notional pooling is a feature that enables a corporate customer with multiple active accounts to combine the credit and debit balances from these accounts. By updating the notional pooling facility, the customer can manage their liquidity position more effectively, reduce interest expenses, streamline cash management processes, and still maintain some level of control over the individual accounts involved.

  **Limitations**

  PUT: The name of the path should be `/notional-pooling/{notionalpoolingid}` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Exchange</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Exchange Notional Account Arrangement Fulfillment

  **Documentation**

  This API path allows you to update an existing notional account arrangement within a notional pooling setup. Notional pooling is a service that enables a corporate customer with multiple accounts to combine their credit and debit balances into a single centralized pool. By updating the notional account arrangement, the customer can manage their liquidity position more effectively, reduce interest expenses, streamline cash management processes, and still maintain some level of autonomy over their individual accounts.

  **Limitations**

  PUT: The name of the endpoint could be: 

GET /notional-pooling/{notionalpoolingid}/notional-account-arrangements/{notionalaccountarrangementid}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Exchange</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Exchange Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path allows users to update an existing notional pooling arrangement by exchanging information related to the notional accounts and consolidated positions within the pooling structure. It facilitates the consolidation of credit and debit balances from multiple accounts to create a single, centralized liquidity position. This helps in reducing interest costs, streamlining cash management, and allowing some degree of autonomy to individual accounts within the pooling framework.

  **Limitations**

  PUT: A possible name for the path could be:

`/notional-pooling/{notionalpoolingId}/notional-account-consolidated-position/{notionalaccountconsolidatedPositionId}/exchange`

This name follows REST best practices by using lowercase letters and hyphens to separate words in the path. It also includes relevant resource identifiers for clarity and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Exchange</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Exchange Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows you to update an existing Notional Account's Interest Allocation fulfillment within a Notional Pooling arrangement. Notional pooling enables a corporate customer with various active accounts to combine their credit and debit balances to create a centralized liquidity position. By updating the Notional Account's Interest Allocation fulfillment, the customer can effectively manage their interest expenses, streamline cash management processes, and maintain some level of autonomy over their accounts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Execute</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Execute Notional Account Arrangement Fulfillment

  **Documentation**

  This API path allows you to update an existing notional account arrangement fulfillment within a notional pooling setup. Notional pooling is a financial service that allows a corporate customer with multiple active accounts to combine their credit and debit balances into one centralized position. By executing this API endpoint, you can manage and fulfill the notional pooling arrangement, helping to streamline cash management, minimize interest expenses, and maintain some local autonomy for the individual accounts involved.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/notional-pooling/{notionalpoolingid}/notional-account-arrangement/{notionalaccountarrangementid}/execute

In RESTful URLs, it's recommended to use lowercase letters, hyphens for word separation, and avoid using camelCase or underscores.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Execute</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Execute Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path is used to update and execute the consolidated position fulfillment for notional pooling accounts. Notional pooling is a financial process that combines the credit and debit balances from multiple accounts belonging to a corporate customer into one centralized position, providing a clearer overview of their liquidity. By updating and executing this process, it helps minimize interest costs, streamline cash management, and allows each account to maintain a level of autonomy while still benefiting from the pooling arrangement.

  **Limitations**

  PUT: The name of the path should be `/notional-pooling/{notionalpoolingid}/notional-account-consolidated-position/{notionalaccountconsolidatedpositionid}/execute` in accordance with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Execute</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Execute Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows you to execute the fulfillment of interest allocation for a specific notional account within a notional pooling arrangement. In simple terms, it means that this API helps in distributing interest earned or paid among the various accounts that are part of the notional pooling setup. It enables corporate customers to manage their liquidity effectively by consolidating balances and optimizing interest expenses while maintaining control over individual accounts.

  **Limitations**

  PUT: The name of the path should be:

'/notional-pooling/{notionalpoolingid}/notional-account-interest-allocation/{notionalaccountinterestallocationid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/Initiate</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Initiate Notional Account Arrangement Fulfillment

  **Documentation**

  This API path allows for the initiation of a notional pooling arrangement for corporate customers with multiple active accounts. Notional pooling combines credit and debit balances from these accounts to create a single central liquidity position. This helps in reducing interest expenses, streamlining cash management, and allowing for some degree of local control over the accounts. By making a POST request to this endpoint, a new notional account arrangement can be created to enable these pooling functionalities.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/notional-pooling/{notionalpoolingid}/notional-account-arrangement/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/Initiate</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Initiate Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path enables the initiation of a process within notional pooling that consolidates the credit and debit balances of corporate customers with multiple active accounts. By pooling these balances, the API helps create a single centralized liquidity position for the customer, resulting in reduced interest expenses, simplified cash management, and allowing for some local autonomy over individual accounts. The "Initiate" function starts the process of consolidating the accounts' positions to streamline liquidity management for the customer.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/Initiate
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/Initiate</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Initiate Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows a corporate customer with multiple active accounts to initiate the process of pooling credit and debit balances from these accounts. The goal is to create a single centralized liquidity position, which can help minimize interest expenses, simplify cash management, and still allow for some level of local control over the accounts. By initiating the Notional Account Interest Allocation Fulfillment, the customer can effectively manage their finances in a more streamlined and efficient manner.

  **Limitations**

  POST: The name of the path could be:

'/notional-pooling/{notionalpoolingid}/notional-account-interest-allocation/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Notify</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Notify Notional Account Arrangement Fulfillment

  **Documentation**

  This API path is used to retrieve information about the fulfillment notification related to a specific notional account arrangement within a notional pooling setup. Notional pooling is a financial service that allows corporate customers with multiple accounts to consolidate their balances for better cash management and to reduce interest costs. The fulfillment notification provides updates on the status of the notional account arrangement, helping users stay informed about the process.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/notional-pooling/{notional_pooling_id}/notional-account-arrangement/{notional_account_arrangement_id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Notify</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Notify Notional Account Consolidated Position Fulfillment

  **Documentation**

  This BIAN API path retrieves information related to the fulfillment of notifying a notional account's consolidated position in a notional pooling operation. 

Notional pooling is a financial service that allows a corporate customer with multiple active accounts to combine their credit and debit balances into one centralized pool. This helps the customer to manage their liquidity more efficiently by minimizing interest expenses, simplifying cash management, and still maintaining some level of control over individual accounts. 

In this context, the API path GET endpoint is used to retrieve details about the notional account's consolidated position fulfillment, which is a key aspect of the notional pooling process.

  **Limitations**

  GET: Based on REST best practices, the name for this path should be:

```
/NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Notifications
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Notify</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Notify Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path is used to retrieve information related to notifying the fulfillment of interest allocations for notional pooling accounts. Notional pooling is a financial service that allows corporate customers with multiple accounts to consolidate their balances for better liquidity management and cost savings. The API specifically deals with notifying users about the successful allocation of interest within the notional pooling accounts.

  **Limitations**

  GET: If we follow REST best practices, the name of the path should be:

```
/NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Notifications
```

This path indicates that it is a collection of notifications related to a specific notional account interest allocation within a notional pooling.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Request</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Request Notional Account Arrangement Fulfillment

  **Documentation**

  This BIAN API path is used to update an existing request for a notional account arrangement fulfillment within the notional pooling system. Notional pooling is a financial service that enables corporate customers with multiple active accounts to consolidate their credit and debit balances into a single centralized position. By updating the request for fulfillment, users can streamline their cash management, reduce interest expenses, and maintain some level of autonomy over their local accounts.

  **Limitations**

  PUT: A possible name for the path could be:

`/notional-pooling/{notionalpoolingid}/notional-account-arrangement/{notionalaccountarrangementid}/requests` 

This name follows REST best practices by using lowercase letters, separating words with hyphens, and representing a collection of resources (requests) related to the specified notional pooling and notional account arrangement IDs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Request</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Request Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path allows users to update an existing request for notional pooling in the context of corporate customers with multiple active accounts. Specifically, it pertains to consolidating credit and debit balances across accounts to create a single centralized liquidity position. This process helps to reduce interest expenses, streamline cash management, and maintain a level of autonomy for individual accounts. Users can use this path to request the fulfillment of a consolidated position for notional accounts, enabling them to manage their liquidity effectively.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be: 

/NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Request</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Request Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows for the updating of a request related to notional account interest allocation fulfillment within a notional pooling service. Notional pooling is a banking service that enables corporate customers with multiple accounts to combine their balances for easier cash management, reduced interest costs, and maintaining some level of control over individual accounts. By using this API path, users can submit a request to process the interest allocations for their notional accounts, helping them to centralize their liquidity position and manage their funds more efficiently.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/notional-pooling/{notionalpoolingid}/notional-account-interest-allocation/{notionalaccountinterestallocationid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Retrieve</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Retrieve Notional Account Arrangement Fulfillment

  **Documentation**

  This API path allows you to retrieve information about a specific Notional Account Arrangement within a Notional Pooling setup. Notional pooling is a financial service that enables corporate customers with multiple active accounts to combine their credit and debit balances into a single consolidated position. By accessing this API path, you can gather details about how these accounts are arranged within the notional pooling structure, helping to streamline cash management and optimize interest expenses for the corporate customer.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Retrieve' could be:

GET /notional-pooling/{poolingId}/notional-account-arrangement/{arrangementId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Retrieve</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Retrieve Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path allows you to retrieve information about a specific Notional Account Consolidated Position within a Notional Pooling setup. Notional pooling is a banking service that enables corporate customers with multiple accounts to combine their credit and debit balances to create a single centralized view of their liquidity. By accessing this API path, you can get details about the consolidated position fulfillment of a particular notional account within the pooling arrangement.

  **Limitations**

  GET: Following REST best practices, the name of the path should ideally be:

'/notional-pooling/{notionalpoolingid}/notional-account-consolidated-position/{notionalaccountconsolidatedpositionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Retrieve</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Retrieve Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows you to retrieve information about the interest allocation fulfillment for a specific notional account in a notional pooling setup. Notional pooling is a financial service that enables a corporate customer with multiple accounts to combine their balances for more efficient liquidity management. By accessing this API path, you can view details related to how interest is allocated within the notional pooling arrangement, providing valuable insights for effective cash management and interest expense optimization.

  **Limitations**

  GET: The name of the path could be formulated as follows if it followed REST best practices: 

'/notional-pooling/{notionalpoolingid}/notional-account-interest-allocations/{notionalaccountinterestallocationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountArrangement/{notionalaccountarrangementid}/Update</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Update Notional Account Arrangement Fulfillment

  **Documentation**

  This API path allows you to update the fulfillment of a notional account arrangement within a notional pooling system. Notional pooling is a method used by corporate customers with multiple accounts to consolidate their credit and debit balances into one central account. By updating the fulfillment of the notional account arrangement, the API helps in managing liquidity, reducing interest expenses, simplifying cash management, and maintaining some level of control over individual accounts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /notional-pooling/{notionalpoolingid}/notional-account-arrangement/{notionalaccountarrangementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountConsolidatedPosition/{notionalaccountconsolidatedpositionid}/Update</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Update Notional Account Consolidated Position Fulfillment

  **Documentation**

  This API path allows the user to update the consolidated position fulfillment of a notional account within a notional pooling setup. Notional pooling is a financial service that combines the credit and debit balances of multiple accounts to create a single liquidity position. By updating the consolidated position fulfillment, users can adjust how the balances are pooled, helping to streamline cash management, reduce interest expenses, and maintain some level of control over individual accounts within the pooling arrangement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /notional-pooling/{notionalpoolingid}/notional-account-consolidated-position/{notionalaccountconsolidatedpositionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}/Update</span></summary>

  **Description**

  Notional pooling allows corporate customer with multiple active accounts to pool credit and debit balances to provide a single centralized liquidity position and to minimize interest expense, simplify cash management and retain a degree of local autonomy to the accounts Update Notional Account Interest Allocation Fulfillment

  **Documentation**

  This API path allows you to update the fulfillment status of notional account interest allocation within a notional pooling service. Notional pooling is a financial service that enables corporate customers with multiple accounts to consolidate their balances for better liquidity management. By updating the fulfillment status of interest allocations, users can track and manage how interest is distributed across their pooled accounts.

  **Limitations**

  PUT: The name of the path should be:

PUT '/NotionalPooling/{notionalpoolingid}/NotionalAccountInterestAllocation/{notionalaccountinterestallocationid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
