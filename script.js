const banco = [
{
  id : "0",
  armazem: "adcionarAoCarrinho0 ()",
  srcImg: "img/image1.png",
  altImg: "Black Hat",
  titleIMg: "Black Hat",
  titleNew: "Black Hat",
  parNew:
    "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
  categoria: "Acessórios",
  preco: "R$ 100.00",
  secao: "main",
},
{
  id : "1",
  armazem: "adcionarAoCarrinho1 ()",
  srcImg: "img/Men-Jacket-Front-Black__154661.png",
  altImg: "Lightweight Jacket",
  titleIMg: "Lightweight Jacket",
  titleNew: "Lightweight Jacket",
  parNew:"Adicione um pouco de energia sao seu guarda-roupa de inverno com esta jaqueta vibrante...",
  categoria: "Jaquetas",
  preco: "R$ 100.00",
  secao: "main",
},
{
  id : "2",
  armazem: "adcionarAoCarrinho2 ()",
  srcImg: "img/Men-TShirt-Black-Front__700461.png",
  altImg: "T-Shirt",
  titleIMg: "T-Shirt",
  titleNew: "T Shirt",
  parNew:"Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
  categoria: "Camisetas",
  preco: "R$ 100.00",
  secao: "main",
},
{
  id : "3",
  armazem: "adcionarAoCarrinho3 ()",
  srcImg: "img/mockup-a0dc2330__621461.png",
  altImg: "Short-Sleeve T-Shirt",
  titleIMg: "Short-Sleeve T-Shirt",
  titleNew: "Short Sleeve T Shirt",
  parNew:"Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
  categoria: "Camisetas",
  preco: "R$ 100.00",
  secao: "main",
},
{
  id : "4",
  armazem: "adcionarAoCarrinho4 ()",
  srcImg: "img/mockup-9b9894f1__673471.png",
  altImg: "Champion Packable Jacket",
  titleIMg: "Champion Packable Jacket",
  titleNew: "Champion Jacket",
  parNew:"Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
  categoria: "Jaquetas",
  preco: "R$ 100.00",
  secao: "main",
},
{
  id : "5",
  armazem: "adcionarAoCarrinho5 ()",
  srcImg: "img/Surgical-Mask-Black__895541.png",
  altImg: "Mask",
  titleIMg: "Mask",
  titleNew: "Mask",
  parNew:"Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
  categoria: "Acessórios",
  preco: "R$ 40.00",
  secao: "main",
},
];

criarCaixaPreta()
criarVitrines()



let containerArticles = document.getElementById("container-articles");

let conainerCategorias = document.getElementById("container-categorias");

let caixaP = document.getElementById("caixaPreta")

let encontrar = document.getElementsByClassName("selecionado")


function baseDaVitrine(  
id,
imgScr,
altImg,
tituloImg,
tituloNoticia,
paragrafoNoticia,
categoriaNoticia,
preco,
armazem
)
{

let previewArticle = document.createElement("article");
previewArticle.setAttribute("class", "preview-article");

previewArticle.innerHTML = `<img class="imgGrande" src=${imgScr}  alt=${altImg} title=${tituloImg}/>
<section class="categoria"><button class="botao">${categoriaNoticia}</button> </section>
<h2 class="titulo"><a href="">${tituloNoticia}</a></h2>
<p class="paragrafo">
${paragrafoNoticia}
</p>
<p class="money"> ${preco}</p>
<p id=${id} class="add"> <a  href="#" onclick="${armazem}"> Adicionar ao carrinho</a></p>`   
;

let localizar = document.getElementById("container-articles")

localizar.appendChild(previewArticle);
}


function criarVitrines(dados = banco) {
  dados.forEach(function (item) {
    if (item.secao) {
      baseDaVitrine(
        item.id,
        item.srcImg,
        item.altImg,
        item.titleIMg,
        item.titleNew,
        item.parNew,
        item.categoria,
        item.preco,
        item.armazem
      );
    }
  })
}





conainerCategorias.addEventListener("click", filterContent);

function filterContent(event) {
let btnNav = document.querySelectorAll("li")
  let itemClicked = event.target

  
  if(itemClicked.id !== "container-categorias"){
    btnNav.forEach((item) => {
      item.classList.remove("sele");
    });
    
  itemClicked.classList.add("sele")

  let categoriaselecionada = itemClicked.innerText

  const filtroCategoria = banco.filter(function(caracter){
    return caracter.categoria.includes(categoriaselecionada)
  });

if(categoriaselecionada == "Todos"){
  containerArticles.innerHTML = ""
  criarVitrines()
}
else{
  containerArticles.innerHTML = ""
  criarVitrines(filtroCategoria)
}
}
}





let seachBar = document.getElementById("caixaDePesquisa")
let botaoPesquisa = document.getElementById("botãoFiltro")

botaoPesquisa.addEventListener("click",buscarConteudo)

