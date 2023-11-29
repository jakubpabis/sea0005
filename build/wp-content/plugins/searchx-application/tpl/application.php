<?php

function appEmailTemplate()
{
	$job_link = 'https://' . $_SERVER['SERVER_NAME'] . $_POST['_wp_http_referer'];
	$job_title = get_the_title($_POST['postid']);
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
                                <td>
                                    <h1 style="font-size: 12pt!important;">
																		Hi, you! Thanks for applying to the position of <a href="' . $job_link . '" style="color: #425CBB; font-size: 12pt!important;">' . $job_title . '</a>. , you made the first important step to a new challenge!<br/>
																		We’ve received your application in good order and our recruiters will carefully review your profile to see if you are the perfect match. We’re ready for it, what about you?
																		<br/><br/>
																		Of course, we will let you know if that match made in heaven is there, and you can expect to hear from us soon!<br/>
                                    </h1>
																		<h2 style="font-size: 12pt!important;">
																		Don’t want to miss a thing? Make a <a href="https://searchxrecruitment.com/en/?modal=job-alert" style="color: #425CBB;"><strong>job alert</strong></a> and receive the latest vacancies directly in your mailbox! Because we all know, standing still is not an option.
																		</h2>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 40px;">
                                    <p style="font-size: 10pt!important;">
																		To infinity and beyond! Want to be the first one to know? Stay tuned on our latest posts by following us on:
                                    </p>
                                    <p style="font-size: 10pt!important;">
                                        <a href="https://www.linkedin.com/company/search-x-recruitment/"><strong>LinkedIn</strong></a><br/>
                                        <a href="https://www.instagram.com/searchxrecruitment/"><strong>Instagram</strong></a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td style="padding-top: 30px;">
                                    <p style="font-size: 10pt!important;">
                                        Keep in mind that by applying on our website you have agreed to and accepted the terms of our <a href="https://www.searchxrecruitment.com/en/privacy-policy" style="color: #425CBB; font-size: 10pt!important;">Privacy Policy</a>.
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
