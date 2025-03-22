const favBtn = document.querySelectorAll('.product-heart');

favBtn.addEventListener('click', function () {
    favBtn.classList.add("product-heartClick");
    alert('teste')
})