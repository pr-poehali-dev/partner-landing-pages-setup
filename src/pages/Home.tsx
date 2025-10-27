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
    },
    {
      icon: 'Wrench',
      title: 'УК и застройщики без ремонта',
      description: 'Для компаний, готовых запустить услугу ремонта',
      link: '/developers-without-repair',
    },
    {
      icon: 'Home',
      title: 'Агентства недвижимости',
      description: 'Партнерство с агентствами по продаже и аренде',
      link: '/agencies',
    },
    {
      icon: 'Package',
      title: 'Поставщики материалов',
      description: 'Сотрудничество с производителями и дистрибьюторами',
      link: '/suppliers',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-primary text-primary-foreground py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm animate-fade-in">
                Профессиональные решения для бизнеса
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Партнерство в сфере ремонта и недвижимости
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-fade-in max-w-2xl">
                Комплексные решения для застройщиков, управляющих компаний, агентств недвижимости и поставщиков
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link to="/contacts">Начать сотрудничество</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/about">О компании</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">Направления работы</div>
              <h2 className="text-4xl font-bold mb-4">Выберите тип партнерства</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Индивидуальные решения для каждого сегмента рынка
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {partnerTypes.map((partner, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-l-4 border-l-transparent hover:border-l-accent bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center animate-fade-in">
                <div className="mb-4">
                  <Icon name="CheckCircle" size={48} className="text-accent mx-auto" />
                </div>
                <div className="text-5xl font-bold text-accent mb-3">500+</div>
                <div className="text-lg opacity-90">Реализованных проектов</div>
                <div className="text-sm opacity-70 mt-2">За последние 3 года</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="mb-4">
                  <Icon name="Users" size={48} className="text-accent mx-auto" />
                </div>
                <div className="text-5xl font-bold text-accent mb-3">150+</div>
                <div className="text-lg opacity-90">Активных партнеров</div>
                <div className="text-sm opacity-70 mt-2">По всей России</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="mb-4">
                  <Icon name="Award" size={48} className="text-accent mx-auto" />
                </div>
                <div className="text-5xl font-bold text-accent mb-3">10 лет</div>
                <div className="text-lg opacity-90">На рынке</div>
                <div className="text-sm opacity-70 mt-2">Проверенная репутация</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-accent/20 shadow-xl">
              <CardContent className="pt-12 pb-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Rocket" size={32} className="text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Готовы начать сотрудничество?</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время для обсуждения деталей партнерства
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                      <Link to="/contacts">
                        <Icon name="Send" size={18} className="mr-2" />
                        Оставить заявку
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/about">
                        Узнать больше
                      </Link>
                    </Button>
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