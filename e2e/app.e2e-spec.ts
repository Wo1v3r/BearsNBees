import { BearsNBeesPage } from './app.po';

describe('bears-n-bees App', () => {
  let page: BearsNBeesPage;

  beforeEach(() => {
    page = new BearsNBeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});