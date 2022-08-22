import React from "react"

export default function Messages (){
    const [messages, setMessages] = React.useState(['w', 'w'])
  

    let currentMessage 
    if (messages.length == 0) {
        currentMessage = "Youre caught up"
    }
    else if (messages.length > 1 && messages.length < 1){
        currentMessage = `you have ${messages.length} unread message`
    }
    else 
    currentMessage = `you have ${messages.length} unread messages`


    return(
        <div>
            <p>{currentMessage}</p>
        </div>
    )

}