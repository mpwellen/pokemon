<?php
	/*
	William's Section:

	- Create a table named "PlayersPokemon" in the "pokemon" database
		in phpMyAdmin using the following SQL statement (execute
		using the SQL tab):

		CREATE TABLE `PlayersPokemon` (
		  `id` int DEFAULT NULL,
		  `#` int DEFAULT NULL,
		  `Name` varchar(25) DEFAULT NULL,
		  `Type 1` varchar(8) DEFAULT NULL,
		  `Type 2` varchar(8) DEFAULT NULL,
		  `Total` int DEFAULT NULL,
		  `HP` int DEFAULT NULL,
		  `Attack` int DEFAULT NULL,
		  `Defense` int DEFAULT NULL,
		  `Sp. Atk` int DEFAULT NULL,
		  `Sp. Def` int DEFAULT NULL,
		  `Speed` int DEFAULT NULL,
		  `Generation` int DEFAULT NULL,
		  `Legendary` varchar(5) DEFAULT NULL,
		  `filename` varchar(20) DEFAULT NULL
		);
	*/

	// Get the random id sent in using $_GET.
	$ranid = $_GET['ranid'];

	// Copy the pokemon with id ranid from the pokemon_data table into
	// the player's list of pokemon.
	$sql = "INSERT INTO PlayersPokemon SELECT * FROM pokemon_data WHERE pokemon_data.id = '" . $ranid . "';";

	// Connect to MySQL. Don't forget to change the username and password.
	$con = mysqli_connect("localhost", "root", "pwdpwd", "pokemon");

	// Check for connection errors.
	if (mysqli_connect_error() != NULL)
	{
		die("Error connecting to MySQL: " . mysqli_connect_error());
	}

	// Execute SQL query.
	$result = mysqli_query($con, $sql);

	// Check for errors executing SQL.
	if (mysqli_error($con))
	{
		mysqli_disconnect($con);
		die("Error executing SQL: " . mysqli_error($con));
	}

	// Disconnect from MYSQL since we no longer need it.
	mysqli_close($con);

	// If everything hasb een successful, redirect back to the game.
	header('Location: examplePokemon.html');
?>