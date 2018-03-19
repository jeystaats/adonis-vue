# AdonisVue
A simple basic combination for setting up adonisjs + vue in combination with Laravel mix

Personally I love simplicity and sometimes I feel like a lot of webpack templates are diverting away from that idea.
That's why I found this lovely combination where you have a combination of simplicity by Laravel Mix.

Please note that this wasn't initially my own idea.
This project is based a post by Stefanos Kariotidis where he shares his idea in [this](https://iccode.net/posts/2017/10/23/using-adonisjs-with-vuejs-and-laravel-mix) post

### Fullstack application

This is the fullstack boilerplate for AdonisJs with Vue.js, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Vue basic routing + CSRF token setup for authentication
10. Use of Laravel Mix for easy use of webpack
11. SCSS support


## Install Adonis and setup project

Globally install Adonis by using npm

```bash
npm i -g @adonisjs/cli`
```

### Setup

Use the adonis command to install the blueprint

Manually clone the repo and then run `npm install`.

```bash
npm run fwatch 
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


