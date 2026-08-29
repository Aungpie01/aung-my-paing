import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaravel,
  faReact,
  faPhp,
  faJs,
  faGit,
  faNode,
  faDocker,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const TailwindIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{ display: 'block' }}
  >
    <path d="M18.5 9.51a4.2 4.2 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.3 4.3 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.2 4.2 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.3 4.3 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51" />
  </svg>
);

export const skills = [
  { name: 'Laravel', color: '#FF2D20', icon: 'laravel' },
  { name: 'React', color: '#61DAFB', icon: 'react' },
  { name: 'PHP', color: '#777BB4', icon: 'php' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'javascript' },
  { name: 'Java', color: '#007396', icon: 'java' },
  { name: 'MySQL', color: '#4479A1', icon: 'mysql' },
  { name: 'Git', color: '#F05032', icon: 'git' },
  { name: 'Tailwind CSS', color: '#06B6D4', icon: 'tailwindcss' },
  { name: 'Node.js', color: '#339933', icon: 'nodejs' },
  { name: 'Docker', color: '#2496ED', icon: 'docker' },
];

export const SkillIcon = ({ icon, color, size = 24 }) => {
  const icons = {
    laravel: <FontAwesomeIcon icon={faLaravel} style={{ color, fontSize: size }} />,
    react: <FontAwesomeIcon icon={faReact} style={{ color, fontSize: size }} />,
    php: <FontAwesomeIcon icon={faPhp} style={{ color, fontSize: size }} />,
    javascript: <FontAwesomeIcon icon={faJs} style={{ color, fontSize: size }} />,
    java: <FontAwesomeIcon icon={faJava} style={{ color, fontSize: size }} />,
    mysql: <FontAwesomeIcon icon={faDatabase} style={{ color, fontSize: size }} />,
    git: <FontAwesomeIcon icon={faGit} style={{ color, fontSize: size }} />,
    tailwindcss: <TailwindIcon color={color} size={size} />,
    nodejs: <FontAwesomeIcon icon={faNode} style={{ color, fontSize: size }} />,
    docker: <FontAwesomeIcon icon={faDocker} style={{ color, fontSize: size }} />,
  };

  return icons[icon] || null;
};
