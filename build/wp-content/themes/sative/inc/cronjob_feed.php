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
				$vac_desc = $dom_linkedin_vacancy->getAttribute('description');
				$splitted = explode(']]>', $vac_desc);
				var_dump($splitted);
				$new_vac_desc = $splitted[0] . '#LI-EB1' . $splitted[1];
				$dom_linkedin_vacancy->setAttribute('description', $new_vac_desc);
			}
		}



		// $your_date = strtotime($dom_linkedin_vacancy->getElementsByTagName('publish_date')->item(0)->nodeValue);
		// $datediff = $now - $your_date;
		// $datediff_days = round($datediff / (60 * 60 * 24));

		// if ($datediff_days >= $days_to_remove) {
		// 	$index = floor($datediff_days / $days_to_remove) - 1;

		// 	if ($index > 25) {
		// 		$divider = floor($index / 25);
		// 		if ($divider > 0) {
		// 			$index = $index - $divider * 25;
		// 		}
		// 	}
		// 	if ($index >= 0) {
		// 		$letter = $letters[$index];
		// 	} else {
		// 		$letter = '';
		// 	}

		// 	// Modify the 'id' attribute
		// 	$vac_ID = $dom_linkedin_vacancy->getAttribute('id');
		// 	$dom_linkedin_vacancy->setAttribute('id', $vac_ID . $letter);
		// 	echo $vac_ID . $letter . '<br/><br/>';
		// 	// Modify the <id> node
		// 	$id_node = $dom_linkedin_vacancy->getElementsByTagName('id')->item(0);
		// 	$id_node->nodeValue = $vac_ID . $letter;

		// 	// // Modify the <publish_date> node
		// 	// $publish_date_node = $dom_linkedin_vacancy->getElementsByTagName('publish_date')->item(0);
		// 	// $publish_date_node->nodeValue = date("d-m-Y H:i:s");

		// 	// Modify the <modify_date> node
		// 	$modify_date_node = $dom_linkedin_vacancy->getElementsByTagName('modify_date')->item(0);
		// 	$modify_date_node->nodeValue = date("d-m-Y H:i:s");

		// 	// Modify the <url> node
		// 	$url_node = $dom_linkedin_vacancy->getElementsByTagName('url')->item(0);
		// 	$url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('url')->item(0)->nodeValue . $letter;

		// 	// Modify the <apply_url> node
		// 	$apply_url_node = $dom_linkedin_vacancy->getElementsByTagName('apply_url')->item(0);
		// 	$apply_url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('apply_url')->item(0)->nodeValue . $letter;

		// 	// Modify the <job_url> node
		// 	$job_url_node = $dom_linkedin_vacancy->getElementsByTagName('job_url')->item(0);
		// 	$job_url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('job_url')->item(0)->nodeValue . $letter;
		// }

		// $dom_linkedin_vacancies->appendChild($dom_linkedin_vacancy);
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
