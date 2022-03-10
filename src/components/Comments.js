import {React, useState, useEffect} from 'react'
import CommentsPopup from './CommentsPopup';

function Comments({comments}) {
  const [commentIndex, setCommentIndex] = useState(5);
  const [shownComments, setShownComments] = useState(comments.slice(comments.length - commentIndex, comments.length))
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("rendering comments")
    console.log(comments)
    setShownComments(comments.slice(comments.length - commentIndex, comments.length))
  }, [comments])

  const togglePopup = (e) => {
    console.log("clicking button")
    setIsOpen(!isOpen)
  }

  return (
    <div>
        {
            shownComments.map(c => 
                    (<p key={c}>{c}</p>)
                )
        }
        {
            isOpen ? <CommentsPopup
            content={comments}
            handleClose={togglePopup}
            /> : <></>
        }
        <button onClick={(e) => togglePopup(e)}>See More</button>
    </div>
  )
}

export default Comments