import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PartnershipSelector = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
            Направления работы
          </div>
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
                    <Icon 
                      name={partner.icon} 
                      size={26} 
                      className="text-accent group-hover:text-white transition-colors" 
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {partner.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {partner.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-accent/5">
                  <Link to={partner.link}>
                    Подробнее
                    <Icon 
                      name="ArrowRight" 
                      size={18} 
                      className="group-hover:translate-x-1 transition-transform" 
                    />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSelector;
