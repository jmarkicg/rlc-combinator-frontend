import {environment} from "../../environments/environment";

export function endpoints() {
  const restApiEndpoint = environment.restApiEndpoint;
  const restAuthEndpoint = environment.restAuthEndpoint;
  return{
      rlc : {
        api: restApiEndpoint,
        capacitorsList : restApiEndpoint + '/capacitor/list',
        resistorsList : restApiEndpoint + '/resistor/list',
        resistorSave : restApiEndpoint + '/resistor/save',
        resistorDelete : restApiEndpoint + '/resistor/delete',
        capacitorSave : restApiEndpoint + '/capacitor/save',
        capacitorDelete : restApiEndpoint + '/capacitor/delete',
        combinatorGenerate: restApiEndpoint + '/combinator/combinations',
        login: restAuthEndpoint + '/login',
        refreshToken: restAuthEndpoint + '/refreshToken'
      }
  };
}
