import {
  IAuthCredentialResponse,
  IAuthCredentials,
} from "../../../interfaces/globalInterFaces";
import { bookListBaseApi } from "../../baseApi";

const extendedApi = bookListBaseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<IAuthCredentialResponse, IAuthCredentials>({
      query: (patch) => ({
        url: "auth/login",
        method: "POST",
        body: { ...patch },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginUserMutation } = extendedApi;
