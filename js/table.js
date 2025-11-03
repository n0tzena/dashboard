var largerTable = false;

function toggleLargerTable()
{
    const table = document.getElementById("table");

    if(!largerTable)
    {
        table.classList.add("max-width");
        largerTable = true;
    }
    else
    {
        table.classList.remove("max-width");
        largerTable = false;
    }
}