import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAuthCredentialResponse,
  IUser,
} from "../../../interfaces/globalInterFaces";
import { tokenHelpers } from "../../../helpers/tokenHelpers";

type IUseInitialState = {
  user: IUser | null;
};
const initialState: IUseInitialState = { user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<Pick<IAuthCredentialResponse, "data">>
    ) => {
      const user = action.payload?.data?.user;
      const accessToken = action.payload?.data?.accessToken;
      tokenHelpers.setToken("accessToken", accessToken);

      state.user = { ...user };
    },
    logOutUser: (state) => {
      tokenHelpers.deleteToken("accessToken");
      state.user = null;
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
