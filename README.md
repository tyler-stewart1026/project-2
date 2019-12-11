# Skinder

![screenshot](/public/images.skinder1.gif)

Skinder is a platform which allows users to create an account, search for backcountry ski/board trails, find friends, communicate through a forum and store their fav's to a database.

# Dependencies

Skinder utilizes the following npm's:

* Axios
* Dotenv
* Express
* Express-Handlebars
* Mysql
* Sequelize

The above listed dependencies are contained on the package.json file.  Run the following:

```npm install```

To run the application locally, an environment file will need to be set up with your database password, as well as API keys for the following sites:
[mapquest](https://developer.mapquest.com/)  
[powder project](https://www.powderproject.com/data)

After your .env file is set up  with your database password and API keys, you can run the application.  From the terminal command line, enter:

```node server.js```

Then, from your client address bar, enter:

```localhost:3000```

![skinder](/public/images/skinder3.gif)

# Deployed version

To see the live version, visit [Heroku](https://projtwo.herokuapp.com/).

# Credits

### Tyler Stewart
* Front end design
* Powder Project API calls
* Back end API for trail results

### Matt Wigdahl
* User profiles
* Back end API for users
* QA

### Andrew Stehno
* Mapquest API calls
* Back end API for forum
* Forum design

