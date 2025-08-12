import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ÁSPERUS | Agendar e Suporte";
    // Basic meta description update for SEO
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Agende seu atendimento na ÁSPERUS ou acesse o suporte. Layout simples e acessível.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">ÁSPERUS</h1>
        <nav>
          <Button size="sm" variant="outline" onClick={() => navigate('/auth')} aria-label="Acesso administrador">
            ACESSO ADM
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: "calc(100vh - 80px)" }}>
        <div className="max-w-xl w-full">
          <h2 className="sr-only">Agendamento ÁSPERUS</h2>
          <div className="space-y-4">
            <Button
              className="w-full h-14 text-lg"
              onClick={() => navigate('/booking')}
              aria-label="Ir para o fluxo de agendamento"
            >
              AGENDAR
            </Button>

            <Link to="/suporte" className="block">
              <Button variant="secondary" className="w-full h-11" aria-label="Suporte e ajuda">
                SUPORTE
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
