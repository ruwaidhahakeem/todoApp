window.addEventListener('load', () =>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");
    
    form.addEventListener('submit',(e) =>{
        e.preventDefault(); //doesnt refresh page when submit is clicked

        const task=input.value;
        if (!task) {
            alert("don't leave it empty pls");
            return;
        } 

        const task_el=document.createElement("div");
        task_el.classList.add("task");//giving it a class

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");//giving it a class
        task_content_el.innerText=task;

        task_el.appendChild(task_content_el);

        con

        list_el.appendChild(task_el);
    })
})