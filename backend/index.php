<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "next_gen";

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

file_put_contents("public/result_data.json", $json);

$conn->close();
?>