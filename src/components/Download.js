import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import {GrLink, GrDownload, GrClose} from 'react-icons/gr'

const Download = () => {

    const {selectedBrands, setSelectedBrands, brands} = useContext(MainContext)

    const [downloadUrl, setDownloadUrl] = useState()

    // download copied items
    useEffect(() => {
        if (selectedBrands.length > 0){
            let output = ""
            selectedBrands.map(slug => {
                let brand = brands.find(brand => brand.slug === slug)
                brand.colors.map((color, key) => {
                    output += `==${slug}=${key}: #${color}\n`
                })
            })
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl("")
            }
        }
    },[selectedBrands])

    const handleEmpty = () => {
        setSelectedBrands([])
    }

    const getLink = () => {
        prompt("Here\'s the URL to share", `http://localhost:3002/collection/${selectedBrands.join(',')}`)
    }

    return (
        <div className="download">
            <div className="actions">
                <a download="text.css" href={downloadUrl}>
                    <GrDownload/>
                </a>
                <button onClick={getLink}>
                    <GrLink/>
                </button>
            </div>
            <div className="selected" onClick={handleEmpty}>
                <button><GrClose/></button>
                {selectedBrands.length} brand collected
            </div>
        </div>
    )
}

export default Download
