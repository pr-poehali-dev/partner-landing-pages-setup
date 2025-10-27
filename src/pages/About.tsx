import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт и экспертиза',
      description: 'Более 10 лет успешной работы на рынке ремонта и недвижимости',
    },
    {
      icon: 'Users',
      title: 'Команда профессионалов',
      description: 'Квалифицированные специалисты с подтвержденной экспертизой',
    },
    {
      icon: 'CheckCircle',
      title: 'Гарантия качества',
      description: 'Строгий контроль на всех этапах выполнения работ',
    },
    {
      icon: 'TrendingUp',
      title: 'Рост вместе с вами',
      description: 'Гибкие условия и масштабируемые решения для партнеров',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">О компании</h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Лидер в области комплексных решений для ремонта и недвижимости
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  РемонтПартнер — это команда профессионалов, которая объединяет застройщиков, управляющие компании, 
                  агентства недвижимости и поставщиков строительных материалов в единую экосистему.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Мы предлагаем комплексные решения для организации и управления ремонтными работами на всех этапах — 
                  от проектирования до сдачи объекта. Наш опыт позволяет создавать эффективные бизнес-модели, 
                  которые приносят реальную прибыль всем участникам партнерской сети.
                </p>
                <p className="text-lg leading-relaxed">
                  За годы работы мы реализовали более 500 проектов, выстроили партнерские отношения с ведущими 
                  компаниями рынка и создали прозрачную систему взаимодействия, которая гарантирует высокое качество 
                  и своевременность выполнения обязательств.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={advantage.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Наша миссия</h2>
              <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-center leading-relaxed">
                    Создавать долгосрочные партнерские отношения, основанные на доверии, прозрачности и взаимной выгоде. 
                    Мы стремимся повышать стандарты качества в сфере ремонта и недвижимости, делая профессиональные 
                    услуги доступными для всех участников рынка.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Реализованные проекты</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <Card className="animate-fade-in">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-3 mb-3">
                        <Icon name="Building" size={24} className="text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">ЖК «Новые Горизонты»</h3>
                          <p className="text-muted-foreground mb-3">
                            Запуск услуги «ремонт от застройщика» с нуля для крупного жилого комплекса на 1200 квартир
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-accent mr-2 mt-0.5" />
                              <span>Разработана полная документальная база</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-accent mr-2 mt-0.5" />
                              <span>Обучено 15 сотрудников застройщика</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-accent mr-2 mt-0.5" />
                              <span>Заключены договоры с 8 проверенными подрядчиками</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Результат</div>
                        <div className="text-2xl font-bold text-accent">320+ квартир</div>
                        <div className="text-sm text-muted-foreground">отремонтировано за год</div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-sm text-muted-foreground">Период</div>
                        <div className="font-semibold">2022-2023</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-3 mb-3">
                        <Icon name="Home" size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">Сеть агентств «ДомЭксперт»</h3>
                          <p className="text-muted-foreground mb-3">
                            Внедрение партнерской программы по ремонту для крупнейшей сети агентств недвижимости
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-purple-600 mr-2 mt-0.5" />
                              <span>Подключено 42 офиса в Москве и МО</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-purple-600 mr-2 mt-0.5" />
                              <span>Создана система учета и начисления комиссий</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-purple-600 mr-2 mt-0.5" />
                              <span>Проведено обучение для 120+ агентов</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Результат</div>
                        <div className="text-2xl font-bold text-purple-600">+28%</div>
                        <div className="text-sm text-muted-foreground">рост дохода агентства</div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-sm text-muted-foreground">Период</div>
                        <div className="font-semibold">2023-2024</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-3 mb-3">
                        <Icon name="TrendingUp" size={24} className="text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">УК «Комфорт Плюс»</h3>
                          <p className="text-muted-foreground mb-3">
                            Оптимизация существующей услуги ремонта и увеличение маржинальности проектов
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5" />
                              <span>Проведен аудит текущих процессов</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5" />
                              <span>Оптимизированы поставки материалов</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5" />
                              <span>Внедрена система контроля качества</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Результат</div>
                        <div className="text-2xl font-bold text-green-600">+42%</div>
                        <div className="text-sm text-muted-foreground">рост прибыли</div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-sm text-muted-foreground">Период</div>
                        <div className="font-semibold">2024</div>
                      </div>
                    </div>
                  </div>
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

export default About;