import { ReactElement } from "react";

export type RoutesObject = {
  [name: string]: {
    get: string;
    return: ReactElement;
    title: string;
  };
};
