import { FaLinkedinIn} from 'react-icons/fa';
 import { AiFillGithub } from "react-icons/ai";
 import styles from "../Footer/Footer.module.css"


function Footer(){
    return <div className={styles.footer}>
        <p>2023 - Todos los derechos reservados a Lourdes Avalos</p>
        <a href='https://www.linkedin.com/in/lourdes-avalos-91a301255/'> <FaLinkedinIn /></a>
        <a href='https://github.com/Lourdes69'> <AiFillGithub /> </a>
        
    </div>
}

export default Footer 