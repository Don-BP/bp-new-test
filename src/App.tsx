import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ArrowRight, Building2, Award, Laptop } from "lucide-react";

const Flower = ({ className, color }: { className?: string, color: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color}>
    <path d="M50 10 C60 10, 60 40, 50 50 C40 40, 40 10, 50 10 Z" />
    <path d="M90 50 C90 60, 60 60, 50 50 C60 40, 90 40, 90 50 Z" />
    <path d="M50 90 C40 90, 40 60, 50 50 C60 60, 60 90, 50 90 Z" />
    <path d="M10 50 C10 40, 40 40, 50 50 C40 60, 10 60, 10 50 Z" />
    <circle cx="50" cy="50" r="10" fill="#facc15" />
  </svg>
);

const FloatingObject = ({ src, initialX, initialY, delay = 0, scale = 1, rotate = 0 }: { src: string, initialX: string, initialY: string, delay?: number, scale?: number, rotate?: number }) => (
  <motion.img
    src={src}
    initial={{ x: initialX, y: initialY, opacity: 0, rotate }}
    animate={{
      y: [0, -20, 0],
      rotate: [rotate, rotate + 5, rotate - 5, rotate]
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      opacity: { duration: 1, delay },
      y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 },
      rotate: { duration: 6 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
    }}
    style={{ position: 'absolute', top: initialY, left: initialX, transform: `scale(${scale})` }}
    className="w-12 h-12 md:w-20 md:h-20 object-contain z-10 pointer-events-none"
  />
);


const generateLineData = () => {
  const colors = ["#ffb7c5", "#a7c7e7", "#c1e1c1", "#fdfd96", "#b39eb5", "#ffb347", "#ffccf9", "#e0bbe4"];
  const id = Math.random();
  const color = colors[Math.floor(Math.random() * colors.length)];
  const width = 45; // Constant width
  const duration = 10; // Constant speed (10s)

  const startPos = Math.floor(Math.random() * 4);
  let d = "";

  if (startPos === 0) { // L to R
    d = `M-200,${Math.random() * 800 + 100} C${Math.random() * 400 + 100},${Math.random() * 1000} ${Math.random() * 400 + 500},${Math.random() * 1000} 1200,${Math.random() * 800 + 100}`;
  } else if (startPos === 1) { // R to L
    d = `M1200,${Math.random() * 800 + 100} C${Math.random() * 400 + 500},${Math.random() * 1000} ${Math.random() * 400 + 100},${Math.random() * 1000} -200,${Math.random() * 800 + 100}`;
  } else if (startPos === 2) { // T to B
    d = `M${Math.random() * 800 + 100},-200 C${Math.random() * 1000},${Math.random() * 400 + 100} ${Math.random() * 1000},${Math.random() * 400 + 500} ${Math.random() * 800 + 100},1200`;
  } else { // B to T
    d = `M${Math.random() * 800 + 100},1200 C${Math.random() * 1000},${Math.random() * 400 + 500} ${Math.random() * 1000},${Math.random() * 400 + 100} ${Math.random() * 800 + 100},-200`;
  }

  return { id, d, color, width, duration };
};

const SinglePainterlyLine = ({ initialDelay = 0 }: { initialDelay?: number }) => {
  const [line, setLine] = React.useState(generateLineData());
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  if (!isReady) return null;

  return (
    <motion.path
      key={line.id}
      d={line.d}
      fill="none"
      stroke={line.color}
      strokeWidth={line.width}
      strokeLinecap="round"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 0.4, 0.4],
        pathOffset: [0, 0, 1.2],
        opacity: [1, 1, 0]
      }}
      transition={{
        duration: line.duration,
        ease: "linear",
        times: [0, 0.15, 1]
      }}
      onAnimationComplete={() => {
        setIsReady(false);
        setTimeout(() => {
          setLine(generateLineData());
          setIsReady(true);
        }, 1000);
      }}
    />
  );
};

const PainterlyLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-60" preserveAspectRatio="none">
        <SinglePainterlyLine />
        <SinglePainterlyLine initialDelay={5500} />
      </svg>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative w-full font-sans text-gray-800">
      <PainterlyLines />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-[300] flex justify-between items-center p-6 md:px-12 pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <img
            src="/assets/BP LOGO large-500x149.png"
            alt="Brain Power Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
        <button className="bg-[#2d3735] text-white p-3 rounded-full hover:bg-black transition-colors pointer-events-auto">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Section Container */}
      <div className="relative overflow-hidden w-full h-screen min-h-[700px] md:min-h-[850px] z-[-10]">
        {/* Sky Background - Center Locked Scaling */}
        <div className="absolute inset-0 z-0 bg-[#60a5fa] overflow-hidden">
          <img
            src="/assets/downtown_city_3.png"
            className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-center z-10"
            alt="City Background"
          />
          <img
            src="/assets/cloud_back.png"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            alt="Cloud Background"
          />
        </div>

        <section className="relative w-full h-full flex items-center justify-end px-6 md:px-24 z-10 transition-all duration-300">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Characters Restore */}
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
              className="absolute top-0 left-[35%] w-48 h-48 md:w-[300px] md:h-[300px] z-[5]"
            >
              <motion.img
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/man fall.png"
                className="w-full h-full object-contain transform rotate-180"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
              className="absolute top-[-15%] left-[25%] w-64 h-64 md:w-[450px] md:h-[450px] z-0"
            >
              <motion.img
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/scientist.png"
                className="w-full h-full object-contain transform rotate-180"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.3, delay: 0.2 }}
              className="absolute top-[-12%] right-[10%] w-80 h-80 md:w-[480px] md:h-[480px] z-0"
            >
              <motion.img
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                src="/assets/people/girl jump.png"
                className="w-full h-full object-contain transform scale-y-[-1]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -200, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute bottom-[-10%] left-[-5%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] z-20"
            >
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/woman painting.png"
                className="w-full h-full object-contain transform rotate-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute bottom-[-12%] left-[40%] w-64 h-64 md:w-[500px] md:h-[500px] z-20"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/walking man.png"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute bottom-[-8%] right-[-5%] w-80 h-80 md:w-[650px] md:h-[650px] z-20"
            >
              <motion.img
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/woman walks.png"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Random Objects scattered */}
            <FloatingObject src="/assets/objects/yellow star.png" initialX="10%" initialY="15%" delay={0.2} scale={1.2} />
            <FloatingObject src="/assets/objects/apple.png" initialX="15%" initialY="45%" delay={0.4} />
            <FloatingObject src="/assets/objects/blue star.png" initialX="80%" initialY="20%" rotate={45} delay={0.6} />
            <FloatingObject src="/assets/objects/book.png" initialX="70%" initialY="60%" rotate={-20} delay={0.8} />
            <FloatingObject src="/assets/objects/coffee cup.png" initialX="40%" initialY="70%" delay={1} scale={0.8} />
            <FloatingObject src="/assets/objects/umbrella.png" initialX="85%" initialY="40%" rotate={15} delay={1.2} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-40 max-w-xl mt-20 text-left md:ml-auto md:mr-10"
          >
            <div className="space-y-4 mb-8">
              <h1 className="inline-block bg-white px-3 py-3 font-bold text-gray-800 leading-tight text-4xl md:text-6xl shadow-lg border-l-8 border-[#2b82c9]">
                人から、こころから
              </h1>
              <div className="h-2" />
              <h1 className="inline-block bg-white px-3 py-3 font-bold text-gray-800 leading-tight text-4xl md:text-6xl shadow-lg border-l-8 border-[#2b82c9]">
                つながる未来
              </h1>
            </div>
            <div className="space-y-2">
              <div className="mb-1">
                <p className="text-gray-800 font-bold text-xl leading-relaxed bg-white/70 inline-block px-6 py-1 shadow-sm">働く人にも、企業にも。</p>
              </div>
              <div className="mb-1">
                <p className="text-gray-800 font-bold text-xl leading-relaxed bg-white/70 inline-block px-6 py-1 shadow-sm">寄り添い続けてきた半世紀の信頼で、</p>
              </div>
              <div>
                <p className="text-gray-800 font-bold text-xl leading-relaxed bg-white/70 inline-block px-6 py-1 shadow-sm">安心を届けます。</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Main Content Wrapper - Light Yellow Background Starts Here */}
      <div className="relative w-full bg-[#fefce8] -mt-2 z-[150]">
        {/* Action Buttons Section */}
        <section className="relative z-[200] -mt-12 py-10 px-4 flex flex-col md:flex-row justify-center items-center gap-6">
          <ActionButton color="bg-[#8ab8a8]" hoverColor="hover:bg-[#76a393]" text="会社情報をみる" delay={0.1} />
          <ActionButton color="bg-[#e87a82]" hoverColor="hover:bg-[#d66870]" text="導入事例をみる" delay={0.2} />
          <ActionButton color="bg-[#4ba3d3]" hoverColor="hover:bg-[#3991c1]" text="スタッフの方はこちら" delay={0.3} />
        </section>

        {/* About Us Section */}
        <section className="relative py-12 px-6 text-center z-30">
          {/* Decorative Bird and Flowers as seen in reference */}
          <FloatingObject src="/assets/Animals/bird flying.png" initialX="85%" initialY="5%" delay={0.1} scale={1.2} />
          <FloatingObject src="/assets/objects/flowers-plants/pink flower.png" initialX="88%" initialY="35%" delay={0.2} scale={1.4} />
          <FloatingObject src="/assets/objects/flowers-plants/yellow flower.png" initialX="12%" initialY="10%" delay={0.3} scale={1.2} />
          <FloatingObject src="/assets/objects/flowers-plants/blue flower.png" initialX="15%" initialY="30%" delay={0.4} scale={1.1} />
          <FloatingObject src="/assets/objects/flowers-plants/Seed.png" initialX="10%" initialY="55%" delay={0.5} scale={1.3} rotate={-15} />
          <FloatingObject src="/assets/objects/flowers-plants/leaf.png" initialX="92%" initialY="15%" delay={0.6} scale={1} rotate={20} />

          <div className="absolute top-[0%] left-[-15%] w-64 h-64 md:w-[650px] md:h-[650px] z-[31] pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -1000, rotate: -30 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ type: "spring", damping: 12, stiffness: 35, duration: 2.5 }}
            >
              <motion.img
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/business woman.png"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-[-10%] right-[-15%] w-[320px] h-[320px] md:w-[750px] md:h-[750px] z-[31] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 1000, rotate: 30 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ type: "spring", damping: 12, stiffness: 35, duration: 2.5, delay: 0.3 }}
            >
              <motion.img
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/people/girl talking.png"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <div className="relative z-50 max-w-4xl mx-auto px-4">
            <p className="text-sm font-bold text-gray-500 mb-2 tracking-widest">私たちについて</p>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#7ab8b1] mb-8 uppercase tracking-tighter">About Us</h2>
            <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-6 leading-tight">
              ブレーンパワーは、<br className="md:hidden" />人材の定着と信頼にこだわり続けて半世紀
            </h3>
            <p className="text-gray-500 leading-loose font-bold text-sm max-w-2xl mx-auto mb-3">
              事務やオフィスワーク、製造・物流、サービス、教育など、<br className="hidden md:block" />
              近畿・首都圏・北関東に根ざした支援を展開しています。
            </p>
            <p className="text-gray-400 font-bold text-xs">
              これからも、人と企業の「信頼」を原点に、心の通うつながりを育んでいきます。
            </p>
          </div>
        </section>

        {/* Hill Path Section */}
        <section className="relative w-full overflow-hidden m-0 p-0 border-none bg-[#fefce8]">
          <div className="relative w-full flex flex-col m-0 p-0 leading-[0]" style={{ fontSize: 0 }}>
            <img
              src="/assets/hill_path.png"
              className="w-full h-auto block m-0 p-0 border-none relative z-20 mix-blend-multiply"
              alt="Hill Background"
            />
            {/* The background here remains the yellow from the wrapper div */}

            <div className="absolute inset-0 pointer-events-none z-30">
              {/* Decorative Objects on Hill */}
              <FloatingObject src="/assets/objects/apple.png" initialX="20%" initialY="30%" delay={0.2} scale={0.8} />
              <FloatingObject src="/assets/objects/coffee cup.png" initialX="45%" initialY="25%" delay={0.4} scale={0.7} />
              <FloatingObject src="/assets/objects/hard hat.png" initialX="75%" initialY="35%" delay={0.6} scale={0.9} />
              <FloatingObject src="/assets/objects/umbrella.png" initialX="10%" initialY="45%" delay={0.8} scale={1.1} rotate={15} />
              <FloatingObject src="/assets/objects/yellow star.png" initialX="85%" initialY="60%" delay={1} scale={1} />

              {/* Hill Fly-in Characters */}
              <div className="absolute top-[40%] left-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] z-10 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, x: -300, rotate: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", damping: 15, stiffness: 40, duration: 2 }}
                >
                  <motion.img
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    src="/assets/people/woman run jump.png"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              <div className="absolute top-[30%] right-[-10%] w-64 h-64 md:w-[550px] md:h-[550px] z-10 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, x: 300, rotate: 20 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", damping: 15, stiffness: 40, duration: 2, delay: 0.2 }}
                >
                  <motion.img
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    src="/assets/people/man with bag.png"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full z-40 px-6 pt-8 md:pt-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard title="会社情報" icon={<img src="/assets/Buildings/building 1.png" className="w-[85%]" />} dotColor="bg-[#e87a82]" delay={0.1} />
                <InfoCard title="許認可・認定一覧" icon={<img src="/assets/Buildings/school 1.png" className="w-[80%]" />} dotColor="bg-[#8ab8a8]" delay={0.2} />
                <InfoCard title="数字で見る当社" icon={<img src="/assets/objects/laptop.png" className="w-[85%]" />} dotColor="bg-[#4ba3d3]" delay={0.3} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ActionButton({ color, hoverColor, text, delay }: { color: string, hoverColor: string, text: string, delay: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} ${hoverColor} text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 w-64 transition-colors`}
    >
      {text}
      <ArrowRight size={16} />
    </motion.button>
  );
}

function InfoCard({ title, icon, dotColor, delay }: { title: string, icon: ReactNode, dotColor: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center text-center z-50 hover:shadow-2xl transition-all border border-gray-100 min-h-[420px]"
    >
      <div className={`${dotColor} w-6 h-6 rounded-full mb-4`} />
      <h4 className="text-lg font-black text-gray-800 mb-4 tracking-tight">{title}</h4>
      <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-50/10 rounded-2xl overflow-hidden scale-110">
        {icon}
      </div>
      <button className="mt-auto bg-[#2d3735] text-white text-sm font-black py-2.5 px-10 rounded-full transition-all hover:bg-black hover:scale-105 tracking-widest whitespace-nowrap">
        詳細へ
      </button>
    </motion.div>
  );
}
