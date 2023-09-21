function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //muda o fundo da página
  html.classList.toggle("light") //ja faz direto esse if else, a função toggle

  //para alterar algum atributo da página ao clicar
  const img = document.querySelector("#profile-img") //querySelector é uma funcao de pesquisa e nessa instrução nós pegamos a tag

  //funciona assim para qualquer atributo de alguma tag
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu.png") //o primeiro argumento é o parametro da tag e o segundo é a modificação
  } else {
    img.setAttribute("src", "./assets/eu.png")
  }
}
