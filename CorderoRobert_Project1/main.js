snakes = {
    "Pie-Bald":["Is a morph that causes white patches to appear randomly on the snake"],
    "Orange Dream":["Causes the normally almost olive green colors of the python to gain an orange color."],
    "Blonde":["A yellow color overtakes the green of the snake, hence the name blonde"],
    "Champagne":["Causes the snake to lose it black markings and become a speckled brown to silver-ish color."],
    "Cinnamon":["Creates a darker and slightly more brown color to overtake the entirety of the snake."],
    "Ghost":["Is like diluting the normal colors of the snake, almost like a washed out watercolor."],
    "Mojave":["Makes the black markings lighten slightly and gain some subtle yellow hues over the green."],
    "Banana":["Makes the snake a vibrant yellow and white color along the whole of the snake."]};

console.log("Choose an option from the list to see information about the morph.")

for (var i in snakes){
    console.log(i)
}
let userInput = prompt("Choose a morph from the console to view:")

console.log(snakes[userInput]);