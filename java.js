$(function(){
	/* FIXED HEADER */
	let header = $("#header");
	let intro = $("#intro");
	let introh;
	let scrollpos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle")

	$(window).on("scroll load resize", function() {
		let introh = intro.innerHeight();
		scrollpos = $(this).scrollTop();

		if (scrollpos > introh) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});

	/* SMOOTH SCROLL */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data("scroll");
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show")

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 500);
	});

	/* NavToggle */

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show")

	});
	
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 220, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});







