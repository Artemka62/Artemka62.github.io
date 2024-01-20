import { useParams } from 'react-router-dom';
import { FooterComponent } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';
import { useDocumentTitle } from '../../hooks/use-document-title';
import { useAppDispatch, useAppSelector} from '../../hooks/use-store';
import { fetchOfferAction } from '../../services/thunk/fetch-offer';
import { useEffect } from 'react';
import { CardOfferProductComponent } from '../../components/card-offer-product/card-offer-product';
import { NavigationInPageComponent } from '../../components/navigatiot-in-page/navigation-in-page';
import { fetchSimilarOffersAction } from '../../services/thunk/fetch-similar-offers';
import { SimilarCardsListComponent } from '../../components/similar-cards-list/similar-cards-list';

type ProductProps = {
  title: string;
}

function ProductPage ({title}: ProductProps) {
  const {id} = useParams<string>();
  const dispatch = useAppDispatch();
  const stateSimilarOffers = useAppSelector((state) => state.similarOffers.similarOffers);

  useEffect(() => {

    if (id) {
      dispatch(fetchOfferAction(+id));
      dispatch(fetchSimilarOffersAction(+id));
    }
  },[]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(+id));
    }
  },[id]);

  useDocumentTitle(title);

  return(
    <div className="wrapper">
      <HeaderComponent/>
      <main>
        <div className="page-content">

          <NavigationInPageComponent/>

          <div className="page-content__section">

            <CardOfferProductComponent/>

          </div>
          <div className="page-content__section">

            <SimilarCardsListComponent offers={stateSimilarOffers}/>

          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button className="btn" type="button">
                    Оставить свой отзыв
                  </button>
                </div>
                <ul className="review-block__list">
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Сергей Горский</p>
                      <time className="review-card__data" dateTime="2022-04-13">
                        13 апреля
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 5</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">
                          Надёжная, хорошо лежит в руке, необычно выглядит
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">
                          Тяжеловата, сложно найти плёнку
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                          Раз в полгода достаю из-под стекла, стираю пыль, заряжаю —
                          работает как часы. Ни у кого из знакомых такой нет, все
                          завидуют) Теперь это жемчужина моей коллекции, однозначно
                          стоит своих денег!
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Пётр Матросов</p>
                      <time className="review-card__data" dateTime="2022-03-02">
                        2 марта
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 1</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">Хорошее пресс-папье</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">
                          Через 3 дня развалилась на куски
                        </p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                          При попытке вставить плёнку сломался механизм открытия
                          отсека, пришлось заклеить его изолентой. Начал настраивать
                          фокус&nbsp;— линза провалилась внутрь корпуса. Пока
                          доставал — отломилось несколько лепестков диафрагмы. От
                          злости стукнул камеру об стол, и рукоятка треснула
                          пополам. Склеил всё суперклеем, теперь прижимаю ей бумагу.
                          НЕ РЕКОМЕНДУЮ!!!
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">Татьяна Кузнецова </p>
                      <time className="review-card__data" dateTime="2021-12-30">
                        30 декабря
                      </time>
                    </div>
                    <div className="rate review-card__rate">
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-full-star" />
                      </svg>
                      <svg width={17} height={16} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <p className="visually-hidden">Оценка: 4</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">Редкая</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">Высокая цена</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">
                          Дорого для портативной видеокамеры, но в моей коллекции
                          как раз не хватало такого экземпляра. Следов использования
                          нет, доставили в заводской упаковке, выглядит шикарно!
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="review-block__buttons">
                  <button className="btn btn--purple" type="button">
                    Показать больше отзывов
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
      <FooterComponent/>
    </div>

  );
}

export {ProductPage};
