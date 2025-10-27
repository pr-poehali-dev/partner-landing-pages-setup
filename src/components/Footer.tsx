import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Building2" size={28} className="text-accent" />
              <span className="text-xl font-bold">РемонтПартнер</span>
            </div>
            <p className="text-sm opacity-90">
              Профессиональные решения для партнеров в сфере ремонта и недвижимости
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Партнерам</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/developers-with-repair" className="hover:text-accent transition-colors">
                  Застройщикам с ремонтом
                </Link>
              </li>
              <li>
                <Link to="/developers-without-repair" className="hover:text-accent transition-colors">
                  УК и застройщикам
                </Link>
              </li>
              <li>
                <Link to="/agencies" className="hover:text-accent transition-colors">
                  Агентствам недвижимости
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="hover:text-accent transition-colors">
                  Поставщикам
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@remontpartner.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} РемонтПартнер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
