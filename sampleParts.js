// /server/sampleParts.js

const sampleParts = [
  // --- CPU ---
  {
    name: "Intel Core i7-14700K",
    category: "CPU",
    price: 399.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/5a2d1d0c8d19a4e0aebf72621f375c39.256p.jpg",
    rating: 4.8,
    ratingCount: 152,
    specs: {
      "Core Count": 20,
      "Performance Core Clock": "3.4 GHz",
      "Boost Clock": "5.6 GHz",
      "TDP": "125 W"
    }
  },
  {
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    price: 349.0,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/702d53b925c78d49f195191b70275c65.256p.jpg",
    rating: 4.9,
    ratingCount: 512,
    specs: {
      "Core Count": 8,
      "Performance Core Clock": "4.2 GHz",
      "Boost Clock": "5.0 GHz",
      "TDP": "120 W"
    }
  },
  {
    name: "Intel Core i5-13600KF",
    category: "CPU",
    price: 279.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/1.jpg",
    rating: 4.8,
    ratingCount: 444,
    specs: {
      "Core Count": 14,
      "Clock": "3.5 GHz",
      "TDP": "125 W"
    }
  },
  {
    name: "AMD Ryzen 5 7600",
    category: "CPU",
    price: 219.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/2.jpg",
    rating: 4.8,
    ratingCount: 300,
    specs: {
      "Core Count": 6,
      "Clock": "3.8 GHz",
      "TDP": "65 W"
    }
  },

  // --- CPU Cooler ---
  {
    name: "Noctua NH-D15",
    category: "CPU Cooler",
    price: 109.95,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8f22f74161b4c6b5e5a75261d76a74c7.256p.jpg",
    rating: 4.9,
    ratingCount: 830,
    specs: {
      "Type": "Air Cooler",
      "Fan RPM": "300 - 1500 RPM",
      "Noise Level": "19.2 - 24.6 dB"
    }
  },
  {
    name: "Cooler Master Hyper 212",
    category: "CPU Cooler",
    price: 39.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/3.jpg",
    rating: 4.6,
    ratingCount: 1235,
    specs: {
      "Type": "Air Cooler",
      "Fan RPM": "800 - 2000 RPM",
      "Noise Level": "26 dB"
    }
  },
  {
    name: "Corsair iCUE H100i RGB Elite",
    category: "CPU Cooler",
    price: 159.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/4.jpg",
    rating: 4.7,
    ratingCount: 540,
    specs: {
      "Type": "Liquid",
      "Radiator": "240mm",
      "Noise Level": "25 dB"
    }
  },

  // --- Motherboard ---
  {
    name: "MSI B650 GAMING PLUS WIFI",
    category: "Motherboard",
    price: 179.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/a6381014e36d54d581c1c7b27e85c7f6.256p.jpg",
    rating: 4.7,
    ratingCount: 91,
    specs: {
      "Socket": "AM5",
      "Form Factor": "ATX",
      "Chipset": "B650"
    }
  },
  {
    name: "ASUS ROG STRIX Z790-A",
    category: "Motherboard",
    price: 329.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/5.jpg",
    rating: 4.8,
    ratingCount: 200,
    specs: {
      "Socket": "LGA1700",
      "Form Factor": "ATX",
      "Chipset": "Z790"
    }
  },
  {
    name: "Gigabyte B550M DS3H",
    category: "Motherboard",
    price: 94.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/6.jpg",
    rating: 4.5,
    ratingCount: 1024,
    specs: {
      "Socket": "AM4",
      "Form Factor": "mATX",
      "Chipset": "B550"
    }
  },
  {
    name: "ASUS TUF GAMING B660M-PLUS",
    category: "Motherboard",
    price: 149.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/7.jpg",
    rating: 4.6,
    ratingCount: 380,
    specs: {
      "Socket": "LGA1700",
      "Form Factor": "mATX",
      "Chipset": "B660"
    }
  },

  // --- Memory ---
  {
    name: "Corsair Vengeance 32 GB (2 x 16 GB)",
    category: "Memory",
    price: 119.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/f4bd2d6dedf934272449a6de0ca1df30.256p.jpg",
    rating: 4.8,
    ratingCount: 215,
    specs: {
      "Type": "DDR5",
      "Speed": "DDR5-6000",
      "Modules": "2 x 16GB"
    }
  },
  {
    name: "G.Skill Ripjaws S5 32 GB (2 x 16 GB)",
    category: "Memory",
    price: 99.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/f78e4ef9a8a70425316e632b7c6c40e3.256p.jpg",
    rating: 4.7,
    ratingCount: 140,
    specs: {
      "Type": "DDR5",
      "Speed": "DDR5-5600",
      "Modules": "2 x 16GB"
    }
  },
  {
    name: "Patriot Viper Steel 16GB (2 x 8GB)",
    category: "Memory",
    price: 49.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8.jpg",
    rating: 4.6,
    ratingCount: 650,
    specs: {
      "Type": "DDR4",
      "Speed": "3200",
      "Modules": "2 x 8GB"
    }
  },
  {
    name: "Kingston Fury Beast 64GB (2 x 32GB)",
    category: "Memory",
    price: 149.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/9.jpg",
    rating: 4.9,
    ratingCount: 210,
    specs: {
      "Type": "DDR5",
      "Speed": "6000",
      "Modules": "2 x 32GB"
    }
  },

  // --- Storage ---
  {
    name: "Samsung 980 Pro 2 TB",
    category: "Storage",
    price: 159.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/82e259b3105151528652c79f32395655.256p.jpg",
    rating: 4.9,
    ratingCount: 1020,
    specs: {
      "Type": "SSD",
      "Capacity": "2 TB",
      "Interface": "M.2 (NVMe)"
    }
  },
  {
    name: "Seagate Barracuda Compute 2 TB",
    category: "Storage",
    price: 64.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/5a2d1d0c8d19a4e0aebf72621f375c39.256p.jpg",
      "rating": 4.7,
      "ratingCount": 2300,
      specs: {
        "Type": "HDD",
        "Capacity": "2 TB",
        "Interface": "SATA 6.0Gb/s"
      }
  },
  {
    name: "Crucial P3 1 TB",
    category: "Storage",
    price: 49.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/10.jpg",
    rating: 4.8,
    ratingCount: 1500,
    specs: {
      "Type": "SSD",
      "Capacity": "1 TB",
      "Interface": "M.2 NVMe"
    }
  },
  {
    name: "WD Black SN850X 4TB",
    category: "Storage",
    price: 429.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/11.jpg",
    rating: 4.9,
    ratingCount: 480,
    specs: {
      "Type": "SSD",
      "Capacity": "4 TB",
      "Interface": "M.2 NVMe"
    }
  },

  // --- Video Card ---
  {
    name: "NVIDIA Founders Edition GeForce RTX 4070",
    category: "Video Card",
    price: 549.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/702d53b925c78d49f195191b70275c65.256p.jpg",
    rating: 4.8,
    ratingCount: 180,
    specs: {
      "Chipset": "RTX 4070",
      "Memory": "12 GB GDDR6X",
      "Core Clock": "1920 MHz"
    }
  },
  {
    name: "ASRock Challenger OC Radeon RX 7800 XT",
    category: "Video Card",
    price: 499.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/a6381014e36d54d581c1c7b27e85c7f6.256p.jpg",
    rating: 4.7,
    ratingCount: 75,
    specs: {
      "Chipset": "RX 7800 XT",
      "Memory": "16 GB GDDR6",
      "Core Clock": "1800 MHz"
    }
  },
  {
    name: "MSI Ventus RTX 3060",
    category: "Video Card",
    price: 289.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/12.jpg",
    rating: 4.7,
    ratingCount: 2000,
    specs: {
      "Chipset": "RTX 3060",
      "Memory": "12GB GDDR6",
      "Core Clock": "1320 MHz"
    }
  },
  {
    name: "ASUS Dual GeForce RTX 4090",
    category: "Video Card",
    price: 1799.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/13.jpg",
    rating: 5.0,
    ratingCount: 220,
    specs: {
      "Chipset": "RTX 4090",
      "Memory": "24GB GDDR6X",
      "Core Clock": "2235 MHz"
    }
  },

  // --- Case ---
  {
    name: "NZXT H5 Flow",
    category: "Case",
    price: 94.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/8f22f74161b4c6b5e5a75261d76a74c7.256p.jpg",
    rating: 4.9,
    ratingCount: 230,
    specs: {
      "Type": "ATX Mid Tower",
      "Color": "Black",
      "Side Panel": "Tempered Glass"
    }
  },
  {
    name: "Lian Li PC-O11 Dynamic",
    category: "Case",
    price: 139.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/14.jpg",
    rating: 5.0,
    ratingCount: 890,
    specs: {
      "Type": "ATX Full Tower",
      "Color": "Black",
      "Side Panel": "Tempered Glass"
    }
  },
  {
    name: "Cooler Master MasterBox TD500 Mesh",
    category: "Case",
    price: 89.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/15.jpg",
    rating: 4.8,
    ratingCount: 350,
    specs: {
      "Type": "ATX Mid Tower",
      "Color": "White",
      "Side Panel": "Tempered Glass"
    }
  },
  {
    name: "Fractal Design Pop Air",
    category: "Case",
    price: 79.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/16.jpg",
    rating: 4.8,
    ratingCount: 450,
    specs: {
      "Type": "ATX Mid Tower",
      "Color": "Black",
      "Side Panel": "Tempered Glass"
    }
  },

  // --- Power Supply ---
  {
    name: "Corsair RM750e (2023)",
    category: "Power Supply",
    price: 99.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/f4bd2d6dedf934272449a6de0ca1df30.256p.jpg",
    rating: 4.8,
    ratingCount: 310,
    specs: {
      "Wattage": "750 W",
      "Rating": "80+ Gold",
      "Modular": "Fully"
    }
  },
  {
    name: "EVGA 600 BR",
    category: "Power Supply",
    price: 44.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/17.jpg",
    rating: 4.5,
    ratingCount: 1700,
    specs: {
      "Wattage": "600 W",
      "Rating": "80+ Bronze",
      "Modular": "No"
    }
  },
  {
    name: "Seasonic Focus GX-850W",
    category: "Power Supply",
    price: 129.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/18.jpg",
    rating: 4.9,
    ratingCount: 480,
    specs: {
      "Wattage": "850 W",
      "Rating": "80+ Gold",
      "Modular": "Fully"
    }
  },
  {
    name: "Cooler Master MWE Gold 550 V2",
    category: "Power Supply",
    price: 64.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/19.jpg",
    rating: 4.6,
    ratingCount: 800,
    specs: {
      "Wattage": "550 W",
      "Rating": "80+ Gold",
      "Modular": "Semi"
    }
  },

  // --- Operating System ---
  {
    name: "Microsoft Windows 11 Home",
    category: "Operating System",
    price: 117.98,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/5a2d1d0c8d19a4e0aebf72621f375c39.256p.jpg",
    rating: 4.6,
    ratingCount: 450,
    specs: {
      "Type": "OS",
      "Mode": "64-bit"
    }
  },
  {
    name: "Microsoft Windows 10 Pro",
    category: "Operating System",
    price: 139.99,
    imageUrl: "https://cdn.pcpartpicker.com/static/forever/images/product/os.jpg",
    rating: 4.7,
    ratingCount: 2000,
    specs: {
      "Type": "OS",
      "Mode": "64-bit"
    }
  },

  // --- Monitor ---
  {
    name: "LG 27GP850-B",
    category: "Monitor",
    price: 296.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/702d53b925c78d49f195191b70275c65.256p.jpg",
    rating: 4.7,
    ratingCount: 190,
    specs: {
      "Size": "27\"",
      "Resolution": "2560 x 1440",
      "Refresh Rate": "165 Hz"
    }
  },
  {
    name: "AOC 24G2",
    category: "Monitor",
    price: 169.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/20.jpg",
    rating: 4.9,
    ratingCount: 6500,
    specs: {
      "Size": "24\"",
      "Resolution": "1080p",
      "Refresh Rate": "144 Hz"
    }
  },
  {
    name: "Samsung Odyssey G7",
    category: "Monitor",
    price: 499.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/21.jpg",
    rating: 4.8,
    ratingCount: 900,
    specs: {
      "Size": "32\"",
      "Resolution": "1440p",
      "Refresh Rate": "240 Hz"
    }
  },
  {
    name: "Dell S2721QS",
    category: "Monitor",
    price: 329.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/22.jpg",
    rating: 4.7,
    ratingCount: 700,
    specs: {
      "Size": "27\"",
      "Resolution": "4K",
      "Refresh Rate": "60 Hz"
    }
  },

  // --- Keyboard ---
  {
    name: "Logitech G Pro X",
    category: "Keyboard",
    price: 109.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/82e259b3105151528652c79f32395655.256p.jpg",
    rating: 4.7,
    ratingCount: 112,
    specs: {
      "Type": "Mechanical",
      "Switch": "GX Brown",
      "Backlit": "RGB"
    }
  },
  {
    name: "Razer Huntsman Mini",
    category: "Keyboard",
    price: 89.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/23.jpg",
    rating: 4.6,
    ratingCount: 1500,
    specs: {
      "Type": "Mechanical",
      "Switch": "Optical",
      "Backlit": "RGB"
    }
  },
  {
    name: "Keychron K2",
    category: "Keyboard",
    price: 79.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/24.jpg",
    rating: 4.8,
    ratingCount: 1200,
    specs: {
      "Type": "Mechanical",
      "Switch": "Gateron Red",
      "Backlit": "White"
    }
  },
  {
    name: "Corsair K95 RGB Platinum",
    category: "Keyboard",
    price: 159.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/25.jpg",
    rating: 4.7,
    ratingCount: 1800,
    specs: {
      "Type": "Mechanical",
      "Switch": "Cherry MX Speed",
      "Backlit": "RGB"
    }
  },

  // --- Mice ---
  {
    name: "Logitech G502 HERO",
    category: "Mouse",
    price: 39.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/26.jpg",
    rating: 4.9,
    ratingCount: 18000,
    specs: {
      "DPI": "16,000",
      "Connectivity": "Wired"
    }
  },
  {
    name: "Razer DeathAdder V2",
    category: "Mouse",
    price: 49.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/27.jpg",
    rating: 4.8,
    ratingCount: 9000,
    specs: {
      "DPI": "20,000",
      "Connectivity": "Wired"
    }
  },

  {
    name: "Logitech G Pro Wireless",
    category: "Mouse",
    price: 129.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/28.jpg",
    rating: 4.8,
    ratingCount: 7000,
    specs: {
      "DPI": "25,600",
      "Connectivity": "Wireless"
    }
  },
  {
    name: "Glorious Model O",
    category: "Mouse",
    price: 59.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/29.jpg",
    rating: 4.7,
    ratingCount: 4500,
    specs: {
      "DPI": "12,000",
      "Connectivity": "Wired"
    }
  },

  // --- Fans ---
  {
    name: "Corsair LL120 RGB (3-Pack)",
    category: "Case Fan",
    price: 99.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/30.jpg",
    rating: 4.8,
    ratingCount: 4200,
    specs: {
      "Size": "120mm",
      "Lighting": "RGB"
    }
  },
  {
    name: "Noctua NF-A12x25",
    category: "Case Fan",
    price: 29.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/31.jpg",
    rating: 5.0,
    ratingCount: 1800,
    specs: {
      "Size": "120mm",
      "Noise": "22.6 dB"
    }
  },
  {
    name: "Arctic P12",
    category: "Case Fan",
    price: 11.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/32.jpg",
    rating: 4.8,
    ratingCount: 6000,
    specs: {
      "Size": "120mm",
      "Noise": "24.5 dB"
    }
  },
  {
    name: "Cooler Master SickleFlow V2",
    category: "Case Fan",
    price: 9.99,
    imageUrl: "https://cdna.pcpartpicker.com/static/forever/images/product/33.jpg",
    rating: 4.6,
    ratingCount: 2500,
    specs: {
      "Size": "120mm",
      "Noise": "25 dB"
    }
  },

];
module.exports = sampleParts;
