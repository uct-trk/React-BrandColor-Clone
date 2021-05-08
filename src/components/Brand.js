import React, { useContext } from 'react'
import {getContrastYIQ} from '../generator'
import MainContext from '../MainContext'
import ClipboardButton from 'react-clipboard.js'


export const Brand = ({brand}) => {

    const {setSelectedBrands, selectedBrands, setCopied} = useContext(MainContext)

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            selectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ""}`}> 
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={color} onSuccess={() => setColor(color)} component="span" style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                        {color}
                    </ClipboardButton>
                ))}
            </div>
        </div>
    )
}
