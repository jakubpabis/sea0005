<?php
/**
 * Template Name: App success
 */

 if( isset( $_GET['message'] ) ) {
     $url = preg_replace('/\?.*/', '', $_GET['ref']);
     $redirect = $url.'?message='.$_GET['message'];
 } elseif( isset( $_GET['messagecv'] ) ) {
     $url = preg_replace('/\?.*/', '', $_GET['ref']);
     $redirect = $url.'?messagecv='.$_GET['messagecv'];
 } elseif( isset( $_GET['messagesb'] ) ) {
     $url = preg_replace('/\?.*/', '', $_GET['ref']);
     $redirect = $url.'?messagesb='.$_GET['messagesb'];
 } elseif( isset( $_GET['messagect'] ) ) {
     $url = preg_replace('/\?.*/', '', $_GET['ref']);
     $redirect = $url.'?messagect='.$_GET['messagect'];
 }
 header("Location: $redirect");
