<!DOCTYPE html>
<html>
<head>
	<title>AJAX</title>
	<style>
		.section div{
			display: inline-block;
			width: 24%;
			margin: auto;
		}
	</style>
</head>
<body>
	<div class="section">
	</div>
	<form>
		<div>
			<input id="contacts" type="radio" name="choix" value="contacts">
			<label>J'affiche du JSON</label>
		</div>
		<div>
			<input id="section" type="radio" name="choix" value="section">
			<label>J'affiche du texte</label>
		</div>
		<div>
			<input id="films" type="radio" name="choix" value="films">
			<label>J'affiche les films</label>
		</div>
		<div>
			<input type="submit" name="submit">
		</div>
	</form>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>