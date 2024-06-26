<h1 style='color:red;'>CounterpartyAdministration</h1>

**BIAN Documentation:** [CounterpartyAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/CounterpartyAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/Control</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Control Counterparty Directory Entry

  **Documentation**

  This BIAN API path allows you to update existing information related to a specific counterparty within the Counterparty Administration service domain. It is used to maintain important reference information about counterparties that are utilized in the clearing and settlement processes for wholesale trading. By making a PUT request to this path with the appropriate data, you can modify and update the control counterparty directory entry for a particular counterparty identified by its administration ID.

  **Limitations**

  PUT: The name of the path should be:

/counterparty-administrations/{counterpartyadministrationid}/controls

In this naming convention:
- Resource names are in plural form.
- Words are separated by hyphens for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/Execute</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Execute Counterparty Directory Entry

  **Documentation**

  This BIAN API path "/CounterpartyAdministration/{counterpartyadministrationid}/Execute" is used to update an existing counterparty directory entry in the Counterparty Administration Service Domain. It is specifically used for maintaining important reference information related to counterparties involved in wholesale trading transactions, which are used for clearing and settling those trades. By executing this API call, you are able to update key information related to a specific counterparty identified by the "counterpartyadministrationid".

  **Limitations**

  PUT: A possible appropriate name for the path '/CounterpartyAdministration/{counterpartyadministrationid}/Execute' following REST best practices could be:

'/counterparties/{counterpartyId}/action' 

This name indicates the resource being manipulated (counterparties) followed by the specific action being performed (action), providing a clear and concise description of the endpoint's purpose.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/Notify</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Notify Counterparty Directory Entry

  **Documentation**

  This API path "/CounterpartyAdministration/{counterpartyadministrationid}/Notify" is used for retrieving information about a specific counterparty administration entry based on the provided ID. It is part of the Counterparty Administration Service Domain, which manages important information about counterparties involved in wholesale trading for clearing and settlement purposes. The purpose of this specific API is to notify or retrieve details related to a counterparty directory entry based on the specified counterparty administration ID.

  **Limitations**

  GET: The name of the path should be:

```
/counterparty-administrations/{counterpartyadministrationId}/notify
```

In this path name:
- Use lowercase letters.
- Use hyphens to separate words.
- Use plural nouns for collections, like "counterparty-administrations."
- Use identifiers in singular form, like "counterpartyadministrationId."
- Use meaningful and descriptive names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CounterpartyAdministration/Register</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Register Counterparty Directory Entry

  **Documentation**

  This API path allows you to create a new entry in the Counterparty Directory for managing key information about counterparties involved in wholesale trading. This information is crucial for the clearing and settlement processes. By using this API, you can register and store key reference information related to counterparties, facilitating efficient processing in wholesale trading activities.

  **Limitations**

  POST: Based on REST best practices, the path '/CounterpartyAdministration/Register' should be updated to '/counterparties' for better alignment with resource naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/Request</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Request Counterparty Directory Entry

  **Documentation**

  This BIAN API path allows you to update an existing counterparty directory entry used for clearing and settling wholesale trading. It is part of the Counterparty Administration service domain, which manages essential information about counterparties involved in trading transactions. By making a PUT request to this path with the relevant counterparty administration ID, you can modify and update details about a specific counterparty in the system.

  **Limitations**

  PUT: The name of the path should be:

`/counterparty-administrations/{counterpartyadministrationid}/requests`

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and use plural nouns for resource names in the URI path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Retrieve Counterparty Directory Entry

  **Documentation**

  This API path allows you to retrieve information about a specific counterparty from the Counterparty Administration service domain. The information includes key reference details used in the clearing and settlement processes of wholesale trading. By providing the unique identifier for the counterparty administration entry, you can access important data related to that counterparty, such as contact information, account details, and any other relevant information necessary for conducting transactions with that counterparty.

  **Limitations**

  GET: Following REST best practices, the path should be named as follows:

'/counterparties/{counterpartyId}'

RESTful path names should ideally be plural nouns to represent a collection of resources. The resource identifier (counterparty ID) can be used for a specific counterparty within that collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/Update</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Update Counterparty Directory Entry

  **Documentation**

  This API path allows you to update an existing counterparty directory entry within the Counterparty Administration service domain. It is used to maintain important information about counterparties that are involved in the clearing and settlement processes of wholesale trading. By using a PUT request, you can make changes to the details of a specific counterparty, such as updating contact information or other relevant data.

  **Limitations**

  PUT: Based on REST best practices, the path should be named as follows:

'/counterparties/{id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Execute</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Execute Counterparty Entity Reference property

  **Documentation**

  This API path allows you to update the execution of counterparty entity reference information within the Counterparty Administration service domain. It is used to manage and maintain key details related to counterparties involved in clearing and settling wholesale trading transactions. By sending a PUT request to this path with the appropriate IDs, you can update specific information related to a counterparty entity reference.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/counterparty-administration/{counterpartyadministrationid}/counterparty-entity-reference/{counterpartyentityreferenceid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/{counterpartypermittedtransactionid}/Execute</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Execute Counterparty Permitted Transaction property

  **Documentation**

  This API path allows you to update information related to a specific counterparty's permitted transaction within the Counterparty Administration service domain. It is used to manage key reference information about counterparties involved in wholesale trading, particularly in the context of clearing and settlement processes. By sending a PUT request to this path with the appropriate IDs, you can modify the details of a counterparty's permitted transaction.

  **Limitations**

  PUT: The name of the path should be:

"/counterparties/{counterpartyId}/transactions/{transactionId}/execute"

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Notify</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Notify Counterparty Entity Reference property

  **Documentation**

  This API path allows you to retrieve information about a specific counterparty entity reference within the Counterparty Administration service domain. It is used to access key information related to counterparties involved in the clearing and settlement of wholesale trading. In this case, the API specifically focuses on the Notify Counterparty Entity Reference property, providing detailed data about the counterparty entity reference identified by the {counterpartyentityreferenceid} within the {counterpartyadministrationid} context.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured to represent the resource being acted upon with a specific HTTP method. Therefore, a more appropriate name for the path '/CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Notify' could be:

'/counterparty-administrations/{counterpartyadministrationid}/counterparty-entity-references/{counterpartyentityreferenceid}/notify'

This naming convention uses lowercase letters and hyphens to separate

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/{counterpartypermittedtransactionid}/Notify</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Notify Counterparty Permitted Transaction property

  **Documentation**

  This API path allows you to retrieve information about the notification settings for a specific permitted transaction associated with a counterparty in the wholesale trading industry. It is part of a service domain that manages key reference information about counterparties, which is crucial for clearing and settling trades. By accessing this path, you can view details about how notifications are configured for a particular transaction with a counterparty.

  **Limitations**

  GET: Following REST best practices, the path should be:
'/counterparty-administrations/{counterpartyadministrationid}/counterparty-permitted-transactions/{counterpartypermittedtransactionid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/Register</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Register Counterparty Entity Reference property

  **Documentation**

  This API path allows you to create a new resource for registering key counterparty reference information in the context of clearing and settling wholesale trading. It is used to set up a counterparty entity reference property for a specific counterparty administration ID within the system. This can help manage and organize important information related to counterparties involved in financial transactions.

  **Limitations**

  POST: Based on REST best practices, the name of the path should ideally be structured in a way that reflects the resource hierarchy and actions being performed. Following this practice, the name of the path could be:

/counterparties/{counterpartyId}/entityReferences/register

This path structure captures the main resource (counterparties), specifies a specific counterparty (identified by ID), and then denotes the action being performed (registering an entity reference). By following a clear and logical naming convention like this,

</details>

<details open>
  <summary><span style='color:red;'>POST: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/Register</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Register Counterparty Permitted Transaction property

  **Documentation**

  This BIAN API path allows you to create a new resource for registering a permitted transaction property related to a specific counterparty in the Counterparty Administration service domain. It is used to maintain key information about counterparties that is necessary for clearing and settling wholesale trading transactions.

  **Limitations**

  POST: Based on RESTful principles, the name of the path should be:

'/counterparties/{counterpartyId}/permittedTransactions'

This path is more clear and succinct, using plural nouns and avoiding unnecessary details.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Request</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Request Counterparty Entity Reference property

  **Documentation**

  This API path allows you to update the counterparty entity reference information within the Counterparty Administration service domain. Specifically, it is used to update the reference information of a counterparty entity that is essential for clearing and settling wholesale trading transactions. By making a PUT request to this path, you can modify or update the details of a specific counterparty entity reference within the system.

  **Limitations**

  PUT: The name of the path should be:

'/counterparties/{counterpartyId}/entity-references/{entityReferenceId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/{counterpartypermittedtransactionid}/Request</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Request Counterparty Permitted Transaction property

  **Documentation**

  This BIAN API path allows you to update a specific counterparty's permitted transaction request within the counterparty administration system. This could involve making changes to the information associated with a particular transaction that a counterparty is permitted to perform in the context of wholesale trading.

  **Limitations**

  PUT: A recommended RESTful naming convention for the path would be:

/counterparty-administrations/{counterpartyadministrationid}/permitted-transactions/{counterpartypermittedtransactionid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Retrieve Counterparty Entity Reference property

  **Documentation**

  This API path allows you to retrieve specific information about a counterparty entity reference within the Counterparty Administration service domain. The endpoint is structured to specify the unique identifiers for the Counterparty Administration and the Counterparty Entity Reference you want to retrieve information for. By making a GET request to this endpoint, you can access key reference information related to a specific counterparty, which is essential for the clearing and settlement processes in wholesale trading.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
`/counterparty-administration/{counterpartyadministrationid}/counterparty-entity-reference/{counterpartyentityreferenceid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/{counterpartypermittedtransactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Retrieve Counterparty Permitted Transaction property

  **Documentation**

  This API path allows you to retrieve information about the permitted transactions for a specific counterparty in the context of wholesale trading. It is part of a service domain that manages important details about counterparties used in clearing and settlement processes. By accessing this path with the appropriate IDs, you can get specific details related to the permitted transactions associated with a particular counterparty.

  **Limitations**

  GET: A suitable name for the path following REST best practices could be:

GET /counterparties/{counterpartyadministrationid}/permitted-transactions/{counterpartypermittedtransactionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyEntityReference/{counterpartyentityreferenceid}/Update</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Update Counterparty Entity Reference property

  **Documentation**

  This API path allows you to update the counterparty entity reference property within the Counterparty Administration service domain. This property holds important information about counterparties involved in wholesale trading for clearing and settlement purposes. By using this API, you can modify or update the reference information associated with a specific counterparty entity within the system.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/counterparties/{counterpartyId}/entityReferences/{entityReferenceId}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CounterpartyAdministration/{counterpartyadministrationid}/CounterpartyPermittedTransaction/{counterpartypermittedtransactionid}/Update</span></summary>

  **Description**

  This Service Domain maintains key counterparty reference information used in the clearing and settlement of wholesale trading Update Counterparty Permitted Transaction property

  **Documentation**

  This API path allows you to update the permitted transactions property of a specific counterparty permitted transaction within the Counterparty Administration Service Domain. This is used for managing key information related to counterparties involved in wholesale trading, particularly for clearing and settling transactions. By sending a PUT request to this path with the appropriate IDs, you can modify the permitted transactions for a specific counterparty permitted transaction.

  **Limitations**

  PUT: The name of the path should be:

'/counterparties/{counterpartyId}/permittedTransactions/{transactionId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
