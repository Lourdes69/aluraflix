import { FaSpinner } from 'react-icons/fa';
import styles from "../Spinner/Spinner.module.css"
 
 
 function Spinner() {
    
    return <div className={styles.spinner}>
           <FaSpinner className={styles.spinning} size={40} />
        </div>
}

export default Spinner