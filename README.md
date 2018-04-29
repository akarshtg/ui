# The Ionic Shopping Cart by Akarsh 🎮

<img src="https://user-images.githubusercontent.com/236501/32385619-bddac0ac-c08c-11e7-9ee4-9c892197191f.png" width="400" />

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

## <a name="getting-started"></a>Getting Started

To test this starter out, install the latest version of the Ionic CLI and run:

You need to have latest version of Ionic CLI.
Can download and get the latest application from gitHub.
```bash
npm install -g ionic cordova
git clone https://github.com/akarshtg/ui.git
cd ui/
ionic serve
```

## Pages
The first page is Welcome Page which asks whether you need to Sign Up or Login
As of now it is not integrated with the service part. So you can use mock data.
All the apis are ready just getting token and moving forward is pending.

After login it will direct to tabs page with items in first tab and second tab for search filter
and the third one is of profile.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

We have a Login as Admin checkbox to make as Admin. Who can only delete or add an item in the list.

The other users can only login and select the item.

Cart, WishList and Payement api integration is still in developing stages.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Shopping Cart comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file.

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`.

As of now internalization is commented out but can work with a single uncomment.


Thanks,
Akarsh
