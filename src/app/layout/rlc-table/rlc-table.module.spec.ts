import {RlcTableModule} from "./rlc-table.module";

describe('RlcEditModule', () => {
    let rlcTableModule: RlcTableModule;

    beforeEach(() => {
      rlcTableModule = new RlcTableModule();
    });

    it('should create an instance', () => {
        expect(rlcTableModule).toBeTruthy();
    });
});
