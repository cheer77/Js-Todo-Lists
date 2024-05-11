import createContainer from "../container";

function createHeaderSection() {
	// Создаем новый элемент <header>
	const headerSection = document.createElement("header");
	headerSection.classList.add("header");

	// Создаем контейнер с помощью функции createContainer
	const container = createContainer();

	// Добавляем контейнер внутрь headerSection
	headerSection.appendChild(container);

	// Находим элемент <body> в DOM
	const body = document.querySelector("body");

	// Добавляем headerSection перед всеми другими элементами в body
	body.prepend(headerSection);

	// Возвращаем созданный элемент для использования в других файлах
	return headerSection;
}

// Экспортируем функцию createHeaderSection для использования в других модулях
export default createHeaderSection;
