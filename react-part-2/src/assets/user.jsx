import { use } from "react"

 export default function Users ({fetchuser}){
    const users=use(fetchuser)
    // console.log(users)
       return(
        <div className="cards">
            <h3>Users: {users.length}</h3>
        </div>
       )
 }