import {Container, Row, Col} from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import Posts from '../posts/Posts.js'
import Index from './index.js'

export default ({setSearch}) => {
    return (
        <Fade>
            <Container style={{marginTop: 140}}>
                <Row>
                    <Col xs={12} lg={4}>
                        <Index setSearch={setSearch}/>
                    </Col>
                    <Col xs={12} lg={8}>
                        <Posts/>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}