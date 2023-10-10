# Setting Up the BackEnd

After reading the [Technologies used in backend](/technologies-used#backend) and [Setting up the FrontEnd](/setting-up-frontend), We are ready to continue the setup, build and deployment process of the DPXWallet's BackEnd.

We obviously need `PHP` to be installed and some basic knowledge of `Laravel` and experience of deploying Laravel projects.

::: info
Basically, Our entire backend is just a Laravel powered API and there are tons of methods and environments to deploy Laravel, I recommend you reading [Deployment of Laravel projects](https://laravel.com/docs/10.x/deployment) in Laravel's official documentations. **You only need to provide the correct [Environment Variables](/environment-variables)**.
:::

## General Guide

After ensuring that our server meets the [Requirements of a Laravel Project](https://laravel.com/docs/10.x/deployment#server-requirements). We have to change our Working Directory to `api` folder, since it's the folder containing our backend code:
```shell
cd api
```

### Installing Dependencies

At this step, we need to install our project's dependencies. We use [Composer](https://getcomposer.org/) as our package manager.

```shell
composer install
```

### Serving the project

You can serve the project by running the command below:

```shell
php artisan serve
```
:::warning
This step requires correct setup of [Environment Variables](/environment-variables), otherwise you will face errors.
:::

::: tip
The project is fully compatible with [Laravel Octane](https://laravel.com/docs/10.x/octane) and we recommend using it.
:::

## Final words

I am not sure that the information provided on this page is sufficent or not, since the backend is just a very basic Laravel project, I don't think it's correct to copy/paste the Laravel Docs here, that's why I believe that you must read Laravel Docs.

Also it's worth mentioning that **Deploying a Laravel project** is just a `composer install` and `.env` editing and serving, but this could be very difficult task if you are not a PHP developer, so you have to learn Laravel from other sources, not from this guide.