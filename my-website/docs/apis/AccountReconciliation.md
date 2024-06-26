<h1 style='color:red;'>AccountReconciliation</h1>

**BIAN Documentation:** [AccountReconciliation v12](https://app.swaggerhub.com/apis/BIAN-3/AccountReconciliation/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/Control</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Control Account Reconciliation Procedure

  **Documentation**

  This BIAN API path allows you to update an existing resource related to account reconciliation. Specifically, it pertains to controlling the account reconciliation procedure for a specific account reconciliation id. This means you can make updates or changes to the account reconciliation process for a particular account by sending a PUT request to this API endpoint.

  **Limitations**

  PUT: The name of the path should be:

`/account-reconciliation/{accountreconciliationid}/controls`

This URI path follows REST best practices by using lowercase letters, separating words with dashes for readability, and using a plural noun to indicate that it represents a collection of resources (controls) related to a specific account reconciliation identified by {accountreconciliationid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Exchange Account Reconciliation Procedure

  **Documentation**

  This API path is used to update an existing account reconciliation task related to an exchange account. It allows users to modify the details or status of a specific account reconciliation task identified by the accountreconciliationid. The purpose of this API is to manage and track account reconciliation activities for exchange accounts efficiently.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

`/account-reconciliation/{accountreconciliationid}/exchange`

In REST, paths should be in lowercase letters and words should be separated by hyphens to improve readability and maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/Execute</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Execute Account Reconciliation Procedure

  **Documentation**

  This API path `/AccountReconciliation/{accountreconciliationid}/Execute` allows users to update an existing account reconciliation task by executing the account reconciliation procedure associated with a specific account reconciliation ID. In simple terms, it allows you to perform tasks related to reconciling accounts by following a specific procedure for a particular account reconciliation ID.

  **Limitations**

  PUT: Following RESTful best practices, the name of the path should be:

'/accounts/{accountId}/reconciliation/execute'

This path is more structured and aligns with the resource being accessed (accounts), the specific account identified by an account ID, the purpose of the operation (reconciliation), and the action being performed (execute).

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountReconciliation/Initiate</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Initiate Account Reconciliation Procedure

  **Documentation**

  This API path `/AccountReconciliation/Initiate` allows users to create a new resource for initiating the account reconciliation procedure. It is a part of the Account Reconciliation Service Domain which manages tasks related to reconciling accounts. By using this API, users can kickstart the account reconciliation process.

  **Limitations**

  POST: If the path '/AccountReconciliation/Initiate' follows REST best practices, its name should be something that represents a resource rather than an action. One possible suggestion could be '/AccountReconciliationRequests' which represents a collection of account reconciliation requests.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/Notify</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Notify Account Reconciliation Procedure

  **Documentation**

  This API path `/AccountReconciliation/{accountreconciliationid}/Notify` is used to retrieve information about a specific account reconciliation task by providing the account reconciliation ID. It is part of a service domain that manages account reconciliation tasks and procedures. This specific endpoint is designed to notify about the account reconciliation procedure related to the given ID.

  **Limitations**

  GET: The name of the path should be '/accounts/{accountId}/reconciliation/notify'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/Request</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Request Account Reconciliation Procedure

  **Documentation**

  This API path allows you to update an existing account reconciliation task by providing the account reconciliation ID. It is used to request the account reconciliation procedure for a specific reconciliation task within the service domain.

  **Limitations**

  PUT: The name of the path should be:

`/account-reconciliation/{accountReconciliationId}/requests`

Following REST best practices, the path should be in lowercase and use hyphens to separate words. The collection name "requests" usually indicates a collection of resources related to a specific account reconciliation.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Retrieve Account Reconciliation Procedure

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific account reconciliation procedure identified by the accountreconciliationid. It is part of a service domain that handles tasks related to reconciling accounts. By using this API, you can access details and data related to the account reconciliation process for the specified account reconciliation ID.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be `/account-reconciliations/{accountReconciliationId}`. This path would use lowercase letters and dash separator for readability, and the endpoint name would indicate the resource being retrieved without including the verb `Retrieve`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/Update</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Update Account Reconciliation Procedure

  **Documentation**

  This BIAN API path allows you to update an existing account reconciliation procedure by providing the specific ID of the account reconciliation that you want to update. It is used to make changes or modifications to the account reconciliation process as needed.

  **Limitations**

  PUT: If the path '/AccountReconciliation/{accountreconciliationid}/Update' were to follow REST best practices, it could be named as:

PATCH /AccountReconciliation/{accountreconciliationid}

This naming convention suggests using the HTTP method PATCH to update the resource identified by the account reconciliation ID.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Exchange</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Exchange Account Assessment Workstep

  **Documentation**

  This BIAN API path is used to update an existing Exchange Account Assessment Workstep as part of account reconciliation tasks. It allows you to make changes or updates to the information related to a specific account reconciliation and account assessment process.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/accounts/{accountId}/assessments/{assessmentId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Exchange</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Exchange Account Resolution Workstep

  **Documentation**

  This API path is used for updating an existing exchange account resolution workstep within the context of account reconciliation. This means that it allows you to make changes or updates to a specific account resolution workstep associated with a particular account reconciliation task identified by the accountreconciliationid and accountresolutionid. The update operation is performed using the PUT method.

  **Limitations**

  PUT: The name of the path should ideally be:

`/account-reconciliation/{accountreconciliationid}/account-resolution/{accountresolutionid}/exchange`

Following REST best practices, it is recommended to use lowercase letters and hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Execute</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Execute Account Assessment Workstep

  **Documentation**

  This API path is used to update and execute a specific task related to account reconciliation. More specifically, it is used to update and execute the workstep for assessing an account within the account reconciliation process. The PUT method is used to update an existing resource, in this case, the account assessment workstep.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

'/accounts/{accountId}/reconciliation/{reconciliationId}/assessment/{assessmentId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Execute</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Execute Account Resolution Workstep

  **Documentation**

  This BIAN API path allows you to update and execute a specific account resolution workstep within the account reconciliation process. This means that you can perform tasks related to resolving discrepancies or issues with accounts by sending a PUT request to this path with the appropriate parameters.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path would be:

'/accounts/{accountId}/resolutions/{resolutionId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/Initiate</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Initiate Account Assessment Workstep

  **Documentation**

  This API path is used to initiate an account assessment workstep as part of account reconciliation tasks. By making a POST request to this endpoint with the specified account reconciliation ID, a new account assessment resource will be created to handle the assessment process for that particular account.

  **Limitations**

  POST: Based on REST best practices, the name of the path should convey the resource that is being acted upon and the action being taken. Therefore, a suitable name for the path following RESTful conventions could be:

`/accounts/{accountreconciliationid}/assessments/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /AccountReconciliation/{accountreconciliationid}/AccountResolution/Initiate</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Initiate Account Resolution Workstep

  **Documentation**

  This API path allows you to initiate an account resolution workstep within the account reconciliation process. By sending a POST request to this endpoint with the specific account reconciliation ID, you can create a new resource to start the account resolution workstep. This function helps streamline the account reconciliation tasks by initiating the necessary steps to resolve any outstanding issues or discrepancies related to the account.

  **Limitations**

  POST: Following REST best practices, the name of the path should be '/accounts/{accountId}/resolutions'. 

The use of plural nouns 'accounts' and 'resolutions' instead of 'AccountReconciliation' and 'AccountResolution' reflects the resource collections in the URI, while using the specific 'accountId' as a parameter to identify the particular account being accessed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Notify</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Notify Account Assessment Workstep

  **Documentation**

  This API path is used to retrieve information about a specific account assessment workstep within the account reconciliation process. The path includes two parameters, accountreconciliationid and accountassessmentid, which are used to identify the specific account reconciliation and assessment workstep being accessed. By making a GET request to this API path, users can retrieve details and information related to the account assessment workstep in the account reconciliation process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:  
'/account-reconciliation/{accountreconciliationid}/account-assessment/{accountassessmentid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Notify</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Notify Account Resolution Workstep

  **Documentation**

  This BIAN API path is used to retrieve information about a specific account resolution workstep related to account reconciliation. By providing the account reconciliation ID and account resolution ID in the URL, you can get details about the notification related to that particular workstep within the account reconciliation process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Notifications

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Request</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Request Account Assessment Workstep

  **Documentation**

  This API path allows you to update an existing account assessment workstep within the account reconciliation process. Specifically, it helps in handling tasks related to reconciling accounts by requesting an account assessment workstep to be carried out for a particular account reconciliation. The PUT method is used to update information or trigger actions related to the specified account assessment within the account reconciliation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/accounts/{accountreconciliationid}/assessments/{accountassessmentid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Request</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Request Account Resolution Workstep

  **Documentation**

  This API path allows you to update an existing account resolution workstep within the account reconciliation process. By sending a PUT request to this path with the specific account reconciliation ID and account resolution ID, you can make changes or updates to the account resolution workstep for that particular account. It is a way to manage and track tasks related to resolving discrepancies or issues with accounts during the reconciliation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

'/accounts/{accountid}/reconciliation/{reconciliationid}/resolution/{resolutionid}/requests' 

This path is more concise, uses lowercase letters, and clearly represents the hierarchical relationship between resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Retrieve Account Assessment Workstep

  **Documentation**

  This API path is used to retrieve information about a specific account assessment workstep in the context of account reconciliation. By providing the account reconciliation ID and the account assessment ID, the API retrieves details related to that particular workstep within the account reconciliation process. This can include information such as the status of the assessment, any actions taken, and any applicable results or recommendations.

  **Limitations**

  GET: A suitable name for this RESTful path could be:

GET '/account-reconciliations/{accountReconciliationId}/account-assessments/{accountAssessmentId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Retrieve Account Resolution Workstep

  **Documentation**

  This API path retrieves information about a specific account reconciliation workstep related to a particular account resolution within the account reconciliation process. It allows you to access details and data associated with a specific step in resolving an account discrepancy or issue.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be something like:

```
/accounts/{accountId}/reconciliations/{reconciliationId}/resolutions/{resolutionId}
```

This path is more descriptive and follows the convention of using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountAssessment/{accountassessmentid}/Update</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Update Account Assessment Workstep

  **Documentation**

  This API path is used to update an existing account assessment workstep within the context of account reconciliation. It allows users to modify the details or status of a specific account assessment task identified by the accountreconciliationid and accountassessmentid. By making a PUT request to this path, users can provide new information or make changes to the existing data related to the account assessment workstep in order to keep the account reconciliation process up to date and accurate.

  **Limitations**

  PUT: The name of the path should be:

'/accounts/{accountid}/assessments/{assessmentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountReconciliation/{accountreconciliationid}/AccountResolution/{accountresolutionid}/Update</span></summary>

  **Description**

  This Service Domain handles account reconciliation tasks Update Account Resolution Workstep

  **Documentation**

  This API path allows you to update an existing resource related to account reconciliation. Specifically, it is used to update the account resolution workstep associated with a particular account reconciliation process by providing the relevant IDs for both the account reconciliation and the account resolution. The PUT method is used to make changes to the specified resource.

  **Limitations**

  PUT: A possible RESTful name for this path following best practices could be:

'/accounts/{accountreconciliationid}/resolutions/{accountresolutionid}/update'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
