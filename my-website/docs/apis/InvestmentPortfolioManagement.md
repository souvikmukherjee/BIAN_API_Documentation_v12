<h1 style='color:red;'>InvestmentPortfolioManagement</h1>

**BIAN Documentation:** [InvestmentPortfolioManagement v12](https://app.swaggerhub.com/apis/BIAN-3/InvestmentPortfolioManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InvestmentPortfolioManagement/Initiate</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies InCR Initiate investment portfolio management activity for a customer

  **Documentation**

  This API path allows you to initiate investment portfolio management activities for a customer. It enables you to manage their investment portfolio by making trades to take advantage of market opportunities while also ensuring that the trading activities align with the customer's portfolio trading policies. By using this API, you can start managing an investment portfolio for a specific customer in a way that maximizes opportunities while staying compliant with trading policies.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

/investment-portfolio-management/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Update</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies UpCR Update details of an active investment portfolio management arrangement

  **Documentation**

  This API path allows you to update details of an active investment portfolio management arrangement. By providing the specific ID of the portfolio management arrangement, you can make changes or modifications to the existing information related to the management of an investment portfolio. This could include adjustments to trading strategies, updating portfolio policies, or making any other necessary changes to ensure the portfolio remains aligned with your investment goals and objectives.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/InvestmentPortfolios/{investmentportfoliomanagementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Execute</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ExCR Execute an automated service

  **Documentation**

  This API path allows you to manage an investment portfolio by initiating trading to take advantage of market opportunities while staying within the trading policies set for the portfolio. Specifically, it executes an automated service related to investment management for a specific investment portfolio identified by the {investmentportfoliomanagementid}. This enables you to update and carry out actions related to investment trades and strategies through an automated process, following the defined trading guidelines for the portfolio.

  **Limitations**

  PUT: The path `/InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Execute` can be named as:

`POST /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Actions/Execute`

This naming follows REST best practices by using HTTP POST method for actions that trigger an execution in the investment portfolio management resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Request</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies RqCR Request manual intervention

  **Documentation**

  This API path allows you to update an existing investment portfolio management request, specifically requesting manual intervention. This means that if the system identifies a need for manual review or approval based on trading policies or market opportunities, you can use this API to indicate that intervention is required.

  **Limitations**

  PUT: The name of the path should be "/investment-portfolio-management/{investmentportfolio-management-id}/requests" to follow REST best practices. It should be in lowercase letters and use hyphens to separate words for better readability and consistency. Additionally, it is important to use plural nouns for collections, such as "requests" in this case.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Retrieve</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ReCR Retrieve details about a managed investment portfolio

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific managed investment portfolio by providing its unique identification (investmentportfoliomanagementid). By using this API endpoint with a GET method, you can access information related to the investment portfolio, such as its holdings, performance, trading activities, and compliance with trading policies. This functionality helps you effectively manage your investment portfolio and make informed decisions regarding trading activities to capitalize on market opportunities while ensuring adherence to portfolio policies.

  **Limitations**

  GET: The name of the path should be:

GET /investment-portfolio-management/{investmentPortfolioManagementId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/Track/{trackid}/Retrieve</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ReBQ Retrieve details about tracking insights for the portfolio

  **Documentation**

  This API path allows you to retrieve details about tracking insights for a specific track within an investment portfolio management system. It helps you manage your investment portfolio by providing information on trading activities related to market opportunities while ensuring that trades comply with portfolio trading policies.

  **Limitations**

  GET: A recommended name for this path following REST best practices could be:

GET /investment-portfolios/{investmentPortfolioId}/tracks/{trackId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/MarketOpportunities/{marketopportunitiesid}/Retrieve</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ReBQ Retrieve details about a related market opportunity

  **Documentation**

  This API path allows you to retrieve details about a specific market opportunity related to an investment portfolio that is being managed. By using the unique identifiers for the investment portfolio and the market opportunity, you can access information regarding that particular opportunity within the context of the portfolio management. This can help in making informed trading decisions to capitalize on market opportunities while adhering to the trading policies set for the portfolio.

  **Limitations**

  GET: The name of the path should be:

GET /investment-portfolio-management/{investment_portfolio_management_id}/market-opportunities/{market_opportunities_id}

</details>

<details open>
  <summary><span style='color:red;'>POST: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/Initiate</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies InBQ Initiate a trade against the investment portfolio holdings

  **Documentation**

  This API path allows users to manage an investment portfolio by initiating trades to take advantage of market opportunities while ensuring that the trades comply with the portfolio's trading policies. Specifically, it enables the user to initiate a trade against the holdings within a specific investment portfolio identified by the {investmentportfoliomanagementid}. This action involves creating a new trade resource within the portfolio.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/investment-portfolios/{investmentPortfolioId}/trades/initiate

Replacing the placeholder values with the actual resource names in lowercase and using hyphens for readability is a common convention in RESTful API naming.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/{tradeinitiationid}/Update</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies UpBQ Update a market trade request

  **Documentation**

  This API path allows the user to update a market trade request within a specific investment portfolio management account. It is used to make changes or modifications to a trade initiation request associated with a particular trade initiation ID within the specified investment portfolio management ID. This is done in order to manage the investment portfolio effectively by taking advantage of market opportunities while still adhering to the trading policies set for the portfolio.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /investment-portfolio-management/{investmentportfoliomanagementid}/trade-initiation/{tradeinitiationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/{tradeinitiationid}/Exchange</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies EcBQ Accept, reject etc. a market trade proposed for the portfolio

  **Documentation**

  This API path allows users to manage an investment portfolio by initiating trading activities to take advantage of market opportunities, while ensuring compliance with portfolio trading policies. It is specifically used to accept, reject, or make changes to a proposed market trade for the portfolio. By updating an existing resource through a PUT request, users can effectively control the trading activities within their investment portfolio according to their investment strategy and risk management guidelines.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/{tradeinitiationid}/Exchange' could be:

/InvestmentPortfolioManagements/{investmentportfoliomanagementid}/TradeInitiations/{tradeinitiationid}/Exchanges

In this naming convention, the path uses plural nouns to represent collections, and each resource in the path is represented by a separate noun.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/{tradeinitiationid}/Request</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ReBQ Request manual intervention to a related market trade

  **Documentation**

  This BIAN API path allows a user to update a specific trade initiation related to managing an investment portfolio. It is used to make changes or request manual intervention for a trade that has been initiated within the portfolio management system. This action helps ensure that trading activities align with the portfolio's strategies and policies, and it allows for adjustments to be made to take advantage of market opportunities while maintaining compliance with trading rules.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/InvestmentPortfolios/{investmentPortfolioId}/TradeInitiations/{tradeInitiationId}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioManagement/{investmentportfoliomanagementid}/TradeInitiation/{tradeinitiationid}/Retrieve</span></summary>

  **Description**

  Manage an investment portfolio, initiating trading to leverage market opportunities, remaining within portfolio trading policies ReBQ Retrieve details about a related market trade request

  **Documentation**

  This API path allows you to retrieve details about a specific market trade request related to the management of an investment portfolio. It is used to gather information about trading activities initiated within the portfolio to take advantage of market opportunities while ensuring that the trades align with the portfolio's established trading policies.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

`/investment-portfolio-management/{investmentportfoliomanagementid}/trade-initiation/{tradeinitiationid}/retrieve`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
