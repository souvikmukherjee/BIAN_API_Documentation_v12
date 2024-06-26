<h1 style='color:red;'>CustomerOffer</h1>

**BIAN Documentation:** [CustomerOffer v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerOffer/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerOffer/Initiate</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). InCR Initiate the offer procedure

  **Documentation**

  This API path allows users to initiate the processing of a product offer for a new or existing customer. The service manages various actions like checking documents, assigning collateral, evaluating credit, making underwriting decisions, verifying eligibility, and ensuring compliance with regulations and procedures. It may also involve using internal and external specialist services, such as legal advice. By sending a POST request to this path, users can start the process of creating an offer tailored to the specific product or service being considered for the customer.

  **Limitations**

  POST: The name of the path '/CustomerOffer/Initiate' can be improved to better follow REST best practices by using nouns to represent resources rather than verbs. 

A more RESTful naming convention for this path could be '/customer-offers', which would represent a collection of customer offers. The initiation action could then be represented by a POST request to this resource, creating a new customer offer.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpCR Update details of an offer procedure

  **Documentation**

  This API path allows you to update the details of a customer offer procedure. It is used in the processing of a product offer for a new or existing customer. The procedure involves various actions like checking documents, allocating collateral, assessing credit, making underwriting decisions, conducting regulatory and procedural checks, verifying eligibility, and utilizing internal and external specialist services. By using this API, you can modify and update the specifics of the offer process for a particular customer offer identified by the customerofferid.

  **Limitations**

  PUT: The name of the path '/CustomerOffer/{customerofferid}/Update' should follow REST best practices by using the PUT HTTP method to update a specific resource. Therefore, a suitable name for the path could be '/CustomerOffer/{customerofferid}' since the update operation can be achieved by sending a PUT request to this endpoint with the customer offer ID to be updated.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Control</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). CoCR Control the processing of an offer (e.g. terminate)

  **Documentation**

  This API path allows you to update the processing of a product offer for a customer. It is used for managing the various steps involved in creating an offer for a product or service, which can include tasks like checking documents, assessing credit, making underwriting decisions, and ensuring compliance with regulations and procedures. You can control the processing of the offer, for example, by terminating it if needed.

  **Limitations**

  PUT: Following REST best practices, the name of the path '/CustomerOffer/{customerofferid}/Control' could be revised to '/customer-offers/{customerofferid}/controls'. 

Here are the reasons for the changes:
- Use lowercase letters and hyphens for better readability and consistency
- Use plural nouns for collections (customer-offers) to represent a resource collection
- Retain the specific identifier within curly braces ({customerofferid}) to represent a specific resource instance

This naming convention adher

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcCR Accept, reject, verify, etc an offer procedure

  **Documentation**

  This API path, /CustomerOffer/{customerofferid}/Exchange, allows you to update an existing product offer for a new or established customer. It controls the process of handling product offers, which involves tasks like checking documents, assigning collateral, assessing credit, making underwriting decisions, performing regulatory and procedural checks, verifying eligibility, and utilizing specialized internal or external services like evaluations and legal advice. It enables actions such as accepting, rejecting, or verifying an offer in a structured manner.

  **Limitations**

  PUT: The name of the path should be:

'/customer-offer/{customerOfferId}/exchange'

According to REST best practices, the path should use lowercase letters, separate words with hyphens, and use singular nouns. Additionally, the path should represent a resource (in this case, customer offer) with a specific identifier (customer offer ID) and an action (exchange).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ExCR Execute an automated task against an offer (e.g. submit data)

  **Documentation**

  This API path allows you to execute an automated task against a product offer for a customer. It involves processing various actions related to the offer, such as checking documents, allocating collateral, assessing credit, making underwriting decisions, verifying eligibility, and utilizing specialized services. For example, you can submit data or perform other tasks linked to the product or service being considered for the customer.

  **Limitations**

  PUT: Based on REST best practices, the path should be named in a clear and descriptive manner. A suggestion for the path '/CustomerOffer/{customerofferid}/Execute' that follows REST best practices could be:

