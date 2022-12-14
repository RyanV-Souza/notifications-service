import { Notification } from './../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Hello world!',
      category: 'welcome',
    });

    expect(notifications).toHaveLength(1);
  });
});
