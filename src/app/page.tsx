"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";
import { EMAIL_ADDRESS, LINKEDIN_URL } from "../constants/contact";
import { PROJECT_LIST } from "../constants/projects";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col bg-background selection:bg-primary/30">
      {/* Parallax Section */}
      <Hero />

      {/* About Section */}
      <section id="showcase" className="section-padding relative z-50">
        <div className="container-custom flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/images/me.png"
              alt="Richard Manansala"
              width={400}
              height={400}
              className="relative h-auto object-cover w-64 rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="flex flex-col w-full max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi! I&apos;m <span className="text-primary tracking-tighter">Richard</span>
            </h2>

            <p className="text-xl text-white/70 leading-relaxed font-light">
              I&apos;m a <span className="text-white font-semibold">data analyst</span> passionate about transforming raw data into actionable insights and data-driven strategies. I specialize in statistical analysis, data visualization, and predictive modeling.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="#contact" className="btn-primary max-sm:w-full">
                Contact me
              </Link>
              <Link href="#projects" className="btn-secondary max-sm:w-full">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding border-t border-white/10 bg-background/50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section text-center md:text-left">Technical Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-glass p-8 flex flex-col gap-6 group hover:border-primary/30"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-primary italic tracking-tight">Data Analysis & Analytics</h3>
                <div className="h-1 w-12 bg-primary/40 rounded group-hover:w-20 transition-all"></div>
                <p className="text-white/50 leading-relaxed">
                  I transform complex datasets into clear, interactive visualizations and strategic insights. Proficient in tools and languages including:
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> SQL (PostgreSQL, MySQL)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Python (Pandas, NumPy)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> R & RStudio</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Power BI</li>
                </ul>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Exploratory Data Analysis</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Data Wrangling & ETL</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Excel / Google Sheets</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-glass p-8 flex flex-col gap-6 group hover:border-primary/30"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-primary italic tracking-tight">Machine Learning & Modeling</h3>
                <div className="h-1 w-12 bg-primary/40 rounded group-hover:w-20 transition-all"></div>

                <p className="text-white/50 leading-relaxed">
                  I apply quantitative methods and machine learning models to solve business challenges and forecast outcomes:
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Scikit-learn</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Regression & Classification</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Time Series Forecasting</li>
                </ul>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Feature Engineering</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Statistical Inference</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding border-t border-white/10">
        <div className="container-custom flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-0 text-center md:text-left">Featured Projects</h2>
              <p className="text-white/40 max-w-sm text-center md:text-left text-sm">
                A collection of work spanning data analytics, statistical modeling, and interactive dashboards.
              </p>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-transform">
              View All Projects <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECT_LIST.slice(0, 4).map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding border-t border-white/10">
        <div className="container-custom flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-0 text-center">About Me</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-glass p-10 flex flex-col gap-6 w-full group hover:border-primary/30 transition-all"
            >
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-primary italic tracking-tight">Mathematician</h4>
                <div className="h-1 w-12 bg-primary/40 rounded group-hover:w-20 transition-all"></div>
              </div>

              <p className="text-white/80 leading-relaxed">
                Bridging the gap between mathematical rigor and business analytics. I specialize in developing statistical models that extract meaning from complex data.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Statistical Modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Hypothesis Testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Quantitative Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Probability & Inference
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-glass p-10 flex flex-col gap-6 w-full group hover:border-primary/30 transition-all"
            >
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-primary italic tracking-tight">Data Analyst</h4>
                <div className="h-1 w-12 bg-primary/40 rounded group-hover:w-20 transition-all"></div>
              </div>

              <p className="text-white/80 leading-relaxed">
                Transforming raw numbers into actionable storytelling. I leverage SQL, Python, and BI tools to automate reporting, uncover key trends, and support strategic decision-making.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Data Visualization
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> SQL & Querying
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Exploratory Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Dashboarding & BI
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="contact" className="section-padding border-t border-white/10 bg-background mb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-center leading-none tracking-tighter">
              Let&apos;s <span className="text-primary italic animate-subtle-bounce inline-block">elevate</span> <br /> your ideas
            </h2>

            <div className="card-glass p-10 flex flex-col gap-6 max-w-xl mx-auto w-full relative group">
              <div className="relative flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold tracking-tight">Get in touch</h3>
                  <p className="text-white/60">I&apos;m always open to new opportunities and collaborations. Reach out to me via:</p>
                </div>

                <div className="flex flex-col gap-4">
                  <Link href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-primary/20 group/link">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-black transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Email</div>
                      <span className="text-lg font-medium break-all">{EMAIL_ADDRESS}</span>
                    </div>
                  </Link>

                  <Link href={LINKEDIN_URL} target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-primary/20 group/link">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-black transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/40 font-bold">LinkedIn</div>
                      <div className="text-lg font-medium break-all">richardmanansala23</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



    </main>
  );
}