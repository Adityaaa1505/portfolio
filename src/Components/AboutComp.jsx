import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three-stdlib';
import { TextGeometry } from 'three-stdlib';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `const aboutMe = {
  name: "Aditya Agrawal",
  currentRole: "B.Tech CSE Student @ NIT Trichy",
  focus: ["Full Stack Web Development", "Algorithms", "UI/UX"],
  techStack: {
    frontend: ["React", "TailwindCSS", "JavaScript", "HTML/CSS"],
    backend: ["NodeJS", "Express", "MongoDB", "MySQL"],
    languages: ["C++", "C", "JavaScript", "Python"],
    tools: ["Git", "GitHub", "Postman", "VS Code"]
  },
  portfolioGoal: "Shaping my path in tech — one project at a time.",
  hobbies: ["Exploring AI", "Solving DSA", "Building intuitive UIs",  "Sports"],
  currentlyExploring: ["AI/ML", "Game Development", "Computer Fundamentals", "System Design"],
};`;

const AboutComp = () => {
  const canvasRef = useRef();
  const blockVariants = { initial: { opacity: 0, scale: 1 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      10,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(20);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const characters = ['<', '>', '{', '}', '/', '*', '=', ';', '#', '%', '&', '(', ')', '+', '-', '_', '~', '|', '!'];
    const particles = [];
    const loader = new FontLoader();

    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      for (let i = 0; i < 100; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const geometry = new TextGeometry(char, {
          font: font,
          size: 0.8,
          height: 0.1,
        });

        const material = new THREE.MeshStandardMaterial({
          color: 0xd8cfbc,
          emissive: 0xd8cfbc,
          roughness: 0.3,
          metalness: 0.5,
        });

        const mesh = new THREE.Mesh(geometry, material);
        const radius = 6;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.random() * Math.PI;
        mesh.position.set(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );

        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

        mesh.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        };
        mesh.userData.floatSpeed = (Math.random() - 0.5) * 0.005;

        scene.add(mesh);
        particles.push(mesh);
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);

      particles.forEach((p) => {
        p.rotation.x += p.userData.rotationSpeed?.x || 0.001;
        p.rotation.y += p.userData.rotationSpeed?.y || 0.001;
        p.position.y += Math.sin(Date.now() * 0.001 + p.position.x) * 0.001;
      });

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="relative">
      <canvas
        className="absolute max-h-full max-w-full z-0"
        id="bg"
        ref={canvasRef}
      />
      <div className="relative z-10">
        <motion.div
          className="rounded-lg border-2 border-[var(--color-primary)] p-4 font-mono bg-transparent backdrop-blur-sm"
          variants={blockVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-row gap-2 items-center"
          >
            <div className="bg-red-500 h-3 w-3 rounded-full"></div>
            <div className="bg-amber-400 h-3 w-3 rounded-full"></div>
            <div className="bg-green-500 h-3 w-3 rounded-full"></div>
            <div className="text-green-400">~/about-me.cpp --Eat --Sleep --Code --Repeat</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SyntaxHighlighter
              language="cpp"
              style={dracula}
              customStyle={{ backgroundColor: "transparent" }}
            >
              {codeString}
            </SyntaxHighlighter>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

};

export default AboutComp;

