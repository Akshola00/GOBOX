import MyCarouselEvents from "@/components/CarouselEvents";
import EploreEvent from "@/components/EploreEvent";
import EventcardHorizontal from "@/components/EventcardHorizontal";
import MoreEventButton from "@/components/MoreEventButton";
import MyAvatarGroup from "@/components/MyAvatarGroup";
import MyPastEvents from "@/components/MyPastEvents";
import Myserach from "@/components/Myserach";
import Nav from "@/components/Nav";
import PopularEvents from "@/components/PopularEvents";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Nav />
    <EploreEvent />
    <br />
    <Myserach />
    <PopularEvents /> 
    <MyPastEvents />
    <PopularEvents />
    <MoreEventButton /> 
    <br />
    </>
  );
}
