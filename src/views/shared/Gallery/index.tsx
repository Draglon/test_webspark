"use client";
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslations } from "next-intl";

import image_1_1xSRC from "@/assets/images/tiles/image_1@1x.jpg";

import Button from "@/views/shared/antd/Button";
import GalleryItem from "@/views/shared/GalleryItem";

const Gallery = () => {
  const t = useTranslations("shared");
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className={clsx("gallery", {
      "gallery--list": activeTab === "list",
      "gallery--tiles": activeTab === "tiles",
    })}>
      <div className="gallery__tabs">
        <div className={clsx("gallery__tab gallery__tab--tiles", {
          "gallery__tab--active": activeTab === "tiles"
        })} role="button" onClick={() => setActiveTab("tiles")}>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className={clsx("gallery__tab gallery__tab--list", {
          "gallery__tab--active": activeTab === "list"
        })} role="button"  onClick={() => setActiveTab("list")}>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <div className="gallery__content">
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
        <GalleryItem src={image_1_1xSRC} />
      </div>

      <div className="gallery__buttons">
        <Button className="btn-load-more" type="default" color="default" variant="outlined">
          {t("loadMore")}
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
