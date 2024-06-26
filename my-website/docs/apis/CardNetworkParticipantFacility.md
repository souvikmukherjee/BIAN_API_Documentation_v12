<h1 style='color:red;'>CardNetworkParticipantFacility</h1>

**BIAN Documentation:** [CardNetworkParticipantFacility v12](https://app.swaggerhub.com/apis/BIAN-3/CardNetworkParticipantFacility/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardNetworkParticipantFacility/Initiate</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. InCR Initiate a new network participant facility

  **Documentation**

  This API path allows the initiation of a new network participant facility within the Card Network. It handles the process of including new entities (Acquirers and Issuers) in the network, setting their terms and conditions, and determining their status within the network. By using this API, you can create a new resource for a network participant facility and manage all the related activities involved in including new partners in the Card Network.

  **Limitations**

  POST: Following REST best practices, the name of the path '/CardNetworkParticipantFacility/Initiate' should be redesigned to use nouns instead of verbs. 

A more appropriate name for this path could be something like '/card-network-participant-facilities/initiations'. This appropriately uses nouns to represent the resources in a more meaningful and consistent way according to REST principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. UpCR Update details for an active network participant facility

  **Documentation**

  This API path allows you to update the details of an existing network participant facility within the Card Network. You can use this endpoint to make changes to the terms and conditions, status, or any other relevant information associated with a specific Acquirer or Issuer that is part of the Card Network.

  **Limitations**

  PUT: The path '/CardNetworkParticipantFacilities/{cardnetworkparticipantfacilityid}' would likely be more in line with RESTful best practices. This path represents a specific resource (CardNetworkParticipantFacility) and allows for retrieval, updating, or deleting of a specific instance based on the provided ID (cardnetworkparticipantfacilityid).

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. ReCR Retrieve details about a network participant facility

  **Documentation**

  This API path allows you to retrieve details about a specific Card Network Participant Facility by providing its unique identifier (cardnetworkparticipantfacilityid). It is part of a service domain that manages the processes involved in adding new Acquirers and Issuers to the Card Network, including their terms and conditions and current status. By utilizing this API, you can access information about a particular participant facility within the network.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:  
'/card-network-participant-facilities/{cardNetworkParticipantFacilityId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantAccount/{participantaccountid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. UpBQ Update an account posting made to the network participant

  **Documentation**

  This BIAN API path allows you to update an existing account posting made to a specific participant account within the Card Network Participant Facility. It is used for making changes to accounts associated with Acquirers and Issuers in the Card Network, such as updating terms, conditions, and status information. Essentially, it enables you to modify account details for participants in the card network system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CardNetworkParticipantFacilities/{cardnetworkparticipantfacilityid}/ParticipantAccounts/{participantaccountid}
```

This naming convention pluralizes the resource names (CardNetworkParticipantFacilities and ParticipantAccounts) to represent collections of resources, and uses hyphens to separate words for better readability. Additionally, the 'Update' action should not be included in the path as RESTful URLs should focus on the resource itself rather than the

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantAccount/{participantaccountid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. ExBQ Execute a posting against the participant's account

  **Documentation**

  This API path allows you to update an existing resource related to the Card Network Participant Facility. Specifically, the path allows you to execute a posting against a participant's account within the facility. This could involve processing transactions, updating account details, or performing other actions related to participants in the Card Network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be: 

'/card-network-participant-facilities/{cardnetworkparticipantfacilityid}/participant-accounts/{participantaccountid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantAccount/{participantaccountid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. ReBQ Retrieve details about an account posting or account

  **Documentation**

  This API path allows you to retrieve details about a specific participant account within the Card Network Participant Facility. It provides information about new Acquirers and Issuers included in the Card Network, their terms and conditions, as well as their current status. You can use this endpoint to access specific information related to account postings or account details within the Card Network Participant Facility.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/CardNetworkParticipantFacilities/{cardnetworkparticipantfacilityid}/ParticipantAccounts/{participantaccountid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantService/{participantserviceid}/Update</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. UpBQ Update details about a participant service request

  **Documentation**

  This API path allows you to update the details of a participant service request within the Card Network Participant Facility. Specifically, it pertains to updating information related to new Acquirers and Issuers being included in the card network, along with their terms, conditions, and status. By sending a PUT request to this endpoint with the appropriate parameters, you can modify and manage the details of a specific participant service request.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/card-network-participant-facilities/{cardNetworkParticipantFacilityId}/participant-services/{participantServiceId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantService/{participantserviceid}/Execute</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. ExBQ Execute an automated participant service request (e.g. merchant alert)

  **Documentation**

  This API path allows you to update an existing participant service request within the Card Network Participant Facility. It facilitates activities related to adding new Acquirers and Issuers to the Card Network, managing their terms and conditions, as well as tracking their status. This specific PUT method is used to trigger the execution of automated participant service requests, such as sending out merchant alerts.

  **Limitations**

  PUT: A possible name for the path could be something like: '/card-network-participant-facilities/{cardnetworkparticipantfacilityid}/participant-services/{participantserviceid}/execute'. This path follows REST best practices by using lowercase letters, separating words with hyphens, and clearly indicating the hierarchy of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantService/{participantserviceid}/Request</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. RqBQ Request manual intervention with a service request (e.g. arbitration)

  **Documentation**

  This BIAN API path allows updating an existing resource related to the Card Network Participant Facility. It specifically pertains to managing the activities involved in adding new Acquirers and Issuers to the card network, along with defining their terms, conditions, and status. It also includes a capability to request manual intervention when needed, such as for arbitration or other service requests.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CardNetworkParticipantFacilities/{cardnetworkparticipantfacilityid}/ParticipantServices/{participantserviceid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardNetworkParticipantFacility/{cardnetworkparticipantfacilityid}/ParticipantService/{participantserviceid}/Retrieve</span></summary>

  **Description**

  This service domain orchestrates the activities related to the inclusion of new Acquirers and Issuers in the Card Network, their terms and conditions and their status. ReBQ Retrieve details about participant service requests

  **Documentation**

  This API path allows you to retrieve details about participant service requests within the Card Network Participant Facility service domain. Specifically, it enables you to access information related to the inclusion of new Acquirers and Issuers in the Card Network. You can retrieve details such as terms and conditions, as well as the status of these participants. This API provides a way to gather information about the service requests made within the Card Network Participant Facility.

  **Limitations**

  GET: Based on RESTful best practices, the path should be named as follows:

'/card-network-participant-facilities/{cardnetworkparticipantfacilityid}/participant-services/{participantserviceid}/retrieve'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