function buscarConteudo(event){
event.preventDefault()

let textoDigitado = seachBar.value
let tratamento1 = textoDigitado.toLowerCase()
let tratamento2 = tratamento1.split(" ")
let tratamento3 = tratamento2.join("")

console.log(tratamento3)

if(tratamento3 == "blackhat") {
  let local = document.getElementById("container-articles")
  local.innerHTML = ""
  
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "preview-article");
  
  previewArticle.innerHTML = `
    <img class="imgGrande" src=img/image1.png  alt= title=/>
    <section class="categoria"><button class="botao">Acessórios</button> </section>
    <h2 class="titulo"><a href="">Black Hat</a></h2>
    <p class="paragrafo">
    "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    </p>
    <p class="money"> 100.00</p>
    <p class="add"> <a  href="#" onclick=""> Adicionar ao carrinho</a></p>
    ` 
    local.appendChild(previewArticle);
  }
  
  if(tratamento3 == "lightweightjacket") {
  event.preventDefault()
  
  let local = document.getElementById("container-articles")
  local.innerHTML = ""
  
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "preview-article");
  
  previewArticle.innerHTML = `
    <img class="imgGrande" src=img/Men-Jacket-Front-Black__154661.png  alt=Editores de Código -  Como escolher um bom editor title= Editores de Código -  Como escolher um bom editor/>
    <section class="categoria"><button class="botao">Jaquetas</button> </section>
    <h2 class="titulo"><a href="">Lightweight Jacket</a></h2>
    <p class="paragrafo">
    Adicione um pouco de energia sao seu guarda-roupa de inverno com esta jaqueta vibrante..."  </p>
    <p class="money"> 100.00</p>
    <p class="add"> <a  href="#" onclick=""> Adicionar ao carrinho</a></p>
    ` 
    local.appendChild(previewArticle);
  }
  
  if(tratamento3 == "tshirt" ) {
  event.preventDefault()
  
  let local = document.getElementById("container-articles")
  local.innerHTML = ""
  
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "preview-article");
  
  previewArticle.innerHTML = `
    <img class="imgGrande" src=img/Men-TShirt-Black-Front__700461.png  alt=Editores de Código/>
    <section class="categoria"><button class="botao">Camisetas</button> </section>
    <h2 class="titulo"><a href="">T Shirt</a></h2>
    <p class="paragrafo">
    Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...  <p class="add"> <a  href="#" onclick=""> Adicionar ao carrinho</a></p>
    ` 
    local.appendChild(previewArticle);
  }
  
  if(tratamento3 == "shortsleevetshirt") {
  event.preventDefault()
  
  let local = document.getElementById("container-articles")
  local.innerHTML = ""
  
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "preview-article");
  
  previewArticle.innerHTML = `
    <img class="imgGrande" src=img/mockup-a0dc2330__621461.png  alt=Editores de Código/>
    <section class="categoria"><button class="botao">Camisetas</button> </section>
    <h2 class="titulo"><a href="">Short-Sleeve T-Shirt</a></h2>
    <p class="paragrafo">
    Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...  <p class="add"> <a  href="#" onclick=""> Adicionar ao carrinho</a></p>
    ` 
    local.appendChild(previewArticle);
  }
  
  if(tratamento3 == "championjacket") {
    event.preventDefault()
    
    let local = document.getElementById("container-articles")
    local.innerHTML = ""
    
    let previewArticle = document.createElement("article");
    previewArticle.setAttribute("class", "preview-article");
    
    previewArticle.innerHTML = `
      <img class="imgGrande" src=img/mockup-9b9894f1__673471.png  alt=Editores de Código/>
      <section class="categoria"><button class="botao">Jaquetas</button> </section>
      <h2 class="titulo"><a href="">Champion Packable Jacket</a></h2>
      <p class="paragrafo">
      Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...      ` 
      local.appendChild(previewArticle);
    }

    if(tratamento3 == "mask") {
      event.preventDefault()
      
      let local = document.getElementById("container-articles")
      local.innerHTML = ""
      
      let previewArticle = document.createElement("article");
      previewArticle.setAttribute("class", "preview-article");
      
      previewArticle.innerHTML = `
        <img class="imgGrande" src=img/Surgical-Mask-Black__895541.png alt=Editores de Código/>
        <section class="categoria"><button class="botao">Acessórios</button> </section>
        <h2 class="titulo"><a href="">Mask</a></h2>
        <p class="paragrafo">
        Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...      
          ` 
        local.appendChild(previewArticle);
      }

}


function ajustarQuantidade(){
let encontrarA0 = document.getElementsByClassName("a0").length
let encontrarA1 = document.getElementsByClassName("a1").length
let encontrarA2 = document.getElementsByClassName("a2").length
let encontrarA3 = document.getElementsByClassName("a3").length
let encontrarA4 = document.getElementsByClassName("a4").length
let encontrarA5 = document.getElementsByClassName("a5").length
let total =  encontrarA0 + encontrarA1 + encontrarA2 + encontrarA3 + encontrarA4 + encontrarA5
return total
}

