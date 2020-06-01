const baseURL = "https://www.puzzgrid.com/grid/";
const maxGrids = 31312; // Approximate number of grids on PuzzGrid
                        // Last updated: 31/05/2020

let previousNumbers = [];

function random() {
    // Generate random puzzle number that hasn't been done this session
    let gridNumber = 0;
    do {
        gridNumber = Math.floor(Math.random() * maxGrids);
    }
    while (previousNumbers.includes(gridNumber));

    // Create and open PuzzGrid URL
    let url = baseURL + gridNumber.toString();
    openSite(url);

    // Add link to this grid in historyDiv
    addHistoryLink(gridNumber, url);

    // Save grid number so as to not open it again this session
    let length = previousNumbers.push(gridNumber);

    if (length >= maxGrids) {
        // Flush cache if somehow reached max number of grids this session
        previousNumbers = [];
    }
}

function openSite(url) {
    window.open(url, '_blank')
}

window.onload = function() {
    window.historyDiv = document.getElementById('history_div');
}

function addHistoryLink(gridNumber, url) {
    // Create link element
    let a = document.createElement('a');
    // Make the visible text the grid number
    a.innerHTML = gridNumber;
    // Make the URL the PuzzGrid link
    a.href = url;

    let div = window.historyDiv;

    // Insert a break as the first element in the history div
    div.insertBefore(document.createElement('br'), div.childNodes[0]);
    // Insert the link as the first element in the history div
    div.insertBefore(a, div.childNodes[0]);
}
