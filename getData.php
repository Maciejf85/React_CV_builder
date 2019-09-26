<?php

require_once "connect.php";


$json = file_get_contents('php://input');

$obj = json_decode($json);

// user login data
// -----------------------
$user = 'fialek85@gmail.com';
$password = '123';
// -----------------------





// Create connection
$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);
// Check connection
if ($polaczenie->connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{
		$sql = "SELECT * FROM users WHERE user='$user' AND password=`$password` ";
	
		if ($rezultat = $polaczenie->query($sql))
		{            
            
            $ilu_userow = $rezultat->num_rows;
			if($ilu_userow>0)
			{				

				$array = array();

				// while($row = $rezultat->fetch_assoc()){

				// 	$rowArray = array(
				// 		"id" => $row['id'],
				// 		"token" => $row['token'],
                //         'date'=>$row['date'],
				// 	);
				// 	array_push($array, $rowArray);
				// }

				// $json_file = file_get_contents($token.'/'.'data.json');
				// array_push($array, $json_file);

				
				// echo json_encode($array);
				
				$rezultat->free_result();
				
				
			} else {
				$err = array( 'error' => 'Błąd');
				$error = json_encode($err);
				echo $error;
				
			}
			
		}
		
		$polaczenie->close();
	}


?>