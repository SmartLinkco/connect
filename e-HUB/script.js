/*windows.onscroll = function(){
    myFunction();
}
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;*/

let books = document.querySelectorAll('.books');

function payment (){
    window.location.href = "https://paystack.com/pay/e-HUB";
}

books.forEach((books) => {
  books.addEventListener('click', (e) => {
    payment();
  })
})

let software = document.querySelectorAll('.software a');

software.forEach((software) => {
    software.addEventListener('click', (e) => {
      payment();
    })
  })


/*function myFunction(){
    if(window.scrollY >= sticky){
        console.log("hi")
        navbar.classList.add("sticky");
        navbar.classList.add("shift");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("shift");
    }
}*/