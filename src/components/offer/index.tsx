import Magnet from "@/components/common/magnet";
import { service } from "@/constants";
import ServiceCard from "../service/ServiceCard";
const Offer = () => {
  return (
    <section className="relative lg:h-screen">
      <div className=" bg-gray-100/70 h-[300px] w-full absolute -z-40"></div>
      <Magnet>
        <div className="absolute top-[50%] -z-20 left-9 opacity-70 transform -translate-x-1/2 -translate-y-4/5 w-[300px] h-[300px] bg-radial-gradient-sphere rounded-full animate-up-and-down">
          <div className="absolute bottom-[2.5%] left-[5%] w-[90%] h-full rounded-full bg-radial-gradient-before opacity-60 blur-[5px]"></div>
          <div className="absolute top-[5%] left-[10%] w-full h-full rounded-full bg-radial-gradient-after transform translate-x-[-80px] translate-y-[-90px] skew-x-[-20deg] blur-[15px]"></div>
        </div>
      </Magnet>
      <div className="max-w-screen-xl flex flex-col mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div>
            <h6 className="font-semibold text-sm text-gray-700">What We Do</h6>
            <h4 className="mt-3 capitalize text-gray-800  font-bold text-2xl">
              We Offer Smarter & More Affordable Access To Construction Services
              and Equipment. We Are Top Support.
            </h4>
          </div>
          <div className="text-gray-800  leading-7 text-sm">
            <p>
              At Top Support, we are committed to providing a wide range of
              services designed to meet your unique needs. Our expert team is
              dedicated to delivering excellence in every aspect of what we do.
            </p>
            <p>
              We are your partners in achieving your goals. Contact us today to
              learn more about how we can assist you in realizing your vision.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10 lg:min-h-[300px]">
          {service.map((service) => (
            <ServiceCard
              path={service.path}
              title={service.title}
              desc={service.desc}
              Icon={service.icon}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
