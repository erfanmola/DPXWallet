# 💎 DPX API
DPX API is an application programming interface for interacting with the DPX System

## 🔰 Endpoint
The endpoint of DPX API is accessible at https://dpx.developix.ir/api. If deployed on a custom server, it could be accessed at `ADDRESS/api`.

## ⚙️ Supported Methods
Generally speaking, the API accepts `GET` or `POST` http methods based on the action you are requesting, some actions accept both methods that are specified below, but no action accepts any other method than `POST` and `GET`.  
  
**⚠️ Please note that the `POST` method parameters must be in the format of `Form Data`.**

## ✨ Methods

### 💠 Balance
**Description:** Retrieves the balance of the given wallet  
**Path:** `/balance`  
**Supported Methods:** `GET`  
**Return:** `Balance (Float)`  
**Params:** `/balance/{wallet}`  

### 💠 Transaction
**Description:** Retrieves the information of the given TransactionID  
**Path:** `/transaction`  
**Supported Methods:** `GET`  
**Return:** `Transaction Object`  
**Params:** `/transaction/{transactionId}`  

### 💠 Transactions
**Description:** Retrieves the transactions with given criteria (maximum of 256 items)  
**Path:** `/transactions`  
**Supported Methods:** `GET`, `POST`  
**Return:** `Array of Transaction Objects`  
| Field       | Type   | Required | Description                      |
|-------------|--------|----------|----------------------------------|
| offset      | int    | Optional | Specifies the offset             |
| departure   | string | Optional | Specifies the departure wallet   |
| destination | string | Optional | Specifies the destination wallet |

### 💠 Transfer
**Description:** Transfers the specified amount from departure wallet to destination wallet   
**Path:** `/transfer`  
**Supported Methods:** `POST`  
**Return:** `Transaction Object`  
| Field       | Type   | Required | Description                                  |
|-------------|--------|----------|----------------------------------------------|
| amount      | float  | Required | Specifies the amount                         |
| departure   | string | Required | Specifies the departure wallet               |
| secret      | string | Required | Specifies the secret of the departure wallet |
| destination | string | Required | Specifies the destination wallet             |

### 💠 Verify
**Description:** Verifies if the given credentials are valid and transfer can be done with given credentials   
**Path:** `/verify`  
**Supported Methods:** `POST`  
**Return:** `Validity (Boolean)`  
| Field       | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| wallet      | string | Required | Specifies the wallet               |
| secret      | string | Required | Specifies the secret of the wallet |

### 💠 Generate
**Description:** Generates a new wallet   
**Path:** `/generate`  
**Supported Methods:** `POST`  
**Return:** `Wallet & Secret (JSON Object)`  

### 💠 Revoke
**Description:** Revokes the secret of the given wallet   
**Path:** `/revoke`  
**Supported Methods:** `POST`  
**Return:** `New Secret (String)`  
| Field       | Type   | Required | Description                        |
|-------------|--------|----------|------------------------------------|
| wallet      | string | Required | Specifies the wallet               |
| secret      | string | Required | Specifies the secret of the wallet |

## 🧩 Object Types

### 💠 Transaction Object
**Description:** Table below describes a `transaction object`  
| Field       | Type   | Description                          |
|-------------|--------|--------------------------------------|
| transaction | string | Specifies the transaction id         |
| departure   | string | Specifies the departure wallet       |
| destination | string | Specifies the destination wallet     |
| amount      | float  | Specifies the amount                 |
| fee         | float  | Specifies the fee                    |
| timestamp   | int    | Specifies the timestamp              |

## 🏳️ Response Types
Generally, you would receive one of the two following JSON-Serialized responses, a Success or a Failure

### ✅ Success
```json
{
    "status": "success",
    "result": RETURN_VALUE
}
```

### ❌ Failed
```json
{
    "status": "error",
    "error": "error-code",
    "info": "Error description in English"
}
```