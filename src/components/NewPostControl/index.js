import React from 'react';
import NewPostForm from '../../components/NewPostForm';
import PropTypes from 'prop-types';
import { Button }  from 'react-bootstrap';
import { Modal }  from 'react-bootstrap';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formModalIsShowing: false
    };
  }

  showFormModal = () => {
    this.setState({ formModalIsShowing: true });
  }

  hideFormModal = () => {
    this.setState({ formModalIsShowing: false });
  }

  handleDisplayingNewPostForm = () => {
    console.log("New post button was clicked!");
    this.setState({ formVisibleOnPage: true });
  }
  render() {
    return (
      <div>
        <Button
          block
          bsStyle="primary"
          bsSize="large"
          onClick={this.showFormModal}>
          Add Post
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewPostForm
              onNewPostCreation={this.props.onNewPostCreation}
              hideFormAfterSubmission = {this.hideFormModal}
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
