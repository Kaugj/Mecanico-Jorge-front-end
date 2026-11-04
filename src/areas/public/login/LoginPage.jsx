import LoginIntro from './LoginIntro/LoginIntro';
import LoginForm from './LoginForm/LoginForm';
import './LoginPage.css';

/**
 * Página de login (pública, porta de entrada da área privada).
 * Une: LoginIntro (texto + benefícios) e LoginForm (cartão de login).
 */
export default function LoginPage() {
  return (
    <section className="login">
      <LoginIntro />
      <LoginForm />
    </section>
  );
}
