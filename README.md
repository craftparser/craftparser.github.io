# 📋 Чеклист для сайта

1. Базовая конфигурация
 - [x] astro.config.mjs с site (базовый URL)
 - [ ] Интеграции: @astrojs/sitemap, @astrojs/mdx (если нужны MDX), @astrojs/rss (если нужен RSS)
 - [x] package.json с корректными скриптами (dev, build, preview)

2. Мета-теги (BaseHead.astro)
 - [ ] <meta charset="utf-8">
 - [ ] <meta name="viewport">
 - [ ] <title>{title}</title>
 - [ ] <meta name="description" content={description}>
 - [ ] <meta name="title" content={title}>
 - [ ] <link rel="canonical" href={canonicalURL}>
 - [ ] <link rel="sitemap" href="/sitemap-index.xml">
 - [ ] <link rel="alternate" type="application/rss+xml"> (если есть RSS)
 - [ ] Open Graph: og:title, og:description, og:url, og:type, og:image
 - [ ] <meta name="generator" content={Astro.generator}>
 - [ ] Верификация поисковиков (Yandex, Google) — при необходимости
 - [ ] <meta name="robots" content="..."> — при необходимости

3. Структура контента
 - [x] src/content.config.ts с коллекциями (posts, docs и т.д.)
 - [x] Схема для каждой коллекции (title, description, pubDate, heroImage, tags и др.)
 - [ ] Контент в src/content/{collection}/

4. Страницы
 - [ ] Главная (index.astro) с уникальным h1
 - [ ] Динамические роуты для постов (/posts/[...slug].astro)
 - [ ] Динамические роуты для документов (/docs/[...slug].astro)
 - [ ] Страница контактов (/contacts.astro)
 - [ ] Страница поиска (/search.astro) — опционально

5. JSON-LD (структурированные данные)
 - [ ] BreadcrumbList для навигации
 - [ ] Article для постов (с headline, image, datePublished, author)
 - [ ] <script type="application/ld+json"> в <head>

6. Технические файлы
 - [ ] robots.txt (API route в src/pages/robots.txt.ts)
 - [ ] rss.xml (если нужен RSS)
 - [ ] favicon.ico в public/
 - [ ] Файлы верификации (Yandex, Google) в public/

7. Компоненты
 - [ ] BaseHead.astro — общие мета-теги
 - [ ] Header.astro — навигация
 - [ ] Footer.astro — подвал с ссылками
 - [ ] ListPosts.astro — список постов — опционально
 - [ ] Metrika.astro — счётчики аналитики — опционально

8. Константы (src/consts.ts)
 - [ ] SITE_NAME, SITE_TITLE, SITE_DESCRIPTION
 - [ ] AUTHOR_NAME
 - [ ] Ссылки: LINK_DOCS, LINK_CONTACTS, TELEGRAM_CHANNEL
 - [ ] HOME_H1, DOCS_H1 — заголовки страниц

9. Изображения и ресурсы
 - [ ] public/res/ — изображения, логотипы
 - [ ] public/fonts/ — шрифты
 - [ ] Оптимизация изображений через astro:assets (<Image />)
 - [ ] loading="lazy" для изображений ниже первого экрана

10. Стили
 - [ ] Глобальные стили (src/styles/global.css)
 - [ ] Tailwind CSS (если используется)
 - [ ] Кастомные стили (шрифты, типографика)

11. Навигация и UX
 - [ ] Хлебные крошки (JSON-LD + визуально)
 - [ ] Кнопки «Назад» / «Вперёд» для документов
 - [ ] «Читайте также» для постов
 - [ ] Sticky-навигация для оглавления статьи

12. SEO-оптимизация
 - [ ] Уникальные title и description для каждой страницы
 - [ ] ЧПУ (человеко-понятные URL)
 - [ ] Sitemap генерируется автоматически
 - [ ] robots.txt указывает путь до sitemap

13. Аналитика
 - [ ] Яндекс.Метрика / Google Analytics
 - [ ] Код счётчиков в отдельном компоненте (Metrika.astro)

14. Перед деплоем
 - [ ] Проверить site в astro.config.mjs
 - [ ] Сгенерировать билд (npm run build)
 - [ ] Проверить наличие dist/sitemap-index.xml
 - [ ] Проверить корректность canonical URL
 - [ ] Протестировать RSS-ленту (если есть)

