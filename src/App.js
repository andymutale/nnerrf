import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Image from "next/image";

export default function Home() {
  const img = "/img.jpeg";

  gsap.registerPlugin(ScrollTrigger);

  const component2 = useRef(null);
  const abc = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: component2.current,
          invalidateOnRefresh: true,
          pin: true,
          // scrub: 0.5,
          scrub: 0,
          start: "top top",
          end: () => "+=" + component2.current.offsetWidth
        }
      });
      tl.to(component2.current, {
        x: () =>
          -(
            component2.current.scrollWidth -
            document.documentElement.clientWidth
          ) + "px",
        ease: "none"
      }).to(abc.current, {
        transformOrigin: "bottom center",
        transform: "scale(0.5)"
      });

      //
    }, component2);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={component2}>
        <div className={"project-container"}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "#1941B8"
            }}
          ></div>
          <div
            style={{
              width: "30vw",
              height: "100vh",
              backgroundColor: "#C2DBE5"
            }}
          ></div>

          <div
            ref={abc}
            className="abc"
            style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}
          >
            {/* <Image className={"hero22-image"} src={img} fill alt="img" /> */}
            <img className={"hero22-image"} src={img} alt="img" />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#1941B8",
            justifyContent: "center",
            fontSize: "5rem"
          }}
        >
          Some Text
        </div>
      </div>
    </div>
  );
}
