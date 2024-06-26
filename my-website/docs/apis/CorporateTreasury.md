<h1 style='color:red;'>CorporateTreasury</h1>

**BIAN Documentation:** [CorporateTreasury v12](https://app.swaggerhub.com/apis/BIAN-3/CorporateTreasury/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CorporateTreasury/{corporatetreasuryid}/Update</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank UpCR Update the corporate treasury plan

  **Documentation**

  This API path allows you to update an existing corporate treasury plan identified by a specific corporate treasury ID. It helps in consolidating and presenting transaction details to provide a clear view of the overall financial position of the bank at any given time. Additionally, it manages the application of different interest and exchange rates for various products and services offered by the bank. By using this API, you can make changes to the corporate treasury plan to ensure it reflects the most accurate and up-to-date information.

  **Limitations**

  PUT: The name of the path should be:

PUT /corporate-treasury/{corporatetreasuryid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReCR Retrieve details about the corporate treasury plan

  **Documentation**

  This API path allows you to retrieve details about the corporate treasury plan of the bank. It consolidates and presents summary transaction details to provide an up-to-date and accurate view of the overall treasury position at a given time. Additionally, it determines the different interest and exchange rates applied to various products and services offered by the bank.

  **Limitations**

  GET: A suitable name for the path '/CorporateTreasury/{corporatetreasuryid}/Retrieve' that follows REST best practices could be:

GET /corporate-treasury/{corporatetreasuryid}

This naming convention is more aligned with RESTful principles, using verbs such as GET to indicate the action to be performed on the resource, followed by a clear and concise identifier for the specific corporate treasury entity being retrieved.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateTreasury/{corporatetreasuryid}/Liquidity/{liquidityid}/Capture</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank CaBQ Capture transactions feeding into liquidity analysis

  **Documentation**

  This API path allows you to update existing liquidity capture transactions within the Corporate Treasury service domain. It helps in consolidating and presenting transaction details to provide an up-to-date overview of the bank's treasury position. Additionally, it manages different interest and exchange rates for various bank products and services. By updating these capture transactions, it aids in analyzing the bank's liquidity effectively.

  **Limitations**

  PUT: In order to follow REST best practices, the path should be named in a way that reflects its purpose and follows a hierarchical structure. Based on the given information, a suitable name for the path could be:

/corporate-treasury/{corporate-treasury-id}/liquidity/{liquidity-id}/capture

In this path, the elements are presented in a clear and organized manner with all lowercase letters and hyphens used as separators. Additionally, the resource names are in plural form and

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/Liquidity/{liquidityid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReBQ Retrieve liquidity analysis details

  **Documentation**

  This API path allows users to retrieve liquidity analysis details related to the Corporate Treasury area of a bank. It consolidates transaction information to provide an up-to-date and accurate overview of the bank's overall treasury position. Additionally, it helps determine the various interest and exchange rates applicable to different banking products and services. By accessing this API path, users can obtain essential information to manage liquidity effectively and make informed financial decisions.

  **Limitations**

  GET: The name of the path should be:
'/corporate-treasury/{corporatetreasuryid}/liquidity/{liquidityid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/TacticalFunding/{tacticalfundingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReBQ Retrieve tactical funding details

  **Documentation**

  This API path allows users to retrieve information about tactical funding details within the Corporate Treasury service domain of a bank. The service consolidates and presents summary transaction details to provide an up-to-date and accurate view of the bank's overall treasury position. It also determines the interest and exchange rates applied to various products and services offered by the bank. Users can use this API to access specific details related to tactical funding within the bank's treasury operations.

  **Limitations**

  GET: The name of the path `/CorporateTreasury/{corporatetreasuryid}/TacticalFunding/{tacticalfundingid}/Retrieve` following REST best practices could be:

`GET /corporate-treasury/{corporatetreasuryId}/tactical-funding/{tacticalfundingId}`

In this path name:

- `/corporate-treasury`: Represents the resource for corporate treasury.
- `{corporatetreasuryId}`: Represents the specific ID for

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateTreasury/{corporatetreasuryid}/StrategicFunding/{strategicfundingid}/Capture</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank CaBQ Capture details of large strategic transactions

  **Documentation**

  This API path allows users to update details of large strategic transactions within the Corporate Treasury service domain. It helps in consolidating and presenting transaction information to provide an accurate view of the bank's overall treasury position. Additionally, it is responsible for setting different interest and exchange rates for various products and services offered by the bank. By capturing details of these strategic transactions, the API helps in maintaining an up-to-date and precise record of the bank's financial activities.

  **Limitations**

  PUT: The RESTful path should be named as follows:
/CorporateTreasury/{corporatetreasuryid}/StrategicFunding/{strategicfundingid}/Capture

This path follows REST best practices by using resource names (CorporateTreasury and StrategicFunding) to represent the entities being accessed and using HTTP verbs (such as POST, PUT, GET, DELETE) appropriately. The use of nouns in the path and the specific resource IDs in curly braces make the path clear, descriptive, and

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/StrategicFunding/{strategicfundingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReBQ Retrieve strategic funding details

  **Documentation**

  This API path allows you to retrieve strategic funding details related to corporate treasury. By making a GET request to this path with the appropriate corporate treasury ID and strategic funding ID, you can access information about the summary transaction details that help create an up-to-date and accurate overview of the bank's overall treasury position. Additionally, this API helps in determining the specific interest and exchange rates that are applied to different products and services offered by the bank.

  **Limitations**

  GET: The appropriate name for the path would likely be something like this:

GET /corporate-treasury/{corporatetreasuryid}/strategic-funding/{strategicfundingid}

Following REST best practices usually involves using lowercase letters in the path names and separating words with hyphens for better readability and maintainability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateTreasury/{corporatetreasuryid}/Securitization/{securitizationid}/Update</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank UpBQ Update securitization tranche and task details

  **Documentation**

  This API path allows you to update the details of a specific securitization transaction within the Corporate Treasury service domain of a bank. By making a PUT request to this endpoint with the appropriate parameters, you can modify the information related to a particular securitization transaction. This action helps maintain an up-to-date and accurate view of the bank's overall treasury position by ensuring that the details of securitization transactions are correctly recorded and managed.

  **Limitations**

  PUT: The RESTful path "/CorporateTreasury/{corporatetreasuryid}/Securitizations/{securitizationid}" would represent a resource for updating a specific securitization associated with a corporate treasury entity.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/Securitization/{securitizationid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReBQ Retrieve securitization tranche and task related details

  **Documentation**

  This BIAN API path allows you to retrieve information related to securitization tranches and tasks within the Corporate Treasury service domain of a bank. It helps consolidate and present transaction details to provide an up-to-date and accurate view of the bank's overall treasury position. Additionally, it determines the various interest and exchange rates applied to different bank products and services. By using this API, you can access specific details about securitization transactions to help manage the bank's treasury effectively.

  **Limitations**

  GET: Following REST best practices, the name of the path should represent a resource and an action in a clear and consistent manner. For the given path, a suggestion for a more RESTful name could be:

'/corporate-treasury/{corporatetreasuryid}/securitizations/{securitizationid}'

This path reflects the hierarchy of resources (corporate treasury and securitizations) and the specific resource identified by IDs. The HTTP method used to retrieve the resource would

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateTreasury/{corporatetreasuryid}/BankRates/{bankratesid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the consolidation and presentation of summary transaction details in order to assemble a timely and accurate view of the overall treasury position of the Bank at any one time. It is also responsible for determining the different interest and exchange rates applied to different products and services within the bank ReBQ Retrieve bank rate table and details

  **Documentation**

  This API path allows you to retrieve information about bank rates from the Corporate Treasury service domain. It helps in consolidating and presenting transaction details to provide an up-to-date and accurate view of the bank's overall treasury position. It also helps in determining the various interest and exchange rates that are applied to different products and services offered by the bank.

  **Limitations**

  GET: A suitable name for this RESTful path could be:

GET /corporate-treasury/{corporatetreasuryid}/bank-rates/{bankratesid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
