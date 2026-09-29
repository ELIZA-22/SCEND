'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function RequestPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Client Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    clientType: 'individual',
    
    // Security Request Details
    serviceType: 'personal-protection',
    location: 'lagos',
    specificLocation: '',
    startDate: '',
    endDate: '',
    duration: 'daily',
    numberOfPersonnel: '1',
    
    // Requirements
    protectionLevel: 'standard',
    armedSecurity: 'no',
    drivingRequired: 'no',
    vehicleProvided: 'no',
    
    // Additional Details
    riskLevel: 'low',
    specialRequirements: '',
    emergencyContact: '',
    referralSource: '',
    
    // Agreement
    agreedToTerms: false,
    confidentialityAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (currentStep === 2) {
      if (!formData.specificLocation.trim()) newErrors.specificLocation = 'Specific location is required';
      if (!formData.startDate) newErrors.startDate = 'Start date is required';
      if (!formData.endDate) newErrors.endDate = 'End date is required';
    }

    if (currentStep === 4) {
      if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to terms and conditions';
      if (!formData.confidentialityAgreed) newErrors.confidentialityAgreed = 'You must agree to confidentiality terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-dark-50 mb-4">Request Submitted Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Your security request has been received. Our team will review your requirements and contact you within 2 hours with matched security professionals.
          </p>
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <p className="font-bold text-dark-50 mb-2">Request ID: #SCND-{Date.now().toString().slice(-6)}</p>
            <p className="text-sm text-gray-600">We've sent a confirmation email to <strong>{formData.email}</strong></p>
          </div>
          <div className="space-y-3">
            <Link 
              href="/dashboard"
              className="block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            >
              View Your Requests
            </Link>
            <Link 
              href="/"
              className="block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <Shield className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold">SCEND</span>
            </Link>
            <div className="text-sm text-gray-600">
              Need help? Call <strong>0800-000-0000</strong>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, title: 'Your Info' },
              { num: 2, title: 'Requirements' },
              { num: 3, title: 'Details' },
              { num: 4, title: 'Review' }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {s.num}
                  </div>
                  <div className={`text-xs mt-2 ${step >= s.num ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                    {s.title}
                  </div>
                </div>
                {idx < 3 && (
                  <div className={`w-16 md:w-32 h-1 mx-2 ${
                    step > s.num ? 'bg-primary-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Step 1: Client Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-50 mb-2">Your Information</h2>
                  <p className="text-gray-600">All information is confidential and encrypted</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`border-2 rounded-lg p-4 cursor-pointer ${
                      formData.clientType === 'individual' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="clientType"
                        value="individual"
                        checked={formData.clientType === 'individual'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="font-medium">Individual</div>
                      <div className="text-sm text-gray-600">Personal protection</div>
                    </label>
                    <label className={`border-2 rounded-lg p-4 cursor-pointer ${
                      formData.clientType === 'corporate' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="clientType"
                        value="corporate"
                        checked={formData.clientType === 'corporate'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="font-medium">Corporate</div>
                      <div className="text-sm text-gray-600">Business/Company</div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="080XXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {formData.clientType === 'corporate' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Security Requirements */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-50 mb-2">Security Requirements</h2>
                  <p className="text-gray-600">Tell us what you need</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="personal-protection">Personal Protection</option>
                    <option value="executive-protection">Executive Protection</option>
                    <option value="event-security">Event Security</option>
                    <option value="travel-security">Travel Security</option>
                    <option value="residential-security">Residential Security</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="port-harcourt">Port Harcourt</option>
                      <option value="ibadan">Ibadan</option>
                      <option value="kano">Kano</option>
                      <option value="enugu">Enugu</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Personnel *
                    </label>
                    <select
                      name="numberOfPersonnel"
                      value={formData.numberOfPersonnel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="1">1 Officer</option>
                      <option value="2">2 Officers</option>
                      <option value="3">3 Officers</option>
                      <option value="4">4 Officers</option>
                      <option value="5+">5+ Officers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Location/Address *
                  </label>
                  <input
                    type="text"
                    name="specificLocation"
                    value={formData.specificLocation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.specificLocation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Victoria Island, Banana Island, Maitama"
                  />
                  {errors.specificLocation && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.specificLocation}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.startDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.startDate && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.startDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      min={formData.startDate || new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.endDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.endDate && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.endDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration Type
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-50 mb-2">Additional Details</h2>
                  <p className="text-gray-600">Help us provide the best protection</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Protection Level *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: 'standard', title: 'Standard', desc: '₦45-75k/day', detail: 'Basic protection' },
                      { value: 'advanced', title: 'Advanced', desc: '₦100-150k/day', detail: 'Enhanced security' },
                      { value: 'elite', title: 'Elite', desc: '₦200-350k/day', detail: 'Maximum protection' },
                    ].map((level) => (
                      <label key={level.value} className={`border-2 rounded-lg p-4 cursor-pointer ${
                        formData.protectionLevel === level.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}>
                        <input
                          type="radio"
                          name="protectionLevel"
                          value={level.value}
                          checked={formData.protectionLevel === level.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="font-medium">{level.title}</div>
                        <div className="text-sm text-primary-600 font-bold">{level.desc}</div>
                        <div className="text-xs text-gray-600">{level.detail}</div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Armed Security Required?
                    </label>
                    <select
                      name="armedSecurity"
                      value={formData.armedSecurity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                      <option value="depends">Depends on assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Protective Driving?
                    </label>
                    <select
                      name="drivingRequired"
                      value={formData.drivingRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Provided?
                    </label>
                    <select
                      name="vehicleProvided"
                      value={formData.vehicleProvided}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes, I'll provide</option>
                      <option value="need">Need vehicle rental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Risk Assessment
                  </label>
                  <select
                    name="riskLevel"
                    value={formData.riskLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="low">Low Risk - General precaution</option>
                    <option value="medium">Medium Risk - Known threats</option>
                    <option value="high">High Risk - Active threats</option>
                    <option value="unsure">Unsure - Need assessment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements or Instructions
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any specific needs, concerns, or instructions we should know..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about SCEND?
                  </label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend/Colleague Referral</option>
                    <option value="social-media">Social Media</option>
                    <option value="corporate-partner">Corporate Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Review and Submit */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-50 mb-2">Review Your Request</h2>
                  <p className="text-gray-600">Please review all details before submitting</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Client Name</div>
                      <div className="font-medium">{formData.fullName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Contact</div>
                      <div className="font-medium">{formData.email}</div>
                      <div className="text-sm">{formData.phone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Service Type</div>
                      <div className="font-medium capitalize">{formData.serviceType.replace('-', ' ')}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-medium capitalize">{formData.location}</div>
                      <div className="text-sm">{formData.specificLocation}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">{formData.startDate} to {formData.endDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Personnel</div>
                      <div className="font-medium">{formData.numberOfPersonnel} Officer(s)</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Protection Level</div>
                      <div className="font-medium capitalize">{formData.protectionLevel}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Armed Security</div>
                      <div className="font-medium capitalize">{formData.armedSecurity}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the <Link href="/terms" className="text-primary-600 hover:underline">Terms and Conditions</Link> and understand that all security personnel are verified and licensed.
                    </span>
                  </label>
                  {errors.agreedToTerms && (
                    <p className="text-sm text-red-600 flex items-center ml-6">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.agreedToTerms}
                    </p>
                  )}

                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="confidentialityAgreed"
                      checked={formData.confidentialityAgreed}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I acknowledge that all information provided is confidential and will be handled in accordance with <Link href="/privacy" className="text-primary-600 hover:underline">SCEND's Privacy Policy</Link>.
                    </span>
                  </label>
                  {errors.confidentialityAgreed && (
                    <p className="text-sm text-red-600 flex items-center ml-6">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.confidentialityAgreed}
                    </p>
                  )}
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary-600 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <strong>What happens next:</strong> Our security team will review your request and contact you within 2 hours with matched professionals, detailed pricing, and next steps. For urgent requests, call <strong>0800-111-2222</strong>.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition font-semibold shadow-lg"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-10 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
