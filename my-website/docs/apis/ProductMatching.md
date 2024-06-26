<h1 style='color:red;'>ProductMatching</h1>

**BIAN Documentation:** [ProductMatching v12](https://app.swaggerhub.com/apis/BIAN-3/ProductMatching/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/Exchange</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EcCR Accept, verify, etc. aspects of Product/Customer Combination Assessment processing

  **Documentation**

  This API path allows you to update an existing resource related to product matching for a customer. It is used to match suitable products or product combinations to a customer based on various criteria such as the customer's type, product preferences, campaign alignment, and other relevant factors. The API helps in assessing and updating the product/customer combinations for different purposes such as solicitation, retention, acceptance, verification, etc.

  **Limitations**

  PUT: The name of the path should be:

'/ProductMatching/{productmatchingid}/Exchange' 

This path follows REST best practices by using resource-oriented naming conventions and accurately reflects the hierarchical relationship between the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/Execute</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ExCR Execute an available automated action for Product/Customer Combination Assessment

  **Documentation**

  This API path allows a user to update an existing resource related to product matching. It is used to match suitable products and product combinations to a specific customer based on various factors such as customer type, product interest, campaign alignment, and more. By executing this API, automated actions can be triggered to assess and recommend the best product/customer combinations for the given conditions.

  **Limitations**

  PUT: The name of the path could be '/product-matchings/{productMatchingId}/execute'. In this path:
- 'product-matchings' is in plural form as per REST best practices for resource naming.
- '{productMatchingId}' follows the common practice of using lowercase alphanumeric characters and dashes for path parameters.
- 'execute' is a clear and concise verb that represents the action intended to be performed on the specified resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/Grant</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment GrCR Obtain permission to act in relation to Product/Customer Combination Assessment

  **Documentation**

  This BIAN API path called "Product Matching" allows you to update an existing resource related to matching eligible products and product combinations to a customer. It involves assessing various conditions such as customer type, product interest, solicitation/retention, and campaign alignment in order to determine the most suitable products for a particular customer. The purpose is to obtain permission to act on the assessment of product/customer combinations.

  **Limitations**

  PUT: A suitable name for the path '/ProductMatching/{productmatchingid}/Grant' that aligns with REST best practices could be:

'/products/{productid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductMatching/Evaluate</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EvCR Instantiate a new Product/Customer Combination Assessment

  **Documentation**

  This BIAN API path ("Product Matching/Evaluate") allows users to create a new assessment to match eligible products and product combinations to a specific customer. This matching process considers various conditions like customer type, product interest, solicitation/retention, and campaign alignment. In simpler terms, it helps identify the most suitable products for a customer based on their profile and preferences.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

/product-matching/evaluate

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductMatching/{productmatchingid}/Retrieve</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ReCR Retrieve details about any aspect of Product/Customer Combination Assessment

  **Documentation**

  This API path allows you to retrieve information about a specific product/customer combination assessment. It is used to match eligible products and product combinations to a customer based on factors such as customer type, product interest, solicitation/retention, and campaign alignment. By using this API, you can access details about how products are matched to customers under various conditions, helping to optimize product offerings and customer relationships.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /product-matchings/{productmatchingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/Request</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment RqCR Request manual intervention or a decision with respect to Product/Customer Combination Assessment

  **Documentation**

  This BIAN API path allows you to update an existing resource related to product matching for a specific product matching ID. It is used to match eligible products and combinations for a customer based on various conditions like customer type, product interest, solicitation efforts, campaign alignment, etc. If there is a need for manual intervention or decision-making regarding the assessment of product/customer combinations, this endpoint can be utilized to request that action.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

`/product-matchings/{productmatchingid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/Update</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment UpCR Update details relating to Product/Customer Combination Assessment

  **Documentation**

  This API path is used to update the details related to the assessment of product and customer combinations in the Product Matching process. It allows for modifying existing information about how eligible products and combinations are matched to customers based on factors such as customer type, product interest, campaign alignment, and solicitation/retention.

  **Limitations**

  PUT: The name of the path should be:

```
/ProductMatchings/{productmatchingid}
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductMatching/{productmatchingid}/BankandCampaignAlignment/Evaluate</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EvBQ Instantiate a new Bank and Campaign Alignment

  **Documentation**

  This API path is used to create a new resource for matching eligible products and product combinations to a customer based on specific conditions like customer type, product interest, solicitation/retention, and campaign alignment. It allows the bank to evaluate and establish a connection between a customer and suitable products based on various factors, including campaign alignment.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be: 

```
/ProductMatchings/{productmatchingid}/BankCampaignAlignments
```

This path reflects the plural form of the main resource "ProductMatchings", includes the specific identifier "productmatchingid", and describes the relationship between the product matching and bank campaign alignments.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductMatching/{productmatchingid}/ContextCriteria/Evaluate</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EvBQ Instantiate a new Context Criteria

  **Documentation**

  This API path is used to create a new set of criteria for matching eligible products or product combinations to a customer based on different factors such as customer type, product interest, campaign alignment, and other conditions. By using this API, you can define specific rules or conditions that help determine which products or product combinations are suitable for a particular customer in a given scenario.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be:

```
/ProductMatching/{productmatchingid}/ContextCriteria/{evaluate}
```

In RESTful design, it's ideal to use nouns to represent resources in the path rather than verbs. By using `{evaluate}` as a placeholder within the path, it indicates that some form of evaluation or action is being performed on the context criteria related to the specified product matching ID.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductMatching/{productmatchingid}/ProductEligibility/Evaluate</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EvBQ Instantiate a new Product Eligibility

  **Documentation**

  This API path allows you to create a new resource for evaluating the eligibility of products and product combinations for a customer. It matches these products based on factors like customer type, product interest, and campaign alignment. By using this API, you can determine the suitability of certain products for a customer under specific conditions.

  **Limitations**

  POST: The name of the path should be "/product-matchings/{productmatchingid}/product-eligibility/evaluate" in accordance with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductMatching/{productmatchingid}/ProductTypeSelection/Evaluate</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment EvBQ Instantiate a new Product Type Selection

  **Documentation**

  This API path allows you to create a new selection of product types for a specific product matching scenario identified by the productmatchingid. It helps match suitable products or combinations for a customer based on various factors such as customer type, product interest, solicitation/retention, and campaign alignment. By evaluating these conditions, the API assists in determining the most appropriate product types for the customer in the given context.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`/product-matchings/{productmatchingid}/product-type-selection/evaluate`

In general, it is recommended to use lowercase letters, hyphens to separate words, and plural nouns for resource names in RESTful API paths.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductMatching/{productmatchingid}/BankandCampaignAlignment/{bankandcampaignalignmentid}/Retrieve</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ReBQ Retrieve details about any aspect of Bank and Campaign Alignment

  **Documentation**

  This BIAN API path is used to retrieve details about Bank and Campaign Alignment for a specific Product Matching and its corresponding Bank and Campaign Alignment ID. It allows users to access information related to matching eligible products and product combinations to customers based on various conditions like customer type, product interest, solicitation/retention, and campaign alignment. This path helps in understanding how products are aligned with specific banks and campaigns to target and serve customers effectively.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/product-matchings/{productmatchingid}/bank-campaign-alignments/{bankandcampaignalignmentid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductMatching/{productmatchingid}/ContextCriteria/{contextcriteriaid}/Retrieve</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ReBQ Retrieve details about any aspect of Context Criteria

  **Documentation**

  This BIAN API path allows you to retrieve details about the context criteria associated with product matching. It helps in identifying eligible products and product combinations for a customer based on factors like customer type, product interest, solicitation/retention, and campaign alignment. By using this API, you can access specific information about the context criteria used in the product matching process, allowing you to better understand how products are matched to customers based on various conditions.

  **Limitations**

  GET: Based on REST best practices, an appropriate name for the path '/ProductMatching/{productmatchingid}/ContextCriteria/{contextcriteriaid}/Retrieve' could be:

GET /product-matchings/{productmatchingid}/context-criteria/{contextcriteriaid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductMatching/{productmatchingid}/ProductEligibility/{producteligibilityid}/Retrieve</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ReBQ Retrieve details about any aspect of Product Eligibility

  **Documentation**

  This API path allows you to retrieve details about the eligibility of a product or combination of products for a customer. It considers factors such as the type of customer, their product interests, and how they are targeted in marketing campaigns. By using this API, you can match products that are suitable for a specific customer based on various conditions.

  **Limitations**

  GET: The name of the path should be:
'/product-matching/{productMatchingId}/product-eligibility/{productEligibilityId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductMatching/{productmatchingid}/ProductTypeSelection/{producttypeselectionid}/Retrieve</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment ReBQ Retrieve details about any aspect of Product Type Selection

  **Documentation**

  This API path allows you to retrieve details about the product type selection related to a specific product matching and a particular product type selection ID. It is used to match suitable products or combinations of products to customers based on factors like the type of customer, their product interest, marketing campaign alignment, and other relevant conditions. This information retrieval can assist in making tailored product recommendations to customers.

  **Limitations**

  GET: A RESTful URI for this path could be:
"/product-matchings/{productMatchingId}/product-type-selections/{productTypeSelectionId}"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/BankandCampaignAlignment/{bankandcampaignalignmentid}/Update</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment UpBQ Update details relating to Bank and Campaign Alignment

  **Documentation**

  This API path allows you to update details related to the alignment of a bank and campaign for a specific product matching scenario. It is used in the process of matching suitable products or product combinations to a customer based on various conditions such as customer type, product interest, solicitation/retention strategies, and campaign alignment. By updating the bank and campaign alignment details, you can ensure that the product matching process is accurately tailored to meet the needs and preferences of the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /product-matchings/{productmatchingid}/bank-campaign-alignments/{bankandcampaignalignmentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/ContextCriteria/{contextcriteriaid}/Update</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment UpBQ Update details relating to Context Criteria

  **Documentation**

  This API path is used to update the details related to context criteria within a product matching process. Specifically, it allows you to modify information regarding the conditions under which eligible products and product combinations are matched to a customer. These conditions could include factors such as customer type, product interest, solicitation strategies, retention efforts, and alignment with marketing campaigns. By using this API, you can adjust the criteria used to determine which products are suitable for specific customers based on their characteristics and preferences.

  **Limitations**

  PUT: A possible RESTful name for the path '/ProductMatching/{productmatchingid}/ContextCriteria/{contextcriteriaid}/Update' could be:

PUT /product-matchings/{productmatchingid}/context-criteria/{contextcriteriaid}

In this naming convention:
- The HTTP method PUT is used to indicate that an update operation is being performed on the resource.
- The path segments are all in lowercase and use hyphens to separate words for better readability and consistency.
- The resource names ('product-match

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/ProductEligibility/{producteligibilityid}/Update</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment UpBQ Update details relating to Product Eligibility

  **Documentation**

  This API path allows you to update the details related to the product eligibility within a product matching scenario. It involves matching eligible products and product combinations to a customer based on various conditions such as customer type, product interest, solicitation/retention, and campaign alignment. By making a PUT request to this path with the appropriate IDs, you can modify the information that determines which products are suitable for specific customers under certain circumstances.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/product-matchings/{productMatchingId}/product-eligibilities/{productEligibilityId}'

The last segment 'Update' is not necessary in the path, as the HTTP method used for updating resources would typically be a 'PUT' or 'PATCH' request. This path follows the convention of using lowercase letters, hyphens to separate words, and using resource identifiers in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductMatching/{productmatchingid}/ProductTypeSelection/{producttypeselectionid}/Update</span></summary>

  **Description**

  Capability used to match eligible product and product combinations to a customer based on prevailing conditions such as customer type, product interest, solicitation/retention, campaign alignment UpBQ Update details relating to Product Type Selection

  **Documentation**

  This BIAN API path `/ProductMatching/{productmatchingid}/ProductTypeSelection/{producttypeselectionid}/Update` allows you to update details related to product type selection within the context of product matching for a specific product matching ID and product type selection ID. This means you can make changes to the criteria used to match eligible products and product combinations to a customer, considering factors such as customer type, product interest, solicitation/retention, and campaign alignment. The update can help optimize the product matching process for better customer outcomes based on current conditions and preferences.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ProductMatchings/{productmatchingid}/ProductTypeSelections/{producttypeselectionid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
