<h1 style='color:red;'>CreditManagement</h1>

**BIAN Documentation:** [CreditManagement v12](https://app.swaggerhub.com/apis/BIAN-3/CreditManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CreditManagement/Evaluate</span></summary>

  **Description**

  This service domain provides a bank-wide/oversight function to qualify credit pricing for offered products and services to reflect the bank's appetite to write the business. This decision can override the standard product pricing procedure EvCR Evaluate a proposed transaction pricing against group credit policy

  **Documentation**

  This API path allows the bank to evaluate the pricing of credit transactions against its credit policy. It helps the bank determine if the proposed pricing aligns with its risk appetite for writing the business. This evaluation can potentially override the standard pricing procedures to ensure that the pricing reflects the bank's overall credit strategy and risk tolerance.

  **Limitations**

  POST: If the path '/CreditManagement/Evaluate' followed REST best practices, it should be named based on the resource it represents rather than the action being performed. A more appropriate name would be '/CreditEvaluation' to better align with RESTful principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditManagement/{creditmanagementid}/Update</span></summary>

  **Description**

  This service domain provides a bank-wide/oversight function to qualify credit pricing for offered products and services to reflect the bank's appetite to write the business. This decision can override the standard product pricing procedure UpCR Update details of an active credit pricing assessment

  **Documentation**

  This API path allows you to update the details of an active credit pricing assessment within the Credit Management service domain of a bank. It is used to adjust the pricing of products and services offered by the bank in order to align with the bank's preference for writing business. This update can override the standard pricing procedure to ensure that the credit pricing reflects the bank's desired level of risk and profitability.

  **Limitations**

  PUT: The name of the path should be:

PATCH /CreditManagement/{creditmanagementid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditManagement/{creditmanagementid}/Retrieve</span></summary>

  **Description**

  This service domain provides a bank-wide/oversight function to qualify credit pricing for offered products and services to reflect the bank's appetite to write the business. This decision can override the standard product pricing procedure ReCR Retrieve details about a credit pricing assessment

  **Documentation**

  This API path allows you to retrieve details about a specific credit pricing assessment identified by {creditmanagementid}. It is part of a service domain that helps the bank determine appropriate credit pricing for its products and services based on its willingness to take on the associated risks. This assessment can influence the pricing set for various offerings and may override standard pricing procedures in place.

  **Limitations**

  GET: It is recommended to use resource-oriented naming conventions in REST APIs. So, the name of the path should be:

'/credit-management/{creditmanagementid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
