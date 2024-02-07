/** @format */

$(document).ready(function () {
	// Event for continue button click
	$(".btn-continue").on("click", function (e) {
		e.preventDefault();

		const $currentTab = $(this).closest(".tab-pane");
		const targetTabSelector = $(this).attr("data-bs-target");
		const formToValidate = $currentTab.find("form.needs-validation")[0];

		// Check if the form is valid and show next tab
		if (formToValidate.checkValidity()) {
			$('.nav-tabs .nav-link[href="' + targetTabSelector + '"]').tab("show");
		} else {
			$(formToValidate).addClass("was-validated");
		}
	});

	// When a new tab is shown, show/hide tab content
	$('a[data-toggle="tab"]').on("shown.bs.tab", function () {
		toggleTabContentVisibility();
	});

	// Toggle the offcanvas on clicking the navbar link
	$("#offcanvasNavbar").on("click", ".nav-link", function () {
		$("#offcanvasNavbar").offcanvas("hide");
	});

	$(".nav-tabs .nav-link").on("click", function (event) {
		event.preventDefault();
	});

	// toggle the display of tab content
	function toggleTabContentVisibility() {
		$(".tab-pane").each(function () {
			$(this).css("display", $(this).hasClass("active") ? "block" : "none");
		});
	}

	//add section event
	$(".btn-add-section").on("click", function () {
		let $addButton = $(this);
		let targetSelector = $addButton.attr("data-bs-target");

		$(targetSelector).removeClass("d-none");
		$addButton.addClass("d-none");

		$addButton.next(".btn-remove-section").removeClass("d-none");
	});

	// Remove section event
	$(".btn-remove-section").on("click", function () {
		let $removeButton = $(this);
		let targetSelector = $removeButton.attr("data-bs-target");

		$(targetSelector).addClass("d-none");
		$removeButton.addClass("d-none");

		$(".btn-add-section[data-bs-target='" + targetSelector + "']").removeClass("d-none");
	});
});
