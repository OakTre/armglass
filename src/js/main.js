import { initMenu } from "./blocks/mobileMenu";
import LazyLoad from "vanilla-lazyload";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// window.onload = () => {
// 	const preloader = document.querySelector(".preloader");
// 	const preloaderImg = preloader.querySelector(".preloader__logo");

// 	const hidePreloader = function () {
// 		preloader.classList.add("preloader--loaded");

// 		setTimeout(() => {
// 			preloader.style.display = "none";
// 		}, 200);
// 	}

// 	gsap.to(preloaderImg, {
// 		x: "-121.1%",
// 		y: "-279.6%",
// 		scale: 0.4,
// 		duration: 0.7,
// 		onComplete: hidePreloader
// 	})
// }

initMenu();

let lazyLoad = new LazyLoad();
lazyLoad.update();


const heroImg = document.querySelector(".hero_section__img");
const heroFeautures = document.querySelectorAll(".hero_section__list_item");
const timeLine = gsap.timeline();

const setTransition = function () {
	const el = document.querySelector(".js_el-add-tarnsition");

	el.classList.add("--transition");
}

timeLine
	.to(heroImg, {
		x: 0,
		y: 0,
		scale: 1,
		opacity: 1,
		duration: 0.9
	})
	.fromTo(".header__navigation", {
		x: "160%"
	}, {
		x: 0,
		duration: 0.9,
		ease: "power1.out"
	}, "-=0.4")
	.fromTo(".header__navigation ul li, .phone-content, .header__location, .header__call", {
		opacity: 0
	}, {
		opacity: 1,
		duration: 0.3
	})
	.fromTo(".hero_section__title h1", {
		y: 50,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		duration: 0.5,
		ease: "power1.out"
	})
	.fromTo(".hero_section__title p", {
		scale: 0.1,
		opacity: 0.1
	}, {
		scale: 1,
		opacity: 1,
		duration: 0.5,
		ease: "power1.out"
	})
	.fromTo(".hero_section__button", {
		scaleX: 0.1,
		scaleY: 0.1,
		opacity: 0
	}, {
		scaleX: 1,
		scaleY: 1,
		opacity: 1,
		duration: 0.5,
		ease: "power1.out",
		onComplete: setTransition
	}, "-=0.5")

	heroFeautures.forEach(function(element){
		timeLine.fromTo(element, {
			y: 150,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: ".hero_section__list",
				start: "bottom bottom"
			}
		})
	})

