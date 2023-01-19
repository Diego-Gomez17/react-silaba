import "./page.css"
import titulo from "./assets/titulo.png"
import reverso from "./assets/reverso-carta.png"
import estrella from "./assets/estrella.png"
import estrella2 from "./assets/Estrella_2.png"
import estrella3 from "./assets/Estrella_3.png"
import estrella4 from "./assets/Estrella_4.png"
import estrella5 from "./assets/Estrella_5.png"
const slides = [
    {
        icon: "home",
        name: "home",
        color: "#3BD5F5",
        page: (
            <>
                <div >
                    <img src={titulo} className="titulo-img"></img>
                    <img src={estrella} className="estrella estrella1"></img>
                    <img src={estrella2} className="estrella estrella2"></img>
                    <img src={estrella3} className="estrella estrella3"></img>
                    <img src={estrella4} className="estrella estrella4"></img>
                    <img src={estrella5} className="estrella estrella5"></img>
                    <p className="p1 epi">Estas silabas se han vuelto locas!! </p>
                    <p className="p2 epi">Quieren convertirse en estrellas...</p> 
                    <p className="p3 epi">Ayudalas uniendolas y asi se convertiran en una gran constelacion!!
                    </p>
                </div>
            </>
        ),
    },
    {

        icon: "about",
        name: "about",
        color: "#33D497",
        page: (
            <>
                {/* page content */}
                <div className="reglas">
                    <h2>¿De que va el juego?</h2>
                    <img src={reverso} className="reverso1"></img>
                    <img src={reverso} className="reverso2"></img>
                    <p className="regla-text">
                        Es un muy entretenido juego donde toda la Familia puede participar, sobre todos los mas jovenes!!</p>
                    <p className="regla-text" >solo debes crear palabras usando las silabas que hay en cada carta. </p>
                    <p className="regla-text" >Cada carta tiene un valor que se puede observar con la cantidad de estrellas  que esta posee</p> 
                    <p className="regla-text" >solo debes unirla con otra carta y formar una palabra</p>
                    <p className="regla-text" > entre mas larga la palabra y mas estrella posea</p>
                    <h3 className="pnt regla-text">¡¡Mas Puntos Ganas!!</h3>
                    
                </div>
            </>
        ),
    }
];

export default slides