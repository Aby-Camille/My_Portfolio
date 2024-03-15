import Banner from '../../components/Banner/Banner';
import About from "../../components/About/About";
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import '../../style/global-style.scss';
import { useEffect } from 'react';

function Home () {

    useEffect (() => {
        document.title = 'Portfolio - Camille Lavenant'
    }, [])
    
    return <div className="portfolio-main" id='/'>
        <div>
        <Banner />
        </div>
        <div>
        <About />
        </div>
        <div>
        <Projects />
        </div>
        <div>
        <Skills />
        </div>
    </div>;
}
export default Home;