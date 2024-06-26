<h1 style='color:red;'>SpecialPricingConditions</h1>

**BIAN Documentation:** [SpecialPricingConditions v12](https://app.swaggerhub.com/apis/BIAN-3/SpecialPricingConditions/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/Control</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) CoCR Control the processing of Special Pricing Conditions Directory Entry

  **Documentation**

  This API path allows you to update an existing resource related to special pricing conditions. You can manage a pricing list or conditions with ranges and optional terms that are categorized by different dimensions. This is useful for imposing exceptional pricing conditions on products that override standard pricing terms for special events or situations. The API helps control the processing of special pricing conditions directory entry.

  **Limitations**

  PUT: The name of the path should be `/special-pricing-conditions/{specialpricingconditionsid}/control` if it followed REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/Exchange</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) EcCR Accept, verify, etc. aspects of Special Pricing Conditions Directory Entry processing

  **Documentation**

  This API path allows you to update an existing resource related to special pricing conditions. It enables you to maintain a list of pricing conditions for products that are categorized by different criteria, such as special events or situations. These special pricing conditions can override standard pricing terms. By using this API path, you can modify and manage the pricing details to meet specific business needs effectively.

  **Limitations**

  PUT: The name of the path should be: 

"/special-pricing-conditions/{special_pricing_conditions_id}/exchange" 

Following REST best practices, path names should be in lowercase and separate words should be hyphenated for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/Execute</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) ExCR Execute an available automated action for Special Pricing Conditions Directory Entry

  **Documentation**

  This BIAN API path allows you to update and execute a special pricing condition that overrides the standard pricing terms for specific events or situations. It provides a way to maintain a list of pricing conditions with ranges and optional terms for various dimensions, such as products or customers. By accessing this path and providing the necessary information, you can apply special pricing rules to adjust the prices of products or services under certain circumstances.

  **Limitations**

  PUT: The name of the path should be `/special-pricing-conditions/{specialpricingconditionsid}/execute` following REST best practices. It is important to use lowercase letters and separate words with hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SpecialPricingConditions/Initiate</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) InCR Instantiate a new Special Pricing Conditions Directory Entry

  **Documentation**

  This API path allows users to create a new entry in the Special Pricing Conditions directory. Users can establish special pricing terms and conditions for products that differ from the standard pricing based on specific criteria or dimensions. This feature allows for the implementation of unique pricing structures for special situations or events.

  **Limitations**

  POST: The name of the path should ideally be '/special-pricing-conditions/initiate' following REST best practices. It should use lowercase letters, hyphens to separate words, and represent the resource and action it pertains to clearly.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SpecialPricingConditions/{specialpricingconditionsid}/Retrieve</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) ReCR Retrieve details about any aspect of Special Pricing Conditions Directory Entry

  **Documentation**

  This BIAN API path allows you to retrieve details about specific aspects of special pricing conditions. It enables you to access information about pricing lists or conditions that are set up to apply unique pricing terms to products under special circumstances or events, overriding the standard pricing rules. This API helps you retrieve and manage the details related to these special pricing conditions, such as ranges, terms, and categories.

  **Limitations**

  GET: The name of the path should be:

'/special-pricing-conditions/{specialPricingConditionsId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/Request</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) RqCR Request manual intervention or a decision with respect to Special Pricing Conditions Directory Entry

  **Documentation**

  This BIAN API path allows you to update existing special pricing conditions for products. These conditions can include price ranges and optional terms, and are used to apply special pricing for specific events or situations that differ from standard pricing. This path is used to request manual intervention or decision-making related to these special pricing conditions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/SpecialPricingConditions/{specialpricingconditionsid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/Update</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) UpCR Update details relating to Special Pricing Conditions Directory Entry

  **Documentation**

  This API path allows you to update details related to special pricing conditions. You can modify and manage a pricing list with specific ranges and optional terms that are categorized by different dimensions. These special pricing conditions can be used to apply unique product pricing in situations that require deviations from the standard pricing terms, such as special events or circumstances.

  **Limitations**

  PUT: The name of the path should be '/special-pricing-conditions/{specialpricingconditionsid}'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SpecialPricingConditions/{specialpricingconditionsid}/PricingTerms/Initiate</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) InBQ Instantiate a new Pricing Terms

  **Documentation**

  This BIAN API path allows you to create a new resource for special pricing conditions. You can input specific pricing terms, including ranges and optional terms, to establish unique pricing conditions for products during special events or situations. Creating a new Pricing Terms resource will enable you to define and apply customized pricing rules that override standard pricing terms for certain products.

  **Limitations**

  POST: The name of the path should be: 

```
/SpecialPricingConditions/{specialpricingconditionsid}/PricingTerms
``` 

This path follows REST best practices by being concise, descriptive, hierarchical, and avoiding unnecessary nesting.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SpecialPricingConditions/{specialpricingconditionsid}/PricingTerms/{pricingtermsid}/Retrieve</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) ReBQ Retrieve details about any aspect of Pricing Terms

  **Documentation**

  This BIAN API path allows you to retrieve details about specific pricing terms within a special pricing conditions category. You can access information related to a specific pricing term by providing the special pricing conditions ID and the pricing term ID as parameters in the request. This functionality is designed to help you manage pricing lists or conditions that apply to certain products under specific circumstances, allowing you to override standard pricing terms when necessary.

  **Limitations**

  GET: The name of the path should be: 

'/special-pricing-conditions/{specialpricingconditionsid}/pricing-terms/{pricingtermsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SpecialPricingConditions/{specialpricingconditionsid}/PricingTerms/{pricingtermsid}/Update</span></summary>

  **Description**

  Maintain a pricing list or conditions (with ranges and optional terms) categorized by various dimensions to impose exceptional product pricing conditions that override standard pricing terms (for special events/situations) UpBQ Update details relating to Pricing Terms

  **Documentation**

  This API path allows you to update details related to pricing terms within a special pricing condition. Special pricing conditions are used to apply unique pricing rules to products for specific events or situations. By using this API, you can modify the pricing terms associated with a particular special pricing condition. This could include changing price ranges, adding or removing optional terms, or updating any other details relevant to the pricing terms within that specific special pricing condition.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /special-pricing-conditions/{special_pricing_conditions_id}/pricing-terms/{pricing_terms_id}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
