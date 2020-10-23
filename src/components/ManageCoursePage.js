import React from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = React.useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course);
  }

  return (
    <CourseForm
      course={course}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ManageCoursePage;
