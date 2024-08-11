interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

interface CreateEmployeeFunc {
  (salary: number | string): Director | Teacher;
};

export class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
};

export class Teacher implements TeacherInterface {

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
};

export const createEmployee: CreateEmployeeFunc = function (salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return (new Teacher());
  }
  return (new Director());
};

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee instanceof Director);
};

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return (employee.workDirectorTasks());
  } else if (employee instanceof Teacher) {
    return (employee.workTeacherTasks());
  };
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
