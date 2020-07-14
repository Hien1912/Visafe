var dot, quote;
var c = 0;


document.body.onload = function () {

    let lang = document.querySelector(".country");
    lang.onclick = function () {
        show(this);
    }

    lang.onmouseleave = function () {
        hide(this);
    }

    quote = document.querySelectorAll(".quote");

    dot = document.querySelectorAll(".quote-position .dot");

    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", function () {
            document.querySelector(".quote-position .dot.active").classList.remove("active");
            document.querySelector(".quote.active").classList.remove("active");
            this.classList.add("active");
            quote[i].classList.add("active");
            c = i;
        });

    }

    document.querySelector(".quote--prev").addEventListener("click", function () {
        c > 0 ? c-- : c = dot.length - 1;
        document.querySelector(".quote-position .dot.active").classList.remove("active");
        document.querySelector(".quote.active").classList.remove("active");
        dot[c].classList.add("active");
        quote[c].classList.add("active");
    });

    document.querySelector(".quote--next").addEventListener("click", function () {
        c < dot.length - 1 ? c++ : c = 0;
        document.querySelector(".quote-position .dot.active").classList.remove("active");
        document.querySelector(".quote.active").classList.remove("active");
        dot[c].classList.add("active");
        quote[c].classList.add("active");
    });

    window.addEventListener("scroll", function () {
        let scroll = document.querySelector(".section-banner").scrollHeight;
        scroll += document.querySelector(".section-intro").scrollHeight;
        scroll += 80;
        if (window.scrollY > scroll) {
            document.querySelector(".chat").style.display = "block";
            document.querySelector(".scroll-top").style.display = "block";
        } else {
            document.querySelector(".chat").style.display = "none";
            document.querySelector(".scroll-top").style.display = "none";
        }
    });
}


function show(e) {
    e.classList.toggle("show");
    return e;
}

function hide(e) {
    e.classList.remove("show");
    return e;
}