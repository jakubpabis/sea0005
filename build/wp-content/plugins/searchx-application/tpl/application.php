<?php

function appEmailTemplate()
{
	$job_link = 'https://' . $_SERVER['SERVER_NAME'] . $_POST['_wp_http_referer'];
	$job_title = get_the_title($_POST['postid']);
	$lang = $_POST['lang'];
	$firstEN = '
		<h1 style="font-size: 12pt!important;">
		Hi, you! Thanks for applying to the position of <a href="' . $job_link . '" style="color: #425CBB; font-size: 12pt!important;">' . $job_title . '</a>, you made the first important step to a new challenge!<br/>
		We’ve received your application in good order and our recruiters will carefully review your profile to see if you are the perfect match.<be/>
    Have you not received a response after approximately 2 working days? Then unfortunately this position is not a match. 
		<br/>
		</h1>
		<h2 style="font-size: 12pt!important;">
		Don’t want to miss anything in the future? Create a <a href="https://searchxrecruitment.com/nl/?modal=job-alert&utm_campaign=application-en&utm_medium=mail&utm_source=email" style="color: #425CBB; font-size: 12pt!important;"><strong>job alert</strong></a> and receive the latest vacancies directly in your mailbox!<br/>
		Or follow us on <a href="https://www.linkedin.com/company/search-x-recruitment/?utm_campaign=application&utm_medium=mail&utm_source=email" style="color: #425CBB; font-size: 12pt!important;"><strong>LinkedIn</strong></a> for the latest news on working in IT, Renewable and Engineering.
		</h2>
	';
	$firstNL = '
		<h1 style="font-size: 12pt!important;">
		Hi, you! Bedankt voor het solliciteren op de functie van <a href="' . $job_link . '" style="color: #425CBB; font-size: 12pt!important;">' . $job_title . '</a> ,je hebt de eerste belangrijke stap gezet naar een nieuwe uitdaging!<br/>
		We hebben je sollicitatie in goede orde ontvangen en onze recruiters gaan je profiel zorgvuldig bekijken om te zien of je de perfecte match bent.<br/>
		Heb je na ongeveer 2 werkdagen nog geen reactie ontvangen? Dan is deze functie helaas geen match. 
		<br/>
		</h1>
		<h2 style="font-size: 12pt!important;">
		Wil je in het vervolg niets missen? Maak dan een <a href="https://searchxrecruitment.com/nl/?modal=job-alert&utm_campaign=application-nl&utm_medium=mail&utm_source=email" style="color: #425CBB; font-size: 12pt!important;"><strong>job alert</strong></a> aan en ontvang de nieuwste vacatures direct in je mailbox!<br/>
		Of volg ons op <a href="https://www.linkedin.com/company/search-x-recruitment/?utm_campaign=application&utm_medium=mail&utm_source=email" style="color: #425CBB; font-size: 12pt!important;"><strong>LinkedIn</strong></a> voor het laatste nieuws over werken in IT, Renewable en Engineering.
		</h2>
	';
	$first = $lang && $lang === 'nl' ? $firstNL : $firstEN;
	$secondEN = 'To infinity and beyond! Want to be the first one to know? Stay tuned on our latest posts by following us on:';
	$secondNL = 'To infinity and beyond! Wil je als eerste op de hoogte zijn? Blijf op de hoogte van het laatste nieuws door ons te volgen op:';
	$second = $lang && $lang === 'nl' ? $secondNL : $secondEN;
	$thirdEN = 'Team Search X<br/>
	Keep in mind that by applying on our website you have agreed to and accepted the terms of our <a href="https://www.searchxrecruitment.com/en/privacy-policy/" style="color: #425CBB; font-size: 10pt!important;">Privacy Policy</a>.<br/>
	This is an automatic message. Please do not reply to it.';
	$thirdNL = 'Team Search X<br/>
	Door te solliciteren op onze website ga je akkoord met de voorwaarden van ons <a href="https://searchxrecruitment.com/nl/privacy-verklaring/" style="color: #425CBB; font-size: 10pt!important;">Privacybeleid</a>.<br/>
	Dit is een automatisch bericht. Graag niet beantwoorden.';
	$third = $lang && $lang === 'nl' ? $thirdNL : $thirdEN;
	$body = '<html>
                <head>
                    <style type="text/css" media="screen">
                        * {
                            font-family: Helvetica!important;
                            font-size: 10pt;
                        }
                        td, tr, th, table {
                            padding: 0px;
                            margin: 0px;
                        }
                        p {
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <table style="max-width: 100%; width: 100%; margin: 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>' . $first . '</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 40px;">
                                    <p style="font-size: 10pt!important;">
																		' . $second . '
                                    </p>
                                    <p style="font-size: 10pt!important;">
                                        <a style="font-size: 10pt!important;" href="https://www.linkedin.com/company/search-x-recruitment?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>LinkedIn</strong></a><br/>
                                        <a style="font-size: 10pt!important;" href="https://www.instagram.com/searchxrecruitment/?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>Instagram</strong></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 30px;">
                                    <p style="font-size: 10pt!important;">
                                        ' . $third . '
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <table style="max-width: 320px; width: 100%; margin: 0 15px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.searchxrecruitment.com">
                                        <img id="TemplateLogo" data-class="external" src="https://www.searchxrecruitment.com/wp-content/themes/sative/assets/img/logo-small.png" alt="Search X Recruitment" style="display: block; margin-left: -33px; max-width: 300px;" width="300" height="100>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Phone:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="tel:+31(0)207782393" style="color: #183153; text-decoration: none;">
                                                            +31 (0) 20 - 7782393
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Email:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="mailto:info@searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            info@searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 2px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Website:</strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.searchxrecruitment.com" style="color: #183153; text-decoration: none;">
                                                            www.searchxrecruitment.com
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;" width="70px">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <strong>Address:<br/><br/></strong>
                                                    </font>
                                                </td>
                                                <td style="font-family: Helvetica; font-size: 9pt; padding: 10px 0 1px 0;">
                                                    <font style="color: #183153; font-size: 9pt; font-family: Helvetica">
                                                        <a href="https://www.google.com/maps/place/Search+X+Recruitment/@52.3895326,4.6489399,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef9e18045179:0xfec844f9664ad6f8!8m2!3d52.3895292!4d4.6511288" style="color: #183153; text-decoration: none;">
																														Hendrik Figeeweg 1-0013, 2031 BJ, Haarlem, Amsterdam Area, The Netherlands
                                                        </a>
                                                    </font>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </body>
            </html>';
	return $body;
}
