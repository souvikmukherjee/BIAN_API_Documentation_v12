<h1 style='color:red;'>BankGuarantee</h1>

**BIAN Documentation:** [BankGuarantee v12](https://app.swaggerhub.com/apis/BIAN-3/BankGuarantee/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/Control</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Control Bank Guarantee Transaction

  **Documentation**

  This API path allows you to update an existing bank guarantee transaction by providing new information or making changes to the current transaction details. It is specifically used for managing the pricing and issuance of various types of bank guarantee instruments.

  **Limitations**

  PUT: The name of the path should be '/bank-guarantees/{bankguaranteeid}/controls', following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Bank Guarantee Transaction

  **Documentation**

  This API path is used to update an existing bank guarantee transaction with new information related to pricing and issuance. It handles a range of bank guarantee instruments and allows for the exchange of information related to the transaction.

  **Limitations**

  PUT: The name of the path should be:

`/bank-guarantees/{bankguaranteeid}/exchange`

Here are the reasons for the choice:

1. Use Lowercase Letters: It is a best practice to use lowercase letters for paths in REST APIs.

2. Use Plural Nouns: It is common practice to use plural nouns for resource names. In this case, 'bank-guarantees' is a more appropriate plural noun to represent a collection of bank guarantees.

3

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Bank Guarantee Transaction

  **Documentation**

  This API path allows you to retrieve information related to a specific bank guarantee transaction by providing the unique identifier (bankguaranteeid) of that transaction. It is used for notifying or getting details about a bank guarantee transaction within the system. This service handles the pricing and issuance of various types of bank guarantee instruments.

  **Limitations**

  GET: The name of the path should be:

/BankGuarantees/{bankguaranteeid}/notifications

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Bank Guarantee Transaction

  **Documentation**

  This API path allows you to update an existing bank guarantee transaction by making a request using the specific bank guarantee ID. It is a part of a service domain that deals with the pricing and issuance of various bank guarantee instruments. By sending a PUT request to this path with the appropriate parameters, you can update details related to a bank guarantee transaction within the system.

  **Limitations**

  PUT: The name of the path '/BankGuarantee/{bankguaranteeid}/Request' should be named in a way that reflects the resource it represents in a RESTful manner. A possible name that follows REST best practices would be:

/bank-guarantees/{bankguaranteeid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Bank Guarantee Transaction

  **Documentation**

  This API path allows you to retrieve information about a specific bank guarantee transaction by providing the bank guarantee ID as a parameter in the request. It is part of a service domain that deals with pricing and issuing various types of bank guarantee instruments. By using this API, you can access details related to a bank guarantee transaction for further processing and analysis.

  **Limitations**

  GET: The name of the path should be /bank-guarantees/{bankguaranteeid} according to RESTful best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Bank Guarantee Transaction

  **Documentation**

  This API path allows you to update an existing bank guarantee transaction based on the specified bank guarantee ID. You can make changes to the pricing and issuance details of a bank guarantee instrument using this API endpoint.

  **Limitations**

  PUT: Following REST best practices, the path should be named as:

/BankGuarantees/{bankguaranteeid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Bank Guarantee Collections Task

  **Documentation**

  This API path allows you to update an existing bank guarantee collection task within the Bank Guarantee service domain. By making a PUT request to this path with the specific IDs of the bank guarantee and its collection task, you can exchange information related to pricing and issuance of various types of bank guarantee instruments. In simple terms, it enables you to modify and manage tasks associated with bank guarantees in a banking system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/BankGuarantees/{bankguaranteeid}/Collections/{bankguaranteecollectionsid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path allows you to update an existing bank guarantee definition and pricing information associated with a specific bank guarantee ID. It is a part of a service domain that manages the pricing and issuance of various bank guarantee instruments. By using this API, you can make changes to the definition and pricing details of a bank guarantee.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

/BankGuarantees/{bankguaranteeId}/DefinitionsAndPricing/{definitionsAndPricingId}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Bank Guarantee Issuance and Booking Task

  **Documentation**

  This BIAN API path is used to update an existing resource related to the pricing and issuance of bank guarantee instruments. It specifically focuses on the process of exchanging information related to a bank guarantee issuance and booking task identified by IDs within the API path. Through this PUT method, users can make updates or modifications to these specific tasks within the Bank Guarantee domain.

  **Limitations**

  PUT: A suitable name for the path you described, following REST best practices, could be:

`/bankguarantees/{bankguaranteeid}/issuances/{bankguaranteeissuanceandbookingid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Bank Guarantee Payout Task

  **Documentation**

  This API path allows you to update an existing bank guarantee payout task associated with a specific bank guarantee. It deals with the pricing and issuance of various bank guarantee instruments. The "Exchange" operation in this context refers to updating or modifying details related to the bank guarantee payout task.

  **Limitations**

  PUT: The name of the path could be '/bank-guarantees/{bankguaranteeid}/payouts/{bankguaranteepayoutid}/exchange' in accordance with REST best practices. This naming convention uses lowercase letters, hyphens to separate words, and plural nouns to indicate collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Customer Collateral Allocation Task

  **Documentation**

  This BIAN API path allows you to update an existing customer collateral allocation task associated with a specific bank guarantee. It is part of a service domain that deals with the pricing and issuance of various types of bank guarantee instruments. By using this API, you can update information related to the allocation of customer collateral in the context of a bank guarantee exchange transaction.

  **Limitations**

  PUT: The name of the path should be:

'/bank-guarantees/{bankguaranteeid}/customer-collateral-allocations/{customercollateralallocationid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Exchange Customer Payment Task

  **Documentation**

  This API path allows you to update an existing bank guarantee exchange task associated with a specific bank guarantee and customer payment. It handles the pricing and issuance of various bank guarantee instruments related to customer payments.

  **Limitations**

  PUT: The name of the path should be:

/BankGuarantees/{bankguaranteeId}/CustomerPayments/{customerpaymentId}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Bank Guarantee Collections Task

  **Documentation**

  This API path allows you to update and execute a Bank Guarantee Collection task within the context of a specific Bank Guarantee. It is part of a Service Domain that manages the pricing and issuance of various bank guarantee instruments. By using this API, you can perform actions related to collecting and processing bank guarantee tasks, such as executing specific tasks associated with a Bank Guarantee Collection.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be '/bank-guarantees/{bankguaranteeId}/collections/{bankGuaranteeCollectionsId}/execute'. 

This naming convention makes use of lowercase letters and hyphens to separate words for improved readability and consistency. Additionally, it uses plural nouns to represent resources and path parameters to identify specific instances within the resource hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path is used to update an existing bank guarantee definition and pricing task identified by the "bankguaranteedefinitionandpricingid" within the context of a specific bank guarantee identified by the "bankguaranteeid". The purpose of this API is to manage the pricing and issuance processes related to various bank guarantee instruments. By sending a PUT request to this endpoint, users can modify or update the details of a specific bank guarantee definition and pricing task.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/BankGuarantees/{bankguaranteeId}/DefinitionAndPricing/{bankguaranteeDefinitionAndPricingId}/Execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Bank Guarantee Issuance and Booking Task

  **Documentation**

  This API path is for updating and executing a specific task related to the pricing and issuance of bank guarantee instruments. It is used to perform the issuance and booking task for a particular bank guarantee by providing necessary information or making changes to existing details.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be more descriptive and follow a noun-based approach. Therefore, a suitable name for the path could be:

`/bank-guarantees/{bankguaranteeid}/issuances-and-bookings/{bankguaranteeissuanceandbookingid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Bank Guarantee Payout Task

  **Documentation**

  This BIAN API path is used to update an existing resource related to bank guarantee payout. Specifically, it is used for executing a bank guarantee payout task associated with a particular bank guarantee ID and a bank guarantee payout ID. This API allows for performing actions such as processing payments or fulfilling obligations related to bank guarantees.

  **Limitations**

  PUT: The name of the path should be '/bank-guarantees/{bankguaranteeId}/payouts/{bankguaranteePayoutId}/execute'. 

Following REST best practices, the path names should be in lowercase, use hyphens to separate words, and resource names should be pluralized. Additionally, path parameters should be in curly braces with lowercase letters.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Customer Collateral Allocation Task

  **Documentation**

  This API path allows you to update a specific customer collateral allocation task associated with a bank guarantee. By using this endpoint with a PUT request, you can execute actions related to the pricing and issuance of various bank guarantee instruments. It enables you to manage and allocate collateral for a customer in the context of a bank guarantee process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/bank-guarantees/{bankguaranteeid}/collateral-allocations/{customercollateralallocationid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Execute</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Execute Customer Payment Task

  **Documentation**

  This API path `/BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Execute` allows you to update an existing bank guarantee by executing a customer payment task associated with it. This task involves handling the pricing and issuance of various bank guarantee instruments. It provides functionality to process customer payments related to a specific bank guarantee.

  **Limitations**

  PUT: The name of the path should be:

/BankGuarantees/{bankguaranteeId}/CustomerPayments/{customerPaymentId}/Execute

Following REST best practices, it is recommended to use nouns in the path segments and use plural nouns for collections. Also, resource identifiers like `bankguaranteeid` and `customerpaymentid` should be camel case and follow the naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Bank Guarantee Collections Task

  **Documentation**

  This API path allows you to initiate a bank guarantee collections task for a specific bank guarantee ID. It involves creating a new resource to handle the pricing and issuance of various bank guarantee instruments. By using this API, you can trigger the process of starting a collections task related to a bank guarantee.

  **Limitations**

  POST: The name of the path could be `/bank-guarantees/{bankguaranteeid}/collections/initiate`, following REST best practices by using lowercase letters, hyphens for readability, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Bank Guarantee Definition and Pricing Task

  **Documentation**

  This BIAN API path allows you to initiate the process of defining and pricing a bank guarantee. By making a POST request to this endpoint with the specific bank guarantee ID, you can start the task of determining the terms and pricing for a bank guarantee instrument. This API is designed to handle a variety of bank guarantee types and facilitate the creation of accurate definitions and pricing structures for such financial instruments.

  **Limitations**

  POST: Based on RESTful best practices, the name of the path should be: 

`/bank-guarantees/{bankguaranteeid}/definitions-and-pricing/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Bank Guarantee Issuance and Booking Task

  **Documentation**

  This API path allows you to initiate the process of issuing and booking a bank guarantee instrument by creating a new resource. It handles the pricing and issuance of various types of bank guarantee instruments. By calling this API endpoint with the appropriate data, you can trigger the start of the bank guarantee issuance and booking task associated with a specific bank guarantee ID.

  **Limitations**

  POST: Following REST best practices, the name of the path should ideally be:

'/bank-guarantees/{bankGuaranteeId}/issuance-and-booking/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Bank Guarantee Payout Task

  **Documentation**

  This API path allows users to initiate a bank guarantee payout task for a specific bank guarantee ID. The API facilitates the pricing and issuance of various bank guarantee instruments. By making a POST request to this path with the necessary details, users can create a new resource to start the process for initiating a bank guarantee payout task associated with the specified bank guarantee ID.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

/BankGuarantee/{bankguaranteeid}/BankGuaranteePayouts 

This path indicates the resource "BankGuaranteePayouts" related to a specific "BankGuarantee" identified by {bankguaranteeid}.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Customer Collateral Allocation Task

  **Documentation**

  This API path `/BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/Initiate` is used to create a new resource for initiating a task related to customer collateral allocation in the context of a specific bank guarantee identified by `bankguaranteeid`. This task is part of handling the pricing and issuance of various bank guarantee instruments. It allows users to start the process of allocating customer collateral in relation to a particular bank guarantee.

  **Limitations**

  POST: The name of the path should be:

```
/BankGuarantees/{bankguaranteeid}/CustomerCollateralAllocations
```

Following REST best practices, the path should use plural nouns to represent collections of resources. The path should also be designed to be more descriptive and intuitive, making it easier for developers to understand and use the API.

</details>

<details open>
  <summary><span style='color:red;'>POST: /BankGuarantee/{bankguaranteeid}/CustomerPayment/Initiate</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Initiate Customer Payment Task

  **Documentation**

  This API path `/BankGuarantee/{bankguaranteeid}/CustomerPayment/Initiate` allows you to create a new customer payment task in the context of a specific bank guarantee identified by {bankguaranteeid}. It is part of a service domain that manages the pricing and issuance of various bank guarantee instruments. By initiating a customer payment task through this API, you can facilitate the payment process related to a specific bank guarantee transaction.

  **Limitations**

  POST: The name of the path should be as follows, adhering to REST best practices:

/BankGuarantees/{bankguaranteeid}/CustomerPayments/Initiate

In this updated path:
- "BankGuarantees" is in plural form to indicate a collection of resources.
- "{bankguaranteeid}" is used to represent a specific Bank Guarantee resource.
- "CustomerPayments" is also in plural form to indicate a collection of resources.
- "Initiate"

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Bank Guarantee Collections Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guarantee collection task related to a particular bank guarantee. It is part of a service domain that manages the pricing and issuance of various types of bank guarantee instruments. By accessing this endpoint, you can get details about the task associated with collecting bank guarantee payments.

  **Limitations**

  GET: The name of the path should be:

```
/BankGuarantees/{bankguaranteeid}/Collections/{bankguaranteecollectionsid}/Notify
``` 

This follows REST best practices by using plural nouns for resource names and avoiding unnecessary redundancy.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path retrieves information about a specific bank guarantee definition and pricing task identified by the provided IDs. It is part of a service domain that manages the pricing and issuance of various types of bank guarantee instruments. By accessing this API, users can retrieve details about a particular bank guarantee definition and pricing task.

  **Limitations**

  GET: Based on REST best practices, the name of this path should be:
'/bank-guarantees/{bankguaranteeid}/definitions-and-pricings/{bankguaranteedefinitionandpricingid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Bank Guarantee Issuance and Booking Task

  **Documentation**

  This API path retrieves information about the notification related to the pricing and issuance of bank guarantee instruments. It specifically focuses on notifying the bank guarantee issuance and booking task associated with a specific bank guarantee ID and issuance/booking ID. In simpler terms, it allows users to access details about the process of issuing and booking bank guarantees within a banking system.

  **Limitations**

  GET: A more RESTful name for the path could be:

/BankGuarantees/{bankguaranteeId}/IssuanceAndBooking/{issuanceAndBookingId}/Notify

In this naming convention:
- URLs are all lowercase
- Resource names are in plural form
- Each entity is referred to in a clear and descriptive manner

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Bank Guarantee Payout Task

  **Documentation**

  This API path allows you to retrieve information about notifying a bank guarantee payout task. It is part of the Bank Guarantee service domain, which deals with pricing and issuing various bank guarantee instruments. By using this API call, you can gather details related to notifying a bank guarantee payout task identified by the {bankguaranteeid} and {bankguaranteepayoutid}.

  **Limitations**

  GET: The name of the path should be:

/BankGuarantees/{bankguaranteeId}/Payouts/{bankGuaranteePayoutId}/Notify

In this naming convention:
- Resource names are in plural form (/BankGuarantees, /Payouts)
- Path parameters are singular and in camel case (/bankguaranteeId, /bankGuaranteePayoutId)
- Each path segment represents a resource or sub-resource in a hierarchical structure
-

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Customer Collateral Allocation Task

  **Documentation**

  This API path allows you to retrieve information related to a specific customer collateral allocation task in the context of a bank guarantee. It is part of a service domain that deals with pricing and issuing various bank guarantee instruments. The path includes the bank guarantee ID and the customer collateral allocation ID to fetch details about notifying the customer about the collateral allocation task.

  **Limitations**

  GET: A good name for the path following the REST best practices would be:

'/bank-guarantees/{bankguaranteeid}/customer-collateral-allocations/{customercollateralallocationid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Notify</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Notify Customer Payment Task

  **Documentation**

  This API path allows you to retrieve information about the notification of a customer payment task related to a specific bank guarantee and customer payment ID. In other words, it provides details about notifying a customer payment task in the context of bank guarantee transactions.

  **Limitations**

  GET: A good name for the path following REST best practices could be:

/bank-guarantees/{bankguaranteeid}/customer-payments/{customerpaymentid}/notify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Bank Guarantee Collections Task

  **Documentation**

  This API path is used to update and manage a specific bank guarantee collection task within the Bank Guarantee service domain. By utilizing this path, users can request updates or modifications to the bank guarantee collection task identified by the provided IDs. The service domain focuses on pricing and issuing various bank guarantee instruments, and this particular API route allows for the update of specific tasks related to bank guarantee collections.

  **Limitations**

  PUT: The name of the path should be:

/bank-guarantees/{bankguaranteeid}/collections/{bankguaranteecollectionsid}/request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path allows you to update an existing task related to the definition and pricing of a bank guarantee. It is part of a service domain that manages the pricing and issuance of various types of bank guarantee instruments. By making a PUT request to this path with specific IDs for the bank guarantee and the definition/pricing, you can initiate or update a task related to this process.

  **Limitations**

  PUT: The recommended name for the path would be:

"/bank-guarantees/{bankguaranteeid}/definitions-and-pricing/{bankguaranteedefinitionandpricingid}/request" 

This naming convention adheres to REST best practices by using lowercase letters, hyphens to separate words, and choosing clear and concise descriptors for each segment of the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Bank Guarantee Issuance and Booking Task

  **Documentation**

  This BIAN API path allows you to update a specific request for the issuance and booking of a bank guarantee. It is part of a service domain that deals with the pricing and issuance of various bank guarantee instruments. By making a PUT request to this path with the appropriate IDs for the bank guarantee and issuance/booking task, you can update and manage the process of requesting a bank guarantee issuance and booking.

  **Limitations**

  PUT: A recommended RESTful naming for this path could be:

/BankGuarantees/{bankguaranteeid}/IssuancesAndBookings/{bankguaranteeissuanceandbookingid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Bank Guarantee Payout Task

  **Documentation**

  This API path allows you to update an existing bank guarantee payout request associated with a specific bank guarantee ID. In simpler terms, it provides a way to make changes or updates to a payout request linked to a particular bank guarantee.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

'/bank-guarantees/{bankguaranteeId}/payouts/{bankguaranteePayoutId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Customer Collateral Allocation Task

  **Documentation**

  This API path allows you to update an existing customer collateral allocation request associated with a specific bank guarantee. It handles the process of allocating collateral from the customer towards a bank guarantee instrument, which involves pricing and issuing various types of bank guarantee instruments within the banking system.

  **Limitations**

  PUT: The appropriate name for the path would be:

/BankGuarantees/{bankguaranteeid}/CustomerCollateralAllocations/{customercollateralallocationid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Request</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Request Customer Payment Task

  **Documentation**

  This API path allows you to update an existing request for customer payment associated with a specific bank guarantee. It is part of a service domain that deals with pricing and issuing various types of bank guarantee instruments. By using this API, you can make changes to the customer payment request for a particular bank guarantee.

  **Limitations**

  PUT: The appropriate name for the path would be:

/bank-guarantees/{bankguaranteeid}/customer-payments/{customerpaymentid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Bank Guarantee Collections Task

  **Documentation**

  This API path is used to retrieve information about a specific bank guarantee collection within a bank guarantee. Users can retrieve details such as pricing and issuance information related to bank guarantee instruments using this API. The path specifies the unique identifiers for the bank guarantee and its collection to retrieve the necessary data.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/bank-guarantees/{bankguaranteeid}/collections/{bankguaranteecollectionsid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guarantee's definition and pricing by providing the bank guarantee ID and the definition and pricing ID. It gives access to details related to the pricing and issuance of various bank guarantee instruments, helping users understand the terms and costs associated with a particular bank guarantee product.

  **Limitations**

  GET: The name of the path should be:

'/bank-guarantees/{bankGuaranteeId}/definitions-pricing/{definitionPricingId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Bank Guarantee Issuance and Booking Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guarantee issuance and booking task identified by the provided IDs. It is part of a service domain that deals with pricing and issuing various types of bank guarantee instruments. By using this API, you can access details related to a specific bank guarantee issuance and booking task, such as pricing information, issuance status, and relevant booking details.

  **Limitations**

  GET: A more cleaner and concise name for this path while following REST best practices could be:

`/bank-guarantees/{bankguaranteeid}/issuance-bookings/{bankguaranteeissuanceandbookingid}`

This path maintains a clear and consistent naming convention, uses lowercase letters, separates words with hyphens, and conveys the hierarchy and purpose of the resource in a straightforward manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Bank Guarantee Payout Task

  **Documentation**

  This API path allows you to retrieve information about a specific bank guarantee payout task associated with a particular bank guarantee. Essentially, it helps you access details related to the payout of a bank guarantee, such as the amount, recipient, and any other relevant information pertaining to the payout task.

  **Limitations**

  GET: A RESTful naming convention for the path you mentioned could be:

GET /bank-guarantees/{bankguaranteeid}/payouts/{bankguaranteepayoutid}

This naming convention follows the principles of using lowercase letters, using hyphens for readability, using plural nouns for collections, and using specific identifiers like "id" for resource identification.

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Customer Collateral Allocation Task

  **Documentation**

  This API path is used to retrieve information about a specific customer collateral allocation task related to a bank guarantee. The bank guarantee service domain is responsible for managing the pricing and issuance of various types of bank guarantee instruments. By accessing this API path with the corresponding bank guarantee ID and customer collateral allocation ID, users can retrieve important details and data associated with a specific customer collateral allocation task within the context of a bank guarantee transaction.

  **Limitations**

  GET: The name of the path should be:  
'/bank-guarantees/{bankguaranteeid}/customer-collateral-allocations/{customercollateralallocationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Retrieve Customer Payment Task

  **Documentation**

  This API path allows you to retrieve information about a specific customer payment task associated with a bank guarantee. By accessing this endpoint with the correct bank guarantee ID and customer payment ID, you can view details related to the pricing and issuance of bank guarantee instruments for that particular task.

  **Limitations**

  GET: Based on REST best practices, a clearer and more meaningful name for this path could be something like:

GET /bank-guarantees/{bankguaranteeid}/customer-payments/{customerpaymentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeCollections/{bankguaranteecollectionsid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Bank Guarantee Collections Task

  **Documentation**

  This API path allows you to update an existing bank guarantee collection task associated with a specific bank guarantee. By utilizing this API, you can make changes or modifications to the details or status of a bank guarantee collection task within the system.

  **Limitations**

  PUT: The name of the path should be:

'/bank-guarantees/{bankguaranteeid}/collections/{bankguaranteecollectionsid}'

According to REST best practices, it is recommended to use all lowercase letters, separate words with hyphens, and use plural nouns in paths. Also, it is not necessary to include the verb 'Update' in the path as it can be inferred from the HTTP method used (e.g., PUT for updating a resource).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeDefinitionandPricing/{bankguaranteedefinitionandpricingid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Bank Guarantee Definition and Pricing Task

  **Documentation**

  This API path allows you to update the definition and pricing information for a specific bank guarantee. You can make changes to the details and costs associated with the bank guarantee instrument by providing the appropriate identifiers in the URL.

  **Limitations**

  PUT: The name of the path should be: `/bank-guarantees/{bankguaranteeid}/definitions-pricing/{bankguaranteedefinitionandpricingid}/update`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteeIssuanceandBooking/{bankguaranteeissuanceandbookingid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Bank Guarantee Issuance and Booking Task

  **Documentation**

  This API path allows you to update an existing bank guarantee issuance and booking task by specifying the unique IDs associated with the bank guarantee and its issuance/booking. This task involves managing the pricing and issuance of various types of bank guarantee instruments within a banking system. By making a PUT request to this endpoint, you can modify specific details or parameters related to the issuance and booking process of a bank guarantee, ensuring accurate and up-to-date information within the system.

  **Limitations**

  PUT: The name of the path should follow REST best practices. Taking this into consideration, the name of the path could be:

'/bank-guarantees/{bankguaranteeId}/bank-guarantee-issuances-and-bookings/{bankGuaranteeIssuanceAndBookingId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/BankGuaranteePayout/{bankguaranteepayoutid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Bank Guarantee Payout Task

  **Documentation**

  This BIAN API path allows you to update a specific bank guarantee payout task associated with a bank guarantee. By sending a PUT request to this endpoint with the appropriate IDs, you can modify information related to the payout task, such as updating the payout amount, adjusting dates, or making any other necessary changes to the bank guarantee payout task.

  **Limitations**

  PUT: The name of the path should be:  
/BankGuarantees/{bankguaranteeid}/BankGuaranteePayouts/{bankguaranteepayoutid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerCollateralAllocation/{customercollateralallocationid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Customer Collateral Allocation Task

  **Documentation**

  This API path allows you to update an existing customer collateral allocation task within the context of a specific bank guarantee. It is part of a service domain that manages the pricing and issuance of various bank guarantee instruments. So, by using this API, you can make changes or updates to a customer collateral allocation task associated with a particular bank guarantee.

  **Limitations**

  PUT: The name of the path should follow RESTful principles, which typically utilize nouns to represent resources and avoid verbs in the path. Therefore, a suitable name for the path could be:

'/bank-guarantees/{bankguaranteeid}/customer-collateral-allocations/{customercollateralallocationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /BankGuarantee/{bankguaranteeid}/CustomerPayment/{customerpaymentid}/Update</span></summary>

  **Description**

  This Service Domain handles the pricing and issuance of a broad range of bank guarantee instruments Update Customer Payment Task

  **Documentation**

  This BIAN API path allows you to update a customer payment task related to a specific bank guarantee and customer payment ID. It pertains to the handling of pricing and issuance for various bank guarantee instruments. By sending a PUT request to this endpoint, you can modify or update information associated with a particular customer payment task in the context of a bank guarantee transaction.

  **Limitations**

  PUT: The name of the path should be:

/bank-guarantees/{bankguaranteeid}/customer-payments/{customerpaymentid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
