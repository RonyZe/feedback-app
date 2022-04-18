import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  //console.log(feedback);
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              // handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

//This piece of code is without useContext state functionality
// function FeedbackList({ feedback, handleDelete }) {
//   //console.log(feedback);
//   if (!feedback || feedback.length === 0) {
//     return <p>No Feedback Yet</p>;
//   }

//   return (
//     <div className="feedback-list">
//       <AnimatePresence>
//         {feedback.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FeedbackItem
//               key={item.id}
//               item={item}
//               handleDelete={handleDelete}
//             />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );

//   //This line of code is without animation
//   // return (
//   //   <div className="feedback-list">
//   //     {feedback.map((item) => (
//   //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//   //     ))}
//   //   </div>
//   // );
// }

//This piece of code is using before useContext for typechecking
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
