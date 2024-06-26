<h1 style='color:red;'>CustomerProposition</h1>

**BIAN Documentation:** [CustomerProposition v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerProposition/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/Control</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Control Customer Proposition Agreement

  **Documentation**

  This BIAN API path allows you to update existing customer proposition agreements by specifying the ID of the specific customer proposition. This service domain helps manage and enforce requirements set by both the bank and the customer across all products and services included in the proposition agreement.

  **Limitations**

  PUT: The recommended name for this path would be:

```
/customer-propositions/{customerpropositionid}/controls
``` 

Followed the REST best practices, this naming convention uses lowercase letters with hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProposition/Evaluate</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Evaluate Customer Proposition Agreement

  **Documentation**

  This API path allows users to create and evaluate customer proposition agreements within a banking service. Users can input bank and customer requirements related to various products and services, and the API will assess the agreement based on these criteria. Essentially, it helps in managing and analyzing customer proposition agreements in the banking sector.

  **Limitations**

  POST: The name of the path should be '/customer-propositions'. 

According to REST best practices, path names should be in lowercase letters and hyphens should be used to separate words for greater readability. The 'Evaluate' part of the path is usually considered as an action or operation, which can be handled by using HTTP methods like POST, PUT, PATCH, or DELETE on the main resource path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Exchange Customer Proposition Agreement

  **Documentation**

  This BIAN API path allows you to update an existing customer proposition agreement. Customer propositions are agreements or offers made to customers by the bank, and this API allows you to make changes to the requirements and details of a specific customer proposition identified by its unique ID.

  **Limitations**

  PUT: The name of the path should be `/customer-propositions/{customerpropositionid}/exchange` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/Grant</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Grant Customer Proposition Agreement

  **Documentation**

  This API path allows for the updating of an existing customer proposition agreement. The customer proposition agreement contains requirements set by both the bank and customer, covering various products and services offered by the bank. By using this API, users can modify the terms of the agreement to ensure it aligns with the needs and expectations of both parties.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/customer-propositions/{customerPropositionId}/grant'

In this naming convention:
- Path segments are kept all lowercase
- Words are separated by hyphens for readability and consistency

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/Notify</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Notify Customer Proposition Agreement

  **Documentation**

  This API path allows you to retrieve information about a customer proposition agreement based on the provided customer proposition ID. The Customer Proposition Service Domain handles the requirements set by both the bank and the customer across all products and services. By using this API, you can access details related to a specific customer proposition agreement.

  **Limitations**

  GET: The name of the path should be: 

'/customer-propositions/{customerpropositionid}/notify'

Here are the reasons for this choice:

1. Use of lowercase letters: REST best practices recommend using lowercase letters for paths and URLs to ensure consistency and readability.

2. Use of plural for resources: The path 'customer-propositions' is in plural form, which is a common practice in RESTful APIs to refer to collections of resources.

3. Use of dashes for readability: Dashes are

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/Request</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Request Customer Proposition Agreement

  **Documentation**

  This API path updates an existing customer proposition agreement based on the specified customer proposition ID. It allows for the maintenance of requirements defined by both the bank and the customer across various products and services offered.

  **Limitations**

  PUT: The name of the path should be:

/customerpropositions/{customerpropositionid}/requests

Here are some key points to consider in choosing a RESTful path name:

1. Use plural nouns to represent collections of resources. This indicates that the endpoint is pointing to a collection of "requests" related to a specific "customer proposition".

2. Use lowercase letters to maintain consistency and improve readability.

3. Use appropriate resource naming conventions for each segment of the path ("/customerpropositions" and "/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Retrieve Customer Proposition Agreement

  **Documentation**

  This API path allows you to retrieve information about a Customer Proposition Agreement by providing the customer proposition ID as a parameter. The Customer Proposition Agreement contains defined requirements set by the bank and the customer for various products and services offered. This API helps you access details related to the agreement to understand these requirements better.

  **Limitations**

  GET: The name of the path should be:

```
GET /customer-propositions/{customerpropositionid}
``` 

This naming convention follows REST best practices by using lowercase letters, hyphens for readability, and using the HTTP method (GET) to indicate retrieving a specific customer proposition resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/Update</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Update Customer Proposition Agreement

  **Documentation**

  This BIAN API path allows you to update an existing Customer Proposition Agreement identified by a specific customer proposition ID. The Customer Proposition Agreement contains requirements that are defined by both the bank and the customer across all products and services offered. By using this API endpoint with a PUT request, you can modify the details of the Customer Proposition Agreement to meet any changes or updates needed.

  **Limitations**

  PUT: If the path '/CustomerProposition/{customerpropositionid}/Update' followed REST best practices, it could be named as PUT CustomerProposition/{customerpropositionid} to signify that a PUT request updates the resource identified by {customerpropositionid}.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/Evaluate</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Evaluate Bank Defined Product and Service Term

  **Documentation**

  This API path allows you to evaluate the defined requirements for a bank's products and services based on a specific customer proposition ID. By providing the necessary information, such as the customer proposition ID and the evaluation criteria, you can create a new evaluation resource that assesses how well the bank-defined products and services meet the specified requirements for that particular customer proposition.

  **Limitations**

  POST: Based on REST best practices, the path '/CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/Evaluate' could be named as:

'/customer-propositions/{customerpropositionid}/bank-defined-products/{productid}/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/Evaluate</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Evaluate Customer Defined Product and Service Term

  **Documentation**

  This API path allows you to evaluate customer-defined product and service terms within a specific customer proposition. You can create a new resource to maintain bank and customer-defined requirements related to various banking products and services as part of the customer proposition.

  **Limitations**

  POST: The name of the path should be:

'/customer-propositions/{customerPpropositionId}/customer-defined-products-services/terms/evaluate'

According to REST best practices:
1. Path names should be in lowercase.
2. Use hyphens to separate words in the path.
3. Path segments should be plural nouns to represent resources.
4. Use descriptive and specific path names.
5. Avoid including verbs in path names as the HTTP methods already represent the actions to be performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/{bankdefinedproductandservicetermid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Exchange Bank Defined Product and Service Term

  **Documentation**

  This API path allows you to update existing information related to customer propositions and bank-defined product and service terms. It helps manage the requirements set by both the bank and the customer across various products and services offered by the bank. By using a PUT request, you can make changes to the details associated with a specific customer proposition and bank-defined product and service term.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-propositions/{customer-proposition-id}/bank-defined-product-and-service-terms/{bank-defined-product-and-service-term-id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/{customerdefinedproductandservicetermid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Exchange Customer Defined Product and Service Term

  **Documentation**

  This API path is used to update an existing customer-defined product and service term within a customer proposition in a bank. It allows for exchanging or modifying specific requirements related to products and services that were defined by the customer or the bank.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/customer-propositions/{customerPropositionId}/customer-defined-product-service-terms/{customerDefinedProductServiceTermId}/exchange

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/{bankdefinedproductandservicetermid}/Notify</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Notify Bank Defined Product and Service Term

  **Documentation**

  This API path allows you to retrieve information about a bank-defined product and service term within a specific customer proposition. It helps maintain requirements defined by both the bank and the customer for all products and services related to that customer proposition.

  **Limitations**

  GET: A suggested name for this path following REST best practices could be:

'/customer-propositions/{customerpropositionid}/bank-defined-products/{bankdefinedproductandservicetermid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/{customerdefinedproductandservicetermid}/Notify</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Notify Customer Defined Product and Service Term

  **Documentation**

  This API path allows you to retrieve information about a specific customer-defined product and service term within a customer proposition. It enables you to access details related to the requirements set by both the bank and the customer across various products and services.

  **Limitations**

  GET: Based on REST best practices, the name of this path should be:

'/customer-propositions/{customerPropositionId}/customer-defined-product-and-service-terms/{customerDefinedProductAndServiceTermId}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/{bankdefinedproductandservicetermid}/Request</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Request Bank Defined Product and Service Term

  **Documentation**

  This API path allows you to update a specific bank defined product and service term associated with a customer proposition. By using a PUT request, you can modify or update the requirements set by the bank and the customer for products and services within this customer proposition.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

GET /customer-propositions/{customerPropositionId}/bank-defined-product-service-terms/{bankDefinedProductAndServiceTermId}/request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/{customerdefinedproductandservicetermid}/Request</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Request Customer Defined Product and Service Term

  **Documentation**

  This API path updates an existing customer defined product and service term within a customer proposition using the provided IDs. It allows banks and customers to manage requirements related to various products and services offered.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-propositions/{customerPropositionId}/customer-defined-product-service-terms/{customerDefinedProductServiceTermId}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/{bankdefinedproductandservicetermid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Retrieve Bank Defined Product and Service Term

  **Documentation**

  This BIAN API path allows you to retrieve information about a bank-defined product and service term associated with a specific customer proposition. The service domain maintains requirements set by both the bank and the customer for various products and services offered. By accessing this path with the appropriate IDs, you can retrieve specific details about the product or service term defined by the bank for a particular customer proposition.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customer-propositions/{customerpropositionid}/bank-defined-products-services/{bankdefinedproductandservicetermid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/{customerdefinedproductandservicetermid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Retrieve Customer Defined Product and Service Term

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific customer-defined product and service term within a customer proposition. It is used to access details related to the products and services that have been defined based on the requirements set by both the bank and the customer. The API allows you to retrieve specific information about a customer-defined product and service term by providing the customer proposition ID and the ID of the customer-defined product and service term.

  **Limitations**

  GET: A recommended RESTful resource naming convention for this path could be:

'/customer-propositions/{customerPropositionId}/customer-defined-product-service-terms/{customerDefinedProductServiceTermId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/BankDefinedProductandServiceTerm/{bankdefinedproductandservicetermid}/Update</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Update Bank Defined Product and Service Term

  **Documentation**

  This API path allows you to update a bank-defined product and service term within a specific customer proposition. By providing the customer proposition ID and the bank-defined product and service term ID, you can make changes to the requirements established by the bank and the customer for various products and services. This helps ensure that the terms align with the needs and preferences of both the bank and the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-propositions/{customerpropositionid}/bank-defined-products-services/{bankdefinedproductandservicetermid}/update' 

Here are the key considerations:

1. Use lowercase letters to maintain consistency and improve readability.
2. Separate words with hyphens for better clarity.
3. Use plural nouns for collections ('customer-propositions', 'bank-defined-products-services').
4. Avoid unnecessary detail in the URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerProposition/{customerpropositionid}/CustomerDefinedProductandServiceTerm/{customerdefinedproductandservicetermid}/Update</span></summary>

  **Description**

  This Service Domain maintains bank and customer defined requirements spanning all products and services Update Customer Defined Product and Service Term

  **Documentation**

  This BIAN API path allows you to update a customer-defined product and service term within a specific customer proposition. It is used to manage and modify the requirements set by both the bank and the customer for various products and services offered. By making a PUT request to this path with the corresponding IDs, you can update the specific terms defined for a product or service related to a customer proposition.

  **Limitations**

  PUT: The name of the path should be:

'/customer-propositions/{customer-proposition-id}/customer-defined-product-service-terms/{customer-defined-product-service-term-id}/update' 

Make sure to use lowercase letters and separate words with hyphens for better readability and compliance with REST best practices.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
