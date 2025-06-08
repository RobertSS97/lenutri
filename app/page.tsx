import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      {/* Header - Mobile First */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-red-500">Leticia Arandiba</h1>
              <span className="ml-2 text-gray-600 text-xs md:text-sm hidden sm:inline">Nutricionista</span>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
            </div>
            <a
              href="#contato"
              className="text-white px-3 py-2 md:px-6 md:py-2 rounded-full transition-colors text-sm md:text-base hover:opacity-90"
              style={{backgroundColor: '#25543c'}}
            >
              <span className="hidden sm:inline">Agendar </span>Consulta
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Elegante */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{background: 'radial-gradient(circle, #25543c 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full" style={{background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#25543c', color: 'white'}}>
                  ✨ Nutricionista Especializada
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Transforme sua{' '}
                <span className="relative inline-block">
                  <span className="text-red-500">saúde</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none">
                    <path d="M2 10C20 2 40 2 58 6C76 10 96 4 98 6" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
                {' '}com elegância
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Sou <span className="font-semibold text-gray-800">Leticia Arandiba</span>, sua parceira na jornada para uma vida mais saudável. 
                Especializada em saúde da mulher, ofereço acompanhamento personalizado e sustentável.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Mulheres transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#contato"
                  className="group relative overflow-hidden text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3"
                  style={{backgroundColor: '#25543c'}}
                >
                  <span className="relative z-10">Agendar Consulta</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
                
                <a
                  href="#sobre"
                  className="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium"
                >
                  <span>Conhecer história</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{backgroundColor: '#25543c'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-20" style={{backgroundColor: '#dc2626'}}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Profile Photo Placeholder */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto flex items-center justify-center shadow-inner">
                        <span className="text-gray-400 text-sm">Foto da Leticia</span>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Leticia Arandiba</h3>
                    <p className="text-red-500 font-semibold mb-1">CRN: 12345</p>
                    <p className="text-gray-600 mb-6">Especialista em Saúde da Mulher</p>
                    
                    {/* Specialties */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-green-50 p-3 rounded-xl">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-green-600">🌿</span>
                        </div>
                        <p className="text-green-700 font-medium">Nutrição Funcional</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-xl">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-600">💖</span>
                        </div>
                        <p className="text-red-700 font-medium">Saúde Feminina</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Disponível agora</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 right-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm font-medium text-gray-700">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section - Mobile First */}
      <section id="sobre" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicada a transformar a vida das mulheres através da nutrição consciente e personalizada
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 h-64 md:h-80 flex items-center justify-center">
                <span className="text-gray-400 text-sm md:text-base">Foto profissional da Leticia</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Minha Trajetória</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Formada em Nutrição com especialização em Saúde da Mulher, dedico minha carreira 
                a ajudar mulheres de todas as idades a desenvolverem uma relação saudável com a 
                alimentação e alcançarem seus objetivos de saúde.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Acredito que cada mulher é única e merece um acompanhamento personalizado, 
                considerando seu estilo de vida, preferências e necessidades específicas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Formação</h4>
                  <p className="text-gray-600 text-sm">Nutrição - Universidade Federal</p>
                  <p className="text-gray-600 text-sm">Especialização em Saúde da Mulher</p>
                </div>
                <div className="bg-red-50 p-4 md:p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Experiência</h4>
                  <p className="text-gray-600 text-sm">+5 anos atendendo mulheres</p>
                  <p className="text-gray-600 text-sm">+500 pacientes transformadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section - Mobile First */}
      <section id="servicos" className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento personalizado para suas necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-green-600 text-xl md:text-2xl">🍎</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Consulta Nutricional</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Avaliação completa do seu estado nutricional com plano alimentar personalizado 
                para suas necessidades e objetivos.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Anamnese detalhada</li>
                <li>• Avaliação antropométrica</li>
                <li>• Plano alimentar personalizado</li>
                <li>• Orientações práticas</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-red-500 text-xl md:text-2xl">🤱</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Gestação & Amamentação</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Acompanhamento nutricional especializado durante a gestação e período de 
                amamentação para mãe e bebê saudáveis.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Nutrição na gestação</li>
                <li>• Controle de peso gestacional</li>
                <li>• Alimentação na amamentação</li>
                <li>• Introdução alimentar</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-green-600 text-xl md:text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Emagrecimento Saudável</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Processo de emagrecimento sustentável respeitando seu corpo e criando 
                hábitos duradouros sem dietas restritivas.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Reeducação alimentar</li>
                <li>• Estratégias comportamentais</li>
                <li>• Acompanhamento contínuo</li>
                <li>• Manutenção de resultados</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-red-500 text-xl md:text-2xl">🌸</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Saúde Hormonal</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Nutrição específica para desequilíbrios hormonais, SOP, menopausa e 
                outros aspectos da saúde hormonal feminina.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Síndrome dos ovários policísticos</li>
                <li>• Regulação do ciclo menstrual</li>
                <li>• Nutrição na menopausa</li>
                <li>• Equilíbrio hormonal</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-green-600 text-xl md:text-2xl">💪</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Nutrição Esportiva</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Planos alimentares para mulheres ativas, atletas e praticantes de 
                exercícios físicos para otimizar performance e recuperação.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Alimentação pré-treino</li>
                <li>• Recuperação pós-exercício</li>
                <li>• Hidratação adequada</li>
                <li>• Suplementação orientada</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-red-500 text-xl md:text-2xl">🧘</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Mindful Eating</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Desenvolva uma relação consciente e saudável com a comida através 
                da alimentação intuitiva e mindful eating.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 md:space-y-2">
                <li>• Alimentação intuitiva</li>
                <li>• Controle da compulsão alimentar</li>
                <li>• Reconexão com a fome e saciedade</li>
                <li>• Bem-estar emocional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section - Mobile First */}
      <section id="depoimentos" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Depoimentos</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que minhas pacientes falam sobre nossa jornada juntas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-green-50 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm md:text-base">M</span>
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Maria Silva</h4>
                  <p className="text-gray-600 text-xs md:text-sm">28 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "A Leticia me ajudou a entender meu corpo e criar uma relação saudável com a comida. 
                Perdi 15kg de forma sustentável e me sinto mais confiante do que nunca!"
              </p>
            </div>

            <div className="bg-red-50 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-200 rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-bold text-sm md:text-base">A</span>
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Ana Costa</h4>
                  <p className="text-gray-600 text-xs md:text-sm">35 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "Durante minha gestação, a Leticia foi fundamental. Consegui manter um peso saudável 
                e meu bebê nasceu forte e saudável. Recomendo para todas as futuras mamães!"
              </p>
            </div>

            <div className="bg-green-50 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm md:text-base">J</span>
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">Julia Mendes</h4>
                  <p className="text-gray-600 text-xs md:text-sm">42 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">
                "Sofria com SOP há anos. Com o acompanhamento da Leticia, consegui regular meu ciclo 
                e melhorar significativamente minha qualidade de vida. Sou muito grata!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 md:py-20 text-white" style={{backgroundColor: '#25543c'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Entre em contato e dê o primeiro passo para transformar sua saúde
            </p>
          </div>

          {/* Card Principal do Formulário - Mobile First */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#25543c'}}>
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Agendar Consulta</h3>
              <p className="text-gray-600">Dê o primeiro passo para transformar sua saúde</p>
            </div>
            
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Nome completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-green-400 focus:bg-white transition-all text-base"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">E-mail</label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-green-400 focus:bg-white transition-all text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-green-400 focus:bg-white transition-all text-base"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Conte sobre seus objetivos</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Quero emagrecer de forma saudável, melhorar minha alimentação..."
                  className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-50 text-gray-800 border-2 border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-green-400 focus:bg-white transition-all resize-none text-base"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:opacity-90"
                style={{backgroundColor: '#25543c'}}
              >
                ✨ Quero Agendar Minha Consulta
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Suas informações estão seguras conosco
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Mobile First */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-3 md:mb-4">Leticia Arandiba</h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Nutricionista especializada em saúde da mulher</p>
            <p className="text-gray-400 text-xs md:text-sm">
              CRN: 12345 | © 2025 Leticia Arandiba. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta nutricional."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        style={{backgroundColor: '#25D366'}}
        aria-label="Conversar no WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          className="md:w-8 md:h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      </a>
    </div>
  );
}
