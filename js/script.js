var button = document.querySelector(".show-cat");
//console.log(button.innerHTML);
var cat = document.querySelector(".cat");
console.log(cat.innerHTML);

button.addEventListener("click", function() {
    cat.classList.add("show");
});