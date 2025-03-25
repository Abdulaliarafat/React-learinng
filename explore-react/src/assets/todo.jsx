export default function ToDo({task,isDone,time=0}){
    if(isDone){
        return <li>Done:{task} Duration:{time}</li>
    }
    else{
        return <li>Panding:{task}</li>
    }
}