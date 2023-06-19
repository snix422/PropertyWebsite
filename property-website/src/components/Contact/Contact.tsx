import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

    const form:any = useRef();

    const sendEmail = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bysdvel', 'template_z4h8j7g', form.current, '5E4w16biVWeMYXUDt')
        .then((result:any) => {
            console.log(result.text);
            e.target.reset();
        }, (error:any) => {
            console.log(error.text);
        });
    };

    return(
        <>
        <Header />
        <div className="flex max-md:flex-col w-screen max-md:justify-center max-md:gap-40 justify-around items-center bg-contact" style={{minHeight:'60vh'}}>
            <div className="flex flex-col gap-3 max-md:items-center">
                <h2 className="text-center text-white mb-10" style={{fontFamily:'Montserrat', fontSize:'35px'}}>Kontakt</h2>
                <div className="flex">
                    <BusinessIcon sx={{color:'white'}}></BusinessIcon>
                    <h3 style={{color:'white', fontFamily:'Montserrat', fontSize:'20px'}}>ul. Sienkiewicza 53 Łódź</h3>
                </div>
                <div className="flex">
                    <EmailIcon sx={{color:'white'}}></EmailIcon>
                    <h3 style={{fontFamily:'Montserrat', color:'white', fontSize:'20px'}}>nieruchomości.gmail@.com</h3>
                </div>
                <div className="flex">
                    <SmartphoneIcon sx={{color:'white'}}></SmartphoneIcon>
                    <h3 style={{fontFamily:'Montserrat', color:'white', fontSize:'20px'}}>nieruchomości.gmail@.com</h3>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-center text-white pb-5 text-4xl" style={{fontFamily:'Montserrat'}}>Skontatuj się z Nami!</h2>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 max-md:items-center" style={{fontFamily:'Montserrat'}}>
                    <input className="w-full max-md:w-3/4 rounded input form-control" type="text" name="user_name" placeholder="Imię i nazwisko"></input>
                    <input className="w-full max-md:w-3/4 rounded input form-control" type="text" name="user_email" placeholder="E-mail"></input>
                    <textarea className="w-full max-md:w-3/4 h-28 rounded input form-control" name="message" placeholder="Wiadomość..."></textarea>
                    <button type="submit" className="w-full max-md:w-3/4 text-white bg-yellow-600 rounded font-bold pt-1 pb-1" style={{fontFamily:'Montserrat'}}>Wyślij</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact