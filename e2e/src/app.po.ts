import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchPlaceholderText() {
    return element(by.css('app-root div app-dashboard mat-toolbar div div mat-form-field div div div')).getText();
  }
}
