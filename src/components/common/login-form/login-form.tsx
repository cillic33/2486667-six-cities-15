import {FormEvent, useRef} from 'react';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {AuthData} from '@/types/user';
import {usersActions, usersSelectors} from '@/store/slices/users';
import {RequestStatus} from "@/utils/const";
import '@/components/common/login-form/styles.css';

export default function LoginForm() {
  const { loginUser } = useActionCreators(usersActions);
  const requestUsersStatus = useAppSelector(usersSelectors.requestStatus);
  const login = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const formSubmitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginValue = login.current?.value || '';
    const passwordValue = password.current?.value || '';
    const authData: AuthData = {
      login: loginValue,
      password: passwordValue,
    };

    loginUser(authData);
  };

  return (
    <form className="login__form form"
      action=""
      method="post"
      onSubmit={formSubmitHandle}
    >
      <fieldset className="login__form-fieldset" disabled={requestUsersStatus === RequestStatus.Loading}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="login"
            placeholder="Email"
            required
            ref={login}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            autoComplete="on"
            ref={password}
            pattern="(?=.*\d)(?=.*[a-z]).{2,}"
            title="Пароль состоит минимум из одной буквы и цифры"
          />
        </div>

        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </fieldset>
    </form>
  );
}
