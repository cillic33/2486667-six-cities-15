const AUTHORIZATION_TOKEN_KEY_NAME = 'six-cities-token';

type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTHORIZATION_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTHORIZATION_TOKEN_KEY_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(AUTHORIZATION_TOKEN_KEY_NAME);
};
