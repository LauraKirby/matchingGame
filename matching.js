var body = document.getElementsByTagName('body')[0];
var graphDiv; 
//var graphFunc = graph(); 
// var flipFunc = flip(); 

//function graph (){
// for(var i = 0; i < 9; i++){
//     graphDiv = document.createElement('DIV');
//     body.appendChild(graphDiv);
//   //  graphDiv.className = "laura";
//     //graphDiv.style.backgroundColor = "green"
//     //this.className = "";
//    // graphDiv.style.backgroundColor = "green"; 
//     graphDiv.style.width = "25%";
//     graphDiv.style.float = "left";
//     graphDiv.style.border = "1px solid black";
//     graphDiv.style.paddingBottom = "25%";
//   }

//     graphDiv.addEventListener("click", function(){
        
//        this.className = "laura"; 
//        //this.style.backgroundColor = "green";
//        console.log("bam"); 

// }



//     graphDiv.addEventListener("click", function(){
//  //      this.className = ""; 
//        this.className = "laura"
//        //this.style.backgroundColor = "green";
//        console.log("bam")
//     })

// }





for(var i = 0; i < 9; i++){
    graphDiv = document.createElement('DIV');
    body.appendChild(graphDiv);
  //  graphDiv.className = "laura";
    graphDiv.style.backgroundColor = "green"; 
    graphDiv.style.width = "25%";
    graphDiv.style.float = "left";
    graphDiv.style.border = "1px solid black";
    graphDiv.style.paddingBottom = "25%";
    
    graphDiv.addEventListener("click", function(){
 //      this.className = ""; 
       this.className = "laura"
      // this.style.backgroundColor = "green";
       console.log("bam")
    })
  }


// for (var j = 0; j < 9; j ++)


// var colors = ["red", "orange", "yellow", "green", "blue"];
// colors.forEach(function(anything){
//     var div = document.createElement("DIV");
//     body.appendChild(div);
//     div.style.width = "200px";
//     div.style.border = "1px solid black";
//     div.style.backgroundColor = anything;
//     div.style.paddingBottom = "10%"

//     div.addEventListener("click", function(){
//         color = this.style.backgroundColor;
//     });
// })
// var body = document.getElementsByTagName('body')[0];
// var newDiv;
// var color = "green";
// //var imageArray = ["http://images.clipartpanda.com/baby-forest-animal-clipart--9aTq7rcMy.png"]

// for(var i = 0; i < 9; i++){
//     newDiv = document.createElement('DIV');
//     body.appendChild(newDiv);
//     newDiv.style.backgroundColor = color;
//     newDiv.style.width = "25%";
//     newDiv.style.float = "left"; 
//     newDiv.style.border = "1px solid black";
//     newDiv.style.paddingBottom = "18%";
//     newDiv.addEventListener("click", function(){
//         this.style.backgroundColor = yellow;
//     })
// }



// var colors = ["red", "orange", "yellow", "green", "blue"];
// colors.forEach(function(anything){
//     var div = document.createElement("DIV");
//     body.appendChild(div);
//     div.style.width = "200px";
//     div.style.border = "1px solid black";
//     div.style.backgroundColor = anything;
//     div.style.paddingBottom = "10%"

//     div.addEventListener("click", function(){
//         color = this.style.backgroundColor;
//     });
// })