import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Suppliers = () => {
  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Стабильные объемы',
      description: 'Гарантированные заказы от наших партнеров-застройщиков',
    },
    {
      icon: 'Users',
      title: 'Расширение клиентской базы',
      description: 'Доступ к сети профессиональных подрядчиков и застройщиков',
    },
    {
      icon: 'Award',
      title: 'Продвижение бренда',
      description: 'Рекомендации вашей продукции конечным клиентам',
    },
    {
      icon: 'Handshake',
      title: 'Прямое сотрудничество',
      description: 'Без посредников и дополнительных наценок',
    },
  ];

  const categories = [
    { name: 'Строительные смеси', icon: 'Hammer' },
    { name: 'Напольные покрытия', icon: 'Grid3x3' },
    { name: 'Сантехника', icon: 'Droplet' },
    { name: 'Электрика', icon: 'Zap' },
    { name: 'Отделочные материалы', icon: 'PaintBucket' },
    { name: 'Двери и окна', icon: 'DoorOpen' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Поставщикам материалов и услуг
            </h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Станьте частью профессиональной экосистемы ремонта
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Сотрудничество с поставщиками</h2>
              <p className="text-lg leading-relaxed mb-12">
                Мы работаем с ведущими производителями и дистрибьюторами строительных материалов, создавая взаимовыгодные 
                партнерские отношения. Наши объемы закупок позволяют предлагать конкурентные цены, а стабильность заказов 
                гарантирует предсказуемость вашего бизнеса.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                        <Icon name={benefit.icon} size={24} className="text-orange-600" />
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
              <h2 className="text-3xl font-bold mb-8 text-center">Категории материалов</h2>
              <p className="text-center text-muted-foreground mb-8">
                Мы работаем с поставщиками следующих категорий:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <Card
                    key={index}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                        <Icon name={category.icon} size={24} className="text-orange-600" />
                      </div>
                      <p className="font-medium">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Условия сотрудничества</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="FileCheck" size={20} className="text-orange-600 mr-2" />
                      Официальное партнерство
                    </h3>
                    <p className="text-muted-foreground">
                      Заключаем долгосрочные договоры с прозрачными условиями и гарантией оплаты
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="BarChart" size={20} className="text-orange-600 mr-2" />
                      Прогнозируемые объемы
                    </h3>
                    <p className="text-muted-foreground">
                      Предоставляем планы закупок на квартал, что позволяет вам оптимизировать производство и логистику
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Clock" size={20} className="text-orange-600 mr-2" />
                      Своевременные платежи
                    </h3>
                    <p className="text-muted-foreground">
                      Работаем строго по договорным срокам оплаты без задержек
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Icon name="Megaphone" size={20} className="text-orange-600 mr-2" />
                      Совместный маркетинг
                    </h3>
                    <p className="text-muted-foreground">
                      Продвигаем ваши бренды среди наших клиентов и партнеров
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Lightbulb" size={32} className="text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Требования к партнерам</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Наличие сертификатов качества на продукцию</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Возможность поставки на объекты в Москве и области</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Готовность к долгосрочному сотрудничеству</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Конкурентные цены при оптовых закупках</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Станьте нашим поставщиком</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Отправьте коммерческое предложение, и мы рассмотрим возможность сотрудничества
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contacts">Отправить предложение</Link>
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

export default Suppliers;
