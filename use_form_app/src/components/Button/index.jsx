// import React from 'react'
// import style from './index.module.css'

// export default function Button({
//     children, color }) {
//   return (
//     <button className={[style.button, style[color]].
//     join('  ')}>
//         { children }</button>
//   )
// }



import React from 'react'
import style from './index.module.css'

export default function Button({ children, color, ...props}) {

  return (
    <button className={[style.button, style[color]].join(' ')}
      { ...props } 
      >
      { children }
    </button>
  )
}
