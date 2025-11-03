window.onload = function ()
{
    console.log("Page Loaded");
    console.log(localStorage.getItem("nightMode"))
    if(localStorage.getItem("nightMode") == "false")
    {
        console.log("Night Mode");
        toggleNightMode();
    }     
}

function toggleNightMode(storeState = false)
{
    const nm = document.getElementById("nm");
    const moon = document.getElementById("moon");
    const toggle = document.getElementById("toggle");
    const navToggle = document.getElementById("nav-button");

    nm.disabled = !nm.disabled;

    if(storeState)
    localStorage.setItem("nightMode", nm.disabled);

    // light mode
    if(nm.disabled == true)
    {
        moon.src = "./svg/moon_stars_24dp_191919_FILL0_wght400_GRAD0_opsz24.svg";
        toggle.src = "./svg/toggle_off_24dp_191919_FILL0_wght400_GRAD0_opsz24.svg";
        navToggle.src = "./svg/menu_24dp_191919.svg";
    }
    else
    {
        moon.src = "./svg/moon_stars_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";
        toggle.src = "./svg/toggle_on_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg";
        navToggle.src = "./svg/menu_24dp_F3F3F3.svg";
    }
}