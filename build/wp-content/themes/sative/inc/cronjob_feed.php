<?php


/**
 * Create/update XML feed
 *
 * @return void
 */
function xmlCreateFeed()
{

	//add_redirection($a, $b, 301);
	save_nodes_to_file();
}

function save_nodes_to_file()
{
	$letters = range('a', 'z');
	$xml_file_url = 'https://jobs.searchsoftware.nl/searchit.xml';
	$xml_hash_file_path = dirname(__DIR__, 1) . '/xml/xml_hash.txt';
	$new_xml_file_path = dirname(__DIR__, 1) . '/xml/vacancies.xml';
	$new_xml_linkedin_file_path = dirname(__DIR__, 1) . '/xml/vacancies_linkedin.xml';

	$xml_content = file_get_contents($xml_file_url);
	$xml_hash = md5($xml_content);
	$stored_hash = file_exists($xml_hash_file_path) ? file_get_contents($xml_hash_file_path) : '';

	if ($xml_hash !== $stored_hash) {
		$xml = new SimpleXMLElement($xml_content);

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


		$dom_linkedin = new DOMDocument('1.0');
		$dom_linkedin->formatOutput = true;
		$dom_linkedin_vacancies = $dom_linkedin->createElement('vacancies');
		$dom_linkedin->appendChild($dom_linkedin_vacancies);

		foreach ($xml->vacancy as $vacancy) {
			$dom_linkedin_vacancy = dom_import_simplexml($vacancy);
			$dom_linkedin_vacancy = $dom_linkedin->importNode($dom_linkedin_vacancy, true);

			$now = time();
			$your_date = strtotime($dom_linkedin_vacancy->getElementsByTagName('publish_date')->item(0)->nodeValue);
			$datediff = $now - $your_date;
			$datediff_days = round($datediff / (60 * 60 * 24));

			if ($datediff_days > 30) {
				// Modify the 'id' attribute
				$vac_ID = $dom_linkedin_vacancy->getAttribute('id');
				$dom_linkedin_vacancy->setAttribute('id', $vac_ID . 'A');

				// Modify the <id> node
				$id_node = $dom_linkedin_vacancy->getElementsByTagName('id')->item(0);
				$id_node->nodeValue = $vac_ID . 'A';

				// Modify the <publish_date> node

				$publish_date_node = $dom_linkedin_vacancy->getElementsByTagName('publish_date')->item(0);
				$publish_date_node->nodeValue = date("d-m-Y H:i:s");

				// Modify the <modify_date> node
				$modify_date_node = $dom_linkedin_vacancy->getElementsByTagName('modify_date')->item(0);
				$modify_date_node->nodeValue = date("d-m-Y H:i:s");



				// Modify the <url> node
				$url_node = $dom_linkedin_vacancy->getElementsByTagName('url')->item(0);
				$url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('url')->item(0)->nodeValue . 'A';

				// Modify the <apply_url> node
				$apply_url_node = $dom_linkedin_vacancy->getElementsByTagName('apply_url')->item(0);
				$apply_url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('apply_url')->item(0)->nodeValue . 'A';

				// Modify the <job_url> node
				$job_url_node = $dom_linkedin_vacancy->getElementsByTagName('job_url')->item(0);
				$job_url_node->nodeValue = $dom_linkedin_vacancy->getElementsByTagName('job_url')->item(0)->nodeValue . 'A';
			}

			$dom_linkedin_vacancies->appendChild($dom_linkedin_vacancy);
		}

		$xml_string_linkedin = $dom_linkedin->saveXML();
		file_put_contents($new_xml_linkedin_file_path, $xml_string_linkedin);


		echo 'Success :)';
	} else {
		echo 'No changes';
	}
}

function add_redirection($source_url, $target_url, $http_code = 301)
{
	$api_endpoint = get_site_url() . '/wp-json/redirection/v1/redirect/';

	$response = wp_remote_post($api_endpoint, array(
		'headers' => array(
			'Content-Type' => 'application/json; charset=utf-8',
			'Authorization' => 'Bearer 91bf991ebd9bf21fe24f2f78d555f93b', // replace with your API key
		),
		'body' => json_encode(array(
			'url' => $source_url,
			'action_data' => array('url' => $target_url),
			'action_code' => $http_code,
			'action_type' => 'url',
			'match_type' => 'url',
		)),
	));

	if (is_wp_error($response)) {
		print_r('Failed to add redirection (WP ERROR): ' . $response->get_error_message());
	} else {
		$body = json_decode(wp_remote_retrieve_body($response), true);
		if (isset($body['id'])) {
			return $body['id'];
		} else {
			print_r('Failed to add redirection: ' . print_r($body, true));
		}
	}

	return null;
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
