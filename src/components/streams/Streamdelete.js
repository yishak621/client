import React from 'react';
import Modal from '../Modal';
import history from '../../history';

//on click callback fun. but we dont want the event propagate from its child so we should use stopPropagation
const closeModal = () => {
  return history.push('/');
};

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      Stream delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream"
        actions={actions}
        onDismiss={closeModal}
      />
    </div>
  );
};
export default StreamDelete;
//React fragment is a JSX looking element that allow us to return a multiple elments inside[instead of Div]
//it is not rendered in the elements so if we inspect we cant find it
