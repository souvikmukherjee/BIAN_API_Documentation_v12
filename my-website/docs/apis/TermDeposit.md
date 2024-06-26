<h1 style='color:red;'>TermDeposit</h1>

**BIAN Documentation:** [TermDeposit v12](https://app.swaggerhub.com/apis/BIAN-3/TermDeposit/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InCR Initiate A new term deposit account

  **Documentation**

  This API path "/TermDeposit/Initiate" allows users to create a new term deposit account. It enables customers to place a fixed amount of funds for a specific period of time into an interest-bearing account. The API handles all processes related to opening, servicing, and maturing the term deposit account. This means that users can initiate the setup of a new term deposit account through this API endpoint.

  **Limitations**

  POST: Following REST best practices, the name of the path '/TermDeposit/Initiate' should be revised to use nouns that represent resources rather than verbs. One suggestion could be using the resource name 'term-deposits' instead of 'TermDeposit'. 

So, the improved path could be '/term-deposits/initiation' or '/term-deposits/initiate' based on the specific action being taken.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      UpCR Update details of a term deposit account

  **Documentation**

  This API path allows you to update the details of an existing term deposit account. It is used to modify specific information, such as the amount of funds placed or the duration of the deposit. This can be useful for adjustments or changes needed for a term deposit account within the banking system.

  **Limitations**

  PUT: In RESTful naming conventions, the path should represent a resource or a collection of resources rather than actions. Following this principle, a more appropriate name for the path you mentioned could be:

```
/TermDeposits/{termdepositid}
```

This reflects the resource (TermDeposit) and the specific TermDeposit instance identified by the {termdepositid}. Update operations in REST are typically represented by the HTTP PUT or PATCH methods on the existing resource URI.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/Control</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      CoCR Control the processing of a term deposit account

  **Documentation**

  This BIAN API path allows you to update or control the processing of a specific term deposit account identified by {termdepositid}. It is used to manage the opening, servicing, and maturity processing of a term deposit, which is an interest-bearing account where a customer can deposit a fixed amount of funds for a specific duration. By using this API, you can make changes or updates to the account related to its processing status.

  **Limitations**

  PUT: The REST best practice for naming paths involves using nouns to represent resources and avoiding verbs or actions in the path names. 

In this case, the path `'/TermDeposit/{termdepositid}/Control'` could be renamed to `'/TermDeposits/{termdepositid}/Controls'` to better align with REST conventions. The path now uses the resource name "Controls" as a plural noun to represent a collection of control resources related to a specific term deposit identified by `termdepositid

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReCR Retrieve information about a term deposit account - either standard canned reports or selected instance attribute values

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific term deposit account using its unique "termdepositid." You can access standard reports or specific attribute values related to the term deposit account. This API path is used to view details such as the fixed amount of funds placed, the duration of the deposit, and other relevant information about the account.

  **Limitations**

  GET: Based on REST best practices, the path '/TermDeposits/{termdepositid}' could be a more appropriate name for the resource that retrieves a specific term deposit by its ID.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve details of an interest transaction applied internally to the account

  **Documentation**

  This BIAN API path allows you to retrieve specific details of an interest transaction that has been applied internally to a Term Deposit account. By providing the `termdepositid` and `interestid` parameters in the URL, the API will return information related to the interest transaction associated with that particular Term Deposit account. This could include details such as the interest rate, amount of interest accrued, date of the transaction, and any other relevant information pertaining to the interest applied to the account.

  **Limitations**

  GET: Following REST best practices, the name of the path should be something like '/term-deposits/{termDepositId}/interests/{interestId}'. 

Here are some key principles followed in this naming convention:
1. Use lowercase letters for path segments
2. Use hyphens to separate words within a path segment
3. Use plural nouns for collections
4. Use singular nouns for single resources
5. Use resource identifiers (like termDepositId and interestId) instead of action verbs

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/ServiceFees/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InBQ Initiate service fees against an account

  **Documentation**

  This API path allows users to initiate service fees against a specific Term Deposit account identified by {termdepositid}. By making a POST request to this endpoint, users can create a new resource that triggers the initiation of service fees associated with the Term Deposit account. This process is part of managing and maintaining the Term Deposit account, ensuring that necessary service fees are applied as per the account's terms and conditions.

  **Limitations**

  POST: A suitable name for the path could be:

```
/term-deposits/{termdepositid}/service-fees/initiate
```

Here's a breakdown of the path name:

- All lowercase letters to maintain consistency.
- Resource names (term deposits, service fees) are represented in their plural form (term-deposits, service-fees).
- Specific resource identifiers like {termdepositid} are kept in lowercase with hyphens for readability.
- Action or operation initiating a service

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ExBQ Execute Apply Service Fee

  **Documentation**

  This API path is used to update an existing service fee associated with a specific term deposit. It allows a user to execute the application of a service fee to a particular term deposit by providing the term deposit ID and the service fee ID. The purpose of this API operation is to modify or update the details of a service fee applied to a term deposit account.

  **Limitations**

  PUT: Based on REST best practices, the commonly recommended naming convention for endpoints is to use nouns that represent resources rather than actions. With that in mind, a better name for the path '/TermDeposit/{termdepositid}/ServiceFees/{servicefeesid}/Execute' could be:

```
/TermDeposits/{termdepositid}/ServiceFees/{servicefeesid}
```

If the endpoint is intended to trigger an action, a common approach is to use HTTP methods to represent

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve information about a service fee applied to the account

  **Documentation**

  This API path allows you to retrieve information about a specific service fee that has been applied to a Term Deposit account. By providing the Term Deposit ID and the Service Fees ID, you can access details about the service fee associated with that account. This information can include the type of fee, amount, and any other relevant details related to the service fee.

  **Limitations**

  GET: The name of the path should be: 

GET '/term-deposits/{termdepositid}/service-fees/{servicefeesid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/AccountLien/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InBQ Set up an account lien

  **Documentation**

  This API path allows you to initiate the setup of an account lien for a specific term deposit identified by {termdepositid}. An account lien is essentially a claim placed on the funds in the term deposit account to secure a debt or obligation. By making a POST request to this API, you can create a new resource that establishes a lien on the specified term deposit account for the designated purpose.

  **Limitations**

  POST: The name of the path should ideally be: 

```
/term-deposits/{termDepositId}/account-liens/initiate
```

Here's the breakdown of the changes made:
- Use lowercase letters for path segments.
- Use hyphens to separate words in path segments.
- Use plural nouns for collection resources (e.g., term-deposits).
- Use singular nouns for individual resources (e.g., termDepositId) for consistency.
- Avoid using camelCase or Pascal

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/AccountLien/{accountlienid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      UpBQ Update details of an existing account lien

  **Documentation**

  This API path allows you to update the details of an existing account lien associated with a specific term deposit. An account lien is a legal claim against an asset, in this case, related to the term deposit account. By making a PUT request to this endpoint with the appropriate term deposit ID and account lien ID, you can modify the information or terms of the account lien, such as adjusting the amount or updating maturity details.

  **Limitations**

  PUT: The path should be named as:

PUT /term-deposits/{termdepositId}/account-liens/{accountlienId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/AccountLien/{accountlienid}/Exchange</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      EcBQ Exchange (i.e. confirm, reject) details of an account lien

  **Documentation**

  This BIAN API path allows you to update the details of an account lien associated with a specific term deposit. By using a PUT request on this path, you can confirm or reject the exchange details related to the account lien. An account lien typically represents a claim or security interest on the funds placed in a term deposit account. This API helps in managing the interactions and status updates related to account liens within the context of term deposits.

  **Limitations**

  PUT: If the path '/TermDeposit/{termdepositid}/AccountLien/{accountlienid}/Exchange' follows all REST best practices, a suitable name for it could be:

'/term-deposits/{termdepositid}/account-liens/{accountlienid}/exchanges'

This name follows the convention of using lowercase letters, using hyphens to separate words, and using plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/AccountLien/{accountlienid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve details about an account lien

  **Documentation**

  This API path ("/TermDeposit/{termdepositid}/AccountLien/{accountlienid}/Retrieve") allows you to retrieve details about an account lien related to a specific term deposit. By providing the term deposit ID and the account lien ID, you can get information about the account lien associated with that term deposit. This can include details such as the amount of the lien, any relevant terms or conditions, and other relevant account information.

  **Limitations**

  GET: The name of the path should be:

'/termdeposits/{termdepositid}/account-liens/{accountlienid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/AccountSweep/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InBQ Set up an account sweep

  **Documentation**

  This API path allows the user to initiate setting up an account sweep for a specific term deposit identified by {termdepositid}. An account sweep is a service that automatically transfers funds from one account to another to maintain a certain balance or to maximize interest earnings. By calling this API with the appropriate parameters, the user can trigger the process of setting up an account sweep for a term deposit account.

  **Limitations**

  POST: The name of the path should be: 

```
/termDeposits/{termDepositId}/accountSweeps/initiate
``` 

where:
- termDeposits: it is used in plural form for representing collections.
- termDepositId: it should be in camelCase and represent a specific term deposit identifier.
- accountSweeps: it is used in plural form for representing collections.
- initiate: it describes the action that will be taken on that resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/AccountSweep/{accountsweepid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      UpBQ Update details of an existing account sweep

  **Documentation**

  This API path allows you to update the details of an existing account sweep associated with a specific term deposit. Users can make changes to the account sweep attributes such as account sweep ID, amount, or any other relevant information. The API ensures that the account sweep's details are accurately maintained and updated within the term deposit service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /term-deposits/{termdepositid}/account-sweeps/{accountsweepid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/AccountSweep/{accountsweepid}/Execute</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ExBQ Trigger an account sweep transaction

  **Documentation**

  This API path is used to trigger an account sweep transaction related to a specific Term Deposit and a specific Account Sweep. An account sweep transaction is a process where funds from one account are automatically transferred to another account to meet a specific need or threshold. By executing this API path with the PUT method, it updates the existing resource associated with the specified Term Deposit and Account Sweep, initiating the account sweep transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/term-deposits/{termdepositid}/account-sweeps/{accountsweepid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/AccountSweep/{accountsweepid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve details about a sweep facility or specific sweep transaction

  **Documentation**

  This API path allows you to retrieve details about a sweep facility or a specific sweep transaction associated with a Term Deposit account. By providing the Term Deposit ID and the Account Sweep ID as parameters in the request, you can retrieve information related to the sweep facility or transaction, which may include details about how funds are moved between accounts, the timing of the transfers, and any associated terms or conditions.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`GET /term-deposits/{termdepositId}/account-sweeps/{accountsweepId}`

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/DepositsandWithdrawals/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InBQ Initialize deposit or withdrawal transaction

  **Documentation**

  This BIAN API path allows you to initiate a new deposit or withdrawal transaction for a specific Term Deposit identified by its termdepositid. This means you can use this endpoint to start the process of depositing or withdrawing funds from a Term Deposit account. The API handles the initialization of the transaction, enabling customers to place a fixed amount of funds into or withdraw funds from their interest-bearing Term Deposit account.

  **Limitations**

  POST: The name of the path should be `/term-deposits/{termdepositid}/transactions`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      UpBQ Update/correct a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update or correct a deposit or withdrawal transaction associated with a specific Term Deposit. You would need to provide the ID of the Term Deposit and the ID of the specific deposit or withdrawal transaction that you want to update. Using the PUT method, you can make changes to the existing transaction details such as the amount or date. This functionality is helpful for maintaining accurate records and ensuring the correctness of deposit and withdrawal information for a Term Deposit account.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PUT '/TermDeposit/{termdepositid}/DepositsandWithdrawals/{depositsandwithdrawalsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Execute</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ExBQ Execute a deposit or withdrawal transaction

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a Term Deposit. Specifically, it enables the execution of a deposit or withdrawal transaction for a specific Term Deposit identified by the {termdepositid}, and the associated deposit or withdrawal transaction identified by {depositsandwithdrawalsid}. In simple terms, this API endpoint is used to carry out deposit or withdrawal actions on a Term Deposit account.

  **Limitations**

  PUT: A suitable name for that path following REST best practices could be:

`/term-deposits/{termdepositid}/transactions/{depositsandwithdrawalsid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve details about a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to retrieve details about a specific deposit or withdrawal transaction linked to a term deposit account. By providing the term deposit ID and the deposits and withdrawals ID as parameters in the request, you can access information about a particular transaction associated with the term deposit account. This information could include details such as the transaction amount, date, type (deposit or withdrawal), and any other relevant details pertaining to that specific transaction.

  **Limitations**

  GET: The name of the path should be:  
  
`GET /term-deposits/{termdepositid}/transactions/{transactionid}`

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/Payments/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      InBQ Initialize a payment transaction (can be single or repeating)

  **Documentation**

  This API path allows you to initiate a payment transaction related to a specific Term Deposit identified by its termdepositid. You can use this API to create a new payment transaction for the Term Deposit, which can be a one-time payment or a recurring payment. This action is part of managing the Term Deposit service, enabling customers to deposit funds and manage payments related to their Term Deposits.

  **Limitations**

  POST: Based on REST best practices, the appropriate name for the path '/TermDeposit/{termdepositid}/Payments/Initiate' could be:

`POST /term-deposits/{termdepositid}/payments`

This naming convention follows RESTful principles by using lowercase letters, using hyphens to separate words for better readability, and clearly indicating the action being performed (initiating a payment) through the HTTP method (`POST`).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      UpBQ Update a payment transaction configuration or specific transaction

  **Documentation**

  This BIAN API path allows you to update a specific payment transaction configuration or transaction associated with a Term Deposit. By providing the Term Deposit ID and the Payment ID, you can make changes to the payment details or configuration related to that specific transaction within the Term Deposit account. This operation allows for modifications to be made to the payment settings or specific transactions linked to the Term Deposit account.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
PUT /TermDeposit/{termdepositid}/Payments/{paymentsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/Payments/{paymentsid}/Exchange</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      EcBQ Verify/approve a scheduled repeating payment

  **Documentation**

  This API path allows you to update or change information related to a scheduled repeating payment for a specific Term Deposit account. This could involve verifying or approving the payment and ensuring that it aligns with the terms and conditions of the Term Deposit account.

  **Limitations**

  PUT: Based on REST best practices, the path name should be as follows: 

'/term-deposits/{termdepositid}/payments/{paymentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/Payments/{paymentsid}/Execute</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ExBQ Trigger a payment for a repeating payment set up

  **Documentation**

  This API path, /TermDeposit/{termdepositid}/Payments/{paymentsid}/Execute, allows users to trigger a payment for a repeating payment set up related to a Term Deposit account. By making a PUT request to this endpoint with the specified term deposit ID and payments ID, customers can initiate a payment for the set up that involves transferring funds regularly from the Term Deposit account. This action can be used to execute scheduled payments associated with the account.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

`POST /termdeposits/{termdepositid}/payments/{paymentsid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      ReBQ Retrieve details about a payment transaction or arrangement

  **Documentation**

  This API path allows you to retrieve details about a payment transaction or arrangement related to a specific Term Deposit. By providing the Term Deposit ID and the Payment ID, you can request information about payments associated with that particular Term Deposit. This can include details such as amount, date, and other relevant information about the payment transactions linked to the Term Deposit.

  **Limitations**

  GET: A more appropriate name for the path '/TermDeposit/{termdepositid}/Payments/{paymentsid}/Retrieve' following REST best practices could be '/term-deposits/{termdepositid}/payments/{paymentsid}'. It uses lowercase letters, separates words with dashes, and provides a clear and descriptive structure for the resource hierarchy, making it more user-friendly and aligned with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /TermDeposit/{termdepositid}/IssuedDevice/Initiate</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      Initiate Provision of Issued Device

  **Documentation**

  This API path allows you to initiate the provision of an issued device related to a specific Term Deposit. By making a POST request to this endpoint with the term deposit ID, you can create a new resource that triggers the process of providing the customer with a device associated with their Term Deposit account. This could involve issuing a physical device, such as a card or token, or providing digital access for managing the Term Deposit. This API facilitates the initiation of the provision of such devices as part of the overall Term Deposit service.

  **Limitations**

  POST: The name of the path could be "/termDeposits/{termDepositId}/issuedDevices/initiate". 

It follows REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for resources (`termDeposits`, `issuedDevices`). The path is also clear and descriptive of the action being performed, which is initiating an issued device for a specific term deposit.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a device that has been allocated to a specific term deposit account. By making a PUT request to this path with the appropriate term deposit ID and issued device ID, you can modify or update information related to the device associated with that term deposit account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /term-deposits/{termdepositid}/issued-devices/{issueddeviceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /TermDeposit/{termdepositid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about an issued device related to a specific term deposit. By providing the term deposit ID and the issued device ID, you can access information about the device associated with that particular term deposit.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/term-deposits/{termdepositid}/issued-devices/{issueddeviceid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      Update details about an applied service fee

  **Documentation**

  This API path allows you to update the details of a service fee applied to a specific Term Deposit. By providing the Term Deposit ID and Service Fee ID, you can make changes to the information related to the service fee, such as the fee amount, description, or any other details associated with it. This helps in managing and maintaining accurate information about the service fees applied to Term Deposits within the system.

  **Limitations**

  PUT: The name of the path following RESTful best practices could be:

PUT /TermDeposits/{termdepositid}/ServiceFees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TermDeposit/{termdepositid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  A Term Deposit is an interest bearing account into which a customer can place a fixed amount of funds for a fixed amount of time. The Service Domain handles the opening, servicing and maturity processing of a Term Deposit.      Execute Authorization of Booking

  **Documentation**

  This API path allows you to update an existing booking authorization for a specific term deposit. By executing the booking authorization, you are confirming and finalizing the process of opening, servicing, or processing the maturity of a term deposit account. The term deposit is an interest-bearing account where customers can deposit a fixed amount of funds for a specified period of time.

  **Limitations**

  PUT: Based on REST best practices, the path should be named like: 

"/term-deposits/{termDepositId}/booking-authorizations/{bookingAuthorizationId}/execute"

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
