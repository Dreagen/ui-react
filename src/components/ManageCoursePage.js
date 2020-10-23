import React from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [toastOpen, setToastOpen] = React.useState(false);
  
  const [course, setCourse] = React.useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleToastClose() {
    setToastOpen(false);
  }

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.createToast(`${course.title} course saved!`);
      props.history.push("courses");
    });
  }

  return (
    <CourseForm
      course={course}
      onChange={handleChange}
      onSubmit={handleSubmit}
      toastOpen={toastOpen}
      onToastClose={handleToastClose}
    />
  );
};

export default ManageCoursePage;
