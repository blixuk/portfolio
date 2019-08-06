var converter = new showdown.Converter();

function loader() {
	try {
		URL = window.location.href.split('?');
		args = URL[1].split('=');

		if (args[0] == 'page') {
			getPage('portfolio/pages/' + args[1] + '.md');
			document.title = 'Blix | ' + args[1];
		} else {
			getPage('portfolio/pages/404.md');
		}
	} catch(TypeError) {
		getPage('portfolio/pages/Home.md');
	}
}

function getPage(page) {
	try {
		jQuery.get(page, function(txt) {
			document.getElementById("output").innerHTML = converter.makeHtml(txt);
		}).fail(function() {
			getPage('portfolio/pages/404.md');
		});
	} catch(err) {
		document.getElementById("output").innerHTML = err.message;
	}
}