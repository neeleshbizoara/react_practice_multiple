import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
// import { useLoaderData } from "react-router-dom";

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // const events = useLoaderData()
  useEffect(() => {
    // async function fetchEvents() {
    //   setIsLoading(true);
    //   setIsLoading(false);
    // }
    // fetchEvents();
  }, []);
  return (
    <>
      {/* <EventsList events={events} /> */}
      <EventsList/>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
    </>
  );
}

export default EventsPage;
