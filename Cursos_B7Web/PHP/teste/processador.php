<?php


if(isset($_GET['a']) === "upload"){
  $tipo = $_FILES['images']['type'];
  $extPermitida = array("image/jpeg","image/jpg","image/png");

  if(in_array($tipo, $extPermitida)){
    switch($tipo){
      case "image/jpeg":
        $ext = ".jpeg";
        break;

      case "image/jpg":
        $ext = ".jpg";
        break;

      case "image/png":
        $ext = ".png";
        break;
    }

    $nomeArq = md5(time().rand(0,5000)).$ext;
    move_uploaded_file($_FILES["images"]["tmp_name"], "./imagem/".$nomeArq);
    echo "<span style='color: green;'>Imagem Cadastrada Com Sucesso!!!</span>";
    echo '<meta http-equiv="refresh" content="2; url=index.php">';

  }else{
    echo "<span style='color:red;'>Arquivo Não Permitido</span>";
    echo '<meta http-equiv="refresh" content="4; url=index.php">';
    exit;
  }
}


if(isset($_GET["a"]) == "cadUsuario"){
  echo "Pronto Para Cadastrar";
  echo '<meta http-equiv="refresh" content="4; url=index.php">';
}