<h1 style='color:red;'>LegalEntityDirectory</h1>

**BIAN Documentation:** [LegalEntityDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/LegalEntityDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /LegalEntityDirectory/Register</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities InCR Register a new legal entity in the catalog

  **Documentation**

  This BIAN API path allows you to register a new legal entity in the Legal Entity Directory catalog. It maintains information about the legal structure of parties, including individuals and corporations, along with their dependents, associations, ownership relationships, and subsidiaries. Additionally, this API can include financial indicators and details about the products and activities associated with the legal entity, especially for corporate entities. By making a POST request to this path, you can create a new entry for a legal entity in the system.

  **Limitations**

  POST: If the path '/LegalEntityDirectory/Register' followed REST best practices, it would typically be named based on the resource it is representing. A more RESTful name for this path could be '/legal-entities', as it represents a collection of legal entities. The registration process could then be implemented using standard HTTP verbs such as POST for creating a new legal entity resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Update</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities UpCR Update details about the legal entity directory entry

  **Documentation**

  This BIAN API path allows for updating details in the Legal Entity Directory for a specific legal entity entry identified by its unique ID. The Legal Entity Directory contains information about the structure of a legal entity, such as relationships with other entities (like dependents, associations, subsidiaries), financial indicators, and product activities. By using this API path with a PUT method, users can modify or update the details of a specific legal entity entry within the directory.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /legal-entity-directory/{legalentitydirectoryid}
``` 

This is following REST best practices by using lowercase letters, using hyphens to separate words in the URL path, and using the HTTP method PUT to update a specific resource identified by the legalentitydirectoryid.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Request</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities RqCR Request manual intervention with an entry (e.g. refresh content)

  **Documentation**

  This BIAN API path allows you to update specific details of a legal entity directory entry by sending a PUT request to the endpoint. The legal entity directory contains information about the structure of a party, including relationships with other entities and ownership structures for corporations. This API can be used to request manual intervention for updating or refreshing content related to a specific legal entity within the directory.

  **Limitations**

  PUT: The name of the path should be:

'/legal-entity-directory/{legalentitydirectoryid}/requests' 

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and use plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /LegalEntityDirectory/{legalentitydirectoryid}/Retrieve</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities ReCR Retrieve details about a legal entity directory entry

  **Documentation**

  This API path allows you to retrieve information about a specific legal entity directory entry. It provides details about the structure of the legal entity, including any dependents and associations for individuals, as well as ownership and subsidiary structures for corporations. Additionally, it may include financial indicators and information about product coverage and activities that help define the relationship of the legal entity, especially for corporate entities.

  **Limitations**

  GET: According to REST best practices, the name of the path should be "/legal-entity-directory/{legalentitydirectoryid}".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Execute</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities ExCR Execute an automated action against an entry

  **Documentation**

  This API path allows you to update an existing entry in the Legal Entity Directory by executing an automated action against it. The Legal Entity Directory contains information about the legal structure of different entities, such as individuals or corporations, including relationships, ownership details, financial indicators, and product activity. By using this API, you can trigger automated actions related to a specific legal entity entry within the directory.

  **Limitations**

  PUT: The name of the path should be:

'/legal-entity-directory/{legalentitydirectoryid}/execute'

Some key points to consider in following REST best practices:

1. Use lowercase letters.
2. Use hyphens to separate words in the path.
3. Use nouns to represent resources.
4. Include resource identifiers in the path (e.g., legalentitydirectoryid).
5. Use verbs that represent actions (e.g., execute) sparingly and if needed, keep them at the end of

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Reference/{referenceid}/Update</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities UpBQ Update details about a reference entry for the legal entity

  **Documentation**

  This API path allows you to update specific details about a reference entry for a legal entity within the Legal Entity Directory. You can make changes to information related to the legal entity structure, dependents, associations, ownership structures for corporations, financial indicators, and product coverage/activity details. This is useful for ensuring that the information about legal entities is accurate and up to date within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```plaintext
PATCH /LegalEntityDirectory/{legalentitydirectoryid}/Reference/{referenceid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /LegalEntityDirectory/{legalentitydirectoryid}/Reference/{referenceid}/Retrieve</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities ReBQ Retrieve details about reference entries in the directory record

  **Documentation**

  This API path allows you to retrieve information about reference entries in the Legal Entity Directory record. It provides details about the legal entity structure of a party, including dependents and associations for individuals, and ownership/subsidiary structures for corporations. Additionally, it may include financial indicators and product coverage/activity details to define the nature of the legal entity relationship, especially for corporate entities. By using this API, you can access specific information related to reference entries within the Legal Entity Directory record.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be: 

GET '/legal-entity-directory/{legalentitydirectoryid}/references/{referenceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Profile/{profileid}/Update</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities UpBQ Update details about a profile entry for the legal entity

  **Documentation**

  This API endpoint allows you to update information about a specific profile entry for a legal entity within the Legal Entity Directory. It is used to modify details regarding the legal entity's structure, relationships with other entities (dependents, associations, ownership/subsidiaries), financial indicators, and product coverage/activity information. This update operation is specifically designed for corporate entities where the nature of the legal entity relationship is important to define.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /legal-entity-directory/{legalentitydirectoryid}/profiles/{profileid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /LegalEntityDirectory/{legalentitydirectoryid}/Profile/{profileid}/Retrieve</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities ReBQ Retrieve details about profile entries in the directory record

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific profile entry within the Legal Entity Directory record. The information includes details about the legal entity structure of a party, such as dependents and associations for individuals, as well as ownership and subsidiary structures for corporations. Additionally, the information may include financial indicators and details about product coverage or activities that define the nature of the legal entity relationship, especially for corporate entities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be: 

GET /legal-entity-directory/{legalentitydirectoryid}/profiles/{profileid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalEntityDirectory/{legalentitydirectoryid}/Associations/{associationsid}/Update</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities UpBQ Update details about an association entry for the legal entity

  **Documentation**

  This BIAN API path allows you to update details about an association entry for a specific legal entity within the Legal Entity Directory. It is used to modify information related to the structure of the legal entity, including its dependents and associations for individuals, as well as ownership and subsidiary structures for corporations. Additionally, you can include financial indicators and product coverage details that define the nature of the legal entity relationship, especially for corporate entities.

  **Limitations**

  PUT: The name of the path should be: 

PUT /LegalEntityDirectory/{legalentitydirectoryid}/Associations/{associationsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /LegalEntityDirectory/{legalentitydirectoryid}/Associations/{associationsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains details of the legal entity structure of the party including dependents and associations for individuals and ownership/subsidiary structures for corporations. Some financial indicators and product coverage/activity details can be included where this defines the nature of the legal entity relationship in particular for corporate entities ReBQ Retrieve details about association entries in the directory record

  **Documentation**

  This API path allows you to retrieve details about association entries in the legal entity directory record. It provides information about the legal entity structure of a party, including dependents and associations for individuals, as well as ownership and subsidiary structures for corporations. Additionally, this API may include financial indicators and details about product coverage or activity, particularly for corporate entities. By accessing this API path, you can obtain specific information about the relationships and structures within the legal entity directory.

  **Limitations**

  GET: Based on REST best practices, the path should be more straightforward and resource-oriented. Here are a few suggestions for the naming of the path:

1. /legal-entity-directories/{legalentitydirectoryid}/associations/{associationsid}
2. /legal-entities/{legalentitydirectoryid}/associations/{associationsid}
3. /directories/{legalentitydirectoryid}/associations/{associationsid}

Choose a naming convention that aligns best with the structure of your API and the

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
