// var classes = ["table table-cell first", "table table-cell second", "table table-cell third"]; 
// var elms = {};
// var n = {}, nclasses = classes.length;
//   var clicked = false;


// var handlers = [
//     // on first click:
//     function() {
//        $(".noPackage").css("backgroundColor", "#0066ff");
//        $(".noPackage").css("color", "white");
//     },
//     // on second click:
//     function() {
//        $(".noPackage").css("backgroundColor", "white");
//         $(".noPackage").css("color", "black");
//     }
//     // ...as many more as you want here
// ];

// var counter = 0;
// $(".noPackage").click(function() {
//     // call the appropriate function preserving this and any arguments
//     handlers[counter++].apply(this, Array.prototype.slice.apply(arguments));
//     // "wrap around" when all handlers have been called
//     counter %= handlers.length;
// });


// function changeColor(classname, color) {
//       //  console.log(n);
//     var curN = n[classname];
//     //console.log(classname,curN);
//     for(var i = 0; i < curN; i ++) {
//         elms[classname][i].style.backgroundColor = color;
         
//             }
//     }

// for(var k = 0; k < nclasses; k ++) {
//     console.log(classes[k] );
//     var curClass = classes[k] ;
   
    
   
//    elms[curClass] = document.getElementsByClassName(curClass);
//  n[curClass] = elms[curClass].length;
//     var curN = n[curClass];     
//     for(var i = 0; i < curN; i ++) {

//         $(elms[curClass][i]).hover( 
         

//             function() {
//          if(  document.getElementById(this.className).checked ===false){   

//             changeColor(this.className, "#E0E0E0");
      
//         }},

  
//             function() {
//        if( document.getElementById(this.className).checked ===false){

//             changeColor(this.className, "white");
//       }
//        }
//         );
  

//          elms[curClass][i].onclick = function() {
            
//             if(clicked === false){

//             changeColor(this.className, "#0066ff");
//               document.getElementById(this.className).checked = true;
//            for(var i = 0; i < curN; i ++) {
        
//               if(elms[this.className][i].querySelector(".blueAndUnderlined")){
//                elms[this.className][i].querySelector(".blueAndUnderlined").style.color = 'white';       
//               }
//                elms[this.className][i].style.color = 'white';
//                 }
//                 clicked = true;
           
//             }
//             else{
//                 changeColor(this.className, "white");
           
//                 document.getElementById(this.className).checked = false;
//                 for(var i = 0; i < curN; i ++) {
    
//               if(elms[this.className][i].querySelector(".blueAndUnderlined")){
//                elms[this.className][i].querySelector(".blueAndUnderlined").style.color = '#0066ff';       
//     }                elms[this.className][i].style.color = 'black';
         
//          }
//                 clicked = false;
            
//      }
                

             
 
//         };

//     }
// };
// ******************************** //
var x =0;
var val ;
for(var i = 1; i <= 7; i ++) {
   if(i === 7){i =8};
$(".checkbox" + String(i)).change(function() {
    // this will contain a reference to the checkbox   
  
    str = this.getAttribute("class")
    index =str.charAt(str.length-1);
    if (this.checked) {
    $('.table-cell.second .check' + String(index)).prop( "disabled", false ); //Enable
        x= x+1;
        
    } else {
    $('.table-cell.second .check' + String(index)).prop( "disabled", true ); //Enable  
$('.table-cell.second .check' + String(index)).prop("value", '');
    x= x-1;
}
 $('.noOfChecked').prop("value", String(x));
}
)};

for(var i = 1; i <= 7; i ++) {
 if(i === 7){i =8};
$(".check" + String(i)).change(function() {
val =0;

for(var a = 1; a <= 6; a ++){
console.log('here');
var input =$(".check" + String(a)).val();
console.log('there',input);
if( input ){
val = val + parseInt(input);
console.log('there awy',val);

}
 $('.precOfChecked').prop("value", String(val));
if(val !== 100){
    document.getElementsByClassName("precOfChecked")[0].style.color= 'red';
}
else{
 document.getElementsByClassName("precOfChecked")[0].style.color= 'black';   
}
}
})};    


for(var i = 5; i <= 7; i ++) {
$(".checkbox" + String(i)).change(function() {
    // this will contain a reference to the checkbox   
    str = this.getAttribute("class")
    index =str.charAt(str.length-1);
    console.log(index, typeof index);
    if (this.checked) {
    for(var j = 1; j <= 8; j ++) {
    $('.table-cell.second .check' + String(j)).prop( "disabled", true ); //Enable
     $('.table-cell.second .check' + String(j)).prop("value", '');
     if(j != index){
     $(".checkbox" + String(j)).prop('checked',false);
     $(".checkbox" + String(j)).prop('disabled',true);
   }

}
   $('.table-cell.cell-feature  .other').prop("value", '');
  $('.precOfChecked').prop("value", '0');     
    } else{
    for(var j = 1; j <= 8; j ++) {
     $(".checkbox" + String(j)).prop('disabled',false);
}}
}
)};





