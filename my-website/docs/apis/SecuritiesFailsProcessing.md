<h1 style='color:red;'>SecuritiesFailsProcessing</h1>

**BIAN Documentation:** [SecuritiesFailsProcessing v12](https://app.swaggerhub.com/apis/BIAN-3/SecuritiesFailsProcessing/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Control</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Control Security Trading Fails Procedure

  **Documentation**

  This API path allows you to update an existing resource related to resolving clerical and processing errors that cause failures in securities trade clearing and settlement processes. Specifically, it involves controlling the procedure for handling security trading fails within the Securities Fails Processing service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/securities-fails-processings/{securitiesfailsprocessingid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Exchange Security Trading Fails Procedure

  **Documentation**

  This API path is used to update information related to resolving clerical and processing errors that result in failures during the clearing and settlement processes of securities trades on an exchange.

  **Limitations**

  PUT: The name of the path should be:

GET /securities-fails-processing/{securitiesfailsprocessingid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Execute</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Execute Security Trading Fails Procedure

  **Documentation**

  This API path allows you to update and execute a procedure that resolves clerical and processing errors causing failures in the securities trade clearing and settlement processes. By using this API, you can address issues that prevent successful completion of securities trades, ensuring smoother operations in the financial sector.

  **Limitations**

  PUT: The name of the path '/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Execute' should ideally follow REST best practices by being a noun that represents a resource. Since this path seems to be executing a specific action related to securities fails processing identified by securitiesfailsprocessingid, a more appropriate name could be '/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Execution'. This name reflects the resource being acted upon (SecuritiesFailsProcessing) and the action being performed on that

</details>

<details open>
  <summary><span style='color:red;'>POST: /SecuritiesFailsProcessing/Initiate</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Initiate Security Trading Fails Procedure

  **Documentation**

  This API path, /SecuritiesFailsProcessing/Initiate, allows users to start a procedure to resolve clerical and processing errors that have caused failures in the securities trade clearing and settlement processes. By initiating this procedure, users can address issues related to failed securities trades and work towards resolving them effectively.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be structured in a clear and concise manner, using nouns to represent resources rather than actions. It is recommended to use plural nouns for collections. 

In this case, the path '/SecuritiesFailsProcessing/Initiate' could be renamed following REST conventions as '/securities-fails-processes' to represent a collection of securities fails processing resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Notify Security Trading Fails Procedure

  **Documentation**

  This API path retrieves information about a specific securities fails processing procedure. It is a part of the service domain that manages and resolves errors related to securities trades that fail to clear and settle properly. The API allows users to access details about the procedure for notifying about security trading fails, which are usually caused by clerical or processing errors.

  **Limitations**

  GET: The name of the path should be `/securities-fails-processing/{securitiesfailsprocessingid}/notify`. 

According to REST best practices, the path should use lowercase letters and hyphens to separate words for better readability. The path should also be descriptive and use nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Request</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Request Security Trading Fails Procedure

  **Documentation**

  This API path allows you to update an existing resource related to resolving errors in securities trading processes that result in trade failures. By providing the securities fails processing ID, you can request a procedure to address clerical and processing errors that occur during the clearing and settlement of securities trades.

  **Limitations**

  PUT: The name of the path should be:
'/securities-fails-processing/{securities_fails_processing_id}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Retrieve Security Trading Fails Procedure

  **Documentation**

  This API path allows you to retrieve information about the procedure for resolving clerical and processing errors that result in failures during the clearing and settlement processes of securities trading. It provides guidance on how to address issues that may arise in the trade processing system related to securities.

  **Limitations**

  GET: The name of the path '/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Retrieve' if it followed REST best practices can be simplified to:
GET /securitiesfailsprocessing/{securitiesfailsprocessingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/Update</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Update Security Trading Fails Procedure

  **Documentation**

  This API path allows you to update the procedure for resolving clerical and processing errors that cause failures in the securities trade clearing and settlement processes. By making a PUT request to this path with the specific ID of the securities fails processing, you can update the steps involved in resolving these errors to improve the efficiency and accuracy of securities trading transactions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be `/securities-fails-processing/{securities-fails-processing-id}`. 

REST path names should use lowercase letters and hyphens to separate words for increased readability and consistency. Avoid using verbs in the path names as REST paths should represent resources, not actions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Exchange Securities Fail Analysis Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the resolution of clerical and processing errors in the securities trade clearing and settlement processes. Specifically, it focuses on exchanging information regarding the analysis workstep for failures in securities trades.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 
'/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-analysis/{securitiesfailanalysisid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Exchange Securities Fail Determination Workstep

  **Documentation**

  This API path allows users to update and resolve processing errors that can cause failures in securities trade clearing and settlement processes. Specifically, it deals with determining and exchanging information related to failed securities transactions in order to rectify any clerical or processing mistakes that may have occurred.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Execute</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Execute Securities Fail Analysis Workstep

  **Documentation**

  This API path allows you to update an existing resource related to the resolution of clerical and processing errors that cause failures in securities trade clearing and settlement processes. Specifically, it pertains to executing a workstep for analyzing securities fails within the Securities Fails Processing service domain. By using this API with the specified path and method, you can progress in addressing and resolving issues related to securities trade processing failures.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Execution

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Execute Securities Fail Determination Workstep

  **Documentation**

  This API path allows you to update and execute a specific workstep related to resolving clerical and processing errors in securities trade clearing and settlement processes. It is designed to help identify and address issues that lead to failures in these processes, ultimately improving the efficiency and accuracy of securities transactions.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the given path would be:

```
/ProcessSecuritiesFails/{securitiesfailsprocessingid}/DetermineSecuritiesFail/{securitiesfaildeterminationid}/Execute
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/Initiate</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Initiate Securities Fail Analysis Workstep

  **Documentation**

  This API path allows users to create a new resource to initiate the workstep for analyzing securities fail cases. It is part of a service domain dedicated to resolving errors in trade clearing and settlement processes related to securities. By using this API, users can start the process of investigating and addressing clerical and processing mistakes that have caused failures in securities trades.

  **Limitations**

  POST: Based on REST best practices, a suitable name for the path '/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/Initiate' could be:

`POST /securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-analysis`

This naming convention follows the guidelines for using lowercase letters, using hyphens to separate words, and using plural nouns for endpoints.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/Initiate</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Initiate Securities Fail Determination Workstep

  **Documentation**

  This API path is used to initiate the process of determining the cause of failures in securities trade clearing and settlement processes due to clerical or processing errors. By making a POST request to this path with the appropriate securities fails processing ID, a new resource will be created to begin the securities fail determination workstep. This process helps financial institutions identify and resolve issues that may have caused errors in securities trading activities.

  **Limitations**

  POST: Following REST best practices, the name of the path should be structured as:

/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-determination/initiate

Remember to use lowercase letters, separate words with hyphens, and avoid using upper case letters and underscores in the path names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Notify</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Notify Securities Fail Analysis Workstep

  **Documentation**

  This API path retrieves information about the notification process that handles clerical and processing errors in securities trades, which can cause failures in the clearing and settlement processes. It specifically relates to notifying the Securities Fail Analysis Workstep for resolving these issues.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-analysis/{securitiesfailanalysisid}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Notify Securities Fail Determination Workstep

  **Documentation**

  This API path allows you to retrieve information about the notification related to the resolution of clerical and processing errors that caused failures in the securities trade clearing and settlement processes. It specifically focuses on notifying the workstep for determining securities fail.

  **Limitations**

  GET: Based on REST best practices, a more suitable name for this path could be:

`/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-determination/{securitiesfaildeterminationid}/notify`

Using lowercase letters and dashes for separating words is a common convention in RESTful URL naming.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Request</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Request Securities Fail Analysis Workstep

  **Documentation**

  This API path is used to update an existing resource related to resolving clerical and processing errors that cause failures in the securities trade clearing and settlement processes. Specifically, it allows for requesting a workstep for analyzing securities fails within the Securities Fails Processing service domain.

  **Limitations**

  PUT: Based on REST best practices, the path could be named as follows:

`/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-analysis/{securitiesfailanalysisid}/request`

In this naming convention:
- Path segments are in lowercase
- Words are separated by hyphens (-) for better readability
- Path parameters are enclosed within curly braces {} to indicate that they are placeholders
- Path segments are descriptive and provide context for what each segment represents

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Request</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Request Securities Fail Determination Workstep

  **Documentation**

  This API path is used to update an existing resource related to handling clerical and processing errors that cause failures in securities trade clearing and settlement processes. Specifically, it is used to request a workstep for determining the cause of a securities fail within the Securities Fails Processing service domain.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Request' could be:

'/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-determination/{securitiesfaildeterminationid}/request'

This naming convention follows the common practice of using lowercase letters and separating words with hyphens for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Retrieve Securities Fail Analysis Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific workstep related to resolving clerical and processing errors that result in failures in securities trade clearing and settlement processes. The workstep being retrieved is part of the analysis process for securities fail scenarios within the Securities Fails Processing service domain.

  **Limitations**

  GET: The name of the path should be `/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-analysis/{securitiesfailanalysisid}` for REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Retrieve Securities Fail Determination Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific workstep related to the determination of securities fail within the Securities Fails Processing service domain. It helps in handling and resolving errors related to securities trade clearing and settlement processes by providing details about the specific workstep involved in determining the cause of the securities fail.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-determination/{securitiesfaildeterminationid}`

This path should be used to retrieve data related to securities fails processing and securities fail determination based on the provided IDs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailAnalysis/{securitiesfailanalysisid}/Update</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Update Securities Fail Analysis Workstep

  **Documentation**

  This API path allows you to update an existing securities fail analysis workstep within the Securities Fails Processing Service Domain. By using a PUT request with the specific securities fails processing ID and securities fail analysis ID, you can modify and make changes to the information related to resolving clerical and processing errors that caused failures in securities trade clearing and settlement processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /securitiesFailsProcessing/{securitiesfailsprocessingid}/securitiesFailAnalysis/{securitiesfailanalysisid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SecuritiesFailsProcessing/{securitiesfailsprocessingid}/SecuritiesFailDetermination/{securitiesfaildeterminationid}/Update</span></summary>

  **Description**

  This Service Domain handles the resolution of clerical and processing errors that lead to failures in the securities trade clearing and settlement processes Update Securities Fail Determination Workstep

  **Documentation**

  This BIAN API path allows users to update a specific workstep involved in resolving clerical and processing errors that result in failures within the securities trade clearing and settlement processes. Users can input the relevant securities fails processing ID and securities fail determination ID to identify and modify the specific workstep information. It is a PUT method, meaning it updates an existing resource with the new data provided.

  **Limitations**

  PUT: The path can be named as: 

PUT /securities-fails-processing/{securitiesfailsprocessingid}/securities-fail-determination/{securitiesfaildeterminationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
