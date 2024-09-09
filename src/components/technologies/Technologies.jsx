import "./technologies.scss";

export default function Technologies() {
  const technologies = [
    {
      id: 1,
      name: "React.js",
      title: "Frontend Library",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      icon: "assets/react.png",
      desc: "React is a popular JavaScript library for building user interfaces, especially single-page applications.",
    },
    {
      id: 2,
      name: "Node.js",
      title: "Backend Runtime",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      icon: "assets/node.png",
      desc: "Node.js is a runtime environment that allows developers to use JavaScript to build server-side applications.",
      featured: true,
    },
    {
      id: 3,
      name: "MongoDB",
      title: "NoSQL Database",
      img: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
      icon: "assets/mongodb.png",
      desc: "MongoDB is a NoSQL database that stores data in JSON-like documents with optional schemas.",
    },
    {
      id: 4,
      name: "Express.js",
      title: "Backend Framework",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      icon: "assets/express.png",
      desc: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    },
    {
      id: 5,
      name: "Angular",
      title: "Frontend Framework",
      img: "https://angular.io/assets/images/logos/angular/angular.svg",
      icon: "assets/angular.png",
      desc: "Angular is a platform for building mobile and desktop web applications. It uses TypeScript and is maintained by Google.",
    },
    {
      id: 6,
      name: "C++",
      title: "Programming Language",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      icon: "assets/cpp.png",
      desc: "C++ is a high-performance programming language commonly used for system software, game development, and embedded systems.",
    },
    {
      id: 7,
      name: "Java",
      title: "Programming Language",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      icon: "assets/java.png",
      desc: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    },
    {
      id: 8,
      name: "Python",
      title: "Programming Language",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      icon: "assets/python.png",
      desc: "Python is a high-level programming language known for its readability and versatile applications in web development, data science, and automation.",
    },
    {
      id: 9,
      name: "JavaScript",
      title: "Programming Language",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      icon: "assets/javascript.png",
      desc: "JavaScript is a versatile programming language commonly used to create interactive effects within web browsers.",
    }
  ];

  return (
    <div className="technologies" id="technologies">
      <h1>Technologies I Know</h1>
      <div className="container">
        {technologies.map((tech) => (
          <div className={tech.featured ? "card featured" : "card"} key={tech.id}>
            <div className="top">
              <img src="assets/code.png" className="left" alt="" />
              <img className="user" src={tech.img} alt={tech.name} />
              <img className="right" src={tech.icon} alt={tech.name} />
            </div>
            <div className="center">
              {tech.desc}
            </div>
            <div className="bottom">
              <h3>{tech.name}</h3>
              <h4>{tech.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}