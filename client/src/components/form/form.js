import React, { useState, useEffect } from 'react'
import {Container, Form, Col, Row, FloatingLabel, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'

import { uploadPost } from '../../Redux/actions/candies.js'
import { Fade } from 'react-awesome-reveal'

import styles from './styles.module.scss'

const MyForm = () => {
    const [ thisPost, setThisPost ] = useState({name: '', description: '', tags:'', image:''});
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(uploadPost(thisPost))
    }

    return (
        <div style={{width:'100%'}}>
            <Fade>
                <Container className={styles.formContainer} >
                    <form autoComplete='off' className={styles.form} noValidate onSubmit={handleSubmit}>
                        <Row className={styles.formRow}>
                            <Form.Group as={Col} md={12} lg={6}>
                                <Form.Label>Candy's Name</Form.Label>
                                <Form.Control type='text' name='name' onChange={(e) => setThisPost({...thisPost, name: e.target.value})}></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md={12} lg={6}>
                                <Form.Label>Candy's Tags</Form.Label>
                                <Form.Control type='text' name='tags' onChange={(e) => setThisPost({...thisPost, tags: e.target.value})}></Form.Control>
                            </Form.Group>
                            <FloatingLabel controlId='floatingTexarea' label='Description' className='mt-3 pl-3'>
                                <Form.Control as='textarea' placeholder='Descripción' name='description' onChange={(e) => setThisPost({...thisPost, description: e.target.value})}/>
                            </FloatingLabel>
                            <Form.Group style={{textAlign:'left'}} className='mt-3'>
                                <Form.Label className='d-block'>Candy's image. Of preference square shaped.</Form.Label>
                                <FileBase type='file' onDone={({base64}) => setThisPost({...thisPost, image: base64})}/>
                            </Form.Group>
                            <Button id='botonEnviar' size='sm' variant='primary' type="submit" className='mt-3'>Submit</Button>
                        </Row>

                    </form>
                </Container>

            </Fade>

        </div>
    )
}

export default MyForm