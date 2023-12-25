import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todoList:[],
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todoitem = {
                id:nanoid(),
                text:action.payload,
            }
            state.todoList.push(todoitem)
        },
        removeTodo:(state,action)=>{
            state.todoList = state.todoList.filter(
                (curEle)=>{
                    return action.payload!==curEle.id;
                }
            )
        }
    }
})
export const {addTodo,removeTodo} = todoSlice.actions;
console.log("todoSlice.action -> ",todoSlice.actions)
console.log("todoslice.reducer -> ",todoSlice.reducer)
export default todoSlice.reducer;