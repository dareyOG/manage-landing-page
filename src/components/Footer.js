import logoFooter from './images/logo--footer.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export function Footer() {
  const schema = yup.object().shape({
    email: yup.string().email().required('please insert a vaild mail.'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    return data;
  };
  return (
    <footer className="footer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <span>
          <input
            className="form__input"
            type="text"
            placeholder="Updates in your inbox..."
            {...register('email')}
          />
          <button className="btn__submit">Go</button>
        </span>
        <p className="error">{errors.email?.message}</p>
      </form>
      <div className="footer__nav">
        <div>
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#products">Products</a>
          <a href="#aboutUs">About Us</a>
        </div>
        <div>
          <a href="#careers">Careers</a>
          <a href="#community">Community</a>
          <a href="#privacyPolicy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-youtube" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-twitter" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-pinterest" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logoFooter} alt="logo" />{' '}
      </div>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
}
