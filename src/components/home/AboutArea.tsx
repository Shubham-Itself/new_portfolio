 
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 2,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 20,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Client Satisfactions',
    count: 90,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>I am Shubham Kumar, Passionate Software Engineer with hands-on experience in building scalable and high-performance web and mobile applications. Skilled in JavaScript, TypeScript, React.js, Next.js, AngularJS, Node.js, Express.js, and MongoDB, with a strong emphasis on crafting intuitive and responsive user interfaces. Also proficient in Flutter for developing cross-platform mobile apps. Adept at solving complex problems and collaborating in agile environments to deliver impactful solutions. Always eager to learn, adapt, and contribute to innovative projects that drive digital transformation and elevate user experiences.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.title === "Client Satisfactions" ? "percent" : "plus"}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
