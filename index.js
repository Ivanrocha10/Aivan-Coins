function Converter() {
  var valorElemento = document.getElementById("valor")
  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)

  var valorEmReal = valorEmDolar * 5.33

  var elementoConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em real é R$ " + valorEmReal
  elementoConvertido.innerHTML = valorConvertido
}