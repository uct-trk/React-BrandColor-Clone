import React, { useContext, useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import { Link, useHistory, useParams } from 'react-router-dom'
import MainContext from '../MainContext'
import Brand from './Brand'
import Download from './Download'
import {GrLinkPrevious} from 'react-icons/gr'
import Loader from './Loader'

const Collection = (props) => {

    const history = useHistory()
    const {slugs} = useParams()
    const {setSelectedBrands,selectedBrands, brands} = useContext(MainContext)

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    },[])

    const clearSelectedBrands = () => {
        setSelectedBrands([])
        history.push('/')
    }

    return (
        <main className="content">
            <header className="header">
                <Link to="/" onClick={clearSelectedBrands}>
                    <button className="back-btn">
                        <GrLinkPrevious/>
                        All brands
                    </button>
                </Link>
                
                {selectedBrands.length >= 1 && <Download/>}

            </header>

            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader/>}>
                            <Brand brand={brand}/>
                        </LazyLoad>
                    )
                })}
            </section>
        </main>
    )
}

export default Collection
