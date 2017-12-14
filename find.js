var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var targetX = boxWidth/2 //Math.floor(Math.random() * boxWidth);
var targetY = boxHeight/2 //Math.floor(Math.random() * boxHeight);


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

var distance = function (x0, y0, x1, y1) {
    return Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
};


var findIt = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var dist = distance(targetX, targetY, x,y);
    var r = Math.floor((1-dist/farDist) *204) + 25;
    var g = Math.floor((1-dist/farDist) * 204) ;
    var b =  Math.floor((1-dist/farDist) *255) + 51;
    box.setAttribute("style" ,"background-color: rgb(" + r + "," + g + "," + b + ");");  
   
};

var farDist = distance(targetX, targetY, 0, 0);
box.addEventListener("mousemove", findIt);

