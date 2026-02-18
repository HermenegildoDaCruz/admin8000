import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input 
          type="text" 
          placeholder="Procurar documentos, pedidos, utilizadores..." 
          className="search-input"
        />
      </div>
      
      <div className="header-right">
        <button className="header-button notification-btn">
          🔔
        </button>
        <button className="header-button settings-btn">
          ⚙️
        </button>
      </div>
    </header>
  );
}
