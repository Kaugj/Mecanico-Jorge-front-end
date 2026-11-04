import { useNavigate } from 'react-router-dom';
import PageTitle from '@/shared/components/PageTitle/PageTitle';
import Button from '@/shared/components/Button/Button';
import { useAuth } from '@/shared/auth/AuthContext';
import './ClientAreaHeader.css';

/**
 * Topo da área do cliente: saudação com o nome + botão "Sair".
 */
export default function ClientAreaHeader() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Encerra a sessão e volta para o login
  const handleSignOut = () => {
    signOut();
    navigate('/login', { replace: true });
  };

  const firstName = user?.name?.split(' ')[0];

  return (
    <div className="client-header">
      <PageTitle title={firstName ? `Olá, ${firstName}` : 'Minha conta'} subtitle="Acompanhe seus pedidos, agendamentos e dados." />
      <Button variant="ghost" onClick={handleSignOut}>Sair</Button>
    </div>
  );
}
