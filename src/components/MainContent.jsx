import '../styles/MainContent.css'
import { useState, useEffect } from 'react'
import TransactionHistory from './TransactionHistory'
import Overview from './Overview'
import AddTransaction from './AddTransaction'

export default function MainContent({children, user, activeTab, onAddTransaction, activeUser}) {
    const [transacciones,setTransacciones] = useState(null)

    useEffect(()=>{
        if(activeUser){
            setTransacciones(activeUser.transactions)
        }
    }, [activeUser])

    const saldo= () => {
        if (!transacciones) return 0
        return transacciones.reduce((acc, tx) => {
            return tx.tipo === 'ingreso' ? acc + tx.monto : acc - tx.monto
        }, 0)
    }

    const renderActiveTab=()=>{switch(activeTab){
          case 1:
            return <Overview transacciones={transacciones} user={user}/>
          case 2:
            return <TransactionHistory transacciones={transacciones} />
          case 3:
            return <div>Budgets</div>
          case 4:
            return <div>Reports</div>
          case 5:
            return <div>Settings</div>
          default:
            return <Overview transacciones={transacciones} user={user}/>
        }}

    return (
        <main className="main-content-area">
            {children}
            <div className="balance-card">
            <h2>
                Mi saldo:<span className={saldo()<0?"negative-amount":"balance-amount"}> {saldo()}</span>
            </h2>
            <AddTransaction onAddTransaction={onAddTransaction}/>
            </div>
            <div>{renderActiveTab()}</div>
        </main>
    )
}