import {RlcEditModule} from "./rlc-edit.module";

describe('RlcEditModule', () => {
    let rlcEditModule: RlcEditModule;

    beforeEach(() => {
      rlcEditModule = new RlcEditModule();
    });

    it('should create an instance', () => {
        expect(rlcEditModule).toBeTruthy();
    });
});
