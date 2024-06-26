<h1 style='color:red;'>PartyLifecycleManagement</h1>

**BIAN Documentation:** [PartyLifecycleManagement v12](https://app.swaggerhub.com/apis/BIAN-3/PartyLifecycleManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PartyLifecycleManagement/Initiate</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. InCR Initiate party life-cycle administrative plan

  **Documentation**

  This API path allows users to create a new resource that initiates the process of managing the lifecycle of a party's relationship with the bank. It includes performing initial checks when establishing a new connection with a party and maintaining the relationship over time. The checks will differ based on the type of party and location, covering various bank-specific, legal, and regulatory considerations. The checks may be updated regularly or upon specific requests.

  **Limitations**

  POST: If the path '/PartyLifecycleManagement/Initiate' followed REST best practices, it should be renamed to just '/parties' to better represent the resource being acted upon.RESTful URLs typically use nouns to represent resources and avoid verbs or actions in the URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Update</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. UpCR Update details about a party life-cycle administrative plan

  **Documentation**

  This API path allows you to update details about a party's lifecycle administrative plan within a bank's system. It tracks the status of the relationship between the bank and the party from the initial checks performed when the connection is established, throughout the duration of the relationship. The requirements for checks and maintenance may differ based on the type of party and the location. Updates to this administrative plan can be made according to a set schedule or in special circumstances upon request.

  **Limitations**

  PUT: A good name for the path '/PartyLifecycleManagement/{partylifecyclemanagementid}/Update' following REST best practices could be:

PUT /party-lifecycle-management/{partylifecyclemanagementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Control</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. CoCR Control the processing of a party-life-cycle administrative plan (e.g. terminate)

  **Documentation**

  This API path is used for controlling the lifecycle of a party's relationship with a bank. It allows for updating and managing the checks and requirements needed to establish and maintain the relationship with the bank. This could involve actions such as initiating or terminating the relationship, based on criteria specific to the party type and legal regulations. The API helps to keep track of the process and ensures that the necessary steps are followed throughout the duration of the relationship.

  **Limitations**

  PUT: The name of the path should be:

`/party-lifecycle-management/{party-lifecycle-management-id}/control`

This naming convention follows REST best practices by using lowercase letters, hyphens to separate words, and pluralizing resource names when appropriate.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Exchange</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. EcCR Accept, verify, etc. of the party life-cycle administrative plan

  **Documentation**

  This API path allows users to update the information related to the lifecycle management of a party's relationship with the bank. It involves performing initial checks when establishing a new connection with a party and then maintaining this relationship as required. The checks and maintenance tasks will differ based on the type of party and the location's jurisdiction. These checks cover both bank-specific requirements and legal/regulatory considerations. The updates can be made according to a standard schedule or in specific situations when requested. Overall, this API path enables the bank to manage and track the lifecycle of its relationships with parties efficiently.

  **Limitations**

  PUT: Based on standard REST best practices, the name of the path should be:

/PartyLifecycleManagement/{partylifecyclemanagementid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Execute</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ExCR Execute an automated action (e.g. input data)

  **Documentation**

  This API path allows you to update and execute automated actions related to the lifecycle management of a party's relationship with the bank. It involves tracking the state of the relationship from the initial checks done when the connection is established and maintaining it as needed over time. The checks and maintenance tasks will differ based on the type of party and the legal requirements in different locations. The automated actions could include inputting data or carrying out specific tasks as needed for managing the party relationship effectively.

  **Limitations**

  PUT: The path '/PartyLifecycleManagement/{partylifecyclemanagementid}/Execute' would follow REST best practices if it were named as follows:

'/party-lifecycle-management/{partylifecyclemanagementid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Request</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. RqCR Request manual intervention (e.g. negotiate resolution)

  **Documentation**

  This BIAN API path allows you to update an existing party relationship with the bank by making requests for manual intervention. This involves managing the state of the party relationship from its establishment to ongoing maintenance, which includes conducting various checks based on the party type and jurisdiction's requirements. If a situation requires manual intervention, such as negotiating a resolution, you can use this API to make the necessary requests to address the issue within the party relationship.

  **Limitations**

  PUT: The name of the path should be:

```
/PartyLifecycleManagement/{partylifecyclemanagementid}/Requests
``` 

In REST best practices, resource names should typically be plural nouns to represent a collection of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyLifecycleManagement/{partylifecyclemanagementid}/Retrieve</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ReCR Retrieve details about a party life-cycle administrative plan

  **Documentation**

  This API path allows you to retrieve details about a party's lifecycle administrative plan within the bank. It tracks the status of a party's relationship with the bank from the initial checks made when the connection is established to ongoing maintenance as needed throughout the relationship. The checks and requirements for maintenance will vary depending on the type of party and location. This API covers specific checks related to the bank, as well as legal and regulatory considerations, which may be updated on a regular schedule or in specific situations.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:  
`/party-lifecycle-management/{partylifecyclemanagementid}`

RESTful paths should use lowercase letters and hyphens to separate words for better readability and consistency. Also, the use of verbs like "Retrieve" in the path is not recommended in RESTful design since the HTTP method used (e.g., GET) should already convey the action taking place.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyLifecycleManagement/{partylifecyclemanagementid}/Qualification/{qualificationid}/Retrieve</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ReBQ Retrieve details about a party qualification routine

  **Documentation**

  This API path allows you to retrieve details about a party qualification routine within the Party Lifecycle Management service domain. It helps track the status of a party's relationship with the bank by conducting initial checks when the relationship is established and maintaining these checks as needed over time. The qualifications and maintenance requirements can differ based on the type of party and the jurisdiction. The checks include considerations specific to the bank, as well as legal and regulatory requirements, and can be updated regularly or on request in certain situations.

  **Limitations**

  GET: The name of the path should be:

/PartyLifecycleManagement/{partylifecyclemanagementid}/Qualification/{qualificationid}

This path reflects the hierarchical relationship between party lifecycle management and qualifications, where a specific qualification is retrieved for a given party in the context of party lifecycle management.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Documentation/{documentationid}/Update</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. UpBQ Update details about document handling

  **Documentation**

  This API path allows you to update details about document handling for a specific party's lifecycle management within the system. It is used to track and manage the relationship between the bank and a party, such as a customer, from the initial checks made when establishing the connection to ongoing maintenance throughout the relationship. The updates can include information related to bank-specific requirements, legal and regulatory considerations, and any other necessary documentation needed for the party's relationship with the bank.

  **Limitations**

  PUT: The name of the path should be: 

`PUT /party-lifecycle-management/{partylifecyclemanagementid}/documentation/{documentationid}`

In this naming convention, we use the HTTP method `PUT` to indicate that we are updating an existing resource. The path segments are in lowercase and separated by hyphens, representing the resource hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Documentation/{documentationid}/Execute</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ExBQ Execute an automated action (e.g. input data about a document)

  **Documentation**

  This API path allows you to update an existing document related to the lifecycle management of a party within a bank. It provides a way to execute an automated action, such as inputting data into the document. The document contains information about the checks and maintenance requirements associated with a party's relationship with the bank, covering specific considerations based on the type of party and jurisdiction. This API helps with the ongoing monitoring and management of party relationships within the bank.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
'/party-lifecycle-management/{party-lifecycle-management-id}/documentation/{documentation-id}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Documentation/{documentationid}/Request</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. RqBQ Request manual intervention (e.g. handle a document exchange)

  **Documentation**

  This API path allows you to update a specific documentation related to the lifecycle management of a party (customer/organization) in the bank's system. The documentation could be a record of checks conducted during the establishment of the party relationship or maintenance activities required over time. The update could involve requesting manual intervention, such as handling a document exchange, for specific circumstances. The checks and maintenance requirements vary based on the type of party and jurisdiction, covering both bank-specific and legal/regulatory considerations.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

`/party-lifecycle-management/{partylifecyclemanagementid}/documentation/{documentationid}/request`

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyLifecycleManagement/{partylifecyclemanagementid}/Documentation/{documentationid}/Retrieve</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ReBQ Retrieve details about document processing for a party life-cycle administration

  **Documentation**

  This API path allows you to retrieve details about document processing for managing the lifecycle of a party relationship with the bank. It tracks the checks and maintenance requirements that are carried out during the establishment of a new party connection and throughout the duration of the relationship. These checks can vary based on the type of party and location. The information retrieved may include bank-specific, legal, and regulatory considerations that are updated regularly or upon request in specific situations.

  **Limitations**

  GET: The name of the path should be `/party-lifecycle-management/{party-lifecycle-management-id}/documentation/{documentation-id}` to comply with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyLifecycleManagement/{partylifecyclemanagementid}/Precedents/{precedentsid}/Update</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. UpBQ Update details about customer precedents

  **Documentation**

  This API path allows you to update details about customer precedents within the Party Lifecycle Management system. It is used to modify information related to a specific precedent associated with a party's relationship with the bank. The updates could involve changes to the checks made during the establishment of the party connection, as well as any maintenance requirements that need to be adjusted over time. These updates may be necessary due to bank-specific needs, legal and regulatory considerations, or other circumstances that require the information to be updated.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

```
PUT /party-lifecycle-management/{partylifecyclemanagementid}/precedents/{precedentsid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyLifecycleManagement/{partylifecyclemanagementid}/Precedents/{precedentsid}/Retrieve</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ReBQ Retrieve details about customer precedent maintenance

  **Documentation**

  This API path allows you to retrieve details about customer precedent maintenance within the Party Lifecycle Management service domain. It tracks the status of a party's relationship with the bank, including the initial checks made when the relationship is established and any ongoing maintenance required. The checks are specific to the party's type and location, covering bank-specific, legal, and regulatory considerations. You can retrieve information about customer precedent maintenance by using this GET method with the specified Party Lifecycle Management ID and Precedents ID.

  **Limitations**

  GET: The path could be named as: 

```
/PartyLifecycleManagement/{partylifecyclemanagementid}/Precedents/{precedentsid}
```

This path structure reflects the hierarchy of resources in a more RESTful manner. The "Retrieve" operation can be implied by sending a GET request to this endpoint.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyLifecycleManagement/{partylifecyclemanagementid}/IdentityProofing/{identityproofingid}/Retrieve</span></summary>

  **Description**

  This service domain tracks the state of a party relationship with the bank from the initial checks made during the establishment of a new party connection and subsequently maintained as necessary over the duration of the relationship. The checks and the maintenance requirements will vary by party type and jurisdiction. The checks cover bank specific and legal and regulatory considerations and may be updated based on a standard schedule or by request in specific circumstances. ReBQ Retrieve details about a party identity proofing routine

  **Documentation**

  This API path allows you to retrieve information about a specific party's identity proofing routine within the Party Lifecycle Management service domain. It helps track the status of a party's relationship with the bank by checking and maintaining necessary requirements throughout the duration of the relationship. The checks performed can vary based on the type of party and jurisdiction, covering both bank-specific and legal/regulatory considerations. You can use this API to access details about the identity proofing process for a particular party, aiding in managing and maintaining the party relationship effectively.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured in a way that reflects the resource and action being performed. Here is a suggestion for the name of the path:

`GET /party-lifecycle-management/{partylifecyclemanagementid}/identity-proofing/{identityproofingid}`

In this path naming convention:
- We use lowercase letters and separate words with dashes for readability.
- The primary resource being accessed is `party-lifecycle-management`, and the secondary resource is `identity

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
