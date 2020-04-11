
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completedTask: function() {
        this.complete = true;
    }
  };
  return task
}



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Clean floors", "Vaccuum and then mop the floors")
const tasks = [task1, task2, task3];

task1.logState(); // clea cat litter has not been completed.
// before it was OO
// logState(task1) <-- does that same thing, its because it is now inside of the object called NewTask
task1.completedTask();
task1.logState(); // Clean Cat Litter has been completed

task3.logState(); // clean floors has not been completed;
task3.completesTask(); //turns the complete into true;
task3.logState(); //clean floors has been completed
// logTaskState(task2)



// console.log(tasks);
