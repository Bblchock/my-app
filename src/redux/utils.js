//Проверить наличие списка чемпионов в LS
export const getChampionsLS = () => {
	const data = localStorage.getItem('championsData');
	let champions = data ? JSON.parse(data) : [];
	return champions;
};

//Проверить наличие темы в LS
export const getThemeLS = (value) => {
	let keyLS = value + 'data';
	const data = localStorage.getItem(keyLS);
	let theme = data ? data : null;
	if (theme) {
		document.body.setAttribute(keyLS, theme);
	} else {
		theme = keyLS === 'fondata' ? 'dark' : 'orange';
		document.body.setAttribute(keyLS, keyLS === 'fondata' ? 'dark' : 'orange');
		localStorage.setItem(keyLS, keyLS === 'fondata' ? 'dark' : 'orange');
	};
	return theme;
};

//Проверить последнюю открытую страницу в LS
export const getCurrentPage = () => {
	const data = localStorage.getItem('page');
	const currentPage = data ? JSON.parse(data) : 0;
	return currentPage;
};

//Кнопки фильтрации чемпионов
export const filterButtonState = [
	{ key: 'all', name: 'All', block: '__all', class: '__all__button__active' },
	{ key: 'max', name: 'MaxRung', block: '__rung', class: '__button' },
	{ key: 'hithRung', name: 'Rung 5-6', block: '__rung', class: '__button' },
	{ key: 'lowRung', name: 'Rung < 5', block: '__rung', class: '__button' },
	{ key: 'top', name: 'Top', block: '__position', class: '__button' },
	{ key: 'mid', name: 'Mid', block: '__position', class: '__button' },
	{ key: 'bot', name: 'Bot', block: '__position', class: '__button' },
	{ key: 'jungle', name: 'Jungle', block: '__position', class: '__button' },
	{ key: 'tank', name: 'Tank', block: '__role', class: '__button' },
	{ key: 'apk', name: 'Apk', block: '__role', class: '__button' },
	{ key: 'adk', name: 'Adk', block: '__role', class: '__button' },
	{ key: 'support', name: 'Support', block: '__role', class: '__button' },
	{ key: 'fighter', name: 'Fighter', block: '__role', class: '__button' },
	{ key: 'assasin', name: 'Assasin', block: '__role', class: '__button' },
];

//Темы
export const theme = [
	{ fon: 'light', color: '#000000' },
	{ fon: 'dark', color: '#ffffff' },
];

//Основной цвет
export const basicColor = [
	{ basic: 'orange', color: '#F8A131' },
	{ basic: 'blue', color: '#1792f7' },
	{ basic: 'green', color: '#8bc34a' },
	{ basic: 'red', color: '#ff5f2e' },
];