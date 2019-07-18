import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
                id: Math.random(),
                nickname: "Teste",
                email: "lalala@gmail.com",
                image: require('../../assets/imgs/fence.jpg'),
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
                image: require('../../assets/imgs/fence.jpg'),
                comments: []
            }
        ]
    }

    render () {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed