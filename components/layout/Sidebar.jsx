import Link from 'next/link';
import './Sidebar.css';

export default function Sidebar() {
  const menuItems = [
    { id: 1, label: 'Overview', icon: '📊', href: '/' },
    { id: 2, label: 'Documentos', icon: '📄', href: '/documents' },
    { id: 3, label: 'Departamentos', icon: '🏢', href: '/departments' },
    { id: 4, label: 'Utilizadores', icon: '👥', href: '/users' },
    { id: 5, label: 'Categorias', icon: '🏷️', href: '/categories' },
    { id: 6, label: 'Arquivo', icon: '📁', href: '/archive' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">FileStream</h1>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">A</div>
          <div className="user-details">
            <p className="user-name">Admin User</p>
            <p className="user-role">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
