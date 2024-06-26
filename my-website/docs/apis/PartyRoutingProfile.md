<h1 style='color:red;'>PartyRoutingProfile</h1>

**BIAN Documentation:** [PartyRoutingProfile v12](https://app.swaggerhub.com/apis/BIAN-3/PartyRoutingProfile/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PartyRoutingProfile/Initiate</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) InCR Initiate profile state monitoring for a party

  **Documentation**

  This API path creates a new resource to initiate profile state monitoring for a customer within the Party Routing Profile service domain. It sets up a small profile with key indicators like account status, customer ratings, and alerts for possible fraud activity. This information is used during customer interactions to help with routing, servicing, and decision-making related to product and service fulfillment.

  **Limitations**

  POST: The name of the path should be: `/party-routing-profiles/initiate` 

According to REST best practices:
- Use lowercase letters
- Separate words with hyphens (-) rather than underscores (_)
- Use plural nouns for collections of resources and singular nouns for specific resources

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Update</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) UpCR Update monitoring for a party

  **Documentation**

  This API path allows for updating the profile of key indicators for a customer used for routing, servicing, and decision-making during customer interactions. These indicators can include status (e.g., account in arrears), ratings (e.g., high value customer), and alerts (e.g., possible fraud activity). By updating this information, businesses can ensure efficient customer routing, service delivery, and product fulfillment based on the most up-to-date customer details.

  **Limitations**

  PUT: If the path '/PartyRoutingProfile/{partyroutingprofileid}/Update' followed REST best practices, it could be named simply as PUT /PartyRoutingProfile/{partyroutingprofileid}, where PUT is the HTTP method used to update a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Execute</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) ExCR Execute an automated action for a monitored party (e.g. refresh)

  **Documentation**

  This API path allows you to update an existing Party Routing Profile by executing an automated action for a monitored party. This action could involve refreshing the profile with updated information or making necessary changes based on the indicators such as account status, customer ratings, or alerts like possible fraud activity. The aim is to ensure that the profile accurately reflects the current state of the customer and helps in making informed decisions related to routing, servicing, and product/service fulfillment for that customer.

  **Limitations**

  PUT: The name of the path should be '/party-routing-profiles/{partyRoutingProfileId}/execute'. 

- Use lowercase letters for path segments.
- Use plural nouns for collection paths.
- Use hyphens to separate words in a path segment.
- Avoid using verbs in path segments, as they should represent resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Request</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) RqCR Request manual intervention for a monitored party (e.g. review settings)

  **Documentation**

  This API path allows you to update an existing party routing profile by sending a request for manual intervention. The party routing profile contains important information about a customer, such as their account status, customer ratings, and any alerts like possible fraud activity. By requesting manual intervention, you can ask for a review of the settings associated with this profile, which can help in making decisions related to routing, servicing, or product/service fulfillment for that customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PartyRoutingProfiles/{partyroutingprofileid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyRoutingProfile/{partyroutingprofileid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) ReCR Retrieve details about the monitored party state

  **Documentation**

  This BIAN API path allows you to retrieve details about a customer's profile that is used for routing, servicing, and decision-making purposes during customer interactions. It provides information such as the customer's status (e.g., account in arrears), ratings (e.g., high value customer status), and alerts (e.g., potential fraud activity detected). By accessing this endpoint, you can gather essential indicators about the customer to help guide how their interactions are handled.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/PartyRoutingProfiles/{partyroutingprofileid}
```

In RESTful API design, the URL should represent a resource (in this case, a PartyRoutingProfile) and its unique identifier (partyroutingprofileid). The method used to retrieve the resource (such as GET) would typically be specified in the HTTP request method and not in the URL itself.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Status/{statusid}/Update</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) UpBQ Update status measures for a monitored party

  **Documentation**

  This API path allows you to update the status measures for a specific customer profile within the Party Routing Profile service domain. The status measures could include information about the customer's account status (e.g., in arrears), customer ratings (e.g., high value customer), and any alerts (e.g., possible fraud activity detected). By updating these key indicators, the system can make informed decisions on how to route, serve, and fulfill products or services for that customer during interactions.

  **Limitations**

  PUT: A possible RESTful name for the path could be:

`PUT /party-routing-profiles/{partyroutingprofileid}/statuses/{statusid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Status/{statusid}/Capture</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) CaBQ Capture status measures for a monitored party

  **Documentation**

  This API path allows you to update the status measures for a monitored party in a Party Routing Profile. It enables you to capture important indicators such as account status (like being in arrears), customer ratings (such as high value), and alerts (like possible fraud activity). By updating these key indicators, you can better facilitate routing, servicing, and decision-making for interactions with the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be something like:

`/party-routing-profiles/{partyroutingprofileid}/statuses/{statusid}/capture`

In this format, each segment of the path is in lowercase and separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyRoutingProfile/{partyroutingprofileid}/Status/{statusid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) ReBQ Retrieve details about status measures for a party

  **Documentation**

  This API path retrieves details about the status measures for a party within the Party Routing Profile service domain. It allows users to access information about key indicators related to a customer, such as account status (e.g., in arrears), customer ratings (e.g., high value customer), and alerts (e.g., possible fraud activity detected). These details are used during customer interactions to help with routing, servicing, and decision-making related to product or service fulfillment.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /party-routing-profiles/{partyroutingprofileid}/statuses/{statusid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Rating/{ratingid}/Update</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) UpBQ Update rating measures for a monitored party

  **Documentation**

  This API path allows you to update the rating measures associated with a monitored party in the Party Routing Profile system. By making a PUT request to this endpoint with the appropriate party routing profile ID and rating ID, you can modify the rating details for that particular party. The rating measures can include information like the customer's status (e.g., account in arrears), their rating (e.g., high value customer), or any alerts (e.g., possible fraud activity detected). This update can help in making decisions related to routing, servicing, and fulfilling products or services for the customer.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PATCH /party-routing-profiles/{partyroutingprofileid}/ratings/{ratingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Rating/{ratingid}/Capture</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) CaBQ Capture rating measures for a monitored party

  **Documentation**

  This API path allows you to update the Capture rating measures for a monitored party within the Party Routing Profile service domain. It is used to manage key indicators for a customer that help with routing, servicing, and decision-making related to product and service fulfillment. This can include updating status (e.g., account in arrears), ratings (e.g., high value customer), and alerts (e.g., possible fraud activity).

  **Limitations**

  PUT: The name of the path should be:

`/party-routing-profiles/{partyRoutingProfileId}/ratings/{ratingId}/capture`

Following the REST best practices, the path should be in lower case and hyphens should be used to separate words for better readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyRoutingProfile/{partyroutingprofileid}/Rating/{ratingid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) ReBQ Retrieve details about rating measures for a party

  **Documentation**

  This API path allows you to retrieve details about rating measures for a specific party routing profile identified by the 'partyroutingprofileid' and a particular rating identified by the 'ratingid'. This information is important for customer interactions as it provides key indicators such as status (e.g., account arrears), ratings (e.g., high-value customer), and alerts (e.g., possible fraud activity detected). This data helps in making decisions related to routing, servicing, and fulfilling products or services for the customer.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/PartyRoutingProfiles/{partyroutingprofileid}/Rating/{ratingid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Alert/{alertid}/Update</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) UpBQ Update alerts for a monitored party

  **Documentation**

  This API path allows you to update alerts for a monitored party within the Party Routing Profile service domain. This means you can modify the information related to key indicators for a customer that is used to facilitate routing, servicing, and decision-making during customer interactions. The alerts could include important statuses, ratings, and notifications like possible fraud activities. By using this PUT method, you can make changes to existing alert information associated with a specific party's routing profile.

  **Limitations**

  PUT: The name of the path should be:
/PartyRoutingProfiles/{partyroutingprofileid}/Alerts/{alertid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyRoutingProfile/{partyroutingprofileid}/Alert/{alertid}/Capture</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) CaBQ Capture alerts for a monitored party

  **Documentation**

  This API path allows you to update an existing alert for a specific party routing profile. The party routing profile contains important information about a customer, such as account status, customer ratings, and any alerts related to potential fraud activities. By capturing alerts for a monitored party, this API helps in making decisions related to routing, servicing, and fulfilling products or services for that customer.

  **Limitations**

  PUT: The recommended RESTful naming convention for the given path would be:

'/party-routing-profiles/{partyroutingprofileid}/alerts/{alertid}/captures'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyRoutingProfile/{partyroutingprofileid}/Alert/{alertid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a small profile of key indicators for a customer that is referenced during customer interactions to facilitate routing, servicing and product/service fulfillment decisions. This can include status (such as account in arrears), ratings (such as high value customer) and alerts (such possible fraud activity detected) ReBQ Retrieve details about alerts for a party

  **Documentation**

  This API path allows you to retrieve details about alerts related to a specific party routing profile. The party routing profile contains important information about a customer that is used for making decisions during customer interactions, such as routing, servicing, and product or service fulfillment. The alerts can include information about potential fraud activities or other important alerts that need attention. By using this API path, you can access specific alert details for a party based on their routing profile ID and alert ID.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be more concise and focus on the resource being retrieved. A more suitable name for the path '/PartyRoutingProfile/{partyroutingprofileid}/Alert/{alertid}/Retrieve' could be:

GET /party-routing-profiles/{partyroutingprofileid}/alerts/{alertid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
