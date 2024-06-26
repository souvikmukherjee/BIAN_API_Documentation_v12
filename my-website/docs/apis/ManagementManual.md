<h1 style='color:red;'>ManagementManual</h1>

**BIAN Documentation:** [ManagementManual v12](https://app.swaggerhub.com/apis/BIAN-3/ManagementManual/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaCR Capture Management Manual Specification activity or event related information

  **Documentation**

  This BIAN API path allows users to update an existing resource related to the management manual. It involves developing, maintaining, and sharing the necessary procedures and guidelines outlined in the management manual. Users can provide support in referencing and interpreting information relevant to capturing management manual specifications for specific activities or events.

  **Limitations**

  PUT: The name of the path should be: `/management_manuals/{managementmanualid}/capture`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/Control</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CoCR Control the processing of Management Manual Specification

  **Documentation**

  This BIAN API path allows you to update and control a specific management manual identified by its managementmanualid. It involves tasks related to developing, maintaining, and sharing procedures and guidelines within the manual. Additionally, the API supports referencing and interpreting the manual as needed. This path enables the management and processing of the specifications outlined in the Management Manual.

  **Limitations**

  PUT: The path should be named as: '/management-manuals/{managementmanualid}/controls'. 

This adheres to REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/Exchange</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate EcCR Accept, verify, etc. aspects of Management Manual Specification processing

  **Documentation**

  This BIAN API path allows users to update an existing resource related to the Management Manual. Specifically, it is used to develop, maintain, and communicate the necessary procedures and guidelines outlined in the management manual. Users can reference and interpret the manual as needed, provide support for its implementation, and handle aspects of the management manual specification processing such as accepting and verifying information.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/management-manuals/{managementmanualid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InCR Instantiate a new Management Manual Specification

  **Documentation**

  This API path allows you to create a new Management Manual Specification within the system. It initiates the process of developing, maintaining, and distributing a manual that contains procedures and guidelines for management. The API can help in creating a structured document that provides support for understanding and interpreting the management manual as needed.

  **Limitations**

  POST: In the REST architecture style, the path '/ManagementManual/Initiate' should ideally be named in a way that represents a resource or entity. One common best practice is to use nouns for resource names rather than verbs. 

Based on the provided path, a more RESTful name could be:
'/management-manuals/initiations' 

This naming convention uses a plural form for the resource (management-manuals) and reflects the action of initiating as a sub-resource (initiations). 

Remember

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReCR Retrieve details about any aspect of Management Manual Specification

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of the Management Manual Specification by specifying the ID of the management manual. It provides a way to access information related to the required procedures and guidelines outlined in the manual. This can help users in referencing and interpreting the content of the management manual as needed.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be "/management-manuals/{managementmanualid}". 

RESTful URLs generally use lowercase letters, hyphens for readability, and plural nouns for collections of resources. The use of the specific term "Retrieve" in the path is unnecessary since the HTTP GET method is commonly used to retrieve resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/Request</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate RqCR Request manual intervention or a decision with respect to Management Manual Specification

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the Management Manual. Specifically, it is used to request manual intervention or a decision concerning the Management Manual Specification identified by the unique managementmanualid. This API is designed to help in developing, maintaining, and communicating the procedures and guidelines outlined in the management manual, providing support for understanding and interpreting its contents as needed.

  **Limitations**

  PUT: The name of the path should be `/management-manuals/{managementmanualid}/requests` to follow REST best practices. Each word in the path should be lowercase and separated by hyphens for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpCR Update details relating to Management Manual Specification

  **Documentation**

  This API path allows you to update an existing management manual by specifying its unique ID. It is used to make changes to the details and specifications of the management manual, such as procedures and guidelines, in order to keep it up-to-date and accurate. This update can involve adding, modifying, or deleting information contained in the management manual.

  **Limitations**

  PUT: The name of the path should be `/management-manuals/{managementmanualid}` with the HTTP method `PUT`. This follows REST best practices as it uses the resource name in plural form (`management-manuals`) and specifies the unique identifier (`{managementmanualid}`) for updating a specific resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/CompanyMissionandPolicies/{companymissionandpoliciesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Company Mission and Policies activity or event related information

  **Documentation**

  This API path allows users to update an existing resource within the Management Manual related to Company Mission and Policies. Users can input new information, such as activity or event details, to be included in the manual. The API is designed to help manage and distribute the required procedures and guidelines to ensure that the company's mission and policies are accurately captured and reflected in the manual.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

/management-manuals/{managementmanualid}/company-mission-and-policies/{companymissionandpoliciesid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/EmploymentRelatedProceduresandGuidelines/{employmentrelatedproceduresandguidelinesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Employment Related Procedures and Guidelines activity or event related information

  **Documentation**

  This API path allows you to update specific employment-related procedures and guidelines within a management manual. It involves capturing and updating information related to employment activities or events as outlined in the manual. This can include adding new procedures, modifying existing guidelines, or providing support for interpreting and referencing the information contained in the manual.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

/management-manuals/{managementmanualid}/employment-related-procedures-and-guidelines/{employmentrelatedproceduresandguidelinesid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/LegalandRegulatoryObligationsandGuidelines/{legalandregulatoryobligationsandguidelinesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Legal and Regulatory Obligations and Guidelines activity or event related information

  **Documentation**

  This BIAN API path allows you to update information related to legal and regulatory obligations and guidelines in the management manual. You can provide support in referencing and interpreting these requirements for specific activities or events. This API helps ensure that the management manual contains accurate and up-to-date information on procedures and guidelines to comply with legal and regulatory standards.

  **Limitations**

  PUT: A suitable name for that path could be:

`/management-manuals/{managementManualId}/legal-regulatory-obligations-guidelines/{legalRegulatoryId}/capture`

This path follows REST best practices by using lowercase letters, hyphens to separate words, and uses plural nouns for collections. The path segments are descriptive and easy to understand.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/OperationalSecurityProceduresandGuidelines/{operationalsecurityproceduresandguidelinesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Operational Security Procedures and Guidelines activity or event related information

  **Documentation**

  This API path allows you to update the operational security procedures and guidelines within a specific management manual. It is used to manage, maintain, and publish the necessary procedures and guidelines related to operational security. The API provides support for referencing and interpreting this information for specific activities or events related to operational security procedures.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/management-manuals/{managementmanualid}/operational-security-procedures-and-guidelines/{operationalsecurityproceduresandguidelinesid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/OperationalandProductionProceduresandGuidelines/{operationalandproductionproceduresandguidelinesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Operational and Production Procedures and Guidelines activity or event related information

  **Documentation**

  This API endpoint allows you to update information related to operational and production procedures and guidelines within a management manual. It is used to manage and maintain the required procedures and guidelines outlined in the manual. By using this endpoint, you can capture and update details about specific activities or events that are related to operational and production processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:
/management-manuals/{managementmanualid}/procedures-guidelines/{proceduresguidelinesid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/StaffManagementProceduresandGuidelines/{staffmanagementproceduresandguidelinesid}/Capture</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate CaBQ Capture Staff Management Procedures and Guidelines activity or event related information

  **Documentation**

  This BIAN API path allows users to update specific information related to staff management procedures and guidelines within a management manual. Users can modify and maintain this information to ensure it is up to date and accurate. The API also provides support for referencing and interpreting the procedures and guidelines as needed for managing staff activities or events.

  **Limitations**

  PUT: To follow REST best practices, the name of the path should be:

/management-manuals/{managementmanualid}/staff-management-procedures-and-guidelines/{staffmanagementproceduresandguidelinesid}/capture

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/CompanyMissionandPolicies/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Company Mission and Policies

  **Documentation**

  This API path allows users to create and set a new Company Mission and Policies within the Management Manual. It provides support in developing, maintaining, and distributing the necessary procedures and guidelines outlined in the manual. Users can initiate the process of adding a new Company Mission and Policies through this endpoint.

  **Limitations**

  POST: A more appropriate RESTful naming convention for this path would be:
/management-manuals/{managementmanualid}/company-mission-and-policies/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/EmploymentRelatedProceduresandGuidelines/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Employment Related Procedures and Guidelines

  **Documentation**

  This BIAN API path allows you to create a new set of employment-related procedures and guidelines within the management manual. By making a POST request to this endpoint with the necessary information, you can initiate the development, maintenance, and dissemination of these procedures and guidelines. This API supports the establishment of new rules and processes related to employment within the organization.

  **Limitations**

  POST: The name of the path should ideally be: 

/management-manuals/{managementmanualid}/employment-related-procedures-and-guidelines/initiate

This follows REST best practices by using all lowercase letters, separating words with hyphens, and using plural nouns for consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/LegalandRegulatoryObligationsandGuidelines/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Legal and Regulatory Obligations and Guidelines

  **Documentation**

  This API path allows users to create a new entry in the Management Manual for Legal and Regulatory Obligations and Guidelines. By making a POST request to this endpoint with specific information, a new resource will be initiated within the Management Manual. This resource will provide necessary procedures and guidelines related to legal and regulatory obligations, along with support for reference and interpretation when needed.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/management-manuals/{managementManualId}/legal-requirements/initiate
``` 

In this naming convention:
- Use lowercase letters.
- Separate words with dashes (-) instead of camel case.
- Use plural form for collections (like "management-manuals").
- Use singular form for resources (like "managementManualId").
- Use hyphens for better readability and SEO.
- Focus on resources and their

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/OperationalSecurityProceduresandGuidelines/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Operational Security Procedures and Guidelines

  **Documentation**

  This API path allows you to create a new set of Operational Security Procedures and Guidelines within a specific Management Manual. It is used to develop, maintain, and share essential procedures and guidelines related to operational security. With this API, you can initiate the process of establishing a new set of procedures and guidelines for operational security within the chosen management manual.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/management-manuals/{managementmanualid}/operational-security-procedures-and-guidelines/initiate
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/OperationalandProductionProceduresandGuidelines/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Operational and Production Procedures and Guidelines

  **Documentation**

  This BIAN API path allows you to create a new resource within the Management Manual related to Operational and Production Procedures and Guidelines. You can initiate the development, maintenance, and promulgation of required procedures and guidelines in the management manual. This API provides support for referencing and interpreting these procedures as needed.

  **Limitations**

  POST: A RESTful path should be intuitive, descriptive, and reflect the resource being accessed. Following REST best practices, a suitable name for this path could be:

/management-manuals/{managementmanualid}/procedures/{procedureid}/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /ManagementManual/{managementmanualid}/StaffManagementProceduresandGuidelines/Initiate</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate InBQ Instantiate a new Staff Management Procedures and Guidelines

  **Documentation**

  This API path allows users to create a new set of procedures and guidelines for staff management within the management manual. Users can initiate the process, which involves developing, maintaining, and sharing these guidelines as needed. This API helps in ensuring that the staff management procedures are clearly outlined and easily accessible for reference and interpretation when necessary.

  **Limitations**

  POST: Based on RESTful best practices, the name of the path should be:

/management-manuals/{managementmanualid}/staff-management/procedures-and-guidelines/initiate

In RESTful API design, it is common practice to use all lowercase letters, separate words with dashes, and use plural nouns for resource names. The path should be descriptive and follow a logical hierarchy, reflecting the structure of the data being accessed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/CompanyMissionandPolicies/{companymissionandpoliciesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Company Mission and Policies

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of the Company Mission and Policies from the Management Manual. By providing the managementmanualid and companymissionandpoliciesid, you can access information related to the procedures and guidelines outlined in the manual regarding the company's mission and policies. This API supports the reference and interpretation of the management manual content for assistance and clarification.

  **Limitations**

  GET: A suitable name for the path could be:

GET /management-manuals/{managementManualId}/company-mission-and-policies/{companyMissionAndPoliciesId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/EmploymentRelatedProceduresandGuidelines/{employmentrelatedproceduresandguidelinesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Employment Related Procedures and Guidelines

  **Documentation**

  This API path allows you to retrieve details about any aspect of Employment Related Procedures and Guidelines from the Management Manual. By specifying the management manual ID and the employment-related procedures and guidelines ID, you can access specific information related to these procedures and guidelines for reference or interpretation as needed.

  **Limitations**

  GET: Following REST best practices, the path should be named based on the resource it represents. For the given path, a more appropriate naming can be "/management-manuals/{managementmanualid}/employment-related-procedures-and-guidelines/{employmentrelatedproceduresandguidelinesid}". 

This naming convention uses lowercase characters, separates words with hyphens for readability, and reflects the hierarchy of the resources being accessed in a more descriptive manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/LegalandRegulatoryObligationsandGuidelines/{legalandregulatoryobligationsandguidelinesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Legal and Regulatory Obligations and Guidelines

  **Documentation**

  This BIAN API path allows users to retrieve details about legal and regulatory obligations and guidelines from the Management Manual. Users can specify a management manual ID and the ID of the specific legal and regulatory obligations and guidelines they are interested in, and the API will provide information about that aspect from the manual. The API is designed to help users access information from the Management Manual related to legal and regulatory requirements to support compliance and decision-making processes.

  **Limitations**

  GET: A recommended name for this path following REST best practices could be:

GET /management-manuals/{managementmanualid}/legal-obligations/{legalandregulatoryobligationsandguidelinesid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/OperationalSecurityProceduresandGuidelines/{operationalsecurityproceduresandguidelinesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Operational Security Procedures and Guidelines

  **Documentation**

  This BIAN API path allows users to retrieve details about a specific aspect of Operational Security Procedures and Guidelines from the Management Manual. By providing the management manual ID and the ID of the specific operational security procedures and guidelines, users can access information and guidance related to operational security mentioned in the manual. This API helps users understand and interpret the procedures and guidelines outlined in the manual for effective implementation and reference.

  **Limitations**

  GET: Based on REST best practices, the naming convention for the path should accurately represent the resources it is dealing with. It could be named something like:

`/management-manuals/{managementmanualid}/security-procedures-and-guidelines/{operationalsecurityproceduresandguidelinesid}`

or

`/management-manuals/{managementmanualid}/operational-security/{operationalsecurityproceduresandguidelinesid}`

This name is more descriptive and follows the hierarchy of the resources being accessed

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/OperationalandProductionProceduresandGuidelines/{operationalandproductionproceduresandguidelinesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Operational and Production Procedures and Guidelines

  **Documentation**

  This API path allows you to retrieve details about Operational and Production Procedures and Guidelines from the Management Manual. It helps in accessing specific information related to operational procedures and guidelines outlined in the manual. By making a GET request to this API, you can retrieve specific details related to a particular Operational and Production Procedures and Guidelines identifier within the Management Manual.

  **Limitations**

  GET: A suitable name for the path could be something like:

'/management-manuals/{managementmanualid}/operations/{operationsid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ManagementManual/{managementmanualid}/StaffManagementProceduresandGuidelines/{staffmanagementproceduresandguidelinesid}/Retrieve</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate ReBQ Retrieve details about any aspect of Staff Management Procedures and Guidelines

  **Documentation**

  This BIAN API path allows you to retrieve details about specific aspects of Staff Management Procedures and Guidelines from the Management Manual. By providing the management manual ID and the ID of the staff management procedures and guidelines, you can access information about the required procedures and guidelines related to staff management as outlined in the manual. This API is designed to support in referencing and interpreting the information as needed.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be formatted in a clear and descriptive manner. It could be something like:

'/management-manuals/{managementManualId}/staff-management-procedures-and-guidelines/{staffManagementProceduresAndGuidelinesId}/retrieve'

Ensuring to use lowercase letters, separating words with hyphens, and utilizing descriptive names that convey the purpose of the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/CompanyMissionandPolicies/{companymissionandpoliciesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Company Mission and Policies

  **Documentation**

  This API path allows you to update details related to a company's mission and policies within the Management Manual. By making a PUT request to this path with the appropriate IDs, you can modify and update the specific content related to Company Mission and Policies in the Management Manual of required procedures and guidelines. This helps in ensuring that the management manual is up-to-date with the latest company information and can be easily accessed and interpreted by users as needed.

  **Limitations**

  PUT: A suitable name for the path could be:

```
PUT /management-manuals/{managementManualId}/company-mission-and-policies/{companyMissionAndPoliciesId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/EmploymentRelatedProceduresandGuidelines/{employmentrelatedproceduresandguidelinesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Employment Related Procedures and Guidelines

  **Documentation**

  This BIAN API path allows users to update details within the Management Manual that specifically relate to Employment Related Procedures and Guidelines. By using a PUT request method, users can modify and maintain the information regarding these procedures and guidelines as outlined in the management manual. This API is designed to help ensure that the manual remains up-to-date and provides accurate guidance on employment-related matters.

  **Limitations**

  PUT: Following REST best practices, the naming of the path should be as follows:

/management-manuals/{managementmanualid}/employment-related-procedures-and-guidelines/{employmentrelatedproceduresandguidelinesid}/update

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/LegalandRegulatoryObligationsandGuidelines/{legalandregulatoryobligationsandguidelinesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Legal and Regulatory Obligations and Guidelines

  **Documentation**

  This BIAN API path allows you to update details pertaining to legal and regulatory obligations and guidelines in the management manual. It is used to modify existing information related to legal and regulatory requirements within the manual, ensuring that all necessary procedures and guidelines are up-to-date and in compliance with relevant laws and regulations.

  **Limitations**

  PUT: The name of the path should be:

'/management-manuals/{managementManualId}/legal-and-regulatory-obligations-and-guidelines/{legalAndRegulatoryObligationsAndGuidelinesId}'

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and should be descriptive and indicate the resource being updated.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/OperationalSecurityProceduresandGuidelines/{operationalsecurityproceduresandguidelinesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Operational Security Procedures and Guidelines

  **Documentation**

  This API path allows you to update details related to Operational Security Procedures and Guidelines within the Management Manual. By sending a PUT request to this endpoint with the corresponding IDs for the management manual and the specific security procedures and guidelines, you can make changes or updates to the information. This helps in ensuring that the manual is current and reflects the necessary procedures for operational security within the organization.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

PUT /management-manuals/{managementManualId}/operational-security-procedures/{operationalSecurityProceduresId} 

This name is more descriptive and follows the convention of using lowercase letters and hyphens to separate words in the URI path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/OperationalandProductionProceduresandGuidelines/{operationalandproductionproceduresandguidelinesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Operational and Production Procedures and Guidelines

  **Documentation**

  This API path allows users to update the details related to Operational and Production Procedures and Guidelines within a specific section of the Management Manual identified by "managementmanualid" and "operationalandproductionproceduresandguidelinesid". By sending a PUT request to this API path, users can make changes to the existing resource, such as adding new procedures, updating guidelines, or making any necessary adjustments to the operational and production information included in the manual. This helps in keeping the Management Manual up to date and ensuring that the procedures and guidelines are accurate and easily accessible for reference and interpretation.

  **Limitations**

  PUT: Based on REST best practices, the name for the path you mentioned could be:

/managementManuals/{managementManualId}/proceduresAndGuidelines/{proceduresAndGuidelinesId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ManagementManual/{managementmanualid}/StaffManagementProceduresandGuidelines/{staffmanagementproceduresandguidelinesid}/Update</span></summary>

  **Description**

  Develop, maintain and promulgate the management manual of required procedures and guidelines. Provide support in its reference and interpretation as appropriate UpBQ Update details relating to Staff Management Procedures and Guidelines

  **Documentation**

  This API path allows users to update details related to staff management procedures and guidelines within a specific section of the Management Manual. Users can make changes to existing resources by submitting a PUT request to this path using the appropriate identifiers for the Management Manual and the specific staff management procedures and guidelines being updated. This helps ensure that the manual remains up-to-date and relevant for staff reference and interpretation.

  **Limitations**

  PUT: The following name adheres to REST best practices for the given path:

'/management-manuals/{managementManualId}/staff-management-procedures-and-guidelines/{staffManagementProceduresAndGuidelinesId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
