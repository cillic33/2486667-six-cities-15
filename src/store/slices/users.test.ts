import {expect, it} from 'vitest';
import {AuthorizationStatus, RequestStatus} from '@/utils/const';
import {UsersState} from '@/types/user';
import {usersSlice} from '@/store/slices/users';
import {checkAuth, loginUser, logoutUser} from '@/store/thunks/users';
import {makeFakeAuthorisationData, makeFakeAuthorizationStatus, makeFakeUserData} from '@/utils/mock';

describe('usersSlice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Idle,
      };

      const result = usersSlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Idle,
      };

      const result = usersSlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('checkAuth', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "checkAuth.pending"', () => {
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Loading,
      };

      const result = usersSlice.reducer(undefined, checkAuth.pending('', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "user" to user data, "authorizationStatus" to "AuthorizationStatus.Authorized", "requestStatus" to "RequestStatus.Success" with "checkAuth.fulfilled"', () => {
      const mockUserData = makeFakeUserData();
      const expectedState: UsersState = {
        user: mockUserData,
        authorizationStatus: AuthorizationStatus.Authorized,
        requestStatus: RequestStatus.Success,
      };

      const result = usersSlice.reducer(undefined, checkAuth.fulfilled(mockUserData, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "authorizationStatus" to "AuthorizationStatus.NoAuthorized", "requestStatus" to "RequestStatus.Failed" with "checkAuth.rejected"', () => {
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuthorized,
        requestStatus: RequestStatus.Failed,
      };

      const result = usersSlice.reducer(undefined, checkAuth.rejected(null, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('loginUser', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "loginUser.pending"', () => {
      const mockAuthorisationData = makeFakeAuthorisationData();
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Loading,
      };

      const result = usersSlice.reducer(undefined, loginUser.pending('', mockAuthorisationData));

      expect(result).toEqual(expectedState);
    });

    it('should set "user" to user data, "authorizationStatus" to "AuthorizationStatus.Authorized", "requestStatus" to "RequestStatus.Success" with "loginUser.fulfilled"', () => {
      const mockAuthorisationData = makeFakeAuthorisationData();
      const mockUserData = makeFakeUserData();
      const expectedState: UsersState = {
        user: mockUserData,
        authorizationStatus: AuthorizationStatus.Authorized,
        requestStatus: RequestStatus.Success,
      };

      const result = usersSlice.reducer(undefined, loginUser.fulfilled(mockUserData, '', mockAuthorisationData));

      expect(result).toEqual(expectedState);
    });

    it('should set "authorizationStatus" to "AuthorizationStatus.NoAuthorized", "requestStatus" to "RequestStatus.Failed" with "loginUser.rejected"', () => {
      const mockAuthorisationData = makeFakeAuthorisationData();
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuthorized,
        requestStatus: RequestStatus.Failed,
      };

      const result = usersSlice.reducer(undefined, loginUser.rejected(null, '', mockAuthorisationData));

      expect(result).toEqual(expectedState);
    });
  });

  describe('logoutUser', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "logoutUser.pending"', () => {
      const mockAuthorisationData = makeFakeAuthorisationData();
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Loading,
      };

      const result = usersSlice.reducer(undefined, logoutUser.pending('', mockAuthorisationData));

      expect(result).toEqual(expectedState);
    });

    it('should set "user" to "null", "authorizationStatus" to "AuthorizationStatus.NoAuthorized", requestStatus to "RequestStatus.Success" with "logoutUser.fulfilled"', () => {
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuthorized,
        requestStatus: RequestStatus.Success,
      };

      const result = usersSlice.reducer(undefined, logoutUser.fulfilled('', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "requestStatus" to "RequestStatus.Failed" with "logoutUser.rejected"', () => {
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Failed,
      };

      const result = usersSlice.reducer(undefined, logoutUser.rejected(null, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('setUser', () => {
    it('should set "user" to user data with "setUser" action', () => {
      const mockUserData = makeFakeUserData();
      const expectedState: UsersState = {
        user: mockUserData,
        authorizationStatus: AuthorizationStatus.Unknown,
        requestStatus: RequestStatus.Idle,
      };

      const result = usersSlice.reducer(undefined, usersSlice.actions.setUser(mockUserData));

      expect(result).toEqual(expectedState);
    });
  });

  describe('requireAuth', () => {
    it('should set "authorizationStatus" to "AuthorizationStatus.Authorized" with "requireAuth" action', () => {
      const mockAuthorizationStatus = makeFakeAuthorizationStatus(AuthorizationStatus.Authorized);
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.Authorized,
        requestStatus: RequestStatus.Idle,
      };

      const result = usersSlice.reducer(undefined, usersSlice.actions.requireAuth(mockAuthorizationStatus));

      expect(result).toEqual(expectedState);
    });

    it('should set "authorizationStatus" to "AuthorizationStatus.NoAuthorized" with "requireAuth" action', () => {
      const mockAuthorizationStatus = makeFakeAuthorizationStatus(AuthorizationStatus.NoAuthorized);
      const expectedState: UsersState = {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuthorized,
        requestStatus: RequestStatus.Idle,
      };

      const result = usersSlice.reducer(undefined, usersSlice.actions.requireAuth(mockAuthorizationStatus));

      expect(result).toEqual(expectedState);
    });
  });
});
