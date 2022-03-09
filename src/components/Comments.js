import {React, useState, useEffect} from 'react'

function Comments({comments}) {
  const [commentIndex, setCommentIndex] = useState(5);
  const [shownComments, setShownComments] = useState(comments.slice(comments.length - commentIndex, comments.length))

  useEffect(() => {
    console.log("rendering comments")
    console.log(comments)
    setShownComments(comments.slice(comments.length - commentIndex, comments.length))
  }, [comments])

  const handleButtonClick = (e) => {
    console.log("clicking button")
    setCommentIndex(commentIndex+5)
    setShownComments(comments.slice(0, commentIndex))
  }

  return (
    <div>
        {
            shownComments.map(c => 
                    (<p key={c}>{c}</p>)
                )
        }
        <button onClick={(e) => handleButtonClick(e)}>See More</button>
    </div>
  )
}

export default Comments