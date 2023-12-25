import { useSelector } from "react-redux";

const TodoList =()=>{
    const arr = useSelector((state)=>state.todoList.todoList)
    return<div className="mt-4 flex justify-center content-center">
        <div>
        {
            arr.map(
                (curEle)=>{
                    return<div  className="text-center rounded-md m-2 w-[36rem] max-w-5xl bg-slate-300 text-zinc-900" id={curEle.id}>{curEle.text}</div>
                }
            )
        }
        </div>
    </div>;
}
export default TodoList;