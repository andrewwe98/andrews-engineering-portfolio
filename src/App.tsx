const skills = [
  'Python',
  'Java',
  'PHP',
  'JavaScript',
  'Electron',
  'React',
  'TypeScript',
  'Dart',
  'Flutter',
  'jQuery',
  'WordPress',
]

const projects = [
  {
    name: 'NightTube',
    type: 'YouTube clone + saved video library',
    accent: 'bg-citron',
    description:
      'A YouTube-inspired platform where users can watch, save, and revisit videos, sign in with authentication, and stream content from any YouTube source in a responsive mobile and tablet-friendly experience.',
    stack: ['React', 'TypeScript', 'Node.js', 'Auth', 'YouTube API'],
  },
  {
    name: 'Air Force Base Ops Console',
    type: 'Electron + JavaScript desktop product',
    accent: 'bg-coral',
    description:
      'A mission-support desktop dashboard for an air force base with built-in training flows that quiz users on equipment, parts, and procedures while helping staff memorize critical components in a fast, clear interface.',
    stack: ['Electron', 'JavaScript', 'Node.js', 'Training UI'],
  },
  {
    name: 'Emergency Worker Social App',
    type: 'Flutter + Dart community product',
    accent: 'bg-citron',
    description:
      'A supportive social app for emergency workers to share updates, check in with teams, and access community-led guidance in a structured, low-friction interface.',
    stack: ['Dart', 'Flutter', 'Firebase', 'UX'],
  },
]

