import React from "react";
import Footer from "@/components/compnent/Footer/Footer";
import GridCards from "@/components/compnent/GridCards/GridCards";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import ContactHero from "@/components/compnent/Contact/sector private/ContactHero";
import img1 from "./01.webp";
import event01 from "@/assets/Resources/Events/01.webp";
import event02 from "@/assets/Resources/Events/02.webp";
import event03 from "@/assets/Resources/Events/03.webp";
import event04 from "@/assets/Resources/Events/04.webp";
import event05 from "@/assets/Resources/Events/05.webp";
import event06 from "@/assets/Resources/Events/06.webp";
import presidentMeetingImg from "@/assets/Resources/Events/president_meeting_img.webp";
import sr3Image from "@/assets/Resources/Events/sr_3_image.webp";
import EventData from "./eventData.json";

const images = {
  "01.webp": event01,
  "02.webp": event02,
  "03.webp": event03,
  "04.webp": event04,
  "05.webp": event05,
  "06.webp": event06,
  "president_meeting_img.webp": presidentMeetingImg,
  "sr_3_image.webp": sr3Image,
};

const Events = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  const cardData = EventData.Events.map((event) => ({
    ...event,
    image: images[event.image],
  }));

  return (
    <>
      <ContactHero img={img1} title={"Events And Updates"} />
      <div>
        <GridCards cardData={cardData} />
      </div>
      <ScoreCard
        title="Manufacturing and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      />
      <Footer />
    </>
  );
};

export default Events;
