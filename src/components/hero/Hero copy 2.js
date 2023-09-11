import "./hero.scss";
import {useState , useEffect} from 'react'
import Matter from 'matter-js';


function Hero() {

    const [isScattered, setIsScattered] = useState(false);

    const handleMouseMove = (e) => {
        if (isScattered) {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
            const pixelRect = pixel.getBoundingClientRect();
            const pixelCenterX = pixelRect.left + pixelRect.width / 2;
            const pixelCenterY = pixelRect.top + pixelRect.height / 2;
            const deltaX = e.clientX - pixelCenterX;
            const deltaY = e.clientY - pixelCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

   
            if (distance < 100) {
            const angle = Math.atan2(deltaY, deltaX);
            const distanceX = Math.cos(angle) * 50;
            const distanceY = Math.sin(angle) * 50;
            pixel.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
            } else {
            pixel.style.transform = 'translate(0, 0)';
            }
        });
        }
    };

    const handleMouseEnter = () => {
        setIsScattered(true);
    };

    const handleMouseLeave = () => {
        setIsScattered(false);
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
        pixel.style.transform = 'translate(0, 0)';
        });
    };











 
    useEffect(() => {
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;
      
        // Создаем физический движок
        const engine = Engine.create();
      
        const canvas = document.querySelector('canvas'); 

        const render = Render.create({
         canvas: canvas, // Используйте .logo
          engine: engine,
          options: {
            // width: 2000,
            // height: 620,
            wireframes: false,
          },
        });
        
        const pixelStyle = {
            fillStyle: '#FDB920', 
        };

        const pixelStyle2 = {
            fillStyle: '#324746', 
        };

        const pixelStyle3 = {
            fillStyle: '#171f1e', 
        };

        engine.world.gravity.y = 0.1;
      

        const pixels = [
          Bodies.rectangle(100, 100, 20, 20 ,{ render: pixelStyle,angularVelocity: 1 }),
          Bodies.rectangle(120, 100, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(140, 100, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(160, 100, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(180, 100, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(100, 120, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(120, 120, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(140, 120, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(160, 120, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(180, 120, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(80, 140, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(100, 140, 20, 20 ,{ render: pixelStyle2 }),
          Bodies.rectangle(120, 140, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(140, 140, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(160, 140, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(180, 140, 20, 20 ,{ render: pixelStyle2 }),
          Bodies.rectangle(200, 140, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(100, 160, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(120, 160, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(140, 160, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(160, 160, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(180, 160, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(100, 180, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(120, 180, 20, 20 ,{ render: pixelStyle2 }),
          Bodies.rectangle(140, 180, 20, 20 ,{ render: pixelStyle2 }),
          Bodies.rectangle(160, 180, 20, 20 ,{ render: pixelStyle2 }),
          Bodies.rectangle(180, 180, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(120, 200, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(140, 200, 20, 20 ,{ render: pixelStyle }),
          Bodies.rectangle(160, 200, 20, 20 ,{ render: pixelStyle }),

          Bodies.rectangle(-5, 0, 20, 1200, { isStatic: true, render: {fillStyle: '#324746', }}),
          Bodies.rectangle(805, 0, 20, 1200, { isStatic: true, render: {fillStyle: '#324746', }}),
          Bodies.rectangle(200, 605, 5100, 20, { isStatic: true, render: {fillStyle: '#324746', }}),
          Bodies.rectangle(150, 580, 20, 20, { isStatic: true, render: pixelStyle3}),
        ];

        // Добавляем пиксели в мир
        World.add(engine.world, pixels);
    
        // Запускаем физический движок
        Engine.run(engine);
    
        // Запускаем отрисовку
        Render.run(render);

         // Создаем объект Mouse
        const mouse = Mouse.create(render.canvas);

        // Добавляем MouseConstraint, чтобы пиксели можно было перетаскивать
        const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        });

   
        World.add(engine.world, mouseConstraint);





















        return () => {
          Render.stop(render);
          World.clear(engine.world);
          Engine.clear(engine);
        };
      }, );


    return (
        <section id="hero" className="hero">
            <canvas></canvas> 
            {/* <div>
             
                 <div>
                    <button className="button-m">
                        Magnite
                    </button>
                </div> 
            </div> */}
            <div className="icon"  >
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
            </div>
            <div className="logo" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
            >
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel black"></div>
                </div>
                {/* BODY */}
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>
                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>

                <div className="line">
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel black"></div>
                    <div className="pixel"></div>
                </div>

            </div>

        </section>
    );
}


export default Hero;
