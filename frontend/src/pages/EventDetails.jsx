import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const { eventId } = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{eventId}</p>
    </>
  );
}

export default EventDetailsPage;
