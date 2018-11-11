# Wages

![Wages icon](./logo-64.png?raw=true "Wages")

Version 0.2.0

Import the working time data of your employees and calculate their monthly wages automatically. Time data is imported in a [predefined CSV format](#csv-file-format-specification).

Wages is an open source web application built with React, Redux, Bootstrap 4, Firebase and GitHub Pages. A live demo is available [here](https://tatuarvela.github.io/Wages/).

**Note:** No calculations are implemented yet. Data is only shown for the current month and year.

## Usage

Start by cloning the app on your computer with Git.  
Install the dependencies for the project with `yarn install` or `npm install`.

### Firebase configuration

The application requires a Firebase backend. Details on acquiring one can be found [on the Firebase website](https://firebase.google.com/).

Fill *Wages/config/_keys.js* with your Firebase API key details, and rename it *keys.js*.

The backend functions are yet to be implemented, but some basic data rules for Firebase can be found in *Wages/firebase-rules.json*. Basic test data can be found in *Wages/firebase-test-data.json*.

### Starting local development server

The application uses `create-react-app`, and can thus be started with predefined scripts using `yarn start` or `npm start`.

The application will open in a new browser tab. The application's default URL is `localhost:3000`.

### Deploying to GitHub Pages

To deploy the application using GitHub Pages, you first need to create a GitHub repository and define it as the remote to this project. Details can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/). Deployment is done using gh-pages, and the preconfigured script can be executed with `yarn run deploy` or `npm run deploy`.

## Specifications

### CSV file format specification

#### Data File Format

The file format is CSV (Comma Separated Values). Every data row specifies one work shift and split shifts are allowed. All timestamps are given in 15-minute increments. The first row is expected to be a header description row, and is omitted from processing.

Some sample data can be found in `Wages/test.csv`.

Headers:

`Person Name, Person ID, Date, Start, End`

#### Data Elements

| Field | Expected data |
| --- | --- |
| Person Name | Textual Name of the Employee
| Person ID | Unique ID of the Employee
| Date | DD.MM.YYYY, Work Shift Date
| Start | HH:MM, Shift Start Time (24h)
| End | HH:MM, Shift End Time (24h)

Example Data Row:

`John Smith, 8, 26.3.2014, 13:15, 2:00`

### Compensation categories and rules

| Title | Rules | Pay |
| --- | --- | --- |
| **Regular daily wage** | Paid for all hours | Working hours &times; Hourly wage ($4.25) |
| **Evening work compensation** | Paid for all hours between 19:00 and 06:00 | Working hours &times; Evening pay ($1.25) |
| **Overtime compensation** | Paid for hours over daily working hours (8 hours). When the working shift passes midnight, hours are still calculated into initial day’s total. | *See below*|
| Overtime A | Paid for the first three hours of overtime | Working hours &times; ($4.25 &times; 25%) |
| Overtime B | Paid for the fourth hour of overtime | Working hours &times; ($4.25 &times; 50%) |
| Overtime C | Paid for all exceeding hours of overtime | Working hours &times; ($4.25 &times; 100%) |

## To do

### Front end

* Select month and year

### Back end

* Query all data from Firebase 'times' ref with current month and year
* Group data rows by 'personId'
* Count and group data to different compensation categories
  * Round currency calculations to nearest cent
  * Round time to two decimal places (15 minutes = 0.25)
* Count total as 'wages'
* Set a string 'monthAndYear' (e.g. 5-2018)
* Delete all rows from 'wages' ref for the current month
* Save new rows with 'personId', 'personName', 'wages' and 'monthAndYear' to 'wages' ref
