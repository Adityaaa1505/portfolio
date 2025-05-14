import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

export default function Navbar() {
  const location = useLocation();
  const blockVariants = { initial: { opacity: 0, scale: 1 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

  return (
    <motion.div variants={blockVariants} initial="initial" animate="animate">
      <nav className="flex items-center justify-between my-4 px-6 py-4 bg-[var(--color-primary)] text-[var(--color-bg)] rounded-xl shadow-md relative">
        <Link to='/'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-xl sm:text-2xl font-[sans_serif] tracking-tight">
            <span className='font-bold'>Aditya</span> <span className='italic'>Agrawal</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="hidden md:flex gap-8 font-[sans_serif] text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:underline underline-offset-4 transition-colors duration-200 ${location.pathname === item.path ? 'underline' : ''
                }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>

        {/* Mobile Nav with Dropdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="h-6 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <FiMenu className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[var(--color-primary)] text-[var(--color-bg)]">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link to={item.path} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </nav>
    </motion.div>
  );
}

