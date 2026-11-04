import { useState } from 'react';
import Button from '@/shared/components/Button/Button';
import { formatPhone } from '@/shared/utils/formatters';
import { sendContactMessage } from '../contactService';
import './ContactForm.css';

/**
 * Formulário "Envie uma mensagem".
 * Fluxo: digitar → validar → enviar (contactService) → mostrar sucesso/erro.
 * @param {string} [initialMessage] - Texto inicial da mensagem (ex.: serviço escolhido).
 */
export default function ContactForm({ initialMessage = '' }) {
  const [values, setValues] = useState({ name: '', phone: '', message: initialMessage });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Atualiza um campo; o telefone passa pela máscara
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: name === 'phone' ? formatPhone(value) : value }));
    setErrors((current) => ({ ...current, [name]: undefined })); // limpa o erro ao digitar
    if (status !== 'sending') setStatus('idle');
  };

  // Regras de validação; retorna um objeto { campo: 'mensagem de erro' }
  const validate = () => {
    const found = {};
    if (values.name.trim().length < 2) found.name = 'Informe seu nome.';
    if (values.phone.replace(/\D/g, '').length < 10) found.phone = 'Informe um telefone com DDD.';
    if (values.message.trim().length < 5) found.message = 'Escreva sua mensagem.';
    return found;
  };

  // Envia o formulário se estiver válido
  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      await sendContactMessage(values);
      setStatus('success');
      setValues({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Envie uma mensagem</h2>

      <label className="contact-form__field">
        <span className="sr-only">Nome</span>
        <input name="name" placeholder="Nome" value={values.name} onChange={handleChange} aria-invalid={!!errors.name} autoComplete="name" />
        {errors.name && <small role="alert">{errors.name}</small>}
      </label>

      <label className="contact-form__field">
        <span className="sr-only">Telefone</span>
        <input name="phone" type="tel" placeholder="Telefone" value={values.phone} onChange={handleChange} aria-invalid={!!errors.phone} autoComplete="tel" />
        {errors.phone && <small role="alert">{errors.phone}</small>}
      </label>

      <label className="contact-form__field">
        <span className="sr-only">Mensagem</span>
        <textarea name="message" rows={3} placeholder="Mensagem" value={values.message} onChange={handleChange} aria-invalid={!!errors.message} />
        {errors.message && <small role="alert">{errors.message}</small>}
      </label>

      <Button type="submit" block disabled={status === 'sending'} className="contact-form__submit">
        {status === 'sending' ? 'Enviando...' : 'Enviar'}
      </Button>

      {status === 'success' && <p className="contact-form__feedback" role="status">Mensagem enviada! Entraremos em contato em breve.</p>}
      {status === 'error' && <p className="contact-form__feedback contact-form__feedback--error" role="alert">Não foi possível enviar. Tente pelo WhatsApp.</p>}
    </form>
  );
}
