<h1 style='color:red;'>MerchantRelations</h1>

**BIAN Documentation:** [MerchantRelations v12](https://app.swaggerhub.com/apis/BIAN-3/MerchantRelations/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/Control</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Control Merchant Relationship Agreement

  **Documentation**

  This BIAN API path allows you to update an existing Merchant Relationship Agreement, which contains the terms and conditions agreed upon with merchants for card-related activities. By using this API, you can modify the agreement to ensure that the terms are up to date and accurately reflect the relationship between your organization and the merchants.

  **Limitations**

  PUT: A suitable name for the path '/MerchantRelations/{merchantrelationsid}/Control' following REST best practices could be:

'/MerchantRelations/{id}/Controls' 

This name is more consistent with the resource being accessed ('Controls') and uses a singular noun to represent a single control entity related to a specific 'MerchantRelations' resource identified by its '{id}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MerchantRelations/Evaluate</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Evaluate Merchant Relationship Agreement

  **Documentation**

  This API path `/MerchantRelations/Evaluate` allows users to create a new resource to evaluate the merchant relationship agreement. This means that users can input and assess the terms and conditions that have been agreed upon with merchants for activities related to cards. By using this API, users can manage and review the merchant agreements efficiently.

  **Limitations**

  POST: If the path '/MerchantRelations/Evaluate' were to follow REST best practices, it would ideally be named based on the resource it represents rather than the action being performed. A more suitable name for this path could be something like '/merchants' or '/evaluations'. Choose a name that clearly represents the resource being accessed or manipulated in the context of merchant evaluations.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/Exchange</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Exchange Merchant Relationship Agreement

  **Documentation**

  This API path allows you to update the terms and conditions that have been agreed upon with a specific merchant for card-related activities. It is used to exchange and update the Merchant Relationship Agreement that outlines the conditions and terms of the relationship between your organization and the merchant.

  **Limitations**

  PUT: The name of the path should be:

'/merchants/{merchantId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/Grant</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Grant Merchant Relationship Agreement

  **Documentation**

  This API path allows you to update an existing resource related to merchant relations by granting a merchant relationship agreement for activities involving cards. It is used to manage and maintain the terms and conditions agreed upon with merchants in the context of card-related activities.

  **Limitations**

  PUT: The name of the path should ideally align with the resource it represents. In this case, the path could be named as '/MerchantRelations/{merchantrelationsid}/GrantAccess', as it clearly conveys that it is used for granting access related to merchant relations.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/Notify</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Notify Merchant Relationship Agreement

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific merchant relationship agreement by providing the merchant relations ID as a parameter. The service domain manages the terms and conditions that have been agreed upon with merchants for activities related to cards. By using this API, you can access details related to the merchant agreement to ensure compliance and transparency in the business relationship with merchants.

  **Limitations**

  GET: The name for the path should be '/merchant-relations/{merchantrelationsid}/notifications'. This follows REST best practices by using lowercase letters, using hyphens to separate words, and using a plural noun for consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/Request</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Request Merchant Relationship Agreement

  **Documentation**

  This API path is used to update an existing resource related to merchant relationships. Specifically, it is used to request an agreement related to the terms and conditions agreed upon with merchants for card-related activities. The PUT method is used to update the information related to the merchant relationship agreement identified by the provided merchantrelationsid.

  **Limitations**

  PUT: The name of the path should ideally be "/merchant-relations/{merchantrelationsid}/requests" following the REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Retrieve Merchant Relationship Agreement

  **Documentation**

  This API path allows a user to retrieve the Merchant Relationship Agreement associated with a specific merchant. This agreement contains the terms and conditions that have been agreed upon between the financial institution and the merchant for card-related activities. By using this API, users can access the details of the agreement in order to understand the terms of their relationship with the merchant.

  **Limitations**

  GET: The name of the path should be `/merchant-relations/{merchantrelationsid}` according to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/Update</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Update Merchant Relationship Agreement

  **Documentation**

  This API path allows you to update the terms and conditions that have been agreed upon with merchants for card-related activities within a Merchant Relations service domain. By using a PUT request to this endpoint with the specific ID of a merchant relations agreement, you can make changes to the agreement details or terms. This functionality helps in keeping merchant relationships up to date and in compliance with the agreed terms.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/merchant-relations/{merchantrelationsid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MerchantRelations/{merchantrelationsid}/LegalTerm/Evaluate</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Evaluate Legal Term

  **Documentation**

  This BIAN API path is used to create a new resource for evaluating the legal terms associated with the terms and conditions agreed upon with merchants for card-related activities within the Merchant Relations service domain. It allows for the assessment and review of the legal terms to ensure compliance and proper understanding of the agreements with merchants.

  **Limitations**

  POST: The name of the path '/MerchantRelations/{merchantrelationsid}/LegalTerm/Evaluate' following REST best practices should be 'POST /merchant-relations/{merchantrelationsid}/legal-terms/evaluation'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /MerchantRelations/{merchantrelationsid}/OperationalTerm/Evaluate</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Evaluate Operational Term

  **Documentation**

  This API path is used to evaluate the operational terms and conditions agreed upon with merchants for card-related activities. By making a POST request to this endpoint with the necessary information, a new resource can be created to assess and oversee the operational terms that have been set in place for interactions with merchants in the context of card transactions.

  **Limitations**

  POST: The name of the path should be:

'/merchant-relations/{merchantRelationsId}/operational-term/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/Evaluate</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Evaluate Regulatory Term

  **Documentation**

  This API path allows you to create a new resource for evaluating regulatory terms related to the terms and conditions agreed upon with merchants for card-related activities within the Merchant Relations service domain. By using a POST method on this path, you can input and store information about the evaluation of regulatory terms specific to a merchant relationship.

  **Limitations**

  POST: The name of the path should follow REST best practices by using nouns to represent resources and avoiding verbs in the path. A more appropriate name for the path '/MerchantRelations/{merchantrelationsid}/RegulatoryTerm/Evaluate' following REST principles could be:

'/merchant-relations/{merchantrelationsid}/regulatory-terms/evaluation'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Exchange</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Exchange Legal Term

  **Documentation**

  This API path (PUT /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Exchange) allows you to update the terms and conditions that have been agreed upon with a specific merchant in relation to card-related activities. It specifically pertains to exchanging legal terms related to the merchant relations, enabling you to make changes or updates as needed.

  **Limitations**

  PUT: The name of the path should be:

```plaintext
/MerchantRelations/{merchantrelationsid}/LegalTerms/{legaltermid}/Exchanges
```

Here are some key points to consider:
1. Use plural nouns for resource names ('LegalTerms' and 'Exchanges' instead of 'LegalTerm' and 'Exchange').
2. Each segment should be descriptive and meaningful.
3. Resource names should be lowercase and separated by hyphens if necessary.
4. Use clear and concise names that

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/OperationalTerm/{operationaltermid}/Exchange</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Exchange Operational Term

  **Documentation**

  This API path allows you to update the terms and conditions that have been agreed upon with merchants for card-related activities within the Exchange Operational Term. Basically, it allows you to make changes or modifications to the agreements and rules that are in place for exchanging information or conducting transactions with merchants related to card activities.

  **Limitations**

  PUT: The name of the path should be:

```
/MerchantRelations/{merchantrelationsid}/OperationalTerms/{operationaltermid}/Exchanges
``` 

This path name adheres to REST best practices by using plural nouns for resource names and avoiding overly specific path naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/{regulatorytermid}/Exchange</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Exchange Regulatory Term

  **Documentation**

  This BIAN API path is used to update the terms and conditions related to card activities that have been agreed upon with a specific merchant. It allows for the modification of regulatory terms associated with a particular exchange between the financial institution and the merchant.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

'/merchant-relations/{merchantrelationsid}/regulatory-terms/{regulatorytermid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Notify</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Notify Legal Term

  **Documentation**

  This API path is used to retrieve information about the notification related to legal terms agreed with a merchant in the context of card-related activities. It is part of the Merchant Relations service domain, where terms and conditions with merchants are managed. By using this API, you can access details about notifications regarding legal terms that have been agreed upon with a specific merchant.

  **Limitations**

  GET: The name of the path should be:

'/merchant-relations/{merchantrelationsid}/legal-terms/{legaltermid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/OperationalTerm/{operationaltermid}/Notify</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Notify Operational Term

  **Documentation**

  This API path is used to retrieve information about the notification related to the operational terms and conditions agreed with a specific merchant in the context of card-related activities. It is a way to access details regarding the terms and conditions that have been set with the merchant, specifically focusing on the notification part of the operational terms.

  **Limitations**

  GET: The name of the path should be:

'/merchant-relations/{merchantrelationsid}/operational-term/{operationaltermid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/{regulatorytermid}/Notify</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Notify Regulatory Term

  **Documentation**

  This API path allows you to retrieve information about the notification related to regulatory terms for a specific merchant in the context of card-related activities. It is part of the Merchant Relations service domain, which manages the terms and conditions that merchants have agreed to when engaging in card-related activities. By using this path, you can access details about notifications related to specific regulatory terms for a particular merchant in the system.

  **Limitations**

  GET: A good name for the path in accordance with REST best practices could be:

/merchant-relations/{merchantrelationsid}/regulatory-terms/{regulatorytermid}/notify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Request</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Request Legal Term

  **Documentation**

  This API path is used to update an existing legal term related to the terms and conditions agreed upon with merchants for cards related activity within the Merchant Relations service domain. By making a PUT request to this path, you can modify specific legal terms associated with a merchant within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be in plural form and should only contain nouns. Therefore, the recommended name for the path would be:

'/merchant-relations/{merchantrelationsid}/legal-terms/{legaltermid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/OperationalTerm/{operationaltermid}/Request</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Request Operational Term

  **Documentation**

  This BIAN API path allows you to update an existing request for operational term related to the terms and conditions agreed with a specific merchant in the Merchant Relations service domain. It specifically pertains to cards-related activities. By making a PUT request to this path with the appropriate IDs, you can modify or update the operational term request for the merchant.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

'/merchants/{merchantId}/operational-terms/{operationalTermId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/{regulatorytermid}/Request</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Request Regulatory Term

  **Documentation**

  This API path is used to update a specific regulatory term related to a merchant within the Merchant Relations service domain. It allows you to make changes or updates to the terms and conditions that have been agreed upon with a specific merchant for card-related activities. By using a PUT request, you can update the regulatory term identified by the regulatorytermid for the merchant specified by the merchantrelationsid.

  **Limitations**

  PUT: The name of the path should be structured as follows to comply with REST best practices: 

`/merchant-relations/{merchantrelationsid}/regulatory-terms/{regulatorytermid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Retrieve Legal Term

  **Documentation**

  This API path allows users to retrieve legal terms and conditions that have been agreed upon with a specific merchant for activities related to card transactions. By specifying the merchantrelationsid and legaltermid in the path, users can access the specific legal terms in place for that merchant. This information can be useful for understanding the contractual obligations and rights associated with conducting card-related activities with merchants.

  **Limitations**

  GET: The name of the path should follow RESTful conventions where the path components describe the resources being accessed. 

A suitable RESTful name for the path you provided could be:

GET /merchants/{merchantId}/legal-terms/{legalTermId}

This path clearly identifies the resources being accessed (merchants and legal terms) and follows the convention of using lowercase letters and hyphens to separate words in the path components.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/OperationalTerm/{operationaltermid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Retrieve Operational Term

  **Documentation**

  This BIAN API path retrieves information about the operational terms and conditions that have been agreed upon with a specific merchant in relation to card-related activities. The path includes identifiers for the specific merchant relations and operational terms being retrieved. By using this API, you can access the details of the operational terms that govern the relationship between your organization and a specific merchant for card-related transactions.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be something like:

`GET /merchant-relations/{merchantrelationsid}/operational-terms/{operationaltermid}`

Following REST conventions, the path uses lowercase letters, separates words with hyphens, and uses descriptive resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/{regulatorytermid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Retrieve Regulatory Term

  **Documentation**

  This API path allows you to retrieve regulatory terms associated with a specific merchant relation and a specific regulatory term ID. In simple terms, it helps you access the agreed terms and conditions between a merchant and a financial institution related to card activities, such as payments or transactions. By using this API, you can fetch detailed information about regulatory terms that are relevant to a specific merchant relation and regulatory term.

  **Limitations**

  GET: A possible name for this path following REST best practices could be:
'/merchants/{merchantId}/regulatory-terms/{regulatoryTermId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/LegalTerm/{legaltermid}/Update</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Update Legal Term

  **Documentation**

  This API path allows you to update the legal terms and conditions that have been agreed upon with merchants for card-related activities within the Merchant Relations service domain. By using a PUT request, you can modify an existing legal term identified by the legaltermid associated with a specific merchantrelationsid.

  **Limitations**

  PUT: The name of the path should be: `/merchants/{merchantId}/legal-terms/{legalTermId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/OperationalTerm/{operationaltermid}/Update</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Update Operational Term

  **Documentation**

  This API path allows you to update the operational terms related to a specific merchant in the Merchant Relations service domain. By making a PUT request to this endpoint with the merchant relations ID and operational term ID specified, you can update the terms and conditions that have been agreed upon with the merchant for card-related activities.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate path name could be:

'/merchants/{merchantId}/terms/{termId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantRelations/{merchantrelationsid}/RegulatoryTerm/{regulatorytermid}/Update</span></summary>

  **Description**

  This service domain maintains the terms and conditions agreed with merchants for cards related activity Update Regulatory Term

  **Documentation**

  This BIAN API path allows you to update the regulatory terms related to a specific merchant under the Merchant Relations service domain. By providing the merchant relations ID and regulatory term ID, you can update the terms and conditions that have been agreed upon with the merchant for card-related activities. This API enables you to make changes to regulatory terms as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/merchant-relations/{merchantrelationsid}/regulatory-terms/{regulatorytermid}"

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
