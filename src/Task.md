## Assessment Task

We are building a basic weather application

#### Important Notes

- Please use vanilla JavaScript and try to stay away from any frameworks such as VueJS, Angular, React or Ember or any libraries such as lodash, moment or jquery
- The estimated time effort for the task is somewhere up to 4 hours. We do not just want the application built and working, but rather an impression of your programming skills, development style and design knowledge.
- CSS is least of our concerns, so please invest your wisely
- Please write the application as if this is a real world project and keep the code clean, maintainable and extendable. We expect you to write production quality code and requirements such as error handling, linting, etc., need not be specified
- Please use `git` (or `GitHub`, `GitLab` or `BitBucket`) and maintain a commit history while building the application.
- Once you have finished your work, you have 2 options
  - Please remove the `node_modules` directories, compress the main directory as a `.zip` file and send it back!
  - If you are using `GitHub` or other similar service, please make the repository public and send us back the link to the repository

**Good luck !!!**

## Task Requirements

The goal is to make a basic weather app using https://www.metaweather.com/api

#### Task 1

Please create a page that shows the current weather conditions based on the browser's location. The weather conditions should include the following

- City
- Date (without time)
- Weather Conditions [`Text` and `Icon`] (you can use the icon provided by the api)
- Temperature (in centigrade)
- Wind Direction [`Text` and `Icon`] (you can use an arrow for the wind direction ... like a compass)

#### Task 2

Please create or reuse existing web components (no Polymer) for the following

- Date Picker (for date selection)
- Text Field (for city selection)
- Button (for submission)

Using these components, please allow the user to lookup weather for a given city on a given date (past, present or future). Please reuse the page created in `Task 1` for displaying the weather conditions

#### Task 3 (Bonus)

Please create 2 version of the application, and make sure you send us back both the versions

- The first one in which the application code is directly interacting with the metaweather API with no `server` involved
- The second version where all the weather requests are sent to `server` and the server interacts with the metaweather API

**Important Note (again)** - Please write the application as if you would do it as a real world project and keep the code clean, maintainable and extendable. We expect you to write production quality code and requirements such as error handling, linting, etc., need not be specified
