import { useEffect, useState } from 'react';
import { useSampleCurriculum } from '@/hooks/useSampleCurriculum';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Video } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface ProgramCurriculumViewProps {
  programId: string;
}

const ProgramCurriculumView: React.FC<ProgramCurriculumViewProps> = ({
  programId,
}) => {
  const { fetchByProgramId, curriculum, isLoading, error } =
    useSampleCurriculum();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (programId && !loaded) {
      fetchByProgramId(programId);
      setLoaded(true);
    }
  }, [programId, fetchByProgramId, loaded]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">
            Error Loading Curriculum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!curriculum || !curriculum.weeks || curriculum.weeks.length === 0) {
    return (
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle>No Curriculum Available</CardTitle>
          <CardDescription>
            This program doesn&apos;t have a curriculum yet.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{curriculum.title}</h2>
        <p className="text-gray-600 mt-2">{curriculum.description}</p>
      </div>

      <Accordion type="single" collapsible className="border rounded-md">
        {curriculum.weeks.map((week, weekIndex) => (
          <AccordionItem key={weekIndex} value={`week-${weekIndex}`}>
            <AccordionTrigger className="px-4 hover:no-underline hover:bg-gray-50">
              <div className="text-left">
                <h3 className="font-semibold">{week.title}</h3>
                <p className="text-sm text-gray-500">{week.subTitle}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="space-y-4">
                {/* Videos */}
                {week.videos && week.videos.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">
                      Video Materials
                    </h4>
                    <ul className="space-y-2">
                      {week.videos.map((video, vIndex) => (
                        <li
                          key={vIndex}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50"
                        >
                          <Video className="h-4 w-4 text-blue-600" />
                          <span>{video.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* PDFs */}
                {week.pdfs && week.pdfs.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">
                      PDF Materials
                    </h4>
                    <ul className="space-y-2">
                      {week.pdfs.map((pdf, pIndex) => (
                        <li
                          key={pIndex}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50"
                        >
                          <FileText className="h-4 w-4 text-red-600" />
                          <span>{pdf.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Test Link */}
                {week.test && (
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium">
                      This week has a test available.
                    </p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProgramCurriculumView;
