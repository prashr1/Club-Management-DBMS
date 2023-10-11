// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export default function ListUserBook({ match }) {
//   let userId = match.params.id
//   console.log("DATA2: ",userId)
        
//     let [userBook, setuserBook] = useState(null)

//     useEffect(() => {
//         getuserBook()
//     }, [userBook])


//     let getuserBook = async () => {
//         // if (noteId === 'new') return

//         let response = await fetch(`/show_user/show_userbookings//${userId}/`)
//         let data = await response.json()
//         console.log("DATA2: ",userId)
//         setuserBook(data)
//     }

// return (
//         <div className="note" >
//             {/* <div className="note-header">
//                 <h3>
//                     <ArrowLeft onClick={handleSubmit} />
//                 </h3>
//                 {noteId !== 'new' ? (
//                     <button onClick={deleteNote}>Delete</button>
//                 ) : (
//                     <button onClick={handleSubmit}>Done</button>
//                 )}

//             </div> */}
//             {/* <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea> */}
//             <p>{userBook?.user_id}</p>
//         </div>
//     )
// }
