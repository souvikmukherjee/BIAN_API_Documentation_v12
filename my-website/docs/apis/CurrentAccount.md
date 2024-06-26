<h1 style='color:red;'>CurrentAccount</h1>

**BIAN Documentation:** [CurrentAccount v12](https://app.swaggerhub.com/apis/BIAN-3/CurrentAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InCR Initiate A new Current Account

  **Documentation**

  This API path allows users to create a new consumer checking or demand deposit account. It includes services like payments, deposits, standing orders, sweeps, liens, and access through check and debit cards. By making a POST request to this path, a new current account can be initiated for a user.

  **Limitations**

  POST: Based on RESTful best practices, the name of the path should be:

`/current-accounts/initiation`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpCR Update details of a current account

  **Documentation**

  This API path allows you to update the details of a specific current account identified by its unique current account ID. You can use this path to make changes to the consumer checking or demand deposit account, such as updating payment details, standing orders, deposits, card access, and more. By sending a PUT request to this path with the relevant updated information, you can make modifications to the current account stored in the system.

  **Limitations**

  PUT: The name of the path should be `/currentAccounts/{currentAccountId}` for updating a specific current account resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Control</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. CoCR Control the processing of an current account

  **Documentation**

  This API path allows you to update and control the processing of a consumer's checking or demand deposit account. It covers various services related to the account such as payments, deposits, standing orders, sweeps, liens, and access using checks and debit cards. By making a PUT request to this path with the specific current account ID, you can modify and manage the services and processing related to that particular account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be as follows:

`/current-accounts/{current_account_id}/control` 

Key points to consider in choosing this path name:
1. Use lowercase letters.
2. Separate words with hyphens for better readability.
3. Use plural form for resource names unless it represents a singleton resource.
4. Avoid using unnecessary information in the URL.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReCR Retrieve information about a current account - either standard canned reports or selected instance attribute values

  **Documentation**

  This API path allows you to retrieve information about a specific consumer checking or demand deposit account. You can access details such as payments, deposits, standing orders, sweeps, liens, and check or debit card usage associated with the account. This service helps you gather data either in standard pre-defined report formats or specific attributes related to the account instance you are interested in.

  **Limitations**

  GET: The name of the path `/CurrentAccount/{currentaccountid}/Retrieve` following REST best practices should be:

`GET /current-accounts/{currentaccountid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details of an interest transaction applied internally to the account

  **Documentation**

  This API path allows you to retrieve details of an interest transaction that has been applied internally to a specific consumer checking or demand deposit account. By providing the current account ID and the interest ID, you can access information about how interest was calculated and applied to the account. This can help you track and understand the interest transactions within the account.

  **Limitations**

  GET: The name of the path should ideally be '/current-accounts/{currentaccountid}/interests/{interestid}'. This path follows REST best practices by using lowercase letters, using plural nouns for resource names, and avoiding the use of verbs.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/ServiceFee/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initiate service fees against an account

  **Documentation**

  This API path allows for the initiation of service fees for a specific current account. By making a POST request to this endpoint with the current account ID specified, a new resource is created to orchestrate service fees associated with the account. These service fees may include charges for payments, deposits, standing orders, sweeps, liens, as well as for check and debit card access. Essentially, this API path helps in managing and initiating service fees for a consumer checking/demand deposit account.

  **Limitations**

  POST: Following REST best practices, the name of the path '/CurrentAccount/{currentaccountid}/ServiceFee/Initiate' can be simplified to make it more meaningful and easier to understand. Ideally, it should reflect the specific action being performed. 

A better name for the path could be something like:

'/current-accounts/{accountId}/service-fees/initiate-fee'

This name is more concise, uses lower case letters, separates words with dashes for readability, and specifies the action "initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/ServiceFee/{servicefeeid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Apply a service fee to the account

  **Documentation**

  This API path allows you to update a service fee for a specific consumer checking or demand deposit account. By using this path and providing the current account ID and the service fee ID, you can apply a service fee to the account. This means you can modify or set fees related to payments, deposits, standing orders, sweeps, liens, and check or debit card access for the account.

  **Limitations**

  PUT: A suitable name for the path could be: '/current-accounts/{currentAccountId}/service-fees/{serviceFeeId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/ServiceFee/{servicefeeid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve information about a service fee applied to the account

  **Documentation**

  This API path allows you to retrieve information about a specific service fee that is applied to a consumer checking or demand deposit account within the Current Account service domain. By providing the current account ID and the service fee ID, you can access details about the fee associated with that account, such as the amount, frequency, and any specific conditions or terms related to the fee. This information helps users to understand the costs associated with their account and manage their finances effectively.

  **Limitations**

  GET: A RESTful name for the path '/CurrentAccount/{currentaccountid}/ServiceFee/{servicefeeid}/Retrieve' could be:

GET /current-accounts/{currentaccountid}/service-fees/{servicefeeid} 

This name is more descriptive, uses lowercase letters, separates words with hyphens, and follows the convention of using resource names (current-accounts, service-fees) in plural form.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/AccountLien/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Set up an account lien

  **Documentation**

  This API path initiates the process of setting up a lien on a specific consumer checking or demand deposit account. A lien is a legal right or interest that a creditor has in a debtor's property, which enables the creditor to take possession of the property if the debtor fails to meet their obligations. By using this API, you can create a new resource to establish a lien on the designated current account.

  **Limitations**

  POST: The RESTful naming convention for the path '/CurrentAccount/{currentaccountid}/AccountLien/Initiate' should ideally be:

'/current-accounts/{currentaccountid}/account-liens/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/AccountLien/{accountlienid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update details of an existing account lien

  **Documentation**

  This API path allows you to update the details of an existing account lien within a consumer checking or demand deposit account. By using a PUT request method, you can modify specific information related to the account lien, such as updating the lien amount, terms, or any other relevant details associated with the account lien.

  **Limitations**

  PUT: The recommended name for this path following RESTful best practices would be:

```
PATCH /current-accounts/{currentAccountId}/account-liens/{accountLienId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/AccountLien/{accountlienid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. EcBQ Exchange

  **Documentation**

  This API path allows you to update an existing resource related to a consumer checking or demand deposit account. Specifically, it pertains to managing account liens within the current account system. By using a PUT request, you can make modifications or updates to the details of account liens associated with a specific current account using the designated account ID and lien ID.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be `/current-accounts/{currentAccountId}/account-liens/{accountLienId}/exchanges`. 

Here are some considerations for the naming:
- Use plural nouns for resource names where appropriate (`current-accounts`, `account-liens`).
- Use hyphens to separate words in the URI for better readability (`current-accounts`, `account-liens`).
- Use lower case letters for consistency and readability.
- Use meaningful and

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/AccountLien/{accountlienid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about an account lien

  **Documentation**

  This API path allows users to retrieve details about an account lien associated with a specific current account. It is part of the Current Account service domain, which manages consumer checking and demand deposit accounts. The API provides information about liens, which are legal claims placed on the account for unpaid debts or obligations. Users can access details such as the status, terms, and conditions of the account lien by specifying the current account ID and account lien ID.

  **Limitations**

  GET: A more RESTful and cleaner naming convention for this path could be '/current-accounts/{currentaccountid}/account-liens/{accountlienid}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/AccountSweep/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Set up an account sweep

  **Documentation**

  This BIAN API path allows you to initiate the setup of an account sweep for a specific current account. An account sweep is a service that automatically moves funds between accounts to ensure that a minimum or maximum balance is maintained in the current account. This functionality helps optimize cash flow and manage balances effectively. By using this API endpoint, you can automate the process of transferring funds between accounts as needed for the specified current account.

  **Limitations**

  POST: The name of the path should be:

'/current-accounts/{currentAccountId}/account-sweeps/initiate'

Here are the key points that follow REST best practices:
1. Use lowercase letters for path segments.
2. Use plural nouns for collection resources.
3. Use hyphens to separate words for better readability.
4. Use the actual resource names instead of verbs.
5. Use specific resource identifiers (e.g., currentAccountId) instead of generic terms.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/AccountSweep/{accountsweepid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update details of an existing account sweep

  **Documentation**

  This BIAN API path allows you to update the details of an existing account sweep within a consumer checking or demand deposit account. An account sweep typically involves moving funds between different accounts to optimize cash flow or interest earnings. By using this API endpoint with a PUT method, you can modify the specific parameters or settings related to an account sweep, such as the timing, frequency, or target account for the sweep.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/current-accounts/{currentAccountId}/account-sweeps/{accountSweepId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/AccountSweep/{accountsweepid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Trigger an account sweep transaction

  **Documentation**

  This BIAN API path allows you to trigger an account sweep transaction for a specific current account identified by {currentaccountid}. Account sweeping is a process where funds are automatically transferred between accounts to maintain a target balance or maximize interest earnings. By executing this API call using the PUT method, you can update and initiate account sweep transactions associated with the given {accountsweepid} within the specified current account.

  **Limitations**

  PUT: The name of the path could be simplified to `/current-accounts/{currentaccountid}/account-sweeps/{accountsweepid}/execute` following REST best practices of using lowercase letters and hyphens for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/AccountSweep/{accountsweepid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a sweep facility or specific sweep transaction

  **Documentation**

  This API path allows users to retrieve details about a sweep facility or a specific sweep transaction associated with a consumer checking or demand deposit account. It provides information about the movement of funds between different accounts, such as transfers or automatic investment purchases. The API helps in accessing details related to sweep transactions for better management of financial resources.

  **Limitations**

  GET: The name of the path should ideally be structured in a more resource-oriented manner, such as:
'/current-accounts/{currentAccountId}/account-sweeps/{accountSweepId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/DepositsandWithdrawals/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initialize deposit or withdrawal transaction

  **Documentation**

  This API path allows you to create a new resource related to a consumer checking or demand deposit account by initializing a deposit or withdrawal transaction. By specifying the current account ID in the request, you can initiate transactions such as deposits or withdrawals within the account. This API is part of a service domain that manages various services and fees related to checking accounts, including payments, deposits, standing orders, sweeps, liens, and check or debit card access.

  **Limitations**

  POST: The name of the path should be:

'/current-accounts/{currentAccountId}/transactions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update/correct a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update or correct a deposit or withdrawal transaction associated with a specific consumer checking or demand deposit account. By using this path with the PUT method, you can make changes to an existing deposit or withdrawal entry in the account, ensuring accurate and up-to-date transaction records.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/currentaccounts/{currentaccountId}/transactions/{transactionId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Execute a deposit or withdrawal transaction

  **Documentation**

  This BIAN API path allows you to update an existing resource related to executing a deposit or withdrawal transaction within a consumer checking/demand deposit account. By making a PUT request to this path with the specified IDs for the current account and deposits/withdrawals, you can carry out actions such as processing deposits or withdrawals for the account. This API essentially enables the execution of financial transactions like depositing money into or withdrawing money from a consumer's checking account.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

'/current-accounts/{currentAccountId}/transactions/{transactionId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to retrieve details about a specific deposit or withdrawal transaction associated with a consumer checking or demand deposit account. By providing the current account ID and the ID of the deposits and withdrawals transaction, you can access information about the transaction such as the amount deposited or withdrawn, the date and time of the transaction, and any other relevant details related to the transaction. This facilitates easy retrieval of specific transaction information within the current account system.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

GET '/current-accounts/{currentAccountId}/transactions/{transactionId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/Payment/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initialize a payment transaction

  **Documentation**

  This API path allows you to create a new payment transaction for a consumer's checking or demand deposit account. It enables you to initiate a payment process, including services such as payments, deposits, standing orders, sweeps, liens, and access through check and debit card.

  **Limitations**

  POST: The name of the path should be:
'/current-accounts/{currentAccountId}/payments/initiate'

Here are some adjustments made to align with REST best practices:
1. Used lowercase letters for the path segments.
2. Renamed 'CurrentAccount' to 'current-accounts' to indicate a collection of resources.
3. Renamed 'Payment' to 'payments' to indicate the type of operation being performed.
4. Used singular 'currentAccountId' instead of 'currentaccountid' for better

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Payment/{paymentid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update a payment transaction configuration or specific transaction

  **Documentation**

  This API path allows you to update the configuration or specific details of a payment transaction associated with a consumer checking or demand deposit account. By using this path, you can modify aspects such as the payment amount, recipient details, or any other parameters related to the payment within the account.

  **Limitations**

  PUT: The name of the path should ideally identify the resource being updated, so a more appropriate name following REST best practices could be:

'/current-accounts/{currentaccountid}/payments/{paymentid}'

This path clearly indicates that it is updating a specific payment within a current account resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Payment/{paymentid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. EcBQ Verify/approve a scheduled repeating payment

  **Documentation**

  This BIAN API path allows you to update a scheduled repeating payment associated with a specific payment ID within a consumer checking or demand deposit account. The purpose is to verify or approve the payment transaction.

  **Limitations**

  PUT: The name of the path following REST best practices would be:

'/current-accounts/{currentaccountid}/payments/{paymentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Payment/{paymentid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Trigger a payment for a repeating payment set up

  **Documentation**

  This API path allows you to update and trigger a payment for a repeating payment set up within a specific consumer checking or demand deposit account. By making a PUT request to this path with the current account ID and payment ID, you can execute the payment process associated with the specified payment setup. This functionality helps manage and process regular payments efficiently within the account.

  **Limitations**

  PUT: A RESTful URI that follows best practices should be designed to be intuitive, descriptive, and hierarchical. Based on the path you provided, a suitable name for this resource could be:

'/current-accounts/{currentaccountId}/payments/{paymentId}/execute'

In this name:
- Resource names are in lowercase letters to improve readability and consistency.
- Hyphens separate words for clarity and ease of understanding.
- URL parameters are enclosed in curly braces to denote their variable nature.

This naming convention helps make

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/Payment/{paymentid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a payment transaction or arrangement

  **Documentation**

  This BIAN API path allows you to retrieve details about a payment transaction or arrangement within a specific current account. By providing the current account ID and the payment ID, you can access information about payments, deposits, standing orders, sweeps, liens, and check or debit card transactions associated with that account. This helps users to view specific details related to their payment activities and arrangements within their checking or demand deposit account.

  **Limitations**

  GET: Based on REST best practices, the path '/CurrentAccount/{currentaccountid}/Payment/{paymentid}/Retrieve' could be named as follows:

GET /current-accounts/{currentaccountid}/payments/{paymentid}

Remember that the path should use lowercase letters, dashes to separate words, and should clearly indicate the resource being accessed (current account and payment).

</details>

<details open>
  <summary><span style='color:red;'>POST: /CurrentAccount/{currentaccountid}/IssuedDevice/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Initiate Provision of Issued Device

  **Documentation**

  This API path allows you to initiate the provision of an issued device for a consumer checking/demand deposit account. This could include setting up services related to payments, deposits, standing orders, sweeps, liens, and access via check and debit card. By using this API, you can create a new resource to facilitate the issuance of a device connected to the account in question.

  **Limitations**

  POST: The name of the path should be:

'/current-accounts/{currentAccountId}/issued-devices/initiate'

Following REST best practices, path names should be in lowercase and use hyphens to separate words for better readability and consistency. Additionally, using singular nouns for resource names is preferred in RESTful design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a specific device that has been allocated to a current account. For example, if a debit card or another device is associated with a particular checking account, you can use this API to update information related to that device, such as changing ownership details, updating security settings, or modifying any other relevant information.

  **Limitations**

  PUT: The name of the path '/CurrentAccount/{currentaccountid}/IssuedDevice/{issueddeviceid}/Update' should be:

'/current-accounts/{currentaccountid}/issued-devices/{issueddeviceid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CurrentAccount/{currentaccountid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve specific details about an issued device associated with a current account. For example, you can use this endpoint to get information about a debit card or any other device provided in relation to a consumer checking account. The information retrieved could include details such as the device's status, features, and other relevant data.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /current-accounts/{currentAccountId}/issued-devices/{issuedDeviceId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/Interest/{interestid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Execute Apply Interest

  **Documentation**

  This API path allows you to execute and apply interest on a specific interest account related to a consumer's checking or demand deposit account. By sending a PUT request to this endpoint with the relevant account and interest IDs, you can update and calculate the interest for that account based on the defined parameters. This operation falls within the service domain of managing consumer checking and deposit accounts, including services such as payments, deposits, and access to cards.

  **Limitations**

  PUT: The name of the path should be:

/current-accounts/{currentAccountId}/interests/{interestId}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/ServiceFee/{servicefeeid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Update details about an applied service fee

  **Documentation**

  This API path is used to update the details of an applied service fee associated with a specific current account. By specifying the current account ID and the service fee ID, this endpoint allows you to make changes to the information or settings related to that particular fee. The purpose is to manage the fees that apply to a customer's checking/demand deposit account, such as payment fees, standing order fees, or any other charges that may be associated with the account.

  **Limitations**

  PUT: Based on REST best practices, the appropriate name for the path would be:

'/current-accounts/{currentaccountid}/service-fees/{servicefeeid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CurrentAccount/{currentaccountid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Execute Authorization of Booking

  **Documentation**

  This BIAN API path allows you to update and execute the authorization of a booking within a consumer checking or demand deposit account. It involves managing services such as payments, deposits, standing orders, sweeps, liens, and check or debit card access associated with the account. By using this PUT method, you can make changes to an existing booking authorization and carry out its execution.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on representing a resource or action. A possible suggestion for the path name could be: 

'/current-accounts/{currentaccountid}/booking-authorizations/{bookingauthorizationid}/execute' 

It is important to use lowercase letters and dashes to separate words in the path name as per convention.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
