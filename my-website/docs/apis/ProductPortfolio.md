<h1 style='color:red;'>ProductPortfolio</h1>

**BIAN Documentation:** [ProductPortfolio v12](https://app.swaggerhub.com/apis/BIAN-3/ProductPortfolio/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProductPortfolio/Evaluate</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis EvCR Evaluate product portfolio performance

  **Documentation**

  This BIAN API path called "Product Portfolio - Evaluate" allows users to create and maintain analytical views of a product portfolio. The API is designed to support the analysis of product profitability and performance. By using this API, you can evaluate how products are performing within a portfolio, which can help in making informed decisions about product strategies and profitability.

  **Limitations**

  POST: The name of the path '/ProductPortfolio/Evaluate' following REST best practices should be something that represents a resource rather than an action. This can help make the API more intuitive and easier to understand. A more RESTful name for this path could be '/ProductPortfolio/Products' or '/ProductPortfolio/Items', depending on what the collection of resources represents in the context of your API.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductPortfolio/{productportfolioid}/Update</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis UpCR Update settings or content for product portfolio analysis activity

  **Documentation**

  This BIAN API path allows you to update settings or content related to a specific product portfolio in order to analyze its profitability and performance. By using the PUT method to update an existing resource, you can make changes to the analytical views within the product portfolio to support activities such as product profitability analysis.

  **Limitations**

  PUT: The name of the path should be `/product-portfolio/{productportfolioId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductPortfolio/{productportfolioid}/Request</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis RqCR Request manual intervention in the product portfolio analysis activity

  **Documentation**

  This BIAN API path allows you to request manual intervention in the product portfolio analysis activity for a specific product portfolio identified by its unique ID. You can update an existing resource to indicate the need for manual review or intervention in the analytical views related to product profitability and performance analysis within the product portfolio. This API helps manage the product portfolio by allowing manual input or adjustments to ensure accurate and comprehensive analysis.

  **Limitations**

  PUT: The name of the path should be `/product-portfolios/{productPortfolioId}/requests` in kebab case to be more RESTful.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductPortfolio/{productportfolioid}/Retrieve</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis ReCR Retrieve details about product portfolio analysis activity

  **Documentation**

  This API path allows you to retrieve details about the product portfolio analysis activity for a specific product portfolio identified by its unique ID (productportfolioid). It provides analytical views of the product portfolio to help analyze the profitability and performance of the products within that portfolio. By using this API, you can access information related to the analysis of the product portfolio to make informed decisions about product management and performance.

  **Limitations**

  GET: Following REST best practices, the path should be named in a way that reflects the resource being operated on and the action being performed. Considering this, a suitable name for the path '/ProductPortfolio/{productportfolioid}/Retrieve' could be:

GET /product-portfolios/{productportfolioid}

This path clearly indicates that it is a GET request for retrieving a specific product portfolio identified by its ID. By using lowercase letters and hyphens to separate words, it follows the convention of

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductPortfolio/{productportfolioid}/PerformanceAnalysis/Evaluate</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis EvBQ Evaluate product performance using a specific type of analysis

  **Documentation**

  This API path allows users to create a new resource for evaluating the performance of a specific product portfolio. By providing the `productportfolioid`, users can access analytical views related to product profitability and performance analysis. The "Evaluate" function uses a specific type of analysis (EvBQ) to assess and review the performance of the products within the portfolio in question.

  **Limitations**

  POST: The name of the path should be `/product-portfolios/{productPortfolioId}/performance-analysis/evaluate` for following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductPortfolio/{productportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Update</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis UpBQ Update details of a specific product performance analysis

  **Documentation**

  This BIAN API path allows users to update the details of a specific product performance analysis within a product portfolio. By using a PUT method, users can modify existing information related to the performance analysis of a particular product in the portfolio. This API is designed to support tracking and analyzing product profitability and overall performance within a portfolio of products.

  **Limitations**

  PUT: The name of the path should be:

'/product-portfolios/{productPortfolioId}/performance-analyses/{performanceAnalysisId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductPortfolio/{productportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Execute</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis ExBQ Execute an automated action against on-going analysis

  **Documentation**

  This API path allows you to update the information related to the performance analysis of a specific product in a product portfolio. By sending a PUT request to this path with the product portfolio ID and performance analysis ID, you can execute an automated action that will impact the ongoing analysis of the product's profitability and performance. This helps in maintaining a collection of analytical views to better understand and manage the products within the portfolio.

  **Limitations**

  PUT: The name of the path should be:

/ProductPortfolios/{productportfolioid}/PerformanceAnalyses/{performanceanalysisid}/Execution

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductPortfolio/{productportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Request</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis RqBQ Request manual intervention to on-going analysis

  **Documentation**

  This API path allows you to update an existing request for manual intervention on the ongoing analysis of product performance within a product portfolio. By providing the relevant product portfolio ID and performance analysis ID, you can request additional manual review and intervention to support the analysis of product profitability and performance within your portfolio.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/product-portfolios/{productPortfolioid}/performance-analyses/{performanceAnalysisid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductPortfolio/{productportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Retrieve</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the product portfolio to support product profitability and performance analysis ReBQ Retrieve details about a specific product performance analysis

  **Documentation**

  This BIAN API path retrieves details about a specific product performance analysis within a product portfolio. By providing the product portfolio ID and the performance analysis ID, this API allows users to access analytical views that support analyzing the profitability and performance of the products within the portfolio.

  **Limitations**

  GET: The name of the path should be:

GET /products/{productid}/performance-analysis/{analysisid}

Make sure to use lowercase letters and hyphens for better readability and following RESTful best practices.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
