import { classLink } from '../utils/classNames';

function Footer() {
  return (
    <footer>
      <a
        href="https://www.facebook.com/arcadasagradaalianca/"
        target="_blank"
        rel="noreferrer"
        className={ classLink }
      >
        <img src="images/facebook.svg" alt="icone do facebook" />
        <p>Facebook</p>
      </a>
      <a
        href="https://www.youtube.com/@arcadasagradaalianca-movim5299"
        target="_blank"
        rel="noreferrer"
        className={ classLink }
      >
        <img src="images/youtube.svg" alt="icone do youtube" />
        <p>Youtube</p>
      </a>
    </footer>
  );
}

export default Footer;
