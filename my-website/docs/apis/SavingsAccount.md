<h1 style='color:red;'>SavingsAccount</h1>

**BIAN Documentation:** [SavingsAccount v12](https://app.swaggerhub.com/apis/BIAN-3/SavingsAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InCR Initiate A new savings account

  **Documentation**

  This API path `/SavingsAccount/Initiate` allows you to create a new savings account for a consumer. By making a POST request to this path, you can initiate the process of setting up a new savings account. This includes defining the account details, such as payments, deposits, standing orders, sweeps, and liens. This API facilitates the creation of a new savings account within the system.

  **Limitations**

  POST: The name of the path should be as follows:

"/savings-accounts/initiate"

It is recommended to use lowercase letters, separate words with hyphens, and use plural nouns for collections, such as "savings-accounts".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. UpCR Update details of a savings account

  **Documentation**

  This API path allows you to update the details of a specific savings account by providing the savings account ID. You can make changes to the account such as updating payment information, modifying scheduled deposits, setting up standing orders, and making ad-hoc deposits. Additionally, you can also manage sweeps and liens associated with the savings account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /savingsaccounts/{savingsaccountid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/Control</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. CoCR Control the processing of an a savings account

  **Documentation**

  This API path allows you to control the processing of a consumer savings account. By sending a PUT request to this endpoint with the specific savings account ID, you can update and manage various aspects of the savings account, such as payments, deposits, standing orders, sweeps, and liens. This means you can make changes to the account, schedule transactions, and adjust any settings related to the account to better suit the needs of the account holder.

  **Limitations**

  PUT: The name of the path should be `/savings-accounts/{savingsaccountid}/controls`. 

In RESTful API design, it is recommended to use plural nouns for resource names, separate words with hyphens for readability, and use lowercase letters for consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReCR Retrieve information about a savings account - either standard canned reports or selected instance attribute values

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific savings account by providing its unique ID. The information you can access includes standard reports or specific details about the account such as payment history, deposit schedules, standing orders, and any liens associated with the account. This API enables you to access and view important data related to a consumer savings account.

  **Limitations**

  GET: The path should be named in a way that clearly indicates it is retrieving a specific resource related to a savings account. 

A suitable RESTful path name for this endpoint could be:

```
GET /savings-accounts/{savingsaccountId}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve details of an interest transaction applied internally to the account

  **Documentation**

  This API path allows you to retrieve details of an interest transaction that has been applied internally to a specific savings account. By providing the savings account ID and interest ID as parameters, you can access information about the interest transaction, such as the amount, date, and any associated details. This can help you track and manage interest-related activities within the savings account.

  **Limitations**

  GET: Based on REST best practices, a clearer and more descriptive name for the path could be:

/savings-accounts/{savingsAccountId}/interests/{interestId} 

This name uses lowercase letters, separates words with hyphens, and provides a clean and understandable structure that follows REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/ServiceFees/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InBQ Initiate service fees against an account

  **Documentation**

  This BIAN API path allows you to initiate service fees for a specific savings account. By using a POST request, you can create new service fee resources associated with the specified savings account ID. The services and fees covered by this API include payments, deposits, standing orders, sweeps, and liens related to the savings account.

  **Limitations**

  POST: The name of the path should be:
/savings-accounts/{savingsaccountid}/service-fees/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ExBQ Execute Apply Service Fee

  **Documentation**

  This API path allows you to update an existing service fee associated with a consumer savings account. You can use this path to apply changes to the service fees linked to a specific savings account. This could involve modifying payment amounts, adjusting scheduled deposits, or making other changes related to fees for services like standing orders, sweeps, and liens.

  **Limitations**

  PUT: A more appropriate name for the path /SavingsAccount/{savingsaccountid}/ServiceFees/{servicefeesid}/Execute following REST best practices would be:

/savings-accounts/{savingsaccountid}/service-fees/{servicefeesid}/execute

Make sure to use lowercase letters and hyphens between words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve information about a service fee applied to the account

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific service fee applied to a savings account. By providing the savings account ID and the service fee ID, you can access details about the fee associated with that account. This information could include the amount of the fee, the reasons for its application, and any terms or conditions related to the fee. This API path helps users to better understand the charges and fees associated with their savings account.

  **Limitations**

  GET: A suitable name for the described path following REST best practices could be:

'/savings-accounts/{savingsAccountId}/service-fees/{serviceFeesId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/AccountLien/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InBQ Set up an account lien

  **Documentation**

  This API path allows users to initiate setting up a lien on a consumer savings account identified by a specific account ID. A lien is a legal right or interest that a creditor has in a debtor's property as security for a debt or obligation. By using this API, users can initiate the process of setting up a lien on the specified savings account.

  **Limitations**

  POST: The name of the path should ideally be structured as follows based on REST best practices:

GET /savings-accounts/{savingsaccountid}/account-lien/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/AccountLien/{accountlienid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. UpBQ Update details of an existing account lien

  **Documentation**

  This API path allows you to update the details of an existing account lien associated with a specific savings account. It enables you to make changes or modifications to the information related to the account lien, such as updating the terms, conditions, or any other relevant details. This can be useful for managing and maintaining accurate records of account liens within the savings account system.

  **Limitations**

  PUT: The name of the endpoint should typically describe the action being performed on the resource. Following REST best practices, you could name the path as:

`PUT /savings-accounts/{savingsaccountid}/account-liens/{accountlienid}`

This name indicates that a `PUT` request is being made to update a specific account lien associated with a savings account identified by `savingsaccountid`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/AccountLien/{accountlienid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. EcBQ Exchange (i.e. confirm, reject) details of an account lien

  **Documentation**

  This BIAN API path allows you to update the details of an existing account lien associated with a specific savings account. You can use this path to confirm or reject the exchange of information relating to the account lien, such as any obligations or restrictions placed on the account. This functionality helps manage and maintain the status of account liens for consumer savings accounts.

  **Limitations**

  PUT: A suitable name for this path following REST best practices would be:

```
/SavingsAccounts/{savingsAccountId}/AccountLiens/{accountLienId}/Exchanges
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/AccountLien/{accountlienid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve details about an account lien

  **Documentation**

  This API path is used to retrieve information about an account lien associated with a specific savings account. It allows users to access details about any liens that have been placed on the savings account, such as restrictions or obligations related to the account. Users can use this endpoint to retrieve specific information about the account lien by providing the savings account ID and the account lien ID as parameters in the request.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

GET /savings-accounts/{savingsaccountid}/liens/{accountlienid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/AccountSweep/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InBQ Set up an account sweep

  **Documentation**

  This API path allows a consumer to initiate the setup of an account sweep for their savings account. An account sweep is a service where funds are automatically transferred between different accounts to optimize interest earnings or manage cash flow. By using this API, users can set up and start utilizing this feature for their savings account.

  **Limitations**

  POST: A possible name for the path could be: `/savings-accounts/{savingsAccountId}/account-sweeps/initiate` 

This name follows REST best practices by using lowercase letters, separating words with dashes for readability, and including relevant resource identifiers in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/AccountSweep/{accountsweepid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. UpBQ Update details of an existing account sweep

  **Documentation**

  This API path allows you to make updates to the details of an existing account sweep within a consumer savings account. An account sweep typically involves transferring funds between different accounts to optimize interest earnings or manage cash flow efficiently. By using this API, you can modify specific information related to an account sweep, such as the amount, frequency, or destination of the sweep, to better meet your financial needs.

  **Limitations**

  PUT: A suitable name for the path could be:

PUT /savings-accounts/{savingsAccountId}/account-sweeps/{accountSweepId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/AccountSweep/{accountsweepid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ExBQ Trigger an account sweep transaction

  **Documentation**

  This API path allows you to trigger an account sweep transaction for a specific savings account. An account sweep transaction involves moving funds from one account to another to optimize the account's balance or to meet specific requirements. By updating an existing resource using a PUT method, you can initiate this transfer process for the specified savings account.

  **Limitations**

  PUT: A possible name for the path following REST best practices could be:
'/savings-accounts/{savingsAccountId}/account-sweeps/{accountSweepId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/AccountSweep/{accountsweepid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve details about a sweep facility or specific sweep transaction

  **Documentation**

  This API path allows you to retrieve details about a sweep facility or a specific sweep transaction associated with a consumer savings account. It provides information on payments, deposits, standing orders, sweeps, and liens related to the account identified by 'savingsaccountid' and the specific sweep activity identified by 'accountsweepid'. By making a GET request to this path, you can access data about the sweep transactions or facilities within the savings account.

  **Limitations**

  GET: The name of the path should be: /savings-accounts/{savingsAccountId}/account-sweeps/{accountSweepId}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/DepositsandWithdrawals/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InBQ Initialize deposit or withdrawal transaction

  **Documentation**

  This API path allows you to initiate a deposit or withdrawal transaction for a specific savings account identified by {savingsaccountid}. By making a POST request to this path, you can create a new deposit or withdrawal transaction for the savings account. This API handles the orchestration of consumer savings account services such as payments, deposits, standing orders, sweeps, and liens.

  **Limitations**

  POST: The name of the path should be:
'/savings-accounts/{savingsAccountId}/transactions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. UpBQ Update/correct a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update or correct a deposit or withdrawal transaction for a specific savings account. By using this path with the PUT method, you can modify details related to a particular deposit or withdrawal within the savings account, ensuring accurate and up-to-date records for the account transactions. This functionality helps manage and maintain the financial transactions associated with the savings account effectively.

  **Limitations**

  PUT: The appropriate name for this path following REST best practices would be:

PUT /savings-accounts/{savingsaccountid}/transactions/{transactionsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ExBQ Execute a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update an existing deposit or withdrawal transaction for a specific savings account. You can use this path to execute transactions such as deposits or withdrawals on a savings account identified by its unique ID. The API supports scheduled and ad-hoc transactions, standing orders, sweeps, and liens related to the savings account.

  **Limitations**

  PUT: A suitable name for the path could be something like:

'/savings-accounts/{savingsAccountId}/transactions/{transactionId}/execute'

Following REST best practices means using clear and descriptive resource names, using lowercase letters, and using hyphens to separate words in URLs for better readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve details about a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to retrieve details about a specific deposit or withdrawal transaction associated with a consumer's savings account. By providing the savings account ID and the ID of the deposit/withdrawal transaction, you can access information such as the transaction amount, date, and any other relevant details regarding that particular financial activity. This can help consumers track their transactions and manage their savings effectively.

  **Limitations**

  GET: A more appropriate RESTful path could be:

```
GET /savings-accounts/{savingsAccountId}/transactions/{transactionId}
``` 

This path follows REST best practices by using lowercase letters, hyphens to separate words, plural nouns for resource names, and descriptive endpoint names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/Payments/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. InBQ Initialize a payment transaction (can be single or repeating)

  **Documentation**

  This API path, located at /SavingsAccount/{savingsaccountid}/Payments/Initiate, allows users to initialize a payment transaction for a specific savings account. Users can create new resources for making payments from or depositing funds into the savings account. This API supports both one-time and recurring payment transactions, providing flexibility for managing finances.

  **Limitations**

  POST: The name of the path should be:

'/savings-accounts/{savingsAccountId}/payments/initiate'

Here are the reasons why this name follows REST best practices:

1. Lowercase letters: RESTful URLs should use lowercase letters to promote consistency and readability.

2. Plural nouns: The term "savings-accounts" is used in its plural form to indicate that the endpoint deals with a collection of savings accounts rather than a single account.

3. Use of hyphens: Hy

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. UpBQ Update a payment transaction configuration or specific transaction

  **Documentation**

  This API path allows you to update a specific payment transaction configuration or a particular transaction within a consumer savings account. This means you can make changes to how a payment is processed or update specific details related to a payment made from or deposited into the savings account. This operation helps manage and modify payment transactions for better control and accuracy within the account.

  **Limitations**

  PUT: The name of the path should be: 

/SavingsAccounts/{savingsaccountid}/Payments/{paymentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/Payments/{paymentsid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. EcBQ Verify/approve a scheduled repeating payment

  **Documentation**

  This API path allows you to update a scheduled repeating payment associated with a specific savings account. By making a PUT request to this endpoint with the savings account ID and payment ID parameters, you can verify or approve the scheduled payment. This action is part of managing a consumer savings account and involves services like payments, deposits, standing orders, sweeps, and liens.

  **Limitations**

  PUT: A RESTful path should ideally use nouns to represent resources rather than verbs. Following this principle, the name of the path could be: 

/savingsaccounts/{savingsaccountid}/payments/{paymentsid}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/Payments/{paymentsid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ExBQ Trigger a payment for a repeating payment set up

  **Documentation**

  This API path allows you to trigger a payment for a repeating payment setup within a specific savings account. By making a PUT request to this endpoint with the savings account ID and payment ID, you can execute the payment as part of the scheduled payments for the account. This functionality is useful for managing regular payments, such as monthly contributions or transfers, within a savings account.

  **Limitations**

  PUT: The name of this path should be:

`/savings-accounts/{savingsAccountId}/payments/{paymentId}`

Following REST best practices means using lowercase letters and hyphens to separate words in the path, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. ReBQ Retrieve details about a payment transaction or arrangement

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific payment transaction or arrangement associated with a savings account. By providing the savings account ID and payment ID in the request, you can access information related to payments made from or scheduled for the account, including deposits, standing orders, sweeps, and liens. This API helps you get specific information about a payment transaction or arrangement within the context of a consumer savings account.

  **Limitations**

  GET: The name of the path should be: `/savings-accounts/{savingsaccountid}/payments/{paymentsid}`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SavingsAccount/{savingsaccountid}/IssuedDevice/Initiate</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. Initiate Provision of Issued Device

  **Documentation**

  This API path allows you to initiate the provision of an issued device related to a specific savings account. By making a POST request to this endpoint with the savings account ID, you can create a new resource that starts the process of providing a device associated with the savings account, such as a card or token. This feature is part of the consumer savings account service that includes various services and fees like deposits, payments, standing orders, sweeps, and liens.

  **Limitations**

  POST: A good name for the path following REST best practices could be:

/savings-accounts/{savingsAccountId}/issued-devices/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a specific issued device that is allocated to a savings account. This could involve modifying information related to the device assigned to the account, such as updating its configuration, status, or any other relevant details.

  **Limitations**

  PUT: The name of the path should be as follows according to REST best practices:

/savings-accounts/{savingsAccountId}/issued-devices/{issuedDeviceId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /SavingsAccount/{savingsaccountid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about the issued device associated with a specific savings account. This could include information about the device linked to the account, such as its status, model, or other relevant details. It's a way to access specific information about devices connected to a savings account within this service domain.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

'/savings-accounts/{savingsAccountId}/issued-devices/{issuedDeviceId}' or '/savings-accounts/{savingsAccountId}/issued-devices/{issuedDeviceId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. Update details about an applied service fee

  **Documentation**

  This API path allows you to update the details of a service fee associated with a specific savings account. You can make changes to the applied service fee by providing the savings account ID and the service fee ID, and then updating the necessary information using the PUT method. This functionality is part of managing a consumer savings account and includes services like payments, deposits, standing orders, sweeps, and liens.

  **Limitations**

  PUT: The name of the path following REST best practices should be something like:

'/savings-accounts/{savingsAccountId}/service-fees/{serviceFeesId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SavingsAccount/{savingsaccountid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a consumer savings account. The typical range of services and fees covers payments from and scheduled and ad-hoc deposits to the account, standing orders, sweeps, and liens. Execute authorization of booking

  **Documentation**

  This API path allows you to update an existing booking authorization for a consumer savings account. It enables you to execute the authorization of a booking for activities related to payments, deposits, standing orders, sweeps, and liens. By sending a PUT request to this endpoint with the appropriate IDs, you can perform actions like confirming a payment or deposit on the savings account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`POST /savings-accounts/{savingsAccountId}/booking-authorizations/{bookingAuthorizationId}/execute`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
