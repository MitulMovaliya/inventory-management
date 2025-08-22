import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock,
  Package,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function page() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 10,000+ businesses worldwide
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-6">
              Smart Inventory
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Management Made Simple
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business operations with our AI-powered inventory
              management platform. Track stock, manage sales, analyze
              performance, and scale your business effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <div className="bg-orange-500 group hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center border border-gray-600 hover:border-gray-500">
                Watch Demo
                <BarChart3 className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative container mx-auto px-4 pb-20 ">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 shadow-2xl">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">Total Products</h3>
                      <Package className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-2xl font-bold text-white">1,247</p>
                    <p className="text-green-400 text-sm">
                      +12% from last month
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">Monthly Sales</h3>
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold text-white">₹2,84,950</p>
                    <p className="text-green-400 text-sm">
                      +8% from last month
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">
                        Low Stock Items
                      </h3>
                      <ShoppingCart className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-2xl font-bold text-white">23</p>
                    <p className="text-red-400 text-sm">Need attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="features"
        className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gray-800/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Everything You Need to Scale Your Business
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you
              need to manage your inventory efficiently and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Package className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Real-time Inventory Tracking
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Monitor stock levels in real-time with automated alerts for low
                inventory, preventing stockouts and optimizing your supply
                chain.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
                <ShoppingCart className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Smart Sales Management
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Streamline your sales process with intelligent order management,
                automated invoicing, and seamless payment tracking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-green-500/50 transition-all duration-300">
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-6 group-hover:bg-green-500/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Advanced Analytics
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Gain deep insights with comprehensive analytics, sales
                forecasting, and detailed reporting to make data-driven
                decisions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 rounded-lg w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Team Collaboration
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Manage multiple users with role-based access control, ensuring
                security while enabling efficient team collaboration.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
              <div className="p-3 bg-yellow-500/10 rounded-lg w-fit mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <Shield className="w-8 h-8 text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Enterprise Security
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Bank-grade security with encrypted data storage, secure API
                access, and compliance with industry standards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 rounded-lg w-fit mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <Clock className="w-8 h-8 text-indigo-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                24/7 Support
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Round-the-clock customer support with dedicated account managers
                and comprehensive documentation to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id=""
        className="sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gray-800/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Loved by Businesses Worldwide
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what our customers have to say about their experience with
              InvMng
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    className="h-5 w-5 text-yellow-500 fill-current"
                    key={index}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quos perferendis earum eaque ex molestias impedit, eos, maiores"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold">XXXXXXXXXXXXX</p>
                  <p className="text-gray-400 text-sm">CEO, XXXX</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    className="h-5 w-5 text-yellow-500 fill-current"
                    key={index}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quos perferendis earum eaque ex molestias impedit, eos, maiores"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold">XXXXXXXXXXXXX</p>
                  <p className="text-gray-400 text-sm">CEO, XXXX</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    className="h-5 w-5 text-yellow-500 fill-current"
                    key={index}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quos perferendis earum eaque ex molestias impedit, eos, maiores"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold">XXXXXXXXXXXXX</p>
                  <p className="text-gray-400 text-sm">CEO, XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gray-800/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Our pricing is straightforward and transparent. No hidden fees, no
              surprises. Just simple, honest pricing for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl text-center hover:border-orange-500/50 transition-all duration-300">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Starter
              </h4>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white mb-2">
                  ₹999
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <p className="text-gray-400">Perfect for small businesses</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Up to 500 products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Basic reporting & analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Mobile app access
                </li>
              </ul>
              <div className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                Start Free Trial
              </div>
            </div>

            <div className="bg-gradient-to-b from-orange-500/10 to-gray-900/50 backdrop-blur-sm p-8 border-2 border-orange-500 rounded-xl text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">
                Professional
              </h4>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white mb-2">
                  ₹2,499
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <p className="text-gray-400">Best for growing businesses</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Up to 5,000 products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Advanced analytics & forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Priority email & chat support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  API access & integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Multi-location support
                </li>
              </ul>
              <div className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                Start Free Trial
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-700 rounded-xl text-center hover:border-blue-500/50 transition-all duration-300">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Enterprise
              </h4>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white mb-2">
                  ₹4,999
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <p className="text-gray-400">For large organizations</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Unlimited products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Custom reports & dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  24/7 phone & email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Custom integrations
                </li>
              </ul>
              <div className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                Contact Sales
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400">
              <Shield className="w-5 h-5 inline mr-2" />
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>
      <section className="sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gradient-to-l from-blue-900/10 to-orange-500/10">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of businesses that trust InvMng to manage their
              inventory efficiently. Start your free trial today and see the
              difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Sign In to Your Account
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
