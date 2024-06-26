<h1 style='color:red;'>ServicingOrder</h1>

**BIAN Documentation:** [ServicingOrder v12](https://app.swaggerhub.com/apis/BIAN-3/ServicingOrder/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ServicingOrder/Initiate</span></summary>

  **Description**

  This service domain handles the processing of a customer servicing request as a predefined procedure. A range of standard servicing requests can be supported. The process can include a check of permissions when the request is made by a third party/service provider InCR Initiate a servicing order

  **Documentation**

  This BIAN API path (/ServicingOrder/Initiate) allows users to create a new customer servicing request in a standardized process. Users can initiate various standard servicing requests, and the system also verifies permissions when the request is made by a third party or a service provider. Essentially, this API path helps in starting the process of handling customer servicing orders efficiently.

  **Limitations**

  POST: In RESTful design, the name of the path should be a noun that represents a resource. Based on the path '/ServicingOrder/Initiate', a more appropriate name following REST best practices would be '/servicing-orders'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingOrder/{servicingorderid}/Execute</span></summary>

  **Description**

  This service domain handles the processing of a customer servicing request as a predefined procedure. A range of standard servicing requests can be supported. The process can include a check of permissions when the request is made by a third party/service provider ExCR Execute an automated task in a servicing order (e.g. upload data)

  **Documentation**

  This API path allows you to update an existing servicing order specified by its unique identifier ('servicingorderid'). By using a PUT request method, you can trigger the execution of an automated task associated with the servicing order. For example, this task could involve uploading data as part of the predefined servicing procedure. The API also mentions handling permissions checks, ensuring that only authorized individuals or service providers can make such requests.

  **Limitations**

  PUT: The name of the path should be:
/ServicingOrders/{servicingorderid}/execute

Following REST best practices:
- Use plural nouns for resource names (e.g., ServicingOrders instead of ServicingOrder)
- Use lowercase letters for path segments
- Use a descriptive verb (e.g., execute) to indicate the action being performed on the resource

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingOrder/{servicingorderid}/Request</span></summary>

  **Description**

  This service domain handles the processing of a customer servicing request as a predefined procedure. A range of standard servicing requests can be supported. The process can include a check of permissions when the request is made by a third party/service provider RqCR Request manual intervention in a servicing order (e.g. engage a servicing agent)

  **Documentation**

  This API path allows you to update an existing customer servicing order by making a request for manual intervention in the servicing process. For example, you can use this API to engage a servicing agent to assist with a specific servicing request. This path is part of a service domain that manages customer servicing requests following predefined procedures. It can handle a variety of standard servicing tasks and also checks permissions when the request is made by a third party or service provider.

  **Limitations**

  PUT: The name of the path "/ServicingOrders/{servicingorderId}/Requests" follows REST best practices. Each segment of the path should be in plural form and convey the resource hierarchy clearly.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ServicingOrder/{servicingorderid}/Retrieve</span></summary>

  **Description**

  This service domain handles the processing of a customer servicing request as a predefined procedure. A range of standard servicing requests can be supported. The process can include a check of permissions when the request is made by a third party/service provider ReCR Retrieve details about a servicing order

  **Documentation**

  This API path allows you to retrieve information about a specific customer servicing order identified by its unique servicing order ID. It is part of a system that processes customer servicing requests according to predefined procedures. This API can provide details about the servicing order, such as the request made and any associated permissions, which can be useful for both customers and service providers to track and manage servicing activities efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /servicingOrders/{servicingOrderId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
