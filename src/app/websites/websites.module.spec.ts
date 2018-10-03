import { WebsitesModule } from './websites.module';

describe('WebsitesModule', () => {
  let websitesModule: WebsitesModule;

  beforeEach(() => {
    websitesModule = new WebsitesModule();
  });

  it('should create an instance', () => {
    expect(websitesModule).toBeTruthy();
  });
});
