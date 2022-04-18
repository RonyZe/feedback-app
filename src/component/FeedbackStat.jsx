import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStat() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate Rating Avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  //console.log(average);
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

//This piece of code is without useContext state functionality
// function FeedbackStat({ feedback }) {
//   //Calculate Rating Avg
//   let average =
//     feedback.reduce((acc, cur) => {
//       return acc + cur.rating;
//     }, 0) / feedback.length;

//   //console.log(average);
//   average = average.toFixed(1).replace(/[.,]0$/, "");

//   return (
//     <div className="feedback-stats">
//       <h4>{feedback.length} Reviews</h4>
//       <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
//     </div>
//   );
// }

//This piece of code is using before useContext for typechecking
// FeedbackStat.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStat;
