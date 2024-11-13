//import { ListsApi } from 'todo-list-client'
import axios from 'axios'

const lists = ['Work Tasks', 'Personal Tasks', 'Shopping List']
const listItems: Record<string, string[]> = {
    'Work Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Personal Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Shopping List': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter']
}

//const api = new ListsApi()

export const apiClient = {
    getLists: async () => {
        return axios.get("http://localhost:3000/lists").then(res => {console.log(res.data); return res.data})
    },
    addList: async (listName: string) => {
        //lists.push(listName)
        //console.debug('-- addList', listName, lists);
        //return Promise.resolve(lists)
        return axios.post("http://localhost:3000/lists", { name: listName, id: listName }).then(res => res.data)
    },
    getTodos: async (listName: string): Promise<string[]> => {
        //return Promise.resolve(listItems[listName])
        return axios.get(`http://localhost:3000/lists`).then(res => res.data.find((list: any) => list.name === listName).items.map((item: any) => item.description))
    },
    addTodo: async (listName: string, todo: string) => {
        // console.debug('-- addTodo', listName, todo, listItems);
        // if (!listItems[listName]) {
        //     listItems[listName] = []
        // }
        // listItems[listName].push(todo)
        // return Promise.resolve(listItems[listName])
        return axios.post(`http://localhost:3000/lists/${listName}/items`, { description: todo, id: todo, status: 'PENDING' }).then(res => res.data)
    }
}
