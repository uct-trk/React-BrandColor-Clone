import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Download = () => {

    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)

    const [downloadUrl, setDownloadUrl] = useState()
    const [style, setStyle] = useState("css")

    // türüne göre indirme
    useEffect(() => {
		if (selectedBrands.length > 0){

			let output = ''
			switch (style){

				case 'css':
					output += ':root {\n'
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `--${slug}-${key}: #${color};\n`
						})
					})
					output += '}'
					break;

				case 'scss':
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `\$${slug}-${key}: #${color};\n`
						})
					})
					break;

				case 'less':
					selectedBrands.map(slug => {
						let brand = brands.find(brand => brand.slug === slug)
						brand.colors.map((color, key) => {
							output += `@${slug}-${key}: #${color};\n`
						})
					})
					break;

			}
            // download etmek için
			const blob = new Blob([output])
			const url = URL.createObjectURL(blob)
			setDownloadUrl(url)
			return () => {
				URL.revokeObjectURL(url)
				setDownloadUrl('')
			}
		}
	}, [selectedBrands, style])

    const handleEmpty = () => {
        setSelectedBrands([])
    }


    return (
        <div className="download">
            <div className="actions">
                <a download={`brands.${style}`} href={downloadUrl}>
                    <GrDownload />
                </a>
                <select onChange={e => setStyle(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <Link to={`/collection/${selectedBrands.join(',')}`}>
                    <GrLink />
                </Link>
            </div>
            <div className="selected" onClick={handleEmpty}>
                <button><GrClose /></button>
                {selectedBrands.length} brand collected
            </div>
        </div>
    )
}

export default Download
