import React from 'react';
import ReactDOM from 'react-dom';

//declaration
const modalDOM = document.getElementById('modal');

//event propagtation[bubbling -from e.target to final parent] stopper
const stopPropagation = (e) => {
  return e.stopPropagation();
};
const Modal = ({ title, content, actions, onDismiss }) => {
  //createPortal take two argument -1st block is the JSX we want to render screen
  //2nd one is a place where we want to portal
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={stopPropagation}
        className="ui standard modal visible active"
      >
        <div className="header">{title} </div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    modalDOM
  );
};
export default Modal;
//we use React portal for hirerchy issues for example for modals
//instead of making child a modal to its default container we create a portal and make it a child for body
