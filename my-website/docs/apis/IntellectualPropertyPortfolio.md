<h1 style='color:red;'>IntellectualPropertyPortfolio</h1>

**BIAN Documentation:** [IntellectualPropertyPortfolio v12](https://app.swaggerhub.com/apis/BIAN-3/IntellectualPropertyPortfolio/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /IntellectualPropertyPortfolio/Initiate</span></summary>

  **Description**

  Administer the bank's intellectual property assets InCR Initiate administration for an intellectual property asset

  **Documentation**

  This API path "/IntellectualPropertyPortfolio/Initiate" allows users to initiate the administration process for a new intellectual property asset in the bank's portfolio. By sending a POST request to this path, users can create a new resource that will manage and track the details of intellectual property assets held by the bank. This API is designed to streamline the process of adding and organizing intellectual property assets within the bank's portfolio.

  **Limitations**

  POST: The name of the path '/IntellectualPropertyPortfolio/Initiate' should be modified to align with REST best practices by representing a resource rather than an action. A more suitable name for the path could be '/IntellectualPropertyPortfolios/' to represent the collection of intellectual property portfolios.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Update</span></summary>

  **Description**

  Administer the bank's intellectual property assets UpCR Update details of an asset administration plan

  **Documentation**

  This BIAN API path allows you to update details of an asset administration plan for a specific intellectual property portfolio owned by the bank. By making a PUT request to this path with the appropriate parameters, you can modify and manage the information related to the intellectual property assets held by the bank.

  **Limitations**

  PUT: The name of the path could be:
'/intellectual-property-portfolios/{intellectualpropertyportfolioid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Retrieve</span></summary>

  **Description**

  Administer the bank's intellectual property assets ReCR Retrieve details about an intellectual property asset administrative plan

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific intellectual property asset administrative plan within the bank's intellectual property portfolio. By providing the corresponding intellectual property portfolio ID, you can access information about how that particular intellectual property asset is being managed and administered within the bank.

  **Limitations**

  GET: The name of the path should be '/intellectual-property-portfolios/{intellectualpropertyportfolioid}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Maintenance/Initiate</span></summary>

  **Description**

  Administer the bank's intellectual property assets InBQ Initiate maintenance activity for an intellectual property asset

  **Documentation**

  This BIAN API path allows you to administer the bank's intellectual property assets by initiating maintenance activity for a specific intellectual property asset identified by its unique intellectual property portfolio ID. By sending a POST request to this endpoint, you can create a new resource or task related to maintaining the intellectual property asset within the bank's portfolio. This action helps in managing and preserving the value and integrity of the bank's intellectual property assets.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be:

'/intellectual-property-portfolios/{intellectualPropertyPortfolioId}/maintenance/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Maintenance/{maintenanceid}/Update</span></summary>

  **Description**

  Administer the bank's intellectual property assets UpBQ Update maintenance activity details for an intellectual property asset

  **Documentation**

  This BIAN API path allows you to update the maintenance activity details for a specific intellectual property asset within the bank's Intellectual Property Portfolio. By providing the intellectual property portfolio ID and the maintenance activity ID, you can make modifications to the maintenance details associated with that particular asset. The PUT method is used to update the existing resource with the new information you provide. This API is essential for managing and maintaining the bank's intellectual property assets effectively.

  **Limitations**

  PUT: The name of the path could be: 

`PATCH /IntellectualPropertyPortfolios/{intellectualPropertyPortfolioId}/Maintenances/{maintenanceId}`

In this naming convention:
- `PATCH` is used to indicate the HTTP method for updating a specific resource.
- `IntellectualPropertyPortfolios` and `Maintenances` are in plural form to indicate that they represent collections of resources.
- `{intellectualPropertyPortfolioId}` and `{maintenanceId}` are placeholders representing the unique identifiers

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Maintenance/{maintenanceid}/Request</span></summary>

  **Description**

  Administer the bank's intellectual property assets RqBQ Request a maintenance task is undertaken for an intellectual property asset

  **Documentation**

  This API path allows users to update a request for a maintenance task to be undertaken for a specific intellectual property asset within the bank's portfolio. By sending a PUT request to this path with the necessary details such as the intellectual property portfolio ID and the maintenance ID, users can make changes or updates to the maintenance request associated with that particular asset.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/intellectual-property-portfolios/{intellectualpropertyportfolioid}/maintenance/{maintenanceid}/requests` 

Here are the key principles we followed to craft the path name:

1. Use lowercase letters: Path names in REST should be in lowercase to maintain consistency.
2. Use hyphens for readability: Hyphens are used to separate words in the path, making it easier to read and understand.
3.

</details>

<details open>
  <summary><span style='color:red;'>GET: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Maintenance/{maintenanceid}/Retrieve</span></summary>

  **Description**

  Administer the bank's intellectual property assets ReBQ Retrieve details about asset maintenance activity

  **Documentation**

  This BIAN API path allows users to retrieve details about asset maintenance activity related to the bank's intellectual property portfolio. By providing the intellectual property portfolio ID and maintenance ID as parameters in the request, this API will return information about the maintenance activities conducted on a specific intellectual property asset within the bank's portfolio. Users can use this information to track and monitor the maintenance history and status of intellectual property assets owned by the bank.

  **Limitations**

  GET: Based on REST best practices, the path name should be something like `/intellectualpropertyportfolios/{intellectualpropertyportfolioid}/maintenances/{maintenanceid}`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Assignment/Initiate</span></summary>

  **Description**

  Administer the bank's intellectual property assets InBQ Initiate the assignment of an intellectual property asset

  **Documentation**

  This API path allows you to create a new resource to manage the bank's intellectual property assets. Specifically, it enables you to initiate the assignment of a particular intellectual property asset within the intellectual property portfolio identified by the {intellectualpropertyportfolioid} parameter. By using a POST request, you can trigger the process of assigning and managing intellectual property assets within the bank's portfolio.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

GET /intellectual_property_portfolios/{intellectual_property_portfolio_id}/assignments/initiate

Here are some of the key corrections made based on REST best practices:
1. Use of lowercase letters for path segments.
2. Use of underscores or hyphens to separate words in path segments.
3. Pluralization of resource names where appropriate (e.g., intellectual_property_portfolios).
4. Avoidance of nested paths for specific

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Assignment/{assignmentid}/Update</span></summary>

  **Description**

  Administer the bank's intellectual property assets UpBQ Update details about an intellectual property asset assignment

  **Documentation**

  This API path allows you to update the details of an intellectual property asset assignment within the bank's intellectual property portfolio. By making a PUT request to this endpoint with the appropriate intellectual property portfolio ID and assignment ID, you can modify information related to the assignment of a specific intellectual property asset. This update could include changes to ownership, licensing agreements, or any other relevant information tied to that assignment.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/intellectual-property-portfolios/{intellectual-property-portfolio-id}/assignments/{assignment-id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Assignment/{assignmentid}/Request</span></summary>

  **Description**

  Administer the bank's intellectual property assets RqBQ Request manual intervention in an assignment

  **Documentation**

  This BIAN API path allows you to update an existing assignment request for administering the bank's intellectual property assets within a specific intellectual property portfolio. The endpoint is used to request manual intervention in an assignment related to intellectual property within the portfolio identified by {intellectualpropertyportfolioid}. The Put method is used to update the resource, allowing users to modify details or status related to the assignment request specified by {assignmentid}.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/intellectual-property-portfolios/{intellectualpropertyportfolioid}/assignments/{assignmentid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Assignment/{assignmentid}/Retrieve</span></summary>

  **Description**

  Administer the bank's intellectual property assets ReBQ Retrieve details about an intellectual property asset assignment

  **Documentation**

  This API path allows you to retrieve details about a specific intellectual property asset assignment within the bank's intellectual property portfolio. By providing the intellectual property portfolio ID and the assignment ID as parameters, you can access information about a particular assignment, such as the assignment owner, details of the intellectual property asset involved, and any other relevant assignment details. This helps in managing and overseeing intellectual property assets within the bank efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured in a way that clearly conveys the resource and action being performed. Therefore, a suitable name for the path '/IntellectualPropertyPortfolio/{intellectualpropertyportfolioid}/Assignment/{assignmentid}/Retrieve' could be:

GET /intellectual-property-portfolios/{intellectualpropertyportfolioid}/assignments/{assignmentid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
