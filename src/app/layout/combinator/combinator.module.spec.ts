import { CombinatorModule } from './combinator.module';

describe('CombinatorModule', () => {
    let combinatorModule: CombinatorModule;

    beforeEach(() => {
        combinatorModule = new CombinatorModule();
    });

    it('should create an instance', () => {
        expect(combinatorModule).toBeTruthy();
    });
});
