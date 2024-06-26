<h1 style='color:red;'>ATMNetworkOperations</h1>

**BIAN Documentation:** [ATMNetworkOperations v12](https://app.swaggerhub.com/apis/BIAN-3/ATMNetworkOperations/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/Control</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements CoCR Control the processing of ATM Network Operating Session

  **Documentation**

  This API path is used to update and control the automated operation of the ATM network and related devices. It allows for managing tasks such as monitoring the movement of physical cash and documents within the ATM network. By sending a PUT request to this path with the appropriate data, users can modify and control the processing of the ATM Network Operating Session.

  **Limitations**

  PUT: The name of the path should be:

'/ATMNetworkOperations/{atmnetworkoperationsid}/control'

Ensure the path uses lowercase letters for consistency and follows RESTful conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/Exchange</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements EcCR Accept, verify, etc. aspects of ATM Network Operating Session processing

  **Documentation**

  This API path allows you to update an existing ATM Network Operations resource by specifying the ID of the operation you wish to modify. It deals with handling various automated tasks within the ATM network, such as tracing physical cash and document movements. Additionally, it involves accepting, verifying, and managing different aspects of the ATM Network Operating Session processing.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/ATMNetworkOperations/{atmnetworkoperationsid}/Exchange' can be optimized to better reflect resource naming conventions. 

A more clear and concise name could be '/atm-network-operations/{atmnetworkoperationsid}/exchange'. This naming incorporates lowercase letters, dashes to separate words, and utilizes plural nouns for consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/Execute</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ExCR Execute an available automated action for ATM Network Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to ATM Network Operations by executing an available automated action for an ATM Network Operating Session. This action may involve handling various operations within the ATM network, such as tracing the movements of physical cash and documents.

  **Limitations**

  PUT: The name of the path should ideally be `/atm-network-operations/{atm-network-operations-id}/execute`. This follows REST best practices by using lowercase letters, hyphens instead of underscores, and keeping the resource name in its plural form.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ATMNetworkOperations/Initiate</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements InCR Instantiate a new ATM Network Operating Session

  **Documentation**

  This API path allows you to initiate a new session for operating the ATM network. It handles the automated tasks involved in operating ATMs and linked devices, such as tracking the physical movements of cash and documents within the network. By making a POST request to this path, you can create a new resource that starts a session for the operation of the ATM network.

  **Limitations**

  POST: In adherence to REST best practices, the name of the path '/ATMNetworkOperations/Initiate' could be renamed to '/atm-network-operations/initiate' for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReCR Retrieve details about any aspect of ATM Network Operating Session

  **Documentation**

  This API path allows you to retrieve details about any aspect of an ATM network operating session. It is designed to provide information related to the automated operation of the ATM network and its connected devices, such as tracking the movement of physical cash and documents within the network. By using this API, you can access specific information about the operations and activities happening within an ATM network session.

  **Limitations**

  GET: In order to follow REST best practices, the path should be named in a clear and semantic way that reflects the intended action of retrieving data associated with a specific ATM Network Operation. 

A suggested name for the path could be:

GET /atm-network-operations/{atmnetworkoperationsid}

This path structure clearly indicates that you are performing a GET request to retrieve data related to a specific ATM Network Operation identified by the {atmnetworkoperationsid} parameter.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/Request</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements RqCR Request manual intervention or a decision with respect to ATM Network Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to the automated operation of the ATM network and its connected devices. It includes functionalities like tracing physical cash and document movements within the ATM network. Additionally, it enables you to request manual intervention or make decisions regarding the operation of the ATM network session.

  **Limitations**

  PUT: The name for the path '/ATMNetworkOperations/{atmnetworkoperationsid}/Request' following REST best practices could be something more specific and clear for the action being performed. For example, it could be named '/ATMNetworkOperations/{atmnetworkoperationsid}/UpdateRequest' to indicate that the action is updating a request related to a specific ATM network operation ID. This name provides clarity and describes the action being taken on the resource more explicitly.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/Update</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements UpCR Update details relating to ATM Network Operating Session

  **Documentation**

  This API path allows you to update details related to an existing ATM Network Operating Session. This means you can make changes to information regarding the automated operation of the ATM network and associated devices, as well as keep track of physical cash and document movements within the network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like: 

'/atm-network-operations/{atm-network-operations-id}' 

This path is more readable and follows the convention of using hyphens to separate words in the path. The 'Update' operation would be represented by using the appropriate HTTP method such as PUT or PATCH on this resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperation/{networkoperationid}/Control</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements CoBQ Control the processing of Network Operation

  **Documentation**

  This BIAN API path allows you to update an existing resource related to controlling the processing of the ATM network operation. It involves managing the automated operations of the ATM network and its connected devices, such as tracking the movements of physical cash and documents. By accessing this path with a PUT request, you can modify and manage the control of network operations in the ATM system.

  **Limitations**

  PUT: A suitable name for the path following REST best practices could be:
'/ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperations/{networkoperationid}/Controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/CashDistribution/{cashdistributionid}/Exchange</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements EcBQ Accept, verify, etc. aspects of Cash Distribution processing

  **Documentation**

  This API path allows you to update an existing cash exchange transaction within the Automated Teller Machine (ATM) network operations. Specifically, it deals with the process of handling and monitoring the movement of physical cash and documents within the system. You can use this API to update and manage various aspects of cash distribution processing, such as accepting, verifying, and processing cash exchanges.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be: 

'/ATMNetworkOperations/{atmnetworkoperationsid}/CashDistribution/{cashdistributionid}/ExchangeTransaction'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/DeviceTracking/{devicetrackingid}/Exchange</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements EcBQ Accept, verify, etc. aspects of Device Tracking processing

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the automated operation of the ATM network and its linked devices. It specifically focuses on tracing the physical movements of cash and documents within the network. This operation involves accepting, verifying, and processing various aspects related to device tracking within the ATM network.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for this path would be:

`/atm-network-operations/{atmnetworkoperationsid}/device-tracking/{devicetrackingid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/{financialdocumenthandlingid}/Exchange</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements EcBQ Accept, verify, etc. aspects of Financial Document Handling processing

  **Documentation**

  This API path allows you to update information related to the financial document handling within the ATM network operations. It involves processing aspects like accepting, verifying, and other activities associated with handling financial documents in the ATM network. The API helps in managing the automated operations of the ATM network and its connected devices, including tracing the movements of physical cash and documents.

  **Limitations**

  PUT: A possible RESTful naming convention for this path could be:

'/atm-network-operations/{atm-network-operations-id}/financial-document-handling/{financial-document-handling-id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Exchange</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements EcBQ Accept, verify, etc. aspects of Financial Transaction Capture processing

  **Documentation**

  This API path allows you to update specific details related to the financial transaction capture within the ATM network operations system. It pertains to managing the automated aspects of the ATM network, including tracking the movement of physical cash and documents. By using this API, you can handle tasks such as accepting, verifying, and processing financial transactions within the ATM network.

  **Limitations**

  PUT: The name of the path should be as follows according to REST best practices:

'/atm-network-operations/{atmnetworkoperationsid}/financial-transaction-capture/{financialtransactioncaptureid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/DeviceTracking/{devicetrackingid}/Execute</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ExBQ Execute an available automated action for Device Tracking

  **Documentation**

  This BIAN API path allows you to update an existing resource related to device tracking within the ATM network operations. Specifically, it enables the execution of an available automated action for device tracking. This action could involve tasks such as monitoring the physical movements of cash and documents within the ATM network and linked devices.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/atm-network-operations/{atmnetworkoperationsid}/device-tracking/{devicetrackingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/{financialdocumenthandlingid}/Execute</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ExBQ Execute an available automated action for Financial Document Handling

  **Documentation**

  This API path allows you to perform an available automated action related to financial document handling within the ATM network operations. By sending a PUT request to this endpoint, you can execute a specific action that is associated with handling financial documents within a particular ATM network operations context. This action could involve tasks such as processing financial documents, updating records, or managing the movement of physical cash or documents within the ATM network system.

  **Limitations**

  PUT: The name of the path should be:

'/atm-network-operations/{atmnetworkoperationsid}/financial-document-handling/{financialdocumenthandlingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Execute</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ExBQ Execute an available automated action for Financial Transaction Capture

  **Documentation**

  This BIAN API path allows you to execute an available automated action for Financial Transaction Capture within the ATM network operations. By making a PUT request to this endpoint with the specified IDs for ATM network operations and financial transaction capture, you can trigger the system to carry out the necessary actions for capturing financial transactions. This API is part of managing the operations of the ATM network, which includes monitoring cash and document movements within the network.

  **Limitations**

  PUT: According to REST best practices, the name of the path should be as follows:

'/atm-network-operations/{atm-network-operations-id}/financial-transaction-capture/{financial-transaction-capture-id}/execute' 

Make sure to separate words with hyphens and use lowercase letters to improve readability and maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/Initiate</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements InBQ Instantiate a new Financial Document Handling

  **Documentation**

  This API path allows you to create a new financial document handling process within the ATM network operations. It enables the initiation of automated operations related to managing physical cash and document movements within the ATM network and connected devices.

  **Limitations**

  POST: Based on REST best practices, a more appropriate name for the path '/ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/Initiate' could be:

'/atm-network-operations/{atmnetworkoperationsid}/financial-documents/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/Initiate</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements InBQ Instantiate a new Financial Transaction Capture

  **Documentation**

  This API endpoint allows you to create a new Financial Transaction Capture within the ATM network operations system. It is used to initiate the process of capturing financial transactions such as cash withdrawals or deposits made at an ATM. This functionality is designed to handle the automated operation of the ATM network and its related devices, ensuring the accurate tracking of physical cash and document movements during transactions.

  **Limitations**

  POST: A suitable RESTful name for the given path could be '/atm-network-operations/{atm-network-operations-id}/financial-transactions/initiate'. This name follows the convention of using lowercase letters, hyphens to separate words, and resource names in plural form.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperation/Initiate</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements InBQ Instantiate a new Network Operation

  **Documentation**

  This API path allows you to create a new Network Operation within the context of ATM Network Operations by initiating the process. The Network Operation involves handling the automated operations of the ATM network and its connected devices, such as tracing the movements of physical cash and documents. In simpler terms, this API call kicks off a new operation related to managing an ATM network's functionalities and monitoring cash and document flow.

  **Limitations**

  POST: The name of the path should be:

```
/ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperations/{networkoperationid}/Initiate
```

This path follows REST best practices by using plural nouns for resource names and including specific resource identifiers in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/CashDistribution/{cashdistributionid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReBQ Retrieve details about any aspect of Cash Distribution

  **Documentation**

  This API path allows you to retrieve details about Cash Distribution within the ATM Network Operations system. It helps in tracking the movement of physical cash and related documents. By using a specific ATM network operations ID and cash distribution ID, you can retrieve information about various aspects of cash distribution processes.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/atm-network-operations/{atm-network-operations-id}/cash-distribution/{cash-distribution-id}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/DeviceTracking/{devicetrackingid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReBQ Retrieve details about any aspect of Device Tracking

  **Documentation**

  This API path allows you to retrieve specific details about Device Tracking within the context of ATM Network Operations. By providing the ATM Network Operations ID and Device Tracking ID, you can access information about tracking the physical movement of cash and documents within the ATM network and its connected devices. It helps in monitoring and managing the location and status of various devices involved in the ATM network operations to ensure smooth functioning.

  **Limitations**

  GET: The name of the path should be:

`/atm-network-operations/{atm-network-operations-id}/device-tracking/{device-tracking-id}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/{financialdocumenthandlingid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReBQ Retrieve details about any aspect of Financial Document Handling

  **Documentation**

  This BIAN API path allows you to retrieve details about the financial document handling process within the ATM network operations. By specifying the IDs for ATM network operations and financial document handling, you can request information about how financial documents like cash and other important papers are processed and traced within the ATM network and its connected devices.

  **Limitations**

  GET: A possible RESTful name for this path could be:

GET '/atm-network-operations/{atmnetworkoperationsid}/financial-document-handling/{financialdocumenthandlingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReBQ Retrieve details about any aspect of Financial Transaction Capture

  **Documentation**

  This API path allows you to retrieve specific details about a financial transaction capture within the context of ATM network operations. It is related to tracking the movement of physical cash and documents in an automated manner. By using this API, you can obtain information about a particular financial transaction capture process within the designated ATM network operations.

  **Limitations**

  GET: The name of the path could be:

'/ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperation/{networkoperationid}/Retrieve</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements ReBQ Retrieve details about any aspect of Network Operation

  **Documentation**

  This API path allows you to retrieve details related to the automated operation of an ATM network and its connected devices. You can access information about the specific network operation by providing the ATM network operations ID and the network operation ID as parameters. This could include details about how physical cash and document movements are tracked within the network.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/atm-network-operations/{atm-network-operations-id}/network-operation/{network-operation-id}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/CashDistribution/{cashdistributionid}/Request</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements RqBQ Request manual intervention or a decision with respect to Cash Distribution

  **Documentation**

  This API path allows you to update an existing request for manual intervention or a decision related to cash distribution within the ATM network operations. It is used to manage the automated operations of the ATM network and its linked devices, allowing for tracing of physical cash and document movements, and enabling requests for human intervention in cash distribution processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/atm-network-operations/{atmnetworkoperationsid}/cash-distribution/{cashdistributionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/DeviceTracking/{devicetrackingid}/Update</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements UpBQ Update details relating to Device Tracking

  **Documentation**

  This API path allows you to update details related to device tracking within the ATM network operations. It is specifically used to modify information about tracking devices that are used to monitor the physical movement of cash and documents within the ATM network. This update functionality enables you to keep the tracking information accurate and up-to-date for efficient operation of the ATM network.

  **Limitations**

  PUT: Following REST best practices, a suitable name for the path would be:

'/atm-network-operations/{atm_network_operations_id}/device-tracking/{device_tracking_id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialDocumentHandling/{financialdocumenthandlingid}/Update</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements UpBQ Update details relating to Financial Document Handling

  **Documentation**

  This BIAN API path allows you to update details related to financial document handling within the context of the automated operation of the ATM network and linked devices. The path specifies the unique identifiers for both the ATM network operations and the financial document handling, and the method used is PUT, which is used to update an existing resource. Essentially, this API enables you to make changes to the information and settings regarding how financial documents are handled in the ATM network operations system.

  **Limitations**

  PUT: The name of the path could be `/atm-network-operations/{atmnetworkoperationsid}/financial-document-handling/{financialdocumenthandlingid}`. REST best practices suggest using all lowercase letters, separating words with hyphens, and avoiding verbs in the URL path. The specific update operation can be implied through the use of HTTP methods such as PUT or PATCH when sending a request to this resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}/Update</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements UpBQ Update details relating to Financial Transaction Capture

  **Documentation**

  This BIAN API path allows you to update specific details related to financial transaction capture within the automated operation of the ATM network. This includes tracing physical cash and document movements associated with the financial transactions. By making a PUT request to this path with the corresponding IDs, you can modify and update the information regarding financial transaction capture for a particular ATM network operation.

  **Limitations**

  PUT: The name of the path should be: 

'/ATMNetworkOperations/{atmnetworkoperationsid}/FinancialTransactionCapture/{financialtransactioncaptureid}' 

to conform to REST best practices, and the HTTP method used for updating should be included in the request, typically through a PUT or PATCH request method.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ATMNetworkOperations/{atmnetworkoperationsid}/NetworkOperation/{networkoperationid}/Update</span></summary>

  **Description**

  Handling the automated operation of the ATM network and linked devices, including tracing physical cash and document movements UpBQ Update details relating to Network Operation

  **Documentation**

  This API path allows you to update specific details related to the network operation of an ATM. It pertains to monitoring and managing the functioning of the ATM network, which includes tasks such as tracking the movement of physical cash and documents within the network. By using this API, you can modify the information associated with a particular network operation within the ATM system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: '/atm-network-operations/{atmnetworkoperationsid}/network-operation/{networkoperationid}/update'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
