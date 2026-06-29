window.TAXONOMY = [
  {
    title: "Motherboard Slots and Interfaces",
    subtitle: "Sort each component or drive to the bus it uses.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "pcie", label: "PCIe" },
      { id: "sata", label: "SATA" },
      { id: "nvme", label: "NVMe" }
    ],
    items: [
      { text: "Discrete graphics card", cat: "pcie" },
      { text: "Add-in network card", cat: "pcie" },
      { text: "Dedicated sound card", cat: "pcie" },
      { text: "RAID expansion controller", cat: "pcie" },
      { text: "2.5 inch SSD", cat: "sata" },
      { text: "3.5 inch hard drive", cat: "sata" },
      { text: "Optical disc drive", cat: "sata" },
      { text: "Legacy 7200 RPM drive", cat: "sata" },
      { text: "M.2 PCIe SSD", cat: "nvme" },
      { text: "High-speed boot drive", cat: "nvme" },
      { text: "U.2 enterprise SSD", cat: "nvme" },
      { text: "Gen4 storage stick", cat: "nvme" },
      { text: "PCIe lane SSD module", cat: "nvme" }
    ]
  },
  {
    title: "Cable Types and Maximum Distances",
    subtitle: "Match each distance, speed, or use case to its cable.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "cat6", label: "Cat6" },
      { id: "cat6a", label: "Cat6a" },
      { id: "smf", label: "Single-mode Fiber" },
      { id: "mmf", label: "Multi-mode Fiber" }
    ],
    items: [
      { text: "10GBASE-T up to 55 meters", cat: "cat6" },
      { text: "1 Gbps to 100 meters", cat: "cat6" },
      { text: "Short office desktop run", cat: "cat6" },
      { text: "10GBASE-T up to 100 meters", cat: "cat6a" },
      { text: "Shielded full-speed 10G run", cat: "cat6a" },
      { text: "Long horizontal data run", cat: "cat6a" },
      { text: "Long-haul runs over 10 kilometers", cat: "smf" },
      { text: "Campus-to-campus WAN link", cat: "smf" },
      { text: "Narrow laser-driven core", cat: "smf" },
      { text: "Short backbone up to 550 meters at 10G", cat: "mmf" },
      { text: "Building riser fiber run", cat: "mmf" },
      { text: "LED-driven short-reach link", cat: "mmf" }
    ]
  },
  {
    title: "Cloud Service Categories",
    subtitle: "Place each example under the cloud service model it fits.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "iaas", label: "IaaS" },
      { id: "paas", label: "PaaS" },
      { id: "saas", label: "SaaS" }
    ],
    items: [
      { text: "Renting virtual machines and storage", cat: "iaas" },
      { text: "Provisioning raw block storage", cat: "iaas" },
      { text: "Configuring virtual networks", cat: "iaas" },
      { text: "Spinning up a cloud server", cat: "iaas" },
      { text: "A managed database and app runtime", cat: "paas" },
      { text: "Developer build and deploy pipeline", cat: "paas" },
      { text: "Hosted container platform", cat: "paas" },
      { text: "Managed web hosting framework", cat: "paas" },
      { text: "Web-based email or Office 365", cat: "saas" },
      { text: "Browser-based CRM software", cat: "saas" },
      { text: "Online document editing suite", cat: "saas" },
      { text: "Subscription video streaming app", cat: "saas" },
      { text: "Cloud-hosted help desk portal", cat: "saas" }
    ]
  },
  {
    title: "Troubleshooting Symptoms",
    subtitle: "Sort each diagnostic signal to the symptom group it belongs to.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "beep", label: "Beep Codes" },
      { id: "bsod", label: "BSOD Errors" },
      { id: "swell", label: "Swelling Indicators" }
    ],
    items: [
      { text: "One long two short beeps at POST", cat: "beep" },
      { text: "Continuous beeping on power-up", cat: "beep" },
      { text: "Three short beeps then silence", cat: "beep" },
      { text: "Repeating tone with no display", cat: "beep" },
      { text: "STOP code 0x0000007B", cat: "bsod" },
      { text: "Blue screen with driver fault", cat: "bsod" },
      { text: "Sudden crash to STOP error", cat: "bsod" },
      { text: "Kernel memory dump on reboot", cat: "bsod" },
      { text: "Trackpad lifting and case bulging", cat: "swell" },
      { text: "Battery puffing under the cover", cat: "swell" },
      { text: "Cracked seam from internal pressure", cat: "swell" },
      { text: "Bulging laptop bottom panel", cat: "swell" }
    ]
  },
  {
    title: "SOHO Wireless Security Configuration",
    subtitle: "Categorize SOHO wireless properties and protocols by their deployment security level.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "wep", label: "Legacy/Insecure (WEP)" },
      { id: "wpapers", label: "Deprecated (WPA Personal)" },
      { id: "wpatwo", label: "Standard (WPA2 Personal)" },
      { id: "wpathree", label: "Advanced (WPA3 Enterprise)" }
    ],
    items: [
      { text: "Uses RC4 stream cipher", cat: "wep" },
      { text: "24-bit initialization vector", cat: "wep" },
      { text: "Cracked in minutes", cat: "wep" },
      { text: "64 or 128-bit keys", cat: "wep" },
      { text: "Uses TKIP encryption", cat: "wpapers" },
      { text: "Per-packet key mixing", cat: "wpapers" },
      { text: "Interim fix for WEP", cat: "wpapers" },
      { text: "Vulnerable to TKIP attacks", cat: "wpapers" },
      { text: "AES-CCMP encryption", cat: "wpatwo" },
      { text: "Pre-shared key passphrase", cat: "wpatwo" },
      { text: "Four-way handshake", cat: "wpatwo" },
      { text: "Common home router default", cat: "wpatwo" },
      { text: "SAE handshake replaces PSK", cat: "wpathree" },
      { text: "Requires RADIUS server", cat: "wpathree" },
      { text: "192-bit security suite", cat: "wpathree" },
      { text: "Per-user 802.1X login", cat: "wpathree" }
    ]
  },
  {
    title: "Display Technology Attributes",
    subtitle: "Map display hardware components and illumination behaviors to their screen architecture.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "lcd", label: "Liquid Crystal Display (LCD)" },
      { id: "led", label: "Light-Emitting Diode (LED)" },
      { id: "oled", label: "Organic LED (OLED)" },
      { id: "digitizer", label: "Digitizer Layer" }
    ],
    items: [
      { text: "CCFL backlight tube", cat: "lcd" },
      { text: "Needs separate inverter", cat: "lcd" },
      { text: "TN or IPS panel types", cat: "lcd" },
      { text: "Liquid crystal fluid layer", cat: "lcd" },
      { text: "Edge-lit diode array", cat: "led" },
      { text: "Local dimming zones", cat: "led" },
      { text: "Thinner than CCFL panels", cat: "led" },
      { text: "More energy efficient backlight", cat: "led" },
      { text: "Self-emissive pixels", cat: "oled" },
      { text: "True black with no backlight", cat: "oled" },
      { text: "Susceptible to burn-in", cat: "oled" },
      { text: "Per-pixel light control", cat: "oled" },
      { text: "Captures touch input", cat: "digitizer" },
      { text: "Supports stylus pen pressure", cat: "digitizer" },
      { text: "Capacitive grid overlay", cat: "digitizer" },
      { text: "Translates finger coordinates", cat: "digitizer" }
    ]
  },
  {
    title: "Peripherals and Internal Power Distribution",
    subtitle: "Match connection types and internal power connectors to their deployment scenario.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "extdata", label: "External Data (USB-C/Thunderbolt)" },
      { id: "satapwr", label: "Internal Drive Power (SATA)" },
      { id: "atx", label: "System Board Power (24-pin)" },
      { id: "pcie", label: "Auxiliary GPU Power (PCIe)" }
    ],
    items: [
      { text: "Reversible 24-pin connector", cat: "extdata" },
      { text: "Up to 40 Gbps Thunderbolt", cat: "extdata" },
      { text: "Carries DisplayPort video", cat: "extdata" },
      { text: "Powers external SSD enclosure", cat: "extdata" },
      { text: "L-shaped 15-pin connector", cat: "satapwr" },
      { text: "Supplies 3.3V, 5V, 12V", cat: "satapwr" },
      { text: "Powers hard drives and SSDs", cat: "satapwr" },
      { text: "Branches from PSU cable", cat: "satapwr" },
      { text: "Main motherboard connector", cat: "atx" },
      { text: "Splits into 20+4 pins", cat: "atx" },
      { text: "Largest PSU plug", cat: "atx" },
      { text: "Powers chipset and DIMM slots", cat: "atx" },
      { text: "6-pin or 8-pin plug", cat: "pcie" },
      { text: "Feeds graphics card directly", cat: "pcie" },
      { text: "Supplies extra 75W or 150W", cat: "pcie" },
      { text: "Often a 6+2 split header", cat: "pcie" }
    ]
  },
  {
    title: "Internet Connection Modalities",
    subtitle: "Classify internet delivery mechanisms by their physical media and signal propagation.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "wired", label: "Wired Terrestrial (Cable/DSL)" },
      { id: "optical", label: "Optical (Fiber/ONT)" },
      { id: "cellular", label: "Wireless/Cellular (5G/LTE)" },
      { id: "satellite", label: "Satellite (LEO/GEO)" }
    ],
    items: [
      { text: "Runs over coaxial cable", cat: "wired" },
      { text: "DSL uses phone lines", cat: "wired" },
      { text: "DOCSIS cable modem", cat: "wired" },
      { text: "Shared neighborhood bandwidth", cat: "wired" },
      { text: "Light pulses through glass", cat: "optical" },
      { text: "Optical network terminal", cat: "optical" },
      { text: "Symmetrical gigabit speeds", cat: "optical" },
      { text: "Immune to EMI", cat: "optical" },
      { text: "Connects through cell towers", cat: "cellular" },
      { text: "SIM card authentication", cat: "cellular" },
      { text: "Mobile hotspot tethering", cat: "cellular" },
      { text: "Millimeter-wave 5G bands", cat: "cellular" },
      { text: "Dish points to orbit", cat: "satellite" },
      { text: "High latency on GEO links", cat: "satellite" },
      { text: "LEO constellations reduce lag", cat: "satellite" },
      { text: "Serves remote rural areas", cat: "satellite" }
    ]
  },
  {
    title: "Networking Hardware Device Roles",
    subtitle: "Sort core networking equipment by how it processes or routes traffic.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "switch", label: "Layer 2 Switching (Switches)" },
      { id: "router", label: "Layer 3 Routing (Routers)" },
      { id: "distrib", label: "Signal Distribution (APs/Panels)" },
      { id: "firewall", label: "Perimeter Defense (Firewalls)" }
    ],
    items: [
      { text: "Forwards by MAC address", cat: "switch" },
      { text: "Builds a CAM table", cat: "switch" },
      { text: "Creates VLAN segments", cat: "switch" },
      { text: "One collision domain per port", cat: "switch" },
      { text: "Forwards by IP address", cat: "router" },
      { text: "Joins separate networks", cat: "router" },
      { text: "Performs NAT translation", cat: "router" },
      { text: "Maintains a routing table", cat: "router" },
      { text: "Broadcasts wireless SSID", cat: "distrib" },
      { text: "Terminates cable runs", cat: "distrib" },
      { text: "Punch-down block terminations", cat: "distrib" },
      { text: "Extends WLAN coverage", cat: "distrib" },
      { text: "Filters traffic by rules", cat: "firewall" },
      { text: "Blocks unwanted ports", cat: "firewall" },
      { text: "Stateful packet inspection", cat: "firewall" },
      { text: "Defines an access control list", cat: "firewall" }
    ]
  },
  {
    title: "RAM Generation Specifications",
    subtitle: "Map pin counts, configuration traits, and module behaviors to the memory generation.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ddrthree", label: "DDR3 Memory" },
      { id: "ddrfour", label: "DDR4 Memory" },
      { id: "ddrfive", label: "DDR5 Memory" },
      { id: "sodimm", label: "SODIMM Form Factors" }
    ],
    items: [
      { text: "240-pin desktop module", cat: "ddrthree" },
      { text: "Operates at 1.5 volts", cat: "ddrthree" },
      { text: "Speeds around 1600 MHz", cat: "ddrthree" },
      { text: "Center-offset notch", cat: "ddrthree" },
      { text: "288-pin desktop module", cat: "ddrfour" },
      { text: "Runs at 1.2 volts", cat: "ddrfour" },
      { text: "Speeds up to 3200 MT/s", cat: "ddrfour" },
      { text: "Curved edge for insertion", cat: "ddrfour" },
      { text: "On-module power management IC", cat: "ddrfive" },
      { text: "Dual 32-bit subchannels", cat: "ddrfive" },
      { text: "Runs at 1.1 volts", cat: "ddrfive" },
      { text: "Speeds exceeding 4800 MT/s", cat: "ddrfive" },
      { text: "Used in laptops", cat: "sodimm" },
      { text: "Shorter physical length", cat: "sodimm" },
      { text: "260-pin DDR4 variant", cat: "sodimm" },
      { text: "Fits compact mini-ITX builds", cat: "sodimm" }
    ]
  },
  {
    title: "Storage Drive Form Factors and Interfaces",
    subtitle: "Categorize storage assets by their physical form factor and protocol path.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "hdd", label: "Magnetic HDD (3.5-inch SATA)" },
      { id: "ssata", label: "Legacy SSD (2.5-inch SATA)" },
      { id: "nvme", label: "High-Performance SSD (M.2 NVMe)" },
      { id: "removable", label: "Removable Media (SD/Flash)" }
    ],
    items: [
      { text: "Spinning platters and heads", cat: "hdd" },
      { text: "Measured in 5400 or 7200 RPM", cat: "hdd" },
      { text: "Highest capacity per dollar", cat: "hdd" },
      { text: "Desktop drive bay mount", cat: "hdd" },
      { text: "No moving parts", cat: "ssata" },
      { text: "Capped at 600 MB/s", cat: "ssata" },
      { text: "Fits laptop drive bays", cat: "ssata" },
      { text: "Uses NAND flash chips", cat: "ssata" },
      { text: "Plugs into M.2 slot", cat: "nvme" },
      { text: "Runs over PCIe lanes", cat: "nvme" },
      { text: "Gigabytes-per-second throughput", cat: "nvme" },
      { text: "Gumstick-sized circuit board", cat: "nvme" },
      { text: "Slots into camera or phone", cat: "removable" },
      { text: "USB thumb drive", cat: "removable" },
      { text: "microSD with adapter", cat: "removable" },
      { text: "Hot-swappable portable storage", cat: "removable" }
    ]
  },
  {
    title: "Network Host Services",
    subtitle: "Match server roles to the background utility they deliver to clients.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "dhcp", label: "Address Assignment (DHCP)" },
      { id: "dns", label: "Name Resolution (DNS)" },
      { id: "filedist", label: "File Distribution (FTP/Web)" },
      { id: "security", label: "Security Infrastructure (Proxy/Auth)" }
    ],
    items: [
      { text: "Leases IP addresses", cat: "dhcp" },
      { text: "Defines a scope range", cat: "dhcp" },
      { text: "Hands out subnet mask", cat: "dhcp" },
      { text: "Uses a four-step DORA process", cat: "dhcp" },
      { text: "Resolves names to IPs", cat: "dns" },
      { text: "Stores A and MX records", cat: "dns" },
      { text: "Listens on port 53", cat: "dns" },
      { text: "Caches lookup results", cat: "dns" },
      { text: "Hosts web pages on port 80", cat: "filedist" },
      { text: "Transfers files on port 21", cat: "filedist" },
      { text: "Serves HTML to browsers", cat: "filedist" },
      { text: "Allows uploads and downloads", cat: "filedist" },
      { text: "Caches and filters web requests", cat: "security" },
      { text: "Validates user credentials", cat: "security" },
      { text: "RADIUS authentication", cat: "security" },
      { text: "Hides internal client IPs", cat: "security" }
    ]
  },
  {
    title: "Printer Maintenance and Consumables",
    subtitle: "Sort replacement parts and maintenance actions into the printing technology family.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "laser", label: "Laser Printing (Toner/Fuser)" },
      { id: "inkjet", label: "Inkjet Printing (Ink/Printhead)" },
      { id: "thermal", label: "Thermal Printing" },
      { id: "threed", label: "3D Printing (Filament/Extruder)" }
    ],
    items: [
      { text: "Replace the toner cartridge", cat: "laser" },
      { text: "Fuser melts powder onto paper", cat: "laser" },
      { text: "Clean the imaging drum", cat: "laser" },
      { text: "Charge corona wire", cat: "laser" },
      { text: "Refill liquid ink tanks", cat: "inkjet" },
      { text: "Run printhead cleaning cycle", cat: "inkjet" },
      { text: "Calibrate nozzle alignment", cat: "inkjet" },
      { text: "Sprays droplets onto page", cat: "inkjet" },
      { text: "Load heat-sensitive paper", cat: "thermal" },
      { text: "Heating element darkens paper", cat: "thermal" },
      { text: "Common in receipt printers", cat: "thermal" },
      { text: "No ink or toner needed", cat: "thermal" },
      { text: "Feed PLA filament spool", cat: "threed" },
      { text: "Extruder hot end melts plastic", cat: "threed" },
      { text: "Level the print bed", cat: "threed" },
      { text: "Builds objects layer by layer", cat: "threed" }
    ]
  },
  {
    title: "SOHO IP Addressing States",
    subtitle: "Classify interface IP configurations by their scope and assignment origin.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "private", label: "Private RFC 1918" },
      { id: "apipa", label: "APIPA Autoconfiguration" },
      { id: "public", label: "Public Routable (ISP)" },
      { id: "loopback", label: "Local Loopback (Diagnostic)" }
    ],
    items: [
      { text: "192.168.1.10 home address", cat: "private" },
      { text: "10.0.0.0 large block", cat: "private" },
      { text: "Not routable on internet", cat: "private" },
      { text: "Translated by NAT", cat: "private" },
      { text: "169.254.x.x range", cat: "apipa" },
      { text: "Self-assigned when DHCP fails", cat: "apipa" },
      { text: "Signals no DHCP reply", cat: "apipa" },
      { text: "Link-local only communication", cat: "apipa" },
      { text: "Globally unique address", cat: "public" },
      { text: "Assigned by your provider", cat: "public" },
      { text: "Reachable across the internet", cat: "public" },
      { text: "Sits on the WAN interface", cat: "public" },
      { text: "127.0.0.1 address", cat: "loopback" },
      { text: "Tests the local TCP/IP stack", cat: "loopback" },
      { text: "Pings the host itself", cat: "loopback" },
      { text: "Never leaves the machine", cat: "loopback" }
    ]
  },
  {
    title: "Operational Safety and Environmental Controls",
    subtitle: "Classify safety procedures and disposal protocols by their compliance and handling standard.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "esd", label: "ESD Mitigation" },
      { id: "powersafe", label: "Equipment Power Safety" },
      { id: "disposal", label: "Environmental Disposal (SDS)" },
      { id: "physical", label: "Physical Safety (Lifting/Tripping)" }
    ],
    items: [
      { text: "Wear an antistatic wrist strap", cat: "esd" },
      { text: "Use an antistatic mat", cat: "esd" },
      { text: "Store parts in shielded bags", cat: "esd" },
      { text: "Maintain proper humidity", cat: "esd" },
      { text: "Unplug before servicing", cat: "powersafe" },
      { text: "Avoid opening the PSU", cat: "powersafe" },
      { text: "Discharge capacitors safely", cat: "powersafe" },
      { text: "Remove jewelry near power", cat: "powersafe" },
      { text: "Consult the SDS sheet", cat: "disposal" },
      { text: "Recycle batteries properly", cat: "disposal" },
      { text: "Take toner to e-waste", cat: "disposal" },
      { text: "Follow local hazmat rules", cat: "disposal" },
      { text: "Lift with your legs", cat: "physical" },
      { text: "Secure loose cables", cat: "physical" },
      { text: "Keep walkways clear", cat: "physical" },
      { text: "Observe weight limits", cat: "physical" }
    ]
  }
];
