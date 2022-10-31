import fb from "../../assets/fb.png"
import instagram from "../../assets/instagram.png"
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"
import amex from "../../assets/amex.png"
import banelco from "../../assets/banelco.png"
import naranja from "../../assets/naranja.png"

const Footer = () => {
    
    return (
        <>
        <footer>
            <div className="cajasFooter">
                <div className="footerTitulo">
                    <p className="tituloFooter">Tienda de cerveza</p>
                    <p className="subtituloFooter1">Te acercamos las cervezas de tus marcas favoritas!</p>
                    <div>
                        <img src={fb} className="logoFb" alt="" />
                        <img src={instagram} className="logoFb" alt="" />
                    </div>
                </div>
             
                <div>
                    <p className="tituloFooter">Navegacion</p>
                    <p className="subtituloFooter">Home</p>
                    <p className="subtituloFooter">Ofertas</p>
                    <p className="subtituloFooter">FAQ</p>
                </div>
                <div>
                    <p className="tituloFooter">Medios de Pago</p>
                    <div>
                        <img src={visa} className="mediosPago" alt="" />
                        <img src={mastercard} className="mediosPago" alt="" />
                        <img src={amex} className="mediosPago" alt="" />
                        <img src={banelco} className="mediosPago" alt="" />
                        <img src={naranja} className="mediosPago" alt="" />
                    </div>
                </div>
                <div>
                    <p className="tituloFooter">Contacto</p>
                    <div>
                        <p className="subtituloFooter1">Email: tiendaDeCerveza@gmail.com</p>
                        <p className="subtituloFooter1">Telefono: 2213625853</p>
                    </div>
                </div>
            </div>    
        </footer>
    </>
    )
}
export default Footer