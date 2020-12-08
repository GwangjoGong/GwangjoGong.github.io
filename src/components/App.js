import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from '../routes/Landing'
import Home from '../routes/Home'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/home' component={Home} />
    </Router>
  )
}

export default App
