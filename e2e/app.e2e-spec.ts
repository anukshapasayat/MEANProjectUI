import { MEANProjectUIPage } from './app.po';

describe('meanproject-ui App', function() {
  let page: MEANProjectUIPage;

  beforeEach(() => {
    page = new MEANProjectUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
