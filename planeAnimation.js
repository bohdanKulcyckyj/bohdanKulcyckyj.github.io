gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const widthScr = window.innerWidth;

const breakpointLarge = [
    {x: 0, y: 10},
    {x: 300, y: 100},
    {x: 600, y: 300},
    {x: 850, y: -100},
    {x: 500, y: -100},
    {x: 350, y: 200},
    {x: 900, y: 300},
    {x : window.innerWidth, y : -300}
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
    curviness : 1,
    autoRotate : true,
    path : breakpointsValue,
};

const tween = gsap.timeline();
tween.to(".plane", {
  duration: 1000,
  ease: Power1.easeInOut,
  motionPath: flightPath,
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement : '#contact',
    duration : 1000,
    triggerHook : 0.8
}).setTween(tween).addTo(controller);