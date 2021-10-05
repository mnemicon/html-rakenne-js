/*
var para = document.createElement("p");
var node = document.createTextNode("Tämä on kappaleen teksti");
para.appendChild(node);

document.getElementsByTagName("body")[0].appendChild(para); */

var divi = document.createElement("div");

// lisää diviin id "div1"
divi.id = "div1";
document.getElementsByTagName("body")[0].appendChild(divi);

//Lisätään 1 kappale div#div1 sisään.
var para = document.createElement("p");
para.className = "para1";
var node = document.createTextNode("Tämä on ensimmäisen kappaleen teksti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas assumenda delectus nobis illo, sapiente consequuntur fugit eius magni ipsum quam nemo. Voluptatem veniam quod aliquid sapiente aut fugiat ullam accusamus illum ducimus deleniti id similique natus harum enim, iure esse corporis in magnam! Sint voluptatibus beatae eveniet soluta sed?");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

//Lisätään 2. kappale div#div1 sisään.
var para = document.createElement("p");
para.id = "p2";
var node = document.createTextNode("TÄhän tulee toinen teksti.");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

//Lisätään 3. kappale saman divin sisään:
var para = document.createElement("p");
para.id = "p3";
var node = document.createTextNode("Thänään tulee sel kolmes kipale.")
para.appendChild(node);
document.getElementById("div1").appendChild(para);
