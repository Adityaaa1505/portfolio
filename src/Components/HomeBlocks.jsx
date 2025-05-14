import Block from './Block';
import { motion } from 'framer-motion';
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from 'react-router-dom';

const HomeBlocks = () => {
    return (
        <>
            <motion.div variants={{ initial: { opacity: 0, scale: 1 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } }} initial="initial" animate="animate">

                {/* Large Screen Layout */}
                <div className="hidden lg:grid h-155 w-full gap-4" style={{ gridTemplateColumns: 'repeat(18, 1fr)', gridTemplateRows: 'repeat(12, 1fr)' }}>
                    <Block style={{ gridColumn: 'span 7', gridRow: 'span 7', backgroundColor: 'var(--color-primary)' }} className='flex flex-col justify-between gap-4'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-4 mt-auto leading-tight">
                            Shaping my path in <span className="italic">tech</span> — one project at a time.
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 5', gridRow: 'span 7', backgroundImage: 'url("/portfolio/profile.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='min-h-[40vh]'></Block>
                    <Block style={{ gridColumn: 'span 6', gridRow: 'span 10', backgroundColor: 'var(--color-primary)' }} className='overflow-auto min-h-[40vh]'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Chat App</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to='/projects'>
                                            <img src="/portfolio/ChatApp.png" alt="" className='rounded-lg w-60 my-2 transition-transform duration-700 ease-out hover:scale-105' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/socketdotio.svg" alt="Node Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Aurigo Elevate</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to='/projects'>
                                            <img src="/portfolio/Aurigo Elevate.png" alt="" className='rounded-lg w-60 my-2 transition-transform duration-700 ease-out hover:scale-105' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/ollama.svg" alt="OLlama Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Spotify Clone</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to='/projects'>
                                            <img src="/portfolio/DTunes.png" alt="" className='rounded-lg w-60 my-2 transition-transform duration-700 ease-out hover:scale-105' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/redux.svg" alt="Redux Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Portfolio</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to='/projects'>
                                            <img src="/portfolio/profile.jpeg" alt="" className='rounded-lg w-60 my-2 transition-transform duration-700 ease-out hover:scale-105' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 6', gridRow: 'span 5', backgroundColor: 'var(--color-primary)' }} className='flex flex-col-reverse'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='m-5 font-sans text-justify'>
                            I am a tech-driven B.Tech student at NIT Trichy, passionate about full-stack development and problem-solving. With a knack for building intuitive digital tools, I am focused on turning innovative ideas into practical solutions that make a difference.
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 6', gridRow: 'span 5', backgroundColor: 'var(--color-secondary)' }} className='group'>
                        <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} href="/portfolio/106123007_Aditya_Agrawal.pdf" target="_blank" rel="noopener noreferrer" className='h-full flex flex-col justify-between'>
                            <div className='text-[var(--color-primary)] m-4 text-sm font-sans flex flex-row justify-between'>
                                <div>Have Some<br /> Questions?</div>
                                <MdArrowOutward className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </div>
                            <div className='text-5xl m-4 text-[var(--color-primary)]'><span className='italic'>See</span> Resume</div>
                        </motion.a>
                    </Block>
                    <Block style={{ gridColumn: 'span 6', gridRow: 'span 2', backgroundColor: 'var(--color-primary)' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='h-full flex flex-row gap-10 justify-center items-center'>
                            <a href="https://github.com/Adityaaa1505" target="_blank" rel="noopener noreferrer"><FaGithub className='hover:text-gray-600 h-8 w-8' /></a>
                            <a href="https://leetcode.com/u/AdityaAgrawal2005/" target="_blank" rel="noopener noreferrer"><SiLeetcode className='hover:text-gray-600 h-8 w-8' /></a>
                            <a href="https://linkedin.com/in/adityaaa1505" target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:text-gray-600 h-8 w-8' /></a>
                        </motion.div>
                    </Block>
                </div>

                {/* Mid Screen Layout */}
                <div className="hidden lg:hidden sm:grid w-full gap-4" style={{ gridTemplateColumns: 'repeat(9, 1fr)' }}>
                    <Block style={{ gridColumn: 'span 5', backgroundColor: 'var(--color-primary)' }} className='flex flex-col justify-between gap-4 min-h-[40vh]'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-4 mt-auto leading-tight">
                            Shaping my path in <span className="italic">tech</span> — one project at a time.
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 4', backgroundImage: 'url("/portfolio/profile.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='min-h-[40vh]'>
                    </Block>
                    <Block style={{ gridColumn: 'span 4', gridRow: 'span 5', backgroundColor: 'var(--color-primary)' }} className='min-h-[40vh] flex flex-col-reverse'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='m-5 font-sans'>
                            I am a tech-driven B.Tech student at NIT Trichy, passionate about full-stack development and problem-solving. With a knack for building intuitive digital tools, I am focused on turning innovative ideas into practical solutions that make a difference.
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 5', gridRow: 'span 5', backgroundColor: 'var(--color-secondary)' }} className='group min-h-[40vh]'>
                        <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} href="/portfolio/106123007_Aditya_Agrawal.pdf" target="_blank" rel="noopener noreferrer" className='h-full flex flex-col justify-between'>
                            <div className='text-[var(--color-primary)] m-4 text-sm font-sans flex flex-row justify-between'>
                                <div>Have Some<br /> Questions?</div>
                                <MdArrowOutward className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </div>
                            <div className='text-5xl m-4 text-[var(--color-primary)]'><span className='italic'>See</span> Resume</div>
                        </motion.a>
                    </Block>
                    <Block style={{ gridColumn: 'span 9', backgroundColor: 'var(--color-primary)' }} className='min-h-[40vh]'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Chat App</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/ChatApp.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/socketdotio.svg" alt="Node Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Aurigo Elevate</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/Aurigo Elevate.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/ollama.svg" alt="OLlama Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                            <img src="/portfolio/git.svg" alt="Git Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Spotify Clone</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/DTunes.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/redux.svg" alt="Redux Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Portfolio</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/profile.jpeg" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </Block>
                    <Block style={{ gridColumn: 'span 9', backgroundColor: 'var(--color-primary)' }} className='min-h-[10vh]'>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='h-full flex flex-row gap-10 justify-center items-center'>
                            <a href="https://github.com/Adityaaa1505" target="_blank" rel="noopener noreferrer"><FaGithub className='hover:text-gray-600 h-8 w-8' /></a>
                            <a href="https://leetcode.com/u/AdityaAgrawal2005/" target="_blank" rel="noopener noreferrer"><SiLeetcode className='hover:text-gray-600 h-8 w-8' /></a>
                            <a href="https://linkedin.com/in/adityaaa1505" target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:text-gray-600 h-8 w-8' /></a>
                        </motion.div>
                    </Block>
                </div>

                {/* Small Screen Layout */}
                <div className="block grid grid-cols-1 gap-4 sm:hidden">
                    <Block style={{ backgroundImage: 'url("/portfolio/profile.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='min-h-[40vh]'></Block>
                    <Block className="order-3 bg-[var(--color-primary)] min-h-[40vh] flex flex-col-reverse">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='m-5 font-sans'>
                            I am a tech-driven B.Tech student at NIT Trichy, passionate about full-stack development and problem-solving. With a knack for building intuitive digital tools, I am focused on turning innovative ideas into practical solutions that make a difference.
                        </motion.div>
                    </Block>
                    <Block className="order-4 bg-[var(--color-primary)] min-h-[40vh]">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Chat App</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/ChatApp.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/socketdotio.svg" alt="Node Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Aurigo Elevate</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/Aurigo Elevate.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/ollama.svg" alt="OLlama Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                            <img src="/portfolio/git.svg" alt="Git Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Spotify Clone</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/DTunes.png" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/mongodb.svg" alt="MongoDB Logo" width="40" />
                                            <img src="/portfolio/express.svg" alt="Express Logo" width="40" />
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/nodedotjs.svg" alt="Node Logo" width="40" />
                                            <img src="/portfolio/redux.svg" alt="Redux Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="no-underline hover:no-underline text-2xl font-bold">Portfolio</AccordionTrigger>
                                    <AccordionContent className='mx-5 flex flex-col justify-center items-center'>
                                        <Link to="/projects">
                                            <img src="/portfolio/profile.jpeg" alt="" className='rounded-lg w-60 mb-2' />
                                        </Link>
                                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                                            <img src="/portfolio/react.svg" alt="React Logo" width="40" />
                                            <img src="/portfolio/tailwindcss.svg" alt="TailwindCSS Logo" width="40" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </Block>
                    <Block className="order-5 group  bg-[var(--color-secondary)] min-h-[40vh]">
                        <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} href="/portfolio/106123007_Aditya_Agrawal.pdf" target="_blank" rel="noopener noreferrer" className='h-full flex flex-col justify-between'>
                            <div className='text-[var(--color-primary)] m-4 text-sm font-sans flex flex-row justify-between'>
                                <div>Have Some<br /> Questions?</div>
                                <MdArrowOutward className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </div>
                            <div className='text-5xl m-4 text-[var(--color-primary)]'><span className='italic'>See</span> Resume</div>
                        </motion.a>
                    </Block>
                    <Block className="order-6 bg-[var(--color-primary)] min-h-[10vh]">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className='h-full flex flex-row gap-10 justify-center items-center'>
                            <a href="https://github.com/Adityaaa1505" target="_blank" rel="noopener noreferrer"><FaGithub className='hover:text-gray-600 h-7 w-7' /></a>
                            <a href="https://leetcode.com/u/AdityaAgrawal2005/" target="_blank" rel="noopener noreferrer"><SiLeetcode className='hover:text-gray-600 h-7 w-7' /></a>
                            <a href="https://linkedin.com/in/adityaaa1505" target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:text-gray-600 h-7 w-7' /></a>
                        </motion.div>
                    </Block>
                </div>
            </motion.div >
        </>
    );
};

export default HomeBlocks;
