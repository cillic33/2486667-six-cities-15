import {AuthorizationStatus, RequestStatus} from '@/utils/const';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface UsersState {
  user: UserData | null;
  authorizationStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
}


export type AuthorizationData = {
  login: string;
  password: string;
}

export type UserData = {
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
