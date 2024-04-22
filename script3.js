
/*this is the javaScript for the second example.
lets go step by step to see how the code actually works.
* */

//using anime.timeline to synchronize multiple animations at the same time.
// because we can do different animations in one object using timeline and then just add the animations to this anime.timeline

let target = anime.timeline({   // storing the anime.timeline which is an object to target variable.
    autoplay:false,      //set autoplay to false to avoid autoplaying while starting or refreshing the webpage.
})
    //lets add some animations


    //adding the animation which moves and rotates the squares form a value of 0 to 250 horizontally.
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    .add({
        targets:'.block',   //the properties have been explained in previous examples

        translateY:[
            {value:250, duration:800},
            {value: 0, duration: 1000}
        ],
        rotate: '10turn',
        easing:"easeOutExpo",
        delay:function (el,i){
            return i*1000
        }
    })

    //adding the animation which moves and rotates the squares form a value of 0 to 250 vertically same as first one just
    // add scale or zooming while animating or going up vertically
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    .add({
        targets:'.block',
        //autoplay:false,
        translateY:[
            {value:250, duration:800},
            {value: 0, duration: 1000}
        ],
        scale:[1,2],
        easing:"linear",
        delay:function (el,i){
            return i*1000
        }
    })


    //adding the animation which moves and rotates the squares form a value of 0 to 250 vertically same as second animation
    // just remove scale or zooming while coming back vertically
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    .add({
        targets:'.block',
       // autoplay:false,
        translateY:[
            {value:-250, duration:800},
            {value: 0, duration: 1000}
        ],
        scale: [2,1],
        easing:"linear",
        delay:function (el,i){
            return i*1000
        }
    })

    //adding the animation which moves and rotates the squares form a value of 0 to 250 horizontally
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    .add({
        targets:'.block',
        // autoplay:false,
        translateX:[
            {value:250, duration:800},
            {value: 0, duration: 1000}
        ],
        scale: [1,1],
        easing:"linear",
        delay:function (el,i){
            return i*1000
        }
    })

    //adding the animation which moves and rotates the squares form a value of 0 to 250 vertically and horizontally
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    //with a scale value from 1 to 3.
    .add({
        targets:'.block',
        // autoplay:false,
        translateY:[
            {value:-250, duration:800},
            {value: 0, duration: 1000}
        ],
        translateX:[
            {value:-250, duration:800},
            {value: 0, duration: 1000}
        ],
        scale: [1,3],
        easing:"linear",
    })

    //adding the animation which moves and rotates the squares form a value of 0 to 250 vertically and horizontally
    //and rotates 10 turns and then comes backs to its place individually every square.
    //and the duration of this animation takes 800ms or 0.8s for going and 1000ms or 1s for coming back
    //with a scale value from 3 to 1.
    .add({
        targets:'.block',
        // autoplay:false,
        translateY:[
            {value:250, duration:800},
            {value: 0, duration: 1000}
        ],
        translateX:[
            {value:250, duration:800},
            {value: 0, duration: 1000}
        ],
        scale: [3,1],
        easing:"linear",
    })

//here we have two new functionalities called play and pause which are very simple to use and you can use them for playing and pausing your animations
//here we have created two buttons in HTML file and get access to them and link them to play and pause functionalities of AnimeJs.
document.getElementById('play').onclick = target.play;
document.getElementById('pause').onclick = target.pause;



