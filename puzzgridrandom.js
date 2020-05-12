const baseURL = "https://www.puzzgrid.com/grid/";
const maxGrids = 30000;

function random() {
    let gridNumber = Math.floor(Math.random() * maxGrids);
    let url = baseURL + gridNumber.toString();
    openSite(url);
}

function openSite(url) {
    window.open(url, '_blank')
}
