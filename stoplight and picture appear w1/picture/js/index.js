// new way to do it wiht es6 javascript- make it a varible and if you have any parameters you can put them in the parenthases
// const onClick = () => {
//     document.getElementById("tree").style.display = "initial";
// };

function onClick(){
    //document.getElementByID is a JS funciton that is saying take this document (the HTML one) and search for an element that has the ID "tree". REMEBER_ it will only be one so it wont be hard to find. 
    // the methods after that are accsessing that elements css style attribute and changind the display value from the original to initial -- which means it sets it to the default value- aka if no style attributes were changed.
     document.getElementById("tree").style.display = "initial"; //read all the display attributes here https://www.w3schools.com/cssref/pr_class_display.asp
  
}

