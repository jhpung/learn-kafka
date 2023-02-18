import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @EventPattern('event')
  handleEvent(data: Record<string, unknown>): any {
    this.logger.log(data);
  }
}
