/* a+ core 1 :: quizEngine.js  (data bank + assessment engine) */
APLUS1.questions = APLUS1.questions || [];
APLUS1.pbqs = APLUS1.pbqs || [];
APLUS1.questions.push(
{ id:"D1-001", domain:1, obj:"1.1", diff:"easy", q:"Which memory form factor is specifically designed for use in laptops rather than desktops?", options:["SO-DIMM","DIMM","RIMM","SIPP"], answer:0, explain:"<strong>SO-DIMM</strong> (Small Outline DIMM) is the physically shorter, narrower memory module designed for the limited space inside laptops and small-form-factor systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DIMM</b>: A full-size DIMM is the long desktop module that is too wide to fit a laptop memory slot.</span><span class='qd'><b>RIMM</b>: RIMM was the proprietary Rambus RDRAM module used in some older desktops, not a laptop form factor.</span><span class='qd'><b>SIPP</b>: SIPP was an obsolete pin-leg memory package from the 1980s, never used in modern laptops.</span>" },
{ id:"D1-002", domain:1, obj:"1.1", diff:"easy", q:"What does the acronym SODIMM stand for?", options:["Single Output Direct Inline Memory Module","Small Outline Dual Inline Memory Module","Synchronous Optical Dual Inline Memory Module","Standard Onboard Dynamic Integrated Memory Module"], answer:1, explain:"<strong>Small Outline Dual Inline Memory Module</strong> is the correct expansion, describing the compact dual-inline module used in laptops and mobile devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Standard Onboard Dynamic Integrated Memory Module</b>: This is a fabricated phrase with no real meaning in memory terminology.</span><span class='qd'><b>Single Output Direct Inline Memory Module</b>: This is invented; SO-DIMM is dual inline (contacts on both sides), not single output.</span><span class='qd'><b>Synchronous Optical Dual Inline Memory Module</b>: SONET-style optical wording does not apply; SO-DIMM uses electrical contacts, not optical signaling.</span>" },
{ id:"D1-003", domain:1, obj:"1.1", diff:"medium", q:"A technician needs to install an NVMe SSD in a laptop that has only a SATA-keyed slot. Which M.2 key supports the SATA-only B+M configuration but NOT PCIe x4 NVMe?", options:["Key A","Key M only","Key B+M (SATA)","Key E"], answer:2, explain:"<strong>Key B+M (SATA)</strong> is correct because a module notched in both the B and M positions for SATA fits the slot but is electrically limited to SATA, not a PCIe x4 NVMe path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Key A</b>: Key A sockets are for wireless and other low-lane cards, not for SATA or NVMe storage drives.</span><span class='qd'><b>Key M only</b>: An M-only slot provides the four PCIe lanes that NVMe needs, which is exactly the configuration this SATA-only slot does not support.</span><span class='qd'><b>Key E</b>: Key E is used for Wi-Fi and Bluetooth modules, not for M.2 storage of any interface.</span>" },
{ id:"D1-004", domain:1, obj:"1.1", diff:"medium", q:"Which M.2 socket keying is most commonly used for Wi-Fi and Bluetooth wireless cards in laptops?", options:["Key L","Key M","Key B","Key E"], answer:3, explain:"<strong>Key E</strong> is correct because M.2 Key E sockets are the standard keying for short Wi-Fi and Bluetooth combo cards in laptops.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Key M</b>: Key M is used for PCIe x4 NVMe storage drives, not wireless cards.</span><span class='qd'><b>Key B</b>: Key B is associated with SATA, slower PCIe storage, and some WWAN modules, but the Wi-Fi/BT standard is Key E.</span><span class='qd'><b>Key L</b>: There is no M.2 Key L; the defined keys are A through M, so this option does not exist.</span>" },
{ id:"D1-005", domain:1, obj:"1.1", diff:"easy", q:"Which laptop component most commonly fails and causes the system to not power on when running on battery only?", options:["The battery","The keyboard","The trackpad","The webcam"], answer:0, explain:"<strong>The battery</strong> is correct because when running on battery only, a degraded, swollen, or failed battery cannot deliver power, preventing the system from turning on.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The keyboard</b>: A failed keyboard stops key input but does not prevent the laptop from powering on.</span><span class='qd'><b>The trackpad</b>: A bad trackpad only affects pointer input and has no role in supplying or gating system power.</span><span class='qd'><b>The webcam</b>: The webcam is a peripheral on the display assembly and never affects whether the system powers on.</span>" },
{ id:"D1-006", domain:1, obj:"1.1", diff:"medium", q:"A user reports their laptop randomly shuts down under heavy load. After cleaning the vents, the issue persists. Which component should the technician inspect FIRST?", options:["The speakers","The CPU heat sink and fan assembly","The optical drive","The webcam ribbon cable"], answer:1, explain:"<strong>The CPU heat sink and fan assembly</strong> is correct because thermal shutdowns under load that persist after cleaning vents point to dried thermal paste or a failing fan no longer dissipating heat.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The optical drive</b>: An optical drive plays no role in CPU cooling and would not cause load-triggered thermal shutdowns.</span><span class='qd'><b>The webcam ribbon cable</b>: A webcam cable carries only video data and cannot trigger a heat-related power-off.</span><span class='qd'><b>The speakers</b>: Speakers are audio output and have no thermal or power-management function in this failure.</span>" },
{ id:"D1-007", domain:1, obj:"1.1", diff:"medium", q:"Which type of storage uses the 2280 form factor designation, indicating 22mm wide by 80mm long?", options:["mSATA SSD","eMMC chip","M.2 SSD","2.5-inch SATA SSD"], answer:2, explain:"<strong>M.2 SSD</strong> is correct because the four-digit code 2280 specifies an M.2 module that is 22mm wide by 80mm long.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2.5-inch SATA SSD</b>: This drive is sized by its 2.5-inch enclosure, not by an M.2 width-and-length code like 2280.</span><span class='qd'><b>mSATA SSD</b>: mSATA uses a single fixed card size based on the Mini PCIe form factor and does not use 22xx M.2 numbering.</span><span class='qd'><b>eMMC chip</b>: eMMC is a soldered BGA storage chip with no removable module dimensions like 2280.</span>" },
{ id:"D1-008", domain:1, obj:"1.1", diff:"hard", q:"A technician must upgrade a laptop from 8GB to 16GB but finds only one accessible SO-DIMM slot occupied with an 8GB module. The other 8GB is soldered to the board. What is the MAXIMUM total RAM achievable?", options:["16GB","32GB","8GB","24GB"], answer:3, explain:"<strong>24GB</strong> is correct because the 8GB soldered to the board stays, and the single SO-DIMM slot can hold a 16GB replacement, totaling 24GB.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>16GB</b>: This ignores the permanently soldered 8GB that adds to whatever is in the slot.</span><span class='qd'><b>32GB</b>: Reaching 32GB would require two 16GB modules, but only one slot is available and the second 8GB is fixed.</span><span class='qd'><b>8GB</b>: This is below the current total and would mean removing soldered memory, which is not possible.</span>" },
{ id:"D1-009", domain:1, obj:"1.1", diff:"easy", q:"Which connector type would a 2.5-inch laptop hard drive most commonly use?", options:["SATA","Molex","PCIe x16","RJ-45"], answer:0, explain:"<strong>SATA</strong> is correct because 2.5-inch laptop hard drives use the combined SATA data and power connector for both signaling and power.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Molex</b>: Molex is a legacy 4-pin power connector for desktop IDE drives and fans, not used by 2.5-inch SATA drives.</span><span class='qd'><b>PCIe x16</b>: PCIe x16 is a graphics card expansion slot, not a storage drive connector.</span><span class='qd'><b>RJ-45</b>: RJ-45 is an 8-pin Ethernet networking jack, completely unrelated to internal drive connections.</span>" },
{ id:"D1-010", domain:1, obj:"1.1", diff:"medium", q:"A laptop's keyboard has several non-functioning keys while others work. What is the MOST likely fix?", options:["Replace the CMOS battery","Replace the keyboard assembly","Replace the entire motherboard","Reinstall the operating system"], answer:1, explain:"<strong>Replace the keyboard assembly</strong> is correct because when some keys work and others do not, the keyboard membrane or matrix is damaged, and laptops use a single replaceable keyboard unit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the entire motherboard</b>: A full board swap is excessive and unnecessary when the fault is isolated to specific keys on the keyboard.</span><span class='qd'><b>Reinstall the operating system</b>: An OS reinstall fixes software, not the physical hardware fault causing dead keys.</span><span class='qd'><b>Replace the CMOS battery</b>: The CMOS battery only maintains BIOS settings and clock, with no effect on individual key function.</span>" },
{ id:"D1-011", domain:1, obj:"1.1", diff:"hard", q:"A technician replaces a laptop's M.2 NVMe drive but the system does not detect it, though an NVMe drive worked previously in that exact slot. What is the BEST next step?", options:["Update the GPU driver","Replace the SO-DIMM","Verify the new drive's key matches and is seated, then check BIOS for the device","Immediately replace the motherboard"], answer:2, explain:"<strong>Verify the new drive's key matches and is seated, then check BIOS for the device</strong> is correct because the cheapest, most logical step is confirming proper installation and BIOS detection before assuming failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Immediately replace the motherboard</b>: Swapping the board skips basic verification and is the most expensive, premature action.</span><span class='qd'><b>Update the GPU driver</b>: Graphics drivers have nothing to do with whether an M.2 storage device is detected.</span><span class='qd'><b>Replace the SO-DIMM</b>: Memory modules are unrelated to NVMe drive detection in this storage-slot scenario.</span>" },
{ id:"D1-012", domain:1, obj:"1.1", diff:"medium", q:"Which laptop feature allows a user to disable the wireless radio quickly without entering the OS?", options:["The docking connector","The CMOS jumper","The Kensington lock slot","A physical or Fn key Wi-Fi toggle"], answer:3, explain:"<strong>A physical or Fn key Wi-Fi toggle</strong> is correct because laptops provide a hardware switch or Fn key combination that disables the wireless radio without any OS interaction.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The CMOS jumper</b>: A CMOS jumper clears BIOS settings and does not control the wireless radio.</span><span class='qd'><b>The Kensington lock slot</b>: The Kensington slot is for a physical anti-theft cable and has no electronic function.</span><span class='qd'><b>The docking connector</b>: The docking connector adds ports through a dock and does not toggle the wireless radio.</span>" },
{ id:"D1-013", domain:1, obj:"1.1", diff:"hard", q:"A laptop intermittently loses Wi-Fi connectivity. Reseating the M.2 Wi-Fi card and updating drivers does not help, but signal drops correlate with closing the lid partway. What is the MOST likely cause?", options:["Damaged or disconnected antenna wires routed through the hinge","A corrupted OS","An incompatible SO-DIMM","A failing CPU"], answer:0, explain:"<strong>Damaged or disconnected antenna wires routed through the hinge</strong> is correct because the antenna leads run through the hinge, so partially closing the lid flexes and intermittently disconnects them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A failing CPU</b>: A failing CPU would cause crashes or instability, not Wi-Fi loss tied specifically to lid position.</span><span class='qd'><b>A corrupted OS</b>: OS corruption would not correlate signal drops with physical hinge movement.</span><span class='qd'><b>An incompatible SO-DIMM</b>: Memory has no relationship to wireless signal strength or antenna routing.</span>" },
{ id:"D1-014", domain:1, obj:"1.1", diff:"easy", q:"Where are the Wi-Fi antenna wires typically located in a laptop?", options:["In the base near the CPU","Routed up into the display bezel","Inside the battery","Under the trackpad"], answer:1, explain:"<strong>Routed up into the display bezel</strong> is correct because antennas are placed high in the lid and bezel for the best line-of-sight reception, with leads running through the hinge.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>In the base near the CPU</b>: The metal-dense base and CPU shielding would degrade reception, so antennas are not placed there.</span><span class='qd'><b>Inside the battery</b>: The battery is a sealed power cell with no room or purpose for antenna wiring.</span><span class='qd'><b>Under the trackpad</b>: The palm-rest area under the trackpad is too low and obstructed for effective antenna placement.</span>" },
{ id:"D1-015", domain:1, obj:"1.1", diff:"medium", q:"A user wants to add a second internal storage device to a thin laptop but it has no extra drive bay. Which slot might still allow expansion?", options:["The HDMI port","The audio jack","An empty M.2 slot","The Ethernet port"], answer:2, explain:"<strong>An empty M.2 slot</strong> is correct because a spare M.2 socket can accept an additional SSD even when the chassis lacks a 2.5-inch drive bay.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The Ethernet port</b>: The Ethernet jack is for network cabling and cannot host an internal storage device.</span><span class='qd'><b>The HDMI port</b>: HDMI is a video output and provides no internal storage expansion.</span><span class='qd'><b>The audio jack</b>: The 3.5mm audio jack carries analog sound only and cannot connect a storage drive.</span>" },
{ id:"D1-016", domain:1, obj:"1.1", diff:"hard", q:"A technician needs the FASTEST internal storage upgrade for a laptop supporting both SATA and PCIe on its M.2 socket. Which should they choose?", options:["2.5-inch SATA HDD","mSATA SSD","M.2 SATA SSD","M.2 NVMe (PCIe) SSD"], answer:3, explain:"<strong>M.2 NVMe (PCIe) SSD</strong> is correct because NVMe uses multiple PCIe lanes, far exceeding the throughput ceiling of any SATA interface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>M.2 SATA SSD</b>: Although it shares the M.2 form factor, it is capped at the SATA III ceiling of about 600 MB/s, far slower than NVMe.</span><span class='qd'><b>2.5-inch SATA HDD</b>: A spinning HDD is the slowest option, limited by both SATA and mechanical platter speed.</span><span class='qd'><b>mSATA SSD</b>: mSATA also rides the SATA bus, so it cannot match PCIe NVMe speeds.</span>" },
{ id:"D1-017", domain:1, obj:"1.2", diff:"easy", q:"Which display technology uses a backlight that shines through liquid crystals to produce an image?", options:["LCD","OLED","E-ink","Plasma"], answer:0, explain:"<strong>LCD</strong> is correct because liquid crystal displays modulate light from a separate backlight that shines through the crystal layer to form the image.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OLED</b>: OLED pixels emit their own light and need no backlight, which is the opposite of the described technology.</span><span class='qd'><b>E-ink</b>: E-ink uses reflective electrophoretic particles and ambient light, with no backlight shining through crystals.</span><span class='qd'><b>Plasma</b>: Plasma displays excite gas-filled cells to emit light directly and do not use liquid crystals or a backlight.</span>" },
{ id:"D1-018", domain:1, obj:"1.2", diff:"easy", q:"Which display technology produces true blacks because each pixel emits its own light and can turn off completely?", options:["VA LCD","OLED","IPS LCD","TN LCD"], answer:1, explain:"<strong>OLED</strong> is correct because each OLED pixel emits its own light and can switch off entirely, producing perfect blacks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IPS LCD</b>: IPS relies on an always-on backlight, so blacks are limited by backlight bleed rather than true off.</span><span class='qd'><b>TN LCD</b>: TN also uses a constant backlight and has even weaker black levels and contrast than IPS.</span><span class='qd'><b>VA LCD</b>: VA improves contrast over TN and IPS but still uses a backlight, so it cannot reach a true black.</span>" },
{ id:"D1-019", domain:1, obj:"1.2", diff:"medium", q:"A laptop screen is dim but an image is faintly visible when shined with a flashlight. Which component has MOST likely failed?", options:["The GPU","The OS display driver","The backlight or inverter","The SO-DIMM"], answer:2, explain:"<strong>The backlight or inverter</strong> is correct because a faint image visible under a flashlight means the LCD still renders but the light source illuminating it has failed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The GPU</b>: A failed GPU would produce no image, artifacts, or no boot, not a correctly rendered but dim picture.</span><span class='qd'><b>The OS display driver</b>: A driver fault causes wrong resolution or no signal, not a uniformly dim panel that still shows an image.</span><span class='qd'><b>The SO-DIMM</b>: Memory has no role in backlighting; a RAM fault would cause crashes or no boot, not a dim screen.</span>" },
{ id:"D1-020", domain:1, obj:"1.2", diff:"medium", q:"Which component converts DC power to the high-voltage AC required by a CCFL backlight in older laptops?", options:["Digitizer","Rectifier","Transformer module","Inverter"], answer:3, explain:"<strong>Inverter</strong> is correct because the inverter steps low-voltage DC up to the high-voltage AC that a CCFL backlight tube requires.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rectifier</b>: A rectifier converts AC to DC, the opposite direction of what a CCFL backlight needs.</span><span class='qd'><b>Transformer module</b>: A plain transformer changes voltage levels but does not convert DC to AC by itself.</span><span class='qd'><b>Digitizer</b>: The digitizer senses touch input and has no role in powering the backlight.</span>" },
{ id:"D1-021", domain:1, obj:"1.2", diff:"easy", q:"Which display component detects touch input on a touchscreen laptop?", options:["Digitizer","Backlight","Polarizer","Inverter"], answer:0, explain:"<strong>Digitizer</strong> is correct because the digitizer is the touch-sensing layer that registers finger and stylus input on the screen.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Inverter</b>: The inverter powers a CCFL backlight and does not detect any touch input.</span><span class='qd'><b>Backlight</b>: The backlight illuminates the panel but cannot sense where the screen is touched.</span><span class='qd'><b>Polarizer</b>: The polarizer is an optical filter layer that controls light orientation, not a touch sensor.</span>" },
{ id:"D1-022", domain:1, obj:"1.2", diff:"medium", q:"A modern laptop display has no inverter. Which backlight technology does it MOST likely use?", options:["CCFL","LED","Plasma","Neon"], answer:1, explain:"<strong>LED</strong> is correct because LED backlights run on low-voltage DC and need no inverter, so a panel without one is almost certainly LED-backlit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CCFL</b>: CCFL backlights specifically require an inverter for their high-voltage AC, so their absence rules CCFL out.</span><span class='qd'><b>Plasma</b>: Plasma is a self-emissive panel technology never used as a laptop backlight.</span><span class='qd'><b>Neon</b>: Neon lighting is not a display backlight technology used in laptops.</span>" },
{ id:"D1-023", domain:1, obj:"1.2", diff:"hard", q:"A touchscreen laptop displays images correctly but no longer responds to finger taps, though a connected USB mouse works. Which part should be replaced FIRST?", options:["The GPU","The LCD panel","The digitizer","The inverter"], answer:2, explain:"<strong>The digitizer</strong> is correct because a correct image with no touch response, while a USB mouse still works, isolates the fault to the touch-sensing digitizer layer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The LCD panel</b>: The panel is clearly fine because the image displays correctly.</span><span class='qd'><b>The inverter</b>: An inverter fault would dim or kill the backlight, not disable touch while the image stays normal.</span><span class='qd'><b>The GPU</b>: The GPU is rendering the image correctly, so it is not the cause of lost touch input.</span>" },
{ id:"D1-024", domain:1, obj:"1.2", diff:"medium", q:"Which display characteristic is described by the number of pixels horizontally by vertically, such as 1920x1080?", options:["Aspect ratio","Contrast ratio","Refresh rate","Resolution"], answer:3, explain:"<strong>Resolution</strong> is correct because resolution is defined as the horizontal pixel count by the vertical pixel count, such as 1920x1080.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Refresh rate</b>: Refresh rate is how many times per second the screen updates, measured in Hz, not a pixel count.</span><span class='qd'><b>Aspect ratio</b>: Aspect ratio is the proportional shape of the screen, such as 16:9, not the absolute pixel dimensions.</span><span class='qd'><b>Contrast ratio</b>: Contrast ratio compares the brightest white to the darkest black, unrelated to pixel counts.</span>" },
{ id:"D1-025", domain:1, obj:"1.2", diff:"hard", q:"A user complains of static images causing faint ghost outlines that persist on a high-end laptop screen. Which display technology is MOST susceptible to this burn-in?", options:["OLED","TN LCD","E-ink","IPS LCD"], answer:0, explain:"<strong>OLED</strong> is correct because OLED organic pixels age unevenly and retain static images, making burn-in its characteristic weakness.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IPS LCD</b>: IPS uses a uniform backlight and is highly resistant to permanent burn-in.</span><span class='qd'><b>TN LCD</b>: TN panels are backlit LCDs and do not suffer the organic-pixel burn-in that OLED does.</span><span class='qd'><b>E-ink</b>: E-ink can show mild ghosting that refreshes away, but it is not the high-end burn-in-prone technology described.</span>" },
{ id:"D1-026", domain:1, obj:"1.2", diff:"easy", q:"Which laptop display component houses the webcam and microphone array?", options:["The base chassis","The display bezel/lid assembly","The palm rest","The battery compartment"], answer:1, explain:"<strong>The display bezel/lid assembly</strong> is correct because the webcam and microphone array are mounted at the top of the lid, above the screen for a face-level view.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The base chassis</b>: The base houses the board, storage, and keyboard, not the forward-facing camera.</span><span class='qd'><b>The palm rest</b>: The palm rest holds the trackpad and provides hand support, not the webcam.</span><span class='qd'><b>The battery compartment</b>: The battery compartment stores the power cell and has no camera or microphone.</span>" },
{ id:"D1-027", domain:1, obj:"1.2", diff:"medium", q:"Which LCD panel type offers the widest viewing angles and best color accuracy?", options:["VA","TN","IPS","CCFL"], answer:2, explain:"<strong>IPS</strong> is correct because In-Plane Switching panels deliver the widest viewing angles and most accurate color of common LCD types.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TN</b>: TN panels are fast and cheap but have narrow viewing angles and poor color shift.</span><span class='qd'><b>CCFL</b>: CCFL is a backlight technology, not an LCD panel type, so it does not describe viewing angle.</span><span class='qd'><b>VA</b>: VA offers strong contrast but its viewing angles and color accuracy trail IPS.</span>" },
{ id:"D1-028", domain:1, obj:"1.2", diff:"hard", q:"A laptop screen shows vertical colored lines that change when the lid is flexed. After ruling out the GPU, what is the BEST conclusion?", options:["The RAM is failing","The Wi-Fi card is faulty","The OS needs reinstalling","A loose or damaged display cable/connector at the hinge"], answer:3, explain:"<strong>A loose or damaged display cable/connector at the hinge</strong> is correct because colored lines that change when the lid flexes indicate the video cable through the hinge is intermittently failing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The OS needs reinstalling</b>: Software cannot cause artifacts that physically change with lid flexing.</span><span class='qd'><b>The RAM is failing</b>: Failing memory causes crashes or boot errors, not lines that respond to mechanical movement.</span><span class='qd'><b>The Wi-Fi card is faulty</b>: A Wi-Fi card affects networking only and cannot produce display artifacts.</span>" },
{ id:"D1-029", domain:1, obj:"1.3", diff:"easy", q:"Which connector is reversible and used for charging and data on most modern Android phones?", options:["USB-C","Micro-USB","Lightning","Mini-USB"], answer:0, explain:"<strong>USB-C</strong> is correct because USB-C is the reversible, oval connector that has become the standard for charging and data on modern Android phones.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Micro-USB</b>: Micro-USB is the older non-reversible Android connector that USB-C replaced.</span><span class='qd'><b>Lightning</b>: Lightning is Apple's proprietary connector, not used on Android devices.</span><span class='qd'><b>Mini-USB</b>: Mini-USB is an obsolete, larger non-reversible connector from older cameras and peripherals.</span>" },
{ id:"D1-030", domain:1, obj:"1.3", diff:"easy", q:"Which proprietary Apple connector was used on iPhones before the transition to USB-C?", options:["Thunderbolt","Lightning","FireWire","Micro-USB"], answer:1, explain:"<strong>Lightning</strong> is correct because Lightning was Apple's proprietary reversible connector used on iPhones for years before the USB-C transition.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Micro-USB</b>: Micro-USB is an Android-era standard connector, never the iPhone charging interface.</span><span class='qd'><b>Thunderbolt</b>: Thunderbolt is a high-speed interface over USB-C, not the pre-USB-C iPhone connector.</span><span class='qd'><b>FireWire</b>: FireWire was a legacy IEEE 1394 data bus on older Macs, not an iPhone charging connector.</span>" },
{ id:"D1-031", domain:1, obj:"1.3", diff:"medium", q:"Which high-speed interface can run over a USB-C connector and supports daisy-chaining displays and external GPUs?", options:["RS-232","HDMI","Thunderbolt","DisplayPort 1.0"], answer:2, explain:"<strong>Thunderbolt</strong> is correct because Thunderbolt runs over the USB-C connector and supports daisy-chaining displays and connecting external GPUs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HDMI</b>: HDMI uses its own connector for video and audio and cannot daisy-chain devices or attach an eGPU.</span><span class='qd'><b>DisplayPort 1.0</b>: Early DisplayPort 1.0 lacked daisy-chaining and the PCIe tunneling needed for external GPUs.</span><span class='qd'><b>RS-232</b>: RS-232 is a slow legacy serial port for terminals and equipment, not a high-speed display interface.</span>" },
{ id:"D1-032", domain:1, obj:"1.3", diff:"medium", q:"A user wants to connect wireless earbuds to a laptop. Which short-range wireless technology is used?", options:["Infrared","Zigbee","NFC","Bluetooth"], answer:3, explain:"<strong>Bluetooth</strong> is correct because Bluetooth is the standard short-range protocol for pairing wireless audio peripherals like earbuds.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NFC</b>: NFC works only at a few centimeters and is for tap interactions, not sustained audio streaming.</span><span class='qd'><b>Infrared</b>: Infrared requires line of sight and is used for remotes, not for streaming earbud audio.</span><span class='qd'><b>Zigbee</b>: Zigbee is a low-power mesh protocol for smart-home sensors, not audio peripherals.</span>" },
{ id:"D1-033", domain:1, obj:"1.3", diff:"easy", q:"Which technology enables contactless payments by tapping a phone near a terminal, working only at very short range?", options:["NFC","Bluetooth","Wi-Fi","Cellular"], answer:0, explain:"<strong>NFC</strong> is correct because Near Field Communication operates at a few centimeters, enabling secure tap-to-pay transactions at a terminal.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bluetooth</b>: Bluetooth reaches several meters, far longer than the few-centimeter range that makes tap-to-pay secure.</span><span class='qd'><b>Wi-Fi</b>: Wi-Fi spans tens of meters for general networking and is not the short-range tap technology used by payment terminals.</span><span class='qd'><b>Cellular</b>: Cellular covers kilometers for carrier connectivity and is unrelated to a close-range payment tap.</span>" },
{ id:"D1-034", domain:1, obj:"1.3", diff:"medium", q:"Approximately what maximum range does NFC operate over?", options:["About 1 kilometer","About 4 cm","About 10 meters","About 100 meters"], answer:1, explain:"<strong>About 4 cm</strong> is correct because NFC is engineered for an extremely short range of roughly 4 centimeters or less, which helps secure payments.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>About 10 meters</b>: Ten meters is closer to a typical Bluetooth Class 2 range, not NFC.</span><span class='qd'><b>About 100 meters</b>: One hundred meters approximates Wi-Fi or long-range Bluetooth, far beyond NFC.</span><span class='qd'><b>About 1 kilometer</b>: A kilometer is cellular or long-range radio territory, not the centimeter-scale NFC range.</span>" },
{ id:"D1-035", domain:1, obj:"1.3", diff:"medium", q:"A technician must connect a legacy projector with a 15-pin analog connector to a modern laptop that only has USB-C. What is needed?", options:["A Lightning to USB adapter","An NFC tag","A USB-C to VGA adapter","A USB-C to RJ45 adapter"], answer:2, explain:"<strong>A USB-C to VGA adapter</strong> is correct because it converts the laptop's digital USB-C output into the legacy 15-pin analog VGA signal the projector needs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A USB-C to RJ45 adapter</b>: RJ45 is for Ethernet networking and carries no video signal for a projector.</span><span class='qd'><b>A Lightning to USB adapter</b>: Lightning is an Apple connector and does not match either the USB-C laptop or the VGA projector.</span><span class='qd'><b>An NFC tag</b>: An NFC tag is a contactless data sticker and cannot output a video signal.</span>" },
{ id:"D1-036", domain:1, obj:"1.3", diff:"hard", q:"A user reports their USB-C cable charges the laptop but will not transfer data to an external SSD. What is the MOST likely cause?", options:["The SSD is out of power","The laptop battery is dead","NFC is disabled","The cable is a charge-only cable lacking data wires"], answer:3, explain:"<strong>The cable is a charge-only cable lacking data wires</strong> is correct because some USB-C cables omit the data conductors, delivering power but unable to transfer data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The SSD is out of power</b>: A bus-powered external SSD draws power from the same connection, so this does not explain charging working while data fails.</span><span class='qd'><b>The laptop battery is dead</b>: The laptop is charging, proving it has power, so a dead battery is not the cause.</span><span class='qd'><b>NFC is disabled</b>: NFC is unrelated to USB-C cable data transfer to a storage device.</span>" },
{ id:"D1-037", domain:1, obj:"1.3", diff:"easy", q:"Which accessory expands a laptop's ports, often adding Ethernet, HDMI, and extra USB through a single connection?", options:["Docking station or USB hub","CMOS battery","Inverter","Digitizer"], answer:0, explain:"<strong>Docking station or USB hub</strong> is correct because it expands a single laptop connection into multiple ports such as Ethernet, HDMI, and extra USB.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CMOS battery</b>: The CMOS battery only preserves BIOS settings and adds no ports.</span><span class='qd'><b>Inverter</b>: The inverter powers a CCFL backlight and has no port-expansion function.</span><span class='qd'><b>Digitizer</b>: The digitizer senses touch input and provides no external connectivity.</span>" },
{ id:"D1-038", domain:1, obj:"1.3", diff:"hard", q:"A user with a single Thunderbolt 3 port wants to drive two 4K monitors, charge the laptop, and add wired networking simultaneously. What is the BEST solution?", options:["A Lightning adapter","A Thunderbolt docking station","An NFC reader","A USB charge-only cable"], answer:1, explain:"<strong>A Thunderbolt docking station</strong> is correct because a single Thunderbolt 3 connection carries dual 4K video, power delivery, and Ethernet through one dock.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A USB charge-only cable</b>: A charge-only cable provides power but no video, data, or networking.</span><span class='qd'><b>A Lightning adapter</b>: A Lightning adapter is for Apple mobile devices and cannot drive monitors or wired networking on this laptop.</span><span class='qd'><b>An NFC reader</b>: An NFC reader handles short-range taps and offers no display, power, or network expansion.</span>" },
{ id:"D1-039", domain:1, obj:"1.3", diff:"medium", q:"Which port type allows a laptop to deliver power to and receive power from a device through USB-C Power Delivery?", options:["VGA","RJ-11","USB-C with PD","HDMI"], answer:2, explain:"<strong>USB-C with PD</strong> is correct because USB-C Power Delivery negotiates bidirectional power, letting a port both supply and receive charge.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HDMI</b>: HDMI carries audio and video and does not deliver significant bidirectional charging power.</span><span class='qd'><b>VGA</b>: VGA is an analog video-only connector with no power delivery capability.</span><span class='qd'><b>RJ-11</b>: RJ-11 is a telephone-line connector and carries no device power or data for this purpose.</span>" },
{ id:"D1-040", domain:1, obj:"1.3", diff:"hard", q:"A user pairs a Bluetooth keyboard but it fails to connect on the first attempt and is not discoverable. What should the technician do FIRST?", options:["Replace the laptop motherboard","Reinstall the OS","Disable Wi-Fi permanently","Put the keyboard into pairing/discoverable mode and retry"], answer:3, explain:"<strong>Put the keyboard into pairing/discoverable mode and retry</strong> is correct because a Bluetooth device must be discoverable to be detected, making this the simplest first step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the laptop motherboard</b>: A board swap is drastic and premature before basic pairing has even been attempted properly.</span><span class='qd'><b>Reinstall the OS</b>: Reinstalling the operating system is excessive for a routine pairing step.</span><span class='qd'><b>Disable Wi-Fi permanently</b>: Wi-Fi does not need to be disabled to pair a Bluetooth keyboard.</span>" },
{ id:"D1-041", domain:1, obj:"1.3", diff:"medium", q:"Which security accessory physically secures a laptop to a desk using a cable through a small reinforced slot?", options:["Kensington lock","Biometric reader","TPM chip","Smart card"], answer:0, explain:"<strong>Kensington lock</strong> is correct because a Kensington cable lock threads through a reinforced slot to physically anchor a laptop to a desk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TPM chip</b>: A TPM is an onboard security chip for keys and encryption, not a physical anti-theft cable.</span><span class='qd'><b>Smart card</b>: A smart card authenticates a user via an embedded chip and does not physically secure the device.</span><span class='qd'><b>Biometric reader</b>: A biometric reader verifies identity but provides no physical tethering of the laptop.</span>" },
{ id:"D1-042", domain:1, obj:"1.3", diff:"easy", q:"Which input accessory uses a stylus and pressure-sensitive surface for drawing on compatible mobile devices?", options:["Game controller","Touch pen / digitizer pen","Trackball","Numeric keypad"], answer:1, explain:"<strong>Touch pen / digitizer pen</strong> is correct because a stylus works with a pressure-sensitive digitizer surface for drawing and handwriting on compatible devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trackball</b>: A trackball is a pointer device with a rolling ball and offers no pressure-sensitive drawing.</span><span class='qd'><b>Numeric keypad</b>: A numeric keypad enters digits and cannot perform stylus-based drawing.</span><span class='qd'><b>Game controller</b>: A game controller is for gaming input and lacks a pressure-sensitive drawing surface.</span>" },
{ id:"D1-043", domain:1, obj:"1.3", diff:"medium", q:"Which biometric method authenticates a user by scanning the unique ridges on their finger?", options:["Voice match","Facial recognition","Fingerprint reader","Iris scan"], answer:2, explain:"<strong>Fingerprint reader</strong> is correct because it authenticates a user by scanning the unique ridge patterns of a finger.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Facial recognition</b>: Facial recognition maps the geometry of a face, not finger ridges.</span><span class='qd'><b>Iris scan</b>: An iris scan reads the unique pattern of the eye, not the fingertip.</span><span class='qd'><b>Voice match</b>: Voice match analyzes vocal characteristics and has nothing to do with finger ridges.</span>" },
{ id:"D1-044", domain:1, obj:"1.3", diff:"hard", q:"A company wants the MOST secure unlock method resistant to a stolen photo of the user. Which option BEST meets this need?", options:["A standard 2D camera face unlock","A swipe pattern","A simple 4-digit PIN","Facial recognition with depth/3D sensing"], answer:3, explain:"<strong>Facial recognition with depth/3D sensing</strong> is correct because depth mapping detects a real three-dimensional face, defeating a flat stolen photo.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A simple 4-digit PIN</b>: A short PIN is easily guessed or shoulder-surfed and is unrelated to photo spoofing resistance.</span><span class='qd'><b>A standard 2D camera face unlock</b>: A flat 2D camera can be fooled by a printed or displayed photo, which is exactly the threat to defeat.</span><span class='qd'><b>A swipe pattern</b>: A swipe pattern can be observed or smudge-traced and offers no defense against a stolen photo.</span>" },
{ id:"D1-045", domain:1, obj:"1.3", diff:"medium", q:"Which card type can store credentials on a chip and is inserted into a reader for authentication?", options:["Smart card","SD card","SIM card","Memory Stick"], answer:0, explain:"<strong>Smart card</strong> is correct because a smart card stores authentication credentials on an embedded chip and is inserted into a reader for verification.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SD card</b>: An SD card is removable flash storage for files, not a credential-bearing authentication card.</span><span class='qd'><b>SIM card</b>: A SIM card identifies a subscriber on a cellular network, not a smart-card login token.</span><span class='qd'><b>Memory Stick</b>: A Memory Stick is a proprietary Sony flash storage format, not an authentication chip card.</span>" },
{ id:"D1-046", domain:1, obj:"1.3", diff:"easy", q:"Which small removable card identifies a subscriber on a cellular network?", options:["CF card","SIM card","microSDXC","SD card"], answer:1, explain:"<strong>SIM card</strong> is correct because a Subscriber Identity Module holds the identity used to authenticate a device on a carrier's cellular network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SD card</b>: An SD card is removable file storage and does not identify a cellular subscriber.</span><span class='qd'><b>CF card</b>: CompactFlash is a legacy storage card for cameras, not a cellular identity module.</span><span class='qd'><b>microSDXC</b>: microSDXC is high-capacity flash storage and carries no subscriber identity for the network.</span>" },
{ id:"D1-047", domain:1, obj:"1.4", diff:"easy", q:"Which protocol downloads email and by default removes it from the server, using port 110?", options:["SMTP","HTTP","POP3","IMAP"], answer:2, explain:"<strong>POP3</strong> is correct because POP3 uses port 110 and by default downloads messages and removes them from the server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IMAP</b>: IMAP keeps mail synchronized on the server across devices and uses port 143, not 110.</span><span class='qd'><b>SMTP</b>: SMTP sends outgoing mail on port 25 or 587 and does not download to the client.</span><span class='qd'><b>HTTP</b>: HTTP serves web pages on port 80 and is not a dedicated mail-retrieval protocol.</span>" },
{ id:"D1-048", domain:1, obj:"1.4", diff:"easy", q:"Which email protocol synchronizes messages across multiple devices and uses port 143?", options:["SNMP","POP3","SMTP","IMAP"], answer:3, explain:"<strong>IMAP</strong> is correct because IMAP uses port 143 and keeps messages on the server so they stay synchronized across multiple devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>POP3</b>: POP3 uses port 110 and typically downloads then deletes mail, the opposite of synchronized access.</span><span class='qd'><b>SMTP</b>: SMTP sends outgoing mail and does not synchronize received messages across devices.</span><span class='qd'><b>SNMP</b>: SNMP manages network devices on port 161 and is not an email protocol at all.</span>" },
{ id:"D1-049", domain:1, obj:"1.4", diff:"medium", q:"Which port is used for secure POP3 over SSL/TLS?", options:["995","993","110","143"], answer:0, explain:"<strong>995</strong> is correct because secure POP3 over SSL/TLS (POP3S) uses port 995.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>110</b>: Port 110 is unencrypted POP3, not the secure SSL/TLS variant.</span><span class='qd'><b>143</b>: Port 143 is unencrypted IMAP, not secure POP3.</span><span class='qd'><b>993</b>: Port 993 is secure IMAP over SSL/TLS, not POP3.</span>" },
{ id:"D1-050", domain:1, obj:"1.4", diff:"medium", q:"Which port is used for secure IMAP over SSL/TLS?", options:["143","993","995","25"], answer:1, explain:"<strong>993</strong> is correct because secure IMAP over SSL/TLS (IMAPS) uses port 993.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>143</b>: Port 143 is unencrypted IMAP, not the secure SSL/TLS variant.</span><span class='qd'><b>995</b>: Port 995 is secure POP3 over SSL/TLS, not IMAP.</span><span class='qd'><b>25</b>: Port 25 is SMTP for outgoing mail relay, unrelated to secure IMAP retrieval.</span>" },
{ id:"D1-051", domain:1, obj:"1.4", diff:"hard", q:"A user's phone keeps deleting email from the server after reading it on the phone, so messages vanish from their laptop. Which change BEST fixes this?", options:["Change SMTP to port 25","Disable Wi-Fi","Switch the account from POP3 to IMAP","Switch to port 110"], answer:2, explain:"<strong>Switch the account from POP3 to IMAP</strong> is correct because IMAP keeps mail on the server synchronized across devices instead of POP3 downloading and deleting it on first read.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Change SMTP to port 25</b>: SMTP handles outgoing mail and changing its port has no effect on incoming messages being deleted.</span><span class='qd'><b>Disable Wi-Fi</b>: Network choice does not change the retrieval protocol that is removing mail from the server.</span><span class='qd'><b>Switch to port 110</b>: Port 110 is the standard POP3 port, which keeps the very download-and-delete behavior causing the problem.</span>" },
{ id:"D1-052", domain:1, obj:"1.4", diff:"easy", q:"Which feature lets a smartphone share its cellular internet connection with a laptop over Wi-Fi?", options:["VPN","Airplane mode","NFC","Mobile hotspot"], answer:3, explain:"<strong>Mobile hotspot</strong> is correct because a mobile hotspot shares the phone's cellular data with nearby devices over Wi-Fi.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Airplane mode</b>: Airplane mode disables all radios, which would stop sharing internet entirely.</span><span class='qd'><b>NFC</b>: NFC is a centimeter-range tap technology and cannot share a Wi-Fi internet connection.</span><span class='qd'><b>VPN</b>: A VPN encrypts traffic over an existing connection but does not share the phone's cellular data.</span>" },
{ id:"D1-053", domain:1, obj:"1.4", diff:"medium", q:"Which term specifically describes sharing a phone's internet connection via a USB cable to a laptop?", options:["Tethering","Hotspot","Pairing","Roaming"], answer:0, explain:"<strong>Tethering</strong> is correct because tethering specifically refers to sharing a phone's connection over a wired USB link (or Bluetooth) to a laptop.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hotspot</b>: A hotspot shares the connection over Wi-Fi wirelessly, not via a USB cable.</span><span class='qd'><b>Pairing</b>: Pairing is the process of bonding two Bluetooth devices, not sharing internet over USB.</span><span class='qd'><b>Roaming</b>: Roaming is using another carrier's network while traveling, not sharing a connection to a laptop.</span>" },
{ id:"D1-054", domain:1, obj:"1.4", diff:"medium", q:"Which technology lets corporate IT enforce passcode policies and remotely wipe lost company phones?", options:["VPN","MDM","DHCP","NFC"], answer:1, explain:"<strong>MDM</strong> is correct because Mobile Device Management lets IT enforce passcode policies and remotely wipe lost or stolen company phones.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NFC</b>: NFC is a short-range tap technology with no device-policy or remote-wipe capability.</span><span class='qd'><b>VPN</b>: A VPN secures network traffic but cannot enforce passcodes or wipe a device.</span><span class='qd'><b>DHCP</b>: DHCP assigns IP addresses on a network and has no mobile-management function.</span>" },
{ id:"D1-055", domain:1, obj:"1.4", diff:"hard", q:"A company allows BYOD and wants to control ONLY corporate apps and data without managing employees' personal devices fully. Which approach is BEST?", options:["Disabling Bluetooth","POP3 email","MAM","Full MDM enrollment"], answer:2, explain:"<strong>MAM</strong> is correct because Mobile Application Management controls only corporate apps and data, leaving the rest of a personal BYOD device unmanaged.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full MDM enrollment</b>: Full MDM manages the entire device, which is exactly the heavy control the company wants to avoid for personal phones.</span><span class='qd'><b>Disabling Bluetooth</b>: Turning off Bluetooth restricts a feature but does not selectively manage corporate apps and data.</span><span class='qd'><b>POP3 email</b>: POP3 is a mail-retrieval protocol and provides no application management capability.</span>" },
{ id:"D1-056", domain:1, obj:"1.4", diff:"medium", q:"Which protocol is used to send outgoing email from a client to a mail server, commonly on port 587 or 25?", options:["FTP","POP3","IMAP","SMTP"], answer:3, explain:"<strong>SMTP</strong> is correct because Simple Mail Transfer Protocol sends outgoing mail, using port 25 traditionally and 587 for authenticated submission.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>POP3</b>: POP3 retrieves and downloads incoming mail on port 110, not outgoing delivery.</span><span class='qd'><b>IMAP</b>: IMAP synchronizes incoming mail on the server on port 143 and does not send outgoing mail.</span><span class='qd'><b>FTP</b>: FTP transfers files on ports 20 and 21 and is not an email protocol.</span>" },
{ id:"D1-057", domain:1, obj:"1.4", diff:"easy", q:"Which mode disables all wireless radios on a mobile device at once?", options:["Airplane mode","Hotspot mode","Pairing mode","Roaming mode"], answer:0, explain:"<strong>Airplane mode</strong> is correct because airplane mode turns off cellular, Wi-Fi, and Bluetooth radios simultaneously.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hotspot mode</b>: Hotspot mode actively shares cellular data over Wi-Fi, which requires radios to stay on.</span><span class='qd'><b>Pairing mode</b>: Pairing mode makes Bluetooth discoverable, the opposite of disabling radios.</span><span class='qd'><b>Roaming mode</b>: Roaming uses another carrier's cellular network and keeps the radio active.</span>" },
{ id:"D1-058", domain:1, obj:"1.4", diff:"hard", q:"A traveling user reports unexpectedly high data charges abroad. Which setting should be checked FIRST to control costs?", options:["Increase screen brightness","Disable data roaming","Turn off NFC","Enable hotspot"], answer:1, explain:"<strong>Disable data roaming</strong> is correct because turning off data roaming prevents the phone from using costly foreign carrier networks while abroad.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enable hotspot</b>: Enabling a hotspot shares data and could increase usage, not reduce roaming charges.</span><span class='qd'><b>Increase screen brightness</b>: Brightness affects battery, not data usage or roaming costs.</span><span class='qd'><b>Turn off NFC</b>: NFC handles short-range taps and consumes no cellular data, so disabling it does not affect roaming bills.</span>" },
{ id:"D1-059", domain:1, obj:"1.4", diff:"medium", q:"A new corporate phone needs email, calendar, and contacts to sync automatically with Microsoft Exchange. Which protocol is typically used?", options:["FTP","Telnet","Exchange ActiveSync","POP3"], answer:2, explain:"<strong>Exchange ActiveSync</strong> is correct because it synchronizes mail, calendar, and contacts with Microsoft Exchange servers on mobile devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>POP3</b>: POP3 only downloads mail and cannot synchronize calendar or contacts.</span><span class='qd'><b>FTP</b>: FTP transfers files and has no email, calendar, or contact synchronization role.</span><span class='qd'><b>Telnet</b>: Telnet is an unencrypted remote terminal protocol, not a mail-sync service.</span>" },
{ id:"D1-060", domain:1, obj:"1.4", diff:"hard", q:"A user can browse websites on cellular data but cannot send email, while Wi-Fi works fine for both. What should the technician check FIRST?", options:["The laptop SO-DIMM","The digitizer","The Kensington lock","Whether the outgoing SMTP server/port is blocked or misconfigured on cellular"], answer:3, explain:"<strong>Whether the outgoing SMTP server/port is blocked or misconfigured on cellular</strong> is correct because browsing working while mail fails points to the outgoing SMTP path being blocked by the carrier or set wrong.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The laptop SO-DIMM</b>: Memory has nothing to do with sending email over a cellular connection.</span><span class='qd'><b>The digitizer</b>: The digitizer is a touch sensor and is unrelated to email transmission.</span><span class='qd'><b>The Kensington lock</b>: The Kensington lock is a physical security cable with no networking function.</span>" },
{ id:"D1-061", domain:1, obj:"1.4", diff:"medium", q:"Which technology creates an encrypted tunnel so a mobile user can securely access the corporate network over the internet?", options:["VPN","NFC","Hotspot","Bluetooth"], answer:0, explain:"<strong>VPN</strong> is correct because a VPN creates an encrypted tunnel for securely accessing the corporate network over the public internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NFC</b>: NFC is a centimeter-range tap technology and cannot create a remote-access tunnel.</span><span class='qd'><b>Hotspot</b>: A hotspot shares internet access but does not encrypt or tunnel into a corporate network.</span><span class='qd'><b>Bluetooth</b>: Bluetooth is a short-range peripheral link and provides no encrypted corporate tunnel.</span>" },
{ id:"D1-062", domain:1, obj:"1.4", diff:"hard", q:"After enrolling a phone in MDM, a user finds the camera is disabled. What is the MOST likely reason?", options:["A hardware failure of the camera","An MDM policy enforced by the organization","The SIM card is missing","Airplane mode is on"], answer:1, explain:"<strong>An MDM policy enforced by the organization</strong> is correct because MDM can disable hardware such as the camera to meet security requirements after enrollment.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A hardware failure of the camera</b>: The disabling happening right after MDM enrollment points to policy, not coincidental hardware failure.</span><span class='qd'><b>The SIM card is missing</b>: A missing SIM affects cellular connectivity, not whether the camera is enabled.</span><span class='qd'><b>Airplane mode is on</b>: Airplane mode disables radios but does not turn off the camera.</span>" },
{ id:"D1-063", domain:1, obj:"1.4", diff:"easy", q:"Which two-factor authentication app generates time-based one-time codes on a mobile device?", options:["Web browser","File manager","Authenticator app","Email client"], answer:2, explain:"<strong>Authenticator app</strong> is correct because an authenticator app generates time-based one-time (TOTP) codes used as a second login factor.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Email client</b>: An email client receives messages and does not generate TOTP codes itself.</span><span class='qd'><b>Web browser</b>: A browser displays web pages and is not a dedicated code-generating authenticator.</span><span class='qd'><b>File manager</b>: A file manager organizes files and has no two-factor code generation function.</span>" },
{ id:"D1-064", domain:1, obj:"1.4", diff:"medium", q:"A user wants location services available only for maps but not for social apps. Which feature provides this control?", options:["Airplane mode","Hotspot","Data roaming","Per-app location permissions"], answer:3, explain:"<strong>Per-app location permissions</strong> is correct because modern mobile OSes let users grant location access to specific apps such as maps while denying it to others.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Airplane mode</b>: Airplane mode disables radios entirely and cannot selectively grant location to one app.</span><span class='qd'><b>Hotspot</b>: A hotspot shares internet and has no bearing on per-app location control.</span><span class='qd'><b>Data roaming</b>: Data roaming governs cellular use abroad, not which apps may access location.</span>" },
{ id:"D1-065", domain:1, obj:"1.4", diff:"hard", q:"A company phone is lost. The security team must ensure no corporate data is exposed. Which MDM action is the BEST immediate response?", options:["Remote wipe the device","Disable airplane mode","Change the SMTP port","Re-pair Bluetooth"], answer:0, explain:"<strong>Remote wipe the device</strong> is correct because an MDM remote wipe immediately erases the lost phone's data, preventing exposure of corporate information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disable airplane mode</b>: This cannot be done on a phone the team does not hold and does nothing to protect the data.</span><span class='qd'><b>Change the SMTP port</b>: Adjusting an email port has no effect on securing data already on a lost device.</span><span class='qd'><b>Re-pair Bluetooth</b>: Re-pairing Bluetooth is unrelated to protecting corporate data on a missing phone.</span>" }
);
APLUS1.questions.push(
{ id:"D2-001", domain:2, obj:"2.1", diff:"easy", q:"Which port does HTTPS use by default?", options:["80","443","8080","21"], answer:1, explain:"<strong>443</strong> is the default TCP port for HTTPS, carrying web traffic encrypted by TLS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>80</b>: Port 80 serves unencrypted HTTP, not the TLS-secured HTTPS traffic the question asks about.</span><span class='qd'><b>8080</b>: Port 8080 is a common alternate HTTP port used by proxies and web app servers, not the default for HTTPS.</span><span class='qd'><b>21</b>: Port 21 is the FTP control channel, used for file transfer commands, not web traffic.</span>" },
{ id:"D2-002", domain:2, obj:"2.1", diff:"easy", q:"Which port does HTTP use by default?", options:["443","25","80","110"], answer:2, explain:"<strong>80</strong> is the default TCP port for HTTP, serving unencrypted web pages.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>443</b>: Port 443 carries HTTPS (TLS-encrypted web traffic), not plain HTTP.</span><span class='qd'><b>25</b>: Port 25 is SMTP for sending email, not web page delivery.</span><span class='qd'><b>110</b>: Port 110 is POP3 for retrieving email from a mailbox, unrelated to HTTP.</span>" },
{ id:"D2-003", domain:2, obj:"2.1", diff:"easy", q:"Which port does SSH use?", options:["23","21","25","22"], answer:3, explain:"<strong>22</strong> is the TCP port for SSH, providing an encrypted remote command-line session.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>23</b>: Port 23 is Telnet, which sends remote sessions in cleartext rather than encrypted.</span><span class='qd'><b>21</b>: Port 21 is the FTP control channel for file transfer, not remote shell access.</span><span class='qd'><b>25</b>: Port 25 is SMTP for sending email, not remote management.</span>" },
{ id:"D2-004", domain:2, obj:"2.1", diff:"easy", q:"Which port does Telnet use?", options:["23","53","443","22"], answer:0, explain:"<strong>23</strong> is the TCP port for Telnet, which transmits remote sessions in cleartext.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>22</b>: Port 22 is SSH, the encrypted replacement for Telnet, not Telnet itself.</span><span class='qd'><b>53</b>: Port 53 is DNS for name resolution, not interactive remote login.</span><span class='qd'><b>443</b>: Port 443 is HTTPS for encrypted web traffic, unrelated to Telnet.</span>" },
{ id:"D2-005", domain:2, obj:"2.1", diff:"medium", q:"Which two ports are associated with FTP for control and data transfer?", options:["67 and 68","20 and 21","21 and 22","22 and 23"], answer:1, explain:"<strong>20 and 21</strong> are FTP's ports: 21 carries the control connection and 20 carries active-mode data transfer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>21 and 22</b>: Port 21 is FTP control but port 22 is SSH, not the FTP data port.</span><span class='qd'><b>22 and 23</b>: Ports 22 and 23 are SSH and Telnet for remote access, not FTP file transfer.</span><span class='qd'><b>67 and 68</b>: Ports 67 and 68 are DHCP server and client ports, not FTP.</span>" },
{ id:"D2-006", domain:2, obj:"2.1", diff:"easy", q:"Which port does SMTP use to send email?", options:["110","143","25","53"], answer:2, explain:"<strong>25</strong> is the TCP port SMTP uses to send and relay outbound email between mail servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>110</b>: Port 110 is POP3, which retrieves email from a server, not sends it.</span><span class='qd'><b>143</b>: Port 143 is IMAP, which synchronizes received mail, not outbound sending.</span><span class='qd'><b>53</b>: Port 53 is DNS for name resolution, not email transport.</span>" },
{ id:"D2-007", domain:2, obj:"2.1", diff:"easy", q:"Which port does DNS use for standard name resolution queries?", options:["80","67","389","53"], answer:3, explain:"<strong>53</strong> is the port DNS uses to resolve hostnames to IP addresses, primarily over UDP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>80</b>: Port 80 is HTTP for serving web pages, not name resolution.</span><span class='qd'><b>67</b>: Port 67 is the DHCP server port for handing out IP configuration, not DNS lookups.</span><span class='qd'><b>389</b>: Port 389 is LDAP for directory queries, not DNS name resolution.</span>" },
{ id:"D2-008", domain:2, obj:"2.1", diff:"medium", q:"Which pair of ports does DHCP use?", options:["67 and 68","80 and 443","137 and 138","20 and 21"], answer:0, explain:"<strong>67 and 68</strong> are DHCP's UDP ports: the server listens on 67 and the client receives on 68.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>20 and 21</b>: Ports 20 and 21 are FTP data and control, not address assignment.</span><span class='qd'><b>80 and 443</b>: Ports 80 and 443 are HTTP and HTTPS web traffic, not DHCP.</span><span class='qd'><b>137 and 138</b>: Ports 137 and 138 are NetBIOS name and datagram services, not DHCP leasing.</span>" },
{ id:"D2-009", domain:2, obj:"2.1", diff:"easy", q:"Which port does POP3 use to retrieve email?", options:["143","110","25","993"], answer:1, explain:"<strong>110</strong> is the TCP port POP3 uses to download email from a server to a single client.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>143</b>: Port 143 is IMAP, which synchronizes mail across devices rather than downloading via POP3.</span><span class='qd'><b>25</b>: Port 25 is SMTP for sending email, not retrieving it.</span><span class='qd'><b>993</b>: Port 993 is IMAPS (TLS-encrypted IMAP), not standard POP3.</span>" },
{ id:"D2-010", domain:2, obj:"2.1", diff:"easy", q:"Which port does IMAP use to retrieve email?", options:["110","25","143","443"], answer:2, explain:"<strong>143</strong> is the TCP port IMAP uses to synchronize email between the client and server while leaving messages on the server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>110</b>: Port 110 is POP3, which downloads and typically removes mail rather than syncing it.</span><span class='qd'><b>25</b>: Port 25 is SMTP for sending outbound email, not retrieval.</span><span class='qd'><b>443</b>: Port 443 is HTTPS web traffic, unrelated to mailbox access.</span>" },
{ id:"D2-011", domain:2, obj:"2.1", diff:"medium", q:"Which port does SMB use for file and printer sharing on modern networks?", options:["139","21","389","445"], answer:3, explain:"<strong>445</strong> is the TCP port modern SMB uses to run directly over TCP/IP for Windows file and printer sharing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>139</b>: Port 139 is legacy SMB over NetBIOS, the older method modern networks replaced with 445.</span><span class='qd'><b>21</b>: Port 21 is FTP control, a different file transfer protocol, not SMB sharing.</span><span class='qd'><b>389</b>: Port 389 is LDAP for directory services, not file or printer sharing.</span>" },
{ id:"D2-012", domain:2, obj:"2.1", diff:"easy", q:"Which port does RDP use?", options:["3389","5900","22","443"], answer:0, explain:"<strong>3389</strong> is the TCP port Microsoft's Remote Desktop Protocol uses for graphical remote sessions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>5900</b>: Port 5900 is VNC, a different cross-platform remote-control protocol, not RDP.</span><span class='qd'><b>22</b>: Port 22 is SSH for encrypted command-line access, not graphical RDP.</span><span class='qd'><b>443</b>: Port 443 is HTTPS web traffic, not remote desktop.</span>" },
{ id:"D2-013", domain:2, obj:"2.1", diff:"medium", q:"Which port does LDAP use for directory services?", options:["636","389","161","53"], answer:1, explain:"<strong>389</strong> is the TCP/UDP port LDAP uses to query and modify directory services.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>636</b>: Port 636 is LDAPS, the TLS-encrypted version, not plaintext LDAP.</span><span class='qd'><b>161</b>: Port 161 is SNMP for receiving management queries, not directory access.</span><span class='qd'><b>53</b>: Port 53 is DNS for name resolution, not LDAP directory lookups.</span>" },
{ id:"D2-014", domain:2, obj:"2.1", diff:"medium", q:"Which port does SNMP use for receiving management queries?", options:["389","162","161","123"], answer:2, explain:"<strong>161</strong> is the UDP port SNMP agents listen on to receive management queries from a monitoring station.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>162</b>: Port 162 is where the manager receives SNMP traps, not where the agent receives queries.</span><span class='qd'><b>123</b>: Port 123 is NTP for time synchronization, not SNMP management.</span><span class='qd'><b>389</b>: Port 389 is LDAP for directory services, not device monitoring.</span>" },
{ id:"D2-015", domain:2, obj:"2.1", diff:"medium", q:"A technician needs to securely manage a switch's command line over the network. Which port should be open?", options:["80","161","23","22"], answer:3, explain:"<strong>22</strong> (SSH) provides encrypted command-line management of the switch, protecting credentials over the network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>23</b>: Port 23 (Telnet) offers command-line access but sends everything in cleartext, failing the secure requirement.</span><span class='qd'><b>80</b>: Port 80 (HTTP) is for a web management interface, and it is unencrypted besides not being command-line.</span><span class='qd'><b>161</b>: Port 161 (SNMP) is for monitoring and polling the switch, not for interactive CLI management.</span>" },
{ id:"D2-016", domain:2, obj:"2.1", diff:"medium", q:"Which protocol and port combination is correct for encrypted email retrieval using IMAP?", options:["IMAPS 993","IMAP 143","POP3S 995","SMTP 587"], answer:0, explain:"<strong>IMAPS 993</strong> is correct because secure IMAP wraps the standard IMAP service in TLS on TCP port 993.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IMAP 143</b>: Port 143 is plaintext IMAP, which is not the encrypted retrieval the question requires.</span><span class='qd'><b>POP3S 995</b>: Port 995 is secure POP3, a different retrieval protocol that downloads rather than syncs like IMAP.</span><span class='qd'><b>SMTP 587</b>: Port 587 is the SMTP submission port for sending mail, not retrieving it.</span>" },
{ id:"D2-017", domain:2, obj:"2.1", diff:"hard", q:"A web server responds on port 80 but not port 443. Which capability is MOST likely missing?", options:["DNS resolution","TLS/SSL encryption","DHCP leasing","ARP caching"], answer:1, explain:"<strong>TLS/SSL encryption</strong> is missing because port 443 is the HTTPS listener; without it the server serves plain HTTP on 80 but cannot negotiate an encrypted session.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS resolution</b>: DNS uses port 53 and resolves names; the server already answers on port 80, so name resolution is working.</span><span class='qd'><b>DHCP leasing</b>: DHCP uses ports 67 and 68 to assign addresses and has nothing to do with serving HTTPS.</span><span class='qd'><b>ARP caching</b>: ARP maps IP to MAC on the LAN and is unrelated to whether a web server offers TLS on 443.</span>" },
{ id:"D2-018", domain:2, obj:"2.1", diff:"medium", q:"Which transport protocol does DNS typically use for standard queries?", options:["SMTP","TCP","UDP","ICMP"], answer:2, explain:"<strong>UDP</strong> is correct because DNS uses connectionless UDP port 53 for fast standard queries, switching to TCP only for large responses or zone transfers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP</b>: DNS uses TCP only as a fallback for zone transfers and oversized replies, not for typical lookups.</span><span class='qd'><b>ICMP</b>: ICMP carries diagnostic messages like ping and unreachable errors, not DNS queries.</span><span class='qd'><b>SMTP</b>: SMTP is an email application protocol, not a transport protocol, so it cannot carry DNS queries.</span>" },
{ id:"D2-019", domain:2, obj:"2.1", diff:"hard", q:"Email is sending fine but cannot be received. Which port should the technician verify FIRST on the mail server?", options:["20","3389","25","110"], answer:3, explain:"<strong>110</strong> is correct because outbound sending works via SMTP (25) but inbound retrieval relies on POP3 (110) or IMAP (143), so the retrieval port is the first to verify.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>25</b>: Port 25 is SMTP, which handles the sending that is already working, so it is not the failure point.</span><span class='qd'><b>20</b>: Port 20 is the FTP active-mode data channel, unrelated to email retrieval.</span><span class='qd'><b>3389</b>: Port 3389 is RDP for remote desktop, not mail retrieval.</span>" },
{ id:"D2-020", domain:2, obj:"2.1", diff:"hard", q:"Which protocol provides time synchronization, and on which port?", options:["NTP UDP 123","SNTP TCP 161","NTP TCP 389","RTP UDP 5004"], answer:0, explain:"<strong>NTP UDP 123</strong> is correct because the Network Time Protocol synchronizes clocks over connectionless UDP port 123.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNTP TCP 161</b>: SNTP is a simplified NTP variant that still uses UDP 123; port 161 is SNMP, so the pairing is wrong.</span><span class='qd'><b>NTP TCP 389</b>: NTP runs on UDP 123, and port 389 is LDAP, so both protocol transport and port are incorrect.</span><span class='qd'><b>RTP UDP 5004</b>: RTP carries real-time audio and video streams, not clock synchronization.</span>" },
{ id:"D2-021", domain:2, obj:"2.1", diff:"medium", q:"Which protocol uses port 3389 and allows full graphical control of a remote Windows desktop?", options:["VNC","RDP","SSH","Telnet"], answer:1, explain:"<strong>RDP</strong> is correct because Microsoft's Remote Desktop Protocol uses port 3389 to deliver full graphical control of a Windows desktop.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VNC</b>: VNC also gives graphical control but uses port 5900, not 3389.</span><span class='qd'><b>SSH</b>: SSH uses port 22 and provides an encrypted command line, not a graphical desktop.</span><span class='qd'><b>Telnet</b>: Telnet uses port 23 for cleartext command-line access, not graphical remote desktop.</span>" },
{ id:"D2-022", domain:2, obj:"2.1", diff:"hard", q:"A firewall blocks UDP 53 but allows TCP 53. Which symptom is MOST likely?", options:["DHCP leases fail","RDP sessions drop","Web pages load by IP but not by name","Email cannot be sent"], answer:2, explain:"<strong>Web pages load by IP but not by name</strong> is correct because DNS lookups use UDP 53; blocking that port breaks name resolution while direct IP connections still succeed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Email cannot be sent</b>: Sending uses SMTP port 25, which is unaffected by a DNS port filter.</span><span class='qd'><b>DHCP leases fail</b>: DHCP uses UDP ports 67 and 68, not port 53, so leasing continues normally.</span><span class='qd'><b>RDP sessions drop</b>: RDP uses TCP 3389 and once connected by IP does not depend on DNS UDP 53.</span>" },
{ id:"D2-023", domain:2, obj:"2.1", diff:"easy", q:"Which protocol assigns IP addresses to clients automatically?", options:["SNMP","LDAP","DNS","DHCP"], answer:3, explain:"<strong>DHCP</strong> is correct because it automatically leases IP addresses and configuration to clients using UDP ports 67 and 68.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves hostnames to IP addresses but does not assign addresses to clients.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages network devices, not address allocation.</span><span class='qd'><b>LDAP</b>: LDAP queries directory services for accounts and objects, not IP assignment.</span>" },
{ id:"D2-024", domain:2, obj:"2.1", diff:"medium", q:"Which protocol resolves an IP address to a MAC address on a local network?", options:["ARP","DHCP","ICMP","DNS"], answer:0, explain:"<strong>ARP</strong> is correct because the Address Resolution Protocol maps a known IP address to the corresponding MAC address on the local network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves hostnames to IP addresses, not IP addresses to MAC addresses.</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration to clients; it does not resolve IP to MAC.</span><span class='qd'><b>ICMP</b>: ICMP handles diagnostics like ping and error reporting, not address resolution.</span>" },
{ id:"D2-025", domain:2, obj:"2.1", diff:"hard", q:"A secure LDAP connection is required for authentication. Which port and protocol are correct?", options:["RADIUS on 1812","LDAPS on 636","LDAP on 389","Kerberos on 88"], answer:1, explain:"<strong>LDAPS on 636</strong> is correct because secure LDAP encrypts directory traffic with TLS over TCP port 636.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LDAP on 389</b>: Port 389 carries directory queries in plaintext, failing the secure requirement.</span><span class='qd'><b>Kerberos on 88</b>: Kerberos on port 88 issues authentication tickets but is a different protocol from LDAP directory access.</span><span class='qd'><b>RADIUS on 1812</b>: RADIUS on 1812 handles network access authentication, not encrypted LDAP directory lookups.</span>" },
{ id:"D2-026", domain:2, obj:"2.2", diff:"easy", q:"Which device forwards traffic between different networks based on IP addresses?", options:["Access point","Switch","Router","Hub"], answer:2, explain:"<strong>Router</strong> is correct because it makes Layer 3 forwarding decisions using IP addresses to move packets between different networks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Switch</b>: A switch forwards frames within a single LAN using MAC addresses at Layer 2, not between networks.</span><span class='qd'><b>Hub</b>: A hub blindly repeats signals out all ports with no addressing logic at all.</span><span class='qd'><b>Access point</b>: An access point bridges wireless clients to a wired LAN; it does not route between IP networks.</span>" },
{ id:"D2-027", domain:2, obj:"2.2", diff:"easy", q:"Which device forwards frames within a LAN based on MAC addresses?", options:["Modem","Firewall","Router","Switch"], answer:3, explain:"<strong>Switch</strong> is correct because it operates at Layer 2, forwarding frames to specific ports using a learned MAC address table.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Router</b>: A router forwards packets between networks using Layer 3 IP addresses, not frames by MAC within a LAN.</span><span class='qd'><b>Modem</b>: A modem modulates signals between the ISP and the local network; it does not forward frames by MAC.</span><span class='qd'><b>Firewall</b>: A firewall filters traffic by security rules rather than forwarding frames based on MAC addresses.</span>" },
{ id:"D2-028", domain:2, obj:"2.2", diff:"easy", q:"Which device provides wireless clients access to a wired network?", options:["Access point","Repeater","Patch panel","Bridge"], answer:0, explain:"<strong>Access point</strong> is correct because it connects Wi-Fi clients to the wired LAN infrastructure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Repeater</b>: A repeater extends an existing signal's range; it does not bridge wireless clients onto the wired network.</span><span class='qd'><b>Patch panel</b>: A patch panel is a passive termination point for cabling, with no wireless function.</span><span class='qd'><b>Bridge</b>: A bridge connects two network segments at Layer 2 but does not provide wireless client access on its own.</span>" },
{ id:"D2-029", domain:2, obj:"2.2", diff:"easy", q:"Which device filters traffic based on rules to protect a network?", options:["Hub","Firewall","Switch","Modem"], answer:1, explain:"<strong>Firewall</strong> is correct because it inspects and filters traffic according to security rules to control what enters or leaves a network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hub</b>: A hub simply repeats signals out all ports with no filtering capability.</span><span class='qd'><b>Switch</b>: A switch forwards frames by MAC address but does not filter traffic by security policy.</span><span class='qd'><b>Modem</b>: A modem converts signals between the ISP and the LAN and provides no traffic filtering.</span>" },
{ id:"D2-030", domain:2, obj:"2.2", diff:"medium", q:"Which device converts signals between an ISP's medium and a home network's Ethernet?", options:["Repeater","Switch","Modem","Access point"], answer:2, explain:"<strong>Modem</strong> is correct because it modulates and demodulates signals between the ISP's carrier medium and the local Ethernet network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Switch</b>: A switch forwards Ethernet frames within the LAN and does not convert ISP signaling.</span><span class='qd'><b>Access point</b>: An access point bridges wireless clients to the wired LAN, not the ISP medium to Ethernet.</span><span class='qd'><b>Repeater</b>: A repeater regenerates a signal over distance; it does not translate between ISP and Ethernet media.</span>" },
{ id:"D2-031", domain:2, obj:"2.2", diff:"medium", q:"A legacy hub is replaced with a switch. What is the primary benefit?", options:["Automatic IP addressing","Wireless coverage","Encrypted traffic","Reduced collisions via per-port collision domains"], answer:3, explain:"<strong>Reduced collisions via per-port collision domains</strong> is correct because a switch gives each port its own collision domain, unlike a hub that shares one for all ports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypted traffic</b>: A switch forwards frames in cleartext and provides no encryption.</span><span class='qd'><b>Automatic IP addressing</b>: Address assignment is a DHCP function, not a benefit of switching over hubs.</span><span class='qd'><b>Wireless coverage</b>: Wireless coverage comes from an access point, not from replacing a hub with a wired switch.</span>" },
{ id:"D2-032", domain:2, obj:"2.2", diff:"medium", q:"Which device supplies electrical power to devices like IP phones over the Ethernet cable?", options:["PoE switch","KVM switch","Modem","Patch panel"], answer:0, explain:"<strong>PoE switch</strong> is correct because Power over Ethernet delivers both data and electrical power to devices like IP phones over the same Ethernet cable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>KVM switch</b>: A KVM switch shares one keyboard, video, and mouse across computers; it does not supply power over Ethernet.</span><span class='qd'><b>Modem</b>: A modem converts ISP signals and provides no power delivery over Ethernet.</span><span class='qd'><b>Patch panel</b>: A patch panel is a passive termination point that carries no power of its own.</span>" },
{ id:"D2-033", domain:2, obj:"2.2", diff:"medium", q:"Which appliance combines routing, switching, wireless, and firewall functions for small offices?", options:["Managed switch","SOHO router (all-in-one)","Bridge","Repeater"], answer:1, explain:"<strong>SOHO router (all-in-one)</strong> is correct because it integrates routing, a switch, a wireless access point, and a firewall into one small-office device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Managed switch</b>: A managed switch adds VLAN and configuration features but does not provide routing, wireless, or firewall functions.</span><span class='qd'><b>Bridge</b>: A bridge only joins two network segments at Layer 2 and does not combine those roles.</span><span class='qd'><b>Repeater</b>: A repeater only extends signal range and offers none of the integrated functions listed.</span>" },
{ id:"D2-034", domain:2, obj:"2.2", diff:"hard", q:"Multiple PCs in a workgroup cannot communicate, though each has a valid IP. The switch shows all link lights solid but no blinking. What is the MOST likely cause?", options:["Cables are crossover type","Switch is powered off","Switch is in a forwarding loop or failed backplane","DNS is misconfigured"], answer:2, explain:"<strong>Switch is in a forwarding loop or failed backplane</strong> is correct because links are up (solid lights) yet no frames pass (no blinking), indicating the switch cannot forward traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Switch is powered off</b>: A powered-off switch would show no link lights at all, not solid ones.</span><span class='qd'><b>DNS is misconfigured</b>: DNS only affects name resolution; with valid IPs the PCs would still pass traffic by IP if the switch were forwarding.</span><span class='qd'><b>Cables are crossover type</b>: Modern switches with Auto-MDIX accept crossover cables, and a cable type issue would not affect every port uniformly.</span>" },
{ id:"D2-035", domain:2, obj:"2.2", diff:"medium", q:"Which device extends a wireless signal by rebroadcasting it to cover dead zones?", options:["Firewall","Modem","Patch panel","Wireless repeater/extender"], answer:3, explain:"<strong>Wireless repeater/extender</strong> is correct because it receives and rebroadcasts the Wi-Fi signal to fill coverage dead zones.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Firewall</b>: A firewall filters traffic by rules and has no wireless rebroadcasting function.</span><span class='qd'><b>Modem</b>: A modem converts ISP signals to the LAN and does not extend wireless coverage.</span><span class='qd'><b>Patch panel</b>: A patch panel is a passive cable termination point with no wireless capability.</span>" },
{ id:"D2-036", domain:2, obj:"2.2", diff:"hard", q:"A network admin wants to segment traffic into separate broadcast domains on one physical switch. Which feature is required?", options:["VLAN support (managed switch)","DHCP relay","Port mirroring","PoE"], answer:0, explain:"<strong>VLAN support (managed switch)</strong> is correct because VLANs divide one physical switch into multiple isolated broadcast domains.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PoE</b>: PoE delivers power over Ethernet and does nothing to segment broadcast domains.</span><span class='qd'><b>DHCP relay</b>: DHCP relay forwards DHCP requests across subnets but does not create the segmentation itself.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitoring port for analysis, not to isolate broadcast domains.</span>" },
{ id:"D2-037", domain:2, obj:"2.2", diff:"medium", q:"Which connectivity hardware terminates and organizes incoming network cables in a rack?", options:["Modem","Patch panel","KVM switch","Access point"], answer:1, explain:"<strong>Patch panel</strong> is correct because it is the central termination point where horizontal cabling is organized and cross-connected to switches with patch cords.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>KVM switch</b>: A KVM switch shares a keyboard, video, and mouse across computers, not network cable termination.</span><span class='qd'><b>Access point</b>: An access point provides wireless connectivity, not structured cable termination.</span><span class='qd'><b>Modem</b>: A modem converts ISP signaling and does not organize or terminate rack cabling.</span>" },
{ id:"D2-038", domain:2, obj:"2.2", diff:"hard", q:"A technician must connect two switches and wants automatic media detection so a straight-through or crossover cable both work. Which feature enables this?", options:["Jumbo frames","Port security","Auto-MDIX","Spanning Tree Protocol"], answer:2, explain:"<strong>Auto-MDIX</strong> is correct because it automatically detects the wiring and configures the port so either a straight-through or crossover cable works.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spanning Tree Protocol</b>: STP prevents switching loops by blocking redundant paths; it does not adapt cable wiring.</span><span class='qd'><b>Jumbo frames</b>: Jumbo frames allow larger Ethernet payloads and have nothing to do with cable type detection.</span><span class='qd'><b>Port security</b>: Port security restricts which MAC addresses may use a port, not which cable type is required.</span>" },
{ id:"D2-039", domain:2, obj:"2.2", diff:"easy", q:"Which device historically repeated all incoming signals out every port, causing high collisions?", options:["Router","Bridge","Switch","Hub"], answer:3, explain:"<strong>Hub</strong> is correct because it blindly repeats every incoming signal out all ports, placing all devices in one collision domain and causing high collisions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Switch</b>: A switch forwards frames only to the destination port and gives each port its own collision domain, avoiding that problem.</span><span class='qd'><b>Router</b>: A router forwards packets between networks at Layer 3 and does not repeat signals out all ports.</span><span class='qd'><b>Bridge</b>: A bridge selectively forwards between two segments based on MAC, rather than flooding all ports like a hub.</span>" },
{ id:"D2-040", domain:2, obj:"2.2", diff:"medium", q:"A small business needs to host services accessible from the internet while protecting the internal LAN. Which firewall feature isolates the public-facing servers?", options:["DMZ/screened subnet","MAC filtering","SSID broadcast","Port forwarding to LAN"], answer:0, explain:"<strong>DMZ/screened subnet</strong> is correct because it places internet-facing servers in an isolated zone so a compromise there cannot reach the internal LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MAC filtering</b>: MAC filtering allows or blocks devices by hardware address but does not isolate public servers from the LAN.</span><span class='qd'><b>SSID broadcast</b>: SSID broadcast is a wireless setting for advertising a network name, unrelated to server isolation.</span><span class='qd'><b>Port forwarding to LAN</b>: Forwarding ports directly to the LAN exposes internal hosts rather than isolating the servers in a protected zone.</span>" },
{ id:"D2-041", domain:2, obj:"2.2", diff:"hard", q:"Users report intermittent connectivity only on devices plugged into one switch. Pings to the gateway time out randomly. What should the technician check FIRST?", options:["The DNS server settings","The uplink cable and port on that switch","The client subnet masks","The default gateway DHCP scope"], answer:1, explain:"<strong>The uplink cable and port on that switch</strong> is correct because loss isolated to one switch points to a failing physical link, and bottom-up troubleshooting checks that layer first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The DNS server settings</b>: DNS only affects name resolution, but pings to the gateway by IP are failing, so DNS is not involved.</span><span class='qd'><b>The client subnet masks</b>: A mask error would cause consistent failures, not the intermittent loss limited to one switch.</span><span class='qd'><b>The default gateway DHCP scope</b>: A scope problem would affect address assignment broadly, not produce random timeouts on one switch.</span>" },
{ id:"D2-042", domain:2, obj:"2.3", diff:"easy", q:"Which 802.11 standard operates only in the 2.4 GHz band with a maximum of 54 Mbps?", options:["802.11ax","802.11a","802.11g","802.11ac"], answer:2, explain:"<strong>802.11g</strong> is correct because it operates only in the 2.4 GHz band at up to 54 Mbps and is backward compatible with 802.11b.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11a</b>: 802.11a also reaches 54 Mbps but operates exclusively in the 5 GHz band, not 2.4 GHz.</span><span class='qd'><b>802.11ac</b>: 802.11ac is a 5 GHz-only standard with far higher throughput than 54 Mbps.</span><span class='qd'><b>802.11ax</b>: 802.11ax (Wi-Fi 6) uses both 2.4 and 5 GHz with much greater speeds than 54 Mbps.</span>" },
{ id:"D2-043", domain:2, obj:"2.3", diff:"easy", q:"Which 802.11 standard operates only in the 5 GHz band?", options:["802.11n","802.11b","802.11g","802.11a"], answer:3, explain:"<strong>802.11a</strong> is correct because it operates exclusively in the 5 GHz band at up to 54 Mbps.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11b</b>: 802.11b operates only in 2.4 GHz at up to 11 Mbps, not 5 GHz.</span><span class='qd'><b>802.11g</b>: 802.11g operates in the 2.4 GHz band, not the 5 GHz band.</span><span class='qd'><b>802.11n</b>: 802.11n is dual-band, operating in both 2.4 and 5 GHz rather than 5 GHz only.</span>" },
{ id:"D2-044", domain:2, obj:"2.3", diff:"medium", q:"Which 802.11 standard, marketed as Wi-Fi 6, operates in both 2.4 GHz and 5 GHz?", options:["802.11ax","802.11n","802.11a","802.11ac"], answer:0, explain:"<strong>802.11ax</strong> is correct because Wi-Fi 6 operates in both the 2.4 GHz and 5 GHz bands with improved efficiency such as OFDMA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11ac</b>: 802.11ac (Wi-Fi 5) operates only in the 5 GHz band, not both bands.</span><span class='qd'><b>802.11n</b>: 802.11n is dual-band but is the older Wi-Fi 4 standard, not the Wi-Fi 6 standard named in the question.</span><span class='qd'><b>802.11a</b>: 802.11a is a legacy 5 GHz-only standard, not Wi-Fi 6.</span>" },
{ id:"D2-045", domain:2, obj:"2.3", diff:"medium", q:"Which 802.11 standard, known as Wi-Fi 5, operates only in 5 GHz?", options:["802.11b","802.11ac","802.11n","802.11g"], answer:1, explain:"<strong>802.11ac</strong> is correct because Wi-Fi 5 operates only in the 5 GHz band and supports MU-MIMO and wide channels.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11n</b>: 802.11n is Wi-Fi 4, a dual-band standard, not the 5 GHz-only Wi-Fi 5.</span><span class='qd'><b>802.11g</b>: 802.11g operates only in 2.4 GHz at up to 54 Mbps, not 5 GHz.</span><span class='qd'><b>802.11b</b>: 802.11b is a legacy 2.4 GHz standard topping out at 11 Mbps.</span>" },
{ id:"D2-046", domain:2, obj:"2.3", diff:"medium", q:"Which frequency band generally provides longer range but is more prone to interference?", options:["60 GHz","5 GHz","2.4 GHz","6 GHz"], answer:2, explain:"<strong>2.4 GHz</strong> is correct because its longer wavelength travels farther and penetrates walls better but shares a crowded band prone to interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>5 GHz</b>: 5 GHz offers higher speeds and less interference but shorter range and weaker wall penetration.</span><span class='qd'><b>6 GHz</b>: 6 GHz (Wi-Fi 6E) provides even more clean spectrum but the shortest range of these bands.</span><span class='qd'><b>60 GHz</b>: 60 GHz (WiGig) delivers very high throughput only over very short, near line-of-sight distances.</span>" },
{ id:"D2-047", domain:2, obj:"2.3", diff:"hard", q:"In the 2.4 GHz band in North America, which three channels are non-overlapping and recommended?", options:["1, 5, and 9","2, 7, and 12","3, 8, and 13","1, 6, and 11"], answer:3, explain:"<strong>1, 6, and 11</strong> is correct because in the 2.4 GHz band these three channels do not overlap, minimizing co-channel interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1, 5, and 9</b>: Channels 5 and 9 partially overlap with adjacent channels, so this set still causes interference.</span><span class='qd'><b>2, 7, and 12</b>: These channels overlap neighboring channels and channel 12 is restricted in North America.</span><span class='qd'><b>3, 8, and 13</b>: These channels overlap and channel 13 is not permitted for normal use in North America.</span>" },
{ id:"D2-048", domain:2, obj:"2.3", diff:"medium", q:"Which wireless security protocol is the most current and secure for home and small office use?", options:["WPA3","WEP","WPA","WPA2"], answer:0, explain:"<strong>WPA3</strong> is correct because it is the most current Wi-Fi security standard, adding stronger encryption and protections like SAE over WPA2.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WEP</b>: WEP is obsolete and easily cracked due to weak RC4 keying.</span><span class='qd'><b>WPA</b>: WPA was an interim fix using TKIP and is now considered insecure.</span><span class='qd'><b>WPA2</b>: WPA2 with AES is strong but has been superseded by WPA3, so it is not the most current.</span>" },
{ id:"D2-049", domain:2, obj:"2.3", diff:"hard", q:"Two access points serving the same area cause performance issues. Both use 2.4 GHz channel 6. What is the BEST fix?", options:["Set both to channel 6","Move one AP to channel 1 or 11","Disable SSID broadcast","Lower transmit power on both to minimum"], answer:1, explain:"<strong>Move one AP to channel 1 or 11</strong> is correct because shifting one access point to a non-overlapping channel removes the co-channel interference between the two.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Set both to channel 6</b>: Keeping both on channel 6 leaves them on the same channel, which is the cause of the interference.</span><span class='qd'><b>Disable SSID broadcast</b>: Hiding the SSID only stops advertising the name and does nothing to resolve channel overlap.</span><span class='qd'><b>Lower transmit power on both to minimum</b>: Cutting power to minimum would shrink coverage and create dead zones without fixing the shared-channel conflict.</span>" },
{ id:"D2-050", domain:2, obj:"2.3", diff:"hard", q:"A user roams between two APs with the same SSID but keeps dropping. Which configuration MOST likely needs adjustment for seamless roaming?", options:["Hidden SSID on one AP","Each AP on a different SSID","Overlapping coverage with same SSID and security but separate non-overlapping channels","Both APs on the same channel and SSID"], answer:2, explain:"<strong>Overlapping coverage with same SSID and security but separate non-overlapping channels</strong> is correct because matching SSID and security with overlapping cells on different channels lets clients hand off seamlessly without interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Each AP on a different SSID</b>: Different SSIDs force a manual reconnection at each AP instead of a seamless roam.</span><span class='qd'><b>Both APs on the same channel and SSID</b>: Sharing a channel causes co-channel interference that degrades the handoff.</span><span class='qd'><b>Hidden SSID on one AP</b>: A hidden SSID does not help roaming and can actually disrupt clients trying to associate.</span>" },
{ id:"D2-051", domain:2, obj:"2.4", diff:"medium", q:"Which server stores user accounts and authenticates logins in a Windows domain?", options:["Proxy server","DNS server","DHCP server","Domain controller (AD)"], answer:3, explain:"<strong>Domain controller (AD)</strong> is correct because a domain controller running Active Directory stores user accounts and authenticates logins in a Windows domain.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS server</b>: DNS resolves names to IP addresses; although AD relies on it, DNS does not authenticate users.</span><span class='qd'><b>DHCP server</b>: A DHCP server leases IP configuration and performs no account authentication.</span><span class='qd'><b>Proxy server</b>: A proxy forwards and filters client web requests, not domain logins.</span>" },
{ id:"D2-052", domain:2, obj:"2.4", diff:"easy", q:"Which server translates hostnames into IP addresses?", options:["DNS server","Print server","Mail server","DHCP server"], answer:0, explain:"<strong>DNS server</strong> is correct because it resolves human-readable hostnames into their corresponding IP addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP server</b>: A DHCP server assigns IP addresses to clients but does not translate names.</span><span class='qd'><b>Print server</b>: A print server manages shared printers and queues, not name resolution.</span><span class='qd'><b>Mail server</b>: A mail server sends and receives email and does not perform hostname resolution.</span>" },
{ id:"D2-053", domain:2, obj:"2.4", diff:"medium", q:"Which server sits between clients and the internet to cache content and filter requests?", options:["DHCP server","Proxy server","File server","Syslog server"], answer:1, explain:"<strong>Proxy server</strong> is correct because it sits between clients and the internet, forwarding requests while caching content and filtering or logging traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>File server</b>: A file server stores and shares files internally and does not proxy internet requests.</span><span class='qd'><b>Syslog server</b>: A syslog server centrally collects log messages, not web request caching and filtering.</span><span class='qd'><b>DHCP server</b>: A DHCP server assigns IP configuration and does not mediate internet traffic.</span>" },
{ id:"D2-054", domain:2, obj:"2.4", diff:"medium", q:"Which embedded device performs a single dedicated function, such as a smart thermostat or IP camera?", options:["Hypervisor","Patch panel","Legacy/embedded system","Domain controller"], answer:2, explain:"<strong>Legacy/embedded system</strong> is correct because embedded systems are purpose-built devices dedicated to a single task, such as a thermostat or IP camera.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Domain controller</b>: A domain controller is a general-purpose server authenticating users, not a single-function embedded device.</span><span class='qd'><b>Hypervisor</b>: A hypervisor hosts and runs multiple virtual machines, the opposite of a single dedicated function.</span><span class='qd'><b>Patch panel</b>: A patch panel is a passive cable termination point, not a functional embedded device.</span>" },
{ id:"D2-055", domain:2, obj:"2.4", diff:"hard", q:"An organization wants to balance incoming web traffic across several identical servers. Which service is needed?", options:["DHCP relay","Syslog server","DNS forwarder","Load balancer"], answer:3, explain:"<strong>Load balancer</strong> is correct because it distributes incoming requests across multiple identical servers to improve performance and provide redundancy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP relay</b>: DHCP relay forwards DHCP requests across subnets and does not distribute web traffic.</span><span class='qd'><b>Syslog server</b>: A syslog server collects log messages centrally, not application traffic.</span><span class='qd'><b>DNS forwarder</b>: A DNS forwarder passes name queries to upstream resolvers and does not balance server load.</span>" },
{ id:"D2-056", domain:2, obj:"2.4", diff:"hard", q:"A company wants centralized collection of log messages from network devices for analysis. Which service is BEST?", options:["Syslog server","Print server","DHCP server","Proxy server"], answer:0, explain:"<strong>Syslog server</strong> is correct because it centrally collects and stores log messages from network devices for monitoring and analysis.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Print server</b>: A print server manages print queues and shared printers, not log collection.</span><span class='qd'><b>DHCP server</b>: A DHCP server leases IP configuration and does not aggregate device logs.</span><span class='qd'><b>Proxy server</b>: A proxy filters and caches client web requests rather than centralizing logs.</span>" },
{ id:"D2-057", domain:2, obj:"2.4", diff:"medium", q:"Which device is a dedicated network appliance optimized for storing and sharing files over the network?", options:["AP","NAS","KVM","UPS"], answer:1, explain:"<strong>NAS</strong> is correct because Network Attached Storage is a dedicated appliance optimized for centralized file storage and sharing over the network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>KVM</b>: A KVM switch shares a keyboard, video, and mouse across computers, not network file storage.</span><span class='qd'><b>UPS</b>: A UPS provides backup battery power during outages and stores no files.</span><span class='qd'><b>AP</b>: An access point provides wireless connectivity, not file storage and sharing.</span>" },
{ id:"D2-058", domain:2, obj:"2.4", diff:"hard", q:"A spam filtering and routing service is needed for inbound and outbound corporate email. Which server role is MOST appropriate?", options:["Proxy server","File server","Mail server","DNS server"], answer:2, explain:"<strong>Mail server</strong> is correct because it handles sending, receiving, routing, and spam filtering of the organization's email.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS server</b>: A DNS server resolves names to IP addresses; although mail relies on MX records, it does not route or filter email.</span><span class='qd'><b>Proxy server</b>: A proxy filters and caches client web requests, not corporate email flow.</span><span class='qd'><b>File server</b>: A file server stores and shares files, with no email routing or spam filtering role.</span>" }
);
APLUS1.questions.push(
  { id:"D2-059", domain:2, obj:"2.5", diff:"easy", q:"A technician sets up a SOHO router and needs to assign a private IPv4 address range to the LAN. Which of the following is a valid RFC 1918 private address?", options:["11.0.0.5","169.254.10.10","172.32.5.10","192.168.1.50"], answer:3, explain:"<strong>192.168.1.50</strong> falls inside the 192.168.0.0/16 block, one of the three RFC 1918 private ranges.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>172.32.5.10</b>: The private 172 range stops at 172.31.255.255, so 172.32 is just outside it and is a public address.</span><span class='qd'><b>11.0.0.5</b>: The private 10 block is only 10.0.0.0/8 (10.x.x.x); 11.x.x.x is a routable public address.</span><span class='qd'><b>169.254.10.10</b>: The 169.254.0.0/16 range is APIPA link-local, not an assignable RFC 1918 private LAN range.</span>" },
  { id:"D2-060", domain:2, obj:"2.5", diff:"easy", q:"A workstation displays an IP address of 169.254.22.7. What does this most likely indicate?", options:["The DHCP server failed and APIPA assigned the address","The static IP was entered correctly","The device is using IPv6 only","The device received a public IP from the ISP"], answer:0, explain:"An address in the <strong>169.254.0.0/16</strong> range is APIPA, which a client self-assigns only after it fails to reach a DHCP server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The device received a public IP from the ISP</b>: Public ISP-assigned addresses are routable globally, while 169.254.x.x is non-routable link-local.</span><span class='qd'><b>The static IP was entered correctly</b>: A correct static IP would be in the LAN subnet, not the APIPA range, which signals an addressing failure.</span><span class='qd'><b>The device is using IPv6 only</b>: 169.254.22.7 is an IPv4 address, so the host clearly has IPv4 configured, just via APIPA.</span>" },
  { id:"D2-061", domain:2, obj:"2.6", diff:"easy", q:"Which protocol automatically assigns IP addresses, subnet masks, and default gateways to clients on a network?", options:["DNS","DHCP","SMTP","SNMP"], answer:1, explain:"<strong>DHCP</strong> dynamically leases a full IP configuration (address, mask, gateway, and DNS) to clients automatically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves hostnames to IP addresses and does not assign addressing parameters to clients.</span><span class='qd'><b>SMTP</b>: SMTP is the protocol that sends and relays email, unrelated to IP configuration.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages network devices, it does not hand out IP leases.</span>" },
  { id:"D2-062", domain:2, obj:"2.6", diff:"easy", q:"Which service translates a domain name such as example.com into an IP address?", options:["DHCP","NAT","DNS","VPN"], answer:2, explain:"<strong>DNS</strong> resolves human-readable domain names such as example.com into their corresponding IP addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration to clients but does not translate names to addresses.</span><span class='qd'><b>NAT</b>: NAT translates between private and public IP addresses, not between names and addresses.</span><span class='qd'><b>VPN</b>: A VPN creates an encrypted tunnel for remote access and performs no name resolution.</span>" },
  { id:"D2-063", domain:2, obj:"2.7", diff:"easy", q:"Which Internet connection type typically offers the highest bandwidth and lowest latency for a home user?", options:["DSL","Satellite","Dial-up","Fiber optic"], answer:3, explain:"<strong>Fiber optic</strong> delivers the highest bandwidth (often 1 Gbps or more) and the lowest latency of the listed home options.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Satellite</b>: Geostationary satellite suffers very high latency from the long round trip to orbit, the opposite of low latency.</span><span class='qd'><b>Dial-up</b>: Dial-up tops out around 56 Kbps over phone lines, by far the slowest option.</span><span class='qd'><b>DSL</b>: DSL runs over copper phone lines and is far slower than fiber, degrading further with distance from the central office.</span>" },
  { id:"D2-064", domain:2, obj:"2.7", diff:"easy", q:"Which Internet service is known for high latency due to signals traveling to orbit and back, making it a last resort in remote areas?", options:["Satellite","Cellular","Cable","Fiber"], answer:0, explain:"<strong>Satellite</strong> Internet has inherently high latency because signals must travel roughly 22,000 miles to a geostationary satellite and back.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable</b>: Cable uses terrestrial coaxial lines with relatively low latency, not orbital signal paths.</span><span class='qd'><b>Fiber</b>: Fiber offers the lowest latency of common connections and is land-based, not satellite.</span><span class='qd'><b>Cellular</b>: Cellular connects to nearby ground towers, so its latency is far lower than geostationary satellite.</span>" },
  { id:"D2-065", domain:2, obj:"2.7", diff:"easy", q:"A network that connects devices within a single building or office is best described as which type?", options:["WAN","LAN","PAN","MAN"], answer:1, explain:"A <strong>LAN</strong> connects devices within a limited area such as a single building or office.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WAN</b>: A WAN spans large geographic distances connecting multiple LANs across cities or countries.</span><span class='qd'><b>PAN</b>: A PAN covers only a very short personal range, typically a few meters around one person.</span><span class='qd'><b>MAN</b>: A MAN covers a city-sized metropolitan area, larger than a single building.</span>" },
  { id:"D2-066", domain:2, obj:"2.7", diff:"easy", q:"Bluetooth headphones paired to a smartphone form which type of network?", options:["LAN","WAN","PAN","MAN"], answer:2, explain:"A <strong>PAN</strong> connects devices over a very short personal range, commonly using Bluetooth as with paired headphones.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LAN</b>: A LAN covers a building or office and uses Ethernet or Wi-Fi infrastructure, not a one-to-one Bluetooth pairing.</span><span class='qd'><b>WAN</b>: A WAN spans cities or countries, vastly larger than a Bluetooth link.</span><span class='qd'><b>MAN</b>: A MAN covers a metropolitan region, far beyond the few-meter range of Bluetooth.</span>" },
  { id:"D2-067", domain:2, obj:"2.7", diff:"easy", q:"A network spanning an entire city, often connecting multiple LANs across a metropolitan region, is called a:", options:["SAN","PAN","WLAN","MAN"], answer:3, explain:"A <strong>MAN</strong> spans a city-sized metropolitan area, often interconnecting multiple LANs across that region.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PAN</b>: A PAN covers only a few meters around one person, not an entire city.</span><span class='qd'><b>WLAN</b>: A WLAN is a wireless LAN limited to a building or office, much smaller than a city.</span><span class='qd'><b>SAN</b>: A SAN is a storage area network for block-level disk access, not a geographic network type.</span>" },
  { id:"D2-068", domain:2, obj:"2.8", diff:"easy", q:"Which tool is used to attach an RJ45 connector to the end of an Ethernet cable?", options:["Crimper","Toner probe","Loopback plug","Cable tester"], answer:0, explain:"A <strong>Crimper</strong> presses an RJ45 connector onto the conductors of a twisted-pair cable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester verifies continuity and pinout after termination but cannot attach a connector.</span><span class='qd'><b>Toner probe</b>: A toner probe traces and locates a cable by tone, it does not terminate connectors.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a port by looping signals back, performing no cable termination.</span>" },
  { id:"D2-069", domain:2, obj:"2.8", diff:"easy", q:"A technician wants to verify that all eight wires in a newly terminated Ethernet cable are connected in the correct order. Which tool should be used?", options:["Wi-Fi analyzer","Cable tester","Crimper","Punchdown tool"], answer:1, explain:"A <strong>Cable tester</strong> checks continuity and verifies that each of the eight conductors is wired to the correct pin (the pinout).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crimper</b>: A crimper attaches the connector but provides no verification of wiring order.</span><span class='qd'><b>Punchdown tool</b>: A punchdown tool seats wires into IDC contacts on jacks and blocks, it does not test continuity.</span><span class='qd'><b>Wi-Fi analyzer</b>: A Wi-Fi analyzer measures wireless channels and signal, unrelated to wired pinout testing.</span>" },
  { id:"D2-070", domain:2, obj:"2.8", diff:"easy", q:"Which tool helps trace a specific cable within a bundle by emitting a tone that is detected at the other end?", options:["Loopback plug","Crimper","Toner probe","Cable tester"], answer:2, explain:"A <strong>Toner probe</strong> injects a tone onto a wire so the matching end can be located by sound among many cables.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a single port by looping its signals, it cannot trace a cable through a bundle.</span><span class='qd'><b>Crimper</b>: A crimper terminates connectors and has no tracing function.</span><span class='qd'><b>Cable tester</b>: A cable tester checks continuity and pinout but does not emit a locatable tone for tracing.</span>" },
  { id:"D2-071", domain:2, obj:"2.8", diff:"easy", q:"Which tool simulates a network connection on a port so it can be tested without connecting to another device?", options:["Punchdown tool","Crimper","Toner probe","Loopback plug"], answer:3, explain:"A <strong>Loopback plug</strong> redirects a port's transmit pins back to its receive pins so the port can be tested locally without another device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner probe</b>: A toner probe traces a cable by tone and does not simulate a connection on a port.</span><span class='qd'><b>Punchdown tool</b>: A punchdown tool terminates wires into IDC contacts, it performs no port testing.</span><span class='qd'><b>Crimper</b>: A crimper attaches RJ45 connectors and cannot loop a port's signals for testing.</span>" },
  { id:"D2-072", domain:2, obj:"2.8", diff:"easy", q:"A technician needs to identify Wi-Fi channel congestion and signal strength in an office. Which tool is most appropriate?", options:["Wi-Fi analyzer","Toner probe","Loopback plug","Cable tester"], answer:0, explain:"A <strong>Wi-Fi analyzer</strong> surveys wireless channels, signal strength, and interference, making it ideal for diagnosing channel congestion.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester checks wired conductor continuity and pinout, not wireless signal.</span><span class='qd'><b>Toner probe</b>: A toner probe traces physical cables and has no wireless measurement capability.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a wired port locally and cannot assess Wi-Fi channels.</span>" },
  { id:"D2-073", domain:2, obj:"2.5", diff:"easy", q:"What is the default subnet mask associated with a /24 network?", options:["255.255.0.0","255.255.255.0","255.0.0.0","255.255.255.255"], answer:1, explain:"A <strong>255.255.255.0</strong> mask matches a /24, where the first 24 bits identify the network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>255.255.0.0</b>: This is a /16 mask with 16 network bits, not 24.</span><span class='qd'><b>255.0.0.0</b>: This is a /8 mask with only 8 network bits.</span><span class='qd'><b>255.255.255.255</b>: This is a /32 host mask identifying a single address, not a /24 network.</span>" },
  { id:"D2-074", domain:2, obj:"2.6", diff:"easy", q:"Which technology allows multiple internal devices to share a single public IP address when accessing the Internet?", options:["VLAN","DNS","NAT","DHCP"], answer:2, explain:"<strong>NAT</strong> maps many internal private addresses to one public IP for outbound Internet access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves names to IP addresses and does not share or translate public IPs.</span><span class='qd'><b>DHCP</b>: DHCP leases addresses to clients but does not let them share a single public IP.</span><span class='qd'><b>VLAN</b>: A VLAN logically segments a switch into broadcast domains and performs no address translation.</span>" },
  { id:"D2-075", domain:2, obj:"2.7", diff:"easy", q:"Which wireless Internet option uses cellular towers and is commonly used for mobile hotspots?", options:["Fiber","DSL","Cable","Cellular"], answer:3, explain:"<strong>Cellular</strong> Internet (4G/5G) connects through mobile carrier towers and is the basis for mobile hotspots.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DSL</b>: DSL is a wired service over copper telephone lines, not a wireless cellular link.</span><span class='qd'><b>Cable</b>: Cable runs over fixed coaxial lines and does not use cellular towers.</span><span class='qd'><b>Fiber</b>: Fiber is a wired optical service to a fixed location, not a mobile wireless option.</span>" },
  { id:"D2-076", domain:2, obj:"2.5", diff:"medium", q:"A SOHO network uses 192.168.0.0/24. How many usable host addresses are available for devices?", options:["254","255","253","256"], answer:0, explain:"<strong>254</strong> usable hosts remain because a /24 has 256 total addresses minus the network and broadcast addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>256</b>: That is the total address count, before subtracting the reserved network and broadcast addresses.</span><span class='qd'><b>255</b>: This subtracts only one reserved address, but both the network and broadcast must be removed.</span><span class='qd'><b>253</b>: This removes one address too many; the gateway uses a host address but is still counted as usable.</span>" },
  { id:"D2-077", domain:2, obj:"2.5", diff:"medium", q:"Which address within a 192.168.1.0/24 network is the broadcast address?", options:["192.168.1.254","192.168.1.255","192.168.1.0","192.168.1.1"], answer:1, explain:"<strong>192.168.1.255</strong> is the broadcast address because in a /24 the host bits are all ones in the last octet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.1.0</b>: With host bits all zeros, this is the network address, not the broadcast.</span><span class='qd'><b>192.168.1.1</b>: This is the first usable host address, commonly the gateway, not a broadcast.</span><span class='qd'><b>192.168.1.254</b>: This is the last usable host address, one below the broadcast.</span>" },
  { id:"D2-078", domain:2, obj:"2.6", diff:"medium", q:"A company wants to logically separate the accounting and sales departments on the same physical switch. Which technology should be configured?", options:["DMZ","VPN","VLAN","NAT"], answer:2, explain:"A <strong>VLAN</strong> logically segments a single physical switch into separate broadcast domains, isolating departments without extra hardware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VPN</b>: A VPN encrypts remote access over the Internet and does not segment switch ports.</span><span class='qd'><b>NAT</b>: NAT translates private to public addresses and provides no internal department separation.</span><span class='qd'><b>DMZ</b>: A DMZ isolates public-facing servers from the LAN, not two internal departments on one switch.</span>" },
  { id:"D2-079", domain:2, obj:"2.6", diff:"medium", q:"A remote employee needs a secure, encrypted connection into the corporate network over the public Internet. Which technology provides this?", options:["NAT","DHCP","VLAN","VPN"], answer:3, explain:"A <strong>VPN</strong> builds an encrypted tunnel that securely carries the remote employee's traffic into the corporate network over the public Internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VLAN</b>: A VLAN segments local switch traffic and provides no encrypted remote connectivity over the Internet.</span><span class='qd'><b>NAT</b>: NAT translates addresses for Internet access but does not encrypt or provide remote tunneling.</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration and offers no encryption or remote access tunnel.</span>" },
  { id:"D2-080", domain:2, obj:"2.7", diff:"medium", q:"A customer's cable Internet slows during evening peak hours because bandwidth is shared with neighbors. This shared-medium characteristic is typical of which technology?", options:["DOCSIS cable","Dedicated DSL","Leased line","Fiber to the home"], answer:0, explain:"<strong>DOCSIS cable</strong> shares the coaxial node among many subscribers, so throughput can drop during peak local usage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fiber to the home</b>: FTTH typically provides dedicated bandwidth to each subscriber rather than a shared coax node.</span><span class='qd'><b>Dedicated DSL</b>: DSL gives each subscriber a dedicated copper loop to the central office, not a shared medium.</span><span class='qd'><b>Leased line</b>: A leased line is a dedicated point-to-point circuit with guaranteed bandwidth, not shared with neighbors.</span>" },
  { id:"D2-081", domain:2, obj:"2.7", diff:"medium", q:"DSL Internet performance degrades the farther the customer is located from which point?", options:["The nearest cell tower","The telephone central office (CO)","The satellite ground station","The cable head-end"], answer:1, explain:"<strong>The telephone central office (CO)</strong> is the reference point; DSL speed and signal quality fall as the copper loop distance from the CO increases.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The nearest cell tower</b>: Cell tower distance affects cellular signal, not DSL over copper telephone lines.</span><span class='qd'><b>The satellite ground station</b>: A ground station is part of satellite Internet, which is unrelated to DSL distance.</span><span class='qd'><b>The cable head-end</b>: The head-end is the cable plant's distribution point, relevant to DOCSIS cable, not DSL.</span>" },
  { id:"D2-082", domain:2, obj:"2.7", diff:"medium", q:"Which network type is most accurately described as a collection of LANs connected over large geographic distances, such as between cities or countries?", options:["MAN","PAN","WAN","WLAN"], answer:2, explain:"A <strong>WAN</strong> interconnects geographically dispersed LANs across large distances such as between cities or countries.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PAN</b>: A PAN is a few-meter personal network, not a long-distance interconnection of LANs.</span><span class='qd'><b>WLAN</b>: A WLAN is wireless LAN coverage within a single building, not a wide-area network.</span><span class='qd'><b>MAN</b>: A MAN is limited to a metropolitan area and is smaller in scope than a multi-city WAN.</span>" },
  { id:"D2-083", domain:2, obj:"2.7", diff:"medium", q:"A wireless LAN that allows laptops to connect without cables within an office is specifically abbreviated as:", options:["WWAN","MAN","WAN","WLAN"], answer:3, explain:"A <strong>WLAN</strong> provides local-area connectivity over Wi-Fi, letting laptops connect without cables within an office.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WAN</b>: A WAN spans wide geographic distances and is not a wireless office LAN.</span><span class='qd'><b>WWAN</b>: A WWAN is a wireless wide-area network using cellular technology, not an in-office Wi-Fi LAN.</span><span class='qd'><b>MAN</b>: A MAN covers a metropolitan area, much larger than an office wireless LAN.</span>" },
  { id:"D2-084", domain:2, obj:"2.8", diff:"medium", q:"A technician punches down wires into a 110 block on a patch panel. Which tool is required?", options:["Punchdown tool","Toner probe","Loopback plug","Crimper"], answer:0, explain:"A <strong>Punchdown tool</strong> seats and trims each wire into the insulation-displacement contacts of a 110 block or keystone jack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crimper</b>: A crimper attaches RJ45 plugs to cable ends, it does not push wires into a 110 block.</span><span class='qd'><b>Toner probe</b>: A toner probe traces cables by tone and performs no termination.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a port locally and cannot punch down conductors.</span>" },
  { id:"D2-085", domain:2, obj:"2.8", diff:"medium", q:"Users in a conference room report intermittent Wi-Fi drops. The technician suspects a neighboring AP is using the same channel. Which tool BEST confirms this?", options:["Cable tester","Wi-Fi analyzer","Loopback plug","Toner probe"], answer:1, explain:"A <strong>Wi-Fi analyzer</strong> shows channel usage and overlapping networks, directly confirming co-channel interference from a neighboring AP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester checks wired conductor continuity, not wireless channel overlap.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a wired port locally and reveals nothing about Wi-Fi channels.</span><span class='qd'><b>Toner probe</b>: A toner probe traces physical cables and cannot detect channel interference.</span>" },
  { id:"D2-086", domain:2, obj:"2.8", diff:"medium", q:"A newly run cable shows continuity on all pairs except pins 3 and 6, which read open. Which tool revealed this fault?", options:["Toner probe","Wi-Fi analyzer","Cable tester","Crimper"], answer:2, explain:"A <strong>Cable tester</strong> maps each conductor and flags faults, here showing an open on pins 3 and 6.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wi-Fi analyzer</b>: A Wi-Fi analyzer measures wireless signal, not wired conductor continuity.</span><span class='qd'><b>Crimper</b>: A crimper terminates connectors and provides no fault diagnosis.</span><span class='qd'><b>Toner probe</b>: A toner probe locates a cable by tone but does not map per-pin opens or shorts.</span>" },
  { id:"D2-087", domain:2, obj:"2.5", diff:"medium", q:"A technician configures a SOHO router and disables DHCP. What must now be done for each client to communicate?", options:["Install a DNS server","Enable NAT translation","Enable APIPA on the router","Assign static IP configuration to each device"], answer:3, explain:"With DHCP disabled, each client must be given a manually entered <strong>static IP configuration</strong> (address, mask, gateway, and DNS) to communicate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enable APIPA on the router</b>: APIPA is a client self-assignment fallback that yields non-routable 169.254 addresses, not a usable LAN configuration.</span><span class='qd'><b>Install a DNS server</b>: DNS only resolves names; without an IP address clients still cannot communicate on the network.</span><span class='qd'><b>Enable NAT translation</b>: NAT handles outbound address translation but does not assign clients the IP settings they now lack.</span>" },
  { id:"D2-088", domain:2, obj:"2.5", diff:"medium", q:"Which of the following IP addresses is NOT part of any RFC 1918 private range?", options:["172.32.0.1","10.255.255.1","172.16.0.1","192.168.255.255"], answer:0, explain:"<strong>172.32.0.1</strong> is outside the private 172 block, which spans only 172.16.0.0 through 172.31.255.255, so it is a public address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>10.255.255.1</b>: This falls within the 10.0.0.0/8 private range, so it is RFC 1918 private.</span><span class='qd'><b>172.16.0.1</b>: This is the very start of the 172.16.0.0/12 private range and is private.</span><span class='qd'><b>192.168.255.255</b>: This is inside the 192.168.0.0/16 private range and is therefore private.</span>" },
  { id:"D2-089", domain:2, obj:"2.6", diff:"medium", q:"A device is configured with a static IP but cannot resolve website names, although it can ping IP addresses directly. What is the most likely misconfiguration?", options:["Wrong subnet mask","Missing or incorrect DNS server","Disabled DHCP","Incorrect MAC address"], answer:1, explain:"Reaching IP addresses but failing to resolve names points to a <strong>missing or incorrect DNS server</strong>, since name lookup is the only broken function.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wrong subnet mask</b>: A bad mask would break IP reachability to certain hosts, yet direct pings by IP succeed here.</span><span class='qd'><b>Disabled DHCP</b>: The device is statically configured and already has working IP connectivity, so DHCP is irrelevant.</span><span class='qd'><b>Incorrect MAC address</b>: A wrong MAC would disrupt local Layer 2 delivery entirely, not selectively break name resolution.</span>" },
  { id:"D2-090", domain:2, obj:"2.6", diff:"medium", q:"Which feature reserves a specific IP address for a device based on its MAC address so it always receives the same lease from DHCP?", options:["DNS caching","Port forwarding","DHCP reservation","Static NAT"], answer:2, explain:"A <strong>DHCP reservation</strong> ties an IP to a device's MAC so the DHCP server always issues that same address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port forwarding</b>: Port forwarding maps an external port to an internal host, it does not reserve an address by MAC.</span><span class='qd'><b>Static NAT</b>: Static NAT permanently maps one public IP to one private IP, unrelated to DHCP lease assignment.</span><span class='qd'><b>DNS caching</b>: DNS caching stores resolved name lookups and has nothing to do with IP reservations.</span>" },
  { id:"D2-091", domain:2, obj:"2.5", diff:"medium", q:"On a SOHO router, which setting determines the pool of addresses that DHCP can hand out to clients?", options:["DNS suffix","NAT table","VLAN ID","DHCP scope"], answer:3, explain:"The <strong>DHCP scope</strong> defines the range of IP addresses the server is allowed to lease to clients.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS suffix</b>: A DNS suffix is appended to unqualified hostnames for resolution, not a pool of leasable addresses.</span><span class='qd'><b>NAT table</b>: A NAT table tracks active address translations, it does not define a DHCP lease pool.</span><span class='qd'><b>VLAN ID</b>: A VLAN ID tags traffic for a logical segment and does not set the DHCP address range.</span>" },
  { id:"D2-092", domain:2, obj:"2.7", diff:"medium", q:"A small office needs symmetrical upload and download speeds for hosting servers. Which Internet type is generally BEST suited?", options:["Fiber optic","Dial-up","Satellite","Cable"], answer:0, explain:"<strong>Fiber optic</strong> commonly offers symmetrical upload and download bandwidth, which is ideal for hosting servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Satellite</b>: Satellite has high latency and typically asymmetrical, limited upload, poor for hosting.</span><span class='qd'><b>Cable</b>: Cable is usually asymmetrical with much lower upload than download and shares the node with neighbors.</span><span class='qd'><b>Dial-up</b>: Dial-up maxes around 56 Kbps, far too slow to host any server.</span>" },
  { id:"D2-093", domain:2, obj:"2.7", diff:"medium", q:"A real-time video conferencing service performs poorly over satellite Internet despite adequate bandwidth. What characteristic is the main cause?", options:["Low throughput","High latency","Small MTU","Half-duplex only"], answer:1, explain:"Satellite's <strong>high latency</strong> (round-trip delay to orbit and back) disrupts real-time interactive traffic even when bandwidth is adequate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low throughput</b>: The scenario states bandwidth is adequate, so throughput is not the limiting factor.</span><span class='qd'><b>Small MTU</b>: A small MTU adds fragmentation overhead but is not the defining cause of satellite's real-time problems.</span><span class='qd'><b>Half-duplex only</b>: Satellite links are not inherently half-duplex, and duplex mode is not the cause of interactive lag here.</span>" },
  { id:"D2-094", domain:2, obj:"2.3", diff:"medium", q:"Which protocol and port pair is correctly matched for secure web browsing?", options:["FTP / 443","HTTP / 443","HTTPS / 443","HTTPS / 80"], answer:2, explain:"<strong>HTTPS / 443</strong> is the correct pairing, providing encrypted web traffic over TCP port 443.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HTTP / 443</b>: HTTP is unencrypted and uses port 80, not 443.</span><span class='qd'><b>HTTPS / 80</b>: Port 80 is the cleartext HTTP port; HTTPS uses 443.</span><span class='qd'><b>FTP / 443</b>: FTP is file transfer on ports 20 and 21, not secure web browsing on 443.</span>" },
  { id:"D2-095", domain:2, obj:"2.3", diff:"medium", q:"A user must securely manage a Linux server's command line remotely. Which protocol and port should be used?", options:["RDP / 3389","FTP / 21","Telnet / 23","SSH / 22"], answer:3, explain:"<strong>SSH / 22</strong> provides encrypted remote command-line access over TCP port 22.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Telnet / 23</b>: Telnet on port 23 transmits commands and credentials in cleartext, so it is not secure.</span><span class='qd'><b>RDP / 3389</b>: RDP on 3389 provides a graphical Windows remote desktop, not a Linux command line.</span><span class='qd'><b>FTP / 21</b>: FTP on 21 is unencrypted file transfer, not secure shell management.</span>" },
  { id:"D2-096", domain:2, obj:"2.4", diff:"medium", q:"Which wireless frequency band offers longer range and better wall penetration but is more prone to congestion?", options:["2.4 GHz","5 GHz","6 GHz","60 GHz"], answer:0, explain:"The <strong>2.4 GHz</strong> band travels farther and penetrates walls better, but its few channels and crowded spectrum make it prone to congestion.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>5 GHz</b>: The 5 GHz band has shorter range and weaker wall penetration but more channels and less congestion.</span><span class='qd'><b>6 GHz</b>: The 6 GHz band (Wi-Fi 6E) offers wide clean spectrum but the shortest range and poorest penetration of these.</span><span class='qd'><b>60 GHz</b>: The 60 GHz band (WiGig) is extremely high speed over very short, line-of-sight distances, the opposite of long range.</span>" },
  { id:"D2-097", domain:2, obj:"2.4", diff:"medium", q:"Which 802.11 standard, branded Wi-Fi 6, operates in both the 2.4 GHz and 5 GHz bands with improved efficiency?", options:["802.11ac","802.11ax","802.11g","802.11n"], answer:1, explain:"<strong>802.11ax</strong> (Wi-Fi 6) operates on both 2.4 GHz and 5 GHz and improves efficiency in dense environments.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11n</b>: 802.11n is Wi-Fi 4, dual-band but older and far less efficient than Wi-Fi 6.</span><span class='qd'><b>802.11ac</b>: 802.11ac is Wi-Fi 5 and operates only on the 5 GHz band, not 2.4 GHz.</span><span class='qd'><b>802.11g</b>: 802.11g is a legacy 2.4 GHz-only standard predating the Wi-Fi 6 branding entirely.</span>" },
  { id:"D2-098", domain:2, obj:"2.6", diff:"medium", q:"A technician enables a screened subnet on a SOHO firewall to host a public web server isolated from the internal LAN. What is this segment commonly called?", options:["NAT pool","VLAN","DMZ","VPN"], answer:2, explain:"A <strong>DMZ</strong> (screened subnet) isolates public-facing servers from the trusted internal LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VLAN</b>: A VLAN segments internal switch traffic into broadcast domains but is not specifically the screened public-server zone.</span><span class='qd'><b>VPN</b>: A VPN encrypts remote access tunnels and does not define an isolated public server segment.</span><span class='qd'><b>NAT pool</b>: A NAT pool is a set of public addresses for translation, not an isolated hosting subnet.</span>" },
  { id:"D2-099", domain:2, obj:"2.6", diff:"medium", q:"Which feature forwards inbound traffic on a specific external port to an internal host, allowing remote access to a service behind NAT?", options:["DNS round robin","MAC filtering","DHCP reservation","Port forwarding"], answer:3, explain:"<strong>Port forwarding</strong> maps an external port to an internal IP and port so outside users can reach a service behind NAT.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP reservation</b>: A DHCP reservation fixes a device's leased IP by MAC, it does not forward inbound traffic.</span><span class='qd'><b>DNS round robin</b>: DNS round robin distributes name lookups across multiple IPs for load sharing, not port redirection.</span><span class='qd'><b>MAC filtering</b>: MAC filtering allows or blocks devices by hardware address and does not forward ports.</span>" },
  { id:"D2-100", domain:2, obj:"2.5", diff:"medium", q:"A SOHO router's WAN interface receives a 169.254.x.x address from the ISP modem. What does this most likely mean?", options:["The router failed to obtain an address via DHCP from the modem","NAT is misconfigured","The DNS server is offline","The ISP assigned a static public IP"], answer:0, explain:"An APIPA (169.254) address on the WAN means <strong>the router failed to obtain an address via DHCP from the modem</strong>, breaking Internet connectivity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The ISP assigned a static public IP</b>: A static public IP would be a routable address, not a self-assigned 169.254 link-local one.</span><span class='qd'><b>NAT is misconfigured</b>: A NAT problem would not cause the WAN interface to receive an APIPA address from DHCP.</span><span class='qd'><b>The DNS server is offline</b>: A DNS outage breaks name resolution but does not produce a 169.254 WAN address.</span>" },
  { id:"D2-101", domain:2, obj:"2.7", diff:"hard", q:"A rural clinic needs Internet where no cable, DSL, or fiber exists, and low latency is critical for telemedicine. Which option BEST balances availability and latency?", options:["Geostationary satellite","Low Earth orbit (LEO) satellite","Dial-up","Traditional GEO satellite with caching"], answer:1, explain:"<strong>Low Earth orbit (LEO) satellite</strong> orbits far closer than geostationary satellites, sharply cutting latency while still serving remote areas with no wired options.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Geostationary satellite</b>: GEO satellites sit ~22,000 miles up, producing high latency that harms telemedicine.</span><span class='qd'><b>Dial-up</b>: Dial-up is extremely slow at ~56 Kbps and unsuitable for real-time telemedicine.</span><span class='qd'><b>Traditional GEO satellite with caching</b>: Caching helps static content but cannot reduce the inherent GEO round-trip latency of live video.</span>" },
  { id:"D2-102", domain:2, obj:"2.5", diff:"hard", q:"A device with IP 192.168.10.130/26 needs to reach 192.168.10.60. Are they on the same subnet, and why?", options:["No, .60 is a broadcast address","Yes, both start with 192.168.10","No, /26 splits the network so .60 and .130 are in different subnets","Yes, /26 covers all 254 hosts"], answer:2, explain:"<strong>No, /26 splits the network so .60 and .130 are in different subnets</strong>: a /26 yields 64-address subnets, placing .60 in 192.168.10.0-63 and .130 in 192.168.10.128-191.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Yes, both start with 192.168.10</b>: A shared first three octets does not guarantee the same subnet once a /26 mask divides the space.</span><span class='qd'><b>Yes, /26 covers all 254 hosts</b>: A /26 provides only 62 usable hosts per subnet, not 254 (that is a /24).</span><span class='qd'><b>No, .60 is a broadcast address</b>: The broadcast of the first /26 subnet is .63, not .60, so this reason is incorrect.</span>" },
  { id:"D2-103", domain:2, obj:"2.5", diff:"hard", q:"Given the network 192.168.5.0/27, what is the usable host range in the first subnet?", options:["192.168.5.1 - 192.168.5.62","192.168.5.1 - 192.168.5.14","192.168.5.0 - 192.168.5.31","192.168.5.1 - 192.168.5.30"], answer:3, explain:"<strong>192.168.5.1 - 192.168.5.30</strong> is correct because a /27 has 32 addresses, leaving usable hosts .1 through .30 (.0 network, .31 broadcast).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.5.1 - 192.168.5.62</b>: That range corresponds to a /26 (64 addresses), not a /27.</span><span class='qd'><b>192.168.5.1 - 192.168.5.14</b>: That range corresponds to a /28 (16 addresses), too small for a /27.</span><span class='qd'><b>192.168.5.0 - 192.168.5.31</b>: This includes the .0 network and .31 broadcast, which are not usable host addresses.</span>" },
  { id:"D2-104", domain:2, obj:"2.6", diff:"hard", q:"After joining a domain, clients can ping the server by IP but not by hostname, while older static-IP machines work fine. Which configuration is MOST likely missing on the affected clients?", options:["DNS server address","Subnet mask","NAT entry","Default gateway"], answer:0, explain:"A missing or wrong <strong>DNS server address</strong> explains why clients ping by IP but fail by hostname, since only name resolution is broken.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Default gateway</b>: A missing gateway breaks routing to other subnets, but IP connectivity to the server already works here.</span><span class='qd'><b>Subnet mask</b>: A wrong mask would disrupt IP reachability, yet pings by IP succeed, ruling it out.</span><span class='qd'><b>NAT entry</b>: NAT governs internal-to-public translation and is unrelated to internal hostname resolution.</span>" },
  { id:"D2-105", domain:2, obj:"2.6", diff:"hard", q:"A SOHO admin wants guest Wi-Fi users to reach the Internet but never the internal LAN, using one physical router. Which combination BEST achieves this?", options:["Port forwarding plus DMZ","A separate guest VLAN/SSID with client isolation","Static DHCP reservations","MAC cloning on the WAN"], answer:1, explain:"A <strong>separate guest VLAN/SSID with client isolation</strong> keeps guest traffic off the internal LAN while still sharing the Internet on one router.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port forwarding plus DMZ</b>: These expose internal services to the Internet and do not isolate guest wireless users from the LAN.</span><span class='qd'><b>Static DHCP reservations</b>: Reservations fix IPs by MAC but provide no traffic separation between guests and the LAN.</span><span class='qd'><b>MAC cloning on the WAN</b>: MAC cloning copies a MAC to the WAN port for ISP compatibility, unrelated to guest isolation.</span>" },
  { id:"D2-106", domain:2, obj:"2.8", diff:"hard", q:"A technician suspects a single run in a 48-port patch panel is mislabeled. Cables are bundled and unmarked. Which tool is the MOST efficient FIRST choice to identify the correct port?", options:["Wi-Fi analyzer","Cable tester","Toner probe","Loopback plug"], answer:2, explain:"A <strong>Toner probe</strong> lets the technician inject a tone on the unknown cable and quickly locate its matching port by sound, ideal for a first pass through an unmarked bundle.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester verifies pinout once both ends are known but cannot first identify which port a cable belongs to.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a single port locally and offers no way to trace a cable through a bundle.</span><span class='qd'><b>Wi-Fi analyzer</b>: A Wi-Fi analyzer measures wireless signal and is useless for tracing a wired patch run.</span>" },
  { id:"D2-107", domain:2, obj:"2.8", diff:"hard", q:"A switch port repeatedly reports errors. To determine whether the port itself is faulty without another device, which tool should the technician use FIRST?", options:["Crimper","Toner probe","Cable tester","Loopback plug"], answer:3, explain:"A <strong>Loopback plug</strong> forces the port to test its own transmit and receive paths, isolating a faulty port without needing another device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester checks the cabling, not whether the switch port's own electronics are faulty.</span><span class='qd'><b>Crimper</b>: A crimper terminates connectors and performs no port diagnostics.</span><span class='qd'><b>Toner probe</b>: A toner probe traces cables by tone and cannot determine whether a port is failing.</span>" },
  { id:"D2-108", domain:2, obj:"2.7", diff:"hard", q:"An ISP advertises 'up to 100 Mbps' on a shared coaxial plant. A customer measures 35 Mbps during evenings. Which factor MOST likely explains the discrepancy?", options:["Oversubscription/contention on the shared cable node","An open pair in the Ethernet cable","Incorrect subnet mask","DNS misconfiguration"], answer:0, explain:"<strong>Oversubscription/contention on the shared cable node</strong> explains the evening slowdown, since many subscribers share the same coax node during peak hours.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS misconfiguration</b>: A DNS issue affects name resolution, not raw measured throughput.</span><span class='qd'><b>An open pair in the Ethernet cable</b>: An open pair would cap or break the local link constantly, not cause a time-of-day pattern.</span><span class='qd'><b>Incorrect subnet mask</b>: A wrong mask breaks reachability to certain hosts, it does not reduce throughput only in the evenings.</span>" },
  { id:"D2-109", domain:2, obj:"2.5", diff:"hard", q:"Two SOHO routers are accidentally both running DHCP on 192.168.1.0/24 with overlapping scopes. What symptom is MOST likely?", options:["Faster name resolution","Duplicate IP address conflicts and intermittent connectivity","All clients getting APIPA","Increased Wi-Fi range"], answer:1, explain:"<strong>Duplicate IP address conflicts and intermittent connectivity</strong> result when two DHCP servers with overlapping scopes lease the same address to different clients.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster name resolution</b>: Overlapping DHCP scopes affect addressing, not DNS lookup speed.</span><span class='qd'><b>All clients getting APIPA</b>: APIPA appears only when no DHCP server responds, but here two servers are actively leasing.</span><span class='qd'><b>Increased Wi-Fi range</b>: DHCP scope overlap is a Layer 3 addressing problem and has no effect on radio range.</span>" },
  { id:"D2-110", domain:2, obj:"2.6", diff:"hard", q:"A web server hosted internally is reachable from the LAN but not from the Internet, even though port 443 forwarding is set. The WAN IP starts with 100.64.x.x. What is the MOST likely cause?", options:["DHCP is disabled","The server's DNS is wrong","The ISP uses CGNAT, so the router lacks a real public IP","The subnet mask is /16"], answer:2, explain:"A 100.64.x.x WAN address is the <strong>CGNAT</strong> shared range, so the router lacks a real public IP and inbound port forwarding cannot reach it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The server's DNS is wrong</b>: DNS errors would not let the server work from the LAN while failing inbound from the Internet via a 100.64 WAN.</span><span class='qd'><b>The subnet mask is /16</b>: A LAN mask does not explain why an externally forwarded port is unreachable from the Internet.</span><span class='qd'><b>DHCP is disabled</b>: DHCP being off would affect client addressing, not inbound reachability through a CGNAT public IP.</span>" },
  { id:"D2-111", domain:2, obj:"2.4", diff:"hard", q:"In a dense office, 5 GHz Wi-Fi is preferred over 2.4 GHz primarily because the 5 GHz band offers:", options:["Lower power consumption","Compatibility with 802.11b","Longer range through walls","More non-overlapping channels and less congestion"], answer:3, explain:"In a dense office, 5 GHz is preferred because it offers <strong>more non-overlapping channels and less congestion</strong>, reducing co-channel interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Longer range through walls</b>: 5 GHz actually has shorter range and weaker wall penetration than 2.4 GHz.</span><span class='qd'><b>Lower power consumption</b>: Power consumption is not the reason 5 GHz is chosen in crowded environments.</span><span class='qd'><b>Compatibility with 802.11b</b>: 802.11b is a 2.4 GHz-only legacy standard, so 5 GHz is not compatible with it.</span>" },
  { id:"D2-112", domain:2, obj:"2.3", diff:"hard", q:"A technician must allow encrypted directory/identity lookups against a domain controller. Which protocol and port should be permitted?", options:["LDAPS / 636","Kerberos / 88","SMB / 445","LDAP / 389"], answer:0, explain:"<strong>LDAPS / 636</strong> provides encrypted LDAP directory queries over TCP port 636, securing identity lookups.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LDAP / 389</b>: Standard LDAP on port 389 is unencrypted, so it does not meet the encrypted requirement.</span><span class='qd'><b>Kerberos / 88</b>: Kerberos on port 88 handles authentication tickets, not directory lookups.</span><span class='qd'><b>SMB / 445</b>: SMB on port 445 provides file and printer sharing, not directory queries.</span>" },
  { id:"D2-113", domain:2, obj:"2.7", diff:"hard", q:"A field team needs Internet on a moving vehicle across rural highways. Which connection type is the MOST practical primary option?", options:["Cable","Cellular (4G/5G)","Fiber","DSL"], answer:1, explain:"<strong>Cellular (4G/5G)</strong> is the only listed option that supports mobility and wide rural coverage through carrier towers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DSL</b>: DSL requires a fixed copper line to a premises and cannot serve a moving vehicle.</span><span class='qd'><b>Cable</b>: Cable needs a fixed coaxial connection and is unavailable to a vehicle in motion.</span><span class='qd'><b>Fiber</b>: Fiber is a fixed wired service to one location and cannot follow a moving vehicle.</span>" },
  { id:"D2-114", domain:2, obj:"2.5", diff:"hard", q:"A SOHO admin wants devices on 10.0.0.0/24 and 10.0.1.0/24 to communicate. Both are on the same router but separate interfaces. What must be enabled or present?", options:["NAT between LAN segments","A second DHCP server","Inter-VLAN routing / routing between the subnets","APIPA on both interfaces"], answer:2, explain:"<strong>Inter-VLAN routing / routing between the subnets</strong> is required because traffic between two different subnets must be routed by the device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A second DHCP server</b>: An extra DHCP server only assigns addresses and does not forward traffic between subnets.</span><span class='qd'><b>APIPA on both interfaces</b>: APIPA assigns non-routable link-local addresses, which would prevent communication, not enable it.</span><span class='qd'><b>NAT between LAN segments</b>: NAT translates between private and public spaces, but routing, not translation, is what connects two internal subnets.</span>" },
  { id:"D2-115", domain:2, obj:"2.8", diff:"hard", q:"After crimping new RJ45 ends, a 1 Gbps link only negotiates 100 Mbps. A cable tester shows pins 4, 5, 7, and 8 are open. What does this BEST indicate?", options:["DNS is misconfigured","The loopback plug is defective","The cable is fine; the switch is faulty","Only two pairs are connected, limiting the link to 100 Mbps"], answer:3, explain:"With pins <strong>4, 5, 7, and 8 open, only two pairs are connected, limiting the link to 100 Mbps</strong>, because gigabit Ethernet needs all four pairs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cable is fine; the switch is faulty</b>: The tester shows four open pins, so the cable itself is the proven fault, not the switch.</span><span class='qd'><b>DNS is misconfigured</b>: DNS affects name resolution and has no bearing on negotiated Ethernet link speed.</span><span class='qd'><b>The loopback plug is defective</b>: No loopback plug is involved; a cable tester produced the open-pin reading.</span>" }
);
APLUS1.questions.push(
{ id:"D3-001", domain:3, obj:"3.1", diff:"easy", q:"What is the maximum supported data rate of a Cat 6 cable over a 55-meter run?", options:["10 Gbps","40 Gbps","100 Mbps","1 Gbps"], answer:0, explain:"<strong>10 Gbps</strong> is correct because Cat 6 can carry 10GBASE-T, but only over a reduced run of about 55 meters before crosstalk forces it down to 1 Gbps.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>100 Mbps</b>: 100 Mbps is the limit of older Cat 5, well below what Cat 6 can sustain at 55 meters.</span><span class='qd'><b>1 Gbps</b>: 1 Gbps is what Cat 6 falls back to past 55 meters out to the full 100 meters, not its peak at this shorter run.</span><span class='qd'><b>40 Gbps</b>: 40 Gbps (40GBASE-T) requires Cat 8 over very short runs, far beyond any Cat 6 capability.</span>" },
{ id:"D3-002", domain:3, obj:"3.1", diff:"easy", q:"Which copper Ethernet cable standard supports 10 Gbps over the full 100-meter distance?", options:["Cat 6","Cat 6a","Cat 5","Cat 5e"], answer:1, explain:"<strong>Cat 6a</strong> is correct because its augmented shielding and tighter twists let it sustain 10GBASE-T over the full 100-meter channel.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cat 5</b>: Cat 5 maxes out at 100 Mbps and cannot run gigabit, let alone 10 Gbps.</span><span class='qd'><b>Cat 5e</b>: Cat 5e is rated for 1 Gbps over 100 meters, not 10 Gbps.</span><span class='qd'><b>Cat 6</b>: Cat 6 reaches 10 Gbps only to about 55 meters, dropping to 1 Gbps beyond that.</span>" },
{ id:"D3-003", domain:3, obj:"3.1", diff:"easy", q:"What is the maximum data rate of a Cat 5e cable?", options:["10 Gbps","100 Mbps","1 Gbps","2.5 Gbps"], answer:2, explain:"<strong>1 Gbps</strong> is correct because Cat 5e supports 1000BASE-T over the full 100-meter run, the improvement that defined the enhanced (e) rating.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>100 Mbps</b>: 100 Mbps was the ceiling of plain Cat 5, which Cat 5e was designed to surpass.</span><span class='qd'><b>2.5 Gbps</b>: 2.5GBASE-T is achievable on Cat 5e in some real deployments but is not its rated standard speed, which is 1 Gbps.</span><span class='qd'><b>10 Gbps</b>: 10 Gbps requires Cat 6 (short runs) or Cat 6a, not Cat 5e.</span>" },
{ id:"D3-004", domain:3, obj:"3.1", diff:"medium", q:"A technician needs to run a fiber link over 10 km between buildings. Which fiber type is the BEST choice?", options:["Cat 6a UTP","Coaxial RG-6","Multimode fiber (MMF)","Single-mode fiber (SMF)"], answer:3, explain:"<strong>Single-mode fiber (SMF)</strong> is correct because its narrow core and laser light source minimize signal dispersion, allowing reliable transmission over many kilometers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Multimode fiber (MMF)</b>: MMF's larger core allows multiple light paths that disperse over distance, limiting it to a few hundred meters.</span><span class='qd'><b>Cat 6a UTP</b>: Copper twisted-pair is limited to 100 meters per link, nowhere near 10 km.</span><span class='qd'><b>Coaxial RG-6</b>: RG-6 coax is used for cable TV and modem drops, not long-haul kilometer building links.</span>" },
{ id:"D3-005", domain:3, obj:"3.1", diff:"medium", q:"Which characteristic distinguishes multimode fiber (MMF) from single-mode fiber (SMF)?", options:["MMF has a larger core diameter and is used for shorter distances","MMF uses lasers and SMF uses LEDs","MMF carries only one light path","MMF supports longer distances than SMF"], answer:0, explain:"<strong>MMF has a larger core diameter and is used for shorter distances</strong> is correct because multimode's wider core (typically 50 or 62.5 microns) lets multiple light modes propagate, causing modal dispersion that caps distance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MMF uses lasers and SMF uses LEDs</b>: This is reversed for typical usage; MMF often uses LEDs or VCSELs while SMF uses precise lasers.</span><span class='qd'><b>MMF carries only one light path</b>: Carrying a single light path is the defining trait of single-mode fiber, not multimode.</span><span class='qd'><b>MMF supports longer distances than SMF</b>: Single-mode fiber reaches far greater distances than multimode, so this is backward.</span>" },
{ id:"D3-006", domain:3, obj:"3.1", diff:"easy", q:"What is the theoretical maximum data rate of USB 2.0?", options:["12 Mbps","480 Mbps","5 Gbps","10 Gbps"], answer:1, explain:"<strong>480 Mbps</strong> is correct because USB 2.0 Hi-Speed has a signaling rate of 480 Mbps.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>12 Mbps</b>: 12 Mbps is the USB 1.1 Full Speed rate, the generation before 2.0.</span><span class='qd'><b>5 Gbps</b>: 5 Gbps is USB 3.0 / 3.2 Gen 1 SuperSpeed, not 2.0.</span><span class='qd'><b>10 Gbps</b>: 10 Gbps is USB 3.2 Gen 2 SuperSpeed+, far beyond 2.0.</span>" },
{ id:"D3-007", domain:3, obj:"3.1", diff:"medium", q:"What is the maximum data rate of USB 3.2 Gen 1 (originally USB 3.0)?", options:["20 Gbps","480 Mbps","5 Gbps","10 Gbps"], answer:2, explain:"<strong>5 Gbps</strong> is correct because USB 3.2 Gen 1, originally branded USB 3.0, runs at the 5 Gbps SuperSpeed rate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>480 Mbps</b>: 480 Mbps is USB 2.0 Hi-Speed, the prior generation.</span><span class='qd'><b>10 Gbps</b>: 10 Gbps is USB 3.2 Gen 2 (SuperSpeed+), one tier above Gen 1.</span><span class='qd'><b>20 Gbps</b>: 20 Gbps is USB 3.2 Gen 2x2, which bonds two 10 Gbps lanes.</span>" },
{ id:"D3-008", domain:3, obj:"3.1", diff:"medium", q:"What is the maximum data rate of USB 3.2 Gen 2x2?", options:["40 Gbps","5 Gbps","10 Gbps","20 Gbps"], answer:3, explain:"<strong>20 Gbps</strong> is correct because USB 3.2 Gen 2x2 bonds two 10 Gbps lanes over a USB-C connector for a combined 20 Gbps.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>5 Gbps</b>: 5 Gbps is USB 3.2 Gen 1, a single SuperSpeed lane.</span><span class='qd'><b>10 Gbps</b>: 10 Gbps is a single Gen 2 lane; the 2x2 designation doubles that.</span><span class='qd'><b>40 Gbps</b>: 40 Gbps is Thunderbolt 3/4 or USB4, not USB 3.2 Gen 2x2.</span>" },
{ id:"D3-009", domain:3, obj:"3.1", diff:"hard", q:"A user wants to drive two 4K displays and an external SSD through a single port at up to 40 Gbps. Which interface BEST meets this need?", options:["Thunderbolt 3","DisplayPort 1.2","HDMI 1.4","USB 2.0"], answer:0, explain:"<strong>Thunderbolt 3</strong> is correct because it delivers up to 40 Gbps over USB-C and can tunnel PCIe and DisplayPort, easily driving two 4K displays plus an external SSD on one port.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB 2.0</b>: USB 2.0's 480 Mbps cannot carry even one 4K display, let alone two displays and storage.</span><span class='qd'><b>DisplayPort 1.2</b>: DisplayPort 1.2 carries video only and cannot also act as a 40 Gbps data port for an external SSD.</span><span class='qd'><b>HDMI 1.4</b>: HDMI 1.4 is video-only and limited to 4K at 30 Hz, with no data or storage capability.</span>" },
{ id:"D3-010", domain:3, obj:"3.1", diff:"medium", q:"Which connector is reversible, meaning it can be inserted in either orientation?", options:["USB Type-B","USB Type-C","RJ45","USB Type-A"], answer:1, explain:"<strong>USB Type-C</strong> is correct because its symmetrical, flippable design lets it be inserted in either orientation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB Type-A</b>: The flat rectangular Type-A plug is keyed and only inserts one way.</span><span class='qd'><b>USB Type-B</b>: The square Type-B printer-style plug has a fixed orientation.</span><span class='qd'><b>RJ45</b>: RJ45 has a directional locking tab and only seats one way.</span>" },
{ id:"D3-011", domain:3, obj:"3.1", diff:"easy", q:"Which video interface carries BOTH digital video and audio over a single cable and is common on consumer TVs?", options:["VGA","DVI-D","HDMI","PS/2"], answer:2, explain:"<strong>HDMI</strong> is correct because it carries digital video and digital audio together over a single cable, making it the standard interface on consumer TVs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VGA</b>: VGA is analog video only and carries no audio.</span><span class='qd'><b>DVI-D</b>: DVI-D carries digital video only, with no audio channel.</span><span class='qd'><b>PS/2</b>: PS/2 is a keyboard and mouse connector, not a video or audio interface.</span>" },
{ id:"D3-012", domain:3, obj:"3.1", diff:"easy", q:"Which display connector is analog-only?", options:["HDMI","DisplayPort","DVI-D","VGA"], answer:3, explain:"<strong>VGA</strong> is correct because it is a 15-pin analog RGB video connector with no digital signal path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HDMI</b>: HDMI is a purely digital interface for video and audio.</span><span class='qd'><b>DisplayPort</b>: DisplayPort is a digital, packet-based interface.</span><span class='qd'><b>DVI-D</b>: DVI-D carries only digital signals, the opposite of analog-only.</span>" },
{ id:"D3-013", domain:3, obj:"3.1", diff:"medium", q:"Which DVI variant can carry both analog and digital signals?", options:["DVI-I","DVI-Mini","DVI-A","DVI-D"], answer:0, explain:"<strong>DVI-I</strong> is correct because the integrated variant includes both the digital TMDS pins and the four analog pins, carrying either signal type.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DVI-A</b>: DVI-A carries analog signals only.</span><span class='qd'><b>DVI-D</b>: DVI-D carries digital signals only.</span><span class='qd'><b>DVI-Mini</b>: There is no standard DVI-Mini variant; this is not a real DVI signal type.</span>" },
{ id:"D3-014", domain:3, obj:"3.1", diff:"medium", q:"A technician needs to connect a modern GPU's DisplayPort output to a monitor that only has HDMI. What is the simplest solution?", options:["A null modem cable","A DisplayPort-to-HDMI adapter","A USB-to-VGA converter","A serial-to-parallel adapter"], answer:1, explain:"<strong>A DisplayPort-to-HDMI adapter</strong> is correct because it converts the DP output into an HDMI signal the monitor can accept, the simplest bridge between the two.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A null modem cable</b>: A null modem cable crosses serial RS-232 lines for data between two computers, not video.</span><span class='qd'><b>A USB-to-VGA converter</b>: A USB-to-VGA converter produces analog VGA output, which the HDMI-only monitor cannot accept and ignores the DP source.</span><span class='qd'><b>A serial-to-parallel adapter</b>: A serial-to-parallel adapter converts legacy data ports and has nothing to do with video signals.</span>" },
{ id:"D3-015", domain:3, obj:"3.1", diff:"hard", q:"Which statement about DisplayPort versus HDMI is MOST accurate?", options:["DisplayPort cannot carry audio","HDMI supports daisy-chaining displays via MST","DisplayPort supports daisy-chaining multiple monitors via MST","Only HDMI is found on PC graphics cards"], answer:2, explain:"<strong>DisplayPort supports daisy-chaining multiple monitors via MST</strong> is correct because Multi-Stream Transport lets one DP output feed several monitors in series.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DisplayPort cannot carry audio</b>: DisplayPort does carry digital audio along with video.</span><span class='qd'><b>HDMI supports daisy-chaining displays via MST</b>: MST is a DisplayPort feature; standard HDMI does not daisy-chain monitors.</span><span class='qd'><b>Only HDMI is found on PC graphics cards</b>: Most PC graphics cards include DisplayPort outputs alongside HDMI.</span>" },
{ id:"D3-016", domain:3, obj:"3.1", diff:"medium", q:"Which connector type is used to terminate twisted-pair Ethernet cable?", options:["BNC","SC","RJ11","RJ45"], answer:3, explain:"<strong>RJ45</strong> is correct because it is the 8-position, 8-contact connector used to terminate twisted-pair Ethernet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RJ11</b>: RJ11 is the smaller 6-position connector used for analog telephone lines.</span><span class='qd'><b>BNC</b>: BNC is a bayonet connector for coaxial cable, not twisted pair.</span><span class='qd'><b>SC</b>: SC is a square push-pull fiber-optic connector, not a copper Ethernet terminator.</span>" },
{ id:"D3-017", domain:3, obj:"3.1", diff:"easy", q:"How many conductors (wires) are in a standard twisted-pair Ethernet cable?", options:["8","2","4","6"], answer:0, explain:"<strong>8</strong> is correct because twisted-pair Ethernet cable holds 8 conductors arranged as 4 twisted pairs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2</b>: 2 wires (one pair) is far fewer than the 4 pairs in Ethernet cable.</span><span class='qd'><b>4</b>: 4 wires is only two pairs, used by 100BASE-TX signaling but not the full cable count.</span><span class='qd'><b>6</b>: 6 wires does not correspond to the 4-pair construction of Ethernet cable.</span>" },
{ id:"D3-018", domain:3, obj:"3.1", diff:"medium", q:"What is the primary purpose of the twisting in twisted-pair cabling?", options:["To increase cable strength","To reduce electromagnetic interference and crosstalk","To allow power over the cable","To make the cable thinner"], answer:1, explain:"<strong>To reduce electromagnetic interference and crosstalk</strong> is correct because twisting the pairs causes interference to cancel and limits coupling between adjacent pairs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To increase cable strength</b>: Tensile strength comes from the jacket and any internal strength member, not the twist rate.</span><span class='qd'><b>To allow power over the cable</b>: Power over Ethernet is enabled by the standard and pinout, not by the twisting itself.</span><span class='qd'><b>To make the cable thinner</b>: Twisting does not reduce overall cable diameter; its purpose is signal integrity.</span>" },
{ id:"D3-019", domain:3, obj:"3.1", diff:"medium", q:"Which cable type would a technician use to connect a cable modem to a wall outlet for internet service?", options:["DB-9 serial","Cat 6 UTP","Coaxial (RG-6)","Single-mode fiber"], answer:2, explain:"<strong>Coaxial (RG-6)</strong> is correct because cable internet uses RG-6 coax with F-type connectors to link the wall outlet to the cable modem.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cat 6 UTP</b>: Cat 6 twisted pair connects the modem to a router or PC, not the coax drop to the wall.</span><span class='qd'><b>Single-mode fiber</b>: Single-mode fiber is used for long-haul and fiber-to-the-home, not the coaxial cable-modem drop.</span><span class='qd'><b>DB-9 serial</b>: DB-9 is a legacy 9-pin serial port for console and peripheral connections, not internet service.</span>" },
{ id:"D3-020", domain:3, obj:"3.1", diff:"hard", q:"A SATA data cable and a SATA power cable look similar. How many pins does the SATA DATA connector have?", options:["15","40","4","7"], answer:3, explain:"<strong>7</strong> is correct because the SATA data connector uses a 7-pin L-shaped interface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>4</b>: 4 pins is the legacy Molex peripheral power connector, not SATA data.</span><span class='qd'><b>15</b>: 15 pins is the SATA power connector, the look-alike that this question contrasts against.</span><span class='qd'><b>40</b>: 40 pins is the old parallel IDE/PATA ribbon connector, not SATA.</span>" },
{ id:"D3-021", domain:3, obj:"3.1", diff:"medium", q:"Which legacy connector is a 6-pin mini-DIN used for older keyboards and mice?", options:["PS/2","USB-A","RJ11","DB-25"], answer:0, explain:"<strong>PS/2</strong> is correct because it is a 6-pin mini-DIN connector used for legacy keyboards (purple) and mice (green).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB-A</b>: USB-A is a flat rectangular serial-bus connector, not a 6-pin mini-DIN.</span><span class='qd'><b>RJ11</b>: RJ11 is a modular telephone jack, not a keyboard or mouse connector.</span><span class='qd'><b>DB-25</b>: DB-25 is a 25-pin D-sub connector used for legacy parallel or serial ports.</span>" },
{ id:"D3-022", domain:3, obj:"3.1", diff:"hard", q:"A technician must choose a plenum-rated cable. What is the MOST important reason for this requirement?", options:["It transmits data faster","Its jacket produces less toxic smoke when burning, meeting fire code for air spaces","It is cheaper than standard cable","It supports longer distances"], answer:1, explain:"<strong>Its jacket produces less toxic smoke when burning, meeting fire code for air spaces</strong> is correct because plenum cable uses a fire-retardant, low-smoke jacket required where cable runs through air-handling spaces.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It transmits data faster</b>: Jacket rating governs fire safety, not data speed, which depends on the cable category.</span><span class='qd'><b>It is cheaper than standard cable</b>: Plenum cable is more expensive than standard PVC (riser) cable, not cheaper.</span><span class='qd'><b>It supports longer distances</b>: Maximum distance is set by the cabling standard, not by the plenum jacket.</span>" },
{ id:"D3-023", domain:3, obj:"3.1", diff:"medium", q:"Lightning and USB-C are both connectors found on mobile devices. Which company developed the Lightning connector?", options:["Microsoft","Samsung","Apple","Google"], answer:2, explain:"<strong>Apple</strong> is correct because Lightning is Apple's proprietary connector used on older iPhones and iPads before the move to USB-C.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Samsung</b>: Samsung uses USB-C and micro-USB on its devices, not Lightning.</span><span class='qd'><b>Google</b>: Google's Pixel devices use USB-C, and Google did not create Lightning.</span><span class='qd'><b>Microsoft</b>: Microsoft uses USB-C and its Surface Connect port, not Lightning.</span>" },
{ id:"D3-024", domain:3, obj:"3.1", diff:"easy", q:"Which standard delivers electrical power to devices over an Ethernet cable?", options:["USB-PD","Thunderbolt","MST","PoE (Power over Ethernet)"], answer:3, explain:"<strong>PoE (Power over Ethernet)</strong> is correct because it delivers DC power alongside data over twisted-pair Ethernet to devices like IP phones, cameras, and access points.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB-PD</b>: USB Power Delivery supplies power over USB-C cables, not Ethernet.</span><span class='qd'><b>Thunderbolt</b>: Thunderbolt carries power and data over USB-C, not over twisted-pair Ethernet.</span><span class='qd'><b>MST</b>: MST is a DisplayPort daisy-chaining feature and carries no power.</span>" },
{ id:"D3-025", domain:3, obj:"3.1", diff:"hard", q:"A technician sees a USB-C cable that supports 40 Gbps and 100W charging. Which technologies does this MOST likely combine?", options:["Thunderbolt 4 with USB Power Delivery","HDMI with VGA","SATA with eSATA","USB 2.0 with PoE"], answer:0, explain:"<strong>Thunderbolt 4 with USB Power Delivery</strong> is correct because Thunderbolt 4 provides the 40 Gbps data path while USB-PD supplies up to 100W of charging over the same USB-C cable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>USB 2.0 with PoE</b>: USB 2.0 tops out at 480 Mbps and PoE is an Ethernet technology, neither matching 40 Gbps over USB-C.</span><span class='qd'><b>HDMI with VGA</b>: HDMI and VGA are display interfaces that carry neither 40 Gbps data nor 100W charging.</span><span class='qd'><b>SATA with eSATA</b>: SATA and eSATA are storage interfaces capped near 6 Gbps and carry no charging power.</span>" },
{ id:"D3-026", domain:3, obj:"3.2", diff:"easy", q:"How many pins does a DDR4 desktop DIMM have?", options:["284","288","240","260"], answer:1, explain:"<strong>288</strong> is correct because a DDR4 desktop DIMM uses 288 pins.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>240</b>: 240 pins is the DDR3 desktop DIMM count, the prior generation.</span><span class='qd'><b>260</b>: 260 pins is the DDR4 SO-DIMM laptop count, not a desktop DIMM.</span><span class='qd'><b>284</b>: 284 is not a standard DDR DIMM pin count.</span>" },
{ id:"D3-027", domain:3, obj:"3.2", diff:"medium", q:"How many pins does a DDR5 desktop DIMM have?", options:["260","284","288","204"], answer:2, explain:"<strong>288</strong> is correct because DDR5 desktop DIMMs keep the 288-pin form factor, though the notch and electrical layout differ from DDR4.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>260</b>: 260 pins is the DDR4 SO-DIMM count, a laptop module.</span><span class='qd'><b>284</b>: 284 is not a valid DDR DIMM pin count.</span><span class='qd'><b>204</b>: 204 pins is the DDR3 SO-DIMM count, not a DDR5 desktop DIMM.</span>" },
{ id:"D3-028", domain:3, obj:"3.2", diff:"medium", q:"How many pins does a DDR4 SO-DIMM (laptop) module have?", options:["262","200","204","260"], answer:3, explain:"<strong>260</strong> is correct because a DDR4 SO-DIMM laptop module has 260 pins.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>200</b>: 200 pins is the DDR/DDR2 SO-DIMM count, much older.</span><span class='qd'><b>204</b>: 204 pins is the DDR3 SO-DIMM count, the generation before DDR4.</span><span class='qd'><b>262</b>: 262 is not a standard SO-DIMM pin count.</span>" },
{ id:"D3-029", domain:3, obj:"3.2", diff:"easy", q:"Which memory form factor is designed for laptops and small-form-factor systems?", options:["SO-DIMM","RIMM","SIMM","DIMM"], answer:0, explain:"<strong>SO-DIMM</strong> is correct because the Small Outline DIMM is the compact module designed for laptops and small-form-factor systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DIMM</b>: A full-size DIMM is the larger desktop and server module, too long for laptops.</span><span class='qd'><b>RIMM</b>: RIMM was the obsolete Rambus module, not a current laptop form factor.</span><span class='qd'><b>SIMM</b>: SIMM is a legacy single in-line module from the pre-DIMM era.</span>" },
{ id:"D3-030", domain:3, obj:"3.2", diff:"medium", q:"A technician tries to install a DDR4 module into a DDR5 slot. What will happen?", options:["It works but at reduced speed","It physically will not fit because the notch (key) is in a different position","It works at full speed","It damages the CPU immediately"], answer:1, explain:"<strong>It physically will not fit because the notch (key) is in a different position</strong> is correct because DDR generations use different keying so a DDR4 module cannot seat in a DDR5 slot.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It works but at reduced speed</b>: The different notch prevents insertion, so it cannot run at any speed.</span><span class='qd'><b>It works at full speed</b>: DDR generations are not interchangeable and the module will not even seat.</span><span class='qd'><b>It damages the CPU immediately</b>: The keying blocks insertion entirely, so no electrical contact or CPU damage occurs.</span>" },
{ id:"D3-031", domain:3, obj:"3.2", diff:"hard", q:"Which statement comparing DDR5 to DDR4 is MOST accurate?", options:["DDR5 is backward compatible in DDR4 slots","DDR5 runs at lower base speeds than DDR4","DDR5 starts at higher data rates (4800 MT/s+) and uses on-module power management","DDR5 uses fewer pins than DDR4"], answer:2, explain:"<strong>DDR5 starts at higher data rates (4800 MT/s+) and uses on-module power management</strong> is correct because DDR5 begins around 4800 MT/s and moves voltage regulation onto the module with a PMIC.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DDR5 runs at lower base speeds than DDR4</b>: DDR5 base speeds are higher than DDR4, not lower.</span><span class='qd'><b>DDR5 uses fewer pins than DDR4</b>: Both DDR5 and DDR4 desktop DIMMs use 288 pins.</span><span class='qd'><b>DDR5 is backward compatible in DDR4 slots</b>: Different keying and signaling make DDR5 incompatible with DDR4 slots.</span>" },
{ id:"D3-032", domain:3, obj:"3.2", diff:"medium", q:"What does ECC memory provide that standard memory does not?", options:["Lower power consumption","More memory channels","Faster clock speeds","Detection and correction of single-bit errors"], answer:3, explain:"<strong>Detection and correction of single-bit errors</strong> is correct because ECC memory uses extra parity bits to detect and correct single-bit errors automatically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster clock speeds</b>: ECC does not raise clock speed; it adds reliability, sometimes with a slight latency cost.</span><span class='qd'><b>Lower power consumption</b>: ECC does not reduce power; the extra checking circuitry can use slightly more.</span><span class='qd'><b>More memory channels</b>: Channel count is a function of the platform and module layout, unrelated to ECC.</span>" },
{ id:"D3-033", domain:3, obj:"3.2", diff:"hard", q:"A server requires maximum reliability. Which memory feature is MOST important for preventing data corruption from bit flips?", options:["ECC support","Higher CAS latency","Single-sided modules","Dual-channel configuration"], answer:0, explain:"<strong>ECC support</strong> is correct because ECC detects and corrects single-bit errors, directly preventing data corruption from bit flips in critical servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dual-channel configuration</b>: Dual-channel boosts bandwidth but does nothing to correct memory errors.</span><span class='qd'><b>Higher CAS latency</b>: Higher CAS latency slows access and provides no error protection.</span><span class='qd'><b>Single-sided modules</b>: Single-sided versus double-sided describes chip layout, not error correction.</span>" },
{ id:"D3-034", domain:3, obj:"3.2", diff:"easy", q:"To enable dual-channel memory, how should two identical RAM modules typically be installed?", options:["In any two slots","In the matching color-coded slot pairs per the motherboard manual","Both in slot 1","Stacked on top of each other"], answer:1, explain:"<strong>In the matching color-coded slot pairs per the motherboard manual</strong> is correct because dual-channel requires the modules in the paired slots the board designates, usually marked by color.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>In any two slots</b>: Arbitrary slot placement may run single-channel instead of dual-channel.</span><span class='qd'><b>Both in slot 1</b>: Two modules cannot occupy a single slot.</span><span class='qd'><b>Stacked on top of each other</b>: DIMMs install side by side in separate slots, never stacked.</span>" },
{ id:"D3-035", domain:3, obj:"3.2", diff:"medium", q:"What is the main benefit of running RAM in dual-channel mode?", options:["Error correction","Doubled storage capacity","Increased memory bandwidth","Lower latency to disk"], answer:2, explain:"<strong>Increased memory bandwidth</strong> is correct because dual-channel widens the effective memory bus, raising bandwidth between RAM and the controller.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Doubled storage capacity</b>: Capacity is the sum of installed modules regardless of channel mode, not doubled by dual-channel.</span><span class='qd'><b>Lower latency to disk</b>: Dual-channel affects RAM, not disk access latency.</span><span class='qd'><b>Error correction</b>: Error correction is provided by ECC, not by running dual-channel.</span>" },
{ id:"D3-036", domain:3, obj:"3.2", diff:"hard", q:"A workstation board advertises quad-channel memory. How many matched modules are needed to fully populate all channels?", options:["8","1","2","4"], answer:3, explain:"<strong>4</strong> is correct because quad-channel uses four channels, so four matched modules are needed to populate every channel for full bandwidth.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1</b>: A single module fills only one channel, leaving three empty.</span><span class='qd'><b>2</b>: Two modules populate only two of the four channels (dual-channel).</span><span class='qd'><b>8</b>: Eight modules would over-populate a four-channel board, exceeding one module per channel.</span>" },
{ id:"D3-037", domain:3, obj:"3.2", diff:"medium", q:"What does the term 'unbuffered' (non-registered) memory mean compared to registered (buffered) memory?", options:["It addresses the memory chips directly without a register between them and the controller","It cannot run in dual channel","It is only used in servers","It has no error correction"], answer:0, explain:"<strong>It addresses the memory chips directly without a register between them and the controller</strong> is correct because unbuffered memory connects the chips straight to the controller, unlike registered modules that add a buffering register.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It has no error correction</b>: ECC is independent of buffering; unbuffered ECC modules exist.</span><span class='qd'><b>It cannot run in dual channel</b>: Unbuffered memory runs in dual-channel normally.</span><span class='qd'><b>It is only used in servers</b>: Unbuffered memory is the standard for desktops, while registered memory is the server type.</span>" },
{ id:"D3-038", domain:3, obj:"3.2", diff:"easy", q:"Which of these is volatile memory that loses its contents when power is removed?", options:["SSD","RAM","HDD","Optical disc"], answer:1, explain:"<strong>RAM</strong> is correct because RAM is volatile and loses all contents the instant power is removed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SSD</b>: An SSD stores data in non-volatile flash that persists without power.</span><span class='qd'><b>HDD</b>: A hard drive retains data magnetically on its platters without power.</span><span class='qd'><b>Optical disc</b>: An optical disc holds data physically in the media and is non-volatile.</span>" },
{ id:"D3-039", domain:3, obj:"3.2", diff:"hard", q:"A user reports random crashes and the BSOD references different addresses each time. After other checks pass, which tool BEST tests for failing RAM?", options:["Device Manager","chkdsk","Windows Memory Diagnostic / MemTest86","Disk Cleanup"], answer:2, explain:"<strong>Windows Memory Diagnostic / MemTest86</strong> is correct because these tools stress-test RAM, which is the likely culprit for random crashes referencing different addresses each time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>chkdsk</b>: chkdsk scans disk file system and sectors, not memory.</span><span class='qd'><b>Disk Cleanup</b>: Disk Cleanup frees storage space and does not test hardware.</span><span class='qd'><b>Device Manager</b>: Device Manager lists and manages drivers but does not run a memory stress test.</span>" },
{ id:"D3-040", domain:3, obj:"3.2", diff:"medium", q:"What does a higher MT/s (megatransfers per second) rating on a DDR module indicate?", options:["Lower power use","Better error correction","More storage capacity","A higher effective data transfer rate"], answer:3, explain:"<strong>A higher effective data transfer rate</strong> is correct because MT/s counts data transfers per second, so a higher figure means greater memory bandwidth.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>More storage capacity</b>: Capacity is measured in gigabytes, not transfer rate.</span><span class='qd'><b>Lower power use</b>: MT/s describes speed, not power draw, and faster modules may use more power.</span><span class='qd'><b>Better error correction</b>: Error correction comes from ECC, unrelated to MT/s.</span>" },
{ id:"D3-041", domain:3, obj:"3.3", diff:"easy", q:"What is the maximum theoretical throughput of a SATA III (6 Gbps) interface?", options:["About 600 MB/s","About 1000 MB/s","About 150 MB/s","About 300 MB/s"], answer:0, explain:"<strong>About 600 MB/s</strong> is correct because SATA III's 6 Gbps signaling yields roughly 600 MB/s of usable throughput after 8b/10b overhead.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>About 150 MB/s</b>: 150 MB/s is SATA I (1.5 Gbps) throughput.</span><span class='qd'><b>About 300 MB/s</b>: 300 MB/s is SATA II (3 Gbps) throughput.</span><span class='qd'><b>About 1000 MB/s</b>: 1000 MB/s exceeds the SATA III ceiling and is in NVMe/PCIe territory.</span>" },
{ id:"D3-042", domain:3, obj:"3.3", diff:"medium", q:"Why can an NVMe SSD vastly outperform a SATA III SSD?", options:["NVMe uses optical storage","NVMe uses the PCIe bus instead of the slower SATA interface","NVMe spins its platters faster","NVMe uses more cache RAM only"], answer:1, explain:"<strong>NVMe uses the PCIe bus instead of the slower SATA interface</strong> is correct because PCIe lanes provide far more bandwidth and lower latency than the 6 Gbps SATA III ceiling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NVMe spins its platters faster</b>: NVMe SSDs are solid-state with no platters to spin.</span><span class='qd'><b>NVMe uses more cache RAM only</b>: The performance gain comes from the PCIe interface, not cache size alone.</span><span class='qd'><b>NVMe uses optical storage</b>: NVMe uses NAND flash, not optical media.</span>" },
{ id:"D3-043", domain:3, obj:"3.3", diff:"medium", q:"An M.2 SSD slot supports both keys B and M. Which key supports up to four PCIe lanes for the fastest NVMe drives?", options:["A key","B key","M key","E key"], answer:2, explain:"<strong>M key</strong> is correct because an M-key M.2 slot wires up to four PCIe lanes (x4), enabling the fastest NVMe SSDs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A key</b>: A-key slots are used for Wi-Fi and Bluetooth cards, not x4 NVMe storage.</span><span class='qd'><b>B key</b>: B-key supports up to two PCIe lanes (x2), half the bandwidth of M-key.</span><span class='qd'><b>E key</b>: E-key slots serve wireless cards, not high-speed storage.</span>" },
{ id:"D3-044", domain:3, obj:"3.3", diff:"hard", q:"A technician has an M.2 SSD with a B+M key edge. Which statement is MOST accurate?", options:["It is a PCIe x4 NVMe drive","It cannot fit any standard M.2 slot","It only fits M-key-only slots","Its dual notch lets it fit both B-key and M-key slots, typically running as a SATA or PCIe x2 drive"], answer:3, explain:"<strong>Its dual notch lets it fit both B-key and M-key slots, typically running as a SATA or PCIe x2 drive</strong> is correct because two notches make it physically compatible with both keyings but limit it to x2 or SATA operation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It only fits M-key-only slots</b>: The B notch lets it also seat in B-key slots, so it is not M-key exclusive.</span><span class='qd'><b>It is a PCIe x4 NVMe drive</b>: An x4 NVMe drive is M-key only with a single notch; B+M keying caps it at x2.</span><span class='qd'><b>It cannot fit any standard M.2 slot</b>: B+M keying is among the most widely compatible, fitting both slot types.</span>" },
{ id:"D3-045", domain:3, obj:"3.3", diff:"easy", q:"What is the minimum number of disks required for RAID 0?", options:["2","3","4","1"], answer:0, explain:"<strong>2</strong> is correct because RAID 0 stripes data across drives and needs a minimum of two to do so.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1</b>: A single drive cannot stripe; striping requires at least two.</span><span class='qd'><b>3</b>: Three is the minimum for RAID 5, not RAID 0.</span><span class='qd'><b>4</b>: Four is the minimum for RAID 10, not RAID 0.</span>" },
{ id:"D3-046", domain:3, obj:"3.3", diff:"easy", q:"Which RAID level mirrors data across two disks, providing fault tolerance but no capacity gain?", options:["RAID 0","RAID 1","RAID 5","RAID 10"], answer:1, explain:"<strong>RAID 1</strong> is correct because it mirrors identical data on two drives, giving fault tolerance while usable capacity equals one drive.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RAID 0</b>: RAID 0 stripes for speed with no mirroring and no fault tolerance.</span><span class='qd'><b>RAID 5</b>: RAID 5 uses striping with distributed parity across three or more disks, not simple mirroring.</span><span class='qd'><b>RAID 10</b>: RAID 10 combines mirroring and striping and needs at least four disks.</span>" },
{ id:"D3-047", domain:3, obj:"3.3", diff:"medium", q:"What is the minimum number of disks required for RAID 5?", options:["5","2","3","4"], answer:2, explain:"<strong>3</strong> is correct because RAID 5 uses striping with distributed parity and requires a minimum of three disks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2</b>: Two disks cannot hold striped data plus distributed parity; that is the RAID 0 or RAID 1 minimum.</span><span class='qd'><b>4</b>: Four exceeds the RAID 5 minimum and is the RAID 10 minimum instead.</span><span class='qd'><b>5</b>: Five is more than RAID 5 requires to function.</span>" },
{ id:"D3-048", domain:3, obj:"3.3", diff:"medium", q:"How many drive failures can a RAID 5 array tolerate without data loss?", options:["Two","Any number","Zero","One"], answer:3, explain:"<strong>One</strong> is correct because RAID 5's distributed parity allows the array to rebuild after a single drive failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero</b>: RAID 5 does tolerate one failure, so zero understates its redundancy.</span><span class='qd'><b>Two</b>: Tolerating two failures is RAID 6 (dual parity), not RAID 5.</span><span class='qd'><b>Any number</b>: No RAID level survives unlimited failures; RAID 5 loses data on the second concurrent failure.</span>" },
{ id:"D3-049", domain:3, obj:"3.3", diff:"medium", q:"What is the minimum number of disks required for RAID 10?", options:["4","6","2","3"], answer:0, explain:"<strong>4</strong> is correct because RAID 10 nests a stripe of mirrors and needs a minimum of four disks (two mirrored pairs).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2</b>: Two disks form a RAID 1 mirror only, with no striping.</span><span class='qd'><b>3</b>: Three is the RAID 5 minimum and cannot form two mirrored pairs.</span><span class='qd'><b>6</b>: Six is a valid RAID 10 count but exceeds the minimum requirement.</span>" },
{ id:"D3-050", domain:3, obj:"3.3", diff:"hard", q:"A database server needs both fault tolerance and high read/write performance with minimal rebuild risk. Which RAID level is the BEST fit?", options:["RAID 5","RAID 10","RAID 0","RAID 1"], answer:1, explain:"<strong>RAID 10</strong> is correct because mirroring plus striping delivers high read/write performance with redundancy and faster, lower-risk rebuilds than parity RAID.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RAID 0</b>: RAID 0 is fast but has zero fault tolerance, unacceptable for a database.</span><span class='qd'><b>RAID 1</b>: RAID 1 is redundant but does not stripe, limiting performance scaling.</span><span class='qd'><b>RAID 5</b>: RAID 5 has a write penalty from parity calculation and slow, higher-risk rebuilds versus RAID 10.</span>" },
{ id:"D3-051", domain:3, obj:"3.3", diff:"hard", q:"In a four-disk RAID 5 array of 1 TB drives, how much usable capacity is available?", options:["1 TB","2 TB","3 TB","4 TB"], answer:2, explain:"<strong>3 TB</strong> is correct because RAID 5 consumes one drive's worth of capacity for parity, so four 1 TB disks yield n-1, or 3 TB usable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1 TB</b>: 1 TB would reflect a RAID 1 mirror of these drives, not RAID 5.</span><span class='qd'><b>2 TB</b>: 2 TB understates capacity; RAID 5 only sacrifices one drive, not two.</span><span class='qd'><b>4 TB</b>: 4 TB is the raw total with no parity reserved, which RAID 5 does not provide.</span>" },
{ id:"D3-052", domain:3, obj:"3.3", diff:"hard", q:"In a RAID 1 array of two 2 TB drives, how much usable capacity is available?", options:["3 TB","4 TB","1 TB","2 TB"], answer:3, explain:"<strong>2 TB</strong> is correct because RAID 1 mirrors the data, so usable capacity equals one of the two 2 TB drives.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1 TB</b>: 1 TB halves a single drive incorrectly; mirroring keeps the full 2 TB of one drive.</span><span class='qd'><b>3 TB</b>: 3 TB would be an n-1 parity result like RAID 5, not RAID 1 mirroring.</span><span class='qd'><b>4 TB</b>: 4 TB is the raw total, but mirroring duplicates data so half is redundant.</span>" },
{ id:"D3-053", domain:3, obj:"3.3", diff:"medium", q:"Which RAID level provides the BEST performance but offers no redundancy?", options:["RAID 0","RAID 1","RAID 5","RAID 6"], answer:0, explain:"<strong>RAID 0</strong> is correct because striping across drives maximizes speed and capacity but provides no redundancy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RAID 1</b>: RAID 1 mirrors for redundancy and does not boost performance the way striping does.</span><span class='qd'><b>RAID 5</b>: RAID 5 adds parity for fault tolerance, with a write penalty rather than pure performance.</span><span class='qd'><b>RAID 6</b>: RAID 6 uses dual parity for even more redundancy, the opposite of no fault tolerance.</span>" },
{ id:"D3-054", domain:3, obj:"3.3", diff:"easy", q:"Which storage device has no moving parts and uses flash memory?", options:["HDD","SSD","Optical drive","Tape drive"], answer:1, explain:"<strong>SSD</strong> is correct because a solid-state drive stores data in NAND flash with no moving parts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HDD</b>: A hard disk drive has spinning platters and moving read/write heads.</span><span class='qd'><b>Optical drive</b>: An optical drive spins discs and moves a laser assembly.</span><span class='qd'><b>Tape drive</b>: A tape drive uses moving magnetic tape and mechanical transport.</span>" },
{ id:"D3-055", domain:3, obj:"3.3", diff:"medium", q:"A laptop uses a 2.5-inch hard drive. Which common spindle speeds are typical for HDDs?", options:["100 and 500 RPM","1,200 and 3,000 RPM","5,400 and 7,200 RPM","10,000 and 50,000 RPM"], answer:2, explain:"<strong>5,400 and 7,200 RPM</strong> is correct because these are the standard consumer HDD spindle speeds, with 5,400 favoring low power and 7,200 favoring performance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1,200 and 3,000 RPM</b>: These speeds are far too slow for any modern hard drive.</span><span class='qd'><b>10,000 and 50,000 RPM</b>: 10,000 exists in enterprise drives, but 50,000 RPM is not a real HDD speed.</span><span class='qd'><b>100 and 500 RPM</b>: These speeds are orders of magnitude too low to read data usefully.</span>" },
{ id:"D3-056", domain:3, obj:"3.3", diff:"hard", q:"A technician installs an M.2 NVMe drive but the system does not detect it, though M.2 SATA drives work in the same slot. What is the MOST likely cause?", options:["The CPU is too slow","The RAM is faulty","The drive is dead","The M.2 slot supports only SATA keying, not PCIe/NVMe"], answer:3, explain:"<strong>The M.2 slot supports only SATA keying, not PCIe/NVMe</strong> is correct because some M.2 slots are wired for SATA only and will not enumerate a PCIe/NVMe drive, while M.2 SATA drives still work there.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The drive is dead</b>: A dead drive is unlikely given the slot's SATA-only behavior is the documented cause and the pattern points to the slot.</span><span class='qd'><b>The CPU is too slow</b>: CPU speed does not prevent a slot from detecting a drive.</span><span class='qd'><b>The RAM is faulty</b>: Faulty RAM causes crashes, not selective M.2 detection by interface type.</span>" },
{ id:"D3-057", domain:3, obj:"3.3", diff:"medium", q:"Which interface is an external version of SATA used to connect drives outside the case?", options:["eSATA","mSATA","M.2","IDE"], answer:0, explain:"<strong>eSATA</strong> is correct because external SATA provides a shielded connector to attach SATA drives outside the case at near-internal speeds.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>mSATA</b>: mSATA is a small internal form factor for SSDs, not an external connector.</span><span class='qd'><b>M.2</b>: M.2 is an internal edge-connector slot, not an external interface.</span><span class='qd'><b>IDE</b>: IDE/PATA is a legacy internal ribbon-cable interface, not external SATA.</span>" },
{ id:"D3-058", domain:3, obj:"3.4", diff:"easy", q:"Which motherboard form factor is the largest of these standard ATX-family sizes?", options:["Micro-ATX","ATX","Nano-ITX","Mini-ITX"], answer:1, explain:"<strong>ATX</strong> is correct because standard ATX at about 12 by 9.6 inches is the largest of these ATX-family form factors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Mini-ITX</b>: Mini-ITX is a compact 6.7 by 6.7 inch board, much smaller than ATX.</span><span class='qd'><b>Micro-ATX</b>: Micro-ATX is smaller than full ATX with fewer expansion slots.</span><span class='qd'><b>Nano-ITX</b>: Nano-ITX is even smaller than Mini-ITX, used in embedded systems.</span>" },
{ id:"D3-059", domain:3, obj:"3.4", diff:"medium", q:"Which expansion slot standard is used by modern graphics cards for the highest bandwidth?", options:["PCI","AGP","PCIe x16","ISA"], answer:2, explain:"<strong>PCIe x16</strong> is correct because a 16-lane PCIe slot provides the bandwidth modern graphics cards need.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PCI</b>: Legacy parallel PCI is far too slow and narrow for modern GPUs.</span><span class='qd'><b>AGP</b>: AGP was an older dedicated graphics slot long since replaced by PCIe.</span><span class='qd'><b>ISA</b>: ISA is an obsolete 16-bit expansion bus from early PCs.</span>" },
{ id:"D3-060", domain:3, obj:"3.4", diff:"medium", q:"On Intel platforms, the CPU socket type uses pins on the socket and lands on the chip. What is this design called?", options:["BGA","ZIF","PGA","LGA"], answer:3, explain:"<strong>LGA</strong> is correct because Land Grid Array places the pins in the socket and flat contact lands on the CPU, the standard for Intel desktop processors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PGA</b>: PGA puts the pins on the CPU and holes in the socket, the reverse of LGA.</span><span class='qd'><b>BGA</b>: BGA solders the chip permanently to the board with solder balls, not a socket.</span><span class='qd'><b>ZIF</b>: ZIF describes a zero-insertion-force lever mechanism, not the pin/land arrangement.</span>" },
{ id:"D3-061", domain:3, obj:"3.4", diff:"hard", q:"A technician must replace a CMOS battery to stop BIOS settings and the clock from resetting. Which battery type is standard?", options:["CR2032 coin cell","9V battery","Lithium-ion pack","AA alkaline"], answer:0, explain:"<strong>CR2032 coin cell</strong> is correct because the CMOS/RTC battery is a 3V CR2032 lithium coin cell that preserves BIOS settings and the clock when the system is off.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>AA alkaline</b>: AA cells are not used as motherboard CMOS batteries.</span><span class='qd'><b>9V battery</b>: A 9V battery does not fit the coin-cell holder or the 3V requirement.</span><span class='qd'><b>Lithium-ion pack</b>: A rechargeable Li-ion pack is used for laptop main batteries, not the CMOS holder.</span>" },
{ id:"D3-062", domain:3, obj:"3.4", diff:"hard", q:"A motherboard supports both UEFI and legacy BIOS booting. Which advantage does UEFI provide over legacy BIOS?", options:["Inability to use a mouse","Support for drives larger than 2 TB via GPT and faster boot with Secure Boot","Only text-mode menus","Requirement for floppy drives"], answer:1, explain:"<strong>Support for drives larger than 2 TB via GPT and faster boot with Secure Boot</strong> is correct because UEFI enables GPT partitioning, graphical menus, faster startup, and Secure Boot over legacy BIOS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only text-mode menus</b>: UEFI supports graphical interfaces, unlike the text-only legacy BIOS this would describe.</span><span class='qd'><b>Requirement for floppy drives</b>: UEFI removes legacy dependencies; it does not require floppy drives.</span><span class='qd'><b>Inability to use a mouse</b>: UEFI firmware commonly supports mouse input, an improvement over legacy BIOS.</span>" },
{ id:"D3-063", domain:3, obj:"3.4", diff:"medium", q:"Which header on a motherboard supplies the primary power to the CPU, separate from the main 24-pin connector?", options:["The front-panel header","The PCIe 6-pin connector","The 4/8-pin EPS (CPU) power connector","The SATA power connector"], answer:2, explain:"<strong>The 4/8-pin EPS (CPU) power connector</strong> is correct because the EPS connector near the socket supplies dedicated power to the CPU alongside the 24-pin main ATX connector.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The SATA power connector</b>: SATA power feeds drives, not the CPU.</span><span class='qd'><b>The front-panel header</b>: The front-panel header carries power button and LED signals, not CPU power.</span><span class='qd'><b>The PCIe 6-pin connector</b>: The PCIe 6-pin connector powers expansion cards like GPUs, not the processor.</span>" }
);
APLUS1.questions.push(
  { id:"D3-064", domain:3, obj:"3.4", diff:"easy", q:"Which motherboard form factor is the largest of the common ATX-family sizes?", options:["Nano-ITX","Mini-ITX","Micro-ATX","ATX"], answer:3, explain:"<strong>ATX</strong> measures about 12 x 9.6 inches, the largest of these common form factors, giving room for up to seven expansion slots.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Mini-ITX</b>: Mini-ITX is only about 6.7 x 6.7 inches with a single expansion slot, the smallest of these, not the largest.</span><span class='qd'><b>Micro-ATX</b>: Micro-ATX is about 9.6 x 9.6 inches with up to four slots, smaller than full ATX.</span><span class='qd'><b>Nano-ITX</b>: Nano-ITX is roughly 4.7 x 4.7 inches, an even tinier embedded board far smaller than ATX.</span>" },
  { id:"D3-065", domain:3, obj:"3.4", diff:"easy", q:"What is the approximate size of a Mini-ITX motherboard?", options:["6.7 x 6.7 inches","9.6 x 9.6 inches","12 x 9.6 inches","17 x 17 inches"], answer:0, explain:"<strong>6.7 x 6.7 inches</strong> matches the 170 x 170 mm Mini-ITX standard, ideal for small-form-factor builds.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>9.6 x 9.6 inches</b>: That square size describes a Micro-ATX board, which is larger than Mini-ITX.</span><span class='qd'><b>12 x 9.6 inches</b>: Those are the dimensions of a full ATX board, the largest common form factor.</span><span class='qd'><b>17 x 17 inches</b>: No consumer motherboard is that large; this far exceeds even an Extended ATX board.</span>" },
  { id:"D3-066", domain:3, obj:"3.4", diff:"medium", q:"A technician needs a graphics card with the maximum number of data lanes. Which PCIe slot should be used?", options:["PCIe x8","PCIe x16","PCIe x1","PCIe x4"], answer:1, explain:"<strong>PCIe x16</strong> provides 16 data lanes, the most of these options and the standard slot for high-bandwidth discrete GPUs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PCIe x1</b>: An x1 slot offers only a single lane, suited to low-bandwidth add-in cards, not a graphics card.</span><span class='qd'><b>PCIe x4</b>: An x4 slot has just four lanes, far fewer than the 16 a GPU needs for full bandwidth.</span><span class='qd'><b>PCIe x8</b>: An x8 slot delivers eight lanes, half the lane count of x16 and not the maximum here.</span>" },
  { id:"D3-067", domain:3, obj:"3.4", diff:"medium", q:"How many expansion slots does a Micro-ATX board typically support compared to full ATX?", options:["Exactly seven, same as ATX","None; mATX has no slots","Up to four, fewer than ATX","More slots than ATX"], answer:2, explain:"<strong>Up to four, fewer than ATX</strong> is correct because Micro-ATX trims the board to about four expansion slots versus the seven on full ATX.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>More slots than ATX</b>: A smaller board cannot hold more slots; mATX has fewer than ATX, not more.</span><span class='qd'><b>Exactly seven, same as ATX</b>: Seven slots is the full ATX maximum; mATX is physically shorter and supports fewer.</span><span class='qd'><b>None; mATX has no slots</b>: Micro-ATX boards do include expansion slots; they are simply fewer than on ATX.</span>" },
  { id:"D3-068", domain:3, obj:"3.4", diff:"hard", q:"A PCIe x8 card is installed in a PCIe x16 slot. What is the MOST likely result?", options:["The card will not physically fit","The card forces the slot to x16","The system refuses to POST","The card works at up to x8 lanes"], answer:3, explain:"<strong>The card works at up to x8 lanes</strong> because PCIe is forward and backward compatible: a shorter card seats in a longer slot and negotiates its native lane width.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The card will not physically fit</b>: A smaller x8 card fits easily into the longer x16 slot; the open-ended design allows it.</span><span class='qd'><b>The card forces the slot to x16</b>: The link negotiates to the lower common width, so it runs at x8, not x16.</span><span class='qd'><b>The system refuses to POST</b>: PCIe compatibility means the system boots normally; lane downshifting is automatic and non-fatal.</span>" },
  { id:"D3-069", domain:3, obj:"3.4", diff:"medium", q:"Which firmware feature verifies that only trusted, signed software loads during startup?", options:["Secure Boot","CSM","Boot order","Fast Boot"], answer:0, explain:"<strong>Secure Boot</strong> is the UEFI feature that checks the digital signatures of bootloaders and drivers so only trusted, signed code runs at startup.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Boot order</b>: Boot order only selects which device to start from; it does not validate signatures of the loaded software.</span><span class='qd'><b>Fast Boot</b>: Fast Boot skips hardware checks to speed startup and performs no signature verification.</span><span class='qd'><b>CSM</b>: The Compatibility Support Module enables legacy BIOS booting and typically must be disabled for Secure Boot to work.</span>" },
  { id:"D3-070", domain:3, obj:"3.4", diff:"medium", q:"Which component stores cryptographic keys used by features like BitLocker drive encryption?", options:["Northbridge","TPM","POST card","CMOS battery"], answer:1, explain:"<strong>TPM</strong> is a dedicated security chip that generates and stores cryptographic keys, anchoring features such as BitLocker drive encryption.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CMOS battery</b>: The CMOS battery only maintains BIOS settings and the real-time clock; it holds no cryptographic keys.</span><span class='qd'><b>Northbridge</b>: The northbridge was a chipset component for memory and graphics bus traffic, unrelated to key storage.</span><span class='qd'><b>POST card</b>: A POST card is a diagnostic tool that displays boot error codes, not a key store.</span>" },
  { id:"D3-071", domain:3, obj:"3.4", diff:"easy", q:"What setting in firmware determines which device the system attempts to start from first?", options:["CPU multiplier","Fan curve","Boot order","Secure Boot"], answer:2, explain:"<strong>Boot order</strong> (boot sequence or priority) tells firmware which device, such as an SSD or USB drive, to attempt to start from first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Secure Boot</b>: Secure Boot validates signed boot software; it does not set which device is tried first.</span><span class='qd'><b>CPU multiplier</b>: The CPU multiplier sets processor clock speed and has nothing to do with boot device selection.</span><span class='qd'><b>Fan curve</b>: A fan curve controls cooling fan speed versus temperature, unrelated to startup devices.</span>" },
  { id:"D3-072", domain:3, obj:"3.4", diff:"medium", q:"What advantage does UEFI have over legacy BIOS regarding storage?", options:["Requires a floppy disk","Limited to MBR only","Cannot boot from SSDs","Supports drives larger than 2.2 TB via GPT"], answer:3, explain:"<strong>Supports drives larger than 2.2 TB via GPT</strong> is correct because UEFI uses GPT partitioning, bypassing the 2.2 TB boot limit of legacy BIOS with MBR.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Limited to MBR only</b>: That describes legacy BIOS, not UEFI; UEFI specifically adds GPT support.</span><span class='qd'><b>Cannot boot from SSDs</b>: UEFI boots from SSDs without issue; this is false for both UEFI and BIOS.</span><span class='qd'><b>Requires a floppy disk</b>: UEFI has no floppy requirement; floppies are obsolete legacy media.</span>" },
  { id:"D3-073", domain:3, obj:"3.4", diff:"easy", q:"What term describes a CPU's ability to present each physical core as two logical processors?", options:["Multithreading","Overclocking","Virtualization","Throttling"], answer:0, explain:"<strong>Multithreading</strong> (Intel's Hyper-Threading) lets one physical core run two threads, presenting each core as two logical processors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Overclocking</b>: Overclocking raises clock frequency above stock; it does not create additional logical processors.</span><span class='qd'><b>Virtualization</b>: Virtualization lets a hypervisor run virtual machines, not split a core into two logical threads.</span><span class='qd'><b>Throttling</b>: Throttling reduces clock speed to manage heat or power, the opposite of presenting more processors.</span>" },
  { id:"D3-074", domain:3, obj:"3.4", diff:"medium", q:"A CPU has 8 physical cores and supports multithreading. How many threads can it handle simultaneously?", options:["32","16","4","8"], answer:1, explain:"<strong>16</strong> is correct because multithreading doubles thread capacity: 8 physical cores times 2 threads each equals 16 logical threads.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>4</b>: Four is fewer than the physical core count and ignores both the eight cores and the doubling.</span><span class='qd'><b>8</b>: Eight is the physical core count without multithreading; the doubling raises it to 16.</span><span class='qd'><b>32</b>: Multithreading doubles, not quadruples, so 8 cores yield 16 threads rather than 32.</span>" },
  { id:"D3-075", domain:3, obj:"3.4", diff:"hard", q:"A technician installs an LGA-style CPU. Where are the connecting pins located?", options:["Inside the heat sink","On the underside of the CPU","On the motherboard socket","On the RAM modules"], answer:2, explain:"<strong>On the motherboard socket</strong> is correct because in a Land Grid Array (LGA) design the pins are in the socket and the CPU has flat contact pads.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>On the underside of the CPU</b>: Pins on the CPU underside describe a PGA processor, not an LGA one.</span><span class='qd'><b>On the RAM modules</b>: RAM modules use edge contacts for the memory slot and have nothing to do with CPU socket pins.</span><span class='qd'><b>Inside the heat sink</b>: A heat sink only dissipates heat and contains no electrical pins.</span>" },
  { id:"D3-076", domain:3, obj:"3.4", diff:"hard", q:"Which CPU socket type places the pins on the processor itself rather than the socket?", options:["BGA","SLA","LGA","PGA"], answer:3, explain:"<strong>PGA</strong> (Pin Grid Array) places the delicate pins on the processor itself, a design AMD has used on sockets such as AM4.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LGA</b>: Land Grid Array puts the pins in the socket and flat pads on the CPU, the reverse of PGA.</span><span class='qd'><b>BGA</b>: Ball Grid Array solders the chip permanently to the board with solder balls, not removable pins on a processor.</span><span class='qd'><b>SLA</b>: SLA is not a CPU socket type; it refers to stereolithography 3D printing.</span>" },
  { id:"D3-077", domain:3, obj:"3.4", diff:"medium", q:"What thermal interface material is applied between a CPU and its heat sink to improve heat transfer?", options:["Thermal paste","Solder flux","Cooling oil","Dielectric grease"], answer:0, explain:"<strong>Thermal paste</strong> fills microscopic air gaps between the CPU lid and heat sink, improving conductive heat transfer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dielectric grease</b>: Dielectric grease insulates and seals electrical connections; it is not designed for CPU heat conduction.</span><span class='qd'><b>Solder flux</b>: Solder flux cleans metal surfaces for soldering and would not serve as a thermal interface.</span><span class='qd'><b>Cooling oil</b>: Cooling oil is used in submersion cooling baths, not as a paste between a CPU and heat sink.</span>" },
  { id:"D3-078", domain:3, obj:"3.4", diff:"medium", q:"Which cooling method circulates coolant through a closed loop with a radiator and pump?", options:["Case fan only","Liquid (AIO) cooling","Thermal throttling","Passive heat sink"], answer:1, explain:"<strong>Liquid (AIO) cooling</strong> uses a pump, tubing, and radiator to circulate coolant in a closed loop, carrying heat away more efficiently than air alone.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Passive heat sink</b>: A passive heat sink relies on metal fins and ambient airflow with no pump or coolant loop.</span><span class='qd'><b>Case fan only</b>: A case fan just moves air through the chassis and circulates no liquid coolant.</span><span class='qd'><b>Thermal throttling</b>: Thermal throttling is a protective slowdown, not a cooling mechanism with a radiator and pump.</span>" },
  { id:"D3-079", domain:3, obj:"3.4", diff:"easy", q:"What is the purpose of a heat sink on a CPU?", options:["Provide additional power","Increase clock speed","Dissipate heat away from the chip","Store BIOS settings"], answer:2, explain:"<strong>Dissipate heat away from the chip</strong> is correct because a heat sink uses metal fins to increase surface area and shed CPU heat into the air.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increase clock speed</b>: A heat sink does not raise clock speed; good cooling merely allows the CPU to sustain its rated speed.</span><span class='qd'><b>Store BIOS settings</b>: BIOS settings are kept in CMOS memory backed by a battery, not by a heat sink.</span><span class='qd'><b>Provide additional power</b>: A heat sink supplies no electrical power; it only manages heat.</span>" },
  { id:"D3-080", domain:3, obj:"3.4", diff:"easy", q:"Which expansion slot is the smallest and is often used for Wi-Fi or sound cards?", options:["PCIe x8","PCIe x16","AGP","PCIe x1"], answer:3, explain:"<strong>PCIe x1</strong> is the smallest common slot, offering a single lane that suits low-bandwidth cards like sound or wireless adapters.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PCIe x8</b>: An x8 slot is physically longer with eight lanes, more than needed for a small Wi-Fi or sound card.</span><span class='qd'><b>PCIe x16</b>: An x16 slot is the longest, used for high-bandwidth GPUs, not the smallest slot.</span><span class='qd'><b>AGP</b>: AGP is an obsolete graphics-only slot, not a small modern slot for sound or Wi-Fi cards.</span>" },
  { id:"D3-081", domain:3, obj:"3.4", diff:"hard", q:"After a CMOS battery fails, which symptom is MOST likely on the next boot?", options:["Clock resets and BIOS settings revert to default","RAM is not detected","No video at all","CPU overheats immediately"], answer:0, explain:"<strong>Clock resets and BIOS settings revert to default</strong> is correct because a dead CMOS battery loses the stored settings and real-time clock, showing the wrong date and time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>No video at all</b>: A failed CMOS battery still allows video output; the system boots but with reset settings.</span><span class='qd'><b>CPU overheats immediately</b>: CPU temperature is governed by cooling, not by the CMOS battery powering settings memory.</span><span class='qd'><b>RAM is not detected</b>: RAM detection is part of POST and is not lost when the CMOS battery dies; settings revert instead.</span>" },
  { id:"D3-082", domain:3, obj:"3.4", diff:"medium", q:"What does enabling a virtualization extension such as Intel VT-x or AMD-V in firmware allow?", options:["Higher GPU clocks","Hardware-assisted virtual machines","Disabling Secure Boot","Faster RAM timings"], answer:1, explain:"<strong>Hardware-assisted virtual machines</strong> is correct because Intel VT-x and AMD-V provide CPU-level support that lets hypervisors run VMs efficiently.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster RAM timings</b>: Memory timings are set in the memory or XMP profile, unrelated to virtualization extensions.</span><span class='qd'><b>Higher GPU clocks</b>: GPU clocks are controlled by the graphics card, not by CPU virtualization features.</span><span class='qd'><b>Disabling Secure Boot</b>: Secure Boot is a separate firmware option; virtualization extensions do not toggle it.</span>" },
  { id:"D3-083", domain:3, obj:"3.4", diff:"medium", q:"Which header type on a motherboard connects internal case USB ports?", options:["CPU power header","Front-panel power header","USB header","SATA data port"], answer:2, explain:"<strong>USB header</strong> is correct because internal USB headers on the motherboard connect to the case front-panel USB ports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Front-panel power header</b>: That header carries the power button, reset, and LED leads, not USB data.</span><span class='qd'><b>SATA data port</b>: A SATA data port connects storage drives, not case USB ports.</span><span class='qd'><b>CPU power header</b>: The CPU power header (EPS) feeds the processor and carries no USB signals.</span>" },
  { id:"D3-084", domain:3, obj:"3.4", diff:"hard", q:"A user wants to run two GPUs in parallel for gaming. Which motherboard feature is required?", options:["Single PCIe x1 slot","A second CPU socket","Onboard graphics only","Multiple PCIe x16 slots with SLI/CrossFire support"], answer:3, explain:"<strong>Multiple PCIe x16 slots with SLI/CrossFire support</strong> is correct because running two GPUs in parallel needs two full-length slots plus chipset support for SLI or CrossFire.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Single PCIe x1 slot</b>: A lone x1 slot is too small and too slow even for one gaming GPU, let alone two.</span><span class='qd'><b>A second CPU socket</b>: A second CPU socket adds processors, not the GPU slots a multi-GPU setup needs.</span><span class='qd'><b>Onboard graphics only</b>: Onboard graphics provides no discrete card capability and cannot pair two GPUs.</span>" },
  { id:"D3-085", domain:3, obj:"3.5", diff:"easy", q:"Which power connector supplies the main power to an ATX motherboard?", options:["24-pin connector","6-pin PCIe","SATA power","4-pin Molex"], answer:0, explain:"<strong>24-pin connector</strong> is correct because the 24-pin ATX connector delivers the primary power to the motherboard.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>4-pin Molex</b>: A Molex connector powers older drives and fans, not the main board.</span><span class='qd'><b>6-pin PCIe</b>: A 6-pin PCIe connector supplies supplemental power to graphics cards, not the motherboard.</span><span class='qd'><b>SATA power</b>: SATA power feeds drives with a 15-pin connector and does not power the board itself.</span>" },
  { id:"D3-086", domain:3, obj:"3.5", diff:"easy", q:"Which connector typically supplies supplemental power to the CPU?", options:["24-pin main","8-pin (EPS/CPU) connector","15-pin SATA","Molex 4-pin"], answer:1, explain:"<strong>8-pin (EPS/CPU) connector</strong> is correct because the 4+4 or 8-pin EPS connector delivers dedicated power to the CPU near the socket.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>15-pin SATA</b>: The 15-pin SATA connector powers drives, not the processor.</span><span class='qd'><b>Molex 4-pin</b>: Molex powers legacy drives and fans and is not used for CPU supplemental power.</span><span class='qd'><b>24-pin main</b>: The 24-pin connector powers the motherboard overall; the separate EPS plug feeds the CPU.</span>" },
  { id:"D3-087", domain:3, obj:"3.5", diff:"medium", q:"A high-end graphics card requires extra power. Which connector is commonly used?", options:["SATA power","Berg connector","6-pin or 8-pin PCIe","4-pin CPU fan"], answer:2, explain:"<strong>6-pin or 8-pin PCIe</strong> is correct because discrete GPUs draw supplemental power through 6-pin and 8-pin PCIe connectors from the PSU.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SATA power</b>: SATA power is for storage drives and cannot supply the high current a GPU needs.</span><span class='qd'><b>Berg connector</b>: The Berg (mini-Molex) connector powered floppy drives and is unrelated to graphics cards.</span><span class='qd'><b>4-pin CPU fan</b>: A CPU fan header only drives a cooling fan; it provides no card power.</span>" },
  { id:"D3-088", domain:3, obj:"3.5", diff:"easy", q:"What does the 80 PLUS certification indicate about a power supply?", options:["It outputs 80 watts","It has 80 connectors","It runs at 80 degrees","It meets minimum energy-efficiency standards"], answer:3, explain:"<strong>It meets minimum energy-efficiency standards</strong> is correct because 80 PLUS certifies the PSU delivers at least 80 percent efficiency at specified loads, with tiers like Bronze, Gold, and Platinum.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It outputs 80 watts</b>: 80 PLUS refers to an efficiency percentage, not a wattage rating.</span><span class='qd'><b>It has 80 connectors</b>: The 80 has nothing to do with connector count; it denotes percent efficiency.</span><span class='qd'><b>It runs at 80 degrees</b>: 80 PLUS is not a temperature spec; it measures conversion efficiency.</span>" },
  { id:"D3-089", domain:3, obj:"3.5", diff:"medium", q:"Which 80 PLUS tier is higher (more efficient): Bronze or Platinum?", options:["Platinum","Neither is rated","Bronze","They are equal"], answer:0, explain:"<strong>Platinum</strong> is correct because the 80 PLUS tiers rise from White, Bronze, Silver, Gold, Platinum, to Titanium, so Platinum is more efficient than Bronze.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bronze</b>: Bronze sits near the bottom of the tier list, well below Platinum in efficiency.</span><span class='qd'><b>They are equal</b>: The tiers are distinct efficiency grades; Platinum clearly outranks Bronze.</span><span class='qd'><b>Neither is rated</b>: Both Bronze and Platinum are defined 80 PLUS tiers, so both are rated.</span>" },
  { id:"D3-090", domain:3, obj:"3.5", diff:"medium", q:"A technician is sizing a PSU for a build that draws 450 W at peak. Which wattage gives reasonable headroom?", options:["450 W","650 W","400 W","350 W"], answer:1, explain:"<strong>650 W</strong> is correct because choosing a PSU comfortably above the 450 W peak leaves headroom for efficiency, stability, and future upgrades.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>350 W</b>: 350 W is below the 450 W peak draw and would be overloaded, risking shutdowns.</span><span class='qd'><b>450 W</b>: Matching the exact peak leaves no margin, forcing the PSU to run fully loaded with no headroom.</span><span class='qd'><b>400 W</b>: 400 W is still under the 450 W peak and cannot reliably power the build.</span>" },
  { id:"D3-091", domain:3, obj:"3.5", diff:"easy", q:"Which legacy 4-pin connector was historically used to power older drives and fans?", options:["PCIe 8-pin","EPS 8-pin","Molex","SATA power"], answer:2, explain:"<strong>Molex</strong> is correct because the 4-pin Molex connector historically powered older IDE drives, fans, and accessories.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SATA power</b>: SATA power is the modern 15-pin connector for SATA drives, not the legacy 4-pin standard.</span><span class='qd'><b>PCIe 8-pin</b>: The 8-pin PCIe connector supplies graphics cards and is not a legacy drive connector.</span><span class='qd'><b>EPS 8-pin</b>: The EPS 8-pin powers the CPU, not older drives and fans.</span>" },
  { id:"D3-092", domain:3, obj:"3.5", diff:"medium", q:"Which connector provides power to SATA hard drives and SSDs?", options:["6-pin PCIe","24-pin ATX","4-pin Molex","15-pin SATA power"], answer:3, explain:"<strong>15-pin SATA power</strong> is correct because SATA hard drives and SSDs draw power through the flat 15-pin SATA power connector.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>4-pin Molex</b>: Molex powered older IDE drives and is not the standard connector for SATA storage.</span><span class='qd'><b>6-pin PCIe</b>: The 6-pin PCIe connector feeds graphics cards, not SATA drives.</span><span class='qd'><b>24-pin ATX</b>: The 24-pin ATX connector powers the motherboard, not individual drives.</span>" },
  { id:"D3-093", domain:3, obj:"3.5", diff:"hard", q:"A modular power supply differs from a non-modular unit MAINLY in that it allows what?", options:["Detachable cables to reduce clutter","Built-in UPS function","Higher voltage output","Automatic overclocking"], answer:0, explain:"<strong>Detachable cables to reduce clutter</strong> is correct because a modular PSU lets you attach only the cables you need, improving airflow and cable management.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Higher voltage output</b>: Modularity does not change output voltages; rails are the same as on non-modular units.</span><span class='qd'><b>Automatic overclocking</b>: A PSU does not overclock anything; that is a CPU or BIOS function.</span><span class='qd'><b>Built-in UPS function</b>: Modular PSUs have no battery backup; a UPS is a separate device.</span>" },
  { id:"D3-094", domain:3, obj:"3.5", diff:"hard", q:"A PC in a region with 120 V mains is moved to a 230 V country. The PSU has a manual voltage switch set to 115. What should the technician do FIRST?", options:["Add a second PSU","Set the switch to 230 before powering on","Leave it; it auto-adjusts","Replace the motherboard"], answer:1, explain:"<strong>Set the switch to 230 before powering on</strong> is correct because a PSU with a manual input selector must match the local mains, or the wrong setting can damage the unit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Leave it; it auto-adjusts</b>: A manual selector does not auto-switch; only auto-ranging PSUs adjust on their own.</span><span class='qd'><b>Replace the motherboard</b>: The motherboard is unaffected; the issue is the PSU input voltage setting.</span><span class='qd'><b>Add a second PSU</b>: A second PSU does nothing for input voltage; the existing switch simply must be set correctly.</span>" },
  { id:"D3-095", domain:3, obj:"3.5", diff:"medium", q:"What is the primary function of a PC power supply unit?", options:["Cool the CPU","Manage boot order","Convert AC mains to regulated DC voltages","Store user data"], answer:2, explain:"<strong>Convert AC mains to regulated DC voltages</strong> is correct because the PSU transforms wall AC into the regulated DC rails such as +12 V, +5 V, and +3.3 V that components need.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Store user data</b>: Data storage is the job of drives, not the power supply.</span><span class='qd'><b>Cool the CPU</b>: Cooling is handled by heat sinks and fans, not the PSU.</span><span class='qd'><b>Manage boot order</b>: Boot order is a firmware setting, unrelated to power conversion.</span>" },
  { id:"D3-096", domain:3, obj:"3.5", diff:"medium", q:"Which voltage rail is most heavily used by modern CPUs and GPUs?", options:["-12 V","+3.3 V","+5 V","+12 V"], answer:3, explain:"<strong>+12 V</strong> is correct because the +12 V rail supplies the bulk of power to demanding components like CPUs and GPUs in modern systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>+3.3 V</b>: The +3.3 V rail powers lighter loads such as RAM and some chipset logic, not the heaviest draw.</span><span class='qd'><b>+5 V</b>: The +5 V rail feeds drives and USB and older logic, far less than the +12 V demand of CPUs and GPUs.</span><span class='qd'><b>-12 V</b>: The -12 V rail is a low-current legacy rail used for some serial circuits, not main component power.</span>" },
  { id:"D3-097", domain:3, obj:"3.5", diff:"hard", q:"A system randomly shuts down under heavy gaming load but runs fine when idle. Which is the MOST likely cause?", options:["Undersized or failing power supply","Failing CMOS battery","Wrong boot order","Disabled Secure Boot"], answer:0, explain:"<strong>Undersized or failing power supply</strong> is correct because shutdowns only under heavy load point to a PSU that cannot deliver enough stable power or is overheating.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing CMOS battery</b>: A weak CMOS battery resets BIOS settings and the clock; it does not cause load-dependent shutdowns.</span><span class='qd'><b>Wrong boot order</b>: Incorrect boot order affects startup device selection, not stability under gaming load.</span><span class='qd'><b>Disabled Secure Boot</b>: Secure Boot status governs signed-code checks at boot and has no effect on runtime power stability.</span>" },
  { id:"D3-098", domain:3, obj:"3.5", diff:"easy", q:"What unit measures the total power a PSU can deliver?", options:["Amps","Watts","Ohms","Volts"], answer:1, explain:"<strong>Watts</strong> is correct because a PSU's total deliverable power is rated in watts, the product of voltage and current.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Volts</b>: Volts measure electrical potential of a rail, not the total power capacity.</span><span class='qd'><b>Amps</b>: Amps measure current on a given rail, one factor in power but not the total figure.</span><span class='qd'><b>Ohms</b>: Ohms measure resistance, which is unrelated to a PSU's power output rating.</span>" },
  { id:"D3-099", domain:3, obj:"3.6", diff:"easy", q:"Which printer type uses heat to fuse toner powder onto paper?", options:["Thermal","Inkjet","Laser","Impact"], answer:2, explain:"<strong>Laser</strong> is correct because laser printers use a heated fuser assembly to apply heat and pressure that bonds toner powder to the page.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Inkjet</b>: Inkjet printers spray liquid ink and use no toner or fuser heat.</span><span class='qd'><b>Impact</b>: Impact printers strike an inked ribbon against paper and do not fuse toner.</span><span class='qd'><b>Thermal</b>: Thermal printers heat special paper directly; they do not fuse toner powder.</span>" },
  { id:"D3-100", domain:3, obj:"3.6", diff:"easy", q:"Which printer type sprays liquid ink droplets onto paper?", options:["Laser","Impact","3D","Inkjet"], answer:3, explain:"<strong>Inkjet</strong> is correct because inkjet printers form images by spraying tiny droplets of liquid ink from the print head onto the page.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Laser</b>: Laser printers use dry toner powder fused by heat, not sprayed liquid ink.</span><span class='qd'><b>Impact</b>: Impact printers strike a ribbon to mark paper rather than spraying ink droplets.</span><span class='qd'><b>3D</b>: A 3D printer deposits melted filament to build objects, not ink droplets on paper.</span>" },
  { id:"D3-101", domain:3, obj:"3.6", diff:"medium", q:"Which printer type is commonly used to print multipart carbon forms because it strikes the paper?", options:["Impact (dot matrix)","Thermal","Laser","Inkjet"], answer:0, explain:"<strong>Impact (dot matrix)</strong> is correct because its print head physically strikes a ribbon against the paper, letting the impact carry through multipart carbon forms.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Laser</b>: A laser printer fuses toner with no striking action, so it cannot mark multiple carbon copies at once.</span><span class='qd'><b>Inkjet</b>: An inkjet sprays ink and applies no pressure to imprint through carbon layers.</span><span class='qd'><b>Thermal</b>: Thermal printers use heat on special paper and cannot print through multipart forms.</span>" },
  { id:"D3-102", domain:3, obj:"3.6", diff:"medium", q:"Which printer technology is widely used for receipts and uses heat-sensitive paper?", options:["Inkjet","Thermal","Laser","Impact"], answer:1, explain:"<strong>Thermal</strong> is correct because direct thermal printers heat special heat-sensitive paper to form text, common in receipt printers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Laser</b>: Laser printers fuse toner and do not rely on heat-sensitive paper for receipts.</span><span class='qd'><b>Impact</b>: Impact printers strike a ribbon and do not use heat-sensitive paper.</span><span class='qd'><b>Inkjet</b>: Inkjet printers spray liquid ink rather than darkening thermal paper with heat.</span>" },
  { id:"D3-103", domain:3, obj:"3.6", diff:"medium", q:"Which device builds physical objects layer by layer from filament?", options:["Impact printer","Laser printer","3D printer","Plotter"], answer:2, explain:"<strong>3D printer</strong> is correct because it constructs objects additively, depositing material such as melted filament layer by layer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Laser printer</b>: A laser printer produces flat 2D pages with toner, not three-dimensional objects.</span><span class='qd'><b>Plotter</b>: A plotter draws 2D vector line art with pens and does not build physical objects.</span><span class='qd'><b>Impact printer</b>: An impact printer marks flat paper with a ribbon and cannot build layered objects.</span>" },
  { id:"D3-104", domain:3, obj:"3.6", diff:"hard", q:"What is the correct order of the FIRST three steps in the laser printing process?", options:["Exposing, Charging, Developing","Cleaning, Charging, Exposing","Charging, Exposing, Developing","Processing, Charging, Exposing"], answer:3, explain:"<strong>Processing, Charging, Exposing</strong> is correct because the seven-step laser process begins with Processing, then Charging, then Exposing (writing) the latent image.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Charging, Exposing, Developing</b>: This skips the initial Processing step and shifts the sequence forward.</span><span class='qd'><b>Exposing, Charging, Developing</b>: Exposing cannot come before Charging, since the drum must be charged before the laser writes.</span><span class='qd'><b>Cleaning, Charging, Exposing</b>: Cleaning is the final step, not the first; the cycle starts with Processing.</span>" },
  { id:"D3-105", domain:3, obj:"3.6", diff:"hard", q:"In the laser printing process, which step immediately follows Exposing (writing)?", options:["Developing","Transferring","Cleaning","Fusing"], answer:0, explain:"<strong>Developing</strong> is correct because after Exposing the latent image, the Developing step applies toner to the charged areas of the drum.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fusing</b>: Fusing bonds toner to paper and occurs later, after Developing and Transferring.</span><span class='qd'><b>Transferring</b>: Transferring moves toner to paper and comes after Developing, not immediately after Exposing.</span><span class='qd'><b>Cleaning</b>: Cleaning is the last step of the cycle, not the one right after Exposing.</span>" },
  { id:"D3-106", domain:3, obj:"3.6", diff:"hard", q:"Which laser printing step uses heat and pressure to permanently bond toner to paper?", options:["Charging","Fusing","Developing","Transferring"], answer:1, explain:"<strong>Fusing</strong> is correct because the fuser applies heat and pressure to melt and bond toner permanently onto the paper.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Transferring</b>: Transferring moves toner from drum to paper but does not melt it onto the page.</span><span class='qd'><b>Charging</b>: Charging applies a uniform charge to the drum and involves no heat or bonding.</span><span class='qd'><b>Developing</b>: Developing coats the latent image with toner; it does not fuse toner to paper.</span>" },
  { id:"D3-107", domain:3, obj:"3.6", diff:"hard", q:"What is the LAST step in the seven-step laser printing process?", options:["Transferring","Fusing","Cleaning","Charging"], answer:2, explain:"<strong>Cleaning</strong> is correct because it is the final step, removing residual toner from the drum and neutralizing leftover charge before the next cycle.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Transferring</b>: Transferring occurs in the middle of the cycle, moving toner to paper, not at the end.</span><span class='qd'><b>Fusing</b>: Fusing is the sixth step that bonds toner; Cleaning follows it as the seventh.</span><span class='qd'><b>Charging</b>: Charging is an early step preparing the drum, not the last step.</span>" },
  { id:"D3-108", domain:3, obj:"3.6", diff:"hard", q:"Place the seven laser steps: Processing, Charging, Exposing, Developing, Transferring, Fusing, and which final step?", options:["Priming","Buffering","Calibrating","Cleaning"], answer:3, explain:"<strong>Cleaning</strong> is correct because the complete order ends Processing, Charging, Exposing, Developing, Transferring, Fusing, and finally Cleaning.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Calibrating</b>: Calibrating is not one of the seven defined laser steps.</span><span class='qd'><b>Priming</b>: Priming is not part of the laser printing sequence; the final step is Cleaning.</span><span class='qd'><b>Buffering</b>: Buffering refers to holding data in memory, not a step in the laser imaging process.</span>" },
  { id:"D3-109", domain:3, obj:"3.6", diff:"medium", q:"During which laser step is the toner moved from the drum onto the paper?", options:["Transferring","Fusing","Charging","Developing"], answer:0, explain:"<strong>Transferring</strong> is correct because in this step the toner image is moved from the photosensitive drum onto the paper.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Charging</b>: Charging applies a uniform charge to the drum and moves no toner to paper.</span><span class='qd'><b>Developing</b>: Developing places toner onto the drum, not onto the paper.</span><span class='qd'><b>Fusing</b>: Fusing bonds toner already on the paper; it does not move toner from the drum.</span>" },
  { id:"D3-110", domain:3, obj:"3.6", diff:"medium", q:"What is the function of a multifunction device (MFD/MFP)?", options:["Encrypt documents","Combine printing, scanning, copying, and faxing","Print only","Scan only"], answer:1, explain:"<strong>Combine printing, scanning, copying, and faxing</strong> is correct because a multifunction device integrates these capabilities into one unit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Print only</b>: An MFD does far more than print; print-only describes a basic single-function printer.</span><span class='qd'><b>Scan only</b>: Scan-only describes a standalone scanner, not a multifunction device.</span><span class='qd'><b>Encrypt documents</b>: Encryption is a software security function, not the defining role of an MFD.</span>" },
  { id:"D3-111", domain:3, obj:"3.6", diff:"medium", q:"Which laser printing step applies a uniform charge to the photosensitive drum?", options:["Transferring","Fusing","Charging","Exposing"], answer:2, explain:"<strong>Charging</strong> is correct because the charging step uses the primary charge roller or corona wire to apply a uniform charge across the drum surface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Exposing</b>: Exposing uses the laser to write the latent image after the drum is already charged.</span><span class='qd'><b>Transferring</b>: Transferring moves toner to paper and does not charge the drum.</span><span class='qd'><b>Fusing</b>: Fusing bonds toner to paper with heat and applies no charge to the drum.</span>" },
  { id:"D3-112", domain:3, obj:"3.6", diff:"easy", q:"Which printer type is best known for silent, high-quality photo output at home?", options:["Impact","Thermal receipt","Dot matrix","Inkjet"], answer:3, explain:"<strong>Inkjet</strong> is correct because inkjet printers run quietly and produce good color, making them popular for home photo printing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Impact</b>: Impact printers are noisy and low-resolution, poorly suited to quality photos.</span><span class='qd'><b>Thermal receipt</b>: Thermal receipt printers produce monochrome text on narrow heat-sensitive rolls, not color photos.</span><span class='qd'><b>Dot matrix</b>: Dot matrix is a loud impact technology that cannot deliver photo-quality color output.</span>" },
  { id:"D3-113", domain:3, obj:"3.6", diff:"medium", q:"A laser printer produces a repeating mark every few inches down the page. Which component is MOST likely at fault?", options:["The imaging drum","Network cable","Paper tray","Fuser only"], answer:0, explain:"<strong>The imaging drum</strong> is correct because a defect on the rotating drum produces a repeating mark at intervals equal to the drum's circumference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fuser only</b>: A fuser fault more often causes smearing or repeated marks at a different spacing tied to roller size, but evenly repeating defects across the page point to the drum.</span><span class='qd'><b>Network cable</b>: A network cable affects data transfer, not the physical pattern printed on the page.</span><span class='qd'><b>Paper tray</b>: A paper tray feeds sheets and does not create repeating image defects.</span>" },
  { id:"D3-114", domain:3, obj:"3.6", diff:"hard", q:"A laser printout smears easily when rubbed. Which component is the MOST likely cause?", options:["Transfer belt","Fuser assembly","Pickup roller","Charge roller"], answer:1, explain:"<strong>Fuser assembly</strong> is correct because if toner is not bonded the fuser, which melts toner onto paper, is failing or not reaching temperature.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Charge roller</b>: The charge roller prepares the drum surface and does not bond toner to paper.</span><span class='qd'><b>Transfer belt</b>: The transfer belt moves toner to the page but does not fuse it; smearing means the fuser failed afterward.</span><span class='qd'><b>Pickup roller</b>: The pickup roller only feeds paper and has no role in bonding toner.</span>" },
  { id:"D3-115", domain:3, obj:"3.6", diff:"medium", q:"Which step in the laser process erases the previous image and prepares the drum for reuse?", options:["Processing","Developing","Cleaning","Transferring"], answer:2, explain:"<strong>Cleaning</strong> is correct because the cleaning step removes leftover toner and resets the drum charge, readying it for the next page.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Processing</b>: Processing prepares the print data at the start and does not erase the drum image.</span><span class='qd'><b>Developing</b>: Developing applies toner to the drum rather than erasing the previous image.</span><span class='qd'><b>Transferring</b>: Transferring moves toner to paper and does not clean or reset the drum.</span>" },
  { id:"D3-116", domain:3, obj:"3.7", diff:"easy", q:"Which consumable does a laser printer use to form images?", options:["Thermal wax","Filament","Liquid ink","Toner powder"], answer:3, explain:"<strong>Toner powder</strong> is correct because laser printers use toner, a fine powder of plastic and pigment, fused onto paper.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Liquid ink</b>: Liquid ink is the consumable for inkjet printers, not laser.</span><span class='qd'><b>Thermal wax</b>: Thermal wax ribbon is used by thermal transfer printers, not laser printers.</span><span class='qd'><b>Filament</b>: Filament is the material a 3D printer melts to build objects, not a laser consumable.</span>" },
  { id:"D3-117", domain:3, obj:"3.7", diff:"easy", q:"Which consumable does an inkjet printer rely on?", options:["Ink cartridge","Toner cartridge","Ribbon","Drum unit"], answer:0, explain:"<strong>Ink cartridge</strong> is correct because inkjet printers use liquid ink cartridges, often separate black and color tanks or a combined unit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner cartridge</b>: Toner is a powder used by laser printers, not by inkjets.</span><span class='qd'><b>Ribbon</b>: A ribbon is the consumable for impact printers, not inkjets.</span><span class='qd'><b>Drum unit</b>: A drum unit is a laser printer component, not an inkjet consumable.</span>" },
  { id:"D3-118", domain:3, obj:"3.7", diff:"easy", q:"Which consumable does an impact (dot-matrix) printer require?", options:["Thermal paper","Ink ribbon","Toner","Filament"], answer:1, explain:"<strong>Ink ribbon</strong> is correct because impact printers use an inked ribbon that the print head strikes to mark the paper.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner</b>: Toner is the powder consumable of laser printers, not impact printers.</span><span class='qd'><b>Filament</b>: Filament is consumed by 3D printers, not by impact printers.</span><span class='qd'><b>Thermal paper</b>: Thermal paper is used by thermal printers; impact printers strike a ribbon on plain paper.</span>" },
  { id:"D3-119", domain:3, obj:"3.7", diff:"medium", q:"Which consumable is unique to a 3D printer?", options:["Toner","Ribbon","Filament","Wax stick"], answer:2, explain:"<strong>Filament</strong> is correct because many 3D printers consume thermoplastic filament such as PLA or ABS that is melted and deposited to build objects.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner</b>: Toner is a laser printer consumable and is not used by 3D printers.</span><span class='qd'><b>Ribbon</b>: A ribbon is used by impact printers, not 3D printers.</span><span class='qd'><b>Wax stick</b>: A wax stick relates to thermal or solid-ink printing, not 3D filament printing.</span>" },
  { id:"D3-120", domain:3, obj:"3.7", diff:"medium", q:"In a laser printer, what is the role of the imaging drum?", options:["Feeds paper","Stores ink","Heats the paper","Holds the electrostatic latent image"], answer:3, explain:"<strong>Holds the electrostatic latent image</strong> is correct because the photosensitive drum carries the electrostatic latent image to which toner adheres before transfer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stores ink</b>: The drum holds no ink; ink is an inkjet consumable and the drum works with toner.</span><span class='qd'><b>Heats the paper</b>: Heating the paper is the fuser's job, not the drum's.</span><span class='qd'><b>Feeds paper</b>: Paper feeding is handled by pickup rollers, not the imaging drum.</span>" },
  { id:"D3-121", domain:3, obj:"3.7", diff:"medium", q:"Which consumable does a thermal printer typically use?", options:["Heat-sensitive paper (or wax ribbon)","Ink ribbon","Filament spool","Toner cartridge"], answer:0, explain:"<strong>Heat-sensitive paper (or wax ribbon)</strong> is correct because direct thermal printers use heat-sensitive paper while thermal transfer models use a wax or resin ribbon.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner cartridge</b>: Toner is a laser consumable, not a thermal printer supply.</span><span class='qd'><b>Ink ribbon</b>: An ink ribbon is the impact printer consumable, distinct from thermal media.</span><span class='qd'><b>Filament spool</b>: A filament spool feeds a 3D printer and is unrelated to thermal printing.</span>" },
  { id:"D3-122", domain:3, obj:"3.7", diff:"hard", q:"A laser print shows faint, washed-out output across the whole page. Which consumable is MOST likely low?", options:["Paper supply","Toner cartridge","Ink ribbon","Filament"], answer:1, explain:"<strong>Toner cartridge</strong> is correct because uniformly faded laser output across the whole page usually indicates the toner cartridge is running low.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Paper supply</b>: A low paper supply causes feed errors, not faded print on the pages that do print.</span><span class='qd'><b>Ink ribbon</b>: An ink ribbon belongs to impact printers, not a laser printer.</span><span class='qd'><b>Filament</b>: Filament is a 3D printing consumable and has nothing to do with laser print density.</span>" },
  { id:"D3-123", domain:3, obj:"3.7", diff:"medium", q:"Why should toner cartridges be disposed of through a recycling or take-back program?", options:["They are radioactive","They are biodegradable instantly","They contain plastics and residual toner that should not go to landfill","They contain flammable gas"], answer:2, explain:"<strong>They contain plastics and residual toner that should not go to landfill</strong> is correct because cartridges hold plastics and chemical residues best handled by take-back or recycling programs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They contain flammable gas</b>: Toner cartridges hold powder and plastic, not pressurized flammable gas.</span><span class='qd'><b>They are radioactive</b>: Toner cartridges are not radioactive; that is not why they are recycled.</span><span class='qd'><b>They are biodegradable instantly</b>: Cartridge plastics do not break down quickly, which is precisely why they need recycling.</span>" },
  { id:"D3-124", domain:3, obj:"3.7", diff:"hard", q:"An inkjet prints with horizontal white lines or missing colors. After checking ink levels, what consumable-related action should be tried FIRST?", options:["Replace the fuser","Swap the imaging drum","Reload filament","Run the print-head cleaning/nozzle check"], answer:3, explain:"<strong>Run the print-head cleaning/nozzle check</strong> is correct because banding or missing colors on inkjets usually comes from clogged nozzles, so cleaning the head is the first step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the fuser</b>: A fuser is a laser printer part; inkjets have no fuser to replace.</span><span class='qd'><b>Swap the imaging drum</b>: An imaging drum is a laser component, irrelevant to inkjet banding.</span><span class='qd'><b>Reload filament</b>: Filament belongs to a 3D printer and has nothing to do with inkjet output.</span>" },
  { id:"D3-125", domain:3, obj:"3.7", diff:"medium", q:"Which statement correctly pairs a printer type with its consumable?", options:["Impact uses an ink ribbon","Thermal uses filament","Laser uses ribbon","Inkjet uses toner"], answer:0, explain:"<strong>Impact uses an ink ribbon</strong> is correct because impact (dot-matrix) printers strike an inked ribbon, the proper pairing here.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Laser uses ribbon</b>: Laser printers use toner powder, not a ribbon.</span><span class='qd'><b>Inkjet uses toner</b>: Inkjet printers use liquid ink cartridges, not toner.</span><span class='qd'><b>Thermal uses filament</b>: Thermal printers use heat-sensitive paper or wax ribbon; filament belongs to 3D printers.</span>" }
);
APLUS1.questions.push(
{ id:"D4-001", domain:4, obj:"4.1", diff:"easy", q:"A company rents fully managed email and office productivity applications that users access entirely through a web browser. Which cloud service model is this?", options:["DaaS","SaaS","IaaS","PaaS"], answer:1, explain:"<strong>SaaS</strong> delivers complete, ready-to-use applications over the internet such as Microsoft 365 or Google Workspace, with the provider managing everything beneath the app and users accessing it through a browser.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS</b>: Infrastructure as a Service rents raw virtual machines, storage, and networking that the customer must build apps on top of, not a finished email application.</span><span class='qd'><b>PaaS</b>: Platform as a Service supplies a development runtime and tools for building apps, not the ready-made productivity software end users simply log in to use.</span><span class='qd'><b>DaaS</b>: Desktop as a Service streams a managed virtual desktop OS to endpoints, not a single browser-based office application suite.</span>" },
{ id:"D4-002", domain:4, obj:"4.1", diff:"easy", q:"Which cloud service model provides raw compute, storage, and networking resources such as virtual machines, leaving the customer to install and manage the operating system?", options:["SaaS","PaaS","IaaS","XaaS"], answer:2, explain:"<strong>IaaS</strong> provides virtualized hardware (compute, storage, and network) such as virtual machines, while the customer installs and manages the guest operating system and everything above it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SaaS</b>: Software as a Service delivers a finished application with no OS for the customer to install or manage.</span><span class='qd'><b>PaaS</b>: Platform as a Service abstracts away the OS and servers so the customer only deploys code, which contradicts the scenario where the customer manages the OS.</span><span class='qd'><b>XaaS</b>: XaaS is a broad umbrella term for any as-a-service model, not the specific raw-infrastructure offering described here.</span>" },
{ id:"D4-003", domain:4, obj:"4.1", diff:"medium", q:"A development team wants a managed environment with a runtime, database, and tools so they can deploy code without configuring the underlying servers or OS. Which model fits BEST?", options:["IaaS","SaaS","Private cloud","PaaS"], answer:3, explain:"<strong>PaaS</strong> supplies a managed development and deployment platform (runtime, middleware, and databases) so developers focus only on their code without configuring servers or the OS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS</b>: Infrastructure as a Service still requires the team to install and manage the OS, runtime, and database themselves, which is exactly what they want to avoid.</span><span class='qd'><b>SaaS</b>: Software as a Service is a finished application for end users, not a platform for the team to deploy their own custom code.</span><span class='qd'><b>Private cloud</b>: Private cloud is a deployment model describing who owns the infrastructure, not a managed runtime-and-tools service model.</span>" },
{ id:"D4-004", domain:4, obj:"4.1", diff:"easy", q:"Which deployment model uses cloud infrastructure that is owned and operated by a third party and shared among many unrelated organizations over the internet?", options:["Public cloud","Hybrid cloud","Community cloud","Private cloud"], answer:0, explain:"<strong>Public cloud</strong> is owned and operated by a provider such as AWS or Azure, and its resources are shared among many unrelated tenants over the internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Private cloud</b>: A private cloud is dedicated to a single organization, not shared among many unrelated companies.</span><span class='qd'><b>Hybrid cloud</b>: A hybrid cloud combines private and public resources, so it is not purely third-party shared infrastructure.</span><span class='qd'><b>Community cloud</b>: A community cloud is shared only among a limited set of organizations with common concerns, not among many unrelated tenants.</span>" },
{ id:"D4-005", domain:4, obj:"4.1", diff:"easy", q:"A bank builds cloud infrastructure used exclusively by its own organization and hosted in its own data center. This is an example of which deployment model?", options:["Hybrid cloud","Private cloud","Public cloud","Community cloud"], answer:1, explain:"<strong>Private cloud</strong> is dedicated to a single organization and hosted on infrastructure it controls, offering greater control and security for sensitive data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud</b>: A public cloud shares infrastructure among many tenants over the internet, which is the opposite of exclusive single-organization use.</span><span class='qd'><b>Community cloud</b>: A community cloud is shared by several organizations with common concerns, not used exclusively by one bank.</span><span class='qd'><b>Hybrid cloud</b>: A hybrid cloud mixes private and public resources, but this scenario describes infrastructure used solely in-house with no public component.</span>" },
{ id:"D4-006", domain:4, obj:"4.1", diff:"medium", q:"An organization keeps sensitive records in its own private cloud but offloads seasonal traffic spikes to a public cloud provider. Which deployment model is this?", options:["Public cloud","Private cloud","Hybrid cloud","Community cloud"], answer:2, explain:"<strong>Hybrid cloud</strong> combines private and public cloud resources so workloads can move between them, here offloading seasonal spikes to the public cloud in a pattern often called cloud bursting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Community cloud</b>: A community cloud is shared among organizations with common concerns and does not describe mixing one company's private and public resources.</span><span class='qd'><b>Public cloud</b>: A public cloud alone would not keep the sensitive records in a dedicated private environment as described.</span><span class='qd'><b>Private cloud</b>: A private cloud alone cannot offload bursts to a public provider, which is the defining behavior in the scenario.</span>" },
{ id:"D4-007", domain:4, obj:"4.1", diff:"medium", q:"Several hospitals that share the same regulatory requirements jointly fund and use a single cloud infrastructure. Which deployment model BEST describes this?", options:["Public cloud","Hybrid cloud","Private cloud","Community cloud"], answer:3, explain:"<strong>Community cloud</strong> is shared by multiple organizations with common concerns such as the same regulatory requirements, pooling resources for mutual benefit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud</b>: A public cloud serves the general public and many unrelated tenants, not a closed group of hospitals jointly funding shared infrastructure.</span><span class='qd'><b>Hybrid cloud</b>: A hybrid cloud blends private and public for one organization, not a single infrastructure co-funded by peers with shared compliance needs.</span><span class='qd'><b>Private cloud</b>: A private cloud is dedicated to one organization, whereas this is jointly used by several hospitals.</span>" },
{ id:"D4-008", domain:4, obj:"4.1", diff:"medium", q:"Which cloud characteristic allows a system to automatically add or remove resources within minutes to match a sudden change in demand?", options:["Rapid elasticity","Measured service","High availability","Resource pooling"], answer:0, explain:"<strong>Rapid elasticity</strong> is the automatic, near-instant scaling of resources up or down within minutes to match sudden changes in demand.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Measured service</b>: Measured service meters and bills consumption but does not itself add or remove resources.</span><span class='qd'><b>High availability</b>: High availability uses redundancy and failover to prevent downtime, not to scale capacity to demand.</span><span class='qd'><b>Resource pooling</b>: Resource pooling shares physical hardware among tenants but does not describe the dynamic scaling to match a spike.</span>" },
{ id:"D4-009", domain:4, obj:"4.1", diff:"hard", q:"A manager confuses two terms. Which statement BEST distinguishes scalability from rapid elasticity?", options:["They are identical concepts with different vendor names","Scalability is the planned ability to grow capacity over time; elasticity is the automatic, dynamic adjustment to real-time demand","Scalability applies only to storage; elasticity applies only to CPU","Scalability is automatic; elasticity is a manual planned growth"], answer:1, explain:"<strong>Scalability is the planned ability to grow capacity over time; elasticity is the automatic, dynamic adjustment to real-time demand</strong>, capturing the long-term-versus-immediate distinction correctly.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Scalability is automatic; elasticity is a manual planned growth</b>: This reverses the concepts, as elasticity is the automatic one and scalability is the planned growth.</span><span class='qd'><b>They are identical concepts with different vendor names</b>: They are distinct concepts, since one is planned capacity growth and the other is automatic real-time adjustment.</span><span class='qd'><b>Scalability applies only to storage; elasticity applies only to CPU</b>: Both concepts apply broadly to compute, storage, and other resources, not to one resource type each.</span>" },
{ id:"D4-010", domain:4, obj:"4.1", diff:"medium", q:"A cloud bill itemizes charges based on the exact amount of storage and compute hours consumed. Which cloud characteristic does this reflect?", options:["Resource pooling","On-demand self-service","Measured (metered) service","Rapid elasticity"], answer:2, explain:"<strong>Measured (metered) service</strong> tracks resource usage so customers are billed only for the exact storage and compute they consume, a pay-as-you-go model.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rapid elasticity</b>: Rapid elasticity scales resources to demand but does not itself describe usage-based billing.</span><span class='qd'><b>Resource pooling</b>: Resource pooling shares physical hardware among tenants and is unrelated to itemized consumption charges.</span><span class='qd'><b>On-demand self-service</b>: On-demand self-service lets customers provision resources without provider staff, but it is not about metering usage for billing.</span>" },
{ id:"D4-011", domain:4, obj:"4.1", diff:"medium", q:"A cloud provider designs its service across multiple data centers so that if one fails, another instantly takes over with no downtime. Which concept is this?", options:["Rapid elasticity","Metered service","File synchronization","High availability"], answer:3, explain:"<strong>High availability</strong> uses redundancy and failover across multiple data centers so services keep running with minimal downtime even when a component fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rapid elasticity</b>: Rapid elasticity scales capacity to match demand, not to provide failover when a data center fails.</span><span class='qd'><b>Metered service</b>: Metered service bills for consumption and has nothing to do with redundancy or failover.</span><span class='qd'><b>File synchronization</b>: File synchronization keeps file copies consistent across devices, not to maintain service uptime during a failure.</span>" },
{ id:"D4-012", domain:4, obj:"4.1", diff:"easy", q:"Which cloud feature automatically keeps a user's files identical across their laptop, phone, and the cloud so an edit on one device appears on the others?", options:["File synchronization","Resource pooling","Measured service","Sandboxing"], answer:0, explain:"<strong>File synchronization</strong> keeps copies of files consistent across multiple devices and the cloud, updating all of them whenever one changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Resource pooling</b>: Resource pooling shares provider hardware among tenants and does not keep a user's files identical across devices.</span><span class='qd'><b>Measured service</b>: Measured service meters consumption for billing, unrelated to propagating edits across devices.</span><span class='qd'><b>Sandboxing</b>: Sandboxing isolates untrusted software in a contained environment, not synchronizing files between a laptop, phone, and cloud.</span>" },
{ id:"D4-013", domain:4, obj:"4.1", diff:"easy", q:"Which of the following is a well-known example of an IaaS offering?", options:["Google Docs","Amazon EC2","Microsoft 365","Salesforce CRM"], answer:1, explain:"<strong>Amazon EC2</strong> provides virtual machines (raw compute infrastructure) that the customer manages, making it a classic IaaS product.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Microsoft 365</b>: Microsoft 365 is a finished productivity application suite delivered as SaaS, not raw infrastructure.</span><span class='qd'><b>Salesforce CRM</b>: Salesforce CRM is a ready-to-use SaaS application accessed by login, not provisioned infrastructure.</span><span class='qd'><b>Google Docs</b>: Google Docs is a browser-based SaaS application, not virtual machines or raw compute.</span>" },
{ id:"D4-014", domain:4, obj:"4.1", diff:"medium", q:"Which pairing of a product to its cloud service model is CORRECT?", options:["Salesforce - IaaS","Dropbox - PaaS","Microsoft Azure App Service - PaaS","Amazon EC2 - SaaS"], answer:2, explain:"<strong>Microsoft Azure App Service - PaaS</strong> is correct because App Service hosts and runs apps without the customer managing the underlying servers or OS, the hallmark of Platform as a Service.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Salesforce - IaaS</b>: Salesforce is a finished SaaS application, not raw infrastructure, so the pairing is wrong.</span><span class='qd'><b>Dropbox - PaaS</b>: Dropbox is a SaaS storage and sync application for end users, not a development platform.</span><span class='qd'><b>Amazon EC2 - SaaS</b>: EC2 provides virtual machines as IaaS, not a finished SaaS application.</span>" },
{ id:"D4-015", domain:4, obj:"4.1", diff:"hard", q:"A startup wants the LEAST responsibility for patching operating systems and maintaining servers while still running its custom-written application. Which model should it choose FIRST?", options:["IaaS","Bare-metal colocation","On-premises private cloud","PaaS"], answer:3, explain:"<strong>PaaS</strong> is best because the provider manages the OS and runtime while the customer only deploys its custom code, minimizing patching and server maintenance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>On-premises private cloud</b>: An on-premises private cloud makes the organization responsible for all hardware, OS patching, and maintenance, the maximum burden.</span><span class='qd'><b>IaaS</b>: With IaaS the customer still installs and patches the guest OS and maintains servers, which is more responsibility than PaaS.</span><span class='qd'><b>Bare-metal colocation</b>: Colocation gives the customer full responsibility for the physical servers and their entire software stack, the heaviest maintenance load.</span>" },
{ id:"D4-016", domain:4, obj:"4.1", diff:"medium", q:"In a public cloud, which characteristic allows the provider to serve many customers from the same physical hardware while keeping each customer's data isolated?", options:["Resource pooling (multitenancy)","High availability","Rapid elasticity","Metered service"], answer:0, explain:"<strong>Resource pooling (multitenancy)</strong> lets a provider serve multiple tenants from shared physical resources while logical isolation keeps each customer's data separate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>High availability</b>: High availability is about redundancy and uptime, not serving many tenants from the same hardware.</span><span class='qd'><b>Rapid elasticity</b>: Rapid elasticity scales resources to demand and does not describe sharing hardware among isolated tenants.</span><span class='qd'><b>Metered service</b>: Metered service bills by consumption and is unrelated to multitenant hardware sharing and isolation.</span>" },
{ id:"D4-017", domain:4, obj:"4.1", diff:"medium", q:"Which capability lets a customer provision a new virtual server through a web portal without contacting the provider's staff?", options:["File synchronization","On-demand self-service","High availability","Measured service"], answer:1, explain:"<strong>On-demand self-service</strong> lets customers provision computing resources automatically through a portal or API without any human interaction with the provider.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>High availability</b>: High availability ensures uptime through redundancy and failover, not self-provisioning of new servers.</span><span class='qd'><b>Measured service</b>: Measured service meters consumption for billing and does not describe provisioning resources without staff.</span><span class='qd'><b>File synchronization</b>: File synchronization keeps files consistent across devices and has nothing to do with provisioning a virtual server.</span>" },
{ id:"D4-018", domain:4, obj:"4.1", diff:"hard", q:"A company experiences a flash sale where traffic jumps 10x for one hour, then drops to normal. Which combination of cloud characteristics MOST directly delivers cost savings here?", options:["Private cloud and community cloud","File synchronization and sandboxing","Rapid elasticity and measured service","High availability and resource pooling"], answer:2, explain:"<strong>Rapid elasticity and measured service</strong> directly deliver cost savings here because elasticity scales capacity up for the one-hour spike and back down afterward, while metered billing means you pay only for that extra hour.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>High availability and resource pooling</b>: High availability provides uptime and pooling shares hardware, but neither directly produces the pay-only-for-the-spike savings.</span><span class='qd'><b>Private cloud and community cloud</b>: These are deployment models describing ownership, not characteristics that scale and meter cost for a brief surge.</span><span class='qd'><b>File synchronization and sandboxing</b>: File sync and isolation features are irrelevant to scaling traffic capacity or billing for a flash sale.</span>" },
{ id:"D4-019", domain:4, obj:"4.1", diff:"easy", q:"What does VDI stand for in cloud and virtualization contexts?", options:["Volume Data Integration","Virtualized Device Interface","Virtual Disk Image","Virtual Desktop Infrastructure"], answer:3, explain:"<strong>Virtual Desktop Infrastructure</strong> is the correct expansion of VDI, which hosts desktop operating systems on centralized servers and streams them to user endpoints.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Virtual Disk Image</b>: A virtual disk image is a VM storage file format, not what the acronym VDI stands for.</span><span class='qd'><b>Volume Data Integration</b>: Volume Data Integration is not a recognized virtualization term and does not match the acronym.</span><span class='qd'><b>Virtualized Device Interface</b>: Virtualized Device Interface is a made-up phrase, not the standard meaning of VDI.</span>" },
{ id:"D4-020", domain:4, obj:"4.1", diff:"medium", q:"A company wants employees to access standardized Windows desktops streamed from the cloud, managed entirely by a provider on a subscription basis. Which offering fits BEST?", options:["DaaS (Desktop as a Service)","IaaS virtual machines","SaaS email","Type 2 hypervisor on each laptop"], answer:0, explain:"<strong>DaaS (Desktop as a Service)</strong> delivers cloud-hosted, standardized virtual desktops as a managed subscription, eliminating on-premises VDI infrastructure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS virtual machines</b>: IaaS provides raw VMs that the customer must build and manage into desktops, not a fully managed desktop subscription.</span><span class='qd'><b>SaaS email</b>: SaaS email is a single application, not a complete streamed Windows desktop environment.</span><span class='qd'><b>Type 2 hypervisor on each laptop</b>: A local Type 2 hypervisor runs VMs on each device and is neither cloud-hosted nor provider-managed.</span>" },
{ id:"D4-021", domain:4, obj:"4.1", diff:"hard", q:"What is the PRIMARY difference between on-premises VDI and cloud-based DaaS?", options:["DaaS cannot deliver Windows desktops","With VDI the organization owns and maintains the desktop infrastructure; with DaaS a provider hosts and manages it as a subscription","VDI requires no servers at all","VDI uses Type 2 hypervisors while DaaS uses Type 1"], answer:1, explain:"<strong>With VDI the organization owns and maintains the desktop infrastructure; with DaaS a provider hosts and manages it as a subscription</strong> correctly captures the ownership and management distinction.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VDI uses Type 2 hypervisors while DaaS uses Type 1</b>: Both typically rely on Type 1 server hypervisors, so this is not the defining difference.</span><span class='qd'><b>DaaS cannot deliver Windows desktops</b>: DaaS commonly delivers Windows desktops, so this statement is false.</span><span class='qd'><b>VDI requires no servers at all</b>: VDI is built on the organization's own servers, so it absolutely requires servers.</span>" },
{ id:"D4-022", domain:4, obj:"4.1", diff:"medium", q:"Which statement about a private cloud versus a traditional on-premises server is MOST accurate?", options:["A private cloud must be hosted by a third party","A private cloud cannot use virtualization","A private cloud adds self-service, pooling, and elasticity features on top of dedicated infrastructure","A private cloud is always cheaper than public cloud"], answer:2, explain:"<strong>A private cloud adds self-service, pooling, and elasticity features on top of dedicated infrastructure</strong>, applying cloud characteristics to hardware reserved for one organization.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A private cloud cannot use virtualization</b>: Private clouds rely heavily on virtualization to provide pooling and elasticity, so this is false.</span><span class='qd'><b>A private cloud is always cheaper than public cloud</b>: Private clouds often cost more due to dedicated hardware ownership, so cost is not guaranteed lower.</span><span class='qd'><b>A private cloud must be hosted by a third party</b>: A private cloud can be hosted in the organization's own data center, so third-party hosting is not required.</span>" },
{ id:"D4-023", domain:4, obj:"4.1", diff:"easy", q:"Which term describes a vendor offering 'anything as a service,' a broad umbrella for IaaS, PaaS, SaaS, and similar models?", options:["DaaS","VDI","HA","XaaS"], answer:3, explain:"<strong>XaaS</strong> (Anything or Everything as a Service) is the umbrella term covering the various cloud service delivery models such as IaaS, PaaS, and SaaS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DaaS</b>: DaaS refers specifically to Desktop as a Service, a single model rather than the broad umbrella.</span><span class='qd'><b>VDI</b>: VDI is Virtual Desktop Infrastructure, a technology for hosting desktops, not an as-a-service umbrella term.</span><span class='qd'><b>HA</b>: HA stands for high availability, a reliability characteristic, not a service-delivery umbrella.</span>" },
{ id:"D4-024", domain:4, obj:"4.1", diff:"medium", q:"In the IaaS model, who is typically responsible for applying operating system security patches?", options:["The customer","The cloud provider","The hardware manufacturer","No one; IaaS has no OS"], answer:0, explain:"<strong>The customer</strong> is responsible for guest OS security patches in IaaS, since the provider manages only the physical hardware and hypervisor while the customer owns everything from the OS up.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cloud provider</b>: In IaaS the provider stops at the hypervisor and does not patch the customer's guest operating systems.</span><span class='qd'><b>The hardware manufacturer</b>: The hardware vendor supplies firmware, not ongoing OS security patches for cloud guests.</span><span class='qd'><b>No one; IaaS has no OS</b>: IaaS VMs absolutely run a guest OS that must be patched, so this is false.</span>" },
{ id:"D4-025", domain:4, obj:"4.1", diff:"hard", q:"A regulated agency must guarantee that its data never resides on hardware shared with other tenants, yet still wants cloud-style elasticity. Which approach satisfies this requirement FIRST?", options:["Multitenant public IaaS","Private cloud","Community cloud shared with vendors","Public cloud SaaS"], answer:1, explain:"<strong>Private cloud</strong> satisfies the requirement first by providing dedicated, single-tenant infrastructure with no shared hardware while still delivering cloud features like elasticity and self-service.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud SaaS</b>: Public cloud SaaS runs on shared multitenant infrastructure, violating the no-shared-hardware requirement.</span><span class='qd'><b>Multitenant public IaaS</b>: By definition multitenant public IaaS places the agency's data on hardware shared with other tenants.</span><span class='qd'><b>Community cloud shared with vendors</b>: A community cloud still shares infrastructure among the participating organizations, so data could reside on shared hardware.</span>" },
{ id:"D4-026", domain:4, obj:"4.1", diff:"medium", q:"Which scenario BEST illustrates file synchronization rather than a simple backup?", options:["A nightly copy of files to tape stored offsite","A one-time archive of last year's records","A folder where edits on a phone instantly appear on a laptop and in the cloud","An image of an entire hard drive saved to a NAS"], answer:2, explain:"<strong>A folder where edits on a phone instantly appear on a laptop and in the cloud</strong> illustrates file synchronization, which continuously keeps the same files consistent and current across multiple devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A nightly copy of files to tape stored offsite</b>: This is a scheduled one-way backup, not continuous bidirectional sync across devices.</span><span class='qd'><b>A one-time archive of last year's records</b>: A one-time archive is a static point-in-time copy, the opposite of ongoing synchronization.</span><span class='qd'><b>An image of an entire hard drive saved to a NAS</b>: A drive image is a single full-disk backup, not files kept current across multiple devices.</span>" },
{ id:"D4-027", domain:4, obj:"4.1", diff:"hard", q:"An online retailer wants to keep its customer database on infrastructure it fully controls while using public cloud for its public-facing website. Which model and benefit pairing is MOST appropriate?", options:["Community cloud; shared compliance only","Private cloud for everything; maximum elasticity","Public cloud for everything; lowest cost","Hybrid cloud; sensitive data stays private while scalable web traffic uses public resources"], answer:3, explain:"<strong>Hybrid cloud; sensitive data stays private while scalable web traffic uses public resources</strong> is most appropriate because it keeps the customer database in a controlled private environment and leverages public cloud elasticity for the website.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Public cloud for everything; lowest cost</b>: Putting the sensitive customer database in the public cloud removes the full control the retailer wants over that data.</span><span class='qd'><b>Community cloud; shared compliance only</b>: A community cloud is for peer organizations with shared concerns and does not match keeping one retailer's data private while bursting a website.</span><span class='qd'><b>Private cloud for everything; maximum elasticity</b>: A private-only approach cannot match the public cloud's elasticity for scalable web traffic and contradicts the stated public-website goal.</span>" },
{ id:"D4-028", domain:4, obj:"4.1", diff:"easy", q:"Which cloud benefit means a business can reduce large upfront hardware purchases and instead pay an operating expense as it uses resources?", options:["Pay-as-you-go (metered) cost model","Sandboxing","Resource pooling","High availability"], answer:0, explain:"<strong>Pay-as-you-go (metered) cost model</strong> lets a business convert large upfront capital hardware purchases into smaller operating expenses, paying only for resources as they are consumed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>High availability</b>: High availability is about uptime through redundancy, not shifting capital costs to operating expenses.</span><span class='qd'><b>Sandboxing</b>: Sandboxing isolates untrusted software and has no bearing on the cost or billing model.</span><span class='qd'><b>Resource pooling</b>: Resource pooling enables provider efficiency through shared hardware but does not by itself describe usage-based pay-as-you-go billing.</span>" },
{ id:"D4-029", domain:4, obj:"4.1", diff:"medium", q:"A SaaS provider promises 99.99% uptime by running redundant servers across multiple regions with automatic failover. Which characteristic is being marketed?", options:["On-demand self-service","High availability","Metered service","Rapid elasticity"], answer:1, explain:"<strong>High availability</strong> is being marketed, since promising 99.99% uptime through redundant servers across regions with automatic failover is the definition of HA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rapid elasticity</b>: Rapid elasticity scales capacity to demand, not the guaranteed uptime described by the uptime promise.</span><span class='qd'><b>On-demand self-service</b>: On-demand self-service is about provisioning resources without staff, not redundancy and failover for uptime.</span><span class='qd'><b>Metered service</b>: Metered service meters consumption for billing and is unrelated to uptime guarantees.</span>" },
{ id:"D4-030", domain:4, obj:"4.1", diff:"hard", q:"Which statement comparing PaaS and IaaS is CORRECT?", options:["PaaS requires the customer to manage physical servers","IaaS abstracts away the operating system; PaaS does not","PaaS gives the customer less control over the OS but faster app deployment than IaaS","IaaS is always SaaS with extra storage"], answer:2, explain:"<strong>PaaS gives the customer less control over the OS but faster app deployment than IaaS</strong> is correct because PaaS hides the OS and infrastructure to speed development while IaaS exposes the OS for more control and more management work.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS abstracts away the operating system; PaaS does not</b>: This is reversed, since PaaS abstracts the OS and IaaS exposes it to the customer.</span><span class='qd'><b>IaaS is always SaaS with extra storage</b>: IaaS and SaaS are distinct models, and IaaS is raw infrastructure, not a finished application with storage.</span><span class='qd'><b>PaaS requires the customer to manage physical servers</b>: PaaS specifically frees the customer from managing servers, so this is false.</span>" },
{ id:"D4-031", domain:4, obj:"4.1", diff:"medium", q:"Which of the following is the BEST example of SaaS?", options:["A managed runtime where you upload only your code","A rented virtual machine with no OS installed","A hypervisor licensed for your own data center","A web-based CRM where users just log in and use it"], answer:3, explain:"<strong>A web-based CRM where users just log in and use it</strong> is the best SaaS example because it is a finished application accessed by login with no OS, runtime, or infrastructure to manage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A managed runtime where you upload only your code</b>: Uploading only code to a managed runtime describes PaaS, not a finished application.</span><span class='qd'><b>A rented virtual machine with no OS installed</b>: A bare rented VM is IaaS, where the customer must install and manage everything.</span><span class='qd'><b>A hypervisor licensed for your own data center</b>: A licensed hypervisor for your own data center is on-premises virtualization software, not a cloud-delivered application.</span>" },
{ id:"D4-032", domain:4, obj:"4.1", diff:"easy", q:"Cloud resource pooling primarily benefits providers by allowing them to do what?", options:["Serve many customers efficiently from shared physical resources","Eliminate the need for any virtualization","Guarantee zero downtime forever","Charge a flat rate regardless of usage"], answer:0, explain:"<strong>Serve many customers efficiently from shared physical resources</strong> is the primary provider benefit of resource pooling, which maximizes hardware utilization across multiple tenants.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Charge a flat rate regardless of usage</b>: Cloud billing is typically metered by usage, and flat-rate pricing is not what pooling enables.</span><span class='qd'><b>Eliminate the need for any virtualization</b>: Resource pooling relies on virtualization to share hardware, so it does not eliminate it.</span><span class='qd'><b>Guarantee zero downtime forever</b>: Zero downtime relates to high availability, and no model can guarantee it forever.</span>" },
{ id:"D4-033", domain:4, obj:"4.2", diff:"easy", q:"Which type of hypervisor runs directly on the physical hardware without an underlying host operating system?", options:["Sandbox hypervisor","Type 1 (bare-metal)","Type 2 (hosted)","Type 3"], answer:1, explain:"<strong>Type 1 (bare-metal)</strong> hypervisors run directly on the physical hardware with no underlying host OS, providing better performance and common in data centers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Type 2 (hosted)</b>: A Type 2 hypervisor runs as an application on top of an existing host operating system, not directly on hardware.</span><span class='qd'><b>Type 3</b>: There is no standard Type 3 hypervisor classification, so this is invalid.</span><span class='qd'><b>Sandbox hypervisor</b>: Sandbox hypervisor is not a recognized hypervisor type; sandboxing is an isolation technique, not a bare-metal category.</span>" },
{ id:"D4-034", domain:4, obj:"4.2", diff:"easy", q:"Which type of hypervisor runs as an application on top of an existing operating system such as Windows or macOS?", options:["Native hypervisor","Type 1 (bare-metal)","Type 2 (hosted)","Type 0"], answer:2, explain:"<strong>Type 2 (hosted)</strong> hypervisors install as software on top of an existing host OS such as Windows or macOS, convenient for desktops and testing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Type 1 (bare-metal)</b>: A Type 1 hypervisor runs directly on hardware with no host OS, the opposite of running atop Windows or macOS.</span><span class='qd'><b>Type 0</b>: There is no standard Type 0 hypervisor classification, so this is invalid.</span><span class='qd'><b>Native hypervisor</b>: Native hypervisor is another name for a Type 1 bare-metal hypervisor, not a hosted one.</span>" },
{ id:"D4-035", domain:4, obj:"4.2", diff:"medium", q:"Which of the following is an example of a Type 1 hypervisor?", options:["Windows Sandbox","Oracle VirtualBox","VMware Workstation","VMware ESXi"], answer:3, explain:"<strong>VMware ESXi</strong> is a Type 1 bare-metal hypervisor that installs directly on server hardware with no host OS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Oracle VirtualBox</b>: VirtualBox runs as an application on top of a host OS, making it a Type 2 hosted hypervisor.</span><span class='qd'><b>VMware Workstation</b>: VMware Workstation also runs on top of a host OS, so it is Type 2, not Type 1.</span><span class='qd'><b>Windows Sandbox</b>: Windows Sandbox is a disposable isolated container feature within Windows, not a standalone bare-metal hypervisor.</span>" },
{ id:"D4-036", domain:4, obj:"4.2", diff:"medium", q:"Which two products are common examples of Type 2 (hosted) hypervisors?", options:["Oracle VirtualBox and VMware Workstation","Citrix XenServer and KVM","Nutanix AHV and Proxmox","VMware ESXi and Microsoft Hyper-V"], answer:0, explain:"<strong>Oracle VirtualBox and VMware Workstation</strong> both run on top of a host OS, making them common examples of Type 2 hosted hypervisors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VMware ESXi and Microsoft Hyper-V</b>: Both ESXi and Hyper-V are Type 1 bare-metal hypervisors, not hosted ones.</span><span class='qd'><b>Citrix XenServer and KVM</b>: XenServer and KVM are Type 1 hypervisors that run at the hardware or kernel level, not as hosted applications.</span><span class='qd'><b>Nutanix AHV and Proxmox</b>: AHV and Proxmox are Type 1 bare-metal platforms used for server virtualization, not Type 2 hosted hypervisors.</span>" },
{ id:"D4-037", domain:4, obj:"4.2", diff:"medium", q:"A technician installs a hypervisor but VMs fail to start with a virtualization error. Which BIOS/UEFI setting most likely needs to be enabled?", options:["Secure Boot","Intel VT-x or AMD-V","Fast Boot","TPM 2.0"], answer:1, explain:"<strong>Intel VT-x or AMD-V</strong> hardware-assisted virtualization must be enabled in BIOS/UEFI for most hypervisors to launch virtual machines, so a virtualization error points here.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Secure Boot</b>: Secure Boot validates the boot loader signature and does not control whether the CPU can run VMs.</span><span class='qd'><b>Fast Boot</b>: Fast Boot only speeds up POST and startup and has no effect on virtualization support.</span><span class='qd'><b>TPM 2.0</b>: TPM 2.0 provides hardware security and key storage but is not required to start virtual machines.</span>" },
{ id:"D4-038", domain:4, obj:"4.2", diff:"hard", q:"A 64-bit guest OS will not install in a hosted hypervisor on a capable CPU, and the host shows no virtualization extensions active. What is the FIRST thing to check?", options:["Whether the monitor supports the resolution","Whether the antivirus is up to date","Whether Intel VT-x/AMD-V is enabled in BIOS/UEFI","Whether the hard drive is encrypted"], answer:2, explain:"<strong>Whether Intel VT-x/AMD-V is enabled in BIOS/UEFI</strong> should be checked first, because 64-bit guests and most hypervisors require hardware virtualization, and the absent extensions point to a disabled firmware setting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Whether the hard drive is encrypted</b>: Disk encryption does not prevent a hypervisor from creating or launching VMs.</span><span class='qd'><b>Whether the monitor supports the resolution</b>: Monitor resolution is a display concern unrelated to virtualization extensions or guest installation.</span><span class='qd'><b>Whether the antivirus is up to date</b>: Antivirus currency does not enable the CPU virtualization extensions the guest needs.</span>" },
{ id:"D4-039", domain:4, obj:"4.2", diff:"medium", q:"Which is generally true about Type 1 versus Type 2 hypervisors?", options:["Type 1 requires a host OS like Windows","Type 2 cannot run any virtual machines","Type 2 offers better performance for production servers","Type 1 runs on bare metal and is preferred for data center workloads"], answer:3, explain:"<strong>Type 1 runs on bare metal and is preferred for data center workloads</strong> is correct because it runs directly on hardware with less overhead, ideal for production servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Type 2 offers better performance for production servers</b>: Type 2 adds host-OS overhead, so it generally performs worse than Type 1 for production.</span><span class='qd'><b>Type 1 requires a host OS like Windows</b>: Type 1 runs directly on hardware with no host OS, so this is false.</span><span class='qd'><b>Type 2 cannot run any virtual machines</b>: Type 2 hypervisors do run virtual machines, just on top of a host OS.</span>" },
{ id:"D4-040", domain:4, obj:"4.2", diff:"easy", q:"Before creating a virtual machine, which four host resources must be allocated to the VM?", options:["CPU, RAM, disk storage, and network access","Only RAM and a license key","Only a GPU and a monitor","Only disk storage and a printer"], answer:0, explain:"<strong>CPU, RAM, disk storage, and network access</strong> are the four host resources each VM must be allocated to function as a working machine.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only RAM and a license key</b>: RAM alone is insufficient, and a license key is software entitlement, not a host resource a VM needs to run.</span><span class='qd'><b>Only a GPU and a monitor</b>: A GPU and monitor are optional display peripherals, not the core CPU, memory, disk, and network a VM requires.</span><span class='qd'><b>Only disk storage and a printer</b>: A printer is an optional peripheral, and storage alone cannot run a VM without CPU, RAM, and networking.</span>" },
{ id:"D4-041", domain:4, obj:"4.2", diff:"medium", q:"A host has 16 GB of RAM. The host OS needs about 6 GB. A technician wants to run two VMs. Which RAM allocation is MOST reasonable?", options:["8 GB to each VM","5 GB to each VM","16 GB to one VM","10 GB to each VM"], answer:1, explain:"<strong>5 GB to each VM</strong> is most reasonable because with about 6 GB reserved for the host roughly 10 GB remains, so 5 GB per VM leaves headroom and avoids over-committing memory.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>10 GB to each VM</b>: Two VMs at 10 GB each need 20 GB plus the host's 6 GB, far exceeding the 16 GB installed.</span><span class='qd'><b>8 GB to each VM</b>: Two VMs at 8 GB each total 16 GB, leaving nothing for the host's 6 GB requirement and over-committing memory.</span><span class='qd'><b>16 GB to one VM</b>: Allocating all 16 GB to one VM starves the host OS and the second VM entirely.</span>" },
{ id:"D4-042", domain:4, obj:"4.2", diff:"medium", q:"What is the main purpose of sandboxing a virtual machine?", options:["To increase the VM's CPU speed","To enable rapid elasticity in the cloud","To isolate untrusted software or testing from the host and network","To synchronize files between devices"], answer:2, explain:"<strong>To isolate untrusted software or testing from the host and network</strong> is the main purpose of sandboxing, containing risky code so it cannot affect the host or other resources.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To synchronize files between devices</b>: File synchronization is a separate feature; sandboxing is about isolation, not keeping files in sync.</span><span class='qd'><b>To increase the VM's CPU speed</b>: Sandboxing isolates execution and does not boost processor performance.</span><span class='qd'><b>To enable rapid elasticity in the cloud</b>: Rapid elasticity is a cloud scaling characteristic unrelated to isolating untrusted code.</span>" },
{ id:"D4-043", domain:4, obj:"4.2", diff:"medium", q:"A security analyst wants to safely open a suspicious email attachment to observe its behavior. Which approach is BEST?", options:["Open it directly on the production workstation","Forward it to all users to test","Disable the firewall first, then open it","Open it inside an isolated sandbox VM with no host or network access"], answer:3, explain:"<strong>Open it inside an isolated sandbox VM with no host or network access</strong> is best because running the suspicious attachment in a contained environment prevents any malicious behavior from reaching the host or network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Open it directly on the production workstation</b>: Opening malware on a production machine risks infecting it and the network directly.</span><span class='qd'><b>Forward it to all users to test</b>: Distributing a suspicious attachment to everyone spreads the potential infection rather than containing it.</span><span class='qd'><b>Disable the firewall first, then open it</b>: Disabling the firewall removes protection and makes any infection worse, not safer.</span>" },
{ id:"D4-044", domain:4, obj:"4.2", diff:"hard", q:"A developer needs to test an application on Windows, Linux, and an older OS simultaneously on one laptop with minimal cost. Which solution is MOST appropriate?", options:["Install a Type 2 hypervisor and run each OS in its own VM","Dual-boot a single OS","Use a Type 1 hypervisor that replaces the laptop's main OS","Buy three separate physical computers"], answer:0, explain:"<strong>Install a Type 2 hypervisor and run each OS in its own VM</strong> is most appropriate because a hosted hypervisor on the existing laptop runs multiple guest OSs simultaneously at low cost.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Buy three separate physical computers</b>: Three machines defeats the minimal-cost requirement and is unnecessary when VMs can run side by side.</span><span class='qd'><b>Dual-boot a single OS</b>: Dual-booting runs only one OS at a time and cannot test all three simultaneously.</span><span class='qd'><b>Use a Type 1 hypervisor that replaces the laptop's main OS</b>: Replacing the laptop's main OS with a bare-metal hypervisor is disruptive and overkill for a developer's desktop testing.</span>" },
{ id:"D4-045", domain:4, obj:"4.2", diff:"hard", q:"After enabling a Type 1 hypervisor role (such as Hyper-V) on a workstation, a third-party Type 2 hypervisor refuses to run VMs. What is the MOST likely cause?", options:["The hard drive is full","Hyper-V has taken control of the virtualization extensions, blocking the other hypervisor","The network cable is unplugged","The CPU lost VT-x support permanently"], answer:1, explain:"<strong>Hyper-V has taken control of the virtualization extensions, blocking the other hypervisor</strong> is the most likely cause, since enabling Hyper-V claims the hardware virtualization extensions and prevents other Type 2 hypervisors from accessing them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The CPU lost VT-x support permanently</b>: Enabling a software role does not permanently remove a CPU's hardware virtualization capability.</span><span class='qd'><b>The hard drive is full</b>: A full disk would cause storage errors, not a hypervisor being unable to access virtualization extensions.</span><span class='qd'><b>The network cable is unplugged</b>: A disconnected cable affects connectivity, not whether VMs can start.</span>" },
{ id:"D4-046", domain:4, obj:"4.2", diff:"medium", q:"Which networking mode lets a VM appear as a separate device with its own IP address on the same physical LAN as the host?", options:["Host-only","Internal","Bridged","NAT"], answer:2, explain:"<strong>Bridged</strong> networking connects the VM directly to the physical network so it receives its own IP and is reachable like any other host on the LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NAT</b>: NAT hides the VM behind the host's IP through address translation, so it does not appear as a separate device on the LAN.</span><span class='qd'><b>Host-only</b>: Host-only creates a private network between the host and VM with no access to the physical LAN.</span><span class='qd'><b>Internal</b>: Internal networking connects VMs only to each other, isolated from both the host and the physical LAN.</span>" },
{ id:"D4-047", domain:4, obj:"4.2", diff:"medium", q:"Which VM networking mode shares the host's IP address and hides the VMs behind it, similar to a home router?", options:["Host-only","Promiscuous","Bridged","NAT"], answer:3, explain:"<strong>NAT</strong> mode lets VMs share the host's IP for outbound access while hiding them behind address translation, much like a home router.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bridged</b>: Bridged gives each VM its own IP directly on the LAN rather than sharing the host's address.</span><span class='qd'><b>Host-only</b>: Host-only confines the VM to a private host-VM network with no shared outbound internet through the host's IP.</span><span class='qd'><b>Promiscuous</b>: Promiscuous is a NIC mode for capturing all traffic, not a VM networking mode that shares the host's IP.</span>" },
{ id:"D4-048", domain:4, obj:"4.2", diff:"hard", q:"A VM running a memory-intensive database is severely slow, and the host's other applications also lag. The technician suspects over-allocation. Which resource was MOST likely over-committed?", options:["RAM (memory)","USB ports","Network bandwidth","Monitor resolution"], answer:0, explain:"<strong>RAM (memory)</strong> was most likely over-committed, because allocating more memory to VMs than the host physically has forces heavy paging that slows both the VM and the host.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network bandwidth</b>: Network saturation would slow transfers, not cause a memory-intensive database and the host to lag together from over-allocation.</span><span class='qd'><b>Monitor resolution</b>: Monitor resolution is a display setting with no effect on VM or host performance.</span><span class='qd'><b>USB ports</b>: USB port allocation does not cause systemwide slowdowns from over-committing a memory-heavy workload.</span>" },
{ id:"D4-049", domain:4, obj:"4.2", diff:"easy", q:"What is a snapshot in virtualization?", options:["A backup of the host BIOS","A saved point-in-time state of a VM you can revert to","A type of hypervisor","A printed photo of the server"], answer:1, explain:"<strong>A saved point-in-time state of a VM you can revert to</strong> defines a snapshot, capturing the VM's state at a moment so it can be rolled back, useful before risky changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A printed photo of the server</b>: A snapshot is a saved digital VM state, not a physical photograph.</span><span class='qd'><b>A backup of the host BIOS</b>: A snapshot captures the VM's state, not the host's firmware.</span><span class='qd'><b>A type of hypervisor</b>: A snapshot is a feature provided by a hypervisor, not a hypervisor itself.</span>" },
{ id:"D4-050", domain:4, obj:"4.2", diff:"medium", q:"Why might a technician take a snapshot of a VM before installing a questionable software update?", options:["To synchronize files to the cloud","To increase the VM's RAM automatically","To allow reverting the VM to its pre-update state if the update fails","To convert the VM to a Type 1 hypervisor"], answer:2, explain:"<strong>To allow reverting the VM to its pre-update state if the update fails</strong> is why, because a pre-change snapshot lets the technician quickly roll back to the known-good state.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To increase the VM's RAM automatically</b>: Snapshots capture state and do not change or add memory allocation.</span><span class='qd'><b>To convert the VM to a Type 1 hypervisor</b>: A snapshot saves VM state and cannot turn a VM into a hypervisor.</span><span class='qd'><b>To synchronize files to the cloud</b>: File synchronization is a separate feature unrelated to capturing a revertible VM state.</span>" },
{ id:"D4-051", domain:4, obj:"4.2", diff:"medium", q:"A technician must run several server VMs in a data center for maximum performance and density. Which hypervisor type and example are MOST appropriate?", options:["Type 2, such as VMware Workstation","Type 0, such as Windows Sandbox","Type 2, such as VirtualBox","Type 1, such as VMware ESXi or Hyper-V"], answer:3, explain:"<strong>Type 1, such as VMware ESXi or Hyper-V</strong> is most appropriate because bare-metal hypervisors run directly on hardware, giving the performance and density a data center needs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Type 2, such as VirtualBox</b>: VirtualBox is a hosted hypervisor with host-OS overhead, unsuited for maximum server density.</span><span class='qd'><b>Type 2, such as VMware Workstation</b>: VMware Workstation runs atop a host OS and is intended for desktops and testing, not data center density.</span><span class='qd'><b>Type 0, such as Windows Sandbox</b>: There is no Type 0 hypervisor, and Windows Sandbox is a disposable isolation feature, not a server platform.</span>" },
{ id:"D4-052", domain:4, obj:"4.2", diff:"hard", q:"A workstation meets a hypervisor's RAM and disk needs, the CPU supports virtualization, yet VMs still will not start. Which action should the technician take FIRST?", options:["Verify virtualization (VT-x/AMD-V) is actually enabled in BIOS/UEFI","Replace the CPU","Reinstall the host OS","Add a second monitor"], answer:0, explain:"<strong>Verify virtualization (VT-x/AMD-V) is actually enabled in BIOS/UEFI</strong> is the logical first step, because CPU support means nothing if the feature is disabled in firmware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the CPU</b>: The CPU already supports virtualization, so replacing it is unnecessary and skips the simple firmware check.</span><span class='qd'><b>Reinstall the host OS</b>: Reinstalling the OS is drastic and does not address a disabled BIOS virtualization setting.</span><span class='qd'><b>Add a second monitor</b>: A second monitor is unrelated to whether VMs can start.</span>" },
{ id:"D4-053", domain:4, obj:"4.2", diff:"medium", q:"Which statement about VM disk allocation is CORRECT?", options:["Disk storage is irrelevant to VM performance","Each VM requires its own virtual hard disk allocated from host storage","A VM never needs any disk storage","A VM can only use the host's optical drive"], answer:1, explain:"<strong>Each VM requires its own virtual hard disk allocated from host storage</strong> is correct, since every VM needs a virtual disk carved from the host's storage and slow or insufficient storage limits it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A VM never needs any disk storage</b>: A VM must have storage to hold its guest OS and data, so this is false.</span><span class='qd'><b>A VM can only use the host's optical drive</b>: VMs use a virtual hard disk on host storage, not solely an optical drive.</span><span class='qd'><b>Disk storage is irrelevant to VM performance</b>: Disk speed and capacity directly affect VM performance, so it is highly relevant.</span>" },
{ id:"D4-054", domain:4, obj:"4.2", diff:"easy", q:"Which benefit BEST describes why organizations consolidate many servers onto fewer physical machines using virtualization?", options:["It removes the need for any operating systems","It eliminates the need for backups","It improves hardware utilization and reduces physical footprint and cost","It guarantees the servers can never fail"], answer:2, explain:"<strong>It improves hardware utilization and reduces physical footprint and cost</strong> best describes consolidation, because running many VMs on fewer machines raises utilization and cuts space, power, and cost.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It removes the need for any operating systems</b>: Each VM still runs its own guest OS, so virtualization does not eliminate operating systems.</span><span class='qd'><b>It eliminates the need for backups</b>: VMs still require backups, since consolidation does not protect against data loss.</span><span class='qd'><b>It guarantees the servers can never fail</b>: Virtualization cannot guarantee servers never fail, and a host failure can affect many VMs.</span>" },
{ id:"D4-055", domain:4, obj:"4.2", diff:"hard", q:"A technician needs an isolated test environment that is destroyed when closed, so malware cannot persist on the host. Which feature is MOST suitable?", options:["Bridged networking to the LAN","A permanent VM with shared host folders","File synchronization to the cloud","A disposable sandbox such as Windows Sandbox"], answer:3, explain:"<strong>A disposable sandbox such as Windows Sandbox</strong> is most suitable because it provides a clean, isolated environment that is wiped on close, preventing malware from persisting on the host.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bridged networking to the LAN</b>: Bridged networking exposes the test environment directly to the LAN, increasing risk rather than isolating it.</span><span class='qd'><b>A permanent VM with shared host folders</b>: A persistent VM with shared folders lets malware survive and reach the host, defeating the goal.</span><span class='qd'><b>File synchronization to the cloud</b>: File sync would propagate any infected files rather than isolate and destroy them on close.</span>" }
);
APLUS1.questions.push(
{ id:"D5-001", domain:5, obj:"5.1", diff:"easy", q:"What is the FIRST step in the CompTIA six-step troubleshooting methodology?", options:["Identify the problem","Establish a theory of probable cause","Test the theory to determine the cause","Document findings, actions, and outcomes"], answer:0, explain:"<strong>Identify the problem</strong> is step one, and it includes gathering information, questioning the user, and noting any recent changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Establish a theory of probable cause</b>: This is the second step and cannot begin until the problem has first been identified and information gathered.</span><span class='qd'><b>Test the theory to determine the cause</b>: Testing is the third step and requires an existing theory to validate, so it cannot come first.</span><span class='qd'><b>Document findings, actions, and outcomes</b>: Documentation is the final sixth step performed after the issue is resolved, not at the start.</span>" },
{ id:"D5-002", domain:5, obj:"5.1", diff:"easy", q:"In the six-step troubleshooting method, what step immediately follows 'Identify the problem'?", options:["Verify full system functionality","Establish a theory of probable cause","Document the outcome","Implement the solution"], answer:1, explain:"<strong>Establish a theory of probable cause</strong> immediately follows identifying the problem, and you question the obvious causes first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Verify full system functionality</b>: This is the fifth step performed after the solution is implemented, not right after identification.</span><span class='qd'><b>Document the outcome</b>: Documentation is the sixth and final step, completed only after everything else is done.</span><span class='qd'><b>Implement the solution</b>: Implementation is the fourth step and requires a confirmed theory and a plan of action first.</span>" },
{ id:"D5-003", domain:5, obj:"5.1", diff:"medium", q:"A technician has confirmed a theory of probable cause. According to the methodology, what is the NEXT step?", options:["Document findings","Verify full system functionality","Establish a plan of action to resolve the problem","Re-establish a new theory"], answer:2, explain:"After a theory is confirmed, you <strong>establish a plan of action to resolve the problem</strong> before implementing the solution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Re-establish a new theory</b>: You only form a new theory when testing disproves the theory, but here the theory was confirmed.</span><span class='qd'><b>Document findings</b>: Documentation is the last step and happens after the fix is implemented and verified.</span><span class='qd'><b>Verify full system functionality</b>: Verification comes after the solution is implemented, which has not happened yet at this stage.</span>" },
{ id:"D5-004", domain:5, obj:"5.1", diff:"easy", q:"What is the LAST step in the six-step troubleshooting methodology?", options:["Implement the solution","Verify full system functionality","Test the theory","Document findings, actions, and outcomes"], answer:3, explain:"<strong>Document findings, actions, and outcomes</strong> is the sixth and final step, preserving the resolution for future reference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implement the solution</b>: Implementation is the fourth step, performed well before documentation.</span><span class='qd'><b>Verify full system functionality</b>: Verification is the fifth step that comes after implementation but before documentation.</span><span class='qd'><b>Test the theory</b>: Testing the theory is the third step, near the middle of the process, not the end.</span>" },
{ id:"D5-005", domain:5, obj:"5.1", diff:"medium", q:"Place the steps in order: a technician just finished implementing a solution. What should they do next?", options:["Verify full system functionality and implement preventive measures","Identify the problem","Establish a theory","Document the outcome"], answer:0, explain:"After implementing the solution, you <strong>verify full system functionality and implement preventive measures</strong> to confirm the fix works and avoid recurrence.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Identify the problem</b>: This is the very first step and was already completed long before implementation.</span><span class='qd'><b>Establish a theory</b>: Theory formation is the second step and has no place after the solution has already been applied.</span><span class='qd'><b>Document the outcome</b>: Documentation comes after verification, so verification must occur before any documentation step.</span>" },
{ id:"D5-006", domain:5, obj:"5.1", diff:"hard", q:"During troubleshooting, a technician's first theory is disproven by testing. What does the methodology say to do?", options:["Skip directly to verifying functionality","Re-establish a new theory or escalate","Implement the solution anyway","Document the failure and close the ticket"], answer:1, explain:"If testing disproves the theory, the methodology says to <strong>re-establish a new theory or escalate</strong> to someone with more expertise.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implement the solution anyway</b>: Acting on a disproven theory would apply a fix for the wrong cause and likely worsen the situation.</span><span class='qd'><b>Document the failure and close the ticket</b>: Closing an unresolved ticket abandons the user with the original problem still active.</span><span class='qd'><b>Skip directly to verifying functionality</b>: There is no implemented solution yet to verify, so verification is impossible at this point.</span>" },
{ id:"D5-007", domain:5, obj:"5.1", diff:"medium", q:"A user reports their computer is 'acting weird.' What should the technician do FIRST?", options:["Run a full antivirus scan","Replace the RAM","Question the user and gather information about the symptoms","Reinstall the operating system"], answer:2, explain:"The first step is to identify the problem, which means <strong>questioning the user and gathering information about the symptoms</strong> before touching anything.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the RAM</b>: Swapping hardware skips identification entirely and assumes a cause with no supporting evidence.</span><span class='qd'><b>Reinstall the operating system</b>: A full reinstall is a drastic, data-destructive action taken only after diagnosis, never as a first response to vague symptoms.</span><span class='qd'><b>Run a full antivirus scan</b>: A scan is a possible later test, but it presumes malware before any information has been gathered to support that theory.</span>" },
{ id:"D5-008", domain:5, obj:"5.1", diff:"medium", q:"Before making any changes during troubleshooting, what should a technician always consider doing FIRST to protect the user?", options:["Power cycle the device","Update the BIOS","Run a stress test","Back up the system or data if possible"], answer:3, explain:"When practical, a technician should <strong>back up the system or data if possible</strong> before making changes so user data is not lost if a step goes wrong.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Power cycle the device</b>: A reboot is a diagnostic or fix action and does nothing to protect data against an upcoming risky change.</span><span class='qd'><b>Update the BIOS</b>: A BIOS flash is itself a risky change and could cause data loss rather than prevent it.</span><span class='qd'><b>Run a stress test</b>: Stress testing pushes hardware harder and can accelerate failure, offering no protection to the user's data.</span>" },
{ id:"D5-009", domain:5, obj:"5.1", diff:"easy", q:"Which step involves asking whether anything has changed recently, such as new hardware or software?", options:["Identify the problem","Document findings","Verify functionality","Implement the solution"], answer:0, explain:"Asking whether anything changed recently, such as new hardware or software, is part of the <strong>identify the problem</strong> step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Document findings</b>: Documentation records the completed resolution and does not involve probing for recent environmental changes.</span><span class='qd'><b>Verify functionality</b>: Verification confirms the system works after a fix and occurs long after recent-change questions are asked.</span><span class='qd'><b>Implement the solution</b>: Implementation applies the chosen fix and is unrelated to gathering background about recent changes.</span>" },
{ id:"D5-010", domain:5, obj:"5.1", diff:"hard", q:"A technician fixes an issue but does not document it. Months later the same issue recurs and takes hours to diagnose again. Which step was skipped?", options:["Test the theory","Document findings, actions, and outcomes","Implement preventive measures","Establish a theory of probable cause"], answer:1, explain:"Skipping <strong>document findings, actions, and outcomes</strong> means the prior fix is not recorded, forcing technicians to re-diagnose the recurring issue from scratch.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Establish a theory of probable cause</b>: A theory was clearly formed since the original issue was fixed, so this step was not skipped.</span><span class='qd'><b>Test the theory</b>: The technician confirmed and resolved the issue, meaning the theory was tested successfully at the time.</span><span class='qd'><b>Implement preventive measures</b>: Preventive measures reduce recurrence but the scenario specifically blames the inability to recall the prior fix, which is a documentation gap.</span>" },
{ id:"D5-011", domain:5, obj:"5.1", diff:"medium", q:"When establishing a theory of probable cause, what guidance does CompTIA emphasize?", options:["Always assume the most complex cause","Replace the most expensive component first","Question the obvious and consider multiple approaches","Reinstall the OS immediately"], answer:2, explain:"When forming a theory, CompTIA emphasizes that you <strong>question the obvious and consider multiple approaches</strong>, including internal and external research.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Always assume the most complex cause</b>: This contradicts the guidance to question the obvious and simple causes first.</span><span class='qd'><b>Replace the most expensive component first</b>: Swapping costly parts blindly wastes resources and ignores cheaper, more likely causes.</span><span class='qd'><b>Reinstall the OS immediately</b>: An immediate reinstall is destructive and skips the methodical theory-building the step requires.</span>" },
{ id:"D5-012", domain:5, obj:"5.1", diff:"easy", q:"A 'plan of action to resolve the problem' may require what before implementation?", options:["Formatting the hard drive","Disabling the firewall","Removing all peripherals","Referring to vendor documentation or escalation"], answer:3, explain:"A plan of action may require <strong>referring to vendor documentation or escalation</strong>, such as knowledge bases or manufacturer guides, before implementation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Formatting the hard drive</b>: Formatting destroys data and is a drastic remediation, not a routine planning prerequisite.</span><span class='qd'><b>Disabling the firewall</b>: Turning off the firewall introduces a security risk and is not a standard step in forming a resolution plan.</span><span class='qd'><b>Removing all peripherals</b>: Stripping peripherals is an isolation technique for specific issues, not a general requirement before any plan.</span>" },
{ id:"D5-013", domain:5, obj:"5.1", diff:"medium", q:"A technician resolves a printer issue and confirms it prints correctly from multiple applications. Which methodology step is this?", options:["Verify full system functionality","Establish a theory","Identify the problem","Document findings"], answer:0, explain:"Confirming the printer works correctly across multiple applications is <strong>verify full system functionality</strong>, the fifth step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Establish a theory</b>: Theory formation happens early in diagnosis, well before the fix is confirmed working.</span><span class='qd'><b>Identify the problem</b>: Identification is the first step of gathering symptoms, not the post-repair confirmation described here.</span><span class='qd'><b>Document findings</b>: Documentation follows verification; confirming the device prints is the verification act itself, not its record.</span>" },
{ id:"D5-014", domain:5, obj:"5.1", diff:"hard", q:"A technician immediately swaps a motherboard without questioning the user or checking simpler causes. Which BEST describes this error?", options:["Skipping verification of functionality","Failing to identify the problem and question the obvious","Skipping documentation","Failing to implement preventive measures"], answer:1, explain:"Jumping straight to swapping a motherboard is <strong>failing to identify the problem and question the obvious</strong>, which is the foundation of the methodology.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Skipping verification of functionality</b>: Verification is a later step and cannot be skipped before any diagnosis has even begun.</span><span class='qd'><b>Skipping documentation</b>: Documentation is the final step and the error here occurs at the very start of the process.</span><span class='qd'><b>Failing to implement preventive measures</b>: Preventive measures come at the end during verification and are unrelated to the premature hardware swap.</span>" },
{ id:"D5-015", domain:5, obj:"5.1", diff:"medium", q:"Which of the following is part of the 'identify the problem' step?", options:["Verifying the system is fully functional","Implementing preventive measures","Determining if anything has changed and gathering information","Documenting the final outcome"], answer:2, explain:"<strong>Determining if anything has changed and gathering information</strong> is part of the identify-the-problem step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Documenting the final outcome</b>: This belongs to the last step and records the resolution rather than gathering initial information.</span><span class='qd'><b>Verifying the system is fully functional</b>: Verification is the fifth step confirming the fix, not the initial information-gathering phase.</span><span class='qd'><b>Implementing preventive measures</b>: Preventive measures occur during verification at the end, not while identifying the problem.</span>" },
{ id:"D5-016", domain:5, obj:"5.1", diff:"easy", q:"What does 'implement preventive measures' help achieve?", options:["Higher CPU clock speeds","Removing the need for documentation","Faster boot times only","Reducing the chance the same problem recurs"], answer:3, explain:"Implementing preventive measures helps by <strong>reducing the chance the same problem recurs</strong> after the fix is complete.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster boot times only</b>: Preventive measures address recurrence of the specific issue, not general boot performance.</span><span class='qd'><b>Higher CPU clock speeds</b>: Clock speed is a performance attribute unrelated to preventing a recurring fault.</span><span class='qd'><b>Removing the need for documentation</b>: Documentation remains a required final step regardless of any preventive measures taken.</span>" },
{ id:"D5-017", domain:5, obj:"5.1", diff:"hard", q:"A technician must consider corporate policies, procedures, and impact before implementing a major change. This consideration falls under which step?", options:["Establish a plan of action to resolve the problem","Identify the problem","Verify functionality","Document findings"], answer:0, explain:"Considering corporate policies, procedures, and impact before a major change falls under <strong>establish a plan of action to resolve the problem</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Identify the problem</b>: This step gathers symptoms and recent changes, not assessment of policy and business impact for a planned fix.</span><span class='qd'><b>Verify functionality</b>: Verification confirms the system works after the change, not the pre-change impact planning.</span><span class='qd'><b>Document findings</b>: Documentation records the outcome at the end and does not weigh policies before implementation.</span>" },
{ id:"D5-018", domain:5, obj:"5.1", diff:"medium", q:"Which sequence correctly orders the middle steps of the methodology?", options:["Plan of action, implement, establish theory","Establish theory, test theory, plan of action, implement","Implement, establish theory, test theory","Test theory, establish theory, plan of action"], answer:1, explain:"The middle of the methodology runs <strong>establish theory, test theory, plan of action, implement</strong> in that exact order.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Test theory, establish theory, plan of action</b>: You cannot test a theory before one has been established, so this reverses the first two steps.</span><span class='qd'><b>Plan of action, implement, establish theory</b>: This puts planning and implementation before the theory even exists, which is backward.</span><span class='qd'><b>Implement, establish theory, test theory</b>: Implementing before forming and testing a theory means acting with no diagnosed cause.</span>" },
{ id:"D5-019", domain:5, obj:"5.2", diff:"easy", q:"A computer powers on with fans spinning but shows no image and does not complete POST. What is this condition called?", options:["No power","Thermal shutdown","No POST","Disk failure"], answer:2, explain:"Power present with fans spinning but no display and no completed self-test is a <strong>no POST</strong> condition, distinct from having no power.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>No power</b>: No power means nothing energizes at all, but here fans are spinning, so power is clearly present.</span><span class='qd'><b>Thermal shutdown</b>: Thermal shutdown turns the system off due to heat, whereas this machine stays powered on but fails to boot.</span><span class='qd'><b>Disk failure</b>: A disk fault would typically allow POST to complete and then fail at the OS load stage, not block POST itself.</span>" },
{ id:"D5-020", domain:5, obj:"5.2", diff:"easy", q:"A technician presses the power button and nothing happens at all: no fans, no lights. What is the MOST likely first thing to check?", options:["The GPU driver","The RAM modules","The boot order in BIOS","The power source, cable, and PSU switch"], answer:3, explain:"With no fans and no lights, check <strong>the power source, cable, and PSU switch</strong> first before suspecting internal components.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The GPU driver</b>: A driver is software that only matters once the system already powers on and boots, which it does not here.</span><span class='qd'><b>The RAM modules</b>: Bad RAM produces a no-POST with fans and lights, but a total lack of power points to the supply chain, not memory.</span><span class='qd'><b>The boot order in BIOS</b>: Boot order only becomes relevant after POST succeeds, and this system shows no signs of power at all.</span>" },
{ id:"D5-021", domain:5, obj:"5.2", diff:"medium", q:"A desktop produces a series of beep codes at startup and fails to boot. What do these beeps primarily indicate?", options:["A POST error reported by the BIOS","A successful POST","A network connectivity issue","A full hard drive"], answer:0, explain:"<strong>A POST error reported by the BIOS</strong> is what beep codes signal, communicating a hardware fault before video is available.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A successful POST</b>: A successful POST is usually a single short beep or none, not a fault-indicating series that halts boot.</span><span class='qd'><b>A network connectivity issue</b>: POST beep codes report local hardware faults and run before any network stack is loaded.</span><span class='qd'><b>A full hard drive</b>: A full drive is a storage-capacity problem detected by the OS, not something POST beep codes report.</span>" },
{ id:"D5-022", domain:5, obj:"5.2", diff:"medium", q:"A system gives continuous or repeated beeps and no display. After checking power, what is a common first component to reseat?", options:["The front-panel USB header","The RAM modules","The optical drive","The hard drive"], answer:1, explain:"After power is verified, <strong>the RAM modules</strong> are a common first component to reseat because many beep patterns indicate memory faults.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The optical drive</b>: An optical drive is not required to POST, and its absence or failure does not produce no-display beep codes.</span><span class='qd'><b>The hard drive</b>: Storage faults appear after POST during OS load, so the drive is not the cause of pre-video beeping.</span><span class='qd'><b>The front-panel USB header</b>: A USB header connects case ports and has no role in POST or in generating memory beep codes.</span>" },
{ id:"D5-023", domain:5, obj:"5.2", diff:"hard", q:"A workstation randomly reboots and shows frequent BSODs with varying stop codes. Memtest reports errors. What is the MOST likely cause?", options:["Corrupt GPU driver","Dead CMOS battery","Faulty or failing RAM","Failing power supply only"], answer:2, explain:"Random reboots with BSODs showing varying stop codes plus Memtest errors point most directly to <strong>faulty or failing RAM</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing power supply only</b>: A bad PSU causes shutdowns and instability but would not produce Memtest memory errors, which directly implicate RAM.</span><span class='qd'><b>Corrupt GPU driver</b>: A GPU driver fault typically yields display-related crashes with consistent video stop codes, not varied ones plus memory test failures.</span><span class='qd'><b>Dead CMOS battery</b>: A dead CMOS battery only resets BIOS settings and the clock, and does not cause BSODs or Memtest errors.</span>" },
{ id:"D5-024", domain:5, obj:"5.2", diff:"medium", q:"After installing two new RAM sticks, a PC fails to POST. What should the technician try FIRST?", options:["Update the GPU driver","Replace the CPU","Reinstall the operating system","Reseat the modules and verify slot/channel compatibility"], answer:3, explain:"Newly installed RAM that blocks POST is most often improperly seated or in the wrong slots, so <strong>reseat the modules and verify slot/channel compatibility</strong> first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Update the GPU driver</b>: The system cannot POST, so it never reaches an OS where a driver update could even run.</span><span class='qd'><b>Replace the CPU</b>: The CPU was working before the RAM was added, making it an unlikely and expensive first suspect.</span><span class='qd'><b>Reinstall the operating system</b>: A no-POST condition is a hardware-level failure before the OS loads, so reinstalling it cannot help.</span>" },
{ id:"D5-025", domain:5, obj:"5.2", diff:"easy", q:"Which symptom most directly suggests a failing power supply unit?", options:["System shuts off randomly under load or won't power on intermittently","Bright but blurry display","Slow web browsing","Loud beep at successful POST"], answer:0, explain:"<strong>System shuts off randomly under load or won't power on intermittently</strong> is the classic signature of a failing power supply.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bright but blurry display</b>: A blurry image is a display, cable, or resolution issue, unrelated to power delivery.</span><span class='qd'><b>Slow web browsing</b>: Slow browsing is typically a network or software problem, not a symptom of PSU hardware failure.</span><span class='qd'><b>Loud beep at successful POST</b>: A POST beep is a firmware status signal and does not indicate the supply is failing.</span>" },
{ id:"D5-026", domain:5, obj:"5.2", diff:"medium", q:"A CPU is hitting 95C and the system slows dramatically during heavy tasks. What is occurring?", options:["BIOS corruption","Thermal throttling due to overheating","Memory leak","RAID rebuild"], answer:1, explain:"A CPU at 95C that slows under load is undergoing <strong>thermal throttling due to overheating</strong>, reducing clock speed to protect itself.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Memory leak</b>: A memory leak exhausts RAM and slows software, but it does not drive CPU temperature to 95C.</span><span class='qd'><b>RAID rebuild</b>: A rebuild stresses disks and the storage controller, not the CPU thermal headroom.</span><span class='qd'><b>BIOS corruption</b>: Corrupt BIOS firmware usually prevents booting or POST, not heat-driven slowdowns during heavy tasks.</span>" },
{ id:"D5-027", domain:5, obj:"5.2", diff:"medium", q:"A PC overheats and shuts down after a few minutes of use. What is the MOST likely cause to check first?", options:["Wrong DNS settings","Disabled secure boot","Blocked airflow, dust buildup, or failed fan/heatsink contact","Corrupt OS files"], answer:2, explain:"Overheating shutdowns most likely trace to <strong>blocked airflow, dust buildup, or failed fan/heatsink contact</strong> to check first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Corrupt OS files</b>: Corrupt system files cause software errors or boot problems, not heat-triggered hardware shutdowns.</span><span class='qd'><b>Wrong DNS settings</b>: DNS only affects name resolution for network access and has nothing to do with thermal behavior.</span><span class='qd'><b>Disabled secure boot</b>: Secure boot is a firmware security feature and its state does not influence cooling or temperature.</span>" },
{ id:"D5-028", domain:5, obj:"5.2", diff:"hard", q:"A technician suspects a faulty PSU. Which tool BEST confirms whether the supply outputs correct voltages?", options:["Toner probe","Loopback plug","POST card only","Power supply tester or multimeter"], answer:3, explain:"A <strong>power supply tester or multimeter</strong> measures the voltage rails directly to confirm the PSU delivers correct power.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Toner probe</b>: A toner probe traces and identifies cabling runs, not electrical output from a power supply.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests network or serial ports by looping signals back, not power rail voltages.</span><span class='qd'><b>POST card only</b>: A POST card reads diagnostic hex codes during startup and cannot measure DC voltage output.</span>" },
{ id:"D5-029", domain:5, obj:"5.2", diff:"easy", q:"A desktop's clock resets and BIOS settings are lost every time it is unplugged. What is the MOST likely cause?", options:["Dead CMOS battery","Failing hard drive","Bad RAM","Overheating CPU"], answer:0, explain:"A <strong>dead CMOS battery</strong> causes the clock and BIOS settings to reset whenever the system loses power.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing hard drive</b>: A failing drive causes read errors and boot problems, not loss of BIOS settings and clock on unplug.</span><span class='qd'><b>Bad RAM</b>: Faulty RAM produces crashes and POST failures, but it does not retain or reset firmware configuration.</span><span class='qd'><b>Overheating CPU</b>: An overheating CPU throttles or shuts down under load and has no effect on stored CMOS settings.</span>" },
{ id:"D5-030", domain:5, obj:"5.2", diff:"medium", q:"A motherboard's capacitors appear bulged and leaking. What is the MOST appropriate action?", options:["Reinstall the OS","Replace the motherboard","Update the BIOS","Add more RAM"], answer:1, explain:"Bulging and leaking capacitors indicate a failed board, so the correct action is to <strong>replace the motherboard</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Add more RAM</b>: Adding memory does nothing to repair physically damaged power-filtering capacitors on the board.</span><span class='qd'><b>Reinstall the OS</b>: A reinstall is a software remedy and cannot fix a hardware-level capacitor failure.</span><span class='qd'><b>Update the BIOS</b>: A firmware update cannot compensate for failed electrolytic capacitors on the motherboard.</span>" },
{ id:"D5-031", domain:5, obj:"5.2", diff:"hard", q:"A system POSTs and boots but shows only half the installed RAM in the OS. After confirming OS edition supports the capacity, what is the BEST next step?", options:["Reinstall the GPU driver","Flash the SSD firmware","Reseat the modules and test each slot/stick individually","Replace the CPU"], answer:2, explain:"Missing RAM capacity after confirming the OS supports it usually means a bad slot or unseated stick, so <strong>reseat the modules and test each slot/stick individually</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the CPU</b>: The system POSTs and boots normally, so the CPU and its memory controller are functioning, not the cause of missing capacity.</span><span class='qd'><b>Reinstall the GPU driver</b>: A graphics driver has no bearing on how much system RAM the OS detects.</span><span class='qd'><b>Flash the SSD firmware</b>: Storage firmware governs the drive, not memory recognition, so it cannot restore missing RAM.</span>" },
{ id:"D5-032", domain:5, obj:"5.2", diff:"medium", q:"A laptop shuts down only during gaming or rendering but runs fine when idle. What is the MOST likely cause?", options:["Bad CMOS battery","Failed network adapter","Corrupt boot sector","Overheating under load"], answer:3, explain:"Shutdowns that occur only during gaming or rendering but not at idle point to <strong>overheating under load</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failed network adapter</b>: A bad network adapter affects connectivity, not power stability during heavy graphics or compute load.</span><span class='qd'><b>Corrupt boot sector</b>: A corrupt boot sector prevents the OS from starting, but this laptop boots and runs fine until loaded.</span><span class='qd'><b>Bad CMOS battery</b>: A dead CMOS battery only resets settings and clock, and never causes load-dependent shutdowns.</span>" },
{ id:"D5-033", domain:5, obj:"5.2", diff:"easy", q:"What does POST stand for?", options:["Power-On Self-Test","Primary Operating System Test","Pre-Operating Startup Task","Peripheral Output Status Test"], answer:0, explain:"<strong>Power-On Self-Test</strong> is what POST stands for, the firmware routine that checks hardware before booting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Primary Operating System Test</b>: POST runs before any operating system loads and tests hardware, not the OS.</span><span class='qd'><b>Pre-Operating Startup Task</b>: This is a fabricated expansion that does not match the established acronym.</span><span class='qd'><b>Peripheral Output Status Test</b>: POST is a full hardware self-test, not a check limited to peripheral output.</span>" },
{ id:"D5-034", domain:5, obj:"5.2", diff:"medium", q:"A technician needs to read diagnostic codes on a system that won't display video. Which tool is designed for this?", options:["Loopback plug","POST card (diagnostic card)","Cable tester","Multimeter"], answer:1, explain:"A <strong>POST card (diagnostic card)</strong> displays hex codes showing where POST is failing when there is no video output.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A cable tester checks wiring continuity in network or other cables, not motherboard POST progress.</span><span class='qd'><b>Multimeter</b>: A multimeter measures voltage, current, and resistance, but it cannot read POST diagnostic codes.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a port by routing its output back to its input, unrelated to POST diagnostics.</span>" },
{ id:"D5-035", domain:5, obj:"5.2", diff:"hard", q:"A PC powers on, fans spin, but there is no POST and no beep. After reseating RAM and clearing CMOS without success, what is a reasonable next isolation step?", options:["Reinstall the OS","Update antivirus","Test with minimal hardware: CPU, one RAM stick, onboard/known-good GPU","Replace the hard drive"], answer:2, explain:"After reseating RAM and clearing CMOS fail, a sound isolation step is to <strong>test with minimal hardware: CPU, one RAM stick, onboard/known-good GPU</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the hard drive</b>: The system never reaches POST, which occurs before any storage device is accessed, so the drive is irrelevant.</span><span class='qd'><b>Reinstall the OS</b>: A no-POST condition is a hardware failure before the OS, so reinstalling software cannot help.</span><span class='qd'><b>Update antivirus</b>: Antivirus runs within a booted OS and is meaningless on a machine that cannot complete POST.</span>" },
{ id:"D5-036", domain:5, obj:"5.2", diff:"medium", q:"A user reports a burning smell and the PC then lost power. What should the technician do FIRST?", options:["Update the BIOS","Add a second power supply","Reboot and continue working","Power off, unplug, and inspect for a failed PSU or component"], answer:3, explain:"A burning smell with sudden power loss signals possible electrical failure, so the first action is to <strong>power off, unplug, and inspect for a failed PSU or component</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reboot and continue working</b>: Powering a unit that just produced a burning smell risks fire or further component and data damage.</span><span class='qd'><b>Update the BIOS</b>: Flashing firmware on hardware showing signs of electrical failure is unsafe and ignores the immediate hazard.</span><span class='qd'><b>Add a second power supply</b>: A second PSU does not address the damaged component and could energize a faulty, potentially dangerous system.</span>" },
{ id:"D5-037", domain:5, obj:"5.2", diff:"easy", q:"Distended (swollen) capacitors on a motherboard are an example of what?", options:["A sign of hardware failure","A RAID indicator","A normal cosmetic feature","An overclocking benefit"], answer:0, explain:"Distended or swollen capacitors are <strong>a sign of hardware failure</strong>, specifically a failing motherboard.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A normal cosmetic feature</b>: Healthy capacitors are flat-topped and sealed, so swelling is always abnormal, never cosmetic.</span><span class='qd'><b>An overclocking benefit</b>: Overclocking stresses components but bulging capacitors are damage, not a performance gain.</span><span class='qd'><b>A RAID indicator</b>: RAID status is reported by a controller or LEDs, not by the physical condition of capacitors.</span>" },
{ id:"D5-038", domain:5, obj:"5.2", diff:"medium", q:"After a power surge, a desktop will not turn on at all. Which component is MOST commonly damaged first?", options:["Optical drive","Power supply unit","Hard drive platters","RAM modules"], answer:1, explain:"After a power surge, the <strong>power supply unit</strong> is most commonly damaged first because it absorbs the incoming surge and often protects other parts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hard drive platters</b>: Platters are mechanically and electrically downstream of the PSU and are not the first to absorb a surge.</span><span class='qd'><b>RAM modules</b>: RAM is fed regulated power from the board and is usually shielded from a surge that the PSU takes first.</span><span class='qd'><b>Optical drive</b>: An optical drive is a non-critical peripheral and is rarely the primary casualty of an incoming surge.</span>" },
{ id:"D5-039", domain:5, obj:"5.2", diff:"hard", q:"A system intermittently fails to POST, especially when cold, but works after warming up. Capacitors look fine. What is a likely cause?", options:["Incorrect DNS","A full hard drive","A failing or marginal power supply / cold solder or component issue","Outdated antivirus"], answer:2, explain:"Intermittent no-POST that clears once warm, with healthy-looking capacitors, often points to a <strong>failing or marginal power supply / cold solder or component issue</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A full hard drive</b>: A full drive is a capacity issue detected by the OS and has no effect on temperature-dependent POST behavior.</span><span class='qd'><b>Outdated antivirus</b>: Antivirus runs in the OS and cannot influence whether the machine completes its pre-boot self-test.</span><span class='qd'><b>Incorrect DNS</b>: DNS only affects network name resolution and is entirely unrelated to POST or thermal behavior.</span>" },
{ id:"D5-040", domain:5, obj:"5.2", diff:"medium", q:"A technician applies new thermal paste and reseats the heatsink because the CPU was overheating. Which methodology step is verifying temperatures stay normal under load?", options:["Identify the problem","Establish a theory","Document findings","Verify full system functionality"], answer:3, explain:"Confirming temperatures remain safe under load after the repair is <strong>verify full system functionality</strong>, the fifth step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Identify the problem</b>: Identification gathers symptoms at the start, not the post-repair confirmation of normal temperatures.</span><span class='qd'><b>Establish a theory</b>: Theory formation precedes the fix, whereas this is confirmation that the implemented fix holds.</span><span class='qd'><b>Document findings</b>: Documentation records the resolution afterward; checking temperatures under load is the verification act itself.</span>" },
{ id:"D5-041", domain:5, obj:"5.2", diff:"easy", q:"Which is the BEST description of 'no power' versus 'no POST'?", options:["No power means nothing turns on; no POST means it powers but won't boot/display","They are identical conditions","No POST means the OS won't load after booting","No power means video fails; no POST means fans fail"], answer:0, explain:"<strong>No power means nothing turns on; no POST means it powers but won't boot/display</strong> is the correct distinction.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>No power means video fails; no POST means fans fail</b>: This reverses the symptoms; no power means nothing energizes, and no POST means power is present.</span><span class='qd'><b>They are identical conditions</b>: They are distinct states defined by whether the system energizes at all versus fails the self-test.</span><span class='qd'><b>No POST means the OS won't load after booting</b>: No POST occurs before the OS even starts, whereas an OS load failure happens after a successful POST.</span>" },
{ id:"D5-042", domain:5, obj:"5.2", diff:"medium", q:"A continuous loud beep with no boot most often points the technician toward checking what category of hardware?", options:["Network cabling","Memory or a critical POST hardware failure","Printer drivers","Cloud storage"], answer:1, explain:"A continuous loud beep with no boot most often directs the technician toward <strong>memory or a critical POST hardware failure</strong> per the firmware's beep scheme.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network cabling</b>: Beep codes report local POST hardware faults and run before any network hardware is tested.</span><span class='qd'><b>Printer drivers</b>: Printer drivers load within the OS, long after POST, and cannot trigger startup beep codes.</span><span class='qd'><b>Cloud storage</b>: Cloud storage is a network service unrelated to local POST diagnostics and beep signaling.</span>" },
{ id:"D5-043", domain:5, obj:"5.2", diff:"hard", q:"A machine boots fine but the GPU fan spins, the display works, yet the system locks up only during 3D workloads with artifacts on screen. What is the MOST likely cause?", options:["Failing CMOS battery","Bad SATA cable","Overheating or failing GPU","Wrong boot order"], answer:2, explain:"On-screen artifacts plus lockups only under 3D workloads point to an <strong>overheating or failing GPU</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing CMOS battery</b>: A bad CMOS battery resets BIOS settings and the clock and does not produce graphical artifacts under load.</span><span class='qd'><b>Bad SATA cable</b>: A faulty SATA cable causes storage dropouts or errors, not display artifacts during 3D rendering.</span><span class='qd'><b>Wrong boot order</b>: Boot order only affects which device the system boots from, with no impact on in-game graphics behavior.</span>" },
{ id:"D5-044", domain:5, obj:"5.2", diff:"medium", q:"A PC keeps rebooting in a loop before reaching the OS. After the BSOD/reboot pattern and ruling out overheating, what hardware is a prime suspect?", options:["Sound card","USB keyboard","Webcam","RAM or power supply"], answer:3, explain:"Continuous reboot loops before the OS, once overheating is ruled out, most commonly trace to <strong>RAM or power supply</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Sound card</b>: A sound card handles audio and is not essential to boot, so its failure does not cause reboot loops.</span><span class='qd'><b>USB keyboard</b>: A keyboard is an input peripheral whose failure prevents input, not repeated system reboots.</span><span class='qd'><b>Webcam</b>: A webcam is a non-critical peripheral and has no role in the boot process or system stability.</span>" },
{ id:"D5-045", domain:5, obj:"5.2", diff:"easy", q:"Which tool would a technician use to test individual voltage rails coming from a PSU connector?", options:["Multimeter","Toner generator","Anti-static bag","Cable crimper"], answer:0, explain:"A <strong>multimeter</strong> measures the DC voltages on individual PSU rails to confirm proper output.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable crimper</b>: A crimper attaches connectors to cable ends and cannot measure any electrical voltage.</span><span class='qd'><b>Toner generator</b>: A toner generator sends a signal down a wire for tracing with a probe, not for reading voltage rails.</span><span class='qd'><b>Anti-static bag</b>: An anti-static bag protects components from ESD during transport and performs no measurement.</span>" },
{ id:"D5-046", domain:5, obj:"5.2", diff:"hard", q:"A technician sees frequent application crashes and occasional BSODs but Memtest passes and temps are normal. The issue began after a BIOS update. What is the BEST next action?", options:["Replace the CPU","Roll back or reflash the BIOS to a stable version and check settings","Replace all RAM","Reinstall every driver blindly"], answer:1, explain:"When instability begins right after a BIOS update, the logical step is to <strong>roll back or reflash the BIOS to a stable version and check settings</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the CPU</b>: Memtest passes and temps are normal, and the timing ties the problem to firmware, so the CPU is an unlikely and costly target.</span><span class='qd'><b>Replace all RAM</b>: Memtest already passed, clearing the RAM, so wholesale replacement would not address the BIOS-triggered instability.</span><span class='qd'><b>Reinstall every driver blindly</b>: The fault began with a firmware change, not drivers, so blind driver reinstalls ignore the actual cause.</span>" },
{ id:"D5-047", domain:5, obj:"5.2", diff:"medium", q:"A laptop runs hot and the fan is silent even under load. What is the MOST likely problem?", options:["Dead CMOS battery","Bad Wi-Fi antenna","Failed fan or clogged heatsink","Corrupt page file"], answer:2, explain:"Heat under load with a silent fan most likely indicates a <strong>failed fan or clogged heatsink</strong> preventing cooling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bad Wi-Fi antenna</b>: A faulty antenna degrades wireless signal and has nothing to do with cooling or fan operation.</span><span class='qd'><b>Corrupt page file</b>: A corrupt page file causes memory or performance errors, not a non-spinning fan and overheating.</span><span class='qd'><b>Dead CMOS battery</b>: A dead CMOS battery resets settings and the clock and does not stop the cooling fan or cause heat.</span>" },
{ id:"D5-048", domain:5, obj:"5.2", diff:"medium", q:"Which combination BEST indicates RAM as the culprit rather than the PSU?", options:["Voltage rails read low on a tester","System won't power on at all","Burning smell from the supply","Memtest reports errors and BSODs cite memory-related stop codes"], answer:3, explain:"<strong>Memtest reports errors and BSODs cite memory-related stop codes</strong> best isolates the fault to RAM rather than the PSU.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>System won't power on at all</b>: A total no-power condition implicates the power supply or its delivery chain, not memory.</span><span class='qd'><b>Burning smell from the supply</b>: A burning smell from the supply directly indicts the PSU, the opposite of pointing to RAM.</span><span class='qd'><b>Voltage rails read low on a tester</b>: Low rail voltages are measured PSU output problems, evidence of a power fault rather than a memory fault.</span>" },
{ id:"D5-049", domain:5, obj:"5.2", diff:"easy", q:"What is the function of thermal paste between a CPU and heatsink?", options:["Improving heat transfer to the heatsink","Increasing clock speed","Storing BIOS settings","Electrical insulation only"], answer:0, explain:"Thermal paste fills microscopic surface gaps to <strong>improve heat transfer to the heatsink</strong> from the CPU.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Electrical insulation only</b>: Most thermal paste is designed for heat conduction, not as an electrical insulator, and that is not its purpose.</span><span class='qd'><b>Increasing clock speed</b>: Paste enables cooling that may allow stable speeds, but it does not itself raise the clock.</span><span class='qd'><b>Storing BIOS settings</b>: BIOS settings are stored in CMOS backed by a battery, not in thermal compound.</span>" },
{ id:"D5-050", domain:5, obj:"5.3", diff:"easy", q:"A hard drive emits a repeated clicking sound and is no longer detected. What does this MOST likely indicate?", options:["A driver update is pending","Imminent or complete mechanical drive failure","A full recycle bin","Normal operation"], answer:1, explain:"A repeated clicking sound with the drive no longer detected most likely indicates <strong>imminent or complete mechanical drive failure</strong>, the click of death.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A full recycle bin</b>: A full recycle bin is a software storage condition and never causes mechanical clicking or loss of detection.</span><span class='qd'><b>Normal operation</b>: Repeated clicking with the drive vanishing from the system is never normal behavior.</span><span class='qd'><b>A driver update is pending</b>: A pending driver update is a software notification and does not produce physical clicking noises.</span>" },
{ id:"D5-051", domain:5, obj:"5.3", diff:"medium", q:"SMART reports a 'pending sector count' rising and read errors on a drive. What should the technician do FIRST?", options:["Defragment the drive","Reformat and keep using it","Back up the data immediately","Increase the page file"], answer:2, explain:"Rising SMART pending-sector counts and read errors warn of impending failure, so the first action is to <strong>back up the data immediately</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increase the page file</b>: Enlarging the page file adds more writes to a failing drive and does nothing to protect the data.</span><span class='qd'><b>Defragment the drive</b>: Defragmenting heavily stresses a failing drive with reads and writes, risking faster data loss.</span><span class='qd'><b>Reformat and keep using it</b>: Reformatting erases data and reusing a drive flagged by SMART invites total loss.</span>" },
{ id:"D5-052", domain:5, obj:"5.3", diff:"easy", q:"What does S.M.A.R.T. monitor on a storage drive?", options:["Network throughput","Monitor refresh rate","CPU temperature","Drive health and predictive failure indicators"], answer:3, explain:"<strong>S.M.A.R.T.</strong> monitors drive health and predictive failure indicators to warn of impending failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network throughput</b>: Throughput is a network metric measured by other tools, not by a drive self-monitoring system.</span><span class='qd'><b>Monitor refresh rate</b>: Refresh rate is a display property unrelated to storage health monitoring.</span><span class='qd'><b>CPU temperature</b>: CPU temperature is reported by motherboard sensors, while SMART reports on the storage drive itself.</span>" },
{ id:"D5-053", domain:5, obj:"5.3", diff:"medium", q:"A system has become extremely slow, with long load times and high disk activity at 100%. The HDD is several years old. What is a likely cause?", options:["A failing or heavily fragmented/aging hard drive","A new GPU","A fast SSD","Too much RAM"], answer:0, explain:"Sustained 100% disk usage with slowness on an aging HDD likely indicates <strong>a failing or heavily fragmented/aging hard drive</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Too much RAM</b>: Excess RAM improves performance and would never cause sustained high disk activity or slowness.</span><span class='qd'><b>A new GPU</b>: A graphics card affects display and rendering, not disk activity or load times.</span><span class='qd'><b>A fast SSD</b>: A fast SSD would reduce load times and disk bottlenecks, the opposite of the symptoms described.</span>" },
{ id:"D5-054", domain:5, obj:"5.3", diff:"hard", q:"A four-disk RAID 5 array reports 'degraded' after one drive fails. What is the correct understanding of its state?", options:["The array doubled its capacity","The array still functions but has no redundancy until the failed disk is replaced/rebuilt","Performance improved","All data is lost"], answer:1, explain:"A degraded RAID 5 array <strong>still functions but has no redundancy until the failed disk is replaced/rebuilt</strong>, since the parity is reconstructing data on the fly.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>All data is lost</b>: RAID 5 tolerates one disk failure, so the data remains intact in the degraded state.</span><span class='qd'><b>The array doubled its capacity</b>: A drive failure removes capacity, it does not increase it.</span><span class='qd'><b>Performance improved</b>: Degraded operation must reconstruct data from parity, which slows the array rather than speeding it up.</span>" },
{ id:"D5-055", domain:5, obj:"5.3", diff:"hard", q:"A RAID 5 array is already degraded with one failed disk. A second disk then fails before the rebuild completes. What is the result?", options:["It converts to RAID 1","The array continues normally","The array fails and data is lost","Capacity increases"], answer:2, explain:"RAID 5 tolerates only one disk failure, so a <strong>the array fails and data is lost</strong> when a second disk dies before the rebuild completes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The array continues normally</b>: Losing a second disk exceeds RAID 5's single-failure tolerance, so it cannot continue.</span><span class='qd'><b>Capacity increases</b>: Disk failures reduce available capacity and never expand it.</span><span class='qd'><b>It converts to RAID 1</b>: RAID levels do not automatically convert; exceeding fault tolerance simply causes failure.</span>" },
{ id:"D5-056", domain:5, obj:"5.3", diff:"medium", q:"After replacing a failed disk in a degraded RAID 5 array, what process restores redundancy?", options:["Defragmentation","Formatting all disks","Reinstalling the OS","Rebuild (resync) of the array"], answer:3, explain:"Replacing the failed disk triggers a <strong>rebuild (resync) of the array</strong>, which recalculates parity and restores redundancy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Defragmentation</b>: Defragmentation reorganizes file layout and does nothing to rebuild parity or array redundancy.</span><span class='qd'><b>Formatting all disks</b>: Formatting every disk would erase all data and destroy the array rather than restore it.</span><span class='qd'><b>Reinstalling the OS</b>: The OS is unrelated to the controller-level parity rebuild that restores redundancy.</span>" },
{ id:"D5-057", domain:5, obj:"5.3", diff:"easy", q:"A drive makes a loud grinding or clicking noise. What is the BEST immediate action?", options:["Stop using it and back up or recover data immediately","Continue using it until it stops","Defragment the drive","Increase the page file size"], answer:0, explain:"Loud grinding or clicking signals mechanical failure, so the best immediate action is to <strong>stop using it and back up or recover data immediately</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Continue using it until it stops</b>: Continued use of a mechanically failing drive accelerates damage and risks total data loss.</span><span class='qd'><b>Defragment the drive</b>: Defragmenting hammers a dying drive with heavy reads and writes, hastening its failure.</span><span class='qd'><b>Increase the page file size</b>: A larger page file adds more writes to the failing drive and does not protect the data.</span>" },
{ id:"D5-058", domain:5, obj:"5.3", diff:"medium", q:"A computer shows 'Operating System not found' at boot, but the drive spins normally. What is a likely first cause to check?", options:["The sound card","Boot order, loose data/power cable, or corrupt boot record","The CMOS clock","The GPU driver"], answer:1, explain:"An Operating System not found message with the drive spinning normally usually traces to <strong>boot order, loose data/power cable, or corrupt boot record</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The GPU driver</b>: A graphics driver loads within the OS and cannot cause a missing-OS message during boot.</span><span class='qd'><b>The sound card</b>: A sound card is a non-boot peripheral and has no role in locating or loading the operating system.</span><span class='qd'><b>The CMOS clock</b>: A wrong clock does not prevent the firmware from finding a bootable OS on the drive.</span>" },
{ id:"D5-059", domain:5, obj:"5.3", diff:"hard", q:"An SSD reports rapidly increasing reallocated/wear-level errors in SMART and intermittently disappears from the OS. What is the BEST course of action?", options:["Defragment the SSD repeatedly","Disable SMART","Back up data and plan to replace the SSD","Increase the cluster size"], answer:2, explain:"Rapidly climbing SMART wear and reallocation errors plus dropouts indicate a failing SSD, so the best action is to <strong>back up data and plan to replace the SSD</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Defragment the SSD repeatedly</b>: SSDs should not be defragmented at all, and doing so adds wear that worsens the failing drive.</span><span class='qd'><b>Disable SMART</b>: Turning off SMART only hides the warnings while the drive continues to fail toward data loss.</span><span class='qd'><b>Increase the cluster size</b>: Changing cluster size is a formatting parameter that does nothing to address hardware wear failure.</span>" },
{ id:"D5-060", domain:5, obj:"5.3", diff:"medium", q:"A RAID 1 mirror reports one drive failed. How is data availability affected?", options:["Data is immediately lost","Capacity doubles","The array must be reformatted","Data remains fully available from the surviving mirror"], answer:3, explain:"RAID 1 mirrors data across drives, so when one fails, <strong>data remains fully available from the surviving mirror</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data is immediately lost</b>: Mirroring keeps a complete copy on the other disk, so a single failure does not lose data.</span><span class='qd'><b>Capacity doubles</b>: A drive failure cannot increase capacity, and mirroring already halves usable space by design.</span><span class='qd'><b>The array must be reformatted</b>: The surviving mirror remains usable, requiring only a replacement and resync, not a reformat.</span>" },
{ id:"D5-061", domain:5, obj:"5.3", diff:"hard", q:"Which symptom is MOST associated with an impending hard drive failure?", options:["Clicking, grinding, or read/write errors","Faster boot times","Quieter fans","Bright display colors"], answer:0, explain:"<strong>Clicking, grinding, or read/write errors</strong> are the symptoms most associated with impending hard drive failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Bright display colors</b>: Display color is a monitor or GPU characteristic, not a sign of drive health.</span><span class='qd'><b>Faster boot times</b>: Faster boots indicate good performance, the opposite of a failing drive.</span><span class='qd'><b>Quieter fans</b>: Fan noise relates to cooling, not to the mechanical condition of a storage drive.</span>" },
{ id:"D5-062", domain:5, obj:"5.3", diff:"hard", q:"A RAID 0 array of two disks loses one disk. What is the impact?", options:["Performance doubles","All data on the array is lost because RAID 0 has no redundancy","No impact; RAID 0 has redundancy","Only half the data is lost and recoverable"], answer:1, explain:"RAID 0 stripes data with no parity or mirroring, so when one disk fails, <strong>all data on the array is lost because RAID 0 has no redundancy</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>No impact; RAID 0 has redundancy</b>: RAID 0 has zero redundancy, so a disk loss is catastrophic, not harmless.</span><span class='qd'><b>Only half the data is lost and recoverable</b>: Striping interleaves data across both disks, so losing one renders the whole set unreadable, not half.</span><span class='qd'><b>Performance doubles</b>: Losing a disk in a stripe set breaks the array entirely rather than improving performance.</span>" },
{ id:"D5-063", domain:5, obj:"5.3", diff:"medium", q:"A technician notices a server's RAID controller reporting an array as 'failed' rather than 'degraded.' What does this distinction mean?", options:["Failed means the rebuild finished","Failed means data is intact and redundant","Failed means too many disks were lost and the array is no longer usable","Failed and degraded are identical"], answer:2, explain:"A <strong>failed means too many disks were lost and the array is no longer usable</strong>, distinct from a degraded array that still functions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failed means data is intact and redundant</b>: A failed array has exceeded its fault tolerance, so data is not intact or redundant.</span><span class='qd'><b>Failed and degraded are identical</b>: Degraded still serves data without redundancy, whereas failed is offline and unusable.</span><span class='qd'><b>Failed means the rebuild finished</b>: A completed rebuild returns the array to a healthy state, not a failed one.</span>" },
{ id:"D5-064", domain:5, obj:"5.3", diff:"medium", q:"A drive intermittently disappears and reappears in the OS, with no clicking. What is a good FIRST hardware check?", options:["Reinstall the OS","Update the GPU driver","Replace the motherboard","Check/replace the SATA data and power cables and connections"], answer:3, explain:"Intermittent appearance and disappearance with no clicking points to a connection issue, so a good first check is to <strong>check/replace the SATA data and power cables and connections</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the motherboard</b>: Swapping the board is an expensive last resort that skips the far more likely loose-cable cause.</span><span class='qd'><b>Reinstall the OS</b>: Reinstalling software cannot fix a physical, intermittent connection between the drive and the board.</span><span class='qd'><b>Update the GPU driver</b>: A graphics driver has no relationship to whether a storage drive is detected on its data bus.</span>" },
{ id:"D5-065", domain:5, obj:"5.3", diff:"easy", q:"What is the safest response to a SMART warning that predicts drive failure?", options:["Back up data and replace the drive proactively","Defragment the drive","Ignore it until the drive dies","Disable SMART monitoring"], answer:0, explain:"The safest response to a SMART failure prediction is to <strong>back up data and replace the drive proactively</strong> before it fails completely.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Ignore it until the drive dies</b>: Waiting for total failure risks losing all data with no chance to recover it safely.</span><span class='qd'><b>Disable SMART monitoring</b>: Disabling SMART removes the early warning without resolving the underlying drive failure.</span><span class='qd'><b>Defragment the drive</b>: Defragmenting stresses an already failing drive and does nothing to protect the data.</span>" },
{ id:"D5-066", domain:5, obj:"5.3", diff:"hard", q:"After a RAID 5 rebuild completes successfully, what should the technician do to follow the methodology?", options:["Delete the array","Verify array health/redundancy and document the failure and resolution","Convert to RAID 0","Skip testing and close the ticket"], answer:1, explain:"Per the methodology, after a successful rebuild you <strong>verify array health/redundancy and document the failure and resolution</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Skip testing and close the ticket</b>: Skipping verification leaves the restored redundancy unconfirmed, violating the methodology.</span><span class='qd'><b>Delete the array</b>: Deleting the array would destroy all the data the rebuild just protected.</span><span class='qd'><b>Convert to RAID 0</b>: Converting to RAID 0 removes all redundancy, the opposite of confirming a healthy fault-tolerant array.</span>" },
{ id:"D5-067", domain:5, obj:"5.3", diff:"medium", q:"A user's PC boots but takes several minutes; Task Manager shows disk at 100% and the drive emits faint clicking. What is the MOST likely cause?", options:["Insufficient RAM only","A failing PSU","A failing hard drive","A bad network card"], answer:2, explain:"Extreme slowness with 100% disk usage and faint clicking strongly indicates <strong>a failing hard drive</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Insufficient RAM only</b>: Low RAM raises paging but does not produce mechanical clicking from the drive.</span><span class='qd'><b>A failing PSU</b>: A failing power supply causes shutdowns and instability, not sustained disk activity with clicking.</span><span class='qd'><b>A bad network card</b>: A faulty network card affects connectivity, not local disk performance or drive noise.</span>" },
{ id:"D5-068", domain:5, obj:"5.3", diff:"medium", q:"Which RAID level provides redundancy through mirroring and survives a single drive failure with data fully intact?", options:["JBOD","RAID 0","RAID 5 with two failed disks","RAID 1"], answer:3, explain:"<strong>RAID 1</strong> mirrors data across drives, providing redundancy that survives a single drive failure with data fully intact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RAID 0</b>: RAID 0 only stripes for speed with no redundancy, so one failure loses all data.</span><span class='qd'><b>RAID 5 with two failed disks</b>: RAID 5 tolerates only one failure, so two failed disks means the array is lost.</span><span class='qd'><b>JBOD</b>: JBOD simply concatenates independent disks with no mirroring or parity, offering no redundancy.</span>" },
{ id:"D5-069", domain:5, obj:"5.3", diff:"hard", q:"A solid-state drive does not click but suddenly is not recognized at all. What should the technician check FIRST?", options:["Cable/connection, port, and whether it appears in BIOS/UEFI","The CMOS battery","The GPU fan","The thermal paste"], answer:0, explain:"For an SSD that suddenly is not recognized but does not click, first check the <strong>cable/connection, port, and whether it appears in BIOS/UEFI</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The thermal paste</b>: Thermal paste relates to CPU cooling and has no connection to whether a drive is detected.</span><span class='qd'><b>The CMOS battery</b>: A CMOS battery affects settings retention, not the physical detection of a storage device.</span><span class='qd'><b>The GPU fan</b>: A graphics card fan is unrelated to storage connectivity or drive recognition.</span>" },
{ id:"D5-070", domain:5, obj:"5.3", diff:"hard", q:"A degraded RAID 5 array's rebuild keeps failing partway through, and another disk shows rising SMART errors. What is the BEST action?", options:["Convert the array to RAID 0","Back up any accessible data immediately before a second drive fails","Ignore the SMART errors","Force the rebuild repeatedly until it works"], answer:1, explain:"With a failing rebuild and a second disk weakening, total loss is imminent, so the best action is to <strong>back up any accessible data immediately before a second drive fails</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Force the rebuild repeatedly until it works</b>: Repeatedly forcing a rebuild stresses the already failing second disk and risks triggering total array loss.</span><span class='qd'><b>Convert the array to RAID 0</b>: Converting to RAID 0 removes all redundancy and would destroy the existing data.</span><span class='qd'><b>Ignore the SMART errors</b>: Ignoring a second disk's rising SMART errors invites a second failure and complete data loss.</span>" }
);
APLUS1.questions.push(
  { id:"D5-071", domain:5, obj:"5.4", diff:"easy", q:"A user reports that their laptop screen is completely black, but the power LED is on and the system makes its normal startup sounds. Connecting an external monitor shows a clear image. What is the MOST likely failed component?", options:["Hard drive","Integrated GPU","LCD backlight or screen panel","System RAM"], answer:2, explain:"<strong>LCD backlight or screen panel</strong> is correct because a working external monitor proves the GPU and signal chain are fine, so the fault is isolated to the laptop's own display assembly (backlight, inverter, or panel).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Integrated GPU</b>: A failed GPU would corrupt or blank the external monitor too, but the external image is clear, so the GPU is working.</span><span class='qd'><b>System RAM</b>: Bad RAM would prevent the system from posting and producing the normal startup sounds, and it would not output a clean image to an external display.</span><span class='qd'><b>Hard drive</b>: A failed drive affects booting the OS, not the production of a video image, and it would not explain why the internal panel is black while the external one works.</span>" },
  { id:"D5-072", domain:5, obj:"5.4", diff:"easy", q:"A monitor displays an image that is very dim and can only be seen when a flashlight is shone on it. Which component has most likely failed?", options:["Graphics driver","Capacitor on the motherboard","Video cable","Backlight"], answer:3, explain:"<strong>Backlight</strong> is correct because a faint image visible only under a flashlight means the LCD pixels are still being driven but the light source behind them (backlight or its inverter/driver) has failed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Video cable</b>: A bad cable causes no image, distortion, or color loss, not a dim but otherwise correct picture that appears under external light.</span><span class='qd'><b>Graphics driver</b>: A driver problem affects resolution, refresh, or rendering, not the physical brightness of the backlight, and would not produce a flashlight-visible image.</span><span class='qd'><b>Capacitor on the motherboard</b>: A failed motherboard capacitor causes power, boot, or stability faults, not a perfectly formed image that is simply unlit.</span>" },
  { id:"D5-073", domain:5, obj:"5.4", diff:"easy", q:"A user notices a small cluster of permanently black spots on their LCD that never change color. What are these called?", options:["Dead pixels","Image persistence","Artifacts","Stuck pixels"], answer:0, explain:"<strong>Dead pixels</strong> is correct because pixels that stay permanently black no longer receive power to their subpixel transistors, so they cannot produce any color.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stuck pixels</b>: Stuck pixels are locked on a fixed color (red, green, or blue), not black, because their subpixels are stuck illuminated rather than dead.</span><span class='qd'><b>Image persistence</b>: Image persistence (burn-in) is a ghost of a previous static image, not a permanent cluster of unchanging black dots.</span><span class='qd'><b>Artifacts</b>: Artifacts are random, shifting visual corruption usually tied to GPU/VRAM faults, not fixed black points on the panel.</span>" },
  { id:"D5-074", domain:5, obj:"5.4", diff:"medium", q:"A pixel on an LCD is permanently lit a single solid color such as red or green. Which technique is MOST likely to resolve a stuck pixel?", options:["Replacing the video cable","Running pixel-cycling software or gentle pressure massage","Updating the BIOS","Degaussing the display"], answer:1, explain:"<strong>Running pixel-cycling software or gentle pressure massage</strong> is correct because a stuck pixel (a subpixel locked on) can sometimes be freed by rapidly cycling colors or lightly massaging the spot to reset the liquid crystal.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replacing the video cable</b>: A cable swap addresses signal loss or distortion across the whole image, not a single permanently lit pixel on the panel.</span><span class='qd'><b>Updating the BIOS</b>: The BIOS controls firmware-level system settings and has no influence over an individual physical subpixel.</span><span class='qd'><b>Degaussing the display</b>: Degaussing removes magnetic distortion on legacy CRT monitors and has no effect on an LCD's pixels.</span>" },
  { id:"D5-075", domain:5, obj:"5.4", diff:"medium", q:"A desktop monitor shows a faint ghost of a static image (such as a taskbar) that remains visible even after the screen content changes. What is this symptom called?", options:["Color depth error","Dead pixels","Burn-in / image persistence","Backlight bleed"], answer:2, explain:"<strong>Burn-in / image persistence</strong> is correct because a faint ghost of a static image that lingers after content changes is caused by the same image being displayed for very long periods.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dead pixels</b>: Dead pixels are individual black points, not a recognizable ghost of a previously shown layout like a taskbar.</span><span class='qd'><b>Backlight bleed</b>: Backlight bleed is uneven light leaking around the panel edges, not a retained image of prior content.</span><span class='qd'><b>Color depth error</b>: A color depth issue causes banding or limited color range, not a persistent ghost of a static image.</span>" },
  { id:"D5-076", domain:5, obj:"5.4", diff:"medium", q:"A user's screen periodically flickers and the image briefly tears. After updating the OS, the issue began. What should the technician try FIRST?", options:["Replace the video cable","Reseat the RAM","Replace the monitor","Roll back or update the graphics driver"], answer:3, explain:"<strong>Roll back or update the graphics driver</strong> is correct because flicker and tearing that began right after an OS update almost always trace to a graphics driver that changed, and adjusting it is the cheapest, least invasive first step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the monitor</b>: Replacing hardware before testing software ignores the clear timing correlation with the OS update and is far more costly.</span><span class='qd'><b>Replace the video cable</b>: A cable fault would not suddenly appear in lockstep with an OS update, since the cable was unchanged.</span><span class='qd'><b>Reseat the RAM</b>: RAM problems cause crashes, freezes, or memory errors, not display flicker that coincides with a driver change.</span>" },
  { id:"D5-077", domain:5, obj:"5.4", diff:"medium", q:"A monitor displays distorted colors with a strong magenta tint and some columns of pixels are wrong. The image is fine on another computer. What is the MOST likely cause?", options:["Bent or damaged video cable pins / loose connector","Dead pixels","Incorrect refresh rate","Failed backlight"], answer:0, explain:"<strong>Bent or damaged video cable pins / loose connector</strong> is correct because a magenta tint and wrong pixel columns reflect missing color-channel signals, and the fault following the cable rather than the computer confirms a damaged cable or connector.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failed backlight</b>: A backlight failure makes the screen dim or dark overall, not tinted with correct geometry on one machine and wrong on another.</span><span class='qd'><b>Dead pixels</b>: Dead pixels are fixed black dots that would appear identically on the other computer too, not a tint that disappears when moved.</span><span class='qd'><b>Incorrect refresh rate</b>: A wrong refresh rate causes flicker or an out-of-range blank, not a magenta color shift tied to a specific cable.</span>" },
  { id:"D5-078", domain:5, obj:"5.4", diff:"hard", q:"A user reports the display occasionally goes black for one second then returns, several times per hour, on an external monitor connected via HDMI. The cable is fully seated. Which is the BEST next step?", options:["Replace the GPU","Try a different/known-good HDMI cable and port","Increase the screen resolution","Disable the integrated graphics"], answer:1, explain:"<strong>Try a different/known-good HDMI cable and port</strong> is correct because brief, intermittent black-outs over HDMI are classic signs of a marginal cable or port, and swapping known-good parts isolates the fault before spending on hardware.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the GPU</b>: Replacing the GPU is expensive and premature when the symptom points to the link, and a failing GPU would cause artifacts or crashes, not clean brief drop-outs.</span><span class='qd'><b>Increase the screen resolution</b>: Raising resolution adds bandwidth demand and could worsen a marginal link, and it does nothing to diagnose the intermittent signal loss.</span><span class='qd'><b>Disable the integrated graphics</b>: Disabling integrated graphics changes which adapter renders but does not address a physical HDMI cable or port problem.</span>" },
  { id:"D5-079", domain:5, obj:"5.4", diff:"hard", q:"A high-refresh gaming monitor connected via an older cable refuses to display above 60 Hz even though both monitor and GPU support 144 Hz. What is the MOST likely cause?", options:["Incorrect color depth","Failing backlight","Cable bandwidth too low for that resolution/refresh combination","Stuck pixels"], answer:2, explain:"<strong>Cable bandwidth too low for that resolution/refresh combination</strong> is correct because an older cable (such as HDMI 1.4 or a low-grade DisplayPort cable) cannot carry the data rate needed for high resolution at 144 Hz, so the link caps at 60 Hz.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing backlight</b>: A backlight problem affects brightness, not the maximum refresh rate the link can negotiate.</span><span class='qd'><b>Stuck pixels</b>: Stuck pixels are individual lit dots and have no bearing on the refresh rate the cable can support.</span><span class='qd'><b>Incorrect color depth</b>: Color depth affects color range, and while it shares bandwidth, the scenario specifically names an older low-bandwidth cable as the limiting factor.</span>" },
  { id:"D5-080", domain:5, obj:"5.4", diff:"medium", q:"During gameplay a user sees random colored shapes, lines, and corrupted textures scattered across the screen, and the GPU runs very hot. What are these visual defects called?", options:["Burn-in","Backlight bleed","Dead pixels","Artifacts"], answer:3, explain:"<strong>Artifacts</strong> is correct because random colored shapes, lines, and corrupted textures that appear under load with a very hot GPU are the signature of an overheating or failing GPU/VRAM.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dead pixels</b>: Dead pixels are fixed black dots in the same location, not random, shifting corruption that tracks GPU temperature and load.</span><span class='qd'><b>Burn-in</b>: Burn-in is a static ghost of a long-displayed image, not the dynamic random corruption seen during gameplay.</span><span class='qd'><b>Backlight bleed</b>: Backlight bleed is light leaking around the panel edges, unrelated to GPU rendering errors.</span>" },
  { id:"D5-081", domain:5, obj:"5.4", diff:"easy", q:"A projector in a conference room suddenly shuts off after about 20 minutes of use and its temperature light is illuminated. What is the MOST likely cause?", options:["Overheating due to a clogged air filter or blocked vents","Wrong input source","Bad video cable","Burned-out lamp"], answer:0, explain:"<strong>Overheating due to a clogged air filter or blocked vents</strong> is correct because a projector that runs a while then shuts down with its temperature light lit is hitting thermal limits, most often from a dirty filter or obstructed ventilation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Burned-out lamp</b>: A dead lamp produces no image at all from the start, not a normal run followed by a heat-triggered shutdown.</span><span class='qd'><b>Wrong input source</b>: A wrong input shows a no-signal message immediately and never illuminates the temperature warning light.</span><span class='qd'><b>Bad video cable</b>: A faulty cable causes image loss or distortion, not a thermal shutdown after twenty minutes of operation.</span>" },
  { id:"D5-082", domain:5, obj:"5.4", diff:"medium", q:"A projector's image has become noticeably dim over months of heavy use, though it still powers on and displays. What is the MOST likely cause?", options:["Failing power supply","Aging lamp/bulb nearing end of life","Dirty video cable","Incorrect aspect ratio"], answer:1, explain:"<strong>Aging lamp/bulb nearing end of life</strong> is correct because projector lamps gradually lose brightness over their rated service hours, so a steady dimming with heavy use is the classic end-of-life sign.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing power supply</b>: A failing power supply causes shutdowns, flicker, or no power, not a slow, even decline in brightness over months.</span><span class='qd'><b>Dirty video cable</b>: A dirty or faulty cable distorts or drops the signal but does not progressively dim a properly displayed image.</span><span class='qd'><b>Incorrect aspect ratio</b>: A wrong aspect ratio stretches or letterboxes the picture, with no effect on overall brightness.</span>" },
  { id:"D5-083", domain:5, obj:"5.4", diff:"hard", q:"After being placed in a bag still hot, a projector now shows no image and clicks when powered on. The technician suspects the lamp. What is the BEST first action before ordering parts?", options:["Increase the fan speed in the menu","Replace the entire projector","Allow full cooldown, then inspect/test the lamp and reseat it","Update the firmware"], answer:2, explain:"<strong>Allow full cooldown, then inspect/test the lamp and reseat it</strong> is correct because a hot lamp must cool before handling for safety, and reseating or testing it rules out a loose or cracked lamp that can mimic other failures before parts are ordered.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the entire projector</b>: Replacing the whole unit is wasteful when the suspected fault is a single serviceable lamp that has not yet been inspected.</span><span class='qd'><b>Update the firmware</b>: Firmware updates address software behavior, not a physical no-image-and-clicking symptom from a hot lamp.</span><span class='qd'><b>Increase the fan speed in the menu</b>: Raising fan speed addresses cooling, but it does not restore a lamp that may be cracked or unseated and cannot be done while the unit shows no image.</span>" },
  { id:"D5-084", domain:5, obj:"5.4", diff:"medium", q:"A laptop displays correctly on its built-in screen but only the upper-left quarter of the image appears, very large and pixelated, on an external projector. What setting should be checked FIRST?", options:["Refresh rate","Backlight brightness","Color depth","Display resolution/scaling sent to the projector"], answer:3, explain:"<strong>Display resolution/scaling sent to the projector</strong> is correct because seeing only a zoomed, pixelated quarter of the image means the output resolution or scaling does not match the projector's native resolution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Color depth</b>: Color depth controls the range of colors, not which portion of the image is displayed or how large it appears.</span><span class='qd'><b>Refresh rate</b>: Refresh rate affects flicker and motion smoothness, not the cropped, magnified region seen on the projector.</span><span class='qd'><b>Backlight brightness</b>: Brightness controls how light or dark the image is, not the resolution or scaling mismatch causing the zoom.</span>" },
  { id:"D5-085", domain:5, obj:"5.4", diff:"hard", q:"A user complains of eye strain and reports the desktop LCD seems to subtly 'pulse.' A camera's slow-motion mode shows rapid brightness flicker. Which adjustment is MOST likely to help?", options:["Raising the brightness/disabling PWM flicker or adjusting refresh rate","Replacing the cable","Disabling color management","Lowering the resolution"], answer:0, explain:"<strong>Raising the brightness/disabling PWM flicker or adjusting refresh rate</strong> is correct because subtle pulsing captured in slow motion is typically PWM backlight dimming at low brightness, which higher brightness or a flicker-free mode mitigates.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Lowering the resolution</b>: Reducing resolution makes the image less sharp but does not change PWM backlight flicker.</span><span class='qd'><b>Replacing the cable</b>: The cable carries the signal and is not responsible for backlight dimming flicker tied to brightness level.</span><span class='qd'><b>Disabling color management</b>: Color management affects color accuracy and profiles, not the rapid brightness modulation causing the perceived pulse.</span>" },
  { id:"D5-086", domain:5, obj:"5.4", diff:"easy", q:"A dual-monitor user finds that one monitor shows 'No Signal' while the other works. Both are connected to the same GPU. What should the technician check FIRST?", options:["The GPU is failing","The cable and input source selection on the no-signal monitor","The OS license","The monitor's firmware version"], answer:1, explain:"<strong>The cable and input source selection on the no-signal monitor</strong> is correct because when one of two monitors on the same GPU shows no signal, the simplest causes (a loose cable or the monitor set to the wrong input) should be checked first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The GPU is failing</b>: A failing GPU would typically affect both outputs or cause artifacts, and it is the costly assumption to jump to before checking cheap, common causes.</span><span class='qd'><b>The OS license</b>: An OS license has nothing to do with whether a monitor receives a video signal.</span><span class='qd'><b>The monitor's firmware version</b>: Firmware is rarely the cause of a sudden no-signal and is far down the troubleshooting order behind cable and input checks.</span>" },
  { id:"D5-087", domain:5, obj:"5.4", diff:"medium", q:"A monitor occasionally shows a brief 'Input Not Supported' or 'Out of Range' message and goes blank. What is the MOST likely cause?", options:["Bad RAM","Dead pixels","Resolution or refresh rate set higher than the monitor supports","Failed backlight"], answer:2, explain:"<strong>Resolution or refresh rate set higher than the monitor supports</strong> is correct because an Out of Range or Input Not Supported message means the signal exceeds the monitor's maximum supported resolution or refresh rate, so it blanks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dead pixels</b>: Dead pixels are fixed black dots and never generate an on-screen out-of-range warning.</span><span class='qd'><b>Failed backlight</b>: A failed backlight makes the screen dark, not an explicit signal-range message before going blank.</span><span class='qd'><b>Bad RAM</b>: Faulty RAM causes crashes or boot failures, not a monitor reporting an unsupported signal mode.</span>" },
  { id:"D5-088", domain:5, obj:"5.4", diff:"hard", q:"A technician must confirm whether a black-screen laptop's problem is the panel or the GPU without external tools beyond a monitor. What is the BEST diagnostic step?", options:["Replace the RAM","Reset the BIOS to defaults","Reinstall the OS","Connect a known-good external monitor and observe whether an image appears"], answer:3, explain:"<strong>Connect a known-good external monitor and observe whether an image appears</strong> is correct because an external image proves the GPU works and isolates the fault to the internal panel or cable, while no external image points toward the GPU.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reinstall the OS</b>: Reinstalling the OS addresses software corruption, not a hardware black-screen diagnosis, and it cannot run on a system that shows nothing.</span><span class='qd'><b>Replace the RAM</b>: Swapping RAM is a guess at a different subsystem and does not distinguish a panel failure from a GPU failure.</span><span class='qd'><b>Reset the BIOS to defaults</b>: A BIOS reset changes firmware settings and would not separate a faulty internal panel from a faulty GPU.</span>" },
  { id:"D5-089", domain:5, obj:"5.5", diff:"easy", q:"A technician notices a smartphone whose back cover is bulging and the case is splitting apart. What is the correct action?", options:["Stop using/charging it and safely remove or recycle the swollen battery","Puncture the battery to release pressure","Place it in a freezer to shrink it","Charge it fully to rebalance the cells"], answer:0, explain:"<strong>Stop using/charging it and safely remove or recycle the swollen battery</strong> is correct because a bulging lithium-ion battery is a fire and explosion hazard that must be taken out of service and disposed of through proper hazardous-waste handling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Charge it fully to rebalance the cells</b>: Charging a swollen cell adds energy and heat, increasing the risk of fire or rupture rather than rebalancing anything.</span><span class='qd'><b>Puncture the battery to release pressure</b>: Puncturing a lithium-ion cell exposes reactive material to air and can cause immediate ignition or explosion.</span><span class='qd'><b>Place it in a freezer to shrink it</b>: Freezing does not relieve the chemical swelling and can introduce condensation and thermal stress that worsen the hazard.</span>" },
  { id:"D5-090", domain:5, obj:"5.5", diff:"easy", q:"Which of the following is the GREATEST safety risk associated with a swollen lithium-ion battery in a tablet?", options:["Data loss","Fire or explosion from puncturing the battery","Slower charging","Cracked screen glass"], answer:1, explain:"<strong>Fire or explosion from puncturing the battery</strong> is correct because a swollen lithium-ion cell can ignite or explode, especially if punctured or compressed, making fire the greatest safety risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Data loss</b>: Data loss is an inconvenience, not a physical safety hazard from a swelling battery.</span><span class='qd'><b>Slower charging</b>: Slower charging is a performance symptom, not a danger to people or property.</span><span class='qd'><b>Cracked screen glass</b>: A swollen battery can press against the screen, but cracked glass is a cosmetic/structural concern, not the primary fire-and-explosion risk.</span>" },
  { id:"D5-091", domain:5, obj:"5.5", diff:"easy", q:"A user says their phone will not charge at all, even with a known-good charger and cable. After cleaning the charging port, it works. What was the cause?", options:["Corrupt OS","Swollen battery","Lint/debris in the charging port","Failed display"], answer:2, explain:"<strong>Lint/debris in the charging port</strong> is correct because pocket lint packs into the port and blocks contact with the connector, so cleaning it restores charging without replacing any part.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Swollen battery</b>: A swollen battery is a physical hazard and would not be resolved simply by cleaning the charging port.</span><span class='qd'><b>Failed display</b>: A display fault affects what is shown on screen, not whether the phone accepts a charge.</span><span class='qd'><b>Corrupt OS</b>: Charging is handled by hardware and firmware below the OS, so an OS issue would not be fixed by clearing the port.</span>" },
  { id:"D5-092", domain:5, obj:"5.5", diff:"medium", q:"A smartphone becomes very hot and the battery drains quickly even when idle. Which is the BEST first troubleshooting step?", options:["Replace the charging port","Factory reset the device","Replace the battery immediately","Check for a rogue app or process consuming CPU/GPU in the background"], answer:3, explain:"<strong>Check for a rogue app or process consuming CPU/GPU in the background</strong> is correct because overheating with rapid drain at idle is most often a misbehaving background app, and identifying and stopping it is the least invasive first step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the battery immediately</b>: Replacing the battery is an invasive, costly action taken before confirming the far more common software cause.</span><span class='qd'><b>Replace the charging port</b>: A charging port fault affects charging, not idle heat and battery drain from active processes.</span><span class='qd'><b>Factory reset the device</b>: A factory reset is drastic and wipes data, jumping past the simple step of finding the offending app first.</span>" },
  { id:"D5-093", domain:5, obj:"5.5", diff:"medium", q:"A laptop battery reports it is charged to 100% but the laptop dies within ten minutes when unplugged. What does this indicate?", options:["A worn-out battery with reduced capacity","A bad display","Too many open browser tabs","A faulty AC adapter"], answer:0, explain:"<strong>A worn-out battery with reduced capacity</strong> is correct because a battery that reads full yet dies within minutes has lost real capacity from charge cycles and aging and needs replacement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A faulty AC adapter</b>: A bad adapter affects charging, but the laptop already reached 100 percent, so the failure is in holding charge, not supplying it.</span><span class='qd'><b>A bad display</b>: A display fault changes the image, not how long the system runs on battery.</span><span class='qd'><b>Too many open browser tabs</b>: Open tabs increase load somewhat but cannot turn a genuine full charge into a ten-minute runtime; the real capacity is gone.</span>" },
  { id:"D5-094", domain:5, obj:"5.5", diff:"medium", q:"A user's phone shows full Wi-Fi bars but web pages will not load, while other devices on the same network work fine. What should the technician try FIRST?", options:["Replace the antenna","Toggle airplane mode or forget/rejoin the Wi-Fi network","Factory reset the phone","Replace the battery"], answer:1, explain:"<strong>Toggle airplane mode or forget/rejoin the Wi-Fi network</strong> is correct because full bars but no internet on a single device usually means a stale wireless association, and re-establishing the connection refreshes it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the antenna</b>: A bad antenna would lower signal bars, but the phone shows full signal, so the radio link is fine.</span><span class='qd'><b>Factory reset the phone</b>: A factory reset is drastic and wipes data before trying the simple connection refresh that usually fixes a stale association.</span><span class='qd'><b>Replace the battery</b>: The battery powers the device and has nothing to do with a connected-but-no-internet Wi-Fi state.</span>" },
  { id:"D5-095", domain:5, obj:"5.5", diff:"medium", q:"A field technician's smartphone consistently shows weak cellular signal inside a steel-frame building but full bars outdoors. What is the MOST likely cause?", options:["Failed battery","Defective SIM card","Building construction blocking RF signal","Outdated OS"], answer:2, explain:"<strong>Building construction blocking RF signal</strong> is correct because steel and concrete attenuate radio frequencies, so strong signal outdoors but weak indoors points to physical obstruction rather than a phone fault.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Defective SIM card</b>: A bad SIM would cause connection problems everywhere, not signal that strengthens the moment you step outside.</span><span class='qd'><b>Outdated OS</b>: OS version does not change how building materials attenuate cellular RF.</span><span class='qd'><b>Failed battery</b>: A failing battery affects runtime and power, not the strength of the received cellular signal by location.</span>" },
  { id:"D5-096", domain:5, obj:"5.5", diff:"hard", q:"A tablet randomly reboots and becomes hot only while running a 3D game, but is stable otherwise. Which is the MOST likely cause?", options:["Bad Wi-Fi antenna","Corrupt SIM","Swollen battery","Thermal shutdown protection triggered by heavy GPU load"], answer:3, explain:"<strong>Thermal shutdown protection triggered by heavy GPU load</strong> is correct because reboots that occur only under intense 3D load with high heat mean the device is hitting its thermal limit and resetting to protect itself.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Swollen battery</b>: A swollen battery is a physical hazard that affects the device constantly, not a fault that appears only during GPU-heavy gaming.</span><span class='qd'><b>Bad Wi-Fi antenna</b>: A Wi-Fi antenna fault affects connectivity, not heat-related reboots tied to graphics load.</span><span class='qd'><b>Corrupt SIM</b>: A corrupt SIM affects cellular service and would not cause load-dependent thermal reboots.</span>" },
  { id:"D5-097", domain:5, obj:"5.5", diff:"hard", q:"A user reports their phone's touchscreen responds erratically (ghost touches) only while the device is plugged into a specific charger. What is the BEST first step?", options:["Test with a known-good, properly grounded charger/cable","Factory reset the phone","Replace the battery","Replace the digitizer"], answer:0, explain:"<strong>Test with a known-good, properly grounded charger/cable</strong> is correct because ghost touches that appear only with one charger usually come from a poor-quality or ungrounded charger injecting electrical noise into the touchscreen, and a known-good charger isolates that.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the digitizer</b>: Replacing the digitizer is invasive and premature when the symptom is clearly tied to one specific charger, not the touch panel itself.</span><span class='qd'><b>Factory reset the phone</b>: A reset addresses software, but ghost touches caused by charger noise are an electrical issue no software change will fix.</span><span class='qd'><b>Replace the battery</b>: The battery is unrelated to touch noise that appears only while a particular charger is connected.</span>" },
  { id:"D5-098", domain:5, obj:"5.5", diff:"hard", q:"A laptop intermittently disconnects from Wi-Fi only when the lid is partially closed, but stays connected when fully open. What is the MOST likely cause?", options:["Driver corruption","Pinched or loose Wi-Fi antenna cable routed through the hinge","Weak router","Outdated firmware"], answer:1, explain:"<strong>Pinched or loose Wi-Fi antenna cable routed through the hinge</strong> is correct because the Wi-Fi antenna runs through the display hinge, so connectivity that changes with lid position indicates a pinched or loose antenna cable rather than software.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Driver corruption</b>: A corrupt driver causes consistent problems regardless of lid angle, not drops that correlate with physical hinge position.</span><span class='qd'><b>Weak router</b>: A weak router would affect the connection at all lid positions, not specifically when the lid is partially closed.</span><span class='qd'><b>Outdated firmware</b>: Firmware behavior does not vary with how far the laptop lid is open or closed.</span>" },
  { id:"D5-099", domain:5, obj:"5.5", diff:"medium", q:"A phone screen does not auto-rotate when the device is turned sideways, even though the rotation lock is off. Which component is MOST likely at fault?", options:["Speaker","Battery","Accelerometer/gyroscope sensor","Charging port"], answer:2, explain:"<strong>Accelerometer/gyroscope sensor</strong> is correct because auto-rotation depends on the motion sensor, so when rotation lock is off but the screen will not rotate, the accelerometer/gyroscope is the likely fault.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Battery</b>: The battery supplies power and has no role in detecting device orientation.</span><span class='qd'><b>Charging port</b>: The charging port handles power and data transfer, not orientation sensing for screen rotation.</span><span class='qd'><b>Speaker</b>: The speaker outputs audio and is unrelated to whether the display rotates.</span>" },
  { id:"D5-100", domain:5, obj:"5.5", diff:"easy", q:"A user's wireless earbuds will not connect to their phone, though they worked yesterday. What is the simplest FIRST troubleshooting step?", options:["Factory reset the phone","Update the phone OS","Replace the earbuds","Toggle Bluetooth off/on and re-pair the device"], answer:3, explain:"<strong>Toggle Bluetooth off/on and re-pair the device</strong> is correct because re-establishing the Bluetooth pairing clears most transient connection failures and is the simplest first step requiring no hardware action.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the earbuds</b>: Replacing hardware that worked yesterday is premature before trying a basic pairing refresh.</span><span class='qd'><b>Factory reset the phone</b>: A full reset wipes data and is drastically more disruptive than simply re-pairing the earbuds.</span><span class='qd'><b>Update the phone OS</b>: An OS update is a larger, slower step that is unnecessary for a routine Bluetooth re-pair.</span>" },
  { id:"D5-101", domain:5, obj:"5.5", diff:"medium", q:"A smartphone will only charge when the cable is held at a particular angle. After ruling out the cable and charger, what is the MOST likely cause?", options:["A loose or damaged charging port/connector","Bad Wi-Fi antenna","Corrupt firmware","Worn battery"], answer:0, explain:"<strong>A loose or damaged charging port/connector</strong> is correct because charging that works only at a specific cable angle, after ruling out the cable and charger, indicates a worn or physically damaged port that needs repair.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Worn battery</b>: A worn battery affects runtime and capacity, not whether the device accepts a charge based on cable angle.</span><span class='qd'><b>Bad Wi-Fi antenna</b>: The Wi-Fi antenna handles wireless connectivity and has nothing to do with the charging connection.</span><span class='qd'><b>Corrupt firmware</b>: Firmware corruption would not cause an angle-dependent charging fault, which is plainly a physical connector issue.</span>" },
  { id:"D5-102", domain:5, obj:"5.5", diff:"medium", q:"A phone's display is intact and lit, but no touch input registers anywhere on the screen. Which component has most likely failed?", options:["LCD panel","Digitizer (touch layer)","Battery","Proximity sensor"], answer:1, explain:"<strong>Digitizer (touch layer)</strong> is correct because when the image is intact and lit but no touch registers, the touch-sensing digitizer layer has failed while the display panel still works.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LCD panel</b>: The LCD panel produces the image, which is fine here, so it is not the failed component.</span><span class='qd'><b>Battery</b>: The battery powers the device and has no role in registering touch input.</span><span class='qd'><b>Proximity sensor</b>: The proximity sensor detects nearness (such as during calls), not finger touches across the entire screen.</span>" },
  { id:"D5-103", domain:5, obj:"5.5", diff:"hard", q:"A user's laptop runs fine on AC power but will not power on with only the battery installed, even after a full charge cycle. What is the BEST conclusion?", options:["The RAM is faulty","The display is bad","The battery or its charging circuit has failed and needs replacement","The OS is corrupt"], answer:2, explain:"<strong>The battery or its charging circuit has failed and needs replacement</strong> is correct because a laptop that runs on AC but is dead on a fully charged battery has a functional system except for the battery or its charging circuit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The display is bad</b>: The laptop works on AC power, so the display is functional and unrelated to the battery-only failure.</span><span class='qd'><b>The OS is corrupt</b>: A corrupt OS would affect operation on AC power too, but the system runs fine when plugged in.</span><span class='qd'><b>The RAM is faulty</b>: Faulty RAM would cause failures on AC power as well, not a symptom isolated to running on battery alone.</span>" },
  { id:"D5-104", domain:5, obj:"5.5", diff:"easy", q:"A technician finds a tablet that is extremely slow and very warm to the touch during simple tasks. What should be checked FIRST?", options:["Charging port","Speaker","Cellular antenna","Background apps/updates consuming resources"], answer:3, explain:"<strong>Background apps/updates consuming resources</strong> is correct because sluggishness with warmth during light tasks is commonly caused by background processes or updates, so checking and stopping them is the simplest first step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cellular antenna</b>: The cellular antenna affects signal and connectivity, not general slowness and heat during simple tasks.</span><span class='qd'><b>Charging port</b>: The charging port handles power delivery, not CPU load that makes the device slow and warm.</span><span class='qd'><b>Speaker</b>: The speaker outputs audio and has no bearing on performance or heat.</span>" },
  { id:"D5-105", domain:5, obj:"5.6", diff:"easy", q:"A laser printer produces pages with text that is uniformly faded and light across the entire page. What is the MOST likely cause?", options:["Low toner","Wrong paper type","Corrupt driver","Dirty fuser"], answer:0, explain:"<strong>Low toner</strong> is correct because uniformly faded, light text across the whole page is the classic sign of low toner, which redistributing or replacing the cartridge restores.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dirty fuser</b>: A dirty or failing fuser causes smearing or toner that rubs off, not an evenly faded but properly bonded page.</span><span class='qd'><b>Wrong paper type</b>: The wrong paper causes jams, curl, or poor fusing, not a uniformly light image from adequate toner.</span><span class='qd'><b>Corrupt driver</b>: A corrupt driver produces garbled characters or wrong formatting, not evenly faded correct text.</span>" },
  { id:"D5-106", domain:5, obj:"5.6", diff:"easy", q:"A laser printout shows a faint duplicate of the image repeated slightly below the original. What is this defect called?", options:["Smearing","Ghosting","Banding","Creasing"], answer:1, explain:"<strong>Ghosting</strong> is correct because a faint duplicate image repeated slightly below the original comes from residual charge or a worn drum/fuser leaving a previous image impression on the page.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Smearing</b>: Smearing is toner that smudges or rubs because it was not fused, not a distinct faint repeat of the image.</span><span class='qd'><b>Banding</b>: Banding is horizontal light/dark stripes from uneven toner delivery, not a ghosted second copy of the content.</span><span class='qd'><b>Creasing</b>: Creasing is physical folding of the paper in the path, not a duplicated faint image.</span>" },
  { id:"D5-107", domain:5, obj:"5.6", diff:"easy", q:"Toner easily smears or rubs off a freshly printed laser page. Which component is MOST likely at fault?", options:["Toner cartridge","Transfer roller","Fuser assembly","Pickup roller"], answer:2, explain:"<strong>Fuser assembly</strong> is correct because the fuser bonds toner to paper with heat and pressure, so toner that smears or rubs off means the fuser is failing to fuse it properly.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Transfer roller</b>: The transfer roller moves toner from the drum to the paper, but if toner reaches the page yet rubs off, the issue is fusing, not transfer.</span><span class='qd'><b>Pickup roller</b>: The pickup roller feeds paper into the printer and has no role in bonding toner to the page.</span><span class='qd'><b>Toner cartridge</b>: The cartridge supplies toner, but toner that prints yet smears was delivered correctly and simply not fused.</span>" },
  { id:"D5-108", domain:5, obj:"5.6", diff:"medium", q:"A laser printer leaves a single thin vertical white line running down every page. What is the MOST likely cause?", options:["Wrong paper size","Network timeout","Low toner","Debris on the imaging drum or a foreign object on the laser path"], answer:3, explain:"<strong>Debris on the imaging drum or a foreign object on the laser path</strong> is correct because a consistent thin white vertical line means something is blocking toner transfer at that exact spot down every page.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low toner</b>: Low toner causes overall fading, not a single sharp white line in a fixed horizontal position.</span><span class='qd'><b>Wrong paper size</b>: An incorrect paper size causes margin or scaling problems, not a vertical white streak through the image.</span><span class='qd'><b>Network timeout</b>: A network timeout interrupts the job or prevents printing, not a physical white line on otherwise printed pages.</span>" },
  { id:"D5-109", domain:5, obj:"5.6", diff:"medium", q:"A laser printer repeatedly shows a paper jam at the same point, and creased paper is pulled from the fuser area. Which component should be inspected FIRST?", options:["Pickup/separation rollers and fuser for worn or stuck parts","Toner cartridge","Display panel","Network card"], answer:0, explain:"<strong>Pickup/separation rollers and fuser for worn or stuck parts</strong> is correct because repeated jams at the same point with creased paper from the fuser area indicate worn rollers or an obstruction grabbing or folding the paper there.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network card</b>: The network card handles data transfer and has no role in the physical paper path where jams occur.</span><span class='qd'><b>Toner cartridge</b>: The toner cartridge supplies toner and does not cause paper to jam and crease at the fuser.</span><span class='qd'><b>Display panel</b>: The display panel shows status messages and is unrelated to a mechanical jam.</span>" },
  { id:"D5-110", domain:5, obj:"5.6", diff:"medium", q:"An inkjet printer prints documents with horizontal white gaps/streaks through the text and graphics. What is the BEST first step?", options:["Replace the printhead","Run the printer's nozzle-check and head-cleaning utility","Replace the paper tray","Reinstall the OS"], answer:1, explain:"<strong>Run the printer's nozzle-check and head-cleaning utility</strong> is correct because horizontal white gaps and streaks on an inkjet usually come from clogged nozzles, and the built-in cleaning cycle clears most clogs before any replacement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the printhead</b>: Replacing the printhead is costly and premature before trying the cleaning cycle that resolves most nozzle clogs.</span><span class='qd'><b>Replace the paper tray</b>: The paper tray holds and feeds paper and has nothing to do with ink gaps in the printed image.</span><span class='qd'><b>Reinstall the OS</b>: Reinstalling the OS is drastic and unrelated to physical nozzle clogs causing the streaks.</span>" },
  { id:"D5-111", domain:5, obj:"5.6", diff:"medium", q:"A printer outputs pages full of random characters, symbols, and garbled text instead of the document. What is the MOST likely cause?", options:["Empty paper tray","Low toner","Wrong or corrupted print driver","Paper jam"], answer:2, explain:"<strong>Wrong or corrupted print driver</strong> is correct because pages of random characters and symbols mean the printer received data in a page-description language it cannot interpret, typically from a wrong or corrupt driver.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low toner</b>: Low toner produces faded output, not pages filled with garbled stray characters.</span><span class='qd'><b>Paper jam</b>: A paper jam stops printing or produces a partial page, not correctly fed pages full of garbage text.</span><span class='qd'><b>Empty paper tray</b>: An empty tray halts printing entirely rather than producing garbled output.</span>" },
  { id:"D5-112", domain:5, obj:"5.6", diff:"hard", q:"A laser printer produces output with repeating smudges or marks at a fixed, regular interval down the page (for example, every 3 inches). What is the MOST likely cause?", options:["Wrong driver","Network congestion","Low toner","A defect or contamination on a rotating roller/drum whose circumference matches the spacing"], answer:3, explain:"<strong>A defect or contamination on a rotating roller/drum whose circumference matches the spacing</strong> is correct because a mark that repeats at a fixed interval corresponds to one rotation of a roller or the drum, and the spacing equals that part's circumference, identifying the bad component.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low toner</b>: Low toner fades the whole page evenly rather than producing marks at a precise repeating interval.</span><span class='qd'><b>Wrong driver</b>: A wrong driver garbles or misformats output, not a regularly spaced physical smudge tied to a rotating part.</span><span class='qd'><b>Network congestion</b>: Network congestion slows or delays jobs but cannot create periodic mechanical marks on the page.</span>" },
  { id:"D5-113", domain:5, obj:"5.6", diff:"hard", q:"Multiple users on a network printer report jobs printing very slowly and sometimes failing, while a directly connected USB test page prints instantly. What should the technician investigate FIRST?", options:["Network connectivity, IP/print-spooler, or driver configuration on the print path","The fuser","The paper type","The toner cartridge"], answer:0, explain:"<strong>Network connectivity, IP/print-spooler, or driver configuration on the print path</strong> is correct because instant local USB printing but slow or failed network jobs isolates the fault to the network path, spooler, or driver/IP setup rather than the printer's mechanics.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The toner cartridge</b>: The toner cartridge affects print quality, not the speed difference between local and network jobs that proves the engine is fine.</span><span class='qd'><b>The fuser</b>: The fuser bonds toner and is shared by all jobs, so it cannot explain why only network printing is slow while USB is instant.</span><span class='qd'><b>The paper type</b>: Paper type affects feeding and quality, not the network-versus-USB performance gap.</span>" },
  { id:"D5-114", domain:5, obj:"5.6", diff:"medium", q:"A laser printer leaves a vertical black smudged streak down one side of every page. After cleaning, the problem persists. What is the MOST likely failing component?", options:["Fuser only","Toner cartridge or imaging drum (often integrated) with a defect/leak","Pickup roller","Network cable"], answer:1, explain:"<strong>Toner cartridge or imaging drum (often integrated) with a defect/leak</strong> is correct because a persistent vertical black streak that survives cleaning indicates a scratched or leaking drum or cartridge depositing toner along that line, so replacing it resolves it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Fuser only</b>: A fuser fault causes smearing or poor fusing across the page, not a consistent vertical black line from a single spot.</span><span class='qd'><b>Pickup roller</b>: The pickup roller feeds paper and does not deposit toner streaks down the page.</span><span class='qd'><b>Network cable</b>: A network cable carries data and cannot produce a physical black streak on the printed page.</span>" },
  { id:"D5-115", domain:5, obj:"5.6", diff:"easy", q:"A user complains their printouts have light, washed-out colors on an inkjet that has not been used in months. What is the MOST likely cause?", options:["Paper jam","Wrong driver","Dried/clogged ink in the cartridges or printhead","Bad network cable"], answer:2, explain:"<strong>Dried/clogged ink in the cartridges or printhead</strong> is correct because an inkjet idle for months dries out, clogging nozzles and producing faded, washed-out color that cleaning cycles or new cartridges restore.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wrong driver</b>: A wrong driver garbles output or misformats pages, not evenly faded color tied to long disuse.</span><span class='qd'><b>Bad network cable</b>: A bad network cable disrupts data transfer, not the color density of printed output.</span><span class='qd'><b>Paper jam</b>: A paper jam stops or interrupts printing rather than producing complete but washed-out pages.</span>" },
  { id:"D5-116", domain:5, obj:"5.6", diff:"hard", q:"A print job sits in the queue marked 'Error' and no other jobs print until it is cleared, even after the paper jam is removed. What is the BEST action?", options:["Reinstall the OS","Replace the toner","Replace the printer","Clear the stuck job and restart the print spooler service"], answer:3, explain:"<strong>Clear the stuck job and restart the print spooler service</strong> is correct because an errored job can hang the queue, and clearing it plus restarting the spooler service releases the queue so subsequent jobs print.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the printer</b>: Replacing hardware is drastic when the problem is a software queue hung on one stuck job.</span><span class='qd'><b>Reinstall the OS</b>: Reinstalling the OS is far too disruptive for a single stuck print job that a spooler restart clears.</span><span class='qd'><b>Replace the toner</b>: Toner affects print quality, not a queue that is blocked by an errored job after a jam was cleared.</span>" },
  { id:"D5-117", domain:5, obj:"5.6", diff:"medium", q:"A thermal receipt printer suddenly prints completely blank receipts, though the paper feeds normally. What is the MOST likely cause?", options:["Thermal paper loaded upside down or wrong (non-thermal) paper","Bad network cable","Corrupt driver","Out of toner"], answer:0, explain:"<strong>Thermal paper loaded upside down or wrong (non-thermal) paper</strong> is correct because thermal printers use no ink or toner and form an image with heat, so blank output with normal feeding means the heat-sensitive side faces the wrong way or non-thermal paper is loaded.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Out of toner</b>: Thermal printers have no toner, so this cannot be the cause of blank receipts.</span><span class='qd'><b>Bad network cable</b>: A bad network cable would prevent jobs from arriving, not produce fed-but-blank receipts.</span><span class='qd'><b>Corrupt driver</b>: A corrupt driver garbles output, but here the paper feeds and comes out blank, pointing to the paper orientation or type.</span>" },
  { id:"D5-118", domain:5, obj:"5.6", diff:"medium", q:"Every page from a laser printer comes out completely black. Which component is MOST likely defective?", options:["Pickup roller","Imaging drum or its charging corona (primary charge failure)","Fuser","Paper tray"], answer:1, explain:"<strong>Imaging drum or its charging corona (primary charge failure)</strong> is correct because an all-black page means the drum is not receiving its uniform charge, so toner adheres everywhere, indicating a drum or primary charge corona failure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Pickup roller</b>: The pickup roller feeds paper and has no effect on whether the drum charges or how toner adheres.</span><span class='qd'><b>Fuser</b>: The fuser bonds toner with heat; a fuser fault causes smearing, not a fully black image from over-deposited toner.</span><span class='qd'><b>Paper tray</b>: The paper tray holds paper and cannot cause a completely black page.</span>" },
  { id:"D5-119", domain:5, obj:"5.6", diff:"hard", q:"A shared laser printer occasionally prints a page with overlapping text from two different documents merged together. What is the MOST likely cause?", options:["Bad pickup roller","Failing fuser","A spooler/driver or memory error causing jobs to collide","Low toner"], answer:2, explain:"<strong>A spooler/driver or memory error causing jobs to collide</strong> is correct because merged output from two separate documents points to a spooler, driver, or printer-memory problem corrupting or colliding jobs rather than any mechanical part.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failing fuser</b>: A failing fuser causes smearing or poor fusing, not text from two different jobs overlapping on one page.</span><span class='qd'><b>Low toner</b>: Low toner fades output but cannot merge content from separate documents.</span><span class='qd'><b>Bad pickup roller</b>: A bad pickup roller causes feed or jam problems, not data from two jobs combining on a page.</span>" },
  { id:"D5-120", domain:5, obj:"5.6", diff:"easy", q:"A laser printer shows a 'Replace Toner' message and pages are getting lighter on one side. What simple step may temporarily improve print quality?", options:["Replace the fuser","Update the firmware","Reset the BIOS","Remove the cartridge and gently rock it to redistribute toner"], answer:3, explain:"<strong>Remove the cartridge and gently rock it to redistribute toner</strong> is correct because rocking the cartridge spreads the remaining toner evenly, temporarily improving uneven or light printing until a new cartridge is installed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reset the BIOS</b>: The BIOS is the computer's firmware and has no effect on toner distribution in the printer.</span><span class='qd'><b>Replace the fuser</b>: The fuser is unrelated to one-sided light printing caused by low, unevenly distributed toner.</span><span class='qd'><b>Update the firmware</b>: A firmware update changes printer software behavior, not the physical level or spread of toner in the cartridge.</span>" },
  { id:"D5-121", domain:5, obj:"5.7", diff:"easy", q:"A Windows PC cannot reach the internet, and ipconfig shows an IPv4 address of 169.254.18.7. What does this address indicate?", options:["An APIPA address assigned because the DHCP server could not be reached","A public internet IP","A loopback address","A valid static IP"], answer:0, explain:"<strong>An APIPA address assigned because the DHCP server could not be reached</strong> is correct because the 169.254.x.x range is automatically self-assigned (APIPA) when no DHCP server responds, leaving the host without a valid gateway or internet path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A valid static IP</b>: A static IP would be set manually within the network's real range, not the reserved 169.254.x.x APIPA block.</span><span class='qd'><b>A public internet IP</b>: Public addresses are routable ranges, whereas 169.254.x.x is a non-routable link-local range that never appears on the internet.</span><span class='qd'><b>A loopback address</b>: The loopback address is 127.0.0.1, used to test the local stack, not the 169.254.x.x APIPA range.</span>" },
  { id:"D5-122", domain:5, obj:"5.7", diff:"easy", q:"Which command-line tool tests basic reachability to another host by sending ICMP echo requests?", options:["nslookup","ping","ipconfig","netstat"], answer:1, explain:"<strong>ping</strong> is correct because it sends ICMP echo requests and reports replies, making it the standard first test of basic reachability to a host.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>nslookup</b>: nslookup queries DNS to resolve names to addresses; it does not send ICMP echo requests to test reachability.</span><span class='qd'><b>ipconfig</b>: ipconfig displays and manages the local adapter's IP configuration; it does not test reachability to other hosts.</span><span class='qd'><b>netstat</b>: netstat lists active connections and listening ports on the local machine, not ICMP reachability to a remote host.</span>" },
  { id:"D5-123", domain:5, obj:"5.7", diff:"easy", q:"Which Windows command displays the local computer's IP address, subnet mask, and default gateway?", options:["ping","tracert","ipconfig","nslookup"], answer:2, explain:"<strong>ipconfig</strong> is correct because it displays the host's current IP configuration, including address, subnet mask, and default gateway.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping</b>: ping tests reachability to another host with ICMP; it does not report the local IP, mask, and gateway.</span><span class='qd'><b>tracert</b>: tracert maps the router hops to a destination; it does not display the local adapter's configuration.</span><span class='qd'><b>nslookup</b>: nslookup queries DNS for name resolution; it does not show the host's IP, subnet mask, or gateway.</span>" },
  { id:"D5-124", domain:5, obj:"5.7", diff:"medium", q:"A user can ping websites by IP address but not by name. Which tool BEST helps confirm a DNS resolution problem?", options:["ipconfig","ping","tracert","nslookup"], answer:3, explain:"<strong>nslookup</strong> is correct because it queries DNS directly, so when IP addresses work but names fail, nslookup confirms whether the DNS server is resolving names correctly.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping</b>: ping tests reachability and, with a name, relies on DNS, but it does not isolate or detail the DNS resolution process the way nslookup does.</span><span class='qd'><b>tracert</b>: tracert shows the path of router hops to a destination, not whether DNS is resolving names.</span><span class='qd'><b>ipconfig</b>: ipconfig shows configured DNS servers but does not actively query them to test name resolution.</span>" },
  { id:"D5-125", domain:5, obj:"5.7", diff:"medium", q:"A connection to a remote server is slow, and the technician wants to see each router hop and where delay is introduced along the path. Which tool is BEST?", options:["tracert","ipconfig","nslookup","ping"], answer:0, explain:"<strong>tracert</strong> is correct because it maps the route to a destination hop by hop and shows latency at each hop, helping pinpoint where delay or a break occurs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping</b>: ping reports round-trip time to the final destination only, not the per-hop latency along the path.</span><span class='qd'><b>ipconfig</b>: ipconfig displays local adapter configuration and does not trace the route or measure hop latency.</span><span class='qd'><b>nslookup</b>: nslookup resolves names through DNS and has nothing to do with mapping router hops or their delays.</span>" },
  { id:"D5-126", domain:5, obj:"5.7", diff:"easy", q:"A laptop shows 'Limited connectivity' and cannot reach the internet, but can reach other devices on the LAN. Which configuration value is MOST likely missing or wrong?", options:["MAC address","Default gateway or DNS settings","Hostname","Loopback address"], answer:1, explain:"<strong>Default gateway or DNS settings</strong> is correct because local LAN communication does not require a gateway or DNS, but internet access does, so reaching the LAN while losing internet points to a missing or wrong gateway or DNS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MAC address</b>: The MAC address is a fixed hardware identifier; an incorrect one would break local communication too, which still works here.</span><span class='qd'><b>Hostname</b>: A hostname is a friendly name for the device and does not control whether it can route to the internet.</span><span class='qd'><b>Loopback address</b>: The loopback (127.0.0.1) only tests the local stack and is never used to reach the LAN or internet.</span>" },
  { id:"D5-127", domain:5, obj:"5.7", diff:"medium", q:"After receiving an APIPA address, what is the BEST first command-line action to attempt to obtain a valid address from DHCP?", options:["nslookup localhost","ping 127.0.0.1","ipconfig /release then ipconfig /renew","tracert 8.8.8.8"], answer:2, explain:"<strong>ipconfig /release then ipconfig /renew</strong> is correct because releasing the current lease and requesting a new one forces the client to ask the DHCP server again for a valid address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping 127.0.0.1</b>: Pinging the loopback only tests the local TCP/IP stack and does nothing to request an address from DHCP.</span><span class='qd'><b>tracert 8.8.8.8</b>: tracert maps hops to an external host and cannot obtain a DHCP lease, especially with only an APIPA address.</span><span class='qd'><b>nslookup localhost</b>: nslookup performs a DNS query and has no role in renewing a DHCP-assigned IP address.</span>" },
  { id:"D5-128", domain:5, obj:"5.7", diff:"medium", q:"Users on a Wi-Fi network report the connection drops intermittently every few minutes, then reconnects. Other nearby networks are on the same channel. What is the MOST likely cause?", options:["Bad DNS server","Wrong subnet mask","Failed NIC","RF interference / channel overlap with neighboring networks"], answer:3, explain:"<strong>RF interference / channel overlap with neighboring networks</strong> is correct because intermittent drops on a crowded, overlapping channel are classic RF interference, which switching to a less congested channel often resolves.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Failed NIC</b>: A failed NIC would cause a complete and persistent loss of connectivity, not periodic drops that affect multiple users on a shared channel.</span><span class='qd'><b>Bad DNS server</b>: A DNS problem breaks name resolution but does not cause the wireless link itself to drop and reconnect every few minutes.</span><span class='qd'><b>Wrong subnet mask</b>: A wrong subnet mask causes addressing and routing errors, not repeated wireless disconnects tied to channel congestion.</span>" },
  { id:"D5-129", domain:5, obj:"5.7", diff:"medium", q:"A wired PC has no network connectivity. The link light on the NIC is off and the cable is plugged in at both ends. What should the technician check FIRST?", options:["The cable/port (test a known-good cable and switch port)","The default gateway","The DHCP scope","DNS server settings"], answer:0, explain:"<strong>The cable/port (test a known-good cable and switch port)</strong> is correct because an off link light means the physical link is down, so testing a known-good cable and a different switch port isolates a bad cable or dead port first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS server settings</b>: DNS affects name resolution at a higher layer and is irrelevant when the link light shows no physical connection.</span><span class='qd'><b>The default gateway</b>: A gateway issue matters only after a link is established; an off link light means there is no link to route over.</span><span class='qd'><b>The DHCP scope</b>: DHCP assigns addresses once the link is up, but with the link light off, no address negotiation can even begin.</span>" },
  { id:"D5-130", domain:5, obj:"5.7", diff:"hard", q:"A VoIP call has choppy audio and words drop out, although file downloads complete at full speed. ping to the server shows widely varying response times. What is the MOST likely cause?", options:["Low bandwidth","High latency/jitter on the link","Wrong DNS","Bad cable"], answer:1, explain:"<strong>High latency/jitter on the link</strong> is correct because choppy real-time audio with full-speed downloads but widely varying ping times indicates jitter (variable latency), which harms latency-sensitive VoIP far more than bulk transfers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Low bandwidth</b>: Low bandwidth would slow the file downloads too, but downloads complete at full speed, ruling out a throughput shortage.</span><span class='qd'><b>Wrong DNS</b>: A DNS problem affects name resolution, not the timing consistency of an already-established VoIP audio stream.</span><span class='qd'><b>Bad cable</b>: A bad cable would degrade all traffic including downloads, but downloads are fine, pointing to variable latency instead.</span>" },
  { id:"D5-131", domain:5, obj:"5.7", diff:"hard", q:"A technician runs ping 127.0.0.1 successfully but cannot ping the default gateway. What does the successful loopback ping confirm?", options:["The cable is good","The gateway is reachable","The local TCP/IP stack is installed and working","DNS is functioning"], answer:2, explain:"<strong>The local TCP/IP stack is installed and working</strong> is correct because pinging 127.0.0.1 tests only the loopback, so success there with a failed gateway ping confirms the stack works while the path to the gateway is the problem.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The gateway is reachable</b>: The gateway ping failed, so loopback success says nothing about whether the gateway can be reached.</span><span class='qd'><b>DNS is functioning</b>: A loopback ping uses an IP address and does not exercise or validate DNS name resolution.</span><span class='qd'><b>The cable is good</b>: Loopback traffic never leaves the local stack, so it cannot confirm anything about the physical cable.</span>" },
  { id:"D5-132", domain:5, obj:"5.7", diff:"hard", q:"Several users intermittently lose connectivity, and the technician suspects two devices share the same IP. Which symptom BEST supports an IP address conflict?", options:["Slow DNS lookups","High ping latency to external sites","169.254 APIPA address","A Windows message stating another device is using this IP, with dropped connectivity"], answer:3, explain:"<strong>A Windows message stating another device is using this IP, with dropped connectivity</strong> is correct because duplicate IP assignments trigger an explicit OS warning that another system has the same address, accompanied by intermittent loss of connectivity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>169.254 APIPA address</b>: An APIPA address indicates a DHCP failure, not a conflict where two devices share the same configured IP.</span><span class='qd'><b>Slow DNS lookups</b>: Slow DNS lookups point to name-resolution delays, not two hosts contending for one address.</span><span class='qd'><b>High ping latency to external sites</b>: High external latency suggests a path or congestion issue, not a duplicate-IP conflict on the local subnet.</span>" },
  { id:"D5-133", domain:5, obj:"5.7", diff:"medium", q:"A user reports very slow file transfers on a wired gigabit network, and ipconfig shows the link negotiated at 100 Mbps. What is the MOST likely cause?", options:["A damaged cable or one pair failing, forcing a lower link speed","APIPA address","Firewall blocking","Wrong DNS"], answer:0, explain:"<strong>A damaged cable or one pair failing, forcing a lower link speed</strong> is correct because gigabit needs all four pairs, so a broken pair or bad port drops the negotiated link to 100 Mbps, which uses only two pairs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wrong DNS</b>: DNS affects name resolution, not the physical link speed negotiated by the adapter.</span><span class='qd'><b>APIPA address</b>: An APIPA address signals a DHCP failure and would mean no real addressing, not a successfully linked connection at 100 Mbps.</span><span class='qd'><b>Firewall blocking</b>: A firewall filters traffic but does not change the negotiated Ethernet link speed shown by ipconfig.</span>" },
  { id:"D5-134", domain:5, obj:"5.7", diff:"medium", q:"A laptop in one corner of an office has a weak, slow Wi-Fi connection while devices near the access point are fast. What is the MOST likely cause?", options:["DNS failure","Distance/attenuation reducing signal strength at that location","Duplicate IP","Bad NIC driver"], answer:1, explain:"<strong>Distance/attenuation reducing signal strength at that location</strong> is correct because Wi-Fi weakens with distance and obstructions, so slow speeds only far from the access point indicate low signal strength rather than a configuration fault.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS failure</b>: A DNS failure breaks name resolution everywhere, not just for one laptop in a distant corner.</span><span class='qd'><b>Duplicate IP</b>: A duplicate IP causes connectivity drops regardless of physical location, not a speed loss tied to distance from the AP.</span><span class='qd'><b>Bad NIC driver</b>: A bad driver would degrade the connection consistently, not only when the device is far from the access point.</span>" },
  { id:"D5-135", domain:5, obj:"5.7", diff:"hard", q:"All hosts on a subnet suddenly lose internet access at the same time, but can still reach each other and the local file server. What is the MOST likely single point of failure?", options:["The switch","Each host's NIC","The router/gateway or its WAN/ISP link","The DNS cache on each PC"], answer:2, explain:"<strong>The router/gateway or its WAN/ISP link</strong> is correct because simultaneous loss of internet with intact internal connectivity points to a single shared component, the router/gateway or its upstream ISP link, not individual hosts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Each host's NIC</b>: Multiple NICs failing at once is implausible, and the hosts still reach each other, proving their NICs work.</span><span class='qd'><b>The DNS cache on each PC</b>: A stale local DNS cache affects name resolution per machine, not the simultaneous internet loss across the whole subnet.</span><span class='qd'><b>The switch</b>: A failed switch would break the internal LAN too, but hosts can still reach each other and the local file server.</span>" },
  { id:"D5-136", domain:5, obj:"5.7", diff:"easy", q:"Which command would a technician use to clear and reset the local DNS resolver cache on Windows?", options:["ping /reset","tracert /clear","nslookup /flush","ipconfig /flushdns"], answer:3, explain:"<strong>ipconfig /flushdns</strong> is correct because it clears the local DNS resolver cache, useful when stale cached records cause name-resolution problems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping /reset</b>: ping has no /reset switch; ping sends ICMP echo requests and cannot clear the DNS cache.</span><span class='qd'><b>tracert /clear</b>: tracert maps hops to a destination and has no /clear option to flush DNS.</span><span class='qd'><b>nslookup /flush</b>: nslookup queries DNS interactively but does not flush the local resolver cache with a /flush switch.</span>" },
  { id:"D5-137", domain:5, obj:"5.7", diff:"medium", q:"A technician needs to verify the full configured DHCP, DNS, and lease details for an adapter, not just the basic address. Which command is BEST?", options:["ipconfig /all","ping -t","tracert -d","nslookup -debug"], answer:0, explain:"<strong>ipconfig /all</strong> is correct because it shows detailed adapter information including the DHCP server, DNS servers, MAC address, and lease times, well beyond the basic ipconfig output.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping -t</b>: ping -t sends continuous ICMP echo requests to a host and does not display DHCP, DNS, or lease details.</span><span class='qd'><b>tracert -d</b>: tracert -d traces hops without resolving names; it does not show adapter DHCP or lease configuration.</span><span class='qd'><b>nslookup -debug</b>: nslookup -debug shows verbose DNS query output, not the adapter's full DHCP and lease information.</span>" },
  { id:"D5-138", domain:5, obj:"5.7", diff:"hard", q:"A user can browse most websites but one specific internal site fails by name while its IP works. ipconfig /flushdns does not help, and other users resolve the name fine. What is the BEST next step?", options:["Replace the NIC","Check the local hosts file for a stale or wrong entry overriding DNS","Renew the DHCP lease","Reset the router"], answer:1, explain:"<strong>Check the local hosts file for a stale or wrong entry overriding DNS</strong> is correct because when only one user cannot resolve a name everyone else can, an incorrect entry in that machine's hosts file is overriding DNS and should be checked.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the NIC</b>: The NIC works fine since most sites resolve and the IP reaches the server, so a hardware swap is unjustified.</span><span class='qd'><b>Renew the DHCP lease</b>: A new lease does not change a static hosts-file entry that is locally overriding DNS for that one name.</span><span class='qd'><b>Reset the router</b>: Resetting the router affects everyone, but only this single user fails to resolve the name, indicating a local override.</span>" },
  { id:"D5-139", domain:5, obj:"5.7", diff:"medium", q:"A newly installed wireless network performs well except during certain hours when speeds crash; a microwave oven and cordless phones are nearby. Which band/condition is MOST likely affected?", options:["Subnet mask error","5 GHz channel width","2.4 GHz interference from household devices","DNS server load"], answer:2, explain:"<strong>2.4 GHz interference from household devices</strong> is correct because microwaves and many cordless phones operate near 2.4 GHz, so time-correlated slowdowns on that band point to RF interference from those devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>5 GHz channel width</b>: The interfering devices operate near 2.4 GHz, not 5 GHz, so a 5 GHz channel-width setting is not the cause.</span><span class='qd'><b>DNS server load</b>: DNS load affects name-resolution speed, not the time-correlated wireless slowdowns tied to nearby appliances.</span><span class='qd'><b>Subnet mask error</b>: A subnet mask error causes addressing and routing faults, not interference that appears only during certain hours.</span>" },
  { id:"D5-140", domain:5, obj:"5.7", diff:"hard", q:"A technician suspects a cable run has a fault and wants to confirm continuity and correct pinout of each wire pair before deeper troubleshooting. Which is the BEST tool?", options:["Tone generator only","Multimeter set to AC","Loopback plug","Cable tester"], answer:3, explain:"<strong>Cable tester</strong> is correct because it verifies continuity and proper pinout of each wire pair end to end, quickly confirming whether a cable run is wired correctly and intact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a single port or NIC by looping its transmit to receive, not the continuity and pinout of a full cable run.</span><span class='qd'><b>Tone generator only</b>: A tone generator and probe trace and locate a specific cable among many but do not verify each pair's continuity and correct pinout.</span><span class='qd'><b>Multimeter set to AC</b>: A multimeter measures voltage, current, or resistance, and AC mode is for live circuits, not for verifying network cable pinout and continuity.</span>" }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-001",
    format: 1,
    domain: 2,
    title: "Web Server Firewall Rules",
    brief: "A technician is configuring a perimeter firewall for a new <span class='cy'>public web server</span>. Match each web service to its correct port so the rules allow traffic.",
    exhibitTitle: "service requirements",
    exhibit: "Allow inbound to web host:\n  <span class='cy'>HTTP</span> (cleartext web)\n  <span class='ok'>HTTPS</span> (encrypted web)\n<span class='dim'>All other ports denied by default</span>",
    fields: [
      { label: "HTTP port", hint: "Cleartext web traffic", options: ["80", "8080", "443", "21"], answer: 0, explain: "HTTP uses TCP port 80 for unencrypted web traffic." },
      { label: "HTTPS port", hint: "Encrypted web traffic", options: ["80", "443", "8443", "143"], answer: 1, explain: "HTTPS uses TCP port 443 for TLS-encrypted web traffic." },
      { label: "HTTP/HTTPS transport", hint: "Underlying protocol", options: ["UDP", "ICMP", "TCP", "GRE"], answer: 2, explain: "Both HTTP and HTTPS are carried over TCP for reliable delivery." }
    ],
    summary: "Web browsing relies on HTTP (80) and HTTPS (443), both over TCP."
  },
  {
    id: "PBQ-002",
    format: 1,
    domain: 2,
    title: "Remote Administration Ports",
    brief: "An admin needs <span class='ok'>secure</span> command-line access to Linux hosts and <span class='warnc'>legacy</span> access to an old switch. Identify the correct ports.",
    exhibitTitle: "service requirements",
    exhibit: "Remote management:\n  <span class='ok'>SSH</span> (encrypted CLI)\n  <span class='warnc'>Telnet</span> (cleartext CLI, legacy)\n<span class='dim'>Prefer SSH wherever possible</span>",
    fields: [
      { label: "SSH port", hint: "Secure shell", options: ["22", "23", "25", "443"], answer: 0, explain: "SSH uses TCP port 22 for encrypted remote shell access." },
      { label: "Telnet port", hint: "Legacy cleartext shell", options: ["21", "22", "23", "53"], answer: 2, explain: "Telnet uses TCP port 23 and sends data in cleartext." },
      { label: "Transport protocol", hint: "Both services", options: ["UDP", "TCP", "ICMP", "AH"], answer: 1, explain: "SSH and Telnet both run over TCP." }
    ],
    summary: "SSH (22) is the encrypted replacement for cleartext Telnet (23)."
  },
  {
    id: "PBQ-003",
    format: 1,
    domain: 2,
    title: "File Transfer Service",
    brief: "A user must upload files to a server using classic <span class='cy'>FTP</span>. The technician opens the control and data ports on the firewall.",
    exhibitTitle: "service requirements",
    exhibit: "FTP service:\n  <span class='cy'>FTP control</span> (commands)\n  <span class='cy'>FTP data</span> (file transfer)\n<span class='warnc'>FTP transfers credentials in cleartext</span>",
    fields: [
      { label: "FTP control port", hint: "Command channel", options: ["20", "21", "22", "69"], answer: 1, explain: "FTP uses TCP port 21 for the control/command channel." },
      { label: "FTP data port", hint: "File transfer channel", options: ["20", "21", "23", "25"], answer: 0, explain: "FTP uses TCP port 20 for the active-mode data channel." },
      { label: "FTP transport", hint: "Reliability needed", options: ["UDP", "TCP", "ICMP", "ESP"], answer: 1, explain: "FTP runs over TCP for reliable, ordered file transfer." }
    ],
    summary: "FTP uses TCP 21 (control) and TCP 20 (data)."
  },
  {
    id: "PBQ-004",
    format: 1,
    domain: 2,
    title: "Email Retrieval Protocols",
    brief: "A mail client must download mail with <span class='cy'>POP3</span> and keep folders synced with <span class='cy'>IMAP</span>. Match the standard ports.",
    exhibitTitle: "service requirements",
    exhibit: "Mailbox access:\n  <span class='cy'>POP3</span> (download and remove)\n  <span class='cy'>IMAP</span> (server-side folders)\n<span class='dim'>Cleartext variants shown here</span>",
    fields: [
      { label: "POP3 port", hint: "Post Office Protocol v3", options: ["110", "143", "25", "995"], answer: 0, explain: "POP3 uses TCP port 110 for mailbox download." },
      { label: "IMAP port", hint: "Internet Message Access", options: ["110", "143", "993", "465"], answer: 1, explain: "IMAP uses TCP port 143 for server-side mailbox access." },
      { label: "Transport", hint: "Both protocols", options: ["UDP", "TCP", "ICMP", "GRE"], answer: 1, explain: "POP3 and IMAP both use TCP." }
    ],
    summary: "POP3 (110) downloads mail; IMAP (143) syncs server folders, both over TCP."
  },
  {
    id: "PBQ-005",
    format: 1,
    domain: 2,
    title: "Outbound Mail Submission",
    brief: "An admin configures a mail relay. Identify the classic <span class='cy'>SMTP</span> port and the modern <span class='ok'>secure submission</span> port.",
    exhibitTitle: "service requirements",
    exhibit: "Sending mail:\n  <span class='cy'>SMTP</span> (server-to-server)\n  <span class='ok'>SMTP submission (STARTTLS)</span> (client send)\n<span class='dim'>Port 25 is often blocked for clients</span>",
    fields: [
      { label: "SMTP port", hint: "Classic mail transfer", options: ["25", "110", "143", "587"], answer: 0, explain: "SMTP uses TCP port 25 for server-to-server mail transfer." },
      { label: "Secure submission port", hint: "Client send with STARTTLS", options: ["25", "465", "587", "993"], answer: 2, explain: "SMTP submission uses TCP port 587 with STARTTLS for authenticated client sending." },
      { label: "Transport protocol", hint: "Both ports", options: ["UDP", "ICMP", "TCP", "AH"], answer: 2, explain: "SMTP and its submission port both run over TCP." }
    ],
    summary: "SMTP is TCP 25; secure client submission is TCP 587."
  },
  {
    id: "PBQ-006",
    format: 1,
    domain: 2,
    title: "Name Resolution and Addressing",
    brief: "A network uses <span class='cy'>DNS</span> for name resolution and <span class='cy'>DHCP</span> for address assignment. Match ports and transports.",
    exhibitTitle: "service requirements",
    exhibit: "Core services:\n  <span class='cy'>DNS</span> (hostname to IP)\n  <span class='cy'>DHCP</span> (automatic addressing)\n<span class='dim'>DHCP uses two UDP ports</span>",
    fields: [
      { label: "DNS port", hint: "Domain Name System", options: ["53", "67", "80", "123"], answer: 0, explain: "DNS uses port 53 for name resolution." },
      { label: "DNS transport", hint: "Queries vs zone transfers", options: ["TCP only", "UDP only", "Both TCP and UDP", "ICMP"], answer: 2, explain: "DNS uses UDP 53 for queries and TCP 53 for zone transfers and large responses." },
      { label: "DHCP server port", hint: "Listens for requests", options: ["67", "68", "69", "53"], answer: 0, explain: "The DHCP server listens on UDP port 67." },
      { label: "DHCP client port", hint: "Receives offers", options: ["67", "68", "88", "161"], answer: 1, explain: "The DHCP client uses UDP port 68." }
    ],
    summary: "DNS is port 53 (UDP and TCP); DHCP uses UDP 67 (server) and 68 (client)."
  },
  {
    id: "PBQ-007",
    format: 1,
    domain: 2,
    title: "Windows Remote Desktop and File Sharing",
    brief: "A help desk uses <span class='cy'>RDP</span> for remote control and <span class='cy'>SMB</span> for Windows file shares. Open the right ports.",
    exhibitTitle: "service requirements",
    exhibit: "Windows services:\n  <span class='cy'>RDP</span> (remote desktop)\n  <span class='cy'>SMB</span> (file and printer sharing)\n<span class='warnc'>Restrict these to internal networks</span>",
    fields: [
      { label: "RDP port", hint: "Remote Desktop Protocol", options: ["3389", "5900", "445", "389"], answer: 0, explain: "RDP uses TCP port 3389." },
      { label: "SMB port", hint: "Server Message Block", options: ["139", "443", "445", "636"], answer: 2, explain: "Modern SMB uses TCP port 445." },
      { label: "Transport protocol", hint: "Both services", options: ["UDP", "TCP", "ICMP", "ESP"], answer: 1, explain: "RDP and SMB both run over TCP." }
    ],
    summary: "RDP is TCP 3389; SMB file sharing is TCP 445."
  },
  {
    id: "PBQ-008",
    format: 1,
    domain: 2,
    title: "Directory Services",
    brief: "An admin integrates servers with <span class='cy'>LDAP</span> and wants the <span class='ok'>encrypted</span> variant where possible. Match the ports.",
    exhibitTitle: "service requirements",
    exhibit: "Directory access:\n  <span class='cy'>LDAP</span> (cleartext directory)\n  <span class='ok'>LDAPS</span> (TLS-encrypted directory)\n<span class='dim'>Used by Active Directory</span>",
    fields: [
      { label: "LDAP port", hint: "Lightweight Directory Access", options: ["389", "636", "445", "53"], answer: 0, explain: "LDAP uses TCP port 389 for directory queries." },
      { label: "LDAPS port", hint: "LDAP over TLS", options: ["389", "443", "636", "989"], answer: 2, explain: "LDAPS uses TCP port 636 for encrypted directory access." },
      { label: "Transport protocol", hint: "Both variants", options: ["UDP", "TCP", "ICMP", "GRE"], answer: 1, explain: "LDAP and LDAPS commonly run over TCP." }
    ],
    summary: "LDAP is TCP 389; the secure LDAPS variant is TCP 636."
  },
  {
    id: "PBQ-009",
    format: 1,
    domain: 2,
    title: "Network Monitoring with SNMP",
    brief: "A monitoring server polls devices and receives alerts using <span class='cy'>SNMP</span>. Identify the polling and trap ports.",
    exhibitTitle: "service requirements",
    exhibit: "Monitoring:\n  <span class='cy'>SNMP</span> (device polling)\n  <span class='cy'>SNMP traps</span> (device alerts)\n<span class='dim'>SNMP is connectionless</span>",
    fields: [
      { label: "SNMP polling port", hint: "Agent queries", options: ["161", "162", "123", "514"], answer: 0, explain: "SNMP agents listen on UDP port 161 for polling." },
      { label: "SNMP trap port", hint: "Unsolicited alerts", options: ["161", "162", "389", "636"], answer: 1, explain: "SNMP traps are sent to UDP port 162." },
      { label: "Transport protocol", hint: "Lightweight, connectionless", options: ["TCP", "UDP", "ICMP", "ESP"], answer: 1, explain: "SNMP typically uses UDP for both polling and traps." }
    ],
    summary: "SNMP polls on UDP 161 and sends traps on UDP 162."
  },
  {
    id: "PBQ-010",
    format: 1,
    domain: 2,
    title: "Secure Email Endpoints",
    brief: "A new mail client must use only <span class='ok'>encrypted</span> retrieval. Identify the secure IMAP and POP3 ports.",
    exhibitTitle: "service requirements",
    exhibit: "Encrypted mailbox access:\n  <span class='ok'>IMAPS</span> (IMAP over TLS)\n  <span class='ok'>POP3S</span> (POP3 over TLS)\n<span class='warnc'>Do not allow cleartext 110/143</span>",
    fields: [
      { label: "IMAPS port", hint: "Secure IMAP", options: ["143", "993", "995", "465"], answer: 1, explain: "IMAPS uses TCP port 993 for TLS-encrypted IMAP." },
      { label: "POP3S port", hint: "Secure POP3", options: ["110", "993", "995", "587"], answer: 2, explain: "POP3S uses TCP port 995 for TLS-encrypted POP3." },
      { label: "Transport protocol", hint: "Both secure variants", options: ["UDP", "TCP", "ICMP", "AH"], answer: 1, explain: "IMAPS and POP3S both run over TCP." }
    ],
    summary: "Secure mail retrieval uses IMAPS (993) and POP3S (995) over TCP."
  },
  {
    id: "PBQ-011",
    format: 1,
    domain: 2,
    title: "Identify the Service by Port",
    brief: "A technician reads a firewall log and must identify which <span class='cy'>service</span> matches each port number.",
    exhibitTitle: "service requirements",
    exhibit: "Observed ports in log:\n  TCP <span class='cy'>22</span>\n  TCP <span class='cy'>443</span>\n  UDP <span class='cy'>53</span>\n<span class='dim'>Map each to its service</span>",
    fields: [
      { label: "Service on TCP 22", hint: "Encrypted CLI", options: ["Telnet", "SSH", "FTP", "RDP"], answer: 1, explain: "TCP port 22 is SSH." },
      { label: "Service on TCP 443", hint: "Encrypted web", options: ["HTTP", "SMTP", "HTTPS", "LDAP"], answer: 2, explain: "TCP port 443 is HTTPS." },
      { label: "Service on UDP 53", hint: "Name resolution", options: ["DHCP", "DNS", "SNMP", "NTP"], answer: 1, explain: "UDP port 53 is DNS." }
    ],
    summary: "TCP 22 = SSH, TCP 443 = HTTPS, UDP 53 = DNS."
  },
  {
    id: "PBQ-012",
    format: 1,
    domain: 2,
    title: "Match Port to Mail Service",
    brief: "An admin troubleshoots mail flow and must identify which <span class='cy'>mail service</span> uses each port.",
    exhibitTitle: "service requirements",
    exhibit: "Mail-related ports:\n  TCP <span class='cy'>25</span>\n  TCP <span class='cy'>110</span>\n  TCP <span class='ok'>993</span>\n<span class='dim'>Identify each protocol</span>",
    fields: [
      { label: "Service on TCP 25", hint: "Sending mail", options: ["POP3", "SMTP", "IMAP", "HTTPS"], answer: 1, explain: "TCP port 25 is SMTP." },
      { label: "Service on TCP 110", hint: "Download mailbox", options: ["IMAP", "SMTP", "POP3", "LDAP"], answer: 2, explain: "TCP port 110 is POP3." },
      { label: "Service on TCP 993", hint: "Encrypted folder sync", options: ["POP3S", "IMAPS", "SMTP", "HTTPS"], answer: 1, explain: "TCP port 993 is IMAPS (secure IMAP)." }
    ],
    summary: "TCP 25 = SMTP, TCP 110 = POP3, TCP 993 = IMAPS."
  },
  {
    id: "PBQ-013",
    format: 1,
    domain: 2,
    title: "Infrastructure Service Ports",
    brief: "A technician must allow <span class='cy'>DHCP</span>, <span class='cy'>DNS</span>, and <span class='cy'>RDP</span> across a segmented network. Match each correctly.",
    exhibitTitle: "service requirements",
    exhibit: "Required flows:\n  <span class='cy'>DHCP</span> (client to server)\n  <span class='cy'>DNS</span> (queries)\n  <span class='cy'>RDP</span> (admin desktop)\n<span class='warnc'>RDP must be restricted by source</span>",
    fields: [
      { label: "DHCP server port", hint: "Where requests arrive", options: ["67", "68", "53", "3389"], answer: 0, explain: "The DHCP server listens on UDP port 67." },
      { label: "DNS query transport", hint: "Standard lookups", options: ["TCP", "UDP", "ICMP", "ESP"], answer: 1, explain: "Standard DNS queries use UDP port 53." },
      { label: "RDP port", hint: "Remote desktop", options: ["3389", "445", "636", "161"], answer: 0, explain: "RDP uses TCP port 3389." }
    ],
    summary: "DHCP server is UDP 67, DNS queries are UDP 53, RDP is TCP 3389."
  },
  {
    id: "PBQ-014",
    format: 1,
    domain: 2,
    title: "Cleartext vs Secure Pairs",
    brief: "An auditor maps each <span class='warnc'>cleartext</span> service to its <span class='ok'>secure</span> counterpart's port.",
    exhibitTitle: "service requirements",
    exhibit: "Replace cleartext with secure:\n  <span class='warnc'>HTTP</span> -> <span class='ok'>HTTPS</span>\n  <span class='warnc'>LDAP</span> -> <span class='ok'>LDAPS</span>\n  <span class='warnc'>POP3</span> -> <span class='ok'>POP3S</span>",
    fields: [
      { label: "Secure web port", hint: "HTTPS", options: ["80", "443", "8080", "8443"], answer: 1, explain: "HTTPS uses TCP port 443." },
      { label: "Secure directory port", hint: "LDAPS", options: ["389", "636", "443", "993"], answer: 1, explain: "LDAPS uses TCP port 636." },
      { label: "Secure POP3 port", hint: "POP3S", options: ["110", "143", "993", "995"], answer: 3, explain: "POP3S uses TCP port 995." }
    ],
    summary: "Secure counterparts: HTTPS 443, LDAPS 636, POP3S 995."
  },
  {
    id: "PBQ-015",
    format: 1,
    domain: 2,
    title: "Comprehensive Port Review",
    brief: "A final review asks the technician to match a mix of <span class='cy'>common services</span> to their correct ports and transports.",
    exhibitTitle: "service requirements",
    exhibit: "Identify each:\n  <span class='cy'>SMB</span> (Windows shares)\n  <span class='cy'>SNMP trap</span> (alerts)\n  <span class='ok'>SMTP submission</span> (secure send)\n  <span class='cy'>Telnet</span> (legacy CLI)",
    fields: [
      { label: "SMB port", hint: "File sharing", options: ["139", "445", "3389", "21"], answer: 1, explain: "SMB uses TCP port 445." },
      { label: "SNMP trap port", hint: "Device alerts", options: ["161", "162", "514", "123"], answer: 1, explain: "SNMP traps use UDP port 162." },
      { label: "SMTP submission port", hint: "Secure client send", options: ["25", "465", "587", "993"], answer: 2, explain: "SMTP submission uses TCP port 587." },
      { label: "Telnet port", hint: "Legacy cleartext", options: ["22", "23", "25", "80"], answer: 1, explain: "Telnet uses TCP port 23." }
    ],
    summary: "SMB 445 (TCP), SNMP trap 162 (UDP), SMTP submission 587 (TCP), Telnet 23 (TCP)."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-016",
    format: 1,
    domain: 2,
    title: "Secure vs insecure remote management",
    brief: "A junior admin is hardening a switch. Map each remote-management protocol to its <span class='cy'>port</span> and decide which to disable.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Goal:</span> manage the switch over an encrypted session\n<span class='cy'>Protocols in question:</span> Telnet and SSH\n<span class='dim'>Telnet sends credentials in cleartext; SSH encrypts the session.</span>",
    fields: [
      {
        label: "Telnet listens on which port?",
        hint: "Legacy cleartext terminal access",
        options: ["21", "22", "23", "25"],
        answer: 2,
        explain: "Telnet uses TCP port 23 and transmits all data, including passwords, in plaintext."
      },
      {
        label: "SSH listens on which port?",
        hint: "Encrypted replacement for Telnet",
        options: ["22", "23", "443", "3389"],
        answer: 0,
        explain: "SSH uses TCP port 22 and encrypts the entire session, making it the secure choice."
      },
      {
        label: "Which protocol should the admin DISABLE?",
        hint: "The one that exposes credentials",
        options: ["SSH (22)", "Telnet (23)", "HTTPS (443)", "RDP (3389)"],
        answer: 1,
        explain: "Telnet on port 23 sends data in cleartext and should be disabled in favor of SSH."
      }
    ],
    summary: "Telnet (23) is cleartext and should be disabled; SSH (22) provides encrypted remote management."
  },
  {
    id: "PBQ-017",
    format: 1,
    domain: 2,
    title: "Web traffic: HTTP vs HTTPS",
    brief: "A user reports the company store loads but the browser shows <span class='warnc'>Not Secure</span>. Match the web protocols to their ports.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Site:</span> internal e-commerce portal\n<span class='cy'>Symptom:</span> padlock missing, browser warns Not Secure\n<span class='dim'>HTTP is unencrypted; HTTPS adds TLS encryption.</span>",
    fields: [
      {
        label: "HTTP listens on which port?",
        hint: "Unencrypted web",
        options: ["80", "143", "443", "8080"],
        answer: 0,
        explain: "HTTP uses TCP port 80 and carries web traffic without encryption."
      },
      {
        label: "HTTPS listens on which port?",
        hint: "HTTP over TLS",
        options: ["80", "389", "443", "636"],
        answer: 2,
        explain: "HTTPS uses TCP port 443 and encrypts web traffic with TLS."
      },
      {
        label: "Which port must be reachable to fix the Not Secure warning?",
        hint: "The encrypted web port",
        options: ["80", "443", "21", "3389"],
        answer: 1,
        explain: "Serving the site over HTTPS (port 443) with a valid certificate removes the Not Secure warning."
      }
    ],
    summary: "HTTP is port 80 (unencrypted); HTTPS is port 443 (TLS) and resolves the Not Secure warning."
  },
  {
    id: "PBQ-018",
    format: 1,
    domain: 2,
    title: "File transfer security tiers",
    brief: "A team must move files to a partner. Match each <span class='cy'>file-transfer protocol</span> to the correct port.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Options being evaluated:</span> FTP, SFTP, FTPS\n<span class='cy'>Requirement:</span> understand which ports each uses\n<span class='dim'>FTP is cleartext; SFTP rides on SSH; FTPS is FTP over TLS/SSL.</span>",
    fields: [
      {
        label: "FTP control connection port",
        hint: "Classic cleartext transfer",
        options: ["20", "21", "22", "990"],
        answer: 1,
        explain: "FTP uses TCP port 21 for control (and 20 for active-mode data); it is unencrypted."
      },
      {
        label: "SFTP listens on which port?",
        hint: "SSH File Transfer Protocol",
        options: ["21", "22", "69", "989"],
        answer: 1,
        explain: "SFTP runs over SSH and therefore uses TCP port 22."
      },
      {
        label: "FTPS (implicit) commonly uses which ports?",
        hint: "FTP over TLS/SSL, implicit mode",
        options: ["20/21", "22/22", "989/990", "443/8443"],
        answer: 2,
        explain: "Implicit FTPS uses TCP ports 989 (data) and 990 (control) for FTP secured with TLS/SSL."
      },
      {
        label: "Which option is the LEAST secure?",
        hint: "No encryption at all",
        options: ["SFTP (22)", "FTPS (989/990)", "FTP (21)", "HTTPS (443)"],
        answer: 2,
        explain: "Plain FTP on port 21 transmits credentials and data in cleartext, making it the least secure."
      }
    ],
    summary: "FTP is 21 (cleartext), SFTP is 22 (over SSH), FTPS is 989/990 (over TLS/SSL)."
  },
  {
    id: "PBQ-019",
    format: 1,
    domain: 2,
    title: "Outbound email cannot send",
    brief: "Users can read mail but cannot <span class='warnc'>send</span>. Identify the email submission ports.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Symptom:</span> inbox loads, but outgoing messages stick in Outbox\n<span class='cy'>Suspect service:</span> SMTP submission blocked by firewall\n<span class='dim'>SMTP relays mail between servers and from clients.</span>",
    fields: [
      {
        label: "Classic SMTP server-to-server port",
        hint: "Default mail relay",
        options: ["25", "110", "143", "993"],
        answer: 0,
        explain: "SMTP uses TCP port 25 for server-to-server mail transfer."
      },
      {
        label: "Modern SMTP client submission port",
        hint: "Authenticated submission, often with STARTTLS",
        options: ["465", "587", "995", "143"],
        answer: 1,
        explain: "Port 587 is the standard authenticated SMTP submission port for mail clients."
      },
      {
        label: "Which port must be open for the user to SEND mail?",
        hint: "Submission, not retrieval",
        options: ["110 (POP3)", "143 (IMAP)", "587 (SMTP submission)", "993 (IMAPS)"],
        answer: 2,
        explain: "Sending requires SMTP submission; opening TCP 587 lets the client deliver outgoing mail."
      }
    ],
    summary: "SMTP relays on 25 and accepts client submission on 587; the user needs 587 open to send."
  },
  {
    id: "PBQ-020",
    format: 1,
    domain: 2,
    title: "Mail retrieval: POP3 vs IMAP",
    brief: "Compare the two <span class='cy'>mailbox retrieval</span> protocols and their secure variants.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Choice:</span> POP3 downloads-and-deletes vs IMAP server-side sync\n<span class='cy'>Requirement:</span> match each to insecure and secure ports\n<span class='dim'>Secure variants wrap the protocol in TLS/SSL.</span>",
    fields: [
      {
        label: "POP3 (unencrypted) port",
        hint: "Download mail to one device",
        options: ["110", "143", "993", "995"],
        answer: 0,
        explain: "POP3 uses TCP port 110 without encryption."
      },
      {
        label: "Secure POP3 (POP3S) port",
        hint: "POP3 over TLS/SSL",
        options: ["110", "143", "993", "995"],
        answer: 3,
        explain: "POP3S uses TCP port 995 to encrypt mailbox retrieval."
      },
      {
        label: "IMAP (unencrypted) port",
        hint: "Server-side mailbox sync",
        options: ["110", "143", "465", "993"],
        answer: 1,
        explain: "IMAP uses TCP port 143 without encryption."
      },
      {
        label: "Secure IMAP (IMAPS) port",
        hint: "IMAP over TLS/SSL",
        options: ["143", "465", "993", "995"],
        answer: 2,
        explain: "IMAPS uses TCP port 993 to encrypt server-side mailbox access."
      }
    ],
    summary: "POP3 110 / POP3S 995; IMAP 143 / IMAPS 993 - the secure variants add TLS over the base ports."
  },
  {
    id: "PBQ-021",
    format: 1,
    domain: 2,
    title: "Directory lookups failing",
    brief: "Sign-ins fail because the app cannot query the directory. Match <span class='cy'>LDAP</span> to its ports.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>App:</span> queries Active Directory for user lookups\n<span class='warnc'>Symptom:</span> authentication times out\n<span class='dim'>LDAP is cleartext; LDAPS encrypts directory queries with TLS.</span>",
    fields: [
      {
        label: "LDAP (unencrypted) port",
        hint: "Lightweight Directory Access Protocol",
        options: ["389", "443", "636", "3268"],
        answer: 0,
        explain: "LDAP uses TCP/UDP port 389 for directory queries in cleartext."
      },
      {
        label: "LDAPS (secure) port",
        hint: "LDAP over SSL/TLS",
        options: ["389", "443", "636", "853"],
        answer: 2,
        explain: "LDAPS uses TCP port 636 to encrypt directory communication."
      },
      {
        label: "To encrypt directory lookups, which port should the app use?",
        hint: "The secure directory port",
        options: ["389", "636", "143", "3389"],
        answer: 1,
        explain: "Switching the app to LDAPS on port 636 encrypts the directory queries."
      }
    ],
    summary: "LDAP is port 389 (cleartext); LDAPS is port 636 (TLS) for encrypted directory lookups."
  },
  {
    id: "PBQ-022",
    format: 1,
    domain: 2,
    title: "Remote desktop session blocked",
    brief: "A help-desk tech cannot connect to a Windows host. Identify the <span class='cy'>RDP</span> port to open.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Tool:</span> Microsoft Remote Desktop Connection\n<span class='warnc'>Error:</span> cannot connect, host unreachable\n<span class='dim'>RDP provides a full graphical remote session to Windows.</span>",
    fields: [
      {
        label: "RDP listens on which port?",
        hint: "Remote Desktop Protocol",
        options: ["22", "443", "3389", "5900"],
        answer: 2,
        explain: "RDP uses TCP port 3389 for remote graphical sessions to Windows hosts."
      },
      {
        label: "Which port would VNC use instead?",
        hint: "Cross-platform graphical remote control",
        options: ["3389", "5900", "23", "161"],
        answer: 1,
        explain: "VNC typically uses TCP port 5900, distinguishing it from RDP's 3389."
      },
      {
        label: "Which firewall rule lets the tech connect via RDP?",
        hint: "Open the RDP port inbound",
        options: ["Allow TCP 22", "Allow TCP 3389", "Allow UDP 161", "Allow TCP 23"],
        answer: 1,
        explain: "Allowing inbound TCP 3389 permits the Remote Desktop session to reach the host."
      }
    ],
    summary: "RDP uses TCP 3389; opening that port inbound restores the remote desktop session."
  },
  {
    id: "PBQ-023",
    format: 1,
    domain: 2,
    title: "Name resolution and addressing",
    brief: "Devices get IPs but cannot resolve names. Match <span class='cy'>DNS</span> and <span class='cy'>DHCP</span> to their ports.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Symptom:</span> ping by IP works, ping by hostname fails\n<span class='cy'>Suspect:</span> DNS lookups blocked\n<span class='dim'>DHCP hands out addresses; DNS resolves names to IPs.</span>",
    fields: [
      {
        label: "DNS listens on which port?",
        hint: "Resolves hostnames to IP addresses",
        options: ["53", "67", "123", "161"],
        answer: 0,
        explain: "DNS uses port 53 (UDP for queries, TCP for zone transfers) to resolve names."
      },
      {
        label: "DHCP server ports are?",
        hint: "Dynamic address assignment",
        options: ["53/53", "67/68", "80/443", "137/138"],
        answer: 1,
        explain: "DHCP uses UDP port 67 (server) and UDP port 68 (client) to lease IP addresses."
      },
      {
        label: "If ping-by-IP works but names fail, which port must be open?",
        hint: "Name resolution, not addressing",
        options: ["67 (DHCP)", "53 (DNS)", "123 (NTP)", "443 (HTTPS)"],
        answer: 1,
        explain: "Working IP connectivity rules out addressing; opening DNS port 53 restores name resolution."
      }
    ],
    summary: "DNS is port 53 and DHCP uses 67/68; a name-resolution failure points to DNS port 53."
  },
  {
    id: "PBQ-024",
    format: 1,
    domain: 2,
    title: "SNMP monitoring versions",
    brief: "A NOC monitors devices with SNMP. Match the <span class='cy'>port</span> and compare v2c vs v3 security.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Tool:</span> network monitoring server polling switches and routers\n<span class='cy'>Versions:</span> SNMPv2c (community strings) vs SNMPv3 (auth + encryption)\n<span class='dim'>SNMP traps are sent on a separate port from polling.</span>",
    fields: [
      {
        label: "SNMP polling (get/set) port",
        hint: "Manager queries the agent",
        options: ["161", "162", "514", "69"],
        answer: 0,
        explain: "SNMP polling (get/set) uses UDP port 161 on the agent."
      },
      {
        label: "SNMP trap port",
        hint: "Agent sends unsolicited alerts",
        options: ["161", "162", "123", "389"],
        answer: 1,
        explain: "SNMP traps are sent to the manager on UDP port 162."
      },
      {
        label: "Which SNMP version adds authentication and encryption?",
        hint: "Cleartext community strings are insecure",
        options: ["SNMPv1", "SNMPv2c", "SNMPv3", "SNMPv2"],
        answer: 2,
        explain: "SNMPv3 adds authentication and encryption; v1/v2c rely on cleartext community strings."
      }
    ],
    summary: "SNMP polls on UDP 161 and sends traps on UDP 162; SNMPv3 adds auth and encryption over v2c."
  },
  {
    id: "PBQ-025",
    format: 1,
    domain: 2,
    title: "File and print sharing ports",
    brief: "A user cannot reach a Windows file share. Match <span class='cy'>SMB</span> and related sharing protocols.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Symptom:</span> mapped network drive shows disconnected\n<span class='cy'>Suspect:</span> SMB blocked by host firewall\n<span class='dim'>SMB underlies Windows file and printer sharing.</span>",
    fields: [
      {
        label: "Modern SMB (direct over TCP) port",
        hint: "Server Message Block / CIFS",
        options: ["139", "443", "445", "3389"],
        answer: 2,
        explain: "Modern SMB runs directly over TCP port 445."
      },
      {
        label: "Legacy NetBIOS Session Service port",
        hint: "Older SMB over NetBIOS",
        options: ["137", "138", "139", "445"],
        answer: 2,
        explain: "NetBIOS Session Service uses TCP port 139, used by legacy SMB over NetBIOS."
      },
      {
        label: "Which port must be open to reach the share?",
        hint: "Direct-hosted SMB",
        options: ["445", "21", "161", "25"],
        answer: 0,
        explain: "Opening TCP 445 (direct SMB) lets the client reconnect to the Windows file share."
      }
    ],
    summary: "SMB uses TCP 445 (direct) or 139 (NetBIOS); opening 445 restores access to the share."
  },
  {
    id: "PBQ-026",
    format: 1,
    domain: 2,
    title: "Time sync and TFTP imaging",
    brief: "PXE imaging and time sync both fail. Match <span class='cy'>NTP</span> and <span class='cy'>TFTP</span> to ports.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Symptom 1:</span> clocks drift, Kerberos auth breaks\n<span class='ok'>Symptom 2:</span> PXE boot cannot pull an image\n<span class='dim'>NTP synchronizes clocks; TFTP is a lightweight UDP file transfer.</span>",
    fields: [
      {
        label: "NTP listens on which port?",
        hint: "Network Time Protocol",
        options: ["119", "123", "143", "161"],
        answer: 1,
        explain: "NTP uses UDP port 123 to synchronize device clocks."
      },
      {
        label: "TFTP listens on which port?",
        hint: "Trivial File Transfer Protocol",
        options: ["20", "21", "69", "445"],
        answer: 2,
        explain: "TFTP uses UDP port 69, often for PXE boot and network device images."
      },
      {
        label: "Which protocol must work to stop Kerberos auth failures?",
        hint: "Auth tolerates only small clock skew",
        options: ["TFTP (69)", "NTP (123)", "SMTP (25)", "RDP (3389)"],
        answer: 1,
        explain: "Kerberos depends on synchronized clocks, so NTP on UDP 123 must function correctly."
      }
    ],
    summary: "NTP is UDP 123 (time sync, needed for Kerberos) and TFTP is UDP 69 (PXE imaging)."
  },
  {
    id: "PBQ-027",
    format: 1,
    domain: 2,
    title: "Replace insecure protocols",
    brief: "An audit flags cleartext services. Match each <span class='warnc'>insecure</span> protocol to its <span class='ok'>secure</span> replacement and port.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='warnc'>Findings:</span> Telnet, HTTP, and FTP are all in use\n<span class='ok'>Remediation:</span> swap each for an encrypted equivalent\n<span class='dim'>Match each insecure service to the right secure port.</span>",
    fields: [
      {
        label: "Secure replacement for Telnet (23)",
        hint: "Encrypted terminal",
        options: ["SSH on 22", "RDP on 3389", "HTTPS on 443", "LDAPS on 636"],
        answer: 0,
        explain: "SSH on port 22 replaces Telnet with an encrypted remote shell."
      },
      {
        label: "Secure replacement for HTTP (80)",
        hint: "Add TLS to the web",
        options: ["FTPS on 990", "HTTPS on 443", "IMAPS on 993", "SSH on 22"],
        answer: 1,
        explain: "HTTPS on port 443 replaces HTTP with TLS-encrypted web traffic."
      },
      {
        label: "Secure replacement for FTP (21)",
        hint: "Transfer over SSH",
        options: ["SFTP on 22", "Telnet on 23", "POP3 on 110", "SNMP on 161"],
        answer: 0,
        explain: "SFTP on port 22 (over SSH) replaces cleartext FTP for secure file transfer."
      }
    ],
    summary: "Telnet to SSH (22), HTTP to HTTPS (443), FTP to SFTP (22) - each insecure service maps to a TLS/SSH equivalent."
  },
  {
    id: "PBQ-028",
    format: 1,
    domain: 2,
    title: "Which port for each user complaint",
    brief: "Match each <span class='cy'>user complaint</span> to the single port that must be open to fix it.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Ticket queue:</span> three users, three blocked services\n<span class='cy'>Task:</span> pick the exact port to unblock per complaint\n<span class='dim'>One port per symptom.</span>",
    fields: [
      {
        label: "\"I can browse by IP but secure web pages won't load.\"",
        hint: "Encrypted web",
        options: ["80", "443", "21", "25"],
        answer: 1,
        explain: "Secure web pages require HTTPS, so TCP port 443 must be reachable."
      },
      {
        label: "\"My Outlook can't connect to retrieve mail with server-side folders.\"",
        hint: "Secure IMAP keeps folders on the server",
        options: ["110", "143", "993", "995"],
        answer: 2,
        explain: "Server-side mailbox sync over TLS uses IMAPS on TCP port 993."
      },
      {
        label: "\"I can't remote desktop into my office PC.\"",
        hint: "Windows graphical remote session",
        options: ["22", "3389", "5900", "443"],
        answer: 1,
        explain: "Remote Desktop requires TCP port 3389 to be open to the target PC."
      }
    ],
    summary: "Secure web = 443, server-side mail (IMAPS) = 993, remote desktop (RDP) = 3389."
  },
  {
    id: "PBQ-029",
    format: 1,
    domain: 2,
    title: "Identify the protocol from the port",
    brief: "Given a packet capture, name the <span class='cy'>protocol</span> behind each observed port.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Capture:</span> connections seen to ports 22, 53, 636, and 587\n<span class='cy'>Task:</span> identify the protocol for each\n<span class='dim'>Map the destination port back to its service.</span>",
    fields: [
      {
        label: "Traffic to TCP 22 is most likely...",
        hint: "Encrypted shell or SFTP",
        options: ["Telnet", "SSH/SFTP", "RDP", "HTTP"],
        answer: 1,
        explain: "Port 22 is used by SSH and SFTP for encrypted remote access and file transfer."
      },
      {
        label: "Traffic to port 53 is...",
        hint: "Name resolution",
        options: ["DHCP", "NTP", "DNS", "SMTP"],
        answer: 2,
        explain: "Port 53 is DNS, resolving hostnames to IP addresses."
      },
      {
        label: "Traffic to TCP 636 is...",
        hint: "Encrypted directory",
        options: ["LDAP", "LDAPS", "HTTPS", "Kerberos"],
        answer: 1,
        explain: "Port 636 is LDAPS, LDAP secured with TLS."
      },
      {
        label: "Traffic to TCP 587 is...",
        hint: "Client mail submission",
        options: ["POP3", "IMAP", "SMTP submission", "SNMP"],
        answer: 2,
        explain: "Port 587 is the authenticated SMTP submission port used by mail clients to send."
      }
    ],
    summary: "22 = SSH/SFTP, 53 = DNS, 636 = LDAPS, 587 = SMTP submission."
  },
  {
    id: "PBQ-030",
    format: 1,
    domain: 2,
    title: "Mixed services firewall review",
    brief: "Review a firewall change and match each allowed <span class='cy'>port</span> to its service before approving.",
    exhibitTitle: "service requirements",
    exhibit: "<span class='ok'>Proposed allow rules:</span> 3389, 161, 443, 25\n<span class='warnc'>Caution:</span> confirm each service before approving the change\n<span class='dim'>Verify the protocol behind each port number.</span>",
    fields: [
      {
        label: "TCP 3389 corresponds to...",
        hint: "Graphical Windows remote session",
        options: ["SSH", "RDP", "VNC", "Telnet"],
        answer: 1,
        explain: "TCP 3389 is RDP, the Remote Desktop Protocol for Windows."
      },
      {
        label: "UDP 161 corresponds to...",
        hint: "Device polling/monitoring",
        options: ["Syslog", "SNMP", "NTP", "DNS"],
        answer: 1,
        explain: "UDP 161 is SNMP polling used to monitor network devices."
      },
      {
        label: "TCP 443 corresponds to...",
        hint: "Encrypted web",
        options: ["HTTP", "HTTPS", "FTPS", "IMAPS"],
        answer: 1,
        explain: "TCP 443 is HTTPS, web traffic encrypted with TLS."
      },
      {
        label: "TCP 25 corresponds to...",
        hint: "Server-to-server mail relay",
        options: ["SMTP", "POP3", "IMAP", "LDAP"],
        answer: 0,
        explain: "TCP 25 is SMTP, used for mail transfer between servers."
      }
    ],
    summary: "3389 = RDP, 161 = SNMP, 443 = HTTPS, 25 = SMTP - verify each before approving the firewall rule."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-031",
    format: 2,
    domain: 3,
    title: "Gaming Desktop Performance Build",
    brief: "A customer wants a high-performance gaming desktop using a modern LGA1700 motherboard that supports the latest memory standard. They want the fastest possible boot drive and a large secondary disk for their game library, with no redundancy needed.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Gaming Desktop</span>\nMotherboard: <span class='ok'>LGA1700, DDR5 slots</span>\nForm factor: <span class='dim'>Full ATX tower</span>\nMemory target: <span class='ok'>32 GB, dual channel</span>\nBoot drive: <span class='ok'>fastest available interface</span>\nGame library: <span class='warnc'>large capacity, no redundancy</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Match the slot standard on the motherboard.",
        options: ["DDR3 UDIMM", "DDR4 UDIMM", "DDR5 UDIMM", "DDR5 SO-DIMM"],
        answer: 2,
        explain: "The board has DDR5 slots, and a desktop ATX board uses full-size UDIMMs, not the smaller SO-DIMMs used in laptops. DDR5 UDIMM is correct."
      },
      {
        label: "Memory channel configuration",
        hint: "Two matched modules to populate the channels.",
        options: ["Single channel (1 DIMM)", "Dual channel (2 matched DIMMs)", "Triple channel (3 DIMMs)", "Quad channel (4 DIMMs)"],
        answer: 1,
        explain: "Mainstream desktop platforms run dual channel. Installing two matched modules enables dual-channel bandwidth for gaming performance."
      },
      {
        label: "Boot drive",
        hint: "The fastest consumer interface.",
        options: ["SATA 2.5\" SSD", "SATA HDD 7200 RPM", "NVMe M.2 SSD", "External USB HDD"],
        answer: 2,
        explain: "NVMe M.2 SSDs use the PCIe bus and are far faster than SATA, which is capped at ~600 MB/s. NVMe is the fastest consumer boot drive."
      },
      {
        label: "Game-library RAID level",
        hint: "Maximum capacity and speed, redundancy not required.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 0,
        explain: "RAID 0 stripes data across a minimum of 2 disks for maximum capacity and speed with no parity. Since redundancy is explicitly not needed, RAID 0 fits."
      }
    ],
    summary: "DDR5 UDIMM in dual channel, an NVMe M.2 boot drive, and RAID 0 for a high-capacity, high-speed game library with no redundancy requirement."
  },
  {
    id: "PBQ-032",
    format: 2,
    domain: 3,
    title: "Small Business File Server",
    brief: "A small business needs a file server built on a server board that requires error-correcting memory. The array must survive a single drive failure while keeping good usable capacity across at least three disks.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: File Server</span>\nPlatform: <span class='ok'>Server board, DDR4 RDIMM slots</span>\nMemory requirement: <span class='warnc'>error-correcting required</span>\nDrives available: <span class='dim'>4x 4 TB enterprise disks</span>\nRequirement: <span class='warnc'>survive 1 disk failure</span>\nGoal: <span class='ok'>efficient usable capacity</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Server board requires error correction.",
        options: ["DDR4 non-ECC UDIMM", "DDR4 ECC RDIMM", "DDR5 non-ECC UDIMM", "DDR4 SO-DIMM"],
        answer: 1,
        explain: "The board uses DDR4 RDIMM slots and the spec requires error correction, so ECC RDIMM (registered, error-correcting) memory is the correct choice for a server."
      },
      {
        label: "Drive type",
        hint: "Enterprise capacity-focused array drives.",
        options: ["NVMe M.2 SSD", "SATA HDD", "USB flash drive", "Optical drive"],
        answer: 1,
        explain: "Large multi-terabyte SATA HDDs are the cost-effective choice for bulk file-server capacity where raw speed is secondary to storage volume."
      },
      {
        label: "RAID level",
        hint: "Striping with parity, survives one failure, minimum 3 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2,
        explain: "RAID 5 stripes data with distributed parity across a minimum of 3 disks, survives a single drive failure, and gives efficient usable capacity (n-1 disks)."
      }
    ],
    summary: "ECC RDIMM memory for the server board, SATA HDDs for bulk capacity, and RAID 5 to survive one disk failure with efficient usable space."
  },
  {
    id: "PBQ-033",
    format: 2,
    domain: 3,
    title: "Laptop RAM and Storage Upgrade",
    brief: "A technician is upgrading a business laptop that uses DDR4 memory. The customer wants more RAM and a faster M.2 boot drive. The laptop is a single device with no array.",
    exhibitTitle: "Upgrade Spec",
    exhibit: "<span class='cy'>UPGRADE: Business Laptop</span>\nChassis: <span class='dim'>14\" ultrabook</span>\nMemory slots: <span class='ok'>2x DDR4, currently 1 populated</span>\nStorage slot: <span class='ok'>M.2 2280, PCIe x4</span>\nGoal: <span class='ok'>more RAM, faster boot drive</span>\nRedundancy: <span class='dim'>not applicable (single drive)</span>",
    fields: [
      {
        label: "Memory form factor and type",
        hint: "Laptops use the compact module.",
        options: ["DDR4 UDIMM", "DDR4 SO-DIMM", "DDR5 SO-DIMM", "DDR3 SO-DIMM"],
        answer: 1,
        explain: "Laptops use the smaller SO-DIMM form factor, and this laptop uses DDR4, so DDR4 SO-DIMM is required. DDR generations are not interchangeable."
      },
      {
        label: "Channel configuration after upgrade",
        hint: "Populate the second matching slot.",
        options: ["Leave single channel", "Add a matched module for dual channel", "Mix DDR4 and DDR5", "Quad channel"],
        answer: 1,
        explain: "Adding a matched SO-DIMM in the second slot enables dual channel, improving memory bandwidth on the laptop."
      },
      {
        label: "Boot drive",
        hint: "The M.2 slot supports PCIe x4.",
        options: ["SATA 2.5\" SSD", "NVMe M.2 SSD", "SATA HDD", "eMMC"],
        answer: 1,
        explain: "The M.2 slot is wired for PCIe x4, so an NVMe M.2 SSD delivers the fastest boot performance the slot can provide."
      }
    ],
    summary: "DDR4 SO-DIMM added for dual channel and an NVMe M.2 SSD for the fastest boot drive in this single-drive laptop."
  },
  {
    id: "PBQ-034",
    format: 2,
    domain: 3,
    title: "Virtualization Host Server",
    brief: "An IT team is building a virtualization host that needs large amounts of error-correcting memory and an array that maximizes both performance and redundancy across four fast drives.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Virtualization Host</span>\nPlatform: <span class='ok'>Dual-socket server, DDR5 RDIMM</span>\nMemory: <span class='warnc'>256 GB ECC required</span>\nDrives: <span class='dim'>4x 1.92 TB SATA SSD</span>\nRequirement: <span class='warnc'>high performance AND redundancy</span>\nFault tolerance: <span class='ok'>survive a drive failure</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Server platform with error correction.",
        options: ["DDR5 ECC RDIMM", "DDR5 non-ECC UDIMM", "DDR4 ECC RDIMM", "DDR5 SO-DIMM"],
        answer: 0,
        explain: "The board uses DDR5 RDIMM slots and requires ECC, so DDR5 ECC RDIMM is correct. Using DDR4 would not fit DDR5 slots."
      },
      {
        label: "Drive type",
        hint: "Fast, consistent VM storage.",
        options: ["SATA HDD 7200 RPM", "SATA SSD", "USB HDD", "Tape"],
        answer: 1,
        explain: "The spec calls for SATA SSDs, which give the low latency and consistent IOPS virtualization workloads need over spinning HDDs."
      },
      {
        label: "RAID level",
        hint: "Combines mirroring and striping, minimum 4 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 3,
        explain: "RAID 10 mirrors and stripes across a minimum of 4 disks, delivering both high performance and redundancy. It tolerates a drive failure and excels for VM hosts."
      }
    ],
    summary: "DDR5 ECC RDIMM, SATA SSDs, and RAID 10 to give the virtualization host both speed and fault tolerance across four drives."
  },
  {
    id: "PBQ-035",
    format: 2,
    domain: 3,
    title: "Budget Office Workstation",
    brief: "A technician assembles a low-cost office PC on a DDR4 consumer board. The user only needs a single reliable boot/storage drive that is faster than a hard disk but inexpensive. No array is used.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Office Workstation</span>\nMotherboard: <span class='ok'>LGA1200, DDR4</span>\nBudget: <span class='warnc'>cost-sensitive</span>\nMemory target: <span class='ok'>16 GB, dual channel</span>\nStorage: <span class='ok'>single drive, faster than HDD, low cost</span>\nArray: <span class='dim'>none</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Match the consumer board's slots.",
        options: ["DDR4 UDIMM", "DDR5 UDIMM", "DDR4 RDIMM", "DDR4 SO-DIMM"],
        answer: 0,
        explain: "A DDR4 desktop board uses unbuffered UDIMMs. RDIMMs are for servers and SO-DIMMs are for laptops, so DDR4 UDIMM is correct."
      },
      {
        label: "Channel configuration",
        hint: "Two sticks for the best bandwidth on a budget.",
        options: ["Single channel (1x 16 GB)", "Dual channel (2x 8 GB)", "Triple channel", "Quad channel"],
        answer: 1,
        explain: "Two matched 8 GB modules enable dual channel for better bandwidth at the same 16 GB total, ideal for a budget office build."
      },
      {
        label: "Storage drive",
        hint: "Faster than HDD, lowest cost SSD option.",
        options: ["NVMe Gen4 SSD", "SATA 2.5\" SSD", "SATA HDD", "SAS HDD"],
        answer: 1,
        explain: "A SATA 2.5\" SSD is far faster than an HDD yet cheaper than NVMe, matching the cost-sensitive single-drive requirement."
      }
    ],
    summary: "DDR4 UDIMM in dual channel and a budget-friendly SATA SSD for a fast, low-cost single-drive office PC."
  },
  {
    id: "PBQ-036",
    format: 2,
    domain: 3,
    title: "Two-Drive Boot Mirror",
    brief: "A workstation must keep running if its boot drive fails. Two identical drives are available, and the customer wants the operating system protected by a simple mirror.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Protected Workstation</span>\nMotherboard: <span class='ok'>DDR4 consumer board</span>\nDrives: <span class='dim'>2x 1 TB SATA SSD (identical)</span>\nRequirement: <span class='warnc'>OS must survive 1 drive failure</span>\nDisk count limit: <span class='warnc'>exactly 2 drives</span>\nPerformance: <span class='dim'>standard</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Consumer desktop board.",
        options: ["DDR4 SO-DIMM", "DDR4 UDIMM", "DDR4 ECC RDIMM", "DDR5 UDIMM"],
        answer: 1,
        explain: "A consumer DDR4 desktop board uses UDIMMs. SO-DIMMs are for laptops and RDIMMs for servers, so DDR4 UDIMM is correct."
      },
      {
        label: "Drive type",
        hint: "Identical fast SATA drives.",
        options: ["SATA SSD", "SATA HDD", "NVMe M.2 SSD", "USB flash"],
        answer: 0,
        explain: "The spec lists 2x SATA SSDs, which provide reliable, fast storage well suited to a boot mirror."
      },
      {
        label: "RAID level",
        hint: "Mirror across exactly 2 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 1,
        explain: "RAID 1 mirrors data across a minimum of 2 disks, so the OS survives a single drive failure. With only 2 drives, RAID 5 (min 3) and RAID 10 (min 4) are not possible."
      }
    ],
    summary: "DDR4 UDIMM with two identical SATA SSDs in RAID 1, mirroring the OS so the workstation survives a single drive failure."
  },
  {
    id: "PBQ-037",
    format: 2,
    domain: 3,
    title: "Video Editing Scratch Array",
    brief: "A video editor needs a fast scratch volume for 4K footage. Throughput is the priority and the footage is already backed up elsewhere, so the array itself needs no redundancy. The board uses DDR5.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Editing Scratch Volume</span>\nMotherboard: <span class='ok'>DDR5 consumer board</span>\nMemory target: <span class='ok'>64 GB, dual channel</span>\nDrives: <span class='dim'>2x 2 TB NVMe SSD</span>\nPriority: <span class='warnc'>maximum throughput</span>\nRedundancy: <span class='dim'>not needed (backed up externally)</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Match the DDR5 desktop slots.",
        options: ["DDR4 UDIMM", "DDR5 UDIMM", "DDR5 RDIMM", "DDR5 SO-DIMM"],
        answer: 1,
        explain: "A DDR5 desktop board uses UDIMMs. RDIMM is server-class and SO-DIMM is for laptops, so DDR5 UDIMM is correct."
      },
      {
        label: "Channel configuration",
        hint: "Two matched DDR5 modules.",
        options: ["Single channel", "Dual channel", "Triple channel", "Quad channel"],
        answer: 1,
        explain: "Mainstream desktop platforms support dual channel; two matched modules maximize bandwidth for editing."
      },
      {
        label: "Drive interface",
        hint: "Highest throughput SSD interface.",
        options: ["SATA SSD", "NVMe M.2 SSD", "SATA HDD", "External USB SSD"],
        answer: 1,
        explain: "NVMe M.2 SSDs over PCIe deliver far higher throughput than SATA, ideal for a 4K editing scratch volume."
      },
      {
        label: "RAID level",
        hint: "Stripe 2 drives for speed, no parity.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 0,
        explain: "RAID 0 stripes across a minimum of 2 disks for maximum throughput and combined capacity with no redundancy, which is acceptable because the footage is backed up elsewhere."
      }
    ],
    summary: "DDR5 UDIMM in dual channel and two NVMe SSDs in RAID 0 for a maximum-throughput editing scratch volume that needs no redundancy."
  },
  {
    id: "PBQ-038",
    format: 2,
    domain: 3,
    title: "NAS Backup Appliance",
    brief: "A company builds a network-attached backup appliance from four large hard drives. They want fault tolerance for a single drive failure while keeping the most usable capacity possible from the four disks.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: NAS Backup Appliance</span>\nPlatform: <span class='ok'>NAS board, DDR4 ECC SO-DIMM</span>\nDrives: <span class='dim'>4x 8 TB NAS HDD</span>\nRequirement: <span class='warnc'>tolerate 1 drive failure</span>\nGoal: <span class='warnc'>maximize usable capacity</span>\nWorkload: <span class='dim'>bulk backup storage</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Compact ECC modules for a NAS board.",
        options: ["DDR4 non-ECC UDIMM", "DDR4 ECC SO-DIMM", "DDR5 UDIMM", "DDR3 SO-DIMM"],
        answer: 1,
        explain: "The NAS board specifies DDR4 ECC SO-DIMM, combining error correction with the compact form factor many NAS units use."
      },
      {
        label: "Drive type",
        hint: "Bulk capacity NAS-rated disks.",
        options: ["NVMe SSD", "NAS-rated SATA HDD", "USB flash drive", "Optical disc"],
        answer: 1,
        explain: "NAS-rated SATA HDDs provide the high capacity and 24/7 reliability backup appliances need at low cost per terabyte."
      },
      {
        label: "RAID level",
        hint: "Parity array, one-disk tolerance, best capacity for 4 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2,
        explain: "RAID 5 uses striping with distributed parity (minimum 3 disks), tolerates one failure, and yields n-1 usable disks. With 4 disks it gives 3 disks usable, more than RAID 10's 2."
      }
    ],
    summary: "DDR4 ECC SO-DIMM, NAS-rated SATA HDDs, and RAID 5 to tolerate a single failure while maximizing usable capacity across four disks."
  },
  {
    id: "PBQ-039",
    format: 2,
    domain: 3,
    title: "Compact Mini-PC Build",
    brief: "A technician builds a small form factor mini-PC for a kiosk. The board uses laptop-style memory and has a single M.2 slot. There is exactly one storage device and no array.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Kiosk Mini-PC</span>\nMotherboard: <span class='ok'>SFF board, DDR5 SO-DIMM slots</span>\nStorage slot: <span class='ok'>single M.2 2280 PCIe x4</span>\nMemory target: <span class='ok'>16 GB</span>\nStorage need: <span class='ok'>fast, single device</span>\nArray: <span class='dim'>none (single drive)</span>",
    fields: [
      {
        label: "Memory type",
        hint: "SFF board uses laptop-style modules.",
        options: ["DDR5 UDIMM", "DDR5 SO-DIMM", "DDR4 SO-DIMM", "DDR5 RDIMM"],
        answer: 1,
        explain: "The SFF board uses DDR5 SO-DIMM slots, the compact form factor common in mini-PCs and laptops. DDR4 modules will not fit DDR5 slots."
      },
      {
        label: "Storage device",
        hint: "Use the PCIe x4 M.2 slot.",
        options: ["SATA HDD", "NVMe M.2 SSD", "SATA 2.5\" SSD", "USB HDD"],
        answer: 1,
        explain: "The single M.2 slot is wired PCIe x4, so an NVMe M.2 SSD gives the fastest single-device storage for the kiosk."
      },
      {
        label: "Array configuration",
        hint: "Only one drive is present.",
        options: ["RAID 0", "RAID 1", "No RAID (single disk)", "RAID 5"],
        answer: 2,
        explain: "With only one storage device, no RAID can be configured. RAID 0 needs 2 disks, RAID 1 needs 2, and RAID 5 needs 3, so a single disk runs without an array."
      }
    ],
    summary: "DDR5 SO-DIMM and a single NVMe M.2 SSD with no RAID, since the compact kiosk build has only one drive."
  },
  {
    id: "PBQ-040",
    format: 2,
    domain: 3,
    title: "Database Server Array",
    brief: "A database server needs both high transaction performance and redundancy. The platform requires registered ECC memory, and six fast SAS SSDs are available for an array that mirrors and stripes.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Database Server</span>\nPlatform: <span class='ok'>Server board, DDR4 RDIMM</span>\nMemory: <span class='warnc'>registered ECC required</span>\nDrives: <span class='dim'>6x 800 GB SAS SSD</span>\nRequirement: <span class='warnc'>high IOPS AND redundancy</span>\nFault tolerance: <span class='ok'>survive a drive failure per mirror</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Registered, error-correcting server memory.",
        options: ["DDR4 non-ECC UDIMM", "DDR4 ECC RDIMM", "DDR5 ECC RDIMM", "DDR4 SO-DIMM"],
        answer: 1,
        explain: "The board uses DDR4 RDIMM slots and requires registered ECC, so DDR4 ECC RDIMM is correct. DDR5 modules would not fit DDR4 slots."
      },
      {
        label: "Drive type",
        hint: "Enterprise SSDs on the SAS interface.",
        options: ["SATA HDD", "SAS SSD", "USB flash", "NVMe via USB"],
        answer: 1,
        explain: "SAS SSDs give the high endurance and IOPS database servers need, as listed in the spec."
      },
      {
        label: "RAID level",
        hint: "Mirror plus stripe, minimum 4 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 3,
        explain: "RAID 10 mirrors then stripes across a minimum of 4 disks (six is valid), delivering high IOPS and redundancy. It survives a drive failure in each mirror pair."
      }
    ],
    summary: "DDR4 ECC RDIMM, SAS SSDs, and RAID 10 to give the database server both high transaction performance and redundancy."
  },
  {
    id: "PBQ-041",
    format: 2,
    domain: 3,
    title: "Workstation Memory Capacity Upgrade",
    brief: "A CAD workstation on a DDR5 board needs its memory expanded to the maximum bandwidth the desktop platform supports. The existing single NVMe drive stays; no array changes are requested.",
    exhibitTitle: "Upgrade Spec",
    exhibit: "<span class='cy'>UPGRADE: CAD Workstation</span>\nMotherboard: <span class='ok'>HEDT board, 4x DDR5 slots</span>\nCurrent: <span class='dim'>1x 16 GB DDR5</span>\nGoal: <span class='warnc'>max memory bandwidth, 4 slots</span>\nStorage: <span class='dim'>existing NVMe, unchanged</span>\nArray: <span class='dim'>single drive, none</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Match the DDR5 desktop board.",
        options: ["DDR5 UDIMM", "DDR4 UDIMM", "DDR5 SO-DIMM", "DDR3 UDIMM"],
        answer: 0,
        explain: "The board has DDR5 UDIMM slots, so DDR5 UDIMM modules are required. Older or laptop-form modules will not fit."
      },
      {
        label: "Channel configuration",
        hint: "Populate all four slots for this HEDT board.",
        options: ["Single channel", "Dual channel", "Quad channel", "Triple channel"],
        answer: 2,
        explain: "This HEDT board exposes four memory slots; filling all four with matched modules enables quad channel for the maximum bandwidth the platform supports."
      },
      {
        label: "Storage change",
        hint: "The spec keeps the existing single drive.",
        options: ["Add RAID 0", "Add RAID 1", "Keep single NVMe drive, no RAID", "Add RAID 5"],
        answer: 2,
        explain: "No array is requested and only one drive exists, so the single NVMe drive stays with no RAID. RAID levels each need at least 2 or 3 disks."
      }
    ],
    summary: "DDR5 UDIMM filling all four slots for quad channel, while the existing single NVMe drive remains without any RAID."
  },
  {
    id: "PBQ-042",
    format: 2,
    domain: 3,
    title: "Edge Compute Node",
    brief: "An edge appliance is built on a small server board using error-correcting laptop-style memory. Two enterprise SSDs must mirror each other so the node keeps running if one drive dies.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Edge Compute Node</span>\nPlatform: <span class='ok'>Embedded server board, DDR4 ECC SO-DIMM</span>\nMemory: <span class='warnc'>ECC required</span>\nDrives: <span class='dim'>2x 480 GB SATA SSD</span>\nRequirement: <span class='warnc'>continue running after 1 drive failure</span>\nDisk count: <span class='warnc'>exactly 2 drives</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Compact, error-correcting server module.",
        options: ["DDR4 non-ECC SO-DIMM", "DDR4 ECC SO-DIMM", "DDR4 ECC RDIMM", "DDR5 UDIMM"],
        answer: 1,
        explain: "The embedded board uses DDR4 ECC SO-DIMM, combining the compact form factor with error correction. Full-size RDIMMs would not fit the SO-DIMM slots."
      },
      {
        label: "Drive type",
        hint: "Enterprise SATA solid-state.",
        options: ["SATA HDD", "SATA SSD", "USB flash", "Optical"],
        answer: 1,
        explain: "The spec lists 2x SATA SSDs, providing the reliability and speed an edge node needs in a small chassis."
      },
      {
        label: "RAID level",
        hint: "Mirror across exactly 2 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 1,
        explain: "RAID 1 mirrors across a minimum of 2 disks so the node survives one drive failure. With only 2 drives, RAID 5 (min 3) and RAID 10 (min 4) cannot be used."
      }
    ],
    summary: "DDR4 ECC SO-DIMM and two SATA SSDs in RAID 1 so the edge node keeps running after a single drive failure."
  },
  {
    id: "PBQ-043",
    format: 2,
    domain: 3,
    title: "Media Streaming Server",
    brief: "A home media server stores a large movie library on five drives. The owner wants protection against a single drive failure with efficient capacity, and the board takes consumer DDR4 memory.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Media Streaming Server</span>\nMotherboard: <span class='ok'>DDR4 consumer board</span>\nMemory target: <span class='ok'>32 GB, dual channel</span>\nDrives: <span class='dim'>5x 6 TB SATA HDD</span>\nRequirement: <span class='warnc'>survive 1 disk failure</span>\nGoal: <span class='warnc'>efficient usable capacity</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Consumer desktop board.",
        options: ["DDR4 ECC RDIMM", "DDR4 UDIMM", "DDR4 SO-DIMM", "DDR5 UDIMM"],
        answer: 1,
        explain: "A consumer DDR4 board uses unbuffered UDIMMs. RDIMM is server-only and SO-DIMM is laptop-only, so DDR4 UDIMM is correct."
      },
      {
        label: "Channel configuration",
        hint: "Two matched modules.",
        options: ["Single channel", "Dual channel", "Triple channel", "Quad channel"],
        answer: 1,
        explain: "Mainstream desktop boards support dual channel; two matched modules give the best bandwidth for the streaming server."
      },
      {
        label: "Drive type",
        hint: "Bulk capacity for a movie library.",
        options: ["NVMe SSD", "SATA HDD", "USB flash", "Optical"],
        answer: 1,
        explain: "Large SATA HDDs are the cost-effective choice for storing a high-capacity media library where sequential streaming, not IOPS, dominates."
      },
      {
        label: "RAID level",
        hint: "Parity array, one-disk tolerance, efficient capacity.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2,
        explain: "RAID 5 stripes with parity (minimum 3 disks), survives one failure, and gives n-1 usable disks. Across 5 disks that is 4 usable, the most efficient single-fault-tolerant option here."
      }
    ],
    summary: "DDR4 UDIMM in dual channel, SATA HDDs for capacity, and RAID 5 across five disks to survive one failure with efficient usable space."
  },
  {
    id: "PBQ-044",
    format: 2,
    domain: 3,
    title: "High-Throughput Cache Tier",
    brief: "A web application needs a non-persistent cache tier where speed is everything. Three NVMe drives will be striped, with no redundancy since the cache can be rebuilt. The board uses DDR5.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Cache Tier Node</span>\nMotherboard: <span class='ok'>DDR5 server board, RDIMM</span>\nMemory: <span class='warnc'>ECC required</span>\nDrives: <span class='dim'>3x 1 TB NVMe SSD</span>\nPriority: <span class='warnc'>maximum speed and capacity</span>\nRedundancy: <span class='dim'>not needed (cache rebuildable)</span>",
    fields: [
      {
        label: "Memory type",
        hint: "DDR5 server board with error correction.",
        options: ["DDR5 non-ECC UDIMM", "DDR5 ECC RDIMM", "DDR4 ECC RDIMM", "DDR5 SO-DIMM"],
        answer: 1,
        explain: "The server board uses DDR5 RDIMM slots and requires ECC, so DDR5 ECC RDIMM is correct. DDR4 modules would not fit DDR5 slots."
      },
      {
        label: "Drive interface",
        hint: "Fastest interface available.",
        options: ["SATA SSD", "SATA HDD", "NVMe SSD", "USB SSD"],
        answer: 2,
        explain: "NVMe SSDs over PCIe give the lowest latency and highest throughput, ideal for a speed-focused cache tier."
      },
      {
        label: "RAID level",
        hint: "Stripe all three for speed, no parity.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 0,
        explain: "RAID 0 stripes across a minimum of 2 disks (three is valid) for maximum combined speed and capacity with no redundancy. That is acceptable because the cache can be rebuilt."
      }
    ],
    summary: "DDR5 ECC RDIMM and three NVMe SSDs in RAID 0 for a maximum-speed cache tier that needs no redundancy."
  },
  {
    id: "PBQ-045",
    format: 2,
    domain: 3,
    title: "Mission-Critical Application Server",
    brief: "A mission-critical server requires error-correcting memory and an array of eight enterprise drives that delivers strong performance and can survive a drive failure within each mirror set.",
    exhibitTitle: "Build Spec",
    exhibit: "<span class='cy'>BUILD: Mission-Critical App Server</span>\nPlatform: <span class='ok'>Dual-socket server, DDR5 RDIMM</span>\nMemory: <span class='warnc'>ECC required, high capacity</span>\nDrives: <span class='dim'>8x 1.6 TB SAS SSD</span>\nRequirement: <span class='warnc'>high performance AND redundancy</span>\nFault tolerance: <span class='ok'>survive a failure per mirror</span>",
    fields: [
      {
        label: "Memory type",
        hint: "High-capacity error-correcting server memory.",
        options: ["DDR5 ECC RDIMM", "DDR5 non-ECC UDIMM", "DDR4 ECC RDIMM", "DDR5 SO-DIMM"],
        answer: 0,
        explain: "The board uses DDR5 RDIMM slots and requires ECC, so DDR5 ECC RDIMM is correct for a high-capacity mission-critical server."
      },
      {
        label: "Drive type",
        hint: "Enterprise SAS solid-state.",
        options: ["SATA HDD", "SAS SSD", "USB flash", "NVMe via USB"],
        answer: 1,
        explain: "SAS SSDs provide the endurance, performance, and dual-port reliability mission-critical servers require, as listed in the spec."
      },
      {
        label: "RAID level",
        hint: "Mirror plus stripe, minimum 4 disks.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 3,
        explain: "RAID 10 mirrors then stripes across a minimum of 4 disks (eight is valid), giving strong performance and redundancy. It survives a failure within each mirror pair."
      }
    ],
    summary: "DDR5 ECC RDIMM and eight SAS SSDs in RAID 10 for a mission-critical server that needs both performance and per-mirror fault tolerance."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-046",
    format: 2,
    domain: 3,
    title: "Laptop RAM Upgrade",
    brief: "A client wants to upgrade the memory in their ultrabook laptop. Select the correct memory module and configuration.",
    exhibitTitle: "Laptop Upgrade Request",
    exhibit: "<span class='cy'>Device:</span> Thin-and-light laptop\n<span class='cy'>Current:</span> 8 GB single module installed\n<span class='ok'>Target:</span> 32 GB total\n<span class='warnc'>Constraint:</span> Standard laptop memory slots\n<span class='dim'>Board supports DDR4-3200</span>",
    fields: [
      {
        label: "Memory form factor",
        hint: "What physical module size fits a laptop?",
        options: ["DIMM", "SO-DIMM", "MicroDIMM", "RIMM"],
        answer: 1,
        explain: "Laptops use SO-DIMM (Small Outline DIMM) modules, which are physically shorter than the full-size DIMMs used in desktops."
      },
      {
        label: "Memory generation",
        hint: "Match the board specification.",
        options: ["DDR3", "DDR4", "DDR5", "LPDDR3"],
        answer: 1,
        explain: "The board supports DDR4-3200, so DDR4 SO-DIMMs are required. DDR generations are not interchangeable; the notch keying prevents installing the wrong type."
      },
      {
        label: "Module configuration for 32 GB",
        hint: "Most laptops have two SO-DIMM slots.",
        options: ["One 32 GB module", "Two 16 GB modules", "Four 8 GB modules", "One 16 GB + one 8 GB module"],
        answer: 1,
        explain: "Two 16 GB SO-DIMMs reach 32 GB while filling both slots. Matched modules also enable dual-channel mode for better bandwidth than a single 32 GB stick."
      },
      {
        label: "Channel mode achieved",
        hint: "Two matched modules in both slots.",
        options: ["Single-channel", "Dual-channel", "Triple-channel", "Quad-channel"],
        answer: 1,
        explain: "Two identical modules populating both slots enable dual-channel mode, which roughly doubles memory bandwidth versus a single module."
      }
    ],
    summary: "Laptop memory upgrades use SO-DIMM modules matched to the board's DDR generation; two matched modules enable dual-channel operation."
  },
  {
    id: "PBQ-047",
    format: 2,
    domain: 3,
    title: "Engineering Workstation ECC RAM",
    brief: "A CAD/simulation workstation must run for days without data corruption. Specify the memory for maximum reliability.",
    exhibitTitle: "Workstation Memory Spec",
    exhibit: "<span class='cy'>Role:</span> 3D rendering and finite-element simulation\n<span class='ok'>Requirement:</span> Detect and correct single-bit memory errors\n<span class='cy'>CPU:</span> Xeon (registered memory capable)\n<span class='warnc'>Uptime:</span> Continuous multi-day jobs\n<span class='dim'>DDR4 platform</span>",
    fields: [
      {
        label: "Memory error protection",
        hint: "Which type corrects single-bit errors automatically?",
        options: ["Non-ECC", "ECC", "Parity-only", "Buffered non-ECC"],
        answer: 1,
        explain: "ECC (Error-Correcting Code) memory detects and corrects single-bit errors on the fly, preventing silent data corruption during long compute jobs."
      },
      {
        label: "Form factor",
        hint: "It is a tower workstation, not a laptop.",
        options: ["SO-DIMM", "DIMM", "MicroDIMM", "RIMM"],
        answer: 1,
        explain: "A tower workstation uses full-size DIMM modules. SO-DIMMs are for laptops and small-form-factor systems."
      },
      {
        label: "Platform support needed",
        hint: "Consumer boards usually omit this.",
        options: ["Any consumer motherboard works", "CPU and motherboard must support ECC", "Only the RAM needs to support ECC", "ECC works only over USB"],
        answer: 1,
        explain: "ECC requires support in the CPU memory controller and the motherboard, not just the modules. Workstation/server platforms like Xeon provide this; most consumer boards do not."
      },
      {
        label: "Registered (buffered) memory benefit",
        hint: "Why use RDIMMs in high-capacity servers?",
        options: ["Faster than unbuffered at low capacity", "Allows greater total capacity and stability with many modules", "Eliminates the need for ECC", "Reduces module physical size"],
        answer: 1,
        explain: "Registered (buffered) DIMMs place a register between the controller and DRAM, reducing electrical load so more modules and higher total capacity are stable."
      }
    ],
    summary: "Reliability-critical workstations use ECC DIMMs on a CPU/board that support ECC; registered modules add capacity and stability at scale."
  },
  {
    id: "PBQ-048",
    format: 2,
    domain: 3,
    title: "NAS RAID for Capacity with Redundancy",
    brief: "A small business NAS needs maximum usable capacity while tolerating a drive failure. Configure the array.",
    exhibitTitle: "NAS Array Requirements",
    exhibit: "<span class='cy'>Device:</span> 4-bay network attached storage\n<span class='ok'>Goal:</span> Maximize usable space, survive one drive failure\n<span class='warnc'>Budget:</span> Cost-sensitive, avoid wasting half the disks\n<span class='cy'>Drives:</span> 4 x 8 TB HDD\n<span class='dim'>File serving and backups</span>",
    fields: [
      {
        label: "RAID level",
        hint: "Single parity across the set.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2,
        explain: "RAID 5 stripes data with distributed parity, giving good usable capacity while tolerating one drive failure. It is the classic capacity-with-redundancy choice for a 4-bay NAS."
      },
      {
        label: "Minimum disks required",
        hint: "RAID 5 needs parity plus data drives.",
        options: ["2", "3", "4", "6"],
        answer: 1,
        explain: "RAID 5 requires a minimum of 3 disks: the equivalent of one disk's worth of space is used for distributed parity."
      },
      {
        label: "Fault tolerance",
        hint: "How many drives can fail at once?",
        options: ["Zero drives", "One drive", "Two drives", "Half the array"],
        answer: 1,
        explain: "RAID 5 can survive the loss of exactly one drive. A second simultaneous failure before rebuild completes results in data loss."
      },
      {
        label: "Usable capacity with 4 x 8 TB",
        hint: "Lose one drive's worth to parity.",
        options: ["16 TB", "24 TB", "32 TB", "8 TB"],
        answer: 1,
        explain: "RAID 5 usable capacity equals (n-1) x drive size = (4-1) x 8 TB = 24 TB, with one drive's worth consumed by parity."
      }
    ],
    summary: "RAID 5 (min 3 disks, tolerates one failure) maximizes usable capacity with redundancy; usable space is (n-1) times the drive size."
  },
  {
    id: "PBQ-049",
    format: 2,
    domain: 3,
    title: "Gaming PC NVMe Boot Plus HDD Storage",
    brief: "Build a gaming desktop with a fast boot/game drive and bulk storage for media. Select both drives.",
    exhibitTitle: "Gaming Build Storage",
    exhibit: "<span class='cy'>Boot/games:</span> Fastest possible load times\n<span class='ok'>Bulk:</span> Large, inexpensive media library\n<span class='cy'>Board:</span> M.2 slot with PCIe x4 lanes\n<span class='warnc'>Tier the storage by speed vs cost</span>",
    fields: [
      {
        label: "Boot drive type",
        hint: "Fastest consumer storage interface.",
        options: ["SATA SSD", "NVMe SSD (M.2)", "7200 RPM HDD", "5400 RPM HDD"],
        answer: 1,
        explain: "An NVMe SSD using the M.2/PCIe interface delivers the highest throughput for OS boot and game loading, far exceeding SATA-based drives."
      },
      {
        label: "Boot drive interface/bus",
        hint: "What bus does an M.2 NVMe drive use?",
        options: ["SATA III (6 Gb/s)", "PCIe", "USB 3.2", "SAS"],
        answer: 1,
        explain: "NVMe drives communicate over the PCIe bus (commonly x4 lanes), giving them much higher bandwidth than the SATA III interface."
      },
      {
        label: "Boot drive form factor",
        hint: "Gum-stick card that seats in the board.",
        options: ["2.5-inch", "3.5-inch", "M.2", "mSATA"],
        answer: 2,
        explain: "NVMe consumer drives use the M.2 form factor, a small card that plugs directly into the motherboard's M.2 slot."
      },
      {
        label: "Bulk storage drive",
        hint: "Lowest cost per terabyte for media.",
        options: ["Another NVMe SSD", "3.5-inch 7200 RPM HDD", "USB flash drive", "Optical disc"],
        answer: 1,
        explain: "A 3.5-inch hard disk drive offers the lowest cost per terabyte, ideal for a large media library where raw speed is not critical."
      }
    ],
    summary: "Tiered gaming storage pairs an M.2 NVMe (PCIe) SSD for boot/games with a high-capacity 3.5-inch HDD for inexpensive bulk media."
  },
  {
    id: "PBQ-050",
    format: 2,
    domain: 3,
    title: "Database Server RAID 10",
    brief: "A transactional database server needs both high performance and redundancy. Configure the array.",
    exhibitTitle: "Database Storage Spec",
    exhibit: "<span class='cy'>Workload:</span> High random read/write database\n<span class='ok'>Goal:</span> Strong performance AND fault tolerance\n<span class='warnc'>Parity overhead unacceptable for write speed</span>\n<span class='cy'>Drives:</span> 4 x 2 TB SSD available\n<span class='dim'>Mission-critical OLTP</span>",
    fields: [
      {
        label: "RAID level",
        hint: "Mirror then stripe, no parity.",
        options: ["RAID 0", "RAID 5", "RAID 6", "RAID 10"],
        answer: 3,
        explain: "RAID 10 (1+0) stripes across mirrored pairs, delivering high read/write performance with no parity calculation, plus redundancy. It is the standard choice for write-heavy databases."
      },
      {
        label: "Minimum disks required",
        hint: "Mirrored pairs that are then striped.",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explain: "RAID 10 requires a minimum of 4 disks (two mirrored pairs striped together) and always uses an even number of drives."
      },
      {
        label: "Usable capacity with 4 x 2 TB",
        hint: "Mirroring halves capacity.",
        options: ["2 TB", "4 TB", "6 TB", "8 TB"],
        answer: 1,
        explain: "RAID 10 mirrors data, so usable capacity is half the total: 4 x 2 TB = 8 TB raw, yielding 4 TB usable."
      },
      {
        label: "Fault tolerance",
        hint: "Depends on which drives fail.",
        options: ["No drives", "One drive guaranteed; up to one per mirror pair", "Always exactly two drives", "Half plus one"],
        answer: 1,
        explain: "RAID 10 survives at least one drive failure, and can survive multiple failures as long as no single mirrored pair loses both of its drives."
      }
    ],
    summary: "RAID 10 (min 4 disks, half capacity usable) gives databases high performance plus redundancy, surviving a failure in each mirror pair."
  },
  {
    id: "PBQ-051",
    format: 2,
    domain: 3,
    title: "Migrating HDD to SSD",
    brief: "An aging laptop with a mechanical drive feels slow. Plan the upgrade to a solid-state drive.",
    exhibitTitle: "Drive Migration Plan",
    exhibit: "<span class='cy'>Current:</span> 2.5-inch 5400 RPM HDD, SATA\n<span class='ok'>Goal:</span> Faster boot and app loads, keep existing Windows install\n<span class='warnc'>Laptop has only one SATA bay, no M.2 slot</span>\n<span class='dim'>500 GB of data in use</span>",
    fields: [
      {
        label: "Replacement drive type",
        hint: "Fits a single 2.5-inch SATA bay.",
        options: ["NVMe M.2 SSD", "2.5-inch SATA SSD", "3.5-inch SATA SSD", "PCIe add-in SSD"],
        answer: 1,
        explain: "With only a 2.5-inch SATA bay and no M.2 slot, a 2.5-inch SATA SSD is the correct drop-in replacement that fits the existing bay and connector."
      },
      {
        label: "Form factor",
        hint: "Match the existing drive bay.",
        options: ["M.2", "2.5-inch", "3.5-inch", "mSATA"],
        answer: 1,
        explain: "The laptop bay is 2.5-inch, so the SSD must be 2.5-inch to fit physically and connect to the existing SATA cable/connector."
      },
      {
        label: "Method to keep the existing install",
        hint: "Copy the whole drive bit-for-bit.",
        options: ["Clean install only", "Drive cloning / disk imaging", "Defragmentation", "Reformatting the HDD"],
        answer: 1,
        explain: "Cloning (disk imaging) copies the existing OS, applications, and data to the new SSD so the system boots unchanged, avoiding a clean reinstall."
      },
      {
        label: "Performance benefit of the SSD",
        hint: "Why is the SSD faster?",
        options: ["Higher RPM platters", "No moving parts and far lower access latency", "Larger physical size", "It uses parity for speed"],
        answer: 1,
        explain: "SSDs have no moving parts and near-zero seek time, dramatically reducing access latency compared to a 5400 RPM mechanical drive."
      }
    ],
    summary: "Migrating to SSD in a SATA-only laptop means a 2.5-inch SATA SSD installed via cloning; flash storage cuts latency versus spinning platters."
  },
  {
    id: "PBQ-052",
    format: 2,
    domain: 3,
    title: "Dual-Channel Memory Population",
    brief: "A technician is installing two RAM modules in a four-slot motherboard. Populate the slots correctly for dual-channel.",
    exhibitTitle: "Memory Population Guide",
    exhibit: "<span class='cy'>Board:</span> 4 DIMM slots (A1, A2, B1, B2)\n<span class='ok'>Goal:</span> Enable dual-channel with two modules\n<span class='warnc'>Manual: install matched pairs in same-color slots</span>\n<span class='cy'>Modules:</span> 2 x 16 GB DDR4-3200, identical\n<span class='dim'>Slots color-coded by channel</span>",
    fields: [
      {
        label: "Slot population for two modules",
        hint: "Same-color slots, usually slots 2 and 4.",
        options: ["Both modules in A1 and A2", "One module per channel in the matched (same-color) slots", "Both in B1 and B2 only", "Any two adjacent slots"],
        answer: 1,
        explain: "Dual-channel requires one module in each channel. The matched (same-color) slots, typically A2 and B2, place one stick per channel."
      },
      {
        label: "Module matching requirement",
        hint: "What must the two modules share?",
        options: ["Only matching capacity", "Matching capacity, speed, and ideally same kit", "Only matching brand", "Nothing, any two work"],
        answer: 1,
        explain: "For reliable dual-channel operation modules should match in capacity and speed; buying them as a matched kit avoids timing/voltage mismatches."
      },
      {
        label: "Result of installing both sticks in the same channel",
        hint: "Both in A1 and A2.",
        options: ["Dual-channel still active", "Falls back to single-channel", "Triple-channel", "RAM not detected"],
        answer: 1,
        explain: "Placing both modules in one channel's slots runs in single-channel mode, roughly halving effective memory bandwidth versus proper dual-channel placement."
      },
      {
        label: "Bandwidth effect of dual-channel",
        hint: "Two channels working together.",
        options: ["No change", "Roughly doubles memory bandwidth", "Reduces latency to zero", "Triples capacity"],
        answer: 1,
        explain: "Dual-channel widens the data path to memory, roughly doubling bandwidth compared to single-channel, which benefits integrated graphics and memory-heavy tasks."
      }
    ],
    summary: "Dual-channel needs one matched module per channel in the same-color slots; mispopulating one channel drops the system to single-channel."
  },
  {
    id: "PBQ-053",
    format: 2,
    domain: 3,
    title: "Video Editing Scratch Disk",
    brief: "A video editor needs a fast scratch/cache drive for 4K footage plus an archive. Tier the storage.",
    exhibitTitle: "Editing Storage Spec",
    exhibit: "<span class='cy'>Active project:</span> 4K timeline cache and scratch files\n<span class='ok'>Need:</span> Highest sustained throughput for active media\n<span class='cy'>Archive:</span> Finished projects, rarely accessed\n<span class='warnc'>Board has a free M.2 PCIe x4 slot</span>\n<span class='dim'>Budget allows one fast + one large drive</span>",
    fields: [
      {
        label: "Scratch/cache drive",
        hint: "Highest sustained throughput.",
        options: ["SATA SSD", "NVMe SSD", "7200 RPM HDD", "External USB HDD"],
        answer: 1,
        explain: "An NVMe SSD provides the highest sustained read/write throughput, ideal for 4K scratch and cache files accessed during editing."
      },
      {
        label: "Scratch drive interface",
        hint: "M.2 slot with x4 lanes.",
        options: ["SATA III", "PCIe", "USB 2.0", "Thunderbolt only"],
        answer: 1,
        explain: "The NVMe scratch drive uses the PCIe bus through the M.2 slot, providing far more bandwidth than SATA for high-bitrate media."
      },
      {
        label: "Archive drive",
        hint: "Cheapest large capacity.",
        options: ["NVMe SSD", "Large 3.5-inch HDD", "USB flash drive", "Optical disc"],
        answer: 1,
        explain: "A large 3.5-inch HDD gives the lowest cost per terabyte for rarely accessed archived projects where speed is unimportant."
      }
    ],
    summary: "Editing workflows pair an NVMe (PCIe) scratch SSD for active 4K media with a large HDD archive for cheap cold storage."
  },
  {
    id: "PBQ-054",
    format: 2,
    domain: 3,
    title: "RAID 6 for Large Archive Array",
    brief: "A media archive needs to survive two simultaneous drive failures during long rebuilds. Configure the array.",
    exhibitTitle: "Archive Array Requirements",
    exhibit: "<span class='cy'>Device:</span> 8-bay storage enclosure\n<span class='ok'>Goal:</span> Tolerate TWO drive failures at once\n<span class='warnc'>Large drives mean long rebuild windows</span>\n<span class='cy'>Drives:</span> 8 x 10 TB HDD\n<span class='dim'>Cold archive, capacity-focused</span>",
    fields: [
      {
        label: "RAID level",
        hint: "Double distributed parity.",
        options: ["RAID 5", "RAID 6", "RAID 10", "RAID 0"],
        answer: 1,
        explain: "RAID 6 uses double distributed parity, letting the array survive two simultaneous drive failures, important during long rebuilds of large drives."
      },
      {
        label: "Minimum disks required",
        hint: "Two parity plus at least two data.",
        options: ["3", "4", "6", "8"],
        answer: 1,
        explain: "RAID 6 requires a minimum of 4 disks because it consumes the equivalent of two drives for its two parity sets."
      },
      {
        label: "Fault tolerance",
        hint: "Two parity sets.",
        options: ["One drive", "Two drives", "Three drives", "Zero drives"],
        answer: 1,
        explain: "RAID 6 tolerates the loss of any two drives simultaneously thanks to its dual parity, unlike RAID 5 which tolerates only one."
      },
      {
        label: "Usable capacity with 8 x 10 TB",
        hint: "Lose two drives' worth to parity.",
        options: ["80 TB", "70 TB", "60 TB", "40 TB"],
        answer: 2,
        explain: "RAID 6 usable capacity equals (n-2) x drive size = (8-2) x 10 TB = 60 TB, with two drives consumed by dual parity."
      }
    ],
    summary: "RAID 6 (min 4 disks, tolerates two failures) protects large arrays during long rebuilds; usable space is (n-2) times the drive size."
  },
  {
    id: "PBQ-055",
    format: 2,
    domain: 3,
    title: "Budget Office PC Memory",
    brief: "A basic office desktop for web and documents needs a cost-effective memory loadout. Specify the RAM.",
    exhibitTitle: "Office PC Memory Spec",
    exhibit: "<span class='cy'>Use:</span> Browser, email, office documents\n<span class='ok'>Goal:</span> Adequate performance at low cost\n<span class='cy'>Board:</span> Desktop, two DIMM slots, DDR4-2666\n<span class='warnc'>No ECC support on this consumer board</span>\n<span class='dim'>Target 16 GB total</span>",
    fields: [
      {
        label: "Memory type",
        hint: "Standard consumer, no error correction.",
        options: ["Registered ECC", "Unbuffered non-ECC", "Buffered ECC", "Parity"],
        answer: 1,
        explain: "A consumer board without ECC support uses standard unbuffered non-ECC memory, which is the common, cost-effective choice for office PCs."
      },
      {
        label: "Form factor",
        hint: "Desktop tower.",
        options: ["SO-DIMM", "DIMM", "MicroDIMM", "M.2"],
        answer: 1,
        explain: "Desktop systems use full-size DIMM modules; SO-DIMM is reserved for laptops and small-form-factor builds."
      },
      {
        label: "Configuration for 16 GB dual-channel",
        hint: "Fill both slots with a matched pair.",
        options: ["One 16 GB module", "Two 8 GB modules", "Four 4 GB modules", "One 8 GB module"],
        answer: 1,
        explain: "Two 8 GB DIMMs reach 16 GB and populate both slots, enabling dual-channel mode for better performance than a single 16 GB stick."
      }
    ],
    summary: "Budget desktops use unbuffered non-ECC DIMMs; a matched pair fills both slots for 16 GB in dual-channel at minimal cost."
  },
  {
    id: "PBQ-056",
    format: 2,
    domain: 3,
    title: "Boot Drive Striping for Speed Bench",
    brief: "A benchmarking rig needs maximum sequential throughput from two SSDs, with backups handled separately. Configure the array.",
    exhibitTitle: "Performance Array Spec",
    exhibit: "<span class='cy'>Goal:</span> Highest possible read/write throughput\n<span class='warnc'>Redundancy NOT required (data backed up elsewhere)</span>\n<span class='cy'>Drives:</span> 2 x 1 TB SSD, identical\n<span class='ok'>Combine both into one fast volume</span>\n<span class='dim'>Test bench, disposable data</span>",
    fields: [
      {
        label: "RAID level",
        hint: "Pure striping, no redundancy.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 0,
        explain: "RAID 0 stripes data across both drives for maximum throughput and full combined capacity. It provides no redundancy, acceptable here since data is backed up elsewhere."
      },
      {
        label: "Minimum disks required",
        hint: "Stripe across at least two.",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explain: "RAID 0 requires a minimum of 2 disks to stripe data across."
      },
      {
        label: "Fault tolerance",
        hint: "What happens if one drive dies?",
        options: ["Survives one failure", "No fault tolerance; one failure loses all data", "Survives two failures", "Rebuilds automatically"],
        answer: 1,
        explain: "RAID 0 has zero fault tolerance. Losing any single drive destroys the entire striped volume, which is why redundancy must come from elsewhere."
      },
      {
        label: "Usable capacity with 2 x 1 TB",
        hint: "No parity or mirror overhead.",
        options: ["0.5 TB", "1 TB", "2 TB", "4 TB"],
        answer: 2,
        explain: "RAID 0 has no overhead, so usable capacity equals the sum of all drives: 2 x 1 TB = 2 TB."
      }
    ],
    summary: "RAID 0 (min 2 disks, no fault tolerance) maximizes speed and capacity by striping; it is only safe when data is protected elsewhere."
  },
  {
    id: "PBQ-057",
    format: 2,
    domain: 3,
    title: "Mirrored OS Drive for Small Server",
    brief: "A small file server's OS volume must keep running if one drive fails. Configure the boot array.",
    exhibitTitle: "OS Volume Requirements",
    exhibit: "<span class='cy'>Role:</span> Small office file server OS drive\n<span class='ok'>Goal:</span> Continue operating after a single drive failure\n<span class='warnc'>Only two drive bays available for the OS</span>\n<span class='cy'>Drives:</span> 2 x 1 TB\n<span class='dim'>Simplicity preferred over capacity</span>",
    fields: [
      {
        label: "RAID level",
        hint: "Exact copy across two drives.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
        answer: 1,
        explain: "RAID 1 mirrors data identically across two drives, so the OS keeps running if one fails. It is simple and ideal for a two-bay boot volume."
      },
      {
        label: "Minimum disks required",
        hint: "A mirror needs a pair.",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explain: "RAID 1 requires a minimum of 2 disks, since it maintains an exact copy of the data on each."
      },
      {
        label: "Fault tolerance",
        hint: "One full copy remains.",
        options: ["Zero drives", "One drive", "Two drives", "Half the array"],
        answer: 1,
        explain: "RAID 1 survives the failure of one drive because the surviving drive holds a complete copy of all data."
      },
      {
        label: "Usable capacity with 2 x 1 TB",
        hint: "Mirroring duplicates everything.",
        options: ["0.5 TB", "1 TB", "2 TB", "4 TB"],
        answer: 1,
        explain: "RAID 1 stores one mirrored copy, so usable capacity equals a single drive: 1 TB out of 2 TB raw."
      }
    ],
    summary: "RAID 1 (min 2 disks, tolerates one failure) mirrors data for a simple redundant OS volume; usable capacity equals one drive."
  },
  {
    id: "PBQ-058",
    format: 2,
    domain: 3,
    title: "Virtualization Host Memory",
    brief: "A virtualization host will run many VMs continuously and must guard against memory errors. Specify the RAM.",
    exhibitTitle: "Hypervisor Memory Spec",
    exhibit: "<span class='cy'>Role:</span> Type-1 hypervisor running dozens of VMs\n<span class='ok'>Need:</span> Large capacity, error correction, 24/7 stability\n<span class='cy'>Platform:</span> Server CPU/board with ECC and RDIMM support\n<span class='warnc'>Many modules will be installed</span>\n<span class='dim'>DDR4 server platform</span>",
    fields: [
      {
        label: "Error protection",
        hint: "Servers cannot tolerate silent bit flips.",
        options: ["Non-ECC", "ECC", "Parity-only", "None needed"],
        answer: 1,
        explain: "A 24/7 virtualization host uses ECC memory so single-bit errors are corrected automatically, preventing VM and data corruption."
      },
      {
        label: "Module type for many high-capacity sticks",
        hint: "Reduces electrical load at scale.",
        options: ["Unbuffered DIMM (UDIMM)", "Registered DIMM (RDIMM)", "SO-DIMM", "MicroDIMM"],
        answer: 1,
        explain: "Registered (buffered) DIMMs add a register to reduce load on the memory controller, allowing more modules and greater total capacity stably, which servers need."
      },
      {
        label: "Form factor",
        hint: "Rack/tower server.",
        options: ["SO-DIMM", "DIMM", "MicroDIMM", "M.2"],
        answer: 1,
        explain: "Server memory uses full-size DIMM modules; the registered ECC variants are still DIMM form factor."
      },
      {
        label: "Why not use consumer non-ECC UDIMMs here",
        hint: "Think reliability and scale.",
        options: ["They are too fast", "No error correction and limited capacity/stability at scale", "They do not fit DIMM slots", "They require a laptop"],
        answer: 1,
        explain: "Consumer non-ECC UDIMMs lack error correction and do not scale to the high module counts/capacity a virtualization host needs with stability."
      }
    ],
    summary: "Virtualization hosts use registered (buffered) ECC DIMMs for error correction plus the capacity and stability that high module counts demand."
  },
  {
    id: "PBQ-059",
    format: 2,
    domain: 3,
    title: "Adding a Second M.2 NVMe Drive",
    brief: "A user wants to add a second NVMe drive for games without removing the existing OS drive. Plan the install.",
    exhibitTitle: "Storage Expansion Plan",
    exhibit: "<span class='cy'>Existing:</span> M.2 NVMe OS drive in slot M.2_1\n<span class='ok'>Goal:</span> Add a dedicated games drive, keep OS intact\n<span class='cy'>Board:</span> Second M.2 slot (M.2_2) available, PCIe x4\n<span class='warnc'>Check slot does not disable a SATA port</span>\n<span class='dim'>No data migration needed</span>",
    fields: [
      {
        label: "Second drive type",
        hint: "Match the available slot.",
        options: ["2.5-inch SATA SSD", "M.2 NVMe SSD", "3.5-inch HDD", "External USB SSD"],
        answer: 1,
        explain: "An open M.2 PCIe x4 slot takes an M.2 NVMe SSD, giving the second drive the same high performance as the OS drive."
      },
      {
        label: "Interface used by the new drive",
        hint: "M.2 NVMe bus.",
        options: ["SATA III", "PCIe", "USB 3.2", "SAS"],
        answer: 1,
        explain: "NVMe drives use the PCIe bus via the M.2 slot, providing much higher bandwidth than SATA-attached storage."
      },
      {
        label: "Post-install step before use",
        hint: "A new raw drive needs preparation.",
        options: ["Nothing, it auto-mounts data", "Initialize, partition, and format the new drive", "Clone the OS onto it", "Run a defrag"],
        answer: 1,
        explain: "A brand-new drive must be initialized, partitioned, and formatted in Disk Management before it can store games or other data."
      },
      {
        label: "Compatibility caution to verify",
        hint: "Lane sharing on some boards.",
        options: ["M.2 slots never share resources", "Some M.2 slots disable certain SATA ports when populated", "NVMe requires removing all RAM", "The OS drive must be erased first"],
        answer: 1,
        explain: "On many boards an M.2 slot shares lanes with SATA ports, disabling one or more SATA connectors when the slot is used. Check the manual before installing."
      }
    ],
    summary: "Adding storage to an open M.2 PCIe slot means another NVMe SSD that must be initialized/formatted; verify the slot does not disable shared SATA ports."
  },
  {
    id: "PBQ-060",
    format: 2,
    domain: 3,
    title: "Surveillance NVR Storage Sizing",
    brief: "A network video recorder needs sustained-write storage with redundancy for continuous camera recording. Configure it.",
    exhibitTitle: "NVR Storage Requirements",
    exhibit: "<span class='cy'>Workload:</span> Continuous 24/7 writes from many cameras\n<span class='ok'>Goal:</span> Survive one drive failure, maximize usable space\n<span class='warnc'>Sustained write endurance matters more than burst speed</span>\n<span class='cy'>Bays:</span> 5 drive bays available\n<span class='dim'>Capacity over peak performance</span>",
    fields: [
      {
        label: "Drive type for 24/7 sustained writes",
        hint: "Continuous-write, capacity-oriented spinning media.",
        options: ["Consumer NVMe SSD", "Surveillance-rated HDD", "USB flash drives", "Optical media"],
        answer: 1,
        explain: "Surveillance-rated HDDs are designed for continuous 24/7 sustained writes and high capacity at low cost, the right fit for NVR recording."
      },
      {
        label: "RAID level",
        hint: "Single parity, one-failure tolerance, good capacity.",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2,
        explain: "RAID 5 gives strong usable capacity with single-failure tolerance across the 5 bays, matching the goal of maximizing space while surviving one drive loss."
      },
      {
        label: "Minimum disks for the chosen level",
        hint: "Parity plus data drives.",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explain: "RAID 5 requires a minimum of 3 disks; the 5-bay enclosure comfortably exceeds that, using one drive's worth of space for parity."
      },
      {
        label: "Usable capacity with 5 x 6 TB",
        hint: "Lose one drive's worth to parity.",
        options: ["30 TB", "24 TB", "18 TB", "12 TB"],
        answer: 1,
        explain: "RAID 5 usable capacity equals (n-1) x drive size = (5-1) x 6 TB = 24 TB, with one drive consumed by distributed parity."
      }
    ],
    summary: "NVR storage uses surveillance-rated HDDs in RAID 5 (min 3 disks, one-failure tolerance) for high usable capacity; usable space is (n-1) times the drive size."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-061",
    format: 3,
    domain: 3,
    title: "Wire a 10GbE Office Backbone Run",
    brief: "A small office needs a wired link from a switch to a workstation 80 meters away that must sustain 10 Gbps. You must select the copper cabling and termination.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Endpoint A:</span> Layer 2 switch with <span class='ok'>10GBASE-T</span> port\n<span class='cy'>Endpoint B:</span> Workstation NIC rated <span class='ok'>10 Gbps</span>\n<span class='warnc'>Distance:</span> 80 m horizontal run in plenum ceiling\n<span class='dim'>Goal: full 10 Gbps end to end over copper</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Which twisted-pair category guarantees 10GbE to 100 m?",
        options: ["Cat5e", "Cat6", "Cat6a", "Cat3"],
        answer: 2,
        explain: "Cat6a supports 10GBASE-T to the full 100 m. Cat6 only reaches 10GbE to about 55 m, and Cat5e tops out at 1 Gbps."
      },
      {
        label: "Connector",
        hint: "Standard 8-position Ethernet plug.",
        options: ["RJ11", "RJ45", "F-type", "LC"],
        answer: 1,
        explain: "RJ45 is the 8P8C connector used for Ethernet. RJ11 is for telephone, F-type for coax, and LC for fiber."
      },
      {
        label: "Capability",
        hint: "What speed does this achieve at 80 m?",
        options: ["1 Gbps", "10 Gbps", "100 Mbps", "40 Gbps"],
        answer: 1,
        explain: "Cat6a sustains 10 Gbps to 100 m, so 80 m delivers the full 10 Gbps."
      }
    ],
    summary: "Cat6a terminated with RJ45 delivers 10GbE to 100 m, comfortably covering the 80 m run."
  },
  {
    id: "PBQ-062",
    format: 3,
    domain: 3,
    title: "Connect Two Buildings Across a Campus",
    brief: "Two buildings 2 km apart must be linked at 10 Gbps. Copper cannot span the distance, so a fiber link is required.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Building A:</span> Core switch with <span class='ok'>10G fiber uplink</span>\n<span class='cy'>Building B:</span> Distribution switch, fiber uplink\n<span class='warnc'>Distance:</span> 2,000 m between buildings\n<span class='dim'>Goal: 10 Gbps long-haul link outdoors</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Which fiber mode carries signals kilometers without modal dispersion?",
        options: ["Multimode (MMF)", "Single-mode (SMF)", "Cat6a", "RG-6 coax"],
        answer: 1,
        explain: "Single-mode fiber has a tiny core (about 9 microns) and a single light path, supporting distances of many kilometers. Multimode is limited to a few hundred meters."
      },
      {
        label: "Connector",
        hint: "Common small-form-factor fiber connector.",
        options: ["F-type", "RJ45", "LC", "DB9"],
        answer: 2,
        explain: "LC is a small-form-factor fiber connector widely used on SFP+ transceivers. RJ45 is copper, F-type is coax, DB9 is serial."
      },
      {
        label: "Capability",
        hint: "Why fiber over copper here?",
        options: ["Cheaper per meter", "Spans kilometers and immune to EMI", "Supplies PoE", "Carries analog TV"],
        answer: 1,
        explain: "Fiber spans kilometers and is immune to electromagnetic interference, making it ideal for inter-building runs that exceed copper's 100 m limit."
      }
    ],
    summary: "Single-mode fiber with LC connectors links the buildings at 10 Gbps over 2 km, far beyond copper's reach."
  },
  {
    id: "PBQ-063",
    format: 3,
    domain: 3,
    title: "Bring Cable Internet to a Modem",
    brief: "A residential cable modem must connect to the coaxial wall outlet provided by the ISP.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Wall outlet:</span> <span class='ok'>RG-6 coax</span> drop from ISP\n<span class='cy'>Device:</span> DOCSIS cable modem, coax input\n<span class='warnc'>Signal:</span> RF broadband over coax\n<span class='dim'>Goal: connect modem to the coax drop</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Coax grade used for modern cable internet/TV.",
        options: ["RG-59", "RG-6", "Cat6", "Twinaxial"],
        answer: 1,
        explain: "RG-6 is the standard coax for cable internet and TV; it has thicker conductor and better shielding than the older RG-59."
      },
      {
        label: "Connector",
        hint: "Screw-on coax connector.",
        options: ["BNC", "F-type", "SC", "RJ45"],
        answer: 1,
        explain: "F-type is the threaded screw-on connector used on RG-6 for cable TV and internet. BNC is a bayonet connector seen on older networking and video."
      },
      {
        label: "Capability",
        hint: "What does coax carry to the modem?",
        options: ["Digital Ethernet frames", "RF broadband signal", "DisplayPort video", "PoE power only"],
        answer: 1,
        explain: "Coax carries the RF broadband signal that the DOCSIS modem demodulates into internet data."
      }
    ],
    summary: "RG-6 coax with an F-type connector delivers the ISP's RF broadband signal to the cable modem."
  },
  {
    id: "PBQ-064",
    format: 3,
    domain: 3,
    title: "Drive a 4K Monitor with Audio",
    brief: "A user wants to connect a desktop GPU to a 4K TV that should receive both video and audio over a single cable.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Source:</span> GPU with HDMI and DisplayPort outputs\n<span class='cy'>Display:</span> <span class='ok'>4K TV</span> with HDMI inputs and speakers\n<span class='warnc'>Need:</span> single cable carrying <span class='ok'>video + audio</span>\n<span class='dim'>Goal: 4K picture and sound to the TV</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Which interface a TV almost always provides and carries audio?",
        options: ["VGA", "HDMI", "DVI-D", "DB9"],
        answer: 1,
        explain: "HDMI carries both digital video and audio over one cable and is the standard input on TVs. VGA and DVI-D do not carry audio."
      },
      {
        label: "Capability",
        hint: "What can HDMI 2.0+ deliver here?",
        options: ["Analog only 1080i", "4K video plus multichannel audio", "Power delivery to laptop", "Serial console"],
        answer: 1,
        explain: "HDMI 2.0 and later carry 4K (and audio), making a single HDMI cable sufficient for the TV."
      },
      {
        label: "Alternative for a monitor",
        hint: "Best digital interface for high-refresh PC monitors.",
        options: ["VGA", "DisplayPort", "Composite RCA", "PS/2"],
        answer: 1,
        explain: "DisplayPort is the preferred PC interface for high resolutions and refresh rates and also carries audio, though TVs typically only offer HDMI."
      }
    ],
    summary: "HDMI carries 4K video and audio on one cable to the TV; DisplayPort is the analog-free alternative for PC monitors."
  },
  {
    id: "PBQ-065",
    format: 3,
    domain: 3,
    title: "Connect a Legacy Analog Projector",
    brief: "A conference room projector only accepts an analog video input from an older laptop's 15-pin port.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Source:</span> Laptop with a blue <span class='ok'>15-pin</span> video port\n<span class='cy'>Display:</span> Projector, analog input only\n<span class='warnc'>Signal:</span> <span class='warnc'>analog RGB</span>, no audio\n<span class='dim'>Goal: send the laptop image to the projector</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Analog 15-pin video standard.",
        options: ["HDMI", "VGA", "DisplayPort", "Thunderbolt"],
        answer: 1,
        explain: "VGA is the analog video standard using a 15-pin connector. HDMI, DisplayPort, and Thunderbolt are digital."
      },
      {
        label: "Connector",
        hint: "How many pins and what shape?",
        options: ["DB9 9-pin", "DE-15 (HD-15) 3-row 15-pin", "RJ45 8-pin", "USB-C oval"],
        answer: 1,
        explain: "VGA uses the DE-15 / HD-15 connector with 15 pins in three rows. DB9 is 9-pin serial."
      },
      {
        label: "Capability",
        hint: "What does VGA NOT carry?",
        options: ["Analog video", "Audio", "RGB color", "Sync signals"],
        answer: 1,
        explain: "VGA carries only analog video; it does not carry audio, so a separate audio cable is needed if sound is required."
      }
    ],
    summary: "A VGA cable with an HD-15 connector sends analog video to the projector but carries no audio."
  },
  {
    id: "PBQ-066",
    format: 3,
    domain: 3,
    title: "Attach a SATA SSD Inside a Desktop",
    brief: "A technician installs a 2.5-inch SSD into a desktop and must connect it to the motherboard for data.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Drive:</span> 2.5\" <span class='ok'>SATA III SSD</span>\n<span class='cy'>Board:</span> Motherboard SATA data ports\n<span class='warnc'>Throughput:</span> up to <span class='ok'>6 Gbps</span> on the data link\n<span class='dim'>Goal: connect SSD data to the motherboard</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Internal drive data interface.",
        options: ["SATA data cable", "Cat6", "USB-A", "HDMI"],
        answer: 1,
        explain: "A SATA data cable carries drive data between the SSD and the motherboard SATA port."
      },
      {
        label: "Connector",
        hint: "Shape of the SATA data connector.",
        options: ["7-pin L-shaped", "15-pin power", "RJ45", "DB9"],
        answer: 1,
        explain: "The SATA data connector is the 7-pin L-shaped key. The separate 15-pin connector is for power from the PSU."
      },
      {
        label: "Capability",
        hint: "Maximum SATA III data rate.",
        options: ["1.5 Gbps", "3 Gbps", "6 Gbps", "16 Gbps"],
        answer: 2,
        explain: "SATA III (SATA 6Gb/s) provides up to 6 Gbps. SATA I is 1.5 Gbps and SATA II is 3 Gbps."
      }
    ],
    summary: "A 7-pin SATA data cable links the SSD to the motherboard at up to 6 Gbps on SATA III."
  },
  {
    id: "PBQ-067",
    format: 3,
    domain: 3,
    title: "Charge a Laptop Over USB-C",
    brief: "A modern laptop is charged and connected to a dock entirely through one reversible USB-C port.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Laptop:</span> single <span class='ok'>USB-C</span> port, no barrel jack\n<span class='cy'>Dock:</span> USB-C upstream with power passthrough\n<span class='warnc'>Power:</span> needs up to <span class='ok'>100W+</span> charging\n<span class='dim'>Goal: data, display, and charging on one cable</span>",
    fields: [
      {
        label: "Connector",
        hint: "Reversible 24-pin connector.",
        options: ["USB-A", "USB-B", "USB-C", "Micro-USB"],
        answer: 2,
        explain: "USB-C is the reversible 24-pin connector that supports data, video (alt mode), and power delivery on one port."
      },
      {
        label: "Power capability",
        hint: "Max USB Power Delivery with the latest spec.",
        options: ["15W", "60W", "100W", "240W"],
        answer: 3,
        explain: "USB Power Delivery (EPR) supports up to 240W (48V/5A), more than enough to charge a laptop. The older PD limit was 100W."
      },
      {
        label: "Data capability",
        hint: "USB-C can also tunnel which high-speed protocol?",
        options: ["RS-232", "Thunderbolt", "PS/2", "Composite video"],
        answer: 1,
        explain: "USB-C can carry Thunderbolt 3/4 (up to 40 Gbps) and DisplayPort alt mode, enabling a single-cable dock."
      }
    ],
    summary: "A USB-C cable carries data, DisplayPort/Thunderbolt video, and up to 240W of Power Delivery to charge the laptop."
  },
  {
    id: "PBQ-068",
    format: 3,
    domain: 3,
    title: "Connect an Older Inkjet Printer",
    brief: "A legacy inkjet printer connects to a PC using the classic square-ended USB peripheral cable.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>PC:</span> rectangular <span class='ok'>USB-A</span> host port\n<span class='cy'>Printer:</span> square <span class='ok'>USB-B</span> device port\n<span class='warnc'>Role:</span> host-to-peripheral data link\n<span class='dim'>Goal: print jobs from PC to printer</span>",
    fields: [
      {
        label: "Host-side connector",
        hint: "Flat rectangular plug on the PC.",
        options: ["USB-A", "USB-B", "RJ45", "DB25"],
        answer: 0,
        explain: "USB-A is the flat rectangular host connector found on PCs and hubs."
      },
      {
        label: "Device-side connector",
        hint: "Squarish plug common on printers.",
        options: ["USB-C", "USB-B", "Lightning", "F-type"],
        answer: 1,
        explain: "USB-B is the square connector traditionally used on printers and other peripherals."
      },
      {
        label: "Capability",
        hint: "What does this USB 2.0 cable provide?",
        options: ["Up to 480 Mbps data and bus power", "10 Gbps video", "Analog audio", "Telephone signaling"],
        answer: 0,
        explain: "USB 2.0 provides up to 480 Mbps of data plus bus power, which is ample for printing."
      }
    ],
    summary: "A USB-A to USB-B cable links the PC host to the printer device at USB 2.0 speeds."
  },
  {
    id: "PBQ-069",
    format: 3,
    domain: 3,
    title: "Patch a Phone Line to a DSL Modem",
    brief: "A DSL modem must connect to the analog telephone jack on the wall.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Wall jack:</span> analog <span class='ok'>telephone</span> line\n<span class='cy'>Device:</span> DSL modem, phone-line input\n<span class='warnc'>Pairs:</span> 1-2 twisted pairs, low bandwidth\n<span class='dim'>Goal: connect modem to the phone line</span>",
    fields: [
      {
        label: "Connector",
        hint: "Small 6-position telephone plug.",
        options: ["RJ45", "RJ11", "LC", "BNC"],
        answer: 1,
        explain: "RJ11 is the small 6-position telephone connector used for analog phone and DSL lines. RJ45 is the larger 8-position Ethernet plug."
      },
      {
        label: "Cable type",
        hint: "Telephone-grade twisted pair.",
        options: ["RG-6 coax", "Cat3 / phone-grade twisted pair", "Single-mode fiber", "SATA"],
        answer: 1,
        explain: "Phone and DSL lines use telephone-grade (Cat3-class) twisted-pair wiring, not coax or fiber."
      },
      {
        label: "Capability",
        hint: "How does RJ11 differ from RJ45?",
        options: ["Carries 10GbE", "Fewer pins, voice-band/DSL only", "Provides PoE", "4K video"],
        answer: 1,
        explain: "RJ11 has fewer pins and is limited to voice-band telephone and DSL signaling, not high-speed Ethernet."
      }
    ],
    summary: "An RJ11 connector on phone-grade twisted pair links the DSL modem to the analog telephone line."
  },
  {
    id: "PBQ-070",
    format: 3,
    domain: 3,
    title: "Configure a Switch via Serial Console",
    brief: "A network admin must access a managed switch's console port to perform initial configuration.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Switch:</span> RS-232 <span class='ok'>console</span> port\n<span class='cy'>Laptop:</span> USB port (no native serial)\n<span class='warnc'>Protocol:</span> <span class='warnc'>RS-232 serial</span> at 9600 baud\n<span class='dim'>Goal: reach the switch CLI before it has an IP</span>",
    fields: [
      {
        label: "Connector at the switch",
        hint: "Classic 9-pin serial connector.",
        options: ["DB9 (DE-9)", "RJ45", "USB-C", "HDMI"],
        answer: 0,
        explain: "RS-232 serial console connections classically use a DB9 (DE-9) connector, though some switches use an RJ45 console port. DB9 is the serial standard."
      },
      {
        label: "Adapter for a modern laptop",
        hint: "Laptops lack serial ports.",
        options: ["USB-to-serial (USB-A to DB9)", "HDMI-to-VGA", "Cat6 crossover", "SATA-to-USB"],
        answer: 0,
        explain: "A USB-to-serial adapter bridges the laptop's USB-A port to the DB9 serial console."
      },
      {
        label: "Capability",
        hint: "Why use the console instead of the network?",
        options: ["Faster than fiber", "Out-of-band CLI access with no IP needed", "Provides PoE", "Streams 4K"],
        answer: 1,
        explain: "The serial console provides out-of-band CLI access for initial setup before the device has an IP address."
      }
    ],
    summary: "A USB-to-serial (DB9) cable provides out-of-band RS-232 console access to configure the switch."
  },
  {
    id: "PBQ-071",
    format: 3,
    domain: 3,
    title: "Run Fiber Within a Data Center Row",
    brief: "Two top-of-rack switches in the same row need a 10GbE fiber link about 200 meters apart using cost-effective optics.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Switch A:</span> SFP+ <span class='ok'>10G</span> fiber port\n<span class='cy'>Switch B:</span> SFP+ 10G fiber port\n<span class='warnc'>Distance:</span> 200 m inside the data center\n<span class='dim'>Goal: cost-effective short-reach 10GbE fiber</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Which fiber mode is cheaper for short data-center runs?",
        options: ["Single-mode (SMF)", "Multimode (MMF)", "RG-59 coax", "Cat5e"],
        answer: 1,
        explain: "Multimode fiber (OM3/OM4) is cost-effective for short data-center runs; OM4 supports 10GbE to roughly 400 m. Single-mode is used for long-haul."
      },
      {
        label: "Connector",
        hint: "Duplex small-form-factor fiber connector.",
        options: ["SC simplex", "LC duplex", "RJ45", "F-type"],
        answer: 1,
        explain: "LC duplex connectors are standard on SFP+ transceivers for short-reach fiber. SC is larger; RJ45 and F-type are not fiber."
      },
      {
        label: "Capability",
        hint: "Can MMF carry 10GbE at 200 m?",
        options: ["No, copper only", "Yes, OM3/OM4 reach 10GbE past 200 m", "Only 1 Gbps", "Analog video"],
        answer: 1,
        explain: "OM3 reaches 10GbE to about 300 m and OM4 to about 400 m, so 200 m is well within range."
      }
    ],
    summary: "Multimode (OM3/OM4) fiber with LC duplex connectors gives cost-effective 10GbE over the 200 m intra-row run."
  },
  {
    id: "PBQ-072",
    format: 3,
    domain: 3,
    title: "Connect an iPhone to a USB-A Charger",
    brief: "A user needs to charge and sync an older iPhone using its proprietary Apple connector from a standard USB-A port.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Phone:</span> iPhone with <span class='ok'>Lightning</span> port\n<span class='cy'>Charger:</span> USB-A power adapter\n<span class='warnc'>Cable:</span> proprietary Apple connector\n<span class='dim'>Goal: charge and sync the iPhone</span>",
    fields: [
      {
        label: "Device-side connector",
        hint: "Apple's reversible 8-pin proprietary connector.",
        options: ["Micro-USB", "Lightning", "USB-C", "Mini-USB"],
        answer: 1,
        explain: "Lightning is Apple's proprietary reversible 8-pin connector used on older iPhones. Newer iPhones moved to USB-C."
      },
      {
        label: "Host-side connector",
        hint: "Standard rectangular charger plug.",
        options: ["USB-A", "USB-B", "DB9", "RJ45"],
        answer: 0,
        explain: "USB-A is the flat rectangular host connector on the charger or PC."
      },
      {
        label: "Capability",
        hint: "What does the cable provide?",
        options: ["Data sync and charging power", "4K video out", "PoE to switches", "RF cable TV"],
        answer: 0,
        explain: "A Lightning-to-USB-A cable provides charging power and data sync between the iPhone and host."
      }
    ],
    summary: "A Lightning-to-USB-A cable charges and syncs the older iPhone from a standard USB-A port."
  },
  {
    id: "PBQ-073",
    format: 3,
    domain: 3,
    title: "Daisy-Chain Displays from a Laptop Dock",
    brief: "A power user wants a single high-bandwidth port to drive dual 4K monitors and external storage from a laptop.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Laptop:</span> <span class='ok'>Thunderbolt 4</span> port (USB-C shape)\n<span class='cy'>Peripherals:</span> two 4K monitors + NVMe enclosure\n<span class='warnc'>Bandwidth:</span> up to <span class='ok'>40 Gbps</span> shared\n<span class='dim'>Goal: one cable for displays and fast storage</span>",
    fields: [
      {
        label: "Interface",
        hint: "High-bandwidth interface using the USB-C connector.",
        options: ["Thunderbolt 3/4", "VGA", "SATA", "RJ45"],
        answer: 0,
        explain: "Thunderbolt 3/4 uses the USB-C connector and provides up to 40 Gbps, enough for dual displays and storage."
      },
      {
        label: "Connector",
        hint: "Physical plug shape for Thunderbolt 3/4.",
        options: ["USB-A", "USB-C", "DisplayPort full-size", "Mini-DisplayPort"],
        answer: 1,
        explain: "Thunderbolt 3 and 4 use the reversible USB-C connector; older Thunderbolt 1/2 used Mini-DisplayPort."
      },
      {
        label: "Capability",
        hint: "Total Thunderbolt 4 bandwidth.",
        options: ["10 Gbps", "20 Gbps", "40 Gbps", "5 Gbps"],
        answer: 2,
        explain: "Thunderbolt 4 provides up to 40 Gbps, carrying PCIe, DisplayPort, and USB on one cable for daisy-chaining."
      }
    ],
    summary: "Thunderbolt 4 over USB-C delivers 40 Gbps, driving dual 4K monitors and NVMe storage from one port."
  },
  {
    id: "PBQ-074",
    format: 3,
    domain: 3,
    title: "Link an Older Flat-Panel via Digital Video",
    brief: "An older flat-panel monitor accepts digital video but has no HDMI. The GPU must drive it over a digital-only DVI link.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Source:</span> GPU with <span class='ok'>DVI-D</span> output\n<span class='cy'>Display:</span> 1080p panel, DVI input, no HDMI\n<span class='warnc'>Signal:</span> <span class='warnc'>digital video only</span>, no audio\n<span class='dim'>Goal: crisp digital 1080p to the panel</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Digital-only variant of this video standard.",
        options: ["DVI-D", "VGA", "Composite", "S-Video"],
        answer: 0,
        explain: "DVI-D carries a purely digital video signal. DVI-A is analog and DVI-I carries both; VGA is analog only."
      },
      {
        label: "Capability",
        hint: "What does DVI carry?",
        options: ["Video plus audio", "Digital video only (no audio)", "PoE", "RF broadband"],
        answer: 1,
        explain: "DVI carries video only and does not include audio, unlike HDMI and DisplayPort."
      },
      {
        label: "Adapter to HDMI",
        hint: "Is DVI-D compatible with HDMI video?",
        options: ["Yes, passive DVI-D to HDMI works for video", "No, requires active scaler", "Only with fiber", "Only over USB-C"],
        answer: 0,
        explain: "DVI-D and HDMI use the same digital video signaling, so a passive DVI-D-to-HDMI adapter passes video (but DVI carries no audio)."
      }
    ],
    summary: "DVI-D carries digital-only 1080p video to the panel and passively adapts to HDMI video, but without audio."
  },
  {
    id: "PBQ-075",
    format: 3,
    domain: 3,
    title: "Cable a PoE Wireless Access Point",
    brief: "A ceiling-mounted wireless access point has no nearby power outlet and must receive both data and power over one cable from a PoE switch.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Switch:</span> <span class='ok'>PoE+</span> Gigabit port\n<span class='cy'>Device:</span> ceiling WAP, no power outlet nearby\n<span class='warnc'>Run:</span> 70 m through plenum to the ceiling\n<span class='dim'>Goal: data + power on a single cable</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Twisted pair that handles GbE and PoE to 100 m.",
        options: ["Cat6 (or Cat5e)", "RG-6 coax", "Single-mode fiber", "RJ11 phone wire"],
        answer: 0,
        explain: "Cat6 (or at minimum Cat5e) supports Gigabit Ethernet and PoE to 100 m. Fiber cannot carry power and coax/phone wire are not Ethernet."
      },
      {
        label: "Connector",
        hint: "8-position Ethernet plug.",
        options: ["RJ45", "RJ11", "LC", "F-type"],
        answer: 0,
        explain: "RJ45 is the 8P8C Ethernet connector used for the data-plus-PoE link."
      },
      {
        label: "Capability",
        hint: "What does PoE deliver over the same cable?",
        options: ["Video only", "Data plus DC power to the device", "Analog audio", "Cable TV signal"],
        answer: 1,
        explain: "Power over Ethernet delivers DC power along with data on the twisted pair, so the WAP needs no separate power outlet. PoE+ (802.3at) supplies up to about 30W at the port."
      }
    ],
    summary: "Cat6 with RJ45 carries Gigabit data and PoE+ power over one 70 m run to the ceiling access point."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-076",
    format: 3,
    domain: 3,
    title: "Long-Distance Backbone Run",
    brief: "Connect two buildings 800 meters apart with a high-speed campus backbone link. Select the correct cabling and connector.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Link:</span> Building A to Building B backbone\n<span class='cy'>Distance:</span> <span class='warnc'>~800 meters</span> outdoor run\n<span class='cy'>Speed:</span> 10 Gbps required\n<span class='dim'>Note: distance far exceeds copper limits</span>",
    fields: [
      {
        label: "Cable type",
        hint: "What media supports 800 m at 10 Gbps?",
        options: ["Cat 6a UTP", "Single-mode fiber", "Multimode OM3 fiber", "RG-6 coaxial"],
        answer: 1,
        explain: "Single-mode fiber supports the longest distances (kilometers) and is the correct choice for an 800 m backbone. Cat 6a copper is limited to 100 m, and OM3 multimode typically reaches only ~300 m at 10 Gbps."
      },
      {
        label: "Connector",
        hint: "A common small-form-factor fiber connector.",
        options: ["RJ45", "LC connector", "BNC connector", "F-type connector"],
        answer: 1,
        explain: "LC is a small-form-factor fiber connector widely used on modern single-mode and multimode links. RJ45 is for twisted-pair copper, BNC/F-type are coaxial."
      },
      {
        label: "Key advantage",
        hint: "Why fiber over copper for this run?",
        options: ["Cheaper than copper", "Immune to EMI and supports long distances", "Carries power to devices", "Easier to terminate in the field"],
        answer: 1,
        explain: "Fiber is immune to electromagnetic interference and supports far greater distances than copper, making it ideal for outdoor backbone runs. It does not carry power and is harder to terminate than copper."
      }
    ],
    summary: "Single-mode fiber with LC connectors carries 10 Gbps across an 800 m EMI-immune backbone."
  },
  {
    id: "PBQ-077",
    format: 3,
    domain: 3,
    title: "10GbE Workstation Drop",
    brief: "A video-editing workstation needs a 10 Gigabit Ethernet drop over a 90 meter in-wall run. Choose the appropriate copper cabling.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Device:</span> Editing workstation\n<span class='cy'>Speed:</span> <span class='ok'>10GBASE-T</span>\n<span class='cy'>Run length:</span> 90 meters in-wall\n<span class='dim'>Note: must support full 10 Gbps to 100 m</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Which copper category guarantees 10 Gbps to 100 m?",
        options: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 3"],
        answer: 2,
        explain: "Cat 6a supports 10GBASE-T for the full 100 m channel. Cat 6 supports 10 Gbps only to ~55 m, Cat 5e tops out at 1 Gbps, and Cat 3 is legacy 10 Mbps/telephone grade."
      },
      {
        label: "Connector",
        hint: "Standard 8-position twisted-pair plug.",
        options: ["RJ11", "RJ45", "LC", "SC"],
        answer: 1,
        explain: "RJ45 (8P8C) is the standard connector for twisted-pair Ethernet. RJ11 is for telephone, and LC/SC are fiber connectors."
      },
      {
        label: "Standard supported",
        hint: "Name the 10 Gbps copper standard.",
        options: ["1000BASE-T", "10GBASE-T", "100BASE-TX", "10GBASE-SR"],
        answer: 1,
        explain: "10GBASE-T is 10 Gigabit Ethernet over twisted-pair copper. 1000BASE-T is 1 Gbps, 100BASE-TX is 100 Mbps, and 10GBASE-SR is a fiber standard."
      }
    ],
    summary: "Cat 6a with RJ45 delivers 10GBASE-T across the full 100 m copper channel."
  },
  {
    id: "PBQ-078",
    format: 3,
    domain: 3,
    title: "4K Monitor and Audio",
    brief: "Connect a single cable from a PC to a 4K 60 Hz monitor that must also carry audio. Identify the correct interface.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Display:</span> 4K UHD at <span class='ok'>60 Hz</span>\n<span class='cy'>Audio:</span> must travel on the same cable\n<span class='cy'>Source:</span> PC graphics card\n<span class='dim'>Note: digital video plus embedded audio required</span>",
    fields: [
      {
        label: "Interface",
        hint: "A digital A/V connector found on PCs, monitors, and TVs.",
        options: ["VGA", "HDMI", "DVI-D", "DisplayPort"],
        answer: 1,
        explain: "HDMI carries both 4K 60 Hz digital video and audio on one cable. VGA is analog video only, DVI-D carries no audio, and while DisplayPort also works, HDMI is the most common single-cable A/V choice for monitors and TVs."
      },
      {
        label: "Capability",
        hint: "What makes HDMI suitable here?",
        options: ["Analog video only", "Digital video with embedded audio", "Power delivery only", "Serial data only"],
        answer: 1,
        explain: "HDMI transmits digital video with embedded audio over a single cable. VGA is analog and carries no audio."
      },
      {
        label: "Minimum HDMI version for 4K60",
        hint: "Which HDMI revision first supports 4K at 60 Hz?",
        options: ["HDMI 1.2", "HDMI 1.4", "HDMI 2.0", "HDMI 1.0"],
        answer: 2,
        explain: "HDMI 2.0 added the bandwidth (18 Gbps) for 4K at 60 Hz. HDMI 1.4 supports 4K only at 30 Hz, and earlier versions cap at 1080p."
      }
    ],
    summary: "HDMI 2.0 carries 4K 60 Hz digital video with embedded audio over one cable."
  },
  {
    id: "PBQ-079",
    format: 3,
    domain: 3,
    title: "External SSD Enclosure",
    brief: "A user wants the fastest connection for an external NVMe SSD enclosure to a laptop with a Thunderbolt port. Select the cabling.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Device:</span> External NVMe SSD enclosure\n<span class='cy'>Goal:</span> <span class='ok'>maximum throughput</span>\n<span class='cy'>Laptop port:</span> Thunderbolt 3 (USB-C shape)\n<span class='dim'>Note: enclosure rated for 40 Gbps</span>",
    fields: [
      {
        label: "Connector shape",
        hint: "Reversible oval connector used by Thunderbolt 3.",
        options: ["USB-A", "USB-C", "Mini-USB", "Micro-USB"],
        answer: 1,
        explain: "Thunderbolt 3 uses the reversible USB-C connector. USB-A, Mini-USB, and Micro-USB are older, non-Thunderbolt form factors."
      },
      {
        label: "Standard for max speed",
        hint: "Which standard reaches 40 Gbps?",
        options: ["USB 2.0", "USB 3.2 Gen 1", "Thunderbolt 3", "FireWire 800"],
        answer: 2,
        explain: "Thunderbolt 3 provides up to 40 Gbps, far exceeding USB 3.2 Gen 1 (5 Gbps) or USB 2.0 (480 Mbps). FireWire 800 tops out at 800 Mbps."
      },
      {
        label: "Maximum data rate",
        hint: "Peak throughput of Thunderbolt 3.",
        options: ["10 Gbps", "20 Gbps", "40 Gbps", "5 Gbps"],
        answer: 2,
        explain: "Thunderbolt 3 delivers up to 40 Gbps over a USB-C connector, the fastest option listed for this enclosure."
      }
    ],
    summary: "A Thunderbolt 3 USB-C cable drives the external SSD at up to 40 Gbps."
  },
  {
    id: "PBQ-080",
    format: 3,
    domain: 3,
    title: "DSL Phone Line",
    brief: "Connect a DSL modem to the wall jack that delivers internet over the existing telephone line. Identify the cabling.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Service:</span> DSL internet over phone line\n<span class='cy'>Wall jack:</span> telephone outlet\n<span class='cy'>Device:</span> DSL modem WAN port\n<span class='dim'>Note: small modular connector, 6-position</span>",
    fields: [
      {
        label: "Connector",
        hint: "Smaller modular plug used for telephone wiring.",
        options: ["RJ45", "RJ11", "F-type", "BNC"],
        answer: 1,
        explain: "RJ11 is the 6-position modular connector used for telephone and DSL connections. RJ45 is the larger 8-position Ethernet plug; F-type and BNC are coaxial."
      },
      {
        label: "Cable type",
        hint: "What media carries the phone signal?",
        options: ["Coaxial", "Twisted-pair telephone cable", "Single-mode fiber", "Shielded HDMI"],
        answer: 1,
        explain: "DSL runs over the twisted-pair copper of the existing telephone line. Coaxial and fiber are used by other service types."
      },
      {
        label: "Service carried",
        hint: "What rides over this line?",
        options: ["Cable TV", "DSL internet over voice-grade copper", "Cellular data", "Satellite TV"],
        answer: 1,
        explain: "DSL delivers internet over voice-grade telephone copper using an RJ11 connection at the jack and modem."
      }
    ],
    summary: "An RJ11 twisted-pair phone cable connects the DSL modem to the telephone jack."
  },
  {
    id: "PBQ-081",
    format: 3,
    domain: 3,
    title: "Cable Internet Drop",
    brief: "Connect a cable modem to the coaxial wall outlet provided by the ISP for cable internet service. Select the connector and media.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Service:</span> Cable internet / TV\n<span class='cy'>Wall outlet:</span> <span class='ok'>coaxial</span>\n<span class='cy'>Device:</span> cable modem RF input\n<span class='dim'>Note: threaded screw-on connector</span>",
    fields: [
      {
        label: "Cable type",
        hint: "What media does cable internet use?",
        options: ["RG-6 coaxial", "Cat 6 twisted-pair", "Multimode fiber", "RJ11 telephone cable"],
        answer: 0,
        explain: "RG-6 coaxial is the standard cable for residential cable TV and internet. Twisted-pair, fiber, and telephone cable serve other services."
      },
      {
        label: "Connector",
        hint: "Threaded connector that screws onto the modem.",
        options: ["BNC", "F-type", "LC", "RJ45"],
        answer: 1,
        explain: "The F-type connector is the threaded screw-on connector used for cable TV and cable internet coax. BNC is a twist-lock coax connector used in legacy/video setups; LC and RJ45 are not coaxial."
      },
      {
        label: "Service carried",
        hint: "What does RG-6 typically deliver to a home?",
        options: ["Telephone voice only", "Cable TV and broadband internet", "Serial console data", "USB peripheral data"],
        answer: 1,
        explain: "RG-6 coax with F-type connectors carries cable TV and broadband cable internet into the home."
      }
    ],
    summary: "RG-6 coax with a threaded F-type connector delivers cable internet to the modem."
  },
  {
    id: "PBQ-082",
    format: 3,
    domain: 3,
    title: "Legacy Serial Console",
    brief: "Connect a laptop to a managed switch's serial console port for out-of-band configuration. Identify the legacy serial connector.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Target:</span> managed switch console port\n<span class='cy'>Purpose:</span> out-of-band CLI access\n<span class='cy'>Interface:</span> <span class='warnc'>legacy RS-232 serial</span>\n<span class='dim'>Note: trapezoidal 9-pin connector</span>",
    fields: [
      {
        label: "Connector",
        hint: "9-pin trapezoidal serial connector.",
        options: ["DB9", "RJ45", "USB-A", "HDMI"],
        answer: 0,
        explain: "DB9 (DE-9) is the 9-pin RS-232 serial connector long used for console ports. RJ45 is Ethernet, USB-A is universal serial bus, and HDMI is for video."
      },
      {
        label: "Signaling standard",
        hint: "The serial standard behind console ports.",
        options: ["RS-232", "10GBASE-T", "DisplayPort", "DOCSIS"],
        answer: 0,
        explain: "Console serial ports use the RS-232 standard. The other options are Ethernet, video, and cable-modem standards."
      },
      {
        label: "Typical use",
        hint: "Why connect via serial console?",
        options: ["High-speed file transfer", "Out-of-band device configuration", "4K video output", "Charging the device"],
        answer: 1,
        explain: "A serial console provides out-of-band CLI access to configure switches and routers even when the network is down. It is low-speed and not used for files, video, or power."
      }
    ],
    summary: "A DB9 RS-232 serial cable provides out-of-band console access to the switch."
  },
  {
    id: "PBQ-083",
    format: 3,
    domain: 3,
    title: "Internal SATA SSD",
    brief: "Install a 2.5-inch SATA SSD inside a desktop. Identify the internal data cable that connects it to the motherboard.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Drive:</span> 2.5-inch SATA SSD\n<span class='cy'>Connection:</span> internal data cable to motherboard\n<span class='cy'>Interface:</span> <span class='ok'>SATA III</span>\n<span class='dim'>Note: flat 7-pin data connector; power is separate</span>",
    fields: [
      {
        label: "Data cable",
        hint: "Flat 7-pin internal data cable.",
        options: ["SATA data cable", "Molex cable", "USB-C cable", "PCIe ribbon"],
        answer: 0,
        explain: "A 7-pin SATA data cable connects the SSD to a motherboard SATA port. Molex is a power connector, USB-C is external, and there is no PCIe ribbon for a SATA drive."
      },
      {
        label: "Max SATA III throughput",
        hint: "Peak interface speed of SATA revision 3.",
        options: ["3 Gbps", "6 Gbps", "1.5 Gbps", "10 Gbps"],
        answer: 1,
        explain: "SATA III (SATA 3.0) provides up to 6 Gbps. SATA II is 3 Gbps and SATA I is 1.5 Gbps; 10 Gbps is not a SATA rate."
      },
      {
        label: "Power connector",
        hint: "Which connector supplies power to a SATA SSD?",
        options: ["7-pin SATA data", "15-pin SATA power", "RJ45", "BNC"],
        answer: 1,
        explain: "A SATA SSD uses a separate 15-pin SATA power connector from the PSU, distinct from the 7-pin data cable."
      }
    ],
    summary: "A 7-pin SATA data cable plus a 15-pin SATA power connector run the SSD at up to 6 Gbps."
  },
  {
    id: "PBQ-084",
    format: 3,
    domain: 3,
    title: "USB-C Charging and Display",
    brief: "A laptop must charge and drive an external DisplayPort monitor through a single USB-C cable. Identify the feature in play.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Cable:</span> single USB-C\n<span class='cy'>Functions:</span> <span class='ok'>charge laptop</span> and drive a DisplayPort monitor\n<span class='cy'>Source port:</span> USB-C with video support\n<span class='dim'>Note: video tunneled over USB-C</span>",
    fields: [
      {
        label: "Video feature",
        hint: "What lets USB-C carry DisplayPort video?",
        options: ["DP Alt Mode", "PXE boot", "Wake-on-LAN", "Jumbo frames"],
        answer: 0,
        explain: "DisplayPort Alternate Mode (DP Alt Mode) lets a USB-C port carry native DisplayPort video. The other options are unrelated networking/boot features."
      },
      {
        label: "Power feature",
        hint: "What lets USB-C charge the laptop?",
        options: ["USB Power Delivery", "Power over Ethernet", "Molex power", "Standby ATX rail"],
        answer: 0,
        explain: "USB Power Delivery (USB PD) negotiates higher voltages/currents over USB-C to charge a laptop. PoE is for Ethernet devices, and Molex/ATX rails are internal."
      },
      {
        label: "Connector",
        hint: "The reversible connector enabling both functions.",
        options: ["USB-A", "USB-C", "Micro-USB", "DB9"],
        answer: 1,
        explain: "The reversible USB-C connector carries both DP Alt Mode video and USB PD charging on one cable. USB-A, Micro-USB, and DB9 cannot do this."
      }
    ],
    summary: "USB-C with DP Alt Mode and USB Power Delivery charges the laptop and drives the monitor over one cable."
  },
  {
    id: "PBQ-085",
    format: 3,
    domain: 3,
    title: "Fiber to the Switch (Short Reach)",
    brief: "Connect two data-center switches 200 meters apart at 10 Gbps using cost-effective multimode fiber. Select the components.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Link:</span> switch-to-switch, same building\n<span class='cy'>Distance:</span> <span class='ok'>200 meters</span>\n<span class='cy'>Speed:</span> 10 Gbps\n<span class='dim'>Note: short-reach, cost-sensitive run</span>",
    fields: [
      {
        label: "Cable type",
        hint: "Cost-effective fiber for short-reach links.",
        options: ["Single-mode fiber", "Multimode OM3 fiber", "Cat 5e UTP", "RG-59 coax"],
        answer: 1,
        explain: "OM3 multimode fiber supports 10 Gbps up to roughly 300 m and is cheaper than single-mode for short in-building runs. Cat 5e and coax cannot carry this link, and single-mode is overkill here."
      },
      {
        label: "Transceiver standard",
        hint: "Short-reach 10G optical standard.",
        options: ["10GBASE-SR", "10GBASE-LR", "10GBASE-T", "1000BASE-LX"],
        answer: 0,
        explain: "10GBASE-SR (Short Reach) is designed for multimode fiber over short distances. 10GBASE-LR is long-reach single-mode, 10GBASE-T is copper, and 1000BASE-LX is 1 Gbps."
      },
      {
        label: "Connector",
        hint: "Small-form-factor fiber connector.",
        options: ["LC", "RJ45", "F-type", "DB9"],
        answer: 0,
        explain: "LC connectors terminate the multimode fiber into the SFP+ transceivers. RJ45 is copper; F-type and DB9 are non-fiber."
      }
    ],
    summary: "OM3 multimode fiber with LC connectors and 10GBASE-SR optics links the switches at 10 Gbps."
  },
  {
    id: "PBQ-086",
    format: 3,
    domain: 3,
    title: "Legacy Analog Projector",
    brief: "Connect an older conference-room projector that only accepts an analog 15-pin video input. Identify the cable.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Device:</span> legacy projector\n<span class='cy'>Input:</span> <span class='warnc'>analog 15-pin video</span>\n<span class='cy'>Source:</span> laptop video-out\n<span class='dim'>Note: three rows of pins, no audio</span>",
    fields: [
      {
        label: "Connector",
        hint: "15-pin three-row analog video connector.",
        options: ["VGA (DE-15)", "HDMI", "DisplayPort", "DVI-D"],
        answer: 0,
        explain: "VGA uses a 15-pin (DE-15) three-row analog connector, matching this legacy projector. HDMI, DisplayPort, and DVI-D are digital interfaces."
      },
      {
        label: "Signal type",
        hint: "Analog or digital?",
        options: ["Analog video", "Digital video", "Digital audio", "Serial data"],
        answer: 0,
        explain: "VGA carries an analog video signal only, with no audio. The digital interfaces send digital video."
      },
      {
        label: "Audio handling",
        hint: "Does VGA carry sound?",
        options: ["Carries embedded audio", "Carries no audio; separate cable needed", "Carries audio only", "Carries power and audio"],
        answer: 1,
        explain: "VGA transmits no audio, so a separate audio cable is required for sound. HDMI and DisplayPort can embed audio."
      }
    ],
    summary: "A VGA (DE-15) cable carries analog video to the legacy projector; audio needs a separate cable."
  },
  {
    id: "PBQ-087",
    format: 3,
    domain: 3,
    title: "PoE Wireless Access Point",
    brief: "Mount a ceiling wireless access point that draws power and data from one Ethernet cable. Select the cabling and standard.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Device:</span> ceiling wireless access point\n<span class='cy'>Requirement:</span> <span class='ok'>power + data on one cable</span>\n<span class='cy'>Run length:</span> 70 meters\n<span class='dim'>Note: no nearby electrical outlet</span>",
    fields: [
      {
        label: "Cable type",
        hint: "What carries both data and PoE power?",
        options: ["Twisted-pair Ethernet (Cat 6)", "RG-6 coaxial", "Single-mode fiber", "RJ11 phone cable"],
        answer: 0,
        explain: "Twisted-pair Ethernet such as Cat 6 carries both data and PoE power to the access point. Fiber carries no power, and coax/phone cable are not used for PoE."
      },
      {
        label: "Connector",
        hint: "Standard Ethernet plug.",
        options: ["RJ45", "RJ11", "LC", "F-type"],
        answer: 0,
        explain: "RJ45 terminates the twisted-pair Ethernet/PoE run. The others are telephone, fiber, and coax connectors."
      },
      {
        label: "Technology delivering power",
        hint: "Power over the data cable.",
        options: ["Power over Ethernet (PoE)", "USB Power Delivery", "DP Alt Mode", "Wake-on-LAN"],
        answer: 0,
        explain: "Power over Ethernet (PoE) supplies power over the same Ethernet cable as data, ideal where no outlet is available. USB PD and DP Alt Mode are USB-C features; WoL is unrelated."
      }
    ],
    summary: "A Cat 6 cable with RJ45 connectors delivers data and PoE power to the access point on one run."
  },
  {
    id: "PBQ-088",
    format: 3,
    domain: 3,
    title: "M.2 NVMe Boot Drive",
    brief: "Install a high-speed M.2 NVMe SSD as the boot drive. Identify how it connects and the interface it uses.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Drive:</span> M.2 NVMe SSD\n<span class='cy'>Goal:</span> <span class='ok'>fastest boot storage</span>\n<span class='cy'>Slot:</span> motherboard M.2\n<span class='dim'>Note: no data cable; card edge into slot</span>",
    fields: [
      {
        label: "Connection method",
        hint: "How does an M.2 NVMe drive attach?",
        options: ["7-pin SATA data cable", "Card edge directly into an M.2 slot", "USB-C cable", "Molex power cable"],
        answer: 1,
        explain: "M.2 drives plug their card edge directly into the motherboard M.2 slot with no cables. SATA cables, USB-C, and Molex are not used for M.2."
      },
      {
        label: "Interface/protocol",
        hint: "The high-speed protocol for fast M.2 SSDs.",
        options: ["NVMe over PCIe", "SATA over IDE", "USB 2.0", "RS-232"],
        answer: 0,
        explain: "NVMe runs over the PCIe bus, giving M.2 NVMe drives far higher throughput than SATA. USB 2.0 and RS-232 are slow legacy interfaces."
      },
      {
        label: "Speed advantage",
        hint: "Why NVMe over a SATA SSD?",
        options: ["Limited to 6 Gbps like SATA", "Uses PCIe lanes for multi-gigabyte-per-second speeds", "Requires a separate power cable", "Slower but cheaper"],
        answer: 1,
        explain: "NVMe uses multiple PCIe lanes, reaching several gigabytes per second versus SATA's 6 Gbps ceiling. It draws power through the slot, needing no separate cable."
      }
    ],
    summary: "An M.2 NVMe SSD seats into the M.2 slot and runs NVMe over PCIe for multi-GB/s boot speeds."
  },
  {
    id: "PBQ-089",
    format: 3,
    domain: 3,
    title: "Satellite/Antenna Coax (Twist-Lock)",
    brief: "Connect a piece of legacy network or video equipment that uses a twist-lock coaxial connector rather than a threaded one. Identify it.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Media:</span> coaxial cable\n<span class='cy'>Connector style:</span> <span class='warnc'>bayonet twist-lock</span>\n<span class='cy'>Use:</span> legacy 10BASE2 / video equipment\n<span class='dim'>Note: quarter-turn locking, not threaded</span>",
    fields: [
      {
        label: "Connector",
        hint: "Quarter-turn bayonet coax connector.",
        options: ["F-type", "BNC", "LC", "RJ45"],
        answer: 1,
        explain: "BNC is a bayonet twist-lock coaxial connector used on legacy 10BASE2 and video gear. F-type is threaded screw-on coax; LC and RJ45 are not coaxial."
      },
      {
        label: "Cable media",
        hint: "What cable does BNC terminate?",
        options: ["Coaxial", "Twisted-pair", "Fiber", "Ribbon"],
        answer: 0,
        explain: "BNC connectors terminate coaxial cable. Twisted-pair uses RJ45/RJ11, and fiber uses LC/SC connectors."
      },
      {
        label: "How F-type differs",
        hint: "Contrast with the threaded coax connector.",
        options: ["F-type is threaded/screw-on", "F-type is a fiber connector", "F-type is an 8-pin plug", "F-type is identical to BNC"],
        answer: 0,
        explain: "F-type is a threaded screw-on coax connector (cable TV/internet), whereas BNC is a quarter-turn bayonet lock. Both terminate coax but differ in the locking mechanism."
      }
    ],
    summary: "BNC is a twist-lock coaxial connector for legacy video/10BASE2, distinct from the threaded F-type."
  },
  {
    id: "PBQ-090",
    format: 3,
    domain: 3,
    title: "Printer Over USB",
    brief: "Connect a desktop printer to a PC using the standard USB cable that has a flat connector at the PC and a square connector at the printer.",
    exhibitTitle: "connection requirements",
    exhibit: "<span class='cy'>Device:</span> USB printer\n<span class='cy'>PC end:</span> flat rectangular connector\n<span class='cy'>Printer end:</span> <span class='ok'>square connector</span>\n<span class='dim'>Note: classic printer USB cable</span>",
    fields: [
      {
        label: "PC-side connector",
        hint: "Flat rectangular USB plug on the host.",
        options: ["USB-A", "USB-B", "USB-C", "Micro-USB"],
        answer: 0,
        explain: "USB-A is the flat rectangular connector that plugs into the PC host port. USB-B goes to the printer; USB-C and Micro-USB are different shapes."
      },
      {
        label: "Printer-side connector",
        hint: "Square connector typical on printers.",
        options: ["USB-A", "USB-B", "RJ45", "DB9"],
        answer: 1,
        explain: "USB-B is the squarish connector found on many printers and scanners. USB-A is the host side; RJ45/DB9 are not USB."
      },
      {
        label: "Common speed (USB 2.0)",
        hint: "Data rate of a Hi-Speed USB 2.0 printer cable.",
        options: ["480 Mbps", "5 Gbps", "40 Gbps", "12 Mbps"],
        answer: 0,
        explain: "USB 2.0 (Hi-Speed) runs at 480 Mbps, the typical rate for a printer connection. 5 Gbps is USB 3.0, 40 Gbps is Thunderbolt, and 12 Mbps was USB 1.1 Full-Speed."
      }
    ],
    summary: "A USB-A to USB-B cable connects the PC to the printer, running at 480 Mbps over USB 2.0."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-091",
    format: 4,
    domain: 2,
    title: "Static IP for an Office Printer",
    brief: "A small office uses the 192.168.1.0/24 network. The gateway is the router and DHCP hands out .100 through .199. Assign a permanent static address to a shared printer that will not conflict with DHCP.",
    exhibitTitle: "router config",
    exhibit: "=== Office Router LAN Settings ===\nNetwork: <span class='cy'>192.168.1.0 /24</span>\nRouter/Gateway IP: <span class='ok'>192.168.1.1</span>\nSubnet Mask: 255.255.255.0\nDHCP Pool: <span class='warnc'>192.168.1.100 - 192.168.1.199</span>\n\nDevice to configure: <span class='cy'>Shared Laser Printer</span>\nRequirement: fixed address, <span class='dim'>outside DHCP pool</span>, no conflict",
    fields: [
      { label: "Printer static IP address", hint: "Must be a valid host in 192.168.1.0/24 and outside .100-.199", options: ["192.168.1.50", "192.168.1.150", "192.168.1.0", "192.168.2.50"], answer: 0, explain: "192.168.1.50 is a valid host in the /24 and sits below the DHCP pool, so it cannot conflict. .150 is inside the pool, .0 is the network ID, and 192.168.2.50 is a different subnet." },
      { label: "Subnet mask", hint: "A /24 prefix written in dotted decimal", options: ["255.255.0.0", "255.255.255.0", "255.255.255.192", "255.0.0.0"], answer: 1, explain: "/24 equals 255.255.255.0 — 24 network bits leaving 8 host bits. The others are /16, /26, and /8." },
      { label: "Default gateway", hint: "The address the printer sends off-subnet traffic to", options: ["192.168.1.255", "192.168.1.100", "192.168.1.1", "255.255.255.0"], answer: 2, explain: "The gateway is the router's LAN IP, 192.168.1.1. .255 is the broadcast, .100 is the first DHCP address, and 255.255.255.0 is a mask not an address." },
      { label: "Preferred DNS server", hint: "Simplest valid choice for name resolution on this LAN", options: ["192.168.1.1", "192.168.1.50", "10.0.0.1", "0.0.0.0"], answer: 0, explain: "Pointing DNS at the router (192.168.1.1) lets it forward queries upstream, which is standard for SOHO. The printer's own IP, an off-net 10.x address, and 0.0.0.0 are wrong." }
    ],
    summary: "Static host outside the DHCP scope: 192.168.1.50 / 255.255.255.0, gateway and DNS 192.168.1.1."
  },
  {
    id: "PBQ-092",
    format: 4,
    domain: 2,
    title: "Choosing a Non-Overlapping 2.4 GHz Channel",
    brief: "A home office router sits next to two neighbors. A scan shows their access points on channels 1 and 11. Pick a non-overlapping channel and the correct band so the new AP avoids interference.",
    exhibitTitle: "router config",
    exhibit: "=== Wi-Fi Site Survey (2.4 GHz) ===\nNeighbor A SSID 'CASA': channel <span class='warnc'>1</span>, strong\nNeighbor B SSID 'NET5G': channel <span class='warnc'>11</span>, strong\nYour AP current: channel <span class='hl'>3</span> (overlaps 1)\n\nNon-overlapping 2.4 GHz channels: <span class='ok'>1, 6, 11</span>\nGoal: least overlap with neighbors",
    fields: [
      { label: "Best 2.4 GHz channel for your AP", hint: "Choose the non-overlapping channel the neighbors are NOT using", options: ["1", "6", "11", "3"], answer: 1, explain: "Of the non-overlapping set (1/6/11), neighbors occupy 1 and 11, so channel 6 has the least overlap. Channel 3 overlaps both 1 and 6." },
      { label: "Frequency band for this channel", hint: "Channels 1/6/11 belong to which band", options: ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"], answer: 0, explain: "Channels 1, 6, and 11 are 2.4 GHz channels. 5 GHz and 6 GHz use different, higher channel numbers; 60 GHz is WiGig." },
      { label: "Channel width to minimize overlap on 2.4 GHz", hint: "Wider channels overlap neighbors more", options: ["20 MHz", "40 MHz", "80 MHz", "160 MHz"], answer: 0, explain: "On crowded 2.4 GHz, 20 MHz width keeps you inside a single non-overlapping slot. 40 MHz spans two and 80/160 MHz are 5/6 GHz widths." },
      { label: "If you still see interference, the better long-term fix is", hint: "Think about which band is less crowded", options: ["Move clients to the 5 GHz band", "Raise transmit power to maximum", "Disable WPA security", "Switch to channel 3"], answer: 0, explain: "Moving capable clients to 5 GHz escapes the congested 2.4 GHz space entirely. Cranking power worsens co-channel interference, disabling security is unsafe, and channel 3 overlaps." }
    ],
    summary: "Pick channel 6 (2.4 GHz, 20 MHz) to dodge neighbors on 1 and 11; move clients to 5 GHz if needed."
  },
  {
    id: "PBQ-093",
    format: 4,
    domain: 2,
    title: "Securing the Wireless Network",
    brief: "A coffee-shop owner set up an open Wi-Fi network with no password. Reconfigure the wireless security to the strongest modern standard and disable legacy options.",
    exhibitTitle: "router config",
    exhibit: "=== Wireless Security (current) ===\nSSID: 'BeanThere'\nSecurity Mode: <span class='hl'>Open (no encryption)</span>\nLegacy fallback: <span class='hl'>WEP enabled</span>\nWPS push button: <span class='warnc'>ON</span>\n\nAvailable modes: Open, WEP, <span class='dim'>WPA</span>, WPA2-PSK, <span class='ok'>WPA3-SAE</span>",
    fields: [
      { label: "Wireless security mode to select", hint: "The newest, strongest consumer standard available", options: ["WEP", "WPA3-SAE", "Open", "WPA-TKIP"], answer: 1, explain: "WPA3-SAE is the strongest modern standard and resists offline dictionary attacks. WEP is broken, Open has no encryption, and WPA-TKIP is deprecated." },
      { label: "If older devices cannot use WPA3, the next-best mode is", hint: "The widely supported predecessor with AES", options: ["WEP", "Open", "WPA2-PSK (AES)", "MAC filtering only"], answer: 2, explain: "WPA2-PSK with AES is the strong fallback for legacy clients. WEP and Open are insecure, and MAC filtering alone provides no encryption." },
      { label: "WPS push-button setting", hint: "WPS PINs are brute-forceable", options: ["Leave ON for convenience", "Turn OFF", "Set to a 4-digit PIN", "Enable only at night"], answer: 1, explain: "WPS should be turned OFF because its PIN method is brute-forceable, undermining an otherwise strong passphrase." },
      { label: "Encryption cipher to pair with the chosen mode", hint: "The block cipher used by WPA2/WPA3", options: ["TKIP", "RC4", "AES (CCMP/GCMP)", "DES"], answer: 2, explain: "AES (via CCMP for WPA2, GCMP for WPA3) is the secure cipher. TKIP and RC4 are legacy/weak, and DES is unrelated and obsolete." }
    ],
    summary: "Switch from Open/WEP to WPA3-SAE with AES, fall back to WPA2-AES for legacy, and disable WPS."
  },
  {
    id: "PBQ-094",
    format: 4,
    domain: 2,
    title: "DHCP Reservation for a NAS",
    brief: "A network-attached storage device must always receive the same IP from DHCP without manual static configuration on the device. Create a reservation that keeps it inside the network but out of conflict.",
    exhibitTitle: "router config",
    exhibit: "=== DHCP Server ===\nLAN: <span class='cy'>10.0.0.0 /24</span>\nRouter: <span class='ok'>10.0.0.1</span>\nDHCP Range: <span class='warnc'>10.0.0.2 - 10.0.0.50</span>\nNAS MAC: <span class='cy'>AC:1F:6B:22:9D:0E</span>\n\nWant: NAS reachable at the same IP, managed by DHCP",
    fields: [
      { label: "Mechanism to give the NAS a constant IP via DHCP", hint: "Ties a MAC to a specific lease", options: ["DHCP reservation", "Static IP set on the NAS", "Shorter lease time", "DNS A record only"], answer: 0, explain: "A DHCP reservation binds the NAS MAC to a fixed address while DHCP still manages it. A static IP on the device is the thing we were told to avoid; lease time and DNS records do not pin an address." },
      { label: "A valid reserved address for the NAS", hint: "Any usable host in the /24; reservation may be inside the range", options: ["10.0.0.0", "10.0.0.255", "10.0.0.20", "10.0.1.20"], answer: 2, explain: "10.0.0.20 is a usable host in 10.0.0.0/24. .0 is the network ID, .255 is broadcast, and 10.0.1.20 is a different subnet." },
      { label: "Field the router matches to apply the reservation", hint: "Unique hardware identifier", options: ["Hostname", "MAC address", "Open port", "SSID"], answer: 1, explain: "Reservations match the client's MAC address (AC:1F:6B:22:9D:0E here). Hostnames can change, and ports/SSIDs are unrelated." },
      { label: "Subnet mask the NAS will receive", hint: "Matches the /24 LAN", options: ["255.255.255.0", "255.255.255.128", "255.255.254.0", "255.255.0.0"], answer: 0, explain: "A /24 is 255.255.255.0. The other masks are /25, /23, and /16." }
    ],
    summary: "Use a DHCP reservation matched to the NAS MAC, assigning 10.0.0.20 /24 within the 10.0.0.0/24 LAN."
  },
  {
    id: "PBQ-095",
    format: 4,
    domain: 2,
    title: "Port Forwarding a Web Server",
    brief: "A home user runs an internal web server and wants it reachable from the internet. Configure a port-forwarding rule that maps the public HTTPS port to the server's private address.",
    exhibitTitle: "router config",
    exhibit: "=== Port Forwarding ===\nWAN (public) IP: <span class='cy'>203.0.113.45</span>\nInternal web server: <span class='ok'>192.168.1.80</span>\nService: <span class='cy'>HTTPS</span>\n\nRule template:\n  WAN port -> LAN IP : LAN port\nGoal: external clients reach the web app securely",
    fields: [
      { label: "External (WAN) port to forward for HTTPS", hint: "Standard secure web port", options: ["80", "443", "21", "3389"], answer: 1, explain: "HTTPS uses TCP 443. 80 is plain HTTP, 21 is FTP, and 3389 is RDP." },
      { label: "Internal IP the rule points to", hint: "The web server's private address", options: ["203.0.113.45", "192.168.1.80", "192.168.1.1", "192.168.1.255"], answer: 1, explain: "Forward to the server's LAN IP 192.168.1.80. The WAN IP is the public side, .1 is the router, and .255 is broadcast." },
      { label: "Internal (LAN) port the service listens on", hint: "Same secure web port on the server", options: ["443", "8080", "23", "53"], answer: 0, explain: "The server listens on 443 for HTTPS. 8080 is an alternate HTTP port, 23 is Telnet, and 53 is DNS." },
      { label: "Transport protocol for this rule", hint: "Web traffic is connection-oriented", options: ["UDP", "TCP", "ICMP", "ARP"], answer: 1, explain: "HTTP/HTTPS run over TCP. UDP is connectionless, ICMP is for diagnostics, and ARP is layer-2 address resolution." }
    ],
    summary: "Forward WAN TCP 443 to 192.168.1.80:443 so external clients reach the internal HTTPS server."
  },
  {
    id: "PBQ-096",
    format: 4,
    domain: 2,
    title: "Guest Network Isolation",
    brief: "A small office wants visitors to get internet access without seeing internal devices. Configure a guest wireless network that is isolated from the main LAN.",
    exhibitTitle: "router config",
    exhibit: "=== Guest Network Wizard ===\nMain LAN: <span class='cy'>192.168.10.0 /24</span> (servers, printers)\nGuest SSID: 'Office-Guest'\nClient Isolation: <span class='warnc'>currently OFF</span>\nAccess to LAN: <span class='hl'>currently allowed</span>\n\nGoal: internet only, <span class='ok'>no access to internal resources</span>",
    fields: [
      { label: "Guest 'access intranet/LAN' setting", hint: "Visitors should not reach internal servers", options: ["Allow LAN access", "Deny LAN access (internet only)", "Bridge to main LAN", "Mirror main subnet"], answer: 1, explain: "Deny LAN access keeps guests on internet-only, protecting internal servers and printers. The other options expose the LAN." },
      { label: "Client isolation on the guest SSID", hint: "Stops guests from seeing each other too", options: ["Enable", "Disable", "Only for wired", "Not applicable"], answer: 0, explain: "Enabling client (AP) isolation prevents guest devices from communicating with one another, improving privacy and security." },
      { label: "Separate subnet to assign the guest network", hint: "Different RFC1918 network from the main LAN", options: ["192.168.10.0/24", "192.168.20.0/24", "192.168.10.128/25", "0.0.0.0/0"], answer: 1, explain: "192.168.20.0/24 is a distinct subnet, giving the guests their own broadcast domain. Reusing 192.168.10.x keeps them on the main LAN, and 0.0.0.0/0 is a default route, not a subnet." },
      { label: "Security mode for the guest SSID", hint: "Still encrypt guest traffic", options: ["Open with no password", "WEP", "WPA2/WPA3 with a guest passphrase", "Hidden SSID only"], answer: 2, explain: "Even guest traffic should be encrypted with WPA2/WPA3. Open and WEP are insecure, and hiding the SSID is not encryption." }
    ],
    summary: "Create an isolated guest SSID on 192.168.20.0/24 with LAN access denied, client isolation on, and WPA2/WPA3."
  },
  {
    id: "PBQ-097",
    format: 4,
    domain: 2,
    title: "Subnetting a /26 Branch",
    brief: "A branch office was given the block 172.16.5.0/26 for its workstations. Determine the correct addressing details for a host in this subnet.",
    exhibitTitle: "router config",
    exhibit: "=== Branch Allocation ===\nAssigned block: <span class='cy'>172.16.5.0 /26</span>\nUsable hosts: <span class='ok'>62</span>\nGateway policy: <span class='dim'>first usable address</span>\n\nNetwork ID: 172.16.5.0\nBroadcast: <span class='warnc'>172.16.5.63</span>\nConfigure a workstation in this subnet",
    fields: [
      { label: "Subnet mask for /26", hint: "26 network bits in dotted decimal", options: ["255.255.255.0", "255.255.255.192", "255.255.255.224", "255.255.255.128"], answer: 1, explain: "/26 borrows 2 host bits, giving 255.255.255.192. .0 is /24, .224 is /27, and .128 is /25." },
      { label: "Default gateway (first usable address)", hint: "One above the network ID 172.16.5.0", options: ["172.16.5.0", "172.16.5.1", "172.16.5.63", "172.16.5.64"], answer: 1, explain: "The first usable host in 172.16.5.0/26 is 172.16.5.1. .0 is the network ID, .63 is broadcast, and .64 begins the next subnet." },
      { label: "A valid workstation address in this subnet", hint: "Any usable host from .1 to .62", options: ["172.16.5.62", "172.16.5.63", "172.16.5.64", "172.16.5.100"], answer: 0, explain: "172.16.5.62 is the last usable host. .63 is broadcast, .64 is the next network, and .100 falls in a later subnet." },
      { label: "Broadcast address of 172.16.5.0/26", hint: "All host bits set in the first /26 block", options: ["172.16.5.255", "172.16.5.127", "172.16.5.63", "172.16.5.64"], answer: 2, explain: "With a /26 the first block ends at 172.16.5.63 (broadcast). .127 is the second block's broadcast, .255 is /24 broadcast, and .64 is a network ID." }
    ],
    summary: "172.16.5.0/26 uses 255.255.255.192; usable range .1-.62, gateway .1, broadcast .63."
  },
  {
    id: "PBQ-098",
    format: 4,
    domain: 2,
    title: "Setting Custom DNS Servers",
    brief: "A SOHO router currently uses the ISP's DNS. The owner wants to switch to a public resolver for faster, filtered lookups while keeping a valid secondary.",
    exhibitTitle: "router config",
    exhibit: "=== WAN / DNS Settings ===\nWAN: DHCP from ISP\nCurrent DNS: <span class='dim'>ISP-assigned</span>\nOption: <span class='cy'>Use these DNS servers</span>\n\nKnown public resolvers:\n  Cloudflare <span class='ok'>1.1.1.1</span>\n  Google <span class='ok'>8.8.8.8</span> / <span class='ok'>8.8.4.4</span>",
    fields: [
      { label: "A valid primary public DNS server", hint: "A well-known public resolver address", options: ["192.168.1.1", "1.1.1.1", "0.0.0.0", "255.255.255.255"], answer: 1, explain: "1.1.1.1 (Cloudflare) is a valid public resolver. 192.168.1.1 is a private LAN gateway, and 0.0.0.0 / 255.255.255.255 are not usable resolvers." },
      { label: "A valid secondary DNS server", hint: "Use a different provider or backup address", options: ["8.8.8.8", "1.1.1.1 again", "10.0.0.0", "127.0.0.1"], answer: 0, explain: "8.8.8.8 (Google) is a valid secondary from a different provider. Repeating the primary defeats redundancy, 10.0.0.0 is a network ID, and 127.0.0.1 is loopback." },
      { label: "Protocol/port DNS queries normally use", hint: "Classic DNS port", options: ["TCP 80", "UDP 53", "TCP 443", "UDP 67"], answer: 1, explain: "DNS primarily uses UDP 53 (TCP 53 for large/zone transfers). 80 is HTTP, 443 is HTTPS, and 67 is DHCP server." },
      { label: "Effect on LAN clients after the change", hint: "Clients learn DNS from the router via DHCP", options: ["Clients must be set manually one by one", "DHCP clients get the new DNS automatically", "Clients lose internet permanently", "Only wired clients update"], answer: 1, explain: "When the router hands out DNS via DHCP, clients pick up the new resolvers on their next lease renewal automatically." }
    ],
    summary: "Set primary DNS 1.1.1.1 and secondary 8.8.8.8 on the router; DHCP clients inherit them automatically over UDP 53."
  },
  {
    id: "PBQ-099",
    format: 4,
    domain: 2,
    title: "Dual-Band Steering for a Laptop",
    brief: "A laptop near the router streams 4K video and stutters on the crowded 2.4 GHz band. Configure the wireless settings to favor the faster band and a clean channel.",
    exhibitTitle: "router config",
    exhibit: "=== Wireless Bands ===\n2.4 GHz: <span class='warnc'>congested, ch 6</span>, max ~150 Mbps\n5 GHz: <span class='ok'>clear, ch 36/40/44</span>, max ~1 Gbps\nLaptop: <span class='cy'>dual-band, close to router</span>\n\nGoal: highest throughput for nearby 4K stream",
    fields: [
      { label: "Band to use for the nearby 4K laptop", hint: "Higher throughput, shorter range is fine when close", options: ["2.4 GHz", "5 GHz", "900 MHz", "Disable Wi-Fi, use Bluetooth"], answer: 1, explain: "5 GHz offers far higher throughput and less congestion, ideal for a close, bandwidth-heavy device. 2.4 GHz is crowded and slower." },
      { label: "A valid non-DFS 5 GHz channel to select", hint: "Low UNII-1 channels", options: ["6", "11", "36", "165 only with 160 MHz"], answer: 2, explain: "Channel 36 is a standard UNII-1 5 GHz channel. 6 and 11 are 2.4 GHz, and the last option is malformed." },
      { label: "Channel width that maximizes throughput on clear 5 GHz", hint: "Wider channels = more speed when spectrum is free", options: ["20 MHz", "80 MHz", "5 MHz", "1 MHz"], answer: 1, explain: "On clear 5 GHz, an 80 MHz channel boosts throughput substantially. 20 MHz is conservative, and 5/1 MHz are not valid Wi-Fi widths." },
      { label: "Tradeoff of choosing 5 GHz over 2.4 GHz", hint: "Frequency vs range", options: ["Longer range, lower speed", "Shorter range, higher speed", "Identical range and speed", "No encryption support"], answer: 1, explain: "5 GHz trades range for speed: it does not penetrate walls as well but delivers higher data rates, which is fine for a nearby laptop." }
    ],
    summary: "Steer the nearby 4K laptop to 5 GHz, channel 36, 80 MHz width for maximum throughput."
  },
  {
    id: "PBQ-100",
    format: 4,
    domain: 2,
    title: "Static IP for a Security Camera VLAN",
    brief: "IP cameras live on their own subnet 192.168.50.0/24 with the router interface at .1. Assign a static address and gateway to a new camera so it joins that subnet correctly.",
    exhibitTitle: "router config",
    exhibit: "=== Camera VLAN (192.168.50.0/24) ===\nRouter/VLAN gateway: <span class='ok'>192.168.50.1</span>\nMask: 255.255.255.0\nExisting cameras: <span class='dim'>.10, .11, .12</span>\nDHCP on this VLAN: <span class='hl'>disabled (manual only)</span>\n\nNew camera needs a free static address",
    fields: [
      { label: "Static IP for the new camera", hint: "Unused valid host in 192.168.50.0/24", options: ["192.168.50.1", "192.168.50.13", "192.168.50.0", "192.168.51.13"], answer: 1, explain: "192.168.50.13 is a free, valid host in the camera subnet. .1 is the gateway, .0 is the network ID, and 192.168.51.13 is a different subnet." },
      { label: "Default gateway for the camera", hint: "The VLAN's router interface", options: ["192.168.50.1", "192.168.50.255", "192.168.1.1", "10.0.0.1"], answer: 0, explain: "The gateway is the VLAN interface 192.168.50.1. .255 is broadcast, and the other two are different networks." },
      { label: "Subnet mask", hint: "/24 in dotted decimal", options: ["255.255.255.0", "255.255.255.240", "255.255.0.0", "255.255.255.252"], answer: 0, explain: "A /24 is 255.255.255.0. The others are /28, /16, and /30." },
      { label: "Why disable DHCP on the camera VLAN", hint: "Predictability and isolation for recording", options: ["To make addresses random", "To keep camera IPs fixed and predictable for the NVR", "To allow guests onto the cameras", "It is required by WPA3"], answer: 1, explain: "Manual/static addressing keeps each camera at a known IP so the NVR can always find it. The other reasons are incorrect." }
    ],
    summary: "New camera: 192.168.50.13 / 255.255.255.0, gateway 192.168.50.1 on the manually addressed camera VLAN."
  },
  {
    id: "PBQ-101",
    format: 4,
    domain: 2,
    title: "Hiding the SSID and Naming the Network",
    brief: "An owner believes hiding the network name will secure it. Configure SSID broadcast and naming sensibly while applying real security.",
    exhibitTitle: "router config",
    exhibit: "=== Wireless General ===\nSSID: <span class='hl'>'linksys'</span> (default name)\nSSID Broadcast: <span class='cy'>ON</span>\nSecurity: <span class='warnc'>WPA2-PSK</span>, weak passphrase '12345678'\n\nOwner asks: 'Should I hide the SSID to be safe?'",
    fields: [
      { label: "Does hiding the SSID provide strong security?", hint: "Hidden SSIDs are still discoverable", options: ["Yes, it fully secures the network", "No, it is only obscurity; encryption matters more", "Yes, it encrypts traffic", "It disables Wi-Fi entirely"], answer: 1, explain: "Hiding the SSID is security by obscurity; tools easily reveal hidden networks. Strong encryption and a good passphrase are what protect you." },
      { label: "Best change to actually improve security", hint: "Focus on the passphrase and standard", options: ["Use a long, unique passphrase with WPA2/WPA3", "Shorten the passphrase", "Switch to WEP", "Turn off encryption"], answer: 0, explain: "A long, unique passphrase under WPA2/WPA3 is the real protection. The other options weaken security." },
      { label: "Recommended change to the default SSID name", hint: "Default names hint at the router brand", options: ["Keep 'linksys'", "Rename to something non-identifying", "Set SSID to the Wi-Fi password", "Use the admin username"], answer: 1, explain: "Renaming away from the vendor default removes a hint about the hardware and avoids confusion with neighbors. Never embed the password or admin name in the SSID." },
      { label: "Effect of disabling SSID broadcast on users", hint: "Connecting becomes manual", options: ["Clients connect automatically as before", "Users must type the exact SSID manually", "It boosts signal strength", "It changes the channel"], answer: 1, explain: "With broadcast off, clients must manually enter the exact SSID to join, adding friction without real security benefit." }
    ],
    summary: "Hiding the SSID is weak obscurity; instead rename from the default and use a strong WPA2/WPA3 passphrase."
  },
  {
    id: "PBQ-102",
    format: 4,
    domain: 2,
    title: "DHCP Scope Sizing",
    brief: "A small office on 192.168.100.0/24 reserves the low addresses for infrastructure. Define a DHCP scope that leaves room for static devices and does not overlap them.",
    exhibitTitle: "router config",
    exhibit: "=== DHCP Scope Planning ===\nLAN: <span class='cy'>192.168.100.0 /24</span>\nRouter: <span class='ok'>192.168.100.1</span>\nStatic infra: <span class='dim'>.1 - .20</span> (servers, printers, APs)\n\nNeed: scope for ~100 clients, no overlap with statics",
    fields: [
      { label: "Valid DHCP scope start address", hint: "Begin above the reserved static block .1-.20", options: ["192.168.100.1", "192.168.100.21", "192.168.100.0", "192.168.100.250"], answer: 1, explain: "Starting at .21 avoids the .1-.20 static reservations. .1 and .0 collide with infra/network ID, and .250 leaves too little room for 100 clients." },
      { label: "A sensible scope end address for ~100 clients", hint: "Start .21 plus room for 100 leaves you near .120+", options: ["192.168.100.30", "192.168.100.150", "192.168.100.255", "192.168.100.20"], answer: 1, explain: ".21 to .150 yields about 130 usable leases, comfortably covering 100 clients. .30 is too few, .255 is broadcast, and .20 ends before the start." },
      { label: "Subnet mask handed out in the scope", hint: "Matches the /24", options: ["255.255.255.0", "255.255.255.128", "255.255.254.0", "255.255.255.192"], answer: 0, explain: "The /24 mask is 255.255.255.0. The others are /25, /23, and /26." },
      { label: "Gateway and DNS pushed with the lease", hint: "The router serves both roles here", options: ["192.168.100.1", "192.168.100.255", "192.168.100.21", "8.8.8.8 as gateway"], answer: 0, explain: "The router 192.168.100.1 is the gateway and DNS forwarder. .255 is broadcast, .21 is a client, and 8.8.8.8 is a DNS server, not a gateway." }
    ],
    summary: "Scope 192.168.100.21-.150 /24, gateway/DNS .1, leaving .1-.20 for static infrastructure."
  },
  {
    id: "PBQ-103",
    format: 4,
    domain: 2,
    title: "Replacing WEP on a Legacy AP",
    brief: "An old access point still uses WEP, which is easily cracked. Reconfigure security and address the weak shared key and broadcast settings.",
    exhibitTitle: "router config",
    exhibit: "=== Legacy AP Security ===\nMode: <span class='hl'>WEP 64-bit</span>\nKey: <span class='hl'>10 hex chars, shared</span>\nAuthentication: <span class='warnc'>Shared Key</span>\n\nUpgrade path: WEP -> <span class='ok'>WPA2/WPA3</span>",
    fields: [
      { label: "Primary problem with WEP", hint: "Why it must be replaced", options: ["It is too slow only", "Its RC4 keystream is easily cracked", "It uses too-long passwords", "It only works on 5 GHz"], answer: 1, explain: "WEP's RC4 implementation leaks key material and is cracked in minutes. Speed and band are not the security issue." },
      { label: "Security mode to upgrade to", hint: "Modern encrypted standard", options: ["WPA3 (or WPA2 if needed)", "Open", "WEP 128-bit", "MAC filtering only"], answer: 0, explain: "Move to WPA3, or WPA2-AES if hardware requires. WEP-128 is still broken, Open is unencrypted, and MAC filtering is not encryption." },
      { label: "Authentication/key type for the new mode", hint: "Pre-shared passphrase for SOHO", options: ["PSK (passphrase)", "WEP shared key", "No authentication", "WPS PIN as the key"], answer: 0, explain: "WPA2/WPA3-Personal use a PSK passphrase. The shared WEP key, no auth, and a WPS PIN are all weak or invalid." },
      { label: "If a device truly cannot do WPA2/WPA3, the safest action is", hint: "Do not keep WEP on the main network", options: ["Keep WEP for that device", "Replace the device or isolate it on a separate SSID", "Disable all encryption", "Use Open with MAC filtering"], answer: 1, explain: "Retiring or isolating the incompatible device on its own segment avoids exposing the main network to WEP weaknesses." }
    ],
    summary: "Replace WEP/RC4 with WPA2/WPA3-PSK (AES); isolate or replace any device that cannot support it."
  },
  {
    id: "PBQ-104",
    format: 4,
    domain: 2,
    title: "Port Forward for a Game Server",
    brief: "A user hosts a game server that needs a specific UDP port reachable from the internet, mapped to a reserved internal address. Configure the forwarding rule and supporting reservation.",
    exhibitTitle: "router config",
    exhibit: "=== Forwarding + Reservation ===\nGame server (PC): MAC <span class='cy'>D8:CB:8A:11:42:7F</span>\nDesired internal IP: <span class='ok'>192.168.1.40</span>\nGame service: UDP <span class='cy'>27015</span>\nWAN IP: 198.51.100.7\n\nNeed: stable internal IP + forward rule",
    fields: [
      { label: "First step to keep the server's IP stable", hint: "So the forward rule never breaks", options: ["Create a DHCP reservation for 192.168.1.40", "Use a random DHCP address", "Put the PC in the DMZ blindly", "Disable DHCP entirely"], answer: 0, explain: "Reserving 192.168.1.40 to the PC's MAC keeps the forward target stable. A random lease can change and break the rule; a blind DMZ over-exposes the host." },
      { label: "Transport protocol to forward", hint: "Match the game service shown", options: ["TCP", "UDP", "ICMP", "Both disabled"], answer: 1, explain: "The service uses UDP 27015, so the rule must forward UDP. TCP and ICMP would not deliver the game traffic." },
      { label: "External and internal port for the rule", hint: "Same port both sides here", options: ["27015 -> 27015", "443 -> 27015", "80 -> 8080", "27015 -> 22"], answer: 0, explain: "Forward WAN 27015 to LAN 27015 to match the listening service. The other mappings hit the wrong port." },
      { label: "Safer alternative to forwarding when only you connect", hint: "Encrypted remote access instead of open ports", options: ["Open all ports (DMZ)", "Use a VPN into the LAN", "Disable the firewall", "Forward every port range"], answer: 1, explain: "A VPN lets you reach the server without exposing ports to the whole internet. The other options drastically increase attack surface." }
    ],
    summary: "Reserve 192.168.1.40 to the server MAC, then forward WAN UDP 27015 to 192.168.1.40:27015 (or use a VPN)."
  },
  {
    id: "PBQ-105",
    format: 4,
    domain: 2,
    title: "Two-Subnet Office with Inter-VLAN Routing",
    brief: "An office splits staff (192.168.1.0/24) and IoT devices (192.168.2.0/24). Verify the addressing so a staff PC and an IoT thermostat each sit in the correct subnet with the right gateway.",
    exhibitTitle: "router config",
    exhibit: "=== Two-Subnet Layout ===\nStaff VLAN: <span class='cy'>192.168.1.0 /24</span>, gw <span class='ok'>192.168.1.1</span>\nIoT VLAN: <span class='cy'>192.168.2.0 /24</span>, gw <span class='ok'>192.168.2.1</span>\nMask each: 255.255.255.0\nRouter performs inter-VLAN routing\n\nPlace: staff PC + IoT thermostat",
    fields: [
      { label: "Valid IP and gateway for the staff PC", hint: "Host in .1.0/24 with the .1.1 gateway", options: ["192.168.1.75 / gw 192.168.1.1", "192.168.2.75 / gw 192.168.1.1", "192.168.1.75 / gw 192.168.2.1", "192.168.1.0 / gw 192.168.1.1"], answer: 0, explain: "The staff PC belongs in 192.168.1.0/24 with gateway 192.168.1.1. Mixing the .2 subnet or gateway breaks routing, and .1.0 is the network ID." },
      { label: "Valid IP and gateway for the IoT thermostat", hint: "Host in .2.0/24 with the .2.1 gateway", options: ["192.168.1.30 / gw 192.168.2.1", "192.168.2.30 / gw 192.168.2.1", "192.168.2.30 / gw 192.168.1.1", "192.168.2.255 / gw 192.168.2.1"], answer: 1, explain: "The thermostat sits in 192.168.2.0/24 with gateway 192.168.2.1. The others mismatch subnet/gateway or use the broadcast .255." },
      { label: "Can the two subnets reach each other by default?", hint: "Routing exists, but policy may restrict", options: ["Never, they are isolated by IP", "Yes, the router routes between them unless an ACL blocks it", "Only over Wi-Fi", "Only if they share a subnet"], answer: 1, explain: "The router routes between directly connected subnets by default; an access control list can restrict IoT-to-staff traffic if desired." },
      { label: "Best practice to limit IoT exposure to staff devices", hint: "Add a rule between the segments", options: ["Put both on one subnet", "Apply a firewall/ACL blocking IoT-to-staff traffic", "Disable the router", "Use WEP on IoT"], answer: 1, explain: "An ACL or firewall rule between the VLANs lets IoT reach the internet while blocking it from staff devices. Merging subnets or weakening security is wrong." }
    ],
    summary: "Staff PC 192.168.1.75/gw .1.1 and IoT 192.168.2.30/gw .2.1; the router routes between them unless an ACL blocks it."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-106",
    format: 4,
    domain: 2,
    title: "VoIP QoS for a Home Office",
    brief: "A home office VoIP phone has choppy audio when large file transfers run. Configure the router so voice traffic is prioritized and the phone gets a stable address.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Traffic / LAN</span>\n  LAN subnet ...... <span class='ok'>192.168.10.0/24</span>\n  Gateway ......... <span class='ok'>192.168.10.1</span>\n  VoIP phone MAC .. <span class='dim'>AC:7B:A1:0F:22:90</span>\n  QoS engine ...... <span class='warnc'>DISABLED</span>\n  Voice priority .. <span class='warnc'>not set</span>\n  Phone IP ........ <span class='hl'>changes on each lease</span>",
    fields: [
      {
        label: "Router feature to prioritize voice",
        hint: "Reduces jitter/latency for real-time traffic",
        options: ["Port triggering", "QoS (Quality of Service)", "DMZ", "UPnP"],
        answer: 1,
        explain: "QoS lets the router classify and prioritize latency-sensitive VoIP traffic over bulk transfers, fixing choppy audio."
      },
      {
        label: "Priority level for the VoIP phone",
        hint: "Real-time voice should win contention",
        options: ["Lowest / Bulk", "Normal", "Highest / Voice", "Bandwidth-limited"],
        answer: 2,
        explain: "Voice is delay-intolerant, so it should be assigned the highest priority class so it is queued ahead of file transfers."
      },
      {
        label: "Keep the phone at a fixed address via",
        hint: "Tie an IP to the phone MAC",
        options: ["A shorter DHCP lease", "A DHCP reservation for the phone MAC", "Disabling DHCP", "A broadcast address"],
        answer: 1,
        explain: "A DHCP reservation binds 192.168.10.x to the phone's MAC so QoS rules and the IP stay consistent across leases."
      },
      {
        label: "Valid reservation IP for the phone",
        hint: "Inside the LAN subnet, not the gateway",
        options: ["192.168.10.1", "192.168.11.40", "192.168.10.40", "10.168.10.40"],
        answer: 2,
        explain: "192.168.10.40 is inside 192.168.10.0/24 and is not the gateway (.1), so it is a valid host reservation."
      }
    ],
    summary: "Enable QoS, give VoIP the highest priority, reserve a fixed in-subnet IP for the phone MAC, and audio stays clean during transfers."
  },
  {
    id: "PBQ-107",
    format: 4,
    domain: 2,
    title: "Isolating an IoT / Guest Network",
    brief: "Smart-home devices and visitors should not reach the trusted LAN. Stand up a separate guest/IoT SSID with isolation.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Wireless</span>\n  Main SSID ....... <span class='ok'>HomeNet</span>  (WPA3)\n  Guest SSID ...... <span class='warnc'>off</span>\n  Guest subnet .... <span class='warnc'>shares 192.168.1.0/24</span>\n  Client isolation. <span class='warnc'>disabled</span>\n  IoT cameras ..... <span class='hl'>on main LAN</span>",
    fields: [
      {
        label: "Feature that walls off guest/IoT clients",
        hint: "Keeps them from the trusted LAN",
        options: ["Port forwarding", "Network (SSID) isolation", "MAC cloning", "Jumbo frames"],
        answer: 1,
        explain: "Guest/network isolation places the SSID on a separate segment so IoT and visitor devices cannot reach trusted LAN hosts."
      },
      {
        label: "Separate subnet for the guest/IoT SSID",
        hint: "Different network than 192.168.1.0/24",
        options: ["192.168.1.0/24", "192.168.50.0/24", "192.168.1.128/24", "169.254.0.0/16"],
        answer: 1,
        explain: "192.168.50.0/24 is a distinct private subnet, keeping guest/IoT traffic logically separated from the main LAN."
      },
      {
        label: "Client isolation on the guest SSID should be",
        hint: "Stop guest devices from talking to each other",
        options: ["Enabled", "Disabled", "Set to NAT", "Bridged"],
        answer: 0,
        explain: "Enabling client isolation prevents guest/IoT devices from seeing one another, limiting lateral movement."
      },
      {
        label: "Security to apply to the guest SSID",
        hint: "Strongest modern Wi-Fi standard",
        options: ["Open", "WEP", "WPA3", "WPA"],
        answer: 2,
        explain: "WPA3 provides the strongest encryption; even a guest network should be secured rather than left open."
      }
    ],
    summary: "Create an isolated guest/IoT SSID on its own subnet with client isolation and WPA3 so untrusted devices cannot reach the LAN."
  },
  {
    id: "PBQ-108",
    format: 4,
    domain: 2,
    title: "Port Forwarding for a Game Server",
    brief: "A self-hosted game server on the LAN must be reachable from the internet. Configure port forwarding to the server.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Port Forwarding</span>\n  WAN IP .......... <span class='ok'>203.0.113.55</span>\n  Game server IP .. <span class='hl'>192.168.0.20 (DHCP)</span>\n  Service port .... <span class='ok'>25565/TCP</span>\n  Rule ............ <span class='warnc'>none</span>\n  DMZ ............. <span class='warnc'>host = 192.168.0.20</span>",
    fields: [
      {
        label: "Best way to expose only the game port",
        hint: "Forward one port, not the whole host",
        options: ["Put the server in the DMZ", "Single-port forwarding to the server", "Enable UPnP for all apps", "Disable the firewall"],
        answer: 1,
        explain: "Forwarding only 25565/TCP to the server exposes just the needed service, far safer than DMZ or disabling the firewall."
      },
      {
        label: "Internal IP the rule should target",
        hint: "The game server's LAN address",
        options: ["203.0.113.55", "192.168.0.1", "192.168.0.20", "255.255.255.0"],
        answer: 2,
        explain: "The rule must forward to 192.168.0.20, the server's LAN address; the WAN IP and gateway are not valid targets."
      },
      {
        label: "Keep the server's LAN IP from changing",
        hint: "So the forward rule stays valid",
        options: ["Use a longer DNS TTL", "Create a DHCP reservation for the server", "Enable IPv6", "Turn off NAT"],
        answer: 1,
        explain: "A DHCP reservation locks 192.168.0.20 to the server so the port-forward rule never points at the wrong host."
      },
      {
        label: "Forwarded transport protocol",
        hint: "Match the service in the exhibit",
        options: ["UDP only", "ICMP", "TCP", "Any/all"],
        answer: 2,
        explain: "The service is 25565/TCP, so the rule should forward TCP; forwarding everything would needlessly widen exposure."
      }
    ],
    summary: "Single-port-forward 25565/TCP to the server's reserved IP rather than using the DMZ, exposing only the service that needs it."
  },
  {
    id: "PBQ-109",
    format: 4,
    domain: 2,
    title: "Upgrading Wi-Fi from WEP to WPA3",
    brief: "An old router still uses WEP. Migrate the wireless security to a modern standard without breaking addressing.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Wireless Security</span>\n  SSID ............ <span class='ok'>Maple-5G</span>\n  Security ........ <span class='warnc'>WEP (104-bit)</span>\n  Passphrase ...... <span class='warnc'>10-hex key</span>\n  Band ............ <span class='ok'>5 GHz</span>\n  Encryption ...... <span class='hl'>RC4 (legacy)</span>",
    fields: [
      {
        label: "Replace WEP with",
        hint: "Strongest current Wi-Fi security",
        options: ["WPA", "WPA2-TKIP", "WPA3", "Open with MAC filter"],
        answer: 2,
        explain: "WPA3 is the current standard and replaces the broken WEP cipher; WPA/TKIP are also outdated."
      },
      {
        label: "Encryption cipher to select",
        hint: "Modern block cipher, not RC4",
        options: ["RC4", "DES", "AES (CCMP/GCMP)", "MD5"],
        answer: 2,
        explain: "WPA3 uses AES-based encryption (CCMP/GCMP), replacing the insecure RC4 stream cipher used by WEP."
      },
      {
        label: "Passphrase guidance for WPA3",
        hint: "Length beats a short hex key",
        options: ["Keep the 10-hex key", "Use a long unique passphrase", "Disable the password", "Reuse the admin password"],
        answer: 1,
        explain: "WPA3 should use a long, unique passphrase; the short legacy hex key offered no real protection."
      },
      {
        label: "Effect on LAN IP addressing",
        hint: "Security layer vs. addressing",
        options: ["IPs must be re-subnetted", "Gateway must change", "No change to IP addressing", "DHCP must be disabled"],
        answer: 2,
        explain: "Wireless security is independent of Layer 3 addressing, so changing WEP to WPA3 does not alter IPs or the gateway."
      }
    ],
    summary: "Switch the SSID to WPA3 with AES and a strong passphrase; addressing is unchanged since security is a separate layer."
  },
  {
    id: "PBQ-110",
    format: 4,
    domain: 2,
    title: "Fixing an APIPA Address",
    brief: "A workstation shows a 169.254.x.x address and cannot reach the internet. Restore proper DHCP addressing.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>Client - ipconfig</span>\n  IPv4 ............ <span class='warnc'>169.254.88.12</span>\n  Subnet .......... <span class='warnc'>255.255.0.0</span>\n  Gateway ......... <span class='warnc'>(none)</span>\n  <span class='dim'>Router LAN: 192.168.2.1, DHCP pool 192.168.2.50-150</span>\n  DHCP server ..... <span class='hl'>reachable?</span>",
    fields: [
      {
        label: "What a 169.254.x.x address indicates",
        hint: "Self-assigned, no DHCP",
        options: ["Static lease success", "APIPA - DHCP failed", "Public IP", "Loopback"],
        answer: 1,
        explain: "169.254.0.0/16 is APIPA, self-assigned when the client gets no DHCP reply, which is why there is no gateway or internet."
      },
      {
        label: "First troubleshooting step",
        hint: "Force a new lease",
        options: ["Assign a public IP", "Release/renew DHCP (and check cabling/DHCP service)", "Reinstall the OS", "Disable the NIC permanently"],
        answer: 1,
        explain: "Renewing DHCP (after verifying link and that the DHCP service is up) lets the client obtain a valid lease from the pool."
      },
      {
        label: "Expected IP after a successful lease",
        hint: "From the router's DHCP pool",
        options: ["169.254.88.12", "192.168.2.75", "192.168.2.1", "255.255.255.0"],
        answer: 1,
        explain: "192.168.2.75 falls inside the .50-.150 pool; .1 is the gateway and 169.254.x is the failure address."
      },
      {
        label: "Correct default gateway once fixed",
        hint: "The router LAN address",
        options: ["169.254.0.1", "192.168.2.1", "192.168.2.255", "0.0.0.0"],
        answer: 1,
        explain: "The default gateway must be the router LAN interface 192.168.2.1 so the client can reach other networks."
      }
    ],
    summary: "A 169.254 address means DHCP failed; fix the link/DHCP service and renew so the client gets a pool IP and the 192.168.2.1 gateway."
  },
  {
    id: "PBQ-111",
    format: 4,
    domain: 2,
    title: "DHCP Reservation for a Network Printer",
    brief: "A shared printer keeps getting new IPs, breaking saved print queues. Give it a permanent address.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - DHCP</span>\n  LAN ............. <span class='ok'>192.168.5.0/24</span>\n  Pool ............ <span class='ok'>192.168.5.100-199</span>\n  Printer MAC ..... <span class='dim'>00:1B:A9:3C:7D:10</span>\n  Printer IP ...... <span class='warnc'>changes each lease</span>\n  Queues .......... <span class='hl'>point to old IP</span>",
    fields: [
      {
        label: "Best fix for the shifting printer IP",
        hint: "Tie IP to the printer MAC",
        options: ["Shorten the lease time", "Create a DHCP reservation", "Disable DHCP entirely", "Use APIPA"],
        answer: 1,
        explain: "A DHCP reservation maps a fixed IP to the printer's MAC so its address never changes and queues stay valid."
      },
      {
        label: "Reservation IP to assign the printer",
        hint: "Often just outside the dynamic pool, still in subnet",
        options: ["192.168.5.10", "192.168.5.150", "192.168.6.10", "192.168.5.0"],
        answer: 0,
        explain: "192.168.5.10 is in-subnet and outside the .100-.199 dynamic range, avoiding conflicts with leased clients."
      },
      {
        label: "Value used to identify the printer in the reservation",
        hint: "Hardware address",
        options: ["Hostname only", "MAC address", "Serial number", "Public IP"],
        answer: 1,
        explain: "Reservations match on the device MAC address, so the router always hands the printer the same IP."
      },
      {
        label: "After reserving, the print queues should use",
        hint: "Stable target",
        options: ["The old dynamic IP", "The reserved IP 192.168.5.10", "The gateway IP", "A broadcast IP"],
        answer: 1,
        explain: "Point the queues at the reserved 192.168.5.10 so printing keeps working regardless of lease renewals."
      }
    ],
    summary: "Reserve an in-subnet IP outside the pool to the printer MAC and repoint the queues, so the address stays fixed."
  },
  {
    id: "PBQ-112",
    format: 4,
    domain: 2,
    title: "Choosing a Non-Overlapping Wi-Fi Channel",
    brief: "2.4 GHz Wi-Fi is slow due to neighbor interference. Pick a clean, non-overlapping channel.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - 2.4 GHz Radio</span>\n  Current channel . <span class='warnc'>3 (busy)</span>\n  Neighbors ....... <span class='dim'>ch 1, ch 6, ch 9</span>\n  Width ........... <span class='warnc'>40 MHz</span>\n  Band ............ <span class='hl'>2.4 GHz</span>",
    fields: [
      {
        label: "Non-overlapping 2.4 GHz channel to choose",
        hint: "The classic three are 1, 6, 11",
        options: ["3", "5", "11", "9"],
        answer: 2,
        explain: "Channels 1, 6, and 11 are the non-overlapping 2.4 GHz options; 11 is the least crowded given neighbors on 1, 6, and 9."
      },
      {
        label: "Channel width for crowded 2.4 GHz",
        hint: "Narrower avoids overlap",
        options: ["20 MHz", "40 MHz", "80 MHz", "160 MHz"],
        answer: 0,
        explain: "20 MHz keeps the signal within one non-overlapping channel; 40 MHz spans two and worsens interference at 2.4 GHz."
      },
      {
        label: "Better band for less congestion (if supported)",
        hint: "More channels, shorter range",
        options: ["900 MHz", "2.4 GHz", "5 GHz", "AM"],
        answer: 2,
        explain: "5 GHz offers many more non-overlapping channels and less crowding, a strong option for nearby devices."
      },
      {
        label: "Tool to confirm the cleanest channel",
        hint: "Surveys nearby APs",
        options: ["Cable tester", "Wi-Fi analyzer", "Loopback plug", "Toner probe"],
        answer: 1,
        explain: "A Wi-Fi analyzer shows channel usage of nearby APs so you can pick the least congested non-overlapping channel."
      }
    ],
    summary: "Move to non-overlapping channel 11 at 20 MHz (or shift to 5 GHz), confirmed with a Wi-Fi analyzer, to beat 2.4 GHz interference."
  },
  {
    id: "PBQ-113",
    format: 4,
    domain: 2,
    title: "Parental Controls / Content Filtering",
    brief: "A parent wants to block adult sites and set internet curfews for kids' devices on the SOHO router.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Access Control</span>\n  Content filter .. <span class='warnc'>off</span>\n  Schedule ........ <span class='warnc'>none</span>\n  Kid devices ..... <span class='dim'>tablet, console</span>\n  DNS ............. <span class='hl'>ISP default</span>",
    fields: [
      {
        label: "Router feature to block adult sites",
        hint: "Category-based web blocking",
        options: ["Port forwarding", "Content filtering / parental controls", "Jumbo frames", "UPnP"],
        answer: 1,
        explain: "Content filtering (parental controls) blocks sites by category or keyword, enforcing acceptable-use policy."
      },
      {
        label: "Enforce internet curfews using",
        hint: "Time-based rules per device",
        options: ["A static route", "Access schedules / time rules", "A DMZ host", "MAC cloning"],
        answer: 1,
        explain: "Access schedules let the router cut internet for specific devices during set hours, enforcing curfews."
      },
      {
        label: "Apply rules to the right devices via",
        hint: "Identify devices on the LAN",
        options: ["MAC address / device profiles", "WAN IP", "Subnet mask", "Default gateway"],
        answer: 0,
        explain: "Mapping rules to device MAC addresses or profiles targets the kids' tablet and console specifically."
      },
      {
        label: "Optional filtering DNS to back this up",
        hint: "DNS service that blocks categories",
        options: ["169.254.0.1", "A filtering DNS resolver", "127.0.0.1", "255.255.255.255"],
        answer: 1,
        explain: "Pointing DHCP-issued DNS at a filtering resolver adds category blocking even where router filtering is bypassed."
      }
    ],
    summary: "Enable content filtering, add per-device access schedules keyed to MAC, and optionally use a filtering DNS resolver."
  },
  {
    id: "PBQ-114",
    format: 4,
    domain: 2,
    title: "Port Forwarding to a Security Camera",
    brief: "A homeowner wants to view an IP camera's web interface remotely. Forward the port securely.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Forwarding</span>\n  WAN IP .......... <span class='ok'>198.51.100.7</span>\n  Camera IP ....... <span class='hl'>192.168.3.40</span>\n  Camera web port . <span class='ok'>8443/TCP (HTTPS)</span>\n  External port ... <span class='warnc'>unset</span>\n  Camera firmware . <span class='dim'>up to date</span>",
    fields: [
      {
        label: "Internal target of the forward rule",
        hint: "The camera's LAN IP",
        options: ["198.51.100.7", "192.168.3.1", "192.168.3.40", "192.168.30.40"],
        answer: 2,
        explain: "Forward to 192.168.3.40, the camera's LAN address; the WAN IP and gateway are not valid internal targets."
      },
      {
        label: "Port/protocol to forward",
        hint: "Match the camera's secure web service",
        options: ["80/TCP", "8443/TCP", "23/TCP", "53/UDP"],
        answer: 1,
        explain: "The camera serves HTTPS on 8443/TCP, so forward that port; plain HTTP/Telnet would be insecure or wrong."
      },
      {
        label: "Keep the camera IP stable with",
        hint: "Avoid lease drift",
        options: ["A DHCP reservation", "A shorter lease", "APIPA", "Static route"],
        answer: 0,
        explain: "A DHCP reservation fixes 192.168.3.40 to the camera so the forward rule keeps pointing at it."
      },
      {
        label: "Extra hardening for remote access",
        hint: "Limit who and how it connects",
        options: ["Disable HTTPS", "Use strong creds and restrict source IPs/VPN", "Open all ports", "Put camera in DMZ"],
        answer: 1,
        explain: "Strong credentials plus source-IP restriction or VPN access limits exposure far better than a DMZ or open ports."
      }
    ],
    summary: "Forward only 8443/TCP to the camera's reserved IP and harden with strong creds and source restrictions or a VPN."
  },
  {
    id: "PBQ-115",
    format: 4,
    domain: 2,
    title: "Static IP for a NAS",
    brief: "A NAS must always be reachable at a known address. Assign valid static IP settings inside the LAN.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>NAS - Network Settings</span>\n  LAN ............. <span class='ok'>192.168.7.0/24</span>\n  Gateway ......... <span class='ok'>192.168.7.1</span>\n  DHCP pool ....... <span class='dim'>192.168.7.100-200</span>\n  NAS IP .......... <span class='warnc'>unset</span>\n  DNS ............. <span class='warnc'>unset</span>",
    fields: [
      {
        label: "Valid static IP outside the DHCP pool",
        hint: "In-subnet, not in .100-.200, not the gateway",
        options: ["192.168.7.1", "192.168.7.20", "192.168.7.150", "192.168.8.20"],
        answer: 1,
        explain: "192.168.7.20 is in-subnet, outside the dynamic pool, and not the gateway, so it will not conflict with leases."
      },
      {
        label: "Subnet mask for /24",
        hint: "255 dotted form of /24",
        options: ["255.255.255.0", "255.255.0.0", "255.255.255.128", "255.0.0.0"],
        answer: 0,
        explain: "A /24 network uses the mask 255.255.255.0, giving 254 usable host addresses."
      },
      {
        label: "Default gateway for the NAS",
        hint: "Router LAN interface",
        options: ["192.168.7.20", "192.168.7.1", "192.168.7.255", "0.0.0.0"],
        answer: 1,
        explain: "The gateway is the router LAN address 192.168.7.1, required for the NAS to reach other networks."
      },
      {
        label: "DNS server entry that resolves names",
        hint: "Router or public resolver, not broadcast",
        options: ["192.168.7.255", "192.168.7.1", "169.254.0.1", "255.255.255.0"],
        answer: 1,
        explain: "Using the router 192.168.7.1 (or a public resolver) for DNS lets the NAS resolve hostnames; .255 is broadcast."
      }
    ],
    summary: "Give the NAS a static in-subnet IP outside the pool, /24 mask, the .1 gateway, and a valid DNS resolver."
  },
  {
    id: "PBQ-116",
    format: 4,
    domain: 2,
    title: "Disabling WPS and Hardening Admin Access",
    brief: "A router still has WPS on and default admin credentials. Harden management and wireless onboarding.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Administration</span>\n  WPS ............. <span class='warnc'>enabled</span>\n  Admin user ...... <span class='warnc'>admin / admin</span>\n  Remote mgmt ..... <span class='warnc'>WAN open (80)</span>\n  Firmware ........ <span class='hl'>update available</span>\n  Wireless ........ <span class='ok'>WPA3</span>",
    fields: [
      {
        label: "WPS should be",
        hint: "PIN method is brute-forceable",
        options: ["Enabled", "Disabled", "Set to PIN-only", "Left default"],
        answer: 1,
        explain: "Disable WPS; its PIN method is vulnerable to brute force, so devices should join with the WPA3 passphrase instead."
      },
      {
        label: "Default admin credentials should be",
        hint: "admin/admin is a known risk",
        options: ["Kept for convenience", "Changed to a strong unique password", "Shared with guests", "Removed entirely"],
        answer: 1,
        explain: "Replace admin/admin with a strong unique password so the management interface is not trivially accessed."
      },
      {
        label: "Remote management over WAN port 80 should be",
        hint: "Avoid exposing admin to the internet",
        options: ["Enabled on HTTP", "Disabled (or HTTPS + restricted)", "Forwarded to a PC", "Left open"],
        answer: 1,
        explain: "Disable WAN remote management or limit it to HTTPS from trusted IPs; plain HTTP admin on the WAN is high risk."
      },
      {
        label: "Firmware with a pending update should be",
        hint: "Patch known vulnerabilities",
        options: ["Ignored", "Updated", "Downgraded", "Reset to factory"],
        answer: 1,
        explain: "Applying the firmware update closes known security flaws and is a core router-hardening step."
      }
    ],
    summary: "Disable WPS, set a strong admin password, lock down WAN management, and update firmware to harden the router."
  },
  {
    id: "PBQ-117",
    format: 4,
    domain: 2,
    title: "Splitting 2.4 and 5 GHz Bands",
    brief: "A laptop near the router keeps connecting on slow 2.4 GHz. Configure band steering and naming to favor 5 GHz.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - Dual Band</span>\n  SSID (both) ..... <span class='warnc'>Acorn (shared name)</span>\n  Band steering ... <span class='warnc'>off</span>\n  2.4 GHz ......... <span class='ok'>ch 6 / 20 MHz</span>\n  5 GHz ........... <span class='ok'>ch 44 / 80 MHz</span>\n  Laptop .......... <span class='hl'>stuck on 2.4 GHz</span>",
    fields: [
      {
        label: "Feature that pushes capable clients to 5 GHz",
        hint: "Steers between radios",
        options: ["Port forwarding", "Band steering", "DMZ", "MAC filtering"],
        answer: 1,
        explain: "Band steering nudges dual-band clients onto the faster, less congested 5 GHz radio when signal allows."
      },
      {
        label: "If steering is unreliable, an alternative is",
        hint: "Force the choice manually",
        options: ["Hide both SSIDs", "Give each band a separate SSID name", "Disable 5 GHz", "Lower the passphrase length"],
        answer: 1,
        explain: "Separate SSIDs per band let the user explicitly join the 5 GHz network instead of being placed on 2.4 GHz."
      },
      {
        label: "Best band for a high-throughput device close to the AP",
        hint: "Speed over range",
        options: ["2.4 GHz", "5 GHz", "900 MHz", "Wired only"],
        answer: 1,
        explain: "Near the AP, 5 GHz delivers higher throughput with its wider channels and less congestion."
      },
      {
        label: "Tradeoff of 5 GHz versus 2.4 GHz",
        hint: "Frequency vs. coverage",
        options: ["Longer range", "Shorter range / less wall penetration", "Fewer channels", "No encryption"],
        answer: 1,
        explain: "5 GHz has shorter range and weaker wall penetration than 2.4 GHz, the tradeoff for higher speed."
      }
    ],
    summary: "Enable band steering or split SSIDs per band so the close-in laptop uses faster 5 GHz, accepting its shorter range."
  },
  {
    id: "PBQ-118",
    format: 4,
    domain: 2,
    title: "Resolving a DHCP IP Conflict",
    brief: "Two devices report an address conflict. Reconcile a statically set IP that overlaps the DHCP pool.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - DHCP / Conflict</span>\n  LAN ............. <span class='ok'>192.168.9.0/24</span>\n  DHCP pool ....... <span class='warnc'>192.168.9.50-150</span>\n  Static printer .. <span class='warnc'>192.168.9.60 (in pool!)</span>\n  Conflict ........ <span class='hl'>printer vs laptop</span>",
    fields: [
      {
        label: "Root cause of the conflict",
        hint: "Static IP inside the dynamic range",
        options: ["Wrong subnet mask", "Static IP overlaps the DHCP pool", "Gateway missing", "DNS failure"],
        answer: 1,
        explain: "The printer's static .60 sits inside the .50-.150 pool, so DHCP also handed it out, causing a conflict."
      },
      {
        label: "Best long-term fix",
        hint: "Let the router own the assignment",
        options: ["Shorten lease times", "Convert to a DHCP reservation (or move static outside pool)", "Disable the printer", "Add a second gateway"],
        answer: 1,
        explain: "Using a DHCP reservation, or moving the static IP outside the pool, prevents the router from reissuing that address."
      },
      {
        label: "Valid static IP outside the pool",
        hint: "In-subnet but not .50-.150",
        options: ["192.168.9.100", "192.168.9.20", "192.168.9.150", "192.168.10.20"],
        answer: 1,
        explain: "192.168.9.20 is in-subnet and below the pool start, so it cannot collide with a leased address."
      },
      {
        label: "After fixing, verify with",
        hint: "Check reachability/duplicate",
        options: ["A loopback plug", "ping / arp to confirm no duplicate", "A tone generator", "Re-cabling"],
        answer: 1,
        explain: "Pinging and checking arp confirms the address is unique and reachable after the change."
      }
    ],
    summary: "The static printer IP overlapped the DHCP pool; reserve it or move it outside the pool, then verify with ping/arp."
  },
  {
    id: "PBQ-119",
    format: 4,
    domain: 2,
    title: "QoS Bandwidth Limits for a Guest Network",
    brief: "Guests saturate the link with streaming. Cap guest bandwidth while protecting work traffic.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - QoS / Guest</span>\n  WAN ............. <span class='ok'>300 Mbps down</span>\n  Guest SSID ...... <span class='ok'>HomeNet-Guest</span>\n  Guest limit ..... <span class='warnc'>none</span>\n  Work device ..... <span class='dim'>video calls</span>\n  QoS ............. <span class='warnc'>off</span>",
    fields: [
      {
        label: "Feature to cap guest throughput",
        hint: "Rate limiting / bandwidth control",
        options: ["Port triggering", "QoS bandwidth limiting on the guest SSID", "UPnP", "MAC cloning"],
        answer: 1,
        explain: "QoS rate limiting caps the guest SSID's bandwidth so guests cannot starve work traffic."
      },
      {
        label: "Priority to give the work video-call device",
        hint: "Protect real-time calls",
        options: ["Lowest", "Normal", "Highest", "Throttled"],
        answer: 2,
        explain: "Real-time video calls should get the highest QoS priority so they stay smooth under load."
      },
      {
        label: "Keep guests off the trusted LAN with",
        hint: "Segment the guest SSID",
        options: ["A static route", "Network isolation", "Port forwarding", "A longer lease"],
        answer: 1,
        explain: "Network isolation keeps guest devices on a separate segment, away from trusted LAN hosts."
      },
      {
        label: "Reasonable guest cap on a 300 Mbps link",
        hint: "A fraction that leaves headroom",
        options: ["300 Mbps", "Unlimited", "50 Mbps", "0 Mbps"],
        answer: 2,
        explain: "Capping guests at ~50 Mbps leaves ample headroom for work traffic while still giving guests usable speed."
      }
    ],
    summary: "Rate-limit the guest SSID via QoS, prioritize the work device, and isolate guests so they cannot saturate or reach the LAN."
  },
  {
    id: "PBQ-120",
    format: 4,
    domain: 2,
    title: "Adding DNS and a Reservation for a Media Server",
    brief: "A media server should keep one IP and use a fast resolver. Configure addressing and DNS on the SOHO router.",
    exhibitTitle: "router config",
    exhibit: "<span class='cy'>SOHO Router - LAN / DNS</span>\n  LAN ............. <span class='ok'>192.168.4.0/24</span>\n  Gateway ......... <span class='ok'>192.168.4.1</span>\n  Pool ............ <span class='dim'>192.168.4.100-200</span>\n  Media MAC ....... <span class='dim'>3C:5A:B4:11:67:02</span>\n  DNS ............. <span class='warnc'>ISP default (slow)</span>",
    fields: [
      {
        label: "Give the media server a fixed IP via",
        hint: "Bind IP to MAC",
        options: ["Shorter lease", "DHCP reservation", "APIPA", "DMZ"],
        answer: 1,
        explain: "A DHCP reservation ties a constant IP to the media server's MAC so clients always find it."
      },
      {
        label: "Valid reserved IP for the media server",
        hint: "In-subnet, outside .100-.200",
        options: ["192.168.4.1", "192.168.4.30", "192.168.4.150", "192.168.40.30"],
        answer: 1,
        explain: "192.168.4.30 is in-subnet and outside the dynamic pool, avoiding lease collisions; .1 is the gateway."
      },
      {
        label: "DNS resolver to push via DHCP",
        hint: "A public resolver address",
        options: ["255.255.255.0", "1.1.1.1", "192.168.4.255", "169.254.4.1"],
        answer: 1,
        explain: "1.1.1.1 is a valid public DNS resolver; .255 is broadcast and 169.254.x is APIPA, neither usable as DNS."
      },
      {
        label: "Gateway clients use to reach the media server's network",
        hint: "Router LAN interface",
        options: ["192.168.4.30", "192.168.4.1", "192.168.4.255", "0.0.0.0"],
        answer: 1,
        explain: "192.168.4.1 is the router LAN/gateway address used to route between subnets and out to the internet."
      }
    ],
    summary: "Reserve an in-subnet IP outside the pool for the media server's MAC and push a fast public DNS resolver via DHCP."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-121",
    format: 5,
    domain: 5,
    title: "Dead Workstation - No Power",
    brief: "A user reports their desktop will not turn on at all. Pressing the power button produces no lights, no fans, and no sounds. You arrive to triage the ticket.",
    exhibitTitle: "Trouble Ticket #4471",
    exhibit: "Symptom: <span class='hl'>No response when power button pressed</span>\nCase LEDs: <span class='hl'>OFF</span>\nCPU/case fans: <span class='hl'>not spinning</span>\nPSU fan: <span class='hl'>silent</span>\nWall outlet: <span class='dim'>shared with monitor, which powers on normally</span>\nPSU voltage switch: <span class='warnc'>set to 230V (region is 120V)</span>",
    fields: [
      {
        label: "First step (methodology)",
        hint: "Six-step troubleshooting begins here",
        options: [
          "Identify the problem by gathering information and reproducing the symptom",
          "Replace the power supply immediately",
          "Document the resolution in the ticket",
          "Test your theory by swapping the motherboard"
        ],
        answer: 0,
        explain: "Step 1 of the CompTIA methodology is to identify the problem: question the user, gather information, and verify the symptom before touching hardware."
      },
      {
        label: "Most likely cause",
        hint: "Note the highlighted PSU switch and that the monitor on the same outlet works",
        options: [
          "Failed motherboard requiring replacement",
          "PSU input voltage selector set to 230V on a 120V circuit, starving the supply",
          "Dead CMOS battery preventing POST",
          "Corrupted operating system"
        ],
        answer: 1,
        explain: "A 230V selector on a 120V mains feed delivers too little voltage for the PSU to start, so nothing powers on. The monitor working confirms the outlet has power."
      },
      {
        label: "Best diagnostic action",
        hint: "Confirm the supply rails before condemning parts",
        options: [
          "Reinstall Windows from recovery media",
          "Run the onboard memory diagnostic",
          "Correct the voltage selector, then test the PSU with a tester or paperclip/jump test",
          "Flash the BIOS to the latest version"
        ],
        answer: 2,
        explain: "Set the selector to 120V, then verify the PSU produces correct rail voltages using a PSU tester or a paperclip jump test before reassembling."
      },
      {
        label: "Correct fix",
        hint: "Change one thing at a time",
        options: [
          "Set the voltage selector to 120V and verify the system powers on",
          "Replace the CPU and PSU together to be safe",
          "Disable fast startup in BIOS",
          "Clear the CMOS and remove all RAM"
        ],
        answer: 0,
        explain: "Setting the selector to the correct 120V restores proper input voltage. Change only that one variable, then verify before doing anything else."
      }
    ],
    summary: "No power with a mis-set voltage selector: identify first, correct the selector to match mains, verify the PSU rails, and change only one variable at a time."
  },
  {
    id: "PBQ-122",
    format: 5,
    domain: 5,
    title: "Power but No POST",
    brief: "A desktop powers on (fans and LEDs come alive) but the screen stays black and the system never beeps or reaches the firmware splash.",
    exhibitTitle: "Trouble Ticket #4488",
    exhibit: "Power button: <span class='ok'>fans spin, LEDs light</span>\nDisplay: <span class='hl'>black, no signal, no POST splash</span>\nPOST beep: <span class='hl'>one long beep repeating</span>\nRecent change: <span class='warnc'>user added a second RAM stick yesterday</span>\nMonitor: <span class='ok'>verified good on another PC</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Powers on but never POSTs; note the recent change and beep pattern",
        options: [
          "Failed hard drive",
          "Improperly seated or incompatible RAM installed yesterday",
          "Dead PSU",
          "Corrupted user profile"
        ],
        answer: 1,
        explain: "Power without POST plus a recent RAM change and a memory beep code points to bad seating or incompatible memory. A continuous/long beep commonly signals a memory fault."
      },
      {
        label: "Best diagnostic step",
        hint: "Isolate the variable that changed",
        options: [
          "Replace the motherboard",
          "Reseat the RAM, then remove the new stick and boot with known-good memory only",
          "Reinstall the operating system",
          "Update the graphics driver in Safe Mode"
        ],
        answer: 1,
        explain: "Reseat the modules, then test with one known-good stick at a time. Removing the newly added stick isolates whether it is the cause."
      },
      {
        label: "Tool/reference to consult",
        hint: "Decode the audible signal",
        options: [
          "The motherboard manual / firmware vendor beep-code chart",
          "Windows Event Viewer",
          "The SMART attribute log",
          "Device Manager"
        ],
        answer: 0,
        explain: "Beep codes are vendor-specific; the motherboard or firmware (BIOS/UEFI) documentation maps the pattern, here indicating a memory error."
      },
      {
        label: "After the fix, final step",
        hint: "Six-step methodology closes here",
        options: [
          "Open a new ticket for unrelated work",
          "Document the cause, the fix, and the lessons learned",
          "Power-cycle the system five times",
          "Reset the BIOS to defaults again"
        ],
        answer: 1,
        explain: "Step 6 is to document findings, actions, and outcomes so the resolution is recorded for future reference."
      }
    ],
    summary: "Power but no POST after a RAM change: a memory beep code and the recent install point to the new module. Reseat or remove it, confirm with known-good RAM, then document."
  },
  {
    id: "PBQ-123",
    format: 5,
    domain: 5,
    title: "Random BSODs and Reboots",
    brief: "A workstation throws intermittent blue screens with varying stop codes (MEMORY_MANAGEMENT, PAGE_FAULT) and occasionally reboots under load.",
    exhibitTitle: "Trouble Ticket #4502",
    exhibit: "Crashes: <span class='hl'>random BSODs, different stop codes each time</span>\nStop codes: <span class='warnc'>MEMORY_MANAGEMENT, PAGE_FAULT_IN_NONPAGED_AREA</span>\nPattern: <span class='warnc'>worse under heavy multitasking</span>\nTemps: <span class='ok'>CPU 55C, GPU 60C - normal</span>\nDisk SMART: <span class='ok'>healthy, no reallocated sectors</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Varying stop codes that all reference memory addressing",
        options: [
          "Failing system RAM",
          "Overheating CPU",
          "Failing hard drive",
          "Outdated network driver"
        ],
        answer: 0,
        explain: "Random BSODs with changing memory-related stop codes, normal temps, and healthy SMART strongly indicate failing or unstable RAM."
      },
      {
        label: "Best diagnostic tool",
        hint: "Purpose-built memory test",
        options: [
          "chkdsk /r",
          "Windows Memory Diagnostic or MemTest86 across multiple passes",
          "sfc /scannow",
          "Disk Defragmenter"
        ],
        answer: 1,
        explain: "Windows Memory Diagnostic or MemTest86 stress-tests RAM over many passes to expose intermittent memory errors."
      },
      {
        label: "Isolation technique",
        hint: "Change one thing at a time",
        options: [
          "Swap the CPU and PSU at once",
          "Test each DIMM individually in a known-good slot to find the faulty module",
          "Reinstall Windows immediately",
          "Replace all four DIMMs and the motherboard together"
        ],
        answer: 1,
        explain: "Testing one DIMM at a time in a single known-good slot isolates the defective module without changing multiple variables."
      },
      {
        label: "Correct fix",
        hint: "Replace only what is confirmed bad",
        options: [
          "Replace the identified faulty memory module with a compatible one",
          "Lower the screen resolution",
          "Disable virtual memory entirely",
          "Underclock the GPU"
        ],
        answer: 0,
        explain: "Once a specific DIMM is confirmed faulty, replace it with a compatible module, then re-run the memory test to verify stability."
      }
    ],
    summary: "Random memory-flavored BSODs with normal temps and healthy disk point to RAM. Run a memory diagnostic, isolate each DIMM, and replace the bad module."
  },
  {
    id: "PBQ-124",
    format: 5,
    domain: 5,
    title: "Thermal Shutdowns Under Load",
    brief: "A gaming PC abruptly powers off after several minutes of heavy 3D load. It restarts fine and idles indefinitely, but shuts down again once the game loads.",
    exhibitTitle: "Trouble Ticket #4519",
    exhibit: "Idle: <span class='ok'>stable for hours</span>\nUnder load: <span class='hl'>hard power-off after ~5 minutes</span>\nCPU temp at shutdown: <span class='hl'>98C and climbing</span>\nCPU fan RPM: <span class='warnc'>low, fan choked with dust</span>\nThermal paste: <span class='dim'>original, 4 years old</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Stable at idle, dies under load, temp spikes",
        options: [
          "Inadequate CPU cooling causing thermal shutdown",
          "Failing RAM",
          "Corrupt GPU driver",
          "Bad SATA cable"
        ],
        answer: 0,
        explain: "Stability at idle but shutdown under load with a 98C reading is a classic thermal protection trip caused by inadequate CPU cooling."
      },
      {
        label: "Best diagnostic action",
        hint: "Confirm the temperature theory",
        options: [
          "Run chkdsk during the game",
          "Monitor CPU temperatures in real time while reproducing the load",
          "Reinstall the operating system",
          "Replace the PSU"
        ],
        answer: 1,
        explain: "Real-time temperature monitoring while reproducing the load confirms the CPU is hitting its thermal limit and shutting down to protect itself."
      },
      {
        label: "Correct fix",
        hint: "Restore cooling, address dust and paste",
        options: [
          "Increase the page file size",
          "Clean the heatsink/fan of dust and reapply fresh thermal paste",
          "Disable the integrated GPU",
          "Add a second hard drive for airflow"
        ],
        answer: 1,
        explain: "Clearing dust from the heatsink and fan and reapplying fresh thermal paste restores proper heat transfer and airflow."
      },
      {
        label: "Verification step",
        hint: "Prove the fix under the original conditions",
        options: [
          "Assume it is fixed and close the ticket",
          "Re-run the heavy load and confirm temperatures stay within spec without shutdown",
          "Only test at idle for one minute",
          "Reboot once and walk away"
        ],
        answer: 1,
        explain: "Verify full system functionality by reproducing the original heavy load and confirming temperatures stay in range with no shutdown."
      }
    ],
    summary: "Load-only shutdowns with a 98C CPU mean thermal protection. Monitor temps to confirm, clean dust and reapply paste, then verify under the same load."
  },
  {
    id: "PBQ-125",
    format: 5,
    domain: 5,
    title: "Clicking Drive and Slow Boot",
    brief: "A user's PC takes several minutes to boot and the operating system freezes intermittently. You hear a rhythmic clicking from inside the case.",
    exhibitTitle: "Trouble Ticket #4533",
    exhibit: "Boot time: <span class='hl'>5+ minutes</span>\nSound: <span class='hl'>repetitive clicking from the HDD</span>\nSMART status: <span class='hl'>FAILED - reallocated sector count rising</span>\nFile access: <span class='warnc'>some files throw read errors</span>\nBackup: <span class='warnc'>none in 90 days</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Clicking plus SMART FAILED",
        options: [
          "Failing mechanical hard drive (imminent disk failure)",
          "Insufficient RAM",
          "Overheating CPU",
          "Faulty keyboard"
        ],
        answer: 0,
        explain: "The click-of-death plus a FAILED SMART status with rising reallocated sectors indicates a mechanical hard drive failing imminently."
      },
      {
        label: "Most urgent first action",
        hint: "Protect the data before anything else",
        options: [
          "Defragment the drive",
          "Immediately back up / image the data while the drive is still partly readable",
          "Run a full antivirus scan",
          "Update the storage controller driver"
        ],
        answer: 1,
        explain: "With imminent failure and no recent backup, the priority is to copy or image the data off the drive before it dies completely."
      },
      {
        label: "Best diagnostic tool",
        hint: "Read the drive health metrics",
        options: [
          "ipconfig",
          "A SMART monitoring utility (CrystalDiskInfo or vendor tool)",
          "Resource Monitor",
          "msconfig"
        ],
        answer: 1,
        explain: "A SMART utility reports reallocated/pending sectors and overall health, confirming the drive is failing."
      },
      {
        label: "Correct fix",
        hint: "Replace and restore",
        options: [
          "Run chkdsk repeatedly and keep using the drive",
          "Replace the failing drive (ideally with an SSD) and restore from the backup",
          "Disable SMART warnings in BIOS",
          "Reformat and continue using the same drive"
        ],
        answer: 1,
        explain: "A drive failing SMART must be replaced, not repaired. Install a new drive (SSD recommended) and restore the data you backed up."
      }
    ],
    summary: "A clicking drive with FAILED SMART is dying: back up the data immediately, confirm with a SMART tool, then replace the drive and restore."
  },
  {
    id: "PBQ-126",
    format: 5,
    domain: 5,
    title: "Intermittent Shutdowns - PSU Suspect",
    brief: "A desktop randomly powers off completely with no BSOD and no event log entry, more often when the GPU is busy. It restarts immediately when the button is pressed.",
    exhibitTitle: "Trouble Ticket #4547",
    exhibit: "Crash type: <span class='hl'>instant power-off, no BSOD, no log</span>\nTrigger: <span class='warnc'>more frequent under GPU load</span>\nTemps: <span class='ok'>CPU 60C, GPU 68C - normal</span>\nRAM test: <span class='ok'>passed MemTest86, 4 passes</span>\nPSU: <span class='warnc'>450W unit, GPU upgraded recently to a higher-wattage card</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Instant power-off, no log, worse under load, undersized PSU",
        options: [
          "Failing or underpowered PSU unable to meet load demand",
          "Bad RAM",
          "Overheating CPU",
          "Corrupt OS"
        ],
        answer: 0,
        explain: "Instant power-off with no BSOD or log, normal temps, passing RAM, and a recently upgraded GPU on a 450W supply points to a PSU that cannot meet peak load."
      },
      {
        label: "Best diagnostic action",
        hint: "Verify the rails under load or substitute a known-good supply",
        options: [
          "Reinstall the GPU driver only",
          "Test rail voltages under load and/or swap in a known-good higher-wattage PSU",
          "Run sfc /scannow",
          "Increase the page file"
        ],
        answer: 1,
        explain: "Measuring rail stability under load, or substituting a known-good adequately rated PSU, confirms whether the supply is the fault."
      },
      {
        label: "Why no BSOD appears",
        hint: "Distinguish power loss from a software fault",
        options: [
          "The OS suppresses BSODs by default",
          "A PSU dropout cuts power instantly, so Windows cannot write a crash dump",
          "BSODs only occur on laptops",
          "The GPU driver disabled crash logging"
        ],
        answer: 1,
        explain: "When the PSU drops out, power is lost instantly and Windows has no chance to halt with a BSOD or write a dump, unlike a software crash."
      },
      {
        label: "Correct fix",
        hint: "Match the supply to the load",
        options: [
          "Underclock the CPU permanently",
          "Replace the PSU with one of adequate wattage for the upgraded GPU and verify",
          "Remove the new GPU and use integrated graphics forever",
          "Disable GPU acceleration in all apps"
        ],
        answer: 1,
        explain: "Install a PSU rated for the new GPU's total system draw, then verify stability under load. Change one variable and confirm."
      }
    ],
    summary: "Instant logless shutdowns under GPU load with normal temps and good RAM point to an undersized PSU. Test the rails, replace with an adequately rated unit, and verify."
  },
  {
    id: "PBQ-127",
    format: 5,
    domain: 5,
    title: "Continuous Beeps, No Video",
    brief: "After cleaning the inside of a PC, a technician powers it on and it emits continuous short beeps with no video output.",
    exhibitTitle: "Trouble Ticket #4561",
    exhibit: "Recent action: <span class='warnc'>case opened and dust-blown</span>\nBeep pattern: <span class='hl'>continuous short beeps, no video</span>\nFans: <span class='ok'>spinning</span>\nGPU: <span class='warnc'>discrete card, may have been bumped</span>\nDisplay cable: <span class='ok'>connected to the discrete card</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Failure right after physical work inside the case",
        options: [
          "A component (GPU or RAM) dislodged during cleaning",
          "Operating system corruption",
          "Failed hard drive",
          "Expired Windows license"
        ],
        answer: 0,
        explain: "A new fault immediately after opening the case usually means a card or module was bumped loose. Continuous beeps with no video commonly indicate a video/RAM seating issue."
      },
      {
        label: "First troubleshooting step",
        hint: "Undo and verify what just changed",
        options: [
          "Replace the motherboard",
          "Power down and reseat the GPU and RAM that were near the work area",
          "Reinstall Windows",
          "Update the BIOS"
        ],
        answer: 1,
        explain: "Since the fault appeared right after physical work, reseat the components you were near. This addresses the most probable cause first."
      },
      {
        label: "Reference to decode the beeps",
        hint: "Map the audible pattern to a fault",
        options: [
          "The motherboard/firmware beep-code reference",
          "The Windows registry",
          "The SMART log",
          "The router admin page"
        ],
        answer: 0,
        explain: "The motherboard or firmware beep-code chart translates the pattern, here pointing to a video or memory error."
      },
      {
        label: "Lesson to document",
        hint: "Verify full functionality and record it",
        options: [
          "Never open a computer case again",
          "Reconfirm all cards/modules are seated after internal service, and record the resolution",
          "Disable POST beeps in BIOS to avoid the noise",
          "Apply thermal paste to the RAM"
        ],
        answer: 1,
        explain: "Document that internal service can dislodge components and that reseating resolved it, reinforcing post-service verification."
      }
    ],
    summary: "Continuous beeps with no video right after cleaning means something was knocked loose. Reseat the GPU and RAM, decode the beep code, then verify and document."
  },
  {
    id: "PBQ-128",
    format: 5,
    domain: 5,
    title: "Degraded RAID 1 Array",
    brief: "A small server logs a storage alert. The mirrored array still serves data, but management software flags it as degraded.",
    exhibitTitle: "Trouble Ticket #4575",
    exhibit: "Array type: <span class='cy'>RAID 1 (mirror), 2 disks</span>\nStatus: <span class='hl'>DEGRADED</span>\nDisk 0: <span class='ok'>Online</span>\nDisk 1: <span class='hl'>FAILED - SMART error, dropped from array</span>\nData access: <span class='ok'>still available from Disk 0</span>\nBackup: <span class='ok'>nightly backup current</span>",
    fields: [
      {
        label: "Current data risk",
        hint: "Mirror with one surviving member",
        options: [
          "Data is already lost",
          "Data is intact but the array has no redundancy until rebuilt",
          "Data is fully redundant and safe",
          "The array cannot be accessed at all"
        ],
        answer: 1,
        explain: "RAID 1 with one good disk still serves data, but a second failure now would cause loss. There is no redundancy until the mirror is rebuilt."
      },
      {
        label: "Correct fix",
        hint: "Restore redundancy",
        options: [
          "Reformat the surviving disk",
          "Replace the failed disk and rebuild the mirror from the healthy member",
          "Delete the array and restore from tape",
          "Convert the array to RAID 0"
        ],
        answer: 1,
        explain: "Replace the failed drive with a matching disk and let the controller rebuild the mirror from the online member, restoring redundancy."
      },
      {
        label: "Best practice before replacing",
        hint: "Even with redundancy, protect the data",
        options: [
          "Verify a current backup exists before touching the array",
          "Defragment Disk 0 first",
          "Convert the volume to FAT32",
          "Disable SMART on the controller"
        ],
        answer: 0,
        explain: "Confirm a valid backup before the rebuild, since rebuilds stress the surviving disk and a second failure during rebuild would be catastrophic."
      },
      {
        label: "After the rebuild completes",
        hint: "Verify and document",
        options: [
          "Immediately power off the server",
          "Confirm the array status returns to healthy/optimal and document the replacement",
          "Delete the backup to free space",
          "Switch the array to RAID 5 without new disks"
        ],
        answer: 1,
        explain: "Verify the array reports healthy/optimal after rebuilding, then document the failed disk, the replacement, and the outcome."
      }
    ],
    summary: "A degraded RAID 1 mirror still serves data but lacks redundancy. Confirm a backup, replace the failed disk, rebuild, then verify the array is healthy and document."
  },
  {
    id: "PBQ-129",
    format: 5,
    domain: 5,
    title: "No Display - Component or Cable?",
    brief: "A user reports a completely black screen. The computer appears to be running but nothing shows on the monitor.",
    exhibitTitle: "Trouble Ticket #4588",
    exhibit: "PC: <span class='ok'>fans on, drive LED blinking, POST beep is a single normal beep</span>\nMonitor: <span class='hl'>black, power LED amber (no signal)</span>\nCable: <span class='warnc'>DisplayPort connected to motherboard port, not the discrete GPU</span>\nDiscrete GPU: <span class='cy'>installed and is the active adapter</span>",
    fields: [
      {
        label: "First step (methodology)",
        hint: "Cheapest, most likely cause first",
        options: [
          "Replace the monitor",
          "Check connections - verify the cable is on the correct (active) output",
          "Replace the GPU",
          "Reinstall the OS"
        ],
        answer: 1,
        explain: "Start with the simplest probable cause: confirm the display cable is plugged into the active GPU's output, not an inactive port."
      },
      {
        label: "Most likely cause",
        hint: "Single normal POST beep means the PC is fine",
        options: [
          "Cable connected to the inactive motherboard port instead of the discrete GPU",
          "Failed CPU",
          "Corrupt graphics driver requiring reinstall",
          "Dead PSU"
        ],
        answer: 0,
        explain: "A single normal POST beep and running system indicate good hardware; the amber no-signal LED with the cable on the wrong (inactive) port is the cause."
      },
      {
        label: "Quick test to confirm",
        hint: "Establish a theory of probable cause",
        options: [
          "Move the cable to the discrete GPU output and check for signal",
          "Flash the BIOS",
          "Run chkdsk",
          "Replace the RAM"
        ],
        answer: 0,
        explain: "Moving the cable to the active GPU port and seeing signal confirms the theory with no parts swapped."
      },
      {
        label: "Correct fix",
        hint: "Connect to the active output",
        options: [
          "Plug the monitor into the discrete GPU's output",
          "Disable the discrete GPU in BIOS permanently",
          "Buy a new monitor",
          "Set the resolution to the lowest value"
        ],
        answer: 0,
        explain: "Connecting the display to the active discrete GPU's output restores the picture. The simplest fix matches the simplest cause."
      }
    ],
    summary: "Black screen with a normal POST beep is usually a cabling/output issue. Move the cable to the active GPU port, confirm signal, and verify."
  },
  {
    id: "PBQ-130",
    format: 5,
    domain: 5,
    title: "Capacitor Bulge and Instability",
    brief: "An aging desktop has become unstable, freezing randomly and sometimes failing to POST. On inspection you notice physical damage on the motherboard.",
    exhibitTitle: "Trouble Ticket #4602",
    exhibit: "Symptoms: <span class='hl'>random freezes, intermittent no-POST</span>\nVisual: <span class='hl'>several bulging/leaking capacitors near the CPU socket</span>\nRAM test: <span class='ok'>passed</span>\nTemps: <span class='ok'>normal</span>\nAge: <span class='dim'>system is 8 years old</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Visible physical evidence on the board",
        options: [
          "Failing motherboard with bulging/leaking capacitors",
          "Bad RAM",
          "Failing SSD",
          "Outdated graphics driver"
        ],
        answer: 0,
        explain: "Bulging or leaking capacitors are a clear sign of motherboard power-delivery failure, explaining instability and intermittent no-POST despite passing RAM and normal temps."
      },
      {
        label: "Best diagnostic action",
        hint: "Use your senses safely",
        options: [
          "Reinstall Windows",
          "Visually inspect the board for swollen/leaking capacitors and other damage",
          "Run a network speed test",
          "Increase the page file"
        ],
        answer: 1,
        explain: "A careful visual inspection for swollen, vented, or leaking capacitors and burn marks confirms physical board failure."
      },
      {
        label: "Correct fix",
        hint: "The board is the faulty component",
        options: [
          "Replace the motherboard (or the system)",
          "Reapply thermal paste",
          "Replace the RAM",
          "Reset the BIOS to defaults"
        ],
        answer: 0,
        explain: "Failed capacitors mean the motherboard must be replaced; for an 8-year-old system, replacing the board or the whole unit is appropriate."
      },
      {
        label: "Safety consideration",
        hint: "Capacitors store charge",
        options: [
          "Capacitors are always safe to touch when powered off",
          "Unplug the system and let it discharge before handling the board; do not puncture capacitors",
          "Short the capacitors with a screwdriver to discharge them",
          "Work on it while it is powered on for accuracy"
        ],
        answer: 1,
        explain: "Power off and unplug, allow residual charge to dissipate, and avoid puncturing capacitors, which can leak corrosive electrolyte."
      }
    ],
    summary: "Bulging capacitors explain instability and no-POST on an old board. Inspect visually, replace the motherboard safely, and verify stability."
  },
  {
    id: "PBQ-131",
    format: 5,
    domain: 5,
    title: "Laptop Won't Charge",
    brief: "A laptop runs only on battery. When the AC adapter is plugged in, the charge LED does not light and the battery slowly drains.",
    exhibitTitle: "Trouble Ticket #4617",
    exhibit: "On battery: <span class='ok'>boots and runs normally</span>\nWith adapter plugged: <span class='hl'>charge LED off, OS shows 'plugged in, not charging' then 'not detected'</span>\nAdapter brick LED: <span class='warnc'>dim/flickering</span>\nDC jack: <span class='warnc'>wiggling the connector briefly lights the LED</span>",
    fields: [
      {
        label: "First step (methodology)",
        hint: "Isolate adapter vs jack vs battery cheaply",
        options: [
          "Replace the motherboard",
          "Test with a known-good compatible adapter and reseat the connector",
          "Reinstall the OS",
          "Replace the display panel"
        ],
        answer: 1,
        explain: "Swap in a known-good adapter and reseat the connection to isolate whether the fault is the adapter, the cable, or the jack."
      },
      {
        label: "Most likely cause given the wiggle test",
        hint: "Connector position changes behavior",
        options: [
          "Failed CPU",
          "A faulty AC adapter and/or a loose/damaged DC power jack",
          "Corrupt battery driver only",
          "Dead CMOS battery"
        ],
        answer: 1,
        explain: "A dim/flickering brick LED suggests a failing adapter, and the wiggle test that restores charging points to a loose or damaged DC jack."
      },
      {
        label: "Best diagnostic tool",
        hint: "Measure the adapter output",
        options: [
          "A multimeter to verify adapter output voltage at the tip",
          "chkdsk",
          "Device Manager network tab",
          "A SMART utility"
        ],
        answer: 0,
        explain: "A multimeter confirms whether the adapter delivers correct voltage, distinguishing an adapter fault from a jack/board fault."
      },
      {
        label: "Correct fix sequence",
        hint: "Change one thing at a time, then verify",
        options: [
          "Replace adapter and motherboard and battery simultaneously",
          "Replace the confirmed-faulty part first (adapter or DC jack), then verify charging",
          "Disable the battery in BIOS",
          "Set Windows to battery saver mode"
        ],
        answer: 1,
        explain: "Replace the one component you confirmed faulty, then verify the LED lights and the battery charges before considering further parts."
      }
    ],
    summary: "A laptop that won't charge needs adapter-vs-jack isolation. Test a known-good adapter, measure output, replace the confirmed-faulty part, then verify."
  },
  {
    id: "PBQ-132",
    format: 5,
    domain: 5,
    title: "Burning Smell and Sudden Death",
    brief: "A user reports a burning odor followed by the PC shutting off and refusing to power back on. The room smells of ozone/burnt electronics.",
    exhibitTitle: "Trouble Ticket #4631",
    exhibit: "Event: <span class='hl'>burning smell, then immediate shutdown</span>\nNow: <span class='hl'>no power at all, will not turn on</span>\nSmell source: <span class='hl'>strongest near the PSU vents</span>\nBreaker: <span class='warnc'>tripped at the wall once</span>\nVisible: <span class='dim'>no external damage yet</span>",
    fields: [
      {
        label: "Immediate safety action",
        hint: "Burning smell means stop",
        options: [
          "Keep retrying the power button",
          "Unplug the system from mains immediately and do not power it on again",
          "Spray contact cleaner inside the PSU",
          "Open the PSU and probe it while plugged in"
        ],
        answer: 1,
        explain: "A burning smell with a tripped breaker is a hazard. Disconnect from mains immediately and do not re-energize until the fault is found."
      },
      {
        label: "Most likely failed component",
        hint: "Odor strongest at the PSU",
        options: [
          "The power supply unit failed (possibly shorting)",
          "The hard drive",
          "The RAM",
          "The keyboard"
        ],
        answer: 0,
        explain: "A burnt smell concentrated at the PSU vents plus a tripped breaker and total loss of power points to a failed, likely shorted PSU."
      },
      {
        label: "Safe diagnostic approach",
        hint: "Never open a PSU",
        options: [
          "Open the PSU casing to inspect the capacitors",
          "Substitute a known-good PSU on the bench and check whether the system powers up",
          "Reinstall the OS",
          "Replace the motherboard first without testing"
        ],
        answer: 1,
        explain: "PSUs hold dangerous charge and should not be opened. Substitute a known-good supply to test the rest of the system safely."
      },
      {
        label: "Concern after a PSU failure",
        hint: "A surge can damage downstream parts",
        options: [
          "Only the PSU could ever be affected",
          "A failed PSU may have damaged the motherboard/other parts; inspect and test them too",
          "The OS license is voided",
          "The monitor must be recalibrated"
        ],
        answer: 1,
        explain: "A PSU failure can send out-of-spec voltage and damage connected components, so inspect and test the board and drives after replacing the PSU."
      }
    ],
    summary: "Burning smell and dead PSU: disconnect from mains first, never open the PSU, substitute a known-good unit, and check downstream parts for collateral damage."
  },
  {
    id: "PBQ-133",
    format: 5,
    domain: 5,
    title: "SSD Disappears Intermittently",
    brief: "A workstation occasionally boots to 'no boot device' and at other times runs fine. In the OS, the secondary SSD sometimes vanishes from Explorer.",
    exhibitTitle: "Trouble Ticket #4644",
    exhibit: "Boot: <span class='warnc'>sometimes 'no boot device found', sometimes normal</span>\nIn OS: <span class='hl'>secondary SSD intermittently disappears</span>\nSMART: <span class='ok'>both drives report healthy when detected</span>\nObservation: <span class='warnc'>SATA data cable is loose; power splitter is daisy-chained to 4 devices</span>\nReseat test: <span class='cy'>firmly reseating the SATA cable temporarily stops the dropouts</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Healthy SMART but physical connection issues",
        options: [
          "Loose/faulty SATA data or power cabling",
          "Both SSDs failing simultaneously",
          "Corrupt OS bootloader only",
          "Insufficient RAM"
        ],
        answer: 0,
        explain: "Healthy SMART plus intermittent disappearance that a reseat fixes points to a loose or faulty SATA data/power connection, not failing drives."
      },
      {
        label: "Best diagnostic step",
        hint: "Test the cabling theory",
        options: [
          "Replace both SSDs",
          "Reseat and/or replace the SATA data cable and verify the power connection",
          "Reinstall Windows",
          "Update the chipset driver only"
        ],
        answer: 1,
        explain: "Reseating or replacing the SATA cable and confirming solid power isolates the connection as the cause, matching the reseat-test result."
      },
      {
        label: "Why SMART looks fine",
        hint: "SMART reports the drive's own health",
        options: [
          "SMART only tracks the drive's internal health, not cable/connection faults",
          "SMART is disabled by default",
          "SMART cannot detect SSDs",
          "SMART resets every reboot"
        ],
        answer: 0,
        explain: "SMART monitors the drive's internal condition; a healthy drive on a flaky cable still reports healthy, which is why it drops out without SMART errors."
      },
      {
        label: "Correct fix and verification",
        hint: "Fix the connection, then confirm over time",
        options: [
          "Replace the cable and/or power lead, then verify stable detection across multiple reboots",
          "Disable the secondary SSD in BIOS",
          "Lower the SATA link speed to 1.5 Gb/s permanently",
          "Format the boot drive"
        ],
        answer: 0,
        explain: "Replace the faulty data/power lead and verify the drives stay detected across several reboots and OS sessions before closing the ticket."
      }
    ],
    summary: "An SSD that drops out with healthy SMART is a cabling problem. Reseat or replace the SATA data/power lead and verify stable detection across reboots."
  },
  {
    id: "PBQ-134",
    format: 5,
    domain: 5,
    title: "POST Error and CMOS Reset",
    brief: "Each boot displays 'CMOS checksum error - defaults loaded' and the system clock is wrong every morning. The PC otherwise boots into Windows.",
    exhibitTitle: "Trouble Ticket #4658",
    exhibit: "POST message: <span class='hl'>CMOS checksum error, defaults loaded</span>\nClock: <span class='hl'>resets to a past date after every shutdown</span>\nBIOS settings: <span class='warnc'>boot order reverts to defaults each time</span>\nSystem age: <span class='dim'>~6 years, never serviced</span>\nWindows: <span class='ok'>boots and runs normally</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Settings and clock lost across power-off",
        options: [
          "Dead/weak CMOS (motherboard) battery",
          "Failing SSD",
          "Corrupt Windows installation",
          "Bad RAM"
        ],
        answer: 0,
        explain: "Lost clock and BIOS settings after every power-off, with a checksum error, indicate a depleted CMOS coin-cell battery (commonly a CR2032)."
      },
      {
        label: "Best diagnostic action",
        hint: "Measure the cell",
        options: [
          "Run chkdsk",
          "Measure the CR2032 voltage with a multimeter (should be near 3.0V)",
          "Reinstall Windows",
          "Run a memory test"
        ],
        answer: 1,
        explain: "Measuring the coin cell confirms it is depleted; a healthy CR2032 reads near 3.0V, a dead one significantly lower."
      },
      {
        label: "Correct fix",
        hint: "Cheap, specific replacement",
        options: [
          "Replace the CMOS battery (CR2032) and reconfigure BIOS settings",
          "Replace the motherboard",
          "Replace the PSU",
          "Reset Windows time zone only"
        ],
        answer: 0,
        explain: "Replace the coin cell, then re-enter correct time and BIOS settings so they persist across power cycles."
      },
      {
        label: "Final verification",
        hint: "Confirm persistence, not just a single boot",
        options: [
          "Assume fixed after one boot",
          "Power off fully, restart, and confirm the clock and settings are retained",
          "Disable the POST screen",
          "Set the OS to sync time only"
        ],
        answer: 1,
        explain: "Verify by fully powering down and rebooting to confirm the time and BIOS settings persist, proving the new battery holds."
      }
    ],
    summary: "CMOS checksum errors with a resetting clock mean a dead coin-cell. Measure it, replace the CR2032, reconfigure BIOS, then verify settings persist."
  },
  {
    id: "PBQ-135",
    format: 5,
    domain: 5,
    title: "Overheating Laptop and Throttling",
    brief: "A laptop runs hot, the fan is loud, and performance drops sharply after a few minutes. The chassis is uncomfortably warm near the vents.",
    exhibitTitle: "Trouble Ticket #4672",
    exhibit: "Performance: <span class='warnc'>fast for ~3 min, then sluggish</span>\nCPU temp: <span class='hl'>reaches 95C, then clocks drop</span>\nFan: <span class='warnc'>loud but airflow from vent feels weak</span>\nVents: <span class='hl'>visibly clogged with dust/lint</span>\nUsage: <span class='dim'>often used on a bed/soft surface</span>",
    fields: [
      {
        label: "Most likely cause",
        hint: "Hot then slow, weak airflow",
        options: [
          "Thermal throttling due to blocked airflow / dust-clogged vents",
          "Failing SSD",
          "Bad Wi-Fi card",
          "Corrupt OS"
        ],
        answer: 0,
        explain: "Performance dropping as the CPU hits 95C is thermal throttling; weak airflow and clogged vents point to blocked cooling and poor heat dissipation."
      },
      {
        label: "Best diagnostic action",
        hint: "Correlate temperature with the slowdown",
        options: [
          "Run a disk benchmark",
          "Monitor CPU temperature and clock speed while reproducing the load",
          "Reinstall the OS",
          "Test the battery health only"
        ],
        answer: 1,
        explain: "Watching temperature and clock speed together while loading the CPU confirms it throttles precisely when it overheats."
      },
      {
        label: "Correct fix",
        hint: "Restore cooling at the source",
        options: [
          "Disable the CPU turbo permanently in all cases",
          "Clean the vents/fan of dust and ensure unobstructed airflow (and reapply paste if needed)",
          "Lower the screen brightness",
          "Replace the SSD"
        ],
        answer: 1,
        explain: "Clearing the dust-clogged vents and fan, and reapplying thermal paste if older, restores cooling so the CPU no longer throttles."
      },
      {
        label: "User guidance to document",
        hint: "Prevent recurrence",
        options: [
          "Advise using the laptop on hard, flat surfaces (or a cooling pad) to keep vents clear",
          "Tell the user to never run demanding apps",
          "Recommend disabling the fan",
          "Suggest covering the vents to reduce noise"
        ],
        answer: 0,
        explain: "Soft surfaces block intake vents; advise hard flat surfaces or a cooling pad, and document the cleaning and guidance for future reference."
      }
    ],
    summary: "A throttling laptop is overheating from blocked airflow. Confirm with temp/clock monitoring, clean the vents and fan, and advise hard-surface use to prevent recurrence."
  }
);
APLUS1.pbqs.push(
  {
    id: "PBQ-136",
    format: 5,
    domain: 5,
    title: "Laptop Display Flicker",
    brief: "A user reports the laptop screen <span class='warnc'>flickers and dims</span> intermittently, mostly when the lid is moved. The external monitor works perfectly.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4412 - Laptop display\n  <span class='warnc'>Flicker increases when lid hinge is moved</span>\n  <span class='ok'>External HDMI monitor: flawless</span>\n  <span class='cy'>Backlight dims randomly, image otherwise intact</span>\n<span class='dim'>No dropped pixels, no cracks</span>",
    fields: [
      { label: "Most likely cause", hint: "Movement-dependent, internal only", options: ["Faulty GPU", "Loose/damaged display cable (LVDS/eDP) at the hinge", "Dead pixels", "Bad external monitor"], answer: 1, explain: "Flicker that changes with hinge movement and works fine externally points to a damaged or loose internal display cable routed through the hinge." },
      { label: "Best diagnostic step", hint: "Isolate panel vs cable vs GPU", options: ["Replace the motherboard", "Flex the lid slowly to reproduce while watching the panel", "Run a disk check", "Reinstall the OS"], answer: 1, explain: "Reproducing the flicker by flexing the lid confirms a mechanical cable fault at the hinge rather than the GPU or panel." },
      { label: "Correct fix", hint: "Address the cable", options: ["Replace the display ribbon cable", "Replace the battery", "Increase brightness", "Replace the RAM"], answer: 0, explain: "Replacing the eDP/LVDS display cable resolves movement-induced flicker; the GPU and panel are proven good by the external output." }
    ],
    summary: "External output good plus movement-dependent flicker equals an internal display cable fault, not a GPU or panel failure."
  },
  {
    id: "PBQ-137",
    format: 5,
    domain: 5,
    title: "Stuck Dead Pixels",
    brief: "A monitor shows a cluster of <span class='warnc'>permanently black dots</span> in one region that never change regardless of the image displayed.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4419 - LCD monitor\n  <span class='warnc'>Small black dots, fixed location</span>\n  <span class='ok'>Rest of panel: correct color and brightness</span>\n  <span class='cy'>Dots stay black on white, red, green test patterns</span>\n<span class='dim'>No flicker, no dimming</span>",
    fields: [
      { label: "Most likely cause", hint: "Always black on all colors", options: ["Burn-in", "Dead (always-off) pixels", "Backlight failure", "Loose video cable"], answer: 1, explain: "Pixels that remain black across every test color are dead (permanently off) subpixels, a panel defect." },
      { label: "Best diagnostic step", hint: "Confirm vs stuck pixel", options: ["Adjust gamma", "Run a full-screen color cycle test", "Replace the GPU", "Degauss the panel"], answer: 1, explain: "A color-cycle test distinguishes dead pixels (always black) from stuck pixels (always one color), confirming the defect type." },
      { label: "Correct resolution", hint: "Dead pixels are not repairable", options: ["Pixel-massage the area", "Replace the panel/monitor if within tolerance policy", "Update the display driver", "Raise the refresh rate"], answer: 1, explain: "Dead pixels cannot be revived; replacement per the manufacturer dead-pixel policy is the correct resolution. Massaging only helps stuck pixels." }
    ],
    summary: "Pixels black on every color are dead and non-repairable; replace the panel under warranty policy."
  },
  {
    id: "PBQ-138",
    format: 5,
    domain: 5,
    title: "Projector Shuts Down",
    brief: "A conference-room projector <span class='warnc'>shuts off after about 20 minutes</span> and the fan runs loud before it dies.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4421 - DLP projector\n  <span class='warnc'>Auto shutdown after ~20 min</span>\n  <span class='warnc'>Fan loud; exhaust very hot</span>\n  <span class='cy'>Intake vent visibly clogged with dust</span>\n<span class='dim'>Image and bulb otherwise normal before shutoff</span>",
    fields: [
      { label: "Most likely cause", hint: "Time-based, heat-related", options: ["Failing lamp", "Overheating from blocked airflow", "Bad HDMI cable", "Incorrect resolution"], answer: 1, explain: "A timed shutdown with a loud fan, hot exhaust, and a clogged intake is thermal protection tripping due to restricted airflow." },
      { label: "Best diagnostic step", hint: "Confirm thermal trip", options: ["Swap the video source", "Check airflow/vents and the thermal-shutdown indicator", "Reseat RAM", "Run a network ping"], answer: 1, explain: "Inspecting the vents and the over-temp indicator confirms the shutdown is thermal rather than a lamp or signal fault." },
      { label: "Correct fix", hint: "Restore cooling", options: ["Clean the air filter/vents and ensure clearance", "Replace the lamp immediately", "Lower the brightness only", "Replace the projector"], answer: 0, explain: "Cleaning the filter and intake vents restores airflow and stops the thermal shutdowns; the lamp is not the cause." }
    ],
    summary: "A projector that shuts off on a heat timer with clogged vents is overheating; clean airflow paths to fix it."
  },
  {
    id: "PBQ-139",
    format: 5,
    domain: 5,
    title: "Swollen Phone Battery",
    brief: "A user brings in a phone whose <span class='warnc'>back cover is bulging</span> and the screen is lifting away from the frame.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4430 - Smartphone SAFETY\n  <span class='hl'>Battery swollen; case bulging, screen lifting</span>\n  <span class='warnc'>Device warm even when idle</span>\n  <span class='cy'>User asks to keep charging it for the day</span>\n<span class='dim'>No drops or liquid exposure reported</span>",
    fields: [
      { label: "Primary hazard", hint: "Lithium-ion swelling", options: ["Cosmetic only", "Fire/rupture risk from a swollen lithium-ion cell", "Software glitch", "Screen calibration"], answer: 1, explain: "A swollen lithium-ion battery is building internal pressure and gas; it poses a fire and rupture hazard, not a cosmetic issue." },
      { label: "Correct immediate action", hint: "Safety first", options: ["Keep charging as the user asked", "Stop using/charging it and isolate the device for safe handling", "Puncture the cell to release pressure", "Press the bulge flat"], answer: 1, explain: "Stop charging and using the device and isolate it. Never puncture or compress a swollen cell; that can cause fire or toxic release." },
      { label: "Correct resolution", hint: "Dispose and replace properly", options: ["Replace the battery with an approved unit and recycle the old one per hazmat policy", "Reset the phone to factory", "Update the OS", "Charge slowly overnight"], answer: 0, explain: "Replace the swollen battery with an approved part and dispose of the old cell through proper hazmat/e-waste recycling." }
    ],
    summary: "A swollen lithium-ion battery is a fire hazard: stop charging, never puncture, isolate, then replace and recycle safely."
  },
  {
    id: "PBQ-140",
    format: 5,
    domain: 5,
    title: "Phone Will Not Charge",
    brief: "A phone <span class='warnc'>charges only intermittently</span> and the cable must be wiggled to start charging.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4435 - Smartphone charging\n  <span class='warnc'>Charges only when cable is wiggled</span>\n  <span class='ok'>Same cable charges another phone reliably</span>\n  <span class='cy'>Port has visible lint/debris</span>\n<span class='dim'>Battery health reported normal</span>",
    fields: [
      { label: "Most likely cause", hint: "Cable proven good elsewhere", options: ["Dead battery", "Debris/damage in the charging port", "Corrupt firmware", "Bad charger only"], answer: 1, explain: "Since the same cable charges another phone, the fault is the device port. Lint or damage prevents a solid connection." },
      { label: "Best diagnostic step", hint: "Inspect before swapping parts", options: ["Factory reset the phone", "Inspect and gently clean the charging port", "Replace the logic board", "Reinstall apps"], answer: 1, explain: "Inspecting and gently cleaning the port (compressed air/plastic pick) confirms and often resolves debris-related charging faults." },
      { label: "Correct next step if cleaning fails", hint: "Hardware path", options: ["Replace the screen", "Replace the charging port/flex assembly", "Increase screen timeout", "Disable fast charging"], answer: 1, explain: "If cleaning does not restore reliable charging, the port/flex connector is worn and should be replaced." }
    ],
    summary: "A known-good cable that works on another phone points to a dirty or worn charging port; clean it, then replace if needed."
  },
  {
    id: "PBQ-141",
    format: 5,
    domain: 5,
    title: "Weak Mobile Signal Indoors",
    brief: "A user gets <span class='warnc'>dropped calls and slow data</span> only inside one steel-framed building; outside the signal is full.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4440 - Cellular reception\n  <span class='warnc'>1 bar / no service inside the warehouse</span>\n  <span class='ok'>Full bars outdoors and in other buildings</span>\n  <span class='cy'>Structure has thick steel/concrete walls</span>\n<span class='dim'>Other carriers' phones also weak inside</span>",
    fields: [
      { label: "Most likely cause", hint: "Location-specific, all carriers", options: ["Defective antenna in the phone", "Signal attenuation from building materials (poor coverage)", "SIM failure", "Airplane mode"], answer: 1, explain: "Signal is full outdoors and weak only inside a steel/concrete structure for multiple carriers, indicating attenuation, not a phone fault." },
      { label: "Best diagnostic step", hint: "Quantify the signal", options: ["Wipe the cache", "Check signal strength (dBm) inside vs outside", "Reflash the modem", "Replace the screen"], answer: 1, explain: "Comparing measured signal strength (dBm) inside versus outside confirms the loss is environmental coverage, not a device issue." },
      { label: "Correct remediation", hint: "Bring signal in", options: ["Buy a new phone", "Install a cellular signal booster / use Wi-Fi calling", "Disable mobile data", "Factory reset"], answer: 1, explain: "A signal booster or Wi-Fi calling overcomes building attenuation; replacing the phone would not change the coverage." }
    ],
    summary: "Weak signal only inside a steel building affecting all carriers is attenuation; use a booster or Wi-Fi calling."
  },
  {
    id: "PBQ-142",
    format: 5,
    domain: 5,
    title: "Phone Overheats During Use",
    brief: "A phone becomes <span class='warnc'>very hot and throttles</span> during navigation while charging in a hot car mount.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4444 - Thermal throttling\n  <span class='warnc'>Hot to touch; performance drops, screen dims</span>\n  <span class='cy'>GPS + charging + direct sun on dashboard</span>\n  <span class='ok'>Cools and recovers fully when removed from sun</span>\n<span class='dim'>Battery is NOT swollen</span>",
    fields: [
      { label: "Most likely cause", hint: "Heavy load plus external heat", options: ["Failing battery cell", "Combined heat load and ambient heat causing thermal throttling", "Malware", "Cracked screen"], answer: 1, explain: "GPS plus charging plus direct sun is a high heat load; the phone throttles to protect itself and recovers when cooled, a normal thermal response." },
      { label: "Best diagnostic step", hint: "Confirm environmental cause", options: ["Replace the battery", "Remove from heat/charging and see if it cools and recovers", "Reflash firmware", "Run a virus scan"], answer: 1, explain: "If removing the heat and charging load lets the phone cool and perform normally, the cause is environmental, not hardware failure." },
      { label: "Correct guidance", hint: "Reduce heat load", options: ["Keep it in the sun and charge harder", "Avoid charging in direct sun and improve ventilation/mount placement", "Disable GPS permanently", "Replace the phone"], answer: 1, explain: "Reducing the heat load (shade, ventilation, not charging in direct sun) prevents throttling; no hardware replacement is needed." }
    ],
    summary: "Throttling under heavy load plus direct sun that recovers when cooled is normal thermal protection, not a hardware fault."
  },
  {
    id: "PBQ-143",
    format: 5,
    domain: 5,
    title: "Faded Laser Prints",
    brief: "A laser printer produces output that is <span class='warnc'>uniformly faded and light</span> across the entire page.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4451 - Laser printer\n  <span class='warnc'>All prints faint/washed out, edge to edge</span>\n  <span class='cy'>Toner low warning appeared recently</span>\n  <span class='ok'>No streaks, no smearing, alignment correct</span>\n<span class='dim'>Rocking the cartridge briefly improves output</span>",
    fields: [
      { label: "Most likely cause", hint: "Uniform fading", options: ["Dirty fuser", "Low/depleted toner or low density setting", "Bad network cable", "Corrupt driver"], answer: 1, explain: "Edge-to-edge uniform fading that improves when the cartridge is rocked indicates low toner; redistributing powder is a temporary boost." },
      { label: "Best diagnostic step", hint: "Confirm toner level", options: ["Replace the fuser", "Check toner level/print-density setting and rock or weigh the cartridge", "Replace the formatter board", "Reinstall the OS"], answer: 1, explain: "Verifying the toner level and density setting confirms low toner before any parts are replaced." },
      { label: "Correct fix", hint: "Restore density", options: ["Replace the toner cartridge (and verify density setting)", "Clean the print heads", "Replace the drum belt", "Lower the resolution"], answer: 0, explain: "Replacing the toner cartridge restores full density; laser printers have no print heads to clean." }
    ],
    summary: "Uniformly faded laser output that improves when the cartridge is rocked is low toner; replace the cartridge."
  },
  {
    id: "PBQ-144",
    format: 5,
    domain: 5,
    title: "Ghosting and Repeating Images",
    brief: "A laser printer prints a <span class='warnc'>faint repeated copy</span> of the image a fixed distance below the original.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4456 - Laser printer\n  <span class='warnc'>Ghost image repeats at a regular interval down the page</span>\n  <span class='cy'>Spacing equals the drum circumference</span>\n  <span class='ok'>Toner level normal; paper correct</span>\n<span class='dim'>Worsened after many high-coverage jobs</span>",
    fields: [
      { label: "Most likely cause", hint: "Repeats at drum interval", options: ["Low toner", "Failing imaging drum / worn fuser leaving residual charge", "Wrong paper size", "Bad USB cable"], answer: 1, explain: "A ghost repeating exactly at the drum's circumference indicates the drum (or fuser) is failing to fully clear the previous image's charge/toner." },
      { label: "Best diagnostic step", hint: "Match the interval", options: ["Replace RAM", "Measure the repeat interval against drum circumference", "Run a ping test", "Reset the spooler"], answer: 1, explain: "Matching the ghost spacing to the drum circumference confirms the imaging drum as the source of the repeating defect." },
      { label: "Correct fix", hint: "Replace the worn imaging part", options: ["Replace the imaging drum (or fuser) assembly", "Add more toner", "Replace the print driver", "Clean the rollers with water"], answer: 0, explain: "Replacing the worn drum (or fuser) eliminates ghosting; the interval pinpoints the imaging assembly, not toner." }
    ],
    summary: "A ghost image repeating at the drum circumference means a worn imaging drum or fuser; replace the assembly."
  },
  {
    id: "PBQ-145",
    format: 5,
    domain: 5,
    title: "Vertical Lines on Every Page",
    brief: "A laser printer adds a <span class='warnc'>solid vertical black line</span> in the same position on every printed page.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4460 - Laser printer\n  <span class='warnc'>Same vertical line down every page</span>\n  <span class='cy'>Line position is fixed regardless of content</span>\n  <span class='ok'>Toner level good; no fading</span>\n<span class='dim'>New cartridge did not help</span>",
    fields: [
      { label: "Most likely cause", hint: "Fixed line, cartridge swap no help", options: ["Low toner", "Scratched drum or contaminated fuser/transfer path", "Wrong driver", "Network outage"], answer: 1, explain: "A consistent vertical line not fixed by a new cartridge points to a scratch on the drum surface or debris in the fuser/transfer path." },
      { label: "Best diagnostic step", hint: "Localize the defect", options: ["Reinstall the OS", "Inspect drum surface and fuser/rollers for a scratch or debris", "Run nslookup", "Replace the motherboard"], answer: 1, explain: "Inspecting the drum and fuser rollers locates the scratch or contamination causing the fixed line." },
      { label: "Correct fix", hint: "Replace damaged part", options: ["Replace the scratched drum or clean/replace the fuser", "Add toner", "Lower print density", "Change paper brand"], answer: 0, explain: "Replacing the scratched drum or clearing/replacing the fuser removes the line; toner and density are unrelated." }
    ],
    summary: "A fixed vertical line unaffected by a new cartridge is a scratched drum or dirty fuser; inspect and replace the damaged part."
  },
  {
    id: "PBQ-146",
    format: 5,
    domain: 5,
    title: "Garbled Print Output",
    brief: "A printer suddenly produces <span class='warnc'>pages of random characters and symbols</span> instead of the document.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4465 - Printer garbage\n  <span class='warnc'>Pages of random ASCII/symbols, partial words</span>\n  <span class='cy'>Started after a driver/OS change</span>\n  <span class='ok'>Self-test/config page prints cleanly</span>\n<span class='dim'>Other users on the correct driver print fine</span>",
    fields: [
      { label: "Most likely cause", hint: "Self-test fine, others fine", options: ["Hardware failure of the print engine", "Wrong or corrupt print driver / language mismatch", "Empty toner", "Paper jam"], answer: 1, explain: "A clean self-test plus fine output for users on the correct driver shows the engine is healthy; the garbage is a wrong/corrupt driver or PDL mismatch." },
      { label: "Best diagnostic step", hint: "Prove the engine is good", options: ["Replace the formatter", "Print a self-test/config page directly from the printer", "Replace the cable first", "Reseat the toner"], answer: 1, explain: "A clean printer-generated self-test page proves the hardware is fine and isolates the fault to the host driver/spooler." },
      { label: "Correct fix", hint: "Fix the host side", options: ["Reinstall the correct print driver (and clear the spooler)", "Replace the drum", "Buy a new printer", "Change the toner"], answer: 0, explain: "Reinstalling the correct driver and clearing the spooler resolves garbled output caused by a driver/language mismatch." }
    ],
    summary: "Garbage output with a clean self-test is a driver or PDL problem on the host; reinstall the correct driver and clear the spooler."
  },
  {
    id: "PBQ-147",
    format: 5,
    domain: 5,
    title: "No Network Connectivity",
    brief: "A wired desktop has <span class='warnc'>no network access</span> and shows an address starting with 169.254.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4470 - No connectivity\n  <span class='hl'>IPv4 address: 169.254.18.77 (APIPA)</span>\n  <span class='warnc'>Cannot reach gateway or internet</span>\n  <span class='ok'>NIC link light on; other PCs on the switch are online</span>\n<span class='dim'>DHCP server is reachable from those PCs</span>",
    fields: [
      { label: "Most likely cause", hint: "169.254.x.x meaning", options: ["Wrong DNS server", "Client failed to obtain a DHCP lease (APIPA self-assigned)", "Firewall blocking port 443", "Bad monitor cable"], answer: 1, explain: "A 169.254.x.x APIPA address means the client could not reach a DHCP server to get a lease, so it self-assigned." },
      { label: "Correct command/tool", hint: "Renew the lease", options: ["<code class='mono'>nslookup</code>", "<code class='mono'>ipconfig /release</code> then <code class='mono'>ipconfig /renew</code>", "<code class='mono'>ping 8.8.8.8</code>", "Wi-Fi analyzer"], answer: 1, explain: "ipconfig /release and /renew forces the client to request a new DHCP lease, the direct test/fix for an APIPA condition." },
      { label: "Correct next step if renew fails", hint: "Path to DHCP", options: ["Replace the GPU", "Check the cable/port/VLAN path to the DHCP server", "Disable IPv6 only", "Reinstall the browser"], answer: 1, explain: "If renew still yields APIPA, the DHCP request is not reaching the server; verify the cable, switch port, and VLAN path." }
    ],
    summary: "A 169.254 APIPA address means no DHCP lease; renew with ipconfig, then check the path to the DHCP server."
  },
  {
    id: "PBQ-148",
    format: 5,
    domain: 5,
    title: "Cannot Resolve Hostnames",
    brief: "A user can reach sites by <span class='ok'>IP address</span> but gets errors when using <span class='warnc'>domain names</span>.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4475 - Name resolution\n  <span class='ok'>ping 8.8.8.8 succeeds</span>\n  <span class='hl'>ping www.example.com fails: name not resolved</span>\n  <span class='warnc'>Browser shows DNS errors on all sites</span>\n<span class='dim'>IP connectivity and gateway are fine</span>",
    fields: [
      { label: "Most likely cause", hint: "IP works, names fail", options: ["Cable fault", "DNS resolution failure (bad/unreachable DNS server)", "DHCP not assigning an IP", "Bad NIC driver"], answer: 1, explain: "Reaching hosts by IP but not by name isolates the problem to DNS; the DNS server is wrong, down, or unreachable." },
      { label: "Correct diagnostic tool", hint: "Query DNS directly", options: ["Cable tester", "<code class='mono'>nslookup www.example.com</code>", "<code class='mono'>ipconfig /release</code>", "Wi-Fi analyzer"], answer: 1, explain: "nslookup queries the DNS server directly, confirming whether name resolution is failing and which server is configured." },
      { label: "Correct fix", hint: "Point at a working resolver", options: ["Set a valid/working DNS server (and flush the DNS cache)", "Replace the NIC", "Renew the DHCP lease only", "Reseat RAM"], answer: 0, explain: "Configuring a working DNS server and flushing the resolver cache restores name resolution; IP connectivity was already fine." }
    ],
    summary: "Reaching hosts by IP but not by name is a DNS failure; confirm with nslookup and set a working DNS server."
  },
  {
    id: "PBQ-149",
    format: 5,
    domain: 5,
    title: "Intermittent Wi-Fi Drops",
    brief: "Laptops in one area suffer <span class='warnc'>frequent Wi-Fi drops and slow speeds</span>, worst at midday when the office is full.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4480 - Wi-Fi instability\n  <span class='warnc'>Drops and high latency, worst when many APs/devices active</span>\n  <span class='cy'>Several neighboring SSIDs on 2.4 GHz channel 6</span>\n  <span class='ok'>Wired clients in the same area are stable</span>\n<span class='dim'>Signal strength reads strong (-50 dBm)</span>",
    fields: [
      { label: "Most likely cause", hint: "Strong signal but still drops", options: ["Failing router hardware", "Co-channel / RF interference and congestion on 2.4 GHz", "DNS misconfiguration", "Bad Ethernet cable"], answer: 1, explain: "Strong signal yet drops worsening with density and overlapping SSIDs on channel 6 indicates RF interference/congestion, not a weak signal." },
      { label: "Correct diagnostic tool", hint: "See the RF channels", options: ["<code class='mono'>nslookup</code>", "Wi-Fi analyzer (channel/utilization view)", "Cable tester", "<code class='mono'>ipconfig</code>"], answer: 1, explain: "A Wi-Fi analyzer reveals channel overlap and utilization, confirming co-channel interference as the cause." },
      { label: "Correct fix", hint: "Reduce overlap", options: ["Move APs to a non-overlapping channel (1/6/11) or use 5 GHz", "Replace the laptop NICs", "Shorten DHCP lease time", "Disable the firewall"], answer: 0, explain: "Selecting a clear non-overlapping channel or shifting clients to 5 GHz reduces interference and stabilizes the connection." }
    ],
    summary: "Strong-signal Wi-Fi drops that worsen with density are RF congestion; use a Wi-Fi analyzer and move to a clear channel or 5 GHz."
  },
  {
    id: "PBQ-150",
    format: 5,
    domain: 5,
    title: "High Latency on One Link",
    brief: "Users report <span class='warnc'>laggy connections and slow file transfers</span> over one Ethernet run, though it stays connected.",
    exhibitTitle: "symptoms",
    exhibit: "Ticket #4485 - Slow link\n  <span class='warnc'>Negotiated at 10 Mbps half-duplex; many CRC errors</span>\n  <span class='cy'>Cable run is long and routed near fluorescent ballasts</span>\n  <span class='ok'>Same port at gigabit with a known-good patch cable</span>\n<span class='dim'>ping shows high latency and packet loss</span>",
    fields: [
      { label: "Most likely cause", hint: "Speed drop plus CRC errors", options: ["DNS failure", "Damaged/marginal cabling or EMI causing errors and low-speed renegotiation", "DHCP exhaustion", "Bad monitor"], answer: 1, explain: "Dropping to 10 Mbps half-duplex with CRC errors on a long run near EMI sources indicates a damaged or interference-affected cable, not a logical fault." },
      { label: "Correct diagnostic tool", hint: "Test the physical run", options: ["<code class='mono'>nslookup</code>", "Cable tester / certifier (wiremap and length)", "Wi-Fi analyzer", "<code class='mono'>ipconfig /renew</code>"], answer: 1, explain: "A cable tester/certifier checks wiremap, length, and faults, confirming the physical cabling as the source of errors." },
      { label: "Correct fix", hint: "Address the physical layer", options: ["Re-run/replace the cable away from EMI (or shorten under 100 m)", "Change the DNS server", "Reinstall the OS", "Lower the screen resolution"], answer: 0, explain: "Replacing or rerouting the cable away from EMI and within the 100 m limit restores full gigabit speed and clears CRC errors." }
    ],
    summary: "A link that renegotiates to 10 Mbps with CRC errors is a physical cabling/EMI problem; test with a cable tester and re-run the cable."
  }
);
/* ============================================================================
   a+ core 1  ::  quizEngine.js  —  ENGINE  (assessment + PBQ runtime)
   This block is appended after the question bank and PBQ database above.
   It powers three assessment modes (domain quiz, quick quiz, timed mock) plus
   the performance-based-question simulator, rendering each into the shared
   #view container via window.APP.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.APLUS1;
  /* app.js loads AFTER this file, so window.APP isn't ready at load time.
     Resolve it lazily: every public entry point calls ready() first, which
     binds A and el before any rendering helper runs. */
  var A, el;
  function ready() { A = window.APP; el = A.el; }

  /* ----- sampling helpers (Fisher–Yates) ----- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }
  function byDomain(d) { return S.questions.filter(function (q) { return q.domain === d; }); }
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  /* per-question option order is randomized so the answer index isn't a tell. */
  function prepare(q) {
    var order = shuffle(q.options.map(function (o, i) { return i; }));
    return {
      ref: q,
      opts: order.map(function (i) { return q.options[i]; }),
      answer: order.indexOf(q.answer)
    };
  }

  /* domain stats accumulator used by results + analytics */
  function blankStats() { var o = {}; (S.domainMeta || []).forEach(function (d) { o[d.id] = { correct: 0, total: 0 }; }); return o; }

  /* ===========================================================================
     ADAPTIVE / MISSED-QUESTION TRACKING
     Persists two things across every quiz/mock session (localStorage via APP):
       aplus1.objstats.v1 = { "1.2": {c, n}, ... }   per-objective accuracy
       aplus1.missed.v1   = { "D4-071": 1, ... }      questions answered wrong
     The adaptive set weights selection toward weak/unseen objectives (and prior
     misses); the missed queue re-serves only wrong questions until you get them
     right. Helpers read window.APP directly so the dashboard can call them
     before any quiz entry point binds A.
     =========================================================================== */
  var QS = {
    getObj: function () { return window.APP.store.get("objstats.v1", {}) || {}; },
    getMissed: function () { return window.APP.store.get("missed.v1", {}) || {}; },
    /* fold a graded set into the persistent stores. items = prepared array
       (each has .ref and .answer); picks = chosen indices into shuffled opts. */
    record: function (items, picks) {
      var obj = this.getObj(), missed = this.getMissed();
      items.forEach(function (it, i) {
        var q = it.ref, ok = picks[i] === it.answer;
        var o = obj[q.obj] || { c: 0, n: 0 }; o.n++; if (ok) o.c++; obj[q.obj] = o;
        if (ok) delete missed[q.id]; else missed[q.id] = 1;
      });
      window.APP.store.set("objstats.v1", obj);
      window.APP.store.set("missed.v1", missed);
    },
    missedCount: function () { return Object.keys(this.getMissed()).length; },
    /* weakest domain by accumulated objective accuracy (>= 3 attempts) */
    weakestDomain: function () {
      var obj = this.getObj(), dom = {};
      for (var k in obj) { var d = k[0]; dom[d] = dom[d] || { c: 0, n: 0 }; dom[d].c += obj[k].c; dom[d].n += obj[k].n; }
      var worst = null, worstAcc = 2;
      for (var dd in dom) { if (dom[dd].n >= 3) { var a = dom[dd].c / dom[dd].n; if (a < worstAcc) { worstAcc = a; worst = dd; } } }
      return worst ? ("Domain " + worst) : null;
    }
  };

  /* per-question weight: weak/unseen objectives and prior misses score higher */
  function adaptiveWeight(q, obj, missed) {
    var o = obj[q.obj], w;
    if (!o || !o.n) w = 2.2;                 // unseen objective → encourage coverage
    else w = 1 + 2 * (1 - o.c / o.n);        // weak objective weighted up to 3x
    if (missed[q.id]) w += 1.5;              // a prior miss gets an extra boost
    return w;
  }
  /* weighted sampling without replacement */
  function weightedSample(pool, n, wf) {
    var items = pool.map(function (q) { return { q: q, w: Math.max(0.01, wf(q)) }; });
    var out = [];
    n = Math.min(n, items.length);
    for (var k = 0; k < n; k++) {
      var total = items.reduce(function (a, x) { return a + x.w; }, 0);
      var r = Math.random() * total, acc = 0, idx = 0;
      for (var i = 0; i < items.length; i++) { acc += items[i].w; if (r <= acc) { idx = i; break; } }
      out.push(items[idx].q); items.splice(idx, 1);
    }
    return out;
  }
  function adaptiveSet(n) {
    var obj = QS.getObj(), missed = QS.getMissed();
    return weightedSample(S.questions, n, function (q) { return adaptiveWeight(q, obj, missed); });
  }

  /* ===========================================================================
     LINEAR QUIZ  (domain quiz + quick quiz): immediate feedback per question
     =========================================================================== */
  function runLinearQuiz(opts) {
    ready();
    var items = opts.items.map(prepare);
    var idx = 0, picks = new Array(items.length).fill(null);

    A.open({
      tag: opts.tag,
      render: function (host) {
        var pane = el("div");
        host.appendChild(A.crumb(opts.title, { onBack: function () {
          A.confirm("Leave quiz?", "Your progress on this quiz will not be saved.", "Leave", function () { A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: opts.title }), el("span.sub", { text: opts.sub })]));
        host.appendChild(pane);
        draw(pane);
      }
    });

    function draw(pane) {
      pane.innerHTML = "";
      var wrap = el("div.quizwrap");
      var bar = el("div.qmeta", null, [
        el("div.progressbar", null, el("i", { style: "width:" + (idx / items.length * 100) + "%" })),
        el("div.qcount", { text: "Question " + (idx + 1) + " of " + items.length })
      ]);
      wrap.appendChild(bar);

      var it = items[idx], q = it.ref, answered = picks[idx] != null;
      var dc = "d" + q.domain;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge." + dc, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Objective " + q.obj }),
        el("span.qobj", { text: "· " + (q.diff || "medium") })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));

      it.opts.forEach(function (text, i) {
        var cls = "opt";
        if (answered) {
          if (i === it.answer) cls += " correct";
          else if (i === picks[idx]) cls += " wrong";
        }
        var b = el("button." + cls.replace(/ /g, "."), { type: "button", disabled: answered ? "disabled" : null });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        if (answered && i === it.answer) b.appendChild(el("span.tick", { text: "✓" }));
        if (answered && i === picks[idx] && i !== it.answer) b.appendChild(el("span.tick", { text: "✗" }));
        if (!answered) b.addEventListener("click", function () { picks[idx] = i; draw(pane); });
        qc.appendChild(b);
      });

      if (answered) {
        var correct = picks[idx] === it.answer;
        qc.appendChild(el("div.rationale" + (correct ? "" : ".bad"), null, [
          el("span.lbl", { text: correct ? "Correct" : "Not quite" }),
          el("span", { html: q.explain })
        ]));
      }

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(pane); } } }),
        answered
          ? el("button.btn.primary", { text: idx === items.length - 1 ? "See results →" : "Next question →", onclick: function () { if (idx === items.length - 1) finish(); else { idx++; draw(pane); } } })
          : el("span.note", { text: "Select an answer to continue." })
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      pane.appendChild(wrap);
    }

    function finish() {
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: opts.mode, modeLabel: opts.modeLabel, detail: opts.detail, pct: pct, correct: correct, total: items.length, domainStats: stats });
      showResults({
        tag: opts.tag, title: opts.title, mode: opts.mode,
        correct: correct, total: items.length, pct: pct, stats: stats, wrongList: wrongList,
        retry: function () { opts.retry(); }
      });
    }
  }

  /* ===========================================================================
     RESULTS DASHBOARD (shared by quizzes + mock)
     =========================================================================== */
  function showResults(r) {
    A.open({
      tag: "Results", render: function (host) {
        host.appendChild(A.crumb("Results", { onBack: function () { A.dashboard(); A.renderDashboard(); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: r.title + " — Results" })]));
        var box = el("div.results");

        var isMock = r.mode === "mock";
        var pass = isMock ? r.scaled >= ((S.exam && S.exam.passing) || 750) : r.pct >= 70;
        var ringcol = pass ? "var(--low)" : (r.pct >= 50 ? "var(--amber)" : "var(--crit)");
        var hero = el("div.scorehero");
        var ring = el("div.scorering", { style: "--pct:" + r.pct + ";--ringcol:" + ringcol });
        ring.appendChild(el("div.inner", null, [el("div.pct", { text: r.pct + "%" }), el("div.lab", { text: r.correct + "/" + r.total })]));
        hero.appendChild(ring);
        hero.appendChild(el("div.verdict." + (pass ? "pass" : "fail"), { text: pass ? (isMock ? "Likely Pass" : "Strong") : (isMock ? "Not Yet Passing" : "Keep Studying") }));
        if (isMock) hero.appendChild(el("div.scaled", { html: "Scaled score <b style='color:var(--ink)'>" + r.scaled + "</b> / 900 &nbsp;·&nbsp; passing is <b style='color:var(--ink)'>" + ((S.exam && S.exam.passing) || 750) + "</b>" }));
        else hero.appendChild(el("div.scaled", { text: r.correct + " of " + r.total + " correct" }));
        box.appendChild(hero);

        /* per-domain bars */
        box.appendChild(el("div.secthead", { text: "By domain" }));
        var bars = el("div.dombars");
        (S.domainMeta || []).forEach(function (d) {
          var st = r.stats[d.id]; if (!st || !st.total) return;
          var p = Math.round(st.correct / st.total * 100);
          bars.appendChild(el("div.dombar", null, [
            el("div.name", { text: "D" + d.id + " · " + d.title }),
            el("div.track", null, el("i", { style: "width:" + p + "%;background:var(--d" + d.id + ")" })),
            el("div.pct", { text: st.correct + "/" + st.total })
          ]));
        });
        box.appendChild(bars);

        /* review of missed items, mapped to objectives */
        box.appendChild(el("div.secthead", { text: r.wrongList.length ? "Review missed questions (" + r.wrongList.length + ")" : "Review" }));
        if (!r.wrongList.length) box.appendChild(el("div.empty", { text: "Perfect run — nothing to review. 🎯" }));
        var rl = el("div.reviewlist");
        r.wrongList.forEach(function (w) {
          var q = w.it.ref;
          var yourText = w.pick == null ? "(left blank)" : w.it.opts[w.pick];
          var corrText = w.it.opts[w.it.answer];
          rl.appendChild(el("div.ritem", null, [
            el("p.rq", { html: q.q }),
            el("div.ra", null, [el("span.you.bad", { html: "Your answer: " + A.esc(yourText) })]),
            el("div.ra", null, [el("span.corr", { html: "Correct: " + A.esc(corrText) })]),
            el("div.rationale", null, [el("span.lbl", { text: "Why" }), el("span", { html: q.explain })]),
            el("div.robj", { text: ((S.exam && S.exam.code) || "") + " Domain " + q.domain + " · Objective " + q.obj })
          ]));
        });
        box.appendChild(rl);

        box.appendChild(el("div.btnrow", { style: "margin-top:22px;justify-content:center" }, [
          el("button.btn.primary", { text: "Try another set", onclick: function () { r.retry(); } }),
          el("button.btn", { text: "View analytics", onclick: function () { A.openAnalytics(); } }),
          el("button.btn.ghost", { text: "Back to dashboard", onclick: function () { A.dashboard(); A.renderDashboard(); } })
        ]));
        host.appendChild(box);
      }
    });
  }

  /* ===========================================================================
     TIMED MOCK EXAM  (90 weighted questions, timer, flagging, palette)
     =========================================================================== */
  function buildMockSet() {
    var total = S.exam.maxQuestions, picks = [];
    var meta = S.domainMeta.slice();
    var alloc = meta.map(function (d) { return { d: d.id, n: Math.round(total * d.weight / 100) }; });
    var sum = alloc.reduce(function (a, x) { return a + x.n; }, 0);
    var biggest = 0; alloc.forEach(function (x, i) { if (S.domainMeta[i].weight > S.domainMeta[biggest].weight) biggest = i; }); alloc[biggest].n += (total - sum); // fold rounding drift into the highest-weight domain
    alloc.forEach(function (x) {
      var pool = byDomain(x.d);
      picks = picks.concat(sample(pool, Math.min(x.n, pool.length)));
    });
    return shuffle(picks).map(prepare);
  }

  function startMock() {
    ready();
    if (S.questions.length < S.exam.maxQuestions) { A.toast("Question bank still loading…"); return; }
    var items = buildMockSet();
    var picks = new Array(items.length).fill(null);
    var flags = new Array(items.length).fill(false);
    var idx = 0;
    var DURATION = S.exam.minutes * 60; // seconds
    var remaining = DURATION;
    var ticker = null, paneRef = null, ended = false;

    A.open({
      tag: "Mock exam", render: function (host) {
        host.appendChild(A.crumb("Mock exam in progress", { onBack: function () {
          A.confirm("Abandon the mock exam?", "You are mid-exam. Leaving discards this attempt and it will not be scored.", "Abandon exam", function () { stop(); A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: "Full-Length Mock Exam" }), el("span.sub", { text: S.exam.maxQuestions + " questions · weighted to " + ((S.exam && S.exam.code) || "") + " domains" })]));
        paneRef = el("div"); host.appendChild(paneRef);
        draw();
        ticker = setInterval(tick, 1000);
      }
    });

    function tick() {
      remaining--; updateTimer();
      if (remaining <= 0) { stop(); A.toast("Time! Submitting your exam."); submit(); }
    }
    function stop() { if (ticker) clearInterval(ticker); ticker = null; }
    function fmt(s) { var m = Math.floor(s / 60), ss = s % 60; return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss; }
    function updateTimer() {
      var t = paneRef && paneRef.querySelector("#mockTimer"); if (!t) return;
      t.textContent = "⏱ " + fmt(remaining);
      t.className = "timer" + (remaining <= 60 ? " crit" : remaining <= 300 ? " warn" : "");
    }

    function draw() {
      if (ended) return;
      paneRef.innerHTML = "";
      var wrap = el("div.quizwrap");
      var answeredCount = picks.filter(function (p) { return p != null; }).length;

      var meta = el("div.qmeta", null, [
        el("div.timer#mockTimer", { text: "⏱ " + fmt(remaining) }),
        el("div.progressbar", null, el("i", { style: "width:" + (answeredCount / items.length * 100) + "%" })),
        el("div.qcount", { text: answeredCount + " / " + items.length + " answered" })
      ]);
      wrap.appendChild(meta);
      updateTimer();

      /* palette */
      var pal = el("div.palette");
      items.forEach(function (_, i) {
        var c = "palette";
        var b = el("button", { text: String(i + 1), onclick: function () { idx = i; draw(); } });
        if (picks[i] != null) b.classList.add("answered");
        if (flags[i]) b.classList.add("flagged");
        if (i === idx) b.classList.add("current");
        pal.appendChild(b);
      });
      wrap.appendChild(pal);

      var it = items[idx], q = it.ref;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge.d" + q.domain, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Question " + (idx + 1) + " of " + items.length }),
        el("button.qflag" + (flags[idx] ? ".on" : ""), { text: flags[idx] ? "Flagged" : "Flag for review", onclick: function () { flags[idx] = !flags[idx]; draw(); } })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));
      it.opts.forEach(function (text, i) {
        var b = el("button.opt" + (picks[idx] === i ? ".sel" : ""), { type: "button" });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        b.addEventListener("click", function () { picks[idx] = (picks[idx] === i ? null : i); draw(); });
        qc.appendChild(b);
      });

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(); } } }),
        el("div.btnrow", null, [
          idx === items.length - 1
            ? el("button.btn.primary", { text: "Review & submit", onclick: reviewSubmit })
            : el("button.btn.primary", { text: "Next →", onclick: function () { idx++; draw(); } })
        ])
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      paneRef.appendChild(wrap);
    }

    function reviewSubmit() {
      var unanswered = picks.filter(function (p) { return p == null; }).length;
      var flagged = flags.filter(Boolean).length;
      A.confirm("Submit exam?",
        (unanswered ? unanswered + " question(s) are unanswered and will be marked wrong. " : "All questions answered. ") +
        (flagged ? flagged + " are flagged for review. " : "") + "Submit for scoring?",
        "Submit exam", function () { stop(); submit(); });
    }

    function submit() {
      if (ended) return; ended = true; stop();
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      var scaled = Math.max(100, Math.min(900, Math.round(100 + pct / 100 * 800)));
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: "mock", modeLabel: "Mock exam", detail: correct + "/" + items.length + " · used " + Math.round((DURATION - remaining) / 60) + " min", pct: pct, scaled: scaled, correct: correct, total: items.length, domainStats: stats });
      showResults({ tag: "Results", title: "Mock Exam", mode: "mock", correct: correct, total: items.length, pct: pct, scaled: scaled, stats: stats, wrongList: wrongList, retry: startMock });
    }
  }

  /* ===========================================================================
     PBQ SIMULATOR  (exhibit + dropdown fields, graded with rationale)
     =========================================================================== */
  function openPBQFormat(fid) {
    ready();
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var list = S.pbqs.filter(function (p) { return p.format === fid; });
    var done = A.store.get("pbqDone", []) || [];

    A.open({
      tag: "PBQ · " + (fmt.badge || ("Format " + fid)), render: function (host) {
        host.appendChild(A.crumb(fmt.title));
        host.appendChild(el("div.phead", null, [el("h1", { text: fmt.title }), el("span.sub", { text: (fmt.badge || ("Format " + fid)) + " · " + list.length + " simulations · objective " + fmt.obj })]));
        host.appendChild(el("p.sectsub", { html: fmt.long || fmt.desc }));
        var grid = el("div.grid");
        list.forEach(function (p, i) {
          var isDone = done.indexOf(p.id) >= 0;
          grid.appendChild((function () {
            var c = el("button.card" + (isDone ? ".domain.d" + p.domain : ""), { type: "button", onclick: function () { runPBQ(list, i, fid); } });
            c.appendChild(el("div.kome", null, [
              el("span.ico", { text: fmt.icon }),
              el("span.tag.d" + p.domain, { text: isDone ? "✓ DONE" : "PBQ " + (i + 1) })
            ]));
            c.appendChild(el("h3", { text: p.title }));
            c.appendChild(el("div.desc", { html: (p.brief || "").slice(0, 120) + ((p.brief || "").length > 120 ? "…" : "") }));
            c.appendChild(el("div.foot", null, [el("span", { text: p.fields.length + " decisions · D" + p.domain }), el("span.go", { text: "Open →" })]));
            return c;
          })());
        });
        host.appendChild(grid);
        if (A.backBar) host.appendChild(A.backBar());
      }
    });
  }

  function runPBQ(list, i, fid) {
    var p = list[i];
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var graded = false;
    var selects = [];

    A.open({
      tag: "PBQ " + p.id, render: function (host) {
        host.appendChild(A.crumb(p.id, { onBack: function () { openPBQFormat(fid); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: p.title }), el("span.sub", { text: "Domain " + p.domain + " · " + fmt.title })]));
        var wrap = el("div.pbqwrap");
        wrap.appendChild(el("p.pbq-brief", { html: p.brief }));

        if (p.exhibit) {
          wrap.appendChild(el("div.terminal", null, [
            el("div.tbar", null, [el("span.dots", null, [el("i"), el("i"), el("i")]), el("span.ttl", { text: p.exhibitTitle || "exhibit" })]),
            el("pre", { html: p.exhibit })
          ]));
        }

        var fieldsHost = el("div.pbq-fields");
        p.fields.forEach(function (f, fi) {
          var fld = el("div.field");
          fld.appendChild(el("div.flabel", { text: (fi + 1) + ". " + f.label }));
          if (f.hint) fld.appendChild(el("div.fhint", { html: f.hint }));
          var sel = el("select");
          sel.appendChild(el("option", { value: "", text: "— choose —" }));
          f.options.forEach(function (o, oi) { sel.appendChild(el("option", { value: String(oi), text: o })); });
          fld.appendChild(sel);
          fld.appendChild(el("div.fexplain", { html: "<span class='ans'>Correct: " + A.esc(f.options[f.answer]) + ".</span> " + f.explain }));
          fieldsHost.appendChild(fld);
          selects.push({ sel: sel, fld: fld, f: f });
        });
        wrap.appendChild(fieldsHost);

        var summary = el("div", { style: "margin-top:8px" });
        var actions = el("div.qnav", null, [
          el("button.btn.ghost", { text: "← All " + fmt.title.split(" ")[0] + " PBQs", onclick: function () { openPBQFormat(fid); } }),
          el("div.btnrow", null, [
            el("button.btn.primary#pbqGrade", { text: "Submit & grade", onclick: grade }),
            i < list.length - 1 ? el("button.btn", { text: "Next PBQ →", onclick: function () { runPBQ(list, i + 1, fid); } }) : null
          ])
        ]);
        wrap.appendChild(summary);
        wrap.appendChild(actions);
        host.appendChild(wrap);

        function grade() {
          if (graded) { // already graded → act as reset
            selects.forEach(function (s) { s.sel.value = ""; s.sel.disabled = false; s.fld.classList.remove("graded", "correct", "wrong"); });
            graded = false; summary.innerHTML = ""; $set("Submit & grade"); return;
          }
          var miss = selects.some(function (s) { return s.sel.value === ""; });
          if (miss && !confirmProceed()) return;
          var correct = 0;
          selects.forEach(function (s) {
            var val = s.sel.value === "" ? -1 : parseInt(s.sel.value, 10);
            var ok = val === s.f.answer;
            if (ok) correct++;
            s.fld.classList.add("graded"); s.fld.classList.toggle("correct", ok); s.fld.classList.toggle("wrong", !ok);
            s.sel.disabled = true;
          });
          graded = true; $set("Reset");
          var pct = Math.round(correct / selects.length * 100);
          var pass = pct >= 70;
          summary.innerHTML = "";
          summary.appendChild(el("div.rationale" + (pass ? "" : ".bad"), null, [
            el("span.lbl", { text: pass ? "Well configured" : "Needs work" }),
            el("span", { html: "<b>" + correct + " of " + selects.length + "</b> decisions correct (" + pct + "%). " + (p.summary || "") })
          ]));
          /* mark complete */
          var done = A.store.get("pbqDone", []) || [];
          if (done.indexOf(p.id) < 0) { done.push(p.id); A.store.set("pbqDone", done); }
          A.store.record({ mode: "pbq", modeLabel: "PBQ", detail: p.id + " · " + fmt.title.split(" ")[0], pct: pct, correct: correct, total: selects.length, domainStats: (function () { var st = blankStats(); st[p.domain] = { correct: correct, total: selects.length }; return st; })() });
          summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        function $set(t) { var b = host.querySelector("#pbqGrade"); if (b) b.textContent = t; }
        var proceeded = false;
        function confirmProceed() { return window.confirm("Some fields are unset and will be marked incorrect. Grade anyway?"); }
      }
    });
  }

  /* ===========================================================================
     PUBLIC ENGINE SURFACE
     =========================================================================== */
  window.QUIZ = {
    startDomainQuiz: function (d) {
      ready();
      var meta = A.domainMeta(d);
      var pool = byDomain(d);
      if (pool.length < 1) { A.toast("No questions for this domain yet."); return; }
      runLinearQuiz({
        tag: "D" + d + " Quiz", mode: "domain", modeLabel: "Domain quiz",
        title: "Domain " + d + " Quiz", sub: meta.title + " · 10 questions",
        detail: "Domain " + d, items: sample(pool, Math.min(10, pool.length)),
        retry: function () { window.QUIZ.startDomainQuiz(d); }
      });
    },
    startQuickQuiz: function () {
      runLinearQuiz({
        tag: "Quick Quiz", mode: "quick", modeLabel: "Quick quiz",
        title: "Randomized Quick Quiz", sub: "10 questions · all five domains",
        detail: "Mixed", items: sample(S.questions, 10),
        retry: function () { window.QUIZ.startQuickQuiz(); }
      });
    },
    /* Adaptive: 10 questions weighted toward your weakest objectives + prior misses. */
    startAdaptive: function () {
      ready();
      var items = adaptiveSet(10);
      if (!items.length) { A.toast("No questions available."); return; }
      var weak = QS.weakestDomain();
      runLinearQuiz({
        tag: "Adaptive", mode: "adaptive", modeLabel: "Adaptive practice",
        title: "Adaptive Practice",
        sub: "10 questions weighted to your weak areas" + (weak ? " · focus: " + weak : ""),
        detail: weak ? "Weighted · " + weak : "Adaptive", items: items,
        retry: function () { window.QUIZ.startAdaptive(); }
      });
    },
    /* Missed queue: re-serve only previously-wrong questions (answering one
       correctly removes it from the queue via QS.record). */
    startMissed: function () {
      ready();
      var missed = QS.getMissed();
      var pool = S.questions.filter(function (q) { return missed[q.id]; });
      if (!pool.length) { A.toast("No missed questions yet — take a quiz first."); return; }
      runLinearQuiz({
        tag: "Missed", mode: "missed", modeLabel: "Missed questions",
        title: "Missed Questions", sub: pool.length + " in your retry queue",
        detail: "Retry", items: sample(pool, Math.min(15, pool.length)),
        retry: function () { window.QUIZ.startMissed(); }
      });
    },
    missedCount: function () { return QS.missedCount(); },
    weakestDomain: function () { return QS.weakestDomain(); },
    startMock: startMock,
    openPBQFormat: openPBQFormat
  };
})();
