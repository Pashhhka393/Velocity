const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");


function hideTabs(){
    tabsItems.forEach(tab => tab.classList.add("hide"));
    tabsBtns.forEach(tab => tab.classList.remove("active"));
};

function showTab(index){
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}));