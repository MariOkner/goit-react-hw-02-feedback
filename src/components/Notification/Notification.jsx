import PropTypes from 'prop-types';
import { NoFeedbackMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <NoFeedbackMessage>{message}</NoFeedbackMessage>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
