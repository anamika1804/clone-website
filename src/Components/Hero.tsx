// hero.tsx

import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
      <div className="container">
        <div className="flex flex-wrap items-start justify-center gap-8 p-4"></div>
      <section className="bg-white text-black py-20 text-center">
        <div className="text-center py-16 px-4">
      {/* Main Heading */}
    {/* Description Text - Centered */}
    <div className="text-center mb-8">
  <h1 className="text-4xl font-bold mb-4">
    Grow your dealership with car loans and digital tools for dealers
  </h1>
  <p className="text-gray-600 text-xl mx-auto max-w-4xl leading-relaxed">
    We enable dealers to buy more cars through our inventory loan solutions and sell cars more efficiently through our
    Dealership Management System with its inventory management, marketing solutions, and market insights.
  </p>
</div>


      
      {/* Get Started Button */}
      <a href="#get-started" className="bg-blue-800 text-white px-6 py-3 rounded-lg text-lg">
        Get Started
      </a>

      {/* Hero Image */}
      <div className="mt-16">
        <Image 
          src="/hero.jpg" // Path to your hero image
          alt="Hero Image"
          width={900} // Adjust width as per your requirement
          height={900} // Adjust height as per your requirement
          className="mx-auto mb-6" // Centering the image
        />
      </div>

      {/* Regulated By Section */}
      <div className="mt-8">
  <p className="text-gray-600 text-xl font-bold mb-4">Regulated By</p>
</div>

{/* Image 1 Below the Regulated By Section */}
<div>
  <Image 
    src="/image1.jpg" // Path to your second image
    alt="Image 1"
    width={200} // Adjust width as per your requirement
    height={300} // Adjust height as per your requirement
    className="mx-auto" // Centering the image
  />
</div>

    </div>

        {/* second section */}
  
        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>
  
        {/* Two-Column Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
  <h2 className="font-bold text-black mb-4 text-3xl leading-tight">
    Everything You Need to Grow Your Business
  </h2>
  <p className="text-gray-600 mt-8 max-w-2xl mx-auto" style={{  textAlign:"left"
}}>
    OneLot is your trusted lending and financing partner, exclusively tailored for used car dealerships. We also offer digital tools for streamlined operations and growth of your dealership.
  </p>
</div>

  
          {/* Right Section */}
          <div>
  <div className="mb-8">
    <div className="flex items-center space-x-2"> {/* Space between items */}
      <svg className="w-8 h-8 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
      </svg>
      <h3 className="font-bold text-black text-2xl leading-snug">Dealer Inventory Loan</h3> {/* Increased heading height */}
    </div>
    <div style={{textAlign:"left", marginTop:10, marginLeft:50,}}>
    <p className="text-purple-600 mb-2" >Accelerate your growth with tailored loan solutions.</p>
    <p className="text-gray-600 mb-4" >Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.</p>
    <a href="#learn-more" className="text-purple-600 font-bold">Learn More</a>
    </div>
  </div>

  <div>
    <div className="flex items-center space-x-2"> {/* Space between items */}
      <svg className="w-8 h-8 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
      </svg>
      <h3 className="font-bold text-black text-2xl leading-snug">Dealership Management System</h3> {/* Increased heading height */}
    </div>
    <div style={{  textAlign:"left", marginTop:10, marginLeft:50,
}}>
    <p className="text-purple-600 mb-2" >Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.</p>
    <p className="text-gray-600 mb-4">OneLot offers a suite of powerful digital tools designed to optimize your dealerships operations.</p>
    <a href="#learn-more" className="text-purple-600 font-bold">Learn More</a>
    </div>
  </div>
</div>
</div>



        {/* third section */}

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>
  
       {/* Two-Column Section */}
<div className="grid grid-cols-2 gap-8">
  {/* Left Section - Image */}
  <div>
    <Image
      src="/car-financing-pic.jpg" // Replace with your actual image path
      alt="Car Financing"
      width={500}  // Adjust width as needed
      height={300} // Adjust height as needed
      className="w-full h-auto"  // Make sure the image is responsive
    />
  </div>

  {/* Right Section - Text Content */}
  <div>
  {/* Car Financing Heading - Big Bold */}
  <h1 className="font-bold text-3xl text-black mb-8 text-left leading-relaxed">Car Financing</h1>  {/* Increased margin and line height */}

  {/* Second Heading - Dealer Inventory Loans */}
  <h3 className="font-bold text-xl text-black mb-6 text-left leading-relaxed">Dealer Inventory Loans</h3>  {/* Increased margin and line height */}

  {/* Content for Dealer Inventory Loans */}
  <p className="text-gray-600 mb-8 text-left leading-relaxed">
    OneLot’s working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
  </p>
  
  {/* First Divider */}
  <hr className="border-t-2 border-gray-400 mb-8" />

  {/* Points */}
  <div className="mb-8">
    <p className="text-gray-600 font-bold text-sm mb-4 text-left leading-relaxed">
      Interest as low as 1.8% per month with daily calculation of interest
    </p>
    <p className="text-gray-600 font-bold text-sm mb-4 text-left leading-relaxed">
      Financing up to 70% of the vehicle purchase
    </p>
    <p className="text-gray-600 font-bold text-sm mb-4 text-left leading-relaxed">
      Financing period up to 90 days with a flexible repayment schedule at any point
    </p>
  </div>

  {/* Second Divider */}
  <hr className="border-t-2 border-gray-400 mb-8" />

  {/* Call to Action Text */}
  <p className="text-gray-600 mb-8 text-left leading-relaxed">
    Use OneLots financing solution today, grow the number of cars in your lot, and increase your profits.
  </p>

 {/* Button */}
