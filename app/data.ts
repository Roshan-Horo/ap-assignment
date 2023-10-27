const COURSE_URL = "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
const COURSE_TAG = "https://api.acharyaprashant.org/v2/legacy/courses/tags"
const COURSE_FAQ = "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english"

export async function getCourseSeries() {
   const res = await fetch(COURSE_URL)
   const data = await res.json()
   return data
}

export async function getCourseFAQ() {
    const res = await fetch(COURSE_FAQ)
    const data = await res.json()
    return data
}

export async function getCourseTag() {
    const res = await fetch(COURSE_TAG)
    const data = await res.json()
    return data
}