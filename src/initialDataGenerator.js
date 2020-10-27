const randomNumberGenerator = number => {
  if (number === 1) {
    return Math.floor(Math.random() * 2);
  }
  const n = number - 1;
  return Math.floor(Math.random() * n);
};

export const initialDataGenerator = () => {
  let taskList = [];
  for (let i = 0; i < 50; i++) {
    const task = {};

    let creationDate = new Date();
    creationDate.setDate(creationDate.getDate() - randomNumberGenerator(7));

    let startDate = new Date();
    startDate.setDate(creationDate.getDate() + randomNumberGenerator(3));

    let endDate = new Date(startDate.toString());
    endDate.setSeconds(startDate.getSeconds() + randomNumberGenerator(7200));

    task.id = Math.random();
    task.name = `Mi tarea ${i}`;
    task.duration = randomNumberGenerator(7200);
    task.description = `Mi descripcion ${i}`;
    task.completed = randomNumberGenerator(1) ? true : false;
    task.completitionTime = task.completed ? randomNumberGenerator(7200) : null;
    task.creationDate = creationDate.toString();
    task.startDate = startDate.toString();
    task.endDate = endDate.toString();

    taskList.push(task);
  }

  return taskList;
};
console.log(initialDataGenerator());
