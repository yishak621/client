import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
//declaration
const modalDOM = document.getElementById('modal');
//on click callback fun. but we dont want the event propagate from its child so we should use stopPropagation
const closeModal = () => {
  return history.push('/');
};
//event propagtation[bubbling -from e.target to final parent] stopper
const stopPropagation = (e) => {
  return e.stopPropagation();
};
const Modal = ({ name }) => {
  //createPortal take two argument -1st block is the JSX we want to render screen
  //2nd one is a place where we want to portal
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="ui dimmer modals visible active">
      <div
        onClick={stopPropagation}
        className="ui standard modal visible active"
      >
        <div className="header">{name} Stream</div>
        <div className="content">
          Are you sure you want to {name} this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">{name}</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    modalDOM
  );
};
export default Modal;
//we use React portal for hirerchy issues for example for modals
//instead of making child a modal to its default container we create a portal and make it a child for body