function ajustarPreco (){
let valor0 = document.getElementsByClassName("a0").length
let valor1 = document.getElementsByClassName("a1").length
let valor2 = document.getElementsByClassName("a2").length
let valor3 = document.getElementsByClassName("a3").length
let valor4 = document.getElementsByClassName("a4").length
let valor5 = document.getElementsByClassName("a5").length

let soma0 = 100 * valor0
let soma1 = 100 * valor1
let soma2 = 100 * valor2
let soma3 = 100 * valor3
let soma4 = 100 * valor4
let soma5 = 40 * valor5

let total = soma0 + soma1 + soma2 + soma3 + soma4 + soma5

return total
}

function criarCaixaPreta(){
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "caixaPreta2");
  
  previewArticle.innerHTML = 
  `
  <p class="totalPreco">Quantidade</p>
  <p class="totalPreco">${ajustarQuantidade()}</p>
  <p class="totalPreco">Total</p>
  <p class="totalPreco"> R$ ${ajustarPreco()}.00</p>
  `  
  ;
  
  let localizar = document.getElementById("caixaPreta")
  
  localizar.appendChild(previewArticle);
}

function removerCarrinhoVazio(){
  let local = document.getElementById("carrinhoVazio")
  local.innerHTML = ""
  local.style.display="none"
}





function adcionarAoCarrinho0(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a0");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/image1.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">Black Hat</a></h2>
   <p class="money"> R$ 100.00 </p>
   <a href="#" onclick="tirarA0 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);



  caixaP.innerHTML = ""
  criarCaixaPreta()
}

function adcionarAoCarrinho1(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a1");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/Men-Jacket-Front-Black__154661.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">Lightweight Jacket</a></h2>
   <p class="money"> R$ 100.00 </p>
   <a href="#" onclick="tirarA1 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);


  
  caixaP.innerHTML = ""
  criarCaixaPreta()
}

function adcionarAoCarrinho2(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a2");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/Men-TShirt-Black-Front__700461.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">T Shirt</a></h2>
   <p class="money"> R$ 100.00 </p>
   <a href="#" onclick="tirarA2 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);


  

  caixaP.innerHTML = ""
  criarCaixaPreta()
}

function adcionarAoCarrinho3(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a3");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/mockup-a0dc2330__621461.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">Short Sleeve T Shirt</a></h2>
   <p class="money"> R$ 100.00 </p>
   <a href="#" onclick="tirarA3 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);



  caixaP.innerHTML = ""
  criarCaixaPreta()
}

function adcionarAoCarrinho4(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a4");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/mockup-9b9894f1__673471.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">Champion Packable Jacket</a></h2>
   <p class="money"> R$ 100.00 </p>
   <a href="#" onclick="tirarA4 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);



    caixaP.innerHTML = ""
    criarCaixaPreta()
}

function adcionarAoCarrinho5(){
  removerCarrinhoVazio()
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "a5");
  
  previewArticle.innerHTML = 
  `
  <img class="imgPequena" src=img/Surgical-Mask-Black__895541.png  alt= title=/>
  <div class="tituloNoCarrinhoDeCompras">
   <h2 class="titulo"><a href="">Mask</a></h2>
   <p class="money"> R$ 40.00 </p>
   <a href="#" onclick="tirarA5 ()" class="remote">Remover item</a>
  </div>

 `
  let localizar = document.getElementById("carrinhoDeComprasTudo")
  
  localizar.appendChild(previewArticle);



      caixaP.innerHTML = ""
      criarCaixaPreta()
}





function contarA0 (){
  let localizar = document.getElementsByClassName("a0").length
  let localizado = localizar -1
  return localizado
  }
  
function tirarA0 (){
let local = contarA0()
console.log(local)
let localizar = document.getElementsByClassName("a0")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a0")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA0()
}



function contarA1 (){
  let localizar = document.getElementsByClassName("a1").length
  let localizado = localizar -1
  return localizado
  }
  
function tirarA1 (){
let local = contarA1()
console.log(local)
let localizar = document.getElementsByClassName("a1")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a1")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA1()
}



function contarA2 (){
  let localizar = document.getElementsByClassName("a2").length
  let localizado = localizar -1
  return localizado
  }
  
function tirarA2 (){
let local = contarA2()
console.log(local)
let localizar = document.getElementsByClassName("a2")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a2")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA2()
}



function contarA3 (){
  let localizar = document.getElementsByClassName("a3").length
  let localizado = localizar -1
  return localizado
  }
  
function tirarA3 (){
let local = contarA3()
console.log(local)
let localizar = document.getElementsByClassName("a3")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a3")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA3()
}



function contarA4 (){
  let localizar = document.getElementsByClassName("a4").length
  let localizado = localizar -1
  return localizado


  }
function tirarA4 (){
let local = contarA4()
console.log(local)
let localizar = document.getElementsByClassName("a4")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a4")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA4()
}



function contarA5 (){
  let localizar = document.getElementsByClassName("a5").length
  let localizado = localizar -1
  return localizado
  }
  
function tirarA5 (){
let local = contarA5()
console.log(local)
let localizar = document.getElementsByClassName("a5")[local]
localizar.innerHTML = ""
localizar.style.display="none"
localizar.classList.remove("a5")


caixaP.innerHTML = ""
criarCaixaPreta()
contarA5()
}
