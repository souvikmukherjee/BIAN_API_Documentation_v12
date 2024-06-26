<h1 style='color:red;'>ProductCombination</h1>

**BIAN Documentation:** [ProductCombination v12](https://app.swaggerhub.com/apis/BIAN-3/ProductCombination/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Control</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution CoCR Control the processing of Product Combination Facility

  **Documentation**

  This API endpoint allows you to update the control settings for a specific product combination. Product combinations are bundled products that have specific constraints on how the embedded products are fulfilled. By controlling the processing of the product combination facility, you can ensure that the performance analysis accurately takes into account the contribution of the embedded products. Essentially, this API path helps manage and optimize the fulfillment and analysis of bundled products.

  **Limitations**

  PUT: The name of the path '/ProductCombination/{productcombinationid}/Control' following REST best practices should be:

'/product-combinations/{productcombinationid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Exchange</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution EcCR Accept, verify, etc. aspects of Product Combination Facility processing

  **Documentation**

  This API path allows you to update an existing product combination by exchanging or modifying the bundled products within it. The API ensures that any constraints related to the bundled products' fulfillment are maintained and that the performance analysis of the product combination accurately reflects the contribution of the embedded products. It facilitates the processing of various aspects related to product combinations and ensures that the changes made are accepted and verified correctly.

  **Limitations**

  PUT: For following REST best practices, the name of the path should be:

```
/ProductCombinations/{productCombinationId}/Exchanges
```

Key points to note for following REST best practices:
1. Use plural nouns for resources ('ProductCombinations' instead of 'ProductCombination').
2. Use camel case for variable names within the path ('productCombinationId' instead of 'productcombinationid').
3. Use nouns for resource names and verbs for actions ('Exchanges' instead of

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Execute</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ExCR Execute an available automated action for Product Combination Facility

  **Documentation**

  This API allows you to execute an available automated action for a specific product combination. The "Product Combination" feature supports bundled products by applying necessary constraints on how embedded products are fulfilled. It also ensures that the performance analysis considers the contribution of these embedded products correctly. By using this API with the PUT method and providing the product combination ID, you can trigger the execution of automated actions for managing product combinations effectively.

  **Limitations**

  PUT: The name of the path should be `/product-combinations/{productCombinationId}/execute` in accordance with REST best practices. This naming convention uses lowercase letters, hyphens for readability, and plural nouns for collection resources.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductCombination/Initiate</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution InCR Instantiate a new Product Combination Facility

  **Documentation**

  This API path, `/ProductCombination/Initiate`, allows you to create a new facility for combining products together. This facility supports bundled products and ensures that any constraints related to fulfilling the embedded products are met. It also helps in analyzing the performance of the combined products accurately by considering the contribution of the embedded products. Essentially, this API helps in setting up a system for managing and analyzing product combinations effectively.

  **Limitations**

  POST: In RESTful best practices, the path should use nouns to represent resources rather than verbs. With that in mind, a more appropriate name for the path '/ProductCombination/Initiate' could be '/product-combinations'. This follows the convention of using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductCombination/{productcombinationid}/Retrieve</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ReCR Retrieve details about any aspect of Product Combination Facility

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of the Product Combination facility. It supports bundled products by applying necessary constraints on how the embedded products are fulfilled. It also ensures that the performance analysis of products takes into account the contribution of the embedded products.

  **Limitations**

  GET: The name of the path should be "/product-combinations/{productCombinationId}". 

According to REST best practices, resource names should be in lowercase and separated by hyphens to improve readability and consistency. Additionally, using plural nouns for resource names is recommended.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Request</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution RqCR Request manual intervention or a decision with respect to Product Combination Facility

  **Documentation**

  This API path, /ProductCombination/{productcombinationid}/Request, allows you to update an existing product combination by requesting manual intervention or a decision regarding the product combination facility. It supports bundled products and ensures that necessary constraints are applied to the embedded product fulfillment. This API is used to manage bundled products, analyze their performance, and make sure that the contribution of embedded products is correctly accounted for in the analysis.

  **Limitations**

  PUT: The name of the path '/ProductCombination/{productcombinationid}/Request' should ideally be named like the following:

'/product-combinations/{productcombinationid}/requests'

Following REST best practices, it is recommended to use lowercase letters and hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Update</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution UpCR Update details relating to Product Combination Facility

  **Documentation**

  This API path allows you to update the details of a specific product combination. Product Combination refers to bundled products that have specific constraints on how they are fulfilled, and it ensures that the performance analysis accurately considers the contribution of each embedded product in the bundle. By using this API, you can make changes to the information related to a product combination facility, such as updating its settings or configurations.

  **Limitations**

  PUT: The name of the path '/ProductCombination/{productcombinationid}/Update' following REST best practices should be:

PUT /ProductCombinations/{productcombinationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Control</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution CoBQ Control the processing of Fulfillment

  **Documentation**

  This API path allows you to update the control settings for fulfillment of a product combination. It is used to manage bundled products by applying required constraints on how the embedded products are fulfilled. This helps ensure accurate analysis of the performance of the bundled products by taking into account the contribution of the embedded products.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
```
/ProductCombinations/{productcombinationid}/Fulfillments/{fulfillmentid}/Control
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Exchange</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution EcBQ Accept, verify, etc. aspects of Fulfillment processing

  **Documentation**

  This API path allows you to update an existing resource related to product combinations and fulfillment exchanges. It supports bundled products and ensures that necessary constraints are applied to embedded product fulfillment. It also ensures that correct analysis of product performance considers the contribution of embedded products. This API path is designed to help manage fulfillment processing and verify various aspects related to product combinations.

  **Limitations**

  PUT: The corresponding RESTful path addresses should be named in a resource-oriented manner. Given the context, a suitable name for the path '/ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Exchange' in line with REST best practices could be:

/ProductCombinations/{productcombinationid}/Fulfillments/{fulfillmentid}/Exchanges

This naming convention indicates hierarchical relationships between resources and follows standard RESTful design principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/TransferPricing/{transferpricingid}/Exchange</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution EcBQ Accept, verify, etc. aspects of Transfer Pricing processing

  **Documentation**

  This API path allows you to update an existing resource related to transfer pricing within a specific product combination. It supports bundled products by applying necessary constraints on how embedded products are fulfilled. It ensures that any analysis of product performance takes into account the contribution of these embedded products. This API helps in accurately processing transfer pricing for product combinations involving bundled products.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ProductCombinations/{productcombinationId}/TransferPricings/{transferpricingId}/Exchanges
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Execute</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ExBQ Execute an available automated action for Fulfillment

  **Documentation**

  This API path is used to execute an available automated action for Fulfillment within a specific product combination. It allows you to trigger a predefined action related to the fulfillment process for a bundled product combination. This action helps in managing and optimizing the fulfillment of products within the combination, ensuring that constraints are applied correctly and that the performance analysis considers the contribution of embedded products.

  **Limitations**

  PUT: A possible name for the path could be:

```
/combined-products/{productcombinationid}/fulfillments/{fulfillmentid}/execute
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductCombination/{productcombinationid}/EmbeddedProductControl/Initiate</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution InBQ Instantiate a new Embedded Product Control

  **Documentation**

  This API path is used to create a new Embedded Product Control for a specific Product Combination. A Product Combination supports bundled products and this control is used to apply necessary constraints on how these embedded products are fulfilled. By initiating a new Embedded Product Control, the system ensures that the performance analysis of the Product Combination takes into account the contribution of these embedded products.

  **Limitations**

  POST: The name of the path should ideally be:

'/product-combinations/{productCombinationId}/embedded-product-control/initiate'

This follows REST best practices by using lowercase letters, hyphens to separate words in the resource names, and using plural nouns for resource collections.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductCombination/{productcombinationid}/Fulfillment/Initiate</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution InBQ Instantiate a new Fulfillment

  **Documentation**

  This API path allows users to initiate a new fulfillment for a specific product combination by sending a POST request. The fulfillment process ensures that bundled products are fulfilled correctly and that the performance analysis takes into account the contribution of each embedded product within the combination.

  **Limitations**

  POST: Based on REST best practices, the path '/ProductCombination/{productcombinationid}/Fulfillment/Initiate' can be named as follows, keeping it clear, concise, and descriptive:

`PUT /product-combinations/{productcombinationid}/fulfillment/initiate`

This naming convention follows the guidelines for RESTful endpoints where HTTP methods like PUT are used to initiate actions on resources (in this case 'fulfillment'). The path segments are all in lowercase and separated by hyphens

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductCombination/{productcombinationid}/EmbeddedProductControl/{embeddedproductcontrolid}/Retrieve</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ReBQ Retrieve details about any aspect of Embedded Product Control

  **Documentation**

  This BIAN API path allows you to retrieve details about the embedded product control within a specific product combination. It supports bundled products by applying necessary constraints on how embedded products are fulfilled and ensures that the performance analysis accurately considers the contribution of embedded products. By using this API, you can access specific information related to controlling and managing embedded products within a product combination.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/productcombinations/{productcombinationid}/embeddedproductcontrols/{embeddedproductcontrolid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Retrieve</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ReBQ Retrieve details about any aspect of Fulfillment

  **Documentation**

  This API path allows you to retrieve details about the fulfillment of a product combination. It is specifically designed for bundled products that have certain constraints on how the embedded products are fulfilled. By using this API path, you can access information related to the fulfillment of a product combination, including any necessary constraints and performance analysis related to the embedded products within the bundle.

  **Limitations**

  GET: Based on REST best practices, the name of the path should focus on the resource being interacted with, using nouns rather than verbs. Considering this, the recommended name for the path would be:

'/product-combinations/{productcombinationid}/fulfillments/{fulfillmentid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductCombination/{productcombinationid}/TransferPricing/{transferpricingid}/Retrieve</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution ReBQ Retrieve details about any aspect of Transfer Pricing

  **Documentation**

  This API path allows you to retrieve details about Transfer Pricing related to a specific Product Combination. It supports bundled products by applying necessary constraints on how embedded products are fulfilled within the bundle. It also ensures that the analysis of the product's performance takes into account the contributions of the embedded products.

  **Limitations**

  GET: The name of the path should be:

'/product-combinations/{productcombinationid}/transfer-pricing/{transferpricingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Request</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution RqBQ Request manual intervention or a decision with respect to Fulfillment

  **Documentation**

  This API path allows you to update an existing product combination by requesting manual intervention or a decision regarding fulfillment for a specific product combination and fulfillment. It is designed to handle bundled products with embedded products, ensuring that fulfillment processes meet necessary constraints and that performance analysis accurately reflects the contribution of embedded products within the combination.

  **Limitations**

  PUT: For RESTful API naming, the path should be descriptive and reflect the resource hierarchy. Following REST best practices, a possible naming for the provided path could be:

'/product-combinations/{productCombinationId}/fulfillments/{fulfillmentId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/TransferPricing/{transferpricingid}/Request</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution RqBQ Request manual intervention or a decision with respect to Transfer Pricing

  **Documentation**

  This BIAN API path is used to update an existing request for manual intervention or decision related to transfer pricing within a product combination. The Product Combination API supports bundled products with specific constraints regarding how embedded products are fulfilled and accounted for in performance analysis. By using this path, users can request manual intervention or decision-making in relation to transfer pricing for a particular product combination identified by `productcombinationid` and transfer pricing scenario identified by `transferpricingid`.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

GET /product-combinations/{productcombinationid}/transfer-pricing/{transferpricingid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/EmbeddedProductControl/{embeddedproductcontrolid}/Update</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution UpBQ Update details relating to Embedded Product Control

  **Documentation**

  This API path allows you to update the details related to the control of embedded products within a specific product combination. It is used to manage bundled products by setting constraints on how the embedded products are fulfilled and ensuring that the performance analysis of the product combination accurately reflects the contribution of the embedded products.

  **Limitations**

  PUT: The name of the path should be as follows based on REST best practices: 

'/product-combinations/{productCombinationId}/embedded-product-controls/{embeddedProductControlId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/Fulfillment/{fulfillmentid}/Update</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution UpBQ Update details relating to Fulfillment

  **Documentation**

  This API path allows you to update details related to the fulfillment of a product combination. It is specifically designed for bundled products where multiple products are sold together as a package. By updating the fulfillment details, you can ensure that the necessary constraints for each individual product within the bundle are applied correctly. This helps in accurately analyzing the performance of the bundled products and ensures that the contribution of each embedded product is considered.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/product-combinations/{productCombinationId}/fulfillments/{fulfillmentId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductCombination/{productcombinationid}/TransferPricing/{transferpricingid}/Update</span></summary>

  **Description**

  Product Combination supports bundled products applying necessary constraints on embedded product fulfillment and ensuring product performance analysis takes correct account of embedded products' contribution UpBQ Update details relating to Transfer Pricing

  **Documentation**

  This API path allows you to update details related to transfer pricing for a specific combination of products. It is designed for use within the Product Combination system, which supports bundled products with specific constraints on how embedded products are fulfilled and how their contribution is analyzed for performance. By using this API, you can make changes to transfer pricing details for a particular product combination, ensuring that the correct information is reflected in the system.

  **Limitations**

  PUT: A more RESTful name for the path '/ProductCombination/{productcombinationid}/TransferPricing/{transferpricingid}/Update' could be:

PATCH /productcombinations/{productcombinationid}/transferpricings/{transferpricingid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
