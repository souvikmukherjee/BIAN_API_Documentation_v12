<h1 style='color:red;'>InternalAudit</h1>

**BIAN Documentation:** [InternalAudit v12](https://app.swaggerhub.com/apis/BIAN-3/InternalAudit/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Exchange</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance EcCR Accept, verify, etc. aspects of Internal Audit Assessment processing

  **Documentation**

  This API path allows you to update an existing internal audit check within a portfolio. You can select and execute a sample of internal audit checks, identify any non-compliance issues, and manage the assessment process by accepting, verifying, or resolving issues. Essentially, this API helps in maintaining and managing internal audit checks to ensure compliance within the organization.

  **Limitations**

  PUT: The name of the path should be "/internal-audit/{internalauditid}/exchange" in kebab case format. Remember to use lower case letters and separate words with hyphens to adhere to REST best practices for naming URI paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Execute</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance ExCR Execute an available automated action for Internal Audit Assessment

  **Documentation**

  This BIAN API path `/InternalAudit/{internalauditid}/Execute` allows users to update an existing internal audit check by selecting and executing a meaningful sample of checks. It helps in identifying and resolving any non-compliance issues found during the audit process. Additionally, the API provides the capability to execute automated actions for internal audit assessments. Overall, it helps manage internal audit processes efficiently and effectively.

  **Limitations**

  PUT: The name of the path `/InternalAudit/{internalauditid}/Execute` following REST best practices should be something like:

`/internal-audits/{internalauditid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Grant</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance GrCR Obtain permission to act in relation to Internal Audit Assessment

  **Documentation**

  This BIAN API path allows users to update an existing internal audit check by granting permission in relation to an Internal Audit Assessment. Users can select and execute a sample of audit checks, identify any non-compliance issues, and resolve them accordingly.

  **Limitations**

  PUT: The name of the path should be: 

/ InternalAudit/{internalauditid}/Grant 

This path follows REST best practices by using nouns to represent resources and incorporating the specific resource identifier (internalauditid) in the path to access a specific grant related to the internal audit.

</details>

<details open>
  <summary><span style='color:red;'>POST: /InternalAudit/Initiate</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance InCR Instantiate a new Internal Audit Assessment

  **Documentation**

  This BIAN API path allows you to create a new Internal Audit Assessment within your system. It helps in maintaining a portfolio of internal audit checks by selecting and executing a relevant sample of checks. The purpose of this API is to identify any non-compliance issues and work towards resolving them effectively.

  **Limitations**

  POST: If the path '/InternalAudit/Initiate' were following REST best practices, it should be named in a way that is more resource-oriented and represents the functionality it provides. 

A more appropriate RESTful name for this path could be '/audit/initiation' or '/audits'. This naming convention aligns better with REST principles by focusing on the resource being accessed or acted upon ('audit') rather than the specific internal department ('InternalAudit') and action ('Initiate').

</details>

<details open>
  <summary><span style='color:red;'>GET: /InternalAudit/{internalauditid}/Retrieve</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance ReCR Retrieve details about any aspect of Internal Audit Assessment

  **Documentation**

  This API path allows you to retrieve details about a specific Internal Audit assessment identified by the internalauditid. It helps in maintaining a portfolio of internal audit checks, selecting and executing a sample of checks, and then identifying and resolving any non-compliance issues found during the audit process.

  **Limitations**

  GET: A possible name for the path '/InternalAudit/{internalauditid}/Retrieve' following REST best practices could be:

```
GET /internal-audits/{internalauditid}
``` 

This naming convention uses lowercase letters, dashes for readability, and specifies the action being performed in a clear and concise manner.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Request</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance RqCR Request manual intervention or a decision with respect to Internal Audit Assessment

  **Documentation**

  This API path allows you to update an existing internal audit check by requesting manual intervention or a decision related to the internal audit assessment. It is used to maintain a list of internal audit checks, select and execute a sample of those checks, identify any compliance issues, and resolve them. This path helps in managing the internal audit process efficiently by allowing for manual input or decision-making when needed.

  **Limitations**

  PUT: The name of the path should be '/internal-audit/{internalauditid}/request' in kebab-case format to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Update</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance UpCR Update details relating to Internal Audit Assessment

  **Documentation**

  This API path allows users to update details related to an Internal Audit Assessment. Users can maintain a portfolio of internal audit checks, select and execute a sample of these checks, and identify and resolve any non-compliance issues. The PUT method is used to update existing information within the internal audit system.

  **Limitations**

  PUT: The name of the path '/InternalAudit/{internalauditid}/Update' following REST best practices could be:

PUT /InternalAudit/{internalauditid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Audit/{auditid}/Exchange</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance EcBQ Accept, verify, etc. aspects of Audit processing

  **Documentation**

  This API path allows you to update information related to internal audits by maintaining a portfolio of audit checks. You can select and execute a sample of checks, identify non-compliance issues, and resolve them. This process involves accepting, verifying, and managing various aspects of audit processing. By using the PUT method with this path, you can make updates to existing audit resources.

  **Limitations**

  PUT: The name of the path should be: '/internal-audit/{internalauditid}/audit/{auditid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Audit/{auditid}/Execute</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance ExBQ Execute an available automated action for Audit

  **Documentation**

  This BIAN API path allows you to update an existing internal audit check within a portfolio. Specifically, it enables you to select and execute a relevant sample of internal audit checks, identify any instances of non-compliance, and resolve them. Additionally, you can trigger the execution of an available automated action for the audit process.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/internal-audit/{internalauditid}/audit/{auditid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Audit/{auditid}/Grant</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance GrBQ Obtain permission to act in relation to Audit

  **Documentation**

  This API path allows you to update and maintain a portfolio of internal audit checks. Specifically, it focuses on selecting and executing a significant sample of these checks, identifying any instances of non-compliance, and resolving them. The endpoint Grant pertains to obtaining permission to take action concerning the audit in question.

  **Limitations**

  PUT: The name of the path should be:

`/internal-audit/{internalauditid}/audit/{auditid}/grant`

In the above path:
- Resource names are in lowercase to follow best practices.
- Hyphens are used for better readability.
- The path segments represent a hierarchical structure with resource identifiers.

</details>

<details open>
  <summary><span style='color:red;'>POST: /InternalAudit/{internalauditid}/Audit/Initiate</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance InBQ Instantiate a new Audit

  **Documentation**

  This API path allows you to create a new internal audit check within a portfolio. It enables you to select and execute a set of checks to identify any non-compliance issues. The goal is to initiate a new audit process to ensure that internal operations are in line with required standards and regulations.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:
'/internal-audit/{internalauditid}/audit/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /InternalAudit/{internalauditid}/Audit/{auditid}/Retrieve</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance ReBQ Retrieve details about any aspect of Audit

  **Documentation**

  This API path allows you to retrieve details about a specific internal audit check within a portfolio of internal audit checks. By providing the `internalauditid` and `auditid`, you can access information related to a particular audit check. This API is helpful for maintaining internal audit records, selecting and executing necessary audit checks, and identifying and resolving any non-compliance issues that may arise during the auditing process.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/InternalAudit/{internalauditid}/Audit/{auditid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Audit/{auditid}/Request</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance RqBQ Request manual intervention or a decision with respect to Audit

  **Documentation**

  This BIAN API path allows you to update an existing internal audit check within a portfolio. You can select and execute a sample of checks, identify any non-compliance issues, and request manual intervention or make a decision related to the audit process. Essentially, it helps manage and track internal audit activities, ensuring compliance and addressing any issues that may arise during the audit process.

  **Limitations**

  PUT: The name of the resource path '/InternalAudit/{internalauditid}/Audit/{auditid}/Request' following REST best practices could be named as:

'/internal-audits/{internalauditid}/audits/{auditid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalAudit/{internalauditid}/Audit/{auditid}/Update</span></summary>

  **Description**

  Maintain and portfolio of internal audit checks. Select and execute a meaningful sample of checks and identify and resolve non-compliance UpBQ Update details relating to Audit

  **Documentation**

  This API path allows users to update details related to an internal audit within a portfolio of internal audit checks. Users can select and execute a sample of checks, identify any non-compliance issues, and resolve them. The PUT method is used to update existing resources and ensure that all information related to the audit is accurate and up-to-date.

  **Limitations**

  PUT: The name of the path should be:

/audits/{internalauditid}/audits/{auditid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
