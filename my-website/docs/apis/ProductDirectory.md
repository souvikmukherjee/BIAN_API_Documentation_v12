<h1 style='color:red;'>ProductDirectory</h1>

**BIAN Documentation:** [ProductDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/ProductDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProductDirectory/Register</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. InCR Register a new product or service in the catalog

  **Documentation**

  This API path allows users to register a new product or service in the bank's Product Directory. It provides a way to create a new resource in the directory, which contains detailed information about the bank's products and services. This can be used for various purposes like product selection, sales and marketing, customer on-boarding, servicing, and product fulfillment.

  **Limitations**

  POST: If the path '/ProductDirectory/Register' followed REST best practices, it should be named '/products' as the resource name should be plural noun and the HTTP method (POST in this case) should describe the action to be performed on the resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/Update</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. UpCR Update details of a product or service in the catalog

  **Documentation**

  This API path allows you to update the details of a specific product or service in the bank's product directory. By making a PUT request to this path with the product directory ID, you can modify the information associated with that particular product or service. This update can be useful for keeping the product catalog current and accurate, ensuring that the information used for various activities such as product selection, sales, marketing, onboarding, servicing, and product fulfillment is up to date.

  **Limitations**

  PUT: The name of the path should be `/ProductDirectory/{productdirectoryid}`. The update operation should be done using the HTTP method PUT on this resource URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/Request</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. RqCR Request that an existing entry is updated or revised

  **Documentation**

  This API path allows users to update or revise existing entries in the bank's Product Directory by sending a request. The Product Directory contains details of the bank's products and services, which can be used for various purposes such as product selection, sales, marketing, on-boarding, servicing, and product fulfillment. By making a PUT request to this path with the specific product directory ID, users can update information related to a particular product or service in the directory.

  **Limitations**

  PUT: The RESTful naming convention for this path would be:

/ProductDirectory/{productdirectoryid}/Requests

In REST, it is recommended to use plural nouns for resource names to represent a collection of resources. Therefore, "Requests" is the appropriate name for this path following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDirectory/{productdirectoryid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. ReCR Retrieve product or service details from the catalog

  **Documentation**

  This API path allows you to retrieve information about a specific product or service from the bank's Product Directory by providing the product directory ID. It gives you access to details such as product features, pricing, and other relevant information that can be used for various activities like product selection, sales, marketing, customer on-boarding, servicing, and product delivery.

  **Limitations**

  GET: The name of the path should be:

GET /product-directory/{productdirectoryid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductDirectory/{productdirectoryid}/Operations/Register</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. InBQ Register a new product or service operations details in the catalog

  **Documentation**

  This BIAN API path allows users to register new product or service operations details in the Product Directory maintained by the bank. By making a POST request to this endpoint with the necessary information, users can add new entries to the directory, which contains information about the bank's products and services. This directory can then be used for various activities such as product selection, sales and marketing, on-boarding, servicing, and product fulfillment. Essentially, this API path facilitates the creation of new product or service entries in the bank's directory for easy reference and management.

  **Limitations**

  POST: The name of the path should be `/product-directories/{productdirectoryid}/operations/register` in accordance with REST best practices. The path should be in lowercase, use hyphens to separate words, and should be descriptive of the resource it represents.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/Operations/{operationsid}/Update</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. UpBQ Update details of a product or service operations details in the catalog

  **Documentation**

  This API path allows you to update the operational details of a product or service within the bank's Product Directory. By providing the specific product directory ID and operations ID, you can make changes to the details associated with that product or service. This update can be helpful for activities such as managing product information for sales, marketing, servicing, and fulfillment purposes.

  **Limitations**

  PUT: The name of the path should be:

```text
/ProductDirectory/{productdirectoryid}/Operations/{operationsid}
```

To follow REST best practices, the path should not include the action "Update". Instead, you can use standard HTTP methods like PUT or PATCH to update a resource at the specified URI.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDirectory/{productdirectoryid}/Operations/{operationsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. ReBQ Retrieve product or service operations details from the catalog

  **Documentation**

  This API path allows you to retrieve information about a specific product or service operation from the bank's Product Directory. By providing the product directory ID and the operations ID in the path, you can access detailed information about the operations related to that particular product or service. This data can be useful for various activities such as product selection, marketing, customer onboarding, servicing, and product fulfillment within the bank.

  **Limitations**

  GET: A good name for the path '/ProductDirectory/{productdirectoryid}/Operations/{operationsid}/Retrieve' could be:

GET /ProductDirectories/{productdirectoryid}/Operations/{operationsid} 

This follows REST best practices by using the HTTP method GET to retrieve a specific resource (in this case, an operation) within the ProductDirectory collection, using plural nouns for resource names, and avoiding unnecessary capitalization and complexity in the path.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductDirectory/{productdirectoryid}/SalesandMarketing/Register</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. InBQ Register a new product or service sales and marketing details in the catalog

  **Documentation**

  This API path allows users to register new product or service sales and marketing details into the bank's product directory catalog. By sending a POST request to this endpoint with the necessary information, users can add information about a new product or service to the catalog. This information can then be used for various activities such as product selection, sales and marketing, on-boarding, servicing, and product fulfillment within the bank.

  **Limitations**

  POST: The name of the path should be "/ProductDirectory/{productdirectoryid}/SalesAndMarketing/Registration" to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/SalesandMarketing/{salesandmarketingid}/Update</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. UpBQ Update details of a product or service sales and marketing details in the catalog

  **Documentation**

  This API endpoint allows you to update the sales and marketing details of a specific product in the bank's product directory. By accessing this path with the product directory ID and sales and marketing ID, you can make changes to the information related to how the product is marketed and sold. This can include updating product descriptions, promotional materials, pricing information, or any other sales and marketing content associated with that particular product.

  **Limitations**

  PUT: The name of the path should be: 

```
PUT /ProductDirectory/{productdirectoryid}/SalesandMarketing/{salesandmarketingid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDirectory/{productdirectoryid}/SalesandMarketing/{salesandmarketingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. ReBQ Retrieve product or service sales and marketing details from the catalog

  **Documentation**

  This particular BIAN API path allows users to retrieve detailed information about a specific product or service from the bank's product directory related to sales and marketing. By providing the unique identifiers for the product directory and the sales and marketing details, users can access essential information necessary for product selection, sales, marketing, on-boarding, servicing, and product fulfillment tasks within the bank's operations.

  **Limitations**

  GET: Based on RESTful API best practices, the name of the path should be structured as per the resource hierarchy it represents. Here's a suggestion for naming the path:

```
/ProductDirectories/{productdirectoryid}/SalesAndMarketing/{salesandmarketingid}/Retrieve
```

In this naming convention:
- Resource names should be in plural form.
- Resource identifiers are represented within curly braces {}.
- The HTTP method (which would typically be GET for a retrieve operation) is not included in the path

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductDirectory/{productdirectoryid}/Servicing/Register</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. InBQ Register a new product or service servicing details in the catalog

  **Documentation**

  This API path allows users to register a new product or service servicing details in the bank's Product Directory. By making a POST request to this path with the necessary information, a new entry will be created in the directory, providing details that can be used for various activities such as product selection, sales, marketing, customer on-boarding, servicing, and product fulfillment. This helps maintain a comprehensive catalog of the bank's offerings for reference and support purposes.

  **Limitations**

  POST: The name of the path should be:

`/product-directory/{productdirectoryid}/servicing/register`

Following REST best practices, the path should be in lowercase and use hyphens to separate words for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/Servicing/{servicingid}/Update</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. UpBQ Update details of a product or service servicing details in the catalog

  **Documentation**

  This API path allows you to update the details of a product or service servicing information in the bank's product directory. By sending a PUT request to this endpoint with the appropriate IDs for the product directory and servicing details, you can make changes or updates to the information stored in the catalog. This functionality can be useful for keeping the product directory accurate and up to date, which in turn supports various activities such as product selection, sales and marketing, customer on-boarding, servicing, and product fulfillment within the bank.

  **Limitations**

  PUT: Following RESTful best practices, the name of the path should be:

PUT /ProductDirectory/{productdirectoryid}/Servicing/{servicingid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDirectory/{productdirectoryid}/Servicing/{servicingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. ReBQ Retrieve product or service servicing details from the catalog

  **Documentation**

  This API path allows you to retrieve details about a specific product or service servicing entry from the bank's product directory. By providing the unique productdirectoryid and servicingid, you can access information that can help with tasks like product selection, sales, marketing, customer on-boarding, and product fulfillment. This API provides a centralized resource for accessing detailed information about the bank's range of products and services.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

"/product-directory/{productdirectoryid}/servicing/{servicingid}"

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductDirectory/{productdirectoryid}/Production/Register</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. InBQ Register a new product or service production details in the catalog

  **Documentation**

  This API path allows you to register new product or service production details in the bank's Product Directory. By making a POST request to this endpoint with the necessary information, you can create a new resource that contains details about a specific product or service offered by the bank. This information can then be used for various activities such as product selection, sales and marketing, on-boarding, servicing, and product fulfillment.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
/ProductDirectory/{productdirectoryid}/ProductionRegistrations
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDirectory/{productdirectoryid}/Production/{productionid}/Update</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. UpBQ Update details of a product or service production details in the catalog

  **Documentation**

  This API path allows you to update the details of a product or service production in the bank's product directory. By using this API, you can make changes to specific information related to a product within the catalog. This is useful for tasks such as updating product information for marketing purposes, ensuring accuracy in product selection, and enhancing customer servicing based on the most up-to-date details available in the directory.

  **Limitations**

  PUT: The name of the path should be:

PUT /ProductDirectory/{productdirectoryid}/Production/{productionid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDirectory/{productdirectoryid}/Production/{productionid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a comprehensive directory of the bank's products and services. It can be referenced to obtain product details used to support activities including product selection, sales and marketing, on-boarding, servicing and product fulfillment. ReBQ Retrieve product or service production details from the catalog

  **Documentation**

  This API path allows you to retrieve detailed information about a specific product or service production from the bank's product directory. By providing the product directory ID and the production ID, you can access information such as product details, which can be used for various activities like product selection, sales, marketing, on-boarding, servicing, and product fulfillment.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be: 

GET /product-directories/{productdirectoryid}/productions/{productionid} 

Following REST principles, the path should use lowercase letters, separate words with hyphens, and not include actions like "Retrieve" in the name.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
