<h1 style='color:red;'>ProductSalesSupport</h1>

**BIAN Documentation:** [ProductSalesSupport v12](https://app.swaggerhub.com/apis/BIAN-3/ProductSalesSupport/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/Control</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Control Product Sales Support Administrative Plan

  **Documentation**

  This BIAN API path allows you to update an existing product sales support administrative plan for customer access to product specialists. By sending a request using the specified product sales support ID, you can make changes to the administrative plan to control how customers interact with product specialists for support related to product sales.

  **Limitations**

  PUT: The name of the path should be:

/ProductSalesSupport/{productsalessupportid}/Control

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductSalesSupport/Create</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Create Product Sales Support Administrative Plan

  **Documentation**

  This BIAN API path allows users to create a new Product Sales Support Administrative Plan. This plan is designed to help manage customer access to product specialists within a business. By making a POST request to this API path, users can input the necessary information to set up this administrative plan effectively.

  **Limitations**

  POST: Following REST best practices, the name of the path '/ProductSalesSupport/Create' should be changed to '/product-sales-support'. This should be in lower case letters and the individual words should be separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/Exchange</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Exchange Product Sales Support Administrative Plan

  **Documentation**

  This API path allows you to update an existing product sales support administrative plan for a specific product sales support ID. It is used to administer customer access to product specialists for exchanging information related to the sales support plan.

  **Limitations**

  PUT: For a RESTful API path that follows best practices, the name of the path can be:

'/productsales/{productsalessupportid}/exchanges'

In this path:
- '/productsales' is the plural form of the resource 'ProductSales'.
- '{productsalessupportid}' is a placeholder for the specific ID of a product sales support.
- '/exchanges' indicates a sub-resource related to the specific product sales support identified.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/Grant</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Grant Product Sales Support Administrative Plan

  **Documentation**

  This BIAN API path allows users to update and grant customer access to product specialists for the Product Sales Support Administrative Plan. It essentially provides a way for customers to connect with experts who can assist them with product sales support activities.

  **Limitations**

  PUT: The name of the path should be `/productSalesSupport/{productSalesSupportId}/grant` in kebab case following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/Notify</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Notify Product Sales Support Administrative Plan

  **Documentation**

  This API path allows you to retrieve information about the Product Sales Support service domain by providing the ID of the specific Product Sales Support. It gives customers access to product specialists and involves notifying the Product Sales Support Administrative Plan.

  **Limitations**

  GET: The appropriate name for the path would be:

'/product-sales-support/{productsalessupportid}/notify'

Following REST best practices, the path should use lowercase letters and hyphens to separate words for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/Request</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Request Product Sales Support Administrative Plan

  **Documentation**

  This API path allows customers to update an existing request for product sales support with the specific identifier (productsalessupportid). Customers can use this API to manage their access to product specialists for support related to product sales.

  **Limitations**

  PUT: Following REST best practices, the name of the path would be:

"/product-sales-support/{productsalessupportid}/requests"

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/Retrieve</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Retrieve Product Sales Support Administrative Plan

  **Documentation**

  This API path allows you to retrieve information about a specific administrative plan within the Product Sales Support service domain. It provides access to details related to customer interactions with product specialists and outlines how support is provided to customers in selling products.

  **Limitations**

  GET: The name of the path should be:
'/product-sales-support/{productSalesSupportId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/Update</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Update Product Sales Support Administrative Plan

  **Documentation**

  This BIAN API path allows you to update an existing Product Sales Support Administrative Plan for a specific product sales support ID. It is used to manage customer access to product specialists within the Product Sales Support service domain. By making a PUT request to this path, you can modify the administrative plan to ensure that customers receive the necessary support and assistance from product specialists.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/productsalesSupport/{productsalesSupportId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Exchange</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Exchange Staff Assignment Routine

  **Documentation**

  This API path allows you to update the information related to staff assignments for product specialists in the Product Sales Support service domain. You can make changes to the assignment of staff members to specific tasks or exchanges within this system.

  **Limitations**

  PUT: The name of the path should be:

'/product-sales-support/{productsalessupportid}/staff-assignment/{staffassignmentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Exchange</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Exchange Staff Availability Tracking Routine

  **Documentation**

  This BIAN API path allows you to update the information related to customer access to product specialists' staff availability tracking routine within the Product Sales Support domain. Specifically, you can make changes to the exchange process linked to staff availability tracking for a specific product sales support ID and staff availability tracking ID. By using the PUT method, you can modify existing resources associated with this service, such as updating staff availability information or adjusting access privileges for customers.

  **Limitations**

  PUT: A possible name for the path could be:

'/product-sales-support/{productsalessupportid}/staff-availability-tracking/{staffavailabilitytrackingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Grant</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Grant Staff Assignment Routine

  **Documentation**

  This API path allows for the updating of customer access to product specialists within the Product Sales Support service domain. Specifically, it grants access to a specific staff assignment routine associated with a particular product sales support ID and staff assignment ID. By making a PUT request to this API path, you can update the permissions or settings related to customer access to product specialists in the system.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be `/product-sales-support/{product-sales-support-id}/staff-assignment/{staff-assignment-id}/grant`. This naming convention uses lowercase letters and dashes to separate words, adhering to the common practice in REST API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Grant</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Grant Staff Availability Tracking Routine

  **Documentation**

  This API path allows customers to update the grant status for product specialists' availability tracking routines within the Product Sales Support service domain. Customers can grant or change access permissions to specific staff availability tracking routines. This process helps manage and track the availability of product specialists to assist customers effectively.

  **Limitations**

  PUT: Based on RESTful best practices, a suitable name for the given path could be "/product-sales-support/{productsalessupportid}/staff-availability-tracking/{staffavailabilitytrackingid}/grant". In this format, all words are lowercased and hyphens are used to separate individual words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Notify</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Notify Staff Assignment Routine

  **Documentation**

  This API path is used to retrieve information about a routine that is part of the Product Sales Support service domain. Specifically, it allows administers to notify staff assignments related to customer access to product specialists. By accessing this API path, users can retrieve details about a specific staff assignment within the Product Sales Support service domain.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Notify

This name effectively conveys the hierarchy of resources and their relationships in the URL.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Notify</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Notify Staff Availability Tracking Routine

  **Documentation**

  This API path allows customers to retrieve information about the availability of product specialists who can assist them with product sales. Customers can access a routine that notifies them about the availability of staff to help them with any product-related queries or support they may need.

  **Limitations**

  GET: A more RESTful name for the given path could be:

'/productsales/{productsalessupportid}/staffavailability/{staffavailabilitytrackingid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Request</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Request Staff Assignment Routine

  **Documentation**

  This BIAN API path allows clients to update an existing request for staff assignment within the Product Sales Support service domain. Specifically, it manages customer access to product specialists by requesting staff assignment routines. The path enables clients to modify or update details related to staff assignment requests for support in product sales activities.

  **Limitations**

  PUT: A suitable name for the path '/ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Request' following REST best practices could be:

'/product-sales-support/{productsalessupportid}/staff-assignment/{staffassignmentid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Request</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Request Staff Availability Tracking Routine

  **Documentation**

  This BIAN API path allows users to update an existing request for staff availability tracking routine within the Product Sales Support service domain. Customers can use this API to adjust or modify their request to access product specialists for support related to staff availability tracking.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Retrieve</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Retrieve Staff Assignment Routine

  **Documentation**

  This API path allows customers to access information regarding staff assignments for specific product specialists within the Product Sales Support service domain. Customers can retrieve details about the staff assignment routine identified by the provided 'staffassignmentid' under the specified 'productsalessupportid'.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be `/product-sales-support/{productSalesSupportId}/staff-assignment/{staffAssignmentId}/retrieve`.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Retrieve</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Retrieve Staff Availability Tracking Routine

  **Documentation**

  This BIAN API path allows customers to retrieve information about the availability of product specialists who can provide support related to product sales. Customers can access this routine to see the availability status of staff members assigned to assist with product sales inquiries or issues.

  **Limitations**

  GET: Based on REST best practices, the name of the path should reflect the resource being interacted with rather than specific actions being performed. Therefore, a more suitable name for the path could be:

'/products/{productsalessupportid}/staff/{staffavailabilitytrackingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Update</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Update Staff Assignment Routine

  **Documentation**

  This API path allows users to update the staff assignment for a specific product sales support request. Clients can specify the product sales support ID and staff assignment ID to make changes to the assigned staff members handling the request. By sending a PUT request to this API path with the necessary information, users can update the staff assignment details according to their specific needs or any changes in staff availability.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/ProductSalesSupport/{productsalessupportid}/StaffAssignment/{staffassignmentid}/Update' would be:

PATCH /product-sales-support/{productsalessupportid}/staff-assignment/{staffassignmentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductSalesSupport/{productsalessupportid}/StaffAvailabilityTracking/{staffavailabilitytrackingid}/Update</span></summary>

  **Description**

  This Service Domain administers customer access to product specialists Update Staff Availability Tracking Routine

  **Documentation**

  This API path is used for updating information related to staff availability tracking within the Product Sales Support service domain. By specifying a unique identifier for both the product sales support and staff availability tracking, a customer can make updates to the staff availability tracking routine through this API endpoint using the PUT method.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/product-sales-support/{productsalessupportid}/staff-availability-tracking/{staffavailabilitytrackingid}/update'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
