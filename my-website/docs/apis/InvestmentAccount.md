<h1 style='color:red;'>InvestmentAccount</h1>

**BIAN Documentation:** [InvestmentAccount v12](https://app.swaggerhub.com/apis/BIAN-3/InvestmentAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InvestmentAccount/Initiate</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary InCR Initiate a new securities investment account

  **Documentation**

  This API path allows users to initiate a new securities investment account for a customer. It enables the creation of a new resource within the system to manage non-cash holdings positions for the customer across various financial instruments. By sending a POST request to this path, users can set up a new investment account and begin managing investments on behalf of the customer.

  **Limitations**

  POST: The name of the path should be '/investment-accounts'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/Update</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary UpCR Update details of an investment account

  **Documentation**

  This API path allows you to update the details of an existing investment account identified by the investment account ID. It is used to modify any information related to the non-cash holdings positions within the account. These details can include various types of financial instruments held within the account. By sending a PUT request to this path with the necessary data, you can make changes to the specified investment account's information effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /investmentaccounts/{investmentaccountid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/Control</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary CoCR Control the processing of an investment account

  **Documentation**

  This BIAN API path allows you to update or control the processing of an existing investment account identified by its unique ID. It deals with managing the non-cash holdings positions within the account for a customer, including various types of financial instruments as required. By using this API, you can make changes or perform actions related to the investment account, such as modifying holdings or adjusting settings associated with the account.

  **Limitations**

  PUT: The recommended name for the path '/InvestmentAccount/{investmentaccountid}/Control' following REST best practices would be:

'/investment-accounts/{investmentaccountid}/controls'

This name is in plural form, using lowercase letters and separated by hyphens to improve readability and maintain consistency with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentAccount/{investmentaccountid}/Retrieve</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ReCR Retrieve information about an investment account - either standard canned reports or selected instance attribute values

  **Documentation**

  This API path retrieves information about an investment account for a customer. It allows you to access details such as the holdings positions of non-cash assets within the account. You can retrieve either pre-defined reports or specific attribute values related to the investment account using this API endpoint.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/InvestmentAccount/{investmentaccountid}/Retrieve' should be modified to better represent the resource being accessed. A more appropriate name for the path could be something like '/investment-accounts/{investmentaccountid}' to clearly indicate that the resource being retrieved is an individual investment account. This follows the convention of using nouns in the path names to represent the resources being manipulated in a RESTful manner.

</details>

<details open>
  <summary><span style='color:red;'>POST: /InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/Initiate</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary InBQ Initiate/set-up securities deposit and withdrawal processing for the account

  **Documentation**

  This API path allows a user to initiate or set up the processing of deposits and withdrawals for a specific investment account. It deals with managing non-cash holdings, such as securities, for a customer. By using this path with a POST request, the user can create a new resource to facilitate the deposit and withdrawal transactions for the specified investment account.

  **Limitations**

  POST: The name of the path '/InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/Initiate' following REST best practices should be:

'/investment-accounts/{investmentAccountId}/transactions/deposit-withdrawal/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Update</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary UpBQ Update securities deposit and withdrawal settings or transactions

  **Documentation**

  This API path allows you to update the settings or transactions related to deposits and withdrawals within a specific investment account for a customer. This service manages non-cash holdings such as securities and helps in processing the necessary updates for these transactions. By using the PUT method, you can modify existing resources within the specified deposits and withdrawals ID associated with the investment account.

  **Limitations**

  PUT: In RESTful API design, the path naming should use nouns to represent resources and avoid actions or verbs. Following this convention, the proper name for the path would be:

'/investmentaccounts/{investmentaccountid}/depositsandwithdrawals/{depositsandwithdrawalsid}'

This path represents the specific deposit or withdrawal associated with a particular investment account. If you need to update this resource, you typically use HTTP methods like PUT or PATCH on this resource URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Exchange</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary EcBQ Accept, reject, etc a securities deposit or withdrawal action

  **Documentation**

  This API path allows you to update an existing deposit or withdrawal transaction for a specific investment account. It is designed to manage non-cash holdings positions for a customer, which can involve various financial instruments. The PUT method is used to modify the details of a deposit or withdrawal transaction, such as accepting or rejecting a securities transfer action.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/investment-accounts/{investmentAccountId}/transactions/{transactionId}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Execute</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ExBQ Execute a securities deposit or withdrawal transaction

  **Documentation**

  This API path allows you to update an existing deposit or withdrawal transaction in an investment account for a customer. It handles the non-cash holdings positions, such as securities, within the account. By executing this API, you can make changes to the details of a specific deposit or withdrawal transaction associated with the investment account identified by the investmentaccountid.

  **Limitations**

  PUT: The name of the path should be:
/investment-accounts/{investmentaccountid}/transactions/{depositsandwithdrawalsid}/execute

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentAccount/{investmentaccountid}/DepositsandWithdrawals/{depositsandwithdrawalsid}/Retrieve</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ReBQ Retrieve details about a securities deposit or withdrawal action

  **Documentation**

  This API path allows you to retrieve details about a securities deposit or withdrawal action within a specific investment account. By providing the investment account ID and the deposits and withdrawals ID, you can access information about the specific non-cash holdings transactions related to securities within that account. This can include details such as the date, amount, and type of the deposit or withdrawal made in the account.

  **Limitations**

  GET: A suitable name for the path following REST best practices could be:

```plaintext
GET /investment-accounts/{investmentAccountId}/transactions/{transactionId}
``` 

This conveys the resource hierarchy with clear naming conventions, identifying the investment account and the specific transaction being retrieved.

</details>

<details open>
  <summary><span style='color:red;'>POST: /InvestmentAccount/{investmentaccountid}/CorporateAction/Initiate</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary InBQ Initiate/set-up corporate action processing for the account

  **Documentation**

  This API path allows you to initiate or set up corporate action processing for a specific investment account. This means that you can create a new resource to handle actions related to non-cash holdings positions for a customer within the specified account. It enables you to manage corporate actions such as dividends, mergers, acquisitions, and other events that may affect the investments in the account.

  **Limitations**

  POST: Based on REST best practices, a suitable name for the path '/InvestmentAccount/{investmentaccountid}/CorporateAction/Initiate' could be:

PUT /investment-accounts/{investmentaccountid}/corporate-actions/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/CorporateAction/{corporateactionid}/Update</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary UpBQ Update the settings or transaction details for a corporate action

  **Documentation**

  This API path allows you to update the settings or transaction details related to a corporate action for a specific investment account. It is designed to handle non-cash holdings positions for a customer, ensuring that the necessary adjustments or changes can be made to the corporate action details associated with the investment account. By using a PUT request with the specified investment account ID and corporate action ID, you can modify the settings or transaction information pertaining to a corporate action within the context of the investment account.

  **Limitations**

  PUT: The path could be named as:

/investment-accounts/{investmentAccountId}/corporate-actions/{corporateActionId}

REST best practices recommend using lowercase letters, separating words with hyphens, and keeping the path segments descriptive and concise.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/CorporateAction/{corporateactionid}/Exchange</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary EcBQ Confirm, accept, reject etc. a corporate action

  **Documentation**

  This API path allows you to update an existing corporate action related to a specific investment account. You can confirm, accept, or reject the corporate action using this endpoint, which manages the non-cash holdings positions for a customer.

  **Limitations**

  PUT: The name of the path should be:

'/investment-accounts/{investmentAccountId}/corporate-actions/{corporateActionId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/CorporateAction/{corporateactionid}/Execute</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ExBQ Execute the processing of a corporate action

  **Documentation**

  This API path allows for the updating of an existing corporate action within an investment account. Specifically, it enables the execution of the processing of a corporate action for a non-cash holdings position associated with a customer's investment account. By sending a PUT request to this path with the necessary investment account ID and corporate action ID, the system will carry out the required actions related to the corporate event.

  **Limitations**

  PUT: Following RESTful best practices, the name of the path could be:
`/investment-accounts/{investmentaccountid}/corporate-actions/{corporateactionid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentAccount/{investmentaccountid}/CorporateAction/{corporateactionid}/Retrieve</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ReBQ Retrieve details about corporate action processing

  **Documentation**

  This API path allows you to retrieve details about corporate action processing for a specific corporate action associated with an investment account. It is used to access information about changes or events that may affect non-cash holdings positions held in the investment account, such as dividends, stock splits, or mergers. By providing the investment account ID and corporate action ID, you can retrieve specific information related to how these corporate actions are being processed for that account.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/investment-accounts/{investmentAccountId}/corporate-actions/{corporateActionId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /InvestmentAccount/{investmentaccountid}/ServiceFees/Initiate</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary InBQ Initiate, set-up service fee processing for the account

  **Documentation**

  This API path allows you to initiate and set up service fee processing for a specific investment account identified by investmentaccountid. By making a POST request to this path, you can create a new resource that handles the non-cash holdings positions and service fees associated with the account. The service is designed to manage various financial instruments and processes related to the investment account.

  **Limitations**

  POST: A RESTful path for initiating service fees related to an investment account could be named as: 

```
/InvestmentAccounts/{investmentAccountId}/ServiceFees
```

In this naming convention:
- The resource name "InvestmentAccounts" is pluralized to represent a collection of investment accounts.
- The parameter "investmentAccountId" is placed within curly braces to represent a specific instance of an investment account.
- The action of initiating service fees is implied by the path construction.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary UpBQ Update service fee setting or service transaction details

  **Documentation**

  This API path allows you to update service fee settings or service transaction details for a specific service fee associated with a particular investment account. It is used to manage non-cash holdings positions and related transactions for a customer's investment account, such as changing service fees or updating transaction details. This API is beneficial for financial institutions or investment companies to efficiently handle service fee management for their customers' investment accounts.

  **Limitations**

  PUT: Based on REST best practices, the appropriate naming for the path would be:

PUT /investment-accounts/{investmentaccountid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/ServiceFees/{servicefeesid}/Exchange</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary EcBQ Accept, reject, etc a service fee transaction

  **Documentation**

  This API path allows you to update an existing service fee transaction for a specific investment account. It allows you to accept or reject a service fee transaction related to non-cash holdings positions in the investment account. This update can involve changes in the exchange of services or fees within the investment account.

  **Limitations**

  PUT: The path should be named as:

```
/InvestmentAccounts/{investmentAccountId}/ServiceFees/{serviceFeesId}/Exchanges
```

It is important to note:
1. Use plural nouns for resource names ('InvestmentAccounts' and 'ServiceFees').
2. Use CamelCase for multi-word resource names ('InvestmentAccounts' and 'ServiceFees').
3. Use the lowercase form of the first noun in case of compound nouns ('InvestmentAccounts' and 'Service

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ExBQ Execute Apply Service Fee

  **Documentation**

  This API path is used to update information related to service fees for a specific investment account. It allows for the execution of applying service fees to non-cash holdings positions held within the investment account. By making a PUT request to this path with the appropriate parameters, you can update the service fee details for the specified investment account.

  **Limitations**

  PUT: The name of the path should be: 

/investment-accounts/{investmentaccountid}/service-fees/{servicefeesid}/execute

Following REST best practices, the path should use lowercase letters, use hyphens to separate words, and use plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentAccount/{investmentaccountid}/ServiceFees/{servicefeesid}/Request</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary RqBQ Request manual intervention for a service fee transaction

  **Documentation**

  This API path is used to update a specific service fee request related to an investment account. It allows the user to request manual intervention for a service fee transaction associated with a particular investment account. By making a PUT request to this endpoint, the user can update the details of the service fee request and indicate the need for manual intervention for processing the service fee transaction.

  **Limitations**

  PUT: The name of the path could be:

/investment-accounts/{investmentaccountid}/service-fees/{servicefeesid}/requests

This naming convention is in line with REST best practices by using lowercase letters, hyphens for readability, and plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentAccount/{investmentaccountid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain handles the non-cash holdings positions for a customer, covering multiple instruments as necessary ReBQ Retrieve details about service fees for the investment account

  **Documentation**

  This API path allows you to retrieve details about service fees associated with a specific investment account. By providing the `investmentaccountid` and `servicefeesid` in the URL, you can request information about the specific service fee linked to that investment account. This information can include details such as the amount of the fee, the frequency of charges, and any other relevant information related to service fees for the investment account.

  **Limitations**

  GET: A suitable name for the path based on REST best practices could be:

```
GET /investment-accounts/{investmentAccountId}/service-fees/{serviceFeesId}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
