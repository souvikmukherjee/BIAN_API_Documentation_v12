<h1 style='color:red;'>MerchantAcquiringFacility</h1>

**BIAN Documentation:** [MerchantAcquiringFacility v12](https://app.swaggerhub.com/apis/BIAN-3/MerchantAcquiringFacility/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /MerchantAcquiringFacility/Initiate</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. InCR Initiate a new merchant acquiring facility

  **Documentation**

  This API path `/MerchantAcquiringFacility/Initiate` allows you to create a new merchant acquiring facility. This involves setting up all the necessary processes and resources related to servicing merchants, maintaining their accounts, handling their transactions, settlements, and managing the billing of fees and charges. By using this API, you can initiate the establishment of a new system to support merchants in their payment processing needs.

  **Limitations**

  POST: The name of the path '/MerchantAcquiringFacility/Initiate' could be rewritten as '/merchant-acquiring-facility/initiate' following REST best practices. This name uses lowercase letters, separates words with hyphens for readability, and describes the resource and action being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. UpCR Update details of the merchant acquiring facility

  **Documentation**

  This API path allows you to update the details of a merchant acquiring facility identified by a specific merchant acquiring facility ID. It is used for managing activities related to merchant fulfillment, maintaining merchant accounts, handling merchant transactions and settlements, as well as billing merchant fees and charges. By making a PUT request to this path with the necessary information, you can modify and maintain the information related to the merchant acquiring facility.

  **Limitations**

  PUT: The name of the path '/MerchantAcquiringFacility/{merchantacquiringfacilityid}/Update' could be simplified and improved following REST best practices. It is important to focus on resource naming rather than including specific operations like 'Update' in the path.

A more appropriate and RESTful naming convention for the path could be:

"/merchant-acquiring-facilities/{id}"

In this example:
- "merchant-acquiring-facilities" is the plural form of the resource 'MerchantAcquiringFac

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReCR Retrieve details about a merchant facility

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific merchant acquiring facility. It orchestrates activities related to merchant fulfillment, account maintenance, transactional activities, settlement processes, and billing of fees and charges for merchants. By using this API, you can access information specific to a merchant facility identified by the merchant acquiring facility ID provided in the path.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

/merchant-acquiring-facilities/{merchant-acquiring-facility-id}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/MerchantAccount/{merchantaccountid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReBQ Retrieve accounting details for the merchant account

  **Documentation**

  This API path allows you to retrieve accounting details for a specific merchant account within the Merchant Acquiring Facility service domain. It provides information about the financial transactions, fees, and charges associated with that particular merchant account.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:
'/merchant-acquiring-facilities/{merchantacquiringfacilityid}/merchant-accounts/{merchantaccountid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Clearing/{clearingid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. UpBQ Update a clearing transaction booked against the account

  **Documentation**

  This API path allows you to update a clearing transaction that has been booked against a specific merchant acquiring facility. It is used to manage activities related to merchant fulfillment, account maintenance, transaction processing, and settlement for merchants. Specifically, this endpoint is used to modify details related to a clearing transaction within the merchant acquiring facility identified by the merchantacquiringfacilityid and clearing transaction identified by the clearingid.

  **Limitations**

  PUT: A more appropriate and RESTful name for this path could be:

PUT /merchants/{merchantId}/clearings/{clearingId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Clearing/{clearingid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ExBQ Execute a clearing transaction against the account

  **Documentation**

  This API path allows you to execute a clearing transaction against a specific Merchant Acquiring Facility and Clearing ID. This operation is related to managing merchant accounts, transactions, and settlements, including handling merchant fees and charges. By using this API, you can update and process clearing transactions on the specified account.

  **Limitations**

  PUT: A cleaner and more RESTful naming convention for the given path '/MerchantAcquiringFacility/{merchantacquiringfacilityid}/Clearing/{clearingid}/Execute' could be: 

'/merchant-acquiring-facilities/{merchantacquiringfacilityid}/clearings/{clearingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Clearing/{clearingid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReBQ Retrieve details about a clearing transaction

  **Documentation**

  This API path allows you to retrieve details about a specific clearing transaction within a merchant acquiring facility. The service handles various activities related to merchant operations, such as maintaining merchant accounts, processing transactions, settling payments, and billing for fees and charges. By using this API, you can access information about a particular clearing transaction, providing insights into the financial activities related to merchant services.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be structured using lowercase letters and hyphens to separate words for better readability and consistency. Therefore, the path could be named as follows:

/merchant-acquiring-facility/{merchant-acquiring-facility-id}/clearing/{clearing-id}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Chargeback/{chargebackid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. UpBQ Update a chargeback transaction booked against the account

  **Documentation**

  This API path allows for updating a chargeback transaction that has been recorded against a specific merchant acquiring facility. It is used to make changes or corrections to the details of a chargeback transaction associated with the account. This process is part of managing merchant transactions, fees, and settlements within the merchant acquiring system.

  **Limitations**

  PUT: A more appropriate RESTful path for updating a specific chargeback related to a merchant acquiring facility would be:

```
PATCH /merchant-acquiring-facilities/{merchantacquiringfacilityid}/chargebacks/{chargebackid}
```

In this path:
- "PATCH" is used to indicate an update operation.
- "merchant-acquiring-facilities" is in kebab case and represents the collection of merchant acquiring facilities.
- {merchantacquiringfacilityid} is a placeholder for the specific

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Chargeback/{chargebackid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ExBQ Execute a chargeback transaction against the account

  **Documentation**

  This API path allows you to execute a chargeback transaction against a specific merchant acquiring facility. It is used to handle activities related to fulfilling merchant requests, maintaining merchant accounts, processing transactions, and managing settlements. By utilizing this API, you can update an existing chargeback transaction resource associated with a specific merchant acquiring facility. This process involves orchestrating various tasks related to merchant operations, including billing merchant fees and charges.

  **Limitations**

  PUT: Based on REST best practices, a more user-friendly and meaningful name for the path '/MerchantAcquiringFacility/{merchantacquiringfacilityid}/Chargeback/{chargebackid}/Execute' could be: 

'/merchant-acquiring-facilities/{merchantacquiringfacilityid}/chargebacks/{chargebackid}/process'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Chargeback/{chargebackid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReBQ Retrieve details about a chargeback transaction

  **Documentation**

  This API path allows you to retrieve details about a chargeback transaction associated with a specific merchant acquiring facility and chargeback ID. It is part of the Merchant Acquiring Facility service domain, which manages activities related to merchant accounts, transactions, settlements, and billing of fees and charges. By using this API, you can access specific information about a chargeback transaction within the context of merchant services.

  **Limitations**

  GET: The name of the path should be:

/merchant-acquiring-facilities/{merchant-acquiring-facility-id}/chargebacks/{chargeback-id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Settlement/{settlementid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. UpBQ Update a settlement transaction booked against the account

  **Documentation**

  This API path allows you to update a settlement transaction that is associated with a specific merchant acquiring facility. This means you can make changes to the details of the settlement transaction, such as updating payment information or adjusting settlement amounts. It is part of a service domain that handles various activities related to merchants, their accounts, transactions, and settlements, including the billing of fees and charges.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/MerchantAcquiringFacility/{merchantacquiringfacilityid}/Settlement/{settlementid}/Update' could be:

PATCH /merchant-acquiring-facilities/{merchantacquiringfacilityid}/settlements/{settlementid}

In this naming convention:
- All resource names are in lowercase and separated by hyphens for readability.
- HTTP method PATCH indicates that a partial update will be performed on the resource.
- Parameters

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Settlement/{settlementid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ExBQ Execute a settlement transaction against the account

  **Documentation**

  This API path allows you to perform a settlement transaction against a specific account within the Merchant Acquiring Facility service domain. By sending a PUT request to this endpoint with the appropriate merchant acquiring facility ID and settlement ID, you can update or execute a settlement transaction related to merchant activities, including billing merchant fees and charges. In simpler terms, this API path helps process financial transactions and manage payments within the merchant account system.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

/merchant-acquiring-facilities/{merchant-acquiring-facility-id}/settlements/{settlement-id}/execute

Make sure to use lowercase letters, hyphens to separate words, and plural nouns for collections whenever applicable.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/Settlement/{settlementid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReBQ Retrieve details about a settlement transaction

  **Documentation**

  This API path allows you to retrieve details about a settlement transaction within the Merchant Acquiring Facility. You can specify the unique identifiers for the Merchant Acquiring Facility and the settlement transaction to fetch specific information related to the settlement, such as amounts, dates, and other relevant data associated with the transaction. This API is part of the overall system that manages merchant accounts, transactions, fees, and charges within the merchant acquiring process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be something that clearly represents the resource being accessed and the action being taken. 

One suggestion for the path name could be:

GET '/merchant-acquiring-facilities/{merchantAcquiringFacilityId}/settlements/{settlementId}'

This path name is more descriptive and follows common REST conventions like using lowercase letters and separating words with hyphens.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. UpBQ Update a fee or penalty transaction booked against the account

  **Documentation**

  This API path allows you to update a fee or penalty transaction that was previously recorded against a specific merchant acquiring facility. By making a PUT request to this endpoint with the appropriate parameters, you can modify the details of the service fee associated with the merchant account. This helps in managing and maintaining accurate records of fees and charges related to merchant transactions and settlements.

  **Limitations**

  PUT: The name of the path should be:

PATCH /merchant-acquiring-facilities/{merchantacquiringfacilityid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. Execute Apply Service Fee

  **Documentation**

  This API path allows you to update an existing service fee associated with a specific merchant acquiring facility. It is part of a service domain that manages various activities related to merchants, such as fulfillment, account maintenance, transaction processing, and settlement. By executing this API, you can apply a service fee to a merchant acquiring facility, ensuring that the appropriate fees and charges are billed correctly.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something that succinctly represents the resource being acted upon. One possible name for this path could be `/merchants/{merchantId}/service-fees/{serviceFeeId}/execute`. This naming convention follows the practice of using lowercase letters, hyphens to separate words, and using singular nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MerchantAcquiringFacility/{merchantacquiringfacilityid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to Merchant fulfillment, Merchant Account maintenance, Merchant transactional activities and settlement, including the billing of merchant fees and charges. ReBQ Retrieve details about a fee or penalty charge

  **Documentation**

  This API path allows you to retrieve details about a fee or penalty charge within the context of Merchant Acquiring Facility services. By providing the ID of the specific Merchant Acquiring Facility and the ID of the Service Fee, you can get information related to merchant fees and charges. This can include details such as the amount of the fee, what the fee is for, and any other relevant information regarding penalties or charges associated with merchant transactions and services.

  **Limitations**

  GET: A more appropriate and RESTful name for this path could be:

GET '/merchant-acquiring-facilities/{merchant-acquiring-facility-id}/service-fees/{service-fees-id}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
