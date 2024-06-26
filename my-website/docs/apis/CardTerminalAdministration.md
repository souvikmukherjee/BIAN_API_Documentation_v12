<h1 style='color:red;'>CardTerminalAdministration</h1>

**BIAN Documentation:** [CardTerminalAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/CardTerminalAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalAdministration/Provide</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. PrCR Initial provision and registering of a point of sale (POS) device

  **Documentation**

  This API path (/CardTerminalAdministration/Provide) allows users to create a new resource for administering and managing Point of Sale (POS) devices within a network. Specifically, it enables the initial provisioning and registration of a POS device. Users can input relevant information about the POS device to set it up and include it in the network inventory.

  **Limitations**

  POST: Based on REST best practices, the path should ideally be named according to the resource or entity it represents. Considering the path '/CardTerminalAdministration/Provide', it could potentially be named '/card-terminals' or '/card-terminal-providers', depending on the specific context and functionality of the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalAdministration/{cardterminaladministrationid}/Update</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. UpCR Update details about the POS device

  **Documentation**

  This API path allows you to update details about a specific Point of Sale (POS) device within the POS Network administration system. It involves modifying information related to the inventory, characteristics, deployment, and status of the POS device identified by its unique ID. It provides the capability to make changes to the specific settings and data associated with a particular POS terminal.

  **Limitations**

  PUT: The name of the path should be `/card-terminals/{cardTerminalId}` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalAdministration/{cardterminaladministrationid}/Retrieve</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. ReCR Retrieve details about the POS device

  **Documentation**

  This API path allows you to retrieve information about a specific POS (Point of Sale) device within a card terminal administration system. It provides details about the inventory, characteristics, deployment, and current status of the POS device identified by a unique ID. Essentially, you can use this API to access specific information about a POS device in the network.

  **Limitations**

  GET: The name of the path should be:

/ card-terminals /{ card-terminal-id } / retrieve

In REST, it's recommended to use lowercase letters and hyphens for better readability. Also, it's good practice to use nouns for resource names and avoid using verbs in your URL paths.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalAdministration/{cardterminaladministrationid}/Allocation/Provide</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. PrBQ Provide/allocate the device to a merchant

  **Documentation**

  This API path allows a user to allocate or provide a card terminal device to a specific merchant within a POS network. This action involves creating a new resource in the system with the information related to the device allocation process. In simpler terms, it facilitates the process of assigning a card terminal to a specific merchant within the system.

  **Limitations**

  POST: The name of the path should be:

/cards/{cardterminaladministrationid}/allocation/provide

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalAdministration/{cardterminaladministrationid}/Allocation/{allocationid}/Update</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. UpBQ Update merchant allocation details

  **Documentation**

  This API path allows you to update the merchant allocation details for a specific card terminal administration within the Point of Sale (POS) Network. By making a PUT request to this path with the appropriate parameters, you can modify and update the allocation information related to a specific merchant on the POS device. This helps manage the inventory, terminal settings, deployment, and status of POS devices efficiently within the network.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/card-terminal-administrations/{card_terminal_administration_id}/allocations/{allocation_id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalAdministration/{cardterminaladministrationid}/Allocation/{allocationid}/Capture</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. CaBQ Capture details about the allocation (e.g. report out of service state)

  **Documentation**

  This BIAN API path allows you to update information related to the allocation of a specific card terminal within the POS network. You can capture details about the allocation, such as reporting when the terminal is out of service. This API is used for managing the inventory, characteristics, deployment, and status of POS devices within the network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/card-terminals/{card-terminal-id}/allocations/{allocation-id}/capture`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalAdministration/{cardterminaladministrationid}/Allocation/{allocationid}/Grant</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. GrBQ Obtain usage authorization grant for the device (may restrict usage)

  **Documentation**

  This API path allows you to update an existing resource related to managing card terminals within a Point of Sale (POS) network. Specifically, it focuses on granting usage authorization for a card terminal by obtaining a usage grant for the device, which may include restrictions on its usage. This API is part of the Card Terminal Administration service domain, which handles tasks such as managing inventory, terminal characteristics, deployment, and status of POS devices within the network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
`/card-terminals/{card_terminal_id}/allocations/{allocation_id}/grant`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalAdministration/{cardterminaladministrationid}/Allocation/{allocationid}/Retrieve</span></summary>

  **Description**

  This service domain administers the POS Network including the inventory, terminal characteristics, deployment and status of the POS devices. ReBQ Retrieve details about the POS device allocation

  **Documentation**

  This API path allows you to retrieve information about a specific POS device allocation within the Card Terminal Administration service domain. By providing the `cardterminaladministrationid` and `allocationid` in the path, you can request details such as the inventory, characteristics, deployment status, and overall status of the POS device. This API helps in managing and monitoring the allocation of POS devices within a network.

  **Limitations**

  GET: The name of the path following REST best practices could be:
'/card-terminal-administrations/{card_terminal_administration_id}/allocations/{allocation_id}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
