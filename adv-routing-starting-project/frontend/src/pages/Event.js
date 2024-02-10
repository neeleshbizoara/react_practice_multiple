import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function Event() {
  return (  
    <>
      <h1>Event details page</h1>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <Link to={item.id} key={item.id} style={{display: 'block'}}>
            {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Event;
