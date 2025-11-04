'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useApplyNowForm } from '@/hooks/useApplyNowForm';

const ApplyNowForm = () => {
  const { formik, fileInputRef, handlePhoneChange, handleFileChange } =
    useApplyNowForm();

  return (
    <Card className="bg-white/5 border-border">
      <CardHeader>
        <CardTitle className="text-2xl">Apply Now</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-white/5 border-border"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-sm text-red-500">{formik.errors.fullName}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-white/5 border-border"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formik.values.phone}
              onChange={handlePhoneChange}
              onBlur={formik.handleBlur}
              className="bg-white/5 border-border"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formik.values.gender}
              onValueChange={(value) => formik.setFieldValue('gender', value)}
            >
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formik.touched.gender && formik.errors.gender && (
              <p className="text-sm text-red-500">{formik.errors.gender}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="position">Job Applying For</Label>
            <Select
              value={formik.values.position}
              onValueChange={(value) => formik.setFieldValue('position', value)}
            >
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="Business Development Intern">
                  Business Development Intern
                </SelectItem>
                <SelectItem value="Hr Intern">HR Intern</SelectItem>
                <SelectItem value="Digital Marketing Specialist">
                  Digital Marketing Specialist
                </SelectItem>
                <SelectItem value="Mentor">Mentor</SelectItem>
              </SelectContent>
            </Select>
            {formik.touched.position && formik.errors.position && (
              <p className="text-sm text-red-500">{formik.errors.position}</p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="resume">Resume</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="bg-white/5 border-border"
            />
            {formik.touched.resume && formik.errors.resume && (
              <p className="text-sm text-red-500">{formik.errors.resume}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-purple-500 text-white hover:bg-purple-600"
          >
            {formik.isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplyNowForm;
