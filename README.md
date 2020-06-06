# RENO EXPO

A React, Node, Express, Postgres starter kit, with Sequelize for an ORM and JWT auth.

## Why, what is this for?

Often when I want to spin up a quick project, I get bogged down in boring implementation details such as which stack to use or how to handle authentication.

This is designed to minimise the friction for me personally getting started with a project, using a handful of technologies I like and having already implemented the basics for authentication with JWT.

It's not designed with production use cases in mind...but with a bit of rigour and care, there's no reason a project started with this kit couldn't do some heavy lifting.

## Usage

NB: _These notes are rough!_

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

Changes to the database should be handled through
[migrations](https://sequelize.org/v5/manual/migrations.html).

The cli command for new migrations is:

`npx sequelize-cli model:generate --name User --attributes username:string,password:string`

This will create the new model and database migration. Read the docs for more details.

## Examples

Coming soon!

If you use Reno Expo to kick off a project, I would love to hear about it.
