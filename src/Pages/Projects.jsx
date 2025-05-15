import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Projects = () => {
    const mainProjects = [
        {
            title: "Real-Time ChatApp",
            description:
                "A real-time messaging platform developed using the MERN stack with secure one-on-one and group chat capabilities. Real-time communication was enabled through WebSockets using Socket.io, allowing seamless message delivery and live status tracking. JWT-based authentication while MongoDB is used storaging of messages, user profiles, and conversation history. Notifications, online indicators, and a structured RESTful API (Node.js + Express.js) made the platform production-ready.",
            image: "/portfolio/ChatApp.png",
            techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
            github: "https://github.com/Adityaaa1505/ChatApp-Spider-Task1",
        },
        {
            title: "Aurigo Elevate",
            description:
                "A multi-module, AI-driven civil project optimization platform developed for the Prayan Hackathon. It featured a Smart Forecasting Module using machine learning to estimate project timelines based on variables like weather (via external APIs), workforce size, and past disaster patterns. A Bidding Optimization System matched procurement needs with vendor inventories. Additionally, a Feedback & Complaints Portal, integrated with Google Maps API, enabling citizens to report issues like dust or noise at construction sites.",
            image: "/portfolio/Aurigo Elevate.png",
            techStack: ["MERN", "Google APIs", "OLlama 3.1", "JWT"],
            github: "https://github.com/Adityaaa1505/Aurigo-Elevate",
        },
        {
            title: "Portfolio Website",
            description:
                "A responsive and animated personal portfolio website developed using React and TailwindCSS, featuring multiple pages like Home, About, Projects, and Contact. It includes a smooth animated intro built using Framer Motion, modular components for maintainability, and integrates external links to resume, GitHub, and social profiles. The layout is mobile-first and supports light/dark mode, with clean animations for a professional feel.",
            image: "/portfolio/profile.jpeg",
            techStack: ["React", "TailwindCSS", "Framer Motion", "ShadCN"],
            github: "https://github.com/yourusername/portfolio",
        },
        {
            title: "DTunes - Spotify Clone",
            description:
                "A full-featured music streaming web application modeled after Spotify, built using the MERN stack. The project included user authentication (via JWT), Redux for global state management, playlist creation, search, and dynamic audio playback using HTML5 audio API. The interface was designed with TailwindCSS for responsiveness across devices, and audio functionality was implemented with play/pause queues and track navigation. Built for smooth UX and modular code structure.",
            image: "/portfolio/DTunes.png",
            techStack: ["React", "Node.js", "Express", "Redux", "MongoDB", "JWT"],
            github: "https://github.com/Adityaaa1505/DTunes-Delta-Task3",
        }
    ];

    const sideProjects = [
        {
            title: "Last Stand",
            image: "/portfolio/Last Stand.png",
            description: "A fast-paced survival shooter game built using HTML Canvas. Players defend against waves of enemies with increasing difficulty. Focused on real-time input, animation, and collision logic. Designed to explore raw JavaScript game loops.",
            techStack: ["HTML", "CSS", "JavaScript", "Canvas"]
        },
        {
            title: "Postman Clone (Prototype)",
            image: "/portfolio/Postman.png",
            description: "Built a functional prototype of Postman using the MERN stack during a timed hackathon. Implemented REST API request handling, response visualization, and token support. Prioritized fast delivery and usability.",
            techStack: ["MongoDB", "Express", "React", "Node.js"]
        },
        {
            title: "Sub Delta (Old Portfolio)",
            image: "/portfolio/Sub Delta.png",
            description: "My previous personal portfolio website created with plain HTML, CSS, and JavaScript. It showcased my early projects, resume, and skills with smooth animations and a neat layout.",
            techStack: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Flappy Bird",
            image: "/portfolio/Flappy Bird.png",
            description: "A classic Flappy Bird remake built on HTML Canvas to practice game physics and rendering. Includes gravity, obstacle spawning, and collision detection. Great hands-on intro to 2D game logic.",
            techStack: ["HTML", "CSS", "JavaScript", "Canvas"]
        },
        {
            title: "Mosquito Swatter",
            image: "/portfolio/Mosquito Swatter.png",
            description: "Fun, fast-paced game built on Canvas during a timed coding contest. Players must click and swat flying mosquitoes before time runs out. Features score tracking and dynamic difficulty.",
            techStack: ["HTML", "CSS", "JavaScript", "Canvas"]
        },
        {
            title: "Ricochet Rumble",
            image: "/portfolio/Richochet Rumble.png",
            description: "A strategic turn-based web game where players shoot projectiles across a chessboard-like arena. Projectiles ricochet off pieces and walls, adding depth to the combat. Built with custom game logic using HTML, CSS, and JS.",
            techStack: ["HTML", "CSS", "JavaScript"]
        }
    ];

    const blockVariants = { initial: { opacity: 0, scale: 1 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
        const interval = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [api])

    return (
        <div className='m-4'>
            <Navbar />
            <motion.div variants={blockVariants} initial="initial" animate="animate" className="flex flex-col items-center gap-2">
                <Carousel className="w-full rounded-lg bg-[var(--color-secondary)]" setApi={setApi}>
                    <CarouselContent>
                        {mainProjects.map((project, index) => (
                            <CarouselItem key={index}>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="p-6 flex flex-col h-92/100 md:flex-row justify-between items-center gap-6">
                                    {/* Left Section: Text */}
                                    <div className="max-w-4xl p-4 text-[var(--color-primary)] text-center">
                                        <h2 className="text-4xl my-2 text-[var(--color-bg)] font-semibold">{project.title}</h2>
                                        <p className="text-md font-sans text-justify">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                            {project.techStack.map((tech, i) => (
                                                <span key={i} className="bg-black/10 px-2 font-sans py-1 mt-4 text-sm text-[var(--color-bg)] rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-4  hover:underline font-sans text-sm">
                                            View on GitHub →
                                        </a>
                                    </div>
                                    {/* Right Section: Image */}
                                    <img src={project.image} alt={project.title} className="w-80 object-cover rounded-xl shadow-md" />
                                </motion.div>
                                <div className="py-2 text-center font-sans text-sm text-muted-foreground">
                                    Slide {current} of {count}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </motion.div>
            <motion.div variants={blockVariants} initial="initial" animate="animate" className='overflow-y-hidden'>
                <ScrollArea className="whitespace-nowrap mt-3">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex w-max">
                        {sideProjects.map((project, idx) => (
                            <figure key={idx} className="shrink-0 mr-4 p-4 rounded-md bg-[var(--color-primary)] flex flex-row max-w-[80vh] max-h-[40vh]">
                                <img src={project.image} alt="" className="w-45 h-45 object-cover rounded-xl shadow-md" />
                                <figcaption className="mx-2 w-full max-w-sm text-[var(--secondary-color)]">
                                    <div className="text-center font-sans text-lg font-semibold mb-2">{project.title}</div>
                                    <div className="text-sm whitespace-normal font-sans break-words mb-2">
                                        {project.description}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="bg-black/10 px-2 font-sans py-1 text-sm text-[var(--color-bg)] rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </motion.div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </motion.div>
        </div>
    )
}

export default Projects
