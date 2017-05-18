import { Cp2FrontendPage } from './app.po';

describe('cp2-frontend App', () => {
  let page: Cp2FrontendPage;

  beforeEach(() => {
    page = new Cp2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
