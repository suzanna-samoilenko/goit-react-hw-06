import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>
          <FaUser className={styles.icon} /> {name}
        </span>
        <span className={styles.number}>
          <FaPhoneAlt className={styles.icon} /> {number}
        </span>
      </div>
      <button onClick={onDelete} className={styles.deleteBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
