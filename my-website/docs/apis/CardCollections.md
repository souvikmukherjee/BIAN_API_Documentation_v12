<h1 style='color:red;'>CardCollections</h1>

**BIAN Documentation:** [CardCollections v12](https://app.swaggerhub.com/apis/BIAN-3/CardCollections/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardCollections/Initiate</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. InCR Initiate card collections processing

  **Documentation**

  This API path allows you to start the process of recovering overdue payments from canceled card accounts by working with collection agencies, either internal or external. It involves activities like negotiating payment terms and reducing interest on the outstanding amounts. By using this API, you can trigger the initiation of the collection process to recover the money owed on these accounts.

  **Limitations**

  POST: A possible name for the path '/CardCollections/Initiate' following REST best practices could be:

POST /card-collections

This naming convention uses the HTTP method POST to indicate the initiation of a new card collection resource. The endpoint path is simplified and follows RESTful naming conventions by using lowercase letters and separating words with hyphens for readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardCollections/{cardcollectionsid}/Update</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. UpCR Update details of card collections processing

  **Documentation**

  This API path allows you to update information related to the recovery of outstanding amounts from cancelled card accounts using internal or external collection agencies. You can modify details such as payment terms and interest write-downs through this service.

  **Limitations**

  PUT: The name of the path '/CardCollections/{cardcollectionsid}/Update' can be modified to follow REST best practices by using the HTTP verb 'PUT' to indicate the action of updating a resource. Therefore, the name of the path could be '/CardCollections/{cardcollectionsid}' with the HTTP verb 'PUT' to update the specific card collection identified by {cardcollectionsid}.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardCollections/{cardcollectionsid}/Retrieve</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. ReCR Retrieve details about a card collections procedure

  **Documentation**

  This API path allows you to retrieve information about a specific card collections procedure using the ID of the card collection. It is used in the process of recovering outstanding amounts from cancelled card accounts through either internal or external collection agencies. The procedure may involve negotiating payment terms and interest reductions to facilitate the collection process.

  **Limitations**

  GET: The name of the path should be `/card-collections/{card_collection_id}` if it followed REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardCollections/{cardcollectionsid}/Assignment/{assignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. ReBQ Retrieve details about a card collections assignment

  **Documentation**

  This API path allows you to retrieve specific details about a card collections assignment. It is used for recovering outstanding amounts from cancelled card accounts by working with internal or external collection agencies. This process may involve negotiating payment terms and possibly reducing interest amounts owed by the account holder.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/card-collections/{cardCollectionsId}/assignments/{assignmentId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardCollections/{cardcollectionsid}/PaymentTerms/{paymenttermsid}/Retrieve</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. ReBQ Retrieve details about the payment terms for a card collections procedure

  **Documentation**

  This API path allows you to retrieve information about the payment terms associated with a specific card collections procedure. It is used in the context of recovering outstanding amounts from cancelled card accounts through either internal or external collection agencies. The details retrieved may include the specific terms negotiated for payment and any adjustments to interest rates.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /cardcollections/{cardcollectionsid}/paymentterms/{paymenttermsid}

REST paths are typically in all lowercase and should use nouns to represent the resources, while using plural form for collection resources. It is also a good practice to avoid using verbs in the path and to use hyphens to separate multiple words for readability.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardCollections/{cardcollectionsid}/Payment/Initiate</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. InBQ Initiate payment processing against the card collections account

  **Documentation**

  This API path allows you to initiate the payment processing against a specific card collections account identified by {cardcollectionsid}. It is used in the recovery process of outstanding amounts from cancelled card accounts by coordinating with internal or external collection agencies. This may involve negotiating payment terms and potentially reducing interest amounts owed. By utilizing this API, you can trigger the process of collecting payments on the specified card collections account.

  **Limitations**

  POST: The name of the path should be:

'/card-collections/{cardCollectionsId}/payment/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardCollections/{cardcollectionsid}/Payment/{paymentid}/Update</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. UpBQ Update a payment transaction

  **Documentation**

  This API path allows you to update an existing payment transaction within the Card Collections service domain. It is used for managing the recovery of outstanding amounts from cancelled card accounts using internal or external collection agencies. This update process may involve negotiating new payment terms and adjusting interest amounts.

  **Limitations**

  PUT: The appropriate name for the path '/CardCollections/{cardcollectionsid}/Payment/{paymentid}/Update' in adherence to REST best practices would be:

PATCH /CardCollections/{cardcollectionsid}/Payment/{paymentid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardCollections/{cardcollectionsid}/Payment/{paymentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. ReBQ Retrieve details about a payment made against the delinquent account

  **Documentation**

  This API path allows you to retrieve details about a payment that has been made against a delinquent card account. It is part of a service that manages the collection of outstanding amounts from cancelled card accounts using internal or external collection agencies. The information retrieved may include payment terms, negotiation details, and any interest adjustments related to the payment made on the delinquent account.

  **Limitations**

  GET: The name of the path should be structured using nouns and not verbs. Following REST best practices, a suitable name for the path '/CardCollections/{cardcollectionsid}/Payment/{paymentid}/Retrieve' could be:

'/card-collections/{cardcollectionsid}/payments/{paymentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardCollections/{cardcollectionsid}/Resolution/{resolutionid}/Update</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. UpBQ Update a resolution plan

  **Documentation**

  This API path allows you to update an existing resolution plan related to the recovery of outstanding amounts from cancelled card accounts. This may involve negotiating new payment terms or reducing interest amounts with internal or external collection agencies.

  **Limitations**

  PUT: The path could be named as follows according to REST best practices: 

'/card-collections/{cardCollectionId}/resolutions/{resolutionId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardCollections/{cardcollectionsid}/Resolution/{resolutionid}/Retrieve</span></summary>

  **Description**

  This service domain administers the recovery of outstanding amounts from cancelled card accounts through internal or external collection agencies.  This may involve negotiating payment terms and/or interest write-downs. ReBQ Retrieve details about a card collections resolution plan

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific card collections resolution plan. It is used to access information related to recovering outstanding amounts from cancelled card accounts through internal or external collection agencies. The resolution plan may include negotiations for payment terms and interest reductions. By using this API path, you can retrieve specific information about how a particular card collections case is being handled and the steps being taken to recover the outstanding amounts.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/card-collections/{cardCollectionId}/resolutions/{resolutionId}`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
