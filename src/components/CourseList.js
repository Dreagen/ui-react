import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title teal-text text-lighten-3">Courses</span>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author ID</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {props.courses.map((course) => {
                  return (
                    <tr key={course.id}>
                      <td>{course.title}</td>
                      <td>{course.authorId}</td>
                      <td>{course.category}</td>
                      <td>
                        <Link className="btn" to={"/course/" + course.slug}>
                          Manage
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
