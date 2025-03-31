import getListStudents from './0-get_list_students.js';
function getStudentsByLocation(list, city) {
  if (!Array.isArray(list)) {
    return [];
  }
  return  list.filter((student) => student.location === city);
}
