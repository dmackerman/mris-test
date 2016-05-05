import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MrisTestAppComponent } from '../app/mris-test.component';

beforeEachProviders(() => [MrisTestAppComponent]);

describe('App: MrisTest', () => {
  it('should create the app',
      inject([MrisTestAppComponent], (app: MrisTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mris-test works!\'',
      inject([MrisTestAppComponent], (app: MrisTestAppComponent) => {
    expect(app.title).toEqual('mris-test works!');
  }));
});
