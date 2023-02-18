<?php

$nomeCompleto = "Bonieky Lacerda<br>";
echo trim($nomeCompleto)."<br>"; // Remove os espaços

echo strlen($nomeCompleto)."<br>";;

echo strtolower($nomeCompleto)."<br>";
echo strtoupper($nomeCompleto)."<br>";

echo substr($nomeCompleto, 1, 2)."<br>";

$nomeAlterado = str_replace("Bonie", "Ka", $nomeCompleto);
echo $nomeAlterado."<br>";

echo $posicao = strpos($nomeCompleto, "z")."<br>123";
if($posicao > -1){
  echo "Achou";
}else{
  echo "Não Achou";
}




