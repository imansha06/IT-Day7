fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
    console.log(data);

    let tblTodoList = document.getElementById("tblTodoList");

    let body=""

    data.forEach(element => {
        body+= `
                <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.userId}</td>
            <td>${element.completed}</td>
        </tr>
        `
    });

    tblTodoList.innerHTML=body;

})