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