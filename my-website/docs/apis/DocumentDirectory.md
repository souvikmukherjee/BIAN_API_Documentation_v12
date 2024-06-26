<h1 style='color:red;'>DocumentDirectory</h1>

**BIAN Documentation:** [DocumentDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/DocumentDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Directory Entry

  **Documentation**

  This API path allows the user to update an existing document directory entry by specifying the document directory ID. It provides a way for the bank to categorize and store documents within their system. By making a PUT request to this path, users can request updates to the information or details associated with a specific document directory entry.

  **Limitations**

  PUT: The name of the path should be `/DocumentDirectories/{documentdirectoryid}/Requests`, following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/Control</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Control Document Directory Entry

  **Documentation**

  This API path allows you to update an existing entry for a document directory control within the Document Directory service domain. It provides a way to categorize and store documents created and referenced by the bank. By using this API, you can make modifications to the control settings of a specific document directory entry.

  **Limitations**

  PUT: The name of the path should be:

```
/DocumentDirectories/{documentdirectoryid}/Control
```

In RESTful API design, resource names are typically plural nouns to indicate a collection of resources. Furthermore, path parameters are usually in singular form and represent a specific resource within the collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Directory Entry

  **Documentation**

  This BIAN API path allows you to update an existing document directory entry identified by {documentdirectoryid}. It is part of a service domain that provides a system for categorizing and storing documents created and used by the bank. By executing this API, you can make changes or updates to a specific document directory entry within the system.

  **Limitations**

  PUT: The name of the path could be `/DocumentDirectory/{documentdirectoryid}/actions/execute` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Directory Entry

  **Documentation**

  This API path allows you to retrieve information about a document directory entry in the Document Directory service domain by using the unique identifier associated with the document directory. This service domain organizes documents created and referenced by the bank in a structured manner for easier categorization and storage. By accessing this API endpoint, you can obtain details about a specific document directory entry within the system.

  **Limitations**

  GET: The name of the path should be:

```
/DocumentDirectory/{documentdirectoryid}/notifications
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Directory Entry

  **Documentation**

  This API path allows the bank to register a new document in its document directory. It provides a way to categorize and store documents within the bank's system for easy reference and management. By using this API, the bank can create a new entry in the document directory, helping to organize and track important documents effectively.

  **Limitations**

  POST: The name of the path should be "/api/users" following REST best practices. The path should reflect the resource (users) and use plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Directory Entry

  **Documentation**

  This API endpoint allows you to retrieve information about a specific document directory entry identified by its unique document directory ID. The document directory is a system used by the bank to categorize and store documents, making it easier to manage and reference them effectively. By using this API, you can access details about a particular document directory entry stored within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /documentDirectories/{documentdirectoryid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Directory Entry

  **Documentation**

  This BIAN API path allows users to update an existing entry in the Document Directory based on the provided document directory ID. The Document Directory is a categorization and storage mechanism used by the bank to manage documents. By making a PUT request to this path with the appropriate document directory ID, users can update information related to a specific document entry in the directory.

  **Limitations**

  PUT: The appropriate name for the path '/DocumentDirectory/{documentdirectoryid}/Update' following REST best practices could be:

PUT /DocumentDirectory/{documentdirectoryid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Amendment Properties

  **Documentation**

  This API path is used to update (PUT) and execute specific properties of a document amendment within a document directory. The document directory is a categorization and storage system used by the bank for managing documents. By accessing this path with the appropriate document directory and document amendment properties IDs, users can update and execute changes to specific properties related to document amendments within the document directory.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should clearly and concisely indicate the action being performed. It should not include verbs like "Execute" as REST URLs should focus on resources rather than actions.

A more appropriate name for the path could be:
```
/DocumentDirectories/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}
```

This path follows the pattern of identifying and interacting with specific resources (Document Directory and Document Amendment Properties) based on unique identifiers

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Archiving Properties

  **Documentation**

  This API path allows you to update the document archiving properties of a specific document within the document directory. By making a PUT request to this endpoint with the appropriate document directory ID and document archiving properties ID, you can modify the properties associated with the document stored in the directory. This can include updating metadata, categorization, storage settings, or any other relevant information related to the document.

  **Limitations**

  PUT: A suitable name for the path could be:

```
/DocumentDirectories/{documentDirectoryId}/DocumentArchivingProperties/{documentArchivingPropertiesId}/Execute
```

This path name follows REST best practices by:
- Using plural nouns for resource names ('DocumentDirectories', 'DocumentArchivingProperties').
- Using camelCase for path parameters ('documentDirectoryId', 'documentArchivingPropertiesId').
- Using a clear and descriptive endpoint name ('Execute').

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Reference Properties

  **Documentation**

  This BIAN API path allows you to update the properties of a specific document reference within a directory in the bank's Document Directory service. By making a PUT request to this path with the appropriate IDs, you can modify the properties associated with a particular document reference, such as its categorization or storage details. This API helps manage and track documents stored within the bank's system by allowing changes to be made to specific document reference properties.

  **Limitations**

  PUT: The name of the path should be:

```
/DocumentDirectories/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Execution
```

This path follows REST best practices by using plural nouns for resource names and using a clear and concise name that reflects the action being performed (i.e., executing a document).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Update History Properties

  **Documentation**

  This BIAN API path allows you to update the properties of a document update history within a specific document directory. It provides a way for the bank to categorize and store documents, as well as track and update the history of changes made to these documents. By executing this API, you can modify the properties associated with a document update history entry within a particular document directory.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

/DocumentDirectories/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Execute

In REST, it's advisable to use plural nouns for collections (e.g., DocumentDirectories) and singular nouns for resources (e.g., DocumentUpdateHistoryProperties). The path should also be descriptive and reflect the hierarchical structure of the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/{documentverificationpropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Verification Properties

  **Documentation**

  This API path is used to update the execution of document verification properties within a document directory. Specifically, it allows the bank to update the details or properties associated with a document verification process that is stored and categorized within the document directory.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should describe a resource and the action that will be performed on that resource. A possible name for the path you provided could be something like:

`/document-directories/{documentdirectoryid}/document-verification-properties/{documentverificationpropertiesid}/execute` 

This path is clear, descriptive, and follows the convention of using lowercase letters and hyphens to separate words within the URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}/Execute</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Execute Document Version Properties

  **Documentation**

  This BIAN API path allows you to update the properties of a specific document version within a document directory. By sending a PUT request to this path with the relevant document directory ID and document version properties ID, you can modify the properties associated with that particular document version. This API helps banks manage and categorize documents stored in their system effectively.

  **Limitations**

  PUT: The name of the path could be '/document-directories/{documentDirectoryId}/document-version-properties/{documentVersionPropertiesId}/execute' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Amendment Properties

  **Documentation**

  This API path allows you to retrieve information about notification settings for a specific document amendment properties within a document directory. The document directory is a categorization and storage system for documents used by a bank, and the document amendment properties are specific details related to changes made to documents. By using this API endpoint, you can fetch details on how notifications about document amendments are configured for a particular document within the directory.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

```
/DocumentDirectories/{documentDirectoryId}/DocumentAmendmentProperties/{documentAmendmentPropertiesId}/notify
``` 

Key points to note in the naming convention:
1. Use nouns to represent resources (e.g., `DocumentDirectories`, `DocumentAmendmentProperties`).
2. Use camelCase for resource names.
3. Use lowercase for resource names, keeping the path easy to read and consistent.
4. Avoid using verbs

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Archiving Properties

  **Documentation**

  This API path allows you to retrieve information about the notification related to document archiving properties within a document directory. It is part of a service that categorizes and stores documents created and referenced by the bank. This functionality enables users to access specific details about how document archiving properties are managed and notified within the document directory system.

  **Limitations**

  GET: The name of the path should be:

/document-directories/{documentdirectoryid}/document-archiving-properties/{documentarchivingpropertiesid}/notify

Following REST best practices, it is recommended to use lowercase letters and hyphens to separate words in the path names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Reference Properties

  **Documentation**

  This BIAN API path allows you to get information about a specific document reference property within a document directory. By providing the `documentdirectoryid` and `documentreferencepropertiesid`, you can retrieve details related to how documents are categorized and stored within the bank's system. This API gives you access to important information about the properties associated with a specific document reference, aiding in managing and organizing documents effectively.

  **Limitations**

  GET: Following REST best practices, the name of the path can be simplified and made more resource-oriented. It could be:

```
/DocumentDirectories/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Notification
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Update History Properties

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific "Document Update History Properties" under a particular "Document Directory" in a bank's system. The bank uses this service domain to categorize and store documents, as well as keep track of their update history. By accessing this path, you can get notified about any updates or changes made to the document properties within the specified document directory.

  **Limitations**

  GET: The name of the path could be `/document-directories/{documentDirectoryId}/document-update-history-properties/{documentUpdateHistoryPropertiesId}/notify` following REST best practices. In this case, the path uses lowercase letters and hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/{documentverificationpropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Verification Properties

  **Documentation**

  This API path allows you to retrieve information about a specific resource within the Document Directory service domain. You can specify a particular document directory ID and document verification properties ID to access details related to notifications about document verification properties created and referenced by the bank. Essentially, it provides a structure for organizing and storing documents within the banking system and enables the retrieval of specific details related to document verification.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/document-directories/{documentdirectoryid}/document-verification-properties/{documentverificationpropertiesid}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}/Notify</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Notify Document Version Properties

  **Documentation**

  This API path retrieves information about document version properties within a specific document directory. It provides a way to access details about the various document version properties associated with a particular document within the bank's document directory.

  **Limitations**

  GET: The name of the path could be `/document-directories/{documentDirectoryId}/document-version-properties/{documentVersionPropertiesId}/notify` following REST best practices. It is advisable to use lowercase letters and separate words with hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Amendment Properties

  **Documentation**

  This API path allows users to create a new resource in the document directory system within the bank's framework. Specifically, it enables the categorization and storage of documents and their related properties, such as amendments, within the document directory identified by the documentdirectoryid. By utilizing this path with a POST method, users can register new document amendment properties within the designated document directory.

  **Limitations**

  POST: Based on RESTful best practices, the name of the path could be something like:

