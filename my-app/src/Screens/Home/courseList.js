import React from 'react';
import PropTypes from 'prop-types';

const courseList = ({ courses, renderAuthor }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Author</th>
          <th>Length</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>
              <a href={course.watchHref}>Link</a>
            </td>
            <td>{renderAuthor(course.authorId)}</td>
            <td>{course.length}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

courseList.propTypes = {
  courses: PropTypes.array.isRequired,
  renderAuthor: PropTypes.func.isRequired,
};

export default courseList;
