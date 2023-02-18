import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'MY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'my-client-id',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'my-group',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
