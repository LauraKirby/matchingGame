var body = document.getElementsByTagName('body')[0];
var graphDiv; 
var timeoutID;
//var image = ("https://farm9.staticflickr.com/8608/16237423798_dc48d24514_b.jpg"); 
var newColor = "yellow"; 
var classNameGreen = "originalState";

function ogState (){
  for(var i = 0; i < 9; i++){
    graphDiv = document.createElement('DIV');
    body.appendChild(graphDiv);
    graphDiv.className = classNameGreen; 
    graphDiv.style.backgroundColor = changeToNewColor(); 
  } 
};
ogState(); 

function changeToNewColor () {
  graphDiv.addEventListener("click", function(){
       this.style.backgroundColor = newColor;
    });                    
}

// function changeToImage () {
//   graphDiv.addEventListener("click", function(){
//       // this.className = "laura";
//        this.style.backgroundColor = originalColor;
//     //   this.style.backgroundColor = ;
//       //  function switchToGreen() {
//       //  var timeoutID = graphDiv.setTimeout(slowAlert, 2000);
//       // }
//     }
// };

//  var flipToImage = function ( ) {
//   graphDiv.addEventListener("click", function(){
//       // this.className = "laura";
//        this.backgroundColor = originalColor;
//     //   this.style.backgroundColor = ;
//       //  function switchToGreen() {
//       //  var timeoutID = graphDiv.setTimeout(slowAlert, 2000);
//       // }
//     });
// }()();

//flipToImage(); 


// function switchToGreen() {
//   var timeoutID  = window.setTimeout(code, [delay]);
//   timeoutID = window.setTimeout(slowAlert, 2000);
// }