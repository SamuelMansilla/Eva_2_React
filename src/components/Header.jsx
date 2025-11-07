import React, { useState, useContext } from 'react'; // <-- 1. IMPORTAR useContext
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // <-- 2. IMPORTAR EL CONTEXTO

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // --- 3. LEER EL ESTADO GLOBAL DEL CONTEXTO ---
    // Ya no usamos el estado local 'user' ni el 'useEffect'
    const { isAuthenticated, usuario, logout } = useContext(CartContext);

    // --- 4. USAR LA FUNCIÓN 'logout' DEL CONTEXTO ---
    const handleLogout = () => {
        logout(); // Llama a la función de logout del contexto
        // El contexto se encarga de limpiar localStorage y el estado.
        // No necesitamos recargar la página.
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL +"/img/Logo_Level-U.webp"} alt="Logo Level-Up" /></Link>
                </div>

                <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span><span></span><span></span>
                </div>

                <ul id="menu" className={menuOpen ? 'show' : ''} onClick={() => setMenuOpen(false)}>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>

                <div className="icons" id="authArea">
                    <Link to="/carrito"><span className="material-icons">shopping_cart</span></Link>
                    
                    {/* --- 5. RENDERIZADO CONDICIONAL USANDO EL CONTEXTO --- */}
                    {isAuthenticated ? (
                        <>
                            {/* Verifica el rol del 'usuario' del contexto */}
                            {usuario && usuario.role === 'ADMIN' && (
                                <Link to="/admin" className="admin-panel-link">
                                    <span className="material-icons">settings</span>
                                    Panel Admin
                                </Link>
                            )}

                            {/* Muestra el nombre del 'usuario' del contexto */}
                            {/* Añadimos una comprobación por si 'usuario' es null brevemente */}
                            <span style={{ color: '#39FF14', marginLeft: '10px' }}>
                                ¡Hola, {usuario ? usuario.nombre : ''}!
                            </span>
                            
                            <button onClick={handleLogout} className="btn btn-sm btn-danger" style={{ marginLeft: '10px' }}>Salir</button>
                        </>
                    ) : (
                        // Si no está autenticado, muestra el link de login
                        <Link to="/login"><span className="material-icons">person</span></Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;