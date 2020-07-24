<?php
$servername = "localhost";
$username = "root";
$password = "pwdpwd";
$dbname = "pokemon";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM pokemon_data";
$result = $conn->query($sql);

$dataOutputArray = [];
if ($result->num_rows > 0) {

  while($row = $result->fetch_assoc()) {

    $dataOutput["id"] = $row["id"];
    $dataOutput["#"] = $row["#"];
    $dataOutput["Name"] = $row["Name"];
    $dataOutput["Type 1"] = $row["Type 1"];
    $dataOutput["Type 2"] = $row["Type 2"];
    $dataOutput["Total"] = $row["Total"];
    $dataOutput["HP"] = $row["HP"];
    $dataOutput["Attack"] = $row["Attack"];
    $dataOutput["Defense"] = $row["Defense"];
    $dataOutput["Sp. Atk"] = $row["Sp. Atk"];
    $dataOutput["Sp. Def"] = $row["Sp. Def"];
    $dataOutput["Speed"] = $row["Speed"];
    $dataOutput["Generation"] = $row["Generation"];
    $dataOutput["Legendary"] = $row["Legendary"];
    $dataOutput["filename"] = $row["filename"];

    array_push($dataOutputArray,$dataOutput);



  }
    echo json_encode($dataOutputArray);
}

else {
  echo "Error";
}


$conn->close();


?>
