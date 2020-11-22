import { Api } from "../api";

export const getOneUser = (id: number) => Api.get("/user/get", { id });
