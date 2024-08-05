const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//Store all the tasks along with their associated data
const taskData = []; //And save them on localStorage
let currentTask = {}; //to track the state when editin and discarding tasks

const reset = ()=>{
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

openTaskFormBtn.addEventListener("click",()=>{
    taskForm.classList.toggle("hidden")
  });

//Display cancel and discard inly if there is some text preseznt in the input fields
closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  
    if (formInputsContainValues) {
      confirmCloseDialog.showModal();
    } else {
      reset();
    }
  });

cancelBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();
    reset();
  });

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //to stop the page to refresh after submiting

//Determine wheter the task being added to the taskData array already exists
//if doesn't- add it. If it does- update it.

    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
      };
    
       if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
      }
    
      taskData.forEach(({id, title, date, description}) => {
          (tasksContainer.innerHTML += `
            <div class="task" id="${id}">
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Description:</strong> ${description}</p>
              <button type="button" class="btn">Edit</button>
              <button type="button" class="btn">Delete</button>
            </div>
          `)
        } 
      );
    
      reset();
});



