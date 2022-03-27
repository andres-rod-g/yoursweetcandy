import {CircularProgress} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { getCoincidences } from '../../Redux/actions/search'

export default ({setSearch}) => {
    const tags = useSelector((state) => state.tags)
    const dispatch = useDispatch()
    
    const handleTagClick = (tagInfo) => {
        setSearch(tagInfo)
        dispatch(getCoincidences(tagInfo))
    }

    return (
        <div id="index">
            <h2>Index</h2>
            <div>
                {tags.length > 0
                    ? tags.map((tag) => <a key={tag.name} onClick={() => handleTagClick(tag.name)}>{tag.name}</a>)
                    : <CircularProgress/>
                }
            </div>
            
        </div>
    )
}