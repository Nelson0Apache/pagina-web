import style from './loguinPage.module.css';
import logostore from './icons/logostore.png';

function loguinPage() {
  return (
    <div className={style.App}>
      <header className={style['App-header']}>
          <div className={style['login-info-container']}>
            <h1 className={style.title}>Login</h1>
            <img src={logostore} className={style['logo-store']} alt={style.logo}/>
            <div className={style['social-login']}>
              <div className={style['social-login-element']}>
                <span>Google</span>
              </div>
            </div>
            <form className={style['inputs-container']}>
              <h5>Olvidaste la Contraseña? <span className={style.span}>Click here</span></h5>
            </form>
          </div>
      </header>
    </div>
  );
}

export default loguinPage;
