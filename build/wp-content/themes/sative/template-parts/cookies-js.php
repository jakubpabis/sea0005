<!-- CookieBot -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="02101096-38cd-4081-9366-8b55cf9c7a6a" data-blockingmode="auto" type="text/javascript"></script>
<!-- /CookieBot -->
<!-- Google Tag Manager -->
<script>
	(function(w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-PMG8TTV');

	window.addEventListener('message', function(event) {
		if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onBeforeFormSubmit') {
			console.log(event.data);
			if (event.data.data && event.data.data.length > 0) {
				let contactType = '';
				if (event.data.data.find(item => item.name === "i_m_a")) {
					contactType = event.data.data.find(item => item.name === "i_m_a")
				} else if (event.data.data.find(item => item.name === "ik_ben_een")) {
					contactType = event.data.data.find(item => item.name === "ik_ben_een")
				}
				const contextJSON = event.data.data.find(item => item.name === "hs_context");
				if (contactType && contextJSON) {
					const context = JSON.parse(contextJSON.value);
					console.log(context.lang + ' - ' + contactType.value);
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': 'contact_form',
						'bezoeker_soort': contactType.value,
						'veld2': context.lang,
						'veld3': 'hubspot'
					});
				}
			}

		}
	});
</script>
<!-- /Google Tag Manager -->
<!-- Hotjar Tracking Code for www.searchxrecruitment.com -->
<!-- <script>
	(function(h, o, t, j, a, r) {
		h.hj = h.hj || function() {
			(h.hj.q = h.hj.q || []).push(arguments)
		};
		h._hjSettings = {
			hjid: 467663,
			hjsv: 6
		};
		a = o.getElementsByTagName('head')[0];
		r = o.createElement('script');
		r.async = 1;
		r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
		a.appendChild(r);
	})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
</script> -->
<!-- /Hotjar Tracking Code for www.searchxrecruitment.com -->
<style>
	img[height="1"],
	img[width="1"] {
		position: absolute !important;
	}
</style>