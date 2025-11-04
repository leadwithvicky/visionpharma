import React from 'react';

const RefundPolicy = () => {
  const policies = [
    {
      title: 'General Refund Policy',
      content:
        'All purchases made at VisionTech are final, and refunds are not applicable. This includes but is not limited to online programs, digital content, software, and services. We encourage our customers to carefully review our offerings before completing any transaction to ensure they select the appropriate product or service.',
    },
    {
      title: 'Transfer Policy',
      content:
        'If a purchase is made accidentally, we offer a one-time transfer to another batch of equal value within 10 days of the original purchase. The request for transfer must be submitted in writing to our support team at support@visiontech.world. Transfers are subject to availability, and VisionTech reserves the right to decline a transfer request if deemed necessary.',
    },
    {
      title: 'Exceptional Circumstances',
      content:
        'In rare cases, VisionTech may consider a refund request under exceptional circumstances, such as:',
      list: [
        'Duplicate transactions due to technical errors',
        'Unauthorized payments due to fraud (subject to verification and proof of fraud)',
        "Inability to access the purchased service due to VisionTech's system failure",
      ],
      additional:
        "Any such refund request must be made within 10 days of purchase and will be evaluated on a case-by-case basis at VisionTech's sole discretion.",
    },
    {
      title: 'No Refund for Partially Used Services',
      content:
        'If a customer has accessed or used any portion of the purchased service, they will not be eligible for a refund or transfer.',
    },
    {
      title: 'Chargebacks & Dispute Resolution',
      content:
        'Initiating a chargeback or payment dispute without first contacting VisionTech for resolution may result in permanent suspension of access to our services. If you believe there has been an error with your transaction, please contact us immediately at support@visiontech.world for assistance.',
    },
    {
      title: 'Changes to the Refund Policy',
      content:
        'VisionTech reserves the right to modify this refund policy at any time without prior notice. Any changes will be updated on our official website and will be effective from the date of publication.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-8 text-gray-600">
        At VisionTech, we strive to deliver high-quality products and services
        that meet our customers&lsquo; expectations. To maintain transparency
        and fairness, we have established the following refund policy. By making
        a purchase with VisionTech, you agree to the terms outlined below.
      </p>

      <div className="space-y-8">
        {policies.map((policy, index) => (
          <section
            key={index}
            className="border-b border-gray-200 pb-6 last:border-0"
          >
            <h2 className="text-xl font-semibold mb-3">{`${index + 1}. ${
              policy.title
            }`}</h2>
            <p className="text-gray-600 mb-2">{policy.content}</p>
            {policy.list && (
              <ul className="list-disc pl-6 mb-2 text-gray-600">
                {policy.list.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {policy.additional && (
              <p className="text-gray-600">{policy.additional}</p>
            )}
          </section>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        For further inquiries regarding our refund policy, please contact our
        customer support team at{' '}
        <a
          href="mailto:support@visiontech.world"
          className="text-blue-600 hover:text-blue-800"
        >
          support@visiontech.world
        </a>
        . We appreciate your trust in VisionTech and are committed to delivering
        the best experience for our customers.
      </p>
      <footer className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>Last Updated: February 20, 2025</p>
        <p>VisionTech PVT LTD</p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
