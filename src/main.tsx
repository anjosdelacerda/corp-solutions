import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rotas from './rotas/Rotas.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={rotas} />
)
