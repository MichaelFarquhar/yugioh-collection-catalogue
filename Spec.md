# Feature

Update the UI and data structures to support multiple games, more than just yugioh decks alone. Currently will also support gundam. But code and structure should be expandable for any future additions.

## Format Rename

"Format" will be renamed across the app to "category" and "categories".

## Files

/src/data:

- Keep decks.json. Convert format.json to be "category.json". Put each inside an "yugioh" folder. Then create a "gundam" folder with dummy date for decks.json and category.json

/public/images:

- Keep decks. Rename formats to categories. For both, create a "yugioh" folder inside and move current files inside there. Create second folders in each called gundam and add fake data for only 2 decks.

With these new folders, they must be handled in the respective files depending on what the current game is

## Current Game

There is will be a toggle button flexed right in the header. Make this a styling button seperated by a diagonal dash. The button will currently divide between Yugioh and Gundam. When either is selected, it will set the current game as either "yugioh" or "gundam". These determine what folders above are being targetted.
"yugioh" should be the default

## Colors Theme For Current Game

The color theme of the website should change depending on whatever current game. Current orange color should stay as is for yugioh. For gundam, change it to a blue color.

## Website Title

Change Header text and index title text to "Michael's Decks".

## Questions

Ask me many clarfying questions before you start
