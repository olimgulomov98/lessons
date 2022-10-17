import React, {memo} from 'react'

const Child = (props) => {
    console.log('child')
  return (
    <div>
        <h3>Child</h3>
        <h4>{props.name('Child').name}</h4>
    </div>
  )
}

export default memo(Child)