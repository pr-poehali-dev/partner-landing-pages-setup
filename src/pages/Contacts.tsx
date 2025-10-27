import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@remontpartner.ru',
      link: 'mailto:info@remontpartner.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Примерная, д. 1, офис 100',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Контакты</h1>
            <p className="text-xl opacity-90 max-w-2xl animate-fade-in">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-8">Оставьте заявку</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Иван Иванов"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Компания *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="ООО «Название»"
                        />
                      </div>

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
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Расскажите о вашем проекте..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={info.icon} size={24} className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-accent transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-secondary">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Info" size={20} className="text-accent mr-2" />
                      Важно знать
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Мы отвечаем на все заявки в течение 24 часов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Первая консультация всегда бесплатная</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>Конфиденциальность гарантируется</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Офис в центре Москвы</h2>
              <p className="text-muted-foreground mb-8">
                Приходите на встречу, чтобы обсудить детали сотрудничества
              </p>
              <div className="bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Карта офиса</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
