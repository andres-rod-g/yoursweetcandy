import Masonry from '@mui/lab/Masonry';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import Post from '../posts/post/Post';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss'


const SearchComp = ({searchArr}) => {

    const dispatch = useDispatch();
    const coinc = useSelector((state) => state.coinc)

    return (
        <Fade>
            <Container className={styles.searchContainer}>
                <Masonry columns={{xs: 2, md: 3}}>
                    {
                        coinc
                            ? coinc.length > 0
                                ? coinc[0] != null
                                    ? coinc.map((e) => 
                                            <Post post={e}/>
                                        )
                                    : <p>Presiona la lupa para buscar. :)</p>
                                : <p>No se encontraron resultados a la busqueda.</p>
                            : <p>Error. :(</p>
                    }
                </Masonry>
            </Container>
        </Fade>
    )
}

export default SearchComp