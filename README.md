# 📋 Чеклист для сайта

 - [ ] Open Graph: og:title, og:description, og:url, og:type, og:image
 - [ ] Верификация поисковиков (Yandex, Google) — при необходимости

5. JSON-LD (структурированные данные)
 - [ ] BreadcrumbList для навигации
 - [ ] Article для постов (с headline, image, datePublished, author)
 - [ ] <script type="application/ld+json"> в <head>

6. Технические файлы
 - [ ] Файлы верификации (Yandex, Google) в public/

7. Компоненты
 - [ ] Metrika.astro — счётчики аналитики — опционально

9. Изображения и ресурсы
 - [ ] public/res/ — изображения, логотипы
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
