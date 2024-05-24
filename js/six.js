//number 6
function addBox() {
    //Create a new div element
    var newBox = document.createElement('div');
    //Add class "box" to the new div
    newBox.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sint sunt ducimus minima ';
    //Append the new box to the container
    document.querySelector('.container').appendChild(newBox);
}
// Add an event listenerto the button
    document.getElementById('addBox').addEventListener('click', addBox);