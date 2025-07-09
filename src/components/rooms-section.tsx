"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, Mountain, Users, Bed, Tv, Wind, Coffee, ClipboardCheck } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import { BookingModal } from "./booking-modal"

export function RoomsSection() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  // Only one carousel index for the best room
  const [bestRoomImageIndex, setBestRoomImageIndex] = useState(0)

  const rooms = [
    {
      id: 1,
      name: "Orchard View Deluxe",
      price: "₹4,500",
      image: null,
      comingSoon: true,
      description: "Cozy room with stunning apple orchard views and traditional Kashmiri decor.",
      size: "25 sqm",
      occupancy: "2 guests",
      amenities: [
        "Apple orchard view",
        "Traditional Kashmiri carpet",
        "Wooden furniture",
        "Complimentary breakfast"
      ],
    },
    {
      id: 2,
      name: "Apple Blossom Suite",
      price: "₹7,500",
      image: null,
      comingSoon: true,
      description: "Spacious suite with panoramic mountain views and luxury amenities.",
      size: "40 sqm",
      occupancy: "3 guests",
      amenities: [
        "Panoramic mountain view",
        "Separate living area",
        "Premium bedding",
        "Private balcony",
        "Mini bar"
      ],
    },
    {
      id: 3,
      name: "Heritage Royal Suite",
      price: "₹12,000",
      images: [
        "/images/WhatsApp Image 2025-07-05 at 17.47.57_9c879b22.jpg",
        "/images/WhatsApp Image 2025-07-05 at 17.47.17_5255281f.jpg",
        "/images/WhatsApp Image 2025-06-29 at 16.01.39_bb472265.jpg",
        "/images/WhatsApp Image 2025-06-29 at 16.01.44_8bd677ed.jpg"
      ],
      description: "Luxurious suite with antique furnishings and breathtaking valley views.",
      size: "60 sqm",
      occupancy: "4 guests",
      amenities: [
        "Antique Kashmiri furniture",
        "Private balcony",
        "Valley views",
        "Fireplace",
        "Butler service"
      ],
    },
  ];

  const roomFeatures = [
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected with our complimentary Wi-Fi" },
    { icon: Mountain, title: "Scenic Views", desc: "Breathtaking views of the mountains and valleys" },
    { icon: Wind, title: "Climate Control", desc: "Individually controlled heating and cooling" },
    { icon: Tv, title: "Flat Screen TV", desc: "Enjoy a wide range of channels" },
  ];

  const amenityIcons: { [key: string]: React.ReactNode } = {
    "Free WiFi": <Wifi className="w-4 h-4 mr-1" />,
    "Mountain View": <Mountain className="w-4 h-4 mr-1" />,
    "Heater": <Wind className="w-4 h-4 mr-1" />,
    "TV": <Tv className="w-4 h-4 mr-1" />,
    "Private Bathroom": <Bed className="w-4 h-4 mr-1" />,
    "Balcony": <Mountain className="w-4 h-4 mr-1" />,
    "Mini Bar": <Coffee className="w-4 h-4 mr-1" />,
    "Valley View": <Mountain className="w-4 h-4 mr-1" />,
    "Fireplace": <Wind className="w-4 h-4 mr-1" />,
    "Butler Service": <Users className="w-4 h-4 mr-1" />,
  };

  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="relative py-32 text-white overflow-hidden">
      {/* Enhanced Background with Kashmir Mountains */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1_UjtUj9B7PqGvTWNuRll0Vw.jpg"
          alt="Kashmir Mountains Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="z-0"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        
        {/* Additional atmospheric effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 animate-fade-in-up">
            Our Rooms & Suites
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience Kashmiri hospitality in our beautifully designed accommodations, where comfort meets tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            const isBestRoom = !!room.images;
            const handleNextImage = () => {
              if (!room.images) return;
              setBestRoomImageIndex((prev) => (prev + 1) % room.images.length);
            };
            return (
              <div
                key={room.id}
                className={`relative rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-3 hover:shadow-3xl group bg-black/40 backdrop-blur-sm ${index === 1 ? 'lg:scale-105' : ''}`}
              >
                {/* Full-width Room Image Banner or Carousel for best room */}
                <div className="relative w-full flex-shrink-0 p-4 pb-0">
                  {isBestRoom ? (
                    <div className="relative w-full h-72 flex items-center justify-center">
                      <img
                        src={room.images[bestRoomImageIndex]}
                        alt={room.name + ' photo'}
                        className="w-full h-72 object-cover rounded-2xl shadow-md border-4 border-white/30 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl animate-fade-in"
                        style={{ display: 'block' }}
                        loading="lazy"
                      />
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg z-20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        style={{ outline: 'none', border: 'none' }}
                        aria-label="Next image"
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 flex items-center justify-center bg-black/30 rounded-2xl border border-white/20">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-48 object-cover rounded-2xl opacity-40"
                        style={{ display: 'block' }}
                        loading="lazy"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white drop-shadow-lg">IMAGES COMING SOON</span>
                    </div>
                  )}
                  {index === 1 && (
                    <span className="absolute top-6 right-8 bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10">Most Popular</span>
                  )}
                </div>
                {/* Card Content */}
                <div className="flex flex-col flex-1 pt-6 pb-8 px-8">
                  <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg">{room.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-yellow-300">{room.price}</span>
                    <span className="text-sm text-gray-300">/night</span>
                  </div>
                  <p className="text-gray-200 mb-4 flex-grow">{room.description}</p>
                  <div className="flex justify-between text-sm text-gray-300 mb-4 border-t border-white/20 pt-4">
                    <span className="flex items-center gap-2"><Bed className="w-4 h-4" />{room.size}</span>
                    <span className="flex items-center gap-2"><Users className="w-4 h-4" />{room.occupancy}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-100 text-base">Room Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, i) => (
                        <span key={i} className="flex items-center gap-1 bg-black/40 text-white/90 px-3 py-1 rounded-full text-xs font-medium shadow border border-white/10">
                          {amenityIcons[amenity] || null}{amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full mt-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg py-3 flex items-center justify-center gap-2 shadow-lg rounded-xl"
                    onClick={() => {
                      setSelectedRoom(room.name)
                      setBookingOpen(true)
                    }}
                    aria-label={`Book ${room.name}`}
                  >
                    <ClipboardCheck className="w-6 h-6 mr-2" /> Book Now
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {bookingOpen && (
        <BookingModal
          onClose={() => setBookingOpen(false)}
          selectedRoom={selectedRoom}
        />
      )}
    </div>
  )
}