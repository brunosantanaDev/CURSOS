<?php 

$bolo1 = [
  "açucar",
  "farinha",
  "ovo",
  "leite",
  "fermento",
];

$lista = [
  "nome" => "Bruno",
  "sobrenome" => "Santana",
];

echo $lista["sobrenome"];

$bolo2 = [
  ...$bolo1,
  "corante",
];

 //echo $bolo2[5];