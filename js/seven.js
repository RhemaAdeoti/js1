
//number 7
document.getElementbyId('less').style.display = 'none';
function show() {
    var moreText = document.getElementById("less");
    var showMoreButton = document.getElementById("showMore");

    if(moreText.style.display === "none") {
        moreText.style.display = "inline";
        showMoreButton.textContext = "show less..."

    }else{
        moreText.style.display = "none";
        showMoreButton.textContent = "show more...";
    }
}