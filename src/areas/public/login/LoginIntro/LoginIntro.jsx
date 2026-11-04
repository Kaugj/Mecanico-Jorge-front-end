import { Lock, CalendarCheck, UserCog } from 'lucide-react';
import './LoginIntro.css';

// Benefícios de ter conta (o que existe na área privada)
const BENEFITS = [
  { icon: Lock, label: 'Acompanhe seus pedidos' },
  { icon: CalendarCheck, label: 'Gerencie seus dados' },
  { icon: UserCog, label: 'Mais praticidade para você' },
];

/**
 * Lado esquerdo da tela de login: título, frase e lista de benefícios.
 */
export default function LoginIntro() {
  return (
    <div className="login-intro">
      <h1>Acesse sua conta</h1>
      <p>Gerencie seus pedidos, acompanhe seus agendamentos e muito mais.</p>
      <ul>
        {BENEFITS.map(({ icon: Icon, label }) => (
          <li key={label}><Icon size={30} strokeWidth={1.6} aria-hidden="true" /> {label}</li>
        ))}
      </ul>
    </div>
  );
}
