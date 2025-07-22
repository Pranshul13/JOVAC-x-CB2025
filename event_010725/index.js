//event delegation in js
const menuItem = document.getElementById("menuItem");

menuItem.addEventListener("click",(event)=>{
    if(event.target.tagName ==="LI"){
        console.log("Clicked on :",event.target.textContent);
    }

})

//DYANAMIC ELEMENTS
const newitem = document.createElementNS("li");
newitem.textContent = "Logon";
//menuItem.append(newitem);
menuItem.appendchild(newitem);
