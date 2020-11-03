import { EventEmitter } from "events";
import actionTypes from "../actions/actionTypes";
import Dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange(actionType, actionData) {
    this.emit(CHANGE_EVENT, actionType, actionData);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((x) => x.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange(action.actionType, action.course);
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange(action.actionType);
      break;

      case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course => course.id === action.course.id ? action.course : course);
      store.emitChange(action.actionType, action.course);
      break;

    default:
    //nothing to do
  }
});

export default store;
