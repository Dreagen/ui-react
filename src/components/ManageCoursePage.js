import React from "react";
import courseStore from "../stores/courseStore";
import CourseForm from "./CourseForm";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
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
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

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

    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <CourseForm
      errors={errors}
      course={course}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ManageCoursePage;