```
/DocumentDirectory/{documentdirectoryid}/DocumentAmendmentPropertiesRegisters
```

This path is clear, descriptive, and follows the convention of using plural nouns for resource names. It also uses camel case to separate words in the resource names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Archiving Properties

  **Documentation**

  This API path allows you to create and register new document archiving properties within a document directory identified by a specific ID. It is a service provided by the bank for categorizing and storing documents using a directory-based system. By making a POST request to this path with the necessary information, you can add new document archiving properties to the directory, enabling efficient organization and referencing of documents within the bank's system.

  **Limitations**

  POST: The name of the path should be something like:

"/document-directories/{documentDirectoryId}/document-archiving-properties/register"

This path follows REST best practices by using lowercase letters, hyphens for readability, resource names in plural form, and a clear hierarchy in the URL structure.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Reference Properties

  **Documentation**

  This API path allows you to create a new resource in the Document Directory system of a bank. Specifically, it lets you register document reference properties for a document stored in a particular directory identified by {documentdirectoryid}. By using this API, you can categorize and store documents in a structured manner within the bank's system.

  **Limitations**

  POST: A more RESTful naming convention for the path '/DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/Register' could be '/document-directories/{documentdirectoryid}/document-reference-properties/register'. This follows a more standardized approach of using lowercase letters and separating words with hyphens to improve readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Update History Properties

  **Documentation**

  This API path allows you to create a new resource in the Document Directory service domain associated with a specific document directory ID. It provides a way to categorize and store documents with update history properties that are relevant to the bank. By using this API, you can add documents to the directory, specifying their update history properties within the context of the bank's register.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/document-directories/{documentDirectoryId}/document-update-history-properties/register' 

