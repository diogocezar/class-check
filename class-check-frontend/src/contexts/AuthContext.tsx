import { createContext, ReactNode, useEffect, useState } from "react";

import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { api } from "../services/apiClient";

type User = {
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, "umbriel-admin.token");

  authChannel.postMessage("signOut");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          authChannel.close();
          break;

        default:
          break;
      }
    };
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      // const response = await api.post('sessions', {
      //   email,
      //   password
      // });

      // const { token } = response.data;

      const token = "123";

      setCookie(undefined, "umbriel-admin.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      api.defaults.headers["x-access-token"] = token;

      setUser({
        email,
      });

      Router.push("/messages");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
