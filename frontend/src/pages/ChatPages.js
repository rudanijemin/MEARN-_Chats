import React, { useEffect, useState } from 'react'
import axios from "axios"

function ChatPages() {
    const[chats,setChat]= useState([])
    const fethData=async()=>{
        const {data} = await axios.get("/api/chat")
        setChat(data)
    }
    useEffect(() => {
        fethData()
    }, [])
  return (
    <>
    {
        chats.map((chat,i)=>{
            return(
                <div key={i} >{chat.chatName}</div>
            )
        })
    }
        <h1>chat page</h1>
    </>
  )
}

export default ChatPages