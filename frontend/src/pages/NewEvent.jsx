import { redirect } from "react-router-dom";
import { EventForm } from "../components";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const formData = await request.formData();

  // const eventData = {
  //   title: formData.get("title"),
  //   image: formData.get("image"),
  //   date: formData.get("date"),
  //   description: formData.get("description"),
  // };

  const eventData = Object.fromEntries(formData.entries());

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Failed to create new event." }),
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
}
