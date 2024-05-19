function appendToDisplay(input){
    if(document.getElementById("display") != null){
        document.getElementById("display").value += input;
    }else{
        console.error("Element not found");
    }
}

function clear_all(){
    document.getElementById("display").value = "";
}

function equals(){
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }catch(error){
        document.getElementById("display").value = 'Error';
    }
}

function erase(){
    document.getElementById("display").value = document.getElementById("display").value.replace(/.$/, '');
}
