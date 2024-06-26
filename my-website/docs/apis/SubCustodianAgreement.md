<h1 style='color:red;'>SubCustodianAgreement</h1>

**BIAN Documentation:** [SubCustodianAgreement v12](https://app.swaggerhub.com/apis/BIAN-3/SubCustodianAgreement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/Control</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Control Sub Custodian Agreement

  **Documentation**

  This BIAN API path is used to update an existing Sub Custodian Agreement by specifying the Control parameters for a particular sub-custodian agreement identified by its ID. The API allows for maintaining the terms that govern the relationship with a sub-custodian, ensuring that the agreement remains up-to-date and reflective of the current rules and conditions.

  **Limitations**

  PUT: The name of the path should be '/sub-custodian-agreements/{subcustodianagreementid}/controls' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SubCustodianAgreement/Evaluate</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Evaluate Sub Custodian Agreement

  **Documentation**

  This BIAN API path, /SubCustodianAgreement/Evaluate, is used for creating a new resource to evaluate the terms governing a sub-custodian relationship. It allows users to input information related to a sub-custodian agreement and evaluate the terms associated with that agreement.

  **Limitations**

  POST: For following REST best practices, the name of the path should ideally be:

```
/sub-custodian-agreements
```

This path should represent a collection of all sub-custodian agreements. Each specific agreement could then be retrieved or manipulated using appropriate HTTP methods like GET, POST, PUT, DELETE etc.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/Exchange</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Exchange Sub Custodian Agreement

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a sub custodian agreement for exchanges. Specifically, it helps in managing and maintaining the terms that govern the relationship between the main custodian and the sub custodian involved in handling exchanges. By using this API, you can make changes or updates to the agreement to ensure it aligns with the current requirements and conditions of the exchange process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/sub-custodians/{subcustodianagreementid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/Grant</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Grant Sub Custodian Agreement

  **Documentation**

  This API path is used to update an existing sub custodian agreement by granting permission for the sub custodian to perform certain activities or functions as defined in the agreement. This action would involve making changes to the terms and conditions outlined in the agreement that govern the relationship between the custodian and the sub custodian.

  **Limitations**

  PUT: A good name for the path '/SubCustodianAgreement/{subcustodianagreementid}/Grant' following REST best practices could be:

'/sub-custodian-agreements/{subcustodianagreementid}/grants'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/Notify</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Notify Sub Custodian Agreement

  **Documentation**

  This API path is used to retrieve information about a specific sub custodian agreement by providing its unique identifier (subcustodianagreementid). The purpose of this API is to access and view details about the terms and conditions that govern the relationship between a financial institution and a sub custodian.

  **Limitations**

  GET: The name of the path "/SubCustodianAgreement/{subcustodianagreementid}/Notify" should ideally be named using nouns and should reflect the resource it represents. Based on REST best practices, a more suitable name for this path could be:

"/SubCustodianAgreementNotifications/{subcustodianagreementid}"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/Request</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Request Sub Custodian Agreement

  **Documentation**

  This API path allows you to update an existing sub custodian agreement by sending a request to establish or modify the terms governing the relationship with a sub custodian. In simpler terms, it allows you to make changes or additions to the agreement that outlines the responsibilities and terms between your organization and the sub custodian.

  **Limitations**

  PUT: The name of the path should be `/sub-custodian-agreements/{subcustodianagreementid}/requests` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/Retrieve</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Retrieve Sub Custodian Agreement

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific Sub Custodian Agreement based on the provided Sub Custodian Agreement ID. This agreement defines the terms and conditions that govern the relationship between the main custodian and a sub custodian. By using this API, you can access the details of the agreement, including the terms and responsibilities outlined in the agreement between the custodian and the sub custodian.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:
'/sub-custodian-agreements/{subcustodianagreementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/Update</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Update Sub Custodian Agreement

  **Documentation**

  This BIAN API path allows you to update an existing sub-custodian agreement by specifying the ID of the agreement you want to update. Sub-custodian agreements are contracts that govern the relationship between a custodian (entity that holds financial assets) and a sub-custodian (entity that provides custodial services on behalf of the custodian). By using this API, you can make changes to the terms and conditions of the agreement to ensure that the relationship between the custodian and sub-custodian operates smoothly and effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

PUT /subCustodianAgreements/{subCustodianAgreementId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/Evaluate</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Evaluate Legal Term

  **Documentation**

  This API path allows you to evaluate the legal terms that govern the relationship with a sub custodian under a specific sub custodian agreement. By making a POST request to this endpoint with the appropriate sub custodian agreement ID, you can create a new resource that assesses and reviews the legal terms associated with the agreement. This process helps in ensuring compliance and understanding the legal obligations involved in the sub custodian relationship.

  **Limitations**

  POST: The name of the path '/SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/Evaluate' following REST best practices should be:

'/sub-custodian-agreements/{subcustodianagreementid}/legal-terms/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/Evaluate</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Evaluate Policy Term

  **Documentation**

  This API path allows you to create a new resource for evaluating the policy term in a sub custodian agreement. This is a part of the service domain that manages the terms and conditions related to the relationship with sub custodians. By using this API, you can input information to assess and evaluate the policy term within the sub custodian agreement identified by the subcustodianagreementid.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:
'/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/Evaluate</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Evaluate Regulatory Term

  **Documentation**

  This BIAN API path is used to evaluate regulatory terms within a sub custodian agreement. It allows users to create a new resource related to assessing and understanding the regulatory terms that are part of the sub custodian agreement. This process helps ensure compliance with any regulations that may affect the relationship between the custodian and the sub custodian.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be:

`/sub-custodian-agreements/{subcustodianagreementid}/regulatory-terms/evaluate`

In this path:

- Use lowercase letters and separate words with hyphens for better readability.
- The resource names are in plural form.
- The action “evaluate” is included as the last segment to indicate the specific action being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/{legaltermid}/Exchange</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Exchange Legal Term

  **Documentation**

  This API path allows you to update the Exchange Legal Term associated with a specific Sub Custodian Agreement and Legal Term. In simpler terms, you can use this API to modify the terms and conditions that govern the relationship between a sub custodian and an exchange within a specific agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/sub-custodian-agreements/{sub-custodian-agreement-id}/legal-terms/{legal-term-id}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Exchange</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Exchange Policy Term

  **Documentation**

  This API endpoint is used to update the terms governing the relationship between a sub custodian and an exchange policy term within a sub-custodian agreement. By making a PUT request to this path with specific IDs for the sub custodian agreement and policy term, you can update the details related to the exchange policy term in the agreement.

  **Limitations**

  PUT: To follow REST best practices, the name of the path should be:

`/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/{policytermid}/exchange`

In this naming convention, all path segments are in lowercase, words are separated by hyphens, and resources are represented in their plural form where appropriate. This naming style improves readability and consistency, which are important aspects of RESTful design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/{regulatorytermid}/Exchange</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Exchange Regulatory Term

  **Documentation**

  This BIAN API path is used to update the terms governing the relationship between a sub custodian and a regulatory term related to an exchange. It allows for modifying and maintaining the agreement between the sub custodian and the regulatory term tied to a specific exchange.

  **Limitations**

  PUT: The name of the path should be:

'/sub-custodian-agreements/{sub_custodian_agreement_id}/regulatory-terms/{regulatory_term_id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/{legaltermid}/Notify</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Notify Legal Term

  **Documentation**

  This API path is used to retrieve information about notifying a legal term related to a sub custodian agreement. It is a part of the Service Domain that establishes and maintains the terms governing the relationship with a sub custodian. By making a GET request to this path with the necessary IDs, you can retrieve details about how legal terms should be notified or communicated within the context of a sub custodian agreement.

  **Limitations**

  GET: The path should be named as:

`/sub-custodian-agreements/{subcustodianagreementid}/legal-terms/{legaltermid}/notify`

Following REST best practices, the path should use lowercase letters, hyphens to separate words, and include plural nouns for resources where appropriate to maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Notify</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Notify Policy Term

  **Documentation**

  This API path is used to retrieve information about the Notify Policy Term within a Sub Custodian Agreement. It allows users to view the terms and details related to notifying the policy term specified by the policytermid within a specific sub custodian agreement identified by subcustodianagreementid.

  **Limitations**

  GET: The name of the path should be:

/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/{policytermid}/notify

This path follows REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for collections where applicable.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/{regulatorytermid}/Notify</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Notify Regulatory Term

  **Documentation**

  This API path is used to retrieve information about the sub custodian agreement and regulatory terms related to notifying regulatory authorities. It allows users to access details about the terms governing the relationship between a sub custodian and their regulatory obligations.

  **Limitations**

  GET: The name of the path should be:

`/sub-custodian-agreements/{subcustodianagreementid}/regulatory-terms/{regulatorytermid}/notify`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/{legaltermid}/Request</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Request Legal Term

  **Documentation**

  This API path allows you to update a specific legal term related to a sub-custodian agreement. By specifying the IDs of the sub-custodian agreement and the legal term, you can request to make changes or updates to that particular legal term within the agreement.

  **Limitations**

  PUT: The name of the path could be '/sub-custodian-agreements/{subcustodianagreementid}/legal-terms/{legaltermid}/requests' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Request</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Request Policy Term

  **Documentation**

  This API path `/SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Request` allows you to update an existing policy term within a sub custodian agreement. The sub custodian agreement outlines the terms and conditions for the relationship between a custodian and a sub custodian. By using this API, you can modify specific policy terms associated with a particular agreement identified by its unique IDs.

  **Limitations**

  PUT: A possible name for the path could be:

'/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/{policytermid}/requests' 

In this naming convention:
- Path segments are all in lowercase
- Words are separated by hyphens for readability
- Plural nouns are used for resources where appropriate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/{regulatorytermid}/Request</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Request Regulatory Term

  **Documentation**

  This API path is used to update an existing regulatory term within a sub custodian agreement. Specifically, it allows you to make changes to the terms governing the relationship between a custodian and a sub-custodian. By making a PUT request to this path with the appropriate IDs, you can update the details of a specific regulatory term associated with a sub custodian agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/SubCustodianAgreements/{subcustodianagreementid}/RegulatoryTerms/{regulatorytermid}/Requests
``` 

In this path:
- The resource names should be in plural form.
- Path parameters such as `subcustodianagreementid` and `regulatorytermid` should be in curly braces to indicate they are variables.
- The path should use camel case for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/{legaltermid}/Retrieve</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Retrieve Legal Term

  **Documentation**

  This API path is used to retrieve legal terms related to a sub-custodian agreement. By providing the sub custodian agreement ID and legal term ID as parameters in the request, the API will return information about the specific legal term associated with that agreement. This helps in accessing and understanding the legal terms governing the relationship between a financial institution and its sub-custodian.

  **Limitations**

  GET: The name of the path should be:

'/sub-custodian-agreements/{subcustodianagreementid}/legal-terms/{legaltermid}/retrieve' 

Following REST best practices, it is recommended to use lowercase letters and hyphens to separate words in the path names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Retrieve</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Retrieve Policy Term

  **Documentation**

  This API path is used to retrieve information about a specific policy term within a sub-custodian agreement. It is part of a service domain that manages the terms related to the relationship between a custodian and a sub-custodian. By accessing this API endpoint with the relevant IDs, you can retrieve details about a specific policy term within the agreement.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/{policytermid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/{regulatorytermid}/Retrieve</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Retrieve Regulatory Term

  **Documentation**

  This API path allows you to retrieve information about a specific regulatory term within a sub-custodian agreement. By providing the IDs for the sub-custodian agreement and the regulatory term, you can access the details and terms related to regulatory compliance for the sub-custodian relationship.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
GET /sub-custodian-agreements/{subcustodianagreementid}/regulatory-terms/{regulatorytermid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/LegalTerm/{legaltermid}/Update</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Update Legal Term

  **Documentation**

  This BIAN API path allows you to update the legal terms related to a sub-custodian agreement. By specifying the ID of the sub-custodian agreement and the ID of the legal term within that agreement, you can make changes or updates to the legal terms that govern the relationship between the primary custodian and the sub-custodian. The PUT method indicates that you are updating an existing legal term resource within the sub-custodian agreement.

  **Limitations**

  PUT: The appropriate name for this path following REST best practices would be:

'/sub-custodian-agreements/{subcustodianagreementid}/legal-terms/{legaltermid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/PolicyTerm/{policytermid}/Update</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Update Policy Term

  **Documentation**

  This API path allows you to update a policy term related to a sub custodian agreement. By providing the sub custodian agreement ID and the policy term ID, you can modify the details of the policy term within the agreement. This API helps in managing and maintaining the terms and conditions of the sub custodian relationship.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be `/sub-custodian-agreements/{subcustodianagreementid}/policy-terms/{policytermid}` for updating a policy term within a sub-custodian agreement.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SubCustodianAgreement/{subcustodianagreementid}/RegulatoryTerm/{regulatorytermid}/Update</span></summary>

  **Description**

  This Service Domain establishes and maintains the terms governing sub custodian relationship Update Regulatory Term

  **Documentation**

  This API path allows you to update the regulatory term within a sub-custodian agreement identified by "subcustodianagreementid" and "regulatorytermid". It is used to modify the terms that govern the relationship with a sub-custodian within a financial services context. The "PUT" method is used to make changes to an existing regulatory term resource.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be simplified as follows:

'/subcustodian-agreements/{subcustodianagreementid}/regulatory-terms/{regulatorytermid}'

This naming convention uses all lowercase letters, separates words with hyphens for readability, and uses plural forms for consistency.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
