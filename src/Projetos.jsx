import Cards from "./Cards"
import proj1 from "./proj1.png"
import proj2 from "./proj2.png"
import proj3 from "./proj3.png"
import proj4 from "./proj4.png"

function Projetos() {
    return(
        <div className="container pt-5 mt-5 " id="projetos">
            <hr />
            <div class="text-center">
                <h2 class="text-center my-4" >Projetos</h2>
                <p>Os projetos abaixo demonstram algumas das minhas capacidades como Dev</p>
                <div class='d-flex row align-center cards-local'>
                    <Cards titulo='Calculadora'
                    imagem={proj2}
                    descricao="Uma calculadora desenvolvida com o Framework React Js" 
                    link="https://github.com/felipe-las-casas/calculadora-react" />
                    <Cards titulo="Landing Page"
                    imagem={proj4}
                    descricao="Uma página de atendimento hospitalar responsiva" link="https://github.com/felipe-las-casas/landing-page-simples"
                    />
                    <Cards titulo="Netflix Clone"
                    descricao="Uma reprodução da tela de login
                    da plataforma de streaming Netflix"
                    imagem={proj3}
                    link="https://github.com/felipe-las-casas/netflix-login-clone"/>
                    <Cards titulo="Review Carousel"
                    imagem={proj1} descricao="Um carousel de comentários feito em JavaScript Puro"
                    link="https://github.com/felipe-las-casas/review-carousel"/>
                </div>
            </div>
        </div>
    )
}

export default Projetos