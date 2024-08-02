import img from '../assets/coder.svg';
import '../App.css';
export default function About() {
  return (
    <div data-aos="zoom-in" className="flex flex-col-reverse items-center justify-center  pt-20 h-fit p-6 bg-gray-950 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 text-left p-6" data-aos="fade-up">
        <h1 className="text-[#00FFFF] text-6xl mb-4 sm:text-6xl">About Me</h1>
        <p className="text-white text-xl sm:text-3xl">
          Hi, I’m Darshan Jain, a passionate programmer with a love for turning ideas into reality. With a keen eye for detail and a commitment to excellence, I enjoy tackling new challenges and continuously learning.
        </p>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center" data-aos="fade-down">
        <img src={img} alt="Darshan Jain" className="abtimg w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
