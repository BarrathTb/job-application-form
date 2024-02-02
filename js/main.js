/**
 * @format
 */
$(document).ready(function () {
	var $navContainer = $("#nav-container");

	gsap.set(".main", {
		position: "fixed",
		background: "#fff",
		width: "100%",
		maxWidth: "1200px",
		height: "100%",
		top: 0,
		left: "50%",
		x: "-50%",
	});

	gsap.set(".scrollDist", { width: "100%", height: "200%" });

	let scrollTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: ".mountains", // Your mountain SVG class or ID
			start: "top top",
			end: () => "+=" + window.innerHeight / 2, // End when the bottom of the trigger hits the center of the viewport
			scrub: 1,
			onLeaveBack: ({ isActive }) => {
				if (!isActive) $navContainer.fadeIn(); // Fade in nav when scrolling back past the trigger's half way
			},
			onEnterBack: ({ isActive }) => {
				if (isActive) $navContainer.fadeOut(); // Fade out nav when re-entering from the bottom
			},
			onLeave: () => $navContainer.fadeOut(), // Optional: Hide nav when scroll trigger leaves at the top
			onEnter: () => $navContainer.fadeOut(), // Hide nav when the animation starts (optional)
		},
	});

	// Add animations to the timeline
	scrollTimeline
		.fromTo(".sky", { y: 0 }, { y: -200 }, 0)
		.fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
		.fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
		.fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
		.fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
		.fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
		.fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

	// Arrow button interactions
	$("#arrowBtn").on("mouseenter", (e) => {
		gsap.to(".arrow", { y: 10, duration: 0.8, ease: "back.inOut(3)", overwrite: "auto" });
	});
	$("#arrowBtn").on("mouseleave", (e) => {
		gsap.to(".arrow", { y: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
	});
	$("#arrowBtn").on("click", (e) => {
		gsap.to(window, { scrollTo: { y: innerHeight, autoKill: false }, duration: 1.5, ease: "power1.inOut" });
	});

	// Initially hide the nav container until scroll trigger enters back at the end
	$navContainer.hide();
});
