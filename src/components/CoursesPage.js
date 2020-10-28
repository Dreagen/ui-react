import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses } from "../actions/courseActions";

function CoursesPage(props) {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }

    return () => courseStore.removeChangeListener(onChange);
  }, []);

function onChange() {
  setCourses(courseStore.getCourses());
}

  return (
      <CourseList courses={courses} />
  );
}

export default CoursesPage;
