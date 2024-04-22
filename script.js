/*this is the javaScript for the first example.
lets go step by step to see how the code actually works.
* */
let wrapper = document.querySelector('.wrapper');    //getting access to the div with class of wrapper  and storing it to variable wrapper.
let counter=0;     //lets declare a counter variable for our while loop.
while(counter<50){    //implementing the while loop for creating new divs with class names "item" and then appending them to our wrapper class.
    let items= document.createElement("div");  //create a div every time program goes through this loop.
    items.classList.add("item");    //and name its class to "item"
    wrapper.appendChild(items);   //append the created div to wrapper class
    counter++;   //incrementing the counter value
}

// here we create a function for creating animation to our website lets go through it step by step.

function animatingBackground(){    //the function in which we implement the code for animation.
    anime({   //the basic structure of AnimeJs library. first step is to create an object
              // called anime with different properties that you can add them voluntary
        targets: '.item',         //here we choose the target. means we should chose what we want to animate. here we choose the item class.
        translateX: function () {     //then setting the translateX value as its a CSS property as well. so here we set its value to a function which
                                        //generate random values form (-1000,1000) and this shows the movement horizontally.
            return anime.random(-1000, 1000);  //the value for translateX is generated randomly by this function and returns a value from -1000 up to 1000 randomly
        },
        translateY: function () {     //then setting the translateY value as its a CSS property as well. so here we set its value to a function which
                                        //generate random values form (-600,600) and this shows the movement vertically.
            return anime.random(-600, 600);  //same as translateX just different values.
        },
        complete: animatingBackground,    //complete is used when you want the animation to keep going and never stop. so you call the function name as its value.
        scale:function (){          //scale is actually the zooming during the animating. so its value makes the animation to zoom in or zoom out.
            return anime.random(1,4);     //the value for scaling is generated randomly by this function and returns a value from 1 up to 4 randomly
        },
        duration:5000,        //the duration for one period of animating is set to 5000ms or 5 seconds using the property duration.
        easing: 'linear',     //easing means the style of animating is set to linear.
        delay: anime.stagger(5),   //delay for every period of animating is set using anime.stagger and its value is 5. staggering allows to animate multiple elements

});
}
animatingBackground();  //and at the end here its just calling the function.





