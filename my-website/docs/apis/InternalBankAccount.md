<h1 style='color:red;'>InternalBankAccount</h1>

**BIAN Documentation:** [InternalBankAccount v12](https://app.swaggerhub.com/apis/BIAN-3/InternalBankAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /InternalBankAccount/{internalbankaccountid}/Capture</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Capture Internal Bank Account Facility

  **Documentation**

  This API path allows you to update an existing internal bank account by capturing certain information related to the bank account facility. Internal bank accounts are accounts owned by the bank itself, not by customers. These accounts are used for purposes like holding funds or mirroring transactions. By using this API path with a specific internal bank account ID, you can update details associated with that account, such as account facilities or services.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be: /internal-bank-accounts/{internalbankaccountid}/captures

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalBankAccount/{internalbankaccountid}/Control</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Control Internal Bank Account Facility

  **Documentation**

  This API path allows you to update the control settings for a specific internal bank account. Internal bank accounts are accounts that are not owned by customers but are used for specific purposes within the bank, such as holding funds or mirroring transactions. By using this API, you can manage the control settings and facilities associated with these internal bank accounts.

  **Limitations**

  PUT: The name of the path '/InternalBankAccount/{internalbankaccountid}/Control' following REST best practices should be:

'/internal-bank-accounts/{internalbankaccountid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>GET: /InternalBankAccount/{internalbankaccountid}/Notify</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Notify Internal Bank Account Facility

  **Documentation**

  This API path allows you to retrieve information about a specific internal bank account by providing the internal bank account ID. It is used to access details about banking-related accounts that are not owned by customers, such as holding accounts or mirror accounts. This API is part of a service domain that manages these specific types of accounts within the banking system.

  **Limitations**

  GET: For a RESTful naming convention, the path should be as follows:

'/internal-bank-accounts/{internalbankaccountid}/notifications'

</details>

<details open>
  <summary><span style='color:red;'>POST: /InternalBankAccount/Initiate</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Initiate Internal Bank Account Facility

  **Documentation**

  This API path allows you to create a new banking account that is not owned by individual customers but serves specific purposes like holding funds or reflecting transactions. This account is separate from general ledger accounts and is typically used for internal banking operations.

  **Limitations**

  POST: If the path '/InternalBankAccount/Initiate' followed all REST best practices, a more appropriate name for the resource could be '/internal-bank-accounts'. Following REST conventions, the method for initiating a new internal bank account could be performed using the HTTP POST request on the '/internal-bank-accounts' resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalBankAccount/{internalbankaccountid}/Update</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Update Internal Bank Account Facility

  **Documentation**

  This API path allows you to update information related to an internal bank account that is not owned by customers. These accounts are used for specific purposes such as holding funds or mirroring other accounts. By using this PUT method, you can make changes or updates to the details of a particular internal bank account identified by its unique internalbankaccountid.

  **Limitations**

  PUT: The name of the path should be:

PUT /internal-bank-accounts/{internalbankaccountid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /InternalBankAccount/{internalbankaccountid}/Retrieve</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Retrieve Internal Bank Account Facility

  **Documentation**

  This API path allows you to retrieve information about a specific internal bank account by providing its unique identifier (internalbankaccountid). These accounts are different from regular customer accounts and are used for specific purposes such as holding funds or mirroring transactions. By making a GET request to this path, you can access details and data related to these internal bank accounts.

  **Limitations**

  GET: The name of the path should be:

GET '/internal-bank-accounts/{internalbankaccountid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InternalBankAccount/{internalbankaccountid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This Service Domain manages the banking-related accounts that are not owned by customers. These are not general ledger accounts. Typical examples are holding accounts and mirror accounts. Execute Authorization of Booking

  **Documentation**

  This API path allows you to execute authorization for a booking related to an internal bank account. You can update an existing resource by providing the internal bank account ID and the booking authorization ID. This service domain specifically handles accounts that are not owned by customers, such as holding accounts and mirror accounts, rather than general ledger accounts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/ internal-bank-accounts/{internalbankaccountid}/booking-authorizations/{bookingauthorizationid}/execute

Note that the path is all in lowercase, uses hyphens to separate words, and provides a clear indication of the resource hierarchy.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
