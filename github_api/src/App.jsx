import './App.css'
import AppMain from './components/AppMain'
import DefaultLayout from './layouts/DefaultLayout'
import GlobalProvider from './contexts/GlobalProvider';

function App() {

  return (
    <>
      <GlobalProvider>
        <DefaultLayout>
          <AppMain />
        </DefaultLayout>
      </GlobalProvider>
    </>
  )
}

export default App
