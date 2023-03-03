let li = document.querySelectorAll(".group button");
let imgs = document.querySelectorAll(".glary .art");
let up = document.querySelector(".up");

li.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("active");
        }
        e.target.classList.add("active");
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";
        }
        document.querySelectorAll(e.target.dataset.cat).forEach(function (ele) {
            ele.style.display = "block";
        });
    });
});

window.onscroll = () => {
    if (this.scrollY >= 1000) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};
up.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
