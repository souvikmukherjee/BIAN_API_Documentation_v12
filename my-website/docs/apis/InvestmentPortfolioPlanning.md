<h1 style='color:red;'>InvestmentPortfolioPlanning</h1>

**BIAN Documentation:** [InvestmentPortfolioPlanning v12](https://app.swaggerhub.com/apis/BIAN-3/InvestmentPortfolioPlanning/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InvestmentPortfolioPlanning/Evaluate</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed EvCR Establish a managed investment portfolio agreement

  **Documentation**

  This API path is used to create a new managed investment portfolio agreement by agreeing on the policies and makeup of the investment portfolio. It ensures that all necessary bank and regulatory terms and conditions are met and addressed during the process. This API helps with planning and establishing an investment portfolio that aligns with the agreed upon policies and meets regulatory requirements.

  **Limitations**

  POST: The name of the path should be `/investment-portfolio-planning/evaluate` following REST best practices. RESTful URLs are typically all lowercase, use hyphens to separate words, and represent resources instead of actions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/Update</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed UpCR Update details of an active managed investment portfolio agreement

  **Documentation**

  This API path allows a user to update the details of an existing investment portfolio planning agreement. Users can make changes to the policies, makeup of the portfolio, and ensure that all necessary bank and regulatory terms are met. This API is specifically designed for managing and adjusting active investment portfolios to ensure they align with the agreed-upon terms and conditions.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /investment-portfolio-planning/{investmentportfolioplanningid}
``` 

This name follows REST best practices by using lowercase letters, separating words with hyphens, and using the HTTP method `PUT` to indicate updating a specific resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/Request</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed RqCR Request review that proposed activity is compatible with the agreement

  **Documentation**

  This API path allows users to update an existing resource related to Investment Portfolio Planning. Specifically, it relates to a request for reviewing whether a proposed activity aligns with the agreed-upon policies, make-up of the investment portfolio, and compliance with bank and regulatory terms. By using this API, users can request a review to ensure that the proposed investment activity is in line with the pre-established agreement.

  **Limitations**

  PUT: The name of the path should be:

/investment-portfolio-planning/{investmentPortfolioPlanningId}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/Retrieve</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed ReCR Retrieve details about a managed investment portfolio agreement

  **Documentation**

  This API path allows you to retrieve details about a managed investment portfolio agreement by providing the specific investment portfolio planning ID. It helps you access information regarding the policies, makeup, and terms and conditions of an investment portfolio, ensuring that all the necessary requirements are met according to banking and regulatory standards.

  **Limitations**

  GET: The name of the path should be '/investment-portfolio-planning/{investmentportfolioPlanningId}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/InvestmentTerms/Evaluate</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed EvBQ Establish the specific terms/conditions making up the investment agreement

  **Documentation**

  This API path is used for creating a new resource related to Investment Portfolio Planning. It specifically focuses on establishing the specific terms and conditions that make up an investment agreement for a particular investment portfolio planning ID. This process involves agreeing on the policies and required components of the investment portfolio, ensuring that all necessary bank and regulatory terms are addressed. Essentially, it helps in defining the terms and conditions of an investment agreement in a structured and regulatory-compliant manner.

  **Limitations**

  POST: The name of this path following REST best practices could be:

/InvestmentPortfolios/{investmentPortfolioId}/InvestmentTerms/Evaluation

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/InvestmentTerms/{investmenttermsid}/Update</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed UpBQ Update the terms/conditions for an investment agreement

  **Documentation**

  This API path allows you to update the terms and conditions for an existing investment agreement within an investment portfolio planning system. It ensures that the policies and required components of the investment portfolio are aligned with all necessary bank and regulatory guidelines. By making a PUT request to this path with the relevant IDs for the investment portfolio planning and specific investment terms, you can modify and update the terms and conditions accordingly.

  **Limitations**

  PUT: The name of the path should be:

/investment-portfolios/{investmentPortfolioId}/investment-terms/{investmentTermsId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/InvestmentTerms/{investmenttermsid}/Request</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed RqBQ Request check of a proposed activity is compatible with a specific term of the agreement

  **Documentation**

  This API path is used to update a specific request related to investment portfolio planning. It focuses on ensuring that the proposed activity is compatible with a specific term of the agreement in place. This involves checking if the activity aligns with the policies, required makeup of the investment portfolio, and all necessary bank and regulatory terms and conditions.

  **Limitations**

  PUT: The name of the path should be:

/investment-portfolio-planning/{investmentPortfolioPlanningId}/investment-terms/{investmentTermsId}/request

Following REST best practices, it is recommended to use lowercase letters and separate words with hyphens when naming paths. Additionally, path parameters like "investmentportfolioplanningid" and "investmenttermsid" should be formatted in camelCase with the first letter lowercase.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioPlanning/{investmentportfolioplanningid}/InvestmentTerms/{investmenttermsid}/Retrieve</span></summary>

  **Description**

  Agree the policies and required make-up of an investment portfolio and ensure all required bank and regulatory terms and conditions are addressed ReBQ Retrieve details about the specific terms of an agreement

  **Documentation**

  This API path allows you to retrieve details about the specific terms of an agreement related to investment portfolio planning. It helps in agreeing on the policies and required composition of an investment portfolio, ensuring that all necessary bank and regulatory terms and conditions are addressed. By making a GET request to this endpoint with the relevant IDs for the investment portfolio planning and investment terms, you can retrieve specific information about the terms of the agreement.

  **Limitations**

  GET: A possible RESTful naming convention for this path could be:

GET /investment-portfolio-planning/{investment-portfolio-planning-id}/investment-terms/{investment-terms-id}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
