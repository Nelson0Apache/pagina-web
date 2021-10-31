import react from "react";
import styles from './productsPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';

const productsPage = props => {
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <h5>Agregar</h5>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <h5>Actualizar</h5>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <h5>Eliminar</h5>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3>PRODUCTOS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID PRODUCTOS</th>
                            <th>DESCRIPCIÓN DEL PRODUCTO</th>
                            <th>VALOR UNITARIO</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Zapatos Masculino Talla 32 azul</td>
                            <td>20,000</td>
                            <td>Dispoible</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    
export default productsPage