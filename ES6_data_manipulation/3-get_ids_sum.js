import getListStudents from './0-get_list_students.js'
function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((sum, student) => sum + student.id, 0);
}
