import {AuthorizationStatus, RequestStatus} from '@/utils/const';

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

interface UsersState {
  user: UserData | null;
  authorizationStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
}


type AuthorizationData = {
  login: string;
  password: string;
}

type UserData = {
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export {User, UsersState, AuthorizationData, UserData};
