import React from 'react';
import { 
  Shield, 
  FileText, 
  Award, 
  Globe, 
  Lock, 
  Users, 
  CheckCircle, 
  Download,
  ExternalLink,
  Scale,
  Eye,
  Calendar
} from 'lucide-react';

const Compliance: React.FC = () => {
  const licenses = [
    {
      authority: "Dubai Tourism Authority",
      license: "DTA-LOT-2024-001",
      issued: "March 15, 2024",
      expires: "March 15, 2027",
      status: "Active",
      region: "UAE"
    },
    {
      authority: "Reserve Bank of India",
      license: "FEMA-COMP-2024-789",
      issued: "April 1, 2024", 
      expires: "April 1, 2026",
      status: "Active",
      region: "India"
    },
    {
      authority: "Gaming Control Board",
      license: "GCB-INT-2024-456",
      issued: "February 20, 2024",
      expires: "February 20, 2025",
      status: "Active", 
      region: "International"
    }
  ];

  const auditReports = [
    {
      month: "December 2024",
      participants: "15,234",
      coupons: "45,678",
      winner: "Verified",
      auditor: "PwC Dubai",
      status: "Published"
    },
    {
      month: "November 2024", 
      participants: "14,567",
      coupons: "42,890",
      winner: "Verified",
      auditor: "PwC Dubai",
      status: "Published"
    },
    {
      month: "October 2024",
      participants: "13,890",
      coupons: "38,234", 
      winner: "Verified",
      auditor: "PwC Dubai",
      status: "Published"
    }
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "GDPR compliant data handling with advanced encryption and secure storage protocols."
    },
    {
      icon: Lock,
      title: "Financial Security",
      description: "FEMA compliant transactions with regulated payment processors and transparent fund management."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Public audit trails, winner verification, and real-time draw monitoring systems."
    },
    {
      icon: Users,
      title: "Fair Play",
      description: "Equal opportunity for all participants with independent oversight and random number generation."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Full compliance with Dubai, Indian, and international gambling regulations."
    },
    {
      icon: Award,
      title: "Certified Operations",
      description: "Regular third-party audits and certifications from recognized gaming authorities."
    }
  ];

  const securityMeasures = [
    "256-bit SSL encryption for all data transmission",
    "PCI DSS Level 1 compliant payment processing", 
    "Multi-factor authentication for all user accounts",
    "Regular security audits and penetration testing",
    "Segregated client funds in regulated bank accounts",
    "Real-time fraud detection and prevention systems",
    "Blockchain-based draw verification for transparency",
    "24/7 security monitoring and incident response"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Transparency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We operate under strict regulatory oversight to ensure fairness, security, and legal compliance across all jurisdictions.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Compliant</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Licenses</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <FileText className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-sm text-gray-600">Audit Reports</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">2+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>

        {/* Licenses Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-yellow-500 mr-3" />
            Official Licenses & Authorizations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <div key={index} className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {license.status}
                  </span>
                  <span className="text-sm text-gray-600">{license.region}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{license.authority}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">License ID:</span>
                    <span className="font-mono">{license.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Issued:</span>
                    <span>{license.issued}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expires:</span>
                    <span>{license.expires}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify License</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Compliance Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Reports */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="w-8 h-8 text-blue-500 mr-3" />
              Monthly Audit Reports
            </h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download All</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Draw Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participants
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Coupons
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Winner Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Auditor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {auditReports.map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {report.month}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.participants}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.coupons}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {report.winner}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {report.auditor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Measures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 text-green-500 mr-3" />
              Security Measures
            </h2>
            <ul className="space-y-3">
              {securityMeasures.map((measure, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{measure}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-500 mr-3" />
              Transparency Reports
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Draw Process Documentation</h3>
                  <span className="text-green-600 text-sm">Live</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Real-time documentation of our draw process with blockchain verification.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Live Process →
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Winner Verification System</h3>
                  <span className="text-blue-600 text-sm">Public</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Independent verification of all winners with public audit trails.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Verify Winners →
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Fund Management</h3>
                  <span className="text-purple-600 text-sm">Audited</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Segregated prize funds held in regulated escrow accounts.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Fund Reports →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Partners */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Regulatory Partners & Oversight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Dubai Tourism Authority</h3>
              <p className="text-blue-100 text-sm">
                Primary licensing authority overseeing all lottery operations in Dubai jurisdiction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Reserve Bank of India</h3>
              <p className="text-blue-100 text-sm">
                FEMA compliance oversight for Indian participant transactions and fund transfers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">PwC Dubai</h3>
              <p className="text-blue-100 text-sm">
                Independent auditing firm conducting monthly compliance reviews and draw verification.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Documentation */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Terms of Service", updated: "Jan 2025" },
              { name: "Privacy Policy", updated: "Jan 2025" },
              { name: "Draw Rules", updated: "Dec 2024" },
              { name: "KYC Policy", updated: "Dec 2024" },
              { name: "Anti-Money Laundering", updated: "Nov 2024" },
              { name: "Responsible Gaming", updated: "Nov 2024" },
              { name: "Dispute Resolution", updated: "Oct 2024" },
              { name: "Cookie Policy", updated: "Oct 2024" }
            ].map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-500">{doc.updated}</span>
                </div>
                <h3 className="font-medium text-sm mb-2">{doc.name}</h3>
                <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Read Document →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Compliance */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our compliance team is available to address any questions about our regulatory framework, security measures, or audit processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Contact Compliance Team
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Request Audit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;