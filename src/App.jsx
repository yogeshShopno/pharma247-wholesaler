import { useState } from 'react'
import { Search, MapPin, Phone, Clock, Package, AlertCircle, TrendingUp, Mail, Building2, User, Shield, Star, CheckCircle, Navigation, MessageCircle, Globe } from 'lucide-react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedWholesaler, setSelectedWholesaler] = useState(null)

  // Mock data for demonstration
  const mockResults = [
    {
      id: 1,
      itemName: 'asN 40',
      brandName: 'Pantoprazole',
      saltName: 'Pantoprazole Sodium',
      quantity: 500,
      price: 145.50,
      wholesaler: 'MediCare Distributors',
      area: 'Satellite',
      city: 'Ahmedabad',
      distance: 3.2,
      lastUpdate: '2026-01-01 09:30 AM',
      wholesalerDetails: {
        ownerName: 'Rajesh Kumar',
        mobile: '+91 98765 43210',
        email: 'contact@medicare.com',
        fullAddress: '45, Medical Complex, Satellite Road, Ahmedabad - 380015',
        rating: 4.8,
        totalProducts: 8500,
        establishedYear: 2010,
        verified: true,
        deliveryAvailable: true
      }
    },
    {
      id: 2,
      itemName: 'laol 60',
      brandName: 'Pantocid',
      saltName: 'Pantoprazole Sodium',
      quantity: 1200,
      price: 142.00,
      wholesaler: 'HealthPlus Wholesale',
      area: 'Maninagar',
      city: 'Ahmedabad',
      distance: 5.8,
      lastUpdate: '2026-01-01 08:15 AM',
      wholesalerDetails: {
        ownerName: 'Amit Patel',
        mobile: '+91 98765 43211',
        email: 'info@healthplus.com',
        fullAddress: '128, Trade Center, Maninagar, Ahmedabad - 380008',
        rating: 4.6,
        totalProducts: 12000,
        establishedYear: 2008,
        verified: true,
        deliveryAvailable: true
      }
    },
    {
      id: 3,
      itemName: 'jajam 50',
      brandName: 'Pantocid DSR',
      saltName: 'Pantoprazole + Domperidone',
      quantity: 350,
      price: 168.00,
      wholesaler: 'Prime Pharma Solutions',
      area: 'Vastrapur',
      city: 'Ahmedabad',
      distance: 8.5,
      lastUpdate: '2026-01-01 10:00 AM',
      wholesalerDetails: {
        ownerName: 'Priya Shah',
        mobile: '+91 98765 43212',
        email: 'sales@primepharma.com',
        fullAddress: '67, Pharma Hub, Vastrapur, Ahmedabad - 380054',
        rating: 4.9,
        totalProducts: 15000,
        establishedYear: 2005,
        verified: true,
        deliveryAvailable: false
      }
    },
    {
      id: 4,
      itemName: 'ososl 40',
      brandName: 'Pantosec',
      saltName: 'Pantoprazole Sodium',
      quantity: 800,
      price: 139.50,
      wholesaler: 'Global Medical Traders',
      area: 'Navrangpura',
      city: 'Ahmedabad',
      distance: 12.3,
      lastUpdate: '2025-12-31 05:45 PM',
      wholesalerDetails: {
        ownerName: 'Suresh Mehta',
        mobile: '+91 98765 43213',
        email: 'contact@globalmed.com',
        fullAddress: '234, Commerce Plaza, Navrangpura, Ahmedabad - 380009',
        rating: 4.5,
        totalProducts: 9500,
        establishedYear: 2012,
        verified: true,
        deliveryAvailable: true
      }
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearching(true)
      setShowResults(false)
      setSelectedWholesaler(null)
      setTimeout(() => {
        setIsSearching(false)
        setShowResults(true)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className=" rounded-xl flex items-center justify-center  ">

                <img src='/pharmalogo.webp' className='h-14'></img>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="bg-gradient-to-r  from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700  text-white  md:flex items-center space-x-2 px-4 py-2 px-6 py-2 rounded-lg font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl">
                <User className="w-4 h-4" />
                <span>  Register to become wholesaler</span>
              </button>

            </div>
          </div>


        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-5xl font-bold text-slate-800 mb-4 leading-tight">
              Find Medicines<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Near You, Instantly
              </span>
            </h2>

          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-4 animate-slideUp">
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200/60 overflow-hidden">
              <div className="flex items-center p-2">
                <div className="flex-1 flex items-center space-x-3 px-4">
                  <Search className="w-6 h-6 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by medicine name (e.g, Dolo 650)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 py-4 text-lg outline-none text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSearching ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Filter */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-500/10 border border-slate-200/60 overflow-hidden">
              <div className="flex items-center p-2">
                <div className="flex-1 flex items-center space-x-3 px-4">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter your location (pincode or area)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 py-3 outline-none text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <div className="border-l border-slate-200 px-2">
                  <select
                    className="px-4 py-3 text-sm text-slate-500 font-medium bg-transparent outline-none cursor-pointer"
                    defaultValue="70"
                  >
                    <option value="10">5KM - 10KM</option>
                    <option value="25">10KM - 25KM</option>
                    <option value="50">25KM - 50KM </option>
                    <option value="100">50KM - 100KM</option>
                    <option value="500">100KM - 500KM</option>

                  </select>
                </div>

              </div>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Active Wholesalers', value: '5,247', icon: Package },
              { label: 'Product Listings', value: '50M+', icon: TrendingUp },
              { label: 'Daily Updates', value: '24/7', icon: Clock }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 flex items-center space-x-3 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loading Screen */}
      {isSearching && (
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-500/20 border border-slate-200/60 p-12">
              <div className="text-center">
                {/* Animated Logo */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 animate-pulse-slow shadow-xl shadow-blue-500/50">
                  <Search className="w-12 h-12 text-white animate-bounce-slow" />
                </div>

                {/* Loading Text */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Searching for "{searchQuery}"
                </h3>
                <p className="text-slate-600 mb-8">
                  Scanning across 5000+ wholesalers in your area...
                </p>

                {/* Progress Steps */}
                <div className="space-y-4 mb-8">
                  {[
                    { text: 'Connecting to inventory database', delay: '0ms' },
                    { text: 'Searching matching products', delay: '600ms' },
                    { text: 'Calculating distances', delay: '1200ms' },
                    { text: 'Preparing results', delay: '1800ms' }
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-fadeIn"
                      style={{ animationDelay: step.delay }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                      <span className="text-slate-600 text-sm">{step.text}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {showResults && (
        <section className="pb-16 px-4 animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Search Results...</h3>

              </div>

            </div>

            {/* Results Grid */}
            <div className="space-y-4">
              {mockResults.map((result, index) => (
                <div
                  key={result.id}
                  className="bg-white rounded-2xl shadow-lg shadow-slate-500/10 border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-bold text-slate-800">{result.itemName}</h4>
                        </div>
                        {/* <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                          <span className="font-medium">{result.brandName}</span>
                          <span className="text-slate-400">•</span>
                          <span>{result.saltName}</span>
                        </div> */}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {/* ₹{result.price} */}
                        </div>
                      </div>
                    </div>

                    {/* Wholesaler Info */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                            Wholesaler
                          </div>
                          <div className="font-bold text-slate-800">{result.wholesaler}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                            Location
                          </div>
                          <div className="font-bold text-slate-800">{result.area}, {result.city}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                            Distance
                          </div>
                          <div className="font-bold text-blue-600">{result.distance} KM away</div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        {/* <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-600">
                            <span className="font-bold text-slate-800">{result.quantity}</span> units available
                          </span>
                        </div> */}

                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setSelectedWholesaler(result)}
                          className="flex items-center space-x-2 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-5 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                          <Building2 className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl">
                          <Phone className="w-4 h-4" />
                          <span>Contact</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Wholesaler Detail Modal */}
      {selectedWholesaler && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 relative">
              <button
                onClick={() => setSelectedWholesaler(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex">
                  <h2 className="text-2xl font-semibold text-white ">
                    {selectedWholesaler.wholesaler}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Contact Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase">Owner Name</div>
                        <div className="font-semibold text-slate-800">
                          {selectedWholesaler.wholesalerDetails.ownerName}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase">Mobile</div>
                        <div className="font-semibold text-slate-800">
                          {selectedWholesaler.wholesalerDetails.mobile}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase">Email</div>
                        <div className="font-semibold text-slate-800">
                          {selectedWholesaler.wholesalerDetails.email}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase">Distance</div>
                        <div className="font-semibold text-slate-800">
                          {selectedWholesaler.distance} KM away
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Address</span>
                </h3>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {selectedWholesaler.wholesalerDetails.fullAddress}
                  </p>
                  <button className=" mt-4 flex items-center space-x-2 text-white hover:text-white font-semibold transition-colors">
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>

              {/* Business Stats */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Business Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {selectedWholesaler.wholesalerDetails.totalProducts.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Total Products</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all duration-300 hover:shadow-xl">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Pharma247</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Manage your pharmacy anytime, anywhere with Pharma24*7's cloud-based software, Chemist App & Patient App. Automate billing, inventory, online orders, GST reports, and customer engagement seamlessly. Stay connected and grow your business with ease!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Search Medicines', 'Browse Wholesalers', 'How It Works', 'Pricing', 'About Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-sm font-medium">inquiry@pharma247.in</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="text-sm font-medium">+91 908 111 247</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-400">Address</div>
                    <div className="text-sm font-medium">SF-14/B,DHARTI CITY COMPLEX ,KADI 382715</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                © 2026 Pharma247. All rights reserved. | High Performance Wholesaler Inventory System
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-progress {
          animation: progress 2s ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
