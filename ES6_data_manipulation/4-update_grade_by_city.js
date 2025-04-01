import getListStudents from './0-get_list_student.js'

const newGrades = [{studentId: studentId(), grade: grade()}];

function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }
  return students.filter(student => student.location === city).map((student) => {
    let grade = 'N/A';
    for (const gradeObj of newGrade) {
      if (gradeObj.studentId === student.id)
        grade = gradeObj.grade;
    }
  }
  return[student, grade]
}
