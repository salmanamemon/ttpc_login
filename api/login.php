<?php
header("Access-Control-Allow-Origin: *");
include("config.php");
try{
	// echo "Success";
	$email = trim($_POST['email']);
	$password = trim($_POST['password']);
	// $email = "memon.salman@gmail.com";
	// $password = "12345";
	
	if(isset($email,$password) && !empty($email) && !empty($password)){
		$sql = "SELECT * FROM members WHERE email='$email'";
		$query = $conn->prepare( $sql );
		$query->execute();
		$results = $query->fetchAll( PDO::FETCH_ASSOC );
		if($results){
			$sql = "SELECT * FROM members WHERE email='$email' AND password='$password'";
			$query = $conn->prepare( $sql );
			$query->execute();
			$resultsP = $query->fetchAll( PDO::FETCH_ASSOC );
			if($resultsP){
				echo json_encode(array("message" => "Welcome to Our Site", "status" => "SUCCESS", "data" => $resultsP));
			}
			else{
				echo json_encode(array("message" => 'Password is incorrect', "status" => "FAILED" ));
			}
		}
		else{
			echo json_encode(array("message" => 'We do not know this email', "status" => "FAILED" ));
		}
	}
	else{
		echo json_encode(array("message" => 'Enter an email and password', "status" => "FAILED"));
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>