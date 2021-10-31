import react from "react";
import styles from './salesPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';

const salesPage = props => {
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
                <h3>VENTAS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID VENTA</th>
                            <th>VALOR TOTAL</th>
                            <th>ID PRODUCTO</th>
                            <th>CANT</th>
                            <th>PRECIO UNITARIO</th>
                            <th>FECHA VENTA</th>
                            <th>ID CLIENTE</th>
                            <th>CLIENTE</th>
                            <th>VENDEDOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td>200.000</td>
                            <td>004</td>
                            <td>2</td>
                            <td>100.000</td>
                            <td>25/08/2021</td>
                            <td>1437686499</td>
                            <td>Alejandra</td>
                            <td>Fernanda</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    
export default salesPage