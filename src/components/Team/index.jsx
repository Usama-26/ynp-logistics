import { Splide } from "@splidejs/react-splide";
import { Label } from "../Label";
import TeamProfileCard from "../TeamProfileCard";
import { SplideTrack } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";

export default function Team() {
  const teamMembers = [
    {
      image: "team-1",
      name: "DEVI PADAYACHY",
      designation: "Founder & CEO",
      phoneNo: "+27 76 141 3181",
      email: "devi@yplogistics.co.za",
    },
    {
      image: "team-2",
      name: "YASHIKA PADAYACHY",
      designation: "Integral Member",
      phoneNo: "+27 76 141 3181",
      email: " yashika@yplogistics.co.za",
    },
    {
      image: "team-3",
      name: "PRAVESH PADAYACHY",
      designation: "Business Development Manger",
      phoneNo: "+27 82 074 6787",
      email: " pravesh@yplogistics.co.za",
    },
    {
      image: "team-4",
      name: "SEELEN PADAYACHY",
      designation: "Contract Manager",
      phoneNo: "+27 82 820 8577",
      email: " seelen@yplogistics.co.za",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <Label>Management Team</Label>
          <h1 className="lg:text-4xl text-2xl font-semibold text-center">
            Meet Expert Team
          </h1>
        </div>
        <div className="py-20 flex justify-center">
          <TeamProfileCard
            image={teamMembers[0].image}
            designation={teamMembers[0].designation}
            email={teamMembers[0].email}
            name={teamMembers[0].name}
            phone={teamMembers[0].phoneNo}
            key={0}
          />
        </div>
        <div className=" max-w-5xl mx-auto py-10 flex lg:flex-row flex-col gap-8 justify-center">
          <Splide
            hasTrack={false}
            options={{
              perPage: 3,
              gap: "32px",
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <TeamProfileCard
                  image={teamMembers[1].image}
                  designation={teamMembers[1].designation}
                  email={teamMembers[1].email}
                  name={teamMembers[1].name}
                  phone={teamMembers[1].phoneNo}
                  key={1}
                />
              </SplideSlide>
              <SplideSlide>
                <TeamProfileCard
                  image={teamMembers[2].image}
                  designation={teamMembers[2].designation}
                  email={teamMembers[2].email}
                  name={teamMembers[2].name}
                  phone={teamMembers[2].phoneNo}
                  key={2}
                />
              </SplideSlide>
              <SplideSlide>
                <TeamProfileCard
                  image={teamMembers[3].image}
                  designation={teamMembers[3].designation}
                  email={teamMembers[3].email}
                  name={teamMembers[3].name}
                  phone={teamMembers[3].phoneNo}
                  key={3}
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </section>
  );
}
