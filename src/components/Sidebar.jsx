import '../styles/Sidebar.css'

export default function Sidebar({user, activeTab, setActiveTab, onLogout}) {
    const privateMenu = [
        { id: 1, name: 'Overview', icon: '📊' },
        { id: 2, name: 'Transactions', icon: '💳' },
        { id: 3, name: 'Budgets', icon: '💰' },
        { id: 4, name: 'Reports', icon: '📈' },
        { id: 5, name: 'Settings', icon: '⚙️' },
    ];

    const publicMenu = [
        { id: 1, name: 'Home', icon: '🏠' },
        { id: 2, name: 'Login', icon: '🔑' },
        { id: 3, name: 'Register', icon: '📝' },
        { id: 4, name: 'About', icon: 'ℹ️' },
        { id: 5, name: 'Contact', icon: '📞' },
        { id: 6, name: 'Help', icon: '❓' },
    ];

    const activeMenu = user === null ? publicMenu : privateMenu;
    
    return (
       
       <aside className="sidebar-area">
            {user && (<button className="sidebar-card" onClick={()=>console.log("Ir a Perfil")}>
                <div className="avatar-space">
                    {user && user.image?(
                    <img
                    src={user.image}
                    alt={`Avatar de ${user}`}
                    className="profile-img"
                    />
                ):(
                    <span style={{ color: '#001f3f', fontWeight: 'bold' }}>
                        {user && user.charAt(0).toUpperCase()}
                    </span>
                 )}
                </div>
                <p className="user-name">Hola, {user}</p>
            </button>)}
            <h2>Menu</h2>
            <nav>
                <ul>
                    {activeMenu.map((item) => (
                        <li key={item.id} style={{listStyleType: 'none'}}>
                            <button 
                                className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </button>
                            
                        </li>
                        
                    ))}
                    {user && (
                        <li style={{listStyleType: 'none'}}>
                            <button className="sidebar-item logout-button" onClick={onLogout}>
                                <span>🚪</span>
                                <span>Logout</span>
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
            
        </aside>
    )
}