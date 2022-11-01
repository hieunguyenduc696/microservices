import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@hieunguyen1104_hcmus/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
