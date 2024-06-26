<h1 style='color:red;'>InteractiveHelp</h1>

**BIAN Documentation:** [InteractiveHelp v12](https://app.swaggerhub.com/apis/BIAN-3/InteractiveHelp/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InteractiveHelp/{interactivehelpid}/HelpServiceSelection/Initiate</span></summary>

  **Description**

  Operate the automated facility that provides interactive context sensitive servicing guidance to employees and self-serve customers InBQ Initiate an interactive help service exchange

  **Documentation**

  This API path `/InteractiveHelp/{interactivehelpid}/HelpServiceSelection/Initiate` is used to create a new resource to initiate an interactive help service exchange within an automated facility. This service is designed to provide context-sensitive guidance to employees and self-serve customers. By using this API, users can start a help service session tailored to their specific needs and receive assistance in their tasks or inquiries.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be:

`/interactive-help/{interactivehelpid}/help-services/initiate` 

In this naming convention:
- Path segments are in lowercase letters separated by hyphens.
- Resource names are in singular form.
- Use of meaningful and clear names that accurately represent the resources and actions being undertaken.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InteractiveHelp/{interactivehelpid}/HelpServiceSelection/{helpserviceselectionid}/Capture</span></summary>

  **Description**

  Operate the automated facility that provides interactive context sensitive servicing guidance to employees and self-serve customers CaBQ Capture user feedback relating to the service exchange

  **Documentation**

  This API path is designed to update an existing resource within an interactive help system. Specifically, it allows the operator to manage the automated facility that offers context-specific service guidance to employees and self-service customers. The path focuses on capturing user feedback related to the service exchange process. By using the PUT method, the operator can make updates and changes to the existing help services selected by users, aiming to enhance the overall quality and effectiveness of the interactive help experience.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/interactive-help/{interactivehelpid}/help-service-selection/{helpserviceselectionid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InteractiveHelp/{interactivehelpid}/HelpServiceSelection/{helpserviceselectionid}/Execute</span></summary>

  **Description**

  Operate the automated facility that provides interactive context sensitive servicing guidance to employees and self-serve customers ExBQ Execute an automated action within the exchange

  **Documentation**

  This BIAN API path allows you to update or execute an automated action within the Interactive Help system. Specifically, it operates a facility that provides interactive guidance to employees and self-serve customers. By making a PUT request to this path with the relevant Interactive Help ID and Help Service Selection ID, you can trigger an automated action within the system for assisting users with context-sensitive servicing guidance.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be something like:
`/interactive-help/{interactivehelpid}/help-service-selection/{helpserviceselectionid}/execute`

Using lowercase letters and separate words with hyphens is a common convention in RESTful API design.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InteractiveHelp/{interactivehelpid}/HelpServiceSelection/{helpserviceselectionid}/Retrieve</span></summary>

  **Description**

  Operate the automated facility that provides interactive context sensitive servicing guidance to employees and self-serve customers ReBQ Retrieve details about an interactive help service exchange

  **Documentation**

  This API path allows you to retrieve information about a specific interactive help service exchange. It operates the automated system that provides interactive guidance to employees and customers. By specifying the interactive help ID and help service selection ID, you can get details about the service exchange happening within the interactive help system. This API is designed to offer context-sensitive servicing guidance to users accessing help resources.

  **Limitations**

  GET: Based on REST best practices, a possible name for this endpoint could be:

GET /interactive-help/{interactivehelpid}/help-service-selection/{helpserviceselectionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
