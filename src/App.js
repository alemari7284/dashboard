import Navbar from './components/Navbar/index'
import { VerticalNavbar } from './components/VerticalNavbar'
import { TimeSpent } from './components/Content/Feed/TimeSpent'
import { TimeTracker } from './components/Content/Feed/TimeTracker'
import { Sidebar } from './components/Content/Sidebar/index'

function App() {
  return (
    <div>
      <VerticalNavbar />
      <Navbar />
      <div className="pageWrapper">
        <div className="contentWrapper">
          <TimeSpent />
          <TimeTracker />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
