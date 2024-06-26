<h1 style='color:red;'>RegulatoryCompliance</h1>

**BIAN Documentation:** [RegulatoryCompliance v12](https://app.swaggerhub.com/apis/BIAN-3/RegulatoryCompliance/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /RegulatoryCompliance/Evaluate</span></summary>

  **Description**

  This service domain provides a service to interpret regulatory requirements, provide guidance and define and implement a portfolio of regulatory compliance tests across all appropriate bank activities EvCR Start a compliance evaluation assessment

  **Documentation**

  This API path allows you to initiate a compliance evaluation assessment within the Regulatory Compliance service domain. It helps in interpreting regulatory requirements, offering guidance, and setting up a series of compliance tests for various banking activities. By making a POST request to this path, you can create a new compliance evaluation assessment to ensure that the bank operations meet regulatory standards and requirements.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/RegulatoryCompliance/Evaluate' could be simplified to '/regulatory-compliance/evaluation'. It is advisable to use lowercase letters and hyphens to separate words in the URL path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryCompliance/{regulatorycomplianceid}/Update</span></summary>

  **Description**

  This service domain provides a service to interpret regulatory requirements, provide guidance and define and implement a portfolio of regulatory compliance tests across all appropriate bank activities UpCR Update submitted details or content for an on-going compliance assessment

  **Documentation**

  This API path allows users to update the details or content for an ongoing compliance assessment within the Regulatory Compliance service domain. Users can provide new information, make corrections, or update existing data related to regulatory requirements, guidance, and compliance testing for various banking activities.

  **Limitations**

  PUT: The name of the path following REST best practices could be: 

PUT /RegulatoryCompliance/{regulatorycomplianceid} 

The HTTP method PUT is used when updating a resource in RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryCompliance/{regulatorycomplianceid}/Request</span></summary>

  **Description**

  This service domain provides a service to interpret regulatory requirements, provide guidance and define and implement a portfolio of regulatory compliance tests across all appropriate bank activities RqCR Request a review or adjudication for an assessment

  **Documentation**

  This API path allows you to update an existing resource related to regulatory compliance. Specifically, it is used to request a review or adjudication for an assessment pertaining to regulatory compliance within a bank's activities. It helps in interpreting regulatory requirements, providing guidance, and implementing compliance tests to ensure the bank is meeting necessary regulations.

  **Limitations**

  PUT: One appropriate name for the path would be:

`/regulatoryCompliances/{regulatorycomplianceid}/requests` 

Remember to use lowercase letters and plural nouns to adhere to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /RegulatoryCompliance/{regulatorycomplianceid}/Retrieve</span></summary>

  **Description**

  This service domain provides a service to interpret regulatory requirements, provide guidance and define and implement a portfolio of regulatory compliance tests across all appropriate bank activities ReCR Retrieve details and content from an active compliance assessment

  **Documentation**

  This BIAN API path allows you to retrieve details and content from an active compliance assessment related to regulatory compliance. It provides access to information and guidance on regulatory requirements, and helps define and implement regulatory compliance tests for various activities within a bank.

  **Limitations**

  GET: The name of the path should be: 

`/regulatory-compliance/{regulatorycomplianceid}`

This follows REST best practices by using lowercase letters, separating words with hyphens, and using a resource-centric naming convention.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
