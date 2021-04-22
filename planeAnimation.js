const widthScr = window.innerWidth;

const breakpointLarge = [
    {x : 150, y : -20},
    {x : 250, y : 10},
    {x : 300, y : 30},
    {x : 550, y : 200},
    {x : 650, y : -10},
    {x : 350, y : -10},
    {x : 750, y : 150},
    {x : 1100, y : 0},
    {x : window.innerWidth - 300, y : 0}
];

const breakpoint1440 = [
    {x : widthScr/10, y : 20},
    {x : widthScr/2, y : 170},
    {x : window.innerWidth, y : -10}
];

const breakpoint1024 = [
    {x : widthScr/10, y : 10},
    {x : widthScr/2, y : 60},
    {x : window.innerWidth, y : 10}
];

const breakpoint800 = [
    {x : widthScr/10, y : 10},
    {x : widthScr/2, y : 100},
    {x : window.innerWidth, y : 10}
];

const breakpointsValue = window.innerWidth > 1440 ? breakpointLarge :
                        window.innerWidth > 1024 ? breakpoint1440 :
                        window.innerWidth > 800 ? breakpoint1024 : 
                        window.innerWidth >= 0 ? breakpoint800 : 
                        breakpointLarge;

const flightPath = {
    curviness : 1.5,
    autoRotate : true,
    values : breakpointsValue,
};

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