import Search from './Search'
import Brand from './Brand'
import MainContext from '../MainContext'
import { useContext } from 'react'
import Download from './Download';
import { List, AutoSizer } from 'react-virtualized';
import Loader from './Loader';


const Content = () => {


    const {brands, selectedBrands} = useContext(MainContext)
    

    const rowRenderer = ({key, index, style, isVisible, isScrolling}) => {
        const content = isScrolling ? <Loader /> : <Brand brand={brands[index]}  />;
        return (
            <div style={style} key={key}>
				<Brand brand={brands[index]}  />
			</div>
        )
    }

    return (
        <main className="content">
            <header className="header">
                <Search/>
                {selectedBrands.length >= 1 && <Download/>}

            </header>
            <section className="brands">
                <AutoSizer>
                    {({height, width}) => (
                        <List
                        width={width}
                        height={height}
                        rowCount={brands.length}
                        rowHeight={115}
                        rowRenderer={rowRenderer}/>
                    )}
                </AutoSizer>
            </section>
        </main>
    )
}

export default Content
