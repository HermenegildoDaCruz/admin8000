import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Admin8000. Todos os direitos reservados.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacidade</a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">Termos de Uso</a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">Suporte</a>
        </div>
      </div>
    </footer>
  );
}
