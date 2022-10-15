import PropTypes from 'prop-types';
import { FeedbackText, TotalText, PositiveText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackText>Good: {good}</FeedbackText>
      <FeedbackText>Neutral: {neutral}</FeedbackText>
      <FeedbackText>Bad: {bad}</FeedbackText>
      <TotalText>Total: {total}</TotalText>
      <PositiveText>Positive feedback: {positivePercentage}%</PositiveText>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
