const location = window.location;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || `${location.protocol}//${location.host}`;

export const CUSTOMER_API_URL = API_BASE_URL + "/api/datatable/customers";
export const FILM_API_URL = API_BASE_URL + "/api/datatable/films";
