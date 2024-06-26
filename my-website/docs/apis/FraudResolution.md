<h1 style='color:red;'>FraudResolution</h1>

**BIAN Documentation:** [FraudResolution v12](https://app.swaggerhub.com/apis/BIAN-3/FraudResolution/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FraudResolution/Initiate</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing InCR Initiate a fraud case

  **Documentation**

  This API path "/FraudResolution/Initiate" is used to create a new fraud case in the fraud resolution system. When fraud behavior is detected during production processing, this API allows users to initiate a fraud case by providing the necessary details and information related to the detected fraud activity. The system then processes this information to investigate and resolve the fraud case.

  **Limitations**

  POST: If the path '/FraudResolution/Initiate' followed REST best practices, it should be named as '/fraud-resolutions' using plural form for collections. So the updated path would be '/fraud-resolutions'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudResolution/{fraudresolutionid}/Update</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing UpCR Update details of an active fraud case

  **Documentation**

  This API path allows you to update the details of an active fraud case identified by a specific fraud resolution ID. By using the PUT method, you can make changes to the information related to the fraud case, such as updating case details or adding new information. This can be done to ensure that the fraud resolution process is accurately documented and managed.

  **Limitations**

  PUT: The appropriate name for the path '/FraudResolution/{fraudresolutionid}/Update' following REST best practices would be to use the HTTP PUT method for updating a specific resource identified by 'fraudresolutionid'. Therefore, the recommended path name would be '/FraudResolution/{fraudresolutionid}' or '/FraudResolution/{fraudresolutionid}' to indicate an update operation on the identified resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudResolution/{fraudresolutionid}/Retrieve</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing ReCR Retrieve information about an active fraud case

  **Documentation**

  This API path allows you to retrieve information about an active fraud case in the Fraud Resolution service domain. It is used when you need details about a specific fraud case that has been detected during production processing. By using this API path with the appropriate fraud resolution ID, you can access relevant information related to the identified fraud case.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/fraud-resolutions/{fraudresolutionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudResolution/{fraudresolutionid}/CaseAnalysis/{caseanalysisid}/Retrieve</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing ReCR Retrieve information about an active fraud case analysis

  **Documentation**

  This BIAN API path allows you to retrieve information about an active fraud case analysis. It's part of a service domain related to resolving fraud issues that have been detected during the processing of transactions. By using this API, you can access details about a specific fraud resolution case and its corresponding analysis.

  **Limitations**

  GET: The name of the path should be:

GET '/fraud-resolutions/{fraudresolutionid}/case-analyses/{caseanalysisid}'

REST best practices recommend using lowercase letters, separating words with hyphens, and avoiding unnecessary words like "Retrieve."

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudResolution/{fraudresolutionid}/CaseDetermination/{casedeterminationid}/Retrieve</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing ReCR Retrieve information about an active fraud case determination

  **Documentation**

  This BIAN API path retrieves information about an active fraud case determination within the Fraud Resolution service domain. It allows users to access details related to a specific fraud case by providing the fraud resolution ID and the case determination ID. This API helps users gather critical information about a fraud case that has been detected during processing, aiding in resolving fraudulent activities efficiently.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/FraudResolutions/{fraudresolutionId}/CaseDeterminations/{caseDeterminationId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudResolution/{fraudresolutionid}/CaseResolution/{caseresolutionid}/Request</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing RqBQ Request reworking of resolution to a case

  **Documentation**

  This API path is used to update an existing fraud resolution case with a specific fraud resolution ID and case resolution ID. It allows users to request a reworking of the resolution of a fraud case that has been detected during production processing. This update can be used to ensure that the case is processed correctly and resolved in a manner that addresses the fraud behavior effectively.

  **Limitations**

  PUT: A more simplified and RESTful name for the path could be: 

/fraud-resolutions/{fraudresolutionid}/case-resolutions/{caseresolutionid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudResolution/{fraudresolutionid}/CaseResolution/{caseresolutionid}/Retrieve</span></summary>

  **Description**

  This service domain sets up and processes a fraud case resulting from fraud behavior that has been detected during production processing ReCR Retrieve information about an active fraud case resolution

  **Documentation**

  This API path allows you to retrieve information about an active fraud case resolution within the Fraud Resolution service domain. You can specify the fraud resolution ID and case resolution ID to access relevant details about a particular fraud case that is being resolved due to fraudulent behavior detected during production processing.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/FraudResolutions/{fraudresolutionid}/CaseResolutions/{caseresolutionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
