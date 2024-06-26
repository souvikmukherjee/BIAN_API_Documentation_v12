<h1 style='color:red;'>FinancialInstrumentReferenceDataManagement</h1>

**BIAN Documentation:** [FinancialInstrumentReferenceDataManagement v12](https://app.swaggerhub.com/apis/BIAN-3/FinancialInstrumentReferenceDataManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Control</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Control Financial Instrument Directory Entry

  **Documentation**

  This API path allows you to update an existing financial instrument reference data entry in the financial instrument directory. By making a PUT request to this path with the specified financialinstrumentreferencedatamanagementid, you can modify or update the details and information related to a particular financial instrument in the directory. This API helps in managing and keeping the financial instrument reference data up to date.

  **Limitations**

  PUT: The name of the path should be: `/financial-instrument-reference-data-management/{financialInstrumentReferenceDataManagementId}/control` 

According to REST best practices:
- Use lowercase letters
- Use hyphens to separate words
- Avoid using abbreviations if possible

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Financial Instrument Directory Entry

  **Documentation**

  This BIAN API path allows you to update an existing financial instrument reference data entry in the Financial Instrument Reference Data Management directory. By making a PUT request to this path with the appropriate financial instrument reference data management ID, you can execute the update operation on the specific entry within the directory.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/execute

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Financial Instrument Directory Entry

  **Documentation**

  This API path allows you to retrieve information about a specific financial instrument reference data entry in the Financial Instrument Reference Data Management directory. By accessing this path with a GET request and providing the appropriate financialinstrumentreferencedatamanagementid parameter, you can receive details about that particular entry in the directory. This can be useful for accessing and managing information related to financial instruments within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should not include verbs like "Notify" as it indicates an action. The path should focus on the resource being accessed, in this case, the Financial Instrument Reference Data Management. Therefore, a more appropriate path name could be '/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Financial Instrument Directory Entry

  **Documentation**

  This API path `/FinancialInstrumentReferenceDataManagement/Register` allows users to create a new entry in the financial instrument reference data directory. In simpler terms, it is a way to input information about a financial instrument into a system that keeps track of such data. By using this API, users can register new financial instruments and their related information for easy reference and management.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be '/financial-instrument-reference-data-management/register'. It should be in lowercase letters and use hyphens to separate words for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Financial Instrument Directory Entry

  **Documentation**

  This BIAN API path allows you to update an existing financial instrument reference data entry in the directory managed by the Financial Instrument Reference Data Management service domain. By using this path, you can modify information related to a specific financial instrument within the directory.

  **Limitations**

  PUT: The name of the path should be:

/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/request

This path follows REST best practices by using lowercase letters, separating words with hyphens, and including only nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Financial Instrument Directory Entry

  **Documentation**

  This API path allows you to retrieve information about a specific financial instrument from a directory maintained by the Financial Instrument Reference Data Management service domain. By providing the ID of the financial instrument reference data management entry, you can access details and data related to that financial instrument. This API helps in managing and accessing reference data for financial instruments within a financial system.

  **Limitations**

  GET: A more restful and descriptive name for this path could be:

/financial-instrument-reference-data/{financial-instrument-reference-data-id} 

This path follows the RESTful convention of using lowercase letters and hyphens to separate words. It also clearly indicates that this endpoint is for retrieving financial instrument reference data.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Financial Instrument Directory Entry

  **Documentation**

  This API path allows a user to update an existing financial instrument reference data entry in the Financial Instrument Reference Data Management directory. By sending a PUT request to this path with the appropriate data, users can make changes or updates to the information stored for a specific financial instrument identifier within the directory.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/{debtinstrumentid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Debt Instrument property

  **Documentation**

  This API path allows you to update a specific debt instrument's "Execute" property within a financial instrument reference data management system. By making a PUT request to this endpoint with the appropriate IDs, you can modify the execution details associated with a particular debt instrument.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}/debt-instrument/{debtinstrumentid}/execute

This naming convention follows the guidelines for using lowercase letters, using hyphens to separate words, and using plural nouns for collections wherever applicable.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Equity Instrument property

  **Documentation**

  This API path allows you to update the execution information of a specific equity instrument within the financial instrument reference data management system. By making a PUT request to this endpoint with the relevant IDs, you can modify the details related to the execution of the equity instrument. This API helps manage and keep track of important data associated with financial instruments, specifically in relation to executing trades or transactions involving equity instruments.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be '/financial-instruments/{financialinstrumentreferencedatamanagementid}/equity-instruments/{equityinstrumentid}/execute'. 

This path follows the guidelines for using lowercase letters, using hyphens to separate words, and focusing on resource naming rather than actions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/{futuresinstrumentid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Futures Instrument property

  **Documentation**

  This BIAN API path allows you to update the "Execute Futures Instrument" property of a specific financial instrument reference data entry within the Financial Instrument Reference Data Management service domain. By providing the relevant IDs for the financial instrument reference data and the futures instrument, you can modify the execution status or other properties associated with that particular futures instrument. This API helps in managing and keeping track of data related to futures instruments within the financial services industry.

  **Limitations**

  PUT: Based on REST best practices, a more suitable name for the path you provided could be:
'/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/futures-instrument/{futures-instrument-id}/execute'. 

In this updated version of the path:
- Path segments are in lowercase to improve readability.
- Words are separated by dashes for better clarity.
- Path parameters are represented within curly braces and in a more readable format.
- The verb "Execute" has been removed

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/{optioninstrumentid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Option Instrument property

  **Documentation**

  This BIAN API path allows you to update the Execute Option Instrument property of a specific financial instrument reference data within the Financial Instrument Reference Data Management service domain. You can make changes to this property using a PUT request to the designated resource endpoint identified by the financial instrument reference data ID and the option instrument ID specified in the path.

  **Limitations**

  PUT: Based on REST best practices, the naming of the path should be as follows:

/financial-instrument-reference-data-management/{financial_instrument_reference_data_management_id}/option-instrument/{option_instrument_id}/execute

In this format, the path uses lowercase letters, hyphens to separate words, and parameter names in brackets to indicate dynamic elements.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/{warrantinstrumentid}/Execute</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Execute Warrant Instrument property

  **Documentation**

  This API path allows you to update the "Execute" property of a specific warrant instrument within the financial instrument reference data managed by the Financial Instrument Reference Data Management service domain. By making a PUT request to this path with the appropriate identifiers for the financial instrument reference data management and the warrant instrument, you can modify the execution status or other relevant information associated with that particular warrant instrument.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for this path could be:
'/financial-instruments/{financialinstrumentId}/warrants/{warrantId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/{debtinstrumentid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Debt Instrument property

  **Documentation**

  This API path is used to retrieve information about the "Notify Debt Instrument" property for a specific financial instrument reference data managed within the Financial Instrument Reference Data Management service domain. It allows users to access details related to debt instruments, such as notifications or alerts associated with the financial instruments.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/financial-instrument-reference-data-management/{financialInstrumentReferenceDataManagementId}/debt-instrument/{debtInstrumentId}/notify` 

In this format:
- Use lowercase letters
- Separate words with hyphens instead of underscores
- Use plural nouns for collections
- Use lowercase for query parameters

This naming convention follows RESTful standards and improves the readability and consistency of the API endpoints.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Equity Instrument property

  **Documentation**

  This API path allows you to retrieve information about a specific equity instrument's Notify property within the financial instrument reference data management directory. You can specify the financial instrument reference data management ID and the equity instrument ID to access details related to the Notify property associated with that particular equity instrument.

  **Limitations**

  GET: A suitable name for the path '/FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Notify' that aligns with REST best practices might be something like:

'/reference-data/{financialinstrumentreferencedatamanagementid}/equity-instrument/{equityinstrumentid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/{futuresinstrumentid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Futures Instrument property

  **Documentation**

  This API path allows you to retrieve information about the Notify property of a specific futures instrument within the financial instrument reference data management system. By using the provided IDs for financial instrument reference data management and futures instrument, you can access details related to the notification settings or properties of that specific futures instrument.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

/financial-instrument-reference-data-management/{financial_instrument_reference_data_management_id}/futures-instrument/{futures_instrument_id}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/{optioninstrumentid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Option Instrument property

  **Documentation**

  This BIAN API path allows you to retrieve information about the Notify Option Instrument property within the Financial Instrument Reference Data Management service domain. Essentially, it provides access to data related to notifying an option instrument within financial instruments.

  **Limitations**

  GET: The name of the path could be: 

/financial-instruments/{financialinstrumentreferencedatamanagementid}/options/{optioninstrumentid}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/{warrantinstrumentid}/Notify</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Notify Warrant Instrument property

  **Documentation**

  This API path allows users to retrieve information about the Notify Warrant Instrument property of a specific financial instrument within the Financial Instrument Reference Data Management service domain. By providing the appropriate IDs for the financial instrument reference data management and the warrant instrument, users can access details related to the notification settings or status of the warrant instrument. This can be useful for managing and tracking financial instruments within a system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}/warrant-instrument/{warrantinstrumentid}/notify

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Debt Instrument property

  **Documentation**

  This API path allows users to create a new debt instrument property in the directory of financial instrument reference data managed by the Financial Instrument Reference Data Management service domain. By making a POST request to this endpoint with the necessary information, users can add detailed information about a debt instrument to the reference data directory. This helps in organizing and managing data related to financial instruments effectively within the system.

  **Limitations**

  POST: The name of the path should be:

'/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/debt-instrument/register'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Equity Instrument property

  **Documentation**

  This API path allows you to create a new resource for registering equity instrument properties within the Financial Instrument Reference Data Management service domain. It enables users to add details related to equity instruments such as stocks or shares into the directory of financial instrument reference data.

  **Limitations**

  POST: A suitable RESTful name for that path could be:

'/financial-instruments/{financial-instrument-id}/equity-instruments/register'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Futures Instrument property

  **Documentation**

  This API path allows users to create a new resource within the Financial Instrument Reference Data Management service domain specifically for registering future instrument properties. Essentially, users can input data related to financial instruments and specifically focus on properties related to future instruments. This API helps in managing and organizing reference data for financial instruments, which can be useful for various financial activities and processes.

  **Limitations**

  POST: The name of the path should be:

```
/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/futures-instrument
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Option Instrument property

  **Documentation**

  This BIAN API path allows you to create a new resource in the directory of financial instrument reference data for registering an Option Instrument property. In simple terms, it allows you to add information related to an Option Instrument to the database where details about various financial instruments are stored.

  **Limitations**

  POST: Following REST best practices, the path could be named as:

'/financial-instruments/{financial-instrument-id}/options/register' 

This naming convention ensures clarity, consistency, and readability in the API design.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/Register</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Register Warrant Instrument property

  **Documentation**

  This API path allows you to create a new resource for registering a property of a warrant instrument in the directory of financial instrument reference data managed by the Financial Instrument Reference Data Management Service Domain. By making a POST request to this endpoint with the appropriate data, you can add new information related to warrant instruments to the reference data directory.

  **Limitations**

  POST: The name of the path should be:

/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/warrant-instrument/register

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/{debtinstrumentid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Debt Instrument property

  **Documentation**

  This API path allows you to update an existing debt instrument property within the financial instrument reference data management system. Specifically, it pertains to a directory that stores information related to financial instruments, such as debt instruments. By using a PUT request on this path, you can update data related to a specific debt instrument within the system.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the given path could be:

'/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}/debt-instrument/{debtinstrumentid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Equity Instrument property

  **Documentation**

  This API path allows users to update a specific property of an equity instrument within the financial instrument reference data management system. The path specifies the ID of the financial instrument reference data management resource and the ID of the equity instrument that needs to be updated. By sending a PUT request to this path, users can modify the information related to the specified equity instrument property in the financial instrument reference data system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

/financial-instruments/{financial-instrument-id}/equity-instruments/{equity-instrument-id}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/{futuresinstrumentid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Futures Instrument property

  **Documentation**

  This BIAN API path allows you to update an existing financial instrument reference data related to a futures instrument request. It is part of a service domain that manages the reference data for financial instruments, specifically focusing on futures instruments. By making a PUT request to this API path with the specified IDs, you can update certain properties or details associated with the futures instrument request within the directory of financial instrument reference data.

  **Limitations**

  PUT: A suitable name for the path could be:

/financial-instruments/{id}/futures-instruments/{id}/requests

This path follows REST best practices by using lowercase letters, separating words with hyphens, and using resource identifiers (id) instead of descriptive names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/{optioninstrumentid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Option Instrument property

  **Documentation**

  This BIAN API path allows you to update the request details related to an option instrument within the Financial Instrument Reference Data Management service domain. By making a PUT request to this path with the appropriate financialinstrumentreferencedatamanagementid and optioninstrumentid, you can update information or properties associated with the option instrument request data. This API is useful for managing and maintaining accurate and up-to-date reference data for financial instruments within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented manner, focusing on nouns that represent the resource being manipulated rather than verbs. 

Therefore, a more suitable name for this path could be:

/financial-instruments/{financial-instrument-id}/options/{option-id}/request

In this updated version, the path clearly defines the main resources involved (financial instruments and options) and follows a consistent naming convention with hyphens separating words for improved readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/{warrantinstrumentid}/Request</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Request Warrant Instrument property

  **Documentation**

  This API path is used to update a specific property related to a warrant instrument within a directory of financial instrument reference data. Specifically, it allows you to make changes or updates to the request associated with the warrant instrument identified by its unique ID within the financial instrument reference data management system.

  **Limitations**

  PUT: A suitable name for the path could be:

/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/warrant-instrument/{warrant-instrument-id}/request

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/{debtinstrumentid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Debt Instrument property

  **Documentation**

  This API path allows users to retrieve specific information about a debt instrument from the directory of financial instrument reference data managed by the Financial Instrument Reference Data Management service domain. Users need to provide the necessary identifiers (financialinstrumentreferencedatamanagementid and debtinstrumentid) to retrieve details about a particular debt instrument. The information retrieved may include various properties and attributes associated with the debt instrument, helping users access relevant data efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path should usually be a noun representing a resource, rather than a verb or action. 

For the given path, a better name could be:
'/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/debt-instrument/{debt-instrument-id}'

This name should reflect the hierarchy and structure of the resources being accessed in a clear and concise manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Equity Instrument property

  **Documentation**

  This API path retrieves information about a specific equity instrument within a directory of financial instrument reference data managed by the Financial Instrument Reference Data Management service domain. The path specifies the ID of the financial instrument reference data management and the ID of the equity instrument to uniquely identify the resource to retrieve. By making a GET request to this path, users can access details and properties associated with the specified equity instrument.

  **Limitations**

  GET: The name of the path should be:

/financial-instruments/{financialInstrumentReferenceDataManagementId}/equity-instruments/{equityInstrumentId}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/{futuresinstrumentid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Futures Instrument property

  **Documentation**

  This BIAN API path allows users to retrieve information about a specific futures instrument property from the financial instrument reference data directory. Users can access details about a particular futures instrument identified by its unique ID within the reference data management system. This API is helpful for accessing essential data related to financial instruments for various purposes like analysis, reporting, or decision-making.

  **Limitations**

  GET: The name of the path should be something like:

`/financial-instruments/{financialInstrumentId}/futures/{futuresInstrumentId}`

This path follows REST best practices by using lowercase letters, separate words with hyphens, and providing a clear indication of the resources being accessed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/{optioninstrumentid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Option Instrument property

  **Documentation**

  This API path allows you to retrieve information about a specific option instrument property from the directory of financial instrument reference data within the Financial Instrument Reference Data Management service domain. By making a GET request to this path with the appropriate identifiers, you can access details about a particular option instrument, allowing you to gather valuable reference data for financial instruments.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/financial-instrument-reference-data-management/{financialinstrumentreferencedatamanagementid}/option-instrument/{optioninstrumentid}/retrieve.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/{warrantinstrumentid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Retrieve Warrant Instrument property

  **Documentation**

  This BIAN API path allows users to retrieve information about a specific property of a warrant instrument within the Financial Instrument Reference Data Management directory. Users can access details related to a particular warrant instrument identified by the warrantinstrumentid within the specified financialinstrumentreferencedatamanagementid.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/financial-instrument-reference-data-management/{financial-instrument-reference-data-management-id}/warrant-instrument/{warrant-instrument-id}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/DebtInstrument/{debtinstrumentid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Debt Instrument property

  **Documentation**

  This API path allows you to update a specific property of a debt instrument within a directory of financial instrument reference data managed by the Financial Instrument Reference Data Management service domain. By sending a PUT request to this path with the necessary data, you can modify details related to a debt instrument to keep the reference data accurate and up to date.

  **Limitations**

  PUT: A possible name for this path could be: 

`PUT /FinancialInstruments/{financialinstrumentId}/DebtInstruments/{debtinstrumentId}` 

By using the HTTP method `PUT` and structuring the path to clearly represent the resources being updated, this naming adheres to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/EquityInstrument/{equityinstrumentid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Equity Instrument property

  **Documentation**

  This API path allows users to update specific properties of an existing equity instrument within the financial instrument reference data management system. By sending a PUT request to this path, users can modify the information related to the selected equity instrument, such as its attributes or details. This API facilitates the management and maintenance of financial instrument reference data, specifically focusing on updating equity instrument properties.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/financial-instruments/{financial-instrument-id}/equity-instruments/{equity-instrument-id} 

This path represents a more resource-oriented approach using all lowercase letters and hyphens to separate words, as recommended in RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/FuturesInstrument/{futuresinstrumentid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Futures Instrument property

  **Documentation**

  This API path is used to update the properties of a futures instrument within the Financial Instrument Reference Data Management service domain. Specifically, it allows for updating the properties of a specific futures instrument identified by its ID within the overall financial instrument reference data management system. By sending a PUT request to this path with the appropriate information, users can modify or update the details and properties associated with a particular futures instrument in the system.

  **Limitations**

  PUT: Based on REST best practices, the path should be named as follows:

/financial-instrument-reference-data-management/{financialInstrumentReferenceDataManagementId}/futures-instrument/{futuresInstrumentId}/update

In RESTful naming conventions:
- Use lowercase letters and hyphens to separate words in the path
- Avoid using CamelCase or underscores
- Resource names should be plural if they represent a collection

This naming convention follows best practices and makes the path more readable and standardized.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/OptionInstrument/{optioninstrumentid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Option Instrument property

  **Documentation**

  This BIAN API path is used to update a specific property of an option instrument within the financial instrument reference data management system. Specifically, it allows you to modify or update a particular option instrument identified by the `optioninstrumentid` within the larger financial instrument reference data management system identified by `financialinstrumentreferencedatamanagementid`. This operation is carried out using the HTTP method PUT, which means it updates the existing resource with the new data provided in the request.

  **Limitations**

  PUT: A suitable name for the path could be:

```
/financial-instrument-reference-data-management/{id}/option-instrument/{id}/update
``` 

This path follows REST best practices by using lowercase letters, using hyphens to separate words, and clearly indicating the resource hierarchy and action being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialInstrumentReferenceDataManagement/{financialinstrumentreferencedatamanagementid}/WarrantInstrument/{warrantinstrumentid}/Update</span></summary>

  **Description**

  This Service Domain maintains a directory of financial instrument reference data Update Warrant Instrument property

  **Documentation**

  This API path allows you to update the property of a specific warrant instrument within the directory of financial instrument reference data. You can update details or properties related to a specific warrant instrument by making a PUT request to this endpoint with the appropriate data.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

PUT /financial-instruments/{financialInstrumentId}/warrants/{warrantId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
