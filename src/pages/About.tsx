import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '10+', label: 'Лет на рынке', sublabel: 'С 2014 года', icon: 'Calendar' },
    { value: '500+', label: 'Проектов', sublabel: 'Успешно завершено', icon: 'CheckCircle' },
    { value: '150+', label: 'Партнеров', sublabel: 'По всей России', icon: 'Users' },
    { value: '45+', label: 'Городов', sublabel: 'География работы', icon: 'MapPin' },
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт и экспертиза',
      description: 'Более 10 лет успешной работы на рынке ремонта и недвижимости. Команда экспертов с подтвержденной квалификацией.',
      features: ['500+ реализованных проектов', 'Работа с ТОП-20 застройщиками', 'Собственная методология'],
    },
    {
      icon: 'Users',
      title: 'Команда профессионалов',
      description: 'Квалифицированные специалисты с опытом от 5 до 15 лет в строительстве, юриспруденции, финансах и менеджменте.',
      features: ['50+ штатных сотрудников', 'Обучение каждые 6 месяцев', 'Персональные менеджеры'],
    },
    {
      icon: 'CheckCircle',
      title: 'Гарантия качества',
      description: 'Строгий контроль на всех этапах выполнения работ. Многоуровневая система проверки и страхование рисков.',
      features: ['3-ступенчатый контроль', 'Гарантия до 3 лет', 'Страхование объектов'],
    },
    {
      icon: 'TrendingUp',
      title: 'Рост вместе с вами',
      description: 'Гибкие условия и масштабируемые решения для партнеров. Растем вместе с вашим бизнесом.',
      features: ['Индивидуальные условия', 'Масштабирование под запрос', 'Долгосрочные контракты'],
    },
    {
      icon: 'Shield',
      title: 'Юридическая безопасность',
      description: 'Полная юридическая защита всех сторон сделки. Проверенные договоры и прозрачные схемы работы.',
      features: ['Юристы в штате', 'Защита от рисков', 'Прозрачная отчетность'],
    },
    {
      icon: 'Globe',
      title: 'География присутствия',
      description: 'Работаем по всей России через сеть региональных представительств и проверенных партнеров.',
      features: ['45+ городов России', 'Региональные офисы', 'Местные подрядчики'],
    },
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Основание компании',
      description: 'Запуск первых проектов по ремонту квартир в новостройках Москвы. Команда из 5 человек.',
      icon: 'Rocket',
    },
    {
      year: '2016',
      title: 'Первые партнерства',
      description: 'Заключение договоров с 3 крупными застройщиками. Расширение до 20 сотрудников и открытие офиса.',
      icon: 'Handshake',
    },
    {
      year: '2018',
      title: 'Региональное развитие',
      description: 'Выход в регионы: Санкт-Петербург, Казань, Екатеринбург. Запуск партнерской программы для агентств.',
      icon: 'MapPin',
    },
    {
      year: '2020',
      title: 'Цифровизация',
      description: 'Внедрение CRM-системы и онлайн-отчетности. Переход на удаленную работу без потери качества.',
      icon: 'Monitor',
    },
    {
      year: '2022',
      title: 'Масштабирование',
      description: 'Открытие программы для поставщиков материалов. География работы — 45+ городов России.',
      icon: 'TrendingUp',
    },
    {
      year: '2024',
      title: 'Лидер рынка',
      description: '150+ активных партнеров, 500+ завершенных проектов. Признание в отрасли и награды.',
      icon: 'Award',
    },
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Генеральный директор',
      description: 'Опыт в строительстве и управлении проектами более 15 лет. Руководил крупными девелоперскими проектами.',
      icon: 'User',
    },
    {
      name: 'Мария Иванова',
      position: 'Директор по развитию',
      description: 'Эксперт в области партнерских программ и B2B продаж. 12 лет опыта в недвижимости.',
      icon: 'Users',
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Технический директор',
      description: 'Инженер-строитель с 20-летним стажем. Отвечает за качество и стандарты выполнения работ.',
      icon: 'Settings',
    },
    {
      name: 'Елена Смирнова',
      position: 'Финансовый директор',
      description: 'CFO с опытом работы в крупных строительных холдингах. Обеспечивает финансовую прозрачность.',
      icon: 'DollarSign',
    },
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Клиентоориентированность',
      description: 'Интересы клиента всегда на первом месте. Мы создаем долгосрочные отношения, а не одноразовые сделки.',
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Открытая отчетность, понятные условия, честные цены. Никаких скрытых комиссий и неожиданностей.',
    },
    {
      icon: 'Target',
      title: 'Результативность',
      description: 'Фокус на измеримых результатах. Гарантируем достижение согласованных KPI и возврат инвестиций.',
    },
    {
      icon: 'Zap',
      title: 'Инновации',
      description: 'Используем современные технологии и методы управления для повышения эффективности.',
    },
    {
      icon: 'Users',
      title: 'Партнерство',
      description: 'Мы не просто подрядчики, мы партнеры. Ваш успех — это наш успех.',
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Высокие стандарты на всех этапах. Контроль качества и гарантия до 3 лет на все работы.',
    },
  ];

  const projects = [
    {
      title: 'ЖК «Новые Горизонты»',
      location: 'Москва',
      description: 'Запуск услуги «ремонт от застройщика» с нуля для крупного жилого комплекса на 1200 квартир.',
      result: '320+ квартир отремонтировано за год',
      period: '2022-2023',
      icon: 'Building',
      stats: { apartments: 320, satisfaction: '98%', time: '12 мес' },
    },
    {
      title: 'Сеть агентств «ДомЭксперт»',
      location: 'Санкт-Петербург',
      description: 'Внедрение партнерской программы по ремонту для крупнейшей сети агентств недвижимости.',
      result: '850 тыс ₽ комиссионных за год',
      period: '2023',
      icon: 'Home',
      stats: { offices: 42, clients: 78, commission: '850k' },
    },
    {
      title: 'Партнерство с Knauf',
      location: 'Федеральный',
      description: 'Прямой контракт с производителем стройматериалов на поставку продукции для всех объектов.',
      result: '25% экономии на закупках',
      period: '2021-2024',
      icon: 'Package',
      stats: { volume: '15 млн ₽', discount: '25%', cities: '12' },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/1f4a254e-062b-47c4-8eec-b101b4620f45/files/63f2dbc8-4b7b-4f9f-a5fb-574a4a18b107.jpg)' }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-accent font-semibold mb-4 uppercase tracking-wider text-sm animate-fade-in">
                О компании
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Лидер в области комплексных решений для ремонта
              </h1>
              <p className="text-xl md:text-2xl opacity-95 animate-fade-in leading-relaxed">
                10 лет опыта, 500+ проектов, 150+ партнеров по всей России
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                  Наша история
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто мы такие</h2>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                  <CardContent className="pt-8 pb-8">
                    <p className="text-lg leading-relaxed mb-4">
                      <strong>РемонтПартнер</strong> — это команда профессионалов, которая объединяет застройщиков, управляющие компании, 
                      агентства недвижимости и поставщиков строительных материалов в единую экосистему.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      Мы предлагаем <strong>комплексные решения</strong> для организации и управления ремонтными работами на всех этапах — 
                      от проектирования до сдачи объекта. Наш опыт позволяет создавать эффективные бизнес-модели, 
                      которые приносят <strong>реальную прибыль</strong> всем участникам партнерской сети.
                    </p>
                    <p className="text-lg leading-relaxed">
                      За <strong>10 лет работы</strong> мы реализовали более 500 проектов, выстроили партнерские отношения с ведущими 
                      компаниями рынка и создали прозрачную систему взаимодействия, которая гарантирует высокое качество 
                      и своевременность выполнения обязательств.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary to-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Почему мы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Что делает нас надежным партнером для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={advantage.icon} size={26} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    <CardDescription className="text-base">{advantage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {advantage.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                История развития
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Путь длиной в 10 лет</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                От небольшой команды до лидера рынка
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in hover:shadow-lg transition-all border-l-4 border-l-accent"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                            {item.year}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold mr-2">{item.title}</h3>
                            <Icon name={item.icon} size={20} className="text-accent" />
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Команда
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Руководство компании</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Опытные профессионалы с экспертизой в строительстве, финансах и управлении
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={member.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{member.position}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Наши ценности
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Во что мы верим</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={value.icon} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary to-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Реализованные проекты
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши кейсы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Успешные примеры сотрудничества с партнерами
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={project.icon} size={24} className="text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <div className="text-sm text-muted-foreground flex items-center mb-3">
                              <Icon name="MapPin" size={14} className="mr-1" />
                              {project.location}
                            </div>
                            <p className="text-muted-foreground mb-3">{project.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">Результат</div>
                          <div className="text-xl font-bold text-accent">{project.result}</div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="text-sm text-muted-foreground">Период</div>
                          <div className="font-semibold">{project.period}</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-accent/20 shadow-2xl">
              <CardContent className="pt-12 pb-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Handshake" size={32} className="text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Начните работать с лидером рынка</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Присоединяйтесь к 150+ компаниям, которые уже доверяют нам свой бизнес. 
                    Оставьте заявку для бесплатной консультации
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                      <Link to="/contacts">
                        <Icon name="Send" size={18} className="mr-2" />
                        Связаться с нами
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/">
                        <Icon name="ArrowLeft" size={18} className="mr-2" />
                        Вернуться на главную
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

export default About;