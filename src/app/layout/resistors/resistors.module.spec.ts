import { ResistorsModule } from './resistors.module';

describe('ResistorsModule', () => {
    let resistorsModule: ResistorsModule;

    beforeEach(() => {
      resistorsModule = new ResistorsModule();
    });

    it('should create an instance', () => {
        expect(resistorsModule).toBeTruthy();
    });
});
