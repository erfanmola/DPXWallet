# Setting Up the FrontEnd

After [Cloning the project](/getting-started#cloning-the-project) and reading the [Technologies used in frontend](/technologies-used#frontend), We are ready to continue the setup, build and deployment process of the DPXWallet.

Firstly, we have to change our Working Directory to `webApp` folder, since it's the folder containing our frontend code:
```shell
cd webApp
```

## Installing Dependencies

:::danger
I am very sorry to inform this, But I just accidentally `unpublished` the `@erfanmola/televue@0.1.5` package from npm, there is no way to restore it, sorry for this inconvenience. Please change the `0.1.5` to `0.1.6` in `webApp/package.json` as I republished it, otherwise you will face error when trying `npm install`. 
:::

At this step, we need to install our project's dependencies. We use [NPM](https://www.npmjs.com/) as our package manager, but you can use any other tools (yarn, pnpm, ...).

```shell
npm install
```

## Building the WebApp

At this step, we are going to build our project with NPM. Built files are going to be outputted to `webApp/dist` folder.

```shell
npm run build
```

:::warning
This step requires correct setup of [Environment Variables](/environment-variables), otherwise you will end up with unusable bundle.
:::

## Deploying the WebApp

### Custom Server/Host

After successfully building the project, Our WebApp files are ready to be served at `webApp/dist` directory. You can upload this directory to your desired server or hosting service or any other infrastructure.

### Github Pages

Since our bundle is a bunch of static files, you can use [Github Pages](https://pages.github.com/) for building and hosting the WebApp too.

### Cloudflare Pages (Recommended)

Our recommended way of deploying the WebApp is using [Cloudflare Pages](https://pages.cloudflare.com/), it's basically Github Pages but with extra features and cool stuffs, it supports automatic building and the only thing you need to do is connect your Github repository to you Cloudflare account and deploy your desired repository. It also handles automatic building/deploying of your project as you push to the repository.

### Other Infrastructures
Basically you can use any other deployment service as long as they allow you to build your project with Environment Variables and serve static files.

:::tip
If you are using Automatic Deployment services like Github Pages, Cloudflare Pages or etc, you have to set you Root Path to `webApp`.
:::