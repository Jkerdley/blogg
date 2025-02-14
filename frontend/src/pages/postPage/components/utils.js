export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp', ' ')
		.replaceAll('&amp', ' ')
		.replace(/ +/, ' ')
		.replaceAll('<br>', '\n')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
