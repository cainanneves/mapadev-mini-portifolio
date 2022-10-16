//const abas = document.getElementsByClassName("tab")
const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return
        }

        selectTab(tab)
        selectTabInfo(tab)
    })
});

function selectTab(tab) {
    const selectedTab = document.querySelector(".tab.selected")
    selectedTab.classList.remove("selected")
    tab.classList.add("selected")
}

function selectTabInfo(tab) {
    const selectedInfo = document.querySelector(".info.selected")
    selectedInfo.classList.remove("selected")

    const elementIdTabInfo = `${tab.id}-info`

    const showedInfo = document.getElementById(elementIdTabInfo)
    showedInfo.classList.add("selected")
}