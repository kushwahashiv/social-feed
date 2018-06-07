import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Search for feeds by text, user or location', () => {
    page.navigateTo();
    expect(page.getSearchPlaceholderText()).toEqual('Search for feeds by text, user or location');
  });
});
