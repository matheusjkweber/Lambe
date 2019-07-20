import {
    ADD_POST,
    ADD_COMMENT
} from './../actions/actionTypes'

const initialState = {
    posts: [{
            id: Math.random(),
            nickname: "Teste",
            email: "lalala@gmail.com",
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Teste 1',
                comment: 'Comment'
            },
            {
                nickname: 'Teste 2',
                comment: 'Comment 2'
            }]
        },
        {
            id: Math.random(),
            nickname: "Teste 2",
            email: "lalala 2@gmail.com",
            image: require('../../../assets/imgs/fence.jpg'),
            comments: []
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}


export default reducer