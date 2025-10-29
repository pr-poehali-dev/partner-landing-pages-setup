import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const partnerTypes = [
    {
      icon: 'Building',
      title: 'Застройщики с ремонтом',
      description: 'Для компаний с действующей услугой ремонта от застройщика',
      link: '/developers-with-repair',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: 'Wrench',
      title: 'УК и застройщики без ремонта',
      description: 'Для компаний, готовых запустить услугу ремонта',
      link: '/developers-without-repair',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: 'Home',
      title: 'Агентства недвижимости',
      description: 'Партнерство с агентствами по продаже и аренде',
      link: '/agencies',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: 'Package',
      title: 'Поставщики материалов',
      description: 'Сотрудничество с производителями и дистрибьюторами',
      link: '/suppliers',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const stats = [
    { value: '500+', label: 'Реализованных проектов', sublabel: 'За последние 3 года', icon: 'CheckCircle' },
    { value: '150+', label: 'Активных партнеров', sublabel: 'По всей России', icon: 'Users' },
    { value: '10 лет', label: 'На рынке', sublabel: 'Проверенная репутация', icon: 'Award' },
    { value: '98%', label: 'Довольных клиентов', sublabel: 'Повторно выбирают нас', icon: 'Heart' },
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Юридическая защита',
      description: 'Полный пакет документов, договоров и гарантий для безопасного ведения бизнеса',
    },
    {
      icon: 'Zap',
      title: 'Быстрый запуск',
      description: 'От идеи до первых результатов всего 2-3 месяца с полным сопровождением',
    },
    {
      icon: 'TrendingUp',
      title: 'Рост прибыли',
      description: 'Увеличение выручки на 30-50% за счет оптимизации и масштабирования',
    },
    {
      icon: 'Users',
      title: 'Экспертная поддержка',
      description: 'Команда профессионалов с опытом 10+ лет всегда на связи 24/7',
    },
    {
      icon: 'Target',
      title: 'Индивидуальный подход',
      description: 'Разрабатываем решения под специфику вашего бизнеса и региона',
    },
    {
      icon: 'Globe',
      title: 'География работы',
      description: 'Работаем по всей России, имеем партнеров в 45+ городах страны',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Консультация',
      description: 'Бесплатная встреча для анализа вашего бизнеса и потребностей',
      icon: 'MessageSquare',
    },
    {
      step: '2',
      title: 'Аудит и план',
      description: 'Детальный аудит и разработка индивидуальной стратегии',
      icon: 'FileText',
    },
    {
      step: '3',
      title: 'Внедрение',
      description: 'Пошаговая реализация решения с обучением вашей команды',
      icon: 'Settings',
    },
    {
      step: '4',
      title: 'Результат',
      description: 'Достижение целей и постоянная поддержка для роста',
      icon: 'Trophy',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/1f4a254e-062b-47c4-8eec-b101b4620f45/files/bfc73973-87a9-4d98-b511-2a4d7e883f40.jpg)' }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm animate-fade-in">
                Профессиональные решения для бизнеса
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                Партнерство в сфере ремонта и недвижимости
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in max-w-3xl leading-relaxed">
                Комплексные решения для застройщиков, управляющих компаний, агентств недвижимости и поставщиков. 
                Увеличьте прибыль, минимизируйте риски, масштабируйте бизнес
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg">
                  <Link to="/contacts">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать сотрудничество
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg">
                  <Link to="/about">
                    О компании
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-accent" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-base font-semibold mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Направления работы</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите тип партнерства</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Индивидуальные решения для каждого сегмента рынка с гарантией результата
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {partnerTypes.map((partner, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-l-4 border-l-transparent hover:border-l-accent bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${partner.color}`}></div>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <Icon name={partner.icon} size={26} className="text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">{partner.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{partner.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-accent/5">
                      <Link to={partner.link}>
                        Подробнее
                        <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Почему выбирают нас</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Что делает нас надежным партнером для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={advantage.icon} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    <CardDescription>{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-secondary to-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Процесс работы</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Простой и прозрачный путь к успешному партнерству
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} size={24} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/1f4a254e-062b-47c4-8eec-b101b4620f45/files/12845a17-cae9-4957-8987-f0af2bfa3a6c.jpg)' }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <Card className="max-w-4xl mx-auto border-accent/20 shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="pt-12 pb-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Rocket" size={32} className="text-accent" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы начать сотрудничество?</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут для обсуждения деталей партнерства. 
                    Первая консультация — бесплатно!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                      <Link to="/contacts">
                        <Icon name="Send" size={18} className="mr-2" />
                        Оставить заявку
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg">
                      <Link to="/about">
                        <Icon name="Info" size={18} className="mr-2" />
                        Узнать больше
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-8 pt-8 border-t">
                    <p className="text-sm text-muted-foreground mb-4">Или свяжитесь с нами напрямую:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a href="tel:+79999999999" className="flex items-center text-accent hover:underline">
                        <Icon name="Phone" size={18} className="mr-2" />
                        +7 (999) 999-99-99
                      </a>
                      <a href="mailto:info@remontpartner.ru" className="flex items-center text-accent hover:underline">
                        <Icon name="Mail" size={18} className="mr-2" />
                        info@remontpartner.ru
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;