function loadlivros() {
 const xhr1 = new XMLHttpRequest();
 var busca = document.getElementById("Input").value
 var tipo = document.getElementById("selec").value
 var conteudo = document.getElementById('conteudo')
 xhr1.open("GET",
 `https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${busca}AIzaSyBbxaeTyfRqWpNZPBlVMLWI1OArPGRKa5g`
  );
  xhr1.onreadystatechange = function () {
   if (xhr1.status = 200 && xhr1.readyState == 4) {
    let dadosJSONText = xhr1.responseText
     let info = JSON.parse(dadosJSONText)
      for (let i = 0; i <= info.items.length; i++) {
        conteudo.innerHTML +=
     `<div class="demo-card-wide mdl-card mdl-shadow--2dp" align="center" style="width:49%; justify-content:center; align-items:center">
     <img id="thumbnail" src="${info.items[i].volumeInfo.imageLinks.thumbnail}" style="width:200px;">
        <p id="title" class="hi">
         Titulo: ${info.items[i].volumeInfo.title}
          </p>
           <p id="subt" class="hi">
             Subtitulo: ${info.items[i].volumeInfo.subtitle}
            </p>
              <p>
               Categoria: ${info.items[i].volumeInfo.categories}
                 </p>
                 <p id="autor" class="hi">
                   Autor: ${info.items[i].volumeInfo.authors}
                 </p>
                 <p id="date" class="hi">
                  Data de Publicação: ${info.items[i].volumeInfo.publishedDate}
                 </p>
                <p id="desc" style="text-align:justify">
                 Descrição: ${info.items[i].volumeInfo.description}
                 </p>
                 <div id="moreinfo">
                  <a id="apilivro" target="_blank" class="link" href="${info.items[i].selfLink}">
                     API do Livro
                 </a>
                  <a href="${info.items[i].volumeInfo.infoLink}" class="link" target="_blank">
                    Mais Informações
                   </a>
                <a href="${info.items[i].saleInfo.buyLink}" class="link" target="_blank">
                  Link de Compra
                 </a>
                 </div>
               </>`
            }
        }
    }
    xhr1.send();
}
document.getElementById("Input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("srcbtn").click();
    }
})