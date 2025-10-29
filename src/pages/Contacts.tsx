import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnerType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена успешно!',
      description: 'Мы свяжемся с вами в течение 30 минут',
    });
    setFormData({ name: '', company: '', email: '', phone: '', partnerType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, partnerType: value });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (999) 999-99-99',
      subcontent: 'Бесплатно по России',
      link: 'tel:+79999999999',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@remontpartner.ru',
      subcontent: 'Ответим в течение часа',
      link: 'mailto:info@remontpartner.ru',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: 'MapPin',
      title: 'Адрес офиса',
      content: 'Москва, Пресненская наб., 12',
      subcontent: 'Москва-Сити, башня Федерация',
      link: null,
      color: 'from-red-500 to-red-600',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 20:00',
      subcontent: 'Сб-Вс: 10:00 - 18:00',
      link: null,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'Пресненская наб., 12',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@remontpartner.ru',
      icon: 'Building',
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский пр., 28',
      phone: '+7 (812) 234-56-78',
      email: 'spb@remontpartner.ru',
      icon: 'Building2',
    },
    {
      city: 'Казань',
      address: 'ул. Баумана, 17',
      phone: '+7 (843) 345-67-89',
      email: 'kazan@remontpartner.ru',
      icon: 'Building2',
    },
  ];

  const faqs = [
    {
      question: 'Как быстро вы отвечаете на заявки?',
      answer: 'Мы обрабатываем все заявки в течение 30 минут в рабочее время. В нерабочие часы — в течение 2 часов.',
      icon: 'Clock',
    },
    {
      question: 'Первая консультация платная?',
      answer: 'Нет, первая консультация абсолютно бесплатная. Мы проанализируем ваш запрос и предложим решение.',
      icon: 'DollarSign',
    },
    {
      question: 'Можно ли приехать в офис?',
      answer: 'Да, мы будем рады встретиться лично. Предварительно согласуйте время визита по телефону или email.',
      icon: 'MapPin',
    },
    {
      question: 'Работаете ли вы в регионах?',
      answer: 'Да, мы работаем по всей России. Имеем офисы в 3 городах и партнеров в 45+ регионах страны.',
      icon: 'Globe',
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
                Свяжитесь с нами
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Контакты</h1>
              <p className="text-xl md:text-2xl opacity-95 animate-fade-in">
                Оставьте заявку, и мы свяжемся с вами в течение 30 минут
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon name={info.icon} size={24} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-accent hover:underline font-semibold block mb-1"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold mb-1">{info.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="mb-8">
                  <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                    Форма обратной связи
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставьте заявку</h2>
                  <p className="text-muted-foreground text-lg">
                    Заполните форму, и наш менеджер свяжется с вами для обсуждения деталей
                  </p>
                </div>
                <Card className="border-accent/20 shadow-xl">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Иван Петров"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Название компании *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder='ООО "Название"'
                          className="mt-2"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@company.ru"
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+7 (999) 123-45-67"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="partnerType">Тип партнерства *</Label>
                        <Select onValueChange={handleSelectChange} value={formData.partnerType}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Выберите тип партнерства" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="developer-with">Застройщик с ремонтом</SelectItem>
                            <SelectItem value="developer-without">Застройщик без ремонта</SelectItem>
                            <SelectItem value="agency">Агентство недвижимости</SelectItem>
                            <SelectItem value="supplier">Поставщик материалов</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Ваше сообщение</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Расскажите о вашем проекте или вопросе..."
                          rows={5}
                          className="mt-2"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                    Дополнительно
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезная информация</h2>
                </div>

                <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Info" size={20} className="text-accent mr-2" />
                      Важно знать
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>Ответ на заявку в течение 30 минут в рабочее время</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>Первая консультация всегда бесплатная</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>Конфиденциальность данных гарантируется</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>Работаем по всей России и странам СНГ</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="MessageCircle" size={20} className="text-accent mr-2" />
                      Другие способы связи
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="https://t.me/remontpartner" 
                      className="flex items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                        <Icon name="MessageSquare" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Telegram</div>
                        <div className="text-sm text-muted-foreground">@remontpartner</div>
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/79999999999" 
                      className="flex items-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-4">
                        <Icon name="Phone" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">+7 (999) 999-99-99</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="text-accent mr-2" />
                      Срочная консультация
                    </CardTitle>
                    <CardDescription>
                      Нужна помощь прямо сейчас? Позвоните нам!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild size="lg" className="w-full">
                      <a href="tel:+79999999999">
                        <Icon name="Phone" size={18} className="mr-2" />
                        +7 (999) 999-99-99
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
                Наши офисы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Где мы находимся</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Представительства в крупнейших городах России
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={office.icon} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{office.city}</CardTitle>
                    <CardDescription className="text-base">{office.address}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="flex items-center text-sm hover:text-accent">
                      <Icon name="Phone" size={16} className="mr-2" />
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center text-sm hover:text-accent">
                      <Icon name="Mail" size={16} className="mr-2" />
                      {office.email}
                    </a>
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
                Частые вопросы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ответы на самые популярные вопросы о сотрудничестве
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start">
                      <Icon name={faq.icon} size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;