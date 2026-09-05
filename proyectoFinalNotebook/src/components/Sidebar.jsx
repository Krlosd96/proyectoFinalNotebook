import '../styles/Sidebar.css'

export default function Sidebar({user, activeTab, setActiveTab}) {
    const loginMenuItems = [
        { id: 1, name: 'Overview', icon: '📊' },
        { id: 2, name: 'Transactions', icon: '💳' },
        { id: 3, name: 'Budgets', icon: '💰' },
        { id: 4, name: 'Reports', icon: '📈' },
        { id: 5, name: 'Settings', icon: '⚙️' },
        { id: 6, name: 'Logout', icon: '🚪' },
    ];

    const guestMenuItems = [
        { id: 1, name: 'Login', icon: '🔑' },
        { id: 2, name: 'Register', icon: '📝' },
        { id: 3, name: 'About', icon: 'ℹ️' },
        { id: 4, name: 'Contact', icon: '📞' },
        { id: 5, name: 'Help', icon: '❓' },
    ];
    
    return (
       !user? (<aside className="sidebar-area" >
            <h2>Menu</h2>
            <nav>
                <ul>
                    {guestMenuItems.map((item) => (
                        <li key={item.id} style={{listStyleType: 'none'}}>
                            <button 
                            onClick={() => setActiveTab(item.id)} 
                            className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}>
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
       </aside>

       ):( <aside className="sidebar-area" >
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
                    {loginMenuItems.map((item) => (
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
        </aside>)
    )
}