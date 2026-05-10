document.querySelectorAll('.wb-ip-cell').forEach(function(cell) {
	cell.addEventListener('click', function() {
		var ip = this.dataset.ip;
		navigator.clipboard.writeText(ip).then(function() {
			cell.classList.add('wb-copied');
			setTimeout(function() { cell.classList.remove('wb-copied'); }, 1800);
		});
	});
});

document.querySelectorAll('a[href]').forEach(function(link) {
	var href = link.getAttribute('href');
	if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			document.getElementById('wb-overlay').classList.add('wb-closing');
			var target = href;
			setTimeout(function() { window.location.href = target; }, 500);
		});
	}
});
