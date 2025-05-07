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

const element = document.getElementById("seal");
element.addEventListener("click", () => {
	document.getElementById("content").classList.remove("hidden");
})