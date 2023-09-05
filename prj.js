window.onload = function() {

    const HELLO = document.getElementById("Hello");
    HELLO.style.color = "#f23455"
    HELLO.addEventListener("mouseover" , function () {
        HELLO.style.color = "#a23feb";
    })

    HELLO.addEventListener("mouseout" , function () {
        HELLO.style.color = "#f23455"
    })
    
    console.log("hello");
    
}

