<h1 style='color:red;'>Advertising</h1>

**BIAN Documentation:** [Advertising v12](https://app.swaggerhub.com/apis/BIAN-3/Advertising/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /Advertising/Create</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management CrCR Create and invoke the advertising campaign management plan

  **Documentation**

  This API path allows you to create a new advertising campaign management plan. You can specify details such as the budget, resources needed, and activities involved in the advertising campaign. By invoking this API, you can set up and manage an advertising campaign effectively.

  **Limitations**

  POST: If the path '/Advertising/Create' followed REST best practices, its name should be changed to '/advertisements' using the POST method to create a new advertisement resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/Update</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management UpCR Update details of the advertising campaign management plan

  **Documentation**

  This BIAN API path allows you to update the details of an advertising campaign management plan. It specifically pertains to overseeing and developing the plan for advertising campaign activities, which includes managing the budget and resources involved. By using the PUT method on this path with the specific advertising campaign ID, you can make changes to the existing plan for the advertising campaign.

  **Limitations**

  PUT: The name of the path '/Advertising/{advertisingid}/Update' following REST best practices would typically just be "PUT /Advertising/{advertisingid}". In REST, a PUT request is commonly used to update a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/Request</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management RqCR Request manual intervention in the campaign plan (e.g. rework campaign priorities)

  **Documentation**

  This API path allows users to update an existing advertising campaign plan by requesting manual intervention in the campaign. For example, if the priorities of the campaign need to be reworked, users can make a request for this change through the API. It provides a way to manage and adjust the advertising strategy with input from human intervention, in addition to automated processes.

  **Limitations**

  PUT: A possible name for the path '/Advertising/{advertisingid}/Request' following REST best practices could be:

'/advertisings/{advertisingid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /Advertising/{advertisingid}/Retrieve</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ReCR Retrieve details about the advertising campaign management plan

  **Documentation**

  This API path allows you to retrieve details about a specific advertising campaign management plan. By providing an advertising ID as a parameter in the request, you can access information such as the plan for the advertising campaign, its budget, resource management details, and other relevant information associated with the campaign. This API helps you to access and review the specifics of an advertising campaign plan for effective monitoring and control.

  **Limitations**

  GET: The path '/Advertising/{advertisingid}/Retrieve' should be named as follows to align with REST best practices:

GET /advertisings/{advertisingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/MarketTracking/{markettrackingid}/Update</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management UpBQ Update details of the market tracking activity (e.g. change source)

  **Documentation**

  This BIAN API path allows you to update details of market tracking activity associated with a specific advertising campaign. By specifying the advertising ID and market tracking ID, you can make changes to the market tracking information, such as updating the data source. This API helps in managing and adjusting the market tracking aspects of the advertising campaign as needed.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be: 

PUT /advertisements/{advertisingid}/market-tracking/{markettrackingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/MarketTracking/{markettrackingid}/Execute</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ExBQ Execute an automated task for the tracking activity (e.g. upload new data)

  **Documentation**

  This BIAN API path is used for updating an existing advertising campaign's market tracking activity. Specifically, it relates to executing automated tasks for tracking activities, such as uploading new data. By making a PUT request to this path with the appropriate IDs for the advertising campaign and market tracking activity, you can update and manage the execution of these tracking tasks as part of your advertising campaign management process.

  **Limitations**

  PUT: The name of the path should be:

`/advertising/{advertisingId}/market-tracking/{marketTrackingId}/execute` 

Following REST best practices, the path should use all lowercase letters and hyphens to separate words. Additionally, it should be specific and describe the resources being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/MarketTracking/{markettrackingid}/Request</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management RqBQ Request manual intervention in the market tracking (e.g. request reworking of the analysis)

  **Documentation**

  This API path allows you to update an existing market tracking request within an advertising campaign. It is used to manage and oversee advertising activities related to budget and resources. The specific functionality in this case is to request manual intervention in the market tracking process, such as asking for a reworking of the analysis.

  **Limitations**

  PUT: The ideal name for this path following REST best practices would be:

`/advertisements/{advertisingid}/market-trackings/{markettrackingid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>GET: /Advertising/{advertisingid}/MarketTracking/{markettrackingid}/Retrieve</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ReBQ Retrieve details about the market tracking activity

  **Documentation**

  This BIAN API path allows you to retrieve information about the market tracking activity associated with a specific advertising campaign. By using this API, you can access details related to the market tracking for a particular advertising campaign, such as data on customer response, market trends, and other relevant information. This can help you analyze the effectiveness of your advertising efforts and make more informed decisions about resource allocation and budget management for future campaigns.

  **Limitations**

  GET: The name of the path should be:  
`/advertising/{advertisingId}/market-tracking/{marketTrackingId}`

</details>

<details open>
  <summary><span style='color:red;'>POST: /Advertising/{advertisingid}/PerformanceAssessment/Create</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management CrBQ Create a performance assessment of the advertising campaign portfolio

  **Documentation**

  This BIAN API path allows you to create a performance assessment for a specific advertising campaign. Essentially, it enables you to evaluate the effectiveness and success of an advertising campaign by analyzing its performance metrics. By using this API endpoint, you can assess how well the campaign is achieving its goals, manage the budget allocated for the campaign, and review the resources utilized. This information helps in making informed decisions regarding the advertising strategies and optimizing future campaigns for better results.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`POST /advertising/{advertisingid}/performance-assessments`

The URI should be in lowercase letters and use hyphens to separate words. Additionally, the endpoint should use the HTTP verb "POST" to create a new resource under the specified advertising ID.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/PerformanceAssessment/{performanceassessmentid}/Update</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management UpBQ Update details of a advertising campaign portfolio assessment

  **Documentation**

  This BIAN API path allows you to update the details of a specific advertising campaign portfolio assessment within an advertising campaign. You can modify information related to the performance assessment of the campaign by providing the advertising ID and the performance assessment ID. This endpoint is used to manage and track the progress and effectiveness of advertising campaigns, involving tasks such as updating budget allocations and resource utilization for better campaign management.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/Advertising/{advertisingid}/PerformanceAssessment/{performanceassessmentid}/Update' can be simplified to '/advertisements/{advertisingid}/assessments/{performanceassessmentid}'. 

In RESTful design, it's recommended to use nouns in plural form to represent resources, and to avoid verbs or action words in the endpoint paths. This makes the API endpoints more clear and easy to understand.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/PerformanceAssessment/{performanceassessmentid}/Execute</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ExBQ Execute an automated action for a performance assessment (e.g. trigger assessment report)

  **Documentation**

  This BIAN API path allows you to update an existing performance assessment linked to a specific advertising campaign. By executing this API call, you can trigger an automated action that generates a performance assessment report for that particular advertising campaign. This helps you to effectively manage and evaluate the success of your advertising activities by analyzing key performance indicators and other relevant metrics.

  **Limitations**

  PUT: Following REST best practices, the path should be:

```
'/advertisements/{advertisingid}/performance-assessments/{performanceassessmentid}/execute'
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/PerformanceAssessment/{performanceassessmentid}/Request</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management RqBQ Request manual intervention to a performance assessment (e.g. request specific analysis)

  **Documentation**

  This API path allows you to update an existing performance assessment request for a specific advertising campaign. You can request manual intervention for a detailed analysis of the performance assessment, such as specific data analysis related to the advertising campaign's effectiveness. This update involves managing the budget and resources allocated to the advertising campaign.

  **Limitations**

  PUT: A suitable name for the path based on REST best practices could be:

/advertising/{advertisingid}/performance-assessments/{performanceassessmentid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /Advertising/{advertisingid}/PerformanceAssessment/{performanceassessmentid}/Retrieve</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ReBQ Retrieve details about advertising campaign performance assessment activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the advertising campaign performance assessment activity for a specific advertising campaign (identified by the advertisingid) and a specific performance assessment (identified by the performanceassessmentid). This means you can access information related to evaluating the effectiveness of an advertising campaign, including metrics, results, and other data that will help you assess how well the campaign performed.

  **Limitations**

  GET: The name of the path should be:

'/advertising/{advertisingId}/performance-assessments/{performanceAssessmentId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /Advertising/{advertisingid}/CampaignDirection/Create</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management CrBQ Create advertising campaign direction schedules (e.g. create the schedules for design or execution activity)

  **Documentation**

  This API path allows you to create a new resource for developing and overseeing an advertising campaign. Specifically, you can use this endpoint to create schedules for activities related to the direction of the advertising campaign, such as design or execution tasks. It also involves managing the budget and resources allocated for the advertising campaign.

  **Limitations**

  POST: The name of the path should be:

```
/Advertising/{advertisingid}/CampaignDirections
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/CampaignDirection/{campaigndirectionid}/Update</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management UpBQ Update the advertising campaign design and execution schedules

  **Documentation**

  This API endpoint allows you to update the advertising campaign direction by specifying the advertising ID and campaign direction ID. You can modify details related to the advertising campaign plan, budget, resource management, design, and execution schedules. It helps in managing and adjusting the advertising campaign activities to meet specific goals and requirements.

  **Limitations**

  PUT: A suitable RESTful name for the path '/Advertising/{advertisingid}/CampaignDirection/{campaigndirectionid}/Update' could be:

PUT /advertisings/{advertisingid}/campaigndirections/{campaigndirectionid}

This name follows REST best practices by using the HTTP verb PUT to indicate an update operation on the specific advertising and campaign direction resource identified by their respective IDs. The path segments are in lowercase and plural form, following REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Advertising/{advertisingid}/CampaignDirection/{campaigndirectionid}/Request</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management RqBQ Request manual intervention to the schedules (e.g. rework priorities)

  **Documentation**

  This BIAN API path allows you to update an existing advertising campaign direction by making a PUT request. In simpler terms, it is used to modify and manage the plan for an advertising campaign, including overseeing activities, managing budget and resources, and requesting manual intervention to adjust schedules or priorities if needed. By updating specific identifiers related to the advertising campaign and campaign direction, you can make changes to better align the campaign with your goals.

  **Limitations**

  PUT: A suitable name for the path '/Advertising/{advertisingid}/CampaignDirection/{campaigndirectionid}/Request' that follows REST best practices could be:

`/advertisements/{advertisingid}/campaign-directions/{campaigndirectionid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>GET: /Advertising/{advertisingid}/CampaignDirection/{campaigndirectionid}/Retrieve</span></summary>

  **Description**

  Develop the plan for and oversee advertising campaign activity, including budget and resource management ReBQ Retrieve details about advertising campaign design and execution direction and scheduling activities

  **Documentation**

  This API path allows you to retrieve details about the direction and scheduling activities for a specific advertising campaign within an advertising project. It helps in accessing information related to the design and execution plan for the campaign. This can include details about how the campaign is being managed, the budget allocated, and the resources being utilized. By using this API, you can gain insights into the strategic direction of the advertising campaign and monitor its progress effectively.

  **Limitations**

  GET: Based on RESTful API best practices, the name of the path should be:

`/advertising/{advertisingid}/campaign-direction/{campaigndirectionid}`

This path is structured in a way that follows the resource naming conventions, uses lowercase letters, and separates each segment with a hyphen (-) for improved readability and consistency.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
