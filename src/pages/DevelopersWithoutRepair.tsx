import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const DevelopersWithoutRepair = () => {
  const steps = [
    {
      number: '01',
      title: 'Анализ и планирование',
      description: 'Изучаем специфику вашего бизнеса и разрабатываем индивидуальную стратегию',
    },
    {
      number: '02',
      title: 'Подготовка документации',
      description: 'Создаем полный пакет документов для запуска услуги ремонта',
    },
    {
      number: '03',
      title: 'Внедрение системы',
      description: 'Настраиваем процессы, обучаем персонал, запускаем пилотный проект',
    },
    {
      number: '04',
      title: 'Масштабирование',
      description: 'Выводим услугу на полную мощность и обеспечиваем постоянную поддержку',
    },
  ];

  const opportunities = [
    {
      icon: 'DollarSign',
      title: 'Новый источник дохода',
      description: 'Дополнительная прибыль от каждого проданного объекта',
    },
    {
      icon: 'Users',
      title: 'Повышение лояльности',
      description: 'Комплексное обслуживание увеличивает доверие клиентов',
    },
    {
      icon: 'Shield',
      title: 'Минимизация рисков',
      description: 'Готовая правовая база и отработанные процессы',
    },
    {
      icon: 'Zap',
      title: 'Быстрый запуск',
      description: 'От идеи до первых сделок — всего 2-3 месяца',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              УК и застройщикам без услуги ремонта
            </h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Запустите новое направление бизнеса с минимальными инвестициями
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Почему стоит запустить услугу ремонта?</h2>
              <p className="text-lg leading-relaxed mb-12">
                Многие застройщики и управляющие компании упускают возможность заработать на услуге «ремонт от застройщика» 
                из-за отсутствия необходимой документальной и технической базы. Мы предлагаем готовое решение «под ключ», 
                которое позволит вам запустить это направление быстро и без лишних рисков.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {opportunities.map((opportunity, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Icon name={opportunity.icon} size={24} className="text-green-600" />
                      </div>
                      <CardTitle>{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{opportunity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Этапы запуска</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
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
            <div className="max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Lightbulb" size={32} className="text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Что входит в пакет запуска</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Полный комплект юридических документов и договоров</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Техническая документация и регламенты работы</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Обучение персонала и настройка бизнес-процессов</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Доступ к базе проверенных подрядчиков и поставщиков</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Постоянная техническая и консультационная поддержка</span>
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
                  <h2 className="text-3xl font-bold mb-4">Начните зарабатывать на ремонте</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Оставьте заявку, и мы рассчитаем потенциальную прибыль для вашего бизнеса
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contacts">Получить расчет</Link>
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

export default DevelopersWithoutRepair;
