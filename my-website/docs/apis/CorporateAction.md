<h1 style='color:red;'>CorporateAction</h1>

**BIAN Documentation:** [CorporateAction v12](https://app.swaggerhub.com/apis/BIAN-3/CorporateAction/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/Control</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Control Corporate Action Procedure

  **Documentation**

  This BIAN API path allows you to update an existing resource related to processing corporate actions for customers who have securities held at the bank. It provides support for various custodial tasks associated with managing corporate actions. By using this API, you can control and update procedures related to corporate actions for customers.

  **Limitations**

  PUT: Based on REST best practices, the name of the endpoint should be:

```
/CorporateActions/{corporateActionId}/Control
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Corporate Action Procedure

  **Documentation**

  This API path allows you to update an existing corporate action task associated with a specific corporate action ID. It is used to process custodial tasks related to corporate actions for customers who have securities held at the bank. By making a PUT request to this path, you can update and exchange information related to corporate actions for these customers.

  **Limitations**

  PUT: The name of the path should be '/corporate-actions/{corporateactionid}/exchanges'. This follows REST best practices, including using lowercase letters, using hyphens to separate words in the path, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Corporate Action Procedure

  **Documentation**

  This API path allows you to update or execute a specific corporate action procedure identified by the corporate action ID. It is designed to support custodial tasks related to processing corporate actions for customers who have securities held at the bank. By making a PUT request to this endpoint with the corporate action ID, you can trigger the execution of the specified corporate action procedure within the bank's system to carry out the necessary tasks associated with that corporate action for the customer's securities.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

`/corporate-actions/{corporateactionid}/execute`

Key points to consider are:
1. Use lowercase letters for the path.
2. Use hyphens to separate words in the path.
3. Use plural nouns for collection endpoints (like "corporate-actions" here).
4. Use specific identifiers in singular form for specific resources (like "corporateactionid" here).
5. Use standard HTTP methods like GET

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Corporate Action Procedure

  **Documentation**

  This API path "/CorporateAction/Initiate" allows you to start the process of handling corporate actions for customers who have securities held at the bank. This can include actions such as dividend payouts, stock splits, mergers, or other events that affect the ownership or value of securities. By using this API, you can initiate the necessary procedures for managing and processing these corporate actions on behalf of customers.

  **Limitations**

  POST: If the path '/CorporateAction/Initiate' followed REST best practices, it would likely be named in a more resource-oriented manner. A more suitable name could be '/actions' or '/corporate-actions', emphasizing the concept of actions being initiated within the corporate context. The specific name would depend on the context of the application and the resources being manipulated.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Corporate Action Procedure

  **Documentation**

  This API path allows a user to retrieve information about a specific corporate action procedure by providing the corporate action ID as a parameter in the request. The corporate action could involve tasks related to processing events or changes related to securities held by customers at the bank. By using this API, users can access relevant details and instructions regarding the specific corporate action procedure associated with the provided ID.

  **Limitations**

  GET: A good name for this path would be: 

`POST /CorporateActions/{corporateactionid}/Notify`

This naming convention aligns with RESTful principles by using the appropriate HTTP method (POST) for creating a new notification related to a specific corporate action identified by `{corporateactionid}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Corporate Action Procedure

  **Documentation**

  This BIAN API path allows you to update an existing resource related to corporate actions for customers who hold securities at the bank. It supports various tasks associated with processing corporate actions, typically involving requests for specific procedures related to corporate actions.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be "/CorporateActions/{corporateactionid}/Requests".

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Corporate Action Procedure

  **Documentation**

  This API path allows you to retrieve information about a specific corporate action procedure by providing the corporate action ID. It is used to support custodial tasks related to processing corporate actions for customers who have securities held at the bank. With this API, you can access details and procedures associated with a particular corporate action to effectively manage and process it within the banking system.

  **Limitations**

  GET: The path '/CorporateActions/{corporateactionid}' would be following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Corporate Action Procedure

  **Documentation**

  This BIAN API path "/CorporateAction/{corporateactionid}/Update" allows you to update an existing corporate action procedure for customers who have securities held at the bank. This means you can make changes or modifications to the processes related to processing corporate actions for these customers.

  **Limitations**

  PUT: In following REST best practices, the name of the path should be:

PUT /CorporateAction/{corporateactionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Security Dividend Payment Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the exchange of security dividend payments as part of processing corporate actions for customers who have securities held at the bank. It facilitates custodial tasks associated with managing corporate actions, specifically focusing on the workstep related to exchanging security dividend payments.

  **Limitations**

  PUT: The name of the path should be:

'/corporate-actions/{corporateactionid}/security-dividend-payments/{securitydividendpaymentid}/exchange' 

Following REST best practices, the path should be in lowercase letters and use hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Security Mergers and Acquisition Action Workstep

  **Documentation**

  This BIAN API path allows you to update information related to a specific security mergers and acquisition action within a corporate action process for customers who have securities held at the bank. It provides support for various custodial tasks associated with processing corporate actions in relation to securities held by customers.

  **Limitations**

  PUT: The name of the path should be:

`/corporate-actions/{corporate-action-id}/security-mergers-and-acquisitions-action/{security-mergers-and-acquisition-action-id}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Security Rights Issue Action Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to corporate actions in the context of securities held by customers at the bank. Specifically, it pertains to the exchange of security rights issue actions within the corporate action processing tasks performed by custodial services. By using a PUT request on this path with the appropriate IDs, you can modify details or make changes to the specific security rights issue action workstep for a corporate action process.

  **Limitations**

  PUT: A more RESTful and descriptive name for the path '/CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Exchange' could be '/corporate-actions/{corporateactionid}/security-rights-issues/{securityrightsissueactionid}/exchange'. 

In this revised path name:
- The names are in all lowercase to follow convention.
- Words are separated by dashes for improved readability.
- The path segments clearly describe the resource hierarchy and relationships.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Security Spin-Off Action Workstep

  **Documentation**

  This API path is used to update information related to a specific security spin-off action within a corporate action. It is used for custodial tasks associated with corporate actions for customers who have securities held at the bank. The API allows for updating details associated with the exchange of securities during a spin-off action.

  **Limitations**

  PUT: The name of the path should be:
'/corporate-actions/{corporateactionid}/security-spin-offs/{securityspin-offactionid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Exchange Stock Split or Reversal Action Workstep

  **Documentation**

  This BIAN API path allows you to update or make changes to an existing resource related to processing corporate actions for customers who have securities held at the bank. Specifically, it deals with actions such as stock split or reversal. By using this path with the PUT method, you can modify the details or status of a stock split or reversal action workstep associated with a corporate action that has a specific ID.

  **Limitations**

  PUT: The name of the path should be:

'/corporate-actions/{corporateactionid}/stock-splits-or-reversals/{stocksplitorreversalactionid}/exchange' 

In RESTful design, paths should be in lowercase and use hyphens to separate words for readability and consistency. Additionally, resources should be in the plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Security Dividend Payment Workstep

  **Documentation**

  This BIAN API path pertains to the Corporate Action service domain at a bank. Specifically, it focuses on executing the workstep related to processing security dividend payments for a corporate action associated with a customer's securities. By sending a PUT request to this path with the appropriate IDs, the bank can update and execute the specific workstep involved in handling security dividend payments as part of the corporate action services provided to customers.

  **Limitations**

  PUT: A possible RESTful path name following best practices could be:

'/corporate-actions/{corporateactionid}/dividend-payments/{securitydividendpaymentid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Security Mergers and Acquisition Action Workstep

  **Documentation**

  This BIAN API path is used to update an existing resource related to executing security mergers and acquisition actions as part of processing corporate actions for customers who hold securities with the bank. It allows the user to trigger the execution of specific tasks or actions related to security mergers and acquisitions for a particular corporate action ID and security mergers and acquisition action ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/corporate-actions/{corporateactionid}/security-ma-actions/{securitymergersandacquisitionactionid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Security Rights Issue Action Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to executing a security rights issue action workstep within the context of processing corporate actions for customers with securities held at the bank. It is specifically designed to handle tasks associated with securities rights issues within a custodial setting.

  **Limitations**

  PUT: A suitable name for the path according to REST best practices could be:

`/corporate-actions/{corporateactionid}/security-rights-issues/{securityrightsissueactionid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Security Spin-Off Action Workstep

  **Documentation**

  This API path is used to execute a security spin-off action workstep for a specific corporate action associated with a customer's securities held at the bank. By making a PUT request to this path with the relevant corporate action ID and security spin-off action ID provided, the bank can update and process the necessary custodial tasks related to the corporate action. This helps in managing and executing the security spin-off for the customer's securities effectively.

  **Limitations**

  PUT: A more RESTful name for the path could be: '/corporate-actions/{corporateactionid}/security-spin-offs/{securityspin-offactionid}/execute'. 

Breaking down the changes:
1. Using lowercase letters for better readability.
2. Using plural form ('corporate-actions' and 'security-spin-offs') to indicate collections of resources.
3. Eliminating unnecessary and more technical terms ('SecuritySpin-OffAction') and simply describing the resources being accessed ('security-spin-offs').
4.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Execute</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Execute Stock Split or Reversal Action Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to processing corporate actions for customers who hold securities at the bank. Specifically, it focuses on executing a stock split or reversal action workstep associated with a corporate action identified by 'corporateactionid' and 'stocksplitorreversalactionid'. This service domain supports custodial tasks related to these actions.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Execute' could be:

'/corporate-actions/{corporateactionid}/stock-split-reversal-actions/{stocksplitorreversalactionid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/{corporateactionid}/SecurityDividendPayment/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Security Dividend Payment Workstep

  **Documentation**

  This API path allows users to initiate a security dividend payment workstep in the context of processing corporate actions for customers who have securities held at the bank. By sending a POST request to this endpoint with the relevant corporate action ID, users can create a new resource to begin the process of processing a security dividend payment for the specified customer's securities.

  **Limitations**

  POST: The name of the path should be:

'/corporate-actions/{corporateactionid}/security-dividend-payments/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Security Mergers and Acquisition Action Workstep

  **Documentation**

  This API path is used to initiate the processing of security mergers and acquisition actions associated with corporate actions for customers who have securities held at the bank. By making a POST request to this endpoint with the appropriate corporate action ID, a new resource is created to support the custodial tasks involved in handling these actions.

  **Limitations**

  POST: Following REST best practices, the name of the path can be simplified to reflect the resource being accessed. Therefore, the path '/CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/Initiate' can be named as '/corporate-actions/{corporateactionid}/mergers-acquisitions/initiate'. This naming convention is more concise and clear, making it easier for developers to understand and work with the API endpoint.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Security Rights Issue Action Workstep

  **Documentation**

  This API path allows users to initiate a security rights issue action workstep as part of the processing of corporate actions for customers who have securities held at the bank. Essentially, it helps with managing tasks related to security rights issues that arise for customers. By sending a POST request to this endpoint with the relevant corporate action ID, users can create a new resource to kick off the security rights issue action process.

  **Limitations**

  POST: The name of the path should be: 

'/corporate-actions/{corporate-action-id}/security-rights-issue-actions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Security Spin-Off Action Workstep

  **Documentation**

  This API path allows users to initiate a security spin-off action workstep as part of processing corporate actions for customers whose securities are held at the bank. By making a POST request to this endpoint with the appropriate corporate action ID, a new resource will be created to start the process of handling a security spin-off action for the specified security.

  **Limitations**

  POST: A suitable name for the path '/CorporateAction/{corporateactionid}/SecuritySpin-OffAction/Initiate' following REST best practices could be:

POST /corporate-actions/{corporateactionid}/security-spin-offs/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/Initiate</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Initiate Stock Split or Reversal Action Workstep

  **Documentation**

  This API path allows you to initiate a stock split or reversal action for a specific corporate action identified by its ID. It is part of a service that deals with custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using a POST request, you can create a new resource to start the process of splitting or reversing stocks associated with a corporate action.

  **Limitations**

  POST: The name of the path should be:

'/corporate-actions/{corporateActionId}/stock-splits-or-reversals/initiate'

Following REST best practices, the path should be in lowercase, use hyphens to separate words, and include resource names instead of actions in the URL.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Security Dividend Payment Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific security dividend payment notification within the context of processing corporate actions for customers who have securities held at the bank. It is part of the custodial tasks related to corporate actions processing, specifically focusing on the notification process for security dividend payments.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/CorporateActions/{corporateactionId}/SecurityDividendPayments/{securitydividendpaymentId}/Notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Security Mergers and Acquisition Action Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific security mergers and acquisition action workstep associated with a corporate action. It supports custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using this path with the specific IDs provided, you can access details about the notification process for security mergers and acquisition actions within the bank's systems.

  **Limitations**

  GET: The name of the path should be:

'/corporate-actions/{corporateactionid}/security-mergers-and-acquisition-actions/{securitymergersandacquisitionactionid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Security Rights Issue Action Workstep

  **Documentation**

  This API path allows you to retrieve information related to notifying a specific security rights issue action workstep that is associated with a corporate action. It is part of a service domain that assists in handling custodial tasks for customers with securities held at the bank. The GET method is used to request and receive details about the security rights issue action workstep within the context of a corporate action.

  **Limitations**

  GET: A suitable name for the path following REST best practices would be:
'/corporate-actions/{corporate-action-id}/security-rights-issue-actions/{security-rights-issue-action-id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Security Spin-Off Action Workstep

  **Documentation**

  This API path retrieves information about the workstep related to notifying customers about a security spin-off corporate action. It is part of a service domain that helps in processing corporate actions for customers who have securities held at the bank. The API specifically focuses on notifying customers about spin-off actions related to a specific security.

  **Limitations**

  GET: The name of the path should be:

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Notify</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Notify Stock Split or Reversal Action Workstep

  **Documentation**

  This API path is used to retrieve information about a specific Notify Stock Split or Reversal Action Workstep associated with a corporate action transaction for customers with securities held at the bank. It supports the custodial tasks involved in processing corporate actions related to stock splits or reversals.

  **Limitations**

  GET: The name of the path should be as follows:

'/corporate-actions/{corporateactionid}/stock-splits-or-reversals/{stocksplitorreversalactionid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Security Dividend Payment Workstep

  **Documentation**

  This BIAN API path is used to update an existing resource related to requesting a security dividend payment workstep for a specific corporate action. It supports custodial tasks associated with processing corporate actions for customers who have securities held at the bank. By making a PUT request to this endpoint with the appropriate IDs, users can update information or trigger actions related to a security dividend payment request within the context of a specific corporate action.

  **Limitations**

  PUT: The name of the path should be:  `/corporate-actions/{corporate-action-id}/security-dividend-payments/{security-dividend-payment-id}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Security Mergers and Acquisition Action Workstep

  **Documentation**

  This API path allows you to update an existing resource related to processing corporate actions for customers who hold securities at the bank. Specifically, it refers to handling requests related to Security Mergers and Acquisition Actions. By using the PUT method on this path, you can make changes or updates to the information associated with a specific Security Mergers and Acquisition Action workstep identified by the provided IDs.

  **Limitations**

  PUT: A recommended name for this path following REST best practices could be:

'/corporate-actions/{corporateactionid}/mergers-and-acquisitions/{securitymergersandacquisitionactionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Security Rights Issue Action Workstep

  **Documentation**

  This API path allows you to update an existing resource related to processing corporate actions for customers who hold securities at the bank. Specifically, it is used to request a security rights issue action workstep for a specific corporate action and security rights issue action ID. This API is part of the Corporate Action service domain, helping with custodial tasks related to corporate actions for bank customers.

  **Limitations**

  PUT: The name of the path should follow REST best practices and be resource-oriented. Based on the structure of the path and the resources it represents, a suitable name for the path could be:

```
/CorporateActions/{corporateactionid}/SecurityRightsIssueActions/{securityrightsissueactionid}/Requests
```

This name reflects the hierarchical relationship between the resources represented in the path and follows the convention of using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Security Spin-Off Action Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to processing corporate actions for customers with securities held at the bank. Specifically, it pertains to a customer's request for a security spin-off action workstep associated with a corporate action. By using this API, you can manage and track the tasks and activities involved in handling corporate actions such as security spin-off actions for customers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:
```
/CorporateActions/{corporateactionid}/SecuritySpinOffActions/{securityspin-offactionid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Request</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Request Stock Split or Reversal Action Workstep

  **Documentation**

  This API path allows users to update an existing request for a stock split or reversal action associated with a corporate action for securities held by a customer at the bank. This service domain supports custodial tasks related to processing corporate actions for customers' securities. By using this API, users can make changes or updates to requests for stock split or reversal actions within the context of corporate actions.

  **Limitations**

  PUT: The RESTful name for this path could be: 

'/corporate-actions/{corporateactionid}/stock-split-or-reversal-actions/{stocksplitorreversalactionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Security Dividend Payment Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific security dividend payment workstep associated with a corporate action. It is part of a service domain that helps with custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using this API path with the appropriate corporate action ID and security dividend payment ID, you can access details about the specific workstep related to the dividend payment for a security.

  **Limitations**

  GET: Based on REST best practices, the suggested name for this path could be:

GET '/corporate-actions/{corporateActionId}/security-dividend-payments/{securityDividendPaymentId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Security Mergers and Acquisition Action Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific Security Mergers and Acquisition Action Workstep associated with a corporate action. It supports custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using this API, you can access details about a particular corporate action and the corresponding security mergers and acquisition action workstep.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/corporate-actions/{corporateactionid}/security-ma-actions/{securitymergersandacquisitionactionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Security Rights Issue Action Workstep

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific security rights issue action workstep associated with a corporate action. It is part of a service domain that supports custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using this API, you can access details and data specific to a security rights issue action workstep within the context of a corporate action.

  **Limitations**

  GET: Based on REST best practices, the path should be named in a way that accurately represents the resource and action being performed. 

A suggestion for the path name could be: 

/ CorporateActions/{corporateactionid}/SecurityRightsIssueActions/{securityrightsissueactionid}

This path clearly indicates the hierarchy of resources and the specific action being taken.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Security Spin-Off Action Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific workstep related to a security spin-off action within the context of corporate actions for customers with securities held at the bank. You can use this API to access details and data related to the security spin-off action workstep identified by the corporate action ID and security spin-off action ID provided in the path.

  **Limitations**

  GET: A more appropriate name for the path '/CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Retrieve' that follows REST best practices could be:

'/corporate-actions/{corporateactionid}/security-spin-off-actions/{securityspin-offactionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Retrieve Stock Split or Reversal Action Workstep

  **Documentation**

  This API path is used to retrieve information about a specific stock split or reversal action workstep associated with a corporate action. It is a service provided by the bank to handle various custodial tasks related to processing corporate actions for customers who hold securities with the bank. In simpler terms, this API helps users get details about a particular step in the process of handling stock split or reversal actions for corporate events.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be '/corporate-actions/{corporateactionid}/stock-split-or-reversal-actions/{stocksplitorreversalactionid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityDividendPayment/{securitydividendpaymentid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Security Dividend Payment Workstep

  **Documentation**

  This BIAN API path allows you to update a specific security dividend payment workstep associated with a corporate action. It is part of a service domain that helps manage custodial tasks related to processing corporate actions for customers who have securities held at the bank. By using this API path with a specific corporate action ID and security dividend payment ID, you can update information related to the dividend payment workstep for that security.

  **Limitations**

  PUT: The name of the path should be:
'/CorporateActions/{corporateactionid}/SecurityDividendPayments/{securitydividendpaymentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityMergersandAcquisitionAction/{securitymergersandacquisitionactionid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Security Mergers and Acquisition Action Workstep

  **Documentation**

  This API path allows you to update a specific security merger and acquisition action workstep related to a corporate action for customers who have securities held at the bank. It enables you to make changes to existing information or data associated with this particular security mergers and acquisition action workstep.

  **Limitations**

  PUT: Based on REST best practices, the name of the path you provided can be updated to:  
'/corporate-actions/{corporateactionid}/security-M&A-actions/{securitymergersandacquisitionactionid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecurityRightsIssueAction/{securityrightsissueactionid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Security Rights Issue Action Workstep

  **Documentation**

  This API path allows you to update a specific security rights issue action workstep associated with a corporate action. It is used for processing custodial tasks related to corporate actions for customers who have securities held at the bank. By using a PUT request, you can modify the details or status of the security rights issue action workstep identified by its unique IDs within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented manner and use nouns to represent resources rather than actions. Therefore, the name of the path should be:

'/CorporateActions/{corporateActionId}/SecurityRightsIssueActions/{securityRightsIssueActionId}'

This name emphasizes the resources being interacted with (Corporate Actions and Security Rights Issue Actions) and follows a clear and consistent structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/SecuritySpin-OffAction/{securityspin-offactionid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Security Spin-Off Action Workstep

  **Documentation**

  This API path allows you to update an existing security spin-off action workstep associated with a specific corporate action. It is used to manage custodial tasks related to corporate actions for customers who have securities held at the bank. By sending a PUT request to this path with the appropriate corporate action ID and security spin-off action ID, you can make changes or updates to the workstep information in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PUT /corporate-actions/{corporateactionid}/security-spin-offs/{securityspin-offactionid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorporateAction/{corporateactionid}/StockSplitorReversalAction/{stocksplitorreversalactionid}/Update</span></summary>

  **Description**

  This Service Domain supports the various custodial tasks associated with processing associated corporate actions for customer's with securities held at the bank Update Stock Split or Reversal Action Workstep

  **Documentation**

  This BIAN API path allows you to update an existing resource related to processing corporate actions for customers who hold securities at the bank. In particular, it is used to update a stock split or reversal action workstep that is associated with a specific corporate action and stock split or reversal action ID. This functionality is part of the custodial tasks performed by the bank to manage corporate actions for its customers' securities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be "/corporate-actions/{corporateactionid}/stock-splits-reversals/{stocksplitorreversalactionid}".

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
