<?php


/**
 * Create/update XML feed
 *
 * @return void
 */
function xmlCreateFeed()
{
	save_nodes_to_file();
}

function save_nodes_to_file()
{
	$days_to_remove = 10;
	$xml_file_url = 'https://jobs.searchsoftware.nl/searchit.xml';
	$xml_hash_file_path = dirname(__DIR__, 1) . '/xml/xml_hash.txt';
	$new_xml_file_path = dirname(__DIR__, 1) . '/xml/vacancies.xml';
	$new_xml_linkedin_file_path = dirname(__DIR__, 1) . '/xml/vacancies_linkedin.xml';

	$xml_content = file_get_contents($xml_file_url);
	$xml_hash = md5($xml_content);
	$stored_hash = file_exists($xml_hash_file_path) ? file_get_contents($xml_hash_file_path) : '';

	$xml = new SimpleXMLElement($xml_content);

	if ($xml_hash !== $stored_hash) {
		$dom = new DOMDocument('1.0');
		$dom->formatOutput = true;
		$dom_vacancies = $dom->createElement('vacancies');
		$dom->appendChild($dom_vacancies);

		foreach ($xml->vacancy as $vacancy) {
			$dom_vacancy = dom_import_simplexml($vacancy);
			$dom_vacancy = $dom->importNode($dom_vacancy, true);
			$dom_vacancies->appendChild($dom_vacancy);
		}

		$xml_string = $dom->saveXML();
		file_put_contents($new_xml_file_path, $xml_string);
		file_put_contents($xml_hash_file_path, $xml_hash);
	}


	$dom_linkedin = new DOMDocument('1.0');
	$dom_linkedin->formatOutput = true;
	$dom_linkedin_vacancies = $dom_linkedin->createElement('vacancies');
	$dom_linkedin->appendChild($dom_linkedin_vacancies);

	foreach ($xml->vacancy as $vacancy) {
		$dom_linkedin_vacancy = dom_import_simplexml($vacancy);
		$dom_linkedin_vacancy = $dom_linkedin->importNode($dom_linkedin_vacancy, true);
		$now = time();
		$is_linkedin = false;
		$categories = $dom_linkedin_vacancy->getElementsByTagName('category');
		foreach ($categories as $category) {
			if ($category->nodeValue === 'LinkedIn') {
				$is_linkedin = true;
			}
		}
		if ($is_linkedin) {
			$your_date = strtotime($dom_linkedin_vacancy->getElementsByTagName('modify_date')->item(0)->nodeValue);
			$datediff = $now - $your_date;
			$datediff_days = round($datediff / (60 * 60 * 24));


			if ($datediff_days <= $days_to_remove) {
				$dom_linkedin_vacancies->appendChild($dom_linkedin_vacancy);
				$description = $dom_linkedin_vacancy->getElementsByTagName('description')->item(0);

				// Get the content including HTML tags using CDATA section
				$vac_desc = '';
				foreach ($description->childNodes as $child) {
					$vac_desc .= $description->ownerDocument->saveXML($child);
				}

				if (strpos($vac_desc, ']]>') !== false) {
					$splitted = explode(']]>', $vac_desc);
					if (count($splitted) > 1) {
						// Create new CDATA section with modified content
						$new_text = $dom_linkedin->createCDATASection($splitted[0] . '#LI-EB1' . $splitted[1]);

						// Replace old content with new one
						while ($description->hasChildNodes()) {
							$description->removeChild($description->firstChild);
						}
						$description->appendChild($new_text);
					}
				}
			}
		}
	}

	$xml_string_linkedin = $dom_linkedin->saveXML();
	file_put_contents($new_xml_linkedin_file_path, $xml_string_linkedin);


	echo 'Success :)';
}



/**
 * Create valid slug from any string
 *
 * @return string
 */
function slugify($text)
{
	// replace non letter or digits by -
	$text = preg_replace('~[^\pL\d]+~u', '-', $text);
	// transliterate
	$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
	// remove unwanted characters
	$text = preg_replace('~[^-\w]+~', '', $text);
	// trim
	$text = trim($text, '-');
	// remove duplicate -
	$text = preg_replace('~-+~', '-', $text);
	// lowercase
	$text = strtolower($text);
	if (empty($text)) {
		return 'n-a';
	}
	return $text;
}
