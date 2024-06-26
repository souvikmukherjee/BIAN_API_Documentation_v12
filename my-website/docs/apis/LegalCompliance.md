<h1 style='color:red;'>LegalCompliance</h1>

**BIAN Documentation:** [LegalCompliance v12](https://app.swaggerhub.com/apis/BIAN-3/LegalCompliance/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /LegalCompliance/Evaluate</span></summary>

  **Description**

  Provide specialist legal advice, assess for legal compliance and resolve legal cases as they occur EvCR Start a legal assessment action

  **Documentation**

  This API endpoint allows users to initiate a legal assessment action by providing specialist legal advice, evaluating for legal compliance, and resolving legal cases as needed. It is used to start the process of assessing legal issues and ensuring that all aspects comply with relevant laws and regulations.

  **Limitations**

  POST: Following REST best practices, the name of the path '/LegalCompliance/Evaluate' can be simplified and formatted using nouns to represent resources. 

For example, you could rename the path to the following: 

'/legal-compliance/evaluations'

This naming convention uses lowercase letters, dashes to separate words, and plural nouns to represent collections of resources, which aligns with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalCompliance/{legalcomplianceid}/Update</span></summary>

  **Description**

  Provide specialist legal advice, assess for legal compliance and resolve legal cases as they occur UpCR Update submitted details or content for an on-going legal assessment

  **Documentation**

  This API path allows you to update the details or content of an ongoing legal assessment identified by a specific legal compliance ID. It is used to provide specialist legal advice, assess for legal compliance, and resolve legal cases as they occur. By making a PUT request to this path, you can update the information related to the legal assessment in order to keep it current and accurate.

  **Limitations**

  PUT: The name of the path should be:

'/legalcompliance/{legalcomplianceid}' with the HTTP method PUT

This follows the RESTful convention of using the HTTP method PUT to update a resource identified by the legal compliance ID.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LegalCompliance/{legalcomplianceid}/Request</span></summary>

  **Description**

  Provide specialist legal advice, assess for legal compliance and resolve legal cases as they occur RqCR Request a review or adjudication for an assessment

  **Documentation**

  This BIAN API path allows you to update an existing legal compliance resource by requesting a review or adjudication for an assessment. It is used to seek specialist legal advice, assess the situation for legal compliance, and resolve legal cases as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

/legal-compliance/{legalcomplianceid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /LegalCompliance/{legalcomplianceid}/Retrieve</span></summary>

  **Description**

  Provide specialist legal advice, assess for legal compliance and resolve legal cases as they occur ReCR Retrieve details and content from a legal assessment action

  **Documentation**

  This API path allows you to retrieve details and content from a legal assessment action by providing a specific legal compliance ID. It helps in obtaining specialist legal advice, assessing legal compliance issues, and resolving legal cases as needed. In simple terms, it allows you to access information related to legal assessments and actions taken to ensure compliance with relevant laws and regulations.

  **Limitations**

  GET: The name of the path should be `/legal-compliance/{legalcomplianceid}` using kebab case for the resource naming. It is important to keep the path simple, descriptive, and in lowercase as per REST best practices.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
