<h1 style='color:red;'>BrokeredProduct</h1>

**BIAN Documentation:** [BrokeredProduct v12](https://app.swaggerhub.com/apis/BIAN-3/BrokeredProduct/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/Control</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Control Brokered Product Facility

  **Documentation**

  This API path allows you to update an existing brokered product by providing the ID of the specific product you want to modify. It is part of a system that manages the delivery of products and services from third-party providers. By using this API, you can make changes or updates to the details or settings of a specific brokered product within the system.

  **Limitations**

  PUT: The name of the path should be:

'/brokered-products/{brokeredproductid}/control'

Following REST best practices, it is recommended to use lowercase letters and hyphens for separation in the path names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BrokeredProduct/Initiate</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Initiate Brokered Product Facility

  **Documentation**

  This API path allows you to create a new resource for initiating a brokered product facility. It is used to set up the coordinated delivery of third-party products and services within a given system or platform. This process involves managing the activities related to offering and facilitating access to external products and services through the system. By making a POST request to this API path, you can initiate the creation of a new brokered product facility within the system.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/BrokeredProduct/Initiate' could be improved for better readability and to adhere more closely to REST conventions. 

A more RESTful and descriptive name for this path could be something like '/products/initiate' or '/brokered-products/initiate'. This naming convention typically uses lowercase letters, uses plural nouns for resources, and separates words with hyphens or underscores for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/Exchange</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Exchange Brokered Product Facility

  **Documentation**

  This API path, /BrokeredProduct/{brokeredproductid}/Exchange with the PUT method, allows you to update an existing resource related to a brokered product in the system. It is specifically used to manage the delivery of third-party products and services through the Exchange Brokered Product Facility. This API helps to coordinate the activities involved in providing services related to brokered products.

  **Limitations**

  PUT: For a RESTful path following best practices, the name of the path should be:

/brokered-products/{brokeredproductid}/exchanges

Remember to use lowercase letters, separate words with hyphens, and use plurals for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/Grant</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Grant Brokered Product Facility

  **Documentation**

  This API path allows you to update an existing grant associated with a brokered product. It is used to manage the activities related to delivering third-party products and services through a brokered product facility. By making a PUT request to this path with the ID of the brokered product, you can update the grant details and make any necessary changes to ensure the smooth coordination of product delivery.

  **Limitations**

  PUT: The name of the path should be:

/brokered-products/{brokeredProductId}/grants

Following REST best practices, path segments should be in lowercase, use hyphens for readability, and be pluralized to indicate that multiple resources could be returned as a collection. Additionally, path parameters should be in lowercase and use a descriptive name without abbreviations.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BrokeredProduct/{brokeredproductid}/Notify</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Notify Brokered Product Facility

  **Documentation**

  This BIAN API path allows you to retrieve information related to a specific brokered product by providing its unique identifier (brokeredproductid). The path is designed to help you access details about activities associated with the coordinated delivery of third-party products and services through a brokered product facility. By making a GET request to this API path, you can obtain information about the brokered product and its associated services.

  **Limitations**

  GET: The name of the path '/BrokeredProduct/{brokeredproductid}/Notify' should be named based on the action it performs rather than the implementation detail. A more RESTful name for this path could be '/BrokeredProduct/{brokeredproductid}/Notifications'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/Request</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Request Brokered Product Facility

  **Documentation**

  This BIAN API path allows you to update an existing brokered product by making a request for a brokered product facility using the provided brokered product ID. It is used for managing the delivery of third-party products and services in a coordinated manner within the Brokered Product service domain.

  **Limitations**

  PUT: The path '/BrokeredProduct/{brokeredproductid}/Request' can be named in a RESTful way by following some best practices.  One common approach is to use nouns to represent the resources and avoid verbs in the URI. Considering that the resource represents a request related to a specific brokered product identified by 'brokeredproductid', a more appropriate name for the path would be '/BrokeredProducts/{brokeredproductid}/Requests'. 

This name is more consistent with RESTful conventions

</details>

<details open>
  <summary><span style='color:red;'>GET: /BrokeredProduct/{brokeredproductid}/Retrieve</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Retrieve Brokered Product Facility

  **Documentation**

  This API path allows you to retrieve information about a specific brokered product by providing the unique identifier (brokeredproductid) associated with that product. It is part of a service domain that manages the delivery of third-party products and services in a coordinated manner. By making a GET request to this path, you can access details about the brokered product stored in the system.

  **Limitations**

  GET: The path '/BrokeredProducts/{brokeredproductid}' would be a more appropriate RESTful naming convention. The operation to retrieve a specific BrokeredProduct resource can be achieved through a GET request to this endpoint.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/Update</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Update Brokered Product Facility

  **Documentation**

  This API path allows you to update an existing brokered product facility. It is used to make changes or modifications to the information or properties of a specific brokered product identified by its unique ID. This can include updating details related to the coordinated delivery of third-party products and services within a financial institution's system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should typically be a noun or a noun phrase that describes the resource being operated on. In this case, the path '/BrokeredProduct/{brokeredproductid}/Update' is likely updating a specific brokered product identified by its ID. Therefore, a more suitable name for this path could be:

'/BrokeredProduct/{brokeredproductid}' or
'/BrokeredProducts/{brokeredproductid}'

Using a more general name without

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/ServiceAccess/{serviceaccessid}/Execute</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Execute Service Access

  **Documentation**

  This API path allows you to update an existing resource related to a brokered product's service access. Specifically, it pertains to the coordinated delivery of third-party products and services. By sending a PUT request to this path with the appropriate IDs, you can execute actions related to the service access of a particular brokered product.

  **Limitations**

  PUT: A possible RESTful name for the path could be:

'/brokered-products/{brokeredProductId}/service-access/{serviceAccessId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BrokeredProduct/{brokeredproductid}/ServiceAccess/{serviceaccessid}/Capture</span></summary>

  **Description**

  This Service Domain oversees all activities associated with the coordinated delivery of 3rd party products and services Capture Service Access

  **Documentation**

  This API path is used to update information related to accessing a service for a specific brokered product. It is part of a system that manages the delivery of products and services from third-party providers. By making a PUT request to this endpoint with the appropriate IDs, users can update details associated with how a service is accessed for a particular brokered product.

  **Limitations**

  PUT: The suggested naming convention for the path '/BrokeredProduct/{brokeredproductid}/ServiceAccess/{serviceaccessid}/Capture' following REST best practices would be:

/BrokeredProducts/{brokeredproductid}/ServiceAccesses/{serviceaccessid}/Capture

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
