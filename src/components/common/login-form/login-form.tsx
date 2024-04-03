import {ChangeEvent, FormEvent, useState} from 'react';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {usersActions, usersSelectors} from '@/store/slices/users';
import {RequestStatus} from '@/utils/const';
import '@/components/common/login-form/styles.css';
import {PASSWORD_NOTE, PASSWORD_PATTERN} from '@/components/common/login-form/const';
import {AuthorizationData} from '@/types/user';
import {favoritesActions} from '@/store/slices/favorites';

function LoginForm() {
  const { loginUser } = useActionCreators(usersActions);
  const requestUsersStatus = useAppSelector(usersSelectors.requestStatus);
  const { fetchFavorites } = useActionCreators(favoritesActions);
  const [formData, setFormData] = useState<AuthorizationData>({
    login: '',
    password: '',
  });

  const handleFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser(formData).then(() => {
      fetchFavorites();
    });
  };

  return (
    <form className="login__form form"
      action=""
      method="post"
      onSubmit={handleFormSubmit}
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
            value={formData.login}
            onChange={handleFieldsChange}
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
            pattern={PASSWORD_PATTERN}
            title={PASSWORD_NOTE}
            value={formData.password}
            onChange={handleFieldsChange}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </fieldset>
    </form>
  );
}
export default LoginForm;

