import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import ApplyNowForm from './apply-now';
import GoogleAnalyticsTemplate from '@/components/Google.Analytics.Template';

const JobDescription = ({
  title,
  location,
  experience,
  aboutRole,
  whatYouDo,
  whatWeNeed,
  qualification,
}: {
  title: string;
  location: string;
  experience: string;
  aboutRole: string;
  whatYouDo: string[];
  whatWeNeed: string[];
  qualification: string[];
}) => {
  return (
    <GoogleAnalyticsTemplate>
      <div className="">
        <div className="max-w-screen-2xl mx-auto sm:px-8 px-4 py-8 flex flex-col gap-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mx-auto w-full text-center">
            {title}
          </p>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {/* Role Details */}
            <Card className=" bg-white/5 border-border backdrop-blur-sm p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded-lg bg-white/5">
                    <p className="text-foreground/95">Location</p>
                    <p className="text-foreground/95">{location}</p>
                  </div>
                  <div className="rounded-lg">
                    <p className=" text-foreground/95">Experience</p>
                    <p className="text-foreground/95">{experience}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Job Summary</h4>
                  <p className="text-foreground/95">{aboutRole}</p>
                </div>

                <div className="">
                  <h4 className="font-semibold">{`Responsibilities`}</h4>
                  <ul className="space-y-2 text-gray-700">
                    {whatYouDo.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-foreground/95"
                      >
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* Qualifications: */}
                  <h4 className="font-semibold">{`Skills`}</h4>
                  <ul className="space-y-2 text-foreground/95">
                    {whatWeNeed.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* Qualifications: */}
                  <h4 className="font-semibold">{`Qualifications`}</h4>
                  <ul className="space-y-2 text-foreground/95">
                    {qualification.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Application Form */}

            <ApplyNowForm />
          </div>
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default JobDescription;
