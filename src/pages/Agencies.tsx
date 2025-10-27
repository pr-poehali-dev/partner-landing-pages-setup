import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Agencies = () => {
  const benefits = [
    {
      icon: 'Percent',
      title: 'Комиссия с каждой сделки',
      description: 'Получайте процент от стоимости ремонтных работ по вашим клиентам',
    },
    {
      icon: 'Star',
      title: 'Дополнительная ценность',
      description: 'Предлагайте клиентам готовое решение по ремонту при покупке недвижимости',
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Не нужно искать подрядчиков — мы берем весь процесс на себя',
    },
    {
      icon: 'Shield',
      title: 'Гарантии качества',
      description: 'Все работы выполняются с гарантией и под нашим контролем',
    },
  ];

  const services = [
    'Ремонт квартир любой сложности',
    'Дизайн-проекты и визуализация',
    'Подбор и закупка материалов',
    'Авторский надзор за работами',
    'Юридическое сопровождение сделок',
    'Прозрачная отчетность для клиентов',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Агентствам недвижимости
            </h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Увеличьте доход и повысьте лояльность клиентов с нашими решениями
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Партнерство для агентств</h2>
              <p className="text-lg leading-relaxed mb-12">
                Мы предлагаем агентствам недвижимости выгодное партнерство: вы рекомендуете наши услуги своим клиентам, 
                а мы делимся с вами прибылью. Это дополнительный источник дохода без необходимости расширения штата 
                и создания собственного ремонтного отдела.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Icon name={benefit.icon} size={24} className="text-purple-600" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Что мы предлагаем вашим клиентам</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Icon name="CheckCircle" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Как это работает</h2>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Заключаем партнерское соглашение</h3>
                        <p className="text-muted-foreground">Определяем условия сотрудничества и размер комиссии</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Вы рекомендуете нас клиентам</h3>
                        <p className="text-muted-foreground">Предлагаете услуги ремонта при покупке или аренде недвижимости</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Мы выполняем работы</h3>
                        <p className="text-muted-foreground">Берем на себя все вопросы по ремонту, вы получаете комиссию</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Довольные клиенты возвращаются</h3>
                        <p className="text-muted-foreground">Качественный ремонт повышает лояльность ваших клиентов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Станьте нашим партнером</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Подключайтесь к партнерской программе и начните зарабатывать уже сегодня
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contacts">Подключиться</Link>
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

export default Agencies;
