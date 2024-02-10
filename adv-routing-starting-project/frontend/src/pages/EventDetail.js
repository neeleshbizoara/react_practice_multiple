import { useParams } from "react-router-dom";

export default function EventDetail() {
  const param = useParams();
  return (
    <>
      <h1>Event Details</h1>
      <p>Event ID: {param.eventId}</p>
    </>
  );
}
