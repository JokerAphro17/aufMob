import Constants from "expo-constants";
const { manifest } = Constants;

export const TOKEN_TYPE = 'Bearer';
export const USER_SESSION = "USER_SESSION";
export const REQUESTS = "REQUESTS";

export const API_DOMAIN = `http://${manifest.debuggerHost.split(":")[0]}:3000`;
export const API_URL = `${API_DOMAIN}/api`;
export const API_STORAGE_URL = `${API_DOMAIN}/storage`;
