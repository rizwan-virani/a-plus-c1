window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "MOBILE DEVICES",
    "title": "Laptop Component Replacement",
    "desc": "A laptop has a swollen battery and a failing keyboard reported by the user. The student identifies field-replaceable units, selects the correct replacement parts, and verifies the system recognizes the new hardware after reassembly.",
    "objectives": [
      "Identify field-replaceable laptop components and their connector types.",
      "Select correct replacement parts matched to the chassis model.",
      "Verify hardware detection after component reseating and replacement."
    ],
    "console": {
      "host": "lap-bench01",
      "boot": [
        "[SYS] Mobile device bench lab online.",
        "[SYS] Laptop chassis opened for service.",
        "[SYS] Battery flagged: swelling detected."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the correct laptop battery connector type"
        },
        {
          "id": "t2",
          "label": "Confirm the swollen battery is safely flagged for disposal"
        },
        {
          "id": "t3",
          "label": "Enumerate installed field-replaceable hardware"
        },
        {
          "id": "t4",
          "label": "Verify the replacement keyboard ribbon cable seats"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Battery connector type",
          "options": [
            "Molex 4-pin",
            "JST keyed multi-pin",
            "SATA power"
          ],
          "correct": "JST keyed multi-pin",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "DISPOSAL TICKET",
        "placeholder": "type: flag swollen battery for recycling",
        "button": "Submit",
        "response": "[SYS] Swollen Li-ion cell flagged.\n[SYS] Do not puncture. Routed to certified e-waste recycling.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "lshw -short",
          "out": "[HW] battery: BAT0 (replaced)\n[HW] input: integrated keyboard\n[HW] storage: NVMe 512GB",
          "task": "t3"
        },
        {
          "cmd": "dmesg | grep keyboard",
          "out": "[KBD] atkbd serio0: keyboard connected\n[KBD] ribbon cable seated, scancodes OK",
          "task": "t4"
        },
        {
          "cmd": "sensors",
          "out": "[THERM] CPU: 44C\n[THERM] BAT0: 31C nominal"
        }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "MOBILE DEVICES",
    "title": "Mobile Display and Digitizer",
    "desc": "A tablet shows a cracked panel and intermittent touch response. The student distinguishes the LCD assembly from the digitizer layer, selects the correct replacement assembly, and confirms touch input is restored after calibration.",
    "objectives": [
      "Differentiate the display panel from the touch digitizer layer.",
      "Select the correct integrated assembly for the device model.",
      "Calibrate and verify touch input across the screen surface."
    ],
    "console": {
      "host": "tab-bench02",
      "boot": [
        "[SYS] Display service lab online.",
        "[SYS] Tablet panel reports cracked glass.",
        "[SYS] Touch controller intermittent."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the layer responsible for touch input"
        },
        {
          "id": "t2",
          "label": "Select the correct replacement assembly type"
        },
        {
          "id": "t3",
          "label": "Run the digitizer calibration routine"
        },
        {
          "id": "t4",
          "label": "Confirm backlight and panel power rails"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Touch input layer",
          "options": [
            "LCD panel",
            "Digitizer",
            "Polarizer film"
          ],
          "correct": "Digitizer",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Replacement assembly",
          "options": [
            "LCD only",
            "Digitizer only",
            "Fused LCD plus digitizer"
          ],
          "correct": "Fused LCD plus digitizer",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "CALIBRATION INPUT",
        "placeholder": "type: run touch calibration grid",
        "button": "Run",
        "response": "[TOUCH] 9-point calibration complete.\n[TOUCH] Edge tracking within 2px tolerance. Touch restored.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "display-test --rails",
          "out": "[DISP] VLED backlight: 19.2V OK\n[DISP] panel VCC: 3.3V OK",
          "task": "t4"
        },
        {
          "cmd": "evtest /dev/input/event3",
          "out": "[TOUCH] device: goodix-ts\n[TOUCH] multitouch slots: 10"
        }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "MOBILE DEVICES",
    "title": "Mobile Connectivity and Synchronization",
    "desc": "A smartphone fails to sync corporate mail and will not pair over Bluetooth. The student configures the correct sync protocol, pairs a peripheral, and verifies cellular and Wi-Fi radio states for connectivity.",
    "objectives": [
      "Configure the correct enterprise mail synchronization protocol.",
      "Pair and verify a Bluetooth peripheral connection.",
      "Confirm radio states for Wi-Fi and cellular data."
    ],
    "console": {
      "host": "mob-bench03",
      "boot": [
        "[SYS] Mobile connectivity lab online.",
        "[SYS] Corporate mail sync failing.",
        "[SYS] Bluetooth pairing pending."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the enterprise mail sync protocol"
        },
        {
          "id": "t2",
          "label": "Initiate Bluetooth peripheral pairing"
        },
        {
          "id": "t3",
          "label": "Verify Wi-Fi and cellular radio states"
        },
        {
          "id": "t4",
          "label": "Confirm the mail account completes initial sync"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Mail sync protocol",
          "options": [
            "POP3",
            "Exchange ActiveSync",
            "FTP"
          ],
          "correct": "Exchange ActiveSync",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "PAIRING REQUEST",
        "placeholder": "type: pair headset passkey 0000",
        "button": "Pair",
        "response": "[BT] Device 'Field Headset' bonded.\n[BT] A2DP and HFP profiles negotiated. Connected.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "radio-status",
          "out": "[RF] Wi-Fi: associated, -52dBm\n[RF] LTE: registered, band 4",
          "task": "t3"
        },
        {
          "cmd": "mailsync --status",
          "out": "[MAIL] EAS handshake OK\n[MAIL] inbox synced: 248 items",
          "task": "t4"
        },
        {
          "cmd": "battery",
          "out": "[PWR] charge: 78%\n[PWR] health: good"
        }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "NETWORKING",
    "title": "SOHO Router and Wireless Setup",
    "desc": "A small office router ships with default credentials and an open wireless network. The student hardens the admin login, selects a modern wireless security mode, and verifies clients associate on the correct band.",
    "objectives": [
      "Replace default router credentials with secure values.",
      "Select the strongest available wireless security mode.",
      "Verify client association and channel selection."
    ],
    "console": {
      "host": "soho-rtr04",
      "boot": [
        "[SYS] SOHO networking lab online.",
        "[SYS] Router at factory defaults.",
        "[SYS] SSID broadcasting with no encryption."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the strongest wireless security mode"
        },
        {
          "id": "t2",
          "label": "Set a non-default administrator password"
        },
        {
          "id": "t3",
          "label": "Verify the wireless band and channel"
        },
        {
          "id": "t4",
          "label": "Confirm a client associates to the secured SSID"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Wireless security mode",
          "options": [
            "WEP",
            "WPA2-PSK",
            "WPA3-SAE"
          ],
          "correct": "WPA3-SAE",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ADMIN CREDENTIAL",
        "placeholder": "type: set admin password to a strong value",
        "button": "Apply",
        "response": "[CFG] Default admin login disabled.\n[CFG] New credential set, complexity policy met.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show wireless",
          "out": "[WLAN] band: 5GHz\n[WLAN] channel: 36 (DFS clear)",
          "task": "t3"
        },
        {
          "cmd": "show clients",
          "out": "[WLAN] client 1: a4:cf:12 associated WPA3\n[WLAN] rate: 866Mbps",
          "task": "t4"
        },
        {
          "cmd": "show wan",
          "out": "[WAN] link up, DHCP lease acquired"
        }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "NETWORKING",
    "title": "IP Addressing and DHCP",
    "desc": "Hosts on a subnet are receiving APIPA addresses and cannot reach the gateway. The student diagnoses the DHCP scope, selects the correct subnet mask, and verifies a valid lease and gateway reachability.",
    "objectives": [
      "Interpret APIPA symptoms and DHCP scope exhaustion.",
      "Select the correct subnet mask for the addressing plan.",
      "Verify lease acquisition and default gateway reachability."
    ],
    "console": {
      "host": "net-host05",
      "boot": [
        "[SYS] IP addressing lab online.",
        "[SYS] Host reports 169.254.x.x address.",
        "[SYS] Gateway unreachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the correct subnet mask for a /24 network"
        },
        {
          "id": "t2",
          "label": "Renew the DHCP lease from the server"
        },
        {
          "id": "t3",
          "label": "Verify the assigned address and gateway"
        },
        {
          "id": "t4",
          "label": "Confirm reachability to the default gateway"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Subnet mask for /24",
          "options": [
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.192"
          ],
          "correct": "255.255.255.0",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "DHCP REQUEST",
        "placeholder": "type: ipconfig /renew",
        "button": "Run",
        "response": "[DHCP] DISCOVER sent, OFFER received.\n[DHCP] Lease bound: 192.168.10.42, 24h duration.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "ipconfig",
          "out": "IPv4 Address: 192.168.10.42\nDefault Gateway: 192.168.10.1",
          "task": "t3"
        },
        {
          "cmd": "ping 192.168.10.1",
          "out": "Reply from 192.168.10.1: time=1ms\nReply from 192.168.10.1: time=1ms",
          "task": "t4"
        },
        {
          "cmd": "arp -a",
          "out": "192.168.10.1  00-1b-44-aa-bb-cc  dynamic"
        }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "NETWORKING",
    "title": "Ports Protocols and Services",
    "desc": "A web service and a secure file transfer are failing through a misconfigured firewall. The student maps services to their standard ports, opens the correct port, and verifies each service responds.",
    "objectives": [
      "Map common services to their standard TCP and UDP ports.",
      "Identify secure versus insecure protocol counterparts.",
      "Verify service reachability after firewall changes."
    ],
    "console": {
      "host": "srv-net06",
      "boot": [
        "[SYS] Ports and protocols lab online.",
        "[SYS] HTTPS requests timing out.",
        "[SYS] Firewall ruleset under review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the standard port for HTTPS"
        },
        {
          "id": "t2",
          "label": "Identify the secure remote management protocol"
        },
        {
          "id": "t3",
          "label": "Open the required port in the firewall"
        },
        {
          "id": "t4",
          "label": "Verify the listening service responds"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "HTTPS port",
          "options": [
            "80",
            "443",
            "3389"
          ],
          "correct": "443",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Secure remote shell",
          "options": [
            "Telnet (23)",
            "SSH (22)",
            "FTP (21)"
          ],
          "correct": "SSH (22)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "FIREWALL RULE",
        "placeholder": "type: allow tcp 443 inbound",
        "button": "Apply",
        "response": "[FW] Rule added: permit tcp/443 inbound.\n[FW] Stateful tracking enabled for HTTPS.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "netstat -an | grep 443",
          "out": "TCP 0.0.0.0:443 LISTENING\nTCP 0.0.0.0:443 ESTABLISHED",
          "task": "t4"
        },
        {
          "cmd": "nslookup web.local",
          "out": "Name: web.local\nAddress: 10.0.0.80"
        }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "NETWORKING",
    "title": "Network Cabling and Connectors",
    "desc": "A new drop fails certification and a fiber uplink shows no light. The student selects the correct copper standard, terminates to spec, and verifies cable continuity and the fiber connector type.",
    "objectives": [
      "Select the correct twisted-pair category for the bandwidth.",
      "Apply the proper termination wiring standard.",
      "Verify continuity and identify the fiber connector type."
    ],
    "console": {
      "host": "cable-bench07",
      "boot": [
        "[SYS] Cabling lab online.",
        "[SYS] Drop fails 1Gbps certification.",
        "[SYS] Fiber uplink: loss of light."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the cable category rated for 1Gbps at 100m"
        },
        {
          "id": "t2",
          "label": "Select the correct termination wiring standard"
        },
        {
          "id": "t3",
          "label": "Run a continuity and wiremap test"
        },
        {
          "id": "t4",
          "label": "Identify the fiber connector on the uplink"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Cable category",
          "options": [
            "Cat 3",
            "Cat 5e",
            "Cat 6 only"
          ],
          "correct": "Cat 5e",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Wiring standard",
          "options": [
            "T568A",
            "T568B",
            "RS-232"
          ],
          "correct": "T568B",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "CERTIFIER INPUT",
        "placeholder": "type: run wiremap and continuity test",
        "button": "Test",
        "response": "[CERT] Wiremap: pins 1-8 straight, no splits.\n[CERT] Continuity PASS, NEXT within Cat 5e limits.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "fiber-id uplink0",
          "out": "[FIBER] connector: LC duplex\n[FIBER] mode: OM3 multimode",
          "task": "t4"
        },
        {
          "cmd": "tdr port12",
          "out": "[TDR] cable length: 47m\n[TDR] no open or short detected"
        }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "NETWORKING",
    "title": "Network Hardware Device Roles",
    "desc": "A flat network suffers broadcast storms and lacks segmentation. The student distinguishes the roles of switches, routers, and access points, selects the device for Layer 3 routing, and verifies VLAN segmentation.",
    "objectives": [
      "Distinguish the OSI layer and role of common network devices.",
      "Select the appropriate device for inter-network routing.",
      "Verify VLAN segmentation and broadcast containment."
    ],
    "console": {
      "host": "net-lab08",
      "boot": [
        "[SYS] Network device lab online.",
        "[SYS] Broadcast storm detected on flat LAN.",
        "[SYS] No VLAN segmentation present."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the device that routes between networks"
        },
        {
          "id": "t2",
          "label": "Select the device that operates at Layer 2"
        },
        {
          "id": "t3",
          "label": "Apply VLAN segmentation to the switch"
        },
        {
          "id": "t4",
          "label": "Verify broadcast domains are separated"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Layer 3 routing device",
          "options": [
            "Unmanaged hub",
            "Router",
            "Media converter"
          ],
          "correct": "Router",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Layer 2 forwarding device",
          "options": [
            "Switch",
            "Modem",
            "Repeater"
          ],
          "correct": "Switch",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "VLAN CONFIG",
        "placeholder": "type: assign ports 1-12 to vlan 10",
        "button": "Apply",
        "response": "[SW] VLAN 10 created, ports 1-12 tagged.\n[SW] Broadcast traffic now contained to VLAN 10.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show vlan brief",
          "out": "[SW] VLAN 10 active: 12 ports\n[SW] VLAN 20 active: 12 ports",
          "task": "t4"
        },
        {
          "cmd": "show mac-table",
          "out": "[SW] 240 MAC entries learned\n[SW] aging timer: 300s"
        }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "HARDWARE",
    "title": "Motherboard Form Factors and Connectors",
    "desc": "A custom build requires matching a motherboard to a chassis and connecting front-panel and power headers. The student identifies the board form factor, selects the correct power connector, and verifies header continuity.",
    "objectives": [
      "Identify motherboard form factors and their mounting standards.",
      "Match power and front-panel connectors to their headers.",
      "Verify header pinout continuity before first power-on."
    ],
    "console": {
      "host": "bench-pc09",
      "boot": [
        "[SYS] Motherboard bench lab online.",
        "[SYS] Board staged for installation.",
        "[SYS] Headers awaiting connection."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the standard full-size desktop form factor"
        },
        {
          "id": "t2",
          "label": "Select the main motherboard power connector"
        },
        {
          "id": "t3",
          "label": "Verify front-panel header pinout"
        },
        {
          "id": "t4",
          "label": "Confirm CPU auxiliary power is connected"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Form factor",
          "options": [
            "Mini-ITX",
            "MicroATX",
            "ATX"
          ],
          "correct": "ATX",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Main power connector",
          "options": [
            "20-pin",
            "24-pin ATX",
            "8-pin EPS only"
          ],
          "correct": "24-pin ATX",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "HEADER PROBE",
        "placeholder": "type: probe front-panel header pins",
        "button": "Probe",
        "response": "[HDR] PWR_SW, RESET, HDD_LED mapped.\n[HDR] Polarity verified on LED pins, no shorts.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show power",
          "out": "[PWR] 24-pin ATX: seated\n[PWR] 8-pin EPS CPU: seated",
          "task": "t4"
        },
        {
          "cmd": "lshw -c bus",
          "out": "[HW] chipset detected\n[HW] PCIe lanes: x16, x4"
        }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "HARDWARE",
    "title": "RAM Generations and Installation",
    "desc": "A workstation will not boot after a memory upgrade with mismatched modules. The student identifies the correct RAM generation, populates the proper slots for dual channel, and verifies the modules are recognized at the rated speed.",
    "objectives": [
      "Identify RAM generations by notch keying and form factor.",
      "Populate slots correctly to enable dual-channel mode.",
      "Verify capacity and speed reporting after installation."
    ],
    "console": {
      "host": "bench-pc10",
      "boot": [
        "[SYS] Memory bench lab online.",
        "[SYS] No POST after RAM upgrade.",
        "[SYS] Module mismatch suspected."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the correct DDR generation for the board"
        },
        {
          "id": "t2",
          "label": "Select the slot pairing for dual channel"
        },
        {
          "id": "t3",
          "label": "Run a memory detection and POST check"
        },
        {
          "id": "t4",
          "label": "Verify total capacity and reported speed"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "RAM generation",
          "options": [
            "DDR3",
            "DDR4",
            "DDR5"
          ],
          "correct": "DDR4",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Dual-channel slots",
          "options": [
            "Slots 1 and 2",
            "Slots 1 and 3 (A2/B2)",
            "All four randomly"
          ],
          "correct": "Slots 1 and 3 (A2/B2)",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "POST INPUT",
        "placeholder": "type: rerun memory training and POST",
        "button": "Run",
        "response": "[POST] Memory training complete.\n[POST] Dual-channel enabled, beep code clear.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "dmidecode -t memory",
          "out": "[MEM] 2 x 8GB DDR4\n[MEM] speed: 3200 MT/s",
          "task": "t4"
        },
        {
          "cmd": "memtest --quick",
          "out": "[MEM] pass 1 of 1: no errors\n[MEM] address range OK"
        }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "HARDWARE",
    "title": "Storage Drives and RAID",
    "desc": "A server needs redundant storage with a balance of capacity and fault tolerance. The student selects the correct RAID level, identifies the drive interface, and verifies array health and SMART status.",
    "objectives": [
      "Compare RAID levels for redundancy and performance tradeoffs.",
      "Identify modern storage interfaces and form factors.",
      "Verify array status and per-drive SMART health."
    ],
    "console": {
      "host": "store-srv11",
      "boot": [
        "[SYS] Storage lab online.",
        "[SYS] Array initialization pending.",
        "[SYS] Four drives detected."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the RAID level that mirrors with striping"
        },
        {
          "id": "t2",
          "label": "Identify the high-speed NVMe interface"
        },
        {
          "id": "t3",
          "label": "Initialize and build the array"
        },
        {
          "id": "t4",
          "label": "Verify array health and SMART status"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "RAID level (mirror plus stripe)",
          "options": [
            "RAID 0",
            "RAID 5",
            "RAID 10"
          ],
          "correct": "RAID 10",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "NVMe interface",
          "options": [
            "SATA III",
            "PCIe M.2",
            "IDE"
          ],
          "correct": "PCIe M.2",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ARRAY BUILD",
        "placeholder": "type: initialize raid 10 across 4 drives",
        "button": "Build",
        "response": "[RAID] Array built: RAID 10, 2 mirrored stripes.\n[RAID] Rebuild not required, status optimal.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "smartctl -H /dev/sda",
          "out": "[SMART] overall-health: PASSED\n[SMART] reallocated sectors: 0",
          "task": "t4"
        },
        {
          "cmd": "raid-status",
          "out": "[RAID] state: clean\n[RAID] members: 4 online"
        }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "HARDWARE",
    "title": "Power Supply and Connectors",
    "desc": "A system randomly shuts down under load and a new GPU needs power. The student selects an adequate wattage supply, identifies the PCIe power connector, and verifies rail voltages with a tester.",
    "objectives": [
      "Calculate power supply wattage requirements for a build.",
      "Identify ATX, EPS, and PCIe power connectors.",
      "Verify rail voltages are within ATX tolerance."
    ],
    "console": {
      "host": "bench-pc12",
      "boot": [
        "[SYS] Power supply lab online.",
        "[SYS] Random shutdowns under GPU load.",
        "[SYS] PSU tester connected."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the connector that powers a discrete GPU"
        },
        {
          "id": "t2",
          "label": "Choose an adequate PSU wattage for the build"
        },
        {
          "id": "t3",
          "label": "Measure the rail voltages under load"
        },
        {
          "id": "t4",
          "label": "Confirm the power good signal asserts"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "GPU power connector",
          "options": [
            "4-pin Molex",
            "6/8-pin PCIe",
            "SATA power"
          ],
          "correct": "6/8-pin PCIe",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "PSU wattage",
          "options": [
            "300W",
            "500W",
            "750W"
          ],
          "correct": "750W",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "MULTIMETER PROBE",
        "placeholder": "type: measure 12V, 5V, 3.3V rails",
        "button": "Measure",
        "response": "[PSU] 12V rail: 12.05V\n[PSU] 5V rail: 5.02V, 3.3V rail: 3.31V. Within tolerance.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "psu-tester",
          "out": "[PSU] PWR_OK: asserted\n[PSU] -12V: -11.9V OK",
          "task": "t4"
        },
        {
          "cmd": "sensors | grep fan",
          "out": "[FAN] psu_fan: 1180 RPM"
        }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "HARDWARE",
    "title": "Expansion Cards and Interfaces",
    "desc": "A workstation needs a dedicated graphics card and an added network card. The student selects the correct PCIe slot size, identifies the interface lane width, and verifies the cards enumerate on the bus.",
    "objectives": [
      "Match expansion cards to the correct PCIe slot size.",
      "Differentiate lane widths and their bandwidth.",
      "Verify card enumeration and driver detection on the bus."
    ],
    "console": {
      "host": "bench-pc13",
      "boot": [
        "[SYS] Expansion card lab online.",
        "[SYS] GPU and NIC staged for install.",
        "[SYS] PCIe slots open."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the slot size for a discrete GPU"
        },
        {
          "id": "t2",
          "label": "Identify the lane width for the NIC"
        },
        {
          "id": "t3",
          "label": "Enumerate devices on the PCIe bus"
        },
        {
          "id": "t4",
          "label": "Confirm the GPU driver loads"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "GPU slot size",
          "options": [
            "PCIe x1",
            "PCIe x4",
            "PCIe x16"
          ],
          "correct": "PCIe x16",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "NIC lane width",
          "options": [
            "PCIe x1",
            "PCIe x16",
            "AGP"
          ],
          "correct": "PCIe x1",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "BUS SCAN",
        "placeholder": "type: rescan pcie bus",
        "button": "Scan",
        "response": "[PCI] Rescan complete.\n[PCI] VGA controller and Ethernet controller enumerated.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "lspci | grep VGA",
          "out": "[PCI] 01:00.0 VGA controller: discrete GPU\n[PCI] link: x16 Gen4",
          "task": "t4"
        },
        {
          "cmd": "lspci | grep Ethernet",
          "out": "[PCI] 03:00.0 Ethernet controller: 1GbE NIC"
        }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "HARDWARE",
    "title": "Printer Setup and Maintenance",
    "desc": "An office laser printer produces faded output and is not shared on the network. The student identifies the failing consumable, selects the correct sharing protocol, and verifies a test page prints over the network.",
    "objectives": [
      "Identify laser printer consumables and the imaging process.",
      "Configure correct network printer sharing.",
      "Verify queue status and a successful test print."
    ],
    "console": {
      "host": "print-srv14",
      "boot": [
        "[SYS] Printer lab online.",
        "[SYS] Laser output faded.",
        "[SYS] Printer not shared on LAN."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the consumable causing faded output"
        },
        {
          "id": "t2",
          "label": "Select the standard network printing protocol"
        },
        {
          "id": "t3",
          "label": "Submit a test page to the print queue"
        },
        {
          "id": "t4",
          "label": "Verify the printer status and page count"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Faded-output consumable",
          "options": [
            "Fuser roller",
            "Toner cartridge",
            "Pickup roller"
          ],
          "correct": "Toner cartridge",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Network print protocol",
          "options": [
            "SMTP",
            "IPP port 631",
            "SNMP only"
          ],
          "correct": "IPP port 631",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PRINT JOB",
        "placeholder": "type: send test page to queue",
        "button": "Print",
        "response": "[PRN] Job 1041 spooled.\n[PRN] Test page rasterized and sent to engine.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "lpstat -p",
          "out": "[PRN] printer LJ-04 idle, enabled\n[PRN] page count: 18422",
          "task": "t4"
        },
        {
          "cmd": "show supplies",
          "out": "[PRN] toner: 12%\n[PRN] fuser life: 64%"
        }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "CLOUD AND VIRTUALIZATION",
    "title": "Cloud Service Models (IaaS PaaS SaaS)",
    "desc": "A company must choose cloud services for differing levels of control and management. The student maps workloads to the correct service model, selects who manages each layer, and verifies the provisioned resource responds.",
    "objectives": [
      "Distinguish IaaS, PaaS, and SaaS responsibility boundaries.",
      "Map a workload to the appropriate service model.",
      "Verify a provisioned cloud resource is reachable."
    ],
    "console": {
      "host": "cloud-con15",
      "boot": [
        "[SYS] Cloud models lab online.",
        "[SYS] Service model selection pending.",
        "[SYS] Subscription authenticated."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the model that provides raw virtual machines"
        },
        {
          "id": "t2",
          "label": "Select the model delivering finished applications"
        },
        {
          "id": "t3",
          "label": "Provision the chosen cloud resource"
        },
        {
          "id": "t4",
          "label": "Verify the provisioned endpoint responds"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Raw compute model",
          "options": [
            "SaaS",
            "PaaS",
            "IaaS"
          ],
          "correct": "IaaS",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Finished-app model",
          "options": [
            "IaaS",
            "SaaS",
            "DaaS"
          ],
          "correct": "SaaS",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PROVISION REQUEST",
        "placeholder": "type: provision iaas vm small tier",
        "button": "Deploy",
        "response": "[CLOUD] VM 'web-01' provisioned in IaaS tier.\n[CLOUD] Customer manages OS and apps, provider manages hardware.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "cloud ping web-01",
          "out": "[CLOUD] endpoint 52.10.4.8 reachable\n[CLOUD] latency: 24ms",
          "task": "t4"
        },
        {
          "cmd": "cloud cost --estimate",
          "out": "[CLOUD] est. monthly: 38.40 USD"
        }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "CLOUD AND VIRTUALIZATION",
    "title": "Virtualization and Hypervisors",
    "desc": "A lab consolidates several physical servers onto one host. The student selects the correct hypervisor type, allocates virtual resources, and verifies the guest VM boots with the assigned resources.",
    "objectives": [
      "Differentiate Type 1 and Type 2 hypervisors.",
      "Allocate virtual CPU, memory, and disk to a guest.",
      "Verify guest VM boot and resource assignment."
    ],
    "console": {
      "host": "hv-host16",
      "boot": [
        "[SYS] Virtualization lab online.",
        "[SYS] Bare-metal host ready.",
        "[SYS] Guest template available."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the bare-metal hypervisor type"
        },
        {
          "id": "t2",
          "label": "Identify a Type 2 hosted hypervisor"
        },
        {
          "id": "t3",
          "label": "Allocate resources and start the guest VM"
        },
        {
          "id": "t4",
          "label": "Verify the guest is running with assigned vCPUs"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Bare-metal hypervisor",
          "options": [
            "Type 1",
            "Type 2",
            "Container runtime"
          ],
          "correct": "Type 1",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Hosted hypervisor example",
          "options": [
            "ESXi",
            "VirtualBox",
            "Hyper-V Core"
          ],
          "correct": "VirtualBox",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "VM SPEC",
        "placeholder": "type: create vm 4 vcpu 8gb 80gb disk",
        "button": "Create",
        "response": "[HV] Guest 'app-vm' created: 4 vCPU, 8GB, 80GB.\n[HV] Powered on, kernel booting.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "virsh list --all",
          "out": "[HV] app-vm running\n[HV] vcpus: 4, state: active",
          "task": "t4"
        },
        {
          "cmd": "host-resources",
          "out": "[HV] host cores: 32\n[HV] free RAM: 96GB"
        }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "CLOUD AND VIRTUALIZATION",
    "title": "Cloud Deployment and Shared Resources",
    "desc": "An organization weighs public, private, and hybrid deployment for sensitive and burstable workloads. The student selects the correct deployment model, identifies a shared resource concept, and verifies elastic scaling responds to demand.",
    "objectives": [
      "Compare public, private, hybrid, and community deployment models.",
      "Explain shared resources, elasticity, and metered usage.",
      "Verify auto-scaling reacts to load changes."
    ],
    "console": {
      "host": "cloud-con17",
      "boot": [
        "[SYS] Cloud deployment lab online.",
        "[SYS] Workload mix: sensitive plus burstable.",
        "[SYS] Scaling policy undefined."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the model mixing private and public clouds"
        },
        {
          "id": "t2",
          "label": "Identify the trait of on-demand elastic capacity"
        },
        {
          "id": "t3",
          "label": "Apply an auto-scaling policy"
        },
        {
          "id": "t4",
          "label": "Verify instances scale out under load"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Deployment model",
          "options": [
            "Public only",
            "Private only",
            "Hybrid"
          ],
          "correct": "Hybrid",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Elasticity trait",
          "options": [
            "Fixed capacity",
            "Rapid elasticity",
            "Single tenant lock"
          ],
          "correct": "Rapid elasticity",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SCALING POLICY",
        "placeholder": "type: scale out at 70% cpu",
        "button": "Apply",
        "response": "[CLOUD] Auto-scale policy set: target 70% CPU.\n[CLOUD] Min 2, max 8 instances, metered billing active.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "scale-status",
          "out": "[CLOUD] load 84%, scaling out\n[CLOUD] instances: 2 to 5",
          "task": "t4"
        },
        {
          "cmd": "cloud regions",
          "out": "[CLOUD] primary: us-east\n[CLOUD] failover: us-west"
        }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "TROUBLESHOOTING",
    "title": "POST and Boot Failure Diagnostics",
    "desc": "A desktop powers on but produces beep codes and never reaches the boot device. The student interprets the POST code, selects the correct boot order, and verifies the system reaches the bootloader.",
    "objectives": [
      "Interpret POST beep and diagnostic codes.",
      "Correct the UEFI boot device order.",
      "Verify the system reaches the bootloader stage."
    ],
    "console": {
      "host": "diag-pc18",
      "boot": [
        "[SYS] Boot diagnostics lab online.",
        "[SYS] System halts during POST.",
        "[SYS] Beep code repeating."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the POST code for a memory fault"
        },
        {
          "id": "t2",
          "label": "Select the correct primary boot device"
        },
        {
          "id": "t3",
          "label": "Reseat and clear the POST fault"
        },
        {
          "id": "t4",
          "label": "Verify the system reaches the bootloader"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "POST beep meaning",
          "options": [
            "1 long 2 short: video",
            "Continuous: memory failure",
            "No beep: PSU only"
          ],
          "correct": "Continuous: memory failure",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Primary boot device",
          "options": [
            "Network PXE",
            "NVMe OS drive",
            "Removable USB"
          ],
          "correct": "NVMe OS drive",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "POST RESET",
        "placeholder": "type: reseat memory and clear POST",
        "button": "Run",
        "response": "[POST] Memory reseated, training passed.\n[POST] Diagnostic code cleared, continuing boot.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show boot",
          "out": "[BOOT] handing off to bootloader\n[BOOT] EFI\\OS\\bootx64.efi found",
          "task": "t4"
        },
        {
          "cmd": "show post-log",
          "out": "[POST] CPU init OK\n[POST] storage init OK"
        }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "TROUBLESHOOTING",
    "title": "Storage and Display Troubleshooting",
    "desc": "A workstation reports SMART warnings and shows display artifacts. The student diagnoses the failing drive, identifies the display fault source, and verifies storage health and a clean display output after correction.",
    "objectives": [
      "Interpret SMART attributes that predict drive failure.",
      "Isolate display artifacts to cable, GPU, or panel.",
      "Verify storage health and stable display output."
    ],
    "console": {
      "host": "diag-pc19",
      "boot": [
        "[SYS] Storage and display lab online.",
        "[SYS] SMART warning raised.",
        "[SYS] Display artifacts observed."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the SMART attribute predicting failure"
        },
        {
          "id": "t2",
          "label": "Isolate the most likely display fault source"
        },
        {
          "id": "t3",
          "label": "Run an extended drive self-test"
        },
        {
          "id": "t4",
          "label": "Verify display output is artifact-free"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "SMART failure attribute",
          "options": [
            "Power-on hours",
            "Reallocated sector count",
            "Spin-up time"
          ],
          "correct": "Reallocated sector count",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Display fault source",
          "options": [
            "Loose video cable",
            "Wrong wallpaper",
            "Disabled firewall"
          ],
          "correct": "Loose video cable",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DRIVE TEST",
        "placeholder": "type: run smartctl extended self-test",
        "button": "Run",
        "response": "[SMART] Extended self-test started.\n[SMART] Read scan complete, pending sectors stabilized.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "display-test --pattern",
          "out": "[DISP] reseated cable, link stable\n[DISP] test pattern clean, no artifacts",
          "task": "t4"
        },
        {
          "cmd": "smartctl -A /dev/sdb",
          "out": "[SMART] reallocated: 5\n[SMART] pending: 0"
        }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "CAPSTONE",
    "title": "Capstone Full System Triage",
    "desc": "A workstation arrives with intertwined hardware, networking, and boot complaints under a time limit. The student applies the troubleshooting methodology end to end, prioritizes the root cause, and verifies the system is fully restored across power, storage, and network.",
    "objectives": [
      "Apply the CompTIA troubleshooting methodology in order.",
      "Prioritize a root cause among multiple symptoms.",
      "Verify full restoration across power, storage, and network."
    ],
    "console": {
      "host": "triage-pc20",
      "boot": [
        "[SYS] Capstone triage lab online.",
        "[SYS] Multiple faults reported: no boot, no network.",
        "[SYS] Methodology checklist loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the correct first methodology step"
        },
        {
          "id": "t2",
          "label": "Prioritize the most likely root cause"
        },
        {
          "id": "t3",
          "label": "Apply the fix and document the action"
        },
        {
          "id": "t4",
          "label": "Verify storage and system health restored"
        },
        {
          "id": "t5",
          "label": "Verify network connectivity restored"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "First methodology step",
          "options": [
            "Implement a fix",
            "Identify the problem",
            "Document outcome"
          ],
          "correct": "Identify the problem",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most likely root cause",
          "options": [
            "Failed PSU rail",
            "Wrong desktop theme",
            "Unused USB port"
          ],
          "correct": "Failed PSU rail",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REMEDIATION LOG",
        "placeholder": "type: replace PSU, document action and verify",
        "button": "Apply",
        "response": "[FIX] PSU replaced, rails within tolerance.\n[FIX] Action documented, full-system verification pass.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "smartctl -H /dev/sda",
          "out": "[SMART] overall-health: PASSED\n[SMART] system boots to OS",
          "task": "t4"
        },
        {
          "cmd": "ping 8.8.8.8",
          "out": "Reply from 8.8.8.8: time=12ms\nReply from 8.8.8.8: time=11ms",
          "task": "t5"
        },
        {
          "cmd": "show triage-summary",
          "out": "[SYS] power: OK\n[SYS] storage: OK, network: OK"
        }
      ]
    }
  }
];
