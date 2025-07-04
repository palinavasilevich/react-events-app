import { createBrowserRouter } from "react-router-dom";

import {
  RootLayout,
  ErrorPage,
  HomePage,
  EventsPage,
  EventDetailPage,
  NewEventPage,
  EditEventPage,
  EventsLayout,
} from "../pages";

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
          { index: true, element: <EventsPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

export default router;
