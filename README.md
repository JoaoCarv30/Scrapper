This project is a JavaScript Vanilla and Node.js application that performs scraping on the Amazon API to retrieve specific data. The scraping is done using Cheerio, a library for efficient HTML parsing and manipulation. The data obtained in HTML is transformed into JSON format for easier processing.

Technologies Used :

Node.js: Used to create the scraping logic and build a REST API using the Express framework.
Cheerio: Library for HTML parsing and manipulation. Essential for extracting specific data from the Amazon API.
Axios: Used to make HTTP requests to the Amazon API and obtain data in HTML.
Express: Framework used to create a REST API for the application.

Features:

Scraping from the Amazon API: The application performs scraping on the Amazon API to retrieve relevant information.
HTML to JSON Transformation: Using Cheerio, the HTML data obtained is transformed into JSON format.
REST API: Created with Express, the application provides a REST API to access the retrieved data.

Frontend : 

The frontend is developed in JavaScript Vanilla and makes AJAX requests to the REST API created on the backend. Ensure you configure the routes and endpoints correctly to integrate the frontend with the backend.