'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Sidebar.css";

const menuItems = [
    { id: 1, label: "Overview", iconName: "stats-chart-outline", href: "/" },
    {
      id: 2,
      label: "Documentos",
      iconName: "document-text-outline",
      href: "/documents",
    },
    {
      id: 3,
      label: "Departamentos",
      iconName: "business-outline",
      href: "/departments",
    },
    {
      id: 4,
      label: "Utilizadores",
      iconName: "people-outline",
      href: "/users",
    },
    {
      id: 5,
      label: "Categorias",
      iconName: "pricetag-outline",
      href: "/categories",
    },
    { id: 6, label: "Arquivo", iconName: "archive-outline", href: "/archive" },
  ];

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Admin8000</h1>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className={pathname === item.href ? "nav-link link--actived":"nav-link"}>
                <span className="nav-icon">
                  <ion-icon name={item.iconName} className="icon"></ion-icon>
                </span>
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
