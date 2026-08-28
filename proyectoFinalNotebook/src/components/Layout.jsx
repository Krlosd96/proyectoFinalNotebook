import Sidebar from './Sidebar'
import MainContent from './MainContent'
import '../styles/Layout.css'

export default function Layout({children, user, activeTab, setActiveTab}) {
    
    return (
        <div className="layout-distribution">
            <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
            <MainContent user={user} activeTab={activeTab}>
                {children}
            </MainContent>
        </div>
    )
}