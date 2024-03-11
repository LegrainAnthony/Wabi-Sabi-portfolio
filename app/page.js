// "use client";
// import { useState, useEffect } from "react";
// import { WabisabiComponent } from "../components/Home/Wabisabi/Wabisabi.js";
// import { HomeStyle } from "@/styles/index.js";

// export default function Home() {
// 	const [index, setIndex] = useState(0);
// 	const [position, setPosition] = useState([0, 100, 200, 300]);
// 	const [startY, setStartY] = useState(0);
// 	const [delayScroll, setDelayScroll] = useState(false);

// 	useEffect(() => {
// 		console.log("useEffect");
// 		const handleWheel = (event) => {
// 			if (delayScroll) {
// 				return;
// 			}

// 			if (event.deltaY < 0 && index > 0) {
// 				setIndex((prevIndex) => prevIndex - 1);
// 				setDelayScroll(true);
// 			} else if (event.deltaY > 0 && index < position.length - 1) {
// 				setIndex((prevIndex) => prevIndex + 1);
// 				setDelayScroll(true);
// 			}

// 			setTimeout(() => {
// 				setDelayScroll(false);
// 			}, 150);
// 		};

// 		const handleTouchStart = (event) => {
// 			const touch = event.touches[0];
// 			setStartY(touch.clientY);
// 		};

// 		const handleTouchEnd = (event) => {
// 			const touch = event.changedTouches[0];
// 			const endY = touch.clientY;
// 			const threshold = 50;

// 			if (startY - endY > threshold && index < position.length - 1) {
// 				setIndex((prevIndex) => prevIndex + 1);
// 			} else if (endY - startY > threshold && index > 0) {
// 				setIndex((prevIndex) => prevIndex - 1);
// 			}
// 		};

// 		window.addEventListener("wheel", handleWheel);
// 		window.addEventListener("touchstart", handleTouchStart);
// 		window.addEventListener("touchend", handleTouchEnd);

// 		return () => {
// 			window.removeEventListener("wheel", handleWheel);
// 			window.removeEventListener("touchstart", handleTouchStart);
// 			window.removeEventListener("touchend", handleTouchEnd);
// 		};
// 	}, [index, position.length, startY, delayScroll]);

// 	useEffect(() => {
// 		const newPosition = position.map((_, idx) => (idx - index) * 100 + 30);
// 		setPosition(newPosition);
// 	}, [index]);

// 	return (
// 		<div className={HomeStyle.home__container}>
// 			<WabisabiComponent position={position[0]} />
// 			<WabisabiComponent position={position[1]} />
// 			<WabisabiComponent position={position[2]} />
// 			<WabisabiComponent position={position[3]} />
// 		</div>
// 	);
// }

"use client";

import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
