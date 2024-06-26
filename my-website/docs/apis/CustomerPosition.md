<h1 style='color:red;'>CustomerPosition</h1>

**BIAN Documentation:** [CustomerPosition v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerPosition/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerPosition/Initiate</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary InCR Initiation position monitoring for a customer

  **Documentation**

  This API path, "/CustomerPosition/Initiate", allows you to create a new resource that initiates the monitoring of a customer's consolidated financial position. It combines information from all the products and services the customer uses, such as available funds, credit, collateral, tax exposure, and other financial measures. This API helps in tracking and managing a customer's overall financial standing by providing a comprehensive view of their financial position.

  **Limitations**

  POST: If the path '/CustomerPosition/Initiate' followed all REST best practices, it should be named in a way that reflects a resource and action in a RESTful manner. One possible better naming could be '/customer-positions' for the resource representing customer positions, and POST method to initiate a new customer position creation. So, the RESTful path could be: 

POST /customer-positions

This naming convention adheres to REST principles by using a clear, descriptive resource name ('customer-positions

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Update</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary UpCR Update the settings for customer position tracking

  **Documentation**

  This BIAN API path allows you to update the settings for tracking the consolidated financial position of a specific customer. It combines information from all the products and services the customer is using, including details such as available funds, credit, collateral, tax exposure, and other financial measures. By using this API, you can make changes to how the customer's financial position is tracked and managed.

  **Limitations**

  PUT: The recommended name for the path '/CustomerPosition/{customerpositionid}/Update' in adherence to REST best practices would be:

PUT /customerpositions/{customerpositionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Control</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary CoCR Control the customer position tracking (e.g. suspend)

  **Documentation**

  This API path allows you to update the control settings for a specific customer's financial position. You can manage the tracking of the customer's overall financial status, including available funds, credit, collateral, tax exposure, and other relevant financial information. By using this path, you can make changes such as suspending the tracking of the customer's financial position.

  **Limitations**

  PUT: The name of the path should be `/customer-positions/{customerpositionid}/control` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Execute</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary ExCR Execute an automated task for position tracking (e.g. issue an alert)

  **Documentation**

  This API path allows for the execution of an automated task related to tracking the financial position of a customer. By updating an existing resource with the specified customer position ID, the system can consolidate and analyze financial information from various products and services the customer uses. This can include details such as available funds, credit status, collateral, tax exposure, and other relevant financial measures. The automated task could involve issuing alerts or notifications based on the analyzed financial position of the customer.

  **Limitations**

  PUT: A suitable name for the path '/CustomerPosition/{customerpositionid}/Execute' following REST best practices would be:

'/customer-positions/{customerpositionid}/actions/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Request</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary RqCR Request an action for customer position monitoring (e.g. review and refresh content)

  **Documentation**

  This API path allows you to update an existing customer's financial position by refreshing and reviewing the content related to their available funds, credit, collateral, tax exposure, and other financial measures. It helps maintain a consolidated view of the customer's financial status by combining information from all the products and services they are using.

  **Limitations**

  PUT: The name of the path could be `/customer-positions/{customerpositionid}/requests`, following REST best practices. Remember to use lowercase letters and plural nouns for resource URIs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary ReCR Retrieve details about a customer position

  **Documentation**

  This API path allows you to retrieve details about a customer's consolidated financial position. It combines information from all the products and services the customer is using, such as available funds, credit, collateral, tax exposure, and other financial measures. By using this API, you can access a comprehensive overview of the customer's financial status.

  **Limitations**

  GET: The name of the path should be:
'/customer-positions/{customerpositionid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Cashflow/{cashflowid}/Exchange</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary EcBQ Accept or verify the presented cash flow position

  **Documentation**

  This API allows you to update the cash flow exchange details of a customer's consolidated financial position. It combines information from all the products and services the customer is using, such as available funds, credit, collateral, and tax exposure. The purpose is to accept or verify the presented cash flow position for the customer.

  **Limitations**

  PUT: Based on REST best practices, a more suitable name for the path '/CustomerPosition/{customerpositionid}/Cashflow/{cashflowid}/Exchange' could be:

'/customer-positions/{customerpositionid}/cashflows/{cashflowid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Cashflow/{cashflowid}/Capture</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary CaBQ Capture product transaction reports (push from fulfillment)

  **Documentation**

  This BIAN API path allows updating an existing consolidated financial position for a customer by capturing product transaction reports related to cash flow. The system will combine information from all products and services the customer is using to provide a comprehensive view of their available funds, credit status, collateral, tax exposure, and other relevant financial details. The data captured through this API path helps in maintaining an up-to-date and accurate financial position for the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/CustomerPositions/{customerpositionid}/Cashflows/{cashflowid}/Capture

Here are the reasons for this naming convention:

1. Use plural nouns: Path segments should use plural nouns to represent collections. In this case, "CustomerPositions" and "Cashflows" should be used instead of singular form.

2. Capitalize path segments: Path segments should be in camel case and begin with a capital letter for consistency and

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Cashflow/{cashflowid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary ReBQ retrieve details about a cash flow analysis as part of the customer position

  **Documentation**

  This API path retrieves details about a cash flow analysis that is part of a customer's consolidated financial position. It combines information from all the products and services the customer is using, including available funds, credit, collateral, tax exposure, and other financial measures. This API allows you to access specific information related to cash flow within the overall financial position of a customer.

  **Limitations**

  GET: The name of the path should be '/customers/{customerid}/positions/{positionid}/cashflows/{cashflowid}'. 

Following REST best practices, it is recommended to use lowercase letters for paths, use plural nouns for collections, and avoid including unnecessary words like "Retrieve" in the path. Also, it is preferable to use the resource names rather than the action names in the path to improve readability and maintainability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Credit/{creditid}/Exchange</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary EcBQ Accept or verify the presented credit position

  **Documentation**

  This API path allows you to update an existing resource related to a customer's credit position within a consolidated financial position. It combines information from all products and services the customer is using to provide details on available funds, credit, collateral, tax exposure, and other financial measures. The purpose of this API is to accept or verify the presented credit position for the specified customer and credit ID.

  **Limitations**

  PUT: A suitable name for the path '/CustomerPosition/{customerpositionid}/Credit/{creditid}/Exchange' following REST best practices could be:

'/customer-positions/{customerpositionid}/credits/{creditid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Credit/{creditid}/Capture</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary CaBQ Capture credit assessment reports (push from credit administration)

  **Documentation**

  This API path allows for the updating of a customer's financial position, specifically focusing on credit-related information. By providing the customer position ID and credit ID, credit assessment reports can be captured and pushed from the credit administration system to update the consolidated financial position. This helps ensure that the position includes up-to-date details on available funds, credit status, collateral, tax exposure, and any other relevant financial metrics for the customer.

  **Limitations**

  PUT: The name of the path should be '/customers/{customerId}/credit/{creditId}/capture'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Credit/{creditid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary ReBQ retrieve details about a credit analysis as part of the customer position

  **Documentation**

  This API path allows you to retrieve information about a credit analysis as part of a customer's financial position. It combines details from all the products and services that the customer is using to provide a comprehensive view of their financial status. This information can include available funds, credit details, collateral, tax exposure, and other relevant financial measures. By accessing this API path, you can gather specific data related to the credit analysis within the customer's overall financial position.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/customers/{customerId}/positions/{positionId}/credits/{creditId}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Collateral/{collateralid}/Exchange</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary EcBQ Accept or verify the presented collateral position

  **Documentation**

  This API path allows you to update the collateral exchange information related to a customer's financial position. It is part of a service that consolidates various financial details for a customer, such as available funds, credit, collateral, tax exposure, and other relevant financial measures. By using this PUT method, you can provide or verify the collateral position details associated with a specific customer position and collateral ID.

  **Limitations**

  PUT: The name of the path should be:

'/customers/{customerId}/collaterals/{collateralId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPosition/{customerpositionid}/Collateral/{collateralid}/Capture</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary CaBQ Capture collateral allocation reports (push from collateral allocation management)

  **Documentation**

  This API path allows you to update information related to a specific collateral allocated to a customer's financial position. It helps in maintaining a consolidated view of the customer's finances by including details on available funds, credit, collateral, tax exposure, and other financial measures. Through this path, you can capture collateral allocation reports and push them from collateral allocation management systems to keep the customer's financial position up to date.

  **Limitations**

  PUT: A suitable RESTful name for the path '/CustomerPosition/{customerpositionid}/Collateral/{collateralid}/Capture' could be:

POST /customer-positions/{customerpositionid}/collaterals/{collateralid}/capture

In this naming convention:
- Use lowercase letters for the path and resource names.
- Use hyphens to separate words in the resource names.
- Use the appropriate HTTP method (POST in this case) to indicate an action of capturing information related to a collateral

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Collateral/{collateralid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary ReBQ retrieve details about a collateral allocation as part of the customer position

  **Documentation**

  This API path allows you to retrieve details about a collateral allocation as part of a customer's consolidated financial position. By using this endpoint, you can access specific information related to a customer's collateral, such as details about the collateral itself or how it is allocated within their overall financial position. This can include information about available funds, credit, tax exposure, and other financial measures related to the collateral.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customers/{customerId}/positions/{positionId}/collaterals/{collateralId}'

RESTful URLs should use lowercase letters, separate words with hyphens or underscores, and represent a hierarchical structure with meaningful resource names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerPosition/{customerpositionid}/Cashflow/Evaluate</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary Setup transaction history

  **Documentation**

  This API path allows you to create a new resource that evaluates the cash flow for a customer's consolidated financial position. This includes details such as available funds, credit, collateral, tax exposure, and other financial measures related to all the products and services the customer is using. It helps in setting up transaction history for the customer's financial position.

  **Limitations**

  POST: A more suitable RESTful name for the path '/CustomerPosition/{customerpositionid}/Cashflow/Evaluate' could be:

'/customers/{customerId}/cashflows/{cashflowId}/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Cashflow/{cashflowid}/Notify</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary Notify details about a cash flow analysis as part of the customer position

  **Documentation**

  This BIAN API path allows you to retrieve information about a cash flow analysis that is associated with a customer's financial position. The cash flow analysis is a part of the overall consolidated financial position of a customer, which includes details such as available funds, credit, collateral, tax exposure, and other financial measures. The API provides notifications about the specific details of the cash flow analysis within the context of the customer's financial position. This can help you better understand and manage the customer's financial status and make informed decisions related to their financial position.

  **Limitations**

  GET: The name of the path could be `/customers/{customerPositionId}/cashflows/{cashflowId}/notifications`. 

Here are the elements that were considered in naming the path following REST best practices:

1. Use plural nouns for resource names: The resources "customer position", "cashflow", and "notification" are represented as plural nouns in the path.

2. Use lowercase letters: All the letters in the path are in lowercase to ensure consistency and readability.

3. Use hyphens or

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPosition/{customerpositionid}/Credit/{creditid}/Notify</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary Notify Credit

  **Documentation**

  This API path allows you to retrieve information about notifying credit within the context of a customer's financial position. It is a part of the service domain that consolidates various financial details related to a customer, such as available funds, credit status, collateral information, tax exposure, and other relevant financial data. By accessing this path, you can retrieve specific details about notifying credit within the broader scope of a customer's financial position.

  **Limitations**

  GET: The name of the path should be:

`/customers/{customer_id}/positions/{position_id}/credits/{credit_id}/notify` 

This path follows REST best practices by using lowercase letters, plural nouns for collections, and resource identifiers instead of action verbs.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerPosition/{customerpositionid}/Credit/Evaluate</span></summary>

  **Description**

  This service domain maintains a consolidated financial position for a customer, combining details from all products and services in use. The position can cover available funds, credit, collateral, tax exposure and other financial measures as necessary Evaluate Credit

  **Documentation**

  This API path is meant to evaluate the credit of a customer using their consolidated financial position. It takes in a specific customer position ID and creates a new resource to analyze the customer's available funds, credit, collateral, tax exposure, and other financial measures that are relevant. By providing this information, financial institutions can assess the customer's creditworthiness more accurately.

  **Limitations**

  POST: A suitable name for the path '/CustomerPosition/{customerpositionid}/Credit/Evaluate' based on REST best practices would be:

1. GET /customer-positions/{customerpositionid}/credit/evaluation

This name uses all lowercase letters, uses hyphens to separate words, and describes the resource being accessed in a clear and concise manner.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
