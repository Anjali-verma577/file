async function fetchData(){
     url="https://jsonplaceholder.typicode.com/todos"
    res= await fetch("https://jsonplaceholder.typicode.com/todos")
  

     .then(res=>res.json())
    .then(json=>console.log(json))
    // .catch(erro=>{
    //     console.log("here is eror",erro)
    // })
    

}
fetchData()