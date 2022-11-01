import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@hieunguyen1104_hcmus/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
