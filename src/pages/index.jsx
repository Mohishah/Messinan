import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";
import AboutTwoSection from "@components/sections/AboutTwo";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const Home1 = ({hero,partner,about,about2,test,team,service,post}) => {
  return (
    <Layouts transparent>
      <HeroOneSection hero={hero} partner={partner} />
      <AboutSection about={about} />
      <ServicesSection service={service} />
      <AboutTwoSection about2={about2} />
      <TeamSection team={team} />
      <TestimonialSlider test={test} />
      <LatestPostsSection post={post} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/hero")
  const hero = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/partner")
  const partner = await res1.json()
  const res2 = await fetch("http://127.0.0.1:8000/aboutone")
  const about = await res2.json()
  const res3 = await fetch("http://127.0.0.1:8000/abouttwo")
  const about2 = await res3.json()
  const res4 = await fetch("http://127.0.0.1:8000/test")
  const test = await res4.json()
  const res5 = await fetch("http://127.0.0.1:8000/team/")
  const team = await res5.json()
  const res6 = await fetch("http://127.0.0.1:8000/service/")
  const service = await res6.json()
  const res7 = await fetch("http://127.0.0.1:8000/blog/")
  const post = await res7.json()
  return {
      props : {
        hero : hero,
        partner : partner,
        about : about,
        about2 : about2,
        test : test,
        team : team,
        service : service,
        post : post,
      },
      revalidate : 10
  }
}