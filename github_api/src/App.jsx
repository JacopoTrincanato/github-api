import { useState } from 'react';
import './App.css'
import AppMain from './components/AppMain'
import GlobalContext from './contexts/GlobalContext'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  const [data, setData] = useState([]);

  return (
    <>
      <GlobalContext.Provider value={{ data, setData }}>
        <DefaultLayout>
          <AppMain />
        </DefaultLayout>
      </GlobalContext.Provider>
    </>
  )
}

export default App
