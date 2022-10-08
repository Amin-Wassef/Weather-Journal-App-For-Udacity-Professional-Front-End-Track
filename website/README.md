At the beginning, an html and a css files were given.

Steps applied:

An enviroment was set up through the following steps:
    1) Testing the installed Node to check the version on my pc.
    2) Installing express, body-parser and cors packages from the terminal through npm and included them into a server.js.
    3) Setting a port for server running.
    4) Running the server from the terminal.
    5) Adding a GET route that returns the projectData object in the server code then, adding a POST route that adds incoming data to projectData (the POST route anticipates receiving three pieces of data from the request body
    temperature
    date
    user response).

I acquired API credentials from OpenWeatherMap website to use it and the base url to create global variables

An event listener was created for the element with the id: generate, with a callback function to execute when it is clicked.

The event listener function was three async functions were written through a chain of promises to get data from the website, store them and update the API:
    First: a GET request to get data from OpenWeatherMap website using a URL and a zip code.
    Second: a POST request to send client feeling and data received from the website to store them in the server (localhost) => and getting the three needed pieces of data in the server.
    Third: another GET request to get needed data stored in the localhost and update the API in the client side.