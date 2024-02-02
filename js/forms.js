/**
 * @format
 */
$(document).ready(function () {
	$("#site-nav-tabs nav-item").on("click", function (event) {
		event.preventDefault();
		var targetTab = $(this).attr("href");
		$(targetTab).tab("show");
	});

	$("#personal-info-section-button").on("click", function (event) {
		event.preventDefault();
		$("#positions-info-section").tab("show");
	});
	$("#positions-info-section-button").on("click", function (event) {
		event.preventDefault();
		$("#work-experience-section").tab("show");
	});
	$("#work-experiance-section-button").on("click", function (event) {
		event.preventDefault();
		$("#education-section").tab("show");
	});
	$("#education-section-button").on("click", function (event) {
		event.preventDefault();
		$("#work-ability-section").tab("show");
	});
	$("#work-ability-section-button").on("click", function (event) {
		event.preventDefault();
		$("#additional-info-section").tab("show");
	});
});
