//Number 2
//Get All the .box elements
//to declare a variable you can use Var,const or let
const boxes = document.querySelectorAll(' .box')
//Loop through each .box element
boxes.forEach(box => {
    //Add event listener for mouse enter event
    box.addEventListener('mouseenter', () => {
        //change background color of .container when hovered
        document.querySelector('.container').style.backgroundColor ='black';
    });
    //Add event listener to mouseleave event
    box.addEventListener('mouseleave', () => {
        //Reset background color of .container when not hovered
        document.querySelector('.container').style.backgroundColor = '';
    });
})