const fs = require('fs');

const tours = [
  { name: "1D1N Bromo Midnight Tour", route: "/tours/from-surabaya/bromo-1d1n", price: "IDR 1,000,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768225567764-405955176-gufron.png", crewName: "Led by Gufron (Guide)" },
  { name: "2D1N Bromo & Madakaripura", route: "/tours/from-surabaya/bromo-2d1n", price: "IDR 1,750,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768228514527-518051332-rendi.png", crewName: "Led by Rendi (Guide)" },
  { name: "2D1N Ijen Blue Fire", route: "/tours/from-surabaya/ijen-2d1n", price: "IDR 1,550,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768270364125-144711646-yandi.png", crewName: "Led by Yandi (Driver)" },
  { name: "3D2N Bromo–Madakaripura–Ijen", route: "/tours/from-surabaya/bromo-madakaripura-ijen-3d2n", price: "IDR 2,450,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768228191022-893381041-boy.png", crewName: "Led by Boy (Guide)" },
  { name: "3D2N Ijen–Bromo–Madakaripura", route: "/tours/from-surabaya/ijen-bromo-madakaripura-3d2n", price: "IDR 2,450,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768276791622-262250680-freddy.png", crewName: "Led by Fredi (Driver)" },
  { name: "3D2N Safari–Bromo–Madakaripura", route: "/tours/from-surabaya/taman-safari-prigen-bromo-madakaripura-3d2n", price: "IDR 3,450,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768270423657-690185912-anjas.png", crewName: "Led by Anjas (Guide)" },
  { name: "4D3N Ijen–Bromo–Madakaripura", route: "/tours/from-surabaya/ijen-bromo-madakaripura-4d3n", price: "IDR 3,025,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768228083285-919198019-taufik_1_.png", crewName: "Led by Taufik (Guide)" },
  { name: "4D3N Ijen–Papuma–Tumpak Sewu–Bromo", route: "/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-4d3n", price: "IDR 3,125,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768271545598-834784538-kiki.png", crewName: "Led by Kiki (Guide)" },
  { name: "4D3N Tumpak Sewu–Bromo–Ijen", route: "/tours/from-surabaya/tumpak-sewu-bromo-ijen-4d3n", price: "IDR 3,125,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768277053384-470130286-holili.jpg", crewName: "Led by Holili (Driver)" },
  { name: "5D4N Ijen–Bromo–Madakaripura–Malang", route: "/tours/from-surabaya/ijen-bromo-madakaripura-malang-5d4n", price: "IDR 3,850,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768226003889-338819579-fauzi.png", crewName: "Led by Fauzi (Guide)" },
  { name: "5D4N Ijen–Papuma–Tumpak Sewu–Bromo", route: "/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-5d4n", price: "IDR 3,650,000/pax", image: "https://javavolcano-touroperator.com/uploads/1768277336049-911840775-joyo.png", crewName: "Led by Joyo (Driver)" },
  { name: "6D5N Ijen–Papuma–Tumpak Sewu–Bromo–Malang", route: "/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-malang-6d5n", price: "IDR 4,750,000/pax", image: "https://javavolcano-touroperator.com/uploads/1771428583288-513992233-kta_anjas.jpg", crewName: "Certified Guide: Anjas" },
  { name: "3D2N Bromo & Ijen (Bali)", route: "/tours/from-bali/bromo-ijen-3d2n", price: "IDR 2,850,000/pax", image: "https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg", crewName: "Certified Guide: Gufron" },
  { name: "3D2N Ijen–Bromo–Madakaripura (Bali)", route: "/tours/from-bali/ijen-bromo-madakaripura-3d2n", price: "IDR 2,850,000/pax", image: "https://javavolcano-touroperator.com/uploads/1771428489070-55145932-kta_kiki.jpg", crewName: "Certified Guide: Kiki" },
  { name: "4D3N Ijen–Papuma–Tumpak Sewu–Bromo (Bali)", route: "/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n", price: "IDR 3,475,000/pax", image: "https://javavolcano-touroperator.com/uploads/1771428760524-516116110-kta_rendi.jpg", crewName: "Certified Guide: Rendi" },
  { name: "5D4N Ijen–Papuma–Tumpak Sewu–Bromo (Bali)", route: "/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-5d4n", price: "IDR 4,050,000/pax", image: "https://javavolcano-touroperator.com/uploads/1771428704448-911506028-kta_taufik.jpg", crewName: "Certified Guide: Taufik" }
];

const detailedTours = tours.map(tour => {
  return {
    ...tour,
    overview: {
      route_meta: tour.route.includes('surabaya') ? "Surabaya → Destinations → Drop-off" : "Bali → Destinations → Drop-off",
      highlights: [
        "Professional English-speaking guide/driver",
        "Comfortable private transport",
        "All entrance fees and permits included",
        "Safety-first approach with certified crew"
      ]
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Briefing",
        activities: [
          "Pickup from your location",
          "Transfer to accommodation",
          "Safety briefing and preparation"
        ]
      },
      {
        day: 2,
        title: "Exploration",
        activities: [
          "Early morning departure for sunrise",
          "Guided tour of the main attractions",
          "Return to accommodation or drop-off"
        ]
      }
    ],
    includes: [
      "Private AC transport",
      "Fuel, tolls, and parking",
      "English-speaking guide/driver",
      "Entrance tickets",
      "Mineral water"
    ],
    excludes: [
      "Meals (unless specified)",
      "Personal expenses",
      "Travel insurance",
      "Tipping"
    ],
    requirements: [
      "Warm jacket (temperatures can drop to 5-10°C)",
      "Comfortable walking shoes",
      "Personal medication"
    ]
  };
});

const ssotPath = './src/lib/ssot.ts';
let ssotContent = fs.readFileSync(ssotPath, 'utf8');

// Replace the tours array
const toursRegex = /tours:\s*\[[\s\S]*?\],\n  faq:/;
const newToursString = 'tours: ' + JSON.stringify(detailedTours, null, 4) + ',\n  faq:';

ssotContent = ssotContent.replace(toursRegex, newToursString);

fs.writeFileSync(ssotPath, ssotContent);
console.log('Updated ssot.ts with detailed tours');
