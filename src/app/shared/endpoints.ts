import {environment} from "../../environments/environment";

export function endpoints() {
  const restApiEndpoint = environment.restApiEndpoint;
  return{
      rlc : {
        api: restApiEndpoint,
      capacitorsList : restApiEndpoint + '/capacitor/list',
      resistorsList : restApiEndpoint + '/resistor/list'
      }
  };
}
