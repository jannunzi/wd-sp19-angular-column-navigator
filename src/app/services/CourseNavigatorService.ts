export class CourseNavigatorService {

  findAllCourses = () =>
    fetch
    ('http://localhost:8080/api/courses')
      .then(response => response.json());
  findModulesForCourse = courseId =>
    fetch
    (`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json());
}
