import theme from './theme';

describe('theme', () => {
  it('should have the correct typography fontFamily', () => {
    expect(theme.typography?.fontFamily).toBe('var(--font-roboto)');
  });
}); 