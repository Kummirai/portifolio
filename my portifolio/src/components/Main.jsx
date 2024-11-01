const Main = () => {
  return (
    <main>
      <section className="main">
        {/* <p className="greeting">Hello Mate</p> */}
        <section className="person">
          <img src="milton.jpg" alt="" />
        </section>
        <h2 className="developer-name">Hi there,</h2>
        <p className="title">
        I &apos;m a <span>Web Developer</span>
        </p>
        <p className="description">
          Creative and dedicated skilled in HTML, CSS, JavaScript,
          and React. Passionate about designing responsive, user-friendly web
          applications. I thrive on transforming complex problems into dynamic,
          intuitive solutions. Always eager to learn and adopt the latest web
          technologies. Let&apos;s build the future of the web together
        </p>
        <section className="person">
          <img src="milton.jp" alt="" />
        </section>
        <section className="buttons">
          <button>Book A Call</button>
          <button>Download CV</button>
        </section>
      </section>
      <section className="page-image">
        <img src="249.png" alt="" />
      </section>
    </main>
  );
};

export default Main;
