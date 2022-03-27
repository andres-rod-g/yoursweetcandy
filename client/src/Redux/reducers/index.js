import {combineReducers} from 'redux';

import posts from './posts.js'
import tags from './tags.js'
import coinc from './search.js'

export default combineReducers({posts, tags, coinc})