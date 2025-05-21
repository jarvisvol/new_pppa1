import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans bg-light">
    {/* <!-- Navigation --> */}
    <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <i className="fas fa-heart text-accent text-2xl"></i>
                    <span className="font-bold text-xl text-dark">Balaji Bookings</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#home" className="text-dark hover:text-accent transition">Home</Link>
                    <Link href="#services" className="text-dark hover:text-accent transition">Services</Link>
                    <Link href="#venues" className="text-dark hover:text-accent transition">Venues</Link>
                    <Link href="#gallery" className="text-dark hover:text-accent transition">Gallery</Link>
                    <Link href="#contact" className="text-dark hover:text-accent transition">Contact</Link>
                </div>
                <button className="md:hidden focus:outline-none">
                    <i className="fas fa-bars text-dark text-xl"></i>
                </button>
            </div>
        </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <section id="home" className="hero flex items-center justify-center text-center text-white pt-16">
        <div className="px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Dream Wedding Starts Here</h1>
            <p className="text-xl mb-8">Discover the perfect venue, exquisite catering, and premium entertainment for your special day</p>
            <Link href="#booking" className="bg-accent hover:bg-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block">
                Book Now
            </Link>
        </div>
    </section>

    {/* <!-- Services Section --> */}
    <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark mb-16">Our Premium Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Restaurant Service --> */}
                <div className="booking-card bg-white rounded-lg overflow-hidden p-6 text-center">
                    <div className="service-icon mb-4">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">Gourmet Catering</h3>
                    <p className="text-gray-600 mb-4">Exquisite menus crafted by award-winning chefs to delight your guests</p>
                    <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-6 rounded-full transition">
                        Book Restaurant
                    </button>
                </div>
                
                {/* <!-- Hotel Service --> */}
                <div className="booking-card bg-white rounded-lg overflow-hidden p-6 text-center">
                    <div className="service-icon mb-4">
                        <i className="fas fa-hotel"></i>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">Luxury Hotels</h3>
                    <p className="text-gray-600 mb-4">Elegant accommodations for you and your guests with special wedding packages</p>
                    <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-6 rounded-full transition">
                        Book Hotel
                    </button>
                </div>
                
                {/* <!-- Resort Service --> */}
                <div className="booking-card bg-white rounded-lg overflow-hidden p-6 text-center">
                    <div className="service-icon mb-4">
                        <i className="fas fa-umbrella-beach"></i>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">Exclusive Resorts</h3>
                    <p className="text-gray-600 mb-4">Breathtaking destinations for destination weddings and honeymoons</p>
                    <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-6 rounded-full transition">
                        Book Resort
                    </button>
                </div>
                
                {/* <!-- DJ Service --> */}
                <div className="booking-card bg-white rounded-lg overflow-hidden p-6 text-center">
                    <div className="service-icon mb-4">
                        <i className="fas fa-music"></i>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">Wedding DJs</h3>
                    <p className="text-gray-600 mb-4">Professional DJs to keep your celebration alive with the perfect playlist</p>
                    <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-6 rounded-full transition">
                        Book DJ
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Venues Section --> */}
    <section id="venues" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark mb-16">Featured Wedding Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Venue 1 --> */}
                <div className="booking-card rounded-lg overflow-hidden shadow-lg">
                     <Image width={100} height={48} src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Grand Ballroom" className="w-full h-64 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-dark mb-2">Grand Ballroom</h3>
                        <p className="text-gray-600 mb-4">Capacity: 300 guests | Indoor</p>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-accent">$5,000+</span>
                            <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-4 rounded-full transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Venue 2 --> */}
                <div className="booking-card rounded-lg overflow-hidden shadow-lg">
                    <Image width={100} height={48} src="https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Beach Resort" className="w-full h-64 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-dark mb-2">Oceanview Resort</h3>
                        <p className="text-gray-600 mb-4">Capacity: 200 guests | Outdoor</p>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-accent">$7,500+</span>
                            <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-4 rounded-full transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Venue 3 --> */}
                <div className="booking-card rounded-lg overflow-hidden shadow-lg">
                    <Image width={100} height={48} src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Garden Estate" className="w-full h-64 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-dark mb-2">Garden Estate</h3>
                        <p className="text-gray-600 mb-4">Capacity: 150 guests | Outdoor</p>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-accent">$4,200+</span>
                            <button className="bg-primary hover:bg-secondary text-dark font-medium py-2 px-4 rounded-full transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <button className="bg-accent hover:bg-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block">
                    View All Venues
                </button>
            </div>
        </div>
    </section>

    {/* <!-- Booking Section --> */}
    <section id="booking" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <div className="bg-primary rounded-xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl font-bold text-center text-dark mb-8">Book Your Wedding Services</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-dark font-medium mb-2">Service Type</label>
                        <select className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            <option>Select Service</option>
                            <option>Restaurant/Catering</option>
                            <option>Hotel Accommodation</option>
                            <option>Resort Venue</option>
                            <option>DJ/Entertainment</option>
                            <option>Complete Package</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-dark font-medium mb-2">Wedding Date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                    </div>
                    <div>
                        <label className="block text-dark font-medium mb-2">Guest Count</label>
                        <input type="number" placeholder="Approximate number of guests" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                    </div>
                    <div>
                        <label className="block text-dark font-medium mb-2">Budget Range</label>
                        <select className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            <option>Select Budget</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000 - $20,000</option>
                            <option>$20,000 - $50,000</option>
                            <option>$50,000+</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-dark font-medium mb-2">Special Requests</label>
                        <textarea rows="4" placeholder="Tell us about your dream wedding..." className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    </div>
                    <div className="md:col-span-2 text-center">
                        <button type="submit" className="bg-accent hover:bg-dark text-white font-bold py-3 px-12 rounded-full transition duration-300 transform hover:scale-105">
                            Submit Booking Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Gallery Section --> */}
    <section id="gallery" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark mb-16">Wedding Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Wedding 1" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/> 
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Wedding 2" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/> 
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Wedding 3" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/> 
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Wedding 4" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/> 
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Wedding 5" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/> 
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Wedding 6" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/>
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Wedding 7" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/>
                <Image width={100} height={48} src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Wedding 8" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition"/>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section className="py-20 parallax" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)"}}>
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-16">What Couples Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="testimonial-card rounded-lg p-8">
                    <div className="flex items-center mb-4">
                        <div className="text-accent text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-6">"Eternal Bliss made our wedding dreams come true! The resort venue was breathtaking and their attention to detail was impeccable."</p>
                    <div className="flex items-center">
                        <Image width={100} height={48} src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah J." className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-dark">Sarah & Michael</h4>
                            <p className="text-gray-600">May 2023</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div className="testimonial-card rounded-lg p-8">
                    <div className="flex items-center mb-4">
                        <div className="text-accent text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-6">"The DJ they recommended kept our dance floor packed all night! The catering was delicious and our guests are still talking about it."</p>
                    <div className="flex items-center">
                        <Image width={12} height={12} src="https://randomuser.me/api/portraits/men/32.jpg" alt="David K." className="w-12 h-12 rounded-full mr-4"/> 
                        <div>
                            <h4 className="font-bold text-dark">David & Emily</h4>
                            <p className="text-gray-600">August 2023</p>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div className="testimonial-card rounded-lg p-8">
                    <div className="flex items-center mb-4">
                        <div className="text-accent text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-6">"From the initial consultation to the last dance, everything was perfect. The hotel accommodations for our guests were luxurious."</p>
                    <div className="flex items-center">
                        <Image width={12} height={12} src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jessica L." className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-dark">Jessica & Robert</h4>
                            <p className="text-gray-600">June 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-dark mb-6">Contact Us</h2>
                    <p className="text-gray-600 mb-8">Ready to start planning your dream wedding? Our team of wedding specialists is here to help you every step of the way.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="text-accent text-xl mr-4 mt-1">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark mb-1">Our Office</h4>
                                <p className="text-gray-600">123 Wedding Lane, Suite 100<br/>Beverly Hills, CA 90210</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="text-accent text-xl mr-4 mt-1">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark mb-1">Call Us</h4>
                                <p className="text-gray-600">(310) 555-1212<br/>Mon-Fri: 9am-6pm</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="text-accent text-xl mr-4 mt-1">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark mb-1">Email Us</h4>
                                <p className="text-gray-600">info@eternalbliss.com<br/>Response within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-light rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-dark font-medium mb-2">Your Name</label>
                            <input type="text" placeholder="John & Jane" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-dark font-medium mb-2">Email Address</label>
                            <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-dark font-medium mb-2">Phone Number</label>
                            <input type="tel" placeholder="(123) 456-7890" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-dark font-medium mb-2">Wedding Date (if known)</label>
                            <input type="date" className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-dark font-medium mb-2">Your Message</label>
                            <textarea rows="4" placeholder="Tell us about your wedding plans..." className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent hover:bg-dark text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <i className="fas fa-heart text-primary text-2xl"></i>
                        <span className="font-bold text-xl">Eternal Bliss</span>
                    </div>
                    <p className="text-gray-300 mb-4">Making wedding dreams come true since 2010.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-300 hover:text-primary transition"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition"><i className="fab fa-instagram"></i></Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition"><i className="fab fa-pinterest-p"></i></Link>
                        <Link href="#" className="text-gray-300 hover:text-primary transition"><i className="fab fa-twitter"></i></Link>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Home</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">About Us</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Services</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Venues</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Gallery</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Wedding Venues</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Catering</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Hotel Stays</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">Resort Packages</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-primary transition">DJ & Entertainment</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                    <p className="text-gray-300 mb-4">Subscribe for wedding tips and special offers.</p>
                    <form className="flex">
                        <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-dark w-full"/>
                        <button type="submit" className="bg-primary hover:bg-accent text-dark px-4 py-2 rounded-r-lg transition">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2023 Eternal Bliss Wedding Services. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  );
}
