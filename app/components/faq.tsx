import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@components/ui/accordion"

import {getCourseFAQ} from "../data"
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    return getCourseFAQ();
  }

type FAQ = {
    question: string,
    answer: string
}

export default function CourseFAQ({faqs}: {faqs: FAQ[]}){
    const data = useLoaderData<typeof loader>()
    console.log('data faq: ', faqs)

    return (
        <>
        <div className="px-2">
            <Accordion type="single" collapsible>
            {
                faqs?.map((faq: {question: string, answer: string}) => (
                    <AccordionItem value={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            } 
        </Accordion>
        </div>
      </>
    )
}
