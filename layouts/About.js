import aboutData from '../content/about.json';
import Image from 'next/image';

const About = () => {
  const { title, image, education, experience, content } = aboutData;

  return (
    <section className="section mt-16">
      <div className="container text-center">
{/*    
        <div className="mb-8">
            <Image
              src={''}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority
            />
          </div> */}
         
        <h1 className="text-left lg:text-[55px] mt-12">{title}</h1>

        <div className="content text-left mt-4">
          <p>{content}</p>
        </div>

        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="lg:col-6">
            <div className="">
              <h2 className="section-title mb-12">{education.title}</h2>
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-7 md:col-6" key={index}>
                    <h4 className="text-base lg:text-[25px]">
                      {degree.university}
                    </h4>
                    <p className="mt-2">{degree.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience mt-10 lg:mt-0 lg:col-6">
            <div className="">
              <h2 className="section-title mb-12">{experience.title}</h2>
              <ul className="row">
                {experience.list.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
