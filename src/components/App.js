import { HashRouter as Router, Route } from 'react-router-dom'
import Landing from '../routes/Landing'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
    </Router>
  )
}

export default App
