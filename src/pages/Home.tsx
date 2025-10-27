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
      color: 'text-blue-600',
    },
    {
      icon: 'Wrench',
      title: 'УК и застройщики без ремонта',
      description: 'Для компаний, готовых запустить услугу ремонта',
      link: '/developers-without-repair',
      color: 'text-green-600',
    },
    {
      icon: 'Home',
      title: 'Агентства недвижимости',
      description: 'Партнерство с агентствами по продаже и аренде',
      link: '/agencies',
      color: 'text-purple-600',
    },
    {
      icon: 'Package',
      title: 'Поставщики материалов',
      description: 'Сотрудничество с производителями и дистрибьюторами',
      link: '/suppliers',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Партнерство в сфере ремонта и недвижимости
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-fade-in">
                Комплексные решения для застройщиков, управляющих компаний, агентств недвижимости и поставщиков
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/about">О компании</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Выберите тип партнерства</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {partnerTypes.map((partner, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${partner.color}`}>
                      <Icon name={partner.icon} size={24} />
                    </div>
                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                    <CardDescription className="text-base">{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={partner.link}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Реализованных проектов</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Активных партнеров</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">10 лет</div>
                <div className="text-muted-foreground">На рынке</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
              </p>
              <Button asChild size="lg">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
