import react from "react";
import styles from './modulePage.module.css';
import usuarios from './icon/usuarios.png';
import ventas from './icon/ventas.png';
import productos from './icon/productos.png';

const modulePage = props => {
    return (
        <div className={styles.container}>
            <div className={styles.modules}>
                <img className={styles.usuarios}
                src={usuarios}
                alt={''}
                />
            <h3>Usuarios</h3>
            </div>
            <div className={styles.modules}>
                <img className={styles.ventas}
                src={ventas}
                alt={''}
                />
                <h3>Ventas</h3>
            </div>
            <div className={styles.modules}>
                <img className={styles.productos}
                src={productos}
                alt={''}
                />
                <h3>Productos</h3>
            </div>
        </div>
    )
  }
  
  export default modulePage