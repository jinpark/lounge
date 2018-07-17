"use strict";

const $ = require("jquery");
const socket = require("../socket");
const templates = require("../../views");

socket.on("highlights", function(messages) {
	messages.forEach(function(msg) {
		if (msg.highlight && $(`#topbar [data-time="${msg.time}"]`).length === 0) {
			msg.channel = "???";
			const topBarMessage = $(templates["msg_topbar"](msg));
			$("#topbar").append(topBarMessage);
		}
	});
	$("#topbar").scrollTop = $("#topbar").scrollHeight;
});
