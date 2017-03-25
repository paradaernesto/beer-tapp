import { BeerTappPage } from './app.po';

describe('beer-tapp App', () => {
  let page: BeerTappPage;

  beforeEach(() => {
    page = new BeerTappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
