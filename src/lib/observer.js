document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade");
			}
		});
	});

	const fadeElements = document.querySelectorAll(".animated");
	fadeElements.forEach((element) => {
		observer.observe(element);
	})
})