<h1 style='color:red;'>ProductExpertSalesSupport</h1>

**BIAN Documentation:** [ProductExpertSalesSupport v12](https://app.swaggerhub.com/apis/BIAN-3/ProductExpertSalesSupport/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProductExpertSalesSupport/Create</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity CrCR Create or set-up the administrative plan for sales specialist assignments

  **Documentation**

  This API path `/ProductExpertSalesSupport/Create` is used to create a new resource for administering the availability and allocation of product specialists to support sales activities. It involves setting up an administrative plan for assigning sales specialists to specific tasks or projects. This API would be used to manage and coordinate the deployment of product experts to assist in sales-related activities effectively.

  **Limitations**

  POST: Based on REST best practices, the path should be named based on the resource it represents rather than the action being performed on it. Therefore, a more appropriate name for the path '/ProductExpertSalesSupport/Create' could be '/ProductExpertSalesSupport' to represent the resource being created or perhaps '/ProductExperts' if the resource is the product expert itself.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductExpertSalesSupport/{productexpertsalessupportid}/Update</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity UpCR Update details of the overall sale specialist support administrative plan

  **Documentation**

  This BIAN API path allows you to update the details of a specific product expert sales support plan by modifying the availability and allocation of product specialists to assist with sales activities. You can adjust the administrative plan to ensure that the right specialists are assigned to support sales efforts effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/product-expert-sales-support/{product-expert-sales-support-id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductExpertSalesSupport/{productexpertsalessupportid}/Request</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity RqCR Request manual intervention with the administrative plan

  **Documentation**

  This BIAN API path allows administrators to update the availability and allocation of product specialists to support sales activities by requesting manual intervention with the administrative plan. In simple terms, it enables the management of specialized support staff for sales-related tasks by making changes to their schedules and assignments through manual requests.

  **Limitations**

  PUT: The name of the path should be:
'/product-expert-sales-support/{productexpertsalessupportid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductExpertSalesSupport/{productexpertsalessupportid}/Retrieve</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity ReCR Retrieve details about the administrative plan

  **Documentation**

  This BIAN API path allows users to retrieve details about the administrative plan for administering the availability and allocation of product specialists to support sales activity. This means that users can access information about how product specialists are assigned to assist with sales activities.

  **Limitations**

  GET: Based on REST best practices, if the path follows a resource-oriented approach, the name of the path could be `/product-experts/{productExpertId}/sales-support` for retrieving sales support information for a specific product expert identified by `productExpertId`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/Create</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity CrBQ Create a sales specialist support assignment

  **Documentation**

  This API path allows you to create a new assignment for a product specialist to support sales activities. You can specify the details of the assignment, such as the product specialist to be assigned and the relevant sales support requirements. This API helps in managing the availability and allocation of product specialists for supporting sales activities within the organization.

  **Limitations**

  POST: The name of the path should be something like:

'/products/{productId}/experts/{expertId}/assignments'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Update</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity UpBQ Update details of a support assignment task

  **Documentation**

  This API path, /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Update, is used to update the details of an existing support assignment task for product specialists involved in sales activities. By providing the specific IDs for the product expert sales support and the assignment, users can make changes to the allocation and availability of product specialists to better support sales efforts. The PUT method is used to update the information related to the support assignment task. This API helps manage and optimize the deployment of product specialists to assist in sales activities effectively.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

'/product-experts/{productexpertsalessupportid}/assignments/{assignmentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Capture</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity CaBQ Provide feedback relating to a sales support assignment

  **Documentation**

  This API path allows you to update the information related to the availability and allocation of product specialists to support sales activities. It also enables you to provide feedback specific to a sales support assignment. By using this API, you can manage the assignment of product experts to assist with sales tasks and track the feedback received for specific assignments.

  **Limitations**

  PUT: Based on REST best practices, the path name should be:

/ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Capture

The path name should be descriptive and follow a hierarchy that reflects the relationships between the resources. Each segment should represent a specific resource or subresource, and should use nouns to represent the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Request</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity RqBQ Request manual intervention in an assignment

  **Documentation**

  This API path allows you to update an existing assignment related to the availability and allocation of product specialists to support sales activity. Specifically, it is used to request manual intervention in an assignment, which means that you can ask for human involvement or assistance in the assignment process for product specialists supporting sales activities. This update can be made using the PUT method.

  **Limitations**

  PUT: A good RESTful naming convention for this path could be:

'/product-experts/{productexpertsalessupportid}/assignments/{assignmentid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Retrieve</span></summary>

  **Description**

  Administer the availability and allocation of product specialists to support sales activity ReBQ Retrieve details about a sales specialist support assignment

  **Documentation**

  This API path, **/ProductExpertSalesSupport/{productexpertsalessupportid}/Assignment/{assignmentid}/Retrieve**, is designed to retrieve information about a specific sales specialist support assignment within the Product Expert Sales Support system. By providing the relevant **productexpertsalessupportid** and **assignmentid**, users can access details about the allocation and availability of product specialists who are designated to assist with sales activities. This can help in managing and tracking the support provided by these specialists for various sales tasks.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/product-experts/{productExpertId}/assignments/{assignmentId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
