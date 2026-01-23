"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logoSRC from "@/assets/images/logo.svg";
import { Title } from "@/views/shared/antd/Typography";
import Button from "@/views/shared/antd/Button";
// import ThemeSwitcher from "@/views/shared/ThemeSwitcher";
// import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";

const GuestHeader = () => {
  const t = useTranslations("shared");

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo">
          <Image className="logo__img" src={logoSRC} alt="Logo" width="138" height="138" />
        </div>
        <div className="header__content">
          <div className="d-flex">
            <Title className="header__title" level={1}>monblanproject</Title>
            <Button className="btn-start-on ml-16" variant="outlined">
              {t("startOn", { date: "17-02-2016" })}
            </Button>
          </div>
          <div className="followers">
            <div className="followers__item">
              <span className="followers__value">870</span>
              <span className="followers__text"> {t("posts")}</span>
            </div>
            <div className="followers__item">
              <span className="followers__value">11,787</span>
              <span className="followers__text"> {t("followers")}</span>
            </div>
            <div className="followers__item">
              <span className="followers__value">112</span>
              <span className="followers__text"> {t("following")}</span>
            </div>
          </div>
          {/* <div className="period">
            <label className="period__label">Date:</label>
            <div className="period__field">
              <input className="period__input" type="date" id="period" name="period" value="All time">
            </div>
            <div className="period__field">
              <input className="period__input" type="date" id="period" name="period" value="All time">
            </div>
          </div> */}
        </div>
        {/* Needless for this test task */}
        {/* <div className="header__menu">
          <LocalSwitcherSelect />
          <ThemeSwitcher />
        </div> */}
      </div>
    </header>
  );
};

export default GuestHeader;
