window.addEventListener("load", main);

let galeria = [];
let indiceAtual = 0;

async function main() {
    try {
        const dados = await fetch("http://localhost:3000/api/galeria");
        const dadosPuros = await dados.json();
        galeria = dadosPuros;
        const divGaleria = document.getElementById("div-galeria");

        for(let x =0; x < galeria.length; x++ ){
            const divPintor = document.createElement("div");
            const divImg = document.createElement("div");
            divImg.className = "divImg"
            const divText = document.createElement("div");
            divText.className = "divText"
            const imgPintor = document.createElement("img");
            imgPintor.className="img-galeria";
            imgPintor.loading="lazy";

            const h3Pintor = document.createElement("h3");
            h3Pintor.className= "h3-galeria";
            const spanPintor = document.createElement("span");
            spanPintor.className= "span-galeria";
            divPintor.className="pintor";
            divPintor.id = x;

            imgPintor.src = galeria[x].img;
            h3Pintor.textContent = galeria[x].pintor;
            spanPintor.textContent = galeria[x].descricao;

            divImg.appendChild(imgPintor);
            divText.appendChild(h3Pintor);
            divText.appendChild(spanPintor);
            divPintor.appendChild(divImg);
            divPintor.appendChild(divText);

            divGaleria.appendChild(divPintor);

        }
        mostrarSlide(currentIndex);
    } catch (error) {
        console.error("Erro ao carregar a galeria: ",error);
        document.getElementById("div-galeria").innerHTML = "<p> Erro ao carregar a galeria. Tente novamente mais tarde.</p>";
    }
   
}

function mostrarSlide(index){
    const slides = document.querySelectorAll('.pintor');
    const totalSlides = slides.length;

    slides.forEach(slide => slide.classList.remove('active'));

    if(index >= totalSlides){
        indiceAtual = 0;
    }else if(index < 0){
        indiceAtual = totalSlides -1;
    }else{
        indiceAtual = index;
    }
    slides[indiceAtual].classList.add('active');

}

function proximoSlide(){
    mostrarSlide(indiceAtual + 1);
}

function anteriorSlide(){
    mostrarSlide(indiceAtual -1);
}