import { useState, useEffect } from 'react'
import Content from './components/Content'
import SideBar from './components/SideBar'
import MainContext from './MainContext'
import BrandsData from './brands.json'
import Copied from './components/Copied'

function App() {

  const brandsArray = []

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)

  // object.keys dizi şeklinde döndürmeyi sağlar
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands])

  useEffect(() => {
    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 500)
    }
  },[copied])

  const data = {
    brands, selectedBrands, setSelectedBrands, setCopied
  }

  return (
    <>
      <MainContext.Provider value={data}>

        {copied && <Copied color={copied} />}
        <SideBar />
        <Content />

      </MainContext.Provider>
    </>
  );
}

export default App;