<a href="#view-loans" className="bg-blue-600 text-white px-6 py-3 rounded-[8px] font-bold block">
  View Loans &rarr;
</a>
 {/* Used inline-block to align button left */}
</div>

</div>


        {/* fourth section */}
        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>
  
       {/* Two-Column Section */}
<div className="grid grid-cols-2 gap-8">
  {/* Left Section */}
  <div className="text-left">
  <h2 className="font-bold text-black mb-4 text-2xl leading-tight">Dealership Management System</h2>
  <p className="text-gray-600 mb-4">
    OneLot’s digital platform is built with a single goal: to help used car dealers operate their business more efficiently.
  </p>
  
  {/* Divider */}
  <div className="border-t border-gray-300 mb-4"></div>

  {/* Points */}
  <div className="mb-4">
    <p className="text-gray-600 mb-2">
      <strong>Inventory Management:</strong> Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.
    </p>
    <p className="text-gray-600 mb-2">
      <strong>Marketing Tools:</strong> Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click.
    </p>
    <p className="text-gray-600 mb-4">
      <strong>Marketing Insights (Coming Soon):</strong> Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.
    </p>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-300 mb-4"></div>

  {/* Sign up Text */}
  <p className="text-gray-600 mb-4">
    Sign up for OneLots dealer platform today, and make managing your cars easier.
  </p>

  {/* Button */}
  <a href="#explore-loans" className="bg-blue-600 text-white px-6 py-3 rounded-[8px] font-bold block text-center align-middle">
  Explore now &rarr;
</a>

 {/* Used inline-block to align button left */}
</div>


  {/* Right Section */}
  <div>
  <Image 
    src="/dealership-management-system-pic.jpg" 
    alt="Dealership Management" 
    width={500} // adjust width as needed
    height={300} // adjust height as needed
    className="w-full h-auto" 
  />
</div>
</div>

        {/* fifth section */}
        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>
  
        {/* Two-Column Section */}
<div className="grid grid-cols-1 gap-8">
  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="font-bold text-black text-4xl mb-6 leading-tight">Why OneLot?</h2>
  </div>

    

  <div className="flex justify-between" style={{flexWrap:"wrap"}}>
  {/* Card 1 */}
  <div className="w-full md:w-1/4 border-2 border-gray-700 rounded-lg p-8 text-center shadow-lg min-h-[500px] flex flex-col justify-between">
    {/* Lock Icon with light purple box */}
    <div className="flex justify-center items-center bg-purple-200 p-6 mb-6 rounded-full">
      <svg className="w-10 h-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.69 2 6 4.69 6 8v4H4v10h16V12h-2V8c0-3.31-2.69-6-6-6zM6 12h12v8H6z" />
      </svg>
    </div>
    
    {/* Title */}
    <h3 className="font-bold text-black text-2xl mb-6">Trust</h3>
    {/* Text */}
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">Regulated by Securities and Exchange Commission (SEC) Philippines</p>
  </div>

  {/* Card 2 */}
  <div className="w-full md:w-1/4 border-2 border-gray-700 rounded-lg p-8 text-center shadow-lg min-h-[500px] flex flex-col justify-between">
    {/* Lock Icon with light purple box */}
    <div className="flex justify-center items-center bg-purple-200 p-6 mb-6 rounded-full">
      <svg className="w-10 h-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.69 2 6 4.69 6 8v4H4v10h16V12h-2V8c0-3.31-2.69-6-6-6zM6 12h12v8H6z" />
      </svg>
    </div>
    {/* Title */}
    <h3 className="font-bold text-black text-2xl mb-6">High Amount</h3>
    {/* Text */}
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">Get the highest loan amounts compared to other banks and lenders</p>
  </div>

  {/* Card 3 */}
  <div className="w-full md:w-1/4 border-2 border-gray-700 rounded-lg p-8 text-center shadow-lg min-h-[500px] flex flex-col justify-between">
    {/* Lock Icon with light purple box */}
    <div className="flex justify-center items-center bg-purple-200 p-6 mb-6 rounded-full">
      <svg className="w-10 h-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.69 2 6 4.69 6 8v4H4v10h16V12h-2V8c0-3.31-2.69-6-6-6zM6 12h12v8H6z" />
      </svg>
    </div>
    {/* Title */}
    <h3 className="font-bold text-black text-2xl mb-6">Fast</h3>
    {/* Text */}
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">Get the money within a few hours on the same day</p>
  </div>

  {/* Card 4 */}
  <div className="w-full md:w-1/4 border-2 border-gray-700 rounded-lg p-8 text-center shadow-lg min-h-[500px] flex flex-col justify-between">
    {/* Lock Icon with light purple box */}
    <div className="flex justify-center items-center bg-purple-200 p-6 mb-6 rounded-full">
      <svg className="w-10 h-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.69 2 6 4.69 6 8v4H4v10h16V12h-2V8c0-3.31-2.69-6-6-6zM6 12h12v8H6z" />
      </svg>
    </div>
    {/* Title */}
    <h3 className="font-bold text-black text-2xl mb-6">Flexible</h3>
    {/* Text */}
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">Loans are tailored to your needs</p>
  </div>

  {/* Card 5 */}
  </div>
