import createContainer from "../container";

function createHeaderSection() {
	const headerSection = document.createElement("header");
	headerSection.classList.add("header");

	const container = createContainer();
	headerSection.appendChild(container);

	const body = document.querySelector("body");

	body.prepend(headerSection);

	const text = document.createElement("p");
	text.innerText = "Hello my dear world";
	container.prepend(text);

	// Возвращаем созданный элемент для использования в других файлах
	return headerSection;
}

// Экспортируем функцию createHeaderSection для использования в других модулях
export default createHeaderSection;
