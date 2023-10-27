import type { MetaFunction } from "@remix-run/node";
import { Button } from "@components/button"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import {getCourseFAQ, getCourseSeries} from "../data"
import CourseFAQ from "~/components/faq";
import RelatedVideos from "~/components/relatedVideos";
import CourseVideos from "~/components/courses";
import CourseInto from "~/components/intro";
import Divider from "~/components/divider";
import Breadcrumb from "~/components/breadcrumbs";

export const meta: MetaFunction = () => {
  return [
    { title: "Assignment" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const pages = [
  { name: 'Video Series', href: '#', current: false },
  { name: 'संतवाणी', href: '#', current: true },
]

export const loader = async () => {
  const courses = await getCourseSeries();
  const faqs = await getCourseFAQ()

  return {courses, faqs}
}

export default function Index() {
  const {courses, faqs} = useLoaderData<typeof loader>();

  return (
    <div className="w-screen">
      <div className="md:container md:mx-auto m-2">
       <Breadcrumb pages={pages} />
      </div>

      <div className="md:container md:mx-auto">
       <CourseInto details={courses.details} />
      </div>

      <div className="md:container md:mx-auto">
        <Divider value={`Video Series (${courses.courses.length})`} />
        <CourseVideos courses={courses.courses} />
      </div>

      <div className="md:container md:mx-auto">
        <Divider value={"Other Helpful Video Series"} />
        <RelatedVideos videos={courses.relatedContent} />
      </div>

      <div className="md:container md:mx-auto">
        <Divider value={"FAQs"} />
        <CourseFAQ faqs={faqs} />
      </div>
    </div>

  );
}
