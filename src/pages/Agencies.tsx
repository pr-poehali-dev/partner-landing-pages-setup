import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Agencies = () => {
  const stats = [
    { value: '8-15%', label: 'Ваша комиссия', icon: 'Percent' },
    { value: '50+', label: 'Партнеров по РФ', icon: 'Users' },
    { value: '40%', label: 'Клиентов выбирают ремонт', icon: 'TrendingUp' },
    { value: '0 ₽', label: 'Вложений для старта', icon: 'Wallet' },
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Комиссия 8-15% с каждой сделки',
      description: 'Получайте процент от стоимости ремонтных работ. При среднем чеке 300 тыс ₽ ваш доход составит 24-45 тыс ₽ с одного клиента',
      profit: '24-45 тыс ₽ с клиента',
    },
    {
      icon: 'Star',
      title: 'Дополнительная ценность для клиентов',
      description: 'Предлагайте готовое решение по ремонту при покупке недвижимости. Это повышает лояльность и закрывает больше сделок',
      profit: '+15% к конверсии',
    },
    {
      icon: 'Clock',
      title: 'Экономия времени агента',
      description: 'Не нужно искать подрядчиков и контролировать ремонт — мы берем весь процесс на себя от замера до сдачи',
      profit: '10+ часов экономии',
    },
    {
      icon: 'Shield',
      title: 'Гарантии качества и юридическая защита',
      description: 'Все работы выполняются с договором, гарантией до 3 лет и страхованием. Вы рекомендуете — мы несем ответственность',
      profit: 'Нулевые риски',
    },
  ];

  const services = [
    { name: 'Ремонт квартир под ключ', icon: 'Home', desc: 'Все виды работ от черновой отделки до декора' },
    { name: 'Дизайн-проекты и 3D', icon: 'PenTool', desc: 'Визуализация интерьера и рабочая документация' },
    { name: 'Подбор и закупка материалов', icon: 'Package', desc: 'Эксклюзивные цены и доставка на объект' },
    { name: 'Авторский надзор', icon: 'Eye', desc: 'Контроль качества на всех этапах работ' },
    { name: 'Юридическое сопровождение', icon: 'FileText', desc: 'Договоры, гарантии и страхование рисков' },
    { name: 'Онлайн-отчетность', icon: 'BarChart', desc: 'Прозрачность для клиента в режиме реального времени' },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Заключаем партнерское соглашение',
      description: 'Подписываем договор, где фиксируем размер вашей комиссии (8-15% в зависимости от объемов). Выдаем маркетинг-материалы и доступ к CRM.',
      icon: 'FileSignature',
    },
    {
      step: '2',
      title: 'Вы рекомендуете нас клиентам',
      description: 'При показе квартиры или заключении сделки предлагаете услуги ремонта. Мы даем готовые скрипты продаж и презентации для агентов.',
      icon: 'MessageSquare',
    },
    {
      step: '3',
      title: 'Мы выполняем замер и составляем смету',
      description: 'Наш специалист приезжает к клиенту в течение 24 часов, делает замеры и готовит детальную смету. Вы получаете уведомление о статусе.',
      icon: 'Ruler',
    },
    {
      step: '4',
      title: 'Клиент подписывает договор',
      description: 'Если клиент одобрил смету, заключаем официальный договор. Ваша комиссия фиксируется и выплачивается после первого платежа клиента.',
      icon: 'CheckCircle',
    },
    {
      step: '5',
      title: 'Выполняем ремонт и выплачиваем комиссию',
      description: 'Берем на себя все вопросы по ремонту. Вы получаете комиссию в течение 3 рабочих дней после оплаты клиентом первого этапа работ.',
      icon: 'Wallet',
    },
  ];

  const cases = [
    {
      agency: 'ЦИАН Петербург',
      city: 'Санкт-Петербург',
      result: '450 тыс ₽ за 3 месяца',
      description: 'Агентство с 8 агентами подключилось к программе. За первый квартал 12 клиентов выбрали ремонт от партнера. Средняя комиссия составила 37 тыс рублей.',
      metrics: { clients: 12, commission: '37 тыс ₽', total: '450 тыс ₽' },
    },
    {
      agency: 'МИЭЛь Краснодар',
      city: 'Краснодар',
      result: '820 тыс ₽ за полгода',
      description: 'Крупное агентство интегрировало услугу во все сделки с новостройками. 40% покупателей согласились на ремонт. Комиссия — 10%.',
      metrics: { clients: 28, commission: '29 тыс ₽', total: '820 тыс ₽' },
    },
    {
      agency: 'Этажи Новосибирск',
      city: 'Новосибирск',
      result: '1,2 млн ₽ за год',
      description: 'Партнер запустил услугу в 3 офисах. За год выполнили 45 ремонтов через агентство. Дополнительная выручка агентов — в среднем 27 тыс рублей на сделку.',
      metrics: { clients: 45, commission: '27 тыс ₽', total: '1,2 млн ₽' },
    },
  ];

  const commission = [
    {
      title: 'Стандартная комиссия',
      rate: '8%',
      volume: 'До 10 заказов в месяц',
      example: 'Заказ 300 тыс ₽ = ваш доход 24 тыс ₽',
      features: ['Маркетинг-материалы', 'Доступ к CRM', 'Поддержка менеджера'],
    },
    {
      title: 'Повышенная комиссия',
      rate: '12%',
      volume: '10-25 заказов в месяц',
      example: 'Заказ 300 тыс ₽ = ваш доход 36 тыс ₽',
      features: ['Всё из Стандартной', 'Приоритетная поддержка', 'Персональный куратор'],
      popular: true,
    },
    {
      title: 'VIP комиссия',
      rate: '15%',
      volume: 'От 25 заказов в месяц',
      example: 'Заказ 300 тыс ₽ = ваш доход 45 тыс ₽',
      features: ['Всё из Повышенной', 'Индивидуальные условия', 'Совместный маркетинг'],
    },
  ];

  const materials = [
    {
      title: 'Презентация для клиентов',
      description: 'Готовая PDF-презентация с примерами работ и ценами',
      icon: 'FileText',
    },
    {
      title: 'Скрипты продаж',
      description: 'Готовые фразы и ответы на возражения для агентов',
      icon: 'MessageCircle',
    },
    {
      title: 'Калькулятор стоимости',
      description: 'Онлайн-калькулятор для быстрого расчета цены ремонта',
      icon: 'Calculator',
    },
    {
      title: 'Портфолио работ',
      description: 'База реализованных проектов с фото до/после',
      icon: 'Image',
    },
    {
      title: 'Договоры и формы',
      description: 'Шаблоны документов для юридической защиты',
      icon: 'Shield',
    },
    {
      title: 'Видео-кейсы',
      description: 'Короткие видео с отзывами довольных клиентов',
      icon: 'Video',
    },
  ];

  const faq = [
    {
      question: 'Сколько я буду зарабатывать?',
      answer: 'Ваш доход зависит от количества рекомендаций. При средней комиссии 10% и среднем чеке ремонта 300 тыс рублей, каждый клиент приносит вам 30 тыс рублей. Если приводить 5 клиентов в месяц — это 150 тыс рублей дополнительного дохода.',
    },
    {
      question: 'Когда я получу комиссию?',
      answer: 'Комиссия выплачивается в течение 3 рабочих дней после того, как клиент оплатил первый этап работ (обычно 30-50% от суммы договора). То есть через 1-2 недели после подписания договора вы получаете деньги.',
    },
    {
      question: 'Что если клиент останется недоволен?',
      answer: 'Мы несем полную ответственность за качество работ. У нас договор с клиентом, гарантия до 3 лет и страхование. Если возникнет проблема — мы решаем её за свой счет. Вы рекомендуете — мы отвечаем.',
    },
    {
      question: 'Нужно ли платить за подключение?',
      answer: 'Нет, подключение абсолютно бесплатное. Вы не платите никаких взносов, абонентских плат или гарантийных депозитов. Вы зарабатываете только с успешных сделок.',
    },
    {
      question: 'Как клиенты узнают, что ремонт от меня?',
      answer: 'В договоре указывается, что клиент пришел по рекомендации вашего агентства. Также мы можем разместить ваш логотип на документах (по желанию) и клиент будет знать, что работает с проверенным партнером.',
    },
    {
      question: 'Могу ли я контролировать процесс ремонта?',
      answer: 'Да, у вас будет доступ к CRM-системе, где в режиме онлайн можно отслеживать статус заказа, видеть фото с объекта и график работ. Вы всегда в курсе, что происходит с ремонтом вашего клиента.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90 animate-fade-in">
                Партнерская программа для агентств недвижимости
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Зарабатывайте на ремонте клиентов до 45 тыс ₽ с каждой сделки
              </h1>
              <p className="text-xl md:text-2xl opacity-95 mb-8 animate-fade-in leading-relaxed">
                Рекомендуйте проверенного подрядчика и получайте комиссию 8-15%. 
                Без вложений, рисков и дополнительной работы
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">Стать партнером</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <a href="#calculator">Рассчитать доход</a>
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
                    <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-purple-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
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
                <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                  Преимущества партнерства
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему агентства выбирают нас</h2>
                <p className="text-lg text-muted-foreground">
                  Дополнительный доход без рисков и хлопот
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Мы предлагаем агентствам недвижимости <strong>готовое решение для монетизации клиентской базы</strong>. 
                Вы рекомендуете наши услуги при покупке или аренде недвижимости, а мы делимся прибылью. 
                <strong>40% клиентов</strong> выбирают ремонт, если им предложить удобное решение.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all">
                        <Icon name={benefit.icon} size={26} className="text-purple-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-purple-600/5 px-4 py-2 rounded-lg">
                        <div className="text-sm text-purple-600 font-semibold">{benefit.profit}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Полный спектр услуг
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем вашим клиентам</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Качественный ремонт под ключ с гарантией и прозрачностью
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon} size={24} className="text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Процесс работы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Простая схема сотрудничества в 5 шагов
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {workflow.map((item, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all border-l-4 border-l-purple-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          {item.title}
                          <Icon name={item.icon} size={20} className="text-purple-600 ml-2" />
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-secondary to-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Размер комиссии
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Сколько вы заработаете</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комиссия зависит от объема привлеченных заказов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {commission.map((plan, index) => (
                <Card
                  key={index}
                  className={`animate-fade-in hover:shadow-xl transition-all ${
                    plan.popular ? 'border-purple-600 border-2 relative' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Популярный
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <div className="text-5xl font-bold text-purple-600 my-4">{plan.rate}</div>
                    <CardDescription className="text-base">{plan.volume}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-600/5 px-4 py-3 rounded-lg mb-6">
                      <div className="text-sm font-semibold text-purple-600">{plan.example}</div>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Icon name="Check" size={16} className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
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

        <section id="cases" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Реальные результаты
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы наших партнеров</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Агентства, которые зарабатывают с нами
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
                        <CardTitle className="text-lg mb-1">{caseItem.agency}</CardTitle>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {caseItem.city}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{caseItem.result}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{caseItem.description}</p>
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Клиентов</div>
                        <div className="font-bold text-purple-600">{caseItem.metrics.clients}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Средняя</div>
                        <div className="font-bold text-purple-600">{caseItem.metrics.commission}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Всего</div>
                        <div className="font-bold text-purple-600">{caseItem.metrics.total}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Маркетинговая поддержка
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что вы получаете при подключении</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Готовые инструменты для продажи услуги клиентам
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {materials.map((material, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
                      <Icon name={material.icon} size={24} className="text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-purple-600 font-semibold mb-3 uppercase tracking-wider text-sm">
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
                      <Icon name="HelpCircle" size={20} className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
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

        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Handshake" size={48} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Станьте нашим партнером
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Подключайтесь к партнерской программе и начните зарабатывать на ремонте клиентов. 
                Первые 10 агентств получат повышенную комиссию 12% на первые 3 месяца!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Подключиться сейчас
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

export default Agencies;