In RESTful APIs, it is recommended to use lowercase letters and hyphens to separate words in URLs for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Verification Properties

  **Documentation**

  This API path allows you to create a new resource in the Document Directory service domain for a specific document directory ID related to Register Document Verification Properties at a bank. It provides a way to categorize and store documents that are used for document verification purposes within the bank's system.

  **Limitations**

  POST: A more RESTful approach for the endpoint path could be:

```
/DocumentDirectories/{documentdirectoryid}/DocumentVerificationProperties
```

This path follows the convention of using plural nouns to represent collections and avoids using action verbs like "Register" in the path, which is not recommended in RESTful design.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/Register</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Register Document Version Properties

  **Documentation**

  This API path allows the bank to create a new resource within the Document Directory service domain. Specifically, it enables the bank to store and categorize documents with associated version properties in the document directory based on a specific identifier (documentdirectoryid). The documents created and referenced can be managed and organized effectively within the bank's system using this API endpoint.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/document-directories/{documentDirectoryId}/document-version-properties/register

In RESTful API design, it is recommended to use lowercase letters and hyphens for better readability and consistency. Additionally, using plural nouns for resource names is preferred over singular forms.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Amendment Properties

  **Documentation**

  This BIAN API path allows you to update the properties related to a specific document amendment within a document directory in the bank's system. By making a PUT request to this endpoint with the appropriate IDs for the document directory and document amendment properties, you can update information or settings associated with that specific document amendment. This helps in managing and organizing documents effectively within the bank's document directory system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a way that reflects the hierarchical relationship between the resources. The names should be in lowercase and separated by a forward slash (/). 

Following this naming convention, a suitable name for the path could be:

/documentdirectories/{documentdirectoryid}/documentamendmentproperties/{documentamendmentpropertiesid}/request

This naming convention clearly indicates the relationship between the resources and allows for a more organized and readable URI structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Archiving Properties

  **Documentation**

  This API path is used to update the document archiving properties of a specific document within the document directory. By making a PUT request to this endpoint with the appropriate document directory ID and document archiving properties ID, you can update the properties associated with a particular document stored in the bank's document directory. This allows for managing and organizing documents effectively within the system.

  **Limitations**

  PUT: A suitable name for the path that follows REST best practices could be:

'/document-directories/{documentDirectoryId}/archiving-properties/{documentArchivingPropertiesId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Reference Properties

  **Documentation**

  This API path allows you to update the properties of a specific document reference within a document directory. By using the PUT method, you can modify the details or properties associated with a particular document reference in the directory maintained by the bank. This helps in managing and categorizing documents effectively within the system.

  **Limitations**

  PUT: A suitable path name following REST best practices could be:

```
/DocumentDirectories/{documentdirectoryId}/DocumentReferenceProperties/{documentreferencepropertiesId}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Update History Properties

  **Documentation**

  This API path allows users to update the properties of a document's update history within a specific document directory. Users can provide updated information related to a document such as when it was last updated, who updated it, or any other relevant details. This API helps maintain a record of changes made to documents stored in the bank's directory.

  **Limitations**

  PUT: Assuming that the path is intended to represent a specific resource or action related to updating history properties of a document within a document directory, a relevant and RESTful name might be:

`/document-directories/{documentdirectoryid}/document-update-histories/{documentupdatehistoryid}/properties`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/{documentverificationpropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Verification Properties

  **Documentation**

  This BIAN API path allows you to update a specific document verification property within a document directory. By using a PUT request, you can modify the information related to a particular document verification property referenced by its ID within the specified document directory. This API service is designed to help banks manage and categorize documents more efficiently.

  **Limitations**

  PUT: A suitable name for the path you described could be something like:

/document-directories/{documentDirectoryId}/document-verification-properties/{documentVerificationPropertiesId}/request

This name follows REST best practices by using all lowercase letters, using hyphens to separate words, and making use of resource names to represent the entities being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}/Request</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Request Document Version Properties

  **Documentation**

  This API path allows you to update the properties of a specific document version within a document directory. By specifying the document directory ID and the document version properties ID, you can send a PUT request to update the information related to that particular document version. This API is part of a service domain that helps categorize and store documents used by the bank.

  **Limitations**

  PUT: A suitable name for the path following REST best practices could be:

/document-directory/{documentDirectoryId}/document-version-properties/{documentVersionPropertiesId}/request

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Amendment Properties

  **Documentation**

  This BIAN API path allows you to retrieve information about document amendment properties within a specific document directory. It provides access to document amendment properties related to documents stored and managed by the bank in a categorized manner. By using this API, you can retrieve details about specific properties linked to documents stored in the document directory.

  **Limitations**

  GET: The name of the path should ideally be something self-explanatory and concise. Based on the provided information, a suitable name for the path could be:

GET /documentDirectories/{documentDirectoryId}/documentAmendmentProperties/{documentAmendmentPropertiesId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Archiving Properties

  **Documentation**

  This API path allows you to retrieve information about the archiving properties of a specific document within a document directory. It provides access to details related to how the document is categorized and stored by the bank. By making a GET request to this endpoint with the appropriate document directory ID and document archiving properties ID, you can fetch relevant information about the document archiving process.

  **Limitations**

  GET: A suitable name for the path could be:

GET /document-directory/{documentDirectoryId}/document-archiving-properties/{documentArchivingPropertiesId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Reference Properties

  **Documentation**

  This API path allows you to retrieve information about document reference properties within a specific document directory. It is part of a service domain that categorizes and stores documents created and referenced by the bank. By accessing this path with a GET request, you can retrieve details related to specific document reference properties associated with a particular document directory.

  **Limitations**

  GET: The name of the path '/DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Retrieve' following REST best practices should be:

GET /document-directory/{documentdirectoryid}/document-reference-properties/{documentreferencepropertiesid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Update History Properties

  **Documentation**

  This BIAN API path is used to retrieve information about the document update history properties of a specific document within the document directory. The path includes 'documentdirectoryid' and 'documentupdatehistorypropertiesid' as placeholders for identifying the specific document and its update history properties. By making a GET request to this path, users can access details related to how a document has been updated over time within the bank's document directory. It allows users to view the history of changes made to the document's properties.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /documentdirectories/{documentDirectoryId}/documentupdatehistoryproperties/{documentUpdateHistoryPropertiesId} 

This path indicates a GET request to retrieve specific document update history properties within a document directory. It follows REST conventions by using lowercase letters and hyphens in the path, using plural nouns for collections (documentdirectories, documentupdatehistoryproperties), and using specific resource identifiers (documentDirectoryId, documentUpdateHistoryPropertiesId) instead

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/{documentverificationpropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Verification Properties

  **Documentation**

  This BIAN API path allows you to retrieve information about the verification properties of a document within the bank's document directory based on specific IDs. Essentially, it enables you to access details related to how a particular document is verified and stored within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
/document_directories/{documentdirectoryid}/document_verification_properties/{documentverificationpropertiesid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Retrieve Document Version Properties

  **Documentation**

  This API path allows you to retrieve information about specific document version properties within a document directory. By providing the document directory ID and the document version properties ID, you can access details related to a specific version of a document stored in the bank's document directory. This API supports categorization and storage of documents, allowing for easy access and management of document versions.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

/documentdirectories/{documentdirectoryid}/documentversionproperties/{documentversionpropertiesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentAmendmentProperties/{documentamendmentpropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Amendment Properties

  **Documentation**

  This BIAN API path allows you to update the properties of a specific document amendment within the document directory. By sending a PUT request to this path with the appropriate document directory ID and document amendment properties ID, you can modify the details or attributes associated with that particular document amendment. This functionality facilitates the ability to manage and adjust the properties of documents stored and categorized within the bank's document directory system.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

/document-directories/{documentDirectoryId}/document-amendment-properties/{documentAmendmentPropertiesId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Archiving Properties

  **Documentation**

  This BIAN API path allows you to update the archiving properties of a specific document within the document directory. By making a PUT request to this path with the document directory ID and the document archiving properties ID, you can modify the properties associated with that particular document. These properties might include metadata such as storage location, access permissions, or retention policies. This API essentially enables you to make changes to how a specific document is stored and managed in the document directory of the bank's system.

  **Limitations**

  PUT: The appropriate name for the path you mentioned should be:

```
/DocumentDirectories/{documentdirectoryid}/DocumentArchivingProperties/{documentarchivingpropertiesid}
```

This path follows REST best practices by using nouns to represent resources (e.g., DocumentDirectories, DocumentArchivingProperties) and avoids using actions in the URL. The HTTP methods (e.g., PUT, POST) should be used to perform actions on these resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Reference Properties

  **Documentation**

  This BIAN API path allows you to update specific properties of a document reference within a document directory. By specifying the document directory ID and the document reference properties ID, you can make changes to the characteristics or details associated with a particular document within the directory. This can include updating information such as the title, author, or other attributes related to the document reference. The PUT method is used to update the existing resource with the new information provided.

  **Limitations**

  PUT: Based on REST best practices, the path could be named as follows:

PUT /DocumentDirectory/{documentdirectoryid}/DocumentReferenceProperties/{documentreferencepropertiesid}

This follows the convention of using the HTTP method PUT to update a specific resource identified by its ID within the path hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentUpdateHistoryProperties/{documentupdatehistorypropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Update History Properties

  **Documentation**

  This BIAN API path allows you to update a specific document's update history properties within the document directory system of the bank. By sending a PUT request to this endpoint with the appropriate document directory ID and document update history properties ID, you can make changes to the update history details of a particular document stored in the system. This enables the bank to efficiently manage and track the updates made to documents in their system.

  **Limitations**

  PUT: The name of the path could be `/document-directories/{documentId}/update-history-properties/{updateId}/update`, following REST best practices for naming conventions by using lowercase letters and hyphens to separate words in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVerificationProperties/{documentverificationpropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Verification Properties

  **Documentation**

  This API path allows you to update the verification properties for a specific document within the document directory. It provides a way to modify the categorization and storage information associated with a particular document that has been created and referenced by the bank.

  **Limitations**

  PUT: A good RESTful name for this path could be:  
`/document-directory/{documentdirectoryid}/document-verification-properties/{documentverificationpropertiesid}`

If you want to specify that this path is for updating a document verification property, you could use:  
`/document-directory/{documentdirectoryid}/document-verification-properties/{documentverificationpropertiesid}/update`

Remember to use lowercase letters and hyphens to separate words in the URL for better readability and consistency with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentDirectory/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}/Update</span></summary>

  **Description**

  This Service Domain provides a directory based categorization and storage mechanism for documents created and referenced by the bank Update Document Version Properties

  **Documentation**

  This API path allows you to update the properties of a specific document version within a document directory. By providing the document directory ID and document version properties ID in the path, you can make changes to the version details of a document stored in the bank's document directory. The PUT method is used to update the existing resource, specifying the new information for the document version properties.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/DocumentDirectories/{documentdirectoryid}/DocumentVersionProperties/{documentversionpropertiesid}
```

This path represents the specific Document Version Properties resource being updated within a Document Directory.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
