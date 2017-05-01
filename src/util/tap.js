module.exports = func => function (value) {
	func.apply(null, arguments);
	return value;
};