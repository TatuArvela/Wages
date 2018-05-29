# Wages

![Wages icon](./logo-64.png?raw=true "Wages")

Version 0.1.0

## Description

With Wages, you can import the working time data of your employees ~~and calculate their monthly wages based on it automatically~~. Time data is imported in a [predefined CSV format](#csv-file-format-specification).

Wages is built with React, Redux, Bootstrap 4, Firebase and GitHub Pages. An online demo is available [here](https://tatuarvela.github.io/Wages/).

**Note:** No calculations are implemented yet. Data is only shown for the current month and year.


## Usage

### Local deployment

#### Configuration

The application requires a Firebase backend. Details of this process can be found [on the Firebase website](https://firebase.google.com/). Make a copy of `Wages/config/_example.js` and name it `dev.js`. Fill in the API key details of your Firebase backend. The backend functions are yet to be implemented, but some basic data rules for Firebase can be found in `Wages/firebase-rules.json`. Basic test data can be found in `Wages/firebase-test-data.json`.

### Starting local development server

The application uses `create-react-app`, and can thus be started with predefined scripts using `yarn` or `npm`.

Steps:
1. `yarn install` / `npm install`
2. `yarn start` / `npm start`

### Deploying to GitHub Pages

To deploy the application, you need to create a GitHub repository, and define it as the remote to this project. Details can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/). Deployment is done using `gh-pages`, and the predefined script can be executed with `yarn` or `npm`.

Steps:
1. `yarn run deploy` / `npm run deploy`


## Specifications

### CSV file format specification

#### Data File Format

The file format is CSV (Comma Separated Values). Every data row specifies one work shift and split shifts are allowed. All timestamps are given in 15-minute increments. The first row is expected to be a header description row, and is omitted from processing.

Some sample data can be found in `Wages/test.csv`.

Headers:

`Person Name, Person ID, Date, Start, End`

#### Data Elements
| Field	| Expected data |
| --- | --- |
| Person Name |	Textual Name of the | Employee
| Person | ID	Unique ID of the Employee
| Date |	DD.MM.YYYY, Work Shift Date
| Start |	HH:MM, Shift Start Time (24h)
| End |	HH:MM, Shift End Time (24h)

Example Data Row:

`John Smith, 8, 26.3.2014, 13:15, 2:00`


### Compensation categories and rules

| Title | Rules | Pay |
| --- | --- | --- |
| **Regular daily wage** | Paid for all hours | Working hours * Hourly wage ($4.25) |
| **Evening work compensation** | Paid for all hours between 19:00 and 06:00 | Working hours * Evening pay ($1.25) |
| **Overtime compensation** | Paid for hours over daily working hours (8 hours). When the working shift passes midnight, hours are still calculated into initial day’s total. | *See below*|
| Overtime A | Paid for the first three hours of overtime | Working hours * ($4.25 * 25%) |
| Overtime B | Paid for the fourth hour of overtime | Working hours * ($4.25 * 50%) |
| Overtime C | Paid for all exceeding hours of overtime | Working hours * ($4.25 * 100%) |


### Dependencies (npm)

| dependency | version |
| --- | --- |
| bootstrap | ^4.1.1 |
| classnames | ^2.2.5 |
| csvtojson | ^1.1.12 |
| firebase | ^5.0.2 |
| gh-pages | ^1.1.0 |
| moment | ^2.22.1 |
| react | ^16.3.2 |
| react-dom | ^16.3.2 |
| react-file-drop | ^0.2.4 |
| react-file-reader | ^1.1.4 |
| react-redux | ^5.0.7 |
| react-scripts | 1.1.4 |
| reactstrap | ^6.0.1 |
| redux | ^4.0.0 |
| redux-thunk | ^2.2.0" |




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
