import { useState } from 'react';
import './App.css'
import AppMain from './components/AppMain'
import GlobalContext from './contexts/GlobalContext'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  const [data, setData] = useState([]);

  const values = {
    data,
    setData
  }

  return (
    <>
      <GlobalContext.Provider value={[values]}>

      </GlobalContext.Provider>
      <DefaultLayout>
        <AppMain />
      </DefaultLayout>
    </>
  )
}

export default App
