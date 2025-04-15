document.getElementById("button1").addEventListener("click", showAndroid);
document.getElementById("button2").addEventListener("click", showApple);


function showAndroid (){
    document.getElementById("logo").src = "img/Android-Logo.jpg";
    document.getElementById("explore").innerHTML = "Android Home";
    document.getElementById("explore").href = "https://android.com";
    document.getElementById("explore").style.background = "#a4c93b";
    document.getElementById("page").style.background = "#a4c93b";
    //font family
    document.getElementById("button1").classList.add("green");
    document.getElementById("button2").classList.remove("active");
    document.getElementById("font").style.fontFamily = "Roboto, sans-serif";
}

function showApple (){
    document.getElementById("logo").src = "img/Apple-Logo.jpg";
    document.getElementById("explore").innerHTML = "Apple Home";
    document.getElementById("explore").style.background = "#b6bcca";
    document.getElementById("explore").href = "https://www.apple.com/&#39";
    document.getElementById("page").style.background = "#b6bcca";
    document.getElementById("button2").classList.add("active");
    document.getElementById("button1").classList.remove("green");
    document.getElementById("font").style.fontFamily = "'Brygada 1918', sans-serif";
}