import { redirect, useRouteLoaderData } from "react-router-dom";
import { EventItem } from "../components";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");

  return <EventItem event={data.event} />;
}

export default EventDetailsPage;

export async function loader({ params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: `Could not fetch details for selected event.`,
      }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete event." }), {
      status: 500,
    });
  }

  return redirect("/events");
}
