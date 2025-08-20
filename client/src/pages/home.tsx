import { useEffect, useState } from "react";

interface StepContent {
  title: string;
  content: string;
}

const stepContent: Record<string, StepContent> = {
  '1': {
    title: 'Power On',
    content: 'When you press the power button, the CPU begins executing from a predefined memory address. The power supply unit (PSU) provides stable power to all components, and the CPU starts its first instruction fetch cycle.'
  },
  '2': {
    title: 'BIOS/UEFI Firmware',
    content: 'The firmware (BIOS or UEFI) is the first software that runs. It initializes hardware components, sets up basic system parameters, and prepares the system for the next boot stage. UEFI is more modern and secure than BIOS.'
  },
  '3': {
    title: 'POST (Power-On Self-Test)',
    content: 'POST performs a comprehensive hardware check including memory tests, CPU verification, storage device detection, and peripheral initialization. Any failures are reported through beep codes or error messages.'
  },
  '4': {
    title: 'GRUB Boot Loader',
    content: 'GRUB (GRand Unified Bootloader) presents a menu of available operating systems, loads the selected kernel into memory, and passes control to it. It can also load initial RAM disks (initramfs) containing essential drivers.'
  },
  '5': {
    title: 'Linux Kernel',
    content: 'The Linux kernel decompresses itself, initializes core subsystems (memory management, process scheduling, device drivers), mounts the root filesystem, and prepares the userspace environment.'
  },
  '6': {
    title: 'systemd Init System',
    content: 'systemd is the first userspace process (PID 1) that starts all other services and processes. It manages service dependencies, handles system targets (runlevels), and orchestrates the boot process to reach the desired system state.'
  },
  '7': {
    title: 'Desktop Environment',
    content: 'The display manager starts the graphical environment, presents the login screen, and after authentication, launches the desktop environment (GNOME, KDE, XFCE, etc.) providing the user interface.'
  }
};