'/customer-offer/{customerofferid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Request</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). RqCR Request manual intervention in an offer (e.g. request specialist support)

  **Documentation**

  This API path allows you to update or modify an existing product offer for a customer. It is used to manage the processing of an offer for a new or existing customer. This process involves various actions like checking documents, assessing credit, making underwriting decisions, and ensuring compliance with regulations and procedures. Additionally, it allows for requesting manual intervention in the offer, such as seeking specialist support when needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-offers/{customer_offer_id}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReCR Retrieve details about a customer offer

  **Documentation**

  This BIAN API path allows you to retrieve details about a customer offer based on the specific ID of the offer (customerofferid). It is used to access information related to the processing of a product offer for both new and existing customers. This information includes various actions involved in the offer process such as document verification, credit assessments, eligibility checks, and other related checks and decisions. The API provides a way to retrieve specific details about a customer offer for further processing or analysis.

  **Limitations**

  GET: The name of the path could be '/customer-offers/{customerofferid}'. This naming convention follows REST best practices by using lowercase letters, using hyphens for readability, and using plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/FacilityApplication/{facilityapplicationid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update product options and pricing terms

  **Documentation**

  This API path allows you to update an existing product offer for a customer. It is specifically designed to handle various actions related to the processing of the offer, such as checking documents, allocating collateral, assessing credit, making underwriting decisions, ensuring regulatory compliance, confirming eligibility, and utilizing specialized services. The update may involve modifying product options and pricing terms for the offer.

In simple terms, this API endpoint helps manage the details of product offers for both new and existing customers, including adjusting product options and pricing terms as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
```
/CustomerOffers/{customerofferId}/FacilityApplications/{facilityapplicationId}
```

This path is clearer, more descriptive, and uses plural nouns for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/FacilityApplication/{facilityapplicationid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcBQ Accept, reject etc product options and pricing terms

  **Documentation**

  This API path allows you to update an existing resource related to processing a product offer for a customer. It involves specific actions like document checks, credit assessments, and underwriting decisions tailored to the product or service being considered. You can accept, reject, or modify product options and pricing terms associated with the customer's offer.

  **Limitations**

  PUT: The name of the path should be:

`/customer-offers/{customerofferid}/facility-applications/{facilityapplicationid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/FacilityApplication/{facilityapplicationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about product options and pricing terms

  **Documentation**

  This API path allows you to retrieve information about a product offer for a customer. It is designed to handle the processes involved in creating a product offer, whether for a new customer or an existing one. This includes tasks like checking documents, assigning collateral, assessing credit, making underwriting decisions, ensuring compliance with regulations and procedures, verifying eligibility, and using specialized services like evaluations and legal advice. The API helps you retrieve details about the product options available and the pricing terms associated with them.

  **Limitations**

  GET: A suitable name for the path '/CustomerOffer/{customerofferid}/FacilityApplication/{facilityapplicationid}/Retrieve' following REST best practices could be:

GET /customer-offers/{customerofferid}/facility-applications/{facilityapplicationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Disclosures/{disclosuresid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update disclosure submission

  **Documentation**

  This API path allows you to update a disclosure submission related to a customer offer. The disclosure submission process is part of the overall processing of a product offer for a customer, which involves various checks and assessments to ensure compliance and eligibility. By using this API path with the PUT method, you can make changes or updates to the disclosure submission associated with a specific customer offer.

  **Limitations**

  PUT: The name of the path should be:

```plaintext
PUT /customeroffers/{customerofferid}/disclosures/{disclosuresid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Disclosures/{disclosuresid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcBQ Accept, reject etc. disclosures

  **Documentation**

  This API path is used to update and manage the disclosures associated with a customer offer. It orchestrates the processing of a product offer for a customer, whether they are new or existing. The process includes various actions such as document checks, credit assessments, underwriting decisions, eligibility checks, and more. The API allows for actions such as accepting or rejecting disclosures related to the offer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-offers/{customerofferid}/disclosures/{disclosuresid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Disclosures/{disclosuresid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about disclosure submissions

  **Documentation**

  This API path allows you to retrieve details about disclosure submissions related to a specific customer offer. It is part of a service that manages the process of creating a product offer for customers, including various checks and assessments such as document verification, credit checks, and regulatory compliance. By using this API, you can access information about disclosures submitted as part of the offer process.

  **Limitations**

  GET: Following REST best practices, a more appropriate name for the path '/CustomerOffer/{customerofferid}/Disclosures/{disclosuresid}/Retrieve' could be:

```
GET /customer-offers/{customerofferid}/disclosures/{disclosuresid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Credit/{creditid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update credit submission details

  **Documentation**

  This BIAN API path allows you to update credit submission details related to a specific customer offer. It is part of the process of processing a product offer for a customer, which involves various checks and assessments such as document verification, credit evaluation, underwriting decisions, regulatory compliance, and eligibility checks. By making a PUT request to this endpoint with the appropriate customer offer ID and credit ID, you can update the specific credit submission details associated with that offer.

  **Limitations**

  PUT: The name of the path should be '/customer-offers/{customerofferid}/credits/{creditid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Credit/{creditid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the credit submission

  **Documentation**

  This API path allows you to retrieve information about a credit submission within the context of processing a product offer for a new or existing customer. The process involves various actions such as checking documents, assessing credit, making underwriting decisions, and conducting eligibility checks. This API helps in orchestrating these steps and allows you to retrieve details specifically related to the credit part of the offer processing for a customer.

  **Limitations**

  GET: A suitable name for this REST endpoint following best practices could be: 

GET /customer-offers/{customerofferid}/credits/{creditid}

This name is descriptive, follows a consistent naming convention, uses lowercase letters with hyphens, and clearly indicates the resources being retrieved.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Underwriting/{underwritingid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update submitted materials for the underwriting decision

  **Documentation**

  This API path allows you to update submitted materials for the underwriting decision within the Customer Offer process. It is used to modify and provide additional information or documents that are crucial for the underwriting team to make decisions related to a product offer for a customer, whether new or established. This helps streamline the underwriting process by ensuring that all necessary information is accurate and up-to-date.

  **Limitations**

  PUT: Based on REST best practices, the path should be named as follows:
'/customer-offers/{customerofferid}/underwriting/{underwritingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Underwriting/{underwritingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the underwriting decision

  **Documentation**

  This API path allows you to retrieve information about the underwriting decision related to a specific customer offer. It is part of the Customer Offer service domain and provides details about the underwriting process involved in considering a product or service for a new or existing customer. The information may include details about document checks, credit assessments, regulatory checks, and other factors that contribute to the underwriting decision.

  **Limitations**

  GET: The name of the path should be `/customer-offers/{customerofferid}/underwriting/{underwritingid}` as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Compliance/{complianceid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details submitted for compliance checks

  **Documentation**

  This API path allows you to update details submitted for compliance checks within the context of processing a product offer for a customer. It is used for managing and ensuring that all necessary compliance requirements are met during the offer processing, such as document checks, credit assessments, and regulatory checks. By using this API endpoint, you can make changes to the information related to compliance checks for a specific customer offer instance.

  **Limitations**

  PUT: The recommended name for the path '/CustomerOffer/{customerofferid}/Compliance/{complianceid}/Update' following RESTful best practices would be:

PUT /customer-offers/{customerofferid}/compliance/{complianceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Compliance/{complianceid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details of the regulatory compliance assessment

  **Documentation**

  This API path retrieves details of the regulatory compliance assessment for a specific customer offer. It is part of a service that manages the process of creating product offers for new or existing customers. The compliance assessment involves checking if the offer meets all relevant regulatory requirements, such as document verification, credit assessment, and other necessary checks. By using this API, you can access information related to the regulatory compliance assessment for a particular customer offer.

  **Limitations**

  GET: A suitable name for the path '/CustomerOffer/{customerofferid}/Compliance/{complianceid}/Retrieve' following REST best practices could be:

GET '/customer-offers/{customerofferid}/compliances/{complianceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Audit/{auditid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details of submitted materials for audit checks

  **Documentation**

  This API path is used to update the details of submitted materials for audit checks related to a customer offer. It is part of a service domain that manages the processing of product offers for both new and existing customers. The actions involved in this process include verifying documents, assigning collateral, evaluating credit, making underwriting decisions, conducting regulatory and procedural checks, confirming eligibility, and utilizing internal and external specialist services. The purpose of this specific API is to allow for the updating of information associated with audit checks in the context of a customer offer.

  **Limitations**

  PUT: The name of the path should be '/customeroffers/{customerOfferId}/audits/{auditId}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Audit/{auditid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details of the compliance assessment

  **Documentation**

  This API path allows you to retrieve details of a compliance assessment related to a specific customer offer and audit. The service orchestrates the processing of a product offer for a customer, which involves various checks and assessments like document verification, credit evaluation, regulatory compliance, and more. By using this API, you can access information about the compliance assessment conducted as part of the customer offer process.

  **Limitations**

  GET: A possible name for the path '/CustomerOffer/{customerofferid}/Audit/{auditid}/Retrieve' according to REST best practices could be:

GET /customer-offers/{customerofferid}/audits/{auditid}

It is recommended to use lowercase letters and hyphens for better readability, and to use plural nouns to represent collections of resources. Additionally, it is important to use HTTP methods like GET, POST, PUT, DELETE to clearly indicate the actions being taken on the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Collateral/{collateralid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details of the collateral allocation

  **Documentation**

  This BIAN API path allows you to update the details of the collateral allocation for a specific customer offer. It is part of the process that handles product offers for both new and existing customers. Collateral allocation refers to the assets or security that a customer provides to secure the offer. By using this API, you can make changes to the information related to the collateral allocated for a particular customer offer.

  **Limitations**

  PUT: The name of the path should be in lowercase letters and use kebab-case to separate words. Following REST best practices, the name of the path could be:

'/customer-offer/{customerofferid}/collateral/{collateralid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Collateral/{collateralid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcBQ Accept, reject etc. the collateral allocation

  **Documentation**

  This API path allows you to update an existing collateral exchange for a specific customer offer. The service manages the processing of product offers for both new and existing customers. It involves various actions like document verification, credit assessment, underwriting decisions, regulatory checks, and more. The API specifically deals with collateral allocation within the offer process, allowing you to accept, reject, or modify the allocation for a particular customer offer and collateral combination.

  **Limitations**

  PUT: The name of the path should be:

```
/CustomerOffers/{customerOfferId}/Collaterals/{collateralId}/Exchanges
``` 

Make sure to follow REST naming conventions:
- Use plural nouns for resource names.
- Use CamelCase for compound words.
- Use descriptive and meaningful names for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Collateral/{collateralid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the collateral allocation

  **Documentation**

  This API path allows you to retrieve details about the collateral allocation associated with a specific customer offer. It provides information about the assets or property that may be used as collateral for the offer, such as document checks, eligibility assessments, and any other relevant data related to the collateral.

  **Limitations**

  GET: A suitable name for the path might be:

GET /customer-offers/{customerofferid}/collaterals/{collateralid} 

Following REST best practices, this path uses lowercase letters and dashes for readability, includes the action 'Retrieve' as part of the HTTP method instead of in the URL, and makes use of plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Booking/{bookingid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details of the offer asset and liability booking

  **Documentation**

  This API path allows you to update specific details related to the booking of an offer made to a customer. It is part of a service that manages the processing of product offers for both new and existing customers. The path enables you to make changes to the asset and liability booking information associated with a particular customer offer identified by the `customerofferid` and `bookingid`. The updates can involve various actions such as document checks, credit assessments, underwriting decisions, and other processes to ensure the offer is accurate and compliant with regulations.

  **Limitations**

  PUT: A possible name for the path '/CustomerOffer/{customerofferid}/Booking/{bookingid}/Update' that follows REST best practices could be:
- PATCH /customer-offers/{customerofferid}/bookings/{bookingid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Booking/{bookingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the booking

  **Documentation**

  This API path allows you to retrieve information about a booking associated with a customer offer. It is designed to provide details about the processing of a product offer for a customer, including various actions such as document verification, credit evaluation, and regulatory checks. By accessing this path, you can retrieve specific information related to the booking process within the context of a customer offer.

  **Limitations**

  GET: Based on REST best practices, the path should be named as: 

'/customer-offers/{customerofferid}/bookings/{bookingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/CorrespondenceandDocuments/{correspondenceanddocumentsid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details about the correspondence and documents accessed and created by the offer

  **Documentation**

  This API path allows you to update details about the correspondence and documents that are accessed and created during the processing of a product offer for a customer. This could involve actions like checking documents, assigning collateral, assessing credit, making underwriting decisions, and ensuring compliance with regulations and procedures. You can use this API to provide information about the correspondence and documents related to the offer in order to keep track of the progress and necessary documentation throughout the process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PUT /customer-offers/{customerofferid}/correspondence-documents/{correspondenceanddocumentsid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/CorrespondenceandDocuments/{correspondenceanddocumentsid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcBQ Accept, verify, etc. correspondence and documents

  **Documentation**

  This API path is used to update and manage the exchange of correspondence and documents related to a customer offer. It is a part of the overall process of processing a product offer for both new and existing customers. The path allows for actions such as accepting, verifying, and processing various documents and correspondence that are crucial in the assessment and decision-making process for the offer. It involves steps like document checks, credit assessments, regulatory compliance checks, and other evaluations necessary for determining the eligibility and suitability of the offer for the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customers/{customerid}/offers/{offerid}/correspondence-documents/{docid}/exchange' 

In the path naming convention above:
- 'customers' is a plural noun representing the collection of customers.
- 'offers' is a plural noun representing the collection of offers belonging to a specific customer.
- 'correspondence-documents' is a hyphenated term representing the collection of correspondence documents related to a

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/CorrespondenceandDocuments/{correspondenceanddocumentsid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about correspondence and documents from the customer offer procedure

  **Documentation**

  This API path allows you to retrieve details about correspondence and documents related to a specific customer offer. It is used in the processing of product offers for customers, whether they are new or existing. The information retrieved can include documents, checks, assessments, decisions, and other actions involved in the offer process. This API helps in managing and accessing the necessary correspondence and documents for handling customer offers effectively.

  **Limitations**

  GET: The name of the path should ideally be:

GET /customer-offers/{customerOfferId}/correspondence-and-documents/{correspondenceAndDocumentsId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Agreement/{agreementid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details of the customer agreement

  **Documentation**

  This API path allows you to update the details of a customer agreement within the Customer Offer service domain. It is used for managing product offers for both new and existing customers. The updates can involve various actions such as checking documents, assigning collateral, assessing credit, making underwriting decisions, conducting regulatory checks, verifying eligibility, and utilizing specialized internal or external services like evaluations and legal advice. This API helps in orchestrating the offer process tailored to the specific product or service being considered.

  **Limitations**

  PUT: The path should be named as follows following REST best practices:
'/customer-offers/{customerofferId}/agreements/{agreementId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/Agreement/{agreementid}/Exchange</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). EcBQ Accept, verify, etc. actions against the customer and product agreements

  **Documentation**

  This API path allows you to update an existing resource related to a customer offer agreement exchange. It is used in the process of processing a product offer for a new or existing customer. This process involves various actions such as document verification, collateral allocation, credit checks, underwriting decisions, regulatory compliance checks, eligibility verification, and utilizing internal and external specialist services for evaluations and legal advice. The API helps in managing and updating the agreement details and actions related to the customer and product agreements.

  **Limitations**

  PUT: A suitable name for the path '/CustomerOffer/{customerofferid}/Agreement/{agreementid}/Exchange' while following REST best practices could be:

'/customer-offers/{customerofferid}/agreements/{agreementid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/Agreement/{agreementid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the agreements impacted and created as part of the offer

  **Documentation**

  This API path allows you to retrieve information about agreements that are impacted and created as part of a product offer for a new or existing customer. It provides details on the agreements associated with the specific offer, including any actions taken during the offer process such as document checks, credit assessments, underwriting decisions, and eligibility checks. This information can be useful for tracking and managing the agreements related to a customer's offer process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should focus on the resource being retrieved rather than the action being performed. Therefore, a more appropriate name for this path could be:

`/CustomerOffers/{customerofferid}/Agreements/{agreementid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerOffer/{customerofferid}/ProductInitialization/{productinitializationid}/Update</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). UpBQ Update details of the product initiation request

  **Documentation**

  This API path allows you to update the details of a product initiation request within the context of processing a product offer for a customer. It is designed to handle the specific actions involved in assessing and managing product offers, such as checking documents, allocating collateral, assessing credit, making underwriting decisions, and ensuring compliance with regulations and procedures. The update can include information related to the customer's offer and various specialized services that may be involved in the process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
`PUT /customer-offers/{customerofferid}/product-initializations/{productinitializationid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerOffer/{customerofferid}/ProductInitialization/{productinitializationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the processing of a product offer for a new or established  customer. The offer process is defined specifically for the product or service being considered and can include actions such as document checks, collateral allocation, credit assessments, underwriting decisions, regulatory and procedural checks, eligibility checks, the use of internal and external specialist services (such as evaluations and legal advice). ReBQ Retrieve details about the product initiation request

  **Documentation**

  This API path allows you to retrieve information about the product initiation request within the context of processing a product offer for a customer. This process is tailored to the specific product or service being considered and includes various actions like document verification, credit checks, underwriting decisions, and compliance checks. You can access details related to the product initialization request for a customer offer using this API endpoint.

  **Limitations**

  GET: The name of the path should ideally be:

```
/ customer-offers / {customerOfferId} / product-initializations / {productInitializationId}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
