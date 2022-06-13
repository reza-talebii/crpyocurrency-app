// import { API_KEY } from "../constant/api";

export interface IHeaderApi {
  ["X-RapidAPI-Host"]: string;
  ["X-RapidAPI-Key"]: string | undefined;
}

export interface ICreateRequest {
  url: string;
  headers: IHeaderApi;
}
