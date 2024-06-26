<h1 style='color:red;'>CustomerWorkbench</h1>

**BIAN Documentation:** [CustomerWorkbench v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerWorkbench/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InCR Initiate a customer workbench operating session

  **Documentation**

  This API path allows users to start a session on the customer workbench platform. The customer workbench is a service provided by the bank that enables customers to access the bank's products and services through various channels and devices. By sending a POST request to this path, a new resource will be created to initiate a customer workbench operating session, allowing customers to interact with the bank's offerings.

  **Limitations**

  POST: In accordance with REST best practices, the name of the path '/CustomerWorkbench/Initiate' should ideally be renamed to '/customer-workbench/initiate' to use lowercase letters and hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/Update</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device UpCR Update details of a workbench session

  **Documentation**

  This API path allows you to update the details of a workbench session for a specific customer on the customer side devices. It is typically used to modify information related to a customer's interaction with the bank's products and services through various channels and devices. By making a PUT request to this path with the appropriate customer workbench ID, you can update the information regarding the ongoing session and make necessary changes to ensure a smooth customer experience.

  **Limitations**

  PUT: The recommended naming convention for this path following RESTful best practices would be:

'/customer-workbenches/{customerworkbenchid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerWorkbench/{customerworkbenchid}/Retrieve</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReCR Retrieve details about the workbench session

  **Documentation**

  This BIAN API path allows you to retrieve details about a workbench session related to a customer's access portal with a bank. By providing the customer workbench ID as a parameter in the URL, you can access information about the specific workbench session, including the customer's interaction with the bank's products and services through various channels and devices.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customer-workbenches/{customerWorkbenchId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/{customerworkbenchid}/SWUpdate/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InBQ Initiate a SW update

  **Documentation**

  This API path allows for initiating a software update on a customer's device within the Customer Workbench service domain. It enables the customer to access the bank's products and services through various channels and devices. By sending a POST request to this path with the relevant customer workbench ID, a new software update process can be triggered on the customer's device.

  **Limitations**

  POST: A suitable name for the path '/CustomerWorkbench/{customerworkbenchid}/SWUpdate/Initiate' following REST best practices could be:

'/customer-workbenches/{customerworkbenchid}/software-updates/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerWorkbench/{customerworkbenchid}/SWUpdate/{swupdateid}/Retrieve</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReBQ Retrieve details about a SW update

  **Documentation**

  This API path is designed to retrieve information about a software update related to a specific customer workbench in a bank's customer access portal. By specifying the customer workbench ID and the software update ID in the URL, users can retrieve details about the software update relevant to that particular customer workbench. This functionality allows access to information about software updates that may impact the customer's access to banking products and services through various devices and channels.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customer-workbenches/{customerworkbenchid}/software-updates/{swupdateid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/{customerworkbenchid}/Broadcast/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InBQ Initiate a workstation broadcast

  **Documentation**

  This API path allows for the initiation of a workstation broadcast in the Customer Workbench service domain. This means that it enables a process where a message or communication can be sent out to customer side devices, such as access portals for a bank's products and services. The broadcast can be initiated through the specified channel and device associated with the customer workbench ID provided in the path. It is a way to reach out and communicate with customers through their chosen means of access.

  **Limitations**

  POST: The name of the path should be a noun representing the resource, so it could be something like '/customer-workbench-broadcasts'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/Broadcast/{broadcastid}/Request</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReBQ Retrieve details about a workstation broadcast

  **Documentation**

  This API path allows you to update information related to a specific broadcast request within the Customer Workbench domain. It is used to retrieve details about a workstation broadcast identified by the provided customer workbench ID and broadcast ID. This API is typically used to access a customer portal offered by a bank, enabling customers to interact with the bank's products and services using various channels and devices.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/CustomerWorkbench/{customerworkbenchid}/Broadcast/{broadcastid}/Request' could be simplified as '/customer-workbenches/{customerworkbenchid}/broadcasts/{broadcastid}/requests'. 

Here are some key points to consider while naming the path:

1. Use lowercase letters for consistency.
2. Use plural nouns for collections (e.g., broadcasts instead of broadcast).
3. Use hyphens to separate words within a segment

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/{customerworkbenchid}/Browsing/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InBQ Initiate a browsing session

  **Documentation**

  This API path creates a new resource to initiate a browsing session for a customer using their customer workbench ID. It allows customers to access the bank's products and services through various channels and devices by starting a browsing session on their customer side devices.

  **Limitations**

  POST: A RESTful approach would suggest naming this path as:

'/customerworkbenches/{customerworkbenchid}/browsing/initiate'

In this naming convention:
- Path segments are in all lowercase
- Resources are named in plural form ('customerworkbenches' instead of 'customerworkbench')
- Hyphens are avoided in favor of using all lowercase letters directly in one continuous string

This naming convention aligns with REST best practices for creating predictable and user-friendly URLs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/Browsing/{browsingid}/Execute</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ExBQ Execute tasks within a browsing session

  **Documentation**

  This API path allows you to update an existing resource related to a customer workbench and browsing session. It is used in the context of customer side devices such as a portal for accessing a bank's products and services. Specifically, this path is for executing tasks within a browsing session on the customer workbench using the provided browsing ID.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the given path could be:

```
/ customer-workbenches / {customerworkbenchid} / browse / {browsingid} / execute
``` 

This naming convention uses lowercase letters and hyphens to separate words in the path, which is a common practice in REST API design.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerWorkbench/{customerworkbenchid}/Browsing/{browsingid}/Retrieve</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReBQ Retrieve details about a browsing session

  **Documentation**

  This BIAN API path allows you to retrieve details about a browsing session for a specific customer workbench and browsing ID. It is designed for customer side devices, such as access portals to a bank's products and services. By using this API with a GET request, you can access information related to a customer's browsing session on the bank's platform.

  **Limitations**

  GET: A more suitable and RESTful name for this path following best practices would be: 

GET /customer-workbenches/{customer-workbench-id}/browsings/{browsing-id}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/{customerworkbenchid}/Contact/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InBQ Initiate a contact with the bank

  **Documentation**

  This BIAN API path allows a customer to initiate contact with the bank using their customer workbench ID. It enables customers to access the bank's products and services through various channels and devices by creating a new resource for initiating contact.

  **Limitations**

  POST: The name of the path should be:

'/customer-workbenches/{customerworkbenchid}/contacts/initiate'

Following REST best practices, all lowercase letters should be used, words should be separated by hyphens, and the path segments should be descriptive and follow a hierarchical structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/Contact/{contactid}/Execute</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ExBQ Execute an automated action within the contact (e.g. self serve)

  **Documentation**

  This API path allows you to update an existing resource related to the customer workbench and contact in the banking system. Specifically, it enables the execution of an automated action within a contact record, such as a self-service action initiated by the customer through their portal or device. This path is used to trigger specific actions within the contact details associated with a customer's interaction with the bank's products and services.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customers/{customerId}/contacts/{contactId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/Contact/{contactid}/Request</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device RqBQ Request manual intervention in a contact (e.g. request service)

  **Documentation**

  This API path allows you to update an existing request for manual intervention in a contact within the Customer Workbench service domain. For example, you can use this endpoint to request a specific service related to a customer's contact information.

  **Limitations**

  PUT: A possible name following REST best practices for this path could be: 

'/customer-workbenches/{customerworkbenchid}/contacts/{contactid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerWorkbench/{customerworkbenchid}/Contact/{contactid}/Retrieve</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReBQ Retrieve details about a contact

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific contact within the customer workbench domain. By providing the customer workbench ID and the contact ID as part of the URL, you can access details related to that particular contact. This API is typically used in customer-facing applications like online banking portals to retrieve contact information associated with a customer's account or profile.

  **Limitations**

  GET: A good name for the path '/CustomerWorkbench/{customerworkbenchid}/Contact/{contactid}/Retrieve' following REST best practices could be:

GET /customerWorkbenches/{customerWorkbenchId}/contacts/{contactId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerWorkbench/{customerworkbenchid}/ProductandServiceAccess/Initiate</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device InBQ Initiate product/service access within the contact

  **Documentation**

  This BIAN API path allows you to create a new resource for initiating access to products and services on a customer's device through a customer access portal provided by the bank. It is used to start the process of granting the customer access to various offerings available through the bank's channels and devices.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`/customer-workbenches/{customerWorkbenchId}/product-and-service-access/initiate`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/ProductandServiceAccess/{productandserviceaccessid}/Execute</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ExBQ Execute an automated action with the product/service access (e.g. self serve)

  **Documentation**

  This API path allows you to update an existing resource related to customer workbench and product/service access. It is specifically used for executing an automated action with the product or service access information for a customer. This action could involve self-serving tasks through the customer access portal provided by the bank.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
'/customer-workbenches/{customerworkbenchid}/product-and-service-access/{productandserviceaccessid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerWorkbench/{customerworkbenchid}/ProductandServiceAccess/{productandserviceaccessid}/Request</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device RqBQ Request manual intervention in a product/service access (e.g. request service)

  **Documentation**

  This API path allows you to update an existing resource related to a customer's access to a bank's products and services through the Customer Workbench. Specifically, it pertains to requesting manual intervention in a product or service access, such as requesting additional service or support. Customers can make these requests through their preferred channels and devices using the Customer Workbench capabilities.

  **Limitations**

  PUT: The name of the path should be `/customer-workbench/{customerworkbenchid}/product-and-service-access/{productandserviceaccessid}/request` in kebab case to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerWorkbench/{customerworkbenchid}/ProductandServiceAccess/{productandserviceaccessid}/Retrieve</span></summary>

  **Description**

  This service domain represents customer side devices. Most commonly providing a customer access portal to the banks products and services through any suitable channel and device ReBQ Retrieve details about product/service access

  **Documentation**

  This API path allows you to retrieve information about product or service access for a specific customer workbench and product/service access ID. It is part of a service domain that deals with customer side devices, typically providing customers access to a bank's products and services through various channels and devices. By making a GET request to this path with the required IDs, you can retrieve details about how the customer can access specific products or services through their customer workbench.

  **Limitations**

  GET: The appropriate name for the given path would be:

GET /customers/{customerid}/product-access/{accessid}

Following REST best practices, it is recommended to use plural nouns for resource names and to keep the path simple and easy to understand. Additionally, using shorter resource names helps maintain a clean and concise URL structure.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
