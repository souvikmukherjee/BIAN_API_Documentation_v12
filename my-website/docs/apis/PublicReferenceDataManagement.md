<h1 style='color:red;'>PublicReferenceDataManagement</h1>

**BIAN Documentation:** [PublicReferenceDataManagement v12](https://app.swaggerhub.com/apis/BIAN-3/PublicReferenceDataManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Capture</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. CaCR Capture Global Standard Specification activity or event related information

  **Documentation**

  This BIAN API path allows you to update existing resources related to public reference data management. It provides structured access to standard global reference data and definitions associated with market activities, such as currency, country, and segment identifiers. You can use this path to capture and update information about activities or events related to global standard specifications.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/PublicReferenceDataManagement/{publicreferencedatamanagementid}/Capture
```

This path follows the best practice of using resource names in the plural form ('PublicReferenceDataManagement') and including identifiers in curly braces ('{publicreferencedatamanagementid}') to represent variables in the path. The specific operation 'Capture' is also included to indicate what action is being performed on the resource identified by 'publicrefer

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Control</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. CoCR Control the processing of Global Standard Specification

  **Documentation**

  This BIAN API path allows users to update an existing resource related to public reference data management. Specifically, it provides structured access to standard global reference data like currency, country, and segment identifiers. The API helps control the processing of global standard specifications for managing this reference data effectively.

  **Limitations**

  PUT: In a RESTful API, the path segments should be nouns rather than verbs. Based on the path `/PublicReferenceDataManagement/{publicreferencedatamanagementid}/Control`, a more RESTful name for the endpoint could be:

`/public-reference-data/{publicreferencedatamanagementid}/controls`

This name is more descriptive and follows the convention of using plural nouns for collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Exchange</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. EcCR Accept, verify, etc. aspects of Global Standard Specification processing

  **Documentation**

  This BIAN API path allows you to update an existing resource related to public reference data management for exchanges. It provides structured access to standard global reference data such as currency, country, and segment identifiers used in market activities. The API facilitates accepting, verifying, and other aspects of processing global standard specifications for reference data management.

  **Limitations**

  PUT: The recommended name for the path '/PublicReferenceDataManagement/{publicreferencedatamanagementid}/Exchange' following REST best practices would be:

'/public-reference-data-management/{public-reference-data-management-id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicReferenceDataManagement/Initiate</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. InCR Instantiate a new Global Standard Specification

  **Documentation**

  This BIAN API path is used to create a new resource that provides access to standardized reference data related to market activity. This data includes information such as currency types, country identifiers, and segment identifiers. By initiating this API path, users can establish a new global standard specification for accessing and utilizing this reference data in a structured manner.

  **Limitations**

  POST: The path should be named using nouns that represent resources, rather than verbs. A better name for the path '/PublicReferenceDataManagement/Initiate' following REST best practices could be '/public-reference-data'. This path represents the resource related to public reference data, which is a more suitable and descriptive naming convention based on REST principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Retrieve</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. ReCR Retrieve details about any aspect of Global Standard Specification

  **Documentation**

  This BIAN API path allows users to retrieve detailed information about specific aspects of standard 'global' reference data and definitions related to market activities. This includes data such as currency types, country details, and segment identifiers. By sending a GET request to this API endpoint with a specific identifier, users can access structured information about global standard specifications related to market activities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/PublicReferenceDataManagement/{publicReferenceDataManagementId}/Retrieve
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Request</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. RqCR Request manual intervention or a decision with respect to Global Standard Specification

  **Documentation**

  This API path allows you to update existing public reference data associated with market activities such as currency, country, and segment identifiers. It involves requesting manual intervention or a decision related to global standard specifications for managing this reference data.

  **Limitations**

  PUT: The name of the path should be in plural form and should represent a collection of resources. Following REST best practices, the path could be named as '/public-reference-data-management/{publicreferencedatamanagementid}/requests'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/Update</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. UpCR Update details relating to Global Standard Specification

  **Documentation**

  This BIAN API path allows you to update details related to global standard specifications for public reference data management. It provides structured access to standard reference data such as currency, country, and segment identifiers. By using a PUT method, you can make changes to an existing resource in the system related to reference data management.

  **Limitations**

  PUT: The name of the path should be:

PUT /PublicReferenceDataManagement/{publicreferencedatamanagementid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/GlobalReferenceData/Initiate</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. InBQ Instantiate a new Global Reference Data

  **Documentation**

  This BIAN API path allows you to create a new Global Reference Data within the Public Reference Data Management system. This reference data includes standard information related to market activities such as currency, country, and segment identifiers. By initiating this process through a POST request, you can establish structured access to these key reference data points for your organization's use.

  **Limitations**

  POST: A recommended name for the path '/PublicReferenceDataManagement/{publicreferencedatamanagementid}/GlobalReferenceData/Initiate' following REST best practices could be:

'/public-reference-data-management/{publicreferencedatamanagementid}/global-reference-data/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicReferenceDataManagement/{publicreferencedatamanagementid}/GlobalReferenceData/{globalreferencedataid}/Retrieve</span></summary>

  **Description**

  Provide structured access to standard 'global' reference data and definitions associated with market activity such as currency, country and segment identifiers. ReBQ Retrieve details about any aspect of Global Reference Data

  **Documentation**

  This API path allows users to retrieve detailed information about global reference data related to market activities. This data includes identifiers for currencies, countries, and market segments. By making a GET request to this path with the appropriate IDs, users can access structured information about specific aspects of global reference data.

  **Limitations**

  GET: Following REST best practices, the name of the path should ideally reflect the resource being acted upon rather than the action itself. A suitable name for this path could be:

```
/PublicReferenceDataManagement/{publicreferencedatamanagementid}/GlobalReferenceData/{globalreferencedataid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
