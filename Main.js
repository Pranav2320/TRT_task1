import React, { useState } from 'react'
import './Main.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';


export default function Main() {
  
    const [items,setItems] = useState([])
    const [item,setItem] = useState()

    const addItem = (item1) => {
        const newItems = [...items,item1]
        setItems(newItems);
        setItem([])
    }

const deleteItem=(key)=>{
  setItems((items)=>items.filter((item1,i)=>i!=key))
}

const deleteAll = () => {
  setItems([])
}

  return (
    <div className='main'>
     <h1 className='mainheading'> Hey , What's on your list?</h1>
     <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      className="inputMain"
    >
      <TextField fullWidth label="Add your Task" id="fullWidth" onChange={(e) => { setItem(e.target.value) }}/>
    </Box>
      
    <Button className = 'button' onClick = {() => {addItem(item)}} variant = "contained" > Add </Button>
    <Button id='delete' onClick={()=>{deleteAll()}}>Clear</Button>

    <div className='items'>

    {

    items.map((item,index) => {
      return(  
        <div>
        <Todo data = {item}/>
        <Button onClick={()=>{deleteItem(index)}} id = "del" >Delete</Button>
        </div>
      )

    })
    
    }    
    </div>
    </div>

  )
}
