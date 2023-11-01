# Staff_Administration_Server
This project is part of the CIMMYT crud application as Rest API (Nodejs)

# Environment configuration
In order to create a server (Backend) for an app with Angular, make sure you have installed on your system:
* node js https://nodejs.org/en
* npm
* sql

# Back-end creation
create a new directory and name it whatever you want, preferably the same as your front-end directory but add a flag so you know which is the front and which is the back.
Navigate into the <server-project-name> folder, using the terminal and enter the following command:

    npm init -y
It will create a file named package.json with the initial configuration, now you can start installing what is necessary to have a basic server that can communicate between each other (Back-Front).
Each server derives from the needs of your project, to use a server that handles CRUD requests for our Angular app with (mysql) we will carry out the following installations:

    npm install express mysql2 cors morgan

* Express: will support us with the creation of our server with its functions that make this task easier for us.
* mysql2: provides the interaction function between the server (node js) and promises or type requests (mysql)
* cors: allows us the interaction between the front and the back
* morgan: it will help us to visualize in real time what happens on the Back-end server, this is a good practice since if errors arise or requests do not arrive we will notice it in text with morgan.

Your created server will surely use .js files which works for small projects, in this repository the configuration to use .ts (TypeScript) files will be shown since it works for larger and scalable projects.

Before making any additional configuration we will install TypeScript but only within the server folder since Angular by default already brings the files in TS and this section does not need to be configured in the Front-end

Inside your Back-end directory enter the following command:

    npm install typescript --save-dev

Then create a configuration file for TypeScript with the command:

    npx tsc --init

Create the following folders inside your server root folder:

* server-project-name/
  * build/
    * src/
  * src/

Create an index.ts file inside the src directory which is at the root of your project.

The script that you can see in the first source code commit in this repository will be placed inside the file.

# Configuring TS to JS by compiler
Inside the package.json file modify the main attribute with the following element:

    "main": "./src/index.ts"

where we indicate that the entrance to the server is on that route.
Now notice that in the same file you will find under 'main' a script called 'test', change that 'test' to the following:

    "ts:node": "ts-node ./src/index.ts",
    "clean": "del build",
    "build": "tsc",
    "start": "node ./build/src",
    "dev": "nodemon"

The above will help us indicate which file is the main one and what the creation and start paths are after compiling TS to JS.

Now inside the server execute the following command:

    npm install --save-dev @types/node

This allows us, among other functions, to indicate the port through which our server will listen to client requests.

Upon completion of the previous command, execute the following remaining commands one by one.

    npm install --save-dev @types/express
    npm install --save-dev @types/cors
    npm install --save-dev @types/morgan

Within the TypeScript configuration file it modifies the elements that were modified within this repository since they are necessary for the server to function correctly.

Check the configuration file that is uploaded in the initial source code commit.

# Server initialization

To validate that your server is up and running so far, enter the following commands into your server directory:

The following command will create the JS files by compiling the TS files

    npm run build

To initialize the server and have it listen from the chosen port, use the following command after finishing the previous one.

    npm run start

Note: It is important that each change made to the code uses the sequence of the two commands so that you do not have errors.

This is the basic configuration for the backend with NodeJS
