import { M1HelloAngularPage } from './app.po';

describe('m1-hello-angular App', () => {
  let page: M1HelloAngularPage;

  beforeEach(() => {
    page = new M1HelloAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
