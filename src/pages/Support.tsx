import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Suporte | ÁSPERUS";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Precisa de ajuda? Encontre suporte da ÁSPERUS.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Suporte</h1>
        <Button size="sm" variant="outline" onClick={() => navigate('/')}>
          Início
        </Button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-semibold">Como podemos ajudar?</h2>
          <p className="text-muted-foreground">
            Esta é uma página de suporte temporária. Em breve você encontrará FAQs, links úteis e formas de contato.
          </p>
          <div className="space-x-2">
            <Button onClick={() => navigate('/booking')}>Agendar agora</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>Voltar</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
