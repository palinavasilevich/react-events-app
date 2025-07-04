import { createBrowserRouter } from "react-router-dom";

import {
  RootLayout,
  ErrorPage,
  HomePage,
  EventsPage,
  EventDetailPage,
  NewEventPage,
  EditEventPage,
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
        element: <EventsPage />,
      },
      { path: "/events/:eventId", element: <EventDetailPage /> },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

export default router;
