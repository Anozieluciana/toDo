import React, {useState, useEffect} from 'react'
import './Inbox.css'
import './Asset/baby.jpg'
import {ImBin} from 'react-icons/im'
import {TiTickOutline} from 'react-icons/ti'
import {db} from '../../Base'
import {addDoc, collection, onSnapshot, orderBy, query, Timestamp, deleteDoc,doc } from 'firebase/firestore'

 const Inbox = () => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [time, setTime] = useState(Timestamp.now().toDate());
    const [todo, setTodo] = useState([])
    

    const userRef = collection(db, "todoapp")

    const que = query(userRef, orderBy("time", "desc"))


    const postTitle = async ()=>{
        await addDoc(userRef, {
            title: title,
            details: details,
            time:Timestamp.now().toDate(),
        })
        setTitle(" "); setDetails(" ")
        // reset(" ")
    }

    const Load = () => {
        window.location.reload()
    }

    const getData = () =>{
        onSnapshot(que, (snapshot)=>{
            const datas = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data(),
            }));
            setTodo(datas)
        })
    }

    const deleteData = async(id) =>{
        const userDelete = doc(db, "todoapp", id)
        await deleteDoc(userDelete)
    }


    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='InboxContainer'>

        <div className='InputWrap'>

            <div className='TitHold'>
                <div >task title </div>
                <input  placeholder='Input task title' value={title} onChange={((e)=>{
                setTitle(e.target.value)  
                })}/>
           </div>

           <div className='TitHold'>
            <div >task details </div>
                <input placeholder='Input task details' value={details} onChange={((e)=>{
                    setDetails(e.target.value)
                })}/>
            </div>
           <button onClick={(() => {
               postTitle();
           })}>Save</button>
        </div>
    
        <div className='TextHold'>
            <div className='Text'>Task</div>
        </div>

       {todo.map(({title, details, time, id})=>(
            <div className='Details' key={id}>

            {/* <div> */}
                <div className='PicCircle'>
                <input type='radio' color='green'/>
               
                </div>

                <div className='PicHold'>
                    <div className='BoldText' >{title}</div>
                    <div className='MiniText'>{details}</div>
                </div>
            {/* </div> */}
            <div className='InboxTime'>{time.toDate().toDateString()}</div>
            <ImBin color='red' size='18px' onClick={(()=>{
                deleteData(id)
            })}/>
        </div>
       ))}
      
    </div>
  )
}



export default Inbox