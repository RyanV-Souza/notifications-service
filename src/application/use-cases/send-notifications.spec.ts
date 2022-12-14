import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Hello world!',
      category: 'welcome',
    });
    expect(notification).toBeTruthy();
  });
});
