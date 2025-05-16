
import Image from 'next/image';
import type { Course } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={course.image}
            alt={`Imagen del curso ${course.title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={course.imageHint}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-xl font-semibold mb-2">{course.title}</CardTitle>
          {course.shortDescription && (
            <CardDescription className="text-sm text-muted-foreground mb-3 h-10">
              {course.shortDescription}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <h4 className="text-sm font-medium mb-2 text-primary">Módulos destacados:</h4>
        <ul className="space-y-1.5 text-sm text-foreground/80 mb-4">
          {course.modules.slice(0, 3).map((module, index) => ( // Show first 3 modules
            <li key={index} className="flex items-center">
              {module.icon ? <module.icon className="h-4 w-4 mr-2 text-accent" /> : <CheckCircle2 className="h-4 w-4 mr-2 text-accent" />}
              <span>{module.name}</span>
            </li>
          ))}
          {course.modules.length > 3 && (
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-accent" />
              <span>y más...</span>
            </li>
          )}
        </ul>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2 text-accent" />
          <span>{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
           <Link href={`#contact-form?course=${encodeURIComponent(course.title)}`} scroll={false}>
            Más Información
           </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
