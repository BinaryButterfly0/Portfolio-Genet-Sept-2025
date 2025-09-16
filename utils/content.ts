export const NAVLINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Works",
    url: "#work",
  },
  {
    label: "Service",
    url: "/#service",
  },
];

export const PROFILE = {
  firstname: "Genet ",
  lastname: "Shibru",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Aspiring SOC Analyst",
  avatar: "/images/profile.jpg",
};

export const HERO = {
  badge: "Available for freelance",
  headline: `👋Ahoy, I’m ${PROFILE.firstname}`,
  subline:
    "Aspiring SOC Analyst passionate about hunting threats, securing systems, and keeping the digital world safe",
  socialIcons: [
    { icon: "/images/loLofoTelegram.svg", url: "https://t.me/parahez" },
    {
      icon: "/images/IoLogoLinkedin.svg",
      url: "https://www.linkedin.com/in/genet-shibru-eshetu/",
    },
    {
      icon: "/images/IoLogoGithub.svg",
      url: "https://github.com/BinaryButterfly0",
    },
    {
      icon: "/images/IoLogoTwitter.svg",
      url: "https://x.com/shibru_gen49167?s=21",
    },
    
    
  ],
  resumeButton: {
    label: "Download My Resume",
    href: "/Genet Shibru CV April.pdf",
    download: true,
    variant: "btn-dark",
  },
  
};
export const SERVICE = {
  label: "service",
  headline: "Security-focused solutions for your requirements.",
  subline:
    "I provide expertise in SOC operations, IT support, and operations management to help you secure and optimize your digital environment.",
  services: [
    {
      name: "Security Operations Center (SOC)",
      icon: "Scroll", // swap with your preferred icon or SVG
      description:
        "Monitoring, detecting, and responding to cyber threats to keep your organization secure and resilient.",
      thumbnails: "",
    },
    {
      name: "IT Support / Help Desk",
      icon: "Headphones", // support/help-related icon
      description:
        "Providing reliable IT support and troubleshooting to ensure smooth and efficient operations.",
      thumbnails: "",
    },
    {
      name: "Operations Management",
      icon: "Activity", // workflow/management-style icon
      description:
        "Optimizing workflows, managing processes, and improving efficiency across your organization.",
      thumbnails: "",
    },
  ],
};









export const WORK = {
  label: "work",
  headline: "Custom design solutions for your requirements.",
  subline:
    "I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.",
  works: [
    {
      name: "SOC Log Analysis with Splunk",
      live_demo: "https://github.com/BinaryButterfly0/SOC-Log-Analysis-with-Splunk",
      description:
        "This project focuses on log analysis and threat detection using Splunk, a leading platform for searching, monitoring, and analyzing machine-generated data. The logs are systematically categorized based on server types—including Windows, Linux, and Web servers—and protocols such as DNS, HTTP, SSH, and Zeek. By organizing logs in this way, the project enables efficient monitoring, correlation of events, and rapid detection of anomalies or security incidents across diverse IT environments. This structured approach helps security analysts gain actionable insights and maintain robust system security.",
      thumbnails: "LA.png",
      type: "Home Lab",
    },
    {
      name: "Network Analysis with Wireshark",
      live_demo: "https://github.com/BinaryButterfly0/Network-Analysis-using-Wireshark",
      description: "This lab focuses on network analysis using Wireshark, with an emphasis on TLS (Transport Layer Security) traffic. Students will explore how TLS secures data over the network, understand the handshake process, and examine key metadata such as server names, certificate details, TLS versions, and cipher suites. By analyzing TLS traffic, students gain practical skills in identifying outdated protocols, suspicious certificates, and potential misuse of encrypted channels, enhancing their ability to monitor and secure network communications effectively.",
      thumbnails: "NA.png",
      type: "Home Lab",
    },
    {
      name: "Incident Response",
      live_demo: "#",
      description:
        "This lab focuses on incident detection, analysis, and response in a Windows environment. It covers the incident response lifecycle—from identifying suspicious activity and detecting threats, to containing, eradicating, and recovering from incidents. Detection involves monitoring logs and alerts for anomalies such as failed logins, malware execution, or unauthorized access. Threats are analyzed by correlating events, identifying attacker behavior, and determining the scope of compromise. All findings are logged and documented to support reporting, forensic analysis, and improving security measures.",
      thumbnails: "IR.png",
      type: "Home Lab",
    },
    {
      name: "Detecting Suspicious PowerShell Activity and managing Firewall rules",
      live_demo: "#",
      description:
        "Coming Soon",
      thumbnails: "ps.png",
      type: "Home Lab",
    },

    {
      name: "Coming Soon",
      live_demo: "#",
      description:
        "Coming Soon",
      thumbnails: "wazuh.png",
      type: "Home Lab",
    },

    {
      name: "Coming Soon",
      live_demo: "#",
      description:
        "Coming Soon",
      thumbnails: "COMING.png",
      type: "Home Lab",
    },
    

    

    
  ],
};

export const ABOUT = {
  label: "Let me introduce my self",
  introduce: [
    `My name is ${PROFILE.fullname}, I work in IT and I’m deeply passionate about cybersecurity, with a special focus on building and exploring home labs 
    around Security Operations Center (SOC) practices. I enjoy continuously learning, experimenting with security tools, and strengthening my skills to better understand 
    threats and defenses.`,

    "Always eager to collaborate and grow, I’m committed to building a strong path in cybersecurity!",
  ],
};

export const CTA = {
  label: "Let’s Secure Something Great Together",
  description:
    "Want to protect your systems and hunt down threats? I’m here to help you strengthen defenses, respond to incidents, and uncover hidden risks—efficient, proactive, and security-focused.",
};
