import React from 'react'

function Comments({comments}) {
  return (
    <div>
        comments
        {
            comments.map(c => 
                    (<p key={c}>{c}</p>)
                )
        }
    </div>
  )
}

export default Comments