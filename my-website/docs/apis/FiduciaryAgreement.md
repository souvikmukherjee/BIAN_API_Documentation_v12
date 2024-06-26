<h1 style='color:red;'>FiduciaryAgreement</h1>

**BIAN Documentation:** [FiduciaryAgreement v12](https://app.swaggerhub.com/apis/BIAN-3/FiduciaryAgreement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Control</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms CoCR Control the processing of Fiduciary Relationship Facility

  **Documentation**

  This API path allows you to update an existing fiduciary agreement between a bank and a customer. The fiduciary agreement is a legal arrangement where the bank agrees to manage or control financial matters on behalf of the customer according to the terms specified in the agreement. By using this API, you can make changes or updates to how the bank processes the fiduciary relationship facility that was established through the agreement.

  **Limitations**

  PUT: A suitable name for the path '/FiduciaryAgreement/{fiduciaryagreementid}/Control' following REST best practices could be '/FiduciaryAgreement/{fiduciaryagreementid}/Controls'. This path is pluralized, which is a common convention for endpoints that represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Exchange</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms EcCR Accept, verify, etc. aspects of Fiduciary Relationship Facility processing

  **Documentation**

  This BIAN API path allows you to update an existing Fiduciary Agreement by exchanging information related to the agreement. The agreement involves the bank acting on behalf of the customer in financial matters as specified in the agreement terms. This API helps in the processing of various aspects of the Fiduciary Relationship Facility.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/FiduciaryAgreements/{fiduciaryagreementid}/Exchanges

Note:
- The path segments should be in lowercase.
- The path should use plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Execute</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ExCR Execute an available automated action for Fiduciary Relationship Facility

  **Documentation**

  This BIAN API path allows you to update an existing Fiduciary Agreement by executing an available automated action for the Fiduciary Relationship Facility. In simpler terms, it means you can use this API to trigger a specific automated action related to a financial agreement where a bank acts on behalf of a customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/FiduciaryAgreements/{fiduciaryagreementid}/Execute
``` 

Note the plural form "FiduciaryAgreements" for the resource collection and lowercase "Execute" for the action.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FiduciaryAgreement/Initiate</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms InCR Instantiate a new Fiduciary Relationship Facility

  **Documentation**

  This API path allows you to create a new fiduciary agreement between a bank and a customer. In this agreement, the bank agrees to act on behalf of the customer in financial matters according to the terms outlined in the agreement. By initiating this process through the API, a new fiduciary relationship facility is established.

  **Limitations**

  POST: Following REST best practices, the name of the path should be something descriptive and noun-based. One suggestion could be:

Path: /fiduciary-agreements

This path uses a lowercase and plural noun to represent a collection of fiduciary agreements, which aligns with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FiduciaryAgreement/{fiduciaryagreementid}/Retrieve</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ReCR Retrieve details about any aspect of Fiduciary Relationship Facility

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific Fiduciary Agreement using the provided fiduciary agreement ID. A Fiduciary Agreement is a contract in which a bank agrees to represent and act on behalf of a customer in financial matters based on the terms outlined in the agreement. By using this API path with the appropriate ID, you can access all the relevant information and details associated with that specific Fiduciary Agreement.

  **Limitations**

  GET: Based on REST best practices, the name of the path should ideally be `/fiduciary-agreements/{fiduciaryAgreementId}` for retrieving a specific fiduciary agreement resource identified by `fiduciaryAgreementId`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Request</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms RqCR Request manual intervention or a decision with respect to Fiduciary Relationship Facility

  **Documentation**

  This BIAN API path allows users to update an existing fiduciary agreement by making a PUT request. A fiduciary agreement is a legal arrangement where a bank agrees to manage finances on behalf of a customer according to the terms specified in the agreement. The purpose of this API endpoint is to handle requests that require manual intervention or a decision regarding the fiduciary relationship facility.

  **Limitations**

  PUT: The name of the path should be:

/FiduciaryAgreements/{fiduciaryagreementid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Update</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms UpCR Update details relating to Fiduciary Relationship Facility

  **Documentation**

  This API path allows you to update details related to a specific Fiduciary Agreement. It is designed for situations where a bank has agreed to act on behalf of a customer in a financial matter based on the terms outlined in the agreement. By using a PUT request, you can make changes or updates to the information associated with this Fiduciary Agreement.

  **Limitations**

  PUT: The name of the path `/FiduciaryAgreement/{fiduciaryagreementid}/Update` should be `/fiduciaryagreements/{fiduciaryagreementid}` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/{agreementid}/Exchange</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms EcBQ Accept, verify, etc. aspects of Agreement processing

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a fiduciary agreement. Specifically, it pertains to an agreement between a bank and a customer where the bank agrees to act on behalf of the customer in financial matters based on the terms outlined in the agreement. This API path handles the acceptance, verification, and other processing aspects of the agreement.

  **Limitations**

  PUT: The name of the path should be '/fiduciary-agreements/{fiduciary-agreement-id}/agreements/{agreement-id}/exchanges'. 

Following REST best practices, the path should use lowercase letters and separate words with hyphens instead of camel case or underscores. Additionally, plural nouns are typically preferred for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Fees/{feesid}/Exchange</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms EcBQ Accept, verify, etc. aspects of Fees processing

  **Documentation**

  This API path is used to update information related to fees within a fiduciary agreement. It allows users to make changes to fees linked to a specific fiduciary agreement by submitting a request with updated data. The purpose of this path is to manage and update fee-related aspects within the fiduciary agreement, ensuring that any changes are handled in accordance with the terms of the agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/FiduciaryAgreements/{fiduciaryAgreementId}/Fees/{feesId}/Exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Fulfillment/{fulfillmentid}/Exchange</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms EcBQ Accept, verify, etc. aspects of Fulfillment processing

  **Documentation**

  This API path allows you to update an existing Fulfillment Exchange within a Fiduciary Agreement. A Fiduciary Agreement is a financial agreement where a bank agrees to act on behalf of a customer in a specific financial matter. The API enables you to manage and process aspects related to fulfilling the terms of the agreement, such as accepting, verifying, and handling exchanges within the fulfillment process. By using this API, you can efficiently update and track these exchanges to ensure the agreement is executed according to its terms.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path could be:

/FiduciaryAgreements/{fiduciaryagreementid}/Fulfillments/{fulfillmentid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>POST: /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/Initiate</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms InBQ Instantiate a new Agreement

  **Documentation**

  This BIAN API path, /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/Initiate with a method of POST, allows you to create a new fiduciary agreement. This agreement formalizes the relationship where the bank agrees to manage financial matters on behalf of the customer as outlined in the agreement terms. By initiating this API call with a specific fiduciary agreement ID, the system will set up a new agreement for the designated customer and specify the terms of the bank's fiduciary responsibilities.

  **Limitations**

  POST: The name of the path '/FiduciaryAgreement/{fiduciaryagreementid}/Agreement/Initiate' following REST best practices should be something like:

'/fiduciary-agreements/{fiduciaryagreementid}/initiate-agreement' 

This naming convention uses lowercase letters, separates words with hyphens, and clearly indicates the resource and action being performed.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FiduciaryAgreement/{fiduciaryagreementid}/AssessmentandReporting/Initiate</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms InBQ Instantiate a new Assessment and Reporting

  **Documentation**

  This BIAN API path is used to create a new Assessment and Reporting related to a specific Fiduciary Agreement. In simple terms, it allows for the initiation of an assessment and reporting process within the context of a fiduciary agreement between a bank and a customer regarding financial matters.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/FiduciaryAgreements/{fiduciaryagreementid}/AssessmentAndReporting/Initiate
```

In the path:
- `/FiduciaryAgreements`: Resource collection name should be pluralized.
- `{fiduciaryagreementid}`: Path parameter representing a specific resource.
- `/AssessmentAndReporting`: Sub-resource name, which should be descriptive and non-hierarchical.
- `/

</details>

<details open>
  <summary><span style='color:red;'>GET: /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/{agreementid}/Retrieve</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ReBQ Retrieve details about any aspect of Agreement

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of a Fiduciary Agreement. You can provide the Fiduciary Agreement ID and the Agreement ID as part of the request to get information about the agreement terms and the bank's agreement to act on behalf of the customer in a financial matter. This API is used to access specific details related to a Fiduciary Agreement for customer-bank financial interactions.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

/fiduciary-agreements/{fiduciaryagreementid}/agreements/{agreementid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /FiduciaryAgreement/{fiduciaryagreementid}/AssessmentandReporting/{assessmentandreportingid}/Retrieve</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ReBQ Retrieve details about any aspect of Assessment and Reporting

  **Documentation**

  This BIAN API path allows you to retrieve details about any aspect of Assessment and Reporting within a specific Fiduciary Agreement. It helps you access specific information related to assessments and reports that are part of the agreement between a bank and a customer regarding financial matters.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/FiduciaryAgreement/{fiduciaryagreementid}/AssessmentandReporting/{assessmentandreportingid}/Retrieve' could be:

GET /fiduciary-agreements/{fiduciaryagreementid}/assessment-and-reporting/{assessmentandreportingid}

This name is more descriptive and follows the convention of using lowercase letters, hyphens for readability, and using the resource's plural form when applicable.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FiduciaryAgreement/{fiduciaryagreementid}/Fees/{feesid}/Retrieve</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ReBQ Retrieve details about any aspect of Fees

  **Documentation**

  This BIAN API path allows you to retrieve details about fees associated with a specific fiduciary agreement. By providing the fiduciary agreement ID and the fees ID as parameters, you can access information about the fees charged within that agreement. This API is useful for accessing specific financial details related to the fees agreed upon in a fiduciary agreement between a customer and a bank.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/FiduciaryAgreement/{fiduciaryagreementid}/Fees/{feesid}/Retrieve' could be:

'/fiduciary-agreements/{fiduciaryagreementid}/fees/{feesid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FiduciaryAgreement/{fiduciaryagreementid}/Fulfillment/{fulfillmentid}/Retrieve</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms ReBQ Retrieve details about any aspect of Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of the fulfillment related to a fiduciary agreement. By providing the unique identifiers for the fiduciary agreement and the fulfillment, you can access information about how the bank is acting on behalf of the customer in a financial matter, in line with the terms agreed upon in the fiduciary agreement. This API provides a way to access specific details about the fulfillment process within the context of the fiduciary agreement.

  **Limitations**

  GET: The name of the path could be `/fiduciary-agreements/{fiduciaryAgreementId}/fulfillments/{fulfillmentId}` based on REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/{agreementid}/Request</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms RqBQ Request manual intervention or a decision with respect to Agreement

  **Documentation**

  This API path allows for updating a specific fiduciary agreement by sending a request related to an agreement within that fiduciary agreement. The request sent could require manual intervention or a decision to be made regarding the agreement. The update is done by making a PUT request to the specified path with the relevant IDs for the fiduciary agreement and agreement that need attention.

  **Limitations**

  PUT: A possible name for the path could be `/fiduciary-agreements/{fiduciaryagreementid}/agreements/{agreementid}/requests`. Remember to use lowercase letters, separate words with dashes, and ensure that the path is clear, concise, and follows a hierarchical structure that reflects the relationships between the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Fees/{feesid}/Request</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms RqBQ Request manual intervention or a decision with respect to Fees

  **Documentation**

  This BIAN API path allows you to update information related to fees within a specific fiduciary agreement. It is designed to handle requests that require manual intervention or decision-making regarding fees associated with the fiduciary agreement. By making a PUT request to this path with the relevant fiduciary agreement ID and fees ID, you can update and manage the fees according to the terms of the agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/FiduciaryAgreement/{fiduciaryagreementid}/Fees/{feesid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Fulfillment/{fulfillmentid}/Request</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms RqBQ Request manual intervention or a decision with respect to Fulfillment

  **Documentation**

  This API path is used to update an existing fiduciary agreement by requesting manual intervention or a decision related to fulfillment. It allows the bank to act on behalf of the customer in a financial matter according to the terms of the agreement.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be:

/fiduciary-agreements/{fiduciaryagreementid}/fulfillments/{fulfillmentid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FiduciaryAgreement/{fiduciaryagreementid}/Agreement/{agreementid}/Update</span></summary>

  **Description**

  An agreement where the bank agrees to act on behalf of the customer in a financial matter and in accordance with the agreement terms UpBQ Update details relating to Agreement

  **Documentation**

  This BIAN API path allows you to update details related to a specific agreement within a fiduciary agreement. The agreement involves the bank acting on behalf of the customer in financial matters according to the terms outlined in the agreement. By using this API endpoint with the PUT method, you can make changes or updates to the agreement details as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/FiduciaryAgreements/{fiduciaryagreementid}/Agreements/{agreementid}/Update

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
