// Splide banner image
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel').mount();
});

Splide.defaults = {
    type: 'loop',
    arrows: boolean = false,
    autoplay: true,
    interval: number = 3000
}

// Banner Mobile
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-banner').mount();
});

// Banner Mobile
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-product__mb').mount();
});

// comment detail product
const titles = document.querySelectorAll('.comment-title h4');
titles.forEach((title) => {
    title.onclick = function () {
        document.querySelector('.comment-title h4.active').classList.remove('active')
        this.classList.add('active')
    }
})


// table của trang Đơn hàng của tôi
var count = 0;
        function toggleDiv() {
           var myDiv = document.getElementById("myDiv");
           if (count % 2 == 0) {
              myDiv.style.display = "block";
           } else {
              myDiv.style.display = "none";
           }
           count++;
        }