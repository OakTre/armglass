import { disableScroll, enableScroll } from "../utils/scroll-lock"
import gsap from "gsap";


export function initMenu() {
	const menuButtonOpen = document.querySelector(".header__burger");
	const menuButtonClose = document.querySelector(".menu_mobile__button");
	const menuMobile = document.querySelector(".menu_mobile");
	const menuMobileItem = document.querySelectorAll(".menu_mobile__nav ul li");
	const menuMobileBottomLinks = document.querySelectorAll(".js--menu-mobile-link");

	let timeline = gsap.timeline({
		paused: true,
		reverse: true
	})

	timeline
		.to(menuMobile,{
			right: 0,
			duration: 0.7
		})
		.fromTo(menuMobileItem, {
			opacity: 0,
			x: 100
		}, {
			opacity: 1,
			x: 0,
			duration: 0.7
		}, "-=0.4")
		.fromTo(menuMobileBottomLinks, {
			opacity: 0,
			x: 100
		}, {
			opacity: 1,
			x: 0,
			duration: 0.7
		}, "-=0.7")



	menuButtonOpen.addEventListener("click", function(){
		timeline.play();

		disableScroll();
	});

	menuButtonClose.addEventListener("click", function(){
		timeline.reverse();

		enableScroll();
	});

}
