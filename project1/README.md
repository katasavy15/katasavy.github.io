# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Vamsidhar Reddy Katasani

**Email**: katasavy@mail.uc.edu

**Short-bio**: Vamsidhar is a graduate student pursuing Master's in Information Technology at University of Cincinnati. Prior to his studies he has had some experience in web application development.

![Vamsidhar's headshot](images/Mine.jpg)

## Repository Information

Respository's URL: [https://github.com/katasavy15/katasavy15.github.io](https://github.com/katasavy15/katasavy15.github.io)

Project Web URL: [https://katasavy15.github.io/project1/](https://katasavy15.github.io/project1/)

# Individual Project 1
## Front-end Web Development with a Professional Profile Website on github.io cloud service

## Overview and Requirements 

As part of this project the knowledge gained from the lectures until now is utlilized and a web page is created. The main aim of the project is to create a webpage that can be shared along with our resumes to the companies to showcase our project development work. This will be helpful when we apply for a software development job. As part of this lab two HTML pages are designed. The main page contains our resume and other features like external API call, digital clock, analog clock and basic calculator functionality. The second webpage is mostly about how Web application programming and hacking course is structured. As part of the development HTML, Jquery, JavaScript and Angular JS have been used.

### General requirements (30 pts): 

+ First of all, a public repository was created in the github account. In the repository a folder named `project1` was created. Inside this folder `index.html`, `site.js`,`waph.html` and `README.md` were created. After that, necessary external scripts like JQuery, BootStrap and Angular were integrated to index.html file. HTML tags, div elements and bootstrap were used to display name, headshot, contact information and background related details. To make sure that Resume and functionalities are visible in single page, that page was divided into two sections. With resume content covering two-third of space and functionalities covering the other part. 
 ​
+ To create a link to new HTML page,i.e `waph.html` a clickable button was created using the bootstrap. Angular JS was used to trigger a function that redirects the user to the new page that shows course related content.
 ​
### Non-technical requirements (20 pts):

+ As part of non-technical requirement, first of all bootstrap was added to the HTML page. Almost all HTML tags are integrated with bootstrap. Creating buttons, text fields, using containers and dividing the page into two parts are some of the functionalites that uses bootstrap.

+ A page tracker that shows how many people have visited from which country has been added to the page at the bottom as non-technical requirement. For the tracker `https://flagcounter.com/` website was accessed and code for tracker was created on the website. The necessary code was integrated to this webpage at the end of the page.

### Technical requirements (50 pts):

#### Basic JavaScript code (20 pts):

+ In this page jQuery and Angular JS open-source JavaScript library have been used. Angular JS in particular has been used to create a button that directs to a new page containing course information. Angular JS is even used to create an additional feature that does basic calculator operations. The calculator functionality is build in the second part of index.html page. In this we can use basic operations like addition, subtractions, multiplications and division. There is character limit of 7 characters placed on the text field to restrict unwanted inputs on the text field for now. Along with these functionalites, digital clock, analog clock and show/hide email functionality have also been added using jQuery and JavaScript.

+ Two public Web APIs integration

1. Joke API `https://v2.jokeapi.dev/joke/Programming?type=single` is used to integrate jokes to webpage. To show joke for every one minute, `setInterval()` method has been used. The joke api functionality can be found at the end of the second section of index.html page.

2. `https://api.weatherbit.io/v2.0/current` API was used to integrate the second API. As part of the implementation, a free account for weatherbit was created and API key was generted. HTML tags that would display weather image and temparature related values were created. At the end, JQuery get function was used to get a set of data, in which temperature as well as weather icon was extracted and attached to HTML elements in the webpage.

+ Use JavaScript cookies to remember the client (10 pts): If first-time visit, display a message "Welcome to my homepage!", otherwise, display a message "Welcome back! Your last visit was <the date/time of last visit>"

+ As part of this implementation a div was created on top of the webpage. The session of the visiting user was stored `document.cookie`. When the user visited the website for the first time, then a welcome message was displayed for the user. But when the used visited the website again then the last date and time of the used is displayed to the user. 
