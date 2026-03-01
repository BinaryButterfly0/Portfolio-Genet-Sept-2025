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
  headline: `Hi, I’m ${PROFILE.firstname} ${PROFILE.lastname}`,
  subline:
    "Cyber Security Specialist | SOC Lab Enthusiast  Passionate about building defensive labs and mastering Security Operations. I bridge the gap between complex technical threats and robust business defense.",
  socialIcons: [
    { icon: "/images/loLofoTelegram.svg", url: "https://t.me/CyberLoopX" },
    {
      icon: "/images/IoLogoLinkedin.svg",
      url: "https://www.linkedin.com/in/genet-shibru-eshetu/",
    },
    {
      icon: "/images/IoLogoGithub.svg",
      url: "https://github.com/BinaryButterfly0",
    },

    {
  name: "Email",
  icon: "/images/gmail.png", // Suggest renaming icon if possible
  url: "mailto:genetshibru0@gmail.com?subject=Inquiry from Portfolio - Security Analyst",
}
    
  ], 
  resumeButton: {
  label: "Download My Resume",
  href: "/cv.pdf",
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
      name: "Deploying & Testing Microsoft Defender for Endpoint",
      live_demo: "https://genetshibru.medium.com/deploying-testing-microsoft-defender-for-endpoint-8ed1e131671e",
      description:"Deployed a multi-node Azure environment and onboarded assets into Microsoft Defender for Endpoint using EDR in Block Mode. I validated the security posture by executing a PowerShell-based attack simulation successfully triggering and analyzing real-time alerts in the Defender XDR portal.",

      thumbnails: "EDR.png",
      type: "Home Lab",
    },

    {
      name: "SaaS API Security Risk Assessment (OWASP Top 10)",
      live_demo: "https://www.linkedin.com/posts/genet-shibru-eshetu_api-security-risk-analysis-hands-on-assessment-activity-7429873838437396480-mrgM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEODtksBXEC1SlypGGS1JqPMaBB9pfB0w-E",
      description:"Conducted a 'Black Box' security audit of a REST API using the OWASP API Security Top 10 framework to identify critical vulnerabilities. I discovered and documented high-risk flaws, including Broken Object Level Authorization (BOLA) and Excessive Data Exposure (PII leakage) of sensitive user coordinates and emails. I concluded the project by delivering a comprehensive remediation strategy, including JWT authentication implementation and DTO-based data filtering to mitigate risks of massive data breaches.",
      thumbnails: "API.jpg",
      type: "Home Lab",
    },
    
   
    {
      name: "Incident Response Report: Data Exfiltration via Backdoor",
      live_demo: "https://medium.com/@genetshibru/%EF%B8%8F-incident-response-report-data-exfiltration-via-backdoor-f9bcb4b04b2d",
      description: "Investigated a critical backdoor compromise and data exfiltration incident using Security Onion (Sguil, Wireshark, Kibana). I reconstructed the attacker’s commands to confirm root-level access and identified the unauthorized theft of sensitive files through deep packet inspection. By capturing digital fingerprints (MD5/SHA1 hashes) of the stolen data, I provided 100% forensic proof of the breach. I concluded the lab by detailing critical remediation steps, including host isolation, system hardening, and credential resets.",
      
      thumbnails: "Data exfiltration report with Captain Root-Beard.png",
      type: "Home Lab",
    },
    
    {
      name: "SOC Log Analysis with Splunk",
      live_demo: "https://github.com/BinaryButterfly0/SOC-Log-Analysis-with-Splunk",
      description:
        "This project focuses on log analysis and threat detection using Splunk, a leading platform for searching, monitoring, and analyzing machine-generated data. The logs are systematically categorized based on server types—including Windows, Linux, and Web servers—and protocols such as DNS, HTTP, SSH, and Zeek. By organizing logs in this way, the project enables efficient monitoring, correlation of events, and rapid detection of anomalies or security incidents across diverse IT environments. This structured approach helps security analysts gain actionable insights and maintain robust system security.",
      thumbnails: "splunk-1.png",
      type: "Home Lab",
    },
    {
      name:"Automated Server Hardening with Fail2Ban",
      live_demo: "https://medium.com/@genetshibru/securing-ssh-on-aws-ubuntu-with-fail2ban-a-beginners-hands-on-lab-841024858cbb",
      description:"Implemented automated intrusion prevention on AWS Ubuntu using Fail2Ban to mitigate SSH brute-force attacks. I configured custom jail policies and monitored system logs to dynamically block malicious IPs via iptables. This project demonstrates my expertise in server hardening and proactive defense for cloud-based infrastructure.",
      thumbnails: "Automated Server Hardening with Fail2Ban.jpg",
      type: "Home Lab",
    },

    {
      name: "Network Analysis with Wireshark",
      live_demo: "https://github.com/BinaryButterfly0/Network-Analysis-using-Wireshark",
      description: "Conducted deep packet inspection and network forensic analysis using Wireshark and TCPDump. I specialized in protocol dissection and TCP stream reconstruction to identify network anomalies and potential security threats.This project highlights my ability to troubleshoot complex connectivity issues and monitor high-volume network traffic for security compliance",
      thumbnails: "wireshark.jpg",
      type: "Home Lab",
    },
    {
      name: "Identifying Vulnerabilities in Network",
      live_demo: "https://github.com/BinaryButterfly0/Identifying-Vulnerabilities-in-Network",
      description: "Performed comprehensive network reconnaissance and vulnerability assessments using Nmap and Zenmap. I specialized in service version detection and used the Nmap Scripting Engine (NSE) to identify high-risk security gaps and misconfigured ports. This project demonstrates my ability to proactively secure infrastructure by identifying potential attack vectors and recommending hardening strategies.",
      thumbnails: "nmap and wireshark.jpg",
      type: "Home Lab",
    },
    {
      name: "Cyber Threat Intelligence (CTI) & Malware Analysis",
      live_demo: "https://medium.com/@genetshibru/threat-intelligence-report-eabcb8844e55",
      description: "Developed a strategic intelligence report identifying emerging threats and Living off the Land (LotL) techniques to enhance organizational detection and response capabilities.",
      thumbnails: "Threat Intelligence Report.jpg",
      type: "Home Lab",
    },
    
  ],
};

export const ABOUT = {
  label: "Let me introduce my self",
  introduce: [
    `My name is ${PROFILE.fullname},
    I am a Technical Cybersecurity Pre-Sales professional and Computer Science honors graduate  dedicated to defending digital infrastructure. By day, I design secure architectures and translate complex threats into business solutions. 
   
    By night, I am a SOC Lab Enthusiast, hardening systems and conducting deep-dive threat analysis..`,

    "Always eager to collaborate and grow, I’m committed to building a strong path in cybersecurity!",
  ],
};

export const CTA = {
  label: "Let’s Secure Something Great Together",
  description:
    "Want to protect your systems and hunt down threats? I’m here to help you strengthen defenses, respond to incidents, and uncover hidden risks—efficient, proactive, and security-focused.",
};
