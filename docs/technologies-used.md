# Technologies Used
In this section, we are going to describe every technology used in both frontend and backend of the project. We are going to explain the usage of each tool in the DPXWallet.

## FrontEnd
Our aim in the frontend side of the project is to provide a modern development experience while keeping the project understandable and maintainable. That's why we chose the technologies and tools below.

### Vite
We scaffolded our project using the [Vite](https://vitejs.dev/). It's blazingly fast compared to it's competitors, just like comparing Telegram to it's rivals. (What was the name? Wat Sap or something?)

### Sass
We styled our project using the SCSS format of the [Sass](https://sass-lang.com/). It's just a prefernce, but most people do prefer SCSS since it's just regular CSS syntax with superpowers. We know that Tailwind thingy exists, but nah, we don't pollute markup with article-long class names.

### VueJS
VueJS is our **#1** choice of web frameworks. You ask the reason why? Cause the sky is high, also elephants can't fly. How can you just not like the cool [VueJS](https://vuejs.org/) with it's Composition API? But jokes aside, any framework could have been used, all those Reacty and Angulary and Svelty guys are ok to use. Using VueJS is just a personal choice of the developer.

#### `vue-router`
We use [Vue Router](https://router.vuejs.org/) as our routing system in the SPA.

#### `vue-i18n`
We use [Vue i18n](https://vue-i18n.intlify.dev/) as our i18n provider for multi-language setup.

### `pinia`
We use [Pinia](https://pinia.vuejs.org/) as our state manager.

### `toastify-js`
We use [toastify-js](https://apvarun.github.io/toastify-js/) to show our toast messages.

### `qr-code-styling`
We use [qr-code-styling package](https://www.npmjs.com/package/qr-code-styling) to generate our fancy QR Codes.

### TeleVue
We developed an exclusive Telegram UI Library for VueJS, just for the purpose of this WebApp and Telegram Mini App Contest. If you are both a Telegram Enjoyer and VueJS's fiancé, then you should try [TeleVue](https://github.com/erfanmola/TeleVue) for you next TWA (Telegram Web App), I know they call it MiniApps, but they are wrong, yeah Telegram, you are wrong.

### i18n
We use the i18n standard for defining our locales and making DPXWallet multilingual.

::: tip
We are welcoming translators to help us translate the DPXWallet to different languages, you can start from `webApp/src/i18n` directory.
:::

::: info
The package used for i18n in Vue is [explained here](#vue-i18n).
:::

### TWA

We use [@twa-dev/sdk](https://github.com/twa-dev/SDK) as a replacement for the legacy `telegram-web-app.js`. Telegram web dudes are a bunch of C++ developers familiar with HTML/CSS, they use JQuery and Bootstrap from the early 80's and they don't provide a modular solution nor a package for their Javascripts, that's why we use this as package a replacement. 

## BackEnd
Our aim for the backend side of the project is to provide a basic CRUD-like API without making it complex.

### Laravel (PHP)
We use [Laravel](https://laravel.com/) as our backend API, it's completely hooked-up and compatible with [Laravel Octane](https://laravel.com/docs/10.x/octane) to be used with [OpenSwoole](https://openswoole.com/) or [Roadrunner](https://roadrunner.dev/) for the most efficency and performance.

### MySQL
We use [MySQL](https://www.mysql.com/) as our database backend, but since we have migration files, we are not limited to MySQL, so other options like SQLite could be used too.