import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Post from './post/Post.js'
import { Row, Col, Card } from "react-bootstrap";
import Masonry from '@mui/lab/Masonry';


export default function Posts() {

    const posts = useSelector((state) => state.posts)

    return (
        <div id="Posts">
            <Masonry columns={{xs: 2, md: 3}}>
                {posts.length > 0
                    ? posts.map((post, index) => 
                        <Col lg={6} key={index}>
                            <Post post={post}/>
                        </Col>
                        )
                    : <CircularProgress key={'circularID'}/>
                    
                }
            </Masonry>
        </div>
    )
}