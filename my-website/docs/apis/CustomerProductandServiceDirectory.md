<h1 style='color:red;'>CustomerProductandServiceDirectory</h1>

**BIAN Documentation:** [CustomerProductandServiceDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerProductandServiceDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Control</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Control Customer Product And Service Directory Entry

  **Documentation**

  This API path allows you to update an existing entry in the Customer Product and Service Directory for a specific customer. The directory stores important details about all the products and services that a customer has obtained from the bank. By using this API, you can make changes to the information related to a particular customer's products and services in the bank's directory.

  **Limitations**

  PUT: In line with REST best practices, the name of the path would be:

'/customer-product-service-directory/{customer_product_service_directory_id}/control' 

This path adheres to the convention of using lowercase letters, separating words with hyphens, and using singular nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Execute</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Execute Customer Product And Service Directory Entry

  **Documentation**

  This BIAN API path allows users to update the details of a specific entry in the Customer Product and Service Directory. By providing the unique identifier (customerproductandservicedirectoryid) of the entry to be updated and submitting the necessary information, users can make changes to the important details of products and services associated with a customer's relationship with the bank.

  **Limitations**

  PUT: The name of the path should be:
'/customer-product-and-service-directory/{customer_product_and_service_directory_id}/execute'

This name follows REST best practices by using lowercase letters, using hyphens to separate words, and providing a clear and descriptive URL path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Notify</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Notify Customer Product And Service Directory Entry

  **Documentation**

  This API path is used to retrieve information about a specific entry in the Customer Product and Service Directory. It allows users to access important details of the products and services that a customer has acquired from the bank by providing the ID of the directory entry. By making a GET request to this path with the specific customer product and service directory ID, users can retrieve the relevant information stored in the directory for that specific customer.

  **Limitations**

  GET: Based on REST best practices, the name of the path for notifying should be:

`POST /CustomerProductAndServiceDirectory/{customerproductandservicedirectoryid}/Notify`

Make sure the method is POST because you are triggering an action (notification) on the specified resource.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProductandServiceDirectory/Register</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Register Customer Product And Service Directory Entry

  **Documentation**

  This API path allows you to create a new entry in the Customer Product and Service Directory for a customer at the bank. It stores important details about all the products and services that a customer has acquired from the bank. This API helps in registering and updating information related to a customer's products and services within the bank's system.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be '/customer-product-service-directory/register'. The path should use lowercase letters, hyphens to separate words, and should not contain any unnecessary words such as 'and'. This naming convention follows the RESTful URL guidelines for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Request</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Request Customer Product And Service Directory Entry

  **Documentation**

  This BIAN API path allows you to update an existing entry in the Customer Product and Service Directory based on the provided customer product and service directory ID. This directory contains essential information about the products and services that a customer has obtained from the bank. By making a PUT request to this endpoint, you can modify the details or status of a specific entry in the directory.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-product-and-service-directory/{customerproductandservicedirectoryid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Update</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Update Customer Product And Service Directory Entry

  **Documentation**

  This API path allows you to update an existing entry in the Customer Product and Service Directory. The Customer Product and Service Directory holds important information about the products and services that a customer has obtained from the bank. By using this API, you can make changes to the details of a specific directory entry identified by its unique ID. It gives you the ability to modify and update the information related to a customer's products and services within the bank's system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

'/customer-product-service-directory/{id}' 

In RESTful design, it's common to use lowercase words separated by hyphens in the URL path. The path should be accurate and descriptive and the use of abbreviations should be avoided.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/{productid}/Execute</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Execute In-force Product property

  **Documentation**

  This API path allows you to update the execution status of a specific product or service that a customer has acquired from the bank. By providing the customer's product and service directory ID as well as the product ID, you can indicate whether the product or service is currently active or in-force. This information helps in managing and tracking the customer's relationship with the bank and the services they are utilizing.

  **Limitations**

  PUT: Following REST best practices, the recommended name for the path would be:

'/customer-product-service-directory/{customerproductandservicedirectoryid}/product/{productid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/{serviceid}/Execute</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Execute In-force Service property

  **Documentation**

  This BIAN API path allows you to update the information related to a specific service that a customer has acquired from the bank. The path is structured to access a certain customer's product and service directory by providing the IDs for the directory and the service. By making a PUT request to this path, you can execute or update the in-force status of a particular service associated with the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CustomerProductAndServiceDirectory/{customerProductAndServiceDirectoryId}/Service/{serviceId}/Execute
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/{productid}/Notify</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Notify In-force Product property

  **Documentation**

  This API path allows you to retrieve information about a specific product that a customer has acquired from the bank. It focuses on the "Notify In-force Product" property, which likely indicates whether the product is currently active or in-force for the customer. By accessing this path with the appropriate IDs, you can get details about the customer's product and its status within the bank's system.

  **Limitations**

  GET: A potential name for the path could be:

'/customer-product-service-directory/{customerProductAndServiceDirectoryId}/product/{productId}/notify'

In this suggested path:

- Resource names are in lowercase and separated by hyphens for better readability.
- Path segments represent the hierarchical structure of the resources being accessed.
- Path parameters, like customerProductAndServiceDirectoryId and productId, are defined within curly braces to indicate variable values.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/{serviceid}/Notify</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Notify In-force Service property

  **Documentation**

  This API path is used to retrieve information about a specific service that a customer has acquired from the bank. The path includes the customer's product and service directory ID as well as the service ID to specify which service you want to get information about. The purpose is to provide details about the products and services the customer has with the bank, including any notifications related to the service being currently active or in-force.

  **Limitations**

  GET: A suitable name for the specified path could be:

'/customer-product-service/{customerproductandservicedirectoryid}/services/{serviceid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/Register</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Register In-force Product property

  **Documentation**

  This API path allows you to create a new entry in the Customer Product and Service Directory for a specific customer. It specifically focuses on registering an in-force product, which refers to a product or service that the customer currently has with the bank. By using this API, you can add important information about the customer's products and services, helping to track, manage, and provide relevant services based on their existing relationships with the bank.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/customers/{customerId}/products/{productId}/register'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/Register</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Register In-force Service property

  **Documentation**

  This API path allows users to create a new resource (a new entry) in the Customer Product and Service Directory for a particular customer product and service ID. Specifically, it is used to register an in-force service property, which holds important details about products and services that a customer has obtained from the bank. This helps to keep track of the offerings that a customer is currently using.

  **Limitations**

  POST: Based on RESTful best practices, a more appropriate name for the path '/CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/Register' could be:

'/customer-product-service-directories/{directoryId}/services/register'

This name follows the convention of using lowercase letters, separating words with hyphens for better readability, and using resource identifiers instead of describing the entire hierarchy in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/{productid}/Request</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Request In-force Product property

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a customer's product and service directory. Specifically, it lets you request the "In-force Product" property for a particular product that the customer has acquired from the bank. By using a PUT method on this path, you can update the details or status of this specific product in the customer's directory.

  **Limitations**

  PUT: The name of the path could be simplified to follow REST best practices. Here is a suggestion:

'/customer-directory/{directoryId}/products/{productId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/{serviceid}/Request</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Request In-force Service property

  **Documentation**

  This API path is used to update the "Request In-force Service" property of a specific service within a customer's product and service directory. Essentially, it allows you to make changes to the details of a product or service that a customer has acquired from the bank, such as updating information related to the service's in-force status.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-product-service-directory/{customerproductandservicedirectoryid}/service/{serviceid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/{productid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Retrieve In-force Product property

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific product that a customer has acquired from the bank. It focuses on the details of in-force products, meaning products that are currently active and being used by the customer. By providing the customer product and service directory ID along with the product ID, you can access important details about the product's properties. This API is helpful for accessing information about the products and services that customers have obtained from the bank.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

'/customers/{customerId}/products/{productId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/{serviceid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Retrieve In-force Service property

  **Documentation**

  This API path allows you to retrieve details about a specific service that a customer has acquired from the bank. By providing the customer product and service directory ID as well as the service ID, you can access important information about that particular service, such as its status and other relevant details. This API is useful for accessing in-force service properties for customers who have availed products and services from the bank.

  **Limitations**

  GET: The name of the path should be:  

'/customers/{customerId}/products/{productId}/services/{serviceId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Product/{productid}/Update</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Update In-force Product property

  **Documentation**

  This API endpoint allows for updating the status of a specific product or service that a customer has acquired from the bank. The "In-force Product" property refers to whether the product is currently active or not. By making a PUT request to this path with the necessary identifiers, the status of the product can be modified to reflect its current status accurately.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be something like:

'/customer-product-service-directory/{customerproductandservicedirectoryid}/products/{productid}/update'

Remember that in RESTful design, paths should use lowercase letters and hyphens to separate words instead of camel case.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProductandServiceDirectory/{customerproductandservicedirectoryid}/Service/{serviceid}/Update</span></summary>

  **Description**

  This Service Domain maintains the most important details of all the products and services that a customer has acquired from the bank. Update In-force Service property

  **Documentation**

  This API path allows you to update the "In-force Service" property of a specific service that a customer has acquired from the bank. By making a PUT request to this endpoint with the appropriate identifiers for the customer product and service directory ID and the service ID, you can modify the details of the service to reflect its current status and ensure that the system has the most up-to-date information about the customer's products and services.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be as follows:

'/customers/{customerId}/products/{productId}/services/{serviceId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
