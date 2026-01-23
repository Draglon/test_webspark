"use client";

// import { Text, Title } from "@/views/shared/antd/Typography";
import GuestLayout from "@/views/layouts/GuestLayout";
import Gallery from "@/views/shared/Gallery";

const Home = () => {
  return (
    <GuestLayout>
      <div className="page__container">
        <Gallery />
      </div>
    </GuestLayout>
  );
};

export default Home;
