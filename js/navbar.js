var hidden = false;

function hideNavbar()
{
    const nav = document.getElementById("navbar");
    const mainDisplay = document.getElementById("main");
    const mainContainer = document.getElementById("main-container");
    const searchForm = document.getElementById("search-form");

    if(!hidden)
    {
        nav.style.display = "none";
        mainDisplay.classList.add("nav-disabled");
        mainContainer.classList.add("main-container-no-border");
        searchForm.style.marginLeft = "10px";

        hidden = true;
    }
    else
    {
        nav.style.display = "initial";
        mainDisplay.classList.remove("nav-disabled");
        mainContainer.classList.remove("main-container-no-border");
        searchForm.style.marginLeft = "0";

        hidden = false;
    }
}