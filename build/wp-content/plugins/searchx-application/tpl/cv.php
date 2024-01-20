<?php

function cvEmailTemplate()
{
	$lang = $_POST['lang'];
	$firstEN = '
		<h1 style="font-size: 12pt!important;">
		Hi, you! Thanks for uploading your resume on our website. Look at you making the first step towards a new challenge!<br/> We want you to know we received your resume in good order, and will carefully review your profile to see if our recruiters have any matching opportunities for you.
		<br/><br/>
		Hang tight, we will let you know when we find your perfect match.<br/>
		</h1>
		<h2 style="font-size: 12pt!important;">
		Don’t like to play the waiting game? Make a <a style="font-size: 12pt!important;" href="https://searchxrecruitment.com/en/?modal=job-alert&utm_medium=mail&utm_source=email&utm_campaign=application-success" style="color: #425CBB;"><strong>job alert</strong></a> on our website and get the newest vacancies in your mailbox.<br/>
		Or follow us on <a style="font-size: 12pt!important;" href="https://www.linkedin.com/company/search-x-recruitment?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>LinkedIn</strong></a> and <a style="font-size: 12pt!important;" href="https://www.instagram.com/searchxrecruitment/?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>Instagram</strong></a> for the latest on IT, Renewable and Engineering.
		<br/><br/>
		All the best from team Search X
		</h2>
	';
	$firstNL = '
		<h1 style="font-size: 12pt!important;">
		Hi, you! Dankjewel voor het uploaden van je cv op onze website. Goed bezig! De eerste stap naar jouw volgende uitdaging is gezet. Wees gerust, we hebben je cv ontvangen en zullen jouw profiel zorgvuldig bekijken om te zien of onze recruiters een passende match voor je kunnen vinden.
		<br/><br/>
		Nog even volhouden dus, we laten het je direct weten als we iets voor je op het oog hebben.<br/>
		</h1>
		<h2 style="font-size: 12pt!important;">
		Geen zin om te wachten? Schrijf je in voor onze <a style="font-size: 12pt!important;" href="https://searchxrecruitment.com/en/?modal=job-alert&utm_medium=mail&utm_source=email&utm_campaign=application-success" style="color: #425CBB;"><strong>job alert</strong></a> en ontvang de nieuwste vacatures direct in je mailbox.<br/>
		Of volg ons op <a style="font-size: 12pt!important;" href="https://www.linkedin.com/company/search-x-recruitment?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>LinkedIn</strong></a> en <a style="font-size: 12pt!important;" href="https://www.instagram.com/searchxrecruitment/?utm_medium=mail&utm_source=email&utm_campaign=application-success"><strong>Instagram</strong></a> voor het laatste nieuws over IT, Renewable en Engineering.
		<br/><br/>
		Team Search X
		</h2>
	';
	$first = $lang && $lang === 'nl' ? $firstNL : $firstEN;
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
                                <td style="padding-top: 30px;">
                                    <p style="font-size: 10pt!important;">
                                        Keep in mind that by applying on our website you have agreed to and accepted the terms of our <a href="https://www.searchxrecruitment.com/en/privacy-policy" style="color: #425CBB; font-size: 10pt!important; font-size: 10pt!important;">Privacy Policy</a>.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p>This is an automatic message. Please do not reply to it.</p>
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
