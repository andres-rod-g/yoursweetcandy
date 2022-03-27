import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCandyCane, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { clearCoincidences, getCoincidences } from '../Redux/actions/search'

const NavBar = ({setSearch, search}) => {
    const dispatch = useDispatch()
    
        const handleClick = () => {
            dispatch(getCoincidences(search))
        } 

    const handleText = (e) => {
        e.preventDefault();

        setSearch(e.target.value) 
    }

    const handleKeys = (e) => {
        if (e.key === 'Enter'){
            console.log('ENTER')
            handleClick()
        }  
    }

    const clearText = () => {
        setSearch('')
        dispatch(clearCoincidences())
    }

    return (
        <nav >
            <Row className='d-flex justify-content-between' style={{width: '100%'}}>
                <Col lg={4} id='title_column'>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <Link to='/' style={{color:'#ff6ee7'}} onClick={clearText}>
                            <h1 id='page_title'>YourSweetCandy</h1>
                        </Link>
                        <FontAwesomeIcon icon={faCandyCane} style={{paddingLeft: '10', fontSize: 30}}/>
                    </div>
                </Col>
                <Col id='search_column' lg={4} style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'right'}}>
                        <Link to='/form' onClick={clearText}>
                            <FontAwesomeIcon icon={faArrowUp}/>
                        </Link>
                        <div id='search_bar' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <input type='text' value={search ? search : ''} onKeyDown={(e) => handleKeys(e)} onChange={(e) => handleText(e)} placeholder='Buscar'/>
                            <button onClick={() => handleClick()} style={{backgroundColor: 'white', border:'0'}}>
                                <FontAwesomeIcon icon={faSearch} style={{marginLeft: '20px'}}/>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>

        </nav>
    )
}

export default NavBar