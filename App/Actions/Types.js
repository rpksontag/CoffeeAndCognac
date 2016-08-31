// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE
  JUPITER

  LOGOUT

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE
`)
