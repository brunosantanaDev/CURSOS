const chunks = number => {
  if(number === 0){
      return "";
  }
  if(number === 1){
    return "chunck"
  }else{
    return "chunck-" + chunks(number - 1)
  }
}

console.log(chunks(6))
console.log(chunks(4))
console.log(chunks(2))
console.log(chunks(1))
