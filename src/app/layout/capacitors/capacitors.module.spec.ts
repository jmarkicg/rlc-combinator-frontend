import {CapacitorsModule} from "./capacitors.module";

describe('CapacitorsModule', () => {
    let capacitorsModule: CapacitorsModule;

    beforeEach(() => {
      capacitorsModule = new CapacitorsModule();
    });

    it('should create an instance', () => {
        expect(capacitorsModule).toBeTruthy();
    });
});
