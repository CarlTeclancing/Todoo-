var message = document.getElementById("message");
var input = document.getElementById("input");
var btn = document.getElementById("btn");
var NewMessage = undefined;

btn.addEventListener("click", function(){
   NewMessage = document.createElement("li");
   if(input.value != ""){
    NewMessage.innerHTML = input.value + '<div id="btn-holder"><button id="del" onclick="clickMe()">delete</button> <button id="checked" onclick="checkbtn()">check</button></div>';
    message.appendChild(NewMessage);
   }
   input.value = "";
    });
function clickMe(){
     if(confirm("Do you want ot delete this item? ")){
         alert("Item Deleted!") ;

                NewMessage.innerHTML = "";
                message.appendChild(NewMessage);

         //document.getElementsById("li").remove;
        // message.innerHTML = "";
     }else{("item not deleted"); }
 };
 function checkbtn(){
     alert("Task have been completed!");
     const checkedItems = [];
     

 }

