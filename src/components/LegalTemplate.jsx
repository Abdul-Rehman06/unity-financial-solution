import React from 'react';

const LegalTemplate = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-blue max-w-none text-text-charcoal space-y-6">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalTemplate;
