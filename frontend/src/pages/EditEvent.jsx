import { useRouteLoaderData } from "react-router-dom";
import { EventForm } from "../components";

function EditEventPage() {
  const data = useRouteLoaderData("event-details");

  return <EventForm event={data.event} />;
}

export default EditEventPage;
