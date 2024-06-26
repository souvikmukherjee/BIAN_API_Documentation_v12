<h1 style='color:red;'>GuidelineCompliance</h1>

**BIAN Documentation:** [GuidelineCompliance v12](https://app.swaggerhub.com/apis/BIAN-3/GuidelineCompliance/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /GuidelineCompliance/Evaluate</span></summary>

  **Description**

  This service domain develops and applies a portfolio of guideline compliance tests to confirm adherence to bank and regulator imposed internal procedures. Tests may be made on complete transaction data or a meaningful samples as appropriate to mitigate exposure to non-compliant behaviors. Compliance checks may be in response to a schedule, a specific request as part of normal processing or may be initiated randomly as an oversight activity EvCR Start a guideline compliance evaluation assessment

  **Documentation**

  This API path, /GuidelineCompliance/Evaluate, is used to initiate a new assessment process to evaluate whether a bank or financial institution is following the guidelines and regulations set by both the institution itself and regulatory authorities. This assessment involves conducting tests on transaction data to ensure compliance with internal procedures and external regulations. The assessment can be triggered based on a schedule, specific request, or randomly to oversee and prevent non-compliant behaviors.

  **Limitations**

  POST: The name of the path '/GuidelineCompliance/Evaluate' should ideally be a noun representing a resource rather than a verb. So a more RESTful naming for this path could be '/compliance-reports' or '/guideline-evaluations'. This provides a clearer indication of the resource being accessed or manipulated at that endpoint.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /GuidelineCompliance/{guidelinecomplianceid}/Update</span></summary>

  **Description**

  This service domain develops and applies a portfolio of guideline compliance tests to confirm adherence to bank and regulator imposed internal procedures. Tests may be made on complete transaction data or a meaningful samples as appropriate to mitigate exposure to non-compliant behaviors. Compliance checks may be in response to a schedule, a specific request as part of normal processing or may be initiated randomly as an oversight activity UpCR Update submitted details or content for an on-going guideline compliance assessment

  **Documentation**

  This API path allows you to update the details or content of an existing Guideline Compliance assessment. It is used to submit new information related to the compliance tests being conducted to ensure adherence to bank and regulator imposed internal procedures. This update could be part of a routine check, a specific request, or a random oversight activity to verify compliance with guidelines.

  **Limitations**

  PUT: The name of the path should be:

```
PATCH /guidelinecompliances/{guidelinecomplianceid}
```

Following REST best practices, the HTTP method `PATCH` is typically used to update an existing resource. The path should be in lowercase and use plural nouns to represent resources. The `{guidelinecomplianceid}` should be included as a parameter in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /GuidelineCompliance/{guidelinecomplianceid}/Retrieve</span></summary>

  **Description**

  This service domain develops and applies a portfolio of guideline compliance tests to confirm adherence to bank and regulator imposed internal procedures. Tests may be made on complete transaction data or a meaningful samples as appropriate to mitigate exposure to non-compliant behaviors. Compliance checks may be in response to a schedule, a specific request as part of normal processing or may be initiated randomly as an oversight activity ReCR Retrieve details and content from an active guideline compliance assessment

  **Documentation**

  This API path allows users to retrieve details and content from an active guideline compliance assessment. The service domain conducts various compliance tests to ensure that banks and regulators are following internal procedures. Users can access information about these tests, which may involve analyzing transaction data or samples to identify any non-compliant behaviors. The assessments can be scheduled, requested, or randomly initiated for oversight purposes.

  **Limitations**

  GET: The name of the resource should ideally be a noun representing the collection of guideline compliance entities. In this case, a suitable name for the path '/GuidelineCompliance/{guidelinecomplianceid}/Retrieve' according to REST best practices could be:

'/GuidelineCompliances/{guidelinecomplianceid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
