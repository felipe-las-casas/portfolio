
function Contatos() {
    return(
        <div className="container pt-5 mt-5 ">
            <hr />
            <div className="text-center">
                <h2 className="text-center my-4" id="contatos">Contatos</h2>
                <p>Se interessou? Entre em contato</p>
                <a href="https://www.linkedin.com/in/felipe-las-casas-dos-reis-47b44a192/" target="blank">
                    <i className="bi bi-linkedin px-3"></i>
                </a>
                <a href="mailto:felipelascasas7@gmail.com" target="blank">
                    <i className="bi bi-envelope-open-fill px-3"></i>
                </a>
                <a href="https://github.com/felipe-las-casas" target="blank">
                    <i className="bi bi-github px-3"></i>
                </a>
                <a href="https://wa.me/5524999489036" target="blank">
                    <i className="bi bi-whatsapp px-3"></i>
                </a>
            </div>
        </div>
    )
}

export default Contatos