//Random Restaurant button

const restArray = ['Black Cafe','Community Plate','Jerk XPress','The Brown Skillet'];

randomChoice = Math.floor(Math.random()* restArray.length);//random selection

//let randomChoice = restArray[0]; //trying with just one selection

// alert(randomChoice, restArray[randomChoice]);


 document.getElementById('randomEats').addEventListener('click', randomChoice); //one line

 alert(restArray[randomChoice]);


//let randomEatsButton = document.getElementById('randomEats');

//randomEatsButton.addEventListener('click', () => {

    //alert(restArray[randomChoice]);//random selection

   // alert(`${randomChoice}`);//one selection
//})