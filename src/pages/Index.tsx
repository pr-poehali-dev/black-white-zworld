import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

type Section = 'home' | 'news' | 'shop' | 'about' | 'faq' | 'dev' | 'account' | 'site-info';
type ShopCategory = 'popular' | 'privileges' | 'cases' | 'zavrides' | 'boxes' | 'other';

interface User {
  username: string;
  role: string;
  server: string;
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [shopCategory, setShopCategory] = useState<ShopCategory>('popular');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('Доброе утро');
    else if (hour >= 12 && hour < 17) setGreeting('Добрый день');
    else if (hour >= 17 && hour < 23) setGreeting('Добрый вечер');
    else setGreeting('Доброй ночи');
  }, []);

  const menuItems = [
    { id: 'home' as Section, icon: 'Home', label: 'Главная' },
    { id: 'news' as Section, icon: 'Newspaper', label: 'Новости' },
    { id: 'shop' as Section, icon: 'ShoppingCart', label: 'Магазин' },
    { id: 'about' as Section, icon: 'Info', label: 'О ZWorld' },
    { id: 'faq' as Section, icon: 'HelpCircle', label: 'FAQ' },
    { id: 'dev' as Section, icon: 'Code', label: 'Среда разработки', protected: true },
    { id: 'account' as Section, icon: 'User', label: 'Аккаунт' },
    { id: 'site-info' as Section, icon: 'FileText', label: 'О сайте' },
  ];

  const shopCategories = [
    { id: 'popular' as ShopCategory, label: 'Популярное' },
    { id: 'privileges' as ShopCategory, label: 'Привилегии' },
    { id: 'cases' as ShopCategory, label: 'Кейсы' },
    { id: 'zavrides' as ShopCategory, label: 'Завриды' },
    { id: 'boxes' as ShopCategory, label: 'Ящики' },
    { id: 'other' as ShopCategory, label: 'Другое' },
  ];

  const popularItems = [
    { name: 'Кейс с донатом x5', price: 399 },
    { name: 'Завриды х1000', price: 489 },
    { name: 'Завриды х2000', price: 699 },
    { name: 'Кейс с титулами х10', price: 159 },
    { name: 'Кейс с завридами х10', price: 599 },
  ];

  const privileges = [
    { name: 'Hero', prices: { month1: 14, month3: 21, forever: 29 }, description: 'Базовая привилегия для старта' },
    { name: 'Wither', prices: { month1: 29, month3: 39, forever: 59 }, description: 'Дополнительные возможности' },
    { name: 'Stronger', prices: { month1: 69, month3: 129, forever: 209 }, description: 'Усиленная привилегия' },
    { name: 'Sirius', prices: { month1: 199, month3: 239, forever: 399 }, description: 'Премиум возможности' },
    { name: 'Rainbow', prices: { month1: 289, month3: 489, forever: 999 }, description: 'Уникальные функции' },
    { name: 'Infinity', prices: { month1: 509, month3: 779, forever: 1119 }, description: 'Безграничные возможности' },
    { name: 'Krial', prices: { month1: 789, month3: 1299, forever: 1999 }, description: 'Элитная привилегия' },
    { name: 'Rival', prices: { month1: 999, month3: 1999, forever: 2999 }, description: 'Для настоящих лидеров' },
    { name: 'Custom', prices: { month1: 3899, month3: 4189, forever: 5899 }, description: 'Максимальная кастомизация' },
  ];

  const cases = [
    { name: 'С завридами', prices: { x1: 49, x3: 109, x5: 289, x10: 599 }, description: 'Получите завриды для покупок' },
    { name: 'С донатом', prices: { x1: 109, x3: 289, x5: 399, x10: 549 }, description: 'Шанс получить привилегию' },
    { name: 'С титулами', prices: { x1: 99, x3: 109, x5: 119, x10: 159 }, description: 'Уникальные титулы для профиля' },
  ];

  const zavrides = [
    { amount: 100, price: 79 },
    { amount: 250, price: 139 },
    { amount: 500, price: 249 },
    { amount: 1000, price: 489 },
    { amount: 2000, price: 699 },
    { amount: 5000, price: 1289 },
  ];

  const faqItems = [
    { q: 'Как начать играть на сервере?', a: 'Подключитесь к серверу через IP адрес в Minecraft и следуйте инструкциям на спавне.' },
    { q: 'Как получить привилегию?', a: 'Приобретите привилегию в разделе Магазин → Привилегии. После оплаты она активируется автоматически.' },
    { q: 'Что такое завриды?', a: 'Завриды - это внутриигровая валюта сервера, которую можно использовать для покупок в игре.' },
    { q: 'Когда следующий вайп?', a: 'Следующий вайп Лайт Анархий запланирован на 20.11.' },
  ];

  const handleLogin = () => {
    setUser({
      username: 'moondar1nka',
      role: 'Админ',
      server: 'LiteTest #1',
    });
  };

  const handleLogout = () => {
    setUser(null);
    if (activeSection === 'dev') setActiveSection('home');
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <div className="space-y-8">
          <div className="text-center py-20">
            <h1 className="text-6xl font-bold shimmer-text mb-4">
              {greeting}, {user ? user.username : 'гость'}
            </h1>
            <p className="text-muted-foreground text-lg">Добро пожаловать в ZWorld</p>
          </div>
        </div>
      );
    }

    if (activeSection === 'news') {
      return (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold shimmer-text">Новости</h2>
          <Card className="p-6 gradient-border bg-card">
            <div className="flex items-start gap-4">
              <Icon name="Zap" className="text-white mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Вайп Лайт Анархий - 20.11</h3>
                <p className="text-muted-foreground">
                  Готовьтесь к новому сезону! Все базы будут сброшены, начните заново свой путь к господству.
                </p>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    if (activeSection === 'shop') {
      return (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold shimmer-text">Магазин</h2>
          
          <div className="flex gap-2 flex-wrap">
            {shopCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={shopCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setShopCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopCategory === 'popular' && popularItems.map((item, idx) => (
              <Card key={idx} className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <p className="text-2xl font-bold">{item.price}₽</p>
              </Card>
            ))}

            {shopCategory === 'privileges' && privileges.map((priv, idx) => (
              <Card
                key={idx}
                className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer"
                onClick={() => setSelectedItem({ type: 'privilege', ...priv })}
              >
                <h3 className="font-semibold text-xl mb-2">{priv.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>1 мес: {priv.prices.month1}₽</p>
                  <p>3 мес: {priv.prices.month3}₽</p>
                  <p className="font-bold text-foreground">Навсегда: {priv.prices.forever}₽</p>
                </div>
              </Card>
            ))}

            {shopCategory === 'cases' && cases.map((caseItem, idx) => (
              <Card
                key={idx}
                className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer"
                onClick={() => setSelectedItem({ type: 'case', ...caseItem })}
              >
                <h3 className="font-semibold text-xl mb-2">Кейс {caseItem.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>x1: {caseItem.prices.x1}₽</p>
                  <p>x3: {caseItem.prices.x3}₽</p>
                  <p>x5: {caseItem.prices.x5}₽</p>
                  <p className="font-bold text-foreground">x10: {caseItem.prices.x10}₽</p>
                </div>
              </Card>
            ))}

            {shopCategory === 'zavrides' && zavrides.map((zav, idx) => (
              <Card key={idx} className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer">
                <h3 className="font-semibold text-xl mb-2">{zav.amount} завридов</h3>
                <p className="text-2xl font-bold">{zav.price}₽</p>
              </Card>
            ))}

            {shopCategory === 'boxes' && (
              <Card className="p-6 gradient-border bg-card col-span-full text-center">
                <Icon name="Package" className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-xl text-muted-foreground">В разработке</p>
              </Card>
            )}

            {shopCategory === 'other' && (
              <>
                <Card className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer">
                  <h3 className="font-semibold text-xl mb-2">Разбан</h3>
                  <p className="text-2xl font-bold">289₽</p>
                </Card>
                <Card className="p-6 gradient-border bg-card hover:bg-accent transition-colors cursor-pointer">
                  <h3 className="font-semibold text-xl mb-2">Размут</h3>
                  <p className="text-2xl font-bold">99₽</p>
                </Card>
              </>
            )}
          </div>
        </div>
      );
    }

    if (activeSection === 'about') {
      return (
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-4xl font-bold shimmer-text">О ZWorld</h2>
          <Card className="p-8 gradient-border bg-card">
            <p className="text-lg leading-relaxed mb-6">
              Добро пожаловать в <span className="font-bold">ZWorld</span> — песочницу абсолютной свободы.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Стройте неприступные базы или скрытые подземные бункеры. Объединяйтесь в могучие кланы или станьте легендарной одиночкой. 
              Рейдите, воруйте, ведите торговлю, зарабатывайте, врывайтесь в ТОПы!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Помните: здесь вам не рады. Здесь вас ждут. Сможете ли вы оставить свой след в истории ZWorld... 
              или он будет стёрт в следующую же ночь?
            </p>
          </Card>
        </div>
      );
    }

    if (activeSection === 'faq') {
      return (
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-4xl font-bold shimmer-text">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 gradient-border bg-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    }

    if (activeSection === 'dev') {
      if (!user) {
        return (
          <div className="text-center py-20">
            <Icon name="Lock" className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h2 className="text-2xl font-bold mb-4">Доступ ограничен</h2>
            <p className="text-muted-foreground mb-6">Войдите в аккаунт для доступа к разделу</p>
            <Button onClick={handleLogin}>Войти</Button>
          </div>
        );
      }

      return (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold shimmer-text">Среда разработки</h2>
          <div className="grid gap-6">
            <Card className="p-6 gradient-border bg-card">
              <h3 className="text-xl font-semibold mb-4">BetterTalismans</h3>
              <div className="space-y-2">
                <p className="font-semibold">Талисманы:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">обычный</Badge>
                  <Badge variant="secondary">редкий</Badge>
                  <Badge variant="secondary">мифический</Badge>
                  <Badge variant="secondary">легендарный</Badge>
                  <Badge className="bg-green-600">Талисман INFINITY</Badge>
                  <Badge>Талисман RIVAL</Badge>
                  <Badge className="bg-red-600">Талисман KRIAL</Badge>
                  <Badge className="bg-purple-600">Талисман мечты</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-border bg-card">
              <h3 className="text-xl font-semibold mb-4">BetterStructure</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">Обычные данжы:</p>
                  <p className="text-sm text-muted-foreground">Руины (песочные, каменные, дефолт), обычный лут</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Редкие данжы:</p>
                  <p className="text-sm text-muted-foreground">Подземелья и храмы, редкий лут</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Уникальные данжы:</p>
                  <p className="text-sm text-muted-foreground">Воздушный шар, гробница, уникальный лут</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Кастомные взрывчатки</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Динамит (обычный)</div>
                <div>Динамит А (радиус ×3)</div>
                <div>Динамит Б (радиус ×10)</div>
                <div>Динамит С (взрывает динамит)</div>
                <div>Взрывчатка А1 (взрывает обсидиан)</div>
                <div>Взрывчатка Б1 (работает в воде)</div>
              </div>
            </Card>
          </div>
        </div>
      );
    }

    if (activeSection === 'account') {
      if (!user) {
        return (
          <div className="text-center py-20">
            <Icon name="UserCircle" className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h2 className="text-2xl font-bold mb-4">Вход в аккаунт</h2>
            <p className="text-muted-foreground mb-6">Войдите для доступа к личному кабинету</p>
            <Button onClick={handleLogin}>Войти</Button>
          </div>
        );
      }

      return (
        <div className="space-y-6 max-w-2xl">
          <h2 className="text-4xl font-bold shimmer-text">Аккаунт</h2>
          <Card className="p-8 gradient-border bg-card">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Никнейм</p>
                <p className="text-2xl font-bold">{user.username}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Должность</p>
                <Badge className="text-base">{user.role}</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Режим</p>
                <p className="text-lg">{user.server}</p>
              </div>
              <div className="pt-4 border-t border-border space-y-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://t.me/AductProduct_bot', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Тех. поддержка
                </Button>
                <Button variant="destructive" className="w-full" onClick={handleLogout}>
                  <Icon name="LogOut" className="mr-2" size={20} />
                  Выйти
                </Button>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    if (activeSection === 'site-info') {
      return (
        <div className="space-y-6 max-w-2xl">
          <h2 className="text-4xl font-bold shimmer-text">О сайте</h2>
          <Card className="p-8 gradient-border bg-card text-center">
            <div className="space-y-2 text-muted-foreground">
              <p>Web by <span className="font-semibold text-foreground">CrystalXteam</span></p>
              <p className="text-2xl font-bold text-foreground">ZWorld 2025</p>
              <p>AductProduct · LI</p>
              <p className="text-sm">Web version 0.1</p>
            </div>
          </Card>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className={`fixed top-0 left-0 h-full bg-sidebar-background border-r border-sidebar-border z-50 transition-all duration-300 ${
          menuOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold shimmer-text">ZWorld</h2>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
              <Icon name="X" size={24} />
            </Button>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              if (item.protected && !user) return null;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'hover:bg-sidebar-accent/50'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className={`transition-all duration-300 ${menuOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="border-b border-border bg-card/50 backdrop-blur">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:bg-accent"
            >
              <Icon name="Menu" size={24} />
            </Button>
            <h1 className="text-2xl font-bold shimmer-text">ZWorld</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">{renderContent()}</main>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedItem?.type === 'privilege' ? `Привилегия ${selectedItem?.name}` : `Кейс ${selectedItem?.name}`}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Выберите вариант:</h3>
              {selectedItem?.type === 'privilege' && (
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between">
                    <span>1 месяц</span>
                    <span className="font-bold">{selectedItem.prices.month1}₽</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>3 месяца</span>
                    <span className="font-bold">{selectedItem.prices.month3}₽</span>
                  </Button>
                  <Button variant="default" className="w-full justify-between">
                    <span>Навсегда</span>
                    <span className="font-bold">{selectedItem.prices.forever}₽</span>
                  </Button>
                </div>
              )}
              {selectedItem?.type === 'case' && (
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between">
                    <span>x1</span>
                    <span className="font-bold">{selectedItem.prices.x1}₽</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>x3</span>
                    <span className="font-bold">{selectedItem.prices.x3}₽</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>x5</span>
                    <span className="font-bold">{selectedItem.prices.x5}₽</span>
                  </Button>
                  <Button variant="default" className="w-full justify-between">
                    <span>x10</span>
                    <span className="font-bold">{selectedItem.prices.x10}₽</span>
                  </Button>
                </div>
              )}
              <Button className="w-full mt-4">
                <Icon name="CreditCard" className="mr-2" size={20} />
                Перейти к оплате
              </Button>
            </div>
            
            <div className="border-l border-border pl-6">
              <h3 className="font-semibold mb-4">Описание:</h3>
              <p className="text-muted-foreground">{selectedItem?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
