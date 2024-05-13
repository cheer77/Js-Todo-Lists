const buttonSwitcher = document.getElementById("theme-toggle");

const switchTheme = () => {
	buttonSwitcher.addEventListener("click", function (item) {
		const currentTheme = document.body.className;
		if (currentTheme === "light-theme") {
			document.body.className = "dark-theme";
			buttonSwitcher.classList.add("active");
		} else {
			document.body.className = "light-theme";
			buttonSwitcher.classList.remove("active");
		}
	});
};

export default switchTheme;
