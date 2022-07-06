import felipe from "../img/felipe.jpg"

function Sobre() {
    return (
    <div className="container pt-5 mt-5 " id='sobre'>
        <div className="text-center my-5">
            <img id="foto" src={felipe} alt="..." class='mt-3' />
        </div>
        <h2 className="text-center my-4" >Sobre</h2>
        <p>
            Oi, me chamo Felipe Las Casas, sou estudante de Sistemas de Informação e me interesso bastante pela área de Desenvolvimento Web, em especial o que se trata de Front-End. 
        </p>
        <p>
            Possuo sólido conhecimento em HTML, CSS, Bootstrap e JavaScript. Além de também conhecer um dos Frameworks mais requisitados do momento, o React JS.
        </p>
    </div>
    )
}


export default Sobre;