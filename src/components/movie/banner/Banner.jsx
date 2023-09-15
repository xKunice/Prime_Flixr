import "./banner.css"
const Banner = () =>{
return(
    <>
    <section className="banner">
        <div className="banner__content">
            <div className="container__texto">
                <h2>Challenge React</h2>
                <p>Esta pagina es un Challenge creado por <span>AluraLatam</span> y el programa <span>Oracle Next Education</span> </p>
                <p>La base de datos de las peliculas es brindada gracias a <span className="spanDB">TMDB(The Movie DataBase)</span></p>
                </div>
                <div className="container__video">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NjBGzJ5FFmI?si=GN4qvzQJ6_n7C_26" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </section>
    
    
    
    
    </>
)
}

export default Banner