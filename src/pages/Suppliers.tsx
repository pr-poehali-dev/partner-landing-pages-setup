import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Suppliers = () => {
  const stats = [
    { value: '250+', label: 'Объектов в год', icon: 'Building' },
    { value: '15 млн ₽', label: 'Ежемесячный оборот', icon: 'TrendingUp' },
    { value: '30%', label: 'Скидка от РРЦ', icon: 'Percent' },
    { value: '2-3 дня', label: 'Отсрочка платежа', icon: 'Calendar' },
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Стабильные объемы закупок',
      description: 'Гарантированные заказы от сети партнеров-застройщиков на сумму 15+ млн рублей ежемесячно. Планирование на квартал вперед.',
      profit: '15+ млн ₽/мес',
    },
    {
      icon: 'Users',
      title: 'Расширение клиентской базы',
      description: 'Доступ к сети из 50+ профессиональных подрядчиков, застройщиков и управляющих компаний по всей России.',
      profit: '50+ постоянных клиентов',
    },
    {
      icon: 'Award',
      title: 'Продвижение вашего бренда',
      description: 'Рекомендации вашей продукции конечным клиентам через дизайн-проекты, смету и визуализации. Ваш логотип в материалах.',
      profit: '+30% узнаваемости',
    },
    {
      icon: 'Handshake',
      title: 'Прямое сотрудничество без посредников',
      description: 'Работа напрямую с производителями и дистрибьюторами. Никаких дополнительных наценок, прозрачные условия и договоры.',
      profit: 'Маржа до 25%',
    },
  ];

  const categories = [
    { name: 'Строительные смеси', icon: 'Hammer', brands: 'Knauf, Ceresit, Волма', volume: '2-3 тонны/мес' },
    { name: 'Напольные покрытия', icon: 'Grid3x3', brands: 'Tarkett, Quick-Step, Kronospan', volume: '500-800 м²/мес' },
    { name: 'Сантехника', icon: 'Droplet', brands: 'Grohe, Hansgrohe, Roca', volume: '30-50 комплектов/мес' },
    { name: 'Электрика', icon: 'Zap', brands: 'Legrand, Schneider Electric, ABB', volume: '40-60 объектов/мес' },
    { name: 'Отделочные материалы', icon: 'PaintBucket', brands: 'Tikkurila, Dulux, Caparol', volume: '1500-2000 л/мес' },
    { name: 'Двери и окна', icon: 'DoorOpen', brands: 'Torex, Profil Doors, Rehau', volume: '100-150 шт/мес' },
  ];

  const conditions = [
    {
      icon: 'FileCheck',
      title: 'Официальное партнерство',
      description: 'Заключаем долгосрочные договоры поставки с прозрачными условиями, фиксированными ценами и гарантией оплаты. Работаем строго по договору.',
      features: ['Договор от 1 года', 'Фиксированные цены', 'Гарантия платежей'],
    },
    {
      icon: 'BarChart',
      title: 'Прогнозируемые объемы',
      description: 'Предоставляем планы закупок на квартал вперед с помесячной разбивкой. Это позволяет оптимизировать производство, складские остатки и логистику.',
      features: ['План на квартал', 'Помесячная разбивка', 'Оптимизация склада'],
    },
    {
      icon: 'Clock',
      title: 'Своевременные платежи',
      description: 'Оплата по факту доставки или с отсрочкой 2-3 дня (для постоянных партнеров). Работаем без задержек платежей, строго по графику.',
      features: ['Оплата по факту', 'Отсрочка 2-3 дня', 'Без задержек'],
    },
    {
      icon: 'Megaphone',
      title: 'Совместный маркетинг',
      description: 'Продвигаем ваши бренды среди клиентов через дизайн-проекты, портфолио и маркетинговые материалы. Участие в выставках и мероприятиях.',
      features: ['Упоминание в проектах', 'Совместные акции', 'Выставки'],
    },
  ];

  const requirements = [
    {
      category: 'Документы и сертификация',
      items: [
        'Сертификаты качества и соответствия на всю продукцию',
        'Паспорта безопасности материалов (MSDS)',
        'Гарантийные обязательства от производителя',
        'Лицензии и разрешения (при необходимости)',
      ],
    },
    {
      category: 'Логистика и поставки',
      items: [
        'Возможность доставки на объекты в Москве и МО',
        'Склад или представительство в регионе работы',
        'Минимальный срок доставки — 2-3 рабочих дня',
        'Гибкий график поставок (возможность срочных заказов)',
      ],
    },
    {
      category: 'Коммерческие условия',
      items: [
        'Конкурентные оптовые цены (скидка от РРЦ 25-35%)',
        'Возможность отсрочки платежа для постоянных клиентов',
        'Минимальная партия поставки (обсуждается индивидуально)',
        'Прозрачная система скидок и бонусов за объемы',
      ],
    },
    {
      category: 'Техническая поддержка',
      items: [
        'Консультации по применению материалов',
        'Обучение монтажников и прорабов (при необходимости)',
        'Техническая документация и инструкции',
        'Горячая линия для решения вопросов',
      ],
    },
  ];

  const cases = [
    {
      supplier: 'Knauf Россия',
      category: 'Строительные смеси',
      result: 'Оборот 3,5 млн ₽/мес',
      description: 'Подключили официального дистрибьютора Knauf для поставок гипсокартона и смесей. Стабильные закупки 2-3 тонны материалов ежемесячно на 40+ объектах.',
      metrics: { volume: '2,8 тонны', objects: 42, revenue: '3,5 млн ₽' },
    },
    {
      supplier: 'Tarkett Pro',
      category: 'Напольные покрытия',
      result: 'Оборот 2,2 млн ₽/мес',
      description: 'Прямой контракт с производителем ламината и линолеума. Получили эксклюзивные цены на профессиональную линейку. Объем закупок — 600-800 м² в месяц.',
      metrics: { volume: '720 м²', objects: 28, revenue: '2,2 млн ₽' },
    },
    {
      supplier: 'Grohe Russia',
      category: 'Сантехника',
      result: 'Оборот 1,8 млн ₽/мес',
      description: 'Партнерство с ведущим производителем сантехники. Используем продукцию Grohe в 80% проектов класса комфорт и бизнес. Стабильный заказ 30-40 комплектов.',
      metrics: { volume: '38 компл', objects: 35, revenue: '1,8 млн ₽' },
    },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Заполняете анкету партнера',
      description: 'Заполняете короткую форму с информацией о вашей компании, ассортименте и коммерческих условиях. Прикрепляете сертификаты и прайс-лист.',
      duration: '10 минут',
    },
    {
      step: '2',
      title: 'Проводим анализ и встречу',
      description: 'Наш закупщик изучает ваше предложение, сверяет цены с рынком и назначает встречу (онлайн или офлайн) для обсуждения деталей.',
      duration: '3-5 дней',
    },
    {
      step: '3',
      title: 'Тестовая поставка',
      description: 'Делаем пробный заказ на 1-2 объекта для проверки качества материалов, сроков доставки и сервиса. Оцениваем работу на практике.',
      duration: '2 недели',
    },
    {
      step: '4',
      title: 'Подписываем договор',
      description: 'Если тест прошел успешно, заключаем долгосрочный договор поставки с фиксированными ценами, объемами и условиями оплаты.',
      duration: '1 неделя',
    },
    {
      step: '5',
      title: 'Регулярные закупки',
      description: 'Начинаем регулярное сотрудничество. Предоставляем план закупок на квартал, делаем заказы, контролируем поставки и оплачиваем вовремя.',
      duration: 'Постоянно',
    },
  ];

  const advantages = [
    {
      title: 'Растущий рынок',
      description: 'Рынок ремонта и отделки в России растет на 12% ежегодно. Мы расширяемся вместе с рынком.',
      icon: 'TrendingUp',
    },
    {
      title: 'Долгосрочные контракты',
      description: 'Работаем с партнерами от 1 года с автопролонгацией. Стабильность и предсказуемость.',
      icon: 'FileCheck',
    },
    {
      title: 'Рекомендации клиентам',
      description: 'Ваши материалы попадают в дизайн-проекты и сметы. Клиенты видят ваш бренд и доверяют ему.',
      icon: 'Award',
    },
    {
      title: 'Профессиональный подход',
      description: 'Работаем по стандартам и регламентам. Понимаем специфику строительства и ремонта.',
      icon: 'Briefcase',
    },
    {
      title: 'Быстрые решения',
      description: 'Оперативная обработка заказов, быстрые согласования и платежи. Минимум бюрократии.',
      icon: 'Zap',
    },
    {
      title: 'Взаимовыгодное партнерство',
      description: 'Мы заинтересованы в вашем росте. Чем больше продаете нам, тем выгоднее условия получаете.',
      icon: 'Handshake',
    },
  ];

  const faq = [
    {
      question: 'Какие объемы закупок вы гарантируете?',
      answer: 'Объем зависит от категории материалов. Например, строительные смеси — 2-3 тонны в месяц, напольные покрытия — 500-800 м², сантехника — 30-50 комплектов. Даем прогноз на квартал с точностью ±15%.',
    },
    {
      question: 'Какие цены вы ожидаете от поставщиков?',
      answer: 'Мы работаем с оптовыми ценами со скидкой 25-35% от розничной цены (РРЦ). Для эксклюзивных партнеров возможна индивидуальная ценовая политика с учетом объемов и условий.',
    },
    {
      question: 'Как быстро вы оплачиваете счета?',
      answer: 'Оплата происходит по факту доставки материалов на объект (в течение 1-2 рабочих дней). Для постоянных партнеров с объемом 1+ млн рублей в месяц возможна отсрочка платежа 5-7 дней.',
    },
    {
      question: 'Нужно ли иметь склад в каждом городе?',
      answer: 'Не обязательно. Достаточно наличия склада или представительства в регионе, где вы готовы поставлять. Главное — возможность доставки на объект в течение 2-3 рабочих дней.',
    },
    {
      question: 'Можем ли мы начать с малых объемов?',
      answer: 'Да, мы готовы начать с тестовой поставки на 1-2 объекта. Если качество и сервис устроят, переходим к регулярным закупкам. Объемы растут постепенно по мере расширения сотрудничества.',
    },
    {
      question: 'Как вы продвигаете наш бренд?',
      answer: 'Мы включаем ваши материалы в дизайн-проекты, указываем бренд в сметах и визуализациях. Клиенты видят, какие материалы будут использованы. Также размещаем логотипы на сайте и в маркетинговых материалах.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90 animate-fade-in">
                Партнерство для поставщиков материалов
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Стабильные закупки на 15+ млн ₽ ежемесячно
              </h1>
              <p className="text-xl md:text-2xl opacity-95 mb-8 animate-fade-in leading-relaxed">
                Станьте частью профессиональной экосистемы ремонта. 
                Долгосрочные контракты, прогнозируемые объемы, своевременные платежи
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">Стать поставщиком</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <a href="#categories">Категории материалов</a>
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
                    <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-orange-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
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
                <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                  Преимущества партнерства
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему поставщики выбирают нас</h2>
                <p className="text-lg text-muted-foreground">
                  Стабильность, прозрачность и взаимная выгода
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Мы работаем с ведущими производителями и дистрибьюторами строительных материалов, 
                создавая <strong>долгосрочные партнерские отношения</strong>. Наши объемы закупок 
                <strong> 15+ миллионов рублей ежемесячно</strong> позволяют предлагать конкурентные цены клиентам, 
                а стабильность заказов гарантирует предсказуемость вашего бизнеса.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-orange-600/10 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all">
                        <Icon name={benefit.icon} size={26} className="text-orange-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-orange-600/5 px-4 py-2 rounded-lg">
                        <div className="text-sm text-orange-600 font-semibold">{benefit.profit}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Что мы закупаем
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Категории материалов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Работаем с поставщиками следующих категорий строительных материалов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-orange-600/10 flex items-center justify-center mb-4">
                      <Icon name={category.icon} size={26} className="text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">Бренды: {category.brands}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-600/5 px-3 py-2 rounded-lg">
                      <div className="text-xs text-muted-foreground">Объем закупок</div>
                      <div className="text-sm font-semibold text-orange-600">{category.volume}</div>
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
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Условия сотрудничества
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем поставщикам</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачные и выгодные условия партнерства
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {conditions.map((condition, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-orange-600/10 flex items-center justify-center mb-4">
                      <Icon name={condition.icon} size={26} className="text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{condition.title}</CardTitle>
                    <CardDescription className="text-base">{condition.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {condition.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Icon name="Check" size={16} className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
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

        <section className="bg-gradient-to-br from-secondary to-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Требования к партнерам
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что нужно для сотрудничества</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Базовые требования для поставщиков материалов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {requirements.map((block, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Icon name="CheckCircle" size={24} className="text-orange-600 mr-2" />
                      {block.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {block.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-orange-600 mr-2 mt-1 flex-shrink-0" />
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Реальные результаты
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнеры-поставщики</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Компании, с которыми мы успешно сотрудничаем
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
                        <CardTitle className="text-lg mb-1">{caseItem.supplier}</CardTitle>
                        <div className="text-sm text-muted-foreground">{caseItem.category}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">{caseItem.result}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{caseItem.description}</p>
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Объем</div>
                        <div className="font-bold text-orange-600">{caseItem.metrics.volume}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Объектов</div>
                        <div className="font-bold text-orange-600">{caseItem.metrics.objects}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">Выручка</div>
                        <div className="font-bold text-orange-600">{caseItem.metrics.revenue}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Процесс подключения
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как стать нашим поставщиком</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                5 простых шагов от заявки до регулярных закупок
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {workflow.map((item, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-bold mb-2 md:mb-0">{item.title}</h3>
                          <div className="text-sm text-muted-foreground flex items-center bg-secondary px-3 py-1 rounded-full w-fit">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {item.duration}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
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
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
                Почему мы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества работы с нами</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-orange-600/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon} size={24} className="text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-orange-600 font-semibold mb-3 uppercase tracking-wider text-sm">
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
                      <Icon name="HelpCircle" size={20} className="text-orange-600 mr-2 mt-1 flex-shrink-0" />
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

        <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Package" size={48} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Станьте нашим поставщиком
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Подключайтесь к профессиональной экосистеме ремонта. 
                Стабильные закупки, прогнозируемые объемы, своевременные платежи
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
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

export default Suppliers;