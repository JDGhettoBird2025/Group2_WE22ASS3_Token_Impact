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

