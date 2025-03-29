<?php
include("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];     

    if(empty($name) || empty($email) || empty($password)){
        echo "<script>alert('Preencha todos os campos'); window.location.href='login.html';</script>";
        exit;
    }

    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $emailResult = $stmt->get_result();

    if ($emailResult -> num_rows > 0){
        echo "<script>alert('Este email já está vinculado a uma conta.')</script>";
    } else if (strlen($password) < 8) { 
        echo "<script>alert('A senha deve ter pelo menos 8 caracteres.')</script>";
    } else {
        $password_hash = password_hash($password, PASSWORD_DEFAULT); 

        $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)") ;
        $stmt->bind_param("sss", $name, $email, $password_hash);

        if ($stmt->execute()){
            echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href='index.html';</script>";
            exit;
        } else {
            echo "<script>alert('Erro ao realizar o cadastro')</script>";
        }
    }

    $stmt->close();
    $conn->close();
}

