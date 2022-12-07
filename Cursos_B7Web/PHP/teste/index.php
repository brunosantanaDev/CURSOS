<?php require("conexao.php"); ?>

<!--
  <form action="processador.php?a=upload" enctype="multipart/form-data" method="post">
  <input type="file" name="images"><br>
  <button>Enviar</button>
</form>
-->
<br>
<hr>
<br>

<h1>Cadastrar Usuário:</h1>
<form action="processador.php?a=cadUsuario" method="post">
  <input type="email" name="email" style="margin-bottom:5px;"><br>
  <input type="password" name="pass"><br><br>
  <button>Cadastrar</button>
</form>

<?php
  $sql = mysql_query("SELECT * FROM usuario");
  while($linha = mysql_fetch_array($sql)){
      $email = $linha['email'];
      $senha = $linha['senha'];
  }
  echo "Email: ".$email." e Senha: ".$senha."<br>";
?>



