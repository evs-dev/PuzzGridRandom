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
