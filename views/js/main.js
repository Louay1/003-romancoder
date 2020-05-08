
var tl = gsap.timeline();
tl.from("#frame" , {duration:2, opacity:0})
tl.add(gsap.from("#jay", {scale: 0}))
tl.add(gsap.from("#ess", {x:200, opacity:0, ease: "bounce.out"}))

const roman = document.getElementById('romancoder')


const tlFloat = new TimelineMax({repeat: -1});
const hairSpin = new TimelineMax({repeat: -1});
const frekSpin = new TimelineMax({repeat: -1});


tlFloat.to(roman, .7, {y:'-=10', ease: Sine.easeInOut})
		.to(roman, .7, {y:'+=10', ease: Sine.easeInOut})
		.to(roman, .7, {y: '-=10',transformOrigin: '50% 50%', rotation:"+4", ease: Sine.easeInOut})
		.to(roman, .7, {y: '+=10',transformOrigin: '50% 50%', rotation:"-8", ease: Sine.easeInOut})
		.to(roman, .7, {y: '-=10',transformOrigin: '50% 50%', rotation:"+4", ease: Sine.easeInOut})
		.to(roman, .7, {y: '+=10',transformOrigin: '50% 50%', rotation:"0", ease: Sine.easeInOut})


hairSpin.to("#Vector_12",.8, {rotation: 360, transformOrigin: '50% 50%', ease: Linear.easeOut, paused: false})
frekSpin.to("#frek-l ,#frek-r",.8, {rotation:360, transformOrigin: '50% 50%', ease: Linear.easeOut, paused: false})
