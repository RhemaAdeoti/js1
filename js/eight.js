
//Number 8
document.getElementById('less').style.display='none';
function show(){
    var moreText = document.getElementById("less");
    var showMoreLink = document.getElementById("showMore");

    if(moreText.style.display === "none") {
        moreText.style.display = "inline";
        showMoreLink.style.color = "green";//Change color to red when showing text

    }else{
        moreText.style.display = "none";
        showMoreLink.style.color = ""; //Revert to original color when hiding text

    }
}