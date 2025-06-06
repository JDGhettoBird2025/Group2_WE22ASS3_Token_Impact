//Get Current Date
const date =(date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth();
    const years = date/getFullYear();
    return `${days}/${months}/${years}`;
}

const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');
const navlogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () =>{
    const elem = document.querySelector('.highlihgt')
    const homeMenu = document.querySelector('#Home-page')
    const tokenMenu = document.querySelector('.#Token-page')
    const leaderboardMenu = document.querySelector('.#Leaderboard-page')
    const contactMenu= document.querySelector('#Contact-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        tokenMenu.classList.remove('highlight')
        return 
        } else if (window.innerWidth > 960 && scrollPos < 1400){
            TokenMenu.classList.add('highlight')
            HomeMenu.classList.remove('highlight')
            LeaderboardMenu.class.remove('highlight')
            return
        } else if (window.innerWidth > 960 && scrollPos < 2345){
            leaderboardMenu.class.add('highlight')
            TokenMenu.classList.remove('highlight')

            return
        }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menubars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menulinks.classList.remove('active')
    }
}

menulinks.addEventListener('click', highMobileMenu);
navlogo.addEventListener('click', highMobileMenu);

//Get Data
const nameInput = document.querySelector("name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;

    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;

    }
    if(!errorFlag){
        success.innerText = "Success!";
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length, i++;){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.add("error-border");
    message.classList.add("error-border");

} 

//Check to see if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


//Leaderboard Ranking
const tabs = document.querySelector(".lboard_tabs ul li");
const today = document.querySelector(".today");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const items = document.querySelectorAll(".lboard_item");

tabs. forEach(function(tab){
    tab.addEventListener("click,", function(){
        const currentdatali = tab.getAttribute("data-li");

        tabs.forEach(function(tab){
            tab.classList.remove("active")
        })
        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none"; 
        })

        if(currentdatali == "today"){
            today.style.display = "block"
        }
        else if(currentdatali == "month"){
            month.style.display = "block";
        }
        else{
            year.style.display = "block";
        }
    })
})



