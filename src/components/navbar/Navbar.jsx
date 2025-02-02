import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale: 0.5}} 
                    animate={{opacity:1, scale: 1}} 
                    transition={{duration: 0.5}}
                >
                    Edgardo Arteaga
                </motion.span>

                <div className="social">
                    <a href="https://www.facebook.com/edgardo.arteaga.16"><img src="/facebook.png" alt="Facebook Logo" /></a>
                    <a href="https://www.instagram.com/edgardo.arteaga.16"><img src="/instagram.png" alt="Insta Logo" /></a>
                    <a href="https://www.youtube.com/@EdgardoArteaga1993"><img src="/youtube.png" alt="Youtube Logo" /></a>
                    <a href="#"><img src="/dribbble.png" alt="Dribble Logo" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar