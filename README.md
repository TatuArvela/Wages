# Wages

![Wages icon](./logo-64.png?raw=true "Wages")

Version 0.1.0

## Description

With Wages, you can import the working time data of your employees ~~and calculate their monthly wages based on it automatically~~ (to do). Time data can be imported in a predefined CSV format.

Wages is built with React, Redux, Bootstrap 4, Firebase and GitHub Pages.


## Dependencies (npm)

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


## Features

Backend functions are currently missing from this application. Uploading time data to Firebase works.

### To do

* Query all data from Firebase 'times' ref with current month and year
* Group data rows by 'personId'
* Count and group data to different compensation categories
  * Round currency calculations to nearest cent
  * Round time to two decimal places (15 minutes = 0.25)
* Count total as 'wages'
* Set a string 'monthAndYear' (e.g. 5-2018)
* Delete all rows from 'wages' ref for the current month
* Save new rows with 'personId', 'personName', 'wages' and 'monthAndYear' to 'wages' ref


## Compensation categories and rules

| Title | Rules | Pay |
| --- | --- | --- |
| **Regular daily wage** | Paid for all hours | Working hours * Hourly wage ($4.25) |
| **Evening work compensation** | Paid for all hours between 19:00 and 06:00 | Working hours * Evening pay ($1.25) |
| **Overtime compensation** | Paid for hours over daily working hours (8 hours). When the working shift passes midnight, hours are still calculated into initial day’s total. | *See below*|
| Overtime A | Paid for the first three hours of overtime | Working hours * ($4.25 * 25%) |
| Overtime B | Paid for the fourth hour of overtime | Working hours * ($4.25 * 50%) |
| Overtime C | Paid for all exceeding hours of overtime | Working hours * ($4.25 * 100%) |
