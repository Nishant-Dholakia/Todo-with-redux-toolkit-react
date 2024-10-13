import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function Todos() {
    const todo = useSelector((state) => state.todos);
    const dispatch = useDispatch();


  return (
    <>
    {
        todo.map((eachTodo) =>(
            <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 w-full  text-white bg-green"`}
            key = {eachTodo.id}
        >
            
            <input
                type="text"
                className={`border outline-none px-3 w-full bg-transparent rounded-lg border-transparent"
                 `}
                value={eachTodo.text}
                readOnly={true}
            />
            {/* Edit, Save Button */}
            
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={()=> dispatch(deleteTodo(eachTodo.id))}
            >
                ❌
            </button>
        </div>

        ))
    }
    </>

  )
}

export default Todos
