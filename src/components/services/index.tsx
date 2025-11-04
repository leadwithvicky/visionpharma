import React from 'react';
import TopCategories from '../home/TopCategories';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';

const Services = () => {
  return (
    <GoogleAnalyticsTemplate>
      <div className="py-8">
        <TopCategories />
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default Services;
