<h1 style='color:red;'>CustomerCampaignExecution</h1>

**BIAN Documentation:** [CustomerCampaignExecution v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCampaignExecution/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignExecution/Initiate</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact InCR Initiate customer campaign processing

  **Documentation**

  This BIAN API path allows users to initiate the execution of a customer campaign (version) through a POST request. By using this API, users can start the processing of a specific customer campaign and track and respond to its impact. Essentially, this API facilitates the activation of a targeted marketing campaign aimed at customers and provides tools to monitor its effectiveness and make necessary adjustments.

  **Limitations**

  POST: The name of the path should be `/campaigns`.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignExecution/{customercampaignexecutionid}/Retrieve</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact ReCR Retrieve details about an active customer campaign

  **Documentation**

  This BIAN API path allows you to retrieve details about an active customer campaign execution. You can use this API endpoint to access information related to a specific customer campaign execution by providing the unique ID associated with that campaign execution. The data retrieved may include details about the campaign, such as its status, progress, impact, and any responses or actions taken in response to the campaign's performance.

  **Limitations**

  GET: Following REST best practices, the name of the path for retrieving a specific customer campaign execution resource would typically be:

GET /customer-campaign-executions/{customercampaignexecutionid}

The path should be in lowercase and use hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignExecution/{customercampaignexecutionid}/CandidateSelection/{candidateselectionid}/Update</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact UpBQ Update a campaign candidate list

  **Documentation**

  This API path allows you to update the list of candidates for a particular customer campaign execution. You can make changes to the selected candidates for the campaign, such as adding new candidates or removing existing ones. By using this API, you can manage and adjust the target audience for the campaign before executing it.

  **Limitations**

  PUT: Following REST best practices, the path could be named as:

'/customer-campaign-executions/{customerCampaignExecutionId}/candidate-selections/{candidateSelectionId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignExecution/{customercampaignexecutionid}/CandidateSelection/{candidateselectionid}/Retrieve</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact ReBQ Retrieve details about a campaign candidate list

  **Documentation**

  This API path retrieves information about a specific campaign candidate list that is part of the process of executing a customer campaign. It allows the user to view details about the candidate selection related to a customer campaign execution identified by customercampaignexecutionid and the specific candidate selection identified by candidateselectionid. This information can be useful for tracking and evaluating the impact of the campaign on the selected customers.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:
'/customer-campaign-executions/{customer_campaign_execution_id}/candidate-selections/{candidate_selection_id}/retrieval'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignExecution/{customercampaignexecutionid}/Execution/Initiate</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact InBQ Initiate a campaign execution task

  **Documentation**

  This API path is used to initiate a task for executing a specific customer campaign version. It allows you to start the process of executing a campaign targeted at customers and monitoring its impact. By making a POST request to this path with the appropriate customercampaignexecutionid, you can create a new resource to track the initiation of the campaign execution task. This API is designed to support the execution and monitoring of customer campaigns within a banking context.

  **Limitations**

  POST: A more RESTful name for the path '/CustomerCampaignExecution/{customercampaignexecutionid}/Execution/Initiate' could be '/customer-campaign-executions/{executionId}/initiate'. 

This naming convention follows REST best practices by using lowercase letters, using hyphens to separate words, and using plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignExecution/{customercampaignexecutionid}/Execution/{executionid}/Update</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact UpBQ Update details of a campaign execution task

  **Documentation**

  This API path allows you to update the details of a specific task related to the execution of a customer campaign. You can modify and track the progress of executing a specific version of a customer campaign, and also record any impacts or responses to the campaign execution. By sending a PUT request to this path with the necessary parameters, you can make changes to the specified campaign execution task.

  **Limitations**

  PUT: The following path closely follows REST best practices:

'/customer-campaign-executions/{customerCampaignExecutionId}/executions/{executionId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignExecution/{customercampaignexecutionid}/Execution/{executionid}/Request</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact RqBQ Request manual intervention in a campaign execution task

  **Documentation**

  This BIAN API path allows you to update an existing resource related to executing a customer campaign. Specifically, it is used to execute a customer campaign version and track and respond to the impact. It also provides the ability to request manual intervention if needed during the campaign execution task. By making a PUT request to this path with the appropriate parameters, you can update the execution details of a customer campaign and manage any manual interventions that may be required.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
'/customer-campaign-executions/{customercampaignexecutionid}/executions/{executionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignExecution/{customercampaignexecutionid}/Execution/{executionid}/Retrieve</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact ReBQ Retrieve details about a campaign execution task

  **Documentation**

  This BIAN API path is used to retrieve information about a specific customer campaign execution task. It allows users to get details about a campaign execution related to a particular customer campaign and its version. By using this API, users can track and respond to the impact of the campaign execution. The path specifies the customercampaignexecutionid and executionid to uniquely identify the task for which information needs to be retrieved.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
GET /customer-campaign-executions/{customercampaignexecutionid}/executions/{executionid}
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignExecution/{customercampaignexecutionid}/AnalysisFeedback/Initiate</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact InBQ Initiate campaign execution analysis

  **Documentation**

  This BIAN API path is used to initiate the analysis feedback for executing a customer campaign. It allows you to create a new resource to track and respond to the impact of the campaign execution. By providing the customercampaignexecutionid in the URL, you can trigger the process of analyzing the results of the campaign execution and gathering feedback on its performance. This API is part of a system that helps manage customer campaigns and evaluate their effectiveness.

  **Limitations**

  POST: The name of the path should be: '/customer-campaign-executions/{customercampaignexecutionid}/analysis-feedback/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignExecution/{customercampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Update</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact UpBQ Update details of campaign execution activity/performance analysis

  **Documentation**

  This API path, /CustomerCampaignExecution/{customercampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Update with PUT method, is used to update details related to the execution of a customer campaign. It allows users to update information on the activity and performance analysis of the campaign execution. By providing the customercampaignexecutionid and analysisfeedbackid parameters, users can specify the particular campaign execution and analysis feedback they want to update. This API is useful for tracking and managing the progress and effectiveness of customer campaigns.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-executions/{customerCampaignExecutionId}/analysis-feedback/{analysisFeedbackId}'

This path follows REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for resources (customer-campaign-executions and analysis-feedback). The use of curly braces {} indicates variable parts of the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignExecution/{customercampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Request</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact ReBQ Request manual intervention in campaign analysis

  **Documentation**

  This BIAN API path allows you to update an existing customer campaign execution by providing feedback related to the analysis of the campaign. Specifically, it enables you to request manual intervention in the campaign analysis process to address any issues or make improvements. By calling this API with the appropriate parameters, you can trigger actions to improve the effectiveness of the customer campaign based on the feedback received.

  **Limitations**

  PUT: The name of the path should be: /customer-campaign-executions/{customercampaignexecutionid}/analysis-feedbacks/{analysisfeedbackid}/request

Here are the reasons for the chosen path name:
1. Lowercase letters with hyphens are used for better readability and consistency.
2. Plural nouns are used for the collection resources (customer-campaign-executions and analysis-feedbacks).
3. The specific resource IDs (customercampaignexecutionid and analysisfeedbackid) are included in

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignExecution/{customercampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Retrieve</span></summary>

  **Description**

  Execute a customer campaign (version) and track and respond to impact ReBQ Retrieve details about customer campaign analysis activity

  **Documentation**

  This BIAN API path allows you to retrieve information about the activity and details of a customer campaign analysis feedback. You can access the analysis feedback related to a specific customer campaign execution by providing the customercampaignexecutionid and analysisfeedbackid as parameters. This information helps you track and respond to the impact of executing a customer campaign version.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/customer-campaign-executions/{customer_campaign_execution_id}/analysis-feedback/{analysis_feedback_id}/retrieve'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
