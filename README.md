# Helpful Human Interview Challenge
## Color Swatches

Hosted on AWS free tier EC2:
http://54.189.248.112/
http://ec2-54-189-248-112.us-west-2.compute.amazonaws.com/

### Application Overview:
This application was created to display simple color swatches to the user. The user is able to see both a list and a detailed view of various color swatches. The list view shows a randomized selection of 168 colors with pagination to help navigate through while displaying 12 colors per page.  If the user is to select one color it is now shown in the detail view displaying that color as well as shade swatches below. There is a side bar with both a random color button and a list of color names that the user is then able to use to quickly see the colors in the group they selected.

### Structure and Resources
This application was built using React, Express, Node.js, Mongodb, Bootstrap, jQuery and AWS

### Installation

##### Back End:
- Run `npm i` to download all the dependencies onto your local machine.
- In terminal, run files using `npm run start`

##### Front End:
- Run `npm i` to download all dependencies onto your local machine.
- In terminal, run files using `npm run start`

##### MongoDB
- In terminal open Mongo Shell by running `mongod --dbpath ./db`
- In a separate terminal window, access Mongo environment by running `mongo`
- After creating a db entry (steps shown above), view database by running `show dbs`
- After verifying database creation (step 2), view the database environment by running `use <database name>`
- To view database contents, run `db.lists.find()`
- To delete database contents, run `db.lists.drop()`

### API Endpoints:

- `/api/list/random`
- `/api/list/:page'`
- `/api/list/colorGroup/:color/:page`
- `/api/list/search/:query/:page`


### Notes:
 I've recently been studying React so I've used this coding challenge as an opportunity to build out my first React application. I did run into some issues getting the state to persist so I used window reloads as a work around. I do understand that Redux is the proper tool to solve this issue but with my current knowledge of Redux and the time constraint I wasn't able to implement it in this project.
