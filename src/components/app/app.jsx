import { Routes, Route } from 'react-router-dom'
import Busket from '../busket/index'
import Menu from '../menu/index'
import ProductPage from '../product-page/index'
import Order from '../order/index'
import Admin from '../admin/index'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/product/:choisenId" element={<ProductPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/busket" element={<Busket />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
