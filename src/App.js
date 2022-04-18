// function App() {
//   const title = "This is title variable";
//   const body = "This is blog post body";
//   const comments = [
//     { id: 1, text: "Comment One" },
//     { id: 2, text: "Comment Two" },
//     { id: 3, text: "Comment Three" },
//   ];

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import FeedbackItem from "./component/FeedbackItem";
import FeedbackList from "./component/FeedbackList";
import Header from "./component/Header";
import FeedbackStat from "./component/FeedbackStat";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import Card from "./component/shared/Card";
import Post from "./component/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

//   const loading = false;
//   const showComments = true;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     //This is what it looks like without JSX
//     // React.createElement(
//     //   "div",
//     //   { className: "container" },
//     //   React.createElement("h1", {}, "My App")
//     // )

//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>

//       {showComments && commentBlock}
//     </div>
//   );
// }

function App() {
  //The below line of code useState(FeedbackData) was using before useContext
  //const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   //console.log("App", id);
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />

                  {/* The below line is before useContext  */}
                  {/* <FeedbackForm handleAdd={addFeedback} /> */}
                  {/* <FeedbackStat feedback={feedback} /> */}
                  {/* <FeedbackList handleDelete={deleteFeedback} /> */}
                  {/* The below line is before useContext  */}
                  {/* <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  /> */}
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
            <Route path="/post/*" element={<Post />} />
          </Routes>

          {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
