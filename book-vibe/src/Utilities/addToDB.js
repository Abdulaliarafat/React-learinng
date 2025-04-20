const getStoreBook=()=>{
     const storedBookStr=localStorage.getItem('readList');
     if(storedBookStr){
        const storedBookData=JSON.parse(storedBookStr);
        return storedBookData
     }
     else{
        return [];
     }
}
const addToStoreDB=(id)=>{
      const storedJsonData=getStoreBook();
      if(storedJsonData.includes(id)){
        return   alert('This item alrady Exists');
      }
      else{
          storedJsonData.push(id)
         const data=JSON.stringify(storedJsonData)
         localStorage.setItem('readList',data)
      }
}
export{addToStoreDB}