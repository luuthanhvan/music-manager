exports.successResponse = function (res, status, msg) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(status).json(data);
};

exports.successResponseWithData = function (res, status, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(status).json(resData);
};

exports.errorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.validationError = function (res, msg) {
	var data = {
		status: 0,
		message: msg
	};
	return res.status(400).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};