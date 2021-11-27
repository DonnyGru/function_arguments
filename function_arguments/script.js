
//First part
const paintWalls = function(){
    console.log("The wall has been painted red");
};

paintWalls();



//One argument
const paintWalls2 = function(color){
    console.log("The wall has been painted " + color);
};

paintWalls2('green');
paintWalls2('blue');
paintWalls2();


//Multiple arguments
const paintWalls3 = function(color , location){
    console.log("The " + location + " wall has been painted " + color);
};

paintWalls3("blue" , "east");





