<h1 style='color:red;'>CorporateCurrentAccount</h1>

**BIAN Documentation:** [CorporateCurrentAccount v12](https://app.swaggerhub.com/apis/BIAN-3/CorporateCurrentAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InCR Initiate A new Corporate Current Account

  **Documentation**

  This API path (/CorporateCurrentAccount/Initiate) allows users to create a new corporate checking or demand deposit account. By sending a POST request to this endpoint, the system will initiate the process of setting up a new account for a corporate entity. This account can be used for various financial activities such as making payments, receiving deposits, setting up standing orders, managing funds through sweeps, establishing liens, and accessing funds through checks and debit cards. Essentially, this API path enables the creation of a corporate current account with a range of banking services and features.

  **Limitations**

  POST: If the path '/CorporateCurrentAccount/Initiate' followed REST best practices, it should be named using nouns that represent resources rather than actions. One way to refactor it could be '/CorporateCurrentAccounts', where you could use standard HTTP methods like POST to initiate a new Corporate Current Account.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpCR Update details of a corporate current account

  **Documentation**

  This API path allows you to update the details of a specific corporate current account. It is used to make changes to the services and fees associated with the account, such as payments, deposits, standing orders, and access methods like checks and debit cards. By sending a PUT request to this path with the appropriate account ID, you can modify the information related to the corporate current account.

  **Limitations**

  PUT: Based on REST best practices, the path should be named using nouns and avoid indicating actions or operations. Additionally, it should be descriptive and represent the resource being updated. Therefore, a suitable name for the path '/CorporateCurrentAccount/{corporatecurrentaccountid}/Update' could be:

'/CorporateCurrentAccount/{corporatecurrentaccountid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/Control</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. CoCR Control the processing of a corporate current account

  **Documentation**

  This BIAN API path allows you to update or control the processing of a specific corporate checking or demand deposit account. This includes managing services and fees such as payments, deposits, standing orders, sweeps, liens, and access through checks and debit cards. By using this API, you can make changes or adjustments to how the account is processed or managed within the financial institution's systems.

  **Limitations**

  PUT: The path '/CorporateCurrentAccount/{corporatecurrentaccountid}/Control' could be named as '/corporate-current-accounts/{corporatecurrentaccountid}/control' following REST best practices. 

In this naming convention:
- Path segments are in lowercase
- Hyphens are used to separate words in the path segments
- Path parameters are enclosed in curly braces and expressed in camelCase

This naming convention makes the path more readable and aligned with RESTful design principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReCR Retrieve information about a corporate current account - either standard canned reports or selected instance attribute values

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific corporate current account identified by its ID. You can access details related to services offered, fees, payments, deposits, standing orders, sweeps, liens, and card access. This API provides the flexibility to retrieve either standard reports or specific attribute values associated with the corporate current account.

  **Limitations**

  GET: The name of the path should be:

`/corporate-current-accounts/{corporate_current_account_id}`

In RESTful conventions, path parameters should be in "snake_case" format, and the resource name should be in plural form. The `/Retrieve` part should be omitted as it is not necessary in RESTful paths.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details of an interest transaction applied internally to the account

  **Documentation**

  This API path allows you to retrieve details of an interest transaction that was applied internally to a specific corporate current account. The transaction could be related to the interest generated or applied to the account. By using this path with the appropriate account and interest IDs, you can access information about how interest was calculated or credited to the account.

  **Limitations**

  GET: In accordance with REST best practices, the name of the path '/CorporateCurrentAccount/{corporatecurrentaccountid}/Interest/{interestid}/Retrieve' should be:

GET /corporate-current-accounts/{corporatecurrentaccountid}/interests/{interestid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initiate service fees against an account

  **Documentation**

  This API path allows you to create and initiate service fees for a specific corporate current account. It provides functionality for managing fees related to payments, deposits, standing orders, sweeps, liens, and access through check and debit cards. By making a POST request to this path with the appropriate parameters, you can set up and trigger service fees for the specified corporate current account.

  **Limitations**

  POST: Based on RESTful best practices, the path '/CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/Initiate' can be named as:

```
/CorporateCurrentAccounts/{corporatecurrentaccountid}/ServiceFees
```

In this updated path, the plural form 'CorporateCurrentAccounts' is used to represent the collection of corporate current accounts. The 'ServiceFees' resource is directly referenced under the current account resource to maintain a clear and hierarchical structure. The verb

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Apply a service fee to the account

  **Documentation**

  This API path allows you to update an existing service fee associated with a specific corporate checking or demand deposit account. By sending a PUT request to this path with the appropriate account and service fee IDs, you can apply a service fee to the account, which may cover various services such as payments, deposits, standing orders, sweeps, liens, and check or debit card access.

  **Limitations**

  PUT: A suitable name for the path '/CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}/Execute' following REST best practices could be:

PUT /corporate-current-accounts/{corporatecurrentaccountid}/service-fees/{servicefeesid}/execute

This name reflects the resource hierarchy and operation being performed in a clear and organized manner, following the conventions of RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve information about a service fee applied to the account

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific service fee applied to a corporate current account. By providing the unique identifiers for the corporate current account and the service fee, you can access details such as the cost, terms, and conditions associated with that particular fee. This API helps in managing and understanding the fees related to corporate checking/demand deposit accounts.

  **Limitations**

  GET: A more appropriate name for the path `/CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}/Retrieve` would be `/corporate-current-accounts/{corporatecurrentaccountid}/service-fees/{servicefeesid}` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountLien/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Set up an account lien

  **Documentation**

  This BIAN API path is used to initiate the process of setting up an account lien for a specific corporate current account. A lien is a legal claim on an asset as security for a debt or obligation. In this case, the API allows users to create a new lien on the corporate checking/demand deposit account, providing a layer of protection or guarantee for certain transactions or obligations related to the account.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/CorporateCurrentAccounts/{corporatecurrentaccountid}/AccountLiens
```

This path is more simplified, consistent, and follows the conventions of RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountLien/{accountlienid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update details of an existing account lien

  **Documentation**

  This API path is used to update the details of an existing account lien within a corporate current account. It enables users to make modifications to the account lien information, such as adjusting the terms or updating relevant data. This action can be performed using the PUT method to ensure that the account lien details are accurately reflected and up to date within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/corporate-current-accounts/{corporateCurrentAccountId}/account-liens/{accountLienId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountLien/{accountlienid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. EcBQ Exchange (i.e. confirm, reject) details of an account lien

  **Documentation**

  This API path allows you to update the details of an existing account lien within a corporate checking/demand deposit account. The API enables confirmation or rejection of the account lien exchange, providing control over the financial transactions and activities related to the account.

  **Limitations**

  PUT: The ideal name for this path following REST best practices would be:

`/corporate-current-accounts/{corporatecurrentaccountid}/account-liens/{accountlienid}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountLien/{accountlienid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about an account lien

  **Documentation**

  This BIAN API path allows you to retrieve details about an account lien within a specific corporate current account. It is used to fetch information related to any liens placed on the funds in the account. A lien is a legal claim against the account, typically used as security for a debt or other obligation. By using this API, you can access specific details about the lien associated with a particular corporate current account.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:
'/corporate-current-accounts/{corporatecurrentaccountid}/account-liens/{accountlienid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountSweep/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Set up an account sweep

  **Documentation**

  This API path allows users to initiate the setup of an account sweep for a specific corporate current account. An account sweep is a service that automatically transfers funds from one account to another to maintain a certain balance or to utilize funds more efficiently. By using this API, users can set up and configure account sweeps for their corporate checking/demand deposit accounts to manage their finances effectively.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be "/corporate-current-accounts/{corporate-current-account-id}/account-sweep/initiate". 

In this format, we use lowercase letters and hyphens to separate words in the path. Additionally, we use plural nouns for collections and singular nouns for resources. The use of specific identifiers like "corporate-current-account-id" helps to provide clarity and structure to the API path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountSweep/{accountsweepid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update details of an existing account sweep

  **Documentation**

  This BIAN API path allows you to update the details of an existing account sweep within a corporate current account. An account sweep is a service that automatically transfers funds between accounts to maintain a target balance or optimize interest earnings. By using this API, you can modify the settings or parameters of an account sweep for a specific corporate current account identified by `corporatecurrentaccountid` and the account sweep identified by `accountsweepid`.

  **Limitations**

  PUT: The name of the path should be as follows adhering to REST best practices - 

PUT /corporate-current-accounts/{corporatecurrentaccountid}/account-sweeps/{accountsweepid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountSweep/{accountsweepid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Trigger an account sweep transaction

  **Documentation**

  This API path allows you to trigger an account sweep transaction for a specific corporate current account. An account sweep transaction involves moving excess funds from one account to another to optimize the balance and maximize interest earnings. By executing this PUT method, you can update and initiate an account sweep for the designated corporate current account.

  **Limitations**

  PUT: The recommended path name following REST best practices for the given scenario would be:

```
/CorporateCurrentAccounts/{corporatecurrentaccountid}/AccountSweeps/{accountsweepid}/Executions
```

This path reflects the hierarchical structure of the resources, uses plural nouns to represent collections, and uses lowercase letters for consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/AccountSweep/{accountsweepid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a sweep facility or specific sweep transaction

  **Documentation**

  This API path allows you to retrieve information about a specific sweep facility or a particular sweep transaction within a corporate current account. It provides details about how funds are managed and transferred between different accounts, giving insight into the movement of money for the organization.

  **Limitations**

  GET: The name of the path should be: 

`/corporate-current-accounts/{corporatecurrentaccountid}/account-sweeps/{accountsweepid}`

This path follows RESTful naming guidelines by using lowercase letters, separating words with hyphens, and using plural nouns to represent collections.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/DepositsandWithdrawals/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initialize deposit or withdrawal transaction

  **Documentation**

  This API path allows you to create a new transaction for a corporate checking or demand deposit account. It facilitates initiating deposits or withdrawals for the specified corporate account ID. This service encompasses various banking services such as payments, deposits, standing orders, sweeps, and more, relating to corporate current accounts.

  **Limitations**

  POST: A more RESTful name for the path could be:

'/corporate-current-accounts/{corporate_current_account_id}/transactions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update/correct a deposit or withdrawal transaction

  **Documentation**

  This API path allows updating or correcting a deposit or withdrawal transaction associated with a specific Corporate Current Account. With the PUT method, you can modify details related to payments, deposits, standing orders, sweeps, liens, and access through checks and debit cards for the designated account. It provides a way to maintain accurate and up-to-date records of financial transactions for corporate checking accounts.

  **Limitations**

  PUT: The name of the path should be:

'/corporate-current-accounts/{corporatecurrentaccountid}/deposits-and-withdrawals/{depositsandwithdrawalsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Execute a deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update and execute a deposit or withdrawal transaction for a specific corporate current account. It allows you to make changes or perform actions related to payments, deposits, standing orders, sweeps, liens, check, and debit card access for the account identified by the provided IDs.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/CorporateCurrentAccounts/{corporatecurrentaccountid}/DepositsAndWithdrawals/{depositsandwithdrawalsid}/Execute

Here are some key points why this name is consistent with REST best practices:
1. Resource names should be in plural form - 'CorporateCurrentAccounts' and 'DepositsAndWithdrawals' are in plural form.
2. Resource names should be in camelCase - 'corporatecurrent

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a deposit or withdrawal transaction

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific deposit or withdrawal transaction made within a corporate current account. By providing the corporate current account ID and the ID of the specific deposit/withdrawal transaction, you can use this API to access information such as transaction date, amount, and other related details.

  **Limitations**

  GET: The REST best practice for naming resources in a path is to use nouns to describe the resource and not include any action verbs like "Retrieve." Based on the path you provided, a more appropriate name following REST conventions would be:

'/corporate-current-accounts/{corporatecurrentaccountid}/transactions/{transactionid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/Payments/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. InBQ Initialize a payment transaction

  **Documentation**

  This BIAN API path allows you to initialize a payment transaction for a specific corporate current account. By sending a POST request to this endpoint with the relevant corporate current account ID, you can create a new resource to trigger a payment from the account. This functionality provides the ability to initiate various payment actions such as transfers, bill payments, or any other transactions related to the corporate checking/demand deposit account.

  **Limitations**

  POST: Following REST best practices, the name of the path could be:

'/corporate-current-accounts/{corporate_current_account_id}/payments/initiate'

Key considerations for naming the path according to REST conventions include using lowercase letters, using hyphens to separate words, and being clear and descriptive about the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. UpBQ Update a payment transaction configuration or specific transaction

  **Documentation**

  This BIAN API path allows you to update a specific payment transaction configuration or transaction associated with a corporate current account. By using this pathway with a PUT method, you can make changes to existing payment details or settings connected to a corporate checking/demand deposit account identified by its unique ID.

  **Limitations**

  PUT: A suitable name for the path would be:

```
PUT /corporate-current-accounts/{corporatecurrentaccountid}/payments/{paymentsid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/Payments/{paymentsid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. EcBQ Verify/approve a scheduled repeating payment

  **Documentation**

  This API path is used to update an existing scheduled repeating payment linked to a corporate current account. It allows the user to verify or approve a payment transaction associated with a specific corporate current account and payment ID. The service manages various banking activities such as payments, deposits, standing orders, sweeps, and more for corporate checking/demand deposit accounts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CorporateCurrentAccounts/{corporatecurrentaccountid}/Payments/{paymentsid}/Exchange
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/Payments/{paymentsid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ExBQ Trigger a payment for a repeating payment set up

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a corporate current account. Specifically, it enables you to trigger a payment for a repeating payment set up within the corporate current account identified by {corporatecurrentaccountid}. By making a PUT request to this path with the specific {paymentsid}, you can execute the payment transaction associated with the repeating payment set up. This API is designed to facilitate managing payments for corporate checking/demand deposit accounts efficiently.

  **Limitations**

  PUT: A suitable name for the path following REST best practices could be:

```plaintext
/CorporateCurrentAccounts/{corporatecurrentaccountid}/Payments/{paymentsid}/Execute
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. ReBQ Retrieve details about a payment transaction or arrangement

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific payment transaction or arrangement within a corporate current account. By providing the corporate current account ID and the payment ID, you can access information such as transaction status, payment details, and any associated arrangements. This functionality enables users to easily access and analyze specific payment transactions or arrangements within the corporate current account system.

  **Limitations**

  GET: The path should be named as:

'/corporate-current-accounts/{corporatecurrentaccountid}/payments/{paymentsid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateCurrentAccount/{corporatecurrentaccountid}/IssuedDevice/Initiate</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Initiate Provision of Issued Device

  **Documentation**

  This API path allows you to initiate the provision of an issued device related to a specific corporate current account. The issued device could be a checkbook, debit card, or any other physical device provided by the financial institution for use with the corporate account. By using this API, you can request the creation of a new resource corresponding to the issuance of the device for the specified corporate current account.

  **Limitations**

  POST: The name of the path should be:

```
/CorporateCurrentAccounts/{corporatecurrentaccountid}/IssuedDevices/Initiate
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Update Details of Issued Device Allocated to This Account

  **Documentation**

  This BIAN API path allows you to update the details of a specific issued device that is allocated to a corporate current account. This could involve modifying information related to the device such as ownership, status, or any other relevant details. By using a PUT method, users can make changes to the issued device associated with a particular corporate checking/demand deposit account.

  **Limitations**

  PUT: The name of the path should be:

PUT /CorporateCurrentAccount/{corporatecurrentaccountid}/IssuedDevice/{issueddeviceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateCurrentAccount/{corporatecurrentaccountid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about an issued device related to a specific corporate current account. This could include information about devices such as check scanners, debit card terminals, or any other device associated with managing the corporate checking account. By using this API, you can access specific information about the device assigned to the corporate current account.

  **Limitations**

  GET: A possible naming convention following REST best practices for the path described could be:

'/corporate-current-accounts/{corporatecurrentaccountid}/issued-devices/{issueddeviceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Update details about an applied service fee

  **Documentation**

  This API path allows you to update the details of a specific service fee applied to a corporate current account. You can modify information such as the amount of the fee, the type of service it is related to, or any other details associated with that particular service fee.

  **Limitations**

  PUT: The name of the path should be:

PUT /CorporateCurrentAccount/{corporatecurrentaccountid}/ServiceFees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateCurrentAccount/{corporatecurrentaccountid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This service domain orchestrates a corporate checking/demand deposit account. The typical range of services and fees covers payments and deposits, standing orders, sweeps, liens, check and debit card access. Execute Authorization of Booking

  **Documentation**

  This API path allows you to update the authorization status of a specific booking associated with a corporate current account. By sending a PUT request to this endpoint with the appropriate IDs, you can execute the authorization for a booking related to the account. This action is part of managing the various services and activities linked to the corporate checking/demand deposit account, such as payments, deposits, standing orders, sweeps, liens, check, and debit card access.

  **Limitations**

  PUT: The name of the path should be:

'/corporate-current-accounts/{corporatecurrentaccountid}/booking-authorizations/{bookingauthorizationid}/execute' 

Following REST best practices, the path should use lowercase letters and hyphens to separate words for better readability and consistency.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
