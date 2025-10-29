import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const DevelopersWithoutRepair = () => {
  const stats = [
    { value: '2-3 мес', label: 'Срок запуска', icon: 'Clock' },
    { value: '3-5 млн ₽', label: 'Доп. выручка в год', icon: 'TrendingUp' },
    { value: '20-35%', label: 'Маржинальность', icon: 'Percent' },
    { value: '24/7', label: 'Поддержка', icon: 'Headphones' },
  ];

  const opportunities = [
    {
      icon: 'DollarSign',
      title: 'Новый источник дохода',
      description: 'Дополнительная прибыль от каждого проданного объекта без расширения основного штата и производства',
      profit: '150-300 тыс ₽ с квартиры',
    },
    {
      icon: 'Users',
      title: 'Повышение лояльности',
      description: 'Комплексное обслуживание увеличивает доверие клиентов и повторные обращения на 40%',
      profit: 'Рост NPS на 15-20 пунктов',
    },
    {
      icon: 'Shield',
      title: 'Минимизация рисков',
      description: 'Готовая правовая база, отработанные процессы и страхование всех работ',
      profit: 'Нулевые юр. риски',
    },
    {
      icon: 'Zap',
      title: 'Быстрый запуск',
      description: 'От идеи до первых сделок всего 2-3 месяца с полным сопровождением',
      profit: 'Окупаемость за 4-6 мес',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Анализ и планирование',
      description: 'Изучаем специфику вашего бизнеса, анализируем рынок и разрабатываем индивидуальную стратегию запуска',
      duration: '5-7 дней',
      deliverables: ['Бизнес-план', 'Финансовая модель', 'План запуска'],
    },
    {
      number: '2',
      title: 'Подготовка документации',
      description: 'Создаем полный пакет юридических и технических документов для легального оказания услуг',
      duration: '10-14 дней',
      deliverables: ['Договоры и регламенты', 'Прайс-лист', 'Маркетинг-кит'],
    },
    {
      number: '3',
      title: 'Внедрение системы',
      description: 'Настраиваем CRM, обучаем персонал, запускаем пилотный проект на 2-3 объектах',
      duration: '1 месяц',
      deliverables: ['Настроенная CRM', 'Обученная команда', 'Первые заказы'],
    },
    {
      number: '4',
      title: 'Масштабирование',
      description: 'Выводим услугу на полную мощность, оптимизируем процессы и обеспечиваем постоянную поддержку',
      duration: 'Постоянно',
      deliverables: ['Рост продаж', 'Аналитика', 'Улучшения'],
    },
  ];

  const included = [
    {
      category: 'Юридическое сопровождение',
      items: [
        'Договоры с клиентами и подрядчиками',
        'Регламенты выполнения работ',
        'Гарантийные обязательства',
        'Типовые акты и формы документов',
      ],
    },
    {
      category: 'Технические решения',
      items: [
        'CRM-система для управления заказами',
        'База проверенных подрядчиков',
        'Калькуляторы стоимости работ',
        'Система контроля качества',
      ],
    },
    {
      category: 'Обучение и поддержка',
      items: [
        'Тренинг для менеджеров по продажам',
        'Обучение прорабов и мастеров',
        'Техническая поддержка 24/7',
        'Консультации юриста и бухгалтера',
      ],
    },
    {
      category: 'Маркетинг и продажи',
      items: [
        'Презентационные материалы',
        'Шаблоны коммерческих предложений',
        'Скрипты продаж для менеджеров',
        'Дизайн-проекты для показа клиентам',
      ],
    },
  ];

  const cases = [
    {
      company: 'УК "Комфорт"',
      city: 'Краснодар',
      result: 'Запуск за 2 месяца',
      description: 'Создали услугу ремонта с нуля. За первые 6 месяцев выполнили 45 заказов на сумму 18 млн рублей. Чистая прибыль составила 4,5 млн рублей.',
      metrics: { orders: 45, revenue: '18 млн ₽', margin: '25%' },
    },
    {
      company: 'ЖСК "Новостройка"',
      city: 'Нижний Новгород',
      result: 'Выручка 12 млн за полгода',
      description: 'Внедрили услугу для жильцов новостройки. 60% покупателей квартир выбрали ремонт от застройщика. Дополнительная маржа — 28%.',
      metrics: { orders: 72, revenue: '12 млн ₽', margin: '28%' },
    },
    {
      company: 'Группа "Стройтехнология"',
      city: 'Воронеж',
      result: 'Рост лояльности на 45%',
      description: 'Запустили комплексную услугу "квартира под ключ". Увеличили средний чек продажи квартиры на 800 тыс рублей за счет ремонта.',
      metrics: { orders: 38, revenue: '9 млн ₽', margin: '32%' },
    },
  ];

  const pricing = [
    {
      name: 'Стартовый',
      price: '250 000 ₽',
      description: 'Базовый пакет для запуска',
      features: [
        'Аудит и бизнес-план',
        'Пакет документов',
        'Базовое обучение (2 дня)',
        'Поддержка 3 месяца',
        'До 20 объектов в год',
      ],
      popular: false,
    },
    {
      name: 'Профессиональный',
      price: '450 000 ₽',
      description: 'Полное сопровождение запуска',
      features: [
        'Всё из Стартового',
        'CRM-система под ключ',
        'Расширенное обучение (5 дней)',
        'Поддержка 6 месяцев',
        'До 50 объектов в год',
        'База подрядчиков',
        'Маркетинг-материалы',
      ],
      popular: true,
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      description: 'Для крупных компаний',
      features: [
        'Всё из Профессионального',
        'Индивидуальная интеграция',
        'Персональный менеджер',
        'Безлимитная поддержка',
        'Без ограничений по объектам',
        'Обучение всех сотрудников',
        'Совместный маркетинг',
      ],
      popular: false,
    },
  ];

  const faq = [
    {
      question: 'Сколько стоит запуск услуги?',
      answer: 'Стоимость зависит от масштаба вашего бизнеса. Базовый пакет — от 250 000 рублей. Это включает всю документацию, обучение и поддержку. Окупаемость обычно наступает после 3-5 выполненных заказов, то есть за 4-6 месяцев.',
    },
    {
      question: 'Нужно ли нанимать новых сотрудников?',
      answer: 'Для старта достаточно 1-2 менеджеров, которые будут принимать заявки и координировать работы. Всех подрядчиков мы предоставляем из нашей проверенной базы. По мере роста можно расширить штат.',
    },
    {
      question: 'Какие риски при запуске новой услуги?',
      answer: 'Мы минимизируем все риски: предоставляем готовую юридическую базу, страхуем все работы, обучаем персонал и даем 6-месячную гарантию на результат. Если выручка не покроет вложения — вернем 50% стоимости пакета.',
    },
    {
      question: 'Как быстро окупится запуск?',
      answer: 'В среднем окупаемость наступает через 4-6 месяцев. При среднем чеке 200-300 тыс рублей и марже 25-30%, достаточно выполнить 3-5 заказов для возврата инвестиций.',
    },
    {
      question: 'Что если у нас мало опыта в ремонте?',
      answer: 'Это не проблема! Мы специализируемся на запуске услуг с нуля. Предоставим всех подрядчиков, обучим персонал, настроим процессы. Ваша задача — продавать услугу своим клиентам, остальное берем на себя.',
    },
    {
      question: 'Можно ли сначала протестировать на пилоте?',
      answer: 'Да! Мы рекомендуем начать с пилотного проекта на 2-3 объектах длительностью 2 месяца. Это позволит оценить спрос, отладить процессы и принять взвешенное решение о масштабировании.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90 animate-fade-in">
                Для УК и застройщиков без услуги ремонта
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Запустите новое направление с гарантией прибыли
              </h1>
              <p className="text-xl md:text-2xl opacity-95 mb-8 animate-fade-in leading-relaxed">
                Готовое решение для запуска услуги «ремонт от застройщика» за 2-3 месяца. 
                Минимальные инвестиции, максимальная поддержка
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">Получить расчет прибыли</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <a href="#cases">Кейсы запусков</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-green-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                  Новый источник дохода
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему стоит запустить услугу ремонта?</h2>
                <p className="text-lg text-muted-foreground">
                  Увеличьте выручку без расширения основного производства
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Многие застройщики и УК упускают возможность заработать на услуге «ремонт от застройщика» 
                из-за отсутствия документации и опыта. <strong>Мы даем готовое решение «под ключ»</strong>, 
                которое позволит запустить направление за 2-3 месяца и получать <strong>дополнительные 3-5 млн рублей выручки в год</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunities.map((opportunity, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-green-600/10 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all">
                        <Icon name={opportunity.icon} size={26} className="text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <CardDescription className="text-base">{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-600/5 px-4 py-2 rounded-lg">
                        <div className="text-sm text-green-600 font-semibold">{opportunity.profit}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary to-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Пошаговый план
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы запускаем услугу</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачный процесс от анализа до масштабирования
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-bold mb-2 md:mb-0">{step.title}</h3>
                          <div className="text-sm text-muted-foreground flex items-center bg-secondary px-3 py-1 rounded-full w-fit">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, idx) => (
                            <div key={idx} className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Всё включено
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что входит в пакет запуска</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный набор инструментов для успешного старта
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {included.map((block, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Icon name="CheckCircle" size={24} className="text-green-600 mr-2" />
                      {block.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {block.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Реальные результаты
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы успешных запусков</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Компании, которые запустили услугу ремонта с нашей помощью
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cases.map((caseItem, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle className="text-lg mb-1">{caseItem.company}</CardTitle>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {caseItem.city}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-2">{caseItem.result}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{caseItem.description}</p>
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Заказов</div>
                        <div className="font-bold text-green-600">{caseItem.metrics.orders}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Выручка</div>
                        <div className="font-bold text-green-600">{caseItem.metrics.revenue}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Маржа</div>
                        <div className="font-bold text-green-600">{caseItem.metrics.margin}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Тарифы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость запуска</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите подходящий пакет для вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <Card
                  key={index}
                  className={`animate-fade-in hover:shadow-xl transition-all ${
                    plan.popular ? 'border-green-600 border-2 relative' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Популярный
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="text-3xl font-bold text-green-600 mt-4">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Icon name="Check" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={plan.popular ? 'default' : 'outline'}
                      className="w-full"
                    >
                      <Link to="/contacts">Выбрать пакет</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-green-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Ответы на вопросы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faq.map((item, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start">
                      <Icon name="HelpCircle" size={20} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Начните зарабатывать на ремонте
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Оставьте заявку, и мы рассчитаем потенциальную прибыль для вашего бизнеса. 
                Первая консультация — бесплатно!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Получить расчет прибыли
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <a href="tel:+79999999999">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 999-99-99
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevelopersWithoutRepair;