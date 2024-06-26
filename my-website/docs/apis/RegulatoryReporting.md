<h1 style='color:red;'>RegulatoryReporting</h1>

**BIAN Documentation:** [RegulatoryReporting v12](https://app.swaggerhub.com/apis/BIAN-3/RegulatoryReporting/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryReporting/{regulatoryreportingid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations UpCR Update the regulatory reporting set up or schedule

  **Documentation**

  This BIAN API path allows you to update the regulatory reporting set up or schedule for a specific regulatory reporting ID. It is used to modify the configuration or timing of regulatory reports that a bank must submit to comply with regulations. By using this API, banks can adjust their reporting processes to ensure they meet their regulatory obligations effectively and efficiently.

  **Limitations**

  PUT: The name of the path should be:

'/RegulatoryReporting/{regulatoryreportingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /RegulatoryReporting/{regulatoryreportingid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations ReCR Retrieve any details of the regulatory reporting administration

  **Documentation**

  This BIAN API path allows you to retrieve details related to regulatory reporting administration. By specifying a regulatory reporting ID in the path, you can retrieve specific information about the tasks and obligations that are necessary to comply with bank regulations. This service is designed to help manage and execute the regulatory reporting tasks efficiently.

  **Limitations**

  GET: The name of the path '/RegulatoryReporting/{regulatoryreportingid}/Retrieve' could follow REST best practices by using the HTTP method GET to indicate retrieving a resource. Therefore, a more appropriate name for the path could be '/RegulatoryReporting/{regulatoryreportingid}' to indicate retrieving a specific regulatory reporting resource based on its ID.

</details>

<details open>
  <summary><span style='color:red;'>POST: /RegulatoryReporting/Create</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations CrBQ Initiate the handling of a regulatory reporting enquiry

  **Documentation**

  This BIAN API path, /RegulatoryReporting/Create, facilitates the process of initiating the handling of a regulatory reporting enquiry within a bank. It allows users to create a new resource that administers and organizes the tasks necessary to fulfill the bank's regulatory reporting requirements. Essentially, it provides a structured method for managing and responding to regulatory inquiries to ensure compliance with reporting obligations.

  **Limitations**

  POST: In accordance with REST best practices, the name of the path '/RegulatoryReporting/Create' should be updated to '/regulatory-reporting' using HTTP POST method to create a new regulatory report.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryReporting/{regulatoryreportingid}/Authoring/{authoringid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations CaBQ Provide transaction records as required to support regulatory reporting

  **Documentation**

  This BIAN API path allows you to update transaction records that are necessary for regulatory reporting purposes within a bank's system. By providing specific transaction records, this service domain helps the bank fulfill its regulatory reporting obligations effectively.

  **Limitations**

  PUT: Based on REST best practices, the path should be named to represent a hierarchical relationship between resources. One possible name for the path could be:

`/regulatory-reporting/{regulatoryreportingid}/authoring/{authoringid}/capture`

Remember to use lowercase letters, hyphens to separate words, and avoid using underscores to create a meaningful and readable path that adheres to REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /RegulatoryReporting/{regulatoryreportingid}/Consolidation/{consolidationid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations ReBQ Retrieve consolidated information for review

  **Documentation**

  This API path retrieves consolidated information for review related to regulatory reporting in a bank. It is used to gather and present the necessary data and reports that meet the bank's regulatory requirements. By accessing this path, users can retrieve specific information related to regulatory reporting tasks to ensure compliance with regulations and conduct thorough reviews.

  **Limitations**

  GET: A more appropriate and RESTful name for the path '/RegulatoryReporting/{regulatoryreportingid}/Consolidation/{consolidationid}/Retrieve' could be '/regulatory-reports/{regulatoryreportingid}/consolidations/{consolidationid}'. This name is more concise, uses lowercase letters, and employs plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryReporting/{regulatoryreportingid}/Consolidation/{consolidationid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations UpBQ Update or augment consolidated information to support report generation

  **Documentation**

  This API path allows you to update or add information to support report generation for regulatory reporting within a bank. It helps in meeting the bank's requirements for regulatory reporting by updating existing consolidated information.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:  

'/RegulatoryReportings/{regulatoryreportingid}/Consolidations/{consolidationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /RegulatoryReporting/{regulatoryreportingid}/Authoring/{authoringid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations ReBQ Retrieve regulatory reporting detail and reports for review

  **Documentation**

  This BIAN API path is used to retrieve regulatory reporting details and reports for review from the bank's system. By providing the unique identifiers for the regulatory reporting and authoring instances, users can access information related to regulatory requirements and reports submitted by the bank. This API helps in managing tasks related to fulfilling the bank's regulatory reporting obligations efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:  
`/regulatory-reporting/{regulatory-reporting-id}/authoring/{authoring-id}`

If the endpoint is specifically for retrieving a resource, you could consider simply using:
`GET /regulatory-reporting/{regulatory-reporting-id}/authoring/{authoring-id}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryReporting/{regulatoryreportingid}/Enquiries/{enquiriesid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations UpBQ Update or augment consolidated information to support enquiry handling

  **Documentation**

  This API path allows users to update or add additional information to a specific enquiry within the bank's regulatory reporting system. By providing the regulatory reporting ID and the enquiry ID, users can make changes to the consolidated information related to that particular enquiry. The purpose is to ensure that all necessary information is accurate and up-to-date to comply with regulatory requirements and facilitate enquiry handling within the bank.

  **Limitations**

  PUT: Following REST best practices, the name of the path would be:

/RegulatoryReporting/{regulatoryreportingid}/Enquiries/{enquiriesid}

The 'Update' operation in REST is typically indicated by using the HTTP PUT method on the specific resource, so to update the 'Enquiries' resource identified by the {enquiriesid}, you would use a PUT request to the above path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RegulatoryReporting/{regulatoryreportingid}/Enquiries/{enquiriesid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations CaBQ Provide transaction records as required to support regulatory enquiry

  **Documentation**

  This BIAN API path allows you to update transaction records to support regulatory inquiries within the Regulatory Reporting service domain of a bank. By providing the necessary transaction data, this API helps fulfill the bank's regulatory reporting obligations and supports regulatory enquiries by ensuring the availability of accurate information as needed.

  **Limitations**

  PUT: A suitable name for the path '/RegulatoryReporting/{regulatoryreportingid}/Enquiries/{enquiriesid}/Capture' following REST best practices could be:

```
/RegulatoryReports/{reportId}/Enquiries/{enquiryId}/Capture
```

In this revised path name:
- "RegulatoryReports" is a more common term used instead of "RegulatoryReporting."
- "{reportId}" and "{enquiryId}" are specific identifiers for the regulatory report and enquiry,

</details>

<details open>
  <summary><span style='color:red;'>GET: /RegulatoryReporting/{regulatoryreportingid}/Enquiries/{enquiriesid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to meet the bank's regulatory reporting obligations ReBQ Retrieve regulatory enquiry detail and response for review

  **Documentation**

  This API path is used to retrieve detailed information about a specific regulatory enquiry within the context of regulatory reporting for a bank. By providing the regulatory reporting ID and the enquiry ID as parameters, this API allows users to access and review the details of the enquiry and its response. It helps in managing and fulfilling the bank's regulatory reporting obligations by providing easy access to regulatory enquiry information for review and compliance purposes.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /regulatory_reporting/{regulatoryreportingid}/enquiries/{enquiriesid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
