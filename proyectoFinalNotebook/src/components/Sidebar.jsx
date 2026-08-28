import '../styles/Sidebar.css'

export default function Sidebar({user, activeTab, setActiveTab}) {
    const menuItems = [
        { id: 1, name: 'Overview', icon: '📊' },
        { id: 2, name: 'Transactions', icon: '💳' },
        { id: 3, name: 'Budgets', icon: '💰' },
        { id: 4, name: 'Reports', icon: '📈' },
        { id: 5, name: 'Settings', icon: '⚙️' },
    ];
    
    return (
        <aside className="sidebar-area" >
            <button className="sidebar-card" onClick={()=>console.log("Ir a Perfil")}>
                <div className="avatar-space">
                    {user.image?(
                    <img
                    src={user.image}
                    alt={`Avatar de ${user}`}
                    className="profile-img"
                    />
                ):(
                    <span style={{ color: '#001f3f', fontWeight: 'bold' }}>
                        {user.charAt(0).toUpperCase()}
                    </span>
                 )}
                </div>
                <p className="user-name">Hola, {user}</p>
            </button>
            <h2>Menu</h2>
            <nav>
                <ul>
                    {menuItems.map((item) => (
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
                </ul>
            </nav>
        </aside>
    )
}