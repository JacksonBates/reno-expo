# RENO EXPO

A React, Node, Express, Postgres starter kit, with Sequelize for an ORM and JWT auth.

## Why, what is this for?

Often when I want to spin up a quick project, I get bogged down in boring implementation details such as which stack to use or how to handle authentication.

This is designed to minimise the friction for me personally getting started with a project, using a handful of technologies I like and having already implemented the basics for authentication with JWT.

It's not designed with production use cases in mind...but with a bit of rigour and care, there's no reason a project started with this kit couldn't do some heavy lifting.

## Usage

NB: _These notes are rough!_ And this project is still under development.

### Requirements

I run this with the following:

Node 8.16.x

npm 6.14.x

Postgres 10.x

Note:
You also need to configure your database user on your system and put the correct
details in your .env before running the db:create command

Since this relies on a range of existing technologies, if you run into issues,
look at their documentation.

- [Postgres](https://www.postgresql.org/docs/10)

- [Sequelize](https://sequelize.org/v5/)

- [Express](https://expressjs.com/en/4x/api.html)

### Quick start

TL;DR: just the commands

```sh
# terminal one
git clone git@github.com:JacksonBates/reno-expo.git
cd reno-expo
cp .env.example .env
npm i
npx sequelize-cli db:create # see note above. You must have a valid user in your .env file
npx sequelize-cli db:migrate
npm start
# terminal two (from previous directory)
cd client
npm i
npm start
```

Once the project has been initialised, you may find it more useful to use the `npm run dev` command from the root folder, which will spin up the server and client concurrently.

#### Explanation

The backend is a Node server which can be launched with npm start in the root directory.
The frontend is a create-react-app which can be launched from the client folder.

The `npx sequlize-cli` commands initialize the database with the user model.

### Check that it works

In your browser of choice, visit localhost:3000 and you should see a very basic
'Home' page and some links to an Admin and Login page.

Admin should be locked until you log in.

Login will require you to create a user account first.
Click 'I don't have an account' and make one via the registration form.
You can now log in and test your access to the Admin page.

If all is working, you can begin to develop your app.

Note: there is no client side validation or visual feedback for errors - errors
live in the dev console. This was left unimplemented so that you can use whatever
CSS framework you want to plug in without having to unpick any decisions I'd
made on your behalf.

### Development considerations

#### Backend - Migrations

Changes to the database should be handled through
[migrations](https://sequelize.org/v5/manual/migrations.html).

The cli command for new migrations is:

`npx sequelize-cli model:generate --name User --attributes username:string,password:string`

This will create the new model and database migration. Read the docs for more details.

For migrations to take effect, you need to run the migrations: `npx sequelize-cli db:migrate`

#### Client - API calls

API calls are demonstrated in the `Login.js`, `Register.js`, and `Admin.js` components. Three helper functions are provided in `src/helpers/api/` that can be used throughout the React app. They are demonstrated in `useEffect` hooks. The `API` helper function provides a lightweight wrapper around `fetch` and takes two arguments: an object containing `{endpoint, method, data}`, and the `authTokens`. Since it returns the fetch response, it is thenable, i.e. you can call the api and set the state like this at its most simple:

```js
useEffect(() => {
  // Note method and data have default values,
  // so empty GET requests only require an endpoint
  const endpoint = "/api/test/user";

  API({ endpoint }, authTokens).then((response) => setData(response));
}, [data, authTokens]);
```

## Deployment

This can be deployed to Heroku reasonably quickly.

1. [Sign up](https://api.heroku.com/signup/devcenter) for a Heroku account.

2. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

3. Run the following command on command line: `heroku login`

4. Create a new heroku app from the command line. _Note app-name is optional, Heroku will auto generate a weird one for you otherwise_
   : `heroku create [app-name]`

5. Spawn a database on Heroku from the command line. _Note the hobby-dev tier is free_: `heroku addons:add heroku-postgresql:hobby-dev`

You should see some output like:

```
Creating heroku-postgresql:hobby-dev on ⬢ renoexpo... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-opaque-15460 as DATABASE_URL
```

If your database url has been saved as something other than DATABASE_URL, such as HEROKU_POSTGRESQL_BRONZE_URL, you should change the `use_env_variable` value for production environments accordingly in the `config/config.js`.

6. Set a new config variable to store the JWT_SECRET, either via the Heroku dashboard for your app or the toolbelt command. See the [config variables docs](https://devcenter.heroku.com/articles/config-vars) for this.

7. Add the git remote for Heroku from the command line: `heroku git:remote -a [application-name]`

8. Deploy to Heroku by pushing to the remote: `git push heroku master`

9. You should now be able to see your deployed app. An easy way to launch it is: `heroku open`

### Migrating the database on Heroku

Before your newly deployed Reno Expo app will work fully via Heroku, you need to migrate the database to create the initial user table. You will need to run the migrations whenever you add new migrations.

1. Connect to your Heroku app's bash terminal" `heroku run bash`

2. Use the npx sequelize-cli command to migrate the database: `npx sequelize-cli db:migrate`

You should see output similar to this:

```
npx: installed 80 in 13.163s

Sequelize CLI [Node: 12.18.0, CLI: 5.5.1, ORM: 5.21.12]

Loaded configuration file "config/config.js".
Using environment "production".
== 20200606113054-create-user: migrating =======
== 20200606113054-create-user: migrated (0.074s)

```

Now the app should be functional enough to allow you to register a user and login as that user.

## Examples

The basic version can be found at http://renoexpo.herokuapp.com

A more developed version, which uses Ant Design for styling and includes some example database migrations can be found here: [Reno Expo Books](https://reno-expo-books.herokuapp.com/). The Github repo is here: [Reno Expo Books Repo](https://github.com/JacksonBates/reno-expo-books).

If you use Reno Expo to kick off a project, I would love to hear about it.
