import { useEffect } from 'react';
import Header from '../components/Home/Header/Header';
import Services from '../components/Home/Services/Services';
import Contact from '../components/Home/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../styles/variables.css';

const Home = () => {

    useEffect(() => {
        /*  Verificamos si la URL contiene #services para generar un scroll automático a esta sección
            Este useEffect solo se ejecuta una vez cuando se carga el componente */
        if (window.location.hash === '#services') {
            const section = document.getElementById('services');
            if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []); 

    return (
        <>
            <Header/>
            <Services/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;