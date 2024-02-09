import React,{ useContext } from "react"


export const TodoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      compeleted: false,
    }
  ],
  addTodo: (todo) => { },
  updateTodo: (id, todo) => { },
  deleteTodo: (id) => { },
  toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
  return useContext(TodoContext)
}