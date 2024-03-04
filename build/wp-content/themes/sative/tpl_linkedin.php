<?php

/**
 * Template Name: Linkedin
 */
header('Content-type: text/xml');
$new_xml_file_path = __DIR__ . '/xml/vacancies_linkedin.xml';
$xml_content = file_get_contents($new_xml_file_path);
echo $xml_content;
