import { CURRICULUM_ROUTES, PROGRAMS_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';
import { useState, useEffect, useCallback } from 'react';

// Define types for our curriculum data structure
export interface WeekContent {
  title: string;
  topics: string[];
  handson: string;
  pdfFiles: FileInfo[];
  videoFiles: FileInfo[];
}

export interface FileInfo {
  filename: string;
  url: string;
  size: number;
  contentType: string;
}

export interface MonthContent {
  title: string;
  weeks: WeekContent[];
}

export interface CurriculumData {
  key: string;
  title: string;
  description: string;
  months: MonthContent[];
}

// Define type for form errors
export interface FormErrors {
  [key: string]: string;
}

// Helper function to create an empty week
const createEmptyWeek = (): WeekContent => ({
  title: '',
  topics: ['', '', '', ''],
  handson: '',
  pdfFiles: [],
  videoFiles: [],
});

// Helper function to create an empty month with weeks
const createEmptyMonth = (): MonthContent => ({
  title: '',
  weeks: Array(4)
    .fill(null)
    .map(() => createEmptyWeek()),
});

// Sample fallback data for when real data isn't available
const dummyData: CurriculumData = {
  key: 'programming-101',
  title: 'Programming 101: Intro to Web Development',
  description:
    'A comprehensive introduction to web development covering HTML, CSS, JavaScript and basic backend concepts.',
  months: [
    {
      title: 'HTML & CSS Fundamentals',
      weeks: [
        {
          title: 'Introduction to HTML',
          topics: [
            'HTML structure',
            'Basic tags',
            'HTML5 semantic elements',
            'Forms and inputs',
          ],
          handson: 'Create a personal profile page',
          pdfFiles: [
            {
              filename: 'html-basics.pdf',
              url: '/sample/html-basics.pdf',
              size: 1200000,
              contentType: 'application/pdf',
            },
          ],
          videoFiles: [
            {
              filename: 'html-intro.mp4',
              url: '/sample/html-intro.mp4',
              size: 15000000,
              contentType: 'video/mp4',
            },
          ],
        },
        {
          title: 'CSS Fundamentals',
          topics: ['CSS syntax', 'Selectors', 'Box model', 'Layouts'],
          handson: 'Style your profile page',
          pdfFiles: [
            {
              filename: 'css-basics.pdf',
              url: '/sample/css-basics.pdf',
              size: 1500000,
              contentType: 'application/pdf',
            },
          ],
          videoFiles: [],
        },
        {
          title: 'Responsive Design',
          topics: [
            'Media queries',
            'Flexbox',
            'CSS Grid',
            'Mobile-first approach',
          ],
          handson: 'Make your profile page responsive',
          pdfFiles: [],
          videoFiles: [],
        },
        {
          title: 'CSS Frameworks',
          topics: [
            'Bootstrap',
            'Tailwind CSS',
            'Material UI',
            'Component libraries',
          ],
          handson: 'Rebuild your profile with a CSS framework',
          pdfFiles: [],
          videoFiles: [],
        },
      ],
    },
    {
      title: 'JavaScript Essentials',
      weeks: [
        {
          title: 'JavaScript Basics',
          topics: ['Variables', 'Data types', 'Operators', 'Control flow'],
          handson: 'Simple calculator app',
          pdfFiles: [],
          videoFiles: [],
        },
        {
          title: 'Functions and Objects',
          topics: [
            'Function declaration',
            'Arrow functions',
            'Objects',
            'JSON',
          ],
          handson: 'To-do list app',
          pdfFiles: [],
          videoFiles: [],
        },
        {
          title: 'DOM Manipulation',
          topics: [
            'Selecting elements',
            'Events',
            'Creating elements',
            'Modifying the DOM',
          ],
          handson: 'Interactive form validation',
          pdfFiles: [],
          videoFiles: [],
        },
        {
          title: 'Asynchronous JavaScript',
          topics: ['Callbacks', 'Promises', 'Async/await', 'Fetch API'],
          handson: 'Weather app using a public API',
          pdfFiles: [],
          videoFiles: [],
        },
      ],
    },
  ],
};

const useCurriculum = (programSlug?: string | null) => {
  const isEditMode = Boolean(programSlug);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(isEditMode);

  const [curriculum, setCurriculum] = useState<CurriculumData>({
    key: programSlug || '',
    title: '',
    description: '',
    months: [createEmptyMonth(), createEmptyMonth()],
  });

  // Helper function to set deeply nested object properties
  const setNestedProperty = (obj: any, path: string[], value: any): any => {
    const newObj = { ...obj };
    let current = newObj;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      current[key] = Array.isArray(current[key])
        ? [...current[key]]
        : { ...current[key] };
      current = current[key];
    }

    current[path[path.length - 1]] = value;
    return newObj;
  };

  // Load existing curriculum data from the API
  const fetchCurriculum = useCallback(async (): Promise<void> => {
    if (!programSlug) return;

    setIsLoading(true);
    try {
      const response = await apiClient.get(
        `${CURRICULUM_ROUTES.base}?key=${encodeURIComponent(programSlug)}`
      );

      if (!response.data.success) {
        throw new Error('Failed to fetch curriculum data');
      }

      const result = await response.data;

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch curriculum data');
      }

      setCurriculum(result.data);
    } catch (err) {
      console.error('Error fetching curriculum:', err);
      setSubmitError(
        'Failed to load curriculum data. Using sample data instead.'
      );

      // Use dummy data when real data can't be fetched
      setCurriculum({
        ...dummyData,
        key: programSlug || dummyData.key,
      });
    } finally {
      setIsLoading(false);
    }
  }, [programSlug]);

  // Validate form fields
  const validateCurriculum = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    // Validate basic course info
    if (!curriculum?.title.trim()) {
      newErrors.title = 'Course title is required';
    }

    if (!curriculum?.description.trim()) {
      newErrors.description = 'Course description is required';
    }

    if (!curriculum?.key.trim()) {
      newErrors.key = 'Course key is required';
    }

    // Validate month titles and week titles
    curriculum?.months.forEach((month, monthIndex) => {
      if (!month.title.trim()) {
        newErrors[`month_${monthIndex}_title`] = `Month ${
          monthIndex + 1
        } title is required`;
      }

      month.weeks.forEach((week, weekIndex) => {
        if (!week.title.trim()) {
          newErrors[`month_${monthIndex}_week_${weekIndex}_title`] = `Week ${
            weekIndex + 1
          } in Month ${monthIndex + 1} title is required`;
        }
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [curriculum]);

  // Handle curriculum creation or update
  const saveCurriculum = useCallback(async (): Promise<void> => {
    if (!validateCurriculum()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Prepare the data for submission
      const formData = new FormData();

      // Create a clean version of curriculum without file objects for JSON serialization
      const curriculumDataCopy = JSON.parse(JSON.stringify(curriculum));

      // Remove local file objects since they can't be JSON serialized and will be handled separately
      curriculum.months.forEach((month, monthIndex) => {
        month.weeks.forEach((week, weekIndex) => {
          // Only keep existing file references (with URLs) and remove File objects
          curriculumDataCopy.months[monthIndex].weeks[weekIndex].pdfFiles =
            week.pdfFiles.filter((file) => !(file instanceof File));

          curriculumDataCopy.months[monthIndex].weeks[weekIndex].videoFiles =
            week.videoFiles.filter((file) => !(file instanceof File));
        });
      });

      formData.append('data', JSON.stringify(curriculumDataCopy));

      // Append all new files with unique identifiers
      curriculum.months.forEach((month, monthIndex) => {
        month.weeks.forEach((week, weekIndex) => {
          // Append PDF files that are actual File objects
          week.pdfFiles.forEach((file, fileIndex) => {
            if (file instanceof File) {
              formData.append(
                `month_${monthIndex}_week_${weekIndex}_pdf_${fileIndex}`,
                file
              );
            }
          });

          // Append video files that are actual File objects
          week.videoFiles.forEach((file, fileIndex) => {
            if (file instanceof File) {
              formData.append(
                `month_${monthIndex}_week_${weekIndex}_video_${fileIndex}`,
                file
              );
            }
          });
        });
      });

      // Send to API
      const response = await apiClient.post(
        `${PROGRAMS_ROUTES.curriculum}`,
        formData
        //    {
        //   method: 'POST',
        //   body: formData,
        // }
      );

      const result = await response.data;

      if (!response.data.success || !result.success) {
        throw new Error(result.message || 'Failed to save curriculum');
      }

      setSubmitSuccess(true);
      console.log('Curriculum data submitted successfully:', result.data);

      // If it's a new curriculum, you might want to redirect to edit mode
      if (!isEditMode) {
        // Use router or other navigation method to redirect
        // e.g. router.push(`/admin/curriculum/${curriculum.key}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred while saving the curriculum';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }, [curriculum, validateCurriculum, isEditMode]);

  // Handle form field changes
  const handleFieldChange = useCallback(
    (path: string | string[], value: any): void => {
      if (typeof path === 'string') {
        // Handle simple fields like title, description, key
        setCurriculum((prev) => ({ ...prev, [path]: value }));
      } else if (Array.isArray(path)) {
        // Handle nested fields like months, weeks, topics, etc.
        setCurriculum((prev) => setNestedProperty(prev, path, value));
      }

      // Clear errors for the field that changed
      const fieldName = Array.isArray(path) ? path.join('_') : path;
      if (errors[fieldName]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }
    },
    [setCurriculum, setErrors, errors]
  );

  // Handle file uploads (PDF and video)
  const handleFileChange = useCallback(
    (
      files: FileList | null,
      monthIndex: number,
      weekIndex: number,
      fileType: 'pdf' | 'video'
    ): void => {
      if (!files || files.length === 0) return;

      const filesKey = fileType === 'pdf' ? 'pdfFiles' : 'videoFiles';
      const errorKey = `month_${monthIndex}_week_${weekIndex}_${filesKey}`;

      const validFiles: File[] = [];
      const newErrors: FormErrors = {};

      // Validate files based on type
      Array.from(files).forEach((file) => {
        if (fileType === 'pdf') {
          if (file.type !== 'application/pdf') {
            newErrors[errorKey] = 'Only PDF files are allowed';
          } else if (file.size > 10 * 1024 * 1024) {
            newErrors[errorKey] = 'Each PDF file must be less than 10MB';
          } else {
            validFiles.push(file);
          }
        } else if (fileType === 'video') {
          const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
          if (!validVideoTypes.includes(file.type)) {
            newErrors[errorKey] =
              'Only MP4, WebM, and OGG video formats are allowed';
          } else if (file.size > 100 * 1024 * 1024) {
            newErrors[errorKey] = 'Each video file must be less than 100MB';
          } else {
            validFiles.push(file);
          }
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors((prev) => ({ ...prev, ...newErrors }));
        return;
      }

      // Clear previous errors
      if (errors[errorKey]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[errorKey];
          return updated;
        });
      }

      // Update files
      setCurriculum((prev) => {
        const newCurriculum = { ...prev };
        const month = { ...prev.months[monthIndex] };
        const week = { ...month.weeks[weekIndex] };

        // Add new files to the existing array
        week[filesKey] = [
          ...week[filesKey],
          ...validFiles.map((file) => ({
            url: 'https://www.youtube.com/watch?v=OG9v7fXEreI&ab_channel=mastkalandr',
            // Temporarily store the File object directly - it will be handled during upload
            ...file,
            filename: file.name,
            size: file.size,
            contentType: file.type,
          })),
        ];

        month.weeks = [...month.weeks];
        month.weeks[weekIndex] = week;

        newCurriculum.months = [...prev.months];
        newCurriculum.months[monthIndex] = month;

        return newCurriculum;
      });
    },
    [errors]
  );

  // Handle topic changes
  const handleTopicChange = useCallback(
    (
      monthIndex: number,
      weekIndex: number,
      topicIndex: number,
      value: string
    ): void => {
      setCurriculum((prev) => {
        const newCurriculum = { ...prev };
        const newMonths = [...prev.months];
        const newMonth = { ...newMonths[monthIndex] };
        const newWeeks = [...newMonth.weeks];
        const newWeek = { ...newWeeks[weekIndex] };
        const newTopics = [...newWeek.topics];

        newTopics[topicIndex] = value;
        newWeek.topics = newTopics;
        newWeeks[weekIndex] = newWeek;
        newMonth.weeks = newWeeks;
        newMonths[monthIndex] = newMonth;
        newCurriculum.months = newMonths;

        return newCurriculum;
      });
    },
    []
  );

  // Remove a file (PDF or video)
  const removeFile = useCallback(
    (
      monthIndex: number,
      weekIndex: number,
      fileType: 'pdf' | 'video',
      fileIndex: number
    ): void => {
      const filesKey = fileType === 'pdf' ? 'pdfFiles' : 'videoFiles';

      setCurriculum((prev) => {
        const newCurriculum = { ...prev };
        const newMonths = [...prev.months];
        const newMonth = { ...newMonths[monthIndex] };
        const newWeeks = [...newMonth.weeks];
        const newWeek = { ...newWeeks[weekIndex] };

        newWeek[filesKey] = newWeek[filesKey].filter((_, i) => i !== fileIndex);

        newWeeks[weekIndex] = newWeek;
        newMonth.weeks = newWeeks;
        newMonths[monthIndex] = newMonth;
        newCurriculum.months = newMonths;

        return newCurriculum;
      });
    },
    []
  );

  // Load curriculum data on component mount if in edit mode
  useEffect(() => {
    if (isEditMode) {
      fetchCurriculum();
    } else {
      // If not in edit mode and no data is loaded, use dummy data
      setCurriculum({
        ...dummyData,
        key: '', // Empty key for new curriculum
      });
    }
  }, [fetchCurriculum, isEditMode]);

  return {
    curriculum,
    isLoading,
    isSubmitting,
    submitError,
    submitSuccess,
    errors,
    isEditMode,
    setCurriculum,
    handleFieldChange,
    handleFileChange,
    handleTopicChange,
    removeFile,
    validateCurriculum,
    saveCurriculum,
    setErrors,
  };
};

export default useCurriculum;

const curriculumData = {
  slug: 'programming-101',
  title: 'Programming 101: Intro to Web Development',
  description:
    'A comprehensive introduction to web development covering HTML, CSS, JavaScript and basic backend concepts.',
  weeks: [
    {
      title: 'Introduction to HTML',
      subTitle: 'Week 1',
      videos: [
        {
          title: 'HTML Structure',
          url: 'https://www.youtube.com/watch?v=OG9v7fXEreI&ab_channel=mastkalandr',
        },
      ],
      pdfs: [
        {
          title: 'HTML Basics',
          url: 'https://www.youtube.com/watch?v=OG9v7fXEreI&ab_channel=mastkalandr',
        },
      ],
      test: 'might be added from manage aptitude section where where create or update aptitude section',
    },
    {
      title: 'CSS Fundamentals',
      subTitle: 'Week 2',
      videos: [
        {
          title: 'CSS Fundamentals',
          url: 'https://www.youtube.com/watch?v=OG9v7fXEreI&ab_channel=mastkalandr',
        },
      ],
      pdfs: [
        {
          title: 'CSS Basics',
          url: 'https://www.youtube.com/watch?v=OG9v7fXEreI&ab_channel=mastkalandr',
        },
      ],
      test: 'might be added from manage aptitude section where where create or update aptitude section',
    },
  ],
};