const wordpressShape = [
  { key: 'wp-json/wp/v2/pages', value: 'Portfolio sections' },
  { key: 'acf.skills', value: 'Typed skill groups' },
  { key: 'theme.json', value: 'Design tokens' },
  { key: 'functions.php', value: 'REST fields + assets' },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <section className="relative min-h-[92vh] border-b-2 border-ink px-4 py-4 sm:px-8 lg:px-12">
        <nav className="relative z-20 flex items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-3 shadow-sharp sm:px-4">
          <a className="font-mono text-xs uppercase tracking-[0.18em] sm:text-sm" href="#top">
            Andrew Wells
          </a>
          <div className="hidden items-center gap-4 font-mono text-[10px] uppercase sm:flex sm:gap-5 sm:text-xs">
            <a className="hover:underline" href="#work">
              Work
            </a>
            <a className="hover:underline" href="#stack">
              Stack
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="absolute inset-0 custom-grid opacity-70" />
        <div className="absolute left-0 top-24 h-12 w-full rotate-[-3deg] border-y-2 border-ink bg-citron font-mono text-[10px] uppercase sm:top-28 sm:text-xs">
          <div className="animate-ticker whitespace-nowrap py-4">
            React / TypeScript / WordPress / PHP / Java / Python / Tailwind / REST APIs / problem solving / human-centered engineering /
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 pb-12 pt-20 sm:gap-10 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pb-16 lg:pt-28">
          <div id="top" className="space-y-6 sm:space-y-8">
            <p className="inline-flex border-2 border-ink bg-aqua px-3 py-2 font-mono text-[10px] uppercase shadow-sharp sm:text-xs">
              Full-stack engineer
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-8xl">
                I build WordPress-aware React systems that feel alive.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
                I am a neurodivergent and autistic full-stack engineer who works across front end,
                back end, CMS architecture, and practical automation. I like interfaces with clear
                structure, honest motion, and code that future-me can still respect.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="w-full border-2 border-ink bg-ink px-5 py-3 text-center font-mono text-sm uppercase text-paper shadow-sharp transition hover:-translate-y-1 sm:w-auto"
                href="#work"
              >
                See the builds
              </a>
              <a
                className="w-full border-2 border-ink bg-paper px-5 py-3 text-center font-mono text-sm uppercase shadow-sharp transition hover:-translate-y-1 sm:w-auto"
                href="mailto:andrewwe98@gmail.com"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] border-2 border-ink bg-ink p-3 text-paper shadow-sharp sm:min-h-[440px] sm:p-4 lg:min-h-[520px]">
            <div className="absolute -right-3 -top-3 border-2 border-ink bg-coral px-3 py-2 font-mono text-[10px] uppercase text-ink sm:-right-4 sm:-top-4 sm:px-4 sm:text-xs">
              live theme
            </div>
            <div className="signal-stage h-full min-h-[330px] overflow-hidden border border-paper/20 sm:min-h-[400px] lg:min-h-[490px]">
              <div className="scanline" />
              <div className="floating-panel left-[8%] top-[12%] w-44 animate-drift sm:w-52">
                <p className="font-mono text-[10px] uppercase text-aqua">wp rest payload</p>
                <code className="mt-3 block text-[10px] leading-5 text-paper/80 sm:text-xs sm:leading-6">
                  {'{'} skill: "React", cms: "WordPress", role: "engineer" {'}'}
                </code>
              </div>
              <div className="floating-panel bottom-[13%] right-[9%] w-52 animate-drift [animation-delay:-6s] sm:w-64">
                <p className="font-mono text-[10px] uppercase text-citron">deploy trace</p>
                <div className="mt-3 grid gap-2 font-mono text-[10px] sm:text-xs">
                  <span className="animate-pulseCode">vite build: passed</span>
                  <span className="animate-pulseCode [animation-delay:.35s]">tailwind: compiled</span>
                  <span className="animate-pulseCode [animation-delay:.7s]">github pages: ready</span>
                </div>
              </div>
              <div className="code-rain" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, index) => (
                  <span key={index} style={{ '--i': index } as React.CSSProperties}>
                    {['const', 'php', 'java', 'type', 'hook', 'api'][index % 6]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-b-2 border-ink px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm uppercase">selected direction</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-6xl">Portfolio pieces with proof.</h2>
            </div>
            <p className="max-w-md text-base leading-7 sm:text-lg">
              These are framed as real engineering stories: content modeling, UI systems, automation,
              and maintainable code decisions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                className="group border-2 border-ink bg-paper p-5 shadow-sharp transition duration-300 hover:-translate-y-2"
                key={project.name}
              >
                <div className={`mb-8 h-3 w-28 border-2 border-ink ${project.accent}`} />
                <p className="font-mono text-xs uppercase">{project.type}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{project.name}</h3>
                <p className="mt-5 leading-7">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="border border-ink px-2 py-1 font-mono text-[11px] uppercase" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="grid border-b-2 border-ink lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b-2 border-ink bg-ink px-4 py-12 text-paper sm:px-8 lg:border-b-0 lg:border-r-2 lg:px-12 lg:py-16">
          <p className="font-mono text-sm uppercase text-aqua">skill map</p>
          <h2 className="mt-4 text-2xl font-black sm:text-4xl lg:text-6xl">I can move through the whole stack.</h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-10 lg:grid-cols-2 lg:gap-3">
            {skills.map((skill) => (
              <span className="border border-paper/40 px-2 py-3 text-center font-mono text-[11px] uppercase sm:px-3 sm:text-sm" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-citron px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
          <p className="font-mono text-sm uppercase">WordPress architecture</p>
          <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-5xl">Built like a CMS can feed it later.</h2>
          <div className="mt-8 border-2 border-ink bg-paper shadow-sharp sm:mt-10">
            {wordpressShape.map((item) => (
              <div className="grid gap-2 border-b-2 border-ink p-3 last:border-b-0 sm:grid-cols-[0.9fr_1.1fr] sm:p-4" key={item.key}>
                <code className="break-all font-mono text-[11px] sm:text-sm">{item.key}</code>
                <p className="text-sm leading-6 sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
          <pre className="mt-8 overflow-x-auto border-2 border-ink bg-ink p-3 font-mono text-[10px] leading-5 text-paper shadow-sharp sm:p-5 sm:text-xs sm:leading-6">
{`add_action('rest_api_init', function () {
  register_rest_field('page', 'portfolio_focus', [
    'get_callback' => fn($post) => get_post_meta($post['id'], 'focus', true),
  ]);
});`}
          </pre>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase">next step</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-6xl">Bring me the messy problem.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              I like taking tangled ideas and turning them into working systems: the React view,
              the WordPress content model, the PHP glue, the Java or Python logic, and the small
              details that make a site feel made by a person.
            </p>
          </div>
          <div className="border-2 border-ink bg-coral p-5 shadow-sharp sm:p-6">
            <p className="font-mono text-xs uppercase">currently open to</p>
            <p className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
              Full-stack, React, WordPress, and junior-to-mid engineering roles.
              <span className="animate-blink">_</span>
            </p>
            <a
              className="mt-8 inline-block w-full border-2 border-ink bg-paper px-5 py-3 text-center font-mono text-sm uppercase shadow-sharp transition hover:-translate-y-1 sm:w-auto"
              href="mailto:andrewwe98@gmail.com"
            >
              andrewwe98@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
