# Bookshop

## ЗАДАНИЕ
**В рамках проекта вам необходимо:**

- Сверстать главную страницу интернет-магазина Bookshop. Макет находится здесь.
- Подключить Google Books API так, чтобы данные о книгах подгружались с сервера.
- Подключить созданный вами ранее слайдер.
- Поработать над правильной организацией проекта:
  - реализовать модульную структуру;
  - подключить Webpack;
  - настроить сборку с минификацией.
- Применить пройденные вами ранее инструменты оптимизации.

![image](https://user-images.githubusercontent.com/127382298/235658026-710e0cb1-98f7-47b8-be03-388532a1c064.png)

Теперь распишем требования более подробно.

## ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ
В рамках проекта нужно создать одну (главную) страницу книжного магазина. На странице должен быть следующий набор элементов:
### Шапка сайта
Шапка содержит логотип, навигацию и набор кнопок. Ссылки в меню можно оставить пустыми, так как реализация остальных страниц сайта в проекте не предусмотрена.
![image](https://user-images.githubusercontent.com/127382298/235658595-b0ddacf1-6b45-469a-b0a4-ef6a6afaaaf9.png)
Кнопки авторизации, поиска и корзины неактивны. Однако при добавлении товара в корзину у иконки должен появиться бейджик с количеством товара в корзине.
![image](https://user-images.githubusercontent.com/127382298/235658662-0d66548e-d709-43b7-b539-0c06b525916c.png)
При прокрутке сайта шапка должна оставаться закреплённой в верхней части экрана.
### Слайдер
Под шапкой сайта располагается слайдер. Чтобы сократить время разработки, рекомендуем вам использовать слайдер, которые вы создали при прохождении модулей по JavaScript.

Слайдер автоматически пролистывает изображения каждые 5 секунд, а после последнего изображения вновь переключается на первое. Перелистывать изображения можно также с помощью точек под слайдером.
![image](https://user-images.githubusercontent.com/127382298/235659076-83c467c8-3315-4791-837d-f6e5eed32a33.png)
Справа от слайдера располагаются цветные блоки. Их нужно сверстать как ссылки, адреса ссылок можно оставить пустыми.
### Список категорий и список книг
Под слайдером в левой части экрана располагается список категорий. Активная категория должна быть выделена визуально.
![image](https://user-images.githubusercontent.com/127382298/235659413-02e94f94-2cd3-4d0e-846a-6f44158e9389.png)
По умолчанию в качестве активной выбрана первая категория в списке. Клик на неактивную категорию делает её активной, и список книг перезагружается, чтобы отобразить книги из этой категории.

Список книг подгружается из Google Books API в соответствии с выбранной категорией. Для списка книг необходимо реализовать ленивую загрузку: сначала подгружаются первые 6 книг, по клику на кнопку «Load more» — ещё 6, и так далее.
### Карточка книги
**В карточке книги должна быть отображена следующая информация:**

1) Обложка. Если API не возвращает обложку, подставить вместо неё любую картинку-плейсхолдер.
2) Автор. Если авторов несколько, перечислить их через запятую.
3) Заголовок.
4) Рейтинг: от 1 до 5 звёздочек плюс общее количество отзывов. Если в данных о книге нет рейтинга, не показывать эту строчку.
5) Описание. Если текст в описании занимает больше 3-х строк, его нужно обрезать и добавить в конце многоточие.
6) Цена с указанием валюты. Если в данных о книге нет цены, не показывать эту строчку.

Ниже приведён пример карточки товара, а также названия свойств в объекте книги, которые содержат необходимую информацию:
![image](https://user-images.githubusercontent.com/127382298/235660051-f1585257-2b51-4a79-9cb0-53126b1db51f.png)
Под описанием каждой книги должна быть кнопка «Buy now». При клике на неё товар добавляется в корзину, а кнопка меняет внешний вид (см. скриншот выше). При повторном нажатии на кнопку товар убирается из корзины.

Информация о книгах, добавленных в корзину, должна сохраняться в localStorage.

## ОПИСАНИЕ GOOGLE BOOKS API

Подробное описание вы найдёте в документации, однако разберём пару основных моментов.

Для отправки запросов вам необходим аккаунт Google, а также ключ авторизации. Его можно сгенерировать в Google Console, подробная инструкция есть в документации.

Запрос выглядит следующим образом:

```
https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<ваш ключ API>&printType=books&startIndex=0&maxResults=6&langRestrict=en
```

## КРИТЕРИИ ОЦЕНКИ 

**Функциональные требования:**

- Требования выполнены, функционал приложения полностью соответствует требованиям ТЗ — 3 балла;
- Требования в целом выполнены, но есть замечания — 2 балла;
- Требования выполнены частично или есть критичные ошибки в работе — 1 балл;
- Требования не выполнены — 0 баллов.

**Качество кода:**

- Замечаний к коду проекта нет — 3 балла;
- Код решает поставленную задачу, но есть небольшие замечания к оптимальности или производительности — 2 балла;
- Есть серьёзные замечания к качеству кода — 1 балл;
- Код не решает поставленную задачу — 0 баллов.

**Требования к вёрстке:**

- Вёрстка соответствует макету, замечаний нет — 2 балла;
- Вёрстка в целом соответствует макету, но есть критичные ошибки, например, не хватает каких-то элементов или отсутствует мобильная версия — 1 балл;
- В вёрстке много ошибок или она не соответствует макету — 0 баллов.

**Настройка Webpack:**

- Webpack настроен корректно, сборка завершается успешно — 2 балла;
- Webpack настроен, но сборка не соответствует требованиям, например, нет минификации — 1 балл;
- Webpack не настроен или сборка не завершается из-за ошибок — 0 баллов.

**Использование дополнительных инструментов оптимизации разработки:**

- Использовано не менее 2-х инструментов оптимизации, инструменты работают корректно — 2 балла;
- Используется только 1 инструмент оптимизации или используются 2 инструмента, но в них допущены ошибки — 1 балл;
- Инструменты оптимизации не использованы или использованы неверно — 0 баллов.