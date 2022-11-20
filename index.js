let count=0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
function increment() {
    count += 1;
    console.log("a")
    countEl.textContent   = count;
   

    
}
let dash = " - "

function save() {
   // count +=count
   
    saveEl.textContent += count 
    saveEl.textContent += dash
    count=0;
    countEl.textContent   = count;




    console.log(count)
}



//document.getElementById("count-el").innerText=Number(count);
