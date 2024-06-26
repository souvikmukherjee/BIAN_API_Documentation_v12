<h1 style='color:red;'>IssuedDeviceTracking</h1>

**BIAN Documentation:** [IssuedDeviceTracking v12](https://app.swaggerhub.com/apis/BIAN-3/IssuedDeviceTracking/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceTracking/Initiate</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. InCR Initiate tracking for an allocated issued device

  **Documentation**

  This API path, /IssuedDeviceTracking/Initiate, allows you to create a new resource for tracking issued devices like cards or fobs that have been given to customers. It helps monitor the status of these devices and provides alerts for fraud warnings or cancellations. Essentially, this API helps you initiate the tracking process for a specific issued device.

  **Limitations**

  POST: In RESTful API design, the name of the path should be a noun that represents a resource. Following this convention, a suitable name for the path '/IssuedDeviceTracking/Initiate' could be '/issued-devices' or '/device-tracking'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceTracking/{issueddevicetrackingid}/Update</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. UpCR Update details of a tracked issued device

  **Documentation**

  This API path allows you to update the details of a tracked issued device. For example, if you need to change information related to a card or fob that has been issued to a customer, you can use this path to make those updates. This can include updating details like the device status, owner information, or any other relevant data.

  **Limitations**

  PUT: The name of the path '/IssuedDeviceTracking/{issueddevicetrackingid}/Update' should be '/issued-device-tracking/{issueddevicetrackingid}' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceTracking/{issueddevicetrackingid}/Retrieve</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. ReCR Retrieve details about a tracked device

  **Documentation**

  This API path allows you to retrieve detailed information about a tracked device that has been issued to a customer. It is used for accessing operational data related to devices like cards or fobs. You can use this service to check the status of the device, receive fraud alerts or warnings, and manage device cancellations.

  **Limitations**

  GET: The name of the path should be:

```
/issued-device-tracking/{issueddevicetrackingid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceTracking/{issueddevicetrackingid}/InternalNotification/{internalnotificationid}/Update</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. UpBQ Update captured internal status details for an issued device

  **Documentation**

  This API path allows you to update the internal status details for a specific issued device within the issued device tracking service. By calling this endpoint with a PUT request, you can provide new information or make changes to the internal notification associated with the issued device. This can include updating fraud warnings/alerts or cancelling the device.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /issued-device-tracking/{issueddevicetrackingid}/internal-notification/{internalnotificationid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceTracking/{issueddevicetrackingid}/InternalNotification/{internalnotificationid}/Capture</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. CaBQ Capture status notification for an issued device

  **Documentation**

  This API path is used to update the status notification for a specific issued device that has been tracked in the system. It allows you to capture and update the status notification for a particular issued device identified by the provided IDs. The service provides information about the operational status of devices like cards or fobs that have been given to customers, including alerts for potential fraud and notifications for device cancellations.

  **Limitations**

  PUT: The name of the path should be:

/issued-device-tracking/{issueddevicetrackingid}/internal-notification/{internalnotificationid}/capture

Following REST best practices, the path should be in lowercase letters and separated by hyphens to improve readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceTracking/{issueddevicetrackingid}/InternalNotification/{internalnotificationid}/Retrieve</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. ReBQ Retrieve internal status notification details

  **Documentation**

  This API path allows you to retrieve internal notification details related to a specific issued device tracking ID. It provides information on the status of devices like cards or fobs that have been issued to customers. The notifications may include alerts for fraud warnings or device cancellations. By using this API, you can access specific details about internal notifications associated with issued devices for tracking purposes.

  **Limitations**

  GET: Based on REST best practices, the path '/IssuedDeviceTracking/{issueddevicetrackingid}/InternalNotification/{internalnotificationid}/Retrieve' could be renamed to '/issued-device-tracking/{issueddevicetrackingid}/internal-notification/{internalnotificationid}' for better readability and adherence to conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceTracking/{issueddevicetrackingid}/ExternalReport/{externalreportid}/Update</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. UpBQ Update captured externally reported status details for an issued device

  **Documentation**

  This API path allows you to update the status details of an issued device that has been previously reported externally. For example, if a card or fob issued to a customer has been flagged for fraud or needs to be cancelled, this API allows you to provide updated information about the device's status. The information updated could be related to any alerts, warnings, or actions taken regarding the device.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:
'/issued-device-tracking/{issueddevicetrackingid}/external-report/{externalreportid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceTracking/{issueddevicetrackingid}/ExternalReport/{externalreportid}/Capture</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. CaBQ Capture external notification status details for an issued device

  **Documentation**

  This API path allows you to update the external notification status details for a specific issued device tracking report. It is used to capture information related to fraud warnings/alerts or device cancellations for devices like cards or fobs that have been issued to customers. By making a PUT request to this path with the necessary parameters, you can update the status details for the specified issued device tracking report.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should provide a clear indication of the resource and action being performed. A potential name for the given path could be:

`/issued-devices/{issueddevicetrackingid}/external-reports/{externalreportid}/capture`

This naming convention makes it clear that the endpoint is capturing data related to an external report for a specific issued device tracking entry.

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceTracking/{issueddevicetrackingid}/ExternalReport/{externalreportid}/Retrieve</span></summary>

  **Description**

  This service domain handles operational access to issued device tracking services. Services report on the status of devices such as cards, fobs, etc. that have been issued to customers. Service notifications include fraud warnings/alerts and device cancellation. ReBQ Retrieve external status notification details

  **Documentation**

  This BIAN API path allows you to retrieve external status notifications related to a specific issued device tracking service. You can provide the issued device tracking ID and external report ID to get detailed information about the status of devices like cards or fobs that have been issued to customers. This information may include alerts about potential fraud or notifications about device cancellations. The API helps you access and retrieve important operational data related to the tracking of devices issued to customers.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the given path could be:

GET /issued-devices/{issueddevicetrackingid}/external-reports/{externalreportid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
