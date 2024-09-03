import { dbPromise } from "./bancosql.js";
import { v4 } from "uuid";


const cursos = [
    {
        id: "curso-0",
        img: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1400780663/content-items/000/583/880/Jhonny-Deep-caricatura-peke2-original.jpg?1400780663",
        titulo: "Caricatura",
        descricao:
          "Este curso ensina técnicas para criar caricaturas, que são retratos com traços exagerados e estilizados, capturando a essência e o humor de uma pessoa. Os alunos aprendem a identificar e destacar características faciais únicas e a desenvolver seu estilo próprio de caricatura.",
        conteudo:"Estudo de anatomia facial, técnicas de distorção, uso de formas e linhas, prática com diferentes expressões e ferramentas digitais e tradicionais.",
        duracao: "2 anos",
        valor: 100.0,
    },
    {
        id: "curso-1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x9lYphCQoGyOXWoASL2sLh0ZOLE9vKL_Gg&s",
        titulo: "Pintura",
        descricao:
          "O curso de pintura abrange diversas técnicas de pintura, como aquarela, óleo, acrílico e guache. Os alunos exploram o uso da cor, luz e sombra, composição e textura, além de desenvolverem suas habilidades de observação e expressão artística.",
        conteudo:"Teoria das cores, técnicas de mistura e aplicação de tinta, estudo de obras clássicas e contemporâneas, desenvolvimento de estilo pessoal, e projetos práticos.",
        duracao: "3 anos",
        valor: 300.0,
    },
    {
        id: "curso-2",
        img: "https://i.redd.it/j85w143tk0k61.jpg",
        titulo: "Animes",
        descricao:
          "Focado na criação e design de personagens e histórias no estilo anime, este curso oferece aos alunos a oportunidade de aprender sobre o processo de criação de animes, desde o esboço até a animação. Os alunos exploram a estética japonesa, narrativa visual e técnicas de desenho digital.",
        conteudo:"Design de personagens, técnicas de animação 2D, estudo de narrativa e storyboard, uso de software de animação, e desenvolvimento de projetos originais.",
        duracao: "2 anos",
        valor: 300.0,
    },
    {
        id: "curso-3",
        img: "https://64.media.tumblr.com/5f9bed85539e80eb9e6146a242546aa1/tumblr_mr5johRwLy1srdx8no1_1280.jpg",
        titulo: "Arte Digital",
        descricao:
          "Este curso é voltado para quem deseja explorar a criação artística utilizando ferramentas digitais. Abrange desde o desenho digital básico até técnicas avançadas de ilustração, pintura digital, e manipulação de imagens.",
        conteudo:"Introdução a softwares de arte digital, técnicas de ilustração, criação de efeitos visuais, estudo de luz e sombra digitais, e desenvolvimento de portfólio digital.",
        duracao: "1 ano e 6 meses",
        valor: 200.0,
    },
];
const galeria = [
    {
        id: "galeria-0",
        img: "https://www.papeiseparede.com.br/4692-thickbox_default/papel-de-parede-a-noite-estrelada-por-vincent-van-gogh.jpg.webp",
        pintor: "Van Gogh",
        descricao: "Van Gogh produziu “A noite estrelada” quando estava internado em um hospital psiquiátrico em 1889, na França."
    },
    {
        id: "galeria-1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3trs8ubuBo8VONkw7tWRqB8Qzj7pOzbwXg&s",
        pintor: "Claude Monet",
        descricao: "Monet não pretendia pintar nada quando visitou Veneza em 1908, já que a cidade já havia sido amplamente retratada por muitos artistas. No entanto, durante a sua estadia, ele ficou fascinado pelas vistas da cidade e não conseguiu ficar sem pintar. Ele começou uma série de trabalhos preliminares que completou mais tarde, quando finalmente voltou para casa. Dentre todas as pinturas, está essa que se tornou uma de suas mais populares obras. É notável pelas suas pinceladas finas, leves, e a descrição magistral da luz e do movimento da água."
    },
    {
        id: "galeria-2",
        img: "https://nacionalitalia.com.br/wp-content/uploads/2023/06/ultima-cena-milano.jpg.webp",
        pintor: "Leonardo da Vinci",
        descricao: "Leonardo da Vinci, um dos mais renomados mestres do Renascimento, deixou um legado impressionante no mundo da arte. Suas obras são conhecidas por sua habilidade técnica excepcional e sua visão inovadora, mas há um segredo por trás de suas pinturas que contribuiu para a sua durabilidade e beleza ao longo dos séculos: a gema de ovo."
    },
    {
        id: "galeria-3",
        img: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2015/10/15.1BarcaDelacroix.jpg?w=749&ssl=1",
        pintor: "Eugène Delacroix",
        descricao: "A ousadia das telas de Delacroix era constante desafio para os críticos da época A Barca de Dante, sua primeira grande obra, suscitou enorme entusiasmo no Salão de 1822, quando o Barão Gros aclamou-a como “a vitória sobre Rubens“. "
    }
];

async function addCursosAoBd() {
    const db = await dbPromise;

    for(let x=0; x<cursos.length;x++){
        const id = v4();

        await db.run(
            `INSERT INTO cursos (id, img, titulo, descricao, conteudo, duracao, valor)
            VALUES(?, ?, ?, ?, ?, ?, ?);`,
            [id, cursos[x].img, cursos[x].titulo, cursos[x].descricao, cursos[x].conteudo, cursos[x].duracao, cursos[x].valor]
        );
    }
}

async function  addGaleriaAoBd() {
    const db = await dbPromise;

    for(let x=0; x<galeria.length; x++){
        const id=v4();

        await db.run(
            `INSERT INTO galeria (id, img, pintor, descricao)
            VALUES(?, ?, ?, ?);`,
            [id, galeria[x].img, galeria[x].pintor, galeria[x].descricao]
        );
    }
}

addCursosAoBd().then(() => {console.log("Dados dos Cursos inseridos no BD")});
addGaleriaAoBd().then(() => {console.log("Dados da Galeria inseridos no BD")});