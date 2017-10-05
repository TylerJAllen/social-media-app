import React from 'react';
import NewPostForm from '../../components/NewPostForm';
import PropTypes from 'prop-types';
import { Modal }  from 'react-bootstrap';

class NewPostControl extends React.Component {

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
            <NewPostForm hideFormAfterSubmission={this.props.hideFormModal} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewPostControl.propTypes = {
  hideFormModal: PropTypes.func
};

export default NewPostControl;
