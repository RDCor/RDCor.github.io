snakes = {
    "Basic": ["Regular color and markings of ball pythons."],
    "Pie-Bald":["Pie-Bald: Is a morph that causes white patches to appear randomly on the snake. This is a Pie-bald along with a couple other morphs"],
    "Orange Dream":["Orange Dream: Causes the normally almost olive green colors of the python to gain an orange color."],
    "Blonde":["Blonde: A yellow color overtakes the green of the snake, hence the name blonde."],
    "Champagne":["Champagne: Causes the snake to lose it black markings and become a speckled brown to silver-ish color."],
    "Cinnamon":["Cinnamon: Creates a darker and slightly more brown color to overtake the entirety of the snake."],
    "Ghost":["Ghost: Is like diluting the normal colors of the snake, almost like a washed out watercolor. This is a ghost with a few other morphs mixed in."],
    "Mojave":["Mojave: Makes the black markings lighten slightly and gain some subtle yellow hues over the green."],
    "Banana":["Banana: Makes the snake a vibrant yellow and white color along the whole of the snake."]};

//console.log("Choose an option from the list to see information about the morph.")

//for (var i in snakes){
//    console.log(i)
//}
//let userInput = prompt("Choose a morph from the console to view:")

//console.log(snakes[userInput]);


function morphFunction (){
    let myList = document.getElementById("morphChoice");

    let desc = myList.options[myList.selectedIndex].text;

    el1 = document.getElementById("morphDesc")
    el1.innerText = snakes[desc];
    el2 = document.getElementById('drpImg').src = "Images/"+desc+".jpg";
    //el2 ='Images/'+desc+'.jpg';
    console.log(el2
    )
}