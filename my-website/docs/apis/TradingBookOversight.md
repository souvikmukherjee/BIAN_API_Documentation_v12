<h1 style='color:red;'>TradingBookOversight</h1>

**BIAN Documentation:** [TradingBookOversight v12](https://app.swaggerhub.com/apis/BIAN-3/TradingBookOversight/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/Control</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Control Trading Position Management Plan

  **Documentation**

  This API endpoint is used to update and manage the market risk control trading position management plan for a specific trading book oversight identified by tradingbookoversightid. This entails making changes to the plan that oversees the bank's trading book, which keeps track of frequently traded securities held by the bank. The purpose is to effectively control market risks associated with the bank's trading activities.

  **Limitations**

  PUT: Following REST best practices, the name of the path /TradingBookOversight/{tradingbookoversightid}/Control could be simplified to the following:
   
/trading-book-oversights/{tradingbookoversightid}/controls

</details>

<details open>
  <summary><span style='color:red;'>POST: /TradingBookOversight/Create</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Create Trading Position Management Plan

  **Documentation**

  This API path allows the user to create a new Trading Position Management Plan within the Trading Book Oversight service domain of a bank. This plan helps in managing the bank's market risk by keeping track of frequently traded securities in the bank's trading book.

  **Limitations**

  POST: Following RESTful best practices, the name of the path '/TradingBookOversight/Create' should be 'POST /trading-book-oversights'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/Exchange</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Exchange Trading Position Management Plan

  **Documentation**

  This API path allows you to update the Exchange Trading Position Management Plan for a specific trading book oversight identified by tradingbookoversightid. It is used to manage the market risk associated with the bank's trading book, which contains information about frequently traded securities held by the bank. By updating this plan, the bank can ensure proper monitoring and control of its trading activities to mitigate risks effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/trading-book-oversights/{tradingbookoversightid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/Grant</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Grant Trading Position Management Plan

  **Documentation**

  This API path allows you to update an existing resource related to the oversight of the bank's trading book. Specifically, it is used to grant approval for the trading position management plan, which is crucial for managing market risk associated with the securities held in the trading book. By using this API, you can make changes or updates to the plan to ensure effective risk management within the bank's trading activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/trading-book-oversights/{tradingbookoversightid}/grants`

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/Notify</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Notify Trading Position Management Plan

  **Documentation**

  This API path allows you to retrieve information about the Trading Book Oversight service domain. Specifically, it provides details about managing the bank's market risk and notifying the Trading Position Management Plan for the trading book, which is essentially a ledger that records details of frequently traded securities held by the bank.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/TradingBookOversights/{tradingbookoversightid}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/Request</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Request Trading Position Management Plan

  **Documentation**

  This API path allows you to request an update to the Trading Position Management Plan within the Trading Book Oversight service domain. This service oversees the bank's trading book to manage market risk associated with frequently traded securities held by the bank. By sending a PUT request to this path with the specific trading book oversight ID, you can update the Trading Position Management Plan within the system.

  **Limitations**

  PUT: The appropriate path name following REST best practices would be:

'/trading-book-oversights/{tradingbookoversightid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/Retrieve</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Retrieve Trading Position Management Plan

  **Documentation**

  This specific BIAN API path allows you to retrieve the Trading Position Management Plan related to the oversight of the bank's trading book. It provides information about how the bank manages market risk associated with frequently traded securities held in the trading book account ledger.

  **Limitations**

  GET: The name of the path should be:

```
/TradingBookOversight/{tradingbookoversightid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/Update</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Update Trading Position Management Plan

  **Documentation**

  This API path allows you to update the Trading Position Management Plan within the Trading Book Oversight service domain for a specific trading book oversight ID. It helps manage the bank's market risk by allowing modifications to the plan that controls how trading positions are managed for securities held by the bank.

  **Limitations**

  PUT: The RESTful path should be named as:

'/trading-book-oversights/{tradingbookoversightid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Exchange</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Exchange Trading Book Analysis and Reporting Duty

  **Documentation**

  This API path allows you to update or modify the exchange trading book analysis and reporting information related to a specific trading book oversight ID within the bank's system. It is used to manage the bank's market risk by overseeing and reporting on the details of frequently traded securities held by the bank.

  **Limitations**

  PUT: The name of the path should be:  
/tradingbookoversight/{tradingbookoversightid}/tradingbookanalysisandreporting/{tradingbookanalysisandreportingid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Exchange</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Exchange Trading Book Risk Mitigation Duty

  **Documentation**

  This API path allows you to update and manage the exchange trading book risk mitigation duty within the Trading Book Oversight service domain. It is specifically focused on managing market risks associated with the bank's trading book, which keeps track of frequently traded securities. By utilizing this API, you can make necessary changes to how the bank handles risk mitigation duties related to its trading book, helping to ensure financial stability and compliance.

  **Limitations**

  PUT: For REST best practices, the name of the path should be:

'/trading-book-oversights/{tradingbookoversightid}/risk-mitigations/{tradingbookriskmitigationid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Grant</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Grant Trading Book Analysis and Reporting Duty

  **Documentation**

  This API path allows for updating (PUT method) the permission or duty to perform trading book analysis and reporting within the Trading Book Oversight service domain for a specific trading book oversight ID and trading book analysis and reporting ID. In simple terms, it manages the authorization for individuals or systems to analyze and report on the activity within a trading book, which helps the bank manage market risk related to frequently traded securities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/trading-book-oversight/{tradingbookoversightid}/trading-book-analysis-and-reporting/{tradingbookanalysisandreportingid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Grant</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Grant Trading Book Risk Mitigation Duty

  **Documentation**

  This API path allows you to update an existing resource related to overseeing a bank's trading book to manage market risk. Specifically, it grants the authority to implement trading book risk mitigation duties within this oversight process. This could involve tasks such as identifying and addressing potential risks associated with frequently traded securities held by the bank, ultimately improving risk management practices within the trading book domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Grant
```

This path structure follows the convention of using nouns to represent resources and using resource identifiers to uniquely identify specific instances of those resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Notify</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Notify Trading Book Analysis and Reporting Duty

  **Documentation**

  This API path allows you to retrieve information related to notifying the Trading Book Analysis and Reporting Duty within the Trading Book Oversight service domain of a bank. This service domain is responsible for overseeing the bank's trading book, which contains details of frequently traded securities. By accessing this API path, you can gather information pertinent to managing the bank's market risk in relation to the trading book analysis and reporting duties.

  **Limitations**

  GET: The name of the path following REST best practices could be:

`/trading-book-oversights/{tradingbookoversightid}/trading-book-analysis-and-reportings/{tradingbookanalysisandreportingid}/notify`

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Notify</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Notify Trading Book Risk Mitigation Duty

  **Documentation**

  This BIAN API path allows you to retrieve information related to notifying trading book risk mitigation duty within the Trading Book Oversight service domain of a bank. It focuses on managing the market risk associated with the bank's trading book, which contains details of frequently traded securities held by the bank. By using this API, you can access information or data related to risk mitigation activities within the trading book oversight function.

  **Limitations**

  GET: The name of the path should be:  
`/trading-book-oversights/{tradingbookoversightid}/trading-book-risk-mitigations/{tradingbookriskmitigationid}/notify`  

According to REST best practices:  
- Use lowercase letters for path segments  
- Use hyphens to separate words in the path segments  
- Avoid using underscores or camel case  
- Ensure the path is descriptive and represents the hierarchical relationship of the resources

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Request</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Request Trading Book Analysis and Reporting Duty

  **Documentation**

  This API path is used to update an existing resource related to trading book oversight. It specifically relates to requesting trading book analysis and reporting duty within the context of managing the bank's market risk. By making a PUT request to this endpoint with the necessary IDs, users can trigger the process of analyzing and reporting on the trading book to ensure proper risk management in the bank's securities trading activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/trading-book-oversight/{tradingbookoversightid}/trading-book-analysis-and-reporting/{tradingbookanalysisandreportingid}/request' 

In RESTful conventions, paths should use lowercase letters, separate words with hyphens, and be descriptive of the resources they represent.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Request</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Request Trading Book Risk Mitigation Duty

  **Documentation**

  This API path allows you to update an existing request for trading book risk mitigation duty within the trading book oversight domain. It is used to manage the market risk within the bank's trading book, which contains details of frequently traded securities. By making a PUT request to this path, you can update and potentially enhance the risk mitigation strategies related to the bank's trading book.

  **Limitations**

  PUT: Based on REST best practices, a more suitable name for the path you mentioned could be:

/ trading-books / {tradingbookoversightid} / risk-mitigations / {tradingbookriskmitigationid} / requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Retrieve</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Retrieve Trading Book Analysis and Reporting Duty

  **Documentation**

  This BIAN API path allows you to retrieve information related to the analysis and reporting duties of trading book oversight within a bank. It focuses on managing market risk by providing access to details about frequently traded securities held by the bank. This API is designed to help users access specific information about trading book oversight to ensure effective management of market risks.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/trading-book-oversights/{tradingbookoversightid}/analysis-reports/{tradingbookanalysisandreportingid}`

This path is made up of lowercase words and uses hyphens to separate them. It is clear, readable, and follows RESTful conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Retrieve</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Retrieve Trading Book Risk Mitigation Duty

  **Documentation**

  This API path allows you to retrieve information related to a specific trading book risk mitigation duty within the Trading Book Oversight service domain. It is used to manage and oversee the bank's trading book, which records details of frequently traded securities to mitigate market risk. By accessing this path, you can retrieve specific details or data regarding the risk mitigation activities associated with a trading book oversight ID and trading book risk mitigation ID.

  **Limitations**

  GET: The name of the path should be:  
`GET /tradingbookoversight/{tradingbookoversightid}/tradingbookriskmitigation/{tradingbookriskmitigationid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Update</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Update Trading Book Analysis and Reporting Duty

  **Documentation**

  This API path allows you to update the analysis and reporting duty within the Trading Book Oversight service domain for a specific trading book oversight ID and trading book analysis and reporting ID. It is used to manage the bank's market risk by updating information related to the frequently traded securities held by the bank in the trading book.

  **Limitations**

  PUT: A possible RESTful naming convention for the path '/TradingBookOversight/{tradingbookoversightid}/TradingBookAnalysisandReporting/{tradingbookanalysisandreportingid}/Update' could be:

PATCH /trading-book-oversight/{tradingbookoversightid}/trading-book-analysis-reporting/{tradingbookanalysisandreportingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TradingBookOversight/{tradingbookoversightid}/TradingBookRiskMitigation/{tradingbookriskmitigationid}/Update</span></summary>

  **Description**

  This Service Domain oversees the bank's trading book (a type of account ledger that records details of frequently traded securities held by the bank) to manage the banks market risk Update Trading Book Risk Mitigation Duty

  **Documentation**

  This API path allows you to update the risk mitigation duty associated with a specific trading book oversight within a bank's trading book. It helps manage market risk by enabling the modification of risk mitigation measures for specific trading activities or securities held by the bank.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured using plural nouns and should focus on the resource being manipulated rather than the action being performed. 

One possible name for the path could be:

```
/trading-book-oversights/{tradingbookoversightid}/trading-book-risk-mitigations/{tradingbookriskmitigationid}
``` 

In this way, the path clearly identifies the resources being interacted with / retrieved '/trading-book-oversights

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
