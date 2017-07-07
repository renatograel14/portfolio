import { PortifolioPage } from './app.po';

describe('portifolio App', () => {
  let page: PortifolioPage;

  beforeEach(() => {
    page = new PortifolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
