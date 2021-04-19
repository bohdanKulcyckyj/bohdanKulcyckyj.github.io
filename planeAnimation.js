const flightPath = {
    curviness : 1.5,
    autoRotate : true,
    values : [
        {x : 150, y: -20},
        {x : 250, y: 10},
        {x : 300, y : 30},
        {x : 550, y : 200},
        {x : 650, y : -10},
        {x : 350, y : -10},
        {x : 750, y : 150},
        {x : 1100, y : 0},
        {x : window.innerWidth - 300, y : 100}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane', 1, {
        bezier : flightPath,
        ease : Power1.ease
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement : '#contact',
    duration : 1000,
    triggerHook : 0.8
}).setTween(tween).addTo(controller);