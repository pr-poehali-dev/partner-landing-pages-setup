import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const DevelopersWithRepair = () => {
  const benefits = [
    'Увеличение прибыли от действующей услуги ремонта',
    'Оптимизация процессов и снижение издержек',
    'Расширение линейки предлагаемых услуг',
    'Повышение качества выполняемых работ',
    'Доступ к проверенным поставщикам материалов',
    'Техническая и юридическая поддержка 24/7',
  ];

  const services = [
    {
      icon: 'FileText',
      title: 'Аудит текущих процессов',
      description: 'Анализ существующей системы и выявление точек роста',
    },
    {
      icon: 'TrendingUp',
      title: 'Оптимизация бизнес-процессов',
      description: 'Внедрение эффективных решений для увеличения маржинальности',
    },
    {
      icon: 'Users',
      title: 'Обучение персонала',
      description: 'Повышение квалификации сотрудников и стандартизация работ',
    },
    {
      icon: 'Package',
      title: 'Поставка материалов',
      description: 'Эксклюзивные цены от ведущих производителей',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Застройщикам с действующей услугой ремонта
            </h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Масштабируйте ваш бизнес и увеличивайте прибыль вместе с нами
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Что мы предлагаем</h2>
              <p className="text-lg leading-relaxed mb-8">
                Если у вас уже реализована услуга «ремонт от застройщика», мы поможем вывести её на новый уровень. 
                Наш опыт работы с крупнейшими застройщиками показывает, что правильная оптимизация процессов 
                позволяет увеличить прибыль на 30-50% при сохранении качества работ.
              </p>

              <Card className="bg-accent/5 border-accent/20 mb-12">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Target" size={24} className="text-accent mr-2" />
                    Преимущества партнерства
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Готовы масштабировать бизнес?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Запишитесь на бесплатную консультацию, и мы расскажем, как увеличить прибыль вашей компании
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contacts">Оставить заявку</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevelopersWithRepair;