</div>


        {/* sixth section */}
        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        
        <div className="testimonial-container my-8 text-center">
  <h2 className="font-bold text-xl text-black mb-4">Testimonial</h2>

  {/* Profile Picture */}
  <div className="flex justify-center items-center mb-4">
  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black">
    <Image 
      src="/user.jpg" // Make sure this is the correct path
      alt="Mark Vergel de Dios"
      width={128}  // Increased image size
      height={128} // Increased image size
      className="object-cover"
    />
  </div>
</div>

  {/* Testimonial Text */}
  <p className="text-black-600 mb-4">
    &ldquo;The service of OneLot is top-notch. They act fast and can provide dealers with the funds they need, when they need it.&rdquo;
  </p>

  {/* Name and Position */}
  <p className="font-bold text-black">Mark Vergel de Dios</p>
  <p className="text-gray-600">Owner, MVD Auto Works</p>
</div>

        {/* seventh section */}
        {/* Stay Connected Section */}
        <div className="my-8 border-t border-gray-300"></div>


{/* Stay Connected Section */}
<div className="text-center py-16 px-4">
  {/* Heading */}
  <h2 className="font-bold text-black text-3xl mb-4">Stay Connected</h2>
  
  {/* Subtext */}
  <p className="text-gray-600 mb-8">
    Follow OneLot on Facebook and Instagram <br /> to stay up to date with our latest offers, updates, and new product features.
  </p>

  {/* Rectangular Boxes with Icons */}
  <div className="flex justify-center space-x-8">
    {/* Facebook Box */}
    <div className="flex items-center border-2 border-black rounded-md py-3 px-6 space-x-3 hover:bg-gray-100 transition-all duration-200">
      <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
      <span className="text-black font-semibold">Follow us on Facebook</span>
    </div>

    {/* Instagram Box */}
    <div className="flex items-center border-2 border-black rounded-md py-3 px-6 space-x-3 hover:bg-gray-100 transition-all duration-200">
      <FaInstagram className="text-xl hover:text-pink-600 cursor-pointer" />
      <span className="text-black font-semibold">Follow us on Instagram</span>
    </div>
  </div>
</div>


        {/* eigth section */}
        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>
  
        <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* FAQ Heading */}
        <h2 className="text-black text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        {/* Questions */}
        <div className="space-y-4 mb-8">
          <p className="text-black font-medium">What is OneLot?</p>
          <p className="text-black font-medium">What kind of financing does OneLot do?</p>
          <p className="text-black font-medium">Is OneLot a bank?</p>
        </div>

        {/* Get Started Heading */}
        <h2 className="text-black text-3xl font-bold mb-4">Get Started Today</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
        </p>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
          Inquire Now
        </button>

        {/* Footer */}
        <div className="mt-16 flex justify-between items-start text-left">
          {/* Left - Logo with Icon */}
          <div className="flex items-center space-x-2">
          <Image 
                src="/logo.jpg" // Use logo.jpg
                alt="OneLot Logo"
                width={50}       // Set the logo width to 30px to make it small
                height={40}      // Set the logo height to 30px to make it small
                className="object-contain"
              />
  <div className="text-black font-bold text-xl">OneLot</div>
</div>


          {/* Right - Links in Two Columns */}
          <div className="flex space-x-12">
  <div className="text-gray-700">
    <p className="font-bold">Company</p>
    <p className="text-gray-500">Home</p>
    <p className="text-gray-500">About</p>
    <p className="text-gray-500">Contact</p>
    <p className="text-gray-500">FAQs</p>
  </div>

  <div className="text-gray-700">
    <p className="font-bold">Legal</p>
    <p className="text-gray-500">Consent</p>
    <p className="text-gray-500">Privacy</p>
    <p className="text-gray-500">Terms</p>
  </div>
</div>

        </div>
      </div>
    </div>
        {/* nine section */}

      </section>
      </div>
    );

  };
  
  export default Hero;
  