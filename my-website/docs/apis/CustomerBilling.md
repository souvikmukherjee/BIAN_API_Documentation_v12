<h1 style='color:red;'>CustomerBilling</h1>

**BIAN Documentation:** [CustomerBilling v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerBilling/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerBilling/Initiate</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices InCR Initiate customer billing for a customer

  **Documentation**

  This API path `/CustomerBilling/Initiate` allows you to create a new customer billing record to start the process of composing, issuing, and tracking the billing and invoices for a specific customer. It initiates the billing process for the customer in the system.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/CustomerBilling/Initiate' could be simplified to '/customer-billing'. 

In RESTful naming conventions, paths should use lowercase letters and separate multiple words with hyphens for readability and consistency. This helps to create more organized and clean URLs for APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerBilling/{customerbillingid}/Update</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices UpCR Update details of a customer billing transaction

  **Documentation**

  This API path allows you to update the details of a customer billing transaction identified by a specific customer billing ID. It is used within a service that manages customer billing and invoices, allowing you to modify specific information associated with a billing transaction, such as invoiced items or payment details. By making a PUT request to this path with the necessary data, you can update the specific details of the customer billing transaction.

  **Limitations**

  PUT: A possible name following REST best practices for the path '/CustomerBilling/{customerbillingid}/Update' could be '/customers/{customerid}/billing'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerBilling/{customerbillingid}/Execute</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices ExCR Execute an automated action against an active bill (e.g. resubmit)

  **Documentation**

  This API path allows you to update an existing customer billing record by executing an automated action against it. For example, you can use this API to trigger actions like resubmitting a bill for processing or performing other automated tasks related to customer billing.

  **Limitations**

  PUT: The name of the path should be `/customer-billing/{customerBillingId}` to adhere to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerBilling/{customerbillingid}/Request</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices RqCR Request manual intervention with an active billing procedure

  **Documentation**

  This API path allows you to update a specific customer billing by requesting manual intervention with an active billing procedure. It is used to make changes to the billing process for a particular customer, such as requiring manual review or adjustments to the billing details.

  **Limitations**

  PUT: A possible name for the path could be: '/customer-billing/{customerbillingid}/request'. 

In accordance with REST best practices:

1. Use lowercase letters and hyphens to separate words in the URL path.
2. Use singular nouns in the path segments.
3. Use descriptive and meaningful names for resources. 

Remember that URL paths should be designed to be clear and understandable for developers and users alike.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerBilling/{customerbillingid}/Retrieve</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices ReCR Retrieve details about an active billing procedure

  **Documentation**

  This API path allows you to retrieve details about an active billing procedure for a specific customer billing ID. It provides information related to customer billing and allows you to track billing and invoice processes. By making a GET request to this path with a valid customer billing ID, you can access information about the active billing procedure associated with that ID.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customer-billing/{customerbillingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerBilling/{customerbillingid}/Invoicing/{invoicingid}/Update</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices UpBQ Update details of a generated invoice

  **Documentation**

  This API path allows you to update the details of a generated invoice for a specific customer billing transaction. By sending a PUT request to this endpoint with the appropriate IDs, you can make changes to the information included in the invoice, such as adjusting items, quantities, or amounts. This can be useful for ensuring accuracy and maintaining up-to-date billing information for your customers.

  **Limitations**

  PUT: The name of the path should be:
'/customers/{customerId}/billing/{billingId}/invoicing/{invoicingId}' for updating a specific customer's billing and invoicing details.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerBilling/{customerbillingid}/Invoicing/{invoicingid}/Retrieve</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices ReBQ Retrieve details about a sent invoice

  **Documentation**

  This API path allows you to retrieve details about a sent invoice for a specific customer billing record. It is part of a service that helps manage customer billing and invoicing processes centrally. By using this API, you can access information about a specific invoice that has been issued to a customer, such as details about the charges, payment status, and other relevant billing information.

  **Limitations**

  GET: In RESTful naming conventions, the path should be designed to be resource-oriented and reflect the actions being performed. Following this practice, the name of the path could be:

'/Customers/{customerId}/Billing/{billingId}/Invoices/{invoiceId}'

This path structure indicates the hierarchy of resources and identifies the specific customer, billing, and invoicing information being manipulated within the API.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerBilling/{customerbillingid}/TrackingandReminders/Initiate</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices InBQ Initiate tracking and reminder task against an active billing procedure

  **Documentation**

  This API path allows users to create a new tracking and reminder task associated with a specific customer billing procedure. The task will help in monitoring and following up on the progress of the billing process for a particular customer. This service aims to provide a centralized system for managing and keeping track of customer billing and invoice activities.

  **Limitations**

  POST: The name of the path should ideally be:

'/customers/{customerId}/tracking-and-reminders/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerBilling/{customerbillingid}/TrackingandReminders/{trackingandremindersid}/Retrieve</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices RwBQ Retrieve details about tracking and reminder activity

  **Documentation**

  This API path allows you to retrieve details about tracking and reminder activity for a specific customer billing and invoice transaction. By providing the customer billing ID and the tracking and reminder ID, you can access information related to the tracking and reminder activities associated with that particular billing transaction. This service helps users monitor and manage the progress and reminders related to customer billing processes.

  **Limitations**

  GET: The recommended name for the path '/CustomerBilling/{customerbillingid}/TrackingandReminders/{trackingandremindersid}/Retrieve' following REST best practices would be:

'/customer-billing/{customerbillingid}/tracking-and-reminders/{trackingandremindersid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerBilling/{customerbillingid}/Payments/Initiate</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices InBQ Initiate payment processing against a billing transaction

  **Documentation**

  This API path allows you to initiate payment processing against a specific billing transaction identified by the customerbillingid. It helps in managing customer billing and invoices efficiently by enabling the initiation of payments related to a particular billing activity.

  **Limitations**

  POST: The recommended path name for '/CustomerBilling/{customerbillingid}/Payments/Initiate' following REST best practices would be:

'/customers/{customerId}/billing/payments/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerBilling/{customerbillingid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices UpBQ Update payment details for a billing transaction

  **Documentation**

  This API path allows you to update the payment details for a specific billing transaction. You can access this functionality by providing the customer billing ID and the payment ID as part of the request. This API is part of a service that helps manage customer billing and invoices, allowing you to keep track of payment information and make necessary updates to ensure accurate billing processes.

  **Limitations**

  PUT: A suitable name for the described path following REST best practices could be: PUT /customer-billing/{customerbillingid}/payments/{paymentid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerBilling/{customerbillingid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  This service domains provides a central service to compose, issue and track customer billing and invoices ReBQ Retrieve payment processing details

  **Documentation**

  This API path allows you to retrieve payment processing details related to a specific payment within a customer billing system. By providing the customer billing ID and payment ID as parameters in the request, you can access information about how the payment was processed within the billing system. This can include details such as the payment method used, payment status, transaction date, and any associated information related to the payment processing.

  **Limitations**

  GET: A RESTful name for the path '/CustomerBilling/{customerbillingid}/Payments/{paymentsid}/Retrieve' could be:

GET /customer-billing/{customerbillingid}/payments/{paymentsid} 

This name follows REST best practices by using lowercase letters, hyphens to separate words, and using nouns rather than verbs to describe the resource being retrieved.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
