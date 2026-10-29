const productsData = [
  // --- TECH & GADGETS ---
  {
    id: 1, title: "MacBook Pro M2 (16GB RAM, 512GB SSD)", description: "Perfect for heavy coding, video editing, and professional tasks. Lightweight yet incredibly powerful.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=60", isForSale: true, salePrice: 125000, isForRent: true, rentPrice: 1500, rentDuration: "/ day", rating: 4.8
  },
  {
    id: 2, title: "Sony A7 III Mirrorless Camera", description: "High-resolution full-frame camera with 4K video recording. Ideal for professional photoshoots.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 800, rentDuration: "/ day", rating: 4.7
  },
  {
    id: 3, title: "PlayStation 5 Console", description: "Next-gen gaming console with dual-sense controller, lightning-fast load times, and 3D audio.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=60", isForSale: true, salePrice: 45000, isForRent: true, rentPrice: 500, rentDuration: "/ day", rating: 4.9
  },
  {
    id: 4, title: "Boya BY-M1 Omnidirectional Mic", description: "High-quality metal body lavalier microphone. Perfect for recording vocal covers and YouTube videos.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1600079192427-e049b6e871a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isForSale: true, salePrice: 799, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.4
  },
  {
    id: 5, title: "Apple iPad Air (5th Gen)", description: "Versatile tablet for digital art or watching movies. Features a stunning Liquid Retina display.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=60", isForSale: true, salePrice: 55000, isForRent: true, rentPrice: 700, rentDuration: "/ day", rating: 4.9
  },
  {
    id: 6, title: "DJI Mini 3 Pro Drone", description: "Lightweight, foldable drone with 4K HDR video and obstacle avoidance. Capture cinematic shots.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 1000, rentDuration: "/ day", rating: 4.8
  },
  {
    id: 7, title: "Digitek 18-inch Ring Light with Tripod", description: "Professional lighting setup for Instagram reels, vlogs, and studio portrait photography.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1603539824283-7be148443912?w=500&q=60", isForSale: true, salePrice: 2500, isForRent: true, rentPrice: 150, rentDuration: "/ day", rating: 4.5
  },
  {
    id: 8, title: "Logitech MX Master 3S Mouse", description: "Ergonomic wireless mouse tailored for coders and creators with ultra-fast scrolling.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1527814050087-379381547969?w=500&q=60", isForSale: true, salePrice: 8999, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.7
  },
  {
    id: 9, title: "Keychron K2 Mechanical Keyboard", description: "Compact wireless mechanical keyboard with tactile brown switches and RGB backlight.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=60", isForSale: true, salePrice: 7500, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.6
  },
  {
    id: 10, title: "Samsung Galaxy S23 Ultra", description: "Flagship smartphone with an incredible 200MP camera and S-Pen integration.", category: "tech", thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=60", isForSale: true, salePrice: 110000, isForRent: true, rentPrice: 1200, rentDuration: "/ day", rating: 4.8
  },

  // --- MUSIC GEAR ---
  {
    id: 11, title: "Kadence Frontier Acoustic Guitar", description: "40-inch acoustic guitar in a natural wood finish. Delivers crisp sound, great for learning chords.", category: "music-gear", thumbnail: "https://images.unsplash.com/photo-1550227181-ed0f443b749d?w=500&q=60", isForSale: true, salePrice: 5500, isForRent: true, rentPrice: 150, rentDuration: "/ day", rating: 4.9
  },
  {
    id: 12, title: "D'Addario 0.12 Gauge Light Strings", description: "Phosphor bronze acoustic guitar strings. Offers a warm, bright tone and smooth playability.", category: "music-gear", thumbnail: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=500&q=60", isForSale: true, salePrice: 650, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.7
  },
  {
    id: 13, title: "Yamaha PSR-E373 Keyboard", description: "61-key portable keyboard with touch-sensitive keys. Excellent for practicing vocals and scales.", category: "music-gear", thumbnail: "https://images.unsplash.com/photo-1595069906974-f8ae74eb3dbf?w=500&q=60", isForSale: true, salePrice: 12500, isForRent: true, rentPrice: 300, rentDuration: "/ day", rating: 4.6
  },
  {
    id: 14, title: "Focusrite Scarlett 2i2 Audio Interface", description: "Studio-quality USB audio interface for recording guitars and vocals directly to your PC.", category: "music-gear", thumbnail: "https://images.unsplash.com/photo-1602932371195-23c21a42a033?w=500&q=60", isForSale: true, salePrice: 14000, isForRent: true, rentPrice: 400, rentDuration: "/ day", rating: 4.8
  },
  {
    id: 15, title: "Marshall Acton II Bluetooth Speaker", description: "Classic vintage design speaker with deep bass and clear highs for room-filling sound.", category: "music-gear", thumbnail: "https://images.unsplash.com/photo-1545454675-a6538822afa1?w=500&q=60", isForSale: true, salePrice: 22000, isForRent: true, rentPrice: 500, rentDuration: "/ day", rating: 4.7
  },

  // --- VEHICLES ---
  {
    id: 16, title: "Royal Enfield Classic 350", description: "Legendary cruiser bike. Experience smooth highway driving and a classic vintage look.", category: "vehicles", thumbnail: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 1200, rentDuration: "/ day", rating: 4.6
  },
  {
    id: 17, title: "Honda Activa 6G Scooty", description: "Reliable and fuel-efficient scooter. Perfect for daily 50km+ commutes and city traffic.", category: "vehicles", thumbnail: "https://images.unsplash.com/photo-1617347105321-45168f9f60fe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 350, rentDuration: "/ day", rating: 4.5
  },
  {
    id: 18, title: "Vega Crux Half Face Helmet", description: "ISI certified, lightweight half-face helmet with a scratch-resistant visor for safe driving.", category: "vehicles", thumbnail: "https://images.unsplash.com/photo-1557007789-93e185012fce?w=500&q=60", isForSale: true, salePrice: 1100, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.3
  },
  {
    id: 19, title: "Trek Marlin 5 Mountain Bike", description: "Trail-ready mountain bike with 21 speeds and suspension fork for rough terrains.", category: "vehicles", thumbnail: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&q=60", isForSale: true, salePrice: 35000, isForRent: true, rentPrice: 400, rentDuration: "/ day", rating: 4.7
  },
  {
    id: 20, title: "Hyundai i20 (Self-Drive)", description: "Premium hatchback car in excellent condition. Perfect for weekend family trips.", category: "vehicles", thumbnail: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 2000, rentDuration: "/ day", rating: 4.8
  },

  // --- FASHION & LIFESTYLE ---
  {
    id: 21, title: "Nike Air Max Sneakers", description: "Comfortable, stylish, and lightweight running shoes with responsive cushioning.", category: "fashion", thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=60", isForSale: true, salePrice: 4500, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.5
  },
  {
    id: 22, title: "Fastrack Analog Men's Watch", description: "Sleek and professional daily wear watch with a water-resistant build.", category: "fashion", thumbnail: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=60", isForSale: true, salePrice: 2100, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.2
  },
  {
    id: 23, title: "Levi's Men's Denim Jacket", description: "Classic blue denim jacket, perfect for layering during light winters or night rides.", category: "fashion", thumbnail: "https://www.levistrauss.com/wp-content/uploads/2020/10/20201023_UNZIPPED_TBT-JAPANESE-TRUCKER_HEROb.jpg", isForSale: true, salePrice: 3200, isForRent: true, rentPrice: 150, rentDuration: "/ trip", rating: 4.6
  },
  {
    id: 24, title: "Ray-Ban Aviator Sunglasses", description: "Original pilot-style sunglasses with UV protection and a gold-tone metal frame.", category: "fashion", thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=60", isForSale: true, salePrice: 5500, isForRent: true, rentPrice: 200, rentDuration: "/ trip", rating: 4.8
  },
  {
    id: 25, title: "Wildcraft Trekking Backpack", description: "45-liter rucksack with ergonomic padding. Great for long journeys and hiking.", category: "fashion", thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=60", isForSale: true, salePrice: 2400, isForRent: true, rentPrice: 100, rentDuration: "/ trip", rating: 4.4
  },

  // --- BOOKS & STUDY ---
  {
    id: 26, title: "MERN Stack Web Development", description: "Comprehensive guide to building full-stack web applications using MongoDB, Express, React, and Node.", category: "books", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=60", isForSale: true, salePrice: 1200, isForRent: true, rentPrice: 50, rentDuration: "/ week", rating: 4.8
  },
  {
    id: 27, title: "React Native: Up and Running", description: "Learn to build cross-platform mobile apps efficiently. A must-have for modern web developers.", category: "books", thumbnail: "https://images.unsplash.com/photo-1526045612212-70cb35970158?w=500&q=60", isForSale: true, salePrice: 950, isForRent: true, rentPrice: 40, rentDuration: "/ week", rating: 4.7
  },
  {
    id: 28, title: "Clean Code by Robert C. Martin", description: "A Handbook of Agile Software Craftsmanship. Learn how to write robust, bug-free code.", category: "books", thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=60", isForSale: true, salePrice: 1100, isForRent: true, rentPrice: 60, rentDuration: "/ week", rating: 4.9
  },
  {
    id: 29, title: "Rich Dad Poor Dad", description: "The #1 personal finance book of all time. Change the way you look at money and investing.", category: "books", thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=60", isForSale: true, salePrice: 350, isForRent: true, rentPrice: 20, rentDuration: "/ week", rating: 4.8
  },
  {
    id: 30, title: "Atomic Habits", description: "An easy & proven way to build good habits & break bad ones by James Clear.", category: "books", thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=60", isForSale: true, salePrice: 450, isForRent: true, rentPrice: 25, rentDuration: "/ week", rating: 4.9
  },

  // --- KITCHEN & APPLIANCES ---
  {
    id: 31, title: "Non-Stick Grill Pan", description: "Premium cast-iron grill pan, perfect for cooking chicken dishes and healthy roasted meals.", category: "kitchen", thumbnail: "https://images.unsplash.com/photo-1592156328757-ae2941276b2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isForSale: true, salePrice: 1200, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.5
  },
  {
    id: 32, title: "Philips Digital Air Fryer", description: "Fry, bake, grill, and roast with up to 90% less fat. A healthy addition to any kitchen.", category: "kitchen", thumbnail: "https://th-i.thgim.com/public/incoming/piajc9/article70805984.ece/alternates/FREE_1200/grilled%20chicken.jpg", isForSale: true, salePrice: 8500, isForRent: true, rentPrice: 250, rentDuration: "/ day", rating: 4.7
  },
  {
    id: 33, title: "Pigeon Electric Kettle", description: "1.5L multi-purpose electric kettle for boiling water, making tea, or instant noodles.", category: "kitchen", thumbnail: "https://images.unsplash.com/photo-1594247547738-9ce410c85c07?w=500&q=60", isForSale: true, salePrice: 650, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.3
  },
  {
    id: 34, title: "Weber Portable BBQ Grill", description: "Compact charcoal grill perfect for outdoor picnics and backyard parties.", category: "kitchen", thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=60", isForSale: true, salePrice: 8500, isForRent: true, rentPrice: 350, rentDuration: "/ day", rating: 4.4
  },
  {
    id: 35, title: "NutriBullet Blender", description: "High-speed blender for making smooth protein shakes and fruit smoothies effortlessly.", category: "kitchen", thumbnail: "https://images.unsplash.com/photo-1585237841398-3162758fcc35?w=500&q=60", isForSale: true, salePrice: 4200, isForRent: true, rentPrice: 150, rentDuration: "/ day", rating: 4.6
  },

  // --- GAMES & SPORTS ---
  {
    id: 36, title: "Premium Wooden Chess Set", description: "Handcrafted magnetic wooden chess board. Great for sharpening your mind and strategy.", category: "games", thumbnail: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=500&q=60", isForSale: true, salePrice: 2500, isForRent: true, rentPrice: 100, rentDuration: "/ day", rating: 4.7
  },
  {
    id: 37, title: "DGT 2010 Digital Chess Clock", description: "Professional digital chess timer used in official tournaments. Highly precise.", category: "games", thumbnail: "https://images.unsplash.com/photo-1580541631991-3832c32de792?w=500&q=60", isForSale: true, salePrice: 3500, isForRent: true, rentPrice: 150, rentDuration: "/ day", rating: 4.8
  },
  {
    id: 38, title: "Catan Board Game", description: "Multiplayer strategy board game. Build settlements, trade resources, and dominate the island.", category: "games", thumbnail: "https://images.unsplash.com/photo-1611891487122-207578297b87?w=500&q=60", isForSale: true, salePrice: 2999, isForRent: true, rentPrice: 200, rentDuration: "/ day", rating: 4.9
  },
  {
    id: 39, title: "Nivia Football Size 5", description: "Durable PU synthetic leather football, excellent for outdoor grass matches.", category: "games", thumbnail: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&q=60", isForSale: true, salePrice: 850, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.4
  },
  {
    id: 40, title: "Yonex Badminton Racket Set", description: "Set of 2 lightweight aluminum rackets with a pack of nylon shuttlecocks.", category: "games", thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&q=60", isForSale: true, salePrice: 1800, isForRent: true, rentPrice: 100, rentDuration: "/ day", rating: 4.5
  },

  // --- HOME LIVING & FURNITURE ---
  {
    id: 41, title: "Ergonomic Office Chair", description: "High-back mesh chair with lumbar support. A lifesaver for developers working long hours.", category: "home-living", thumbnail: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=60", isForSale: true, salePrice: 7500, isForRent: true, rentPrice: 300, rentDuration: "/ month", rating: 4.6
  },
  {
    id: 42, title: "Wakefit Orthopedic Mattress", description: "Memory foam mattress that adapts to your body shape for a perfect night's sleep.", category: "home-living", thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=60", isForSale: true, salePrice: 11000, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.8
  },
  {
    id: 43, title: "IKEA Study Desk", description: "Minimalist wooden study table with a built-in drawer for a clean workspace setup.", category: "home-living", thumbnail: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=60", isForSale: true, salePrice: 4500, isForRent: true, rentPrice: 200, rentDuration: "/ month", rating: 4.4
  },
  {
    id: 44, title: "XL Bean Bag with Beans", description: "Comfortable leatherette bean bag, perfect for lounging and casual gaming sessions.", category: "home-living", thumbnail: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=60", isForSale: true, salePrice: 1500, isForRent: true, rentPrice: 100, rentDuration: "/ week", rating: 4.3
  },
  {
    id: 45, title: "Minimalist Table Lamp", description: "Warm LED table lamp with adjustable brightness, ideal for late-night reading or coding.", category: "home-living", thumbnail: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=60", isForSale: true, salePrice: 899, isForRent: false, rentPrice: 0, rentDuration: "", rating: 4.5
  },

  // --- TOOLS & OUTDOORS ---
  {
    id: 46, title: "Bosch Professional Power Drill", description: "Heavy-duty electric drill for home improvement projects and DIY wall fixtures.", category: "tools", thumbnail: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 200, rentDuration: "/ day", rating: 4.3
  },
  {
    id: 47, title: "Stanley 65-Piece Tool Kit", description: "Complete hand tool set with screwdrivers, wrenches, and pliers for daily repairs.", category: "tools", thumbnail: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=60", isForSale: true, salePrice: 2200, isForRent: true, rentPrice: 150, rentDuration: "/ day", rating: 4.6
  },
  {
    id: 48, title: "4-Person Camping Tent", description: "Waterproof outdoor tent. Easy to set up in 10 minutes for weekend getaways.", category: "outdoors", thumbnail: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&q=60", isForSale: false, salePrice: 0, isForRent: true, rentPrice: 300, rentDuration: "/ day", rating: 4.6
  },
  {
    id: 49, title: "Decathlon Sleeping Bag", description: "Thermal sleeping bag designed for extreme cold temperatures during high-altitude treks.", category: "outdoors", thumbnail: "https://images.unsplash.com/photo-1521334884684-ce413fa33424?w=500&q=60", isForSale: true, salePrice: 1800, isForRent: true, rentPrice: 120, rentDuration: "/ day", rating: 4.5
  },
  {
    id: 50, title: "Karcher High Pressure Washer", description: "110-bar pressure washer, excellent for deep cleaning cars, bikes, and dirty patios.", category: "tools", thumbnail: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=60", isForSale: true, salePrice: 9500, isForRent: true, rentPrice: 400, rentDuration: "/ day", rating: 4.7
  }
];