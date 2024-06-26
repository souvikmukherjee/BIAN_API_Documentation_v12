<h1 style='color:red;'>CustomerAgreement</h1>

**BIAN Documentation:** [CustomerAgreement v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerAgreement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerAgreement/Evaluate</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products EvCR Establish a customer master agreement (evaluate applicable rules)

  **Documentation**

  This API path allows you to create a new resource for evaluating and establishing a master customer agreement or legal contract. It is specifically designed for complex corporate entities with multiple subsidiaries operating in different regions. The customer agreement can be linked to various Sales Product Agreements for all active products.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

'/customers/agreements/evaluate'

In RESTful API design, paths are typically in lowercase and in plural form to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerAgreement/{customeragreementid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products ReCR Retrieve details about a customer master agreement

  **Documentation**

  This API path allows you to retrieve details about a customer's master agreement or legal contract. It is specifically designed to provide information about the customer agreement for a particular customer identified by a unique customer agreement ID. The customer in question can be a complex corporate entity with various subsidiaries operating in different geographical areas. Additionally, the customer agreement may be linked to multiple Sales Product Agreements for all currently active products. This API is helpful for accessing and managing essential information related to customer contracts within a business context.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be '/customerAgreements/{customerAgreementId}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerAgreement/{customeragreementid}/LegalTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products EvBQ Establish the legal terms for a customer master agreement

  **Documentation**

  This API path allows you to create and establish legal terms for a master customer agreement or legal contract. It is designed to handle complex corporate customer entities with various subsidiaries operating in different geographical areas. The customer agreement can be linked to multiple Sales Product Agreements for all products that are currently active. By sending a POST request to this endpoint with the necessary information, you can set up and define the legal terms for a customer's master agreement.

  **Limitations**

  POST: If the path '/CustomerAgreement/{customeragreementid}/LegalTerms/Evaluate' followed all REST best practices, a suitable name for it could be:

`PUT /customer-agreements/{customeragreementid}/legal-terms/evaluation`

This naming convention follows the guidelines for RESTful APIs, which typically use lowercase letters and hyphens for better readability and consistency. It also uses the HTTP method `PUT` to indicate that the request is updating or creating a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerAgreement/{customeragreementid}/LegalTerms/{legaltermsid}/Update</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products UpBQ Update the legal terms for a customer master agreement

  **Documentation**

  This API path allows you to update the legal terms for a specific customer agreement within the system. A customer agreement can be a complex contract involving a corporate entity with multiple subsidiaries operating in different areas. The legal terms can be modified using this API, and the agreement may be linked to various sales product agreements related to the products in force. By using a PUT request, you can update the legal terms for a specific customer agreement identified by its unique ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

/customerAgreements/{customerAgreementId}/legalTerms/{legalTermsId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerAgreement/{customeragreementid}/LegalTerms/{legaltermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products ReBQ Retrieve details about the legal terms of an agreement

  **Documentation**

  This API path allows you to retrieve details about the legal terms of a customer agreement. It specifically focuses on the master customer agreement or legal contract that a customer has with a business entity. The agreement may involve complex corporate structures with multiple subsidiaries operating in different locations. By using this API, you can access information related to the legal terms within a specific customer agreement, allowing you to review and understand the contractual obligations and rights associated with it.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be something that clearly represents the resource being accessed and the action being performed. One suggestion could be: 

`GET /customer-agreements/{customeragreementid}/legal-terms/{legaltermsid}`

This path follows the convention of using lowercase letters and hyphens for better readability. Additionally, it uses plural nouns for the resource names and expresses the action of retrieving legal terms associated with a specific customer agreement.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerAgreement/{customeragreementid}/RegulatoryTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products EvBQ Establish the regulatory terms for a customer master agreement

  **Documentation**

  This API path allows you to create and evaluate regulatory terms for a customer master agreement within the Customer Agreement service domain. It is specifically used to set the terms and conditions that govern the legal contract between a company and its customers. The agreement can be intricate, especially if the customer is a large corporate entity with multiple subsidiaries operating in different regions. By utilizing this API, you can establish regulatory terms that align with the customer's needs and requirements, ensuring compliance and clarity in the contractual relationship.

  **Limitations**

  POST: Based on REST best practices, the name of the path should focus on resources and actions rather than operations or verbs. Additionally, the path should be clear and concise. 

A possible name for the path '/CustomerAgreement/{customeragreementid}/RegulatoryTerms/Evaluate' following REST best practices could be:

'/CustomerAgreements/{customeragreementid}/RegulatoryTermsEvaluation' 

This name is descriptive, accurately represents the resources and action involved, and does not contain any unnecessary words or

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerAgreement/{customeragreementid}/RegulatoryTerms/{regulatorytermsid}/Update</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products UpBQ Update the regulatory terms for a customer master agreement

  **Documentation**

  This BIAN API path allows you to update the regulatory terms for a specific customer master agreement. The customer agreement can be for a complex corporate entity with multiple subsidiaries operating in different geographical areas. The agreement is linked to various Sales Product Agreements for all active products. By using this API endpoint with a PUT method, you can make changes to the regulatory terms associated with a particular customer agreement identified by the customeragreementid and regulatorytermsid.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/customer-agreements/{customeragreementid}/regulatory-terms/{regulatorytermsid}/update'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerAgreement/{customeragreementid}/RegulatoryTerms/{regulatorytermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products ReBQ Retrieve details about the regulatory terms of an agreement

  **Documentation**

  This API path allows you to retrieve details about the regulatory terms of a specific customer agreement. You can access this information by providing the customer agreement ID and the regulatory terms ID as parameters in the request. The customer agreement being referred to here is a legal contract that may involve complex corporate entities with multiple subsidiaries operating in various geographical locations. Additionally, the customer agreement is associated with sales product agreements for all active products. By using this API, you can retrieve specific information related to the regulatory terms outlined in a customer agreement.

  **Limitations**

  GET: The name of the path should be:

'/customer-agreements/{customeragreementid}/regulatory-terms/{regulatorytermsid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerAgreement/{customeragreementid}/PolicyTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products EvBQ Establish the corporate policy terms for a customer master agreement

  **Documentation**

  This API path allows you to create and establish corporate policy terms for a master customer agreement by evaluating policy terms associated with a specific customer agreement ID. The customer agreement may involve a complex corporate entity with various subsidiaries and is linked to multiple Sales Product Agreements for different products. This endpoint helps in defining the specific terms and conditions that govern the relationship between the customer and the service provider within the master agreement.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/customer-agreements/{customeragreementid}/policy-terms/evaluate'

In this naming convention:
- Path segments are in lowercase.
- Use hyphens to separate words in segment names instead of camel case.
- Use plural forms for collections (e.g., 'customer-agreements' instead of 'customer-agreement').
- Path segment names are descriptive, representing the resource they point to.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerAgreement/{customeragreementid}/PolicyTerms/{policytermsid}/Update</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products UpBQ Update the corporate policy terms for a customer master agreement

  **Documentation**

  This API path allows you to update the corporate policy terms for a specific customer master agreement. This agreement is a legal contract that can be quite complex, especially for corporate entities with multiple subsidiaries operating in different geographical areas. The customer agreement can be linked to various Sales Product Agreements for all products that are currently in effect. By using this API, you can modify the policy terms associated with a particular customer agreement identified by its ID.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/customers/{customeragreementid}/policy-terms/{policytermsid}/update'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerAgreement/{customeragreementid}/PolicyTerms/{policytermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the master customer agreement/legal contract. Note that a customer can be a complex corporate entity with many subsidiaries operating in different geopolitical areas. The customer agreement is linked to as many Sales Product Agreements as needed for all in-force products ReBQ Retrieve details about the corporate policy terms of an agreement

  **Documentation**

  This API path, /CustomerAgreement/{customeragreementid}/PolicyTerms/{policytermsid}/Retrieve, allows you to retrieve information about the corporate policy terms of a customer agreement. It is part of a service domain that manages the master customer agreement or legal contract. Customers can be complex corporate entities with multiple subsidiaries in different geographic areas. The customer agreement is connected to various Sales Product Agreements for all active products. By using this API, you can access details about the specific policy terms of a customer agreement identified by {customeragreementid} and {policytermsid}.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured in a resource-oriented manner. One possible naming convention could be as follows: 

'/customer-agreements/{customeragreementid}/policy-terms/{policytermsid}/retrieve'

This naming convention uses lowercase letters, hyphens for readability, and represents a hierarchical relationship between resources (customer agreements and policy terms).

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
