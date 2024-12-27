export const getLastPageFromLinks = (links) => {
	const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"$/);
	return result ? Number(result[1]) : 1;
};

export const debounce = (fn, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(fn, delay, ...args);
	};
};
