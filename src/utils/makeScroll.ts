//@ts-nocheck
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useMakeScroll() {
	const container = useRef(null);

	useGSAP(() => {
		console.clear();

		const svg = document.querySelector("#svg");
		const img = document.querySelector("#img");
		const imgFixed = document.querySelector("#img-fixed");
		const circle = document.querySelector("#circle");
		const pad = 4;
		let radius = +circle.getAttribute("r");
		let imgWidth, imgHeight;

		gsap.set(img, {
			scale: 2,
			xPercent: -50,
			yPercent: -50,
		});

		gsap.set(imgFixed, {
			xPercent: -50,
			yPercent: -50,
		});

		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: ".image-unmask",
					pin: true,
					start: "top top",
					end: "+=2500",
					scrub: true,
				},
				defaults: {
					duration: 1,
				},
			})
			.to(
				circle,
				{
					attr: {
						r: () => radius,
					},
				},
				0
			)
			.to(
				img,
				{
					scale: 1,
					opacity: 1,
				},
				0
			)
			.set(img, {
				opacity: 0,
			})
			.set(imgFixed, {
				opacity: 1,
			});

		function init() {
			imgWidth = img.naturalWidth;
			imgHeight = img.naturalHeight;
			resize();
		}

		function resize() {
			tl.progress(0);

			const r = svg.getBoundingClientRect();
			const rectWidth = r.width + pad;
			const rectHeight = r.height + pad;

			const rx = rectWidth / imgWidth;
			const ry = rectHeight / imgHeight;

			const ratio = Math.max(rx, ry);

			const width = imgWidth * ratio;
			const height = imgHeight * ratio;

			const dx = rectWidth / 2;
			const dy = rectHeight / 2;
			radius = Math.sqrt(dx * dx + dy * dy);

			gsap.set(img, { width, height });
			gsap.set(imgFixed, { width, height });

			tl.invalidate();
			ScrollTrigger.refresh();
		}

		window.addEventListener("load", init);
		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("load", init);
			window.removeEventListener("resize", resize);
		};
	}, { dependencies: [], scope: container});

	return {container}
}
