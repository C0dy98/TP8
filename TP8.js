window.onload = function(){
      document.getElementById("h1").style.color="yellow";
    document.getElementById("ingredients").onclick = function() {m1()};
    function m1() {
        document.getElementById("i").style.color="black";
    }document.getElementById("equipment").onclick = function() {m2()};
    function m2() {
        document.getElementById("e").style.color="black";   
    }
    document.getElementById("directions").onclick = function() {m3()};
    function m3() {
        document.getElementById("d").style.color="black";   
    }
    document.getElementById("h1").onclick = function() {m4()};
    function m4() {
        document.getElementById("h1").style.color="white";
    }
    const myDiv = document.getElementById("my-div");
    myDiv.innerHTML = "I hope that you <strong>enjoy</string>"
}