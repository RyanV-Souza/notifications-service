import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Controller, Body, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;
    const { notification } = await this.sendNotification.execute({
      category,
      recipientId,
      content,
    });

    return { notification };
  }
}
