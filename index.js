gsap.to('.h1welcome', {opacity:1, duration:1, delay:0.5})
gsap.to('.btnslide1', {delay:1, opacity:1, scale:1.3, repeat:-1, duration:3})
gsap.to('.btnslide2', {delay:5, opacity:1, scale:1.3, repeat:-1, duration:3})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hotelimg', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.hotelimg',
    },
})
gsap.to('.hotelgallery', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.hotelgallery',
    },
})
gsap.to('.rev', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.rev',
    },
})
gsap.to('.kingsuit', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.kingsuit',
    },
})
gsap.to('.queensuit', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.queensuit',
    },
})
gsap.to('.roominfoimg', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.roominfoimg',
    },
})
gsap.to('.pool', {
    opacity:1,
    delay:0.2,
    duration:2,
    scrollTrigger: {
        trigger:'.pool',
    },
})
