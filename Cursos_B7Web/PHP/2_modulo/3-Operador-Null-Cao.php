<?php

$nome = "Bruno ";
$sobrenome = "Santana";

$nomeCompleto = $nome;
$nomeCompleto .= $sobrenome ?? "Visitante";

echo $nomeCompleto;












