<?php 
    $nome = $_GET['nome'] ?? 'VAZIO';
    $email = $_GET['email'] ?? 'VAZIO';
    $cel = $_GET['cel'] ?? 'VAZIO';
    $msg = $_GET['msg'] ?? 'VAZIO';

    $para = "cauamh321@gmail.com";
    $assunto = "Duvidas - FINDER";

    $mensagemCompleta = "
    Nome: {$nome}\n
    Email: {$email}\n
    Telefone: {$email}\n\n
    Mensagem de duvida: {$msg}
    ";

    if(mail($para, $assunto, $mensagemCompleta)) {
        echo "<script>alert('E-mail enviado com sucesso!')</script>";
    } else {
        echo "<script>alert('ERRO, verifique os campos')</script>";
    }; 

?>