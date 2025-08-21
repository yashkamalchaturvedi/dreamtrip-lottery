import React, { useState } from 'react';
import { X, Upload, CheckCircle, AlertCircle, Camera, FileText, User, Phone } from 'lucide-react';

interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KYCModal: React.FC<KYCModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    documentType: 'aadhaar',
    documentNumber: '',
    phoneNumber: '',
    otp: '',
    frontImage: null as File | null,
    backImage: null as File | null,
    selfieImage: null as File | null
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const steps = [
    { id: 1, title: 'Document Selection', icon: FileText },
    { id: 2, title: 'Document Upload', icon: Upload },
    { id: 3, title: 'Phone Verification', icon: Phone },
    { id: 4, title: 'Selfie Verification', icon: Camera },
    { id: 5, title: 'Review & Submit', icon: CheckCircle }
  ];

  const handleFileUpload = (type: 'front' | 'back' | 'selfie', file: File) => {
    setFormData(prev => ({
      ...prev,
      [`${type}Image`]: file
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    alert('KYC submitted successfully! We\'ll review your documents within 24-48 hours.');
    onClose();
  };

  const sendOTP = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsProcessing(false);
    alert('OTP sent to your mobile number!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">KYC Verification</h2>
            <p className="text-gray-600">Step {currentStep} of 5</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  step.id <= currentStep ? 'text-yellow-500' : 'text-gray-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step.id <= currentStep
                    ? 'border-yellow-500 bg-yellow-500 text-white'
                    : 'border-gray-300'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs mt-2 text-center">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Document Type</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="documentType"
                    value="aadhaar"
                    checked={formData.documentType === 'aadhaar'}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentType: e.target.value }))}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Aadhaar Card</div>
                    <div className="text-sm text-gray-600">For Indian residents</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="documentType"
                    value="passport"
                    checked={formData.documentType === 'passport'}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentType: e.target.value }))}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Passport</div>
                    <div className="text-sm text-gray-600">International document</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="documentType"
                    value="driving_license"
                    checked={formData.documentType === 'driving_license'}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentType: e.target.value }))}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Driving License</div>
                    <div className="text-sm text-gray-600">Valid government-issued license</div>
                  </div>
                </label>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.documentNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, documentNumber: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter document number"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Upload Document Images</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document Front Side
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('front', file);
                      }}
                      className="hidden"
                    />
                  </div>
                  {formData.frontImage && (
                    <div className="mt-2 flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{formData.frontImage.name}</span>
                    </div>
                  )}
                </div>

                {formData.documentType !== 'passport' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Document Back Side
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload('back', file);
                        }}
                        className="hidden"
                      />
                    </div>
                    {formData.backImage && (
                      <div className="mt-2 flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formData.backImage.name}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Phone Verification</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="+91 9876543210"
                    />
                    <button
                      onClick={sendOTP}
                      disabled={isProcessing || !formData.phoneNumber}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Sending...' : 'Send OTP'}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.otp}
                    onChange={(e) => setFormData(prev => ({ ...prev, otp: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-center text-lg tracking-wider"
                    placeholder="------"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Selfie Verification</h3>
              <div className="text-center">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-yellow-500 transition-colors">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Take a clear selfie</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Make sure your face is clearly visible and matches your document
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload('selfie', file);
                    }}
                    className="hidden"
                    id="selfie-upload"
                  />
                  <label
                    htmlFor="selfie-upload"
                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer inline-block"
                  >
                    Take Selfie
                  </label>
                </div>
                {formData.selfieImage && (
                  <div className="mt-4 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Selfie captured successfully</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Review & Submit</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Document Information</h4>
                  <div className="text-sm space-y-1">
                    <div>Document Type: <span className="capitalize">{formData.documentType.replace('_', ' ')}</span></div>
                    <div>Document Number: {formData.documentNumber}</div>
                    <div>Phone Number: {formData.phoneNumber}</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Uploaded Files</h4>
                  <div className="text-sm space-y-1">
                    {formData.frontImage && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Document front side
                      </div>
                    )}
                    {formData.backImage && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Document back side
                      </div>
                    )}
                    {formData.selfieImage && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Selfie verification
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium text-blue-800">Important Notes:</div>
                      <ul className="text-blue-700 mt-1 space-y-1">
                        <li>• Verification typically takes 24-48 hours</li>
                        <li>• You'll receive an email notification once approved</li>
                        <li>• Make sure all documents are clear and readable</li>
                        <li>• Contact support if you need to update any information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-6 border-t bg-gray-50">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <div className="flex space-x-3">
            {currentStep < 5 ? (
              <button
                onClick={handleNext}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Submit for Review</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCModal;