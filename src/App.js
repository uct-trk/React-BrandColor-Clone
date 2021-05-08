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
  const [search, setSearch] = useState("")

  // object.keys dizi şeklinde döndürmeyi sağlar
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands])

  // kopyala işleminde yarım saniye sonra yazı kaybolacak
  useEffect(() => {
    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 500)
    }
  },[copied])

  // search değiştiğinde filtreleme
  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])

  const data = {
    brands, selectedBrands, setSelectedBrands, setCopied,search,setSearch
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
