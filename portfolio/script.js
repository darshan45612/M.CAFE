AOS.init({
    duration:1000,
    once:true
});

new Typed("#typing",{

strings:[

"Full Stack Developer",

"Frontend Developer",

"Python Programmer",

"UI Designer"

],

typeSpeed:70,

backSpeed:50,

loop:true

});

particlesJS("particles-js",{

particles:{

number:{value:100},

color:{value:"#00F5FF"},

shape:{type:"circle"},

opacity:{value:.5},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#00F5FF",
opacity:.3
},

move:{
enable:true,
speed:2
}

}

});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});
const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.animation = "grow 2s ease forwards";

        }

    });

});
new Typed("#contactTyping",{

    strings:[

        "Let's Build Amazing Projects Together.",

        "Have an Idea? Let's Talk.",

        "Let's Create Something Incredible.",

        "Ready to Collaborate?"

    ],

    typeSpeed:60,

    backSpeed:35,

    backDelay:1800,

    loop:true,

    showCursor:true,

    cursorChar:"|"

});

