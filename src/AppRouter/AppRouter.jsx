import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forside from '../Pages/Forside/Forside'
import { Goals } from '../Pages/Goals/Goals'
import Kontakt from '../Pages/Kontakt/Kontakt'
import NotFound from '../Pages/NotFound/NotFound'

function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Forside />}></Route>
        <Route path='/kontakt' element={<Kontakt />}></Route>
        <Route path='/goals' element={<Goals />}>
            <Route index element={<Goals />}></Route>
            <Route path=':id' element={<Goals />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default AppRouter