# _Super Battle Game_

#### _This is a RPG that will allow a person to battle their inner child. | Feb 5th. 2020_

#### By _**Alex Skreen & Dusty McCord**_
[link to demo site coming](#)

## Description

This was a Epicodus class project. It is an RPG that allows a user to create a character and battle another character. 
It uses webpack and Jest testing. 

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone {link to repository}_ '

```sh
git clone Link-Here
```

4. navigate to the new folder that was created on your desk
```sh
cd folder name
```

5. run npm install
```sh
npm install
```
6. run development server
```sh
npm run start
```

7. edit files in '/src' to make changes to the project.
8. enjoy this project


## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------|:------:|:------:
|1 - The program allows a user to choose a Golden girl and will return a golden girl character | Pick Rose | Rose with standard properties. |
|2 - The program will allow a user to allocate points to armor and health based on a total of 100 points. | 70 to HP, 30 to Armor | 70 to HP, 30 to Armor |
|3 - The program will allow user 2 to select a character and allocate points. | Rose  + points | Rose + points |
|4 - The program will allow user 1 to start their turn by drawing from inventory or holding current inventory | Draw | randomly selected new item |
|5 - The program will allow user 1 to nap or attack | attack | attack user 2 |
|6 - The program will allow a user to win or lose an attack based off of an advanced algorithm | Roll Dice | Win |
|7 - If the user wins the HP score of the attacker will go down by 5 and the loser will go down by the attack total | attack 80 | User 1 (HP - 5), User 2 (HP - 80) |
|8 - The program will allow user 2 to draw or hold | hold | hold |
|9 - The program will allow user 2 to nap or attack. If nap the user heals |  nap | heal 5 HP |

## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [Jest](https://jestjs.io/)

## Useful tools

* [free icons @ icons8](https://icons8.com/)
* [free  icons @ fontawesome](https://fontawesome.com/)
---
* [Old School Gifs Search](https://gifcities.org/)
* [free images @ unsplash](https://unsplash.com/)
    * **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

    * _https://source.unsplash.com/400x400/?cat_
    * http://unsplash.it/500/500 - This will just return a random image the size of 500x500
---
* [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
* [CSS Grid Cheat Sheet](http://grid.malven.co/)
---
* [CSS Gradient BG Generator](https://mycolor.space/gradient)
* [CSS Basic Gradient Generator](https://cssgradient.io/)
---
* [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Dusty McCord_**

