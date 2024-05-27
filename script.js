var cor1 = "#8b0089";
var cor2 = "1e00ff";

var altenarCor = True;

document.getElementById("botao").addEventListerner("click", function(){
    var body = documet.getElementByID("corpo");
   
    var randomNumber = Math.random();
   
    if (randomNumber < 0.5) {
        body.style.backgound = "linear-grandient(" + cor1 +"," + cor2 + ")";
    } else {
        body.style.backgound = "linear-grandient(" + cor2 +"," + cor1 + ")";
    }
});