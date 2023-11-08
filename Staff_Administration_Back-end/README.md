## Endpoint preparation
Create folders (controllers, routes) inside the `src` folder to organize the endpoint files within the server.

Inside the controllers folder you will create a ts file, where you will manage the requests and responses between Angular, Node and Mysql or whatever your database is.

Within this first configuration the preconfiguration of the requests to complete the CRUD is shown, you can identify each one since the json contains a message like the following `msg: 'operation name' `.

In the `routes/` folder, the routes to each of the mentioned endpoints are declared. If any of the routes or requests require the passage of a parameter such as the id, you must declare it to be able to identify the item to be affected. These routes will be exported. as the drivers to be used from the index.ts file

Modifying the main file or server entry consists of importing the routes and adding an identifier, in this particular case it will be ` '/users' `.

Review the code within the commit and notice that it has changed since the creation of the server with Node.

With this preconfiguration we will be ready to connect to the database and begin editing the CRUD operations of the controllers.

## Important 
NOTE: if you want to test the routes and requests that have been created here, I recommend using PostMan, it is a software that allows you to test the routes to your endpoints, or if you prefer, install the Thunder client extension, it is a very useful extension to test the routes to your APIS like this case, and it is the one I currently use to check the configuration that I have shown you.

## Connection to the database

Create a new directory or folder at the same height as the previous ones, that is, inside the ` src/ ` folder, for this template we will use the name ` database/ ` and inside this new folder, create the following file ` dbconection .ts ` where we will create the instance to enter the credentials and make the connection to the database.

To begin with the database connection configuration we will use ` sequelize `:

    npm install --save sequelize

now we can use this ORM inside our file

Remember that you must enter the correct username and password according to your server where you host your database (mysql)

Once you finish setting the necessary parameters, modify the index.ts file as shown in the commit.

When finished, build again and start with npm so that your backend makes the connection with your credentials.

## Data management through endpoints

To make the appropriate configuration and be able to manage the data directly from the DB, create a new folder to host the models.

The models are basically the description of the tables that you contain in each of your databases, for the template check the path ` src/models/user.ts ` where you will find the users table, in it we must strictly place the imports of the connection to the database and the import of sequelize, in addition to placing inside the ` db.define('real_name_of_the_table') ` as well as the names of the columns of your table for the records.

Another point to consider is the type of data and adding the cancellation of attributes such as ` createdAT:false, updateAT: false `, so that errors do not appear, or if you prefer, you can add those columns to your tables to avoid setting them to ( false).

When you finish creating and modifying the previous changes, you must update the operations ` ( get, post, put, delete ) `, check the file structure in the path ` controllers/usuario.ts ` where you can see that the code has been modified to be able to obtain, modify, search, create and delete records.

The use of ` try-catch ` is a good practice where we can handle certain possible errors that cause the app to crash.

Upon completion of these changes, create new tests from Postman or in Thunder Client to effectively obtain the full functionality of these requests and responses.