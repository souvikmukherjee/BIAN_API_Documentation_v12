<h1 style='color:red;'>ProspectCampaignManagement</h1>

**BIAN Documentation:** [ProspectCampaignManagement v12](https://app.swaggerhub.com/apis/BIAN-3/ProspectCampaignManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignManagement/Create</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly CrCR Create and invoke the prospect campaign portfolio management plan

  **Documentation**

  This BIAN API path allows users to create a new resource for managing external and prospect campaigns. The API helps assess the effectiveness and reach of these campaigns so that adjustments can be made to improve their impact. By invoking the prospect campaign portfolio management plan, users can redirect resources and efforts to optimize the development and execution of these campaigns.

  **Limitations**

  POST: If the path "/ProspectCampaignManagement/Create" followed REST best practices, it should be named using a noun to describe the resource that is being created. A more appropriate name would be "/prospects" or "/campaigns" depending on whether the resource being created is related to prospects or campaigns.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of the customer campaign portfolio management plan

  **Documentation**

  This BIAN API path allows you to update details related to prospect campaign management. Specifically, it helps assess the effectiveness and reach of external or prospect campaigns. By using this API, you can analyze the impact of these campaigns and make necessary adjustments to your campaign development and execution strategies. It provides a way to edit and update information in the customer campaign portfolio management plan to ensure that your campaigns are optimized for success.

  **Limitations**

  PUT: The name of the path should be: `/prospect-campaigns/{prospectcampaignmanagementid}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly RqCR Request manual intervention in the campaign plan

  **Documentation**

  This API path allows you to update an existing prospect campaign management resource by requesting manual intervention in the campaign plan. This could involve assessing the effectiveness of external or prospect campaigns, redirecting the development and execution of campaigns as needed, and requesting manual review or adjustment of the campaign plan.

  **Limitations**

  PUT: The name of the path should be:
/ProspectCampaignManagement/{prospectcampaignmanagementid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignManagement/{prospectcampaignmanagementid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ReCR Retrieve details about the prospect campaign portfolio management plan

  **Documentation**

  This API path allows you to retrieve details about a prospect campaign portfolio management plan. It helps assess the coverage and impact of external/prospect campaigns and provides information that can be used to redirect campaign development and execution activities.

  **Limitations**

  GET: A suitable name for the path '/ProspectCampaignManagement/{prospectcampaignmanagementid}/Retrieve' following REST best practices would be:

GET /prospect-campaign-management/{prospectcampaignmanagementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/MarketTracking/{markettrackingid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of the market tracking activity

  **Documentation**

  This API path allows users to update the details of market tracking activities related to prospect campaign management. It helps in assessing the coverage and impact of external/prospect campaigns, and based on this assessment, redirects the development and execution activities of campaigns. Essentially, it provides a way to adjust and improve campaign strategies based on real-time market tracking data.

  **Limitations**

  PUT: The name of the path should be: `/prospect-campaign-management/{prospectcampaignmanagementid}/market-tracking/{markettrackingid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/MarketTracking/{markettrackingid}/Execute</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ExBQ Execute an automated task for the tracking activity

  **Documentation**

  This BIAN API path is used for updating and executing automated tasks related to tracking the coverage and impact of external/prospect campaigns within the Prospect Campaign Management system. By calling this API endpoint with specific IDs for the prospect campaign and market tracking, users can trigger an automated task that will assess the effectiveness of the campaigns and adjust the development and execution activities accordingly. This path helps users to monitor and analyze the success of their marketing campaigns and make data-driven decisions to improve their future campaigns.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/prospect-campaigns/{prospect-campaign-id}/market-tracking/{market-tracking-id}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/MarketTracking/{markettrackingid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention in the market tracking

  **Documentation**

  This BIAN API path allows you to update an existing resource related to prospect campaign management and market tracking. It specifically focuses on assessing the coverage and impact of external/prospect campaigns. By making a PUT request to this path, you can request manual intervention in the market tracking process, which may involve redirecting campaign development and execution activities based on the evaluation of campaign effectiveness.

  **Limitations**

  PUT: The recommended name for this path based on REST best practices would be:

/prospect-campaigns/{prospectCampaignId}/market-tracking/{marketTrackingId}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignManagement/{prospectcampaignmanagementid}/MarketTracking/{markettrackingid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about the market tracking activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the market tracking activity within a specific prospect campaign management. It helps assess the coverage and impact of external or prospect campaigns and provides information that can be used to adjust campaign development and execution activities.

  **Limitations**

  GET: The name of the path should be:

```
/ProspectCampaignManagement/{prospectcampaignmanagementid}/MarketTracking/{markettrackingid}
``` 

In REST API design, the endpoint URL should represent a resource or a collection of resources. Including "Retrieve" in the path is not necessary as it is implied that the client is retrieving information when making a GET request to that endpoint.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/Create</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly CrBQ Create a performance assessment of the customer campaign portfolio

  **Documentation**

  This BIAN API path is used to create a new resource for assessing the performance of external or prospect campaigns that are targeted towards potential customers. The purpose is to evaluate the effectiveness of these campaigns in reaching and engaging with the target audience. The assessment helps in determining the coverage and impact of the campaigns and allows for adjustments to be made to future campaign development and execution strategies. The goal is to optimize the customer campaign portfolio based on the insights gained from the assessment.

  **Limitations**

  POST: The name of the path should be:

`POST /prospect-campaign-management/{prospect_campaign_management_id}/performance-assessment`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly UpBQ Update details of a prospect campaign portfolio assessment

  **Documentation**

  This BIAN API path allows you to update the details of a prospect campaign portfolio assessment within the prospect campaign management system. It is used to assess the coverage and impact of external or prospect campaigns and then adjust the development and execution activities of those campaigns based on the assessment results. By making a PUT request to this endpoint with the relevant IDs, you can modify the information related to the performance assessment of a particular campaign within the portfolio.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ProspectCampaignManagements/{prospectcampaignmanagementid}/PerformanceAssessments/{performanceassessmentid}
```

And the HTTP method for updating a resource should be PUT or PATCH. So, the complete path can be:

```
PUT /ProspectCampaignManagements/{prospectcampaignmanagementid}/PerformanceAssessments/{performanceassessmentid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Execute</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ExBQ Execute an automated action for a performance assessment

  **Documentation**

  This API path allows you to update and execute an automated action for assessing the performance of external/prospect campaigns. By providing the Prospect Campaign Management ID and Performance Assessment ID, you can trigger an evaluation of the coverage and impact of the campaigns. This analysis can help determine how successful the campaigns have been and guide future development and execution activities to improve effectiveness.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ProspectCampaigns/{prospectcampaignid}/PerformanceAssessments/{performanceassessmentid}/Execute
``` 

Here are the changes made:
- Changed "ProspectCampaignManagement" to "ProspectCampaigns" to use the plural form for resource names.
- Removed "Management" and "Assessment" from the path to keep resource names concise and focused on the main entity being manipulated.
- Updated path

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention to a performance assessment

  **Documentation**

  This BIAN API path is used for managing prospect campaigns. Specifically, it allows for assessing the coverage and impact of external/prospect campaigns. By updating the resource, you can redirect the development and execution of campaigns based on the assessment. Additionally, the API can be used to request manual intervention for a performance assessment related to the campaign.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

```
/ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Requests
```

This path is clear, descriptive, hierarchical, and follows the plural naming convention for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignManagement/{prospectcampaignmanagementid}/PerformanceAssessment/{performanceassessmentid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about prospect campaign performance assessment activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the performance assessment of prospect campaigns in order to evaluate the coverage and impact of external/prospect campaigns effectively. By accessing this path with the specified IDs, you can review information that helps in analyzing the success of campaigns and make decisions on how to adjust campaign development and execution strategies to maximize effectiveness.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows: 

```
/ProspectCampaignManagement/{prospectcampaignmanagementId}/PerformanceAssessment/{performanceassessmentId}
```

This path is designed to adhere to RESTful principles by using descriptive resource names, utilizing camel case for parameter naming, and avoiding verbs in the URL to focus on the resource itself.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/Create</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly CrBQ Create prospect campaign direction schedules

  **Documentation**

  This BIAN API path is used for Prospect Campaign Management. It allows the user to create a new resource related to a prospect campaign direction schedule. This involves evaluating the reach and influence of external/prospect campaigns and adjusting campaign development and execution activities as needed. Essentially, it helps in planning and scheduling the direction of prospect campaigns based on their effectiveness and overall impact.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirections'

This path follows the convention of using plural nouns for resource names and avoids using verbs or actions in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Update</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly UpBQ Update the prospect campaign design and execution schedules

  **Documentation**

  This API path allows you to update an existing resource related to prospect campaign management. Specifically, you can assess the coverage and impact of external or prospect campaigns and make adjustments to the campaign development and execution activities based on this assessment. You can also update the design and scheduling of prospect campaigns through this API.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:  

/ProspectCampaignManagements/{prospectcampaignmanagementid}/CampaignDirections/{campaigndirectionid}  

This path follows the convention of using plural nouns for resource names and separates different resources using a forward slash.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Request</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly RqBQ Request manual intervention to the schedules

  **Documentation**

  This API path allows you to update an existing prospect campaign direction by requesting manual intervention to the schedules. It is used to assess how external/prospect campaigns are performing in terms of coverage and impact, and make adjustments to the campaign development and execution activities based on this assessment. By using this API, you can ensure that the campaigns are effectively reaching the target audience and achieving the desired impact.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be as follows:

/ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Request

This path is structured to follow a hierarchical pattern and uses resource identifiers to clearly indicate the relationship between the resources. It reflects the nested nature of the resources involved in the prospect campaign management process.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/{campaigndirectionid}/Retrieve</span></summary>

  **Description**

  Assess the coverage and impact of external/prospect campaigns and redirect campaign development and execution activity accordingly ReBQ Retrieve details about the campaign design and execution direction and scheduling activity

  **Documentation**

  This API path allows you to retrieve details about the design, direction, and scheduling activities of a specific campaign within prospect campaign management. It helps assess the coverage and impact of external/prospect campaigns, allowing you to make informed decisions on how to adjust campaign development and execution strategies accordingly.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/ProspectCampaignManagement/{prospectcampaignmanagementid}/CampaignDirection/{campaigndirectionid}

This path should be used for retrieving a specific campaign direction associated with a prospect campaign management resource.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
