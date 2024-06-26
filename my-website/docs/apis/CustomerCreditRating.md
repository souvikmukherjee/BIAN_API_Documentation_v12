<h1 style='color:red;'>CustomerCreditRating</h1>

**BIAN Documentation:** [CustomerCreditRating v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCreditRating/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCreditRating/Initiate</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports InCR Initiate credit state monitoring for a customer

  **Documentation**

  This API path `/CustomerCreditRating/Initiate` allows you to create and start monitoring the credit status of a customer within a bank. It is used to initialize the process of assessing a customer's creditworthiness by collecting and analyzing both internal bank data and, optionally, external credit agency reports. This service domain helps to keep track of a customer's credit rating over time by initiating the credit monitoring process.

  **Limitations**

  POST: In accordance with REST best practices, the path '/CustomerCreditRating/Initiate' should be named as '/customer-credit-ratings' with HTTP POST method to initiate a new customer credit rating resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCreditRating/{customercreditratingid}/Execute</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports ExCR Execute an automated task for credit state (e.g. auto refresh)

  **Documentation**

  This BIAN API path allows you to update an existing customer's credit rating assessment by executing an automated task that refreshes or updates the credit state. This service is responsible for managing and maintaining the bank's evaluation of a customer's creditworthiness using internal data and, if needed, external credit agency reports. By accessing this API endpoint and executing the task, you can ensure that the customer's credit rating information is up-to-date and accurate.

  **Limitations**

  PUT: The name of the path could be simplified to '/customers/{customerId}/credit-ratings' to adhere to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCreditRating/{customercreditratingid}/Request</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports RqCR Request manual intervention for credit state (e.g. revise underlying assessment)

  **Documentation**

  This API path allows for updating an existing customer's credit rating information within the bank's system. It enables manual intervention to request a change in the credit state of a customer, which could involve revising or adjusting the assessment of their creditworthiness based on internal data and potentially external credit agency reports. It provides the functionality to trigger a manual review or adjustment of a customer's credit rating.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/customerCreditRatings/{customerCreditRatingId}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCreditRating/{customercreditratingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports ReCR Retrieve details about credit state monitoring for a customer

  **Documentation**

  This API path allows you to retrieve information about the credit state monitoring for a specific customer identified by their customer credit rating ID. The service provides details related to the bank's credit assessment for customers, which is based on internal data as well as external credit agency reports if available. It helps you access crucial information about how the bank assesses the creditworthiness of individual customers and monitors their credit state.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET '/customer-credit-ratings/{customercreditratingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCreditRating/{customercreditratingid}/Alerts/{alertsid}/Capture</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports CaBQ Capture notification of a credit alert

  **Documentation**

  This API path allows you to update an existing credit alert notification for a specific customer's credit rating within the bank's system. This update is based on internal data and can also consider information from external credit agency reports.

  **Limitations**

  PUT: The name of the path should follow RESTful conventions and be structured as follows:

'/customer-credit-ratings/{customercreditratingid}/alerts/{alertsid}/capture'

In this format:
- Path elements are all lowercase
- Words are separated by hyphens
- Resource names are plural when a collection of items is being referenced
- Path parameters are enclosed in curly braces and use lowercase letters

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCreditRating/{customercreditratingid}/Alerts/{alertsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports ReBQ Retrieve details about a credit alert

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific credit alert associated with a customer's credit rating. By providing the unique identifiers for the customer credit rating and the alert, you can access information related to that specific alert. This information is based on the bank's internal data and may also include data from external credit agency reports.

  **Limitations**

  GET: The name of the path should be:

/customer-credit-ratings/{customerCreditRatingId}/alerts/{alertsId}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCreditRating/{customercreditratingid}/InternalReporting/{internalreportingid}/Capture</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports CaBQ Capture internal product reports to support credit analysis

  **Documentation**

  This API path is used to update internal reporting information related to a customer's credit rating in the bank's system. It allows the bank to capture and update internal product reports that are used to analyze and assess the creditworthiness of the customer. By updating this information, the bank can maintain and administer accurate credit assessments for each customer based on both internal data and external credit agency reports, if available.

  **Limitations**

  PUT: If following REST best practices, the name of the path should be:

```
/CustomerCreditRatings/{customerCreditRatingId}/InternalReporting/{internalReportingId}/Capture
``` 

Some key points to note:
- Use plural nouns for collections and singular nouns for individual items.
- Use camelCase for parameter names.
- Use proper spelling and avoid abbreviations where possible.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCreditRating/{customercreditratingid}/InternalReporting/{internalreportingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports ReBQ Retrieve details about internal reporting to the credit monitoring activity

  **Documentation**

  This API path allows you to retrieve details about internal reporting related to the credit monitoring activity for a specific customer credit rating. By providing the customer credit rating ID and the internal reporting ID, you can access information about the bank's credit assessment process, which includes analyzing internal data to evaluate a customer's creditworthiness. This API may also include references to external credit agency reports if they are used in the assessment process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customers/{customerId}/creditRating/{creditRatingId}/internalReporting/{internalReportingId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCreditRating/{customercreditratingid}/ExternalReporting/{externalreportingid}/Capture</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports CaBQ Capture external credit reports to support credit analysis and state

  **Documentation**

  This API path allows you to update the information related to a customer's credit rating in the bank's system. Specifically, it enables you to capture external credit reports that are used in assessing the customer's creditworthiness. The updates made using this API path help maintain and manage the bank's credit assessment process, which includes internal data as well as external credit agency reports.

  **Limitations**

  PUT: A RESTful name for the path would be:

'/customers/{customerid}/credit-rating/{customercreditratingid}/external-reporting/{externalreportingid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCreditRating/{customercreditratingid}/ExternalReporting/{externalreportingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains and administers the bank's credit assessment for customers based on consolidated internal data and optionally by referencing external credit agency reports ReBQ Retrieve details about external reporting to the credit monitoring activity

  **Documentation**

  This API path allows you to retrieve details about external reporting related to a specific credit assessment activity for a customer. It is used to access information about reports obtained from external credit agencies as part of the bank's credit assessment process. The data retrieved may include relevant details about the external reporting activity linked to a particular customer credit rating record.

  **Limitations**

  GET: A suitable name for the path '/CustomerCreditRating/{customercreditratingid}/ExternalReporting/{externalreportingid}/Retrieve' that follows REST best practices could be:

GET /customer-credit-ratings/{customercreditratingid}/external-reporting/{externalreportingid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
