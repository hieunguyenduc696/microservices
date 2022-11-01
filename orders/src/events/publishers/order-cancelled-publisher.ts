import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@hieunguyen1104_hcmus/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
