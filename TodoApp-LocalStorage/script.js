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

openTaskFormBtn.addEventListener("click",()=>{
    taskForm.classList.toggle("hidden")
  });

closeTaskFormBtn.addEventListener("click",()=>{
    confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
  });