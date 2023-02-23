import React, { forwardRef } from 'react'
import style from './index.module.css'

const Input = forwardRef ((props, ref) => {

  return (
    <input {...props} ref={ref} className={style.input_style}/>
  )
})

export default Input;

// import React from 'react'

// const Input = (props) => {
//   return (
//     <input {...props} />
//   )
// }

// export default Input;




