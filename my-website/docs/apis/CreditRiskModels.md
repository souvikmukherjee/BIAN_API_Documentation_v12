<h1 style='color:red;'>CreditRiskModels</h1>

**BIAN Documentation:** [CreditRiskModels v12](https://app.swaggerhub.com/apis/BIAN-3/CreditRiskModels/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Capture</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments CaCR Capture Credit Risk Model Specification activity or event related information

  **Documentation**

  This API path allows you to update information related to a specific credit risk model within a portfolio of credit models. It is used to capture and maintain details about the model, such as specifications and activity or event-related information. This can help in assessing the credit risk of customers more effectively.

  **Limitations**

  PUT: The appropriate name for the path '/CreditRiskModels/{creditriskmodelsid}/Capture' following REST best practices would likely be:

```
POST /CreditRiskModels/{creditriskmodelsid}/Captures
```

This path indicates creating a new resource "Capture" under the specified "CreditRiskModels" resource identified by {creditriskmodelsid}. The use of a plural noun "Captures" is recommended to imply a collection of captures for the individual credit risk model, and

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Control</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments CoCR Control the processing of Credit Risk Model Specification

  **Documentation**

  This BIAN API path allows you to update an existing credit risk model by controlling the processing of its specification. It is used in the design and maintenance of a portfolio of credit models that are utilized in customer credit assessments. By using this API, you can make changes to the details and specifications of a credit risk model to ensure accurate and efficient credit evaluations for customers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/credit-risk-models/{creditriskmodelsid}/control"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Exchange</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments EcCR Accept, verify, etc. aspects of Credit Risk Model Specification processing

  **Documentation**

  This API path allows you to update an existing credit risk model by providing the ID of the specific model you want to update. The credit risk models are used in various processes related to customer credit assessments. This API is used to modify and maintain the specifications of these credit risk models, ensuring that they accurately reflect the credit risk associated with customers.

  **Limitations**

  PUT: The name of the path should be:

`/credit-risk-models/{credit-risk-models-id}/exchange`

Following REST best practices, the path should use lowercase letters, use hyphens to separate words, and avoid including unnecessary abbreviations. Additionally, the path should clearly represent the resource hierarchy and relationships.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CreditRiskModels/Initiate</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments InCR Instantiate a new Credit Risk Model Specification

  **Documentation**

  This API path allows users to create a new Credit Risk Model Specification within the Credit Risk Models service domain. This new model will be used for assessing customer credit in various aspects. Whenever a new credit risk model needs to be initiated or added to the existing portfolio, this API endpoint can be used to do so.

  **Limitations**

  POST: The path should ideally be named as '/credit-risk-models/initiate' following REST best practices. This uses lowercase letters and hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskModels/{creditriskmodelsid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments ReCR Retrieve details about any aspect of Credit Risk Model Specification

  **Documentation**

  This API path allows you to retrieve details about a specific Credit Risk Model. By providing the unique identifier (creditriskmodelsid) of the model you are interested in, you can access information about the specifications and details of that particular credit risk model. This API is useful for understanding and accessing the specific characteristics of credit models used in customer credit assessments.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path '/CreditRiskModels/{creditriskmodelsid}/Retrieve' should be structured as: GET /credit-risk-models/{creditriskmodelsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments RqCR Request manual intervention or a decision with respect to Credit Risk Model Specification

  **Documentation**

  This API path is used for making a request related to a specific Credit Risk Model. By specifying the ID of the credit risk model in the path, a user can request manual intervention or decision-making regarding the specifications of that particular credit risk model. The API allows for updating an existing resource related to credit risk models and is part of the overall system that manages and maintains credit models used for assessing customer credit risk.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be something like:

'/credit-risk-models/{credit-risk-model-id}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments UpCR Update details relating to Credit Risk Model Specification

  **Documentation**

  This API path allows you to update details related to a specific Credit Risk Model. It is used to modify the specifications and configuration of a credit model within a portfolio that is used for assessing customer credit risk. By sending a PUT request to this path with the appropriate parameters, you can make changes to the existing credit risk model to ensure accurate and up-to-date information for credit assessments.

  **Limitations**

  PUT: The name of the path should be:

PUT /CreditRiskModels/{creditriskmodelsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/FunctionalRequirements/{functionalrequirementsid}/Capture</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments CaBQ Capture Functional Requirements activity or event related information

  **Documentation**

  This API path allows you to update and maintain information related to the functional requirements of credit risk models within a credit risk management system. You can specify the credit risk model ID and functional requirements ID to identify the specific model and requirements you want to update. This functionality is used to ensure that the credit models are accurately designed and maintained for assessing customer credit in various activities or events.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/credit-risk-models/{creditriskmodelsid}/functional-requirements/{functionalrequirementsid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Production/{productionid}/Capture</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments CaBQ Capture Production activity or event related information

  **Documentation**

  This API path allows you to update information related to the capture of production activity or events within the context of Credit Risk Models. Specifically, you can update details linked to a specific credit risk model ID, production ID, and the capture of related information. The API is designed to facilitate the maintenance and management of credit models used in customer credit assessments.

  **Limitations**

  PUT: The name of the path should be:

'/CreditRiskModels/{creditriskmodelsid}/Production/{productionid}/Capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Testing/{testingid}/Capture</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments CaBQ Capture Testing activity or event related information

  **Documentation**

  This API path allows you to update information related to capturing testing activities or events within the context of a specific credit risk model. It is part of the Credit Risk Models service domain, which manages the design and maintenance of credit models used for customer credit assessments. By using this API endpoint with the specified IDs, you can modify the details associated with a particular testing activity related to a credit risk model.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/credit-risk-models/{creditriskmodelsid}/testing/{testingid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskModels/{creditriskmodelsid}/FunctionalRequirements/{functionalrequirementsid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments ReBQ Retrieve details about any aspect of Functional Requirements

  **Documentation**

  This API path allows you to retrieve information about a specific functional requirement within the credit risk models domain. By specifying the ID of the credit risk model and the ID of the functional requirement, you can access details related to how credit models are designed and maintained for customer credit assessments. This can help you understand the specific requirements needed for managing credit risk in a financial context.

  **Limitations**

  GET: The name of the path following RESTful best practices could be:

`/credit-risk-models/{creditriskmodelsid}/functional-requirements/{functionalrequirementsid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskModels/{creditriskmodelsid}/Production/{productionid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments ReBQ Retrieve details about any aspect of Production

  **Documentation**

  This API path allows you to retrieve detailed information about a specific aspect of the production stage within a portfolio of credit risk models. By specifying the credit risk model ID and production ID in the request, you can access specific details related to how credit models are designed and maintained for customer credit assessments.

  **Limitations**

  GET: Following REST best practices, the name of the path should describe the resource being accessed rather than the action being performed. 

A more appropriate name for the path could be '/CreditRiskModels/{creditriskmodelsid}/Production/{productionid}', which represents the specific production resource within a credit risk model.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskModels/{creditriskmodelsid}/Testing/{testingid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments ReBQ Retrieve details about any aspect of Testing

  **Documentation**

  This API path allows a user to retrieve details about a specific testing aspect related to a credit risk model within the Credit Risk Models service domain. By providing the relevant IDs for the credit risk model and the testing aspect, the user can access information about how the model has been tested, ensuring that it is accurate and reliable for assessing customer credit.

If you have any more questions or need further clarification, feel free to ask!

  **Limitations**

  GET: The name of the path should be '/credit-risk-models/{creditriskmodelsid}/testing/{testingid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/FunctionalRequirements/{functionalrequirementsid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments RqBQ Request manual intervention or a decision with respect to Functional Requirements

  **Documentation**

  This API path allows you to update an existing request related to functional requirements within the Credit Risk Models service domain. Specifically, it is used for requesting manual intervention or a decision in relation to functional requirements associated with credit risk models.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/credit-risk-models/{creditriskmodelsid}/functional-requirements/{functionalrequirementsid}/request' 

In this naming convention:
- Path segments are all lowercase.
- Words are separated by hyphens for better readability.
- Resource names are in plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Production/{productionid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments RqBQ Request manual intervention or a decision with respect to Production

  **Documentation**

  This API path is used for updating a specific credit risk model in production with a request for manual intervention or decision-making. It pertains to managing credit models used for customer credit assessments and allows for making changes or requesting actions related to the production phase of a particular credit risk model.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/credit-risk-models/{creditriskmodelsid}/production/{productionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Testing/{testingid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments RqBQ Request manual intervention or a decision with respect to Testing

  **Documentation**

  This BIAN API path allows you to update a request for manual intervention or decision-making related to testing within the Credit Risk Models service domain. It is used to manage the process of testing credit models used in customer credit assessments, allowing for manual intervention or decision-making as needed.

  **Limitations**

  PUT: The name of the path should be: 

'/credit-risk-models/{credit-risk-models-id}/testing/{testing-id}/request'

Following REST best practices, the path should use lowercase letters and separate words with hyphens or underscores for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/FunctionalRequirements/{functionalrequirementsid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments UpBQ Update details relating to Functional Requirements

  **Documentation**

  This BIAN API path allows you to update details related to functional requirements within a specific credit risk model. It is used for modifying the requirements that are essential for the proper functioning and maintenance of credit models used in customer credit assessments. By using a PUT request method, you can update specific information or details within the functional requirements of a credit risk model identified by its unique ID.

  **Limitations**

  PUT: A more suitable name for the path '/CreditRiskModels/{creditriskmodelsid}/FunctionalRequirements/{functionalrequirementsid}/Update' following RESTful best practices could be:

PATCH /credit-risk-models/{creditriskmodelsid}/functional-requirements/{functionalrequirementsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Production/{productionid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments UpBQ Update details relating to Production

  **Documentation**

  This API path allows you to update details related to the production of a specific credit risk model within a portfolio. It specifically pertains to modifying information about the production process or status of a credit risk model, which is used for assessing customer creditworthiness. This API is part of a service domain that manages the design and upkeep of credit risk models for evaluating customer credit.

  **Limitations**

  PUT: Based on REST best practices, the path could be named as follows: 

`PUT /credit-risk-models/{creditriskmodelsid}/production/{productionid}`

This naming convention follows the guidelines of using lowercase letters, using hyphens to separate words, and using specific resource identifiers within the URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskModels/{creditriskmodelsid}/Testing/{testingid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of credit models that are used in all aspects of customer credit assessments UpBQ Update details relating to Testing

  **Documentation**

  This API path allows you to update details related to testing for a specific credit risk model within the Credit Risk Models service domain. It is used for modifying information associated with testing procedures or results that are part of assessing the creditworthiness of customers using various credit models.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:
'/credit-risk-models/{creditRiskModelsId}/testing/{testingId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
