import '../Banner/Banner.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Banner() {

const [typeEffect] = useTypewriter({
    words: ['Bienvenue', 'Welcome', '欢迎'],
    loop:{},
    typeSpeed: 120,
    deleteSpeed: 100
})

    return (
        <div>
            <div className="banner">
                <span id="your-target-element-id"></span>
                <div className="type-writing-container">
                    <h1>{typeEffect}<Cursor/></h1>   
                </div>
                <div className='arrow-down'>
                    <HashLink smooth to="/#about" id="arrow-down" className="arrow-down-link" aria-label="Arrow-down">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </HashLink>
                </div>
            </div>
        </div >

    )
};