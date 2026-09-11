import Sidebar from './Sidebar'
import MainContent from './MainContent'
import '../styles/Layout.css'

export default function Layout({children, user, activeTab, setActiveTab, onLogout}) {
    
    return (
        <div className="layout-distribution">
            <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
            <MainContent user={user} activeTab={activeTab} setActiveTab={setActiveTab}>
                {children}
            </MainContent>
        </div>
    )
}