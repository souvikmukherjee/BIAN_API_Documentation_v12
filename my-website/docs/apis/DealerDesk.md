<h1 style='color:red;'>DealerDesk</h1>

**BIAN Documentation:** [DealerDesk v12](https://app.swaggerhub.com/apis/BIAN-3/DealerDesk/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/Control</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Control Dealer Desk Operating Session

  **Documentation**

  This API path allows users to control and update a specific Dealer Desk operating session identified by the provided dealer desk ID. It represents a bank's dealing desk facility that supports trading activities in various market instruments, including agency and principal trading. Users can make changes to the operating session, such as modifying trading lines, managing sales activities, and overseeing market risk trading functions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be: 

'/dealer-desks/{dealerdeskid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/Exchange</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Exchange Dealer Desk Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to a specific Dealer Desk by providing the unique identifier (dealerdeskid). It is specifically designed for managing the operation session of the exchange dealing desk within a banking institution. The update functionality allows for making changes to the trading activities, market instruments, sales, and risk management functions supported by the dealing desk.

  **Limitations**

  PUT: The name of the path should be: `/dealer-desks/{dealerdeskid}/exchanges` 

It is recommended to use lowercase letters, hyphens instead of underscores, and plural nouns to represent resources in RESTful API paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/Execute</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Execute Dealer Desk Operating Session

  **Documentation**

  This API path allows you to update and execute a dealer workbench session for a specific dealer desk within a bank's dealing desk facility. It supports various trading activities such as agency and principal trading in different market instruments. Additionally, it enables functions related to sales and market risk trading desks. By providing the dealer desk ID, you can trigger an operating session on the dealer workbench through this API call.

  **Limitations**

  PUT: The name of the path should be:

/DealerDesks/{dealerdeskid}/execute

In REST best practices, it is recommended to use lowercase letters for the path and follow a consistent naming convention. Additionally, using plural nouns for resource names is also a common practice.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DealerDesk/Initiate</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Initiate Dealer Desk Operating Session

  **Documentation**

  This API path allows you to start a new session on the Dealer Workbench, which is a facility for a bank's dealing desk. It supports trading activities for various market instruments, including agency and principal trading. This session can be used for functions related to sales, market risk trading, and managing trading lines of activity.

  **Limitations**

  POST: The name of the path '/DealerDesk/Initiate' should be more descriptive and closely related to the resource it represents. Based on REST best practices, the path should be named in a way that clearly indicates the action being performed. 

A possible name for this path following REST best practices could be '/DealerDesk/StartTransaction'. This name provides clear and concise information about the action being taken, making it easier for clients to understand the purpose of the resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/Notify</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Notify Dealer Desk Operating Session

  **Documentation**

  This API path is used to retrieve information about a specific operating session related to the Dealer Workbench at a bank's dealing desk. The Dealer Workbench supports trading activities, such as agency and principal trading in various market instruments. By sending a GET request to this path with the appropriate dealer desk ID, users can get details about the operating session at the dealer desk, including sales and market risk trading desk functions.

  **Limitations**

  GET: The name of the path should be:

/DealerDesks/{dealerdeskid}/Notifications

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/Request</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Request Dealer Desk Operating Session

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the Dealer Workbench, which is a tool used by a bank's dealing desk. The resource being updated is a request for a dealer desk operating session, which is a session where activities related to trading lines, agency and principal trading, as well as market instruments, are managed. The operating session also supports functions related to sales and market risk management within the trading desk.

  **Limitations**

  PUT: The name of the path should be '/dealer-desks/{dealerdeskid}/requests'. 

In RESTful APIs, path names are typically in lowercase and use hyphens to separate words for better readability. Using plural nouns for resource names is also a common convention.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/Retrieve</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Retrieve Dealer Desk Operating Session

  **Documentation**

  This API path allows you to retrieve information about a specific operating session within the Dealer Workbench of a bank's dealing desk. It provides details about the trading activities, market instruments, sales, and market risk functions associated with the selected dealer desk. This information can be helpful for monitoring and managing trading operations within the bank.

  **Limitations**

  GET: The name of the path should be:

'/dealer-desks/{dealerdeskid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/Update</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Update Dealer Desk Operating Session

  **Documentation**

  This BIAN API path allows you to update an existing Dealer Desk operating session. The Dealer Desk is a platform used by banks for trading activities in various market instruments, including agency and principal trading. By making a PUT request to this path with the specific Dealer Desk ID, you can modify or update the operating session details within the Dealer Workbench system, which includes supporting sales and market risk trading desk functions.

  **Limitations**

  PUT: The name of the path '/DealerDesk/{dealerdeskid}/Update' following REST best practices could be:

PUT /DealerDesk/{dealerdeskid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Exchange</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Exchange Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This API path allows you to update the Exchange Dealer Desk Consolidated Position Tracking function within a specific Dealer Workbench at a bank's dealing desk. It is used to manage and track positions within the trading activity for both agency and principal trading in various market instruments. This functionality also supports sales and market risk trading desk operations. The PUT method is used to update existing resources related to this function.

  **Limitations**

  PUT: The name of the path should be '/dealer-desks/{dealerdeskid}/position-trackings/{dealerdeskconsolidatedpositiontrackingid}/exchanges'. It follows the REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Exchange</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Exchange Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This BIAN API path allows you to update information related to the exchange trading assignment and limits within a specific Dealer Desk at a bank. The Dealer Desk is a facility that manages trading activities in various market instruments, including agency and principal trading. By using this API, you can make changes to the trading assignments and limits within the Dealer Desk, supporting functions for sales, market risk trading, and other trading desk operations.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/dealer-desks/{dealerdeskid}/trading-assignments-and-limits/{dealerdesktradingassignmentandlimitsid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Exchange</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Exchange Information Feed Administration Function

  **Documentation**

  This API path allows you to update information related to the exchange within a specific dealer desk workbench. It is specifically for managing the information feed administration aspect of the exchange function within the dealer workbench. By making a PUT request to this endpoint with the appropriate dealer desk ID and information feed administration ID, you can update and modify the details related to the exchange function in the dealer desk system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be in lowercase letters and use hyphens to separate words. It should also be descriptive and follow a hierarchy. Therefore, the name of the path could be:

/dealer-desk/{dealerdeskid}/information-feed-administration/{informationfeedadministrationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Execute</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Execute Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This API path allows you to update an existing resource related to the Dealer Workbench within a bank's dealing desk. Specifically, it enables the execution of the Dealer Desk Consolidated Position Tracking function, which helps monitor and manage the positions held across different trading activities within the bank. This functionality is crucial for tracking positions, managing risks, and supporting trading decisions within the dealing desk environment.

  **Limitations**

  PUT: The name of the path should be:

/DealerDesks/{dealerdeskId}/ConsolidatedPositionTrackings/{dealerdeskConsolidatedPositionTrackingId}/Execute

In this updated path:

- "DealerDesks" is in its plural form to represent a collection of dealer desks.
- "{dealerdeskId}" and "{dealerdeskConsolidatedPositionTrackingId}" are in camelCase for readability and consistency.
- "ConsolidatedPositionTrackings" is in its plural form to

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Execute</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Execute Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This API path allows you to update and execute the trading assignment and limits within a specific dealer desk identified by `dealerdeskid`. It is used for managing the bank's dealing desk operations, including trading activities such as agency and principal trading across various market instruments. The API supports functions related to sales and market risk trading desks. By utilizing this API, users can modify and carry out specific trading assignments and limits within the designated dealer desk.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/DealerDesks/{dealerDeskId}/TradingAssignmentsAndLimits/{dealerDeskTradingAssignmentAndLimitsId}/Execute

- Use plural nouns for endpoint names (e.g., DealerDesks)
- Use camel case for multi-word endpoint names (e.g., dealerDeskId)
- Avoid repeating endpoint names in the path (e.g., DealerDeskTradingAssignmentAndLimits)
- Use lowercase letters for endpoint names
- Use

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Execute</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Execute Information Feed Administration Function

  **Documentation**

  This BIAN API path allows users to update an existing resource related to the Dealer Workbench's Information Feed Administration. Specifically, it enables the execution of functions within the Information Feed Administration section of the Dealer Desk system, which supports various trading activities like agency and principal trading in different market instruments. This update operation helps manage and customize information feeds within the dealing desk facility for sales and market risk trading purposes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/dealer-desks/{dealerdeskid}/information-feed-administrations/{informationfeedadministrationid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>POST: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/Initiate</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Initiate Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This BIAN API path allows a user to initiate the function of tracking consolidated positions within the dealer desk system of a bank. This function supports various trading activities and market instruments, providing a centralized view of positions across different trading lines for agency and principal trading. It helps users monitor and manage their positions efficiently, supporting sales and market risk trading desk functions. The POST method is used to create a new resource related to the consolidated position tracking within the dealer desk system.

  **Limitations**

  POST: The name of the path should be: `/dealer-desks/{dealerdeskid}/consolidated-position-tracking/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/Initiate</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Initiate Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This specific BIAN API path allows users to create a new resource within the Dealer Desk system by initiating the Dealer Desk Trading Assignment and Limits Function. Essentially, it enables the bank's dealing desk to set up and manage trading activities for various market instruments, including agency and principal trading. This function supports sales and market risk trading desk functions as well.

  **Limitations**

  POST: The name of the path should ideally be:

/DealerDesks/{dealerdeskid}/DealerDeskTradingAssignmentsAndLimits/initiate

In this naming convention:

- The path should be in lowercase for consistency.
- Path parameters like 'dealerdeskid' should be in singular form, followed by their respective IDs in curly braces {}.
- The resource name should be in plural form if representing a collection of resources (e.g., DealerDesks).
- The endpoint 'initiate' should be

</details>

<details open>
  <summary><span style='color:red;'>POST: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/Initiate</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Initiate Information Feed Administration Function

  **Documentation**

  This API path allows you to create a new resource related to the information feed administration function within the Dealer Workbench of a bank's dealing desk. It supports the management of trading activities for both agency and principal trading in various market instruments, as well as sales and market risk functions. By initiating this function, users can establish and configure information feeds for the dealing desk, enhancing the data flow and processing capabilities of the trading operations.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
/DealerDesks/{dealerdeskid}/InformationFeedAdministrations
```

This naming convention ensures that the path is clear, concise, and adheres to standard RESTful practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Notify</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Notify Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This API path allows you to retrieve information about a specific Dealer Desk Consolidated Position Tracking function within the Dealer Workbench of a bank's dealing desk. The Dealer Desk supports trading activities for various market instruments and provides functions for both agency and principal trading, as well as sales and market risk desk functions. The Notify operation indicates that this API is used to alert or inform about updates related to the specified consolidated position tracking function within the Dealer Desk.

  **Limitations**

  GET: The name of the path should be:
```
/DealerDesks/{dealerdeskId}/ConsolidatedPositionTrackings/{consolidatedPositionTrackingId}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Notify</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Notify Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This API path allows you to retrieve information related to Dealer Desk Trading Assignment and Limits within the Dealer Workbench system. It supports the bank's dealing desk facility for trading in various market instruments, including agency and principal trading. The function also includes capabilities for sales and market risk trading desk functions.

  **Limitations**

  GET: The RESTful naming convention for this path would be:

`/dealerdesks/{dealerdeskid}/dealerdesktradingassignmentsandlimits/{dealerdesktradingassignmentandlimitsid}/notify`

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Notify</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Notify Information Feed Administration Function

  **Documentation**

  This API path retrieves information related to the notification function for administering an information feed within the Dealer Desk system. It provides details about the dealing desk facility of a bank, including its trading activities, such as agency and principal trading in various market instruments. Additionally, it supports functions related to sales and market risk trading desks.

  **Limitations**

  GET: The RESTful name for this path could be:

'/dealers/{dealerId}/information-feeds/{feedId}/notifications'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Request</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Request Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the consolidated position tracking function within a dealer workbench for a specific dealer desk. The dealer workbench represents the bank's dealing desk facility that supports various trading activities such as agency and principal trading across different market instruments. By using this API, you can request updates or changes to the dealer desk's consolidated position tracking function, which is essential for managing sales and market risk trading desk functions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/DealerDesks/{dealerDeskId}/DealerDeskConsolidatedPositionTrackings/{dealerDeskConsolidatedPositionTrackingId}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Request</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Request Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This API path allows you to update an existing resource related to the Dealer Desk Trading Assignment and Limits within the Dealer Workbench platform. Specifically, it enables you to request changes or updates to the trading assignment and limits for a specific dealer desk. This function supports the bank's dealing desk operations for trading activities in various market instruments, including agency and principal trading lines. It also facilitates sales and market risk trading desk functions within the bank's system.

  **Limitations**

  PUT: The name of the path should be: 

"/dealer-desks/{dealerDeskId}/trading-assignments-and-limits/{dealerDeskTradingAssignmentAndLimitsId}/requests" 

Following REST best practices, use lowercase letters, separate words with dashes, and keep the path structure hierarchical and descriptive. Be consistent with pluralization where applicable.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Request</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Request Information Feed Administration Function

  **Documentation**

  This API path allows you to update an existing information feed administration function related to a specific dealer desk within a bank's dealing desk facility. This function supports trading activities conducted by the bank, including agency and principal trading in various market instruments. Additionally, it assists in sales and market risk management functions within the trading desk.

  **Limitations**

  PUT: The name of the path should be:

'/dealerdesks/{dealerdeskid}/information-feed-administrations/{informationfeedadministrationid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Retrieve</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Retrieve Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This API path allows you to retrieve information about the consolidated position tracking function within a specific dealer desk in a bank's dealing desk facility. It supports tracking the positions of various trading activities, including agency and principal trading in different market instruments. This function assists in managing sales and market risk trading activities within the dealer desk.

  **Limitations**

  GET: The name of the path should be:

'/dealer-desks/{dealerDeskId}/consolidated-position-tracking/{dealerDeskConsolidatedPositionTrackingId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Retrieve</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Retrieve Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This BIAN API path allows you to retrieve information about the trading assignment and limits within the Dealer Desk of a bank. The Dealer Desk is a facility that supports various trading activities, including agency and principal trading, in different market instruments. By accessing this API path, you can get details about the trading assignments and limits associated with a specific Dealer Desk, enabling you to better manage trading activities and assess risks effectively.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be simplified and focus on the resource being retrieved. Here's a suggestion:

/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Retrieve</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Retrieve Information Feed Administration Function

  **Documentation**

  This API path allows you to retrieve information related to the administration of an information feed within the Dealer Workbench of a bank's dealing desk. The information feed administration function is responsible for managing data feeds that support trading activities, including agency and principal trading across various market instruments. This API provides access to details about how information feeds are managed within the dealer desk system, supporting sales and market risk trading desk functions.

  **Limitations**

  GET: A possible name for this path following REST best practices could be:

```
GET /dealer-desks/{dealerdeskid}/information-feed-administrations/{informationfeedadministrationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskConsolidatedPositionTracking/{dealerdeskconsolidatedpositiontrackingid}/Update</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Update Dealer Desk Consolidated Position Tracking Function

  **Documentation**

  This API path allows you to update the consolidated position tracking function for a specific dealer desk within a bank's dealing desk facility. By providing the dealer desk ID and the consolidated position tracking ID, you can make changes or updates to the tracking function used for managing trading activities involving various market instruments. This update can help in effectively monitoring and managing the positions held by the dealer desk for both agency and principal trading purposes.

  **Limitations**

  PUT: A possible name for the path could be:

```
PATCH /DealerDesks/{dealerdeskId}/ConsolidatedPositionTrackings/{consolidatedPositionTrackingId}
``` 

This path follows REST best practices by using the appropriate HTTP method (PATCH for updating resources), using plural nouns to represent collections (DealerDesks and ConsolidatedPositionTrackings), and using camel case with the first letter of each word in lower camel case.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/DealerDeskTradingAssignmentandLimits/{dealerdesktradingassignmentandlimitsid}/Update</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Update Dealer Desk Trading Assignment and Limits Function

  **Documentation**

  This API endpoint allows the user to update the trading assignment and limits within a specific dealer desk. The dealer desk represents a bank's area for handling trading activities with various market instruments, including agency and principal trading. By using this API, users can modify the assignment and limits associated with a particular dealer desk trading activity within the bank's dealing desk facility. It supports functions related to sales, market risk trading, and managing trading lines of activity.

  **Limitations**

  PUT: A more appropriate name for the provided path following REST best practices would be:

`/dealer-desks/{dealerDeskId}/trading-assignments-and-limits/{dealerDeskTradingAssignmentAndLimitsId}`

This naming convention uses lowercase letters, hyphens for better readability, and descriptive names that represent resources and their relationships accurately. It also eliminates the verb "Update" since HTTP methods (such as PUT or PATCH) would be used to update the resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DealerDesk/{dealerdeskid}/InformationFeedAdministration/{informationfeedadministrationid}/Update</span></summary>

  **Description**

  The Dealer Workbench represents the bank's dealing desk facility supporting one or more trading lines of activity for both agency and principal trading in all chosen market instruments. It also supports sales and market risk trading desk functions Update Information Feed Administration Function

  **Documentation**

  This API path allows you to update the information feed administration function within a specific Dealer Workbench on a dealing desk. The Dealer Workbench is a tool used in banking for trading activities, and this particular endpoint allows modifications to be made to the way information is administrated within that system. This could involve updating settings, configurations, or other parameters related to the information feeds used by the dealing desk.

  **Limitations**

  PUT: Based on RESTful conventions, the name of the path could be:
'/dealer-desks/{dealerdeskid}/information-feed-administrations/{informationfeedadministrationid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
