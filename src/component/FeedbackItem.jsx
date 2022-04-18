import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of a feedback item");

  // const handleClick = () => {
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const handleClick = () => {
    console.log(item.id);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
