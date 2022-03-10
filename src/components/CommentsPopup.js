import {React, useEffect} from 'react'
import "../style/popup.css"

export default function CommentsPopup({content, handleClose}) {

    useEffect(()=> {
        console.log(content)
    }, [])
  return (
    <div className="popup-box">
        CommentsPopup
        <div className="box">
            <span className="close-icon" onClick={handleClose}>x</span>
            {
                content.map(c => 
                    (<p>{c}</p>)
                )
            }
        </div>

    </div>
  )
}
