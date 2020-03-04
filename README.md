# My Recipes

This is an app that allows the user to input all their favourite recipes in one place. Here is a link to the [live site](https://rwright-express-mongo-example.herokuapp.com/recipes).

## User Stories
1.  The user should be able to sign up, create a username and password. And log in to make any edits or add and delete recipes.
1.  The user should be aware when they are logged in. (dynamic welcome message visble on every page).
1.  The user should be able to view the recipe index and show pages whether signed in or not.
1.  The user should be able to see clearly the ingredients needed and the steps required in the correct order.
1.  The user should be able to copy the ingredients in order to add them to a shopping list.

## Technology Used
- Node.js
- Mongoose
- Express
- EJS
- Mongodb
- Flexbox

## Approach Taken

I began by building the basic file structure, ensuring to follow the MVC approach to keep things organised. I installed all of the packages I would need including; express, express-session, mongoose, method-override, bcrypt, ejs and dotenv.

I then created the recipe controller to manage the main routes. I employed RESTful route conventions to help with organisation. I created the recipe schema in order to populate the page and made the create route. once these were set up I could work on show, edit and delete to make the app full Crud.

After the basic functionality of the app was complete I could then focus on creating the user and session routes. I used bcrypt to encrypt the password.

Once I had all the routes set up and all the pages the user would see became clear I used CSS and flexbox to style the pages. I used ejs partials for the head (to attach the css ) and nav (so this would be visible on every page to give the app a consistent look/feel). I utilised google image search to find images that helped to create the feel i was looking for. The theme is obviously food/cooking so the nave is a chopping board. The edit and create forms show various ingredients, and for the log in/ sign up pages I selected pictures of happy chefs so the user can hopefully picture themselves.

I then decided to add another small feature which allowed the user with the click of a button to add all the ingredient to their clipboard, allowing them to create a shopping list with ease. Its a small feature but I felt that it really added to the user experience and made the app more usable.

## Features I would Like To add

1.  The ability for signed in users to add comments to recipes that they like.
1.  A like button, this would allow for recipes to be ranked by popularity and be displayed more prominently.
1.  I would like the user to be able to add recipes to a favourites page where they can collect all their most used for ease of use.

## Unsolved Problems

I had been looking into the comments idea however with time running out I felt it would be foolish to attempt such a big functionality change in the final day. This will be my first improvement going forward.

I would also like to take a look at the copy functionality. At present it copies everything in one line. I would like it to be formatted as a list after it is copied. I would also like there to be a visual indication that the copy button has worked  on the page.(tool-tip potentially).

I also had some issues with styling. I managed to get it (in broad strokes) to look how I want. However the cards on the index page display weirdly at certain widths. 
