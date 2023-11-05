import { useForm, SubmitHandler } from "react-hook-form";
import loginFormImage from "../assets/loginformimg-min.jpg";
import { useLoginUserMutation } from "../redux/features/user/userApiSlice";
import { useEffect } from "react";
import { IAuthCredentials } from "../interfaces/globalInterFaces";
import { useAppDispatch } from "../hooks/hooks";
import { loginUser } from "../redux/features/user/userSlice";

type IAuthPageProps = {
  isUsingForLogin?: boolean;
};

export default function AuthPage({ isUsingForLogin }: IAuthPageProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthCredentials>();
  const [login, { data, isLoading }] = useLoginUserMutation();
  const handleLogin: SubmitHandler<IAuthCredentials> = (data) => {
    login({ ...data });
  };
  useEffect(() => {
    if (data?.success) {
      dispatch(loginUser(data));
    }
  }, [data, dispatch]);
  return (
    <div className="lg:grid lg:place-items-center p-3 min-h-screen  bg-base-200">
      <div className="flex lg:flex-row justify-center">
        <div
          className="text-center hidden min-h-full px-3 rounded-l-2xl lg:flex lg:flex-col lg:justify-center lg:text-left"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0,0,0,1),transparent),url(${loginFormImage})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-4xl font-bold">
            {isUsingForLogin ? "Login" : "Signin"} now!
          </h1>
          <p className="py-6">
            You are required to signin to continue in this site.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:max-w-xs lg:rounded-tl-none lg:rounded-bl-none sm:max-w-sm bg-base-100">
          <h1 className="font-bold text-2xl uppercase text-center pt-8 lg:hidden">
            pelase login
          </h1>
          <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className={`input input-bordered ${
                  errors.email && "input-error"
                }`}
                // required
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className={`input input-bordered ${
                  errors.password && "input-error"
                }`}
                // required
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">
                {isUsingForLogin ? "Login" : "Singup"}
              </button>
              {isLoading && <p className="text-red-500">loading</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
