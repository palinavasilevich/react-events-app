import { createBrowserRouter } from "react-router-dom";

import {
  RootLayout,
  ErrorPage,
  HomePage,
  EventsPage,
  EventDetailsPage,
  NewEventPage,
  EditEventPage,
  EventsLayout,
} from "../pages";
import { loader as eventsLoader } from "../pages/Events";
import { loader as eventDetailsLoader } from "../pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

export default router;
