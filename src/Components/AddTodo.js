import { useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
const AddTodo=()=>{
    const dispatch = useDispatch();
    const [item,setItem] = useState('');
    return(
        <div className="">
            <form className="pt-16 form flex items-center justify-center gap-2" onChange={(e)=>e.preventDefault()}>
                    <input 
                    className="w-[34rem] ring-2 ring-blue-800 rounded-sm"
                    onChange={(event)=>{
                        setItem(event.target.value)
                    }}
                    name="todoinput" 
                    type="text" 
                    placeholder="TODO"
                    value={item}/>
                    <button 
                    type="submit"
                     onClick={(event)=>{
                        event.preventDefault()
                        dispatch(addTodo(item))
                        setItem('')
                     }}
                     ><IoMdAddCircle className="text-3xl text-cyan-500"/></button>
            </form>
        </div>
    );
};
export default AddTodo;