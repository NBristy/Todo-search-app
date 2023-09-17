# TODO app code challenge

This project is a base (you get started with react build and hot reloading already setup) for a simple Reactjs coding challenge. Please read carefully the below instructions.
There is a section on how to edit and submit your challenge, and a following section explaining the requirements.


# IMPORTANT! READ before starting
By default for anonymous users (non logged in), your code and app will only remain on glitch.com for 5 days. In order to not lose your challenge, please create a glitch.com account and log in to glitch.com before proceeding.

The following README contains instructions to guide you through the coding challenge, please read them carefully.

## How to create and submit your app using glitch

0. **Login to glitch**: make sure you are logged in to glitch.com

1. **Clone**: Go to this URL: [https://glitch.com/~todos-search-app](https://glitch.com/~todos-search-app) and click the `Remix your own` button to clone the code. This will copy all the code to a new, randomly generated URL (e.g. https://glitch.com/edit/#!/capable-toothpaste). This is your URL to code on, no other candidates will have this URL.

2. **Code**: You can edit the code directly in the Glitch editor or use your editor of choice (VSCode, Sublime, etc) and copy paste the files into Glitch. Git import and export is also available in the Tools menu on the bottom left. How you edit the code is entirely up to you, so long as your finished work is viewable at the URL created in the previous step.

> **NOTE**: Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

4. **Turn in**: When you finish coding, send your URL to us so we can review your code.


## Glitch help!

This challenge is hosted on glitch please see below for any help on how to use it.

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Want more details about React on Glitch? We've got a [Help Center article](https://help.glitch.com/kb/article/112) for you.
- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.


# this challenge's requirements

The react app should have 2 pages:
- a top page (route: '/') for displaying/searching a list of TODO items
- a "todo details" (route: '/todos/<todo item number>') page to display the details of a specific todo item

## Top page requirements

- the page should display the list of todo items fetched from the https://jsonplaceholder.typicode.com/todos API (visit the URL to see the data format)
- items should be displayed in a grid, with each card having 250px width, and 20px between the cards. Those sizes are fixed for all screen sizes.
- Design should be responsive to be useable on various screen sizes, down to mobile phone.
- card background should be 'green' for items which are completed, and 'crimson' for items which are not completed
- each card should show the todo item number, and the first 20 characters of the item title
- the top of the page should have an search input field. When text in input inside it, only items which have a title containing the search text should be be displayed. When nothing is input in the field the whole list of items is displayed.
- clicking on a todo item's card should go to the todo item details page for that item
  
Example:
![screenshot](https://cdn.glitch.com/69d5f470-9f1e-492f-a706-2218599bf06d%2FScreen%20Shot%202021-06-14%20at%2011.28.49.png?v=1623637831386)


## todo item details page requirements

- the page should display the following fields
  - user name
  - item number
  - item title
- the data comes from the 2 following APIs:
  - todo item details: `https://jsonplaceholder.typicode.com/todos/{item #}` (eg. https://jsonplaceholder.typicode.com/todos/1)
  - user details `https://jsonplaceholder.typicode.com/users/{user id}` (eg. https://jsonplaceholder.typicode.com/users/1)
- for this page, look and feel is not specifically considered in this challenge

![screenshot](https://cdn.glitch.com/69d5f470-9f1e-492f-a706-2218599bf06d%2FScreen%20Shot%202021-06-14%20at%2011.40.10.png?v=1623638430344)
  

## non-functional requirements
  
On top of the requirements above, items we will be looking at include:
- Code quality (readability, use of modern syntax, linting...)
- Support for edge cases (API error, API slow to respond...)
- app architecture (folder structure, code spliting, ...)
- automated test would be a big plus (they cannot run on glitch, so you'd most likely develop locally from you github repo, then sync it to glitch using the import/export function)


## to run the project
- yarn
- yarn start
- http://localhost:3000/

## to test the pages
- yarn test