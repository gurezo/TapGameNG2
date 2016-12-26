import { TapGameNG2Page } from './app.po';

describe('tap-game-ng2 App', function() {
  let page: TapGameNG2Page;

  beforeEach(() => {
    page = new TapGameNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
