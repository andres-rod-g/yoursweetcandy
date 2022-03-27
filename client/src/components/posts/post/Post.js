import { Fade } from "react-awesome-reveal"
import { Card } from "react-bootstrap"

const Post = ({post}) => {

    return(
        <Fade>
            <Card xs={2} onClick={()=> {}} className='' style={{backgroundColor: 'whitesmoke', borderRadius: '8px'}}>
                <Card.Body style={{backgroundColor: 'whitesmoke', borderRadius: '8px'}}>
                    <Card.Img src={post.image}/>
                    <Card.Title className="mt-4">
                        {post.name}
                    </Card.Title>
                    <Card.Text>
                        {post.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fade>

    )
}

export default Post