
let outputScreen=document.getElementById('outputscreen');

function display(num){
      outputScreen.value+=num;
}

function Calculate(){
      try{
            outputScreen.value=eval(outputScreen.value);
      }
      catch(err){
            alert("Please enter valid input");
      }
}

function Clear(){
            outputScreen.value="";
}

function Delete(){
outputScreen.value=outputScreen.value.slice(0,-1);
}