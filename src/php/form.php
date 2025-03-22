<?php 
    $nome = $_POST['nome'] ?? 'VAZIO';
    $email = $_POST['email'] ?? 'VAZIO';
    $cel = $_POST['cel'] ?? 'VAZIO';
    $msg = $_POST['msg'] ?? 'VAZIO';

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
    }

    header('Location: index.html');
?>