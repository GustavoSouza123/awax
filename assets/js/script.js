const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

const nav = (n, scr)=>{
    cs('nav ul li')[n].addEventListener('click', function(){
        window.scrollTo({
            top: scr,
            behavior: 'smooth'
        });
    });
}

const appear = (n, scr)=>{
    if(window.scrollY <= scr) {
        cs('.default')[n].style.opacity = '0';
    } else {
        setTimeout(()=>{
            cs('.default')[n].style.opacity = '1';
        }, 100)
    }
}


window.onload = function load() {
    setTimeout(()=>{
        c('.slide-area h1').style.opacity = '1';
    }, 1000);
    setTimeout(()=>{
        c('.slide-area h2').style.opacity = '1';
    }, 2000);
    setTimeout(()=>{
        c('.slide-area a').style.opacity = '1';
    }, 2500);

    nav(1, 670);
    nav(2, 1170);
    nav(3, 1550);
    nav(4, 2400);
    nav(5, 3000);
    nav(6, 3680);
    nav(7, 4870);
    nav(8, 5320);

    document.addEventListener('scroll', function(){
        appear(0, 200);
        appear(1, 600);
        appear(2, 1000);
        appear(3, 1900);
        appear(4, 2500);
        appear(5, 3100);
        appear(6, 3700);
        appear(7, 4300);
        appear(8, 4800);
    });
}