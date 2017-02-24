import { AaronsRedditClonePage } from './app.po';

describe('aarons-reddit-clone App', () => {
  let page: AaronsRedditClonePage;

  beforeEach(() => {
    page = new AaronsRedditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
