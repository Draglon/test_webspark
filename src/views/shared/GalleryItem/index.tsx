"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

type GalleryItemProps = {
  src: any;
}

const GalleryItem = ({ src }: GalleryItemProps) => {
  const t = useTranslations("shared");

  return (
    <div className="gallery__item">
      <picture className="gallery__item-picture">
        <Image
          className="gallery__item-image"
          src={src}
          alt="Image 1"
          width="203"
          height="203"
        />
      </picture>
      <div className="gallery__item-content">
        <div className="gallery__item-list">
          <div className="gallery__item-label">{t("today")}</div>
          <div className="gallery__item-description">
            <div className="gallery__item-icon">
              <i className="icon icon-heart" />
              <span className="gallery__item-text">128</span>
            </div>
            <div className="gallery__item-icon">
              <i className="icon icon-comment" />
              <span className="gallery__item-text">31</span>
            </div>
          </div>
        </div>
        <div className="gallery__item-list">
          <div className="gallery__item-label">9-08-2016</div>
          <div className="gallery__item-description">
            <div className="gallery__item-icon">
              <i className="icon icon-heart" />
              <span className="gallery__item-text">67</span>
            </div>
            <div className="gallery__item-icon">
              <i className="icon icon-comment" />
              <span className="gallery__item-text">22</span>
            </div>
          </div>
        </div>
        <div className="gallery__item-list">
          <div className="gallery__item-text">{t("imageUpload")}</div>
          <div className="gallery__item-date">11-04-2016</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
