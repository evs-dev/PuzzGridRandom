
const baseURL = "https://www.puzzgrid.com/grid/";
const maxGrids = 30000;

function random() {
    let gridNumber = Math.floor(Math.random() * maxGrids);
    let url = baseURL + gridNumber.toString();
    open_site_in_new_tab(url);
}

function open_site_in_new_tab(url) {
    window.open(url, '_blank')
}
