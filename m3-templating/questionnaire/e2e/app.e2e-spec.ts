import { QuestionnairePage } from './app.po';

describe('questionnaire App', () => {
  let page: QuestionnairePage;

  beforeEach(() => {
    page = new QuestionnairePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
