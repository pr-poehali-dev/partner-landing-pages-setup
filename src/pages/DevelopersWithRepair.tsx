import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const DevelopersWithRepair = () => {
  const benefits = [
    'Увеличение прибыли от действующей услуги ремонта на 30-50%',
    'Оптимизация процессов и снижение издержек до 25%',
    'Расширение линейки предлагаемых услуг и дизайн-проектов',
    'Повышение качества выполняемых работ и контроль на всех этапах',
    'Доступ к проверенным поставщикам материалов с эксклюзивными ценами',
    'Техническая и юридическая поддержка 24/7 для вашей команды',
  ];

  const services = [
    {
      icon: 'FileText',
      title: 'Аудит текущих процессов',
      description: 'Глубокий анализ существующей системы, выявление точек роста и зон оптимизации. Детальный отчет с рекомендациями за 3-5 дней.',
      features: ['Анализ себестоимости', 'Оценка эффективности', 'План улучшений'],
    },
    {
      icon: 'TrendingUp',
      title: 'Оптимизация бизнес-процессов',
      description: 'Внедрение проверенных решений для увеличения маржинальности и скорости выполнения работ без потери качества.',
      features: ['Автоматизация учета', 'Контроль качества', 'Управление проектами'],
    },
    {
      icon: 'Users',
      title: 'Обучение персонала',
      description: 'Комплексное повышение квалификации сотрудников, стандартизация работ и внедрение лучших практик индустрии.',
      features: ['Тренинги для прорабов', 'Обучение продажам', 'Сертификация'],
    },
    {
      icon: 'Package',
      title: 'Поставка материалов',
      description: 'Прямые контракты с производителями, эксклюзивные цены и гарантия качества материалов для всех типов работ.',
      features: ['Скидки до 40%', 'Доставка на объект', 'Гарантия качества'],
    },
  ];

  const stats = [
    { value: '150+', label: 'Реализованных проектов', icon: 'Briefcase' },
    { value: '45%', label: 'Средний рост прибыли', icon: 'TrendingUp' },
    { value: '98%', label: 'Удовлетворенных клиентов', icon: 'Heart' },
    { value: '24/7', label: 'Техническая поддержка', icon: 'Clock' },
  ];

  const cases = [
    {
      company: 'ГК "Пионер"',
      city: 'Москва',
      result: 'Увеличение прибыли на 47%',
      description: 'Оптимизировали процессы закупки материалов и внедрили CRM-систему для управления заказами. Результат — рост маржинальности и сокращение сроков выполнения работ на 20%.',
      period: '6 месяцев',
    },
    {
      company: 'ЖК "Новый город"',
      city: 'Санкт-Петербург',
      result: 'Снижение себестоимости на 32%',
      description: 'Запустили прямые поставки материалов от производителей и оптимизировали логистику. Сэкономили 8 млн рублей за первый год сотрудничества.',
      period: '4 месяца',
    },
    {
      company: 'Группа ЛСР',
      city: 'Екатеринбург',
      result: 'Расширение линейки на 5 новых услуг',
      description: 'Внедрили дизайн-проекты, услуги по мебелированию и техническое обслуживание. Дополнительная выручка составила 15 млн рублей в год.',
      period: '8 месяцев',
    },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Первичная консультация',
      description: 'Знакомимся с вашей компанией, обсуждаем текущие процессы и цели партнерства',
      duration: '1 день',
    },
    {
      step: '2',
      title: 'Аудит и анализ',
      description: 'Проводим детальный аудит существующей системы, оцениваем потенциал роста',
      duration: '3-5 дней',
    },
    {
      step: '3',
      title: 'Презентация решений',
      description: 'Представляем план оптимизации с конкретными цифрами и прогнозами',
      duration: '2 дня',
    },
    {
      step: '4',
      title: 'Внедрение',
      description: 'Поэтапно запускаем улучшения, обучаем команду, настраиваем процессы',
      duration: '1-3 месяца',
    },
    {
      step: '5',
      title: 'Поддержка и масштабирование',
      description: 'Постоянная техническая поддержка, анализ результатов и дальнейший рост',
      duration: 'Постоянно',
    },
  ];

  const faq = [
    {
      question: 'Сколько стоит партнерство?',
      answer: 'Стоимость зависит от масштаба вашего бизнеса и выбранных услуг. Базовый пакет стартует от 150 000 руб/мес. Окупаемость в среднем составляет 3-4 месяца за счет роста прибыли.',
    },
    {
      question: 'Как быстро увидим результат?',
      answer: 'Первые улучшения заметны уже через 2-3 недели после начала внедрения. Существенный рост прибыли (20-30%) достигается через 3-4 месяца работы.',
    },
    {
      question: 'Нужно ли менять существующую команду?',
      answer: 'Нет, мы работаем с вашей текущей командой. Проводим обучение, внедряем стандарты и оптимизируем процессы. При необходимости помогаем с наймом ключевых специалистов.',
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем рост показателей эффективности минимум на 15% в течение первых 6 месяцев. Если результат не достигнут — вернем 50% стоимости услуг.',
    },
    {
      question: 'Можно ли начать с пилотного проекта?',
      answer: 'Да, мы предлагаем пилотный проект на 1-2 объектах длительностью 2-3 месяца. Это позволяет оценить эффективность сотрудничества с минимальными рисками.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-accent to-accent/80 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90 animate-fade-in">
                Для застройщиков с действующей услугой
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                Масштабируйте бизнес и увеличивайте прибыль на 30-50%
              </h1>
              <p className="text-xl md:text-2xl opacity-95 mb-8 animate-fade-in leading-relaxed">
                Оптимизация процессов, снижение издержек и рост выручки для компаний с готовой услугой «ремонт от застройщика»
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">Получить аудит бесплатно</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                  <a href="#cases">Смотреть кейсы</a>
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
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-accent" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
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
                <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                  Решение для вашего бизнеса
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем</h2>
                <p className="text-lg text-muted-foreground">
                  Комплексный подход к оптимизации и масштабированию услуги ремонта
                </p>
              </div>

              <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 mb-12">
                <CardContent className="pt-8 pb-8">
                  <p className="text-lg leading-relaxed mb-6">
                    Если у вас уже реализована услуга «ремонт от застройщика», мы поможем вывести её на новый уровень. 
                    Наш опыт работы с <strong>крупнейшими застройщиками России</strong> показывает, что правильная оптимизация процессов 
                    позволяет <strong>увеличить прибыль на 30-50%</strong> при сохранении или даже повышении качества работ.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Target" size={24} className="text-accent mr-2" />
                    Преимущества партнерства
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="CheckCircle" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Полный спектр услуг
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы помогаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                От аудита до масштабирования — всё для роста вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon name={service.icon} size={26} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Реальные результаты
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы наших клиентов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Истории успеха застройщиков, которые масштабировали бизнес вместе с нами
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
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg mb-1">{caseItem.company}</CardTitle>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {caseItem.city}
                        </div>
                      </div>
                      <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {caseItem.period}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-accent">{caseItem.result}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary to-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Пошаговый план
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачный процесс от консультации до масштабирования
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {workflow.map((item, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="text-sm text-muted-foreground flex items-center">
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
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
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
                      <Icon name="HelpCircle" size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
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

        <section className="py-16 bg-gradient-to-br from-accent to-accent/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы масштабировать бизнес?
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Запишитесь на бесплатную консультацию. Мы проанализируем ваш бизнес и покажем, 
                как увеличить прибыль на 30-50% без потери качества
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/contacts">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Получить консультацию
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

export default DevelopersWithRepair;