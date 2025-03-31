import getListStudents from './0-get_list_student.js'
const newGrades = [{studentId: studentId(), grade: grade()}];
function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [N/A];
  }
  return list
    .filter(student => student.location === city)
    .map(student => { newGrades.find(grade => grade.studentId === student.id);
