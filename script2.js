/*this is the javaScript for the second example.
lets go step by step to see how the code actually works.
* */
const text = document.querySelector('.text');    //getting access to the h2 element with class of text  and storing it to variable text.
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");  //splitting the sentence to alphabets. to be able to animate each word separately
anime.timeline({  //using anime.timeline to synchronize multiple animations at the same time.
                    // because we can do different animations in one object using timeline and then just add the animations to this anime.timeline
    loop:true   //setting the loop to true because we want to to animate all the time that we are on the website
})

    //adding the animation which moves or animates the texts words by alphabets form a value of -1000 to 0 horizontally.
    //and also add scale from 10 to 1 which means its bigger when it appears with value of 10x then its at normal form when its placed at the center or value of 0.
    //and the duration of this animation takes 2000ms or 2 seconds
    .add({
    targets: '.text span',   //target is span inside the text class which is alphabets form the sentence
    translateY:[-1000,0],   //translateY value [start,end]
    scale:[10,1],   //scale [startValue,EndValue]
    opacity:[0,1],   //opacity value [start, end]
    easing: "easeOutExpo",  //easing style seting here
    duration:2000,    // the duration value in ms
    delay: anime.stagger(80),   //the delay value using the anime.stagger
})

    //adding the animation which moves or animates the texts words by alphabets form a value of -500 to 500 vertically.
    //and also add scale from 1 to 5 which means its smaller when it goes up with value of 1x then its 5x bigger when it moves up toward screen but vertically.
    //and the duration of this animation takes 1500ms or 1.5 seconds
    .add({
        targets:'.text span',    //target is span inside the text class which is alphabets form the sentence
        translateY:function () {    //translateY value using the function which generates random value
    return anime.random(-500, 500);
},
        scale:[1,5],     //scale [startValue,EndValue]
        opacity:[1,0],    //opacity value [start, end]
        easing: "easeOutExpo",    //easing style seting here
        duration:1500,       // the duration value in ms
        delay: anime.stagger(100),      //the delay value using the anime.stagger
    })

    //adding the animation which moves or animates the texts words by alphabets form a value of -500 to 500 vertically.
    //and also add scale from 1 to 5 which means its bigger when it appears with value of 5x then its at normal form when its placed at the center or value of 0.
    //and the duration of this animation takes 1500ms or 1.5 seconds
    .add({
        targets:'.text span',    //target is span inside the text class which is alphabets form the sentence
        translateY:[function () {    //translateY value using the function which generates random value
            return anime.random(-500, 500)
        },0],
        scale:[5,1],    //scale [startValue,EndValue]
        opacity:[0,1],    //opacity value [start, end]
        easing: "easeOutExpo",    //easing style seting here
        duration:1500,         // the duration value in ms
        delay: anime.stagger(80),     //the delay value using the anime.stagger
    })