<!DOCTYPE html>

<html>
<head>
<title> AJAX Exercise </title>
</head>

<body>

<h1 id="headline">My faves</h1>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3./jquery.min.js"></script>

<script>

$(document).ready(function(){
	$.ajax({

		dataType: 'json',
		url:'js/myfaves.js',
		
	}



		)
}