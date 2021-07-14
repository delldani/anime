import React from "react";
import anime from "animejs";
import "./App.css";

function App() {
  React.useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const scroll = () => {
    console.log(window.scrollY);
    anime({
      targets: ".text3",
      // translateX: 250,
      // rotate: "1turn",
      duration: 1800,
      top: 900,
      left: 900,
    });
  };

  const onClick = () => {
    anime({
      targets: ".square",
      // translateX: 250,
      // rotate: "1turn",
      duration: 800,
      left: 200,
    });
    anime({
      targets: ".text2",
      // translateX: 250,
      // rotate: "1turn",
      easing: "easeInOutSine",
      duration: 800,
      left: 0,
    });

    const textWrapper: HTMLDivElement | null = document.querySelector(".text");
    textWrapper!.style.opacity = "1";
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline()
      .add({
        targets: ".text .letter",
        translateY: [300, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: ".text .letter",
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i,
      });
  };

  const onClickBack = () => {
    anime({
      targets: ".square",
      // translateX: 250,
      // rotate: "1turn",
      duration: 800,
      left: 0,
    });
    anime({
      targets: ".text2",
      // translateX: 250,
      // rotate: "1turn",
      duration: 800,
      left: -200,
    });
  };

  return (
    <div className="App">
      <div>
        <div className="square"></div>
        <h1 className="text">Dell Dani</h1>
        <h1 className="text2">Dell Dani</h1>
        <h1 className="text3">Dell Dani text3</h1>
        <button onClick={onClick}>Action</button>
        <button onClick={onClickBack}>Back</button>
      </div>
    </div>
  );
}

export default App;
