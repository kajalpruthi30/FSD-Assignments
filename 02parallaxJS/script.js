let text = document.getElementById("text")
let hill1 = document.getElementById("hill1")
let hill4 = document.getElementById("hill4")
let hill5 = document.getElementById("hill5")
let leaf = document.getElementById("leaf")

window.addEventListener('scroll', () => {

    let value = window.scrollY;

    // 1. Down
    text.style.marginTop = value * 2.5 + 'px';
    hill1.style.top = value * -0.25 + 'px';

    // 2. Leaf - diagonal
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';

    // Towards left
    hill4.style.left = value * -1.5 + 'px';

    // Away from left
    hill5.style.left = value * 1.5 + 'px';

})