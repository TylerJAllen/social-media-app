import React from 'react';
import NewPostForm from '../../components/NewPostForm';
import PropTypes from 'prop-types';
import { Button, Modal }  from 'react-bootstrap';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          show = {this.props.formModalIsShowing}
          onHide = {this.props.hideFormModal}
          bsSize = "large">
          <Modal.Header>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewPostForm
              onNewPostCreation = {this.props.onNewPostCreation}
              hideFormAfterSubmission = {this.props.hideFormModal}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
