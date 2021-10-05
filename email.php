<?php

if(isset($_POST['E-mail']) && !empty($_POST['E-mail']) ){
$nome = addcslashes($_POST['Name'])
$email = addcslashes($_POST['Email'])
$mensagem = addcslashes($_POST['message'])

$to = "allg33kx@gmail.com";
$subject = "Contato - Formulário de Contato";
$body = "Nome: ".$Nome. "\r\n".
        "E-mail: ".$Email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From:allg33kx@gmail.com"."\r\n".
           "Reply-To:".$Email."\r\n".
           "X=Mailer:PHP/".phpversion();
if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");

}else{
    echo("O Email não pode ser enviado");
}



}

?>