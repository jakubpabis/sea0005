<script type="text/javascript">
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
</script>
<!-- CookieBot -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="02101096-38cd-4081-9366-8b55cf9c7a6a" data-blockingmode="auto" type="text/javascript"></script>
<!-- /CookieBot -->
<!-- SalesFeed tracking code -->
<script type="text/javascript" async src="https://searchxrecruitment.stackbase.nl/"></script>
<!-- Leadinfo tracking code -->
<script type="text/javascript">
	(function(l, e, a, d, i, n, f, o) {
		if (!l[i]) {
			l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
			l.GlobalLeadinfoNamespace.push(i);
			l[i] = function() {
				(l[i].q = l[i].q || []).push(arguments)
			};
			l[i].t = l[i].t || n;
			l[i].q = l[i].q || [];
			o = e.createElement(a);
			f = e.getElementsByTagName(a)[0];
			o.async = 1;
			o.src = d;
			f.parentNode.insertBefore(o, f);
		}
	}(window, document, "script", "https://cdn.leadinfo.net/ping.js", "leadinfo", "LI-646B3FAFB71E7"));
</script>
<!-- Begin http://Werkzoeken.nl tracking code -->
<script type="text/javascript">
	/* <![CDATA[ */
	var conversion_key_wz = "cb4b5c2fe9459552bcbb55bfed624f6a";
	var conversion_key_ict = "";
	var conversion_key_tec = "";
	var conversion_ref_id = "";
	var conversion_candidate_id = "";
	/* ]]> */
</script>
<script type="text/javascript" src="https://click.werkzoeken.nl/conversion/conversion.js"></script>
<!-- End http://Werkzoeken.nl tracking code -->

<?php $layouts = get_post_meta(get_the_ID(), 'sections', true);
if (
	is_array($layouts) &&
	in_array('photo_slider', $layouts)
) : ?>
	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<?php endif; ?>


<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
	_linkedin_partner_id = "14266";
	window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
	window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
	(function() {
		var s = document.getElementsByTagName("script")[0];
		var b = document.createElement("script");
		b.type = "text/javascript";
		b.async = true;
		b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
		s.parentNode.insertBefore(b, s);
	})();
</script>
<noscript> <img height="1" width="1" alt="" src="https://px.ads.linkedin.com/collect/?pid=14266&fmt=gif" /> </noscript>
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/1932066.js"></script>
<!-- End of HubSpot Embed Code -->
<?php if (isset($_GET['user-source']) && $_GET['user-source'] === 'job-alert') : ?>
	<script type="text/javascript">
		const cookie = getCookie('user-source');
		if (!cookie) {
			setCookie('user-source', 'job-alert', 90);
		}
	</script>
<?php endif; ?>