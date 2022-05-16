import { Routes } from 'react-router-dom'

import Route from './route'
import SignIn from '../pages/SinIn'
import SignUp from '../pages/SignUp'

export default function Router(){
    return(
             <Routes>
                 <Route exact path='/' element={<SignIn/>} />
                 <Route exact path='/register' element={<SignUp/>} />
             </Routes>
    )
}