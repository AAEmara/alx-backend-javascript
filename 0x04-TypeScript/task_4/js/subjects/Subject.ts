// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    };

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    };
  };
};
