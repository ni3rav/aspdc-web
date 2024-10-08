import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EventCard } from "@/components/EventCard";
import dbConnect from "@/lib/db";
import Event, { Events as EventType } from "@/models/Event";

export async function EventsTab() {
  await dbConnect();

  const allEvents: EventType[] = await Event.find({});
  const dateMappedEvents = allEvents.map((event) => {
    const date = new Date(event.date);
    return {
      id: event.id,
      title: event.title,
      location: event.location,
      date: date,
    };
  });

  const now = new Date();
  const upcomingEvents = dateMappedEvents
    .filter((event) => event.date >= now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const pastEvents = dateMappedEvents
    .filter((event) => event.date < now)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Tabs
      defaultValue="upcoming"
      className="w-full md:h-[calc(100vh-3rem)] h-full mt-4"
    >
      <div className="flex item-center justify-center w-full">
        <TabsList className="grid md:w-1/2 w-2/3 grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="upcoming">
        <div className="flex flex-row flex-wrap w-full">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date.toLocaleString()}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="past">
        <div className="flex flex-row flex-wrap w-full">
          {pastEvents.map((event, index) => (
            <EventCard
              key={index}
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date.toLocaleString()}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
