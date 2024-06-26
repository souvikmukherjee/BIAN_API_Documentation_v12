<h1 style='color:red;'>OrderAllocation</h1>

**BIAN Documentation:** [OrderAllocation v12](https://app.swaggerhub.com/apis/BIAN-3/OrderAllocation/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Control</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Control Securities Allocation Procedure

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the allocation of partially fulfilled market trades. Specifically, it focuses on controlling the securities allocation procedure for a particular order allocation identified by `orderallocationid`. By sending a PUT request to this path, you can modify or update the securities allocation procedure associated with the specified order allocation.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/order-allocations/{orderallocationid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Exchange</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Exchange Securities Allocation Procedure

  **Documentation**

  This BIAN API path allows you to update (PUT) an existing resource related to the Order Allocation Service Domain. Specifically, it pertains to the Exchange of partially fulfilled market trades for securities allocation procedure. By providing the {orderallocationid} in the path, you can allocate the exchanged securities for the specified order allocation.

  **Limitations**

  PUT: The name of the path should be:

'/orders/{orderId}/exchanges' 

where `{orderId}` is the unique identifier for the order within the 'Order Allocation' resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Execute</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Execute Securities Allocation Procedure

  **Documentation**

  This BIAN API path is for updating and executing the allocation of partially fulfilled market trades in the Order Allocation service domain. It specifically triggers the execution of the Securities Allocation Procedure for a particular order allocation identified by {orderallocationid}. This process helps ensure that the remaining market trades are allocated correctly according to established procedures for managing securities allocations.

  **Limitations**

  PUT: Following REST best practices, the path should be named something like '/orders/{orderId}/execute'. This path is more concise and describes the resource and action being performed in a clear manner.

</details>

<details open>
  <summary><span style='color:red;'>POST: /OrderAllocation/Initiate</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Initiate Securities Allocation Procedure

  **Documentation**

  This API path `/OrderAllocation/Initiate` allows users to initiate the allocation process for partially fulfilled market trades. It triggers the Securities Allocation Procedure, which is responsible for allocating securities to fulfill these trades. In simpler terms, this API helps in efficiently allocating securities to complete market trades that are only partially fulfilled.

  **Limitations**

  POST: If the path '/OrderAllocation/Initiate' follows REST best practices, it should be named in a resource-oriented manner. A suitable name for this path could be '/orders/initiate'. This naming convention reflects a more resource-focused approach and follows REST principles by using nouns to represent resources and avoiding action-oriented names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/Notify</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Notify Securities Allocation Procedure

  **Documentation**

  This API path is used to retrieve information related to securities allocation for partially fulfilled market trades. By providing the specific order allocation ID, users can access details about the allocation process for these trades. The API serves to notify users about the securities allocation procedure that is taking place for the specified order allocation.

  **Limitations**

  GET: A more RESTful name for the path '/OrderAllocation/{orderallocationid}/Notify' could be:
'/order-allocations/{orderallocationid}/notifications'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Request</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Request Securities Allocation Procedure

  **Documentation**

  This BIAN API path allows for updating an existing resource related to order allocation for partially fulfilled market trades. Specifically, it pertains to the procedure of requesting the allocation of securities for a particular order allocation ID. This API path is designed to handle requests for allocating securities in the context of partially fulfilled market trades.

  **Limitations**

  PUT: The name of the path should be:

'/order-allocations/{orderallocationid}/requests'

Following REST best practices, the path should be all lowercase, use hyphens to separate words, and use plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/Retrieve</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Retrieve Securities Allocation Procedure

  **Documentation**

  This API path allows you to retrieve information about the allocation of securities for partially fulfilled market trades based on a specific order allocation ID. It provides details on how securities are allocated in the trading process, helping users understand the distribution of assets for their trades.

  **Limitations**

  GET: The name of the path should be `/order-allocations/{orderAllocationId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Update</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Update Securities Allocation Procedure

  **Documentation**

  This BIAN API path `/OrderAllocation/{orderallocationid}/Update` with the PUT method allows you to update the allocation of partially fulfilled market trades for a specific `orderallocationid`. This means you can modify or adjust the allocation of securities for a particular trading order that has not been completely fulfilled.

  **Limitations**

  PUT: The name of the path should be '/orders/{order_id}/allocation'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Exchange</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Exchange Apply Order Allocation Rules Workstep

  **Documentation**

  This BIAN API path `/OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Exchange` allows you to update an existing resource related to the allocation of partially fulfilled market trades. It specifically applies order allocation rules in the exchange workstep. This API path is used within the context of managing market trade orders and ensuring they are allocated correctly according to specified rules.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

`/order-allocations/{orderAllocationId}/apply-order-allocation-rules/{applyOrderAllocationRulesId}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Exchange</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Exchange Update (Partially Completed) Market Order Workstep

  **Documentation**

  This BIAN API path is used to update a partially completed market order allocation in an exchange. It specifically targets a partial completion scenario for market trades where a market order workstep needs to be updated. The PUT method is used to update an existing resource related to order allocation within the exchange when a market order is only partially completed.

  **Limitations**

  PUT: The name of the path following REST best practices could be: 

'/orders/{order_id}/update-market-order/{market_order_id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Execute</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Execute Apply Order Allocation Rules Workstep

  **Documentation**

  This BIAN API path is used to update an existing resource related to Order Allocation. Specifically, it allows the execution of the Apply Order Allocation Rules Workstep for a specific Order Allocation ID and Apply Order Allocation Rules ID. This process is a part of allocating partially fulfilled market trades within the Order Allocation service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something more indicative of the resource being accessed than specific actions being taken. 

A more appropriate name for the path could be something like '/order-allocations/{orderallocationid}/rule-applications/{applyorderallocationrulesid}/execution'. This name provides a clearer understanding of the resources being accessed and maintains the RESTful convention of using nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Execute</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Execute Update (Partially Completed) Market Order Workstep

  **Documentation**

  This API path is used to update and execute partially fulfilled market trades for a specific order allocation and market order. It is specifically for executing the process of updating a market order that has been partially completed. The PUT method is used to update the resource with the new information related to the market order workstep being executed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on resources and actions rather than method names. Here is a suggested naming for the path:

`/order-allocations/{orderallocationid}/partially-completed-market-orders/{partiallycompletedmarketorderid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>POST: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/Initiate</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Initiate Apply Order Allocation Rules Workstep

  **Documentation**

  This API path is used to initiate the process of applying order allocation rules to partially fulfilled market trades. It allows for the creation of a new resource related to order allocation with a specific ID. By sending a POST request to this path, you can trigger the beginning of the process to apply the order allocation rules to the trades that have not been completely fulfilled in the market.

  **Limitations**

  POST: A suitable name for the path would be: 

`/order-allocations/{orderallocationid}/apply-order-allocation-rules/initiate`

Following REST best practices, it is recommended to use all lowercase letters, separate words with dashes, and include resource identifiers (such as "order-allocations" and "orderallocationid") for readability and clarity.

</details>

<details open>
  <summary><span style='color:red;'>POST: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/Initiate</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Initiate Update (Partially Completed) Market Order Workstep

  **Documentation**

  This API path is used to initiate an update for partially completed market orders in the order allocation service domain. Specifically, it deals with updating market orders that have been only partially fulfilled. By sending a POST request to this path with the appropriate data, users can create a new resource to track the progress of updating a partially completed market order workstep within the order allocation system.

  **Limitations**

  POST: In order to follow REST best practices, the name of the path should be simplified and descriptive while also using nouns to represent resources. 

A suggested name for the path could be: 

```
/OrderAllocations/{orderallocationid}/MarketOrders/{marketorderid}/Initiate
``` 

This name clearly indicates the resource endpoints for OrderAllocations and MarketOrders and the action to initiate the market order.

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Notify</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Notify Apply Order Allocation Rules Workstep

  **Documentation**

  This BIAN API path is used to retrieve information about the process of applying order allocation rules to partially fulfilled market trades within the Order Allocation service domain. The path specifically refers to the Notify Apply Order Allocation Rules Workstep, which is a step in the overall process of order allocation. By using this API endpoint with the specified IDs, users can retrieve details or data related to the application of order allocation rules in the context of market trades that have been partially fulfilled.

  **Limitations**

  GET: The name of the path should be:

`/order-allocations/{orderallocationid}/apply-order-allocation-rules/{applyorderallocationrulesid}/notify` 

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and be as descriptive and concise as possible.

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Notify</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Notify Update (Partially Completed) Market Order Workstep

  **Documentation**

  This API path `/OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Notify` is used to retrieve information about a specific resource related to order allocation for partially completed market trades. It is specifically focused on notifying an update for a partially completed market order workstep. 

In simpler terms, this endpoint allows you to get details about the progress of an order allocation process where market trades were only partially fulfilled. It provides information about updating and notifying the status of a market order that was only partially completed.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

'/orders/{orderallocationid}/updates/{updateid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Request</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Request Apply Order Allocation Rules Workstep

  **Documentation**

  This API path allows you to update an existing resource related to the order allocation process for partially fulfilled market trades. Specifically, it is used to request the application of order allocation rules within a workstep identified by the {applyorderallocationrulesid} for a specific order allocation identified by {orderallocationid}. This API operation facilitates the allocation of trades in the market that have been partially fulfilled, ensuring that the appropriate rules are applied in the allocation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

`/order-allocations/{orderallocationid}/apply-order-allocation-rules/{applyorderallocationrulesid}/request`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Request</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Request Update (Partially Completed) Market Order Workstep

  **Documentation**

  This BIAN API path allows you to update a partially completed market order allocation within the Order Allocation service domain. Specifically, it handles the request to update a partially completed market order workstep identified by the provided IDs. By using this API path with the PUT method, you can modify the details or status of the partially completed market order allocation within the system.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path could be:

PUT /order-allocations/{orderallocationid}/partially-completed-market-orders/{update(partiallycompleted)marketorderid}/request

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Retrieve</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Retrieve Apply Order Allocation Rules Workstep

  **Documentation**

  This API path is designed to retrieve information related to applying order allocation rules for a specific order allocation. It allows users to view details about how partially fulfilled market trades are allocated based on certain rules within the system. The path includes specific identifiers for the order allocation and apply order allocation rules, enabling users to retrieve relevant data and insights about the allocation process.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path would be:

'/order-allocations/{orderallocationid}/apply-rules/{applyorderallocationrulesid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Retrieve</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Retrieve Update (Partially Completed) Market Order Workstep

  **Documentation**

  This API path is used for retrieving information about a partially completed market trade order allocation in the context of updating a partially completed market order workstep. In simpler terms, this API endpoint allows you to access details related to the allocation of a market trade order that has been partially fulfilled and update the information for that specific order workstep. The endpoint enables users to retrieve specific data associated with the partial completion of market orders.

  **Limitations**

  GET: Based on REST best practices, the path should be named in a clear and descriptive manner while following the resource-oriented approach. Considering the provided path, a possible RESTful naming for it could be:

GET /order-allocations/{orderallocationid}/partially-completed-market-orders/{update(partiallycompleted)marketorderid}

This naming convention follows the standard RESTful practice of using lowercase letters, separating words with hyphens, and focusing on the resources being accessed in a hierarchical structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}/Update</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Update Apply Order Allocation Rules Workstep

  **Documentation**

  This BIAN API path is used to update and apply order allocation rules within the Order Allocation service domain. Specifically, it focuses on partially fulfilled market trades and their allocation processes. By using a PUT method, users can modify and update the existing resource related to order allocation rules.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be as follows:

`PUT /OrderAllocation/{orderallocationid}/ApplyOrderAllocationRules/{applyorderallocationrulesid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /OrderAllocation/{orderallocationid}/Update(PartiallyCompleted)MarketOrder/{update(partiallycompleted)marketorderid}/Update</span></summary>

  **Description**

  This Service Domain allocates partially fulfilled market trades Update Update (Partially Completed) Market Order Workstep

  **Documentation**

  This BIAN API path is used to update a partially completed market order within the Order Allocation service domain. Specifically, it allows users to update a partially fulfilled market trade workstep associated with a particular order allocation ID. The "PUT" method is used to make changes or updates to the specified resource for the partially completed market order.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be structured in a resource-oriented manner and should not be overly verbose. 

A suggestion for the path could be:
'/order-allocations/{orderallocationid}/partially-completed-market-orders/{partiallycompletedmarketorderid}/update' 

This path is clear, concise, and represents the resource hierarchy in a standardized manner.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
