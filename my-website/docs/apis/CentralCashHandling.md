<h1 style='color:red;'>CentralCashHandling</h1>

**BIAN Documentation:** [CentralCashHandling v12](https://app.swaggerhub.com/apis/BIAN-3/CentralCashHandling/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/Capture</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CaCR Capture Central Cash Allocation activity or event related information

  **Documentation**

  This BIAN API path allows you to update and track information related to central cash handling activities. It helps in managing cash inventory, predicting cash demand, and distributing inventory among branch and ATM networks. The PUT method is used to update existing resources in the system, allowing you to capture details about central cash allocation activities or events.

  **Limitations**

  PUT: The RESTful path for capturing data related to the central cash handling resource with an identifier of {centralcashhandlingid} could be structured as follows:

```
/CentralCashHandling/{centralcashhandlingid}/Capture
```

This path follows RESTful best practices by using plural nouns for resources `CentralCashHandling`, `Capture` as an action on the resource, and `{centralcashhandlingid}` as a placeholder for a specific identifier.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/Control</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CoCR Control the processing of Central Cash Allocation

  **Documentation**

  This BIAN API path allows you to update an existing resource related to Central Cash Handling. Specifically, it is used to track cash inventory, project demand, allocate inventory across the branch/ATM network, and control the processing of Central Cash Allocation. By using this API, you can make changes to the Central Cash Handling system to ensure proper tracking and allocation of cash resources.

  **Limitations**

  PUT: The name of the path should be:

'/central-cash-handling/{centralcashhandlingid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/Exchange</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network EcCR Accept, verify, etc. aspects of Central Cash Allocation processing

  **Documentation**

  This API path allows you to update an existing resource related to Central Cash Handling. Specifically, it enables you to track cash inventory, project demand, and allocate inventory across a branch or ATM network. You can use this API to manage aspects such as accepting, verifying, and processing cash allocation centrally.

  **Limitations**

  PUT: The name of the path should be:

'/central-cash-handling/{centralcashhandlingid}/exchanges' 

According to REST best practices, the path should be in lowercase letter and the plural form of the resource name should be used.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CentralCashHandling/Initiate</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network InCR Instantiate a new Central Cash Allocation

  **Documentation**

  This API path allows users to create a new Central Cash Allocation within the Central Cash Handling system. This new allocation helps track cash inventory, forecast demand, and manage the distribution of cash across different branches and ATMs in the network.

  **Limitations**

  POST: If the path '/CentralCashHandling/Initiate' followed REST best practices, it should be named using nouns that represent resources rather than actions. A more appropriate name for this path could be '/cash-handling', which better reflects the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CentralCashHandling/{centralcashhandlingid}/Retrieve</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network ReCR Retrieve details about any aspect of Central Cash Allocation

  **Documentation**

  This API path (/CentralCashHandling/{centralcashhandlingid}/Retrieve) allows a user to retrieve specific details related to Central Cash Allocation. It enables users to track cash inventory levels, predict cash demand, and allocate cash resources efficiently across a network of branches and ATMs. By providing the central cash handling ID, the API fetches information about various aspects of cash allocation within the system.

  **Limitations**

  GET: The name for this path should be `/central-cash-handling/{centralcashhandlingid}` following REST best practices, which utilizes lowercase letters and hyphens to separate words in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/Update</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network UpCR Update details relating to Central Cash Allocation

  **Documentation**

  This BIAN API path allows you to update details related to Central Cash Allocation. It is used to track cash inventory, project demand, and allocate cash inventory across the branch/ATM network. By making a PUT request to this path with the appropriate data, you can modify existing information regarding cash allocation in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PUT /central-cash-handling/{centralcashhandlingid}
``` 

This name follows the convention of using HTTP method (`PUT`) to update a specific resource identified by `{centralcashhandlingid}` within the `central-cash-handling` collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/{projectionandallocationid}/Capture</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CaBQ Capture Projection and Allocation activity or event related information

  **Documentation**

  This API path allows you to update information related to capturing and tracking cash inventory, projecting demand, and allocating inventory across a network of branches and ATMs within the Central Cash Handling system. By using this API, you can input details about an activity or event that pertains to the projection and allocation of cash resources.

  **Limitations**

  PUT: In RESTful design, the path should represent a resource rather than an action. Following this principle, a suitable name for the path could be:

`/central-cash-handling/{centralcashhandlingid}/projection-and-allocation/{projectionandallocationid}/captures`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Capture</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CaBQ Capture Tracking and Allocation activity or event related information

  **Documentation**

  This BIAN API path allows you to update (PUT) information related to tracking cash inventory, projecting demand, and allocating inventory across a branch/ATM network. It specifically pertains to capturing tracking and allocation activity or event information for a specific Central Cash Handling operation and tracking ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/central-cash-handling/{centralcashhandlingid}/tracking-and-allocation/{trackingandallocationid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/{projectionandallocationid}/Control</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CoBQ Control the processing of Projection and Allocation

  **Documentation**

  This BIAN API path allows you to update and control the processing of cash inventory projection and allocation within a central cash handling system. With this path, you can track the amount of cash available, predict future cash demands, and distribute inventory efficiently across branches and ATMs. It provides functionalities to monitor and manage the projection and allocation of cash resources effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
```
/CentralCashHandling/{centralcashhandlingid}/ProjectionAndAllocation/{projectionandallocationid}/Control
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Control</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network CoBQ Control the processing of Tracking and Allocation

  **Documentation**

  This API path allows you to update an existing resource related to the Central Cash Handling system. Specifically, it is used to manage the tracking and allocation of cash inventory across the branch and ATM network. By using this path with the PUT method, you can control the processing of tracking and allocation activities within the Central Cash Handling system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Control' could be simplified to '/central-cash-handling/{centralcashhandlingid}/tracking-allocation/{trackingandallocationid}/control'. 

This naming convention uses lowercase letters, hyphens to separate words, and describes the resources in a clear and structured manner, which aligns with RESTful principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/{projectionandallocationid}/Exchange</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network EcBQ Accept, verify, etc. aspects of Projection and Allocation processing

  **Documentation**

  This API path allows you to update a specific aspect of the Central Cash Handling system relating to Projection and Allocation. You can modify the exchange details to track cash inventory, project demand, and allocate cash across the branch and ATM network. This updating process includes accepting, verifying, and other related actions to manage the projection and allocation of cash within the system.

  **Limitations**

  PUT: In following REST best practices, the name of the path should be:

`/central-cash-handling/{centralcashhandlingid}/projection-and-allocation/{projectionandallocationid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Exchange</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network EcBQ Accept, verify, etc. aspects of Tracking and Allocation processing

  **Documentation**

  This BIAN API path allows you to update or modify information related to tracking and allocating cash inventory in a central cash handling system. You can adjust the inventory levels, project cash demand, and allocate cash resources across branch and ATM networks. The API helps in managing and tracking the movement of cash and ensuring proper inventory balance for efficient cash handling operations.

  **Limitations**

  PUT: Based on REST best practices, a possible name for the path could be:

'/central-cash-handling/{centralcashhandlingid}/tracking-and-allocation/{trackingandallocationid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/Initiate</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network InBQ Instantiate a new Projection and Allocation

  **Documentation**

  This API path allows you to create a new Projection and Allocation within the Central Cash Handling system by providing a unique central cash handling ID. The Projection and Allocation feature helps in tracking cash inventory, predicting future demand, and effectively managing the distribution of cash resources among the branch and ATM network. By initiating a new Projection and Allocation, you can ensure proper management of cash flow and optimize resource allocation within the network.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be: 

```
/CentralCashHandling/{centralcashhandlingid}/ProjectionAndAllocation
```

This path should align with the resource naming conventions in REST, where the URI should represent a resource and the individual words are separated by slashes.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/Initiate</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network InBQ Instantiate a new Tracking and Allocation

  **Documentation**

  This API path `/CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/Initiate` allows you to create a new resource for tracking cash inventory, predicting demand, and distributing cash inventory across branches and ATMs. The purpose is to start a new process for monitoring and allocating cash within the branch and ATM network.

  **Limitations**

  POST: A possible naming for that path, following RESTful best practices, could be:

`/central-cash-handling/{centralcashhandlingid}/tracking-and-allocation/initiate`

In this naming convention:
- Path segments are represented in lowercase letters
- Words are separated by hyphens for better readability
- Resource identifiers are expressed as singular nouns, in this case 'central-cash-handling' and 'tracking-and-allocation'
- Actions are represented as verbs, such as 'initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/{projectionandallocationid}/Retrieve</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network ReBQ Retrieve details about any aspect of Projection and Allocation

  **Documentation**

  This API path allows you to retrieve details about specific projections and allocations of cash inventory within the Central Cash Handling system. It helps track the amount of cash available, predict future demand for cash, and efficiently distribute cash inventory across branch and ATM locations. By making a GET request to this API path with the relevant IDs, you can access detailed information about how cash is projected and allocated within the network.

  **Limitations**

  GET: The name of the path should be:

GET /central-cash-handling/{centralcashhandlingid}/projection-and-allocation/{projectionandallocationid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Retrieve</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network ReBQ Retrieve details about any aspect of Tracking and Allocation

  **Documentation**

  This API path allows you to access detailed information about tracking and allocation of cash inventory within the central cash handling system. By specifying the central cash handling ID and the tracking and allocation ID, you can retrieve specific data related to how cash is monitored, forecasted for demand, and distributed across branches and ATMs in the network. This information helps users analyze and manage cash inventory efficiently.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
GET /central-cash-handling/{centralcashhandlingid}/tracking-and-allocation/{trackingandallocationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/ProjectionandAllocation/{projectionandallocationid}/Update</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network UpBQ Update details relating to Projection and Allocation

  **Documentation**

  This API path allows you to update details related to the projection and allocation of cash inventory within the branch and ATM network. By providing the appropriate IDs for central cash handling and projection/allocation, you can make changes to the data associated with these aspects of cash management. The PUT method is used to update existing information, enabling you to keep track of cash levels, project cash demand, and efficiently allocate cash across the network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

PATCH /central-cash-handlings/{centralcashhandlingid}/projections-and-allocations/{projectionandallocationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CentralCashHandling/{centralcashhandlingid}/TrackingandAllocation/{trackingandallocationid}/Update</span></summary>

  **Description**

  Track cash inventory, project demand and allocate inventory across the branch/ATM network UpBQ Update details relating to Tracking and Allocation

  **Documentation**

  This API path allows you to update details related to tracking and allocation of cash inventory within the Central Cash Handling system. By specifying the Central Cash Handling ID and the Tracking and Allocation ID, you can make changes to the information regarding tracking cash inventory, projecting demand, and distributing inventory across the branch and ATM network. This PUT method helps you to modify existing data to accurately reflect the current status and allocation of cash resources.

  **Limitations**

  PUT: The name of the path following RESTful conventions would be:

'/central-cash-handlings/{centralcashhandlingid}/tracking-and-allocations/{trackingandallocationid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
