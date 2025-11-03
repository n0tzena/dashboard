var displayed = false;

function displaySettings()
{
    const settingsMenu = document.getElementById("settings");
    // se estiver aberto, fecha e vice versa
    if(displayed)
    {
        settingsMenu.classList.add("settings-hidden");

        displayed = false;
    } 
    else {
        settingsMenu.classList.remove("settings-hidden");

        displayed = true;
    }
}