import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  ChevronRight,
  Palette,
  Layout,
  Video,
  MonitorPlay,
  Globe,
  Youtube // Added Youtube icon
} from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const YOUTUBE_VIDEOS = ['9Q4eyWnOzVE', '5HUC_0cgcRs', 'a8MzTj9ORi4', 'oZZ1tGJRlwA', 'DLUwFIXHc6M'];
const YOUTUBE_SHORTS = ['2RBQU9rcfrM', 'DeFWp6Q_yPw', 'ADjC12rQ2qw', '6O5y_7C78Pg', 'bR2R6sDezBw'];

export default function App() {
  const [videoIndex, setVideoIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#EDEDED] font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-heading font-semibold text-base tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">GC</div>
            GMC.
          </span>
          <div className="flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#youtube" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          variants={STAGGER_CHILDREN}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse md:flex-row gap-12 md:items-center justify-between"
        >
          <div className="space-y-6 max-w-2xl">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Available for new opportunities
            </motion.div>
            
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-[1.1]">
              Georgekutty <br/>
              <span className="text-neutral-500 text-4xl md:text-6xl tracking-tight">M. Cherian</span>
            </motion.h1>
            
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
              Senior Graphic Design Specialist crafting high-quality digital experiences, presentations, and visual narratives. 
            </motion.p>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap gap-4 pt-2">
              <a href="mailto:mycreationsfrom1990@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a href="https://youtube.com/@georgescreativestudio?si=gwAlEHEQ7mdlRUV_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-white/10 text-white text-sm font-medium rounded-md hover:bg-[#222] transition-colors">
                <Youtube className="w-4 h-4 text-red-500" />
                Subscribe
              </a>
              <a href="https://www.linkedin.com/in/georgekutty-m-c-16886193/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-white/10 text-white text-sm font-medium rounded-md hover:bg-[#222] transition-colors">
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap gap-x-8 gap-y-2 pt-6 text-neutral-400 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neutral-500" /> Kochi, India</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-neutral-500" /> +91 9496012521</div>
            </motion.div>
          </div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#111] shadow-2xl relative z-10 bg-neutral-900 group">
              {/* Fallback image utilizing UI-Avatars for immediate display, but users should upload their own */}
              <img 
                src="/Profile.jpg"
                alt="Georgekutty M. Cherian" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=GC&background=111&color=fff&size=512";
                }}
              />
            </div>
            {/* Vercel-like subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full scale-150"></div>
          </motion.div>
        </motion.section>

        {/* YouTube Section */}
        <motion.section 
          id="youtube"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-xl font-heading font-semibold text-white flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500" /> Creator Studio
            </h2>
            <p className="text-neutral-500 text-sm mt-2 font-light">Explore my creative journey and tutorials on YouTube.</p>
            <a href="https://youtube.com/@georgescreativestudio?si=gwAlEHEQ7mdlRUV_" target="_blank" rel="noreferrer" className="inline-flex mt-6 items-center gap-2 text-sm text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
              Visit full channel <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#111] group">
                <div className="aspect-video bg-neutral-900 relative">
                  <iframe 
                    key={YOUTUBE_VIDEOS[videoIndex]}
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[videoIndex]}?autoplay=0`}
                    title="YouTube video player 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white text-sm">Latest Uploads</h3>
                  <p className="text-xs text-neutral-500 mt-1">George's Creative Studio</p>
                </div>
              </div>
              
              {/* Card 2 : Placeholder for another specific video */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#111] group">
                <div className="aspect-video bg-neutral-800 relative flex items-center justify-center">
                   <iframe 
                    key={YOUTUBE_VIDEOS[(videoIndex + 1) % YOUTUBE_VIDEOS.length]}
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[(videoIndex + 1) % YOUTUBE_VIDEOS.length]}?autoplay=0`}
                    title="YouTube video player 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white text-sm">Featured Content</h3>
                  <p className="text-xs text-neutral-500 mt-1">Design & Creativity Showcases</p>
                </div>
              </div>
            </div>

            {/* Shorts */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[0, 1, 2].map((offset) => {
                const shortIndex = (videoIndex + offset) % YOUTUBE_SHORTS.length;
                return (
                  <div key={`short-${offset}`} className="rounded-xl overflow-hidden border border-white/10 bg-[#111] group">
                    <div className="aspect-[9/16] bg-neutral-900 relative">
                      <iframe 
                        key={YOUTUBE_SHORTS[shortIndex]}
                        className="w-full h-full absolute inset-0 rounded-xl"
                        src={`https://www.youtube.com/embed/${YOUTUBE_SHORTS[shortIndex]}?autoplay=0`}
                        title={`YouTube short player ${offset + 1}`}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-2xl font-heading font-semibold text-white">About Me</h2>
          </motion.div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-6 text-neutral-300 text-lg leading-relaxed font-light">
            <p>
              I am a Senior Graphic Design Specialist with over 10 years of experience managing graphic design projects from inception to execution. My expertise lies in creating compelling visual stories, whether through detailed infographics, impactful presentations, or high-end marketing collateral.
            </p>
            <p>
              My passion for emerging technologies has led me to deeply integrate Artificial Intelligence into my creative workflow. I hold specialized certifications in <strong className="text-white font-medium">AI Essentials</strong> from the appliedAI Institute, as well as <strong className="text-white font-medium">Generative AI</strong> and <strong className="text-white font-medium">Augmented Reality</strong> credentials from Adobe (such as Adobe Firefly and Adobe Aero). I leverage generative AI to push the boundaries of digital content creation, streamline artistic workflows, and deliver innovative visual concepts.
            </p>
            <p>
              Beyond my professional roles, I am the creator behind <strong className="text-white font-medium">George's Creative Studio</strong> on YouTube. My channel is a space where I share my creative journey, offering innovative DIY projects, inspiring art tutorials, and design showcases. I am passionate about building a community of dreamers and creators to explore the endless possibilities of creativity together.
            </p>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-2xl font-heading font-semibold text-white">Experience</h2>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                role: "Senior Analyst 1 (Graphic Designer)",
                company: "Hubbell Incorporated",
                date: "Oct 2021 - Present",
                features: [
                  "Oversee all design projects from conception to delivery.",
                  "Design original pieces, including illustrations and infographics.",
                  "Refine images, fonts, and layouts to increase user friendliness in digital products."
                ]
              },
              {
                role: "Infographic Designer",
                company: "Sprinklr",
                date: "Mar 2021 - Oct 2021",
                features: [
                  "Visualized data in innovative ways, teasing out the narrative to effectively tell stories.",
                  "Created sketches and wireframes, bringing them to life with Adobe Illustrator.",
                  "Designed custom artistic and content creation workflows using scripts and add-ons."
                ]
              },
              {
                role: "Senior Graphic Designer",
                company: "Provise Consulting",
                date: "Dec 2018 - Mar 2021",
                features: [
                  "Oversaw all design elements, providing guidance and feedback to junior designers.",
                  "Ensured high standards of digital creativity across the organization."
                ]
              },
              {
                role: "Senior Documentation Specialist",
                company: "Williams Lea",
                date: "Jun 2016 - Jan 2018",
                features: [
                  "Designed incredible Keynote and PowerPoint templates for global pitch presentations.",
                  "Partnered with communications teams to develop strategic experiential elements."
                ]
              }
            ].map((job, idx) => (
              <motion.div key={idx} variants={FADE_UP_ANIMATION_VARIANTS} className="group relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-neutral-800 before:rounded-full before:border-2 before:border-neutral-900 after:absolute after:left-[5px] after:top-6 after:w-px after:h-[calc(100%+16px)] after:bg-[#222] last:after:hidden">
                <div className="absolute left-[5px] top-6 w-px h-[calc(100%+2rem)] bg-[#222] group-last:hidden"></div>
                
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">{job.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
                  <span className="font-medium text-neutral-300">{job.company}</span>
                  <span className="text-neutral-500">&mdash;</span>
                  <span className="text-neutral-500 font-mono">{job.date}</span>
                </div>
                <ul className="space-y-2 text-neutral-400">
                  {job.features.map((feat, i) => (
                    <li key={i} className="flex gap-3">
                      <ChevronRight className="w-4 h-4 text-neutral-600 shrink-0 mt-1" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-2xl font-heading font-semibold text-white">Skills & Tools</h2>
          </motion.div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center gap-2"><Palette className="w-4 h-4 text-indigo-400" /> Core Design</h3>
              <div className="flex flex-wrap gap-2">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Infographics', 'Creative Direction'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-white/10 rounded-lg text-sm text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center gap-2"><Video className="w-4 h-4 text-indigo-400" /> Motion & Emerging</h3>
              <div className="flex flex-wrap gap-2">
                {['Adobe AfterEffects', 'Adobe Premiere', 'Adobe Aero (AR)', 'Generative AI (Firefly)'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-white/10 rounded-lg text-sm text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center gap-2"><MonitorPlay className="w-4 h-4 text-indigo-400" /> Presentations</h3>
              <div className="flex flex-wrap gap-2">
                {['Microsoft PowerPoint', 'Apple Keynote', 'Pitch Decks'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-white/10 rounded-lg text-sm text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center gap-2"><Globe className="w-4 h-4 text-indigo-400" /> Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['English (C2)', 'Malayalam (Native)', 'Hindi (B1)', 'German (A1)'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-white/10 rounded-lg text-sm text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Certifications */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-2xl font-heading font-semibold text-white">Certifications</h2>
          </motion.div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "AI Essentials", issuer: "appliedAI Institute", icon: Award },
              { title: "Generative AI in the Classroom", issuer: "Adobe", icon: GraduationCap },
              { title: "Augment Reality with Your Students", issuer: "Adobe", icon: GraduationCap },
              { title: "UX/UI Design for Beginners", issuer: "Udemy", icon: Layout },
              { title: "Content Creator PRO", issuer: "Sprinklr", icon: Award },
              { title: "Animation in After Effects", issuer: "Udemy", icon: Video },
            ].map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#111] flex gap-4 items-start">
                <div className="p-2 bg-[#222] rounded-lg shrink-0">
                  <cert.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm leading-tight mb-1">{cert.title}</h4>
                  <p className="text-neutral-500 text-xs">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education & Portfolio */}
        <motion.section 
          id="work"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CHILDREN}
          className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-white/10 pt-16"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-2xl font-heading font-semibold text-white">Education & Work</h2>
          </motion.div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grid md:grid-cols-2 gap-12">
            
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-white font-medium flex items-center gap-2 border-b border-white/10 pb-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" /> Education
              </h3>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-white">Bachelor of Electronics</h4>
                <div className="text-sm text-neutral-400">MG University &bull; 2007 – 2010</div>
                <p className="text-neutral-500 text-sm mt-1">Kottayam, Kerala, India</p>
              </div>
            </div>

            {/* Featured Work Links */}
            <div className="space-y-6">
              <h3 className="text-white font-medium flex items-center gap-2 border-b border-white/10 pb-2">
                <Briefcase className="w-4 h-4 text-indigo-400" /> Featured Portfolios
              </h3>
              <div className="space-y-3">
                <a href="https://www.behance.net/Georgecreativelab" target="_blank" rel="noreferrer" className="block group">
                  <div className="flex items-center justify-between text-neutral-300 group-hover:text-indigo-400 transition-colors">
                    <span className="font-medium">Main Behance Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
                <a href="https://www.behance.net/gallery/98981099/NEXT-TECHNOLOGYS" target="_blank" rel="noreferrer" className="block group">
                  <div className="flex items-center justify-between text-neutral-300 group-hover:text-indigo-400 transition-colors">
                    <span className="font-medium">Next Technologys Presentation</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
                <a href="https://www.behance.net/gallery/162725255/Scalene-HR-works?" target="_blank" rel="noreferrer" className="block group">
                  <div className="flex items-center justify-between text-neutral-300 group-hover:text-indigo-400 transition-colors">
                    <span className="font-medium">Scalene HR Works</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
                <a href="https://www.behance.net/gallery/126052749/infographics" target="_blank" rel="noreferrer" className="block group">
                  <div className="flex items-center justify-between text-neutral-300 group-hover:text-indigo-400 transition-colors">
                    <span className="font-medium">Infographics Collection</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Georgekutty M. Cherian. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
             <a href="https://www.behance.net/Georgecreativelab" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">Behance</a>
             <a href="https://www.linkedin.com/in/georgekutty-m-c-16886193/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

