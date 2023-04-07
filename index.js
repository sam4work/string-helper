const capitalise = (param) => {
	const wordArray = param.split(" ");
	const words = new Array();

	if (wordArray.length > 0) {
		wordArray.forEach((element) => {
			let first = element.slice(0, 1).toUpperCase();
			let rest = element.slice(1, element.length);
			words.push(`${first}${rest}`);
		});
		return words.join(" ");
	}

	let first = param.slice(0, 1).toUpperCase();
	let rest = param.slice(1, param.length);

	return `${first}${rest}`;
};

const slugify = (param) => {
	return param.replace(" ", "-").toLowerCase();
};



module.exports = {
	capitalise,
	slugify
}