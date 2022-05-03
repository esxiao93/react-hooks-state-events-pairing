import React from 'react';

function Info({title, views, createdAt}) {
  return (
      <div>
          <h1>{title}</h1>
          <h3>{views} Views | Uploaded {createdAt}</h3>
      </div>
    
  )
}

export default Info;