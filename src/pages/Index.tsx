import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Instagram, MessageCircle, Sparkles, Camera, Film, Scissors } from "lucide-react";
import vickkPhoto from "@/assets/vickk-photo.jpg";
import video01 from '/Trabalho-Vick.mp4'
import videoFinal from '/Video Final.mp4'
import video3 from '/video-3.mp4'
import img6653 from '/IMG_6653.jpg'
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappNumber = "5524998311823"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Oi! 👋 Gostaria de solicitar um orçamento e saber mais sobre o trabalho da Mídias por Vickk.");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#000000] text-white overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src={vickkPhoto}
            alt="Mídias por Vick - Storytelling Visual"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Black to Orange */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000000]/80 to-[hsl(var(--primary))]/40" />
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-2xl md:text-3xl font-montserrat font-bold tracking-tight">
            Mídias por <span className="text-[hsl(var(--primary))]">Vick</span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold mb-6 leading-tight">
            Histórias contadas através de <span className="text-[hsl(var(--primary))]">lentes</span> e <span className="text-[hsl(var(--primary))]">emoções</span>
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-300 max-w-2xl mx-auto">
            Produção audiovisual com propósito. Storytelling que transforma emoções em imagens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-white font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.5)]"
            >
              <Video className="mr-2" />
              Ver Portfólio
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost" // ou remove o variant para usar apenas os estilos customizados
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--primary))] font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Vickk
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[hsl(var(--secondary))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-[hsl(var(--primary))] opacity-20 blur-3xl rounded-full" />
              <img
                src={vickkPhoto}
                alt="Vitória Viana - Mídias por Vick"
                className="relative rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#000000]">
                Sobre <span className="text-[hsl(var(--primary))]">Mim</span>
              </h2>
              <div className="w-20 h-1 bg-[hsl(var(--primary))]" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Sou <strong>Vitória Viana</strong>, videomaker apaixonada por contar histórias com emoção e autenticidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada projeto é uma nova forma de transformar momentos em memórias e marcas em experiências.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com um olhar sensível e técnica profissional, busco capturar a essência de cada história e criar vídeos que conectam, emocionam e inspiram.
              </p>
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-white font-montserrat font-semibold mt-4 transition-all duration-300 hover:scale-105"
              >
                Conheça meu trabalho
                <Sparkles className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Vertical Videos (9:16) */}
      <section id="portfolio" className="py-24 px-6 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
              Portfólio em <span className="text-[hsl(var(--primary))]">Vídeo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Um olhar sensível, criativo e cheio de propósito em cada produção.
            </p>
          </div>

          {/* Main Vertical Video - Showreel 2024 */}
          <div className="mb-16 animate-scale-in flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,102,0,0.3)] hover:shadow-[0_0_80px_rgba(255,102,0,0.5)] transition-all duration-500">
              <video
                className="w-full h-full object-cover"
                src={video01}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
          <p className="text-center mb-16 text-gray-400 text-lg animate-fade-in">
            Showreel 2024 — Uma seleção dos melhores momentos capturados
          </p>

          {/* Vertical Video Grid - Stories/Reels Format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <Card
              className="bg-[#0a0a0a] border-[#1a1a1a] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.3)] w-full max-w-[320px]"
            >
              <div className="aspect-[9/16] bg-[#1a1a1a] relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <video
                  className="w-full h-full object-cover"
                  src={videoFinal}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-white mb-2">O Início de um "Para Sempre"</h3>
                <p className="text-gray-400 text-sm">Um registro sensível sobre amor, promessas e a celebração de uma nova união. Capturando a magia dos pequenos momentos que tornam o grande dia único.</p>
              </div>
            </Card>
            <Card
              className="bg-[#0a0a0a] border-[#1a1a1a] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.3)] w-full max-w-[320px]"
            >
              <div className="aspect-[9/16] bg-[#1a1a1a] relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <img
                  className="w-full h-full object-cover"
                  src={img6653}
                  alt="Vídeo 2"
                />
              </div>
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-white mb-2">O Amor que Transborda</h3>
                <p className="text-gray-400 text-sm">Documentando o início de uma nova jornada. A pureza da espera traduzida em imagens que guardam para sempre a emoção de gerar uma nova vida.</p>
              </div>
            </Card>
            <Card
              className="bg-[#0a0a0a] border-[#1a1a1a] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.3)] w-full max-w-[320px]"
            >
              <div className="aspect-[9/16] bg-[#1a1a1a] relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <video
                  className="w-full h-full object-cover"
                  src={video3}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-white mb-2">Celebrando a Vida e a Família</h3>
                <p className="text-gray-400 text-sm">Mais que uma festa, uma celebração de amor. Capturamos os sorrisos, os abraços e a magia de ver quem amamos crescer e ser feliz.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-[#000000] mb-4">
              O que eu <span className="text-[hsl(var(--primary))]">faço</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serviços especializados em storytelling visual e produção audiovisual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Storytelling Visual",
                description: "Criação de vídeos que conectam marcas e pessoas através de narrativas autênticas e emocionantes."
              },
              {
                icon: Camera,
                title: "Eventos e Experiências",
                description: "Registros profissionais com emoção e sensibilidade para eternizar seus momentos especiais."
              },
              {
                icon: Film,
                title: "Vídeos Promocionais",
                description: "Produção audiovisual com narrativa autêntica que destaca a essência da sua marca."
              },
              {
                icon: Scissors,
                title: "Edição Profissional",
                description: "Tratamento, cortes e ritmo cinematográfico que elevam a qualidade do seu conteúdo."
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-gray-200 hover:border-[hsl(var(--primary))] transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(255,102,0,0.3)] hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="text-[hsl(var(--primary))] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-xl font-montserrat font-bold text-[#000000] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-[#000000] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">
              O que dizem sobre o <span className="text-[hsl(var(--primary))]">trabalho</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "A Vickk capturou a essência do nosso evento de forma única. Cada frame transborda emoção e profissionalismo.",
                author: "Cliente Satisfeito",
                role: "Evento Corporativo"
              },
              {
                text: "Trabalho excepcional! A sensibilidade artística combinada com técnica impecável resultou em um vídeo que superou todas as expectativas.",
                author: "Cliente Satisfeito",
                role: "Vídeo Promocional"
              }
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#0a0a0a] border-[hsl(var(--primary))] border-l-4 p-8 animate-fade-in-up hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-montserrat font-semibold text-white">{testimonial.author}</p>
                  <p className="text-[hsl(var(--primary))] text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[hsl(var(--primary))] text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Vamos contar a sua história?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Entre em contato e transforme sua ideia em um vídeo que emociona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost" // ou remova o variant totalmente
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--primary))] font-montserrat font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://instagram.com/midias.porvickk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @midias.porvickk
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mídias por Vickk — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[hsl(var(--primary))] text-white p-4 rounded-full shadow-[0_0_30px_rgba(255,102,0,0.5)] hover:shadow-[0_0_50px_rgba(255,102,0,0.7)] hover:scale-110 transition-all duration-300 z-50 animate-glow"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Index;
