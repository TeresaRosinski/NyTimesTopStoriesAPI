
gsap.from(".headline", { opacity: 0, duration: 1, y: -60 });

gsap.to(".projectOverview", {
	scrollTrigger: "#artsSearchForm",
	opacity: 0,
	duration: 2,
});

gsap.to(".projectOverview", {
	scrollTrigger: "#artsResultsAll",
	opacity: 0.8,
	duration: 2,
	delay: 0.7,
	stagger: 1,
	y: 50,
});

gsap.from(".subText", {
	opacity: 0,
	duration: 1,
	y: 50,
	delay: 0.7,
	stagger: 1,
});

gsap.from("#arts", {
	scrollTrigger: "#artsSearchForm",
	opacity: 0.7,
	duration: 2,
});

gsap.from(".autoHeader", {
	scrollTrigger: "#searchAutomobiles",
	x: "-80vw",
	ease: "elastic",
	duration: 4,
	delay: 2,
});