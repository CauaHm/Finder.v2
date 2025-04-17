<?php

$host = '127.0.0.1:3306';
$user = 'root'; 
$password = 'telef8ne'; 
$database = 'finder_bd';
$conn = new mysqli($host, $user, $password, $database);

if($conn->connect_error){
    die("Conexão com banco de dados falhou{$conn->connect_error}");
}

echo"Conexão funcionou";


