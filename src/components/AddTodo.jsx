import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

function add(evt)
{
    evt.preventDefault();
    if(input.trim())
        dispatch(addTodo(input));
    setInput('');
}

  return (
    <div>     
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(evt)=> setInput(evt.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default AddTodo
