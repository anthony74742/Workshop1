/* ***************************** */
/* *********HAUTEUR************* */
/* ***************************** */

const explication = document.getElementById("explication").getBoundingClientRect().top;
const explication2 = document.getElementById("explication2").getBoundingClientRect().top;
const explication3 = document.getElementById("explication3").getBoundingClientRect().top;
const personne = document.getElementById("personne").getBoundingClientRect().top
const body = document.getElementById("myBody").getBoundingClientRect().height;


console.log("1 : " + explication*0.90);
console.log("2 : " + explication2*0.90);
console.log("3 : " + explication3*0.90);
console.log("Hauteur page : " + body);



const navigation = document.querySelector('.img');
window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 0 &&  window.scrollY < (explication-(body*0.02))){
        navigation.classList.add("image");
        navigation.classList.remove("image2");
    } else if (window.scrollY > (explication-(body*0.02)) && window.scrollY < (explication2-(body*0.02))){
        navigation.classList.add("image2");
        navigation.classList.remove("image3");
    } else if (window.scrollY > (explication2-(body*0.02)) && window.scrollY < (explication3-(body*0.02))){
        navigation.classList.add("image3");
        navigation.classList.remove("image4");
    } else if (window.scrollY > (explication3-(body*0.02)) && window.scrollY < (personne-(body*0.05))){
        navigation.classList.add("image4");
        navigation.classList.remove("image5");
        document.getElementById("phone_main").style.zIndex = "0";
    } else if (window.scrollY > (personne-(body*0.05)) && window.scrollY < body){


    }
})


