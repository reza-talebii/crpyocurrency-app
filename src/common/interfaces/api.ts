// import { API_KEY } from "../constant/api";

export interface IHeaderApi {
  ["X-RapidAPI-Host"]: string;
  ["X-RapidAPI-Key"]: string;
}

export interface IcreateRequest {
  url: string;
  headers: IHeaderApi;
}
