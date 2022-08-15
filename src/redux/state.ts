

let rerenderEntireTree: (state: { messagesPage: { Message: { id: number; message: string }[]; DialogItem: { name: string; id: number }[] }; profilePage: { newPostText: string; postData: { likesCount: number; id: number; message: string }[] } }) => void = () => {
    console.log('State Changed')
}
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you', likesCount: 0},
            {id: 2, message: 'It\'s my first post', likesCount: 3},
            {id: 3, message: 'Like my posts please', likesCount: 4},
            {id: 3, message: 'Like my posts please', likesCount: 4},
            {id: 3, message: 'Like my posts please', likesCount: 4}
        ],
        newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
        DialogItem: [
            {id: 1, name: "Tema"},
            {id: 2, name: "Dimych"},
            {id: 3, name: "Sanya"},
            {id: 4, name: "Vlad"}
        ],
        Message: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "How is your"},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 4
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscride = (observer: (state: { messagesPage: { Message: { id: number; message: string }[]; DialogItem: { name: string; id: number }[] }; profilePage: { newPostText: string; postData: { likesCount: number; id: number; message: string }[] } }) => void) => {
    rerenderEntireTree = observer
}
export default state