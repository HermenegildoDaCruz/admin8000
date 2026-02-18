import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input 
          type="text" 
          placeholder="Procurar documentos por nome, categoria" 
          className="search-input"
        />
      </div>
      
      <div className="header-right">
        <button className="header-button settings-btn">
          <ion-icon name="settings-outline" className = "icon"></ion-icon>
        </button>
      </div>
    </header>
  );
}
