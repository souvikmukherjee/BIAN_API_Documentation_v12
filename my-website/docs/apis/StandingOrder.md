<h1 style='color:red;'>StandingOrder</h1>

**BIAN Documentation:** [StandingOrder v12](https://app.swaggerhub.com/apis/BIAN-3/StandingOrder/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/Control</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  CoCR Control the processing of Standing Order Facility

  **Documentation**

  This BIAN API path allows customers to control the processing of a standing order they have set up with the bank. Customers can update the details or parameters of the standing order, such as the amount, frequency, or type of instruction associated with it. This API is used for managing standing orders, which are regular and recurring instructions given by customers to the bank for various financial activities like making periodical payments or managing account balances.

  **Limitations**

  PUT: The name of the path should be:
'/standing-orders/{standingOrderID}/control'

Ensure that the path components are in lowercase letters and use kebab case for better readability and adherence to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/Exchange</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  EcCR Accept, verify, etc. aspects of Standing Order Facility processing

  **Documentation**

  This BIAN API path allows customers to update an existing standing order with the bank. Standing orders are recurring instructions that customers can set up for different banking activities such as making periodical payments, sweeping balances at the end of the month, or topping off excess funds in a current account. The API handles the acceptance, verification, and other processing aspects related to managing standing orders within the bank's system.

  **Limitations**

  PUT: The name of the path should be:

`/standing-orders/{standingOrderId}/exchanges`

In this naming convention, the path uses lowercase letters, separates words with hyphens, and uses the plural form of the noun "exchange" since it typically represents a collection of resources. Additionally, the path parameter `standingOrderId` is written in camel case.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/Execute</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  ExCR Execute an available automated action for Standing Order Facility

  **Documentation**

  This API path allows customers to trigger the execution of a pre-defined action associated with a standing order they have set up with the bank. This action could be a variety of tasks such as making a recurring payment, transferring excess funds, or performing other automated instructions related to their account. By using this API, customers can activate the specified action linked to their standing order.

  **Limitations**

  PUT: A more RESTful name for the path '/StandingOrder/{standingorderid}/Execute' could be '/StandingOrders/{standingorderid}/Execution'. This name reflects the resource (StandingOrder) and the action being taken (Execution) in a clearer and more standardized manner.

</details>

<details open>
  <summary><span style='color:red;'>POST: /StandingOrder/Initiate</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  InCR Instantiate a new Standing Order Facility

  **Documentation**

  This API path allows customers to create a new standing order with the bank. A standing order is an instruction given by the customer to the bank to carry out certain actions regularly, such as making recurring payments or performing specific banking tasks at specified intervals. Customers can use this API to set up standing orders for various purposes like transferring funds, making payments, or managing their account balances automatically.

  **Limitations**

  POST: Following REST best practices, the path '/StandingOrder/Initiate' could be improved by using nouns to represent resources and avoiding verbs. A more RESTful path name could be '/standing-orders' to represent a collection of standing orders, or '/standing-orders/initiate' to initiate a new standing order.

</details>

<details open>
  <summary><span style='color:red;'>GET: /StandingOrder/{standingorderid}/Retrieve</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  ReCR Retrieve details about any aspect of Standing Order Facility

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific Standing Order by providing the Standing Order ID. It enables customers to access details related to their standing orders with the bank, such as periodical payments, balance sweeps, or fund transfers for current accounts. Essentially, it helps customers inquire about various aspects of their Standing Order Facility through a GET request.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/StandingOrder/{standingorderid}/Retrieve' should be '/standing-orders/{standingorderid}'. This is more user-friendly and follows the convention of using lowercase letters and separating words with hyphens in RESTful URLs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/Request</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  RqCR Request manual intervention or a decision with respect to Standing Order Facility

  **Documentation**

  This BIAN API path allows customers to update an existing standing order with the bank. Customers can set up standing orders for a variety of purposes such as making regular payments or managing their account balances. This particular endpoint is used when a customer needs manual intervention or a decision related to their standing order facility. It provides a way for customers to request changes or decisions regarding their standing order instructions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/standing-orders/{standingOrderId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/Update</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  UpCR Update details relating to Standing Order Facility

  **Documentation**

  This BIAN API path allows customers to update details related to an existing standing order with the bank. Standing orders are instructions given by customers to the bank for recurring payments or other specific actions, such as transferring funds at the end of the month or managing excess funds in a current account. With this API, customers can make changes or updates to the standing order instructions they have previously set up with the bank.

  **Limitations**

  PUT: The name of the path should be:

PATCH /StandingOrders/{standingorderid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/StandingOrderPayment/{standingorderpaymentid}/Exchange</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  EcBQ Accept, verify, etc. aspects of Standing Order Payment processing

  **Documentation**

  This BIAN API path allows customers to update an existing standing order payment within the bank's system. Customers can make changes to the details of a specific standing order payment, such as modifying the frequency of the payment, updating the payment amount, or adjusting any other instructions associated with the standing order. This API is used for managing standing orders, which are recurring instructions given by customers to the bank for various financial transactions, such as periodic payments or balancing accounts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/standing-orders/{standingorderid}/standing-order-payments/{standingorderpaymentid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>POST: /StandingOrder/{standingorderid}/StandingOrderPayment/Initiate</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  InBQ Instantiate a new Standing Order Payment

  **Documentation**

  This API path allows customers to create a new standing order payment with the bank. Customers can set up instructions for the bank to make regular payments, sweep balances at the end of the month, or transfer excess funds to a current account. This API provides the functionality for customers to initiate a new standing order payment, specifying the details of the payment instruction they wish to set up.

  **Limitations**

  POST: The name of the path should ideally be:  
```
/standing-orders/{standingorderid}/payments
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /StandingOrder/{standingorderid}/StandingOrderPayment/{standingorderpaymentid}/Retrieve</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  ReBQ Retrieve details about any aspect of Standing Order Payment

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific Standing Order Payment within a Standing Order. It provides information about various aspects of the payment, such as the amount, frequency, and purpose of the payment. This can be useful for customers who want to view or manage their standing orders with the bank, including periodical payments, balance sweeps, or fund transfers.

  **Limitations**

  GET: The name of the path following REST best practices could be:

/standing-orders/{standingorderid}/payments/{standingorderpaymentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /StandingOrder/{standingorderid}/StandingOrderPayment/{standingorderpaymentid}/Update</span></summary>

  **Description**

  Customers can issue standing orders to the bank. In most cases this is for the execution of a periodical payment, but there are other standing instructions like, sweeping balances at end of month, topping off excess funds for a current account, etc.  UpBQ Update details relating to Standing Order Payment

  **Documentation**

  This API endpoint allows customers to update specific details related to a standing order payment within a standing order they have set up with the bank. Customers can modify information such as the frequency or amount of the payment, or any other instructions associated with the standing order. This API enables customers to manage their standing orders efficiently by making necessary adjustments to the payment instructions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be as follows:

```
PUT /standing-orders/{standingorderid}/payments/{standingorderpaymentid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
