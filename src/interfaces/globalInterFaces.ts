export type IUser = { id: string; email: string; profileImage: string };

export type IAuthCredentials = {
  email: string;
  password: string;
};

export type IAuthCredentialResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    user: IUser;
    accessToken: string;
  };
};
