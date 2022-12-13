import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new content', () => {
    const content = new Content('any_content');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a new content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a new content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
