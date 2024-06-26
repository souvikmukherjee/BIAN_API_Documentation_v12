<h1 style='color:red;'>PublicOffering</h1>

**BIAN Documentation:** [PublicOffering v12](https://app.swaggerhub.com/apis/BIAN-3/PublicOffering/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/Control</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Control Public Offering Facility

  **Documentation**

  This API path allows you to update an existing public offering control facility by providing support for various financial, accounting, and regulatory tasks related to companies going public or raising capital through the issuance of publicly traded securities. The update operation can involve making changes or modifications to the control facility to ensure it aligns with the latest information or requirements.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
/PublicOfferings/{publicofferingid}/Controls
```

Here are the modifications made to adhere to REST conventions:
1. The resource name "PublicOfferings" is pluralized to indicate a collection of PublicOffering resources.
2. The path parameter "publicofferingid" within curly braces describes the specific PublicOffering resource being referred to.
3. The endpoint name is in lowercase and plural form to represent

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Offering Facility

  **Documentation**

  This BIAN API path is used to update an existing resource related to a public offering on a stock exchange. It involves various financial, accounting, and regulatory activities that help companies that are going public or raising additional capital through the issuance of publicly traded securities. The API enables users to access and modify information related to the exchange public offering facility.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
/public-offerings/{publicofferingid}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Offering Facility

  **Documentation**

  This BIAN API path allows users to update an existing resource related to executing a public offering for a company. It supports various financial, accounting, and regulatory actions involved in advising and supporting companies that are going public or raising additional capital by issuing publicly traded securities. The specific operation in this case involves executing a public offering facility identified by a unique public offering ID.

  **Limitations**

  PUT: The name of the path should be `/public-offerings/{publicofferingid}/execute` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Offering Facility

  **Documentation**

  This BIAN API path allows users to create a new resource for initiating a public offering facility. It supports various financial, accounting, and regulatory actions required for companies looking to go public or raise capital by issuing publicly traded securities. The API provides practical support and advice to facilitate the process of initiating a public offering.

  **Limitations**

  POST: If the path '/PublicOffering/Initiate' followed all REST best practices, it should be named according to the action it performs. A suggested RESTful name for this path could be '/public-offerings'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Offering Facility

  **Documentation**

  This API path, /PublicOffering/{publicofferingid}/Notify, is used to retrieve information about a specific public offering. It supports various financial, accounting, and regulatory processes involved in helping companies go public or raise capital through the issuance of publicly traded securities. By providing the publicofferingid, the API will notify the Public Offering Facility and retrieve relevant details related to the specific public offering identified by that ID.

  **Limitations**

  GET: The name of the path should be:

```
/PublicOfferings/{publicofferingId}/notifications
``` 

This path follows REST best practices by using plural nouns for resources, utilizing lowercase letters, separating words with hyphens for better readability, and including resource identifiers within curly braces.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Offering Facility

  **Documentation**

  This API path allows you to update an existing resource related to a public offering facility identified by its unique ID. It supports various financial, accounting, and regulatory actions necessary for advising and supporting companies that are going public or raising additional capital through issuing publicly traded securities.

  **Limitations**

  PUT: The name of the path should be:
'/public-offerings/{publicofferingid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Offering Facility

  **Documentation**

  This API path allows users to retrieve information about a specific public offering facility by providing the public offering ID as a parameter. The public offering facility supports financial, accounting, and regulatory actions related to companies going public or raising capital through publicly traded securities. This service provides advice and practical support for companies in these processes.

  **Limitations**

  GET: The name of the path should be: `/public-offering/{publicOfferingId}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Offering Facility

  **Documentation**

  This API path allows you to update an existing public offering facility for a specific public offering identified by its unique ID. It supports various complex financial, accounting, and regulatory actions that are involved in assisting companies as they go public or raise additional capital through the issuance of publicly traded securities. This update function enables adjustments or modifications to be made to the details and settings of the public offering facility for the specified public offering ID.

  **Limitations**

  PUT: The RESTful path `/PublicOfferings/{publicofferingid}` typically represents a specific resource (in this case, a public offering) identified by `publicofferingid`. To update this resource using REST best practices, the path could be named as follows:

`PUT /PublicOfferings/{publicofferingid}`

This path follows the REST convention for updating a specific resource by using the HTTP method `PUT` and specifying the unique identifier (`publicofferingid`) in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This API path is used to update information related to public offerings, specifically focusing on financial assessments and audits during the public placement process for a company going public or raising additional capital through publicly traded securities. The path allows for the exchange of information for these assessments and audits, providing support and advice on complex financial, accounting, and regulatory actions involved in the process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PublicOfferings/{publicofferingId}/FinancialAssessments/{financialAssessmentId}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This BIAN API path is used to update an existing resource related to public offerings. It supports various financial, accounting, and regulatory activities involved in assisting companies that are going public or raising additional capital through publicly traded securities. Specifically, it relates to the exchange part of the process for public placement, initial public offering (IPO), and underwriting fulfillment. This API allows you to make changes or updates to specific details or information within this context.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

'/public-offerings/{publicOffeRingId}/public-placement-ipo-and-underwriting/{publicPlacementIpoAndUnderwritingId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path allows you to update an existing deployment of public placement instrument registration for a specific public offering. The service provides support for various financial, accounting, and regulatory processes involved in assisting companies as they go public or raise additional capital by issuing publicly traded securities on an exchange.

  **Limitations**

  PUT: The name of the path should be:

"/public-offerings/{publicofferingid}/public-placement-instruments/{publicplacementinstrumentregistrationid}/exchanges" 

This path follows REST best practices by using lowercase letters, using hyphens to separate words, and using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows you to update the details of a public placement instrument specification associated with a specific public offering. It supports the process of providing financial, accounting, and regulatory advice and support to companies as they go public or raise additional capital through the issuance of publicly traded securities. By using this API, you can make changes to the information related to the public placement instrument specification fulfillment, ensuring that it aligns with the company's requirements and regulatory guidelines.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be:
/public-offerings/{publicofferingid}/public-placement-instrument-specifications/{publicplacementinstrumentspecificationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement Prospectus Fulfillment

  **Documentation**

  This BIAN API path is used to update an existing resource related to a public offering. Specifically, it deals with activities related to providing advice and support to companies that are going public or raising capital through issuing publicly traded securities. This includes updating information related to the public placement prospectus fulfillment process.

  **Limitations**

  PUT: The name of the path should be:

`/public-offerings/{publicofferingId}/public-placement-prospectuses/{publicPlacementProspectusId}/exchange`

Following REST best practices, the path should be in lowercase letters, use hyphens to separate words, and include resource names in the plural form where appropriate. It is also important to use meaningful and descriptive names for the path segments.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Exchange Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This API path allows you to update and manage information related to a public offering and marketing activities for a company that is going public or raising additional capital through the issuance of publicly traded securities. It supports financial, accounting, and regulatory actions involved in conducting a public placement roadshow and marketing fulfillment. By using this API, you can make necessary updates or changes to the public offering and marketing process for a specific public offering and marketing event.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be as follows:

```
/PublicOfferings/{publicofferingId}/PublicPlacementRoadshows/{publicplacementRoadshowId}/Exchange
``` 

Here are some key reasons for the recommended naming convention:
- Use of lowercase letters for consistency and readability
- Use of plural nouns for collections, such as `PublicOfferings` and `PublicPlacementRoadshows`
- Use of camel case for multi-word identifiers, such as `publicoffering

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This BIAN API path is used to update and execute a financial assessment and audit related to a public offering process. It supports companies that are going public or raising capital through publicly traded securities. By using this API path, financial, accounting, and regulatory actions can be carried out effectively to provide advice and support during the public placement process.

  **Limitations**

  PUT: A possible name for the path could be:

'/public-offerings/{publicofferingid}/public-placement-financial-assessments-and-audits/{publicplacementfinancialassessmentandauditid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This API path is used to update an existing public offering related to executing a Public Placement IPO and Underwriting Fulfillment for a company. It supports various financial, accounting, and regulatory actions needed when a company is going public or raising capital by issuing publicly traded securities. It provides practical support and advice throughout the process of executing public placement, initial public offering (IPO), and underwriting activities.

  **Limitations**

  PUT: A possible name for the path '/PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Execute' following REST best practices could be:

```
/offerings/{offeringId}/placements/{placementId}/execute
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path allows you to update an existing resource related to the execution of public placement instrument registration fulfillment in the context of companies going public or raising capital through publicly traded securities. It supports various financial, accounting, and regulatory actions involved in providing advice and practical support to these companies.

  **Limitations**

  PUT: The name of the path should follow the RESTful convention of using nouns to represent resources. 

A suggested name for this path could be: 
'/public-offerings/{publicofferingid}/public-placement-instrument-registrations/{publicplacementinstrumentregistrationid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows you to update and execute a specific public placement instrument specification within a public offering process. It supports various financial, accounting, and regulatory actions related to companies going public or raising capital through publicly traded securities. You can use this API to fulfill and carry out the details and requirements of a public placement instrument specified for a particular public offering.

  **Limitations**

  PUT: A possible RESTful path name for this endpoint following best practices could be:

```
/offerings/{publicofferingid}/specifications/{publicplacementinstrumentspecificationid}/execute
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement Prospectus Fulfillment

  **Documentation**

  This API path allows you to update an existing resource related to a public offering and the execution of a public placement prospectus fulfillment. It supports financial, accounting, and regulatory actions involved in advising and supporting companies that are going public or raising capital through publicly traded securities. This path specifically enables you to execute the fulfillment process of a public placement prospectus within the context of a public offering.

  **Limitations**

  PUT: The name of the path could be:  
  
'/public-offerings/{publicofferingid}/public-placement-prospectus/{publicplacementprospectusid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Execute</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Execute Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This API path allows users to update an existing resource related to executing a public placement roadshow and marketing fulfillment for a public offering. It supports financial, accounting, and regulatory actions to assist companies in going public or raising capital through publicly traded securities. It provides practical support and advice throughout the process of executing a public placement roadshow and marketing efforts.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementRoadshowsAndMarketing/{publicPlacementRoadshowAndMarketingId}/Execute
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This API path is used to initiate the process of conducting a financial assessment and audit for a company that is preparing to go public or raise additional capital by issuing publicly traded securities. It involves complex financial, accounting, and regulatory activities aimed at providing advice and practical support to the company throughout this process. By making a POST request to this API path with the specific public offering ID, a new resource will be created to kickstart the public placement financial assessment and audit fulfillment for the company in question.

  **Limitations**

  POST: A possible RESTful name for the path '/PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/Initiate' could be:

GET /public-offerings/{publicofferingid}/financial-assessment-and-audit/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This API path allows users to initiate the process of a public offering for a company that wants to go public or raise capital by issuing publicly traded securities. It specifically focuses on initiating the public placement Initial Public Offering (IPO) and underwriting fulfillment activities. This service domain helps with various financial, accounting, and regulatory tasks involved in advising and supporting companies through the process of going public and raising additional capital.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/public-offerings/{publicOfferingId}/public-placements/ipo-and-underwriting/initiate'

In the path name:
- Use lowercase letters for consistency.
- Use plural forms for resources when applicable.
- Separate words with hyphens for better readability.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path allows you to initiate the registration process for public placement instruments as part of a company's public offering. It supports various financial, accounting, and regulatory activities involved in helping companies go public or raise additional capital through publicly traded securities. By making a POST request to this path with the appropriate ID, you can create a new resource to start the process of registering public placement instruments for a public offering.

  **Limitations**

  POST: Based on REST best practices, the name of the path `/PublicOfferings/{publicofferingid}/PublicPlacementInstrumentRegistrations` would be more appropriate. The idea is to use nouns for resources and avoid verbs in the path names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows users to create a new public offering placement instrument specification fulfillment for a specific public offering ID. It supports various financial, accounting, and regulatory activities related to helping companies that are going public or raising capital through publicly traded securities. By initiating this process, users can set up the necessary specifications and details for the public placement instrument fulfillment associated with a public offering.

  **Limitations**

  POST: The name of the path should be "/public-offering/{publicofferingid}/public-placement-instrument-specification/initiate" to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement Prospectus Fulfillment

  **Documentation**

  This API path is used to initiate the process of fulfilling a public placement prospectus for a public offering. It is part of a service domain that assists companies in going public and raising capital through the issuance of publicly traded securities. By making a POST request to this path with a specific public offering ID, a new resource will be created to kickstart the process of fulfilling the public placement prospectus for the offering. This API facilitates various financial, accounting, and regulatory tasks involved in helping companies navigate the complexities of going public and raising additional capital.

  **Limitations**

  POST: The name of the path should be:

`/public-offerings/{publicofferingid}/public-placement-prospectus/initiate`

Following REST best practices, use lowercase letters and hyphens to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/Initiate</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Initiate Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This API path allows users to create a new resource to support companies going public and raising capital through publicly traded securities. Specifically, it helps initiate the process of organizing a public placement roadshow and marketing efforts to promote the company's offering to potential investors.

  **Limitations**

  POST: The name of the path '/PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/Initiate' should be simplified and follow REST best practices by using nouns and avoiding unnecessary hierarchy. A more appropriate name for this path could be:

'/public-offerings/{publicofferingid}/roadshow-marketing/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This API path allows users to retrieve information about a specific Public Placement Financial Assessment and Audit related to a Public Offering. It supports financial, accounting, and regulatory actions involved in helping companies go public or raise capital through publicly traded securities. By using this API, users can access details about the financial assessment and audit fulfillment process for a particular public offering transaction.

  **Limitations**

  GET: The name of the path should be as follows:

'/public-offerings/{publicofferingid}/public-placement-financial-assessments-and-audits/{publicplacementfinancialassessmentandauditid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This API path is used to retrieve information related to public offering services for companies that are going public or raising capital through the issuance of publicly traded securities. Specifically, it provides details about notifying the public placement initial public offering (IPO) and underwriting fulfillment process associated with a specific public offering. This information may include financial, accounting, and regulatory support activities involved in advising and assisting companies with their public offering transactions.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwritings/{publicplacementipoandunderwritingid}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path "GET /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Notify" allows users to retrieve information about a specific public placement instrument registration associated with a public offering. It supports financial, accounting, and regulatory actions involved in assisting companies with going public or raising capital through publicly traded securities. This API specifically focuses on notifying the fulfillment of a public placement instrument registration, providing users with details on the status or progress of that registration process.

  **Limitations**

  GET: The name of the path should be:

'/public-offerings/{publicofferingId}/public-placement-instrument-registrations/{publicPlacementInstrumentRegistrationId}/notify' 

In this naming convention:
- Use lowercase letters
- Use hyphens to separate words
- Use plural nouns for collections
- Use singular nouns for resources
- Use specific and meaningful resource names
- Avoid unnecessary nesting if possible

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement Instrument Specification Fulfillment

  **Documentation**

  This API path retrieves information about notifying the fulfillment of a public placement instrument specification within a public offering process. It is used to support financial, accounting, and regulatory actions for companies that are going public or raising additional capital through the issuance of publicly traded securities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementInstrumentSpecifications/{publicplacementInstrumentSpecificationId}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement Prospectus Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information about the fulfillment of a public placement prospectus related to a specific public offering. It supports tasks such as notifying key stakeholders about the completion or status of the prospectus fulfillment process. This API is part of a service domain that assists companies in going public and raising capital through the issuance of publicly traded securities.

  **Limitations**

  GET: A suitable name for the path in accordance with REST best practices could be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementProspectuses/{publicplacementProspectusId}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Notify</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Notify Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This BIAN API path is used to retrieve information about notifying the fulfillment activities related to a public placement roadshow and marketing campaign as part of a company's public offering process. It supports activities involved in advising and supporting companies as they go public or raise additional capital by issuing publicly traded securities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured in a way that accurately reflects the resource being accessed. It should be descriptive and follow a hierarchical pattern.

A possible name for the path could be:

```
/PublicOfferings/{publicofferingid}/MarketingActivities/{publicplacementroadshowandmarketingid}/Notifications
```

This path name clearly identifies the primary resource being accessed ("/PublicOfferings") along with the associated marketing activity ("MarketingActivities") and the specific activity ID

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This API path is used to update an existing resource related to the financial assessment and audit fulfillment for a public offering of a company. It supports various financial, accounting, and regulatory activities that are required for companies going public or raising additional capital through publicly traded securities. The path allows users to request and update specific details related to the financial assessment and audit process for a public placement within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PublicOfferings/{publicofferingid}/PublicPlacementFinancialAssessments/{publicplacementfinancialassessmentandauditid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This API path is used for updating an existing resource related to public offering services. Specifically, it supports financial, accounting, and regulatory actions for companies looking to go public or raise capital through issuing publicly traded securities. The path allows for requesting public placement in an initial public offering (IPO) and underwriting fulfillment, which are important steps in the process of transitioning to a publicly traded company.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

'/public-offerings/{publicofferingid}/public-placements-ipo-and-underwritings/{publicplacementipoandunderwritingid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path allows you to update an existing request for fulfillment of public placement instrument registration related to a specific public offering. It supports various financial, accounting, and regulatory actions that assist companies in going public or raising capital through the issuance of publicly traded securities. By using this API, you can manage and track the status of requests for registering financial instruments associated with a public offering.

  **Limitations**

  PUT: The name of the path should ideally be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementInstrumentRegistrations/{publicplacementinstrumentregistrationId}/Requests
``` 

This path name follows REST best practices by using all plural nouns for resources and lowercase for resource names. Additionally, it includes the IDs of the specific resources in the path to make it more specific and meaningful.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows you to update an existing request for the fulfillment of a public placement instrument specification within the context of a public offering. It supports various financial, accounting, and regulatory actions associated with advising and supporting companies in going public or raising capital through publicly traded securities. This update request is specifically related to the fulfillment of a public placement instrument specification identified by its ID within a particular public offering transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PublicOfferings/{publicofferingId}/PublicPlacementInstrumentSpecifications/{publicplacementinstrumentSpecificationId}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement Prospectus Fulfillment

  **Documentation**

  This API path allows the user to update an existing resource related to public offering and public placement prospectus fulfillment. It supports financial, accounting, and regulatory actions for companies looking to go public or raise capital through publicly traded securities. By making a PUT request to this path with specific IDs, the user can request and update information related to public placement prospectus fulfillment for a particular public offering.

  **Limitations**

  PUT: The name of the path could be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementProspectuses/{publicplacementprospectusId}/Requests
```

This follows the REST best practices by using plural nouns for resource names, using camelCase for path variables, and keeping the path descriptive and organized.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Request</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Request Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This API path allows users to update an existing resource related to the public offering process. Specifically, it supports actions involved in advising and supporting companies that are preparing to go public or raise additional capital by issuing publicly traded securities. In this case, the API focuses on requesting fulfillment for public placement roadshow and marketing activities within the public offering process.

  **Limitations**

  PUT: A RESTful name for the path '/PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Request' could be:

'/public-offerings/{publicofferingid}/placement-roadshows/{publicplacementroadshowandmarketingid}/requests'

This naming follows the best practices of using lowercase letters, using hyphens to separate words in URLs, and using plural nouns for collections in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information related to the Public Placement Financial Assessment and Audit Fulfillment for a specific public offering. It is part of a service domain that supports companies as they prepare to go public or raise capital through issuing publicly traded securities. This API is used to access details regarding the financial assessment and audit for the public placement process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/PublicOfferings/{publicofferingId}/PublicPlacementFinancialAssessments/{publicplacementFinancialAssessmentId}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information related to a specific Public Placement IPO and Underwriting Fulfillment within the context of a Public Offering service. It is designed to support various financial, accounting, and regulatory activities associated with helping companies go public or raise additional capital through the issuance of publicly traded securities. By accessing this API, you can obtain details and data related to a particular public placement and underwriting process in the context of a public offering transaction.

  **Limitations**

  GET: A more appropriate name for the path would be:

'/publicofferings/{publicofferingid}/public-placement-ipo-underwriting/{publicplacementipoandunderwritingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement Instrument Registration Fulfillment

  **Documentation**

  This API path allows you to retrieve information related to the registration fulfillment of a public placement instrument within a public offering process. This particular endpoint is focused on providing details about a specific public placement instrument registration associated with a public offering. It supports various financial, accounting, and regulatory activities involved in helping companies go public or raise capital through publicly traded securities. By making a GET request to this endpoint with the appropriate identifiers, you can access information related to the registration fulfillment of the public placement instrument in the context of the broader public offering process.

  **Limitations**

  GET: A suitable name for the RESTful path could be:

GET /public-offerings/{publicofferingid}/public-placement-instrument-registrations/{publicplacementinstrumentregistrationid} 

This name is more descriptive and follows the RESTful convention of using lowercase letters and dashes to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information about a public placement instrument specification fulfillment within a public offering scenario. Essentially, it helps you access details about the specific instruments used for raising capital and issuing publicly traded securities when a company goes public or raises additional funds. This API can provide insights into the technical and regulatory aspects involved in these financial transactions.

  **Limitations**

  GET: The name of the path should be:

'/public-offerings/{publicofferingId}/public-placement-instrument-specifications/{publicPlacementInstrumentSpecificationId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement Prospectus Fulfillment

  **Documentation**

  This API path allows users to retrieve information about a specific public placement prospectus fulfillment associated with a public offering. It supports various financial, accounting, and regulatory actions related to companies going public and raising capital through the issuance of publicly traded securities. The information retrieved may include details about the public offering, such as financial data, prospectus documents, and other relevant information.

  **Limitations**

  GET: The name of the path should be:

GET /public-offerings/{publicofferingid}/public-placement-prospectuses/{publicplacementprospectusid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Retrieve Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This BIAN API path allows users to retrieve information related to a Public Placement Roadshow and Marketing Fulfillment within the context of a specific public offering. It supports various financial, accounting, and regulatory actions needed to help companies go public or raise additional capital by issuing publicly traded securities. This specific endpoint helps users access details about the roadshow and marketing activities associated with a public placement.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/public-offerings/{publicofferingid}/public-placement-roadshows-and-marketing/{publicplacementroadshowandmarketingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementFinancialAssessmentandAudit/{publicplacementfinancialassessmentandauditid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement Financial Assessment and Audit Fulfillment

  **Documentation**

  This BIAN API path is used to update the financial assessment and audit fulfillment details associated with a public offering and placement process for a company looking to go public or raise additional capital through publicly traded securities. By making a PUT request to this path with the specific public offering and financial assessment IDs, users can update and modify the relevant financial information and audit requirements in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /public-offerings/{publicofferingId}/public-placement-financial-assessments-and-audits/{publicPlacementFinancialAssessmentAndAuditId}

This path name follows the convention of using lowercase letters, using hyphens to separate words, and using plural nouns for resource names. Additionally, it follows the format of using the HTTP method 'PUT' to update a specific resource identified by its unique identifier.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementIPOandUnderwriting/{publicplacementipoandunderwritingid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement IPO and Underwriting Fulfillment

  **Documentation**

  This API path allows for updating information related to a public offering for a company that is going public or raising additional capital through the issuance of publicly traded securities. Specifically, it focuses on updating details related to the public placement initial public offering (IPO) and underwriting fulfillment. This could involve making changes to financial, accounting, and regulatory information to support companies in their public offering process.

  **Limitations**

  PUT: The name of the path could be something like:

'/public-offerings/{publicOfferingId}/public-placements-ipo-underwriting/{publicPlacementIpoUnderwritingId}/update'

Following REST best practices, it is recommended to use lower case letters and separate words with hyphens to make the URL more readable and user-friendly.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentRegistration/{publicplacementinstrumentregistrationid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement Instrument Registration Fulfillment

  **Documentation**

  This BIAN API path allows for updating a specific public placement instrument registration fulfillment within the context of a public offering. It supports financial, accounting, and regulatory actions related to assisting companies that are going public or raising capital through issuing publicly traded securities. By making a PUT request to this path with the appropriate identifiers, users can modify details related to the fulfillment of a public placement instrument registration in a specific public offering scenario.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
PUT /public-offerings/{publicofferingid}/public-placement-instrument-registrations/{publicplacementinstrumentregistrationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementInstrumentSpecification/{publicplacementinstrumentspecificationid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows for updating the fulfillment details of a public placement instrument specification within a public offering. It is used in the context of financial services provided to companies that are going public or raising capital by issuing publicly traded securities. The API allows for specifying and updating the specific details related to the placement of such securities as part of the offering process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PUT /public-offerings/{publicofferingid}/public-placement-instrument-specifications/{publicplacementinstrumentspecificationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementProspectus/{publicplacementprospectusid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement Prospectus Fulfillment

  **Documentation**

  This API path allows you to update an existing public placement prospectus fulfillment within the context of a public offering. A public placement prospectus is a document used to inform potential investors about a company's securities being offered for public sale. By calling this API with the specified IDs, you can make changes or updates to the content of the public placement prospectus fulfillment as part of the process of advising and supporting companies during their public offering and fundraising activities.

  **Limitations**

  PUT: A possible RESTful path for this scenario could be:
'/public-offerings/{publicofferingid}/public-placement-prospectuses/{publicplacementprospectusid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PublicOffering/{publicofferingid}/PublicPlacementRoadshowandMarketing/{publicplacementroadshowandmarketingid}/Update</span></summary>

  **Description**

  This Service Domain supports a broad range of complex financial, accounting and regulatory actions involved in providing advice and practical support to companies going public and/or raising additional capital through the issuance of publicly traded securities Update Public Placement Roadshow and Marketing Fulfillment

  **Documentation**

  This API path allows you to update the details of a public placement roadshow and marketing fulfillment associated with a specific public offering. It is part of a service domain that provides support to companies going public or raising capital through publicly traded securities. By making a PUT request to this path with the relevant IDs, you can modify the information related to how the company is marketing their public offering to potential investors.

  **Limitations**

  PUT: The name of the path could be:

```
/PublicOfferings/{publicofferingid}/PublicPlacementRoadshowAndMarketing/{publicplacementroadshowandmarketingid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
