export class MrisTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mris-test-app h1')).getText();
  }
}
