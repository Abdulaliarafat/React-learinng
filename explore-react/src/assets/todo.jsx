// export default function ToDo({task,isDone,time=0}){
//     if(isDone){
//         return <li>Done:{task} Duration:{time}</li>
//     }
//     else{
//         return <li>Panding:{task}</li>
//     }
// }
// export default function ToDo({task,isDone,time=0}){
//   return isDone ? <li>Done: {task} Time: {time}</li> : <li>Not done:{task}</li>;
// }
// export default function ToDo({task,isDone,time=0}){
//     return isDone && <li>Done: {task} Time: {time}</li>;
//   }
// 

export default function ToDo({task,isDone,time}){
    // const displayTime=time?time:100;
    let listItem ;
        if(isDone){
            listItem = <li>Done:{task} time:  {time? 'I am done':'Not done yet'} </li>
        }
        else{
            listItem = <li>Panding:{task}</li>
        }
        return listItem
    }
   