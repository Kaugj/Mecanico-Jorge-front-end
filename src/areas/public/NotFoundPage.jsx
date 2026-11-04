import Button from '@/shared/components/Button/Button';

/**
 * Página exibida quando a URL não corresponde a nenhuma rota (404).
 */
export default function NotFoundPage() {
  return (
    <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--color-red)', fontSize: 48 }}>Página não encontrada</h1>
      <p style={{ margin: '16px 0 32px', color: 'var(--color-text-muted)' }}>O endereço que você acessou não existe.</p>
      <Button to="/">Voltar ao início</Button>
    </section>
  );
}
