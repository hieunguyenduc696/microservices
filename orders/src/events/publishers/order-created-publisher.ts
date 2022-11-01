import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@hieunguyen1104_hcmus/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
