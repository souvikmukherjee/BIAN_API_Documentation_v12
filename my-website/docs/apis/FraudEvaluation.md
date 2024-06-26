<h1 style='color:red;'>FraudEvaluation</h1>

**BIAN Documentation:** [FraudEvaluation v12](https://app.swaggerhub.com/apis/BIAN-3/FraudEvaluation/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FraudEvaluation/Evaluate</span></summary>

  **Description**

  The service domain executes fraud behavioral pattern tests to detect possible fraudulent transactions/activity EvCR Start a fraud evaluation for a production transaction set

  **Documentation**

  This API path allows you to initiate a fraud evaluation process for a set of actual transactions. The system will run tests to analyze the transactions for any suspicious patterns that may indicate fraudulent activity. This can help detect and prevent potential fraud within the transaction data.

  **Limitations**

  POST: The name of the path '/FraudEvaluation/Evaluate' following REST best practices would generally be simpler and focused on the resource itself. A more appropriate name for the path could be '/evaluations'. This named path is more concise and aligns better with RESTful conventions by emphasizing the resource (evaluations) rather than the specific action (evaluate).

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudEvaluation/{fraudevaluationid}/Retrieve</span></summary>

  **Description**

  The service domain executes fraud behavioral pattern tests to detect possible fraudulent transactions/activity ReCr Retrieve details about a fraud evaluation assessment

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific fraud evaluation assessment by providing the ID of the evaluation. The service domain uses fraud behavioral pattern tests to identify potential fraudulent transactions or activities, and with this API, you can access information related to a particular fraud evaluation, such as its results and findings.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

GET /fraud-evaluations/{fraud-evaluation-id}

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudEvaluation/{fraudevaluationid}/RuleSetsandDecisionTrees/{rulesetsanddecisiontreesid}/Retrieve</span></summary>

  **Description**

  The service domain executes fraud behavioral pattern tests to detect possible fraudulent transactions/activity ReBQ Retrieve details about rule set or decision tree based tests applied

  **Documentation**

  This API path allows you to retrieve details about specific rule sets and decision trees that are applied in fraud evaluation. It serves to provide information about the tests that are used to detect fraudulent transactions or activities based on behavioral patterns.

  **Limitations**

  GET: The name of the path should be:

```
/FraudEvaluations/{fraudEvaluationId}/RuleSetsAndDecisionTrees/{ruleSetsAndDecisionTreesId}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudEvaluation/{fraudevaluationid}/Models/{modelsid}/Retrieve</span></summary>

  **Description**

  The service domain executes fraud behavioral pattern tests to detect possible fraudulent transactions/activity ReBQ Retrieve details about model based tests applied

  **Documentation**

  This BIAN API path allows you to retrieve information about model-based tests that have been applied as part of the fraud evaluation process. By using this API, you can access details about the specific tests conducted to detect potential fraudulent transactions or activities. This information can help in analyzing and understanding how fraud detection is being carried out within the system.

  **Limitations**

  GET: The name of the path should be:

GET /fraud-evaluations/{fraudEvaluationId}/models/{modelId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
