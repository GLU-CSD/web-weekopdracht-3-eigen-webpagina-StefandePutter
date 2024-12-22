<?php
$servername = "localhost";
$username = "u240595_next-g3n";
$password = "wtqNYnkqFCpCQXyvs4Gm";
$dbname = "u240595_next-g3n";

// Hostname:
// localhost
// Database:
// u240595_next-g3n
// Username:
// u240595_next-g3n
// Password:
// wtqNYnkqFCpCQXyvs4Gm

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM jackets";
$result = $conn->query($sql);

$result = $result->fetch_all(MYSQLI_ASSOC);

$json = json_encode($result);

file_put_contents("result_data.json", $json);

$conn->close();


?>