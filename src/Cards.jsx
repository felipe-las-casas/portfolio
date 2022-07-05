function Cards(props) {
    return (
        <div class="d-flex card m-2">
            <div class="card-body">
                <img class="cardimagem"src={props.imagem} alt="teste"></img>
                <h5 class="card-title my-4">{props.titulo}</h5>
                <p class="card-text">{props.descricao}</p>
                <a href={props.link} target="blank" class="btn btn-dark mt-2">Ver Mais</a>
            </div>
        </div>
    )
}

export default Cards