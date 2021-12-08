import React ,{useState,useEffect} from 'react'
import store from '../../store/store'
const Compteur = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
		store.subscribe(() => {
      //store.getState().todos recupere le state global 
			console.log("todos from compteur");
			console.log(store.getState());
            setCount(store.getState().count)
		});
	}, []);

const handleCount=()=>{
    store.dispatch({
        type:"ADD_COUNT"
    })
    
}
    return (
        <div>
            Count = {count}
            <button onClick={handleCount} >click Me</button>
            <button onClick={()=>setCount(0)} >Reset Compteur</button>
        </div>
    )
}

export default Compteur
