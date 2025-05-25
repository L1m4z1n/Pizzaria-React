const Contact = ()=>{
    return(
        <div className="contact-page-wrapper">
            <p className="primary-subheading">Contate-Nos</p>
            <h1 className="primary-heading">
                Tem uma pergunta em mente?
            </h1>
            <h2 className=" ">
                Deixe-Nos ajudá-los
            </h2>

            <div className="contact-form-container">
                <input type="text" placeholder="seu_email@gmail.com"/>
                <button className="secondary-button">Enviar</button>
            </div>
        </div>
    )
}

export default Contact;