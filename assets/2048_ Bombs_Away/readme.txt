Eamon Howell, Brendan Moroney, Connor Johnson

Why is our game worth the 100 points?

Modified Game Logic:
We successfully recreated the game of 2048, and added a unique twist: bombs! We implemented the main aspects of 2048: movement, tiles, scoring, and loss 
mechanics. In addition to these key features, we added a reset button so the user didn't have to reload the page every time they lost. The exciting part 
of this game is where it differs from 2048: the bombs. In order to allow the user to pick (unless they are about to lose) when they want to deploy their 
bomb, we added a disableable bomb button. When this button is pressed, the screen will change color and a message will appear indicating the bomb should 
be placed. The program then creates event handlers for each of the cells, allowing user selection. When the user selects a cell, the surrounding cells are
set accordingly and the event handlers of all cells are removed. This prevents the user from accidentally bombing their best tile.

User Interface:
Although simple, our user interface was designed to allow for the majority of user focus to be on gameplay. One good example of this design is how the 
instruction screen will never block the users view of the grid. Both arrow keys and the html buttons will effect the game in the same way, meaning they 
can be used interchangably. We achieved this functionality by first creating an event listener for the keypresses, but also making the buttons throw an 
event in the same way a keypress would. This allows the user flexibility, which is important when designing a game.


