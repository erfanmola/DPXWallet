# Environment Variables

We use environment variables to provide the private data that our webApp needs in order to operate, both in frontend and backend.

Based on the environment that you use for deploying, You will specify these values.

::: tip
If you use Docker or other fancy tools for deploying in a containerized environment, You have to specify these variables at your deployer service, for example [Render](https://render.com) for backend and [Cloudflare Pages](https://pages.cloudflare.com/) for frontend.
:::

::: tip
If you deploy manually and oldSchool way, you can copy the `api/.env.example` to `api/.env` and set the values accordingly.
:::

## BackEnd

## Laravel

### `APP_URL`
This variable is Laravel-specific and is used to specify the url that backend is deployed at.

### Database
We use a MySQL database which requires you to fill these variables that specify the credentials and informations of the MySQL server and database.

```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

## App

### `FEE`
This variable specifies the amount of Fee per transaction. It defaults to `0.2` if not specified.

### `FEE_WALLET`
This variable specifies the `wallet` address that the fee of transactions will be transfered to. This is usually the owner of the systems wallet address and can be set at any time (if you don't have a wallet address yet). If not set, transactions will be done with `0` fee.

### `TRANSACTIONS_PER_FETCH`
This variable specifies the limit count of transactions per page when requested by clients.


## FrontEnd
:::info
All variables related to frontend are prefixed with `VITE_`.
:::

### WebApp

### `VITE_APP_URL`
This variable specifies the url of the backend, for frontend, it has to be the same value as `APP_URL` in the backend is.

### `VITE_FEE`
This variable specifies the fee of transactions, just like `FEE` does in the backend, it's used for display and pre-calculation purposes on the front end, it has no real effect on the frontend. Default to `0.2` when not specified.

### TeleVue
`VITE_HEX_HMAC_SIGNATURE` is an optional value that specifies the HMAC Signature of your bot token, used for client-side validation of the the webApp client by `AuthProvider` of TeleVue. [You can read more about it and how to generate it here](https://erfanmola.github.io/TeleVue/?path=/docs/providers-authprovider--docs#hex_hmac_signature).

If not specified or empty, DPXWallet ignores the `AuthProvider` of TeleVue.

```shell
VITE_HEX_HMAC_SIGNATURE= hmac signature of your bot token
```