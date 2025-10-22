import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { MUTATION_KEY, QUERY_KEY } from "../../enum";
import { getProfile, signIn } from "./auth.api";
import { SignInPayloadType } from "./auth.type";
import { UserType } from "@/types";

export const useSignIn = () => {
  return useMutation<UserType, AxiosError, SignInPayloadType>({
    mutationFn: signIn,
    mutationKey: [MUTATION_KEY.SIGN_IN],
  });
};

export const useMe = () => {
  return useQuery<UserType, AxiosError>({
    queryFn: getProfile,
    queryKey: [QUERY_KEY.ME],
    refetchOnWindowFocus: false,
  });
};
