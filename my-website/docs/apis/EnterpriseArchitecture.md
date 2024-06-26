<h1 style='color:red;'>EnterpriseArchitecture</h1>

**BIAN Documentation:** [EnterpriseArchitecture v12](https://app.swaggerhub.com/apis/BIAN-3/EnterpriseArchitecture/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaCR Capture Business Architecture Specification activity or event related information

  **Documentation**

  This API path allows you to update an existing enterprise architecture by defining and maintaining detailed business architectural definitions or blueprints. It helps organize and direct business activities or events related to capturing business architecture specifications. In simpler terms, you can use this API to make changes to the structure and design of your business architecture to better understand and manage your business operations.

  **Limitations**

  PUT: Based on REST best practices, the path should be named using nouns that represent resources, so a suitable name for the path '/EnterpriseArchitecture/{enterprisearchitectureid}/Capture' could be:

GET /EnterpriseArchitecture/{enterprisearchitectureid}/Capture

This name follows the convention of using the HTTP method such as GET to represent the action and the resource being operated on, which in this case is capturing enterprise architecture information related to a specific ID.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Control</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CoCR Control the processing of Business Architecture Specification

  **Documentation**

  This API path allows you to update and manage the comprehensive business architectural definitions and blueprints for a specific enterprise architecture ID. It helps in organizing and directing the business processes by controlling the processing of the Business Architecture Specification. Essentially, this API enables users to make changes and maintain the detailed plans that outline how the business operates and its structure.

  **Limitations**

  PUT: The name of the path should be "/enterprises/{enterpriseId}/controls" in order to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Exchange</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business EcCR Accept, verify, etc. aspects of Business Architecture Specification processing

  **Documentation**

  This API path allows users to update an existing business architectural definition or blueprint within the Enterprise Architecture system. Users can provide detailed information and specifications to help organize and direct the business processes effectively. This update can include accepting, verifying, and processing various aspects of the business architecture specification to ensure alignment with the organization's goals and strategies.

  **Limitations**

  PUT: A possible name for this path, following REST best practices, could be:

`/enterprises/{enterpriseId}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>POST: /EnterpriseArchitecture/Initiate</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business InCR Instantiate a new Business Architecture Specification

  **Documentation**

  This API path allows users to create a new resource for defining and maintaining business architectural definitions or blueprints. It helps organize and direct the business by instantiating a new Business Architecture Specification. In simple terms, it helps in setting up a structured plan or blueprint for how a business should operate and evolve.

  **Limitations**

  POST: If the path '/EnterpriseArchitecture/Initiate' is following REST best practices, a more appropriate name for it could be '/enterprise-architectures/initiate'. 

In RESTful naming conventions, path segments should be in all lowercase letters with words separated by hyphens. This makes the endpoint more readable and consistent with RESTful design principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReCR Retrieve details about any aspect of Enterprise Architecture Specification

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of Enterprise Architecture using a unique identifier (enterprisearchitectureid). It provides access to comprehensive business architectural definitions and blueprints that are used to organize and direct the business activities. By making a GET request to this API path, you can gather information related to Enterprise Architecture specifications.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/enterprises/{enterpriseId}/architecture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqCR Request manual intervention or a decision with respect to Enterprise Architecture Specification

  **Documentation**

  This BIAN API path allows you to update an existing Enterprise Architecture resource identified by a specific enterprise architecture ID. It is used to define and maintain detailed business architectural definitions or blueprints that help organize and guide a business. The API can be used to request manual intervention or a decision related to the Enterprise Architecture Specification, ensuring that the business architectural framework is up to date and aligned with the organization's goals and strategies.

  **Limitations**

  PUT: A suitable name for this path following REST best practices would be:

'/enterprise-architecture/{enterpriseArchitectureId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpCR Update details relating to Enterprise Architecture Specification

  **Documentation**

  This BIAN API path allows you to update specific details related to a particular Enterprise Architecture within an organization. It is used to modify and maintain comprehensive definitions or blueprints that help organize and direct the business. By using the PUT method, you can make changes to the existing enterprise architecture specifications stored in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/EnterpriseArchitecture/{enterprisearchitectureid}/Update' should be:

PUT /enterprise-architectures/{enterprisearchitectureid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/ApplicationArchitecture/{applicationarchitectureid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaBQ Capture Application Architecture activity or event related information

  **Documentation**

  This BIAN API path is used to update existing information related to enterprise architecture and application architecture within a business. It allows users to define and maintain detailed business architectural definitions and blueprints to help organize and direct activities or events related to capturing application architecture information. By using this API path, users can update and enhance the documentation and planning processes for their business's architectural aspects.

  **Limitations**

  PUT: A possible REST-compliant name for the path could be: `/enterprises/{enterpriseId}/applications/{applicationId}/capture`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/BusinessArchitecture/{businessarchitectureid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaBQ Capture Business Architecture activity or event related information

  **Documentation**

  This API path is used to update existing business architectural definitions or blueprints within an enterprise architecture framework. It allows users to capture information related to business architecture activities or events. By making a PUT request to this path, users can define and maintain detailed business architectural information to help organize and guide the overall business structure.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/enterprises/{enterpriseId}/businesses/{businessId}/capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/InformationArchitecture/{informationarchitectureid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaBQ Capture Information Architecture activity or event related information

  **Documentation**

  This API path allows you to update the information related to capturing information architecture within a specific enterprise architecture. It is used to define and maintain detailed business architectural definitions and blueprints that help organize and direct business activities or events related to information architecture. By making a PUT request to this path with the appropriate IDs, you can update the existing information architecture data associated with a particular enterprise architecture.

  **Limitations**

  PUT: The name of the path could be:

`/enterprises/{enterpriseId}/architectures/{architectureId}/capture`

In this path:
- `{enterpriseId}` would be the ID of the specific enterprise
- `{architectureId}` would be the ID of the specific architecture component

This path is simplified and follows REST best practices by using plural nouns for resources and keeping the URL hierarchies logical and descriptive.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Organization/{organizationid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaBQ Capture Organization activity or event related information

  **Documentation**

  This API path allows you to update existing comprehensive business architectural definitions or blueprints related to organizing and directing business activity or event information within an enterprise architecture framework. It enables you to define and maintain detailed organizational structures and plans that help manage and guide the business processes effectively.

  **Limitations**

  PUT: A suitable name for this path, following REST best practices, could be:

`/enterprise-architecture/{enterprise-architecture-id}/organization/{organization-id}/capture`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/TechnologyInfrastructure/{technologyinfrastructureid}/Capture</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business CaBQ Capture Technology Infrastructure activity or event related information

  **Documentation**

  This API path is used to update information related to technology infrastructure within a specific enterprise architecture. It allows users to define and maintain detailed business architectural definitions or blueprints that can help in organizing and directing business activities related to capturing technology infrastructure information. By making a PUT request to this API path with the appropriate IDs for enterprise architecture and technology infrastructure, users can update the relevant information to ensure that it accurately reflects the current state of the business's technology infrastructure activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/enterprises/{enterpriseId}/technologies/{technologyId}/capture
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/ApplicationArchitecture/{applicationarchitectureid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReBQ Retrieve details about any aspect of Application Architecture

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of Application Architecture within a specific Enterprise Architecture blueprint. It is used to access and view information related to the design and structure of applications within a larger business architectural framework. This helps in organizing and directing the overall business functions effectively.

  **Limitations**

  GET: A suitable name for the path based on REST best practices could be:

'/enterprises/{enterpriseid}/applications/{applicationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/BusinessArchitecture/{businessarchitectureid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReBQ Retrieve details about any aspect of Business Architecture

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of Business Architecture within an Enterprise Architecture. It helps you define and maintain comprehensive business architectural definitions or blueprints that can help organize and direct the business effectively. By accessing this endpoint with the appropriate IDs, you can gather specific information related to the business architecture within the larger context of enterprise architecture.

  **Limitations**

  GET: Based on REST best practices, the URL path should be named using nouns to represent resources and should not include actions or verbs. Therefore, a more appropriate name for the path could be:

/enterprisearchitectures/{enterprisearchitectureid}/businessarchitectures/{businessarchitectureid}

This path follows the convention of using lowercase letters and separating words with hyphens to make it more readable and consistent with RESTful API design principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/InformationArchitecture/{informationarchitectureid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReBQ Retrieve details about any aspect of Information Architecture

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of Information Architecture within an Enterprise Architecture. By providing the IDs for both the Enterprise Architecture and Information Architecture, you can access comprehensive business architectural definitions or blueprints that help organize and direct the business. This API is useful for accessing detailed information related to the structure and organization of information within a business framework.

  **Limitations**

  GET: Following REST best practices, the name of the path should be: `/enterprise-architecture/{enterpriseArchitectureId}/information-architecture/{informationArchitectureId}`

This path indicates a hierarchical relationship between Enterprise Architecture and Information Architecture, with the ability to retrieve a specific resource related to the identified IDs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/Organization/{organizationid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReBQ Retrieve details about any aspect of Organization

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of an organization within the context of Enterprise Architecture. By providing the enterprise architecture ID and the organization ID, you can access comprehensive business architectural definitions or blueprints that help in organizing and directing the business. This API helps users access detailed information related to the organization's architecture and how it aligns with the overall business goals.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be in lowercase letters and be descriptive of the resource being retrieved. Here are a few suggestions for the path name:

1. '/enterprise-architecture/{enterprisearchitectureid}/organization/{organizationid}/retrieve'
2. '/enterprise-architectures/{enterprisearchitectureid}/organizations/{organizationid}/retrieval'
3. '/ea/{enterprisearchitectureid}/org/{organizationid}/get'

</details>

<details open>
  <summary><span style='color:red;'>GET: /EnterpriseArchitecture/{enterprisearchitectureid}/TechnologyInfrastructure/{technologyinfrastructureid}/Retrieve</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business ReBQ Retrieve details about any aspect of Technology Infrastructure

  **Documentation**

  This BIAN API path allows users to retrieve details about a specific aspect of the Technology Infrastructure within a defined Enterprise Architecture. Users can provide the Enterprise Architecture ID and the Technology Infrastructure ID to access information about the technology components and systems that make up the overall architecture. This API helps in maintaining a comprehensive overview of the business architectural blueprints and assists in organizing and directing the business's technology infrastructure effectively.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/enterprises/{enterpriseId}/architectures/{architectureId}/infrastructures/{infrastructureId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/ApplicationArchitecture/{applicationarchitectureid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqBQ Request manual intervention or a decision with respect to Application Architecture

  **Documentation**

  This API path allows you to update an existing resource related to Enterprise Architecture and Application Architecture within a business context. Specifically, it is used to define and maintain detailed business architectural definitions or blueprints that help organize and guide the business processes. Additionally, it facilitates requesting manual intervention or decision-making related to the Application Architecture aspect of the enterprise.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/enterprises/{enterpriseId}/applications/{applicationId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/BusinessArchitecture/{businessarchitectureid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqBQ Request manual intervention or a decision with respect to Business Architecture

  **Documentation**

  This API path allows you to update an existing resource related to Business Architecture within the context of Enterprise Architecture. It helps in defining and maintaining detailed business architectural definitions or blueprints that aid in organizing and directing the business. The specific purpose of this endpoint is to request manual intervention or decision-making with regards to Business Architecture within the Enterprise Architecture framework.

  **Limitations**

  PUT: A good RESTful naming convention for the path you described could be:

/enterprises/{enterpriseId}/businesses/{businessId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/InformationArchitecture/{informationarchitectureid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqBQ Request manual intervention or a decision with respect to Information Architecture

  **Documentation**

  This API endpoint allows you to update an existing resource related to Enterprise Architecture and Information Architecture. Specifically, it helps define and maintain detailed business architectural definitions or blueprints that assist in organizing and directing business processes. Additionally, it provides a way to request manual intervention or decision-making regarding the Information Architecture aspect of the enterprise.

  **Limitations**

  PUT: The name of the path could be something like:

/enterprises/{enterpriseId}/information-architecture/{informationArchitectureId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Organization/{organizationid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqBQ Request manual intervention or a decision with respect to Organization

  **Documentation**

  This BIAN API path allows you to update an existing resource related to enterprise architecture within a specific organization. The purpose is to define and maintain detailed business architectural definitions or blueprints that help in organizing and guiding the business activities. The API also enables requesting manual intervention or decision-making regarding the organization's structure or processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/enterprises/{enterpriseId}/organizations/{organizationId}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/TechnologyInfrastructure/{technologyinfrastructureid}/Request</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business RqBQ Request manual intervention or a decision with respect to Technology Infrastructure

  **Documentation**

  This API path allows you to update an existing resource related to Enterprise Architecture and Technology Infrastructure. Specifically, it is used to define and maintain detailed business architectural definitions or blueprints that help in organizing and directing the business. Additionally, it allows for requesting manual intervention or making decisions related to the technology infrastructure of an enterprise.

  **Limitations**

  PUT: The name of the path should be as follows based on REST best practices: 

/enterprise-architectures/{enterprisearchitectureid}/technology-infrastructures/{technologyinfrastructureid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/ApplicationArchitecture/{applicationarchitectureid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpBQ Update details relating to Application Architecture

  **Documentation**

  This API path allows you to update details related to application architecture within a specific enterprise architecture. By making a PUT request to this path with the appropriate IDs for enterprise architecture and application architecture, you can modify and maintain comprehensive business architectural definitions and blueprints that help organize and direct the business. This update enables you to keep the information regarding application architecture current and aligned with the overall enterprise architecture framework.

  **Limitations**

  PUT: In accordance with REST best practices, a suitable name for the path you mentioned could be:

`PUT /enterprises/{enterpriseId}/applications/{applicationId}`

This naming convention follows the principle of using nouns to represent resources and using the HTTP verbs to indicate the actions performed on these resources. The path structure also provides a clear hierarchy, making it easier to understand the relationship between the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/BusinessArchitecture/{businessarchitectureid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpBQ Update details relating to Business Architecture

  **Documentation**

  This BIAN API path allows users to update details related to business architecture within a specific enterprise architecture. It is used to modify and maintain comprehensive definitions and blueprints that help organize and guide the business processes within an organization. By using a PUT request, users can update specific aspects of the business architecture identified by the enterprise architecture ID and business architecture ID specified in the path.

  **Limitations**

  PUT: The name of the path should ideally be a noun or noun phrase that represents the resource being updated. A suitable name for this path following REST best practices could be:

PUT /Enterprises/{enterpriseId}/Businesses/{businessId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/InformationArchitecture/{informationarchitectureid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpBQ Update details relating to Information Architecture

  **Documentation**

  This API path allows you to update details related to Information Architecture within a specific Enterprise Architecture. By using a PUT request, you can modify and maintain the comprehensive business architectural definitions or blueprints associated with the Information Architecture in order to better organize and direct the business activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

PUT /enterprises/{enterpriseId}/architectures/information/{informationId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/Organization/{organizationid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpBQ Update details relating to Organization

  **Documentation**

  This API path allows you to update details related to an organization within a specific enterprise architecture. By using a PUT request, you can modify and maintain the comprehensive business architectural definitions or blueprints that help in organizing and directing the business within that particular enterprise architecture.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like this:

PUT /enterprise-architecture/{enterprise-architecture-id}/organization/{organization-id} 

Ensure that the path follows a consistent naming convention, uses lower case letters, separates words with hyphens, and uses plural nouns for collections where applicable. Additionally, it's better to use HTTP methods like PUT to indicate updating a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /EnterpriseArchitecture/{enterprisearchitectureid}/TechnologyInfrastructure/{technologyinfrastructureid}/Update</span></summary>

  **Description**

  Define and maintain comprehensive business architectural definitions/blueprints to help organize/direct the business UpBQ Update details relating to Technology Infrastructure

  **Documentation**

  This BIAN API path updates the details related to the technology infrastructure within a specific enterprise architecture. It allows users to modify and maintain comprehensive business architectural definitions or blueprints that help organize and direct the business effectively. By making a PUT request to this path with the appropriate IDs, users can update specific information about the technology infrastructure in the enterprise architecture.

  **Limitations**

  PUT: The name of the path should be:

PUT /enterprises/{enterpriseId}/technologies/{technologyId}

In RESTful conventions, the resource identifier should typically be singular and represent a specific instance of the resource. It is also advisable to avoid unnecessary nesting in resource URIs to keep them simple and easy to understand.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
