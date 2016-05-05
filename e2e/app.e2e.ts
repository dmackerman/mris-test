import { MrisTestPage } from './app.po';

describe('mris-test App', function() {
  let page: MrisTestPage;

  beforeEach(() => {
    page = new MrisTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mris-test works!');
  });
});
