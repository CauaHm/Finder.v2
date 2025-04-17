<?php
include("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if(empty($email) || empty($password)){
        echo "<script>alert('Preencha todos os campos'); window.location.href='login.html';</script>";
        exit;
    }

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?"); 
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $emailResult = $stmt->get_result();

    if ($emailResult->num_rows > 0) {
        $row = $emailResult->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            session_start();
            $_SESSION["user_id"] = $row["id"];
            echo "<script>alert('Login realizado com sucesso!'); window.location.href='index.html';</script>";
            exit;
        } else {
            echo "<script>alert('Senha incorreta'); window.location.href='login.html';</script>";
        }
    } else {
        echo "<script>alert('Email não encontrado. Verifique seus dados.'); window.location.href='login.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>