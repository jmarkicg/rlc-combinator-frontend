import {RlcTableModule} from "./rlc-table.module";

describe('RlcTableModule', () => {
    let rlcTableModule: RlcTableModule;

    beforeEach(() => {
      rlcTableModule = new RlcTableModule();
    });

    it('should create an instance', () => {
        expect(rlcTableModule).toBeTruthy();
    });
});
