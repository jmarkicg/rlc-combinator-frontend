import {ElementEnum} from "./element-enum";

export class CombinatorModel {
  type: ElementEnum;
  requestedValue: number;
  allowedErrorPercentage: number;
  numGeneratedItems: number;
}