export default function Home() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const handleStepClick = (stepNumber: string) => {
    setActiveStep(stepNumber);
    
    // Scroll to the details section
    const detailsElement = document.getElementById('stepDetails');
    if (detailsElement) {
      detailsElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <div className="bg-dark-primary text-text-primary font-sans">
      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark-secondary/95 backdrop-blur-md border-b border-dark-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fab fa-linux text-accent-green text-2xl" />
              <span className="text-xl font-semibold">Linux Boot Process</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#overview" className="text-text-secondary hover:text-accent-blue transition-colors">Overview</a>
              <a href="#flowchart" className="text-text-secondary hover:text-accent-blue transition-colors">Flowchart</a>
              <a href="#detailed" className="text-text-secondary hover:text-accent-blue transition-colors">Details</a>
              <a href="#conclusion" className="text-text-secondary hover:text-accent-blue transition-colors">Conclusion</a>
            </div>
            <button 
              className="md:hidden text-text-secondary" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-b border-dark-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#overview" className="block text-text-secondary hover:text-accent-blue transition-colors">Overview</a>
            <a href="#flowchart" className="block text-text-secondary hover:text-accent-blue transition-colors">Flowchart</a>
            <a href="#detailed" className="block text-text-secondary hover:text-accent-blue transition-colors">Details</a>
            <a href="#conclusion" className="block text-text-secondary hover:text-accent-blue transition-colors">Conclusion</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="overview" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              From Power Button to Penguin 🐧
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              The Linux Boot Journey Explained
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
              Most of us hit the power button, grab a coffee, and by the time we sit down, Linux is ready for work. 
              But in those few seconds, your machine goes through a complex, beautifully orchestrated sequence that 
              transforms bare metal into a running operating system.
            </p>
            <a 
              href="#flowchart" 
              className="inline-flex items-center px-8 py-4 bg-accent-blue hover:bg-blue-600 rounded-lg font-medium transition-colors"
              data-testid="link-start-journey"
            >
              <i className="fas fa-play mr-2" />
              Start the Journey
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Flowchart Section */}
      <section id="flowchart" className="py-16 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Linux Boot Process Flowchart</h2>
            <p className="text-text-secondary text-lg">Click on each step to learn more about that stage</p>
          </div>
          
          {/* Interactive Flowchart */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 flowchart-mobile">
              
              {/* Step 1: Power On */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '1' ? 'active' : ''}`}
                onClick={() => handleStepClick('1')}
                data-testid="step-power-on"
              >
                <i className="fas fa-power-off text-4xl text-accent-green mb-4" />
                <h3 className="font-semibold text-lg mb-2">Power On</h3>
                <p className="text-text-secondary text-sm">CPU starts executing</p>
              </div>
              
              <i className="fas fa-arrow-right text-text-muted text-2xl flowchart-arrow" />
              
              {/* Step 2: BIOS/UEFI */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '2' ? 'active' : ''}`}
                onClick={() => handleStepClick('2')}
                data-testid="step-bios-uefi"
              >
                <i className="fas fa-microchip text-4xl text-accent-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">BIOS/UEFI</h3>
                <p className="text-text-secondary text-sm">Firmware initialization</p>
              </div>
              
              <i className="fas fa-arrow-right text-text-muted text-2xl flowchart-arrow" />
              
              {/* Step 3: POST */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '3' ? 'active' : ''}`}
                onClick={() => handleStepClick('3')}
                data-testid="step-post"
              >
                <i className="fas fa-check-circle text-4xl text-accent-purple mb-4" />
                <h3 className="font-semibold text-lg mb-2">POST</h3>
                <p className="text-text-secondary text-sm">Hardware verification</p>
              </div>
              
              <i className="fas fa-arrow-right text-text-muted text-2xl flowchart-arrow" />
              
              {/* Step 4: Boot Loader */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '4' ? 'active' : ''}`}
                onClick={() => handleStepClick('4')}
                data-testid="step-grub"
              >
                <i className="fas fa-list text-4xl text-accent-green mb-4" />
                <h3 className="font-semibold text-lg mb-2">GRUB</h3>
                <p className="text-text-secondary text-sm">Boot loader menu</p>
              </div>
            </div>
            
            {/* Arrow connecting GRUB to Kernel */}
            <div className="flex justify-center my-6">
              <i className="fas fa-arrow-down text-text-muted text-2xl md:hidden" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 mt-8 flowchart-mobile">
              {/* Step 5: Kernel */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '5' ? 'active' : ''}`}
                onClick={() => handleStepClick('5')}
                data-testid="step-kernel"
              >
                <i className="fab fa-linux text-4xl text-accent-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Kernel</h3>
                <p className="text-text-secondary text-sm">Linux kernel loads</p>
              </div>
              
              <i className="fas fa-arrow-right text-text-muted text-2xl flowchart-arrow" />
              
              {/* Step 6: systemd */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '6' ? 'active' : ''}`}
                onClick={() => handleStepClick('6')}
                data-testid="step-systemd"
              >
                <i className="fas fa-cogs text-4xl text-accent-purple mb-4" />
                <h3 className="font-semibold text-lg mb-2">systemd</h3>
                <p className="text-text-secondary text-sm">Init system starts</p>
              </div>
              
              <i className="fas fa-arrow-right text-text-muted text-2xl flowchart-arrow" />
              
              {/* Step 7: Desktop */}
              <div 
                className={`flowchart-step rounded-xl p-6 w-full md:w-48 text-center ${activeStep === '7' ? 'active' : ''}`}
                onClick={() => handleStepClick('7')}
                data-testid="step-desktop"
              >
                <i className="fas fa-desktop text-4xl text-accent-green mb-4" />
                <h3 className="font-semibold text-lg mb-2">Desktop</h3>
                <p className="text-text-secondary text-sm">User interface ready</p>
              </div>
            </div>
          </div>
          
          {/* Step Details Panel */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <div id="stepDetails" data-testid="step-details">
                  {activeStep ? (
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-accent-blue">
                        {stepContent[activeStep]?.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {stepContent[activeStep]?.content}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Click on any step above to learn more</h3>
                      <p className="text-text-secondary">Explore each stage of the Linux boot process in detail</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Article Content */}
      <section id="detailed" className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Firmware Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">1</span>
                Firmware Awakens: BIOS vs UEFI
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">
                  The instant you press the power button, your CPU doesn't jump straight into Linux. First, it runs 
                  <strong className="text-accent-blue"> firmware</strong> stored on your motherboard — historically 
                  <strong> BIOS</strong>, but on modern machines, <strong> UEFI</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-dark-tertiary rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-accent-blue">BIOS (Basic Input/Output System)</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• The veteran from the 1980s</li>
                      <li>• Uses <strong>MBR (Master Boot Record)</strong> for booting</li>
                      <li>• Limitation: max <strong>2TB disks</strong>, slower, and less secure</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-tertiary rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-accent-green">UEFI (Unified Extensible Firmware Interface)</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• The modern successor</li>
                      <li>• Uses <strong>GPT (GUID Partition Table)</strong>, supporting massive disks</li>
                      <li>• Provides <strong>faster boots</strong> and <strong>Secure Boot</strong></li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-text-muted mt-6 italic">
                  Think of BIOS/UEFI as the <strong>conductor tapping the podium</strong> before the orchestra begins.
                </p>
              </div>
            </div>

            {/* POST Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span>
                POST: Checking the Hardware
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">
                  Next comes <strong className="text-accent-purple">POST (Power-On Self-Test)</strong> — a quick diagnostic sweep.
                </p>
                <ul className="space-y-3 text-text-secondary mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent-green mr-3" />
                    Verifies memory, CPU, storage, keyboard, and GPU
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-yellow-500 mr-3" />
                    Errors here result in <strong>beep codes</strong> or on-screen warnings
                  </li>
                </ul>
                <p className="text-text-muted italic">
                  If all systems are "go," POST passes the baton to the boot loader.
                </p>
              </div>
            </div>

            {/* Boot Loader Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span>
                The Boot Loader: Choosing Who Leads
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">
                  Now, firmware must find and load the <strong className="text-accent-green">boot loader</strong>, 
                  the small program responsible for starting your OS.
                </p>
                
                <div className="code-block rounded-lg p-4 mb-6 font-mono text-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-accent-blue">On BIOS:</span>
                    <span className="text-text-secondary ml-2">looks for code in the MBR</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-accent-green">On UEFI:</span>
                    <span className="text-text-secondary ml-2">loads a .efi file from the EFI partition</span>
                  </div>
                </div>
                
                <div className="bg-dark-tertiary rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-accent-blue">GRUB2 (GRand Unified Bootloader)</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Can boot multiple operating systems</li>
                    <li>• Offers text or graphical menus</li>
                    <li>• Lets power users tweak kernels or enter rescue mode</li>
                  </ul>
                </div>

                <p className="text-text-muted mt-6 italic">
                  At this stage, you're no longer watching — you're making choices. Boot into Linux? Another OS? Recovery mode? GRUB is your guide.
                </p>
              </div>
            </div>

            {/* Loading the Kernel */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">4</span>
                Loading the Kernel
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">Once GRUB has its orders, it:</p>
                <ol className="space-y-3 text-text-secondary mb-6 list-decimal list-inside">
                  <li>Locates the <strong>Linux kernel</strong> (e.g., <code>/boot/vmlinuz-...</code>)</li>
                  <li>Loads it into memory</li>
                  <li>Provides an <strong>initramfs</strong> (initial RAM filesystem) with essential drivers</li>
                  <li>Hands control to the kernel</li>
                </ol>
                <p className="text-text-muted italic">
                  This is the handoff where Linux itself begins to stir.
                </p>
              </div>
            </div>

            {/* Kernel Initialization */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">5</span>
                Kernel Initialization: Linux Takes Charge
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">The <strong className="text-accent-purple">Linux kernel</strong> now assumes command.</p>
                <ul className="space-y-3 text-text-secondary mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-expand-arrows-alt text-accent-blue mr-3" />
                    It <strong>decompresses</strong> itself into memory
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-search text-accent-green mr-3" />
                    Probes hardware and loads appropriate <strong>device drivers</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-folder-open text-accent-purple mr-3" />
                    Mounts the <strong>root filesystem</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-cogs text-accent-blue mr-3" />
                    Initializes critical subsystems: memory management, scheduling, networking, I/O
                  </li>
                </ul>
                <p className="text-text-muted italic">
                  At this point, your machine is alive — but not yet usable. The kernel is ready, but someone has to start the services and user processes. Enter…
                </p>
              </div>
            </div>

            {/* systemd */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">6</span>
                Systemd: The Parent of Processes
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">
                  The kernel's first userspace task is to start <strong>init</strong>, which in modern Linux distributions is almost always <strong className="text-accent-green">systemd</strong>.
                </p>
                
                <p className="text-text-secondary mb-4">Systemd's role is vast:</p>
                <ul className="space-y-3 text-text-secondary mb-6">
                  <li>• Mount all filesystems</li>
                  <li>• Launch background services (networking, sound, logging, printing)</li>
                  <li>• Set the system target (like runlevels of old):</li>
                </ul>

                <div className="code-block rounded-lg p-4 mb-6 font-mono text-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-accent-blue">multi-user.target</span>
                    <span className="text-text-secondary ml-2">→ text-only mode</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-accent-green">graphical.target</span>
                    <span className="text-text-secondary ml-2">→ full desktop</span>
                  </div>
                </div>

                <p className="text-text-muted italic">
                  Systemd is literally the <strong>ancestor of all other processes</strong>. If you run <code>pstree</code> on a Linux system, you'll see everything branches from it.
                </p>
              </div>
            </div>

            {/* User Space */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center">
                <span className="bg-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">7</span>
                User Space: Welcome to Linux
              </h2>
              <div className="bg-dark-secondary rounded-xl p-8 border border-dark-border">
                <p className="text-text-secondary mb-6">Finally, systemd hands you the keys:</p>
                <ul className="space-y-3 text-text-secondary mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-sign-in-alt text-accent-green mr-3" />
                    Starts the <strong>login manager</strong> (GDM, LightDM, etc.)
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-desktop text-accent-blue mr-3" />
                    After login, your <strong>desktop environment</strong> (GNOME, KDE Plasma, XFCE, etc.) launches
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-window-maximize text-accent-purple mr-3" />
                    Panels, menus, and services spin up — and now you're ready to work
                  </li>
                </ul>
                <p className="text-text-muted italic">
                  From pressing the power button to a usable desktop, Linux has choreographed a dance of <strong>firmware → kernel → services → user space</strong>, usually in under 10 seconds.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-16 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🎯 Conclusion</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Next time you hit that power button, remember: you're not just starting a machine, you're watching an elegant 
              chain of software handovers — from BIOS/UEFI to GRUB, kernel, systemd, and finally your desktop.
            </p>
            <p className="text-lg text-accent-blue font-medium mb-12">
              It's a <strong>symphony of silicon and software</strong> — and Linux makes sure the music plays just right. 🐧
            </p>
            
            {/* Call to Action */}
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <h3 className="text-2xl font-semibold mb-4">Want to Learn More?</h3>
                <p className="text-text-secondary mb-6">
                  Explore advanced topics like custom kernel compilation, systemd service creation, and boot optimization techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/Mk-dugri" 
                    className="inline-flex items-center px-6 py-3 bg-accent-blue hover:bg-blue-600 rounded-lg font-medium transition-colors"
                    data-testid="link-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-2" />
                    View on GitHub
                  </a>
                  <button 
                    className="inline-flex items-center px-6 py-3 bg-dark-tertiary hover:bg-gray-700 border border-dark-border rounded-lg font-medium transition-colors"
                    data-testid="button-share"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Linux Boot Process Explained',
                          text: 'Learn about the Linux boot process from power button to desktop',
                          url: window.location.href
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('URL copied to clipboard!');
                      }
                    }}
                  >
                    <i className="fas fa-share mr-2" />
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <i className="fab fa-linux text-accent-green text-2xl" />
              <span className="text-xl font-semibold">Linux Boot Process</span>
            </div>
            <p className="text-text-secondary mb-6">
              A comprehensive guide to understanding how Linux systems start up
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Mk-dugri" className="text-text-muted hover:text-accent-blue transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/monu9855/" className="text-text-muted hover:text-accent-blue transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-xl" />
              </a>
            </div>
            <p className="text-text-muted text-sm mt-6">
              © 2024 Linux Boot Process Blog. Built for GitHub Pages.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
