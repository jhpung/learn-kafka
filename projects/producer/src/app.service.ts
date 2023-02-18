import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MY_SERVICE') private client: ClientKafka) {}

  @Cron('*/5 * * * * *')
  handleProduceRequest() {
    console.log('emit');
    this.client.emit('event', {
      userId: '1234',
      name: 'jhpung',
    });
  }
}
