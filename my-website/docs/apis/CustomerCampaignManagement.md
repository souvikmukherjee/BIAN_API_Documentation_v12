<h1 style='color:red;'>CustomerCampaignManagement</h1>

**BIAN Documentation:** [CustomerCampaignManagement v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCampaignManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignManagement/Create</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly CrCR Create and invoke the customer campaign portfolio management plan

  **Documentation**

  This API path allows users to create a new resource for managing customer campaigns. Specifically, it helps assess the effectiveness and reach of internal and customer campaigns. Users can develop plans to optimize campaign activities based on this assessment. It aims to improve the overall management of a portfolio of customer campaigns.

  **Limitations**

  POST: The path should be ideally named as '/customer-campaigns'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of the customer campaign portfolio management plan

  **Documentation**

  This specific BIAN API path allows users to update details related to the customer campaign portfolio management plan. It enables users to assess how internal and customer campaigns are performing in terms of their coverage and impact. Users can make changes to the campaign development and execution activities based on this assessment to ensure that the overall campaign management plan is aligned with the desired goals and objectives.

  **Limitations**

  PUT: The name of the path should be '/CustomerCampaignManagement/{customercampaignmanagementid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly RqCR Request manual intervention in the campaign plan

  **Documentation**

  This BIAN API path allows users to update an existing customer campaign management resource by requesting manual intervention in the campaign plan. By assessing the coverage and impact of internal or customer campaigns, users can redirect campaign development and execution activities accordingly. This can help improve the effectiveness of the campaigns by allowing for adjustments based on the assessment results.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-campaign-management/{customercampaignmanagementid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignManagement/{customercampaignmanagementid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ReCR Retrieve details about the customer campaign portfolio management plan

  **Documentation**

  This BIAN API path allows users to retrieve details about a specific customer campaign management plan identified by a unique customercampaignmanagementid. It is used to assess the effectiveness and reach of internal or customer campaigns, helping to make informed decisions on adjusting campaign development and execution strategies.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured in a way that describes the resource being referenced by the endpoint. In this case, the path appears to be related to retrieving a specific customer campaign management resource identified by `customercampaignmanagementid`. 

A more RESTful naming convention for the path could be:

`/customer-campaign-management/{customercampaignmanagementid}`

This path clearly indicates that it is retrieving a specific customer campaign management resource identified by its ID.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/MarketTracking/{markettrackingid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of the market tracking activity

  **Documentation**

  This API path allows users to update details related to market tracking activities within a specific customer campaign management context. It helps assess the effectiveness and reach of internal or customer campaigns and provides insights to guide future campaign development and execution strategies. By updating the market tracking information, users can monitor and adjust their campaign activities based on real-time data and analysis.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-campaign-management/{customercampaignmanagementid}/market-tracking/{markettrackingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/MarketTracking/{markettrackingid}/Execute</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ExBQ Execute an automated task for the tracking activity

  **Documentation**

  This API path allows you to update an existing resource related to customer campaign management and market tracking. By executing a PUT request to this path, you can assess the coverage and impact of internal or customer campaigns. Additionally, you can automate tasks for tracking activities, which helps in monitoring campaign performance and making informed decisions for future campaign development and execution.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

`/customer-campaigns/{customercampaignmanagementid}/market-tracking/{markettrackingid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/MarketTracking/{markettrackingid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention in the market tracking

  **Documentation**

  This BIAN API path allows you to update an existing market tracking request associated with a specific customer campaign management. The purpose is to assess the effectiveness and reach of internal or customer campaigns. If manual intervention is needed in the market tracking process to redirect campaign development and execution efforts based on the assessment results, this API can be used to request that intervention.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured to represent the resources in a hierarchical manner. Here is a suggestion for the path name:

/CustomerCampaignManagements/{customercampaignmanagementid}/MarketTrackings/{markettrackingid}/Requests

In this naming convention:
- Plural nouns are used for resources (/CustomerCampaignManagements, /MarketTrackings)
- Path parameters are represented in curly braces ({customercampaignmanagementid}, {markettrackingid})
- Resources

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignManagement/{customercampaignmanagementid}/MarketTracking/{markettrackingid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about the market tracking activity

  **Documentation**

  This API path allows users to retrieve details about the market tracking activity within a specific customer campaign management project. By using this API, users can assess the effectiveness and reach of internal or customer campaigns and make informed decisions on how to adjust campaign development and execution strategies.

  **Limitations**

  GET: The name of the path should be:

'/customers/{customerId}/campaigns/{campaignId}/market-tracking/{trackingId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/Create</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly CrBQ Create a performance assessment of the customer campaign portfolio

  **Documentation**

  This API endpoint, located at /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/Create, allows users to assess the effectiveness and impact of their customer campaigns. By submitting a POST request to this path, users can create a new performance assessment for a specific customer campaign. This assessment helps evaluate how well the campaigns are reaching their target audience and achieving their intended goals. The information gathered from this assessment can then be used to make informed decisions on how to improve future campaign development and execution activities.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/customer-campaign-management/{customercampaignmanagementid}/performance-assessment'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of a customer campaign portfolio assessment

  **Documentation**

  This API path allows you to update the details of a customer campaign portfolio assessment within the Customer Campaign Management system. It specifically focuses on assessing the coverage and impact of internal or customer-related campaigns. By updating the information related to a specific performance assessment identified by the customercampaignmanagementid and performanceassessmentid, you can redirect the development and execution activities of campaigns based on the assessment results.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-management/{customercampaignmanagementid}/performance-assessment/{performanceassessmentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Execute</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ExBQ Execute an automated action for a performance assessment

  **Documentation**

  This API path is for updating an existing performance assessment within customer campaign management. By calling this API and providing the necessary IDs, you can trigger an automated action for assessing the coverage and impact of campaigns run for internal or external customers. This assessment helps in evaluating the effectiveness of campaigns and guides future decision-making on campaign development and execution activities.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-management/{customerCampaignManagementId}/performance-assessment/{performanceAssessmentId}/execute'

Following REST best practices, the path should be in lowercase letters, separate words with hyphens, and use plural nouns for resources. Also, it is recommended to use kebab-case for naming conventions in paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention to a performance assessment

  **Documentation**

  This API path allows users to update an existing performance assessment for a specific customer campaign management activity. The purpose is to evaluate the effectiveness and impact of internal or customer campaigns and make necessary adjustments to the campaign development and execution strategies. Users can request manual intervention for a performance assessment to analyze the coverage and impact of campaigns and redirect activities appropriately based on the assessment results.

  **Limitations**

  PUT: The RESTful naming convention for this path would be:

/CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignManagement/{customercampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about customer campaign performance assessment activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the performance assessment activity of a specific customer campaign within the Customer Campaign Management system. It helps you assess how effective the campaign was in terms of coverage and impact on customers. This information can then be used to adjust and improve future campaign development and execution strategies.

  **Limitations**

  GET: Based on REST best practices, a better name for this path might be:

'/customers/{customerid}/campaigns/{campaignid}/performance/assessments/{assessmentid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection/Create</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly CrBQ Create customer campaign direction schedules

  **Documentation**

  This API path allows you to create new customer campaign direction schedules within the Customer Campaign Management system. It helps assess the effectiveness of internal and customer campaigns, and redirects campaign development and execution activities based on this assessment. By utilizing this path, you can set up schedules for directing customer campaigns, enabling better management and coordination of marketing efforts to optimize results.

  **Limitations**

  POST: The name of the path should be something like:

POST /CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection

This follows REST best practices by using HTTP method POST to create a new resource under the specified parent resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly UpBQ Update the customer campaign design and execution schedules

  **Documentation**

  This API path allows you to update an existing customer campaign direction within the Customer Campaign Management system. By making a PUT request to this endpoint with the appropriate customercampaignmanagementid and campaigndirectionid, you can assess the effectiveness of internal or customer campaigns, make any necessary adjustments to the campaign design or schedule, and redirect campaign development and execution activities accordingly.

  **Limitations**

  PUT: The path name should follow REST best practices by using nouns to represent resources and avoiding verbs. Based on the provided path, a more suitable naming convention would be:

'/CustomerCampaigns/{customercampaignmanagementId}/CampaignDirections/{campaigndirectionId}'

This naming convention follows the RESTful approach of using resource names and identifiers to convey the meaning of the endpoint.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention to the schedules

  **Documentation**

  This API path allows you to update an existing customer campaign direction by assessing its coverage and impact. You can request manual intervention to the schedules if needed, in order to redirect the development and execution activities of the campaign accordingly.

  **Limitations**

  PUT: The path could be named as follows if following REST best practices: 

/CustomerCampaignManagements/{customercampaignmanagementid}/CampaignDirections/{campaigndirectionid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of internal/customer campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about the campaign design and execution direction and scheduling activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the campaign design and execution direction, as well as scheduling activity for a specific customer campaign. By using this API, you can assess the coverage and impact of internal or customer campaigns and make decisions to adjust campaign development and execution activities accordingly.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/CustomerCampaignManagement/{customercampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Retrieve' could be:

'/customer-campaigns/{customercampaignmanagementid}/directions/{campaigndirectionid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
