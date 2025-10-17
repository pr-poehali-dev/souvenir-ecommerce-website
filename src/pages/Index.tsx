import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [circulation, setCirculation] = useState([100]);
  const [material, setMaterial] = useState('standard');
  const [printType, setPrintType] = useState('digital');
  const [lamination, setLamination] = useState(false);
  const [cutting, setCutting] = useState(false);

  const calculatePrice = () => {
    const basePrice = 50;
    const circulationMultiplier = circulation[0] / 100;
    const materialPrice = material === 'premium' ? 1.5 : material === 'eco' ? 1.2 : 1;
    const printPrice = printType === 'offset' ? 1.3 : printType === 'uv' ? 1.6 : 1;
    const extraPrice = (lamination ? 200 : 0) + (cutting ? 150 : 0);
    
    return Math.round(basePrice * circulationMultiplier * materialPrice * printPrice + extraPrice);
  };

  const navItems = [
    { name: 'Главная', icon: 'Home' },
    { name: 'Каталог', icon: 'ShoppingBag' },
    { name: 'О компании', icon: 'Building2' },
    { name: 'Портфолио', icon: 'Briefcase' },
    { name: 'Доставка', icon: 'Truck' },
    { name: 'Контакты', icon: 'Phone' },
    { name: 'Отзывы', icon: 'Star' },
  ];

  const products = [
    { name: 'Визитки', price: 'от 500₽', icon: 'CreditCard', color: 'bg-gradient-to-br from-orange-400 to-pink-500' },
    { name: 'Листовки', price: 'от 800₽', icon: 'FileText', color: 'bg-gradient-to-br from-purple-400 to-pink-500' },
    { name: 'Календари', price: 'от 1200₽', icon: 'Calendar', color: 'bg-gradient-to-br from-blue-400 to-purple-500' },
    { name: 'Блокноты', price: 'от 2000₽', icon: 'BookOpen', color: 'bg-gradient-to-br from-pink-400 to-orange-500' },
    { name: 'Кружки', price: 'от 300₽', icon: 'Coffee', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { name: 'Футболки', price: 'от 1500₽', icon: 'Shirt', color: 'bg-gradient-to-br from-purple-500 to-blue-500' },
  ];

  const portfolio = [
    { title: 'Корпоративный брендинг', client: 'IT Компания', img: 'https://cdn.poehali.dev/projects/dd06a089-cb8f-426b-a9b5-b1d6a3846bad/files/467dfc9d-260a-4d92-9ea5-f197e4f35a98.jpg' },
    { title: 'Рекламная полиграфия', client: 'Ресторан', img: 'https://cdn.poehali.dev/projects/dd06a089-cb8f-426b-a9b5-b1d6a3846bad/files/672907ea-de36-4ac6-be0d-99c4dce23cc7.jpg' },
  ];

  const reviews = [
    { name: 'Анна Петрова', rating: 5, text: 'Отличное качество! Заказывали визитки и листовки для конференции. Всё готово точно в срок.' },
    { name: 'Сергей Иванов', rating: 5, text: 'Прекрасный сервис и внимательный менеджер. Помогли с дизайном и подбором материалов.' },
    { name: 'Мария Сидорова', rating: 4, text: 'Качество печати на высоте! Заказываем регулярно, всегда довольны результатом.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500 flex items-center justify-center animate-gradient-shift bg-[length:200%_200%]">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PrintMaster
                </h1>
                <p className="text-xs text-muted-foreground">Сувениры & Полиграфия</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item, idx) => (
                <button key={idx} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group">
                  <Icon name={item.icon as any} size={18} className="group-hover:scale-110 transition-transform" />
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-orange-500 to-pink-500">
                  3
                </Badge>
              </Button>
              <Button className="hidden md:flex bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 hover:opacity-90">
                Заказать звонок
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 animate-slide-in-right">
              {navItems.map((item, idx) => (
                <button key={idx} className="flex items-center gap-3 w-full text-left py-3 px-4 hover:bg-purple-50 rounded-lg transition-colors">
                  <Icon name={item.icon as any} size={18} />
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
              🎉 Скидка 20% на первый заказ
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Печатаем качественно,<br />доставляем быстро
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный цикл производства сувенирной и полиграфической продукции. 
              От визитки до корпоративного мерча.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 hover:opacity-90 text-lg px-8 animate-scale-in">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-purple-50">
                <Icon name="Briefcase" className="mr-2" size={20} />
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm" id="calculator">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Калькулятор стоимости
            </h3>
            <p className="text-muted-foreground text-lg">
              Рассчитайте стоимость вашего заказа онлайн
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-purple-100 shadow-xl animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-purple-50">
              <CardTitle className="text-2xl">Конфигуратор заказа</CardTitle>
              <CardDescription>Выберите параметры вашей продукции</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="business-cards" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="business-cards">Визитки</TabsTrigger>
                  <TabsTrigger value="leaflets">Листовки</TabsTrigger>
                  <TabsTrigger value="souvenirs">Сувениры</TabsTrigger>
                </TabsList>

                <TabsContent value="business-cards" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-3 block">Тираж: {circulation[0]} шт.</label>
                      <Slider
                        value={circulation}
                        onValueChange={setCirculation}
                        min={50}
                        max={5000}
                        step={50}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>50</span>
                        <span>5000</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-3 block">Материал</label>
                      <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Стандартный (300 г/м²)</SelectItem>
                          <SelectItem value="premium">Премиум (350 г/м²)</SelectItem>
                          <SelectItem value="eco">Эко-картон (280 г/м²)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Тип печати</label>
                      <Select value={printType} onValueChange={setPrintType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital">Цифровая печать</SelectItem>
                          <SelectItem value="offset">Офсетная печать</SelectItem>
                          <SelectItem value="uv">UV-печать</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <label className="text-sm font-medium block">Дополнительные опции</label>
                      <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-purple-50 transition-colors cursor-pointer" onClick={() => setLamination(!lamination)}>
                        <div className="flex items-center gap-3">
                          <Icon name="Layers" size={20} className="text-purple-600" />
                          <div>
                            <p className="font-medium">Ламинация</p>
                            <p className="text-xs text-muted-foreground">Матовая или глянцевая</p>
                          </div>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition-colors ${lamination ? 'bg-gradient-to-r from-orange-500 to-purple-500' : 'bg-gray-200'} relative`}>
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${lamination ? 'translate-x-6' : 'translate-x-0.5'}`} />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-purple-50 transition-colors cursor-pointer" onClick={() => setCutting(!cutting)}>
                        <div className="flex items-center gap-3">
                          <Icon name="Scissors" size={20} className="text-orange-600" />
                          <div>
                            <p className="font-medium">Фигурная вырубка</p>
                            <p className="text-xs text-muted-foreground">Скругленные углы</p>
                          </div>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition-colors ${cutting ? 'bg-gradient-to-r from-orange-500 to-purple-500' : 'bg-gray-200'} relative`}>
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${cutting ? 'translate-x-6' : 'translate-x-0.5'}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-gradient-to-r from-orange-50 via-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium">Итоговая стоимость:</span>
                      <div className="text-right">
                        <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                          {calculatePrice()}₽
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {(calculatePrice() / circulation[0]).toFixed(2)}₽ за штуку
                        </p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 hover:opacity-90" size="lg">
                      <Icon name="ShoppingCart" className="mr-2" size={20} />
                      Добавить в корзину
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="leaflets">
                  <div className="text-center py-12">
                    <Icon name="FileText" size={64} className="mx-auto mb-4 text-purple-400" />
                    <p className="text-muted-foreground">Калькулятор для листовок в разработке</p>
                  </div>
                </TabsContent>

                <TabsContent value="souvenirs">
                  <div className="text-center py-12">
                    <Icon name="Gift" size={64} className="mx-auto mb-4 text-orange-400" />
                    <p className="text-muted-foreground">Калькулятор для сувениров в разработке</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Популярные товары
            </h3>
            <p className="text-muted-foreground text-lg">Всё для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 animate-scale-in cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={product.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mt-2">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-0 transition-all">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Наши работы
            </h3>
            <p className="text-muted-foreground text-lg">Портфолио успешных проектов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-white text-purple-600">Выполнено</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Building2" size={16} />
                    {item.client}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Отзывы клиентов
            </h3>
            <p className="text-muted-foreground text-lg">Что говорят о нас</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon name="Sparkles" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">PrintMaster</h4>
                  <p className="text-xs text-white/70">Сувениры & Полиграфия</p>
                </div>
              </div>
              <p className="text-sm text-white/70">Ваш надежный партнер в мире печати</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer transition-colors">Визитки</li>
                <li className="hover:text-white cursor-pointer transition-colors">Листовки</li>
                <li className="hover:text-white cursor-pointer transition-colors">Сувениры</li>
                <li className="hover:text-white cursor-pointer transition-colors">Календари</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Портфолио</li>
                <li className="hover:text-white cursor-pointer transition-colors">Доставка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@printmaster.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2024 PrintMaster. Все права защищены.</p>
            <div className="flex gap-4">
              <Icon name="Instagram" size={20} className="cursor-pointer hover:text-white transition-colors" />
              <Icon name="Facebook" size={20} className="cursor-pointer hover:text-white transition-colors" />
              <Icon name="Mail" size={20} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
