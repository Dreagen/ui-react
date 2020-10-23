import React from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [toastOpen, setToastOpen] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const [course, setCourse] = React.useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  React.useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
    }
  }, [props.match.params.slug]);

  function handleToastClose() {
    setToastOpen(false);
  }

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) {
      _errors.title = "Title is required";
    }
    if (!course.authorId) {
      _errors.authorId = "Author is required";
    }
    if (!course.category) {
      _errors.category = "Category is required";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) {
      return;
    }

    courseApi.saveCourse(course).then(() => {
      props.createToast(`${course.title} course saved!`);
      props.history.push("/courses");
    });
  }

  return (
    <CourseForm
      errors={errors}
      course={course}
      onChange={handleChange}
      onSubmit={handleSubmit}
      toastOpen={toastOpen}
      onToastClose={handleToastClose}
    />
  );
};

export default ManageCoursePage;
