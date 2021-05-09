const switch_btn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.getElementById("input");

let value = "";

switch_btn.addEventListener("click", ()=>{
    if (switch_btn.checked == true){
        document.body.setAttribute("theme", "dark");
    }else{
        document.body.setAttribute("theme", "light");
    }
});

function display_num(num){
    display.value=display.value+num;
}

function cancel(){
    display.value="";
}

function calculate(){
    try {
    display.value=eval(display.value);
    }
    catch(err){
        display.value=err.name;
    }
}