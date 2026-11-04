import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/shared/components/Button/Button';
import { useAuth } from '@/shared/auth/AuthContext';
import { isValidEmail } from '@/shared/utils/formatters';
import './LoginForm.css';

/**
 * Cartão de login (e-mail + senha, "Entre com Google" e link de cadastro).
 * Fluxo: validar → useAuth().signIn → ir para a área privada (/conta)
 * ou para a página que o usuário tentou abrir antes de ser barrado.
 */
export default function LoginForm() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || '/conta';

  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  // Atualiza o campo digitado e limpa seu erro
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitError('');
  };

  // Regras de validação do formulário
  const validate = () => {
    const found = {};
    if (!isValidEmail(values.email)) found.email = 'Informe um e-mail válido.';
    if (values.password.length < 6) found.password = 'A senha tem no mínimo 6 caracteres.';
    return found;
  };

  // Envia as credenciais se o formulário estiver válido
  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    try {
      await signIn(values);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Placeholders: integrar quando existirem no back-end
  const handleGoogle = () => setSubmitError('Login com Google ainda não configurado.');
  const handleSignUp = () => setSubmitError('Cadastro ainda não disponível.');
  const handleForgot = () => setSubmitError('Recuperação de senha ainda não disponível.');

  return (
    <form className="login-card" onSubmit={handleSubmit} noValidate>
      <h2>Entrar</h2>
      <p className="login-card__sub">Acesse sua conta para continuar.</p>

      <label className="login-card__field">
        <span className="sr-only">E-mail</span>
        <input name="email" type="email" placeholder="E-mail" autoComplete="email" value={values.email} onChange={handleChange} aria-invalid={!!errors.email} />
        {errors.email && <small role="alert">{errors.email}</small>}
      </label>

      <label className="login-card__field">
        <span className="sr-only">Senha</span>
        <input name="password" type="password" placeholder="Senha" autoComplete="current-password" value={values.password} onChange={handleChange} aria-invalid={!!errors.password} />
        {errors.password && <small role="alert">{errors.password}</small>}
      </label>

      <Button type="submit" block disabled={loading} className="login-card__submit">{loading ? 'Entrando...' : 'Entrar'}</Button>
      {submitError && <p className="login-card__error" role="alert">{submitError}</p>}

      <button type="button" className="login-card__link" onClick={handleForgot}>Esqueceu sua senha?</button>

      <div className="login-card__divider"><span>OU</span></div>

      <button type="button" className="login-card__google" onClick={handleGoogle}>
        <strong aria-hidden="true">G</strong> Entre com Google
      </button>

      <p className="login-card__signup">
        Não tem uma conta? <button type="button" onClick={handleSignUp}>Cadastre-se</button>
      </p>
    </form>
  );
}
