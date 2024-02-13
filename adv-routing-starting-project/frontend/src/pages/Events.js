import { Suspense, useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";

function EventsPage() {
  // const events = useLoaderData();
  /* const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  ); */

  const {events} = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Error({message: "Could not fetch events."});

    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});

    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data', {status: 201});

    const resData = await response.json();
    return resData.events;
    // return response;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